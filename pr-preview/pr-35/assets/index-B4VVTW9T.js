(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function uN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ig={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function dN(){if(I1)return Xl;I1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:e,type:i,key:u,ref:a!==void 0?a:null,props:l}}return Xl.Fragment=t,Xl.jsx=n,Xl.jsxs=n,Xl}var D1;function fN(){return D1||(D1=1,ig.exports=dN()),ig.exports}var _=fN(),sg={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1;function hN(){if(O1)return Pe;O1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,D={};function R(O,X,le){this.props=O,this.context=X,this.refs=D,this.updater=le||S}R.prototype.isReactComponent={},R.prototype.setState=function(O,X){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,X,"setState")},R.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=R.prototype;function L(O,X,le){this.props=O,this.context=X,this.refs=D,this.updater=le||S}var x=L.prototype=new I;x.constructor=L,w(x,R.prototype),x.isPureReactComponent=!0;var A=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},C=Object.prototype.hasOwnProperty;function P(O,X,le,ie,de,me){return le=me.ref,{$$typeof:e,type:O,key:X,ref:le!==void 0?le:null,props:me}}function V(O,X){return P(O.type,X,void 0,void 0,void 0,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function B(O){var X={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return X[le]})}var z=/\/+/g;function G(O,X){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):X.toString(36)}function F(){}function K(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(X){O.status==="pending"&&(O.status="fulfilled",O.value=X)},function(X){O.status==="pending"&&(O.status="rejected",O.reason=X)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ue(O,X,le,ie,de){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case e:case t:pe=!0;break;case g:return pe=O._init,ue(pe(O._payload),X,le,ie,de)}}if(pe)return de=de(O),pe=ie===""?"."+G(O,0):ie,A(de)?(le="",pe!=null&&(le=pe.replace(z,"$&/")+"/"),ue(de,X,le,"",function(De){return De})):de!=null&&(H(de)&&(de=V(de,le+(de.key==null||O&&O.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),X.push(de)),1;pe=0;var Ae=ie===""?".":ie+":";if(A(O))for(var be=0;be<O.length;be++)ie=O[be],me=Ae+G(ie,be),pe+=ue(ie,X,le,me,de);else if(be=v(O),typeof be=="function")for(O=be.call(O),be=0;!(ie=O.next()).done;)ie=ie.value,me=Ae+G(ie,be++),pe+=ue(ie,X,le,me,de);else if(me==="object"){if(typeof O.then=="function")return ue(K(O),X,le,ie,de);throw X=String(O),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function U(O,X,le){if(O==null)return O;var ie=[],de=0;return ue(O,ie,"","",function(me){return X.call(le,me,de++)}),ie}function ee(O){if(O._status===-1){var X=O._result;X=X(),X.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=X)}if(O._status===1)return O._result.default;throw O._result}var ne=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function oe(){}return Pe.Children={map:U,forEach:function(O,X,le){U(O,function(){X.apply(this,arguments)},le)},count:function(O){var X=0;return U(O,function(){X++}),X},toArray:function(O){return U(O,function(X){return X})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pe.Component=R,Pe.Fragment=n,Pe.Profiler=a,Pe.PureComponent=L,Pe.StrictMode=i,Pe.Suspense=h,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},Pe.cache=function(O){return function(){return O.apply(null,arguments)}},Pe.cloneElement=function(O,X,le){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ie=w({},O.props),de=O.key,me=void 0;if(X!=null)for(pe in X.ref!==void 0&&(me=void 0),X.key!==void 0&&(de=""+X.key),X)!C.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(ie[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];ie.children=Ae}return P(O.type,de,void 0,void 0,me,ie)},Pe.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Pe.createElement=function(O,X,le){var ie,de={},me=null;if(X!=null)for(ie in X.key!==void 0&&(me=""+X.key),X)C.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=X[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(O&&O.defaultProps)for(ie in pe=O.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return P(O,me,void 0,void 0,null,de)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:f,render:O}},Pe.isValidElement=H,Pe.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ee}},Pe.memo=function(O,X){return{$$typeof:p,type:O,compare:X===void 0?null:X}},Pe.startTransition=function(O){var X=N.T,le={};N.T=le;try{var ie=O(),de=N.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(oe,ne)}catch(me){ne(me)}finally{N.T=X}},Pe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},Pe.use=function(O){return N.H.use(O)},Pe.useActionState=function(O,X,le){return N.H.useActionState(O,X,le)},Pe.useCallback=function(O,X){return N.H.useCallback(O,X)},Pe.useContext=function(O){return N.H.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O,X){return N.H.useDeferredValue(O,X)},Pe.useEffect=function(O,X,le){var ie=N.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(O,X)},Pe.useId=function(){return N.H.useId()},Pe.useImperativeHandle=function(O,X,le){return N.H.useImperativeHandle(O,X,le)},Pe.useInsertionEffect=function(O,X){return N.H.useInsertionEffect(O,X)},Pe.useLayoutEffect=function(O,X){return N.H.useLayoutEffect(O,X)},Pe.useMemo=function(O,X){return N.H.useMemo(O,X)},Pe.useOptimistic=function(O,X){return N.H.useOptimistic(O,X)},Pe.useReducer=function(O,X,le){return N.H.useReducer(O,X,le)},Pe.useRef=function(O){return N.H.useRef(O)},Pe.useState=function(O){return N.H.useState(O)},Pe.useSyncExternalStore=function(O,X,le){return N.H.useSyncExternalStore(O,X,le)},Pe.useTransition=function(){return N.H.useTransition()},Pe.version="19.1.1",Pe}var N1;function mh(){return N1||(N1=1,sg.exports=hN()),sg.exports}var T=mh();const oa=uN(T);var ag={exports:{}},Zl={},og={exports:{}},lg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1;function pN(){return M1||(M1=1,(function(e){function t(U,ee){var ne=U.length;U.push(ee);e:for(;0<ne;){var oe=ne-1>>>1,O=U[oe];if(0<a(O,ee))U[oe]=ee,U[ne]=O,ne=oe;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var ee=U[0],ne=U.pop();if(ne!==ee){U[0]=ne;e:for(var oe=0,O=U.length,X=O>>>1;oe<X;){var le=2*(oe+1)-1,ie=U[le],de=le+1,me=U[de];if(0>a(ie,ne))de<O&&0>a(me,ie)?(U[oe]=me,U[de]=ne,oe=de):(U[oe]=ie,U[le]=ne,oe=le);else if(de<O&&0>a(me,ne))U[oe]=me,U[de]=ne,oe=de;else break e}}return ee}function a(U,ee){var ne=U.sortIndex-ee.sortIndex;return ne!==0?ne:U.id-ee.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,y=null,v=3,S=!1,w=!1,D=!1,R=!1,I=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function A(U){for(var ee=n(p);ee!==null;){if(ee.callback===null)i(p);else if(ee.startTime<=U)i(p),ee.sortIndex=ee.expirationTime,t(h,ee);else break;ee=n(p)}}function N(U){if(D=!1,A(U),!w)if(n(h)!==null)w=!0,C||(C=!0,G());else{var ee=n(p);ee!==null&&ue(N,ee.startTime-U)}}var C=!1,P=-1,V=5,H=-1;function B(){return R?!0:!(e.unstable_now()-H<V)}function z(){if(R=!1,C){var U=e.unstable_now();H=U;var ee=!0;try{e:{w=!1,D&&(D=!1,L(P),P=-1),S=!0;var ne=v;try{t:{for(A(U),y=n(h);y!==null&&!(y.expirationTime>U&&B());){var oe=y.callback;if(typeof oe=="function"){y.callback=null,v=y.priorityLevel;var O=oe(y.expirationTime<=U);if(U=e.unstable_now(),typeof O=="function"){y.callback=O,A(U),ee=!0;break t}y===n(h)&&i(h),A(U)}else i(h);y=n(h)}if(y!==null)ee=!0;else{var X=n(p);X!==null&&ue(N,X.startTime-U),ee=!1}}break e}finally{y=null,v=ne,S=!1}ee=void 0}}finally{ee?G():C=!1}}}var G;if(typeof x=="function")G=function(){x(z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,K=F.port2;F.port1.onmessage=z,G=function(){K.postMessage(null)}}else G=function(){I(z,0)};function ue(U,ee){P=I(function(){U(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(U){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var ne=v;v=ee;try{return U()}finally{v=ne}},e.unstable_requestPaint=function(){R=!0},e.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=v;v=U;try{return ee()}finally{v=ne}},e.unstable_scheduleCallback=function(U,ee,ne){var oe=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?oe+ne:oe):ne=oe,U){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ne+O,U={id:g++,callback:ee,priorityLevel:U,startTime:ne,expirationTime:O,sortIndex:-1},ne>oe?(U.sortIndex=ne,t(p,U),n(h)===null&&U===n(p)&&(D?(L(P),P=-1):D=!0,ue(N,ne-oe))):(U.sortIndex=O,t(h,U),w||S||(w=!0,C||(C=!0,G()))),U},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(U){var ee=v;return function(){var ne=v;v=ee;try{return U.apply(this,arguments)}finally{v=ne}}}})(lg)),lg}var k1;function mN(){return k1||(k1=1,og.exports=pN()),og.exports}var cg={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function gN(){if(L1)return nn;L1=1;var e=mh();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,nn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,g)},nn.flushSync=function(h){var p=u.T,g=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=g,i.d.f()}},nn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},nn.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},nn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:S}):g==="script"&&i.d.X(h,{crossOrigin:y,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},nn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},nn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);i.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},nn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},nn.requestFormReset=function(h){i.d.r(h)},nn.unstable_batchedUpdates=function(h,p){return h(p)},nn.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},nn.useFormStatus=function(){return u.H.useHostTransitionStatus()},nn.version="19.1.1",nn}var P1;function gC(){if(P1)return cg.exports;P1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),cg.exports=gN(),cg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1;function yN(){if(j1)return Zl;j1=1;var e=mN(),t=mh(),n=gC();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function h(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,c=s;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(o.return!==c.return)o=d,c=m;else{for(var b=!1,E=d.child;E;){if(E===o){b=!0,o=d,c=m;break}if(E===c){b=!0,c=d,o=m;break}E=E.sibling}if(!b){for(E=m.child;E;){if(E===o){b=!0,o=m,c=d;break}if(E===c){b=!0,c=m,o=d;break}E=E.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function p(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=p(r),s!==null)return s;r=r.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),x=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var F=Symbol.for("react.client.reference");function K(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===F?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case w:return"Fragment";case R:return"Profiler";case D:return"StrictMode";case N:return"Suspense";case C:return"SuspenseList";case H:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case S:return"Portal";case x:return(r.displayName||"Context")+".Provider";case L:return(r._context.displayName||"Context")+".Consumer";case A:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:K(r.type)||"Memo";case V:s=r._payload,r=r._init;try{return K(r(s))}catch{}}return null}var ue=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},oe=[],O=-1;function X(r){return{current:r}}function le(r){0>O||(r.current=oe[O],oe[O]=null,O--)}function ie(r,s){O++,oe[O]=r.current,r.current=s}var de=X(null),me=X(null),pe=X(null),Ae=X(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?r1(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=r1(s),r=i1(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function De(){le(de),le(me),le(pe)}function Ue(r){r.memoizedState!==null&&ie(Ae,r);var s=de.current,o=i1(s,r.type);s!==o&&(ie(me,r),ie(de,o))}function vt(r){me.current===r&&(le(de),le(me)),Ae.current===r&&(le(Ae),Gl._currentValue=ne)}var mt=Object.prototype.hasOwnProperty,Mn=e.unstable_scheduleCallback,wt=e.unstable_cancelCallback,kn=e.unstable_shouldYield,kr=e.unstable_requestPaint,Gt=e.unstable_now,tl=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,Ra=e.unstable_UserBlockingPriority,Aa=e.unstable_NormalPriority,Lr=e.unstable_LowPriority,wi=e.unstable_IdlePriority,Eu=e.log,nl=e.unstable_setDisableYieldValue,fn=null,_t=null;function Jn(r){if(typeof Eu=="function"&&nl(r),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(fn,r)}catch{}}var Yt=Math.clz32?Math.clz32:xu,ep=Math.log,yr=Math.LN2;function xu(r){return r>>>=0,r===0?32:31-(ep(r)/yr|0)|0}var ws=256,Es=4194304;function Pr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function xs(r,s,o){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var E=c&134217727;return E!==0?(c=E&~m,c!==0?d=Pr(c):(b&=E,b!==0?d=Pr(b):o||(o=E&~r,o!==0&&(d=Pr(o))))):(E=c&~m,E!==0?d=Pr(E):b!==0?d=Pr(b):o||(o=c&~r,o!==0&&(d=Pr(o)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:d}function vr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Cu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ia(){var r=ws;return ws<<=1,(ws&4194048)===0&&(ws=256),r}function Tu(){var r=Es;return Es<<=1,(Es&62914560)===0&&(Es=4194304),r}function Da(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function Cs(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Ru(r,s,o,c,d,m){var b=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var E=r.entanglements,k=r.expirationTimes,W=r.hiddenUpdates;for(o=b&~o;0<o;){var re=31-Yt(o),ae=1<<re;E[re]=0,k[re]=-1;var Z=W[re];if(Z!==null)for(W[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}o&=~ae}c!==0&&Ts(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Ts(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Yt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|o&4194090}function Rs(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var c=31-Yt(o),d=1<<c;d&s|r[c]&s&&(r[c]|=s),o&=~d}}function rl(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function il(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function j(){var r=ee.p;return r!==0?r:(r=window.event,r===void 0?32:E1(r.type))}function Y(r,s){var o=ee.p;try{return ee.p=r,s()}finally{ee.p=o}}var te=Math.random().toString(36).slice(2),ce="__reactFiber$"+te,fe="__reactProps$"+te,ye="__reactContainer$"+te,we="__reactEvents$"+te,ve="__reactListeners$"+te,xe="__reactHandles$"+te,Ce="__reactResources$"+te,_e="__reactMarker$"+te;function Se(r){delete r[ce],delete r[fe],delete r[we],delete r[ve],delete r[xe]}function $e(r){var s=r[ce];if(s)return s;for(var o=r.parentNode;o;){if(s=o[ye]||o[ce]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=l1(r);r!==null;){if(o=r[ce])return o;r=l1(r)}return s}r=o,o=r.parentNode}return null}function Xe(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function gt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Et(r){var s=r[Ce];return s||(s=r[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function ke(r){r[_e]=!0}var rt=new Set,_r={};function Sn(r,s){on(r,s),on(r+"Capture",s)}function on(r,s){for(_r[r]=s,r=0;r<s.length;r++)rt.add(s[r])}var Ln=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oa={},Ei={};function jr(r){return mt.call(Ei,r)?!0:mt.call(Oa,r)?!1:Ln.test(r)?Ei[r]=!0:(Oa[r]=!0,!1)}function Ur(r,s,o){if(jr(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function $r(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function Le(r,s,o,c){if(c===null)r.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+c)}}var Ot,zr;function hn(r){if(Ot===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ot=s&&s[1]||"",zr=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+r+zr}var bt=!1;function xi(r,s){if(!r||bt)return"";bt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(J){var Z=J}Reflect.construct(r,[],ae)}else{try{ae.call()}catch(J){Z=J}r.call(ae.prototype)}}else{try{throw Error()}catch(J){Z=J}(ae=r())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],E=m[1];if(b&&E){var k=b.split(`
`),W=E.split(`
`);for(d=c=0;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;for(;d<W.length&&!W[d].includes("DetermineComponentFrameRoot");)d++;if(c===k.length||d===W.length)for(c=k.length-1,d=W.length-1;1<=c&&0<=d&&k[c]!==W[d];)d--;for(;1<=c&&0<=d;c--,d--)if(k[c]!==W[d]){if(c!==1||d!==1)do if(c--,d--,0>d||k[c]!==W[d]){var re=`
`+k[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{bt=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?hn(o):""}function Au(r){switch(r.tag){case 26:case 27:case 5:return hn(r.type);case 16:return hn("Lazy");case 13:return hn("Suspense");case 19:return hn("SuspenseList");case 0:case 15:return xi(r.type,!1);case 11:return xi(r.type.render,!1);case 1:return xi(r.type,!0);case 31:return hn("Activity");default:return""}}function Iu(r){try{var s="";do s+=Au(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Pn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Z_(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function sD(r){var s=Z_(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Du(r){r._valueTracker||(r._valueTracker=sD(r))}function J_(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),c="";return r&&(c=Z_(r)?r.checked?"true":"false":r.value),r=c,r!==o?(s.setValue(r),!0):!1}function Ou(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var aD=/[\n"\\]/g;function jn(r){return r.replace(aD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function tp(r,s,o,c,d,m,b,E){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Pn(s)):r.value!==""+Pn(s)&&(r.value=""+Pn(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?np(r,b,Pn(s)):o!=null?np(r,b,Pn(o)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.name=""+Pn(E):r.removeAttribute("name")}function eb(r,s,o,c,d,m,b,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+Pn(o):"",s=s!=null?""+Pn(s):o,E||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=E?r.checked:!!c,r.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function np(r,s,o){s==="number"&&Ou(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Na(r,s,o,c){if(r=r.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<r.length;o++)d=s.hasOwnProperty("$"+r[o].value),r[o].selected!==d&&(r[o].selected=d),d&&c&&(r[o].defaultSelected=!0)}else{for(o=""+Pn(o),s=null,d=0;d<r.length;d++){if(r[d].value===o){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function tb(r,s,o){if(s!=null&&(s=""+Pn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Pn(o):""}function nb(r,s,o,c){if(s==null){if(c!=null){if(o!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),s=o}o=Pn(s),r.defaultValue=o,c=r.textContent,c===o&&c!==""&&c!==null&&(r.value=c)}function Ma(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var oD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rb(r,s,o){var c=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,o):typeof o!="number"||o===0||oD.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function ib(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&o[d]!==c&&rb(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&rb(r,m,s[m])}function rp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nu(r){return cD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var ip=null;function sp(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ka=null,La=null;function sb(r){var s=Xe(r);if(s&&(r=s.stateNode)){var o=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(tp(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+jn(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var c=o[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));tp(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)c=o[s],c.form===r.form&&J_(c)}break e;case"textarea":tb(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Na(r,!!o.multiple,s,!1)}}}var ap=!1;function ab(r,s,o){if(ap)return r(s,o);ap=!0;try{var c=r(s);return c}finally{if(ap=!1,(ka!==null||La!==null)&&(yd(),ka&&(s=ka,r=La,La=ka=null,sb(s),r)))for(s=0;s<r.length;s++)sb(r[s])}}function sl(r,s){var o=r.stateNode;if(o===null)return null;var c=o[fe]||null;if(c===null)return null;o=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=!1;if(Br)try{var al={};Object.defineProperty(al,"passive",{get:function(){op=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{op=!1}var Ci=null,lp=null,Mu=null;function ob(){if(Mu)return Mu;var r,s=lp,o=s.length,c,d="value"in Ci?Ci.value:Ci.textContent,m=d.length;for(r=0;r<o&&s[r]===d[r];r++);var b=o-r;for(c=1;c<=b&&s[o-c]===d[m-c];c++);return Mu=d.slice(r,1<c?1-c:void 0)}function ku(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Lu(){return!0}function lb(){return!1}function pn(r){function s(o,c,d,m,b){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var E in r)r.hasOwnProperty(E)&&(o=r[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Lu:lb,this.isPropagationStopped=lb,this}return g(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Lu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Lu)},persist:function(){},isPersistent:Lu}),s}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=pn(As),ol=g({},As,{view:0,detail:0}),uD=pn(ol),cp,up,ll,ju=g({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ll&&(ll&&r.type==="mousemove"?(cp=r.screenX-ll.screenX,up=r.screenY-ll.screenY):up=cp=0,ll=r),cp)},movementY:function(r){return"movementY"in r?r.movementY:up}}),cb=pn(ju),dD=g({},ju,{dataTransfer:0}),fD=pn(dD),hD=g({},ol,{relatedTarget:0}),dp=pn(hD),pD=g({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),mD=pn(pD),gD=g({},As,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),yD=pn(gD),vD=g({},As,{data:0}),ub=pn(vD),_D={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wD(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=SD[r])?!!s[r]:!1}function fp(){return wD}var ED=g({},ol,{key:function(r){if(r.key){var s=_D[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=ku(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?bD[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fp,charCode:function(r){return r.type==="keypress"?ku(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ku(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),xD=pn(ED),CD=g({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),db=pn(CD),TD=g({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fp}),RD=pn(TD),AD=g({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),ID=pn(AD),DD=g({},ju,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),OD=pn(DD),ND=g({},As,{newState:0,oldState:0}),MD=pn(ND),kD=[9,13,27,32],hp=Br&&"CompositionEvent"in window,cl=null;Br&&"documentMode"in document&&(cl=document.documentMode);var LD=Br&&"TextEvent"in window&&!cl,fb=Br&&(!hp||cl&&8<cl&&11>=cl),hb=" ",pb=!1;function mb(r,s){switch(r){case"keyup":return kD.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gb(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Pa=!1;function PD(r,s){switch(r){case"compositionend":return gb(s);case"keypress":return s.which!==32?null:(pb=!0,hb);case"textInput":return r=s.data,r===hb&&pb?null:r;default:return null}}function jD(r,s){if(Pa)return r==="compositionend"||!hp&&mb(r,s)?(r=ob(),Mu=lp=Ci=null,Pa=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return fb&&s.locale!=="ko"?null:s.data;default:return null}}var UD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!UD[r.type]:s==="textarea"}function vb(r,s,o,c){ka?La?La.push(c):La=[c]:ka=c,s=Ed(s,"onChange"),0<s.length&&(o=new Pu("onChange","change",null,o,c),r.push({event:o,listeners:s}))}var ul=null,dl=null;function $D(r){ZS(r,0)}function Uu(r){var s=gt(r);if(J_(s))return r}function _b(r,s){if(r==="change")return s}var bb=!1;if(Br){var pp;if(Br){var mp="oninput"in document;if(!mp){var Sb=document.createElement("div");Sb.setAttribute("oninput","return;"),mp=typeof Sb.oninput=="function"}pp=mp}else pp=!1;bb=pp&&(!document.documentMode||9<document.documentMode)}function wb(){ul&&(ul.detachEvent("onpropertychange",Eb),dl=ul=null)}function Eb(r){if(r.propertyName==="value"&&Uu(dl)){var s=[];vb(s,dl,r,sp(r)),ab($D,s)}}function zD(r,s,o){r==="focusin"?(wb(),ul=s,dl=o,ul.attachEvent("onpropertychange",Eb)):r==="focusout"&&wb()}function BD(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Uu(dl)}function HD(r,s){if(r==="click")return Uu(s)}function FD(r,s){if(r==="input"||r==="change")return Uu(s)}function qD(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var wn=typeof Object.is=="function"?Object.is:qD;function fl(r,s){if(wn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),c=Object.keys(s);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!mt.call(s,d)||!wn(r[d],s[d]))return!1}return!0}function xb(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Cb(r,s){var o=xb(r);r=0;for(var c;o;){if(o.nodeType===3){if(c=r+o.textContent.length,r<=s&&c>=s)return{node:o,offset:s-r};r=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=xb(o)}}function Tb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Tb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Rb(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Ou(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=Ou(r.document)}return s}function gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var VD=Br&&"documentMode"in document&&11>=document.documentMode,ja=null,yp=null,hl=null,vp=!1;function Ab(r,s,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vp||ja==null||ja!==Ou(c)||(c=ja,"selectionStart"in c&&gp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),hl&&fl(hl,c)||(hl=c,c=Ed(yp,"onSelect"),0<c.length&&(s=new Pu("onSelect","select",null,s,o),r.push({event:s,listeners:c}),s.target=ja)))}function Is(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Ua={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},_p={},Ib={};Br&&(Ib=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Ds(r){if(_p[r])return _p[r];if(!Ua[r])return r;var s=Ua[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ib)return _p[r]=s[o];return r}var Db=Ds("animationend"),Ob=Ds("animationiteration"),Nb=Ds("animationstart"),GD=Ds("transitionrun"),YD=Ds("transitionstart"),QD=Ds("transitioncancel"),Mb=Ds("transitionend"),kb=new Map,bp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bp.push("scrollEnd");function er(r,s){kb.set(r,s),Sn(s,[r])}var Lb=new WeakMap;function Un(r,s){if(typeof r=="object"&&r!==null){var o=Lb.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Iu(s)},Lb.set(r,s),s)}return{value:r,source:s,stack:Iu(s)}}var $n=[],$a=0,Sp=0;function $u(){for(var r=$a,s=Sp=$a=0;s<r;){var o=$n[s];$n[s++]=null;var c=$n[s];$n[s++]=null;var d=$n[s];$n[s++]=null;var m=$n[s];if($n[s++]=null,c!==null&&d!==null){var b=c.pending;b===null?d.next=d:(d.next=b.next,b.next=d),c.pending=d}m!==0&&Pb(o,d,m)}}function zu(r,s,o,c){$n[$a++]=r,$n[$a++]=s,$n[$a++]=o,$n[$a++]=c,Sp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function wp(r,s,o,c){return zu(r,s,o,c),Bu(r)}function za(r,s){return zu(r,null,null,s),Bu(r)}function Pb(r,s,o){r.lanes|=o;var c=r.alternate;c!==null&&(c.lanes|=o);for(var d=!1,m=r.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Yt(o),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=o|536870912),m):null}function Bu(r){if(50<Ul)throw Ul=0,Am=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Ba={};function WD(r,s,o,c){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(r,s,o,c){return new WD(r,s,o,c)}function Ep(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Hr(r,s){var o=r.alternate;return o===null?(o=En(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function jb(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Hu(r,s,o,c,d,m){var b=0;if(c=r,typeof r=="function")Ep(r)&&(b=1);else if(typeof r=="string")b=XO(r,o,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case H:return r=En(31,o,s,d),r.elementType=H,r.lanes=m,r;case w:return Os(o.children,d,m,s);case D:b=8,d|=24;break;case R:return r=En(12,o,s,d|2),r.elementType=R,r.lanes=m,r;case N:return r=En(13,o,s,d),r.elementType=N,r.lanes=m,r;case C:return r=En(19,o,s,d),r.elementType=C,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case I:case x:b=10;break e;case L:b=9;break e;case A:b=11;break e;case P:b=14;break e;case V:b=16,c=null;break e}b=29,o=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=En(b,o,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function Os(r,s,o,c){return r=En(7,r,c,s),r.lanes=o,r}function xp(r,s,o){return r=En(6,r,null,s),r.lanes=o,r}function Cp(r,s,o){return s=En(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Ha=[],Fa=0,Fu=null,qu=0,zn=[],Bn=0,Ns=null,Fr=1,qr="";function Ms(r,s){Ha[Fa++]=qu,Ha[Fa++]=Fu,Fu=r,qu=s}function Ub(r,s,o){zn[Bn++]=Fr,zn[Bn++]=qr,zn[Bn++]=Ns,Ns=r;var c=Fr;r=qr;var d=32-Yt(c)-1;c&=~(1<<d),o+=1;var m=32-Yt(s)+d;if(30<m){var b=d-d%5;m=(c&(1<<b)-1).toString(32),c>>=b,d-=b,Fr=1<<32-Yt(s)+d|o<<d|c,qr=m+r}else Fr=1<<m|o<<d|c,qr=r}function Tp(r){r.return!==null&&(Ms(r,1),Ub(r,1,0))}function Rp(r){for(;r===Fu;)Fu=Ha[--Fa],Ha[Fa]=null,qu=Ha[--Fa],Ha[Fa]=null;for(;r===Ns;)Ns=zn[--Bn],zn[Bn]=null,qr=zn[--Bn],zn[Bn]=null,Fr=zn[--Bn],zn[Bn]=null}var ln=null,xt=null,Ze=!1,ks=null,br=!1,Ap=Error(i(519));function Ls(r){var s=Error(i(418,""));throw gl(Un(s,r)),Ap}function $b(r){var s=r.stateNode,o=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,o){case"dialog":Ge("cancel",s),Ge("close",s);break;case"iframe":case"object":case"embed":Ge("load",s);break;case"video":case"audio":for(o=0;o<zl.length;o++)Ge(zl[o],s);break;case"source":Ge("error",s);break;case"img":case"image":case"link":Ge("error",s),Ge("load",s);break;case"details":Ge("toggle",s);break;case"input":Ge("invalid",s),eb(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Du(s);break;case"select":Ge("invalid",s);break;case"textarea":Ge("invalid",s),nb(s,c.value,c.defaultValue,c.children),Du(s)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||c.suppressHydrationWarning===!0||n1(s.textContent,o)?(c.popover!=null&&(Ge("beforetoggle",s),Ge("toggle",s)),c.onScroll!=null&&Ge("scroll",s),c.onScrollEnd!=null&&Ge("scrollend",s),c.onClick!=null&&(s.onclick=xd),s=!0):s=!1,s||Ls(r)}function zb(r){for(ln=r.return;ln;)switch(ln.tag){case 5:case 13:br=!1;return;case 27:case 3:br=!0;return;default:ln=ln.return}}function pl(r){if(r!==ln)return!1;if(!Ze)return zb(r),Ze=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||qm(r.type,r.memoizedProps)),o=!o),o&&xt&&Ls(r),zb(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){xt=nr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}xt=null}}else s===27?(s=xt,Bi(r.type)?(r=Qm,Qm=null,xt=r):xt=s):xt=ln?nr(r.stateNode.nextSibling):null;return!0}function ml(){xt=ln=null,Ze=!1}function Bb(){var r=ks;return r!==null&&(yn===null?yn=r:yn.push.apply(yn,r),ks=null),r}function gl(r){ks===null?ks=[r]:ks.push(r)}var Ip=X(null),Ps=null,Vr=null;function Ti(r,s,o){ie(Ip,s._currentValue),s._currentValue=o}function Gr(r){r._currentValue=Ip.current,le(Ip)}function Dp(r,s,o){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===o)break;r=r.return}}function Op(r,s,o,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;e:for(;m!==null;){var E=m;m=d;for(var k=0;k<s.length;k++)if(E.context===s[k]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),Dp(m.return,o,r),c||(b=null);break e}m=E.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),Dp(b,o,r),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===r){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function yl(r,s,o,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var E=d.type;wn(d.pendingProps.value,b.value)||(r!==null?r.push(E):r=[E])}}else if(d===Ae.current){if(b=d.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Gl):r=[Gl])}d=d.return}r!==null&&Op(s,r,o,c),s.flags|=262144}function Vu(r){for(r=r.firstContext;r!==null;){if(!wn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function js(r){Ps=r,Vr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function tn(r){return Hb(Ps,r)}function Gu(r,s){return Ps===null&&js(r),Hb(r,s)}function Hb(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Vr===null){if(r===null)throw Error(i(308));Vr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Vr=Vr.next=s;return o}var KD=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},XD=e.unstable_scheduleCallback,ZD=e.unstable_NormalPriority,Lt={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Np(){return{controller:new KD,data:new Map,refCount:0}}function vl(r){r.refCount--,r.refCount===0&&XD(ZD,function(){r.controller.abort()})}var _l=null,Mp=0,qa=0,Va=null;function JD(r,s){if(_l===null){var o=_l=[];Mp=0,qa=Lm(),Va={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Mp++,s.then(Fb,Fb),s}function Fb(){if(--Mp===0&&_l!==null){Va!==null&&(Va.status="fulfilled");var r=_l;_l=null,qa=0,Va=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function eO(r,s){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var qb=U.S;U.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&JD(r,s),qb!==null&&qb(r,s)};var Us=X(null);function kp(){var r=Us.current;return r!==null?r:dt.pooledCache}function Yu(r,s){s===null?ie(Us,Us.current):ie(Us,s.pool)}function Vb(){var r=kp();return r===null?null:{parent:Lt._currentValue,pool:r}}var bl=Error(i(460)),Gb=Error(i(474)),Qu=Error(i(542)),Lp={then:function(){}};function Yb(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Wu(){}function Qb(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Wu,Wu),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,Kb(r),r;default:if(typeof s.status=="string")s.then(Wu,Wu);else{if(r=dt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,Kb(r),r}throw Sl=s,bl}}var Sl=null;function Wb(){if(Sl===null)throw Error(i(459));var r=Sl;return Sl=null,r}function Kb(r){if(r===bl||r===Qu)throw Error(i(483))}var Ri=!1;function Pp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ai(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ii(r,s,o){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(et&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Bu(r),Pb(r,null,o),s}return zu(r,c,s,o),Bu(r)}function wl(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Rs(r,o)}}function Up(r,s){var o=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?d=m=s:m=m.next=s}else d=m=s;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var $p=!1;function El(){if($p){var r=Va;if(r!==null)throw r}}function xl(r,s,o,c){$p=!1;var d=r.updateQueue;Ri=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var k=E,W=k.next;k.next=null,b===null?m=W:b.next=W,b=k;var re=r.alternate;re!==null&&(re=re.updateQueue,E=re.lastBaseUpdate,E!==b&&(E===null?re.firstBaseUpdate=W:E.next=W,re.lastBaseUpdate=k))}if(m!==null){var ae=d.baseState;b=0,re=W=k=null,E=m;do{var Z=E.lane&-536870913,J=Z!==E.lane;if(J?(Qe&Z)===Z:(c&Z)===Z){Z!==0&&Z===qa&&($p=!0),re!==null&&(re=re.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Me=r,Te=E;Z=s;var at=o;switch(Te.tag){case 1:if(Me=Te.payload,typeof Me=="function"){ae=Me.call(at,ae,Z);break e}ae=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Te.payload,Z=typeof Me=="function"?Me.call(at,ae,Z):Me,Z==null)break e;ae=g({},ae,Z);break e;case 2:Ri=!0}}Z=E.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},re===null?(W=re=J,k=ae):re=re.next=J,b|=Z;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;J=E,E=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);re===null&&(k=ae),d.baseState=k,d.firstBaseUpdate=W,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),ji|=b,r.lanes=b,r.memoizedState=ae}}function Xb(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function Zb(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)Xb(o[r],s)}var Ga=X(null),Ku=X(0);function Jb(r,s){r=Jr,ie(Ku,r),ie(Ga,s),Jr=r|s.baseLanes}function zp(){ie(Ku,Jr),ie(Ga,Ga.current)}function Bp(){Jr=Ku.current,le(Ga),le(Ku)}var Di=0,Be=null,it=null,Nt=null,Xu=!1,Ya=!1,$s=!1,Zu=0,Cl=0,Qa=null,tO=0;function It(){throw Error(i(321))}function Hp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!wn(r[o],s[o]))return!1;return!0}function Fp(r,s,o,c,d,m){return Di=m,Be=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,U.H=r===null||r.memoizedState===null?P0:j0,$s=!1,m=o(c,d),$s=!1,Ya&&(m=t0(s,o,c,d)),e0(r),m}function e0(r){U.H=id;var s=it!==null&&it.next!==null;if(Di=0,Nt=it=Be=null,Xu=!1,Cl=0,Qa=null,s)throw Error(i(300));r===null||$t||(r=r.dependencies,r!==null&&Vu(r)&&($t=!0))}function t0(r,s,o,c){Be=r;var d=0;do{if(Ya&&(Qa=null),Cl=0,Ya=!1,25<=d)throw Error(i(301));if(d+=1,Nt=it=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}U.H=lO,m=s(o,c)}while(Ya);return m}function nO(){var r=U.H,s=r.useState()[0];return s=typeof s.then=="function"?Tl(s):s,r=r.useState()[0],(it!==null?it.memoizedState:null)!==r&&(Be.flags|=1024),s}function qp(){var r=Zu!==0;return Zu=0,r}function Vp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Gp(r){if(Xu){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Xu=!1}Di=0,Nt=it=Be=null,Ya=!1,Cl=Zu=0,Qa=null}function mn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Be.memoizedState=Nt=r:Nt=Nt.next=r,Nt}function Mt(){if(it===null){var r=Be.alternate;r=r!==null?r.memoizedState:null}else r=it.next;var s=Nt===null?Be.memoizedState:Nt.next;if(s!==null)Nt=s,it=r;else{if(r===null)throw Be.alternate===null?Error(i(467)):Error(i(310));it=r,r={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Nt===null?Be.memoizedState=Nt=r:Nt=Nt.next=r}return Nt}function Yp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tl(r){var s=Cl;return Cl+=1,Qa===null&&(Qa=[]),r=Qb(Qa,r,s),s=Be,(Nt===null?s.memoizedState:Nt.next)===null&&(s=s.alternate,U.H=s===null||s.memoizedState===null?P0:j0),r}function Ju(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Tl(r);if(r.$$typeof===x)return tn(r)}throw Error(i(438,String(r)))}function Qp(r){var s=null,o=Be.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var c=Be.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Yp(),Be.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),c=0;c<r;c++)o[c]=B;return s.index++,o}function Yr(r,s){return typeof s=="function"?s(r):s}function ed(r){var s=Mt();return Wp(s,it,r)}function Wp(r,s,o){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var E=b=null,k=null,W=s,re=!1;do{var ae=W.lane&-536870913;if(ae!==W.lane?(Qe&ae)===ae:(Di&ae)===ae){var Z=W.revertLane;if(Z===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),ae===qa&&(re=!0);else if((Di&Z)===Z){W=W.next,Z===qa&&(re=!0);continue}else ae={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},k===null?(E=k=ae,b=m):k=k.next=ae,Be.lanes|=Z,ji|=Z;ae=W.action,$s&&o(m,ae),m=W.hasEagerState?W.eagerState:o(m,ae)}else Z={lane:ae,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},k===null?(E=k=Z,b=m):k=k.next=Z,Be.lanes|=ae,ji|=ae;W=W.next}while(W!==null&&W!==s);if(k===null?b=m:k.next=E,!wn(m,r.memoizedState)&&($t=!0,re&&(o=Va,o!==null)))throw o;r.memoizedState=m,r.baseState=b,r.baseQueue=k,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function Kp(r){var s=Mt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var c=o.dispatch,d=o.pending,m=s.memoizedState;if(d!==null){o.pending=null;var b=d=d.next;do m=r(m,b.action),b=b.next;while(b!==d);wn(m,s.memoizedState)||($t=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,c]}function n0(r,s,o){var c=Be,d=Mt(),m=Ze;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var b=!wn((it||d).memoizedState,o);b&&(d.memoizedState=o,$t=!0),d=d.queue;var E=s0.bind(null,c,d,r);if(Rl(2048,8,E,[r]),d.getSnapshot!==s||b||Nt!==null&&Nt.memoizedState.tag&1){if(c.flags|=2048,Wa(9,td(),i0.bind(null,c,d,o,s),null),dt===null)throw Error(i(349));m||(Di&124)!==0||r0(c,s,o)}return o}function r0(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Be.updateQueue,s===null?(s=Yp(),Be.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function i0(r,s,o,c){s.value=o,s.getSnapshot=c,a0(s)&&o0(r)}function s0(r,s,o){return o(function(){a0(s)&&o0(r)})}function a0(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!wn(r,o)}catch{return!0}}function o0(r){var s=za(r,2);s!==null&&An(s,r,2)}function Xp(r){var s=mn();if(typeof r=="function"){var o=r;if(r=o(),$s){Jn(!0);try{o()}finally{Jn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:r},s}function l0(r,s,o,c){return r.baseState=o,Wp(r,it,typeof c=="function"?c:Yr)}function rO(r,s,o,c,d){if(rd(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};U.T!==null?o(!0):m.isTransition=!1,c(m),o=s.pending,o===null?(m.next=s.pending=m,c0(s,m)):(m.next=o.next,s.pending=o.next=m)}}function c0(r,s){var o=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=U.T,b={};U.T=b;try{var E=o(d,c),k=U.S;k!==null&&k(b,E),u0(r,s,E)}catch(W){Zp(r,s,W)}finally{U.T=m}}else try{m=o(d,c),u0(r,s,m)}catch(W){Zp(r,s,W)}}function u0(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){d0(r,s,c)},function(c){return Zp(r,s,c)}):d0(r,s,o)}function d0(r,s,o){s.status="fulfilled",s.value=o,f0(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,c0(r,o)))}function Zp(r,s,o){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=o,f0(s),s=s.next;while(s!==c)}r.action=null}function f0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function h0(r,s){return s}function p0(r,s){if(Ze){var o=dt.formState;if(o!==null){e:{var c=Be;if(Ze){if(xt){t:{for(var d=xt,m=br;d.nodeType!==8;){if(!m){d=null;break t}if(d=nr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){xt=nr(d.nextSibling),c=d.data==="F!";break e}}Ls(c)}c=!1}c&&(s=o[0])}}return o=mn(),o.memoizedState=o.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h0,lastRenderedState:s},o.queue=c,o=M0.bind(null,Be,c),c.dispatch=o,c=Xp(!1),m=rm.bind(null,Be,!1,c.queue),c=mn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,o=rO.bind(null,Be,d,m,o),d.dispatch=o,c.memoizedState=r,[s,o,!1]}function m0(r){var s=Mt();return g0(s,it,r)}function g0(r,s,o){if(s=Wp(r,s,h0)[0],r=ed(Yr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Tl(s)}catch(b){throw b===bl?Qu:b}else c=s;s=Mt();var d=s.queue,m=d.dispatch;return o!==s.memoizedState&&(Be.flags|=2048,Wa(9,td(),iO.bind(null,d,o),null)),[c,m,r]}function iO(r,s){r.action=s}function y0(r){var s=Mt(),o=it;if(o!==null)return g0(s,o,r);Mt(),s=s.memoizedState,o=Mt();var c=o.queue.dispatch;return o.memoizedState=r,[s,c,!1]}function Wa(r,s,o,c){return r={tag:r,create:o,deps:c,inst:s,next:null},s=Be.updateQueue,s===null&&(s=Yp(),Be.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(c=o.next,o.next=r,r.next=c,s.lastEffect=r),r}function td(){return{destroy:void 0,resource:void 0}}function v0(){return Mt().memoizedState}function nd(r,s,o,c){var d=mn();c=c===void 0?null:c,Be.flags|=r,d.memoizedState=Wa(1|s,td(),o,c)}function Rl(r,s,o,c){var d=Mt();c=c===void 0?null:c;var m=d.memoizedState.inst;it!==null&&c!==null&&Hp(c,it.memoizedState.deps)?d.memoizedState=Wa(s,m,o,c):(Be.flags|=r,d.memoizedState=Wa(1|s,m,o,c))}function _0(r,s){nd(8390656,8,r,s)}function b0(r,s){Rl(2048,8,r,s)}function S0(r,s){return Rl(4,2,r,s)}function w0(r,s){return Rl(4,4,r,s)}function E0(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function x0(r,s,o){o=o!=null?o.concat([r]):null,Rl(4,4,E0.bind(null,s,r),o)}function Jp(){}function C0(r,s){var o=Mt();s=s===void 0?null:s;var c=o.memoizedState;return s!==null&&Hp(s,c[1])?c[0]:(o.memoizedState=[r,s],r)}function T0(r,s){var o=Mt();s=s===void 0?null:s;var c=o.memoizedState;if(s!==null&&Hp(s,c[1]))return c[0];if(c=r(),$s){Jn(!0);try{r()}finally{Jn(!1)}}return o.memoizedState=[c,s],c}function em(r,s,o){return o===void 0||(Di&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=IS(),Be.lanes|=r,ji|=r,o)}function R0(r,s,o,c){return wn(o,s)?o:Ga.current!==null?(r=em(r,o,c),wn(r,s)||($t=!0),r):(Di&42)===0?($t=!0,r.memoizedState=o):(r=IS(),Be.lanes|=r,ji|=r,s)}function A0(r,s,o,c,d){var m=ee.p;ee.p=m!==0&&8>m?m:8;var b=U.T,E={};U.T=E,rm(r,!1,s,o);try{var k=d(),W=U.S;if(W!==null&&W(E,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var re=eO(k,c);Al(r,s,re,Rn(r))}else Al(r,s,c,Rn(r))}catch(ae){Al(r,s,{then:function(){},status:"rejected",reason:ae},Rn())}finally{ee.p=m,U.T=b}}function sO(){}function tm(r,s,o,c){if(r.tag!==5)throw Error(i(476));var d=I0(r).queue;A0(r,d,s,ne,o===null?sO:function(){return D0(r),o(c)})}function I0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:ne},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function D0(r){var s=I0(r).next.queue;Al(r,s,{},Rn())}function nm(){return tn(Gl)}function O0(){return Mt().memoizedState}function N0(){return Mt().memoizedState}function aO(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Rn();r=Ai(o);var c=Ii(s,r,o);c!==null&&(An(c,s,o),wl(c,s,o)),s={cache:Np()},r.payload=s;return}s=s.return}}function oO(r,s,o){var c=Rn();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},rd(r)?k0(s,o):(o=wp(r,s,o,c),o!==null&&(An(o,r,c),L0(o,s,c)))}function M0(r,s,o){var c=Rn();Al(r,s,o,c)}function Al(r,s,o,c){var d={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(rd(r))k0(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,E=m(b,o);if(d.hasEagerState=!0,d.eagerState=E,wn(E,b))return zu(r,s,d,0),dt===null&&$u(),!1}catch{}finally{}if(o=wp(r,s,d,c),o!==null)return An(o,r,c),L0(o,s,c),!0}return!1}function rm(r,s,o,c){if(c={lane:2,revertLane:Lm(),action:c,hasEagerState:!1,eagerState:null,next:null},rd(r)){if(s)throw Error(i(479))}else s=wp(r,o,c,2),s!==null&&An(s,r,2)}function rd(r){var s=r.alternate;return r===Be||s!==null&&s===Be}function k0(r,s){Ya=Xu=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function L0(r,s,o){if((o&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Rs(r,o)}}var id={readContext:tn,use:Ju,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useInsertionEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useSyncExternalStore:It,useId:It,useHostTransitionStatus:It,useFormState:It,useActionState:It,useOptimistic:It,useMemoCache:It,useCacheRefresh:It},P0={readContext:tn,use:Ju,useCallback:function(r,s){return mn().memoizedState=[r,s===void 0?null:s],r},useContext:tn,useEffect:_0,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,nd(4194308,4,E0.bind(null,s,r),o)},useLayoutEffect:function(r,s){return nd(4194308,4,r,s)},useInsertionEffect:function(r,s){nd(4,2,r,s)},useMemo:function(r,s){var o=mn();s=s===void 0?null:s;var c=r();if($s){Jn(!0);try{r()}finally{Jn(!1)}}return o.memoizedState=[c,s],c},useReducer:function(r,s,o){var c=mn();if(o!==void 0){var d=o(s);if($s){Jn(!0);try{o(s)}finally{Jn(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=oO.bind(null,Be,r),[c.memoizedState,r]},useRef:function(r){var s=mn();return r={current:r},s.memoizedState=r},useState:function(r){r=Xp(r);var s=r.queue,o=M0.bind(null,Be,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Jp,useDeferredValue:function(r,s){var o=mn();return em(o,r,s)},useTransition:function(){var r=Xp(!1);return r=A0.bind(null,Be,r.queue,!0,!1),mn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var c=Be,d=mn();if(Ze){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),dt===null)throw Error(i(349));(Qe&124)!==0||r0(c,s,o)}d.memoizedState=o;var m={value:o,getSnapshot:s};return d.queue=m,_0(s0.bind(null,c,m,r),[r]),c.flags|=2048,Wa(9,td(),i0.bind(null,c,m,o,s),null),o},useId:function(){var r=mn(),s=dt.identifierPrefix;if(Ze){var o=qr,c=Fr;o=(c&~(1<<32-Yt(c)-1)).toString(32)+o,s="«"+s+"R"+o,o=Zu++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=tO++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:nm,useFormState:p0,useActionState:p0,useOptimistic:function(r){var s=mn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=rm.bind(null,Be,!0,o),o.dispatch=s,[r,s]},useMemoCache:Qp,useCacheRefresh:function(){return mn().memoizedState=aO.bind(null,Be)}},j0={readContext:tn,use:Ju,useCallback:C0,useContext:tn,useEffect:b0,useImperativeHandle:x0,useInsertionEffect:S0,useLayoutEffect:w0,useMemo:T0,useReducer:ed,useRef:v0,useState:function(){return ed(Yr)},useDebugValue:Jp,useDeferredValue:function(r,s){var o=Mt();return R0(o,it.memoizedState,r,s)},useTransition:function(){var r=ed(Yr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Tl(r),s]},useSyncExternalStore:n0,useId:O0,useHostTransitionStatus:nm,useFormState:m0,useActionState:m0,useOptimistic:function(r,s){var o=Mt();return l0(o,it,r,s)},useMemoCache:Qp,useCacheRefresh:N0},lO={readContext:tn,use:Ju,useCallback:C0,useContext:tn,useEffect:b0,useImperativeHandle:x0,useInsertionEffect:S0,useLayoutEffect:w0,useMemo:T0,useReducer:Kp,useRef:v0,useState:function(){return Kp(Yr)},useDebugValue:Jp,useDeferredValue:function(r,s){var o=Mt();return it===null?em(o,r,s):R0(o,it.memoizedState,r,s)},useTransition:function(){var r=Kp(Yr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Tl(r),s]},useSyncExternalStore:n0,useId:O0,useHostTransitionStatus:nm,useFormState:y0,useActionState:y0,useOptimistic:function(r,s){var o=Mt();return it!==null?l0(o,it,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Qp,useCacheRefresh:N0},Ka=null,Il=0;function sd(r){var s=Il;return Il+=1,Ka===null&&(Ka=[]),Qb(Ka,r,s)}function Dl(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function ad(r,s){throw s.$$typeof===y?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function U0(r){var s=r._init;return s(r._payload)}function $0(r){function s(q,$){if(r){var Q=q.deletions;Q===null?(q.deletions=[$],q.flags|=16):Q.push($)}}function o(q,$){if(!r)return null;for(;$!==null;)s(q,$),$=$.sibling;return null}function c(q){for(var $=new Map;q!==null;)q.key!==null?$.set(q.key,q):$.set(q.index,q),q=q.sibling;return $}function d(q,$){return q=Hr(q,$),q.index=0,q.sibling=null,q}function m(q,$,Q){return q.index=Q,r?(Q=q.alternate,Q!==null?(Q=Q.index,Q<$?(q.flags|=67108866,$):Q):(q.flags|=67108866,$)):(q.flags|=1048576,$)}function b(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function E(q,$,Q,se){return $===null||$.tag!==6?($=xp(Q,q.mode,se),$.return=q,$):($=d($,Q),$.return=q,$)}function k(q,$,Q,se){var ge=Q.type;return ge===w?re(q,$,Q.props.children,se,Q.key):$!==null&&($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&U0(ge)===$.type)?($=d($,Q.props),Dl($,Q),$.return=q,$):($=Hu(Q.type,Q.key,Q.props,null,q.mode,se),Dl($,Q),$.return=q,$)}function W(q,$,Q,se){return $===null||$.tag!==4||$.stateNode.containerInfo!==Q.containerInfo||$.stateNode.implementation!==Q.implementation?($=Cp(Q,q.mode,se),$.return=q,$):($=d($,Q.children||[]),$.return=q,$)}function re(q,$,Q,se,ge){return $===null||$.tag!==7?($=Os(Q,q.mode,se,ge),$.return=q,$):($=d($,Q),$.return=q,$)}function ae(q,$,Q){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=xp(""+$,q.mode,Q),$.return=q,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return Q=Hu($.type,$.key,$.props,null,q.mode,Q),Dl(Q,$),Q.return=q,Q;case S:return $=Cp($,q.mode,Q),$.return=q,$;case V:var se=$._init;return $=se($._payload),ae(q,$,Q)}if(ue($)||G($))return $=Os($,q.mode,Q,null),$.return=q,$;if(typeof $.then=="function")return ae(q,sd($),Q);if($.$$typeof===x)return ae(q,Gu(q,$),Q);ad(q,$)}return null}function Z(q,$,Q,se){var ge=$!==null?$.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ge!==null?null:E(q,$,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===ge?k(q,$,Q,se):null;case S:return Q.key===ge?W(q,$,Q,se):null;case V:return ge=Q._init,Q=ge(Q._payload),Z(q,$,Q,se)}if(ue(Q)||G(Q))return ge!==null?null:re(q,$,Q,se,null);if(typeof Q.then=="function")return Z(q,$,sd(Q),se);if(Q.$$typeof===x)return Z(q,$,Gu(q,Q),se);ad(q,Q)}return null}function J(q,$,Q,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(Q)||null,E($,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case v:return q=q.get(se.key===null?Q:se.key)||null,k($,q,se,ge);case S:return q=q.get(se.key===null?Q:se.key)||null,W($,q,se,ge);case V:var He=se._init;return se=He(se._payload),J(q,$,Q,se,ge)}if(ue(se)||G(se))return q=q.get(Q)||null,re($,q,se,ge,null);if(typeof se.then=="function")return J(q,$,Q,sd(se),ge);if(se.$$typeof===x)return J(q,$,Q,Gu($,se),ge);ad($,se)}return null}function Me(q,$,Q,se){for(var ge=null,He=null,Ee=$,Ie=$=0,Bt=null;Ee!==null&&Ie<Q.length;Ie++){Ee.index>Ie?(Bt=Ee,Ee=null):Bt=Ee.sibling;var We=Z(q,Ee,Q[Ie],se);if(We===null){Ee===null&&(Ee=Bt);break}r&&Ee&&We.alternate===null&&s(q,Ee),$=m(We,$,Ie),He===null?ge=We:He.sibling=We,He=We,Ee=Bt}if(Ie===Q.length)return o(q,Ee),Ze&&Ms(q,Ie),ge;if(Ee===null){for(;Ie<Q.length;Ie++)Ee=ae(q,Q[Ie],se),Ee!==null&&($=m(Ee,$,Ie),He===null?ge=Ee:He.sibling=Ee,He=Ee);return Ze&&Ms(q,Ie),ge}for(Ee=c(Ee);Ie<Q.length;Ie++)Bt=J(Ee,q,Ie,Q[Ie],se),Bt!==null&&(r&&Bt.alternate!==null&&Ee.delete(Bt.key===null?Ie:Bt.key),$=m(Bt,$,Ie),He===null?ge=Bt:He.sibling=Bt,He=Bt);return r&&Ee.forEach(function(Gi){return s(q,Gi)}),Ze&&Ms(q,Ie),ge}function Te(q,$,Q,se){if(Q==null)throw Error(i(151));for(var ge=null,He=null,Ee=$,Ie=$=0,Bt=null,We=Q.next();Ee!==null&&!We.done;Ie++,We=Q.next()){Ee.index>Ie?(Bt=Ee,Ee=null):Bt=Ee.sibling;var Gi=Z(q,Ee,We.value,se);if(Gi===null){Ee===null&&(Ee=Bt);break}r&&Ee&&Gi.alternate===null&&s(q,Ee),$=m(Gi,$,Ie),He===null?ge=Gi:He.sibling=Gi,He=Gi,Ee=Bt}if(We.done)return o(q,Ee),Ze&&Ms(q,Ie),ge;if(Ee===null){for(;!We.done;Ie++,We=Q.next())We=ae(q,We.value,se),We!==null&&($=m(We,$,Ie),He===null?ge=We:He.sibling=We,He=We);return Ze&&Ms(q,Ie),ge}for(Ee=c(Ee);!We.done;Ie++,We=Q.next())We=J(Ee,q,Ie,We.value,se),We!==null&&(r&&We.alternate!==null&&Ee.delete(We.key===null?Ie:We.key),$=m(We,$,Ie),He===null?ge=We:He.sibling=We,He=We);return r&&Ee.forEach(function(cN){return s(q,cN)}),Ze&&Ms(q,Ie),ge}function at(q,$,Q,se){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var ge=Q.key;$!==null;){if($.key===ge){if(ge=Q.type,ge===w){if($.tag===7){o(q,$.sibling),se=d($,Q.props.children),se.return=q,q=se;break e}}else if($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&U0(ge)===$.type){o(q,$.sibling),se=d($,Q.props),Dl(se,Q),se.return=q,q=se;break e}o(q,$);break}else s(q,$);$=$.sibling}Q.type===w?(se=Os(Q.props.children,q.mode,se,Q.key),se.return=q,q=se):(se=Hu(Q.type,Q.key,Q.props,null,q.mode,se),Dl(se,Q),se.return=q,q=se)}return b(q);case S:e:{for(ge=Q.key;$!==null;){if($.key===ge)if($.tag===4&&$.stateNode.containerInfo===Q.containerInfo&&$.stateNode.implementation===Q.implementation){o(q,$.sibling),se=d($,Q.children||[]),se.return=q,q=se;break e}else{o(q,$);break}else s(q,$);$=$.sibling}se=Cp(Q,q.mode,se),se.return=q,q=se}return b(q);case V:return ge=Q._init,Q=ge(Q._payload),at(q,$,Q,se)}if(ue(Q))return Me(q,$,Q,se);if(G(Q)){if(ge=G(Q),typeof ge!="function")throw Error(i(150));return Q=ge.call(Q),Te(q,$,Q,se)}if(typeof Q.then=="function")return at(q,$,sd(Q),se);if(Q.$$typeof===x)return at(q,$,Gu(q,Q),se);ad(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,$!==null&&$.tag===6?(o(q,$.sibling),se=d($,Q),se.return=q,q=se):(o(q,$),se=xp(Q,q.mode,se),se.return=q,q=se),b(q)):o(q,$)}return function(q,$,Q,se){try{Il=0;var ge=at(q,$,Q,se);return Ka=null,ge}catch(Ee){if(Ee===bl||Ee===Qu)throw Ee;var He=En(29,Ee,null,q.mode);return He.lanes=se,He.return=q,He}finally{}}}var Xa=$0(!0),z0=$0(!1),Hn=X(null),Sr=null;function Oi(r){var s=r.alternate;ie(Pt,Pt.current&1),ie(Hn,r),Sr===null&&(s===null||Ga.current!==null||s.memoizedState!==null)&&(Sr=r)}function B0(r){if(r.tag===22){if(ie(Pt,Pt.current),ie(Hn,r),Sr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Sr=r)}}else Ni()}function Ni(){ie(Pt,Pt.current),ie(Hn,Hn.current)}function Qr(r){le(Hn),Sr===r&&(Sr=null),le(Pt)}var Pt=X(0);function od(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Ym(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function im(r,s,o,c){s=r.memoizedState,o=o(c,s),o=o==null?s:g({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var sm={enqueueSetState:function(r,s,o){r=r._reactInternals;var c=Rn(),d=Ai(c);d.payload=s,o!=null&&(d.callback=o),s=Ii(r,d,c),s!==null&&(An(s,r,c),wl(s,r,c))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var c=Rn(),d=Ai(c);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=Ii(r,d,c),s!==null&&(An(s,r,c),wl(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Rn(),c=Ai(o);c.tag=2,s!=null&&(c.callback=s),s=Ii(r,c,o),s!==null&&(An(s,r,o),wl(s,r,o))}};function H0(r,s,o,c,d,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,b):s.prototype&&s.prototype.isPureReactComponent?!fl(o,c)||!fl(d,m):!0}function F0(r,s,o,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,c),s.state!==r&&sm.enqueueReplaceState(s,s.state,null)}function zs(r,s){var o=s;if("ref"in s){o={};for(var c in s)c!=="ref"&&(o[c]=s[c])}if(r=r.defaultProps){o===s&&(o=g({},o));for(var d in r)o[d]===void 0&&(o[d]=r[d])}return o}var ld=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function q0(r){ld(r)}function V0(r){console.error(r)}function G0(r){ld(r)}function cd(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function Y0(r,s,o){try{var c=r.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function am(r,s,o){return o=Ai(o),o.tag=3,o.payload={element:null},o.callback=function(){cd(r,s)},o}function Q0(r){return r=Ai(r),r.tag=3,r}function W0(r,s,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){Y0(s,o,c)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){Y0(s,o,c),typeof d!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var E=c.stack;this.componentDidCatch(c.value,{componentStack:E!==null?E:""})})}function cO(r,s,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=o.alternate,s!==null&&yl(s,o,d,!0),o=Hn.current,o!==null){switch(o.tag){case 13:return Sr===null?Dm():o.alternate===null&&Ct===0&&(Ct=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===Lp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([c]):s.add(c),Nm(r,c,d)),!1;case 22:return o.flags|=65536,c===Lp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([c]):o.add(c)),Nm(r,c,d)),!1}throw Error(i(435,o.tag))}return Nm(r,c,d),Dm(),!1}if(Ze)return s=Hn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==Ap&&(r=Error(i(422),{cause:c}),gl(Un(r,o)))):(c!==Ap&&(s=Error(i(423),{cause:c}),gl(Un(s,o))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=Un(c,o),d=am(r.stateNode,c,d),Up(r,d),Ct!==4&&(Ct=2)),!1;var m=Error(i(520),{cause:c});if(m=Un(m,o),jl===null?jl=[m]:jl.push(m),Ct!==4&&(Ct=2),s===null)return!0;c=Un(c,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=d&-d,o.lanes|=r,r=am(o.stateNode,c,r),Up(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ui===null||!Ui.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=Q0(d),W0(d,r,o,c),Up(o,d),!1}o=o.return}while(o!==null);return!1}var K0=Error(i(461)),$t=!1;function Qt(r,s,o,c){s.child=r===null?z0(s,null,o,c):Xa(s,r.child,o,c)}function X0(r,s,o,c,d){o=o.render;var m=s.ref;if("ref"in c){var b={};for(var E in c)E!=="ref"&&(b[E]=c[E])}else b=c;return js(s),c=Fp(r,s,o,b,m,d),E=qp(),r!==null&&!$t?(Vp(r,s,d),Wr(r,s,d)):(Ze&&E&&Tp(s),s.flags|=1,Qt(r,s,c,d),s.child)}function Z0(r,s,o,c,d){if(r===null){var m=o.type;return typeof m=="function"&&!Ep(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,J0(r,s,m,c,d)):(r=Hu(o.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!pm(r,d)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:fl,o(b,c)&&r.ref===s.ref)return Wr(r,s,d)}return s.flags|=1,r=Hr(m,c),r.ref=s.ref,r.return=s,s.child=r}function J0(r,s,o,c,d){if(r!==null){var m=r.memoizedProps;if(fl(m,c)&&r.ref===s.ref)if($t=!1,s.pendingProps=c=m,pm(r,d))(r.flags&131072)!==0&&($t=!0);else return s.lanes=r.lanes,Wr(r,s,d)}return om(r,s,o,c,d)}function eS(r,s,o){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return tS(r,s,c,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Yu(s,m!==null?m.cachePool:null),m!==null?Jb(s,m):zp(),B0(s);else return s.lanes=s.childLanes=536870912,tS(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Yu(s,m.cachePool),Jb(s,m),Ni(),s.memoizedState=null):(r!==null&&Yu(s,null),zp(),Ni());return Qt(r,s,d,o),s.child}function tS(r,s,o,c){var d=kp();return d=d===null?null:{parent:Lt._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},r!==null&&Yu(s,null),zp(),B0(s),r!==null&&yl(r,s,c,!0),null}function ud(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function om(r,s,o,c,d){return js(s),o=Fp(r,s,o,c,void 0,d),c=qp(),r!==null&&!$t?(Vp(r,s,d),Wr(r,s,d)):(Ze&&c&&Tp(s),s.flags|=1,Qt(r,s,o,d),s.child)}function nS(r,s,o,c,d,m){return js(s),s.updateQueue=null,o=t0(s,c,o,d),e0(r),c=qp(),r!==null&&!$t?(Vp(r,s,m),Wr(r,s,m)):(Ze&&c&&Tp(s),s.flags|=1,Qt(r,s,o,m),s.child)}function rS(r,s,o,c,d){if(js(s),s.stateNode===null){var m=Ba,b=o.contextType;typeof b=="object"&&b!==null&&(m=tn(b)),m=new o(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=sm,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Pp(s),b=o.contextType,m.context=typeof b=="object"&&b!==null?tn(b):Ba,m.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(im(s,o,b,c),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&sm.enqueueReplaceState(m,m.state,null),xl(s,c,m,d),El(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var E=s.memoizedProps,k=zs(o,E);m.props=k;var W=m.context,re=o.contextType;b=Ba,typeof re=="object"&&re!==null&&(b=tn(re));var ae=o.getDerivedStateFromProps;re=typeof ae=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||W!==b)&&F0(s,m,c,b),Ri=!1;var Z=s.memoizedState;m.state=Z,xl(s,c,m,d),El(),W=s.memoizedState,E||Z!==W||Ri?(typeof ae=="function"&&(im(s,o,ae,c),W=s.memoizedState),(k=Ri||H0(s,o,k,c,Z,W,b))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=W),m.props=c,m.state=W,m.context=b,c=k):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,jp(r,s),b=s.memoizedProps,re=zs(o,b),m.props=re,ae=s.pendingProps,Z=m.context,W=o.contextType,k=Ba,typeof W=="object"&&W!==null&&(k=tn(W)),E=o.getDerivedStateFromProps,(W=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==ae||Z!==k)&&F0(s,m,c,k),Ri=!1,Z=s.memoizedState,m.state=Z,xl(s,c,m,d),El();var J=s.memoizedState;b!==ae||Z!==J||Ri||r!==null&&r.dependencies!==null&&Vu(r.dependencies)?(typeof E=="function"&&(im(s,o,E,c),J=s.memoizedState),(re=Ri||H0(s,o,re,c,Z,J,k)||r!==null&&r.dependencies!==null&&Vu(r.dependencies))?(W||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,k)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),m.props=c,m.state=J,m.context=k,c=re):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,ud(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=Xa(s,r.child,null,d),s.child=Xa(s,null,o,d)):Qt(r,s,o,d),s.memoizedState=m.state,r=s.child):r=Wr(r,s,d),r}function iS(r,s,o,c){return ml(),s.flags|=256,Qt(r,s,o,c),s.child}var lm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cm(r){return{baseLanes:r,cachePool:Vb()}}function um(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=Fn),r}function sS(r,s,o){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(Pt.current&2)!==0),b&&(d=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ze){if(d?Oi(s):Ni(),Ze){var E=xt,k;if(k=E){e:{for(k=E,E=br;k.nodeType!==8;){if(!E){E=null;break e}if(k=nr(k.nextSibling),k===null){E=null;break e}}E=k}E!==null?(s.memoizedState={dehydrated:E,treeContext:Ns!==null?{id:Fr,overflow:qr}:null,retryLane:536870912,hydrationErrors:null},k=En(18,null,null,0),k.stateNode=E,k.return=s,s.child=k,ln=s,xt=null,k=!0):k=!1}k||Ls(s)}if(E=s.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Ym(E)?s.lanes=32:s.lanes=536870912,null;Qr(s)}return E=c.children,c=c.fallback,d?(Ni(),d=s.mode,E=dd({mode:"hidden",children:E},d),c=Os(c,d,o,null),E.return=s,c.return=s,E.sibling=c,s.child=E,d=s.child,d.memoizedState=cm(o),d.childLanes=um(r,b,o),s.memoizedState=lm,c):(Oi(s),dm(s,E))}if(k=r.memoizedState,k!==null&&(E=k.dehydrated,E!==null)){if(m)s.flags&256?(Oi(s),s.flags&=-257,s=fm(r,s,o)):s.memoizedState!==null?(Ni(),s.child=r.child,s.flags|=128,s=null):(Ni(),d=c.fallback,E=s.mode,c=dd({mode:"visible",children:c.children},E),d=Os(d,E,o,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,Xa(s,r.child,null,o),c=s.child,c.memoizedState=cm(o),c.childLanes=um(r,b,o),s.memoizedState=lm,s=d);else if(Oi(s),Ym(E)){if(b=E.nextSibling&&E.nextSibling.dataset,b)var W=b.dgst;b=W,c=Error(i(419)),c.stack="",c.digest=b,gl({value:c,source:null,stack:null}),s=fm(r,s,o)}else if($t||yl(r,s,o,!1),b=(o&r.childLanes)!==0,$t||b){if(b=dt,b!==null&&(c=o&-o,c=(c&42)!==0?1:rl(c),c=(c&(b.suspendedLanes|o))!==0?0:c,c!==0&&c!==k.retryLane))throw k.retryLane=c,za(r,c),An(b,r,c),K0;E.data==="$?"||Dm(),s=fm(r,s,o)}else E.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=k.treeContext,xt=nr(E.nextSibling),ln=s,Ze=!0,ks=null,br=!1,r!==null&&(zn[Bn++]=Fr,zn[Bn++]=qr,zn[Bn++]=Ns,Fr=r.id,qr=r.overflow,Ns=s),s=dm(s,c.children),s.flags|=4096);return s}return d?(Ni(),d=c.fallback,E=s.mode,k=r.child,W=k.sibling,c=Hr(k,{mode:"hidden",children:c.children}),c.subtreeFlags=k.subtreeFlags&65011712,W!==null?d=Hr(W,d):(d=Os(d,E,o,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,E=r.child.memoizedState,E===null?E=cm(o):(k=E.cachePool,k!==null?(W=Lt._currentValue,k=k.parent!==W?{parent:W,pool:W}:k):k=Vb(),E={baseLanes:E.baseLanes|o,cachePool:k}),d.memoizedState=E,d.childLanes=um(r,b,o),s.memoizedState=lm,c):(Oi(s),o=r.child,r=o.sibling,o=Hr(o,{mode:"visible",children:c.children}),o.return=s,o.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=o,s.memoizedState=null,o)}function dm(r,s){return s=dd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function dd(r,s){return r=En(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function fm(r,s,o){return Xa(s,r.child,null,o),r=dm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function aS(r,s,o){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Dp(r.return,s,o)}function hm(r,s,o,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function oS(r,s,o){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Qt(r,s,c.children,o),c=Pt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&aS(r,o,s);else if(r.tag===19)aS(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(Pt,c),d){case"forwards":for(o=s.child,d=null;o!==null;)r=o.alternate,r!==null&&od(r)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),hm(s,!1,d,o,m);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&od(r)===null){s.child=d;break}r=d.sibling,d.sibling=o,o=d,d=r}hm(s,!0,o,null,m);break;case"together":hm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wr(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),ji|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(yl(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Hr(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Hr(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function pm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Vu(r)))}function uO(r,s,o){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),Ti(s,Lt,r.memoizedState.cache),ml();break;case 27:case 5:Ue(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:Ti(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Oi(s),s.flags|=128,null):(o&s.child.childLanes)!==0?sS(r,s,o):(Oi(s),r=Wr(r,s,o),r!==null?r.sibling:null);Oi(s);break;case 19:var d=(r.flags&128)!==0;if(c=(o&s.childLanes)!==0,c||(yl(r,s,o,!1),c=(o&s.childLanes)!==0),d){if(c)return oS(r,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(Pt,Pt.current),c)break;return null;case 22:case 23:return s.lanes=0,eS(r,s,o);case 24:Ti(s,Lt,r.memoizedState.cache)}return Wr(r,s,o)}function lS(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)$t=!0;else{if(!pm(r,o)&&(s.flags&128)===0)return $t=!1,uO(r,s,o);$t=(r.flags&131072)!==0}else $t=!1,Ze&&(s.flags&1048576)!==0&&Ub(s,qu,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")Ep(c)?(r=zs(c,r),s.tag=1,s=rS(null,s,c,r,o)):(s.tag=0,s=om(null,s,c,r,o));else{if(c!=null){if(d=c.$$typeof,d===A){s.tag=11,s=X0(null,s,c,r,o);break e}else if(d===P){s.tag=14,s=Z0(null,s,c,r,o);break e}}throw s=K(c)||c,Error(i(306,s,""))}}return s;case 0:return om(r,s,s.type,s.pendingProps,o);case 1:return c=s.type,d=zs(c,s.pendingProps),rS(r,s,c,d,o);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,jp(r,s),xl(s,c,null,o);var b=s.memoizedState;if(c=b.cache,Ti(s,Lt,c),c!==m.cache&&Op(s,[Lt],o,!0),El(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=iS(r,s,c,o);break e}else if(c!==d){d=Un(Error(i(424)),s),gl(d),s=iS(r,s,c,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(xt=nr(r.firstChild),ln=s,Ze=!0,ks=null,br=!0,o=z0(s,null,c,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ml(),c===d){s=Wr(r,s,o);break e}Qt(r,s,c,o)}s=s.child}return s;case 26:return ud(r,s),r===null?(o=f1(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ze||(o=s.type,r=s.pendingProps,c=Cd(pe.current).createElement(o),c[ce]=s,c[fe]=r,Kt(c,o,r),ke(c),s.stateNode=c):s.memoizedState=f1(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Ue(s),r===null&&Ze&&(c=s.stateNode=c1(s.type,s.pendingProps,pe.current),ln=s,br=!0,d=xt,Bi(s.type)?(Qm=d,xt=nr(c.firstChild)):xt=d),Qt(r,s,s.pendingProps.children,o),ud(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ze&&((d=c=xt)&&(c=UO(c,s.type,s.pendingProps,br),c!==null?(s.stateNode=c,ln=s,xt=nr(c.firstChild),br=!1,d=!0):d=!1),d||Ls(s)),Ue(s),d=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,c=m.children,qm(d,m)?c=null:b!==null&&qm(d,b)&&(s.flags|=32),s.memoizedState!==null&&(d=Fp(r,s,nO,null,null,o),Gl._currentValue=d),ud(r,s),Qt(r,s,c,o),s.child;case 6:return r===null&&Ze&&((r=o=xt)&&(o=$O(o,s.pendingProps,br),o!==null?(s.stateNode=o,ln=s,xt=null,r=!0):r=!1),r||Ls(s)),null;case 13:return sS(r,s,o);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=Xa(s,null,c,o):Qt(r,s,c,o),s.child;case 11:return X0(r,s,s.type,s.pendingProps,o);case 7:return Qt(r,s,s.pendingProps,o),s.child;case 8:return Qt(r,s,s.pendingProps.children,o),s.child;case 12:return Qt(r,s,s.pendingProps.children,o),s.child;case 10:return c=s.pendingProps,Ti(s,s.type,c.value),Qt(r,s,c.children,o),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,js(s),d=tn(d),c=c(d),s.flags|=1,Qt(r,s,c,o),s.child;case 14:return Z0(r,s,s.type,s.pendingProps,o);case 15:return J0(r,s,s.type,s.pendingProps,o);case 19:return oS(r,s,o);case 31:return c=s.pendingProps,o=s.mode,c={mode:c.mode,children:c.children},r===null?(o=dd(c,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Hr(r.child,c),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return eS(r,s,o);case 24:return js(s),c=tn(Lt),r===null?(d=kp(),d===null&&(d=dt,m=Np(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),s.memoizedState={parent:c,cache:d},Pp(s),Ti(s,Lt,d)):((r.lanes&o)!==0&&(jp(r,s),xl(s,null,null,o),El()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Ti(s,Lt,c)):(c=m.cache,Ti(s,Lt,c),c!==d.cache&&Op(s,[Lt],o,!0))),Qt(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Kr(r){r.flags|=4}function cS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!y1(s)){if(s=Hn.current,s!==null&&((Qe&4194048)===Qe?Sr!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||s!==Sr))throw Sl=Lp,Gb;r.flags|=8192}}function fd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Tu():536870912,r.lanes|=s,to|=s)}function Ol(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function St(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,c=0;if(s)for(var d=r.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=o,s}function dO(r,s,o){var c=s.pendingProps;switch(Rp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(s),null;case 1:return St(s),null;case 3:return o=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Gr(Lt),De(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(pl(s)?Kr(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Bb())),St(s),null;case 26:return o=s.memoizedState,r===null?(Kr(s),o!==null?(St(s),cS(s,o)):(St(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Kr(s),St(s),cS(s,o)):(St(s),s.flags&=-16777217):(r.memoizedProps!==c&&Kr(s),St(s),s.flags&=-16777217),null;case 27:vt(s),o=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Kr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return St(s),null}r=de.current,pl(s)?$b(s):(r=c1(d,c,o),s.stateNode=r,Kr(s))}return St(s),null;case 5:if(vt(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Kr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return St(s),null}if(r=de.current,pl(s))$b(s);else{switch(d=Cd(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(o,{is:c.is}):d.createElement(o)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Kt(r,o,c),o){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Kr(s)}}return St(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&Kr(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,pl(s)){if(r=s.stateNode,o=s.memoizedProps,c=null,d=ln,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||n1(r.nodeValue,o)),r||Ls(s)}else r=Cd(r).createTextNode(c),r[ce]=s,s.stateNode=r}return St(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=pl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else ml(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;St(s),d=!1}else d=Bb(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Qr(s),s):(Qr(s),null)}if(Qr(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=c!==null,r=r!==null&&r.memoizedState!==null,o){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),fd(s,s.updateQueue),St(s),null;case 4:return De(),r===null&&$m(s.stateNode.containerInfo),St(s),null;case 10:return Gr(s.type),St(s),null;case 19:if(le(Pt),d=s.memoizedState,d===null)return St(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ol(d,!1);else{if(Ct!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=od(r),m!==null){for(s.flags|=128,Ol(d,!1),r=m.updateQueue,s.updateQueue=r,fd(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)jb(o,r),o=o.sibling;return ie(Pt,Pt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Gt()>md&&(s.flags|=128,c=!0,Ol(d,!1),s.lanes=4194304)}else{if(!c)if(r=od(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,fd(s,r),Ol(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Ze)return St(s),null}else 2*Gt()-d.renderingStartTime>md&&o!==536870912&&(s.flags|=128,c=!0,Ol(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Gt(),s.sibling=null,r=Pt.current,ie(Pt,c?r&1|2:r&1),s):(St(s),null);case 22:case 23:return Qr(s),Bp(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(o&536870912)!==0&&(s.flags&128)===0&&(St(s),s.subtreeFlags&6&&(s.flags|=8192)):St(s),o=s.updateQueue,o!==null&&fd(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048),r!==null&&le(Us),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Gr(Lt),St(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function fO(r,s){switch(Rp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Gr(Lt),De(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return vt(s),null;case 13:if(Qr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));ml()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(Pt),null;case 4:return De(),null;case 10:return Gr(s.type),null;case 22:case 23:return Qr(s),Bp(),r!==null&&le(Us),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Gr(Lt),null;case 25:return null;default:return null}}function uS(r,s){switch(Rp(s),s.tag){case 3:Gr(Lt),De();break;case 26:case 27:case 5:vt(s);break;case 4:De();break;case 13:Qr(s);break;case 19:le(Pt);break;case 10:Gr(s.type);break;case 22:case 23:Qr(s),Bp(),r!==null&&le(Us);break;case 24:Gr(Lt)}}function Nl(r,s){try{var o=s.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&r)===r){c=void 0;var m=o.create,b=o.inst;c=m(),b.destroy=c}o=o.next}while(o!==d)}}catch(E){ut(s,s.return,E)}}function Mi(r,s,o){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var b=c.inst,E=b.destroy;if(E!==void 0){b.destroy=void 0,d=s;var k=o,W=E;try{W()}catch(re){ut(d,k,re)}}}c=c.next}while(c!==m)}}catch(re){ut(s,s.return,re)}}function dS(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{Zb(s,o)}catch(c){ut(r,r.return,c)}}}function fS(r,s,o){o.props=zs(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(c){ut(r,s,c)}}function Ml(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof o=="function"?r.refCleanup=o(c):o.current=c}}catch(d){ut(r,s,d)}}function wr(r,s){var o=r.ref,c=r.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){ut(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){ut(r,s,d)}else o.current=null}function hS(r){var s=r.type,o=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){ut(r,r.return,d)}}function mm(r,s,o){try{var c=r.stateNode;MO(c,r.type,o,s),c[fe]=s}catch(d){ut(r,r.return,d)}}function pS(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Bi(r.type)||r.tag===4}function gm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||pS(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Bi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ym(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=xd));else if(c!==4&&(c===27&&Bi(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(ym(r,s,o),r=r.sibling;r!==null;)ym(r,s,o),r=r.sibling}function hd(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(c!==4&&(c===27&&Bi(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(hd(r,s,o),r=r.sibling;r!==null;)hd(r,s,o),r=r.sibling}function mS(r){var s=r.stateNode,o=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Kt(s,c,o),s[ce]=r,s[fe]=o}catch(m){ut(r,r.return,m)}}var Xr=!1,Dt=!1,vm=!1,gS=typeof WeakSet=="function"?WeakSet:Set,zt=null;function hO(r,s){if(r=r.containerInfo,Hm=Od,r=Rb(r),gp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,E=-1,k=-1,W=0,re=0,ae=r,Z=null;t:for(;;){for(var J;ae!==o||d!==0&&ae.nodeType!==3||(E=b+d),ae!==m||c!==0&&ae.nodeType!==3||(k=b+c),ae.nodeType===3&&(b+=ae.nodeValue.length),(J=ae.firstChild)!==null;)Z=ae,ae=J;for(;;){if(ae===r)break t;if(Z===o&&++W===d&&(E=b),Z===m&&++re===c&&(k=b),(J=ae.nextSibling)!==null)break;ae=Z,Z=ae.parentNode}ae=J}o=E===-1||k===-1?null:{start:E,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Fm={focusedElem:r,selectionRange:o},Od=!1,zt=s;zt!==null;)if(s=zt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,zt=r;else for(;zt!==null;){switch(s=zt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,d=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var Me=zs(o.type,d,o.elementType===o.type);r=c.getSnapshotBeforeUpdate(Me,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Te){ut(o,o.return,Te)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Gm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Gm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,zt=r;break}zt=s.return}}function yS(r,s,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:ki(r,o),c&4&&Nl(5,o);break;case 1:if(ki(r,o),c&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(b){ut(o,o.return,b)}else{var d=zs(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){ut(o,o.return,b)}}c&64&&dS(o),c&512&&Ml(o,o.return);break;case 3:if(ki(r,o),c&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Zb(r,s)}catch(b){ut(o,o.return,b)}}break;case 27:s===null&&c&4&&mS(o);case 26:case 5:ki(r,o),s===null&&c&4&&hS(o),c&512&&Ml(o,o.return);break;case 12:ki(r,o);break;case 13:ki(r,o),c&4&&bS(r,o),c&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=wO.bind(null,o),zO(r,o))));break;case 22:if(c=o.memoizedState!==null||Xr,!c){s=s!==null&&s.memoizedState!==null||Dt,d=Xr;var m=Dt;Xr=c,(Dt=s)&&!m?Li(r,o,(o.subtreeFlags&8772)!==0):ki(r,o),Xr=d,Dt=m}break;case 30:break;default:ki(r,o)}}function vS(r){var s=r.alternate;s!==null&&(r.alternate=null,vS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var yt=null,gn=!1;function Zr(r,s,o){for(o=o.child;o!==null;)_S(r,s,o),o=o.sibling}function _S(r,s,o){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(fn,o)}catch{}switch(o.tag){case 26:Dt||wr(o,s),Zr(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Dt||wr(o,s);var c=yt,d=gn;Bi(o.type)&&(yt=o.stateNode,gn=!1),Zr(r,s,o),Hl(o.stateNode),yt=c,gn=d;break;case 5:Dt||wr(o,s);case 6:if(c=yt,d=gn,yt=null,Zr(r,s,o),yt=c,gn=d,yt!==null)if(gn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(o.stateNode)}catch(m){ut(o,s,m)}else try{yt.removeChild(o.stateNode)}catch(m){ut(o,s,m)}break;case 18:yt!==null&&(gn?(r=yt,o1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Kl(r)):o1(yt,o.stateNode));break;case 4:c=yt,d=gn,yt=o.stateNode.containerInfo,gn=!0,Zr(r,s,o),yt=c,gn=d;break;case 0:case 11:case 14:case 15:Dt||Mi(2,o,s),Dt||Mi(4,o,s),Zr(r,s,o);break;case 1:Dt||(wr(o,s),c=o.stateNode,typeof c.componentWillUnmount=="function"&&fS(o,s,c)),Zr(r,s,o);break;case 21:Zr(r,s,o);break;case 22:Dt=(c=Dt)||o.memoizedState!==null,Zr(r,s,o),Dt=c;break;default:Zr(r,s,o)}}function bS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Kl(r)}catch(o){ut(s,s.return,o)}}function pO(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new gS),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new gS),s;default:throw Error(i(435,r.tag))}}function _m(r,s){var o=pO(r);s.forEach(function(c){var d=EO.bind(null,r,c);o.has(c)||(o.add(c),c.then(d,d))})}function xn(r,s){var o=s.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],m=r,b=s,E=b;e:for(;E!==null;){switch(E.tag){case 27:if(Bi(E.type)){yt=E.stateNode,gn=!1;break e}break;case 5:yt=E.stateNode,gn=!1;break e;case 3:case 4:yt=E.stateNode.containerInfo,gn=!0;break e}E=E.return}if(yt===null)throw Error(i(160));_S(m,b,d),yt=null,gn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)SS(s,r),s=s.sibling}var tr=null;function SS(r,s){var o=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:xn(s,r),Cn(r),c&4&&(Mi(3,r,r.return),Nl(3,r),Mi(5,r,r.return));break;case 1:xn(s,r),Cn(r),c&512&&(Dt||o===null||wr(o,o.return)),c&64&&Xr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=tr;if(xn(s,r),Cn(r),c&512&&(Dt||o===null||wr(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=r.memoizedState,o===null)if(c===null)if(r.stateNode===null){e:{c=r.type,o=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Kt(m,c,o),m[ce]=r,ke(m),c=m;break e;case"link":var b=m1("link","href",d).get(c+(o.href||""));if(b){for(var E=0;E<b.length;E++)if(m=b[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(E,1);break t}}m=d.createElement(c),Kt(m,c,o),d.head.appendChild(m);break;case"meta":if(b=m1("meta","content",d).get(c+(o.content||""))){for(E=0;E<b.length;E++)if(m=b[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(E,1);break t}}m=d.createElement(c),Kt(m,c,o),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,ke(m),c=m}r.stateNode=c}else g1(d,r.type,r.stateNode);else r.stateNode=p1(d,c,r.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?g1(d,r.type,r.stateNode):p1(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&mm(r,r.memoizedProps,o.memoizedProps)}break;case 27:xn(s,r),Cn(r),c&512&&(Dt||o===null||wr(o,o.return)),o!==null&&c&4&&mm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(xn(s,r),Cn(r),c&512&&(Dt||o===null||wr(o,o.return)),r.flags&32){d=r.stateNode;try{Ma(d,"")}catch(J){ut(r,r.return,J)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,mm(r,d,o!==null?o.memoizedProps:d)),c&1024&&(vm=!0);break;case 6:if(xn(s,r),Cn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,o=r.stateNode;try{o.nodeValue=c}catch(J){ut(r,r.return,J)}}break;case 3:if(Ad=null,d=tr,tr=Td(s.containerInfo),xn(s,r),tr=d,Cn(r),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Kl(s.containerInfo)}catch(J){ut(r,r.return,J)}vm&&(vm=!1,wS(r));break;case 4:c=tr,tr=Td(r.stateNode.containerInfo),xn(s,r),Cn(r),tr=c;break;case 12:xn(s,r),Cn(r);break;case 13:xn(s,r),Cn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Cm=Gt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,_m(r,c)));break;case 22:d=r.memoizedState!==null;var k=o!==null&&o.memoizedState!==null,W=Xr,re=Dt;if(Xr=W||d,Dt=re||k,xn(s,r),Dt=re,Xr=W,Cn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||k||Xr||Dt||Bs(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){k=o=s;try{if(m=k.stateNode,d)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{E=k.stateNode;var ae=k.memoizedProps.style,Z=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;E.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){ut(k,k.return,J)}}}else if(s.tag===6){if(o===null){k=s;try{k.stateNode.nodeValue=d?"":k.memoizedProps}catch(J){ut(k,k.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,_m(r,o))));break;case 19:xn(s,r),Cn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,_m(r,c)));break;case 30:break;case 21:break;default:xn(s,r),Cn(r)}}function Cn(r){var s=r.flags;if(s&2){try{for(var o,c=r.return;c!==null;){if(pS(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=gm(r);hd(r,m,d);break;case 5:var b=o.stateNode;o.flags&32&&(Ma(b,""),o.flags&=-33);var E=gm(r);hd(r,E,b);break;case 3:case 4:var k=o.stateNode.containerInfo,W=gm(r);ym(r,W,k);break;default:throw Error(i(161))}}catch(re){ut(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function wS(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;wS(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ki(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)yS(r,s.alternate,s),s=s.sibling}function Bs(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Mi(4,s,s.return),Bs(s);break;case 1:wr(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&fS(s,s.return,o),Bs(s);break;case 27:Hl(s.stateNode);case 26:case 5:wr(s,s.return),Bs(s);break;case 22:s.memoizedState===null&&Bs(s);break;case 30:Bs(s);break;default:Bs(s)}r=r.sibling}}function Li(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:Li(d,m,o),Nl(4,m);break;case 1:if(Li(d,m,o),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(W){ut(c,c.return,W)}if(c=m,d=c.updateQueue,d!==null){var E=c.stateNode;try{var k=d.shared.hiddenCallbacks;if(k!==null)for(d.shared.hiddenCallbacks=null,d=0;d<k.length;d++)Xb(k[d],E)}catch(W){ut(c,c.return,W)}}o&&b&64&&dS(m),Ml(m,m.return);break;case 27:mS(m);case 26:case 5:Li(d,m,o),o&&c===null&&b&4&&hS(m),Ml(m,m.return);break;case 12:Li(d,m,o);break;case 13:Li(d,m,o),o&&b&4&&bS(d,m);break;case 22:m.memoizedState===null&&Li(d,m,o),Ml(m,m.return);break;case 30:break;default:Li(d,m,o)}s=s.sibling}}function bm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&vl(o))}function Sm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&vl(r))}function Er(r,s,o,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)ES(r,s,o,c),s=s.sibling}function ES(r,s,o,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Er(r,s,o,c),d&2048&&Nl(9,s);break;case 1:Er(r,s,o,c);break;case 3:Er(r,s,o,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&vl(r)));break;case 12:if(d&2048){Er(r,s,o,c),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,E=m.onPostCommit;typeof E=="function"&&E(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(k){ut(s,s.return,k)}}else Er(r,s,o,c);break;case 13:Er(r,s,o,c);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?Er(r,s,o,c):kl(r,s):m._visibility&2?Er(r,s,o,c):(m._visibility|=2,Za(r,s,o,c,(s.subtreeFlags&10256)!==0)),d&2048&&bm(b,s);break;case 24:Er(r,s,o,c),d&2048&&Sm(s.alternate,s);break;default:Er(r,s,o,c)}}function Za(r,s,o,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,E=o,k=c,W=b.flags;switch(b.tag){case 0:case 11:case 15:Za(m,b,E,k,d),Nl(8,b);break;case 23:break;case 22:var re=b.stateNode;b.memoizedState!==null?re._visibility&2?Za(m,b,E,k,d):kl(m,b):(re._visibility|=2,Za(m,b,E,k,d)),d&&W&2048&&bm(b.alternate,b);break;case 24:Za(m,b,E,k,d),d&&W&2048&&Sm(b.alternate,b);break;default:Za(m,b,E,k,d)}s=s.sibling}}function kl(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,c=s,d=c.flags;switch(c.tag){case 22:kl(o,c),d&2048&&bm(c.alternate,c);break;case 24:kl(o,c),d&2048&&Sm(c.alternate,c);break;default:kl(o,c)}s=s.sibling}}var Ll=8192;function Ja(r){if(r.subtreeFlags&Ll)for(r=r.child;r!==null;)xS(r),r=r.sibling}function xS(r){switch(r.tag){case 26:Ja(r),r.flags&Ll&&r.memoizedState!==null&&JO(tr,r.memoizedState,r.memoizedProps);break;case 5:Ja(r);break;case 3:case 4:var s=tr;tr=Td(r.stateNode.containerInfo),Ja(r),tr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Ll,Ll=16777216,Ja(r),Ll=s):Ja(r));break;default:Ja(r)}}function CS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Pl(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];zt=c,RS(c,r)}CS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)TS(r),r=r.sibling}function TS(r){switch(r.tag){case 0:case 11:case 15:Pl(r),r.flags&2048&&Mi(9,r,r.return);break;case 3:Pl(r);break;case 12:Pl(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,pd(r)):Pl(r);break;default:Pl(r)}}function pd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];zt=c,RS(c,r)}CS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Mi(8,s,s.return),pd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,pd(s));break;default:pd(s)}r=r.sibling}}function RS(r,s){for(;zt!==null;){var o=zt;switch(o.tag){case 0:case 11:case 15:Mi(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:vl(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,zt=c;else e:for(o=r;zt!==null;){c=zt;var d=c.sibling,m=c.return;if(vS(c),c===o){zt=null;break e}if(d!==null){d.return=m,zt=d;break e}zt=m}}}var mO={getCacheForType:function(r){var s=tn(Lt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},gO=typeof WeakMap=="function"?WeakMap:Map,et=0,dt=null,Ve=null,Qe=0,tt=0,Tn=null,Pi=!1,eo=!1,wm=!1,Jr=0,Ct=0,ji=0,Hs=0,Em=0,Fn=0,to=0,jl=null,yn=null,xm=!1,Cm=0,md=1/0,gd=null,Ui=null,Wt=0,$i=null,no=null,ro=0,Tm=0,Rm=null,AS=null,Ul=0,Am=null;function Rn(){if((et&2)!==0&&Qe!==0)return Qe&-Qe;if(U.T!==null){var r=qa;return r!==0?r:Lm()}return j()}function IS(){Fn===0&&(Fn=(Qe&536870912)===0||Ze?Ia():536870912);var r=Hn.current;return r!==null&&(r.flags|=32),Fn}function An(r,s,o){(r===dt&&(tt===2||tt===9)||r.cancelPendingCommit!==null)&&(io(r,0),zi(r,Qe,Fn,!1)),Cs(r,o),((et&2)===0||r!==dt)&&(r===dt&&((et&2)===0&&(Hs|=o),Ct===4&&zi(r,Qe,Fn,!1)),xr(r))}function DS(r,s,o){if((et&6)!==0)throw Error(i(327));var c=!o&&(s&124)===0&&(s&r.expiredLanes)===0||vr(r,s),d=c?_O(r,s):Om(r,s,!0),m=c;do{if(d===0){eo&&!c&&zi(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!yO(o)){d=Om(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var E=r;d=jl;var k=E.current.memoizedState.isDehydrated;if(k&&(io(E,b).flags|=256),b=Om(E,b,!1),b!==2){if(wm&&!k){E.errorRecoveryDisabledLanes|=m,Hs|=m,d=4;break e}m=yn,yn=d,m!==null&&(yn===null?yn=m:yn.push.apply(yn,m))}d=b}if(m=!1,d!==2)continue}}if(d===1){io(r,0),zi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:zi(c,s,Fn,!Pi);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Cm+300-Gt(),10<d)){if(zi(c,s,Fn,!Pi),xs(c,0,!0)!==0)break e;c.timeoutHandle=s1(OS.bind(null,c,o,yn,gd,xm,s,Fn,Hs,to,Pi,m,2,-0,0),d);break e}OS(c,o,yn,gd,xm,s,Fn,Hs,to,Pi,m,0,-0,0)}}break}while(!0);xr(r)}function OS(r,s,o,c,d,m,b,E,k,W,re,ae,Z,J){if(r.timeoutHandle=-1,ae=s.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(Vl={stylesheets:null,count:0,unsuspend:ZO},xS(s),ae=eN(),ae!==null)){r.cancelPendingCommit=ae(US.bind(null,r,s,m,o,c,d,b,E,k,re,1,Z,J)),zi(r,m,b,!W);return}US(r,s,m,o,c,d,b,E,k)}function yO(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!wn(m(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function zi(r,s,o,c){s&=~Em,s&=~Hs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Yt(d),b=1<<m;c[m]=-1,d&=~b}o!==0&&Ts(r,o,s)}function yd(){return(et&6)===0?($l(0),!1):!0}function Im(){if(Ve!==null){if(tt===0)var r=Ve.return;else r=Ve,Vr=Ps=null,Gp(r),Ka=null,Il=0,r=Ve;for(;r!==null;)uS(r.alternate,r),r=r.return;Ve=null}}function io(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,LO(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Im(),dt=r,Ve=o=Hr(r.current,null),Qe=s,tt=0,Tn=null,Pi=!1,eo=vr(r,s),wm=!1,to=Fn=Em=Hs=ji=Ct=0,yn=jl=null,xm=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Yt(c),m=1<<d;s|=r[d],c&=~m}return Jr=s,$u(),o}function NS(r,s){Be=null,U.H=id,s===bl||s===Qu?(s=Wb(),tt=3):s===Gb?(s=Wb(),tt=4):tt=s===K0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Tn=s,Ve===null&&(Ct=1,cd(r,Un(s,r.current)))}function MS(){var r=U.H;return U.H=id,r===null?id:r}function kS(){var r=U.A;return U.A=mO,r}function Dm(){Ct=4,Pi||(Qe&4194048)!==Qe&&Hn.current!==null||(eo=!0),(ji&134217727)===0&&(Hs&134217727)===0||dt===null||zi(dt,Qe,Fn,!1)}function Om(r,s,o){var c=et;et|=2;var d=MS(),m=kS();(dt!==r||Qe!==s)&&(gd=null,io(r,s)),s=!1;var b=Ct;e:do try{if(tt!==0&&Ve!==null){var E=Ve,k=Tn;switch(tt){case 8:Im(),b=6;break e;case 3:case 2:case 9:case 6:Hn.current===null&&(s=!0);var W=tt;if(tt=0,Tn=null,so(r,E,k,W),o&&eo){b=0;break e}break;default:W=tt,tt=0,Tn=null,so(r,E,k,W)}}vO(),b=Ct;break}catch(re){NS(r,re)}while(!0);return s&&r.shellSuspendCounter++,Vr=Ps=null,et=c,U.H=d,U.A=m,Ve===null&&(dt=null,Qe=0,$u()),b}function vO(){for(;Ve!==null;)LS(Ve)}function _O(r,s){var o=et;et|=2;var c=MS(),d=kS();dt!==r||Qe!==s?(gd=null,md=Gt()+500,io(r,s)):eo=vr(r,s);e:do try{if(tt!==0&&Ve!==null){s=Ve;var m=Tn;t:switch(tt){case 1:tt=0,Tn=null,so(r,s,m,1);break;case 2:case 9:if(Yb(m)){tt=0,Tn=null,PS(s);break}s=function(){tt!==2&&tt!==9||dt!==r||(tt=7),xr(r)},m.then(s,s);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:Yb(m)?(tt=0,Tn=null,PS(s)):(tt=0,Tn=null,so(r,s,m,7));break;case 5:var b=null;switch(Ve.tag){case 26:b=Ve.memoizedState;case 5:case 27:var E=Ve;if(!b||y1(b)){tt=0,Tn=null;var k=E.sibling;if(k!==null)Ve=k;else{var W=E.return;W!==null?(Ve=W,vd(W)):Ve=null}break t}}tt=0,Tn=null,so(r,s,m,5);break;case 6:tt=0,Tn=null,so(r,s,m,6);break;case 8:Im(),Ct=6;break e;default:throw Error(i(462))}}bO();break}catch(re){NS(r,re)}while(!0);return Vr=Ps=null,U.H=c,U.A=d,et=o,Ve!==null?0:(dt=null,Qe=0,$u(),Ct)}function bO(){for(;Ve!==null&&!kn();)LS(Ve)}function LS(r){var s=lS(r.alternate,r,Jr);r.memoizedProps=r.pendingProps,s===null?vd(r):Ve=s}function PS(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=nS(o,s,s.pendingProps,s.type,void 0,Qe);break;case 11:s=nS(o,s,s.pendingProps,s.type.render,s.ref,Qe);break;case 5:Gp(s);default:uS(o,s),s=Ve=jb(s,Jr),s=lS(o,s,Jr)}r.memoizedProps=r.pendingProps,s===null?vd(r):Ve=s}function so(r,s,o,c){Vr=Ps=null,Gp(s),Ka=null,Il=0;var d=s.return;try{if(cO(r,d,s,o,Qe)){Ct=1,cd(r,Un(o,r.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;Ct=1,cd(r,Un(o,r.current)),Ve=null;return}s.flags&32768?(Ze||c===1?r=!0:eo||(Qe&536870912)!==0?r=!1:(Pi=r=!0,(c===2||c===9||c===3||c===6)&&(c=Hn.current,c!==null&&c.tag===13&&(c.flags|=16384))),jS(s,r)):vd(s)}function vd(r){var s=r;do{if((s.flags&32768)!==0){jS(s,Pi);return}r=s.return;var o=dO(s.alternate,s,Jr);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=r}while(s!==null);Ct===0&&(Ct=5)}function jS(r,s){do{var o=fO(r.alternate,r);if(o!==null){o.flags&=32767,Ve=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Ve=r;return}Ve=r=o}while(r!==null);Ct=6,Ve=null}function US(r,s,o,c,d,m,b,E,k){r.cancelPendingCommit=null;do _d();while(Wt!==0);if((et&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Sp,Ru(r,o,m,b,E,k),r===dt&&(Ve=dt=null,Qe=0),no=s,$i=r,ro=o,Tm=m,Rm=d,AS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,xO(Aa,function(){return FS(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=U.T,U.T=null,d=ee.p,ee.p=2,b=et,et|=4;try{hO(r,s,o)}finally{et=b,ee.p=d,U.T=c}}Wt=1,$S(),zS(),BS()}}function $S(){if(Wt===1){Wt=0;var r=$i,s=no,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=U.T,U.T=null;var c=ee.p;ee.p=2;var d=et;et|=4;try{SS(s,r);var m=Fm,b=Rb(r.containerInfo),E=m.focusedElem,k=m.selectionRange;if(b!==E&&E&&E.ownerDocument&&Tb(E.ownerDocument.documentElement,E)){if(k!==null&&gp(E)){var W=k.start,re=k.end;if(re===void 0&&(re=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(re,E.value.length);else{var ae=E.ownerDocument||document,Z=ae&&ae.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Me=E.textContent.length,Te=Math.min(k.start,Me),at=k.end===void 0?Te:Math.min(k.end,Me);!J.extend&&Te>at&&(b=at,at=Te,Te=b);var q=Cb(E,Te),$=Cb(E,at);if(q&&$&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==$.node||J.focusOffset!==$.offset)){var Q=ae.createRange();Q.setStart(q.node,q.offset),J.removeAllRanges(),Te>at?(J.addRange(Q),J.extend($.node,$.offset)):(Q.setEnd($.node,$.offset),J.addRange(Q))}}}}for(ae=[],J=E;J=J.parentNode;)J.nodeType===1&&ae.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ae.length;E++){var se=ae[E];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Od=!!Hm,Fm=Hm=null}finally{et=d,ee.p=c,U.T=o}}r.current=s,Wt=2}}function zS(){if(Wt===2){Wt=0;var r=$i,s=no,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=U.T,U.T=null;var c=ee.p;ee.p=2;var d=et;et|=4;try{yS(r,s.alternate,s)}finally{et=d,ee.p=c,U.T=o}}Wt=3}}function BS(){if(Wt===4||Wt===3){Wt=0,kr();var r=$i,s=no,o=ro,c=AS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Wt=5:(Wt=0,no=$i=null,HS(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Ui=null),il(o),s=s.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(fn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=U.T,d=ee.p,ee.p=2,U.T=null;try{for(var m=r.onRecoverableError,b=0;b<c.length;b++){var E=c[b];m(E.value,{componentStack:E.stack})}}finally{U.T=s,ee.p=d}}(ro&3)!==0&&_d(),xr(r),d=r.pendingLanes,(o&4194090)!==0&&(d&42)!==0?r===Am?Ul++:(Ul=0,Am=r):Ul=0,$l(0)}}function HS(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,vl(s)))}function _d(r){return $S(),zS(),BS(),FS()}function FS(){if(Wt!==5)return!1;var r=$i,s=Tm;Tm=0;var o=il(ro),c=U.T,d=ee.p;try{ee.p=32>o?32:o,U.T=null,o=Rm,Rm=null;var m=$i,b=ro;if(Wt=0,no=$i=null,ro=0,(et&6)!==0)throw Error(i(331));var E=et;if(et|=4,TS(m.current),ES(m,m.current,b,o),et=E,$l(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(fn,m)}catch{}return!0}finally{ee.p=d,U.T=c,HS(r,s)}}function qS(r,s,o){s=Un(o,s),s=am(r.stateNode,s,2),r=Ii(r,s,2),r!==null&&(Cs(r,2),xr(r))}function ut(r,s,o){if(r.tag===3)qS(r,r,o);else for(;s!==null;){if(s.tag===3){qS(s,r,o);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ui===null||!Ui.has(c))){r=Un(o,r),o=Q0(2),c=Ii(s,o,2),c!==null&&(W0(o,c,s,r),Cs(c,2),xr(c));break}}s=s.return}}function Nm(r,s,o){var c=r.pingCache;if(c===null){c=r.pingCache=new gO;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(o)||(wm=!0,d.add(o),r=SO.bind(null,r,s,o),s.then(r,r))}function SO(r,s,o){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,dt===r&&(Qe&o)===o&&(Ct===4||Ct===3&&(Qe&62914560)===Qe&&300>Gt()-Cm?(et&2)===0&&io(r,0):Em|=o,to===Qe&&(to=0)),xr(r)}function VS(r,s){s===0&&(s=Tu()),r=za(r,s),r!==null&&(Cs(r,s),xr(r))}function wO(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),VS(r,o)}function EO(r,s){var o=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),VS(r,o)}function xO(r,s){return Mn(r,s)}var bd=null,ao=null,Mm=!1,Sd=!1,km=!1,Fs=0;function xr(r){r!==ao&&r.next===null&&(ao===null?bd=ao=r:ao=ao.next=r),Sd=!0,Mm||(Mm=!0,TO())}function $l(r,s){if(!km&&Sd){km=!0;do for(var o=!1,c=bd;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var b=c.suspendedLanes,E=c.pingedLanes;m=(1<<31-Yt(42|r)+1)-1,m&=d&~(b&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,WS(c,m))}else m=Qe,m=xs(c,c===dt?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||vr(c,m)||(o=!0,WS(c,m));c=c.next}while(o);km=!1}}function CO(){GS()}function GS(){Sd=Mm=!1;var r=0;Fs!==0&&(kO()&&(r=Fs),Fs=0);for(var s=Gt(),o=null,c=bd;c!==null;){var d=c.next,m=YS(c,s);m===0?(c.next=null,o===null?bd=d:o.next=d,d===null&&(ao=o)):(o=c,(r!==0||(m&3)!==0)&&(Sd=!0)),c=d}$l(r)}function YS(r,s){for(var o=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-Yt(m),E=1<<b,k=d[b];k===-1?((E&o)===0||(E&c)!==0)&&(d[b]=Cu(E,s)):k<=s&&(r.expiredLanes|=E),m&=~E}if(s=dt,o=Qe,o=xs(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,o===0||r===s&&(tt===2||tt===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&wt(c),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||vr(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(c!==null&&wt(c),il(o)){case 2:case 8:o=Ra;break;case 32:o=Aa;break;case 268435456:o=wi;break;default:o=Aa}return c=QS.bind(null,r),o=Mn(o,c),r.callbackPriority=s,r.callbackNode=o,s}return c!==null&&c!==null&&wt(c),r.callbackPriority=2,r.callbackNode=null,2}function QS(r,s){if(Wt!==0&&Wt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(_d()&&r.callbackNode!==o)return null;var c=Qe;return c=xs(r,r===dt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(DS(r,c,s),YS(r,Gt()),r.callbackNode!=null&&r.callbackNode===o?QS.bind(null,r):null)}function WS(r,s){if(_d())return null;DS(r,s,!0)}function TO(){PO(function(){(et&6)!==0?Mn(Ss,CO):GS()})}function Lm(){return Fs===0&&(Fs=Ia()),Fs}function KS(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Nu(""+r)}function XS(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function RO(r,s,o,c,d){if(s==="submit"&&o&&o.stateNode===d){var m=KS((d[fe]||null).action),b=c.submitter;b&&(s=(s=b[fe]||null)?KS(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var E=new Pu("action","action",null,c,d);r.push({event:E,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Fs!==0){var k=b?XS(d,b):new FormData(d);tm(o,{pending:!0,data:k,method:d.method,action:m},null,k)}}else typeof m=="function"&&(E.preventDefault(),k=b?XS(d,b):new FormData(d),tm(o,{pending:!0,data:k,method:d.method,action:m},m,k))},currentTarget:d}]})}}for(var Pm=0;Pm<bp.length;Pm++){var jm=bp[Pm],AO=jm.toLowerCase(),IO=jm[0].toUpperCase()+jm.slice(1);er(AO,"on"+IO)}er(Db,"onAnimationEnd"),er(Ob,"onAnimationIteration"),er(Nb,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(GD,"onTransitionRun"),er(YD,"onTransitionStart"),er(QD,"onTransitionCancel"),er(Mb,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function ZS(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var c=r[o],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var b=c.length-1;0<=b;b--){var E=c[b],k=E.instance,W=E.currentTarget;if(E=E.listener,k!==m&&d.isPropagationStopped())break e;m=E,d.currentTarget=W;try{m(d)}catch(re){ld(re)}d.currentTarget=null,m=k}else for(b=0;b<c.length;b++){if(E=c[b],k=E.instance,W=E.currentTarget,E=E.listener,k!==m&&d.isPropagationStopped())break e;m=E,d.currentTarget=W;try{m(d)}catch(re){ld(re)}d.currentTarget=null,m=k}}}}function Ge(r,s){var o=s[we];o===void 0&&(o=s[we]=new Set);var c=r+"__bubble";o.has(c)||(JS(s,r,2,!1),o.add(c))}function Um(r,s,o){var c=0;s&&(c|=4),JS(o,r,c,s)}var wd="_reactListening"+Math.random().toString(36).slice(2);function $m(r){if(!r[wd]){r[wd]=!0,rt.forEach(function(o){o!=="selectionchange"&&(DO.has(o)||Um(o,!1,r),Um(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[wd]||(s[wd]=!0,Um("selectionchange",!1,s))}}function JS(r,s,o,c){switch(E1(s)){case 2:var d=rN;break;case 8:d=iN;break;default:d=Jm}o=d.bind(null,s,o,r),d=void 0,!op||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,o,{capture:!0,passive:d}):r.addEventListener(s,o,!0):d!==void 0?r.addEventListener(s,o,{passive:d}):r.addEventListener(s,o,!1)}function zm(r,s,o,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var E=c.stateNode.containerInfo;if(E===d)break;if(b===4)for(b=c.return;b!==null;){var k=b.tag;if((k===3||k===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;E!==null;){if(b=$e(E),b===null)return;if(k=b.tag,k===5||k===6||k===26||k===27){c=m=b;continue e}E=E.parentNode}}c=c.return}ab(function(){var W=m,re=sp(o),ae=[];e:{var Z=kb.get(r);if(Z!==void 0){var J=Pu,Me=r;switch(r){case"keypress":if(ku(o)===0)break e;case"keydown":case"keyup":J=xD;break;case"focusin":Me="focus",J=dp;break;case"focusout":Me="blur",J=dp;break;case"beforeblur":case"afterblur":J=dp;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=cb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=fD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=RD;break;case Db:case Ob:case Nb:J=mD;break;case Mb:J=ID;break;case"scroll":case"scrollend":J=uD;break;case"wheel":J=OD;break;case"copy":case"cut":case"paste":J=yD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=db;break;case"toggle":case"beforetoggle":J=MD}var Te=(s&4)!==0,at=!Te&&(r==="scroll"||r==="scrollend"),q=Te?Z!==null?Z+"Capture":null:Z;Te=[];for(var $=W,Q;$!==null;){var se=$;if(Q=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Q===null||q===null||(se=sl($,q),se!=null&&Te.push(Bl($,se,Q))),at)break;$=$.return}0<Te.length&&(Z=new J(Z,Me,null,o,re),ae.push({event:Z,listeners:Te}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&o!==ip&&(Me=o.relatedTarget||o.fromElement)&&($e(Me)||Me[ye]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Me=o.relatedTarget||o.toElement,J=W,Me=Me?$e(Me):null,Me!==null&&(at=l(Me),Te=Me.tag,Me!==at||Te!==5&&Te!==27&&Te!==6)&&(Me=null)):(J=null,Me=W),J!==Me)){if(Te=cb,se="onMouseLeave",q="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(Te=db,se="onPointerLeave",q="onPointerEnter",$="pointer"),at=J==null?Z:gt(J),Q=Me==null?Z:gt(Me),Z=new Te(se,$+"leave",J,o,re),Z.target=at,Z.relatedTarget=Q,se=null,$e(re)===W&&(Te=new Te(q,$+"enter",Me,o,re),Te.target=Q,Te.relatedTarget=at,se=Te),at=se,J&&Me)t:{for(Te=J,q=Me,$=0,Q=Te;Q;Q=oo(Q))$++;for(Q=0,se=q;se;se=oo(se))Q++;for(;0<$-Q;)Te=oo(Te),$--;for(;0<Q-$;)q=oo(q),Q--;for(;$--;){if(Te===q||q!==null&&Te===q.alternate)break t;Te=oo(Te),q=oo(q)}Te=null}else Te=null;J!==null&&e1(ae,Z,J,Te,!1),Me!==null&&at!==null&&e1(ae,at,Me,Te,!0)}}e:{if(Z=W?gt(W):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var ge=_b;else if(yb(Z))if(bb)ge=FD;else{ge=BD;var He=zD}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?W&&rp(W.elementType)&&(ge=_b):ge=HD;if(ge&&(ge=ge(r,W))){vb(ae,ge,o,re);break e}He&&He(r,Z,W),r==="focusout"&&W&&Z.type==="number"&&W.memoizedProps.value!=null&&np(Z,"number",Z.value)}switch(He=W?gt(W):window,r){case"focusin":(yb(He)||He.contentEditable==="true")&&(ja=He,yp=W,hl=null);break;case"focusout":hl=yp=ja=null;break;case"mousedown":vp=!0;break;case"contextmenu":case"mouseup":case"dragend":vp=!1,Ab(ae,o,re);break;case"selectionchange":if(VD)break;case"keydown":case"keyup":Ab(ae,o,re)}var Ee;if(hp)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Pa?mb(r,o)&&(Ie="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(fb&&o.locale!=="ko"&&(Pa||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Pa&&(Ee=ob()):(Ci=re,lp="value"in Ci?Ci.value:Ci.textContent,Pa=!0)),He=Ed(W,Ie),0<He.length&&(Ie=new ub(Ie,r,null,o,re),ae.push({event:Ie,listeners:He}),Ee?Ie.data=Ee:(Ee=gb(o),Ee!==null&&(Ie.data=Ee)))),(Ee=LD?PD(r,o):jD(r,o))&&(Ie=Ed(W,"onBeforeInput"),0<Ie.length&&(He=new ub("onBeforeInput","beforeinput",null,o,re),ae.push({event:He,listeners:Ie}),He.data=Ee)),RO(ae,r,W,o,re)}ZS(ae,s)})}function Bl(r,s,o){return{instance:r,listener:s,currentTarget:o}}function Ed(r,s){for(var o=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=sl(r,o),d!=null&&c.unshift(Bl(r,d,m)),d=sl(r,s),d!=null&&c.push(Bl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function oo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function e1(r,s,o,c,d){for(var m=s._reactName,b=[];o!==null&&o!==c;){var E=o,k=E.alternate,W=E.stateNode;if(E=E.tag,k!==null&&k===c)break;E!==5&&E!==26&&E!==27||W===null||(k=W,d?(W=sl(o,m),W!=null&&b.unshift(Bl(o,W,k))):d||(W=sl(o,m),W!=null&&b.push(Bl(o,W,k)))),o=o.return}b.length!==0&&r.push({event:s,listeners:b})}var OO=/\r\n?/g,NO=/\u0000|\uFFFD/g;function t1(r){return(typeof r=="string"?r:""+r).replace(OO,`
`).replace(NO,"")}function n1(r,s){return s=t1(s),t1(r)===s}function xd(){}function st(r,s,o,c,d,m){switch(o){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||Ma(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&Ma(r,""+c);break;case"className":$r(r,"class",c);break;case"tabIndex":$r(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":$r(r,o,c);break;case"style":ib(r,c,m);break;case"data":if(s!=="object"){$r(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=Nu(""+c),r.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&st(r,s,"name",d.name,d,null),st(r,s,"formEncType",d.formEncType,d,null),st(r,s,"formMethod",d.formMethod,d,null),st(r,s,"formTarget",d.formTarget,d,null)):(st(r,s,"encType",d.encType,d,null),st(r,s,"method",d.method,d,null),st(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=Nu(""+c),r.setAttribute(o,c);break;case"onClick":c!=null&&(r.onclick=xd);break;case"onScroll":c!=null&&Ge("scroll",r);break;case"onScrollEnd":c!=null&&Ge("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}o=Nu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""+c):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":c===!0?r.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,c):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(o,c):r.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(o):r.setAttribute(o,c);break;case"popover":Ge("beforetoggle",r),Ge("toggle",r),Ur(r,"popover",c);break;case"xlinkActuate":Le(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Le(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Le(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Le(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Le(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Le(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Le(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Le(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Le(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ur(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=lD.get(o)||o,Ur(r,o,c))}}function Bm(r,s,o,c,d,m){switch(o){case"style":ib(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof c=="string"?Ma(r,c):(typeof c=="number"||typeof c=="bigint")&&Ma(r,""+c);break;case"onScroll":c!=null&&Ge("scroll",r);break;case"onScrollEnd":c!=null&&Ge("scrollend",r);break;case"onClick":c!=null&&(r.onclick=xd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_r.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),m=r[fe]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,c,d);break e}o in r?r[o]=c:c===!0?r.setAttribute(o,""):Ur(r,o,c)}}}function Kt(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",r),Ge("load",r);var c=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:st(r,s,m,b,o,null)}}d&&st(r,s,"srcSet",o.srcSet,o,null),c&&st(r,s,"src",o.src,o,null);return;case"input":Ge("invalid",r);var E=m=b=d=null,k=null,W=null;for(c in o)if(o.hasOwnProperty(c)){var re=o[c];if(re!=null)switch(c){case"name":d=re;break;case"type":b=re;break;case"checked":k=re;break;case"defaultChecked":W=re;break;case"value":m=re;break;case"defaultValue":E=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:st(r,s,c,re,o,null)}}eb(r,m,E,k,W,b,d,!1),Du(r);return;case"select":Ge("invalid",r),c=b=m=null;for(d in o)if(o.hasOwnProperty(d)&&(E=o[d],E!=null))switch(d){case"value":m=E;break;case"defaultValue":b=E;break;case"multiple":c=E;default:st(r,s,d,E,o,null)}s=m,o=b,r.multiple=!!c,s!=null?Na(r,!!c,s,!1):o!=null&&Na(r,!!c,o,!0);return;case"textarea":Ge("invalid",r),m=d=c=null;for(b in o)if(o.hasOwnProperty(b)&&(E=o[b],E!=null))switch(b){case"value":c=E;break;case"defaultValue":d=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(i(91));break;default:st(r,s,b,E,o,null)}nb(r,c,d,m),Du(r);return;case"option":for(k in o)if(o.hasOwnProperty(k)&&(c=o[k],c!=null))switch(k){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:st(r,s,k,c,o,null)}return;case"dialog":Ge("beforetoggle",r),Ge("toggle",r),Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":Ge("load",r);break;case"video":case"audio":for(c=0;c<zl.length;c++)Ge(zl[c],r);break;case"image":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"embed":case"source":case"link":Ge("error",r),Ge("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in o)if(o.hasOwnProperty(W)&&(c=o[W],c!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:st(r,s,W,c,o,null)}return;default:if(rp(s)){for(re in o)o.hasOwnProperty(re)&&(c=o[re],c!==void 0&&Bm(r,s,re,c,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(c=o[E],c!=null&&st(r,s,E,c,o,null))}function MO(r,s,o,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,E=null,k=null,W=null,re=null;for(J in o){var ae=o[J];if(o.hasOwnProperty(J)&&ae!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":k=ae;default:c.hasOwnProperty(J)||st(r,s,J,null,c,ae)}}for(var Z in c){var J=c[Z];if(ae=o[Z],c.hasOwnProperty(Z)&&(J!=null||ae!=null))switch(Z){case"type":m=J;break;case"name":d=J;break;case"checked":W=J;break;case"defaultChecked":re=J;break;case"value":b=J;break;case"defaultValue":E=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==ae&&st(r,s,Z,J,c,ae)}}tp(r,b,E,k,W,re,m,d);return;case"select":J=b=E=Z=null;for(m in o)if(k=o[m],o.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":J=k;default:c.hasOwnProperty(m)||st(r,s,m,null,c,k)}for(d in c)if(m=c[d],k=o[d],c.hasOwnProperty(d)&&(m!=null||k!=null))switch(d){case"value":Z=m;break;case"defaultValue":E=m;break;case"multiple":b=m;default:m!==k&&st(r,s,d,m,c,k)}s=E,o=b,c=J,Z!=null?Na(r,!!o,Z,!1):!!c!=!!o&&(s!=null?Na(r,!!o,s,!0):Na(r,!!o,o?[]:"",!1));return;case"textarea":J=Z=null;for(E in o)if(d=o[E],o.hasOwnProperty(E)&&d!=null&&!c.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:st(r,s,E,null,c,d)}for(b in c)if(d=c[b],m=o[b],c.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":Z=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&st(r,s,b,d,c,m)}tb(r,Z,J);return;case"option":for(var Me in o)if(Z=o[Me],o.hasOwnProperty(Me)&&Z!=null&&!c.hasOwnProperty(Me))switch(Me){case"selected":r.selected=!1;break;default:st(r,s,Me,null,c,Z)}for(k in c)if(Z=c[k],J=o[k],c.hasOwnProperty(k)&&Z!==J&&(Z!=null||J!=null))switch(k){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:st(r,s,k,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in o)Z=o[Te],o.hasOwnProperty(Te)&&Z!=null&&!c.hasOwnProperty(Te)&&st(r,s,Te,null,c,Z);for(W in c)if(Z=c[W],J=o[W],c.hasOwnProperty(W)&&Z!==J&&(Z!=null||J!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:st(r,s,W,Z,c,J)}return;default:if(rp(s)){for(var at in o)Z=o[at],o.hasOwnProperty(at)&&Z!==void 0&&!c.hasOwnProperty(at)&&Bm(r,s,at,void 0,c,Z);for(re in c)Z=c[re],J=o[re],!c.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||Bm(r,s,re,Z,c,J);return}}for(var q in o)Z=o[q],o.hasOwnProperty(q)&&Z!=null&&!c.hasOwnProperty(q)&&st(r,s,q,null,c,Z);for(ae in c)Z=c[ae],J=o[ae],!c.hasOwnProperty(ae)||Z===J||Z==null&&J==null||st(r,s,ae,Z,c,J)}var Hm=null,Fm=null;function Cd(r){return r.nodeType===9?r:r.ownerDocument}function r1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i1(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function qm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Vm=null;function kO(){var r=window.event;return r&&r.type==="popstate"?r===Vm?!1:(Vm=r,!0):(Vm=null,!1)}var s1=typeof setTimeout=="function"?setTimeout:void 0,LO=typeof clearTimeout=="function"?clearTimeout:void 0,a1=typeof Promise=="function"?Promise:void 0,PO=typeof queueMicrotask=="function"?queueMicrotask:typeof a1<"u"?function(r){return a1.resolve(null).then(r).catch(jO)}:s1;function jO(r){setTimeout(function(){throw r})}function Bi(r){return r==="head"}function o1(r,s){var o=s,c=0,d=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var b=r.ownerDocument;if(o&1&&Hl(b.documentElement),o&2&&Hl(b.body),o&4)for(o=b.head,Hl(o),b=o.firstChild;b;){var E=b.nextSibling,k=b.nodeName;b[_e]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=E}}if(d===0){r.removeChild(m),Kl(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);Kl(s)}function Gm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Gm(o),Se(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function UO(r,s,o,c){for(;r.nodeType===1;){var d=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=nr(r.nextSibling),r===null)break}return null}function $O(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=nr(r.nextSibling),r===null))return null;return r}function Ym(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function zO(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var c=function(){s(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function nr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Qm=null;function l1(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function c1(r,s,o){switch(s=Cd(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Hl(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var qn=new Map,u1=new Set;function Td(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var ei=ee.d;ee.d={f:BO,r:HO,D:FO,C:qO,L:VO,m:GO,X:QO,S:YO,M:WO};function BO(){var r=ei.f(),s=yd();return r||s}function HO(r){var s=Xe(r);s!==null&&s.tag===5&&s.type==="form"?D0(s):ei.r(r)}var lo=typeof document>"u"?null:document;function d1(r,s,o){var c=lo;if(c&&typeof s=="string"&&s){var d=jn(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),u1.has(d)||(u1.add(d),r={rel:r,crossOrigin:o,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Kt(s,"link",r),ke(s),c.head.appendChild(s)))}}function FO(r){ei.D(r),d1("dns-prefetch",r,null)}function qO(r,s){ei.C(r,s),d1("preconnect",r,s)}function VO(r,s,o){ei.L(r,s,o);var c=lo;if(c&&r&&s){var d='link[rel="preload"][as="'+jn(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+jn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+jn(o.imageSizes)+'"]')):d+='[href="'+jn(r)+'"]';var m=d;switch(s){case"style":m=co(r);break;case"script":m=uo(r)}qn.has(m)||(r=g({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),qn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Fl(m))||s==="script"&&c.querySelector(ql(m))||(s=c.createElement("link"),Kt(s,"link",r),ke(s),c.head.appendChild(s)))}}function GO(r,s){ei.m(r,s);var o=lo;if(o&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+jn(c)+'"][href="'+jn(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=uo(r)}if(!qn.has(m)&&(r=g({rel:"modulepreload",href:r},s),qn.set(m,r),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ql(m)))return}c=o.createElement("link"),Kt(c,"link",r),ke(c),o.head.appendChild(c)}}}function YO(r,s,o){ei.S(r,s,o);var c=lo;if(c&&r){var d=Et(c).hoistableStyles,m=co(r);s=s||"default";var b=d.get(m);if(!b){var E={loading:0,preload:null};if(b=c.querySelector(Fl(m)))E.loading=5;else{r=g({rel:"stylesheet",href:r,"data-precedence":s},o),(o=qn.get(m))&&Wm(r,o);var k=b=c.createElement("link");ke(k),Kt(k,"link",r),k._p=new Promise(function(W,re){k.onload=W,k.onerror=re}),k.addEventListener("load",function(){E.loading|=1}),k.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Rd(b,s,c)}b={type:"stylesheet",instance:b,count:1,state:E},d.set(m,b)}}}function QO(r,s){ei.X(r,s);var o=lo;if(o&&r){var c=Et(o).hoistableScripts,d=uo(r),m=c.get(d);m||(m=o.querySelector(ql(d)),m||(r=g({src:r,async:!0},s),(s=qn.get(d))&&Km(r,s),m=o.createElement("script"),ke(m),Kt(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function WO(r,s){ei.M(r,s);var o=lo;if(o&&r){var c=Et(o).hoistableScripts,d=uo(r),m=c.get(d);m||(m=o.querySelector(ql(d)),m||(r=g({src:r,async:!0,type:"module"},s),(s=qn.get(d))&&Km(r,s),m=o.createElement("script"),ke(m),Kt(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function f1(r,s,o,c){var d=(d=pe.current)?Td(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=co(o.href),o=Et(d).hoistableStyles,c=o.get(s),c||(c={type:"style",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=co(o.href);var m=Et(d).hoistableStyles,b=m.get(r);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=d.querySelector(Fl(r)))&&!m._p&&(b.instance=m,b.state.loading=5),qn.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},qn.set(r,o),m||KO(d,r,o,b.state))),s&&c===null)throw Error(i(528,""));return b}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=uo(o),o=Et(d).hoistableScripts,c=o.get(s),c||(c={type:"script",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function co(r){return'href="'+jn(r)+'"'}function Fl(r){return'link[rel="stylesheet"]['+r+"]"}function h1(r){return g({},r,{"data-precedence":r.precedence,precedence:null})}function KO(r,s,o,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Kt(s,"link",o),ke(s),r.head.appendChild(s))}function uo(r){return'[src="'+jn(r)+'"]'}function ql(r){return"script[async]"+r}function p1(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+jn(o.href)+'"]');if(c)return s.instance=c,ke(c),c;var d=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),ke(c),Kt(c,"style",d),Rd(c,o.precedence,r),s.instance=c;case"stylesheet":d=co(o.href);var m=r.querySelector(Fl(d));if(m)return s.state.loading|=4,s.instance=m,ke(m),m;c=h1(o),(d=qn.get(d))&&Wm(c,d),m=(r.ownerDocument||r).createElement("link"),ke(m);var b=m;return b._p=new Promise(function(E,k){b.onload=E,b.onerror=k}),Kt(m,"link",c),s.state.loading|=4,Rd(m,o.precedence,r),s.instance=m;case"script":return m=uo(o.src),(d=r.querySelector(ql(m)))?(s.instance=d,ke(d),d):(c=o,(d=qn.get(m))&&(c=g({},o),Km(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),ke(d),Kt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Rd(c,o.precedence,r));return s.instance}function Rd(r,s,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,b=0;b<c.length;b++){var E=c[b];if(E.dataset.precedence===s)m=E;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Wm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Km(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Ad=null;function m1(r,s,o){if(Ad===null){var c=new Map,d=Ad=new Map;d.set(o,c)}else d=Ad,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(r))return c;for(c.set(r,null),o=o.getElementsByTagName(r),d=0;d<o.length;d++){var m=o[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var E=c.get(b);E?E.push(m):c.set(b,[m])}}return c}function g1(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function XO(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function y1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Vl=null;function ZO(){}function JO(r,s,o){if(Vl===null)throw Error(i(475));var c=Vl;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=co(o.href),m=r.querySelector(Fl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Id.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,ke(m);return}m=r.ownerDocument||r,o=h1(o),(d=qn.get(d))&&Wm(o,d),m=m.createElement("link"),ke(m);var b=m;b._p=new Promise(function(E,k){b.onload=E,b.onerror=k}),Kt(m,"link",o),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Id.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function eN(){if(Vl===null)throw Error(i(475));var r=Vl;return r.stylesheets&&r.count===0&&Xm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Xm(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Id(){if(this.count--,this.count===0){if(this.stylesheets)Xm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Dd=null;function Xm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Dd=new Map,s.forEach(tN,r),Dd=null,Id.call(r))}function tN(r,s){if(!(s.state.loading&4)){var o=Dd.get(r);if(o)var c=o.get(null);else{o=new Map,Dd.set(r,o);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),c=b)}c&&o.set(null,c)}d=s.instance,b=d.getAttribute("data-precedence"),m=o.get(b)||c,m===c&&o.set(null,d),o.set(b,d),this.count++,c=Id.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Gl={$$typeof:x,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function nN(r,s,o,c,d,m,b,E){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Da(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Da(0),this.hiddenUpdates=Da(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function v1(r,s,o,c,d,m,b,E,k,W,re,ae){return r=new nN(r,s,o,b,E,k,W,ae),s=1,m===!0&&(s|=24),m=En(3,null,null,s),r.current=m,m.stateNode=r,s=Np(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:s},Pp(m),r}function _1(r){return r?(r=Ba,r):Ba}function b1(r,s,o,c,d,m){d=_1(d),c.context===null?c.context=d:c.pendingContext=d,c=Ai(s),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=Ii(r,c,s),o!==null&&(An(o,r,s),wl(o,r,s))}function S1(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Zm(r,s){S1(r,s),(r=r.alternate)&&S1(r,s)}function w1(r){if(r.tag===13){var s=za(r,67108864);s!==null&&An(s,r,67108864),Zm(r,67108864)}}var Od=!0;function rN(r,s,o,c){var d=U.T;U.T=null;var m=ee.p;try{ee.p=2,Jm(r,s,o,c)}finally{ee.p=m,U.T=d}}function iN(r,s,o,c){var d=U.T;U.T=null;var m=ee.p;try{ee.p=8,Jm(r,s,o,c)}finally{ee.p=m,U.T=d}}function Jm(r,s,o,c){if(Od){var d=eg(c);if(d===null)zm(r,s,c,Nd,o),x1(r,c);else if(aN(d,r,s,o,c))c.stopPropagation();else if(x1(r,c),s&4&&-1<sN.indexOf(r)){for(;d!==null;){var m=Xe(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Pr(m.pendingLanes);if(b!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;b;){var k=1<<31-Yt(b);E.entanglements[1]|=k,b&=~k}xr(m),(et&6)===0&&(md=Gt()+500,$l(0))}}break;case 13:E=za(m,2),E!==null&&An(E,m,2),yd(),Zm(m,2)}if(m=eg(c),m===null&&zm(r,s,c,Nd,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else zm(r,s,c,null,o)}}function eg(r){return r=sp(r),tg(r)}var Nd=null;function tg(r){if(Nd=null,r=$e(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=u(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Nd=r,null}function E1(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tl()){case Ss:return 2;case Ra:return 8;case Aa:case Lr:return 32;case wi:return 268435456;default:return 32}default:return 32}}var ng=!1,Hi=null,Fi=null,qi=null,Yl=new Map,Ql=new Map,Vi=[],sN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x1(r,s){switch(r){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Yl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(s.pointerId)}}function Wl(r,s,o,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Xe(s),s!==null&&w1(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function aN(r,s,o,c,d){switch(s){case"focusin":return Hi=Wl(Hi,r,s,o,c,d),!0;case"dragenter":return Fi=Wl(Fi,r,s,o,c,d),!0;case"mouseover":return qi=Wl(qi,r,s,o,c,d),!0;case"pointerover":var m=d.pointerId;return Yl.set(m,Wl(Yl.get(m)||null,r,s,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Ql.set(m,Wl(Ql.get(m)||null,r,s,o,c,d)),!0}return!1}function C1(r){var s=$e(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=u(o),s!==null){r.blockedOn=s,Y(r.priority,function(){if(o.tag===13){var c=Rn();c=rl(c);var d=za(o,c);d!==null&&An(d,o,c),Zm(o,c)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Md(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=eg(r.nativeEvent);if(o===null){o=r.nativeEvent;var c=new o.constructor(o.type,o);ip=c,o.target.dispatchEvent(c),ip=null}else return s=Xe(o),s!==null&&w1(s),r.blockedOn=o,!1;s.shift()}return!0}function T1(r,s,o){Md(r)&&o.delete(s)}function oN(){ng=!1,Hi!==null&&Md(Hi)&&(Hi=null),Fi!==null&&Md(Fi)&&(Fi=null),qi!==null&&Md(qi)&&(qi=null),Yl.forEach(T1),Ql.forEach(T1)}function kd(r,s){r.blockedOn===s&&(r.blockedOn=null,ng||(ng=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,oN)))}var Ld=null;function R1(r){Ld!==r&&(Ld=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ld===r&&(Ld=null);for(var s=0;s<r.length;s+=3){var o=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(tg(c||o)===null)continue;break}var m=Xe(o);m!==null&&(r.splice(s,3),s-=3,tm(m,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function Kl(r){function s(k){return kd(k,r)}Hi!==null&&kd(Hi,r),Fi!==null&&kd(Fi,r),qi!==null&&kd(qi,r),Yl.forEach(s),Ql.forEach(s);for(var o=0;o<Vi.length;o++){var c=Vi[o];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Vi.length&&(o=Vi[0],o.blockedOn===null);)C1(o),o.blockedOn===null&&Vi.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],m=o[c+1],b=d[fe]||null;if(typeof m=="function")b||R1(o);else if(b){var E=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[fe]||null)E=b.formAction;else if(tg(d)!==null)continue}else E=b.action;typeof E=="function"?o[c+1]=E:(o.splice(c,3),c-=3),R1(o)}}}function rg(r){this._internalRoot=r}Pd.prototype.render=rg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,c=Rn();b1(o,c,r,s,null,null)},Pd.prototype.unmount=rg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;b1(r.current,2,null,r,null,null),yd(),s[ye]=null}};function Pd(r){this._internalRoot=r}Pd.prototype.unstable_scheduleHydration=function(r){if(r){var s=j();r={blockedOn:null,target:r,priority:s};for(var o=0;o<Vi.length&&s!==0&&s<Vi[o].priority;o++);Vi.splice(o,0,r),o===0&&C1(r)}};var A1=t.version;if(A1!=="19.1.1")throw Error(i(527,A1,"19.1.1"));ee.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=h(s),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var lN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jd.isDisabled&&jd.supportsFiber)try{fn=jd.inject(lN),_t=jd}catch{}}return Zl.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,c="",d=q0,m=V0,b=G0,E=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(E=s.unstable_transitionCallbacks)),s=v1(r,1,!1,null,null,o,c,d,m,b,E,null),r[ye]=s.current,$m(r),new rg(s)},Zl.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var c=!1,d="",m=q0,b=V0,E=G0,k=null,W=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(k=o.unstable_transitionCallbacks),o.formState!==void 0&&(W=o.formState)),s=v1(r,1,!0,s,o??null,c,d,m,b,E,k,W),s.context=_1(null),o=s.current,c=Rn(),c=rl(c),d=Ai(c),d.callback=null,Ii(o,d,c),o=c,s.current.lanes=o,Cs(s,o),xr(s),r[ye]=s.current,$m(r),new Pd(s)},Zl.version="19.1.1",Zl}var U1;function vN(){if(U1)return ag.exports;U1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),ag.exports=yN(),ag.exports}var _N=vN(),ug={exports:{}},dg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1;function bN(){if($1)return dg;$1=1;var e=mh();function t(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,a=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return dg.useSyncExternalStoreWithSelector=function(h,p,g,y,v){var S=a(null);if(S.current===null){var w={hasValue:!1,value:null};S.current=w}else w=S.current;S=u(function(){function R(N){if(!I){if(I=!0,L=N,N=y(N),v!==void 0&&w.hasValue){var C=w.value;if(v(C,N))return x=C}return x=N}if(C=x,n(L,N))return C;var P=y(N);return v!==void 0&&v(C,P)?(L=N,C):(L=N,x=P)}var I=!1,L,x,A=g===void 0?null:g;return[function(){return R(p())},A===null?void 0:function(){return R(A())}]},[p,g,y,v]);var D=i(h,S[0],S[1]);return l(function(){w.hasValue=!0,w.value=D},[D]),f(D),D},dg}var z1;function SN(){return z1||(z1=1,ug.exports=bN()),ug.exports}var wN=SN();function yC(e){e()}function EN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){yC(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){!i||e===null||(i=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}var B1={notify(){},get:()=>[]};function xN(e,t){let n,i=B1,a=0,l=!1;function u(D){g();const R=i.subscribe(D);let I=!1;return()=>{I||(I=!0,R(),y())}}function f(){i.notify()}function h(){w.onStateChange&&w.onStateChange()}function p(){return l}function g(){a++,n||(n=e.subscribe(h),i=EN())}function y(){a--,n&&a===0&&(n(),n=void 0,i.clear(),i=B1)}function v(){l||(l=!0,g())}function S(){l&&(l=!1,y())}const w={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:h,isSubscribed:p,trySubscribe:v,tryUnsubscribe:S,getListeners:()=>i};return w}var CN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TN=CN(),RN=()=>typeof navigator<"u"&&navigator.product==="ReactNative",AN=RN(),IN=()=>TN||AN?T.useLayoutEffect:T.useEffect,DN=IN();function H1(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function vc(e,t){if(H1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!H1(e[n[a]],t[n[a]]))return!1;return!0}var ON=Symbol.for("react-redux-context"),NN=typeof globalThis<"u"?globalThis:{};function MN(){if(!T.createContext)return{};const e=NN[ON]??=new Map;let t=e.get(T.createContext);return t||(t=T.createContext(null),e.set(T.createContext,t)),t}var ls=MN();function kN(e){const{children:t,context:n,serverState:i,store:a}=e,l=T.useMemo(()=>{const h=xN(a);return{store:a,subscription:h,getServerState:i?()=>i:void 0}},[a,i]),u=T.useMemo(()=>a.getState(),[a]);DN(()=>{const{subscription:h}=l;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),u!==a.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[l,u]);const f=n||ls;return T.createElement(f.Provider,{value:l},t)}var LN=kN;function uv(e=ls){return function(){return T.useContext(e)}}var vC=uv();function _C(e=ls){const t=e===ls?vC:uv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var bC=_C();function PN(e=ls){const t=e===ls?bC:_C(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var SC=PN(),jN=(e,t)=>e===t;function UN(e=ls){const t=e===ls?vC:uv(e),n=(i,a={})=>{const{equalityFn:l=jN}=typeof a=="function"?{equalityFn:a}:a,u=t(),{store:f,subscription:h,getServerState:p}=u;T.useRef(!0);const g=T.useCallback({[i.name](v){return i(v)}}[i.name],[i]),y=wN.useSyncExternalStoreWithSelector(h.addNestedSub,f.getState,p||f.getState,g,l);return T.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var wC=UN(),$N=yC;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var EC=e=>{throw TypeError(e)},zN=(e,t,n)=>t.has(e)||EC("Cannot "+n),fg=(e,t,n)=>(zN(e,t,"read from private field"),n?n.call(e):t.get(e)),BN=(e,t,n)=>t.has(e)?EC("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),F1="popstate";function HN(e={}){function t(a,l){let{pathname:u="/",search:f="",hash:h=""}=gi(a.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Nc("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){let u=a.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let h=a.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:cs(l))}function i(a,l){At(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return qN(t,n,i,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function At(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function FN(){return Math.random().toString(36).substring(2,10)}function q1(e,t){return{usr:e.state,key:e.key,idx:t}}function Nc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?gi(t):t,state:n,key:t&&t.key||i||FN()}}function cs({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function gi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function qN(e,t,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,u=a.history,f="POP",h=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function y(){f="POP";let R=g(),I=R==null?null:R-p;p=R,h&&h({action:f,location:D.location,delta:I})}function v(R,I){f="PUSH";let L=Nc(D.location,R,I);n&&n(L,R),p=g()+1;let x=q1(L,p),A=D.createHref(L);try{u.pushState(x,"",A)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(A)}l&&h&&h({action:f,location:D.location,delta:1})}function S(R,I){f="REPLACE";let L=Nc(D.location,R,I);n&&n(L,R),p=g();let x=q1(L,p),A=D.createHref(L);u.replaceState(x,"",A),l&&h&&h({action:f,location:D.location,delta:0})}function w(R){return xC(R)}let D={get action(){return f},get location(){return e(a,u)},listen(R){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(F1,y),h=R,()=>{a.removeEventListener(F1,y),h=null}},createHref(R){return t(a,R)},createURL:w,encodeLocation(R){let I=w(R);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:v,replace:S,go(R){return u.go(R)}};return D}function xC(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),je(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:cs(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var hc,V1=class{constructor(e){if(BN(this,hc,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(fg(this,hc).has(e))return fg(this,hc).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){fg(this,hc).set(e,t)}};hc=new WeakMap;var VN=new Set(["lazy","caseSensitive","path","id","index","children"]);function GN(e){return VN.has(e)}var YN=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function QN(e){return YN.has(e)}function WN(e){return e.index===!0}function Mc(e,t,n=[],i={},a=!1){return e.map((l,u)=>{let f=[...n,String(u)],h=typeof l.id=="string"?l.id:f.join("-");if(je(l.index!==!0||!l.children,"Cannot specify children on an index route"),je(a||!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),WN(l)){let p={...l,...t(l),id:h};return i[h]=p,p}else{let p={...l,...t(l),id:h,children:void 0};return i[h]=p,l.children&&(p.children=Mc(l.children,t,f,i,a)),p}})}function Zi(e,t,n="/"){return of(e,t,n,!1)}function of(e,t,n,i){let a=typeof t=="string"?gi(t):t,l=Wn(a.pathname||"/",n);if(l==null)return null;let u=CC(e);XN(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=lM(l);f=aM(u[h],p,i)}return f}function KN(e,t){let{route:n,pathname:i,params:a}=e;return{id:n.id,pathname:i,params:a,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function CC(e,t=[],n=[],i="",a=!1){let l=(u,f,h=a,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&h)return;je(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let y=Ar([i,g.relativePath]),v=n.concat(g);u.children&&u.children.length>0&&(je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),CC(u.children,t,v,y,h)),!(u.path==null&&!u.index)&&t.push({path:y,score:iM(y,u.index),routesMeta:v})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let h of TC(u.path))l(u,f,!0,h)}),t}function TC(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let u=TC(i.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...u),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function XN(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sM(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var ZN=/^:[\w-]+$/,JN=3,eM=2,tM=1,nM=10,rM=-2,G1=e=>e==="*";function iM(e,t){let n=e.split("/"),i=n.length;return n.some(G1)&&(i+=rM),t&&(i+=eM),n.filter(a=>!G1(a)).reduce((a,l)=>a+(ZN.test(l)?JN:l===""?tM:nM),i)}function sM(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function aM(e,t,n=!1){let{routesMeta:i}=e,a={},l="/",u=[];for(let f=0;f<i.length;++f){let h=i[f],p=f===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",y=xf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),v=h.route;if(!y&&p&&n&&!i[i.length-1].route.index&&(y=xf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(a,y.params),u.push({params:a,pathname:Ar([l,y.pathname]),pathnameBase:fM(Ar([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=Ar([l,y.pathnameBase]))}return u}function xf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=oM(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],u=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:i.reduce((p,{paramName:g,isOptional:y},v)=>{if(g==="*"){let w=f[v]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const S=f[v];return y&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:e}}function oM(e,t=!1,n=!0){At(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(i.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function lM(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return At(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function cM({basename:e,pathname:t}){return t==="/"?e:Ar([e,t])}function uM(e,t="/"){let{pathname:n,search:i="",hash:a=""}=typeof e=="string"?gi(e):e;return{pathname:n?n.startsWith("/")?n:dM(n,t):t,search:hM(i),hash:pM(a)}}function dM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function hg(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function RC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gh(e){let t=RC(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function yh(e,t,n,i=!1){let a;typeof e=="string"?a=gi(e):(a={...e},je(!a.pathname||!a.pathname.includes("?"),hg("?","pathname","search",a)),je(!a.pathname||!a.pathname.includes("#"),hg("#","pathname","hash",a)),je(!a.search||!a.search.includes("#"),hg("#","search","hash",a)));let l=e===""||a.pathname==="",u=l?"/":a.pathname,f;if(u==null)f=n;else{let y=t.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;a.pathname=v.join("/")}f=y>=0?t[y]:"/"}let h=uM(a,f),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Ar=e=>e.join("/").replace(/\/\/+/g,"/"),fM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Cf=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function kc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var AC=["POST","PUT","PATCH","DELETE"],mM=new Set(AC),gM=["GET",...AC],yM=new Set(gM),vM=new Set([301,302,303,307,308]),_M=new Set([307,308]),pg={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},bM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Jl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},SM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dv=e=>SM.test(e),wM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),IC="remix-router-transitions",DC=Symbol("ResetLoaderData");function EM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";je(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],a=e.mapRouteProperties||wM,l={},u=Mc(e.routes,a,void 0,l),f,h=e.basename||"/";h.startsWith("/")||(h=`/${h}`);let p=e.dataStrategy||AM,g={...e.future},y=null,v=new Set,S=null,w=null,D=null,R=e.hydrationData!=null,I=Zi(u,e.history.location,h),L=!1,x=null,A;if(I==null&&!e.patchRoutesOnNavigation){let j=Gn(404,{pathname:e.history.location.pathname}),{matches:Y,route:te}=Ud(u);A=!0,I=Y,x={[te.id]:j}}else if(I&&!e.hydrationData&&Ts(I,u,e.history.location.pathname).active&&(I=null),I)if(I.some(j=>j.route.lazy))A=!1;else if(!I.some(j=>j.route.loader))A=!0;else{let j=e.hydrationData?e.hydrationData.loaderData:null,Y=e.hydrationData?e.hydrationData.errors:null;if(Y){let te=I.findIndex(ce=>Y[ce.route.id]!==void 0);A=I.slice(0,te+1).every(ce=>!cy(ce.route,j,Y))}else A=I.every(te=>!cy(te.route,j,Y))}else{A=!1,I=[];let j=Ts(null,u,e.history.location.pathname);j.active&&j.matches&&(L=!0,I=j.matches)}let N,C={historyAction:e.history.action,location:e.history.location,matches:I,initialized:A,navigation:pg,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},P="POP",V=!1,H,B=!1,z=new Map,G=null,F=!1,K=!1,ue=new Set,U=new Map,ee=0,ne=-1,oe=new Map,O=new Set,X=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ae(){if(y=e.history.listen(({action:j,location:Y,delta:te})=>{if(me){me(),me=void 0;return}At(de.size===0||te!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Cu({currentLocation:C.location,nextLocation:Y,historyAction:j});if(ce&&te!=null){let fe=new Promise(ye=>{me=ye});e.history.go(te*-1),vr(ce,{state:"blocked",location:Y,proceed(){vr(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),fe.then(()=>e.history.go(te))},reset(){let ye=new Map(C.blockers);ye.set(ce,Jl),Ue({blockers:ye})}});return}return wt(j,Y)}),n){FM(t,z);let j=()=>qM(t,z);t.addEventListener("pagehide",j),G=()=>t.removeEventListener("pagehide",j)}return C.initialized||wt("POP",C.location,{initialHydration:!0}),N}function be(){y&&y(),G&&G(),v.clear(),H&&H.abort(),C.fetchers.forEach((j,Y)=>Yt(Y)),C.blockers.forEach((j,Y)=>xs(Y))}function De(j){return v.add(j),()=>v.delete(j)}function Ue(j,Y={}){j.matches&&(j.matches=j.matches.map(fe=>{let ye=l[fe.route.id],we=fe.route;return we.element!==ye.element||we.errorElement!==ye.errorElement||we.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),C={...C,...j};let te=[],ce=[];C.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?te.push(ye):ce.push(ye))}),ie.forEach(fe=>{!C.fetchers.has(fe)&&!U.has(fe)&&te.push(fe)}),[...v].forEach(fe=>fe(C,{deletedFetchers:te,viewTransitionOpts:Y.viewTransitionOpts,flushSync:Y.flushSync===!0})),te.forEach(fe=>Yt(fe)),ce.forEach(fe=>C.fetchers.delete(fe))}function vt(j,Y,{flushSync:te}={}){let ce=C.actionData!=null&&C.navigation.formMethod!=null&&vn(C.navigation.formMethod)&&C.navigation.state==="loading"&&j.state?._isRedirect!==!0,fe;Y.actionData?Object.keys(Y.actionData).length>0?fe=Y.actionData:fe=null:ce?fe=C.actionData:fe=null;let ye=Y.loaderData?nw(C.loaderData,Y.loaderData,Y.matches||[],Y.errors):C.loaderData,we=C.blockers;we.size>0&&(we=new Map(we),we.forEach((_e,Se)=>we.set(Se,Jl)));let ve=F?!1:Ru(j,Y.matches||C.matches),xe=V===!0||C.navigation.formMethod!=null&&vn(C.navigation.formMethod)&&j.state?._isRedirect!==!0;f&&(u=f,f=void 0),F||P==="POP"||(P==="PUSH"?e.history.push(j,j.state):P==="REPLACE"&&e.history.replace(j,j.state));let Ce;if(P==="POP"){let _e=z.get(C.location.pathname);_e&&_e.has(j.pathname)?Ce={currentLocation:C.location,nextLocation:j}:z.has(j.pathname)&&(Ce={currentLocation:j,nextLocation:C.location})}else if(B){let _e=z.get(C.location.pathname);_e?_e.add(j.pathname):(_e=new Set([j.pathname]),z.set(C.location.pathname,_e)),Ce={currentLocation:C.location,nextLocation:j}}Ue({...Y,actionData:fe,loaderData:ye,historyAction:P,location:j,initialized:!0,navigation:pg,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:xe,blockers:we},{viewTransitionOpts:Ce,flushSync:te===!0}),P="POP",V=!1,B=!1,F=!1,K=!1,pe?.resolve(),pe=null}async function mt(j,Y){if(typeof j=="number"){e.history.go(j);return}let te=ly(C.location,C.matches,h,j,Y?.fromRouteId,Y?.relative),{path:ce,submission:fe,error:ye}=Y1(!1,te,Y),we=C.location,ve=Nc(C.location,ce,Y&&Y.state);ve={...ve,...e.history.encodeLocation(ve)};let xe=Y&&Y.replace!=null?Y.replace:void 0,Ce="PUSH";xe===!0?Ce="REPLACE":xe===!1||fe!=null&&vn(fe.formMethod)&&fe.formAction===C.location.pathname+C.location.search&&(Ce="REPLACE");let _e=Y&&"preventScrollReset"in Y?Y.preventScrollReset===!0:void 0,Se=(Y&&Y.flushSync)===!0,$e=Cu({currentLocation:we,nextLocation:ve,historyAction:Ce});if($e){vr($e,{state:"blocked",location:ve,proceed(){vr($e,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),mt(j,Y)},reset(){let Xe=new Map(C.blockers);Xe.set($e,Jl),Ue({blockers:Xe})}});return}await wt(Ce,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:Y&&Y.replace,enableViewTransition:Y&&Y.viewTransition,flushSync:Se})}function Mn(){pe||(pe=VM()),nl(),Ue({revalidation:"loading"});let j=pe.promise;return C.navigation.state==="submitting"?j:C.navigation.state==="idle"?(wt(C.historyAction,C.location,{startUninterruptedRevalidation:!0}),j):(wt(P||C.historyAction,C.navigation.location,{overrideNavigation:C.navigation,enableViewTransition:B===!0}),j)}async function wt(j,Y,te){H&&H.abort(),H=null,P=j,F=(te&&te.startUninterruptedRevalidation)===!0,Cs(C.location,C.matches),V=(te&&te.preventScrollReset)===!0,B=(te&&te.enableViewTransition)===!0;let ce=f||u,fe=te&&te.overrideNavigation,ye=te?.initialHydration&&C.matches&&C.matches.length>0&&!L?C.matches:Zi(ce,Y,h),we=(te&&te.flushSync)===!0;if(ye&&C.initialized&&!K&&PM(C.location,Y)&&!(te&&te.submission&&vn(te.submission.formMethod))){vt(Y,{matches:ye},{flushSync:we});return}let ve=Ts(ye,ce,Y.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:Et,notFoundMatches:ke,route:rt}=Ia(Y.pathname);vt(Y,{matches:ke,loaderData:{},errors:{[rt.id]:Et}},{flushSync:we});return}H=new AbortController;let xe=yo(e.history,Y,H.signal,te&&te.submission),Ce=e.getContext?await e.getContext():new V1,_e;if(te&&te.pendingError)_e=[Ji(ye).route.id,{type:"error",error:te.pendingError}];else if(te&&te.submission&&vn(te.submission.formMethod)){let Et=await kn(xe,Y,te.submission,ye,Ce,ve.active,te&&te.initialHydration===!0,{replace:te.replace,flushSync:we});if(Et.shortCircuited)return;if(Et.pendingActionResult){let[ke,rt]=Et.pendingActionResult;if(Dn(rt)&&kc(rt.error)&&rt.error.status===404){H=null,vt(Y,{matches:Et.matches,loaderData:{},errors:{[ke]:rt.error}});return}}ye=Et.matches||ye,_e=Et.pendingActionResult,fe=mg(Y,te.submission),we=!1,ve.active=!1,xe=yo(e.history,xe.url,xe.signal)}let{shortCircuited:Se,matches:$e,loaderData:Xe,errors:gt}=await kr(xe,Y,ye,Ce,ve.active,fe,te&&te.submission,te&&te.fetcherSubmission,te&&te.replace,te&&te.initialHydration===!0,we,_e);Se||(H=null,vt(Y,{matches:$e||ye,...rw(_e),loaderData:Xe,errors:gt}))}async function kn(j,Y,te,ce,fe,ye,we,ve={}){nl();let xe=BM(Y,te);if(Ue({navigation:xe},{flushSync:ve.flushSync===!0}),ye){let Se=await Rs(ce,Y.pathname,j.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Xe,route:gt}=Ud(u);return{matches:Xe,pendingActionResult:[gt.id,{type:"error",error:Se.error}]}}let $e=Ji(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[$e,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:$e,error:Xe,route:gt}=Ia(Y.pathname);return{matches:$e,pendingActionResult:[gt.id,{type:"error",error:Xe}]}}}let Ce,_e=lf(ce,Y);if(!_e.route.action&&!_e.route.lazy)Ce={type:"error",error:Gn(405,{method:j.method,pathname:Y.pathname,routeId:_e.route.id})};else{let Se=So(a,l,j,ce,_e,we?[]:i,fe),$e=await wi(j,Se,fe,null);if(Ce=$e[_e.route.id],!Ce){for(let Xe of ce)if($e[Xe.route.id]){Ce=$e[Xe.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(Js(Ce)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=J1(Ce.response.headers.get("Location"),new URL(j.url),h)===C.location.pathname+C.location.search,await Lr(j,Ce,!0,{submission:te,replace:Se}),{shortCircuited:!0}}if(Dn(Ce)){let Se=Ji(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(P="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Ce,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Ce]}}async function kr(j,Y,te,ce,fe,ye,we,ve,xe,Ce,_e,Se){let $e=ye||mg(Y,we),Xe=we||ve||sw($e),gt=!F&&!Ce;if(fe){if(gt){let Ot=Gt(Se);Ue({navigation:$e,...Ot!==void 0?{actionData:Ot}:{}},{flushSync:_e})}let Le=await Rs(te,Y.pathname,j.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){if(Le.partialMatches.length===0){let{matches:zr,route:hn}=Ud(u);return{matches:zr,loaderData:{},errors:{[hn.id]:Le.error}}}let Ot=Ji(Le.partialMatches).route.id;return{matches:Le.partialMatches,loaderData:{},errors:{[Ot]:Le.error}}}else if(Le.matches)te=Le.matches;else{let{error:Ot,notFoundMatches:zr,route:hn}=Ia(Y.pathname);return{matches:zr,loaderData:{},errors:{[hn.id]:Ot}}}}let Et=f||u,{dsMatches:ke,revalidatingFetchers:rt}=Q1(j,ce,a,l,e.history,C,te,Xe,Y,Ce?[]:i,Ce===!0,K,ue,ie,X,O,Et,h,e.patchRoutesOnNavigation!=null,Se);if(ne=++ee,!e.dataStrategy&&!ke.some(Le=>Le.shouldLoad)&&!ke.some(Le=>Le.route.middleware)&&rt.length===0){let Le=ws();return vt(Y,{matches:te,loaderData:{},errors:Se&&Dn(Se[1])?{[Se[0]]:Se[1].error}:null,...rw(Se),...Le?{fetchers:new Map(C.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(gt){let Le={};if(!fe){Le.navigation=$e;let Ot=Gt(Se);Ot!==void 0&&(Le.actionData=Ot)}rt.length>0&&(Le.fetchers=tl(rt)),Ue(Le,{flushSync:_e})}rt.forEach(Le=>{yr(Le.key),Le.controller&&U.set(Le.key,Le.controller)});let _r=()=>rt.forEach(Le=>yr(Le.key));H&&H.signal.addEventListener("abort",_r);let{loaderResults:Sn,fetcherResults:on}=await Eu(ke,rt,j,ce);if(j.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",_r),rt.forEach(Le=>U.delete(Le.key));let Ln=$d(Sn);if(Ln)return await Lr(j,Ln.result,!0,{replace:xe}),{shortCircuited:!0};if(Ln=$d(on),Ln)return O.add(Ln.key),await Lr(j,Ln.result,!0,{replace:xe}),{shortCircuited:!0};let{loaderData:Oa,errors:Ei}=tw(C,te,Sn,Se,rt,on);Ce&&C.errors&&(Ei={...C.errors,...Ei});let jr=ws(),Ur=Es(ne),$r=jr||Ur||rt.length>0;return{matches:te,loaderData:Oa,errors:Ei,...$r?{fetchers:new Map(C.fetchers)}:{}}}function Gt(j){if(j&&!Dn(j[1]))return{[j[0]]:j[1].data};if(C.actionData)return Object.keys(C.actionData).length===0?null:C.actionData}function tl(j){return j.forEach(Y=>{let te=C.fetchers.get(Y.key),ce=ec(void 0,te?te.data:void 0);C.fetchers.set(Y.key,ce)}),new Map(C.fetchers)}async function Ss(j,Y,te,ce){yr(j);let fe=(ce&&ce.flushSync)===!0,ye=f||u,we=ly(C.location,C.matches,h,te,Y,ce?.relative),ve=Zi(ye,we,h),xe=Ts(ve,ye,we);if(xe.active&&xe.matches&&(ve=xe.matches),!ve){_t(j,Y,Gn(404,{pathname:we}),{flushSync:fe});return}let{path:Ce,submission:_e,error:Se}=Y1(!0,we,ce);if(Se){_t(j,Y,Se,{flushSync:fe});return}let $e=e.getContext?await e.getContext():new V1,Xe=(ce&&ce.preventScrollReset)===!0;if(_e&&vn(_e.formMethod)){await Ra(j,Y,Ce,ve,$e,xe.active,fe,Xe,_e);return}X.set(j,{routeId:Y,path:Ce}),await Aa(j,Y,Ce,ve,$e,xe.active,fe,Xe,_e)}async function Ra(j,Y,te,ce,fe,ye,we,ve,xe){nl(),X.delete(j);let Ce=C.fetchers.get(j);fn(j,HM(xe,Ce),{flushSync:we});let _e=new AbortController,Se=yo(e.history,te,_e.signal,xe);if(ye){let bt=await Rs(ce,new URL(Se.url).pathname,Se.signal,j);if(bt.type==="aborted")return;if(bt.type==="error"){_t(j,Y,bt.error,{flushSync:we});return}else if(bt.matches)ce=bt.matches;else{_t(j,Y,Gn(404,{pathname:te}),{flushSync:we});return}}let $e=lf(ce,te);if(!$e.route.action&&!$e.route.lazy){let bt=Gn(405,{method:xe.formMethod,pathname:te,routeId:Y});_t(j,Y,bt,{flushSync:we});return}U.set(j,_e);let Xe=ee,gt=So(a,l,Se,ce,$e,i,fe),ke=(await wi(Se,gt,fe,j))[$e.route.id];if(Se.signal.aborted){U.get(j)===_e&&U.delete(j);return}if(ie.has(j)){if(Js(ke)||Dn(ke)){fn(j,Wi(void 0));return}}else{if(Js(ke))if(U.delete(j),ne>Xe){fn(j,Wi(void 0));return}else return O.add(j),fn(j,ec(xe)),Lr(Se,ke,!1,{fetcherSubmission:xe,preventScrollReset:ve});if(Dn(ke)){_t(j,Y,ke.error);return}}let rt=C.navigation.location||C.location,_r=yo(e.history,rt,_e.signal),Sn=f||u,on=C.navigation.state!=="idle"?Zi(Sn,C.navigation.location,h):C.matches;je(on,"Didn't find any matches after fetcher action");let Ln=++ee;oe.set(j,Ln);let Oa=ec(xe,ke.data);C.fetchers.set(j,Oa);let{dsMatches:Ei,revalidatingFetchers:jr}=Q1(_r,fe,a,l,e.history,C,on,xe,rt,i,!1,K,ue,ie,X,O,Sn,h,e.patchRoutesOnNavigation!=null,[$e.route.id,ke]);jr.filter(bt=>bt.key!==j).forEach(bt=>{let xi=bt.key,Au=C.fetchers.get(xi),Iu=ec(void 0,Au?Au.data:void 0);C.fetchers.set(xi,Iu),yr(xi),bt.controller&&U.set(xi,bt.controller)}),Ue({fetchers:new Map(C.fetchers)});let Ur=()=>jr.forEach(bt=>yr(bt.key));_e.signal.addEventListener("abort",Ur);let{loaderResults:$r,fetcherResults:Le}=await Eu(Ei,jr,_r,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",Ur),oe.delete(j),U.delete(j),jr.forEach(bt=>U.delete(bt.key)),C.fetchers.has(j)){let bt=Wi(ke.data);C.fetchers.set(j,bt)}let Ot=$d($r);if(Ot)return Lr(_r,Ot.result,!1,{preventScrollReset:ve});if(Ot=$d(Le),Ot)return O.add(Ot.key),Lr(_r,Ot.result,!1,{preventScrollReset:ve});let{loaderData:zr,errors:hn}=tw(C,on,$r,void 0,jr,Le);Es(Ln),C.navigation.state==="loading"&&Ln>ne?(je(P,"Expected pending action"),H&&H.abort(),vt(C.navigation.location,{matches:on,loaderData:zr,errors:hn,fetchers:new Map(C.fetchers)})):(Ue({errors:hn,loaderData:nw(C.loaderData,zr,on,hn),fetchers:new Map(C.fetchers)}),K=!1)}async function Aa(j,Y,te,ce,fe,ye,we,ve,xe){let Ce=C.fetchers.get(j);fn(j,ec(xe,Ce?Ce.data:void 0),{flushSync:we});let _e=new AbortController,Se=yo(e.history,te,_e.signal);if(ye){let rt=await Rs(ce,new URL(Se.url).pathname,Se.signal,j);if(rt.type==="aborted")return;if(rt.type==="error"){_t(j,Y,rt.error,{flushSync:we});return}else if(rt.matches)ce=rt.matches;else{_t(j,Y,Gn(404,{pathname:te}),{flushSync:we});return}}let $e=lf(ce,te);U.set(j,_e);let Xe=ee,gt=So(a,l,Se,ce,$e,i,fe),ke=(await wi(Se,gt,fe,j))[$e.route.id];if(U.get(j)===_e&&U.delete(j),!Se.signal.aborted){if(ie.has(j)){fn(j,Wi(void 0));return}if(Js(ke))if(ne>Xe){fn(j,Wi(void 0));return}else{O.add(j),await Lr(Se,ke,!1,{preventScrollReset:ve});return}if(Dn(ke)){_t(j,Y,ke.error);return}fn(j,Wi(ke.data))}}async function Lr(j,Y,te,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:we}={}){Y.response.headers.has("X-Remix-Revalidate")&&(K=!0);let ve=Y.response.headers.get("Location");je(ve,"Expected a Location header on the redirect Response"),ve=J1(ve,new URL(j.url),h);let xe=Nc(C.location,ve,{_isRedirect:!0});if(n){let gt=!1;if(Y.response.headers.has("X-Remix-Reload-Document"))gt=!0;else if(dv(ve)){const Et=xC(ve,!0);gt=Et.origin!==t.location.origin||Wn(Et.pathname,h)==null}if(gt){we?t.location.replace(ve):t.location.assign(ve);return}}H=null;let Ce=we===!0||Y.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:$e}=C.navigation;!ce&&!fe&&_e&&Se&&$e&&(ce=sw(C.navigation));let Xe=ce||fe;if(_M.has(Y.response.status)&&Xe&&vn(Xe.formMethod))await wt(Ce,xe,{submission:{...Xe,formAction:ve},preventScrollReset:ye||V,enableViewTransition:te?B:void 0});else{let gt=mg(xe,ce);await wt(Ce,xe,{overrideNavigation:gt,fetcherSubmission:fe,preventScrollReset:ye||V,enableViewTransition:te?B:void 0})}}async function wi(j,Y,te,ce){let fe,ye={};try{fe=await DM(p,j,Y,ce,te,!1)}catch(we){return Y.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:we}}),ye}if(j.signal.aborted)return ye;for(let[we,ve]of Object.entries(fe))if($M(ve)){let xe=ve.result;ye[we]={type:"redirect",response:kM(xe,j,we,Y,h)}}else ye[we]=await MM(ve);return ye}async function Eu(j,Y,te,ce){let fe=wi(te,j,ce,null),ye=Promise.all(Y.map(async xe=>{if(xe.matches&&xe.match&&xe.request&&xe.controller){let _e=(await wi(xe.request,xe.matches,ce,xe.key))[xe.match.route.id];return{[xe.key]:_e}}else return Promise.resolve({[xe.key]:{type:"error",error:Gn(404,{pathname:xe.path})}})})),we=await fe,ve=(await ye).reduce((xe,Ce)=>Object.assign(xe,Ce),{});return{loaderResults:we,fetcherResults:ve}}function nl(){K=!0,X.forEach((j,Y)=>{U.has(Y)&&ue.add(Y),yr(Y)})}function fn(j,Y,te={}){C.fetchers.set(j,Y),Ue({fetchers:new Map(C.fetchers)},{flushSync:(te&&te.flushSync)===!0})}function _t(j,Y,te,ce={}){let fe=Ji(C.matches,Y);Yt(j),Ue({errors:{[fe.route.id]:te},fetchers:new Map(C.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function Jn(j){return le.set(j,(le.get(j)||0)+1),ie.has(j)&&ie.delete(j),C.fetchers.get(j)||bM}function Yt(j){let Y=C.fetchers.get(j);U.has(j)&&!(Y&&Y.state==="loading"&&oe.has(j))&&yr(j),X.delete(j),oe.delete(j),O.delete(j),ie.delete(j),ue.delete(j),C.fetchers.delete(j)}function ep(j){let Y=(le.get(j)||0)-1;Y<=0?(le.delete(j),ie.add(j)):le.set(j,Y),Ue({fetchers:new Map(C.fetchers)})}function yr(j){let Y=U.get(j);Y&&(Y.abort(),U.delete(j))}function xu(j){for(let Y of j){let te=Jn(Y),ce=Wi(te.data);C.fetchers.set(Y,ce)}}function ws(){let j=[],Y=!1;for(let te of O){let ce=C.fetchers.get(te);je(ce,`Expected fetcher: ${te}`),ce.state==="loading"&&(O.delete(te),j.push(te),Y=!0)}return xu(j),Y}function Es(j){let Y=[];for(let[te,ce]of oe)if(ce<j){let fe=C.fetchers.get(te);je(fe,`Expected fetcher: ${te}`),fe.state==="loading"&&(yr(te),oe.delete(te),Y.push(te))}return xu(Y),Y.length>0}function Pr(j,Y){let te=C.blockers.get(j)||Jl;return de.get(j)!==Y&&de.set(j,Y),te}function xs(j){C.blockers.delete(j),de.delete(j)}function vr(j,Y){let te=C.blockers.get(j)||Jl;je(te.state==="unblocked"&&Y.state==="blocked"||te.state==="blocked"&&Y.state==="blocked"||te.state==="blocked"&&Y.state==="proceeding"||te.state==="blocked"&&Y.state==="unblocked"||te.state==="proceeding"&&Y.state==="unblocked",`Invalid blocker state transition: ${te.state} -> ${Y.state}`);let ce=new Map(C.blockers);ce.set(j,Y),Ue({blockers:ce})}function Cu({currentLocation:j,nextLocation:Y,historyAction:te}){if(de.size===0)return;de.size>1&&At(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],we=C.blockers.get(fe);if(!(we&&we.state==="proceeding")&&ye({currentLocation:j,nextLocation:Y,historyAction:te}))return fe}function Ia(j){let Y=Gn(404,{pathname:j}),te=f||u,{matches:ce,route:fe}=Ud(te);return{notFoundMatches:ce,route:fe,error:Y}}function Tu(j,Y,te){if(S=j,D=Y,w=te||null,!R&&C.navigation===pg){R=!0;let ce=Ru(C.location,C.matches);ce!=null&&Ue({restoreScrollPosition:ce})}return()=>{S=null,D=null,w=null}}function Da(j,Y){return w&&w(j,Y.map(ce=>KN(ce,C.loaderData)))||j.key}function Cs(j,Y){if(S&&D){let te=Da(j,Y);S[te]=D()}}function Ru(j,Y){if(S){let te=Da(j,Y),ce=S[te];if(typeof ce=="number")return ce}return null}function Ts(j,Y,te){if(e.patchRoutesOnNavigation)if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:of(Y,te,h,!0)}}else return{active:!0,matches:of(Y,te,h,!0)||[]};return{active:!1,matches:null}}async function Rs(j,Y,te,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:j};let fe=j;for(;;){let ye=f==null,we=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:te,path:Y,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{te.aborted||W1(_e,Se,we,ve,a,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!te.aborted&&(u=[...u])}if(te.aborted)return{type:"aborted"};let xe=Zi(we,Y,h);if(xe)return{type:"success",matches:xe};let Ce=of(we,Y,h,!0);if(!Ce||fe.length===Ce.length&&fe.every((_e,Se)=>_e.route.id===Ce[Se].route.id))return{type:"success",matches:null};fe=Ce}}function rl(j){l={},f=Mc(j,a,void 0,l)}function il(j,Y,te=!1){let ce=f==null;W1(j,Y,f||u,l,a,te),ce&&(u=[...u],Ue({}))}return N={get basename(){return h},get future(){return g},get state(){return C},get routes(){return u},get window(){return t},initialize:Ae,subscribe:De,enableScrollRestoration:Tu,navigate:mt,fetch:Ss,revalidate:Mn,createHref:j=>e.history.createHref(j),encodeLocation:j=>e.history.encodeLocation(j),getFetcher:Jn,deleteFetcher:ep,dispose:be,getBlocker:Pr,deleteBlocker:xs,patchRoutes:il,_internalFetchControllers:U,_internalSetRoutes:rl,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){Ue(j)}},N}function xM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ly(e,t,n,i,a,l){let u,f;if(a){u=[];for(let p of t)if(u.push(p),p.route.id===a){f=p;break}}else u=t,f=t[t.length-1];let h=yh(i||".",gh(u),Wn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(h.search=e.search,h.hash=e.hash),(i==null||i===""||i===".")&&f){let p=fv(h.search);if(f.route.index&&!p)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&p){let g=new URLSearchParams(h.search),y=g.getAll("index");g.delete("index"),y.filter(S=>S).forEach(S=>g.append("index",S));let v=g.toString();h.search=v?`?${v}`:""}}return n!=="/"&&(h.pathname=cM({basename:n,pathname:h.pathname})),cs(h)}function Y1(e,t,n){if(!n||!xM(n))return{path:t};if(n.formMethod&&!zM(n.formMethod))return{path:t,error:Gn(405,{method:n.formMethod})};let i=()=>({path:t,error:Gn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=PC(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!vn(l))return i();let y=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((v,[S,w])=>`${v}${S}=${w}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:y}}}else if(n.formEncType==="application/json"){if(!vn(l))return i();try{let y=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:y,text:void 0}}}catch{return i()}}}je(typeof FormData=="function","FormData is not available in this environment");let f,h;if(n.formData)f=dy(n.formData),h=n.formData;else if(n.body instanceof FormData)f=dy(n.body),h=n.body;else if(n.body instanceof URLSearchParams)f=n.body,h=ew(f);else if(n.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(n.body),h=ew(f)}catch{return i()}let p={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(vn(p.formMethod))return{path:t,submission:p};let g=gi(t);return e&&g.search&&fv(g.search)&&f.append("index",""),g.search=`?${f}`,{path:cs(g),submission:p}}function Q1(e,t,n,i,a,l,u,f,h,p,g,y,v,S,w,D,R,I,L,x){let A=x?Dn(x[1])?x[1].error:x[1].data:void 0,N=a.createURL(l.location),C=a.createURL(h),P;if(g&&l.errors){let F=Object.keys(l.errors)[0];P=u.findIndex(K=>K.route.id===F)}else if(x&&Dn(x[1])){let F=x[0];P=u.findIndex(K=>K.route.id===F)-1}let V=x?x[1].statusCode:void 0,H=V&&V>=400,B={currentUrl:N,currentParams:l.matches[0]?.params||{},nextUrl:C,nextParams:u[0].params,...f,actionResult:A,actionStatus:V},z=u.map((F,K)=>{let{route:ue}=F,U=null;if(P!=null&&K>P?U=!1:ue.lazy?U=!0:ue.loader==null?U=!1:g?U=cy(ue,l.loaderData,l.errors):CM(l.loaderData,l.matches[K],F)&&(U=!0),U!==null)return uy(n,i,e,F,p,t,U);let ee=H?!1:y||N.pathname+N.search===C.pathname+C.search||N.search!==C.search||TM(l.matches[K],F),ne={...B,defaultShouldRevalidate:ee},oe=Tf(F,ne);return uy(n,i,e,F,p,t,oe,ne)}),G=[];return w.forEach((F,K)=>{if(g||!u.some(le=>le.route.id===F.routeId)||S.has(K))return;let ue=l.fetchers.get(K),U=ue&&ue.state!=="idle"&&ue.data===void 0,ee=Zi(R,F.path,I);if(!ee){if(L&&U)return;G.push({key:K,routeId:F.routeId,path:F.path,matches:null,match:null,request:null,controller:null});return}if(D.has(K))return;let ne=lf(ee,F.path),oe=new AbortController,O=yo(a,F.path,oe.signal),X=null;if(v.has(K))v.delete(K),X=So(n,i,O,ee,ne,p,t);else if(U)y&&(X=So(n,i,O,ee,ne,p,t));else{let le={...B,defaultShouldRevalidate:H?!1:y};Tf(ne,le)&&(X=So(n,i,O,ee,ne,p,t,le))}X&&G.push({key:K,routeId:F.routeId,path:F.path,matches:X,match:ne,request:O,controller:oe})}),{dsMatches:z,revalidatingFetchers:G}}function cy(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,a=n!=null&&n[e.id]!==void 0;return!i&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!a}function CM(e,t,n){let i=!t||n.route.id!==t.route.id,a=!e.hasOwnProperty(n.route.id);return i||a}function TM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Tf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function W1(e,t,n,i,a,l){let u;if(e){let p=i[e];je(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),u=p.children}else u=n;let f=[],h=[];if(t.forEach(p=>{let g=u.find(y=>OC(p,y));g?h.push({existingRoute:g,newRoute:p}):f.push(p)}),f.length>0){let p=Mc(f,a,[e||"_","patch",String(u?.length||"0")],i);u.push(...p)}if(l&&h.length>0)for(let p=0;p<h.length;p++){let{existingRoute:g,newRoute:y}=h[p],v=g,[S]=Mc([y],a,[],{},!0);Object.assign(v,{element:S.element?S.element:v.element,errorElement:S.errorElement?S.errorElement:v.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:v.hydrateFallbackElement})}}function OC(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(a=>OC(n,a))):!1}var K1=new WeakMap,NC=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let a=n[t.id];if(je(a,"No route found in manifest"),!a.lazy||typeof a.lazy!="object")return;let l=a.lazy[e];if(!l)return;let u=K1.get(a);u||(u={},K1.set(a,u));let f=u[e];if(f)return f;let h=(async()=>{let p=GN(e),y=a[e]!==void 0&&e!=="hasErrorBoundary";if(p)At(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(y)At(!1,`Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let v=await l();v!=null&&(Object.assign(a,{[e]:v}),Object.assign(a,i(a)))}typeof a.lazy=="object"&&(a.lazy[e]=void 0,Object.values(a.lazy).every(v=>v===void 0)&&(a.lazy=void 0))})();return u[e]=h,h},X1=new WeakMap;function RM(e,t,n,i,a){let l=n[e.id];if(je(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let g=X1.get(l);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let y=(async()=>{je(typeof e.lazy=="function","No lazy route function found");let v=await e.lazy(),S={};for(let w in v){let D=v[w];if(D===void 0)continue;let R=QN(w),L=l[w]!==void 0&&w!=="hasErrorBoundary";R?At(!R,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):L?At(!L,`Route "${l.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):S[w]=D}Object.assign(l,S),Object.assign(l,{...i(l),lazy:void 0})})();return X1.set(l,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let u=Object.keys(e.lazy),f=[],h;for(let g of u){if(a&&a.includes(g))continue;let y=NC({key:g,route:e,manifest:n,mapRouteProperties:i});y&&(f.push(y),g===t&&(h=y))}let p=f.length>0?Promise.all(f).then(()=>{}):void 0;return p?.catch(()=>{}),h?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:h}}async function Z1(e){let t=e.matches.filter(a=>a.shouldLoad),n={};return(await Promise.all(t.map(a=>a.resolve()))).forEach((a,l)=>{n[t[l].route.id]=a}),n}async function AM(e){return e.matches.some(t=>t.route.middleware)?MC(e,()=>Z1(e)):Z1(e)}function MC(e,t){return IM(e,t,i=>i,jM,n);function n(i,a,l){if(l)return Promise.resolve(Object.assign(l.value,{[a]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(p=>p.route.id===a)||0,u.findIndex(p=>p.unstable_shouldCallHandler())||0),h=Ji(u,u[f].route.id).route.id;return Promise.resolve({[h]:{type:"error",result:i}})}}}async function IM(e,t,n,i,a){let{matches:l,request:u,params:f,context:h}=e,p=l.flatMap(y=>y.route.middleware?y.route.middleware.map(v=>[y.route.id,v]):[]);return await kC({request:u,params:f,context:h},p,t,n,i,a)}async function kC(e,t,n,i,a,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let h=t[u];if(!h)return await n();let[p,g]=h,y,v=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await kC(e,t,n,i,a,l,u+1)},y.value}catch(S){return y={value:await l(S,p,y)},y.value}};try{let S=await g(e,v),w=S!=null?i(S):void 0;return a(w)?w:y?w??y.value:(y={value:await v()},y.value)}catch(S){return await l(S,p,y)}}function LC(e,t,n,i,a){let l=NC({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=RM(i.route,vn(n.method)?"action":"loader",t,e,a);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function uy(e,t,n,i,a,l,u,f=null){let h=!1,p=LC(e,t,n,i,a);return{...i,_lazyPromises:p,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(g){return h=!0,f?typeof g=="boolean"?Tf(i,{...f,defaultShouldRevalidate:g}):Tf(i,f):u},resolve(g){return h||u||g&&!vn(n.method)&&(i.route.lazy||i.route.loader)?OM({request:n,match:i,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:g,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function So(e,t,n,i,a,l,u,f=null){return i.map(h=>h.route.id!==a.route.id?{...h,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:LC(e,t,n,h,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:uy(e,t,n,h,l,u,!0,f))}async function DM(e,t,n,i,a,l){n.some(p=>p._lazyPromises?.middleware)&&await Promise.all(n.map(p=>p._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:a,matches:n},h=await e({...u,fetcherKey:i,runClientMiddleware:p=>{let g=u;return MC(g,()=>p({...g,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return h}async function OM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:a,scopedContext:l}){let u,f,h=vn(e.method),p=h?"action":"loader",g=y=>{let v,S=new Promise((R,I)=>v=I);f=()=>v(),e.signal.addEventListener("abort",f);let w=R=>typeof y!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${t.route.id}]`)):y({request:e,params:t.params,context:l},...R!==void 0?[R]:[]),D=(async()=>{try{return{type:"data",result:await(a?a(I=>w(I)):w())}}catch(R){return{type:"error",result:R}}})();return Promise.race([D,S])};try{let y=h?t.route.action:t.route.loader;if(n||i)if(y){let v,[S]=await Promise.all([g(y).catch(w=>{v=w}),n,i]);if(v!==void 0)throw v;u=S}else{await n;let v=h?t.route.action:t.route.loader;if(v)[u]=await Promise.all([g(v),i]);else if(p==="action"){let S=new URL(e.url),w=S.pathname+S.search;throw Gn(405,{method:e.method,pathname:w,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(y)u=await g(y);else{let v=new URL(e.url),S=v.pathname+v.search;throw Gn(404,{pathname:S})}}catch(y){return{type:"error",result:y}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function NM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function MM(e){let{result:t,type:n}=e;if(jC(t)){let i;try{i=await NM(t)}catch(a){return{type:"error",error:a}}return n==="error"?{type:"error",error:new Cf(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?iw(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Cf(t.init?.status||500,void 0,t.data),statusCode:kc(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:kc(t)?t.status:void 0}:iw(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function kM(e,t,n,i,a){let l=e.headers.get("Location");if(je(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!dv(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=ly(new URL(t.url),u,a,l),e.headers.set("Location",l)}return e}function J1(e,t,n){if(dv(e)){let i=e,a=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Wn(a.pathname,n)!=null;if(a.origin===t.origin&&l)return a.pathname+a.search+a.hash}return e}function yo(e,t,n,i){let a=e.createURL(PC(t)).toString(),l={signal:n};if(i&&vn(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=dy(i.formData):l.body=i.formData}return new Request(a,l)}function dy(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function ew(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function LM(e,t,n,i=!1,a=!1){let l={},u=null,f,h=!1,p={},g=n&&Dn(n[1])?n[1].error:void 0;return e.forEach(y=>{if(!(y.route.id in t))return;let v=y.route.id,S=t[v];if(je(!Js(S),"Cannot handle redirect results in processLoaderData"),Dn(S)){let w=S.error;if(g!==void 0&&(w=g,g=void 0),u=u||{},a)u[v]=w;else{let D=Ji(e,v);u[D.route.id]==null&&(u[D.route.id]=w)}i||(l[v]=DC),h||(h=!0,f=kc(S.error)?S.error.status:500),S.headers&&(p[v]=S.headers)}else l[v]=S.data,S.statusCode&&S.statusCode!==200&&!h&&(f=S.statusCode),S.headers&&(p[v]=S.headers)}),g!==void 0&&n&&(u={[n[0]]:g},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:p}}function tw(e,t,n,i,a,l){let{loaderData:u,errors:f}=LM(t,n,i);return a.filter(h=>!h.matches||h.matches.some(p=>p.shouldLoad)).forEach(h=>{let{key:p,match:g,controller:y}=h;if(y&&y.signal.aborted)return;let v=l[p];if(je(v,"Did not find corresponding fetcher result"),Dn(v)){let S=Ji(e.matches,g?.route.id);f&&f[S.route.id]||(f={...f,[S.route.id]:v.error}),e.fetchers.delete(p)}else if(Js(v))je(!1,"Unhandled fetcher revalidation redirect");else{let S=Wi(v.data);e.fetchers.set(p,S)}}),{loaderData:u,errors:f}}function nw(e,t,n,i){let a=Object.entries(t).filter(([,l])=>l!==DC).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(a[u]=e[u]),i&&i.hasOwnProperty(u))break}return a}function rw(e){return e?Dn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ji(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Ud(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Gn(e,{pathname:t,routeId:n,method:i,type:a,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:a==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new Cf(e||500,u,new Error(f),!0)}function $d(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,a]=t[n];if(Js(a))return{key:i,result:a}}}function PC(e){let t=typeof e=="string"?gi(e):e;return cs({...t,hash:""})}function PM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function jM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&UM(n))}function UM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function $M(e){return jC(e.result)&&vM.has(e.result.status)}function Dn(e){return e.type==="error"}function Js(e){return(e&&e.type)==="redirect"}function iw(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function jC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function zM(e){return yM.has(e.toUpperCase())}function vn(e){return mM.has(e.toUpperCase())}function fv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function lf(e,t){let n=typeof t=="string"?gi(t).search:t.search;if(e[e.length-1].route.index&&fv(n||""))return e[e.length-1];let i=RC(e);return i[i.length-1]}function sw(e){let{formMethod:t,formAction:n,formEncType:i,text:a,formData:l,json:u}=e;if(!(!t||!n||!i)){if(a!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:a};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function mg(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function BM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ec(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function HM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Wi(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function FM(e,t){try{let n=e.sessionStorage.getItem(IC);if(n){let i=JSON.parse(n);for(let[a,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(a,new Set(l||[]))}}catch{}}function qM(e,t){if(t.size>0){let n={};for(let[i,a]of t)n[i]=[...a];try{e.sessionStorage.setItem(IC,JSON.stringify(n))}catch(i){At(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function VM(){let e,t,n=new Promise((i,a)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{a(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Sa=T.createContext(null);Sa.displayName="DataRouter";var iu=T.createContext(null);iu.displayName="DataRouterState";T.createContext(!1);var hv=T.createContext({isTransitioning:!1});hv.displayName="ViewTransition";var UC=T.createContext(new Map);UC.displayName="Fetchers";var GM=T.createContext(null);GM.displayName="Await";var pr=T.createContext(null);pr.displayName="Navigation";var vh=T.createContext(null);vh.displayName="Location";var mr=T.createContext({outlet:null,matches:[],isDataRoute:!1});mr.displayName="Route";var pv=T.createContext(null);pv.displayName="RouteError";function YM(e,{relative:t}={}){je(Ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=T.useContext(pr),{hash:a,pathname:l,search:u}=au(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Ar([n,l])),i.createHref({pathname:f,search:u,hash:a})}function Ho(){return T.useContext(vh)!=null}function yi(){return je(Ho(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(vh).location}var $C="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zC(e){T.useContext(pr).static||T.useLayoutEffect(e)}function su(){let{isDataRoute:e}=T.useContext(mr);return e?lk():QM()}function QM(){je(Ho(),"useNavigate() may be used only in the context of a <Router> component.");let e=T.useContext(Sa),{basename:t,navigator:n}=T.useContext(pr),{matches:i}=T.useContext(mr),{pathname:a}=yi(),l=JSON.stringify(gh(i)),u=T.useRef(!1);return zC(()=>{u.current=!0}),T.useCallback((h,p={})=>{if(At(u.current,$C),!u.current)return;if(typeof h=="number"){n.go(h);return}let g=yh(h,JSON.parse(l),a,p.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ar([t,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[t,n,l,a,e])}var WM=T.createContext(null);function KM(e){let t=T.useContext(mr).outlet;return t&&T.createElement(WM.Provider,{value:e},t)}function au(e,{relative:t}={}){let{matches:n}=T.useContext(mr),{pathname:i}=yi(),a=JSON.stringify(gh(n));return T.useMemo(()=>yh(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function XM(e,t,n,i,a){je(Ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=T.useContext(pr),{matches:u}=T.useContext(mr),f=u[u.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let L=y&&y.path||"";BC(p,!y||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let v=yi(),S;S=v;let w=S.pathname||"/",D=w;if(g!=="/"){let L=g.replace(/^\//,"").split("/");D="/"+w.replace(/^\//,"").split("/").slice(L.length).join("/")}let R=Zi(e,{pathname:D});return At(y||R!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),At(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),nk(R&&R.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:Ar([g,l.encodeLocation?l.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:Ar([g,l.encodeLocation?l.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),u,n,i,a)}function ZM(){let e=ok(),t=kc(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:l},"ErrorBoundary")," or"," ",T.createElement("code",{style:l},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:a},n):null,u)}var JM=T.createElement(ZM,null),ek=class extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?T.createElement(mr.Provider,{value:this.props.routeContext},T.createElement(pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tk({routeContext:e,match:t,children:n}){let i=T.useContext(Sa);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),T.createElement(mr.Provider,{value:e},n)}function nk(e,t=[],n=null,i=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let p=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let g=l[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:y,errors:v}=n,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||S){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,g,y)=>{let v,S=!1,w=null,D=null;n&&(v=u&&g.route.id?u[g.route.id]:void 0,w=g.route.errorElement||JM,f&&(h<0&&y===0?(BC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,D=null):h===y&&(S=!0,D=g.route.hydrateFallbackElement||null)));let R=t.concat(l.slice(0,y+1)),I=()=>{let L;return v?L=w:S?L=D:g.route.Component?L=T.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=p,T.createElement(tk,{match:g,routeContext:{outlet:p,matches:R,isDataRoute:n!=null},children:L})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?T.createElement(ek,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:I(),routeContext:{outlet:null,matches:R,isDataRoute:!0},unstable_onError:i}):I()},null)}function mv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rk(e){let t=T.useContext(Sa);return je(t,mv(e)),t}function ik(e){let t=T.useContext(iu);return je(t,mv(e)),t}function sk(e){let t=T.useContext(mr);return je(t,mv(e)),t}function gv(e){let t=sk(e),n=t.matches[t.matches.length-1];return je(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function ak(){return gv("useRouteId")}function ok(){let e=T.useContext(pv),t=ik("useRouteError"),n=gv("useRouteError");return e!==void 0?e:t.errors?.[n]}function lk(){let{router:e}=rk("useNavigate"),t=gv("useNavigate"),n=T.useRef(!1);return zC(()=>{n.current=!0}),T.useCallback(async(a,l={})=>{At(n.current,$C),n.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...l}))},[e,t])}var aw={};function BC(e,t,n){!t&&!aw[e]&&(aw[e]=!0,At(!1,n))}var ow={};function lw(e,t){!e&&!ow[t]&&(ow[t]=!0,console.warn(t))}function ck(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&At(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:T.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&At(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:T.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&At(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var uk=["HydrateFallback","hydrateFallbackElement"],dk=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function fk({router:e,flushSync:t,unstable_onError:n}){let[i,a]=T.useState(e.state),[l,u]=T.useState(),[f,h]=T.useState({isTransitioning:!1}),[p,g]=T.useState(),[y,v]=T.useState(),[S,w]=T.useState(),D=T.useRef(new Map),R=T.useCallback(N=>{a(C=>(N.errors&&n&&Object.entries(N.errors).forEach(([P,V])=>{C.errors?.[P]!==V&&n(V)}),N))},[n]),I=T.useCallback((N,{deletedFetchers:C,flushSync:P,viewTransitionOpts:V})=>{N.fetchers.forEach((B,z)=>{B.data!==void 0&&D.current.set(z,B.data)}),C.forEach(B=>D.current.delete(B)),lw(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let H=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(lw(V==null||H,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!V||!H){t&&P?t(()=>R(N)):T.startTransition(()=>R(N));return}if(t&&P){t(()=>{y&&(p&&p.resolve(),y.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let B=e.window.document.startViewTransition(()=>{t(()=>R(N))});B.finished.finally(()=>{t(()=>{g(void 0),v(void 0),u(void 0),h({isTransitioning:!1})})}),t(()=>v(B));return}y?(p&&p.resolve(),y.skipTransition(),w({state:N,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(u(N),h({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[e.window,t,y,p,R]);T.useLayoutEffect(()=>e.subscribe(I),[e,I]),T.useEffect(()=>{f.isTransitioning&&!f.flushSync&&g(new dk)},[f]),T.useEffect(()=>{if(p&&l&&e.window){let N=l,C=p.promise,P=e.window.document.startViewTransition(async()=>{T.startTransition(()=>R(N)),await C});P.finished.finally(()=>{g(void 0),v(void 0),u(void 0),h({isTransitioning:!1})}),v(P)}},[l,p,e.window,R]),T.useEffect(()=>{p&&l&&i.location.key===l.location.key&&p.resolve()},[p,y,i.location,l]),T.useEffect(()=>{!f.isTransitioning&&S&&(u(S.state),h({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[f.isTransitioning,S]);let L=T.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:N=>e.navigate(N),push:(N,C,P)=>e.navigate(N,{state:C,preventScrollReset:P?.preventScrollReset}),replace:(N,C,P)=>e.navigate(N,{replace:!0,state:C,preventScrollReset:P?.preventScrollReset})}),[e]),x=e.basename||"/",A=T.useMemo(()=>({router:e,navigator:L,static:!1,basename:x,unstable_onError:n}),[e,L,x,n]);return T.createElement(T.Fragment,null,T.createElement(Sa.Provider,{value:A},T.createElement(iu.Provider,{value:i},T.createElement(UC.Provider,{value:D.current},T.createElement(hv.Provider,{value:f},T.createElement(gk,{basename:x,location:i.location,navigationType:i.historyAction,navigator:L},T.createElement(hk,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var hk=T.memo(pk);function pk({routes:e,future:t,state:n,unstable_onError:i}){return XM(e,void 0,n,i,t)}function yv({to:e,replace:t,state:n,relative:i}){je(Ho(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=T.useContext(pr);At(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=T.useContext(mr),{pathname:u}=yi(),f=su(),h=yh(e,gh(l),u,i==="path"),p=JSON.stringify(h);return T.useEffect(()=>{f(JSON.parse(p),{replace:t,state:n,relative:i})},[f,p,i,t,n]),null}function mk(e){return KM(e.context)}function Cr(e){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gk({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){je(!Ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=T.useMemo(()=>({basename:u,navigator:a,static:l,future:{}}),[u,a,l]);typeof n=="string"&&(n=gi(n));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:v="default"}=n,S=T.useMemo(()=>{let w=Wn(h,u);return w==null?null:{location:{pathname:w,search:p,hash:g,state:y,key:v},navigationType:i}},[u,h,p,g,y,v,i]);return At(S!=null,`<Router basename="${u}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:T.createElement(pr.Provider,{value:f},T.createElement(vh.Provider,{children:t,value:S}))}function fy(e,t=[]){let n=[];return T.Children.forEach(e,(i,a)=>{if(!T.isValidElement(i))return;let l=[...t,a];if(i.type===T.Fragment){n.push.apply(n,fy(i.props.children,l));return}je(i.type===Cr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=fy(i.props.children,l)),n.push(u)}),n}var yk=fy,cf="get",uf="application/x-www-form-urlencoded";function _h(e){return e!=null&&typeof e.tagName=="string"}function vk(e){return _h(e)&&e.tagName.toLowerCase()==="button"}function _k(e){return _h(e)&&e.tagName.toLowerCase()==="form"}function bk(e){return _h(e)&&e.tagName.toLowerCase()==="input"}function Sk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wk(e,t){return e.button===0&&(!t||t==="_self")&&!Sk(e)}var zd=null;function Ek(){if(zd===null)try{new FormData(document.createElement("form"),0),zd=!1}catch{zd=!0}return zd}var xk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gg(e){return e!=null&&!xk.has(e)?(At(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uf}"`),null):e}function Ck(e,t){let n,i,a,l,u;if(_k(e)){let f=e.getAttribute("action");i=f?Wn(f,t):null,n=e.getAttribute("method")||cf,a=gg(e.getAttribute("enctype"))||uf,l=new FormData(e)}else if(vk(e)||bk(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(i=h?Wn(h,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||cf,a=gg(e.getAttribute("formenctype"))||gg(f.getAttribute("enctype"))||uf,l=new FormData(f,e),!Ek()){let{name:p,type:g,value:y}=e;if(g==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,y)}}else{if(_h(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=cf,i=null,a=uf,u=e}return l&&a==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tk(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Wn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function Rk(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ak(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ik(e,t,n){let i=await Promise.all(e.map(async a=>{let l=t.routes[a.route.id];if(l){let u=await Rk(l,n);return u.links?u.links():[]}return[]}));return Mk(i.flat(1).filter(Ak).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function cw(e,t,n,i,a,l){let u=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,f=(h,p)=>n[p].pathname!==h.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==h.params["*"];return l==="assets"?t.filter((h,p)=>u(h,p)||f(h,p)):l==="data"?t.filter((h,p)=>{let g=i.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Dk(e,t,{includeHydrateFallback:n}={}){return Ok(e.map(i=>{let a=t.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Ok(e){return[...new Set(e)]}function Nk(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function Mk(e,t){let n=new Set;return new Set(t),e.reduce((i,a)=>{let l=JSON.stringify(Nk(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function HC(){let e=T.useContext(Sa);return vv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function kk(){let e=T.useContext(iu);return vv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var _v=T.createContext(void 0);_v.displayName="FrameworkContext";function FC(){let e=T.useContext(_v);return vv(e,"You must render this element inside a <HydratedRouter> element"),e}function Lk(e,t){let n=T.useContext(_v),[i,a]=T.useState(!1),[l,u]=T.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=t,v=T.useRef(null);T.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let D=I=>{I.forEach(L=>{u(L.isIntersecting)})},R=new IntersectionObserver(D,{threshold:.5});return v.current&&R.observe(v.current),()=>{R.disconnect()}}},[e]),T.useEffect(()=>{if(i){let D=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(D)}}},[i]);let S=()=>{a(!0)},w=()=>{a(!1),u(!1)};return n?e!=="intent"?[l,v,{}]:[l,v,{onFocus:tc(f,S),onBlur:tc(h,w),onMouseEnter:tc(p,S),onMouseLeave:tc(g,w),onTouchStart:tc(y,S)}]:[!1,v,{}]}function tc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Pk({page:e,...t}){let{router:n}=HC(),i=T.useMemo(()=>Zi(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?T.createElement(Uk,{page:e,matches:i,...t}):null}function jk(e){let{manifest:t,routeModules:n}=FC(),[i,a]=T.useState([]);return T.useEffect(()=>{let l=!1;return Ik(e,t,n).then(u=>{l||a(u)}),()=>{l=!0}},[e,t,n]),i}function Uk({page:e,matches:t,...n}){let i=yi(),{manifest:a,routeModules:l}=FC(),{basename:u}=HC(),{loaderData:f,matches:h}=kk(),p=T.useMemo(()=>cw(e,t,h,a,i,"data"),[e,t,h,a,i]),g=T.useMemo(()=>cw(e,t,h,a,i,"assets"),[e,t,h,a,i]),y=T.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let w=new Set,D=!1;if(t.forEach(I=>{let L=a.routes[I.route.id];!L||!L.hasLoader||(!p.some(x=>x.route.id===I.route.id)&&I.route.id in f&&l[I.route.id]?.shouldRevalidate||L.hasClientLoader?D=!0:w.add(I.route.id))}),w.size===0)return[];let R=Tk(e,u,"data");return D&&w.size>0&&R.searchParams.set("_routes",t.filter(I=>w.has(I.route.id)).map(I=>I.route.id).join(",")),[R.pathname+R.search]},[u,f,i,a,p,t,e,l]),v=T.useMemo(()=>Dk(g,a),[g,a]),S=jk(g);return T.createElement(T.Fragment,null,y.map(w=>T.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),v.map(w=>T.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),S.map(({key:w,link:D})=>T.createElement("link",{key:w,nonce:n.nonce,...D})))}function $k(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var qC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qC&&(window.__reactRouterVersion="7.9.1")}catch{}function zk(e,t){return EM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:HN({window:t?.window}),hydrationData:Bk(),routes:e,mapRouteProperties:ck,hydrationRouteProperties:uk,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function Bk(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:Hk(e.errors)}),e}function Hk(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,a]of t)if(a&&a.__type==="RouteErrorResponse")n[i]=new Cf(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let l=window[a.__subType];if(typeof l=="function")try{let u=new l(a.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(a.message);l.stack="",n[i]=l}}else n[i]=a;return n}var VC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gs=T.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:g,viewTransition:y,...v},S){let{basename:w}=T.useContext(pr),D=typeof p=="string"&&VC.test(p),R,I=!1;if(typeof p=="string"&&D&&(R=p,qC))try{let H=new URL(window.location.href),B=p.startsWith("//")?new URL(H.protocol+p):new URL(p),z=Wn(B.pathname,w);B.origin===H.origin&&z!=null?p=z+B.search+B.hash:I=!0}catch{At(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=YM(p,{relative:a}),[x,A,N]=Lk(i,v),C=Vk(p,{replace:u,state:f,target:h,preventScrollReset:g,relative:a,viewTransition:y});function P(H){t&&t(H),H.defaultPrevented||C(H)}let V=T.createElement("a",{...v,...N,href:R||L,onClick:I||l?t:P,ref:$k(S,A),target:h,"data-discover":!D&&n==="render"?"true":void 0});return x&&!D?T.createElement(T.Fragment,null,V,T.createElement(Pk,{page:L})):V});gs.displayName="Link";var bv=T.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:u,viewTransition:f,children:h,...p},g){let y=au(u,{relative:p.relative}),v=yi(),S=T.useContext(iu),{navigator:w,basename:D}=T.useContext(pr),R=S!=null&&Kk(y)&&f===!0,I=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,L=v.pathname,x=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(L=L.toLowerCase(),x=x?x.toLowerCase():null,I=I.toLowerCase()),x&&D&&(x=Wn(x,D)||x);const A=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let N=L===I||!a&&L.startsWith(I)&&L.charAt(A)==="/",C=x!=null&&(x===I||!a&&x.startsWith(I)&&x.charAt(I.length)==="/"),P={isActive:N,isPending:C,isTransitioning:R},V=N?t:void 0,H;typeof i=="function"?H=i(P):H=[i,N?"active":null,C?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(P):l;return T.createElement(gs,{...p,"aria-current":V,className:H,ref:g,style:B,to:u,viewTransition:f},typeof h=="function"?h(P):h)});bv.displayName="NavLink";var Fk=T.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:a,state:l,method:u=cf,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:y,...v},S)=>{let w=Qk(),D=Wk(f,{relative:p}),R=u.toLowerCase()==="get"?"get":"post",I=typeof f=="string"&&VC.test(f),L=x=>{if(h&&h(x),x.defaultPrevented)return;x.preventDefault();let A=x.nativeEvent.submitter,N=A?.getAttribute("formmethod")||u;w(A||x.currentTarget,{fetcherKey:t,method:N,navigate:n,replace:a,state:l,relative:p,preventScrollReset:g,viewTransition:y})};return T.createElement("form",{ref:S,method:R,action:D,onSubmit:i?h:L,...v,"data-discover":!I&&e==="render"?"true":void 0})});Fk.displayName="Form";function qk(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function GC(e){let t=T.useContext(Sa);return je(t,qk(e)),t}function Vk(e,{target:t,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:u}={}){let f=su(),h=yi(),p=au(e,{relative:l});return T.useCallback(g=>{if(wk(g,t)){g.preventDefault();let y=n!==void 0?n:cs(h)===cs(p);f(e,{replace:y,state:i,preventScrollReset:a,relative:l,viewTransition:u})}},[h,f,p,n,i,t,e,a,l,u])}var Gk=0,Yk=()=>`__${String(++Gk)}__`;function Qk(){let{router:e}=GC("useSubmit"),{basename:t}=T.useContext(pr),n=ak();return T.useCallback(async(i,a={})=>{let{action:l,method:u,encType:f,formData:h,body:p}=Ck(i,t);if(a.navigate===!1){let g=a.fetcherKey||Yk();await e.fetch(g,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||u,formEncType:a.encType||f,flushSync:a.flushSync})}else await e.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||u,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}function Wk(e,{relative:t}={}){let{basename:n}=T.useContext(pr),i=T.useContext(mr);je(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...au(e||".",{relative:t})},u=yi();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Ar([n,l.pathname])),cs(l)}function Kk(e,{relative:t}={}){let n=T.useContext(hv);je(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=GC("useViewTransitionState"),a=au(e,{relative:t});if(!n.isTransitioning)return!1;let l=Wn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Wn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return xf(a.pathname,u)!=null||xf(a.pathname,l)!=null}var Xk=gC();function Zk(e){return T.createElement(fk,{flushSync:Xk.flushSync,...e})}var rn=function(){return rn=Object.assign||function(t){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},rn.apply(this,arguments)};function Rf(e,t,n){if(n||arguments.length===2)for(var i=0,a=t.length,l;i<a;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var pt="-ms-",_c="-moz-",Je="-webkit-",YC="comm",bh="rule",Sv="decl",Jk="@import",QC="@keyframes",e2="@layer",WC=Math.abs,wv=String.fromCharCode,hy=Object.assign;function t2(e,t){return Ft(e,0)^45?(((t<<2^Ft(e,0))<<2^Ft(e,1))<<2^Ft(e,2))<<2^Ft(e,3):0}function KC(e){return e.trim()}function ni(e,t){return(e=t.exec(e))?e[0]:e}function ze(e,t,n){return e.replace(t,n)}function df(e,t,n){return e.indexOf(t,n)}function Ft(e,t){return e.charCodeAt(t)|0}function Io(e,t,n){return e.slice(t,n)}function Tr(e){return e.length}function XC(e){return e.length}function pc(e,t){return t.push(e),e}function n2(e,t){return e.map(t).join("")}function uw(e,t){return e.filter(function(n){return!ni(n,t)})}var Sh=1,Do=1,ZC=0,Kn=0,kt=0,Fo="";function wh(e,t,n,i,a,l,u,f){return{value:e,root:t,parent:n,type:i,props:a,children:l,line:Sh,column:Do,length:u,return:"",siblings:f}}function Ki(e,t){return hy(wh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function fo(e){for(;e.root;)e=Ki(e.root,{children:[e]});pc(e,e.siblings)}function r2(){return kt}function i2(){return kt=Kn>0?Ft(Fo,--Kn):0,Do--,kt===10&&(Do=1,Sh--),kt}function or(){return kt=Kn<ZC?Ft(Fo,Kn++):0,Do++,kt===10&&(Do=1,Sh++),kt}function ia(){return Ft(Fo,Kn)}function ff(){return Kn}function Eh(e,t){return Io(Fo,e,t)}function py(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s2(e){return Sh=Do=1,ZC=Tr(Fo=e),Kn=0,[]}function a2(e){return Fo="",e}function yg(e){return KC(Eh(Kn-1,my(e===91?e+2:e===40?e+1:e)))}function o2(e){for(;(kt=ia())&&kt<33;)or();return py(e)>2||py(kt)>3?"":" "}function l2(e,t){for(;--t&&or()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return Eh(e,ff()+(t<6&&ia()==32&&or()==32))}function my(e){for(;or();)switch(kt){case e:return Kn;case 34:case 39:e!==34&&e!==39&&my(kt);break;case 40:e===41&&my(e);break;case 92:or();break}return Kn}function c2(e,t){for(;or()&&e+kt!==57;)if(e+kt===84&&ia()===47)break;return"/*"+Eh(t,Kn-1)+"*"+wv(e===47?e:or())}function u2(e){for(;!py(ia());)or();return Eh(e,Kn)}function d2(e){return a2(hf("",null,null,null,[""],e=s2(e),0,[0],e))}function hf(e,t,n,i,a,l,u,f,h){for(var p=0,g=0,y=u,v=0,S=0,w=0,D=1,R=1,I=1,L=0,x="",A=a,N=l,C=i,P=x;R;)switch(w=L,L=or()){case 40:if(w!=108&&Ft(P,y-1)==58){df(P+=ze(yg(L),"&","&\f"),"&\f",WC(p?f[p-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:P+=yg(L);break;case 9:case 10:case 13:case 32:P+=o2(w);break;case 92:P+=l2(ff()-1,7);continue;case 47:switch(ia()){case 42:case 47:pc(f2(c2(or(),ff()),t,n,h),h);break;default:P+="/"}break;case 123*D:f[p++]=Tr(P)*I;case 125*D:case 59:case 0:switch(L){case 0:case 125:R=0;case 59+g:I==-1&&(P=ze(P,/\f/g,"")),S>0&&Tr(P)-y&&pc(S>32?fw(P+";",i,n,y-1,h):fw(ze(P," ","")+";",i,n,y-2,h),h);break;case 59:P+=";";default:if(pc(C=dw(P,t,n,p,g,a,f,x,A=[],N=[],y,l),l),L===123)if(g===0)hf(P,t,C,C,A,l,y,f,N);else switch(v===99&&Ft(P,3)===110?100:v){case 100:case 108:case 109:case 115:hf(e,C,C,i&&pc(dw(e,C,C,0,0,a,f,x,a,A=[],y,N),N),a,N,y,f,i?A:N);break;default:hf(P,C,C,C,[""],N,0,f,N)}}p=g=S=0,D=I=1,x=P="",y=u;break;case 58:y=1+Tr(P),S=w;default:if(D<1){if(L==123)--D;else if(L==125&&D++==0&&i2()==125)continue}switch(P+=wv(L),L*D){case 38:I=g>0?1:(P+="\f",-1);break;case 44:f[p++]=(Tr(P)-1)*I,I=1;break;case 64:ia()===45&&(P+=yg(or())),v=ia(),g=y=Tr(x=P+=u2(ff())),L++;break;case 45:w===45&&Tr(P)==2&&(D=0)}}return l}function dw(e,t,n,i,a,l,u,f,h,p,g,y){for(var v=a-1,S=a===0?l:[""],w=XC(S),D=0,R=0,I=0;D<i;++D)for(var L=0,x=Io(e,v+1,v=WC(R=u[D])),A=e;L<w;++L)(A=KC(R>0?S[L]+" "+x:ze(x,/&\f/g,S[L])))&&(h[I++]=A);return wh(e,t,n,a===0?bh:f,h,p,g,y)}function f2(e,t,n,i){return wh(e,t,n,YC,wv(r2()),Io(e,2,-2),0,i)}function fw(e,t,n,i,a){return wh(e,t,n,Sv,Io(e,0,i),Io(e,i+1,-1),i,a)}function JC(e,t,n){switch(t2(e,t)){case 5103:return Je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Je+e+e;case 4789:return _c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Je+e+_c+e+pt+e+e;case 5936:switch(Ft(e,t+11)){case 114:return Je+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Je+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Je+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Je+e+pt+e+e;case 6165:return Je+e+pt+"flex-"+e+e;case 5187:return Je+e+ze(e,/(\w+).+(:[^]+)/,Je+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return Je+e+pt+"flex-item-"+ze(e,/flex-|-self/g,"")+(ni(e,/flex-|baseline/)?"":pt+"grid-row-"+ze(e,/flex-|-self/g,""))+e;case 4675:return Je+e+pt+"flex-line-pack"+ze(e,/align-content|flex-|-self/g,"")+e;case 5548:return Je+e+pt+ze(e,"shrink","negative")+e;case 5292:return Je+e+pt+ze(e,"basis","preferred-size")+e;case 6060:return Je+"box-"+ze(e,"-grow","")+Je+e+pt+ze(e,"grow","positive")+e;case 4554:return Je+ze(e,/([^-])(transform)/g,"$1"+Je+"$2")+e;case 6187:return ze(ze(ze(e,/(zoom-|grab)/,Je+"$1"),/(image-set)/,Je+"$1"),e,"")+e;case 5495:case 3959:return ze(e,/(image-set\([^]*)/,Je+"$1$`$1");case 4968:return ze(ze(e,/(.+:)(flex-)?(.*)/,Je+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Je+e+e;case 4200:if(!ni(e,/flex-|baseline/))return pt+"grid-column-align"+Io(e,t)+e;break;case 2592:case 3360:return pt+ze(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,a){return t=a,ni(i.props,/grid-\w+-end/)})?~df(e+(n=n[t].value),"span",0)?e:pt+ze(e,"-start","")+e+pt+"grid-row-span:"+(~df(n,"span",0)?ni(n,/\d+/):+ni(n,/\d+/)-+ni(e,/\d+/))+";":pt+ze(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return ni(i.props,/grid-\w+-start/)})?e:pt+ze(ze(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ze(e,/(.+)-inline(.+)/,Je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tr(e)-1-t>6)switch(Ft(e,t+1)){case 109:if(Ft(e,t+4)!==45)break;case 102:return ze(e,/(.+:)(.+)-([^]+)/,"$1"+Je+"$2-$3$1"+_c+(Ft(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~df(e,"stretch",0)?JC(ze(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ze(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,u,f,h,p){return pt+a+":"+l+p+(u?pt+a+"-span:"+(f?h:+h-+l)+p:"")+e});case 4949:if(Ft(e,t+6)===121)return ze(e,":",":"+Je)+e;break;case 6444:switch(Ft(e,Ft(e,14)===45?18:11)){case 120:return ze(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Je+(Ft(e,14)===45?"inline-":"")+"box$3$1"+Je+"$2$3$1"+pt+"$2box$3")+e;case 100:return ze(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ze(e,"scroll-","scroll-snap-")+e}return e}function Af(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function h2(e,t,n,i){switch(e.type){case e2:if(e.children.length)break;case Jk:case Sv:return e.return=e.return||e.value;case YC:return"";case QC:return e.return=e.value+"{"+Af(e.children,i)+"}";case bh:if(!Tr(e.value=e.props.join(",")))return""}return Tr(n=Af(e.children,i))?e.return=e.value+"{"+n+"}":""}function p2(e){var t=XC(e);return function(n,i,a,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,a,l)||"";return u}}function m2(e){return function(t){t.root||(t=t.return)&&e(t)}}function g2(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Sv:e.return=JC(e.value,e.length,n);return;case QC:return Af([Ki(e,{value:ze(e.value,"@","@"+Je)})],i);case bh:if(e.length)return n2(n=e.props,function(a){switch(ni(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fo(Ki(e,{props:[ze(a,/:(read-\w+)/,":"+_c+"$1")]})),fo(Ki(e,{props:[a]})),hy(e,{props:uw(n,i)});break;case"::placeholder":fo(Ki(e,{props:[ze(a,/:(plac\w+)/,":"+Je+"input-$1")]})),fo(Ki(e,{props:[ze(a,/:(plac\w+)/,":"+_c+"$1")]})),fo(Ki(e,{props:[ze(a,/:(plac\w+)/,pt+"input-$1")]})),fo(Ki(e,{props:[a]})),hy(e,{props:uw(n,i)});break}return""})}}var y2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},In={},Oo=typeof process<"u"&&In!==void 0&&(In.REACT_APP_SC_ATTR||In.SC_ATTR)||"data-styled",eT="active",tT="data-styled-version",xh="6.1.19",Ev=`/*!sc*/
`,If=typeof window<"u"&&typeof document<"u",v2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==""?In.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&In.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.SC_DISABLE_SPEEDY!==void 0&&In.SC_DISABLE_SPEEDY!==""&&In.SC_DISABLE_SPEEDY!=="false"&&In.SC_DISABLE_SPEEDY),Ch=Object.freeze([]),No=Object.freeze({});function _2(e,t,n){return n===void 0&&(n=No),e.theme!==n.theme&&e.theme||t||n.theme}var nT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),b2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,S2=/(^-|-$)/g;function hw(e){return e.replace(b2,"-").replace(S2,"")}var w2=/(a)(d)/gi,Bd=52,pw=function(e){return String.fromCharCode(e+(e>25?39:97))};function gy(e){var t,n="";for(t=Math.abs(e);t>Bd;t=t/Bd|0)n=pw(t%Bd)+n;return(pw(t%Bd)+n).replace(w2,"$1-$2")}var vg,rT=5381,vo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},iT=function(e){return vo(rT,e)};function E2(e){return gy(iT(e)>>>0)}function x2(e){return e.displayName||e.name||"Component"}function _g(e){return typeof e=="string"&&!0}var sT=typeof Symbol=="function"&&Symbol.for,aT=sT?Symbol.for("react.memo"):60115,C2=sT?Symbol.for("react.forward_ref"):60112,T2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},R2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A2=((vg={})[C2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vg[aT]=oT,vg);function mw(e){return("type"in(t=e)&&t.type.$$typeof)===aT?oT:"$$typeof"in e?A2[e.$$typeof]:T2;var t}var I2=Object.defineProperty,D2=Object.getOwnPropertyNames,gw=Object.getOwnPropertySymbols,O2=Object.getOwnPropertyDescriptor,N2=Object.getPrototypeOf,yw=Object.prototype;function lT(e,t,n){if(typeof t!="string"){if(yw){var i=N2(t);i&&i!==yw&&lT(e,i,n)}var a=D2(t);gw&&(a=a.concat(gw(t)));for(var l=mw(e),u=mw(t),f=0;f<a.length;++f){var h=a[f];if(!(h in R2||n&&n[h]||u&&h in u||l&&h in l)){var p=O2(t,h);try{I2(e,h,p)}catch{}}}}return e}function la(e){return typeof e=="function"}function xv(e){return typeof e=="object"&&"styledComponentId"in e}function ea(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function vw(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Lc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yy(e,t,n){if(n===void 0&&(n=!1),!n&&!Lc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=yy(e[i],t[i]);else if(Lc(t))for(var i in t)e[i]=yy(e[i],t[i]);return e}function Cv(e,t){Object.defineProperty(e,"toString",{value:t})}function ca(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var M2=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;t>=l;)if((l<<=1)<0)throw ca(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=a;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),h=(u=0,n.length);u<h;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n;this.groupSizes[t]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],a=this.indexOfGroup(t),l=a+i,u=a;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Ev);return n},e})(),pf=new Map,Df=new Map,mf=1,Hd=function(e){if(pf.has(e))return pf.get(e);for(;Df.has(mf);)mf++;var t=mf++;return pf.set(e,t),Df.set(t,e),t},k2=function(e,t){mf=t+1,pf.set(e,t),Df.set(t,e)},L2="style[".concat(Oo,"][").concat(tT,'="').concat(xh,'"]'),P2=new RegExp("^".concat(Oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),j2=function(e,t,n){for(var i,a=n.split(","),l=0,u=a.length;l<u;l++)(i=a[l])&&e.registerName(t,i)},U2=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ev),a=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var h=f.match(P2);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(k2(g,p),j2(e,g,h[3]),e.getTag().insertRules(p,a)),a.length=0}else a.push(f)}}},_w=function(e){for(var t=document.querySelectorAll(L2),n=0,i=t.length;n<i;n++){var a=t[n];a&&a.getAttribute(Oo)!==eT&&(U2(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function $2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cT=function(e){var t=document.head,n=e||t,i=document.createElement("style"),a=(function(f){var h=Array.from(f.querySelectorAll("style[".concat(Oo,"]")));return h[h.length-1]})(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(Oo,eT),i.setAttribute(tT,xh);var u=$2();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},z2=(function(){function e(t){this.element=cT(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var u=i[a];if(u.ownerNode===n)return u}throw ca(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),B2=(function(){function e(t){this.element=cT(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),H2=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),bw=If,F2={isServer:!If,useCSSOMInjection:!v2},uT=(function(){function e(t,n,i){t===void 0&&(t=No),n===void 0&&(n={});var a=this;this.options=rn(rn({},F2),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&If&&bw&&(bw=!1,_w(this)),Cv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,h="",p=function(y){var v=(function(I){return Df.get(I)})(y);if(v===void 0)return"continue";var S=l.names.get(v),w=u.getGroup(y);if(S===void 0||!S.size||w.length===0)return"continue";var D="".concat(Oo,".g").concat(y,'[id="').concat(v,'"]'),R="";S!==void 0&&S.forEach(function(I){I.length>0&&(R+="".concat(I,","))}),h+="".concat(w).concat(D,'{content:"').concat(R,'"}').concat(Ev)},g=0;g<f;g++)p(g);return h})(a)})}return e.registerId=function(t){return Hd(t)},e.prototype.rehydrate=function(){!this.server&&If&&_w(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(rn(rn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new H2(a):i?new z2(a):new B2(a)})(this.options),new M2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Hd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Hd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Hd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),q2=/&/g,V2=/^\s*\/\/.*$/gm;function dT(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=dT(n.children,t)),n})}function G2(e){var t,n,i,a=No,l=a.options,u=l===void 0?No:l,f=a.plugins,h=f===void 0?Ch:f,p=function(v,S,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):v},g=h.slice();g.push(function(v){v.type===bh&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(q2,n).replace(i,p))}),u.prefix&&g.push(g2),g.push(h2);var y=function(v,S,w,D){S===void 0&&(S=""),w===void 0&&(w=""),D===void 0&&(D="&"),t=D,n=S,i=new RegExp("\\".concat(n,"\\b"),"g");var R=v.replace(V2,""),I=d2(w||S?"".concat(w," ").concat(S," { ").concat(R," }"):R);u.namespace&&(I=dT(I,u.namespace));var L=[];return Af(I,p2(g.concat(m2(function(x){return L.push(x)})))),L};return y.hash=h.length?h.reduce(function(v,S){return S.name||ca(15),vo(v,S.name)},rT).toString():"",y}var Y2=new uT,vy=G2(),fT=oa.createContext({shouldForwardProp:void 0,styleSheet:Y2,stylis:vy});fT.Consumer;oa.createContext(void 0);function Sw(){return T.useContext(fT)}var Q2=(function(){function e(t,n){var i=this;this.inject=function(a,l){l===void 0&&(l=vy);var u=i.name+l.hash;a.hasNameForId(i.id,u)||a.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Cv(this,function(){throw ca(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=vy),this.name+t.hash},e})(),W2=function(e){return e>="A"&&e<="Z"};function ww(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;W2(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var hT=function(e){return e==null||e===!1||e===""},pT=function(e){var t,n,i=[];for(var a in e){var l=e[a];e.hasOwnProperty(a)&&!hT(l)&&(Array.isArray(l)&&l.isCss||la(l)?i.push("".concat(ww(a),":"),l,";"):Lc(l)?i.push.apply(i,Rf(Rf(["".concat(a," {")],pT(l),!1),["}"],!1)):i.push("".concat(ww(a),": ").concat((t=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in y2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function sa(e,t,n,i){if(hT(e))return[];if(xv(e))return[".".concat(e.styledComponentId)];if(la(e)){if(!la(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var a=e(t);return sa(a,t,n,i)}var l;return e instanceof Q2?n?(e.inject(n,i),[e.getName(i)]):[e]:Lc(e)?pT(e):Array.isArray(e)?Array.prototype.concat.apply(Ch,e.map(function(u){return sa(u,t,n,i)})):[e.toString()]}function K2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(la(n)&&!xv(n))return!1}return!0}var X2=iT(xh),Z2=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&K2(t),this.componentId=n,this.baseHash=vo(X2,n),this.baseStyle=i,uT.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=ea(a,this.staticRulesId);else{var l=vw(sa(this.rules,t,n,i)),u=gy(vo(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}a=ea(a,u),this.staticRulesId=u}else{for(var h=vo(this.baseHash,i.hash),p="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")p+=y;else if(y){var v=vw(sa(y,t,n,i));h=vo(h,v+g),p+=v}}if(p){var S=gy(h>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,i(p,".".concat(S),void 0,this.componentId)),a=ea(a,S)}}return a},e})(),Of=oa.createContext(void 0);Of.Consumer;function J2(e){var t=oa.useContext(Of),n=T.useMemo(function(){return(function(i,a){if(!i)throw ca(14);if(la(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw ca(8);return a?rn(rn({},a),i):i})(e.theme,t)},[e.theme,t]);return e.children?oa.createElement(Of.Provider,{value:n},e.children):null}var bg={};function eL(e,t,n){var i=xv(e),a=e,l=!_g(e),u=t.attrs,f=u===void 0?Ch:u,h=t.componentId,p=h===void 0?(function(A,N){var C=typeof A!="string"?"sc":hw(A);bg[C]=(bg[C]||0)+1;var P="".concat(C,"-").concat(E2(xh+C+bg[C]));return N?"".concat(N,"-").concat(P):P})(t.displayName,t.parentComponentId):h,g=t.displayName,y=g===void 0?(function(A){return _g(A)?"styled.".concat(A):"Styled(".concat(x2(A),")")})(e):g,v=t.displayName&&t.componentId?"".concat(hw(t.displayName),"-").concat(t.componentId):t.componentId||p,S=i&&a.attrs?a.attrs.concat(f).filter(Boolean):f,w=t.shouldForwardProp;if(i&&a.shouldForwardProp){var D=a.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;w=function(A,N){return D(A,N)&&R(A,N)}}else w=D}var I=new Z2(n,v,i?a.componentStyle:void 0);function L(A,N){return(function(C,P,V){var H=C.attrs,B=C.componentStyle,z=C.defaultProps,G=C.foldedComponentIds,F=C.styledComponentId,K=C.target,ue=oa.useContext(Of),U=Sw(),ee=C.shouldForwardProp||U.shouldForwardProp,ne=_2(P,ue,z)||No,oe=(function(me,pe,Ae){for(var be,De=rn(rn({},pe),{className:void 0,theme:Ae}),Ue=0;Ue<me.length;Ue+=1){var vt=la(be=me[Ue])?be(De):be;for(var mt in vt)De[mt]=mt==="className"?ea(De[mt],vt[mt]):mt==="style"?rn(rn({},De[mt]),vt[mt]):vt[mt]}return pe.className&&(De.className=ea(De.className,pe.className)),De})(H,P,ne),O=oe.as||K,X={};for(var le in oe)oe[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&oe.theme===ne||(le==="forwardedAs"?X.as=oe.forwardedAs:ee&&!ee(le,O)||(X[le]=oe[le]));var ie=(function(me,pe){var Ae=Sw(),be=me.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return be})(B,oe),de=ea(G,F);return ie&&(de+=" "+ie),oe.className&&(de+=" "+oe.className),X[_g(O)&&!nT.has(O)?"class":"className"]=de,V&&(X.ref=V),T.createElement(O,X)})(x,A,N)}L.displayName=y;var x=oa.forwardRef(L);return x.attrs=S,x.componentStyle=I,x.displayName=y,x.shouldForwardProp=w,x.foldedComponentIds=i?ea(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=v,x.target=i?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=i?(function(N){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var V=0,H=C;V<H.length;V++)yy(N,H[V],!0);return N})({},a.defaultProps,A):A}}),Cv(x,function(){return".".concat(x.styledComponentId)}),l&&lT(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Ew(e,t){for(var n=[e[0]],i=0,a=t.length;i<a;i+=1)n.push(t[i],e[i+1]);return n}var xw=function(e){return Object.assign(e,{isCss:!0})};function an(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(la(e)||Lc(e))return xw(sa(Ew(Ch,Rf([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?sa(i):xw(sa(Ew(i,t)))}function _y(e,t,n){if(n===void 0&&(n=No),!t)throw ca(1,t);var i=function(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,an.apply(void 0,Rf([a],l,!1)))};return i.attrs=function(a){return _y(e,t,rn(rn({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return _y(e,t,rn(rn({},n),a))},i}var mT=function(e){return _y(eL,e)},M=mT;nT.forEach(function(e){M[e]=mT(e)});const wo=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,us=globalThis,bc="10.11.0";function gT(){return Tv(us),us}function Tv(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||bc,t[bc]=t[bc]||{}}function Rv(e,t,n=us){const i=n.__SENTRY__=n.__SENTRY__||{},a=i[bc]=i[bc]||{};return a[e]||(a[e]=t())}const tL="Sentry Logger ",Cw={};function nL(e){if(!("console"in us))return e();const t=us.console,n={},i=Object.keys(Cw);i.forEach(a=>{const l=Cw[a];n[a]=t[a],t[a]=l});try{return e()}finally{i.forEach(a=>{t[a]=n[a]})}}function rL(){Iv().enabled=!0}function iL(){Iv().enabled=!1}function yT(){return Iv().enabled}function sL(...e){Av("log",...e)}function aL(...e){Av("warn",...e)}function oL(...e){Av("error",...e)}function Av(e,...t){wo&&yT()&&nL(()=>{us.console[e](`${tL}[${e}]:`,...t)})}function Iv(){return wo?Rv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const gf={enable:rL,disable:iL,isEnabled:yT,log:sL,warn:aL,error:oL},lL=Object.prototype.toString;function cL(e,t){return lL.call(e)===`[object ${t}]`}function uL(e){return cL(e,"Object")}function dL(e){return!!(e?.then&&typeof e.then=="function")}function fL(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function hL(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{wo&&gf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function pL(){const e=us;return e.crypto||e.msCrypto}function Sc(e=pL()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const vT=1e3;function _T(){return Date.now()/vT}function mL(){const{performance:e}=us;if(!e?.now||!e.timeOrigin)return _T;const t=e.timeOrigin;return()=>(t+e.now())/vT}let Tw;function gL(){return(Tw??(Tw=mL()))()}function yL(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||gL(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Sc()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function bT(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=bT(i[a],t[a],n-1));return i}function Rw(){return Sc()}const by="_sentrySpan";function Aw(e,t){t?hL(e,by,t):delete e[by]}function Iw(e){return e[by]}const vL=100;class ua{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Rw(),sampleRand:Math.random()}}clone(){const t=new ua;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,Aw(t,Iw(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&yL(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof ua?n.getScopeData():uL(n)?t:void 0,{tags:a,extra:l,user:u,contexts:f,level:h,fingerprint:p=[],propagationContext:g}=i||{};return this._tags={...this._tags,...a},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),h&&(this._level=h),p.length&&(this._fingerprint=p),g&&(this._propagationContext=g),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,Aw(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Rw(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:vL;if(i<=0)return this;const a={timestamp:_T(),...t,message:t.message?fL(t.message,2048):t.message};return this._breadcrumbs.push(a),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:Iw(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=bT(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Sc();if(!this._client)return wo&&gf.warn("No client configured on scope - will not capture exception!"),i;const a=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:a,...n,event_id:i},this),i}captureMessage(t,n,i){const a=i?.event_id||Sc();if(!this._client)return wo&&gf.warn("No client configured on scope - will not capture message!"),a;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:a},this),a}captureEvent(t,n){const i=n?.event_id||Sc();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(wo&&gf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function _L(){return Rv("defaultCurrentScope",()=>new ua)}function bL(){return Rv("defaultIsolationScope",()=>new ua)}class SL{constructor(t,n){let i;t?i=t:i=new ua;let a;n?a=n:a=new ua,this._stack=[{scope:i}],this._isolationScope=a}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(a){throw this._popScope(),a}return dL(i)?i.then(a=>(this._popScope(),a),a=>{throw this._popScope(),a}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Mo(){const e=gT(),t=Tv(e);return t.stack=t.stack||new SL(_L(),bL())}function wL(e){return Mo().withScope(e)}function EL(e,t){const n=Mo();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function Dw(e){return Mo().withScope(()=>e(Mo().getIsolationScope()))}function xL(){return{withIsolationScope:Dw,withScope:wL,withSetScope:EL,withSetIsolationScope:(e,t)=>Dw(t),getCurrentScope:()=>Mo().getScope(),getIsolationScope:()=>Mo().getIsolationScope()}}function CL(e){const t=Tv(e);return t.acs?t.acs:xL()}function ST(){const e=gT();return CL(e).getCurrentScope()}function Dr(e,t){return ST().captureException(e,void 0)}function Dv(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return ST().captureMessage(e,n,i)}const TL=()=>{};var Ow={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(e,t){if(!e)throw qo(t)},qo=function(e){return new Error("Firebase Database ("+wT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},RL=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const a=e[n++];if(a<128)t[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=e[n++];t[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=e[n++],u=e[n++],f=e[n++],h=((a&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return t.join("")},Ov={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<e.length;a+=3){const l=e[a],u=a+1<e.length,f=u?e[a+1]:0,h=a+2<e.length,p=h?e[a+2]:0,g=l>>2,y=(l&3)<<4|f>>4;let v=(f&15)<<2|p>>6,S=p&63;h||(S=64,u||(v=64)),i.push(n[g],n[y],n[v],n[S])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ET(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):RL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<e.length;){const l=n[e.charAt(a++)],f=a<e.length?n[e.charAt(a)]:0;++a;const p=a<e.length?n[e.charAt(a)]:64;++a;const y=a<e.length?n[e.charAt(a)]:64;if(++a,l==null||f==null||p==null||y==null)throw new AL;const v=l<<2|f>>4;if(i.push(v),p!==64){const S=f<<4&240|p>>2;if(i.push(S),y!==64){const w=p<<6&192|y;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class AL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xT=function(e){const t=ET(e);return Ov.encodeByteArray(t,!0)},Nf=function(e){return xT(e).replace(/\./g,"")},Mf=function(e){try{return Ov.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(e){return CT(void 0,e)}function CT(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!DL(n)||(e[n]=CT(e[n],t[n]));return e}function DL(e){return e!=="__proto__"}/**
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
 */function OL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NL=()=>OL().__FIREBASE_DEFAULTS__,ML=()=>{if(typeof process>"u"||typeof Ow>"u")return;const e=Ow.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Mf(e[1]);return t&&JSON.parse(t)},Nv=()=>{try{return TL()||NL()||ML()||kL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},TT=e=>Nv()?.emulatorHosts?.[e],LL=e=>{const t=TT(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},RT=()=>Nv()?.config,AT=e=>Nv()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Vo(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function IT(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function PL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",a=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Nf(JSON.stringify(n)),Nf(JSON.stringify(u)),""].join(".")}const wc={};function jL(){const e={prod:[],emulator:[]};for(const t of Object.keys(wc))wc[t]?e.emulator.push(t):e.prod.push(t);return e}function UL(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Nw=!1;function DT(e,t){if(typeof window>"u"||typeof document>"u"||!Vo(window.location.host)||wc[e]===t||wc[e]||Nw)return;wc[e]=t;function n(v){return`__firebase__banner__${v}`}const i="__firebase__banner",l=jL().prod.length>0;function u(){const v=document.getElementById(i);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function p(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Nw=!0,u()},v}function g(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function y(){const v=UL(i),S=n("text"),w=document.getElementById(S)||document.createElement("span"),D=n("learnmore"),R=document.getElementById(D)||document.createElement("a"),I=n("preprendIcon"),L=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const x=v.element;f(x),g(R,D);const A=p();h(L,I),x.append(L,w,R,A),document.body.appendChild(x)}l?(w.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function $L(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function OT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BL(){const e=dn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function HL(){return wT.NODE_ADMIN===!0}function NT(){try{return typeof indexedDB=="object"}catch{return!1}}function MT(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{t(a.error?.message||"")}}catch(n){t(n)}})}function FL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL="FirebaseError";class vi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=qL,Object.setPrototypeOf(this,vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wa.prototype.create)}}class wa{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},a=`${this.service}/${t}`,l=this.errors[t],u=l?VL(l,i):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new vi(a,f,i)}}function VL(e,t){return e.replace(GL,(n,i)=>{const a=t[i];return a!=null?String(a):`<${i}?>`})}const GL=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(e){return JSON.parse(e)}function Ut(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=function(e){let t={},n={},i={},a="";try{const l=e.split(".");t=Pc(Mf(l[0])||""),n=Pc(Mf(l[1])||""),a=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:a}},YL=function(e){const t=kT(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},QL=function(e){const t=kT(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ko(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Sy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function kf(e,t,n){const i={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=t.call(n,e[a],a,e));return i}function da(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const a of n){if(!i.includes(a))return!1;const l=e[a],u=t[a];if(Mw(l)&&Mw(u)){if(!da(l,u))return!1}else if(l!==u)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function Mw(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(a=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function mc(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");t[decodeURIComponent(a)]=decodeURIComponent(l)}}),t}function gc(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let y=0;y<16;y++)i[y]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)i[y]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let y=16;y<80;y++){const v=i[y-3]^i[y-8]^i[y-14]^i[y-16];i[y]=(v<<1|v>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4],p,g;for(let y=0;y<80;y++){y<40?y<20?(p=f^l&(u^f),g=1518500249):(p=l^u^f,g=1859775393):y<60?(p=l&u|f&(l|u),g=2400959708):(p=l^u^f,g=3395469782);const v=(a<<5|a>>>27)+p+h+g+i[y]&4294967295;h=f,f=u,u=(l<<30|l>>>2)&4294967295,l=a,a=v}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<n;){if(u===0)for(;a<=i;)this.compress_(t,a),a+=this.blockSize;if(typeof t=="string"){for(;a<n;)if(l[u]=t.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<n;)if(l[u]=t[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[a]>>l&255,++i;return t}}function KL(e,t){const n=new XL(e,t);return n.subscribe.bind(n)}class XL{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let a;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ZL(t,["next","error","complete"])?a=t:a={next:t,error:n,complete:i},a.next===void 0&&(a.next=Sg),a.error===void 0&&(a.error=Sg),a.complete===void 0&&(a.complete=Sg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZL(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Sg(){}function Th(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);if(a>=55296&&a<=56319){const l=a-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;a=65536+(l<<10)+u}a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):a<65536?(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},Rh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Vt(e){return e&&e._delegate?e._delegate:e}class fr{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class e4{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new ou;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(n4(t))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(t=Ks){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ks){return this.instances.has(t)}getOptions(t=Ks){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(a)}return a}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(t),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&t(l,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:t4(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ks){return this.component?this.component.multipleInstances?t:Ks:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function t4(e){return e===Ks?void 0:e}function n4(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new e4(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ot||(ot={}));const i4={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},s4=ot.INFO,a4={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},o4=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),a=a4[t];if(a)console[a](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class kv{constructor(t){this.name=t,this._logLevel=s4,this._logHandler=o4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?i4[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...t),this._logHandler(this,ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...t),this._logHandler(this,ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...t),this._logHandler(this,ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...t),this._logHandler(this,ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...t),this._logHandler(this,ot.ERROR,...t)}}const l4=(e,t)=>t.some(n=>e instanceof n);let kw,Lw;function c4(){return kw||(kw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u4(){return Lw||(Lw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LT=new WeakMap,wy=new WeakMap,PT=new WeakMap,wg=new WeakMap,Lv=new WeakMap;function d4(e){const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(ci(e.result)),a()},u=()=>{i(e.error),a()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&LT.set(n,e)}).catch(()=>{}),Lv.set(t,e),t}function f4(e){if(wy.has(e))return;const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),a()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});wy.set(e,t)}let Ey={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||PT.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function h4(e){Ey=e(Ey)}function p4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Eg(this),t,...n);return PT.set(i,t.sort?t.sort():[t]),ci(i)}:u4().includes(e)?function(...t){return e.apply(Eg(this),t),ci(LT.get(this))}:function(...t){return ci(e.apply(Eg(this),t))}}function m4(e){return typeof e=="function"?p4(e):(e instanceof IDBTransaction&&f4(e),l4(e,c4())?new Proxy(e,Ey):e)}function ci(e){if(e instanceof IDBRequest)return d4(e);if(wg.has(e))return wg.get(e);const t=m4(e);return t!==e&&(wg.set(e,t),Lv.set(t,e)),t}const Eg=e=>Lv.get(e);function Ah(e,t,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const u=indexedDB.open(e,t),f=ci(u);return i&&u.addEventListener("upgradeneeded",h=>{i(ci(u.result),h.oldVersion,h.newVersion,ci(u.transaction),h)}),n&&u.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),f.then(h=>{l&&h.addEventListener("close",()=>l()),a&&h.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),f}function xg(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),ci(n).then(()=>{})}const g4=["get","getKey","getAll","getAllKeys","count"],y4=["put","add","delete","clear"],Cg=new Map;function Pw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Cg.get(t))return Cg.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,a=y4.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||g4.includes(n)))return;const l=async function(u,...f){const h=this.transaction(u,a?"readwrite":"readonly");let p=h.store;return i&&(p=p.index(f.shift())),(await Promise.all([p[n](...f),a&&h.done]))[0]};return Cg.set(t,l),l}h4(e=>({...e,get:(t,n,i)=>Pw(t,n)||e.get(t,n,i),has:(t,n)=>!!Pw(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_4(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function _4(e){return e.getComponent()?.type==="VERSION"}const xy="@firebase/app",jw="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new kv("@firebase/app"),b4="@firebase/app-compat",S4="@firebase/analytics-compat",w4="@firebase/analytics",E4="@firebase/app-check-compat",x4="@firebase/app-check",C4="@firebase/auth",T4="@firebase/auth-compat",R4="@firebase/database",A4="@firebase/data-connect",I4="@firebase/database-compat",D4="@firebase/functions",O4="@firebase/functions-compat",N4="@firebase/installations",M4="@firebase/installations-compat",k4="@firebase/messaging",L4="@firebase/messaging-compat",P4="@firebase/performance",j4="@firebase/performance-compat",U4="@firebase/remote-config",$4="@firebase/remote-config-compat",z4="@firebase/storage",B4="@firebase/storage-compat",H4="@firebase/firestore",F4="@firebase/ai",q4="@firebase/firestore-compat",V4="firebase",G4="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="[DEFAULT]",Y4={[xy]:"fire-core",[b4]:"fire-core-compat",[w4]:"fire-analytics",[S4]:"fire-analytics-compat",[x4]:"fire-app-check",[E4]:"fire-app-check-compat",[C4]:"fire-auth",[T4]:"fire-auth-compat",[R4]:"fire-rtdb",[A4]:"fire-data-connect",[I4]:"fire-rtdb-compat",[D4]:"fire-fn",[O4]:"fire-fn-compat",[N4]:"fire-iid",[M4]:"fire-iid-compat",[k4]:"fire-fcm",[L4]:"fire-fcm-compat",[P4]:"fire-perf",[j4]:"fire-perf-compat",[U4]:"fire-rc",[$4]:"fire-rc-compat",[z4]:"fire-gcs",[B4]:"fire-gcs-compat",[H4]:"fire-fst",[q4]:"fire-fst-compat",[F4]:"fire-vertex","fire-js":"fire-js",[V4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Map,Q4=new Map,Ty=new Map;function Uw(e,t){try{e.container.addComponent(t)}catch(n){fi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Or(e){const t=e.name;if(Ty.has(t))return fi.debug(`There were multiple attempts to register component ${t}.`),!1;Ty.set(t,e);for(const n of Lf.values())Uw(n,e);for(const n of Q4.values())Uw(n,e);return!0}function Yo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function On(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ss=new wa("app","Firebase",W4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ss.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=G4;function jT(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:Cy,automaticDataCollectionEnabled:!0,...t},a=i.name;if(typeof a!="string"||!a)throw ss.create("bad-app-name",{appName:String(a)});if(n||(n=RT()),!n)throw ss.create("no-options");const l=Lf.get(a);if(l){if(da(n,l.options)&&da(i,l.config))return l;throw ss.create("duplicate-app",{appName:a})}const u=new r4(a);for(const h of Ty.values())u.addComponent(h);const f=new K4(n,i,u);return Lf.set(a,f),f}function Pv(e=Cy){const t=Lf.get(e);if(!t&&e===Cy&&RT())return jT();if(!t)throw ss.create("no-app",{appName:e});return t}function Qn(e,t,n){let i=Y4[e]??e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const u=[`Unable to register library "${i}" with version "${t}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fi.warn(u.join(" "));return}Or(new fr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const X4="firebase-heartbeat-database",Z4=1,jc="firebase-heartbeat-store";let Tg=null;function UT(){return Tg||(Tg=Ah(X4,Z4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(jc)}catch(n){console.warn(n)}}}}).catch(e=>{throw ss.create("idb-open",{originalErrorMessage:e.message})})),Tg}async function J4(e){try{const n=(await UT()).transaction(jc),i=await n.objectStore(jc).get($T(e));return await n.done,i}catch(t){if(t instanceof vi)fi.warn(t.message);else{const n=ss.create("idb-get",{originalErrorMessage:t?.message});fi.warn(n.message)}}}async function $w(e,t){try{const i=(await UT()).transaction(jc,"readwrite");await i.objectStore(jc).put(t,$T(e)),await i.done}catch(n){if(n instanceof vi)fi.warn(n.message);else{const i=ss.create("idb-set",{originalErrorMessage:n?.message});fi.warn(i.message)}}}function $T(e){return`${e.name}!${e.options.appId}`}/**
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
 */const eP=1024,tP=30;class nP{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iP(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zw();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>tP){const a=sP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){fi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zw(),{heartbeatsToSend:n,unsentEntries:i}=rP(this._heartbeatsCache.heartbeats),a=Nf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return fi.warn(t),""}}}function zw(){return new Date().toISOString().substring(0,10)}function rP(e,t=eP){const n=[];let i=e.slice();for(const a of e){const l=n.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),Bw(n)>t){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Bw(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class iP{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NT()?MT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await J4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return $w(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return $w(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Bw(e){return Nf(JSON.stringify({version:2,heartbeats:e})).length}function sP(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(e){Or(new fr("platform-logger",t=>new v4(t),"PRIVATE")),Or(new fr("heartbeat",t=>new nP(t),"PRIVATE")),Qn(xy,jw,e),Qn(xy,jw,"esm2020"),Qn("fire-js","")}aP("");const zT="@firebase/installations",jv="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=1e4,HT=`w:${jv}`,FT="FIS_v2",oP="https://firebaseinstallations.googleapis.com/v1",lP=3600*1e3,cP="installations",uP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fa=new wa(cP,uP,dP);function qT(e){return e instanceof vi&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT({projectId:e}){return`${oP}/projects/${e}/installations`}function GT(e){return{token:e.token,requestStatus:2,expiresIn:hP(e.expiresIn),creationTime:Date.now()}}async function YT(e,t){const i=(await t.json()).error;return fa.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function QT({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function fP(e,{refreshToken:t}){const n=QT(e);return n.append("Authorization",pP(t)),n}async function WT(e){const t=await e();return t.status>=500&&t.status<600?e():t}function hP(e){return Number(e.replace("s","000"))}function pP(e){return`${FT} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mP({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=VT(e),a=QT(e),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={fid:n,authVersion:FT,appId:e.appId,sdkVersion:HT},f={method:"POST",headers:a,body:JSON.stringify(u)},h=await WT(()=>fetch(i,f));if(h.ok){const p=await h.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:GT(p.authToken)}}else throw await YT("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=/^[cdef][\w-]{21}$/,Ry="";function vP(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=_P(e);return yP.test(n)?n:Ry}catch{return Ry}}function _P(e){return gP(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const XT=new Map;function ZT(e,t){const n=Ih(e);JT(n,t),bP(n,t)}function JT(e,t){const n=XT.get(e);if(n)for(const i of n)i(t)}function bP(e,t){const n=SP();n&&n.postMessage({key:e,fid:t}),wP()}let ta=null;function SP(){return!ta&&"BroadcastChannel"in self&&(ta=new BroadcastChannel("[Firebase] FID Change"),ta.onmessage=e=>{JT(e.data.key,e.data.fid)}),ta}function wP(){XT.size===0&&ta&&(ta.close(),ta=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP="firebase-installations-database",xP=1,ha="firebase-installations-store";let Rg=null;function Uv(){return Rg||(Rg=Ah(EP,xP,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ha)}}})),Rg}async function Pf(e,t){const n=Ih(e),a=(await Uv()).transaction(ha,"readwrite"),l=a.objectStore(ha),u=await l.get(n);return await l.put(t,n),await a.done,(!u||u.fid!==t.fid)&&ZT(e,t.fid),t}async function eR(e){const t=Ih(e),i=(await Uv()).transaction(ha,"readwrite");await i.objectStore(ha).delete(t),await i.done}async function Dh(e,t){const n=Ih(e),a=(await Uv()).transaction(ha,"readwrite"),l=a.objectStore(ha),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await a.done,f&&(!u||u.fid!==f.fid)&&ZT(e,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(e){let t;const n=await Dh(e.appConfig,i=>{const a=CP(i),l=TP(e,a);return t=l.registrationPromise,l.installationEntry});return n.fid===Ry?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function CP(e){const t=e||{fid:vP(),registrationStatus:0};return tR(t)}function TP(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(fa.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=RP(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:AP(e)}:{installationEntry:t}}async function RP(e,t){try{const n=await mP(e,t);return Pf(e.appConfig,n)}catch(n){throw qT(n)&&n.customData.serverCode===409?await eR(e.appConfig):await Pf(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function AP(e){let t=await Hw(e.appConfig);for(;t.registrationStatus===1;)await KT(100),t=await Hw(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await $v(e);return i||n}return t}function Hw(e){return Dh(e,t=>{if(!t)throw fa.create("installation-not-found");return tR(t)})}function tR(e){return IP(e)?{fid:e.fid,registrationStatus:0}:e}function IP(e){return e.registrationStatus===1&&e.registrationTime+BT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP({appConfig:e,heartbeatServiceProvider:t},n){const i=OP(e,n),a=fP(e,n),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={installation:{sdkVersion:HT,appId:e.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},h=await WT(()=>fetch(i,f));if(h.ok){const p=await h.json();return GT(p)}else throw await YT("Generate Auth Token",h)}function OP(e,{fid:t}){return`${VT(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(e,t=!1){let n;const i=await Dh(e.appConfig,l=>{if(!nR(l))throw fa.create("not-registered");const u=l.authToken;if(!t&&kP(u))return l;if(u.requestStatus===1)return n=NP(e,t),l;{if(!navigator.onLine)throw fa.create("app-offline");const f=PP(l);return n=MP(e,f),f}});return n?await n:i.authToken}async function NP(e,t){let n=await Fw(e.appConfig);for(;n.authToken.requestStatus===1;)await KT(100),n=await Fw(e.appConfig);const i=n.authToken;return i.requestStatus===0?zv(e,t):i}function Fw(e){return Dh(e,t=>{if(!nR(t))throw fa.create("not-registered");const n=t.authToken;return jP(n)?{...t,authToken:{requestStatus:0}}:t})}async function MP(e,t){try{const n=await DP(e,t),i={...t,authToken:n};return await Pf(e.appConfig,i),n}catch(n){if(qT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await eR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Pf(e.appConfig,i)}throw n}}function nR(e){return e!==void 0&&e.registrationStatus===2}function kP(e){return e.requestStatus===2&&!LP(e)}function LP(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+lP}function PP(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function jP(e){return e.requestStatus===1&&e.requestTime+BT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(e){const t=e,{installationEntry:n,registrationPromise:i}=await $v(t);return i?i.catch(console.error):zv(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(e,t=!1){const n=e;return await zP(n),(await zv(n,t)).token}async function zP(e){const{registrationPromise:t}=await $v(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(e){if(!e||!e.options)throw Ag("App Configuration");if(!e.name)throw Ag("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ag(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ag(e){return fa.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="installations",HP="installations-internal",FP=e=>{const t=e.getProvider("app").getImmediate(),n=BP(t),i=Yo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},qP=e=>{const t=e.getProvider("app").getImmediate(),n=Yo(t,rR).getImmediate();return{getId:()=>UP(n),getToken:a=>$P(n,a)}};function VP(){Or(new fr(rR,FP,"PUBLIC")),Or(new fr(HP,qP,"PRIVATE"))}VP();Qn(zT,jv);Qn(zT,jv,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="/firebase-messaging-sw.js",YP="/firebase-cloud-messaging-push-scope",iR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",QP="https://fcmregistrations.googleapis.com/v1",sR="google.c.a.c_id",WP="google.c.a.c_l",KP="google.c.a.ts",XP="google.c.a.e",qw=1e4;var Vw;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Vw||(Vw={}));/**
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
 */var Uc;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Uc||(Uc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ZP(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),a=new Uint8Array(i.length);for(let l=0;l<i.length;++l)a[l]=i.charCodeAt(l);return a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="fcm_token_details_db",JP=5,Gw="fcm_token_object_Store";async function e6(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Ig))return null;let t=null;return(await Ah(Ig,JP,{upgrade:async(i,a,l,u)=>{if(a<2||!i.objectStoreNames.contains(Gw))return;const f=u.objectStore(Gw),h=await f.index("fcmSenderId").get(e);if(await f.clear(),!!h){if(a===2){const p=h;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:ri(p.vapidKey)}}}else if(a===3){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ri(p.auth),p256dh:ri(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ri(p.vapidKey)}}}else if(a===4){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ri(p.auth),p256dh:ri(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ri(p.vapidKey)}}}}}})).close(),await xg(Ig),await xg("fcm_vapid_details_db"),await xg("undefined"),t6(t)?t:null}function t6(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n6="firebase-messaging-database",r6=1,$c="firebase-messaging-store";let Dg=null;function aR(){return Dg||(Dg=Ah(n6,r6,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($c)}}})),Dg}async function i6(e){const t=oR(e),i=await(await aR()).transaction($c).objectStore($c).get(t);if(i)return i;{const a=await e6(e.appConfig.senderId);if(a)return await Bv(e,a),a}}async function Bv(e,t){const n=oR(e),a=(await aR()).transaction($c,"readwrite");return await a.objectStore($c).put(t,n),await a.done,t}function oR({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},sn=new wa("messaging","Messaging",s6);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a6(e,t){const n=await Fv(e),i=lR(t),a={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(Hv(e.appConfig),a)).json()}catch(u){throw sn.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw sn.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw sn.create("token-subscribe-no-token");return l.token}async function o6(e,t){const n=await Fv(e),i=lR(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Hv(e.appConfig)}/${t.token}`,a)).json()}catch(u){throw sn.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw sn.create("token-update-failed",{errorInfo:u})}if(!l.token)throw sn.create("token-update-no-token");return l.token}async function l6(e,t){const i={method:"DELETE",headers:await Fv(e)};try{const l=await(await fetch(`${Hv(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw sn.create("token-unsubscribe-failed",{errorInfo:u})}}catch(a){throw sn.create("token-unsubscribe-failed",{errorInfo:a?.toString()})}}function Hv({projectId:e}){return`${QP}/projects/${e}/registrations`}async function Fv({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function lR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const a={web:{endpoint:n,auth:t,p256dh:e}};return i!==iR&&(a.web.applicationPubKey=i),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6=10080*60*1e3;async function u6(e){const t=await f6(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ri(t.getKey("auth")),p256dh:ri(t.getKey("p256dh"))},i=await i6(e.firebaseDependencies);if(i){if(h6(i.subscriptionOptions,n))return Date.now()>=i.createTime+c6?d6(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await l6(e.firebaseDependencies,i.token)}catch(a){console.warn(a)}return Yw(e.firebaseDependencies,n)}else return Yw(e.firebaseDependencies,n)}async function d6(e,t){try{const n=await o6(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await Bv(e.firebaseDependencies,i),n}catch(n){throw n}}async function Yw(e,t){const i={token:await a6(e,t),createTime:Date.now(),subscriptionOptions:t};return await Bv(e,i),i.token}async function f6(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ZP(t)})}function h6(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,a=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&a&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return p6(t,e),m6(t,e),g6(t,e),t}function p6(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const a=t.notification.image;a&&(e.notification.image=a);const l=t.notification.icon;l&&(e.notification.icon=l)}function m6(e,t){t.data&&(e.data=t.data)}function g6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y6(e){return typeof e=="object"&&!!e&&sR in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v6(e){if(!e||!e.options)throw Og("App Configuration Object");if(!e.name)throw Og("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Og(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Og(e){return sn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=v6(t);this.firebaseDependencies={app:t,appConfig:a,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b6(e){try{e.swRegistration=await navigator.serviceWorker.register(GP,{scope:YP}),e.swRegistration.update().catch(()=>{}),await S6(e.swRegistration)}catch(t){throw sn.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function S6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${qw} ms`)),qw),a=e.installing||e.waiting;e.active?(clearTimeout(i),t()):a?a.onstatechange=l=>{l.target?.state==="activated"&&(a.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w6(e,t){if(!t&&!e.swRegistration&&await b6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw sn.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=iR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(e,t){if(!navigator)throw sn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw sn.create("permission-blocked");return await E6(e,t?.vapidKey),await w6(e,t?.serviceWorkerRegistration),u6(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x6(e,t,n){const i=C6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[sR],message_name:n[WP],message_time:n[KP],message_device_time:Math.floor(Date.now()/1e3)})}function C6(e){switch(e){case Uc.NOTIFICATION_CLICKED:return"notification_open";case Uc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Uc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Qw(n)):e.onMessageHandler.next(Qw(n)));const i=n.data;y6(i)&&i[XP]==="1"&&await x6(e,n.messageType,i)}const Ww="@firebase/messaging",Kw="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R6=e=>{const t=new _6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>T6(t,n)),t},A6=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>cR(t,i)}};function I6(){Or(new fr("messaging",R6,"PUBLIC")),Or(new fr("messaging-internal",A6,"PRIVATE")),Qn(Ww,Kw),Qn(Ww,Kw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D6(){try{await MT()}catch{return!1}return typeof window<"u"&&NT()&&FL()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O6(e,t){if(!navigator)throw sn.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N6(e=Pv()){return D6().then(t=>{if(!t)throw sn.create("unsupported-browser")},t=>{throw sn.create("indexed-db-unsupported")}),Yo(Vt(e),"messaging").getImmediate()}async function M6(e,t){return e=Vt(e),cR(e,t)}function k6(e,t){return e=Vt(e),O6(e,t)}I6();const Oh=e=>{try{return e()}catch(t){throw t}};var L6="firebase",P6="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(L6,P6,"app");const j6={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Ec=Oh(()=>jT(j6)),_o=Oh(()=>N6(Ec)),U6="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,uR=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/pr-preview/pr-35/messaging-sw.js",{type:"classic"})};let Ng=uR();const Xw=async()=>{if(!_o)throw new Error("Messaging is not set up");if(!U6)throw new Error("Browser environment does not allow messaging");let e;try{e=await Ng,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Ng=uR(),e=await Ng}return M6(_o,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Xt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var $6=typeof Symbol=="function"&&Symbol.observable||"@@observable",Zw=$6,Mg=()=>Math.random().toString(36).substring(7).split("").join("."),z6={INIT:`@@redux/INIT${Mg()}`,REPLACE:`@@redux/REPLACE${Mg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Mg()}`},jf=z6;function ds(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function dR(e,t,n){if(typeof e!="function")throw new Error(Xt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xt(1));return n(dR)(e,t)}let i=e,a=t,l=new Map,u=l,f=0,h=!1;function p(){u===l&&(u=new Map,l.forEach((R,I)=>{u.set(I,R)}))}function g(){if(h)throw new Error(Xt(3));return a}function y(R){if(typeof R!="function")throw new Error(Xt(4));if(h)throw new Error(Xt(5));let I=!0;p();const L=f++;return u.set(L,R),function(){if(I){if(h)throw new Error(Xt(6));I=!1,p(),u.delete(L),l=null}}}function v(R){if(!ds(R))throw new Error(Xt(7));if(typeof R.type>"u")throw new Error(Xt(8));if(typeof R.type!="string")throw new Error(Xt(17));if(h)throw new Error(Xt(9));try{h=!0,a=i(a,R)}finally{h=!1}return(l=u).forEach(L=>{L()}),R}function S(R){if(typeof R!="function")throw new Error(Xt(10));i=R,v({type:jf.REPLACE})}function w(){const R=y;return{subscribe(I){if(typeof I!="object"||I===null)throw new Error(Xt(11));function L(){const A=I;A.next&&A.next(g())}return L(),{unsubscribe:R(L)}},[Zw](){return this}}}return v({type:jf.INIT}),{dispatch:v,subscribe:y,getState:g,replaceReducer:S,[Zw]:w}}function B6(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:jf.INIT})>"u")throw new Error(Xt(12));if(typeof n(void 0,{type:jf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xt(13))})}function fR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let a;try{B6(n)}catch(l){a=l}return function(u={},f){if(a)throw a;let h=!1;const p={};for(let g=0;g<i.length;g++){const y=i[g],v=n[y],S=u[y],w=v(S,f);if(typeof w>"u")throw f&&f.type,new Error(Xt(14));p[y]=w,h=h||w!==S}return h=h||i.length!==Object.keys(u).length,h?p:u}}function Uf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function H6(...e){return t=>(n,i)=>{const a=t(n,i);let l=()=>{throw new Error(Xt(15))};const u={getState:a.getState,dispatch:(h,...p)=>l(h,...p)},f=e.map(h=>h(u));return l=Uf(...f)(a.dispatch),{...a,dispatch:l}}}function hR(e){return ds(e)&&"type"in e&&typeof e.type=="string"}var qv=Symbol.for("immer-nothing"),xc=Symbol.for("immer-draftable"),bn=Symbol.for("immer-state");function Jt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Lo=Object.getPrototypeOf;function Nr(e){return!!e&&!!e[bn]}function hr(e){return e?pR(e)||Array.isArray(e)||!!e[xc]||!!e.constructor?.[xc]||Wo(e)||lu(e):!1}var F6=Object.prototype.constructor.toString(),Jw=new WeakMap;function pR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=Jw.get(n);return i===void 0&&(i=Function.toString.call(n),Jw.set(n,i)),i===F6}function q6(e){return Nr(e)||Jt(15,e),e[bn].base_}function zc(e,t,n=!0){pa(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((i,a)=>t(a,i,e))}function pa(e){const t=e[bn];return t?t.type_:Array.isArray(e)?1:Wo(e)?2:lu(e)?3:0}function Bc(e,t){return pa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function kg(e,t){return pa(e)===2?e.get(t):e[t]}function mR(e,t,n){const i=pa(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function V6(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Wo(e){return e instanceof Map}function lu(e){return e instanceof Set}function Xs(e){return e.copy_||e.base_}function Ay(e,t){if(Wo(e))return new Map(e);if(lu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=pR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[bn];let a=Reflect.ownKeys(i);for(let l=0;l<a.length;l++){const u=a[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(Lo(e),i)}else{const i=Lo(e);if(i!==null&&n)return{...e};const a=Object.create(i);return Object.assign(a,e)}}function Vv(e,t=!1){return Nh(e)||Nr(e)||!hr(e)||(pa(e)>1&&Object.defineProperties(e,{set:Fd,add:Fd,clear:Fd,delete:Fd}),Object.freeze(e),t&&Object.values(e).forEach(n=>Vv(n,!0))),e}function G6(){Jt(2)}var Fd={value:G6};function Nh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var Iy={};function ma(e){const t=Iy[e];return t||Jt(0,e),t}function Y6(e,t){Iy[e]||(Iy[e]=t)}var Hc;function gR(){return Hc}function Q6(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function eE(e,t){t&&(ma("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Dy(e){Oy(e),e.drafts_.forEach(W6),e.drafts_=null}function Oy(e){e===Hc&&(Hc=e.parent_)}function tE(e){return Hc=Q6(Hc,e)}function W6(e){const t=e[bn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function nE(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[bn].modified_&&(Dy(t),Jt(4)),hr(e)&&(e=$f(t,e),t.parent_||zf(t,e)),t.patches_&&ma("Patches").generateReplacementPatches_(n[bn].base_,e,t.patches_,t.inversePatches_)):e=$f(t,n,[]),Dy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==qv?e:void 0}function $f(e,t,n){if(Nh(t))return t;const i=e.immer_.shouldUseStrictIteration(),a=t[bn];if(!a)return zc(t,(l,u)=>rE(e,a,t,l,u,n),i),t;if(a.scope_!==e)return t;if(!a.modified_)return zf(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const l=a.copy_;let u=l,f=!1;a.type_===3&&(u=new Set(l),l.clear(),f=!0),zc(u,(h,p)=>rE(e,a,l,h,p,n,f),i),zf(e,l,!1),n&&e.patches_&&ma("Patches").generatePatches_(a,n,e.patches_,e.inversePatches_)}return a.copy_}function rE(e,t,n,i,a,l,u){if(a==null||typeof a!="object"&&!u)return;const f=Nh(a);if(!(f&&!u)){if(Nr(a)){const h=l&&t&&t.type_!==3&&!Bc(t.assigned_,i)?l.concat(i):void 0,p=$f(e,a,h);if(mR(n,i,p),Nr(p))e.canAutoFreeze_=!1;else return}else u&&n.add(a);if(hr(a)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===a&&f)return;$f(e,a),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Wo(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&zf(e,a)}}}function zf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Vv(t,n)}function K6(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:gR(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=i,l=Gv;n&&(a=[i],l=Fc);const{revoke:u,proxy:f}=Proxy.revocable(a,l);return i.draft_=f,i.revoke_=u,f}var Gv={get(e,t){if(t===bn)return e;const n=Xs(e);if(!Bc(n,t))return X6(e,n,t);const i=n[t];return e.finalized_||!hr(i)?i:i===Lg(e.base_,t)?(Pg(e),e.copy_[t]=My(i,e)):i},has(e,t){return t in Xs(e)},ownKeys(e){return Reflect.ownKeys(Xs(e))},set(e,t,n){const i=yR(Xs(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const a=Lg(Xs(e),t),l=a?.[bn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(V6(n,a)&&(n!==void 0||Bc(e.base_,t)))return!0;Pg(e),Ny(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Lg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Pg(e),Ny(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Xs(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){Jt(11)},getPrototypeOf(e){return Lo(e.base_)},setPrototypeOf(){Jt(12)}},Fc={};zc(Gv,(e,t)=>{Fc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Fc.deleteProperty=function(e,t){return Fc.set.call(this,e,t,void 0)};Fc.set=function(e,t,n){return Gv.set.call(this,e[0],t,n,e[0])};function Lg(e,t){const n=e[bn];return(n?Xs(n):e)[t]}function X6(e,t,n){const i=yR(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function yR(e,t){if(!(t in e))return;let n=Lo(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=Lo(n)}}function Ny(e){e.modified_||(e.modified_=!0,e.parent_&&Ny(e.parent_))}function Pg(e){e.copy_||(e.copy_=Ay(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Z6=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(h=l,...p){return u.produce(h,g=>n.call(this,g,...p))}}typeof n!="function"&&Jt(6),i!==void 0&&typeof i!="function"&&Jt(7);let a;if(hr(t)){const l=tE(this),u=My(t,void 0);let f=!0;try{a=n(u),f=!1}finally{f?Dy(l):Oy(l)}return eE(l,i),nE(a,l)}else if(!t||typeof t!="object"){if(a=n(t),a===void 0&&(a=t),a===qv&&(a=void 0),this.autoFreeze_&&Vv(a,!0),i){const l=[],u=[];ma("Patches").generateReplacementPatches_(t,a,l,u),i(l,u)}return a}else Jt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,h=>t(h,...f));let i,a;return[this.produce(t,n,(u,f)=>{i=u,a=f}),i,a]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){hr(e)||Jt(8),Nr(e)&&(e=J6(e));const t=tE(this),n=My(e,void 0);return n[bn].isManual_=!0,Oy(t),n}finishDraft(e,t){const n=e&&e[bn];(!n||!n.isManual_)&&Jt(9);const{scope_:i}=n;return eE(i,t),nE(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const a=t[n];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}n>-1&&(t=t.slice(n+1));const i=ma("Patches").applyPatches_;return Nr(e)?i(e,t):this.produce(e,a=>i(a,t))}};function My(e,t){const n=Wo(e)?ma("MapSet").proxyMap_(e,t):lu(e)?ma("MapSet").proxySet_(e,t):K6(e,t);return(t?t.scope_:gR()).drafts_.push(n),n}function J6(e){return Nr(e)||Jt(10,e),vR(e)}function vR(e){if(!hr(e)||Nh(e))return e;const t=e[bn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ay(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Ay(e,!0);return zc(n,(a,l)=>{mR(n,a,vR(l))},i),t&&(t.finalized_=!1),n}function e3(){const t="replace",i="remove";function a(v,S,w,D){switch(v.type_){case 0:case 2:return u(v,S,w,D);case 1:return l(v,S,w,D);case 3:return f(v,S,w,D)}}function l(v,S,w,D){let{base_:R,assigned_:I}=v,L=v.copy_;L.length<R.length&&([R,L]=[L,R],[w,D]=[D,w]);for(let x=0;x<R.length;x++)if(I[x]&&L[x]!==R[x]){const A=S.concat([x]);w.push({op:t,path:A,value:y(L[x])}),D.push({op:t,path:A,value:y(R[x])})}for(let x=R.length;x<L.length;x++){const A=S.concat([x]);w.push({op:"add",path:A,value:y(L[x])})}for(let x=L.length-1;R.length<=x;--x){const A=S.concat([x]);D.push({op:i,path:A})}}function u(v,S,w,D){const{base_:R,copy_:I}=v;zc(v.assigned_,(L,x)=>{const A=kg(R,L),N=kg(I,L),C=x?Bc(R,L)?t:"add":i;if(A===N&&C===t)return;const P=S.concat(L);w.push(C===i?{op:C,path:P}:{op:C,path:P,value:N}),D.push(C==="add"?{op:i,path:P}:C===i?{op:"add",path:P,value:y(A)}:{op:t,path:P,value:y(A)})})}function f(v,S,w,D){let{base_:R,copy_:I}=v,L=0;R.forEach(x=>{if(!I.has(x)){const A=S.concat([L]);w.push({op:i,path:A,value:x}),D.unshift({op:"add",path:A,value:x})}L++}),L=0,I.forEach(x=>{if(!R.has(x)){const A=S.concat([L]);w.push({op:"add",path:A,value:x}),D.unshift({op:i,path:A,value:x})}L++})}function h(v,S,w,D){w.push({op:t,path:[],value:S===qv?void 0:S}),D.push({op:t,path:[],value:v})}function p(v,S){return S.forEach(w=>{const{path:D,op:R}=w;let I=v;for(let N=0;N<D.length-1;N++){const C=pa(I);let P=D[N];typeof P!="string"&&typeof P!="number"&&(P=""+P),(C===0||C===1)&&(P==="__proto__"||P==="constructor")&&Jt(19),typeof I=="function"&&P==="prototype"&&Jt(19),I=kg(I,P),typeof I!="object"&&Jt(18,D.join("/"))}const L=pa(I),x=g(w.value),A=D[D.length-1];switch(R){case t:switch(L){case 2:return I.set(A,x);case 3:Jt(16);default:return I[A]=x}case"add":switch(L){case 1:return A==="-"?I.push(x):I.splice(A,0,x);case 2:return I.set(A,x);case 3:return I.add(x);default:return I[A]=x}case i:switch(L){case 1:return I.splice(A,1);case 2:return I.delete(A);case 3:return I.delete(w.value);default:return delete I[A]}default:Jt(17,R)}}),v}function g(v){if(!hr(v))return v;if(Array.isArray(v))return v.map(g);if(Wo(v))return new Map(Array.from(v.entries()).map(([w,D])=>[w,g(D)]));if(lu(v))return new Set(Array.from(v).map(g));const S=Object.create(Lo(v));for(const w in v)S[w]=g(v[w]);return Bc(v,xc)&&(S[xc]=v[xc]),S}function y(v){return Nr(v)?g(v):v}Y6("Patches",{applyPatches_:p,generatePatches_:a,generateReplacementPatches_:h})}var qc=new Z6,cu=qc.produce,_R=qc.produceWithPatches.bind(qc),iE=qc.applyPatches.bind(qc);function t3(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function n3(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function r3(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var sE=e=>Array.isArray(e)?e:[e];function i3(e){const t=Array.isArray(e[0])?e[0]:e;return r3(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function s3(e,t){const n=[],{length:i}=e;for(let a=0;a<i;a++)n.push(e[a].apply(null,t));return n}var a3=class{constructor(e){this.value=e}deref(){return this.value}},o3=typeof WeakRef<"u"?WeakRef:a3,l3=0,aE=1;function qd(){return{s:l3,v:void 0,o:null,p:null}}function Bf(e,t={}){let n=qd();const{resultEqualityCheck:i}=t;let a,l=0;function u(){let f=n;const{length:h}=arguments;for(let y=0,v=h;y<v;y++){const S=arguments[y];if(typeof S=="function"||typeof S=="object"&&S!==null){let w=f.o;w===null&&(f.o=w=new WeakMap);const D=w.get(S);D===void 0?(f=qd(),w.set(S,f)):f=D}else{let w=f.p;w===null&&(f.p=w=new Map);const D=w.get(S);D===void 0?(f=qd(),w.set(S,f)):f=D}}const p=f;let g;if(f.s===aE)g=f.v;else if(g=e.apply(null,arguments),l++,i){const y=a?.deref?.()??a;y!=null&&i(y,g)&&(g=y,l!==0&&l--),a=typeof g=="object"&&g!==null||typeof g=="function"?new o3(g):g}return p.s=aE,p.v=g,g}return u.clearCache=()=>{n=qd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function c3(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...a)=>{let l=0,u=0,f,h={},p=a.pop();typeof p=="object"&&(h=p,p=a.pop()),t3(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const g={...n,...h},{memoize:y,memoizeOptions:v=[],argsMemoize:S=Bf,argsMemoizeOptions:w=[]}=g,D=sE(v),R=sE(w),I=i3(a),L=y(function(){return l++,p.apply(null,arguments)},...D),x=S(function(){u++;const N=s3(I,arguments);return f=L.apply(null,N),f},...R);return Object.assign(x,{resultFunc:p,memoizedResultFunc:L,dependencies:I,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:y,argsMemoize:S})};return Object.assign(i,{withTypes:()=>i}),i}var _i=c3(Bf),u3=Object.assign((e,t=_i)=>{n3(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,h)=>(u[n[h]]=f,u),{}))},{withTypes:()=>u3});function bR(e){return({dispatch:n,getState:i})=>a=>l=>typeof l=="function"?l(n,i,e):a(l)}var d3=bR(),f3=bR,h3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Uf:Uf.apply(null,arguments)},p3=e=>e&&typeof e.match=="function";function lr(e,t){function n(...i){if(t){let a=t(...i);if(!a)throw new Error(cr(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>hR(i)&&i.type===e,n}var SR=class yc extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,yc.prototype)}static get[Symbol.species](){return yc}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new yc(...t[0].concat(this)):new yc(...t.concat(this))}};function oE(e){return hr(e)?cu(e,()=>{}):e}function Vd(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function m3(e){return typeof e=="boolean"}var g3=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:a=!0,actionCreatorCheck:l=!0}=t??{};let u=new SR;return n&&(m3(n)?u.push(d3):u.push(f3(n.extraArgument))),u},Mh="RTK_autoBatch",nc=()=>e=>({payload:e,meta:{[Mh]:!0}}),lE=e=>t=>{setTimeout(t,e)},y3=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let a=!0,l=!1,u=!1;const f=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:lE(10):e.type==="callback"?e.queueNotification:lE(e.timeout),p=()=>{u=!1,l&&(l=!1,f.forEach(g=>g()))};return Object.assign({},i,{subscribe(g){const y=()=>a&&g(),v=i.subscribe(y);return f.add(g),()=>{v(),f.delete(g)}},dispatch(g){try{return a=!g?.meta?.[Mh],l=!a,l&&(u||(u=!0,h(p))),i.dispatch(g)}finally{a=!0}}})},v3=e=>function(n){const{autoBatch:i=!0}=n??{};let a=new SR(e);return i&&a.push(y3(typeof i=="object"?i:void 0)),a};function _3(e){const t=g3(),{reducer:n=void 0,middleware:i,devTools:a=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(ds(n))f=fR(n);else throw new Error(cr(1));let h;typeof i=="function"?h=i(t):h=t();let p=Uf;a&&(p=h3({trace:!1,...typeof a=="object"&&a}));const g=H6(...h),y=v3(g);let v=typeof u=="function"?u(y):y();const S=p(...v);return dR(f,l,S)}function wR(e){const t={},n=[];let i;const a={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(cr(28));if(f in t)throw new Error(cr(29));return t[f]=u,a},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),a},addMatcher(l,u){return n.push({matcher:l,reducer:u}),a},addDefaultCase(l){return i=l,a}};return e(a),[t,n,i]}function b3(e){return typeof e=="function"}function S3(e,t){let[n,i,a]=wR(t),l;if(b3(e))l=()=>oE(e());else{const f=oE(e);l=()=>f}function u(f=l(),h){let p=[n[h.type],...i.filter(({matcher:g})=>g(h)).map(({reducer:g})=>g)];return p.filter(g=>!!g).length===0&&(p=[a]),p.reduce((g,y)=>{if(y)if(Nr(g)){const S=y(g,h);return S===void 0?g:S}else{if(hr(g))return cu(g,v=>y(v,h));{const v=y(g,h);if(v===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return g},f)}return u.getInitialState=l,u}var ER=(e,t)=>p3(e)?e.match(t):e(t);function hi(...e){return t=>e.some(n=>ER(n,t))}function Cc(...e){return t=>e.every(n=>ER(n,t))}function kh(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function uu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Yv(...e){return e.length===0?t=>kh(t,["pending"]):uu(e)?hi(...e.map(t=>t.pending)):Yv()(e[0])}function Po(...e){return e.length===0?t=>kh(t,["rejected"]):uu(e)?hi(...e.map(t=>t.rejected)):Po()(e[0])}function Lh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Cc(Po(...e),t):uu(e)?Cc(Po(...e),t):Lh()(e[0])}function fs(...e){return e.length===0?t=>kh(t,["fulfilled"]):uu(e)?hi(...e.map(t=>t.fulfilled)):fs()(e[0])}function ky(...e){return e.length===0?t=>kh(t,["pending","fulfilled","rejected"]):uu(e)?hi(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):ky()(e[0])}var w3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Qv=(e=21)=>{let t="",n=e;for(;n--;)t+=w3[Math.random()*64|0];return t},E3=["name","message","stack","code"],jg=class{constructor(e,t){this.payload=e,this.meta=t}_type},cE=class{constructor(e,t){this.payload=e,this.meta=t}_type},x3=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of E3)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},uE="External signal was aborted",dE=(()=>{function e(t,n,i){const a=lr(t+"/fulfilled",(h,p,g,y)=>({payload:h,meta:{...y||{},arg:g,requestId:p,requestStatus:"fulfilled"}})),l=lr(t+"/pending",(h,p,g)=>({payload:void 0,meta:{...g||{},arg:p,requestId:h,requestStatus:"pending"}})),u=lr(t+"/rejected",(h,p,g,y,v)=>({payload:y,error:(i&&i.serializeError||x3)(h||"Rejected"),meta:{...v||{},arg:g,requestId:p,rejectedWithValue:!!y,requestStatus:"rejected",aborted:h?.name==="AbortError",condition:h?.name==="ConditionError"}}));function f(h,{signal:p}={}){return(g,y,v)=>{const S=i?.idGenerator?i.idGenerator(h):Qv(),w=new AbortController;let D,R;function I(x){R=x,w.abort()}p&&(p.aborted?I(uE):p.addEventListener("abort",()=>I(uE),{once:!0}));const L=(async function(){let x;try{let N=i?.condition?.(h,{getState:y,extra:v});if(T3(N)&&(N=await N),N===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((P,V)=>{D=()=>{V({name:"AbortError",message:R||"Aborted"})},w.signal.addEventListener("abort",D)});g(l(S,h,i?.getPendingMeta?.({requestId:S,arg:h},{getState:y,extra:v}))),x=await Promise.race([C,Promise.resolve(n(h,{dispatch:g,getState:y,extra:v,requestId:S,signal:w.signal,abort:I,rejectWithValue:(P,V)=>new jg(P,V),fulfillWithValue:(P,V)=>new cE(P,V)})).then(P=>{if(P instanceof jg)throw P;return P instanceof cE?a(P.payload,S,h,P.meta):a(P,S,h)})])}catch(N){x=N instanceof jg?u(null,S,h,N.payload,N.meta):u(N,S,h)}finally{D&&w.signal.removeEventListener("abort",D)}return i&&!i.dispatchConditionRejection&&u.match(x)&&x.meta.condition||g(x),x})();return Object.assign(L,{abort:I,requestId:S,arg:h,unwrap(){return L.then(C3)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:a,settled:hi(u,a),typePrefix:t})}return e.withTypes=()=>e,e})();function C3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function T3(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var R3=Symbol.for("rtk-slice-createasyncthunk");function A3(e,t){return`${e}/${t}`}function I3({creators:e}={}){const t=e?.asyncThunk?.[R3];return function(i){const{name:a,reducerPath:l=a}=i;if(!a)throw new Error(cr(11));const u=(typeof i.reducers=="function"?i.reducers(O3()):i.reducers)||{},f=Object.keys(u),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},p={addCase(x,A){const N=typeof x=="string"?x:x.type;if(!N)throw new Error(cr(12));if(N in h.sliceCaseReducersByType)throw new Error(cr(13));return h.sliceCaseReducersByType[N]=A,p},addMatcher(x,A){return h.sliceMatchers.push({matcher:x,reducer:A}),p},exposeAction(x,A){return h.actionCreators[x]=A,p},exposeCaseReducer(x,A){return h.sliceCaseReducersByName[x]=A,p}};f.forEach(x=>{const A=u[x],N={reducerName:x,type:A3(a,x),createNotation:typeof i.reducers=="function"};M3(A)?L3(N,A,p,t):N3(N,A,p)});function g(){const[x={},A=[],N=void 0]=typeof i.extraReducers=="function"?wR(i.extraReducers):[i.extraReducers],C={...x,...h.sliceCaseReducersByType};return S3(i.initialState,P=>{for(let V in C)P.addCase(V,C[V]);for(let V of h.sliceMatchers)P.addMatcher(V.matcher,V.reducer);for(let V of A)P.addMatcher(V.matcher,V.reducer);N&&P.addDefaultCase(N)})}const y=x=>x,v=new Map,S=new WeakMap;let w;function D(x,A){return w||(w=g()),w(x,A)}function R(){return w||(w=g()),w.getInitialState()}function I(x,A=!1){function N(P){let V=P[x];return typeof V>"u"&&A&&(V=Vd(S,N,R)),V}function C(P=y){const V=Vd(v,A,()=>new WeakMap);return Vd(V,P,()=>{const H={};for(const[B,z]of Object.entries(i.selectors??{}))H[B]=D3(z,P,()=>Vd(S,P,R),A);return H})}return{reducerPath:x,getSelectors:C,get selectors(){return C(N)},selectSlice:N}}const L={name:a,reducer:D,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:R,...I(l),injectInto(x,{reducerPath:A,...N}={}){const C=A??l;return x.inject({reducerPath:C,reducer:D},N),{...L,...I(C,!0)}}};return L}}function D3(e,t,n,i){function a(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return a.unwrapped=e,a}var Rr=I3();function O3(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function N3({type:e,reducerName:t,createNotation:n},i,a){let l,u;if("reducer"in i){if(n&&!k3(i))throw new Error(cr(17));l=i.reducer,u=i.prepare}else l=i;a.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?lr(e,u):lr(e))}function M3(e){return e._reducerDefinitionType==="asyncThunk"}function k3(e){return e._reducerDefinitionType==="reducerWithPrepare"}function L3({type:e,reducerName:t},n,i,a){if(!a)throw new Error(cr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:h,settled:p,options:g}=n,y=a(e,l,g);i.exposeAction(t,y),u&&i.addCase(y.fulfilled,u),f&&i.addCase(y.pending,f),h&&i.addCase(y.rejected,h),p&&i.addMatcher(y.settled,p),i.exposeCaseReducer(t,{fulfilled:u||Gd,pending:f||Gd,rejected:h||Gd,settled:p||Gd})}function Gd(){}function cr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ko=e=>e.session,du=_i([Ko],e=>{if(e.state==="fulfilled")return e.data?.id}),ys=SC,lt=wC,fu=T.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var fE={};const hE="@firebase/database",pE="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xR="";function P3(e){xR=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Ut(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Pc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Mr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new j3(t)}}catch{}return new U3},na=CR("localStorage"),$3=CR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new kv("@firebase/database"),z3=(function(){let e=1;return function(){return e++}})(),TR=function(e){const t=JL(e),n=new WL;n.update(t);const i=n.digest();return Ov.encodeByteArray(i)},hu=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=hu.apply(null,i):typeof i=="object"?t+=Ut(i):t+=i,t+=" "}return t};let Tc=null,mE=!0;const B3=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Eo.logLevel=ot.VERBOSE,Tc=Eo.log.bind(Eo)},Zt=function(...e){if(mE===!0&&(mE=!1,Tc===null&&$3.get("logging_enabled")===!0&&B3()),Tc){const t=hu.apply(null,e);Tc(t)}},pu=function(e){return function(...t){Zt(e,...t)}},Ly=function(...e){const t="FIREBASE INTERNAL ERROR: "+hu(...e);Eo.error(t)},pi=function(...e){const t=`FIREBASE FATAL ERROR: ${hu(...e)}`;throw Eo.error(t),new Error(t)},un=function(...e){const t="FIREBASE WARNING: "+hu(...e);Eo.warn(t)},H3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wv=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},F3=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jo="[MIN_NAME]",ga="[MAX_NAME]",Ea=function(e,t){if(e===t)return 0;if(e===jo||t===ga)return-1;if(t===jo||e===ga)return 1;{const n=gE(e),i=gE(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},q3=function(e,t){return e===t?0:e<t?-1:1},rc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ut(t))},Kv=function(e){if(typeof e!="object"||e===null)return Ut(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=Ut(t[i]),n+=":",n+=Kv(e[t[i]]);return n+="}",n},RR=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let a=0;a<n;a+=t)a+t>n?i.push(e.substring(a,n)):i.push(e.substring(a,a+t));return i};function en(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const AR=function(e){he(!Wv(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let a,l,u,f,h;e===0?(l=0,u=0,a=1/e===-1/0?1:0):(a=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const p=[];for(h=n;h;h-=1)p.push(u%2?1:0),u=Math.floor(u/2);for(h=t;h;h-=1)p.push(l%2?1:0),l=Math.floor(l/2);p.push(a?1:0),p.reverse();const g=p.join("");let y="";for(h=0;h<64;h+=8){let v=parseInt(g.substr(h,8),2).toString(16);v.length===1&&(v="0"+v),y=y+v}return y.toLowerCase()},V3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},G3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Y3(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const Q3=new RegExp("^-?(0*)\\d{1,10}$"),W3=-2147483648,K3=2147483647,gE=function(e){if(Q3.test(e)){const t=Number(e);if(t>=W3&&t<=K3)return t}return null},Xo=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw un("Exception was thrown by user callback.",n),t},Math.floor(0))}},X3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Z3{constructor(t,n){this.appCheckProvider=n,this.appName=t.name,On(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){un(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',un(t)}}class yf{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}yf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="5",IR="v",DR="s",OR="r",NR="f",MR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kR="ls",LR="p",Py="ac",PR="websocket",jR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(t,n,i,a,l=!1,u="",f=!1,h=!1,p=null){this.secure=n,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this.emulatorOptions=p,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=na.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&na.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function ej(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function $R(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===PR)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===jR)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);ej(e)&&(n.ns=e.namespace);const a=[];return en(n,(l,u)=>{a.push(l+"="+u)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(){this.counters_={}}incrementCounter(t,n=1){Mr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return IL(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={},$g={};function Zv(e){const t=e.toString();return Ug[t]||(Ug[t]=new tj),Ug[t]}function nj(e,t){const n=e.toString();return $g[n]||($g[n]=t()),$g[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&Xo(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="start",ij="close",sj="pLPCommand",aj="pRTLPCB",zR="id",BR="pw",HR="ser",oj="cb",lj="seg",cj="ts",uj="d",dj="dframe",FR=1870,qR=30,fj=FR-qR,hj=25e3,pj=3e4;class bo{constructor(t,n,i,a,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pu(t),this.stats_=Zv(n),this.urlFn=h=>(this.appCheckToken&&(h[Py]=this.appCheckToken),$R(n,jR,h))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rj(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pj)),F3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jv((...l)=>{const[u,f,h,p,g]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===yE)this.id=f,this.password=h;else if(u===ij)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[yE]="t",i[HR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[oj]=this.scriptTagHolder.uniqueCallbackIdentifier),i[IR]=Xv,this.transportSessionId&&(i[DR]=this.transportSessionId),this.lastSessionId&&(i[kR]=this.lastSessionId),this.applicationId&&(i[LR]=this.applicationId),this.appCheckToken&&(i[Py]=this.appCheckToken),typeof location<"u"&&location.hostname&&MR.test(location.hostname)&&(i[OR]=NR);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bo.forceAllow_=!0}static forceDisallow(){bo.forceDisallow_=!0}static isAvailable(){return bo.forceAllow_?!0:!bo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!V3()&&!G3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Ut(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=xT(n),a=RR(i,fj);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[dj]="t",i[zR]=t,i[BR]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Ut(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jv{constructor(t,n,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=z3(),window[sj+this.uniqueCallbackIdentifier]=t,window[aj+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jv.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Zt("frame writing exception"),f.stack&&Zt(f.stack),Zt(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Zt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[zR]=this.myID,t[BR]=this.myPW,t[HR]=this.currentSerial;let n=this.urlFn(t),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qR+i.length<=FR;){const u=this.pendingSegs.shift();i=i+"&"+lj+a+"="+u.seg+"&"+cj+a+"="+u.ts+"&"+uj+a+"="+u.d,a++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(i,Math.floor(hj)),l=()=>{clearTimeout(a),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Zt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mj=16384,gj=45e3;let Hf=null;typeof MozWebSocket<"u"?Hf=MozWebSocket:typeof WebSocket<"u"&&(Hf=WebSocket);class ir{constructor(t,n,i,a,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pu(this.connId),this.stats_=Zv(n),this.connURL=ir.connectionURL_(n,u,f,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,a,l){const u={};return u[IR]=Xv,typeof location<"u"&&location.hostname&&MR.test(location.hostname)&&(u[OR]=NR),n&&(u[DR]=n),i&&(u[kR]=i),a&&(u[Py]=a),l&&(u[LR]=l),$R(t,PR,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,na.set("previous_websocket_failure",!0);try{let i;HL(),this.mySock=new Hf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){ir.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Hf!==null&&!ir.forceDisallow_}static previouslyFailed(){return na.isInMemoryStorage||na.get("previous_websocket_failure")===!0}markConnectionHealthy(){na.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Pc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=Ut(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=RR(n,mj);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gj))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ir.responsesRequiredToBeHealthy=2;ir.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{static get ALL_TRANSPORTS(){return[bo,ir]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=ir&&ir.isAvailable();let i=n&&!ir.previouslyFailed();if(t.webSocketOnly&&(n||un("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ir];else{const a=this.transports_=[];for(const l of Vc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Vc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yj=6e4,vj=5e3,_j=10*1024,bj=100*1024,zg="t",vE="d",Sj="s",_E="r",wj="e",bE="o",SE="a",wE="n",EE="p",Ej="h";class xj{constructor(t,n,i,a,l,u,f,h,p,g){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=h,this.onKill_=p,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pu("c:"+this.id+":"),this.transportManager_=new Vc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const a=t.healthyTimeout||0;a>0&&(this.healthyTimeout_=Rc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_j?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(zg in t){const n=t[zg];n===SE?this.upgradeIfSecondaryHealthy_():n===_E?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=rc("t",t),i=rc("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:EE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:SE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=rc("t",t),i=rc("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=rc(zg,t);if(vE in t){const i=t[vE];if(n===Ej){const a={...i};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(n===wE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Sj?this.onConnectionShutdown_(i):n===_E?this.onReset_(i):n===wj?Ly("Server Error: "+i):n===bE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ly("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,a=t.h;this.sessionId=t.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xv!==i&&un("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Rc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yj))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:EE,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(na.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{put(t,n,i,a){}merge(t,n,i,a){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const a=this.getInitialEvent(t);a&&n.apply(i,a)}off(t,n,i){this.validateEventType_(t);const a=this.listeners_[t]||[];for(let l=0;l<a.length;l++)if(a[l].callback===n&&(!i||i===a[l].context)){a.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff extends GR{static getInstance(){return new Ff}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=32,CE=768;class ct{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Ke(){return new ct("")}function Fe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function hs(e){return e.pieces_.length-e.pieceNum_}function ht(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function e_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Cj(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Gc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function YR(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function Tt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&n.push(i[a])}return new ct(n,0)}function Ye(e){return e.pieceNum_>=e.pieces_.length}function cn(e,t){const n=Fe(e),i=Fe(t);if(n===null)return t;if(n===i)return cn(ht(e),ht(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Tj(e,t){const n=Gc(e,0),i=Gc(t,0);for(let a=0;a<n.length&&a<i.length;a++){const l=Ea(n[a],i[a]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function t_(e,t){if(hs(e)!==hs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Yn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(hs(e)>hs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Rj{constructor(t,n){this.errorPrefix_=n,this.parts_=Gc(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Rh(this.parts_[i]);QR(this)}}function Aj(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Rh(t),QR(e)}function Ij(e){const t=e.parts_.pop();e.byteLength_-=Rh(t),e.parts_.length>0&&(e.byteLength_-=1)}function QR(e){if(e.byteLength_>CE)throw new Error(e.errorPrefix_+"has a key path longer than "+CE+" bytes ("+e.byteLength_+").");if(e.parts_.length>xE)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xE+") or object contains a cycle "+Zs(e))}function Zs(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends GR{static getInstance(){return new n_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=1e3,Dj=300*1e3,TE=30*1e3,Oj=1.3,Nj=3e4,Mj="server_kill",RE=3;class ui extends VR{constructor(t,n,i,a,l,u,f,h){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=ui.nextPersistentConnectionId_++,this.log_=pu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ic,this.maxReconnectDelay_=Dj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");n_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Ff.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const a=++this.requestNumber_,l={r:a,a:t,b:n};this.log_(Ut(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[a]=i)}get(t){this.initConnection_();const n=new ou,a={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,a){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const h=f.d,p=f.s;ui.warnOnListenWarnings_(h,n),(this.listens.get(i)&&this.listens.get(i).get(a))===t&&(this.log_("listen response",f),p!=="ok"&&this.removeListen_(i,a),t.onComplete&&t.onComplete(p,h))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Mr(t,"w")){const i=ko(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();un(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||QL(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=TE)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=YL(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,a=>{const l=a.s,u=a.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),a=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,t._queryObject,n)}sendUnlisten_(t,n,i,a){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";a&&(l.q=i,l.t=a),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,a){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(t,n,i,a){this.putInternal("p",t,n,i,a)}merge(t,n,i,a){this.putInternal("m",t,n,i,a)}putInternal(t,n,i,a,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,a=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Ut(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Ly("Unrecognized action received from server: "+Ut(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ic,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ic,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nj&&(this.reconnectDelay_=ic),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Oj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+ui.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const h=function(){f?f.close():(u=!0,i())},p=function(y){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:h,sendRequest:p};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,v]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);u?Zt("getToken() completed but was canceled"):(Zt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=v&&v.token,f=new xj(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,S=>{un(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mj)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&un(y),h())}}}interrupt(t){Zt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Zt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Sy(this.interruptReasons_)&&(this.reconnectDelay_=ic,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>Kv(l)).join("$"):i="default";const a=this.removeListen_(t,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(t,n){const i=new ct(t).toString();let a;if(this.listens.has(i)){const l=this.listens.get(i);a=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(t,n){Zt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=RE&&(this.reconnectDelay_=TE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Zt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=RE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+xR.replace(/\./g,"-")]=1,Mv()?t["framework.cordova"]=1:OT()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Ff.getInstance().currentlyOnline();return Sy(this.interruptReasons_)&&t}}ui.nextPersistentConnectionId_=0;ui.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Yd;class WR extends Ph{static get __EMPTY_NODE(){return Yd}static set __EMPTY_NODE(t){Yd=t}compare(t,n){return Ea(t.name,n.name)}isDefinedOn(t){throw qo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return qe.MIN}maxPost(){return new qe(ga,Yd)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new qe(t,Yd)}toString(){return".key"}}const xo=new WR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n,i,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,a&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class qt{constructor(t,n,i,a,l){this.key=t,this.value=n,this.color=i??qt.RED,this.left=a??_n.EMPTY_NODE,this.right=l??_n.EMPTY_NODE}copy(t,n,i,a,l){return new qt(t??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let a=this;const l=i(t,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(t,n,i),null):l===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(t,n,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return _n.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,a;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return _n.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}qt.RED=!0;qt.BLACK=!1;class kj{copy(t,n,i,a,l){return this}insert(t,n,i){return new qt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _n{constructor(t,n=_n.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new _n(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(t){return new _n(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,a=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Qd(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Qd(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Qd(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Qd(this.root_,null,this.comparator_,!0,t)}}_n.EMPTY_NODE=new kj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lj(e,t){return Ea(e.name,t.name)}function r_(e,t){return Ea(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jy;function Pj(e){jy=e}const KR=function(e){return typeof e=="number"?"number:"+AR(e):"string:"+e},XR=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Mr(t,".sv"),"Priority must be a string or number.")}else he(e===jy||e.isEmpty(),"priority of unexpected type.");he(e===jy||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AE;class Ht{static set __childrenNodeConstructor(t){AE=t}static get __childrenNodeConstructor(){return AE}constructor(t,n=Ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),XR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ht(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ye(t)?this:Fe(t)===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=Fe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||hs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+KR(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=AR(this.value_):t+=this.value_,this.lazyHash_=TR(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ht.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ht.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,a=Ht.VALUE_TYPE_ORDER.indexOf(n),l=Ht.VALUE_TYPE_ORDER.indexOf(i);return he(a>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),a===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZR,JR;function jj(e){ZR=e}function Uj(e){JR=e}class $j extends Ph{compare(t,n){const i=t.node.getPriority(),a=n.node.getPriority(),l=i.compareTo(a);return l===0?Ea(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return qe.MIN}maxPost(){return new qe(ga,new Ht("[PRIORITY-POST]",JR))}makePost(t,n){const i=ZR(t);return new qe(n,new Ht("[PRIORITY-POST]",i))}toString(){return".priority"}}const Rt=new $j;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zj=Math.log(2);class Bj{constructor(t){const n=l=>parseInt(Math.log(l)/zj,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const a=i(this.count);this.bits_=t+1&a}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const qf=function(e,t,n,i){e.sort(t);const a=function(h,p){const g=p-h;let y,v;if(g===0)return null;if(g===1)return y=e[h],v=n?n(y):y,new qt(v,y.node,qt.BLACK,null,null);{const S=parseInt(g/2,10)+h,w=a(h,S),D=a(S+1,p);return y=e[S],v=n?n(y):y,new qt(v,y.node,qt.BLACK,w,D)}},l=function(h){let p=null,g=null,y=e.length;const v=function(w,D){const R=y-w,I=y;y-=w;const L=a(R+1,I),x=e[R],A=n?n(x):x;S(new qt(A,x.node,D,null,L))},S=function(w){p?(p.left=w,p=w):(g=w,p=w)};for(let w=0;w<h.count;++w){const D=h.nextBitIsOne(),R=Math.pow(2,h.count-(w+1));D?v(R,qt.BLACK):(v(R,qt.BLACK),v(R,qt.RED))}return g},u=new Bj(e.length),f=l(u);return new _n(i||t,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bg;const ho={};class ai{static get Default(){return he(ho&&Rt,"ChildrenNode.ts has not been loaded"),Bg=Bg||new ai({".priority":ho},{".priority":Rt}),Bg}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=ko(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof _n?n:null}hasIndex(t){return Mr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==xo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const l=n.getIterator(qe.Wrap);let u=l.getNext();for(;u;)a=a||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;a?f=qf(i,t.getCompare()):f=ho;const h=t.toString(),p={...this.indexSet_};p[h]=t;const g={...this.indexes_};return g[h]=f,new ai(g,p)}addToIndexes(t,n){const i=kf(this.indexes_,(a,l)=>{const u=ko(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),a===ho)if(u.isDefinedOn(t.node)){const f=[],h=n.getIterator(qe.Wrap);let p=h.getNext();for(;p;)p.name!==t.name&&f.push(p),p=h.getNext();return f.push(t),qf(f,u.getCompare())}else return ho;else{const f=n.get(t.name);let h=a;return f&&(h=h.remove(new qe(t.name,f))),h.insert(t,t.node)}});return new ai(i,this.indexSet_)}removeFromIndexes(t,n){const i=kf(this.indexes_,a=>{if(a===ho)return a;{const l=n.get(t.name);return l?a.remove(new qe(t.name,l)):a}});return new ai(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class Ne{static get EMPTY_NODE(){return sc||(sc=new Ne(new _n(r_),null,ai.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&XR(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sc}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?sc:n}}getChild(t){const n=Fe(t);return n===null?this:this.getImmediateChild(n).getChild(ht(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new qe(t,n);let a,l;n.isEmpty()?(a=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=a.isEmpty()?sc:this.priorityNode_;return new Ne(a,u,l)}}updateChild(t,n){const i=Fe(t);if(i===null)return n;{he(Fe(t)!==".priority"||hs(t)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(ht(t),n);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,a=0,l=!0;if(this.forEachChild(Rt,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!t&&l&&a<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+KR(this.getPriority().val())+":"),this.forEachChild(Rt,(n,i)=>{const a=i.hash();a!==""&&(t+=":"+n+":"+a)}),this.lazyHash_=t===""?"":TR(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const a=this.resolveIndex_(i);if(a){const l=a.getPredecessorKey(new qe(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new qe(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new qe(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,a=>a);{const a=this.children_.getIteratorFrom(t.name,qe.Wrap);let l=a.peek();for(;l!=null&&n.compare(l,t)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,a=>a);{const a=this.children_.getReverseIteratorFrom(t.name,qe.Wrap);let l=a.peek();for(;l!=null&&n.compare(l,t)>0;)a.getNext(),l=a.peek();return a}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===mu?-1:0}withIndex(t){if(t===xo||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===xo||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Rt),a=n.getIterator(Rt);let l=i.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===xo?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hj extends Ne{constructor(){super(new _n(r_),Ne.EMPTY_NODE,ai.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const mu=new Hj;Object.defineProperties(qe,{MIN:{value:new qe(jo,Ne.EMPTY_NODE)},MAX:{value:new qe(ga,mu)}});WR.__EMPTY_NODE=Ne.EMPTY_NODE;Ht.__childrenNodeConstructor=Ne;Pj(mu);Uj(mu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fj=!0;function jt(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ht(n,jt(t))}if(!(e instanceof Array)&&Fj){const n=[];let i=!1;if(en(e,(u,f)=>{if(u.substring(0,1)!=="."){const h=jt(f);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),n.push(new qe(u,h)))}}),n.length===0)return Ne.EMPTY_NODE;const l=qf(n,Lj,u=>u.name,r_);if(i){const u=qf(n,Rt.getCompare());return new Ne(l,jt(t),new ai({".priority":u},{".priority":Rt}))}else return new Ne(l,jt(t),ai.Default)}else{let n=Ne.EMPTY_NODE;return en(e,(i,a)=>{if(Mr(e,i)&&i.substring(0,1)!=="."){const l=jt(a);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(jt(t))}}jj(jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj extends Ph{constructor(t){super(),this.indexPath_=t,he(!Ye(t)&&Fe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),a=this.extractChild(n.node),l=i.compareTo(a);return l===0?Ea(t.name,n.name):l}makePost(t,n){const i=jt(t),a=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new qe(n,a)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,mu);return new qe(ga,t)}toString(){return Gc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj extends Ph{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ea(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return qe.MIN}maxPost(){return qe.MAX}makePost(t,n){const i=jt(t);return new qe(n,i)}toString(){return".value"}}const Gj=new Vj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(e){return{type:"value",snapshotNode:e}}function Uo(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Yc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Qc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Yj(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t){this.index_=t}updateChild(t,n,i,a,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(a).equals(i.getChild(a))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(Yc(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Uo(n,i)):u.trackChildChange(Qc(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(Rt,(a,l)=>{n.hasChild(a)||i.trackChildChange(Yc(a,l))}),n.isLeafNode()||n.forEachChild(Rt,(a,l)=>{if(t.hasChild(a)){const u=t.getImmediateChild(a);u.equals(l)||i.trackChildChange(Qc(a,l,u))}else i.trackChildChange(Uo(a,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.indexedFilter_=new i_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Wc.getStartPost_(t),this.endPost_=Wc.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,a,l,u){return this.matches(new qe(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,a,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let a=n.withIndex(this.index_);a=a.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(Rt,(u,f)=>{l.matches(new qe(u,f))||(a=a.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,a,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Wc(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,a,l,u){return this.rangedFilter_.matches(new qe(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,a,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let a;if(n.isLeafNode()||n.isEmpty())a=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){a=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{a=n.withIndex(this.index_),a=a.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:a=a.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,a,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,a,l){let u;if(this.reverse_){const y=this.index_.getCompare();u=(v,S)=>y(S,v)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const h=new qe(n,i),p=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),g=this.rangedFilter_.matches(h);if(f.hasChild(n)){const y=f.getImmediateChild(n);let v=a.getChildAfterChild(this.index_,p,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=a.getChildAfterChild(this.index_,v,this.reverse_);const S=v==null?1:u(v,h);if(g&&!i.isEmpty()&&S>=0)return l?.trackChildChange(Qc(n,i,y)),f.updateImmediateChild(n,i);{l?.trackChildChange(Yc(n,y));const D=f.updateImmediateChild(n,Ne.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l?.trackChildChange(Uo(v.name,v.node)),D.updateImmediateChild(v.name,v.node)):D}}else return i.isEmpty()?t:g&&u(p,h)>=0?(l!=null&&(l.trackChildChange(Yc(p.name,p.node)),l.trackChildChange(Uo(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(p.name,Ne.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jo}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ga}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Rt}copy(){const t=new s_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Wj(e){return e.loadsAllData()?new i_(e.getIndex()):e.hasLimit()?new Qj(e):new Wc(e)}function IE(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Rt?n="$priority":e.index_===Gj?n="$value":e.index_===xo?n="$key":(he(e.index_ instanceof qj,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ut(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=Ut(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+Ut(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=Ut(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+Ut(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function DE(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Rt&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends VR{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,a){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=pu("p:rest:"),this.listens_={}}listen(t,n,i,a){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=Vf.getListenId_(t,i),f={};this.listens_[u]=f;const h=IE(t._queryParams);this.restRequest_(l+".json",h,(p,g)=>{let y=g;if(p===404&&(y=null,p=null),p===null&&this.onDataUpdate_(l,y,!1,i),ko(this.listens_,u)===f){let v;p?p===401?v="permission_denied":v="rest_error:"+p:v="ok",a(v,null)}})}unlisten(t,n){const i=Vf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=IE(t._queryParams),i=t._path.toString(),a=new ou;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(n.auth=a.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Go(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=Pc(f.responseText)}catch{un("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&un("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){return{value:null,children:new Map}}function tA(e,t,n){if(Ye(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=Fe(t);e.children.has(i)||e.children.set(i,Gf());const a=e.children.get(i);t=ht(t),tA(a,t,n)}}function Uy(e,t,n){e.value!==null?n(t,e.value):Xj(e,(i,a)=>{const l=new ct(t.toString()+"/"+i);Uy(a,l,n)})}function Xj(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&en(this.last_,(i,a)=>{n[i]=n[i]-a}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=10*1e3,Jj=30*1e3,e5=300*1e3;class t5{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zj(t);const i=OE+(Jj-OE)*Math.random();Rc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;en(t,(a,l)=>{l>0&&Mr(this.statsToReport_,a)&&(n[a]=l,i=!0)}),i&&this.server_.reportStats(n),Rc(this.reportStats_.bind(this),Math.floor(Math.random()*2*e5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sr||(sr={}));function a_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function o_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function l_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=sr.ACK_USER_WRITE,this.source=a_()}operationForChild(t){if(Ye(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ct(t));return new Yf(Ke(),n,this.revert)}}else return he(Fe(this.path)===t,"operationForChild called for unrelated child."),new Yf(ht(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n){this.source=t,this.path=n,this.type=sr.LISTEN_COMPLETE}operationForChild(t){return Ye(this.path)?new Kc(this.source,Ke()):new Kc(this.source,ht(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=sr.OVERWRITE}operationForChild(t){return Ye(this.path)?new ya(this.source,Ke(),this.snap.getImmediateChild(t)):new ya(this.source,ht(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=sr.MERGE}operationForChild(t){if(Ye(this.path)){const n=this.children.subtree(new ct(t));return n.isEmpty()?null:n.value?new ya(this.source,Ke(),n.value):new $o(this.source,Ke(),n)}else return he(Fe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new $o(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Ye(t))return this.isFullyInitialized()&&!this.filtered_;const n=Fe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function r5(e,t,n,i){const a=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(Yj(u.childName,u.snapshotNode))}),ac(e,a,"child_removed",t,i,n),ac(e,a,"child_added",t,i,n),ac(e,a,"child_moved",l,i,n),ac(e,a,"child_changed",t,i,n),ac(e,a,"value",t,i,n),a}function ac(e,t,n,i,a,l){const u=i.filter(f=>f.type===n);u.sort((f,h)=>s5(e,f,h)),u.forEach(f=>{const h=i5(e,f,l);a.forEach(p=>{p.respondsTo(f.type)&&t.push(p.createEvent(h,e.query_))})})}function i5(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function s5(e,t,n){if(t.childName==null||n.childName==null)throw qo("Should only compare child_ events.");const i=new qe(t.childName,t.snapshotNode),a=new qe(n.childName,n.snapshotNode);return e.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(e,t){return{eventCache:e,serverCache:t}}function Ac(e,t,n,i){return jh(new ps(t,n,i),e.serverCache)}function nA(e,t,n,i){return jh(e.eventCache,new ps(t,n,i))}function Qf(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function va(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg;const a5=()=>(Hg||(Hg=new _n(q3)),Hg);class ft{static fromObject(t){let n=new ft(null);return en(t,(i,a)=>{n=n.set(new ct(i),a)}),n}constructor(t,n=a5()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Ke(),value:this.value};if(Ye(t))return null;{const i=Fe(t),a=this.children.get(i);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ht(t),n);return l!=null?{path:Tt(new ct(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ye(t))return this;{const n=Fe(t),i=this.children.get(n);return i!==null?i.subtree(ht(t)):new ft(null)}}set(t,n){if(Ye(t))return new ft(n,this.children);{const i=Fe(t),l=(this.children.get(i)||new ft(null)).set(ht(t),n),u=this.children.insert(i,l);return new ft(this.value,u)}}remove(t){if(Ye(t))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const n=Fe(t),i=this.children.get(n);if(i){const a=i.remove(ht(t));let l;return a.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,a),this.value===null&&l.isEmpty()?new ft(null):new ft(this.value,l)}else return this}}get(t){if(Ye(t))return this.value;{const n=Fe(t),i=this.children.get(n);return i?i.get(ht(t)):null}}setTree(t,n){if(Ye(t))return n;{const i=Fe(t),l=(this.children.get(i)||new ft(null)).setTree(ht(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ft(this.value,u)}}fold(t){return this.fold_(Ke(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((a,l)=>{i[a]=l.fold_(Tt(t,a),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Ke(),n)}findOnPath_(t,n,i){const a=this.value?i(n,this.value):!1;if(a)return a;if(Ye(t))return null;{const l=Fe(t),u=this.children.get(l);return u?u.findOnPath_(ht(t),Tt(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Ke(),n)}foreachOnPath_(t,n,i){if(Ye(t))return this;{this.value&&i(n,this.value);const a=Fe(t),l=this.children.get(a);return l?l.foreachOnPath_(ht(t),Tt(n,a),i):new ft(null)}}foreach(t){this.foreach_(Ke(),t)}foreach_(t,n){this.children.inorderTraversal((i,a)=>{a.foreach_(Tt(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.writeTree_=t}static empty(){return new ur(new ft(null))}}function Ic(e,t,n){if(Ye(t))return new ur(new ft(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const a=i.path;let l=i.value;const u=cn(a,t);return l=l.updateChild(u,n),new ur(e.writeTree_.set(a,l))}else{const a=new ft(n),l=e.writeTree_.setTree(t,a);return new ur(l)}}}function $y(e,t,n){let i=e;return en(n,(a,l)=>{i=Ic(i,Tt(t,a),l)}),i}function NE(e,t){if(Ye(t))return ur.empty();{const n=e.writeTree_.setTree(t,new ft(null));return new ur(n)}}function zy(e,t){return xa(e,t)!=null}function xa(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(cn(n.path,t)):null}function ME(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Rt,(i,a)=>{t.push(new qe(i,a))}):e.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&t.push(new qe(i,a.value))}),t}function as(e,t){if(Ye(t))return e;{const n=xa(e,t);return n!=null?new ur(new ft(n)):new ur(e.writeTree_.subtree(t))}}function By(e){return e.writeTree_.isEmpty()}function zo(e,t){return rA(Ke(),e.writeTree_,t)}function rA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((a,l)=>{a===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=rA(Tt(e,a),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(Tt(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(e,t){return oA(t,e)}function o5(e,t,n,i,a){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:a}),a&&(e.visibleWrites=Ic(e.visibleWrites,t,n)),e.lastWriteId=i}function l5(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=$y(e.visibleWrites,t,n),e.lastWriteId=i}function c5(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function u5(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let a=i.visible,l=!1,u=e.allWrites.length-1;for(;a&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&d5(f,i.path)?a=!1:Yn(i.path,f.path)&&(l=!0)),u--}if(a){if(l)return f5(e),!0;if(i.snap)e.visibleWrites=NE(e.visibleWrites,i.path);else{const f=i.children;en(f,h=>{e.visibleWrites=NE(e.visibleWrites,Tt(i.path,h))})}return!0}else return!1}function d5(e,t){if(e.snap)return Yn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Yn(Tt(e.path,n),t))return!0;return!1}function f5(e){e.visibleWrites=iA(e.allWrites,h5,Ke()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function h5(e){return e.visible}function iA(e,t,n){let i=ur.empty();for(let a=0;a<e.length;++a){const l=e[a];if(t(l)){const u=l.path;let f;if(l.snap)Yn(n,u)?(f=cn(n,u),i=Ic(i,f,l.snap)):Yn(u,n)&&(f=cn(u,n),i=Ic(i,Ke(),l.snap.getChild(f)));else if(l.children){if(Yn(n,u))f=cn(n,u),i=$y(i,f,l.children);else if(Yn(u,n))if(f=cn(u,n),Ye(f))i=$y(i,Ke(),l.children);else{const h=ko(l.children,Fe(f));if(h){const p=h.getChild(ht(f));i=Ic(i,Ke(),p)}}}else throw qo("WriteRecord should have .snap or .children")}}return i}function sA(e,t,n,i,a){if(!i&&!a){const l=xa(e.visibleWrites,t);if(l!=null)return l;{const u=as(e.visibleWrites,t);if(By(u))return n;if(n==null&&!zy(u,Ke()))return null;{const f=n||Ne.EMPTY_NODE;return zo(u,f)}}}else{const l=as(e.visibleWrites,t);if(!a&&By(l))return n;if(!a&&n==null&&!zy(l,Ke()))return null;{const u=function(p){return(p.visible||a)&&(!i||!~i.indexOf(p.writeId))&&(Yn(p.path,t)||Yn(t,p.path))},f=iA(e.allWrites,u,t),h=n||Ne.EMPTY_NODE;return zo(f,h)}}}function p5(e,t,n){let i=Ne.EMPTY_NODE;const a=xa(e.visibleWrites,t);if(a)return a.isLeafNode()||a.forEachChild(Rt,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=as(e.visibleWrites,t);return n.forEachChild(Rt,(u,f)=>{const h=zo(as(l,new ct(u)),f);i=i.updateImmediateChild(u,h)}),ME(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=as(e.visibleWrites,t);return ME(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function m5(e,t,n,i,a){he(i||a,"Either existingEventSnap or existingServerSnap must exist");const l=Tt(t,n);if(zy(e.visibleWrites,l))return null;{const u=as(e.visibleWrites,l);return By(u)?a.getChild(n):zo(u,a.getChild(n))}}function g5(e,t,n,i){const a=Tt(t,n),l=xa(e.visibleWrites,a);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=as(e.visibleWrites,a);return zo(u,i.getNode().getImmediateChild(n))}else return null}function y5(e,t){return xa(e.visibleWrites,t)}function v5(e,t,n,i,a,l,u){let f;const h=as(e.visibleWrites,t),p=xa(h,Ke());if(p!=null)f=p;else if(n!=null)f=zo(h,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const g=[],y=u.getCompare(),v=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let S=v.getNext();for(;S&&g.length<a;)y(S,i)!==0&&g.push(S),S=v.getNext();return g}else return[]}function _5(){return{visibleWrites:ur.empty(),allWrites:[],lastWriteId:-1}}function Wf(e,t,n,i){return sA(e.writeTree,e.treePath,t,n,i)}function c_(e,t){return p5(e.writeTree,e.treePath,t)}function kE(e,t,n,i){return m5(e.writeTree,e.treePath,t,n,i)}function Kf(e,t){return y5(e.writeTree,Tt(e.treePath,t))}function b5(e,t,n,i,a,l){return v5(e.writeTree,e.treePath,t,n,i,a,l)}function u_(e,t,n){return g5(e.writeTree,e.treePath,t,n)}function aA(e,t){return oA(Tt(e.treePath,t),e.writeTree)}function oA(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const l=a.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,Qc(i,t.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,Yc(i,a.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Uo(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,Qc(i,t.snapshotNode,a.oldSnap));else throw qo("Illegal combination of changes: "+t+" occurred after "+a)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const lA=new w5;class d_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new ps(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return u_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:va(this.viewCache_),l=b5(this.writes_,a,n,1,i,t);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(e){return{filter:e}}function x5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function C5(e,t,n,i,a){const l=new S5;let u,f;if(n.type===sr.OVERWRITE){const p=n;p.source.fromUser?u=Hy(e,t,p.path,p.snap,i,a,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered()&&!Ye(p.path),u=Xf(e,t,p.path,p.snap,i,a,f,l))}else if(n.type===sr.MERGE){const p=n;p.source.fromUser?u=R5(e,t,p.path,p.children,i,a,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered(),u=Fy(e,t,p.path,p.children,i,a,f,l))}else if(n.type===sr.ACK_USER_WRITE){const p=n;p.revert?u=D5(e,t,p.path,i,a,l):u=A5(e,t,p.path,p.affectedTree,i,a,l)}else if(n.type===sr.LISTEN_COMPLETE)u=I5(e,t,n.path,i,l);else throw qo("Unknown operation type: "+n.type);const h=l.getChanges();return T5(t,u,h),{viewCache:u,changes:h}}function T5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=Qf(e);(n.length>0||!e.eventCache.isFullyInitialized()||a&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(eA(Qf(t)))}}function cA(e,t,n,i,a,l){const u=t.eventCache;if(Kf(i,n)!=null)return t;{let f,h;if(Ye(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const p=va(t),g=p instanceof Ne?p:Ne.EMPTY_NODE,y=c_(i,g);f=e.filter.updateFullNode(t.eventCache.getNode(),y,l)}else{const p=Wf(i,va(t));f=e.filter.updateFullNode(t.eventCache.getNode(),p,l)}else{const p=Fe(n);if(p===".priority"){he(hs(n)===1,"Can't have a priority with additional path components");const g=u.getNode();h=t.serverCache.getNode();const y=kE(i,n,g,h);y!=null?f=e.filter.updatePriority(g,y):f=u.getNode()}else{const g=ht(n);let y;if(u.isCompleteForChild(p)){h=t.serverCache.getNode();const v=kE(i,n,u.getNode(),h);v!=null?y=u.getNode().getImmediateChild(p).updateChild(g,v):y=u.getNode().getImmediateChild(p)}else y=u_(i,p,t.serverCache);y!=null?f=e.filter.updateChild(u.getNode(),p,y,g,a,l):f=u.getNode()}}return Ac(t,f,u.isFullyInitialized()||Ye(n),e.filter.filtersNodes())}}function Xf(e,t,n,i,a,l,u,f){const h=t.serverCache;let p;const g=u?e.filter:e.filter.getIndexedFilter();if(Ye(n))p=g.updateFullNode(h.getNode(),i,null);else if(g.filtersNodes()&&!h.isFiltered()){const S=h.getNode().updateChild(n,i);p=g.updateFullNode(h.getNode(),S,null)}else{const S=Fe(n);if(!h.isCompleteForPath(n)&&hs(n)>1)return t;const w=ht(n),R=h.getNode().getImmediateChild(S).updateChild(w,i);S===".priority"?p=g.updatePriority(h.getNode(),R):p=g.updateChild(h.getNode(),S,R,w,lA,null)}const y=nA(t,p,h.isFullyInitialized()||Ye(n),g.filtersNodes()),v=new d_(a,y,l);return cA(e,y,n,a,v,f)}function Hy(e,t,n,i,a,l,u){const f=t.eventCache;let h,p;const g=new d_(a,t,l);if(Ye(n))p=e.filter.updateFullNode(t.eventCache.getNode(),i,u),h=Ac(t,p,!0,e.filter.filtersNodes());else{const y=Fe(n);if(y===".priority")p=e.filter.updatePriority(t.eventCache.getNode(),i),h=Ac(t,p,f.isFullyInitialized(),f.isFiltered());else{const v=ht(n),S=f.getNode().getImmediateChild(y);let w;if(Ye(v))w=i;else{const D=g.getCompleteChild(y);D!=null?e_(v)===".priority"&&D.getChild(YR(v)).isEmpty()?w=D:w=D.updateChild(v,i):w=Ne.EMPTY_NODE}if(S.equals(w))h=t;else{const D=e.filter.updateChild(f.getNode(),y,w,v,g,u);h=Ac(t,D,f.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function LE(e,t){return e.eventCache.isCompleteForChild(t)}function R5(e,t,n,i,a,l,u){let f=t;return i.foreach((h,p)=>{const g=Tt(n,h);LE(t,Fe(g))&&(f=Hy(e,f,g,p,a,l,u))}),i.foreach((h,p)=>{const g=Tt(n,h);LE(t,Fe(g))||(f=Hy(e,f,g,p,a,l,u))}),f}function PE(e,t,n){return n.foreach((i,a)=>{t=t.updateChild(i,a)}),t}function Fy(e,t,n,i,a,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t,p;Ye(n)?p=i:p=new ft(null).setTree(n,i);const g=t.serverCache.getNode();return p.children.inorderTraversal((y,v)=>{if(g.hasChild(y)){const S=t.serverCache.getNode().getImmediateChild(y),w=PE(e,S,v);h=Xf(e,h,new ct(y),w,a,l,u,f)}}),p.children.inorderTraversal((y,v)=>{const S=!t.serverCache.isCompleteForChild(y)&&v.value===null;if(!g.hasChild(y)&&!S){const w=t.serverCache.getNode().getImmediateChild(y),D=PE(e,w,v);h=Xf(e,h,new ct(y),D,a,l,u,f)}}),h}function A5(e,t,n,i,a,l,u){if(Kf(a,n)!=null)return t;const f=t.serverCache.isFiltered(),h=t.serverCache;if(i.value!=null){if(Ye(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return Xf(e,t,n,h.getNode().getChild(n),a,l,f,u);if(Ye(n)){let p=new ft(null);return h.getNode().forEachChild(xo,(g,y)=>{p=p.set(new ct(g),y)}),Fy(e,t,n,p,a,l,f,u)}else return t}else{let p=new ft(null);return i.foreach((g,y)=>{const v=Tt(n,g);h.isCompleteForPath(v)&&(p=p.set(g,h.getNode().getChild(v)))}),Fy(e,t,n,p,a,l,f,u)}}function I5(e,t,n,i,a){const l=t.serverCache,u=nA(t,l.getNode(),l.isFullyInitialized()||Ye(n),l.isFiltered());return cA(e,u,n,i,lA,a)}function D5(e,t,n,i,a,l){let u;if(Kf(i,n)!=null)return t;{const f=new d_(i,t,a),h=t.eventCache.getNode();let p;if(Ye(n)||Fe(n)===".priority"){let g;if(t.serverCache.isFullyInitialized())g=Wf(i,va(t));else{const y=t.serverCache.getNode();he(y instanceof Ne,"serverChildren would be complete if leaf node"),g=c_(i,y)}g=g,p=e.filter.updateFullNode(h,g,l)}else{const g=Fe(n);let y=u_(i,g,t.serverCache);y==null&&t.serverCache.isCompleteForChild(g)&&(y=h.getImmediateChild(g)),y!=null?p=e.filter.updateChild(h,g,y,ht(n),f,l):t.eventCache.getNode().hasChild(g)?p=e.filter.updateChild(h,g,Ne.EMPTY_NODE,ht(n),f,l):p=h,p.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=Wf(i,va(t)),u.isLeafNode()&&(p=e.filter.updateFullNode(p,u,l)))}return u=t.serverCache.isFullyInitialized()||Kf(i,Ke())!=null,Ac(t,p,u,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,a=new i_(i.getIndex()),l=Wj(i);this.processor_=E5(l);const u=n.serverCache,f=n.eventCache,h=a.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),p=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),g=new ps(h,u.isFullyInitialized(),a.filtersNodes()),y=new ps(p,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=jh(y,g),this.eventGenerator_=new n5(this.query_)}get query(){return this.query_}}function N5(e){return e.viewCache_.serverCache.getNode()}function M5(e){return Qf(e.viewCache_)}function k5(e,t){const n=va(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ye(t)&&!n.getImmediateChild(Fe(t)).isEmpty())?n.getChild(t):null}function jE(e){return e.eventRegistrations_.length===0}function L5(e,t){e.eventRegistrations_.push(t)}function UE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const a=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,a);u&&i.push(u)})}if(t){let a=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))a.push(u);else if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=a}else e.eventRegistrations_=[];return i}function $E(e,t,n,i){t.type===sr.MERGE&&t.source.queryId!==null&&(he(va(e.viewCache_),"We should always have a full cache before handling merges"),he(Qf(e.viewCache_),"Missing event cache, even though we have a server cache"));const a=e.viewCache_,l=C5(e.processor_,a,t,n,i);return x5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,uA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function P5(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Rt,(l,u)=>{i.push(Uo(l,u))}),n.isFullyInitialized()&&i.push(eA(n.getNode())),uA(e,i,n.getNode(),t)}function uA(e,t,n,i){const a=i?[i]:e.eventRegistrations_;return r5(e.eventGenerator_,t,n,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zf;class dA{constructor(){this.views=new Map}}function j5(e){he(!Zf,"__referenceConstructor has already been defined"),Zf=e}function U5(){return he(Zf,"Reference.ts has not been loaded"),Zf}function $5(e){return e.views.size===0}function f_(e,t,n,i){const a=t.source.queryId;if(a!==null){const l=e.views.get(a);return he(l!=null,"SyncTree gave us an op for an invalid query."),$E(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat($E(u,t,n,i));return l}}function fA(e,t,n,i,a){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=Wf(n,a?i:null),h=!1;f?h=!0:i instanceof Ne?(f=c_(n,i),h=!1):(f=Ne.EMPTY_NODE,h=!1);const p=jh(new ps(f,h,!1),new ps(i,a,!1));return new O5(t,p)}return u}function z5(e,t,n,i,a,l){const u=fA(e,t,i,a,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),L5(u,n),P5(u,n)}function B5(e,t,n,i){const a=t._queryIdentifier,l=[];let u=[];const f=ms(e);if(a==="default")for(const[h,p]of e.views.entries())u=u.concat(UE(p,n,i)),jE(p)&&(e.views.delete(h),p.query._queryParams.loadsAllData()||l.push(p.query));else{const h=e.views.get(a);h&&(u=u.concat(UE(h,n,i)),jE(h)&&(e.views.delete(a),h.query._queryParams.loadsAllData()||l.push(h.query)))}return f&&!ms(e)&&l.push(new(U5())(t._repo,t._path)),{removed:l,events:u}}function hA(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function os(e,t){let n=null;for(const i of e.views.values())n=n||k5(i,t);return n}function pA(e,t){if(t._queryParams.loadsAllData())return $h(e);{const i=t._queryIdentifier;return e.views.get(i)}}function mA(e,t){return pA(e,t)!=null}function ms(e){return $h(e)!=null}function $h(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jf;function H5(e){he(!Jf,"__referenceConstructor has already been defined"),Jf=e}function F5(){return he(Jf,"Reference.ts has not been loaded"),Jf}let q5=1;class zE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ft(null),this.pendingWriteTree_=_5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gA(e,t,n,i,a){return o5(e.pendingWriteTree_,t,n,i,a),a?Zo(e,new ya(a_(),t,n)):[]}function V5(e,t,n,i){l5(e.pendingWriteTree_,t,n,i);const a=ft.fromObject(n);return Zo(e,new $o(a_(),t,a))}function rs(e,t,n=!1){const i=c5(e.pendingWriteTree_,t);if(u5(e.pendingWriteTree_,t)){let l=new ft(null);return i.snap!=null?l=l.set(Ke(),!0):en(i.children,u=>{l=l.set(new ct(u),!0)}),Zo(e,new Yf(i.path,l,n))}else return[]}function gu(e,t,n){return Zo(e,new ya(o_(),t,n))}function G5(e,t,n){const i=ft.fromObject(n);return Zo(e,new $o(o_(),t,i))}function Y5(e,t){return Zo(e,new Kc(o_(),t))}function Q5(e,t,n){const i=p_(e,n);if(i){const a=m_(i),l=a.path,u=a.queryId,f=cn(l,t),h=new Kc(l_(u),f);return g_(e,l,h)}else return[]}function eh(e,t,n,i,a=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||mA(u,t))){const h=B5(u,t,n,i);$5(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const p=h.removed;if(f=h.events,!a){const g=p.findIndex(v=>v._queryParams.loadsAllData())!==-1,y=e.syncPointTree_.findOnPath(l,(v,S)=>ms(S));if(g&&!y){const v=e.syncPointTree_.subtree(l);if(!v.isEmpty()){const S=X5(v);for(let w=0;w<S.length;++w){const D=S[w],R=D.query,I=bA(e,D);e.listenProvider_.startListening(Dc(R),Xc(e,R),I.hashFn,I.onComplete)}}}!y&&p.length>0&&!i&&(g?e.listenProvider_.stopListening(Dc(t),null):p.forEach(v=>{const S=e.queryToTagMap.get(zh(v));e.listenProvider_.stopListening(Dc(v),S)}))}Z5(e,p)}return f}function yA(e,t,n,i){const a=p_(e,i);if(a!=null){const l=m_(a),u=l.path,f=l.queryId,h=cn(u,t),p=new ya(l_(f),h,n);return g_(e,u,p)}else return[]}function W5(e,t,n,i){const a=p_(e,i);if(a){const l=m_(a),u=l.path,f=l.queryId,h=cn(u,t),p=ft.fromObject(n),g=new $o(l_(f),h,p);return g_(e,u,g)}else return[]}function qy(e,t,n,i=!1){const a=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(a,(v,S)=>{const w=cn(v,a);l=l||os(S,w),u=u||ms(S)});let f=e.syncPointTree_.get(a);f?(u=u||ms(f),l=l||os(f,Ke())):(f=new dA,e.syncPointTree_=e.syncPointTree_.set(a,f));let h;l!=null?h=!0:(h=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(a).foreachChild((S,w)=>{const D=os(w,Ke());D&&(l=l.updateImmediateChild(S,D))}));const p=mA(f,t);if(!p&&!t._queryParams.loadsAllData()){const v=zh(t);he(!e.queryToTagMap.has(v),"View does not exist, but we have a tag");const S=J5();e.queryToTagMap.set(v,S),e.tagToQueryMap.set(S,v)}const g=Uh(e.pendingWriteTree_,a);let y=z5(f,t,n,g,l,h);if(!p&&!u&&!i){const v=pA(f,t);y=y.concat(eU(e,t,v))}return y}function h_(e,t,n){const a=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const h=cn(u,t),p=os(f,h);if(p)return p});return sA(a,t,l,n,!0)}function K5(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(p,g)=>{const y=cn(p,n);i=i||os(g,y)});let a=e.syncPointTree_.get(n);a?i=i||os(a,Ke()):(a=new dA,e.syncPointTree_=e.syncPointTree_.set(n,a));const l=i!=null,u=l?new ps(i,!0,!1):null,f=Uh(e.pendingWriteTree_,t._path),h=fA(a,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return M5(h)}function Zo(e,t){return vA(t,e.syncPointTree_,null,Uh(e.pendingWriteTree_,Ke()))}function vA(e,t,n,i){if(Ye(e.path))return _A(e,t,n,i);{const a=t.get(Ke());n==null&&a!=null&&(n=os(a,Ke()));let l=[];const u=Fe(e.path),f=e.operationForChild(u),h=t.children.get(u);if(h&&f){const p=n?n.getImmediateChild(u):null,g=aA(i,u);l=l.concat(vA(f,h,p,g))}return a&&(l=l.concat(f_(a,e,i,n))),l}}function _A(e,t,n,i){const a=t.get(Ke());n==null&&a!=null&&(n=os(a,Ke()));let l=[];return t.children.inorderTraversal((u,f)=>{const h=n?n.getImmediateChild(u):null,p=aA(i,u),g=e.operationForChild(u);g&&(l=l.concat(_A(g,f,h,p)))}),a&&(l=l.concat(f_(a,e,i,n))),l}function bA(e,t){const n=t.query,i=Xc(e,n);return{hashFn:()=>(N5(t)||Ne.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return i?Q5(e,n._path,i):Y5(e,n._path);{const l=Y3(a,n);return eh(e,n,null,l)}}}}function Xc(e,t){const n=zh(t);return e.queryToTagMap.get(n)}function zh(e){return e._path.toString()+"$"+e._queryIdentifier}function p_(e,t){return e.tagToQueryMap.get(t)}function m_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function g_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const a=Uh(e.pendingWriteTree_,t);return f_(i,n,a,null)}function X5(e){return e.fold((t,n,i)=>{if(n&&ms(n))return[$h(n)];{let a=[];return n&&(a=hA(n)),en(i,(l,u)=>{a=a.concat(u)}),a}})}function Dc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(F5())(e._repo,e._path):e}function Z5(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const a=zh(i),l=e.queryToTagMap.get(a);e.queryToTagMap.delete(a),e.tagToQueryMap.delete(l)}}}function J5(){return q5++}function eU(e,t,n){const i=t._path,a=Xc(e,t),l=bA(e,n),u=e.listenProvider_.startListening(Dc(t),a,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(a)he(!ms(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((p,g,y)=>{if(!Ye(p)&&g&&ms(g))return[$h(g).query];{let v=[];return g&&(v=v.concat(hA(g).map(S=>S.query))),en(y,(S,w)=>{v=v.concat(w)}),v}});for(let p=0;p<h.length;++p){const g=h[p];e.listenProvider_.stopListening(Dc(g),Xc(e,g))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new y_(n)}node(){return this.node_}}class v_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Tt(this.path_,t);return new v_(this.syncTree_,n)}node(){return h_(this.syncTree_,this.path_)}}const tU=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},BE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return nU(e[".sv"],t,n);if(typeof e[".sv"]=="object")return rU(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},nU=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},rU=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const a=t.node();if(he(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const u=a.getValue();return typeof u!="number"?i:u+i},SA=function(e,t,n,i){return __(t,new v_(n,e),i)},wA=function(e,t,n){return __(e,new y_(t),n)};function __(e,t,n){const i=e.getPriority().val(),a=BE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=BE(u.getValue(),t,n);return f!==u.getValue()||a!==u.getPriority().val()?new Ht(f,jt(a)):e}else{const u=e;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new Ht(a))),u.forEachChild(Rt,(f,h)=>{const p=__(h,t.getImmediateChild(f),n);p!==h&&(l=l.updateImmediateChild(f,p))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function S_(e,t){let n=t instanceof ct?t:new ct(t),i=e,a=Fe(n);for(;a!==null;){const l=ko(i.node.children,a)||{children:{},childCount:0};i=new b_(a,i,l),n=ht(n),a=Fe(n)}return i}function Jo(e){return e.node.value}function EA(e,t){e.node.value=t,Vy(e)}function xA(e){return e.node.childCount>0}function iU(e){return Jo(e)===void 0&&!xA(e)}function Bh(e,t){en(e.node.children,(n,i)=>{t(new b_(n,e,i))})}function CA(e,t,n,i){n&&t(e),Bh(e,a=>{CA(a,t,!0)})}function sU(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function yu(e){return new ct(e.parent===null?e.name:yu(e.parent)+"/"+e.name)}function Vy(e){e.parent!==null&&aU(e.parent,e.name,e)}function aU(e,t,n){const i=iU(n),a=Mr(e.node.children,t);i&&a?(delete e.node.children[t],e.node.childCount--,Vy(e)):!i&&!a&&(e.node.children[t]=n.node,e.node.childCount++,Vy(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU=/[\[\].#$\/\u0000-\u001F\u007F]/,lU=/[\[\].#$\u0000-\u001F\u007F]/,Fg=10*1024*1024,w_=function(e){return typeof e=="string"&&e.length!==0&&!oU.test(e)},TA=function(e){return typeof e=="string"&&e.length!==0&&!lU.test(e)},cU=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),TA(e)},uU=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!Wv(e)||e&&typeof e=="object"&&Mr(e,".sv")},RA=function(e,t,n,i){i&&t===void 0||Hh(Th(e,"value"),t,n)},Hh=function(e,t,n){const i=n instanceof ct?new Rj(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Zs(i));if(typeof t=="function")throw new Error(e+"contains a function "+Zs(i)+" with contents = "+t.toString());if(Wv(t))throw new Error(e+"contains "+t.toString()+" "+Zs(i));if(typeof t=="string"&&t.length>Fg/3&&Rh(t)>Fg)throw new Error(e+"contains a string greater than "+Fg+" utf8 bytes "+Zs(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let a=!1,l=!1;if(en(t,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!w_(u)))throw new Error(e+" contains an invalid key ("+u+") "+Zs(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Aj(i,u),Hh(e,f,i),Ij(i)}),a&&l)throw new Error(e+' contains ".value" child '+Zs(i)+" in addition to actual children.")}},dU=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=Gc(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!w_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(Tj);let a=null;for(n=0;n<t.length;n++){if(i=t[n],a!==null&&Yn(a,i))throw new Error(e+"contains a path "+a.toString()+" that is ancestor of another path "+i.toString());a=i}},fU=function(e,t,n,i){const a=Th(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(a+" must be an object containing the children to replace.");const l=[];en(t,(u,f)=>{const h=new ct(u);if(Hh(a,f,Tt(n,h)),e_(h)===".priority"&&!uU(f))throw new Error(a+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(h)}),dU(a,l)},AA=function(e,t,n,i){if(!TA(n))throw new Error(Th(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hU=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),AA(e,t,n)},E_=function(e,t){if(Fe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},pU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!w_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cU(n))throw new Error(Th(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fh(e,t){let n=null;for(let i=0;i<t.length;i++){const a=t[i],l=a.getPath();n!==null&&!t_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(a)}n&&e.eventLists_.push(n)}function IA(e,t,n){Fh(e,n),DA(e,i=>t_(i,t))}function Xn(e,t,n){Fh(e,n),DA(e,i=>Yn(i,t)||Yn(t,i))}function DA(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const a=e.eventLists_[i];if(a){const l=a.path;t(l)?(gU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function gU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Tc&&Zt("event: "+n.toString()),Xo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU="repo_interrupt",vU=25;class _U{constructor(t,n,i,a){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gf(),this.transactionQueueTree_=new b_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bU(e,t,n){if(e.stats_=Zv(e.repoInfo_),e.forceRestClient_||X3())e.server_=new Vf(e.repoInfo_,(i,a,l,u)=>{HE(e,i,a,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>FE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new ui(e.repoInfo_,t,(i,a,l,u)=>{HE(e,i,a,l,u)},i=>{FE(e,i)},i=>{SU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=nj(e.repoInfo_,()=>new t5(e.stats_,e.server_)),e.infoData_=new Kj,e.infoSyncTree_=new zE({startListening:(i,a,l,u)=>{let f=[];const h=e.infoData_.getNode(i._path);return h.isEmpty()||(f=gu(e.infoSyncTree_,i._path,h),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),x_(e,"connected",!1),e.serverSyncTree_=new zE({startListening:(i,a,l,u)=>(e.server_.listen(i,l,a,(f,h)=>{const p=u(f,h);Xn(e.eventQueue_,i._path,p)}),[]),stopListening:(i,a)=>{e.server_.unlisten(i,a)}})}function OA(e){const n=e.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function qh(e){return tU({timestamp:OA(e)})}function HE(e,t,n,i,a){e.dataUpdateCount++;const l=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(a)if(i){const h=kf(n,p=>jt(p));u=W5(e.serverSyncTree_,l,h,a)}else{const h=jt(n);u=yA(e.serverSyncTree_,l,h,a)}else if(i){const h=kf(n,p=>jt(p));u=G5(e.serverSyncTree_,l,h)}else{const h=jt(n);u=gu(e.serverSyncTree_,l,h)}let f=l;u.length>0&&(f=Bo(e,l)),Xn(e.eventQueue_,f,u)}function FE(e,t){x_(e,"connected",t),t===!1&&CU(e)}function SU(e,t){en(t,(n,i)=>{x_(e,n,i)})}function x_(e,t,n){const i=new ct("/.info/"+t),a=jt(n);e.infoData_.updateSnapshot(i,a);const l=gu(e.infoSyncTree_,i,a);Xn(e.eventQueue_,i,l)}function C_(e){return e.nextWriteId_++}function wU(e,t,n){const i=K5(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(a=>{const l=jt(a).withIndex(t._queryParams.getIndex());qy(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=gu(e.serverSyncTree_,t._path,l);else{const f=Xc(e.serverSyncTree_,t);u=yA(e.serverSyncTree_,t._path,l,f)}return Xn(e.eventQueue_,t._path,u),eh(e.serverSyncTree_,t,n,null,!0),l},a=>(vu(e,"get for query "+Ut(t)+" failed: "+a),Promise.reject(new Error(a))))}function EU(e,t,n,i,a){vu(e,"set",{path:t.toString(),value:n,priority:i});const l=qh(e),u=jt(n,i),f=h_(e.serverSyncTree_,t),h=wA(u,f,l),p=C_(e),g=gA(e.serverSyncTree_,t,h,p,!0);Fh(e.eventQueue_,g),e.server_.put(t.toString(),u.val(!0),(v,S)=>{const w=v==="ok";w||un("set at "+t+" failed: "+v);const D=rs(e.serverSyncTree_,p,!w);Xn(e.eventQueue_,t,D),Gy(e,a,v,S)});const y=R_(e,t);Bo(e,y),Xn(e.eventQueue_,y,[])}function xU(e,t,n,i){vu(e,"update",{path:t.toString(),value:n});let a=!0;const l=qh(e),u={};if(en(n,(f,h)=>{a=!1,u[f]=SA(Tt(t,f),jt(h),e.serverSyncTree_,l)}),a)Zt("update() called with empty data.  Don't do anything."),Gy(e,i,"ok",void 0);else{const f=C_(e),h=V5(e.serverSyncTree_,t,u,f);Fh(e.eventQueue_,h),e.server_.merge(t.toString(),n,(p,g)=>{const y=p==="ok";y||un("update at "+t+" failed: "+p);const v=rs(e.serverSyncTree_,f,!y),S=v.length>0?Bo(e,t):t;Xn(e.eventQueue_,S,v),Gy(e,i,p,g)}),en(n,p=>{const g=R_(e,Tt(t,p));Bo(e,g)}),Xn(e.eventQueue_,t,[])}}function CU(e){vu(e,"onDisconnectEvents");const t=qh(e),n=Gf();Uy(e.onDisconnect_,Ke(),(a,l)=>{const u=SA(a,l,e.serverSyncTree_,t);tA(n,a,u)});let i=[];Uy(n,Ke(),(a,l)=>{i=i.concat(gu(e.serverSyncTree_,a,l));const u=R_(e,a);Bo(e,u)}),e.onDisconnect_=Gf(),Xn(e.eventQueue_,Ke(),i)}function TU(e,t,n){let i;Fe(t._path)===".info"?i=qy(e.infoSyncTree_,t,n):i=qy(e.serverSyncTree_,t,n),IA(e.eventQueue_,t._path,i)}function qE(e,t,n){let i;Fe(t._path)===".info"?i=eh(e.infoSyncTree_,t,n):i=eh(e.serverSyncTree_,t,n),IA(e.eventQueue_,t._path,i)}function RU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(yU)}function vu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Zt(n,...t)}function Gy(e,t,n,i){t&&Xo(()=>{if(n==="ok")t(null);else{const a=(n||"error").toUpperCase();let l=a;i&&(l+=": "+i);const u=new Error(l);u.code=a,t(u)}})}function NA(e,t,n){return h_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function T_(e,t=e.transactionQueueTree_){if(t||Vh(e,t),Jo(t)){const n=kA(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&AU(e,yu(t),n)}else xA(t)&&Bh(t,n=>{T_(e,n)})}function AU(e,t,n){const i=n.map(p=>p.currentWriteId),a=NA(e,t,i);let l=a;const u=a.hash();for(let p=0;p<n.length;p++){const g=n[p];he(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const y=cn(t,g.path);l=l.updateChild(y,g.currentOutputSnapshotRaw)}const f=l.val(!0),h=t;e.server_.put(h.toString(),f,p=>{vu(e,"transaction put response",{path:h.toString(),status:p});let g=[];if(p==="ok"){const y=[];for(let v=0;v<n.length;v++)n[v].status=2,g=g.concat(rs(e.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&y.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();Vh(e,S_(e.transactionQueueTree_,t)),T_(e,e.transactionQueueTree_),Xn(e.eventQueue_,t,g);for(let v=0;v<y.length;v++)Xo(y[v])}else{if(p==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{un("transaction at "+h.toString()+" failed: "+p);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=p}Bo(e,t)}},u)}function Bo(e,t){const n=MA(e,t),i=yu(n),a=kA(e,n);return IU(e,a,i),i}function IU(e,t,n){if(t.length===0)return;const i=[];let a=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const h=t[f],p=cn(n,h.path);let g=!1,y;if(he(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)g=!0,y=h.abortReason,a=a.concat(rs(e.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=vU)g=!0,y="maxretry",a=a.concat(rs(e.serverSyncTree_,h.currentWriteId,!0));else{const v=NA(e,h.path,u);h.currentInputSnapshot=v;const S=t[f].update(v.val());if(S!==void 0){Hh("transaction failed: Data returned ",S,h.path);let w=jt(S);typeof S=="object"&&S!=null&&Mr(S,".priority")||(w=w.updatePriority(v.getPriority()));const R=h.currentWriteId,I=qh(e),L=wA(w,v,I);h.currentOutputSnapshotRaw=w,h.currentOutputSnapshotResolved=L,h.currentWriteId=C_(e),u.splice(u.indexOf(R),1),a=a.concat(gA(e.serverSyncTree_,h.path,L,h.currentWriteId,h.applyLocally)),a=a.concat(rs(e.serverSyncTree_,R,!0))}else g=!0,y="nodata",a=a.concat(rs(e.serverSyncTree_,h.currentWriteId,!0))}Xn(e.eventQueue_,n,a),a=[],g&&(t[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(y==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(y),!1,null))))}Vh(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)Xo(i[f]);T_(e,e.transactionQueueTree_)}function MA(e,t){let n,i=e.transactionQueueTree_;for(n=Fe(t);n!==null&&Jo(i)===void 0;)i=S_(i,n),t=ht(t),n=Fe(t);return i}function kA(e,t){const n=[];return LA(e,t,n),n.sort((i,a)=>i.order-a.order),n}function LA(e,t,n){const i=Jo(t);if(i)for(let a=0;a<i.length;a++)n.push(i[a]);Bh(t,a=>{LA(e,a,n)})}function Vh(e,t){const n=Jo(t);if(n){let i=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[i]=n[a],i++);n.length=i,EA(t,n.length>0?n:void 0)}Bh(t,i=>{Vh(e,i)})}function R_(e,t){const n=yu(MA(e,t)),i=S_(e.transactionQueueTree_,t);return sU(i,a=>{qg(e,a)}),qg(e,i),CA(i,a=>{qg(e,a)}),n}function qg(e,t){const n=Jo(t);if(n){const i=[];let a=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),a=a.concat(rs(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?EA(t,void 0):n.length=l+1,Xn(e.eventQueue_,yu(t),a);for(let u=0;u<i.length;u++)Xo(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DU(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let a=n[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}t+="/"+a}return t}function OU(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):un(`Invalid query segment '${n}' in query '${e}'`)}return t}const VE=function(e,t){const n=NU(e),i=n.namespace;n.domain==="firebase.com"&&pi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&pi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||H3();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new UR(n.host,n.secure,i,a,t,"",i!==n.subdomain),path:new ct(n.pathString)}},NU=function(e){let t="",n="",i="",a="",l="",u=!0,f="https",h=443;if(typeof e=="string"){let p=e.indexOf("//");p>=0&&(f=e.substring(0,p-1),e=e.substring(p+2));let g=e.indexOf("/");g===-1&&(g=e.length);let y=e.indexOf("?");y===-1&&(y=e.length),t=e.substring(0,Math.min(g,y)),g<y&&(a=DU(e.substring(g,y)));const v=OU(e.substring(Math.min(e.length,y)));p=t.indexOf(":"),p>=0?(u=f==="https"||f==="wss",h=parseInt(t.substring(p+1),10)):p=t.length;const S=t.slice(0,p);if(S.toLowerCase()==="localhost")n="localhost";else if(S.split(".").length<=2)n=S;else{const w=t.indexOf(".");i=t.substring(0,w).toLowerCase(),n=t.substring(w+1),l=i}"ns"in v&&(l=v.ns)}return{host:t,port:h,domain:n,subdomain:i,secure:u,scheme:f,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",MU=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let a;const l=new Array(8);for(a=7;a>=0;a--)l[a]=GE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(a=11;a>=0&&t[a]===63;a--)t[a]=0;t[a]++}else for(a=0;a<12;a++)t[a]=Math.floor(Math.random()*64);for(a=0;a<12;a++)u+=GE.charAt(t[a]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(t,n,i,a){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=a}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class LU{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,n,i,a){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=a}get key(){return Ye(this._path)?null:e_(this._path)}get ref(){return new bi(this._repo,this._path)}get _queryIdentifier(){const t=DE(this._queryParams),n=Kv(t);return n==="{}"?"default":n}get _queryObject(){return DE(this._queryParams)}isEqual(t){if(t=Vt(t),!(t instanceof A_))return!1;const n=this._repo===t._repo,i=t_(this._path,t._path),a=this._queryIdentifier===t._queryIdentifier;return n&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Cj(this._path)}}class bi extends A_{constructor(t,n){super(t,n,new s_,!1)}get parent(){const t=YR(this._path);return t===null?null:new bi(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Zc{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ct(t),i=Jc(this.ref,t);return new Zc(this._node.getChild(n),i,Rt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,a)=>t(new Zc(a,Jc(this.ref,i),Rt)))}hasChild(t){const n=new ct(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gr(e,t){return e=Vt(e),e._checkNotDeleted("ref"),t!==void 0?Jc(e._root,t):e._root}function Jc(e,t){return e=Vt(e),Fe(e._path)===null?hU("child","path",t):AA("child","path",t),new bi(e._repo,Tt(e._path,t))}function PU(e,t){e=Vt(e),E_("push",e._path),RA("push",t,e._path,!0);const n=OA(e._repo),i=MU(n),a=Jc(e,i),l=Jc(e,i);let u;return t!=null?u=I_(l,t).then(()=>l):u=Promise.resolve(l),a.then=u.then.bind(u),a.catch=u.then.bind(u,void 0),a}function jA(e){return E_("remove",e._path),I_(e,null)}function I_(e,t){e=Vt(e),E_("set",e._path),RA("set",t,e._path,!1);const n=new ou;return EU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function UA(e,t){fU("update",t,e._path);const n=new ou;return xU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function $A(e){e=Vt(e);const t=new PA(()=>{}),n=new Gh(t);return wU(e._repo,e,n).then(i=>new Zc(i,new bi(e._repo,e._path),e._queryParams.getIndex()))}class Gh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new kU("value",this,new Zc(t.snapshotNode,new bi(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new LU(this,t,n):null}matches(t){return t instanceof Gh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function jU(e,t,n,i,a){let l;if(typeof i=="object"&&(l=void 0,a=i),typeof i=="function"&&(l=i),a&&a.onlyOnce){const h=n,p=(g,y)=>{qE(e._repo,e,f),h(g,y)};p.userCallback=n.userCallback,p.context=n.context,n=p}const u=new PA(n,l||void 0),f=new Gh(u);return TU(e._repo,e,f),()=>qE(e._repo,e,f)}function D_(e,t,n,i){return jU(e,"value",t,n,i)}j5(bi);H5(bi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU="FIREBASE_DATABASE_EMULATOR_HOST",Yy={};let $U=!1;function zU(e,t,n,i){const a=t.lastIndexOf(":"),l=t.substring(0,a),u=Vo(l);e.repoInfo_=new UR(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function BU(e,t,n,i,a){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||pi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Zt("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=VE(l,a),f=u.repoInfo,h;typeof process<"u"&&fE&&(h=fE[UU]),h?(l=`http://${h}?ns=${f.namespace}`,u=VE(l,a),f=u.repoInfo):u.repoInfo.secure;const p=new J3(e.name,e.options,t);pU("Invalid Firebase Database URL",u),Ye(u.path)||pi("Database URL must point to the root of a Firebase Database (not including a child path).");const g=FU(f,e,p,new Z3(e,n));return new qU(g,e)}function HU(e,t){const n=Yy[t];(!n||n[e.key]!==e)&&pi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),RU(e),delete n[e.key]}function FU(e,t,n,i){let a=Yy[t.name];a||(a={},Yy[t.name]=a);let l=a[e.toURLString()];return l&&pi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new _U(e,$U,n,i),a[e.toURLString()]=l,l}class qU{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bi(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&pi("Cannot call "+t+" on a deleted database.")}}function VU(e=Pv(),t){const n=Yo(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=LL("database");i&&GU(n,...i)}return n}function GU(e,t,n,i={}){e=Vt(e),e._checkNotDeleted("useEmulator");const a=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(a===e._repoInternal.repoInfo_.host&&da(i,l.repoInfo_.emulatorOptions))return;pi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&pi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new yf(yf.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:PL(i.mockUserToken,e.app.options.projectId);u=new yf(f)}Vo(t)&&(IT(t),DT("Database",!0)),zU(l,a,i,u)}/**
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
 */function YU(e){P3(Qo),Or(new fr("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return BU(i,a,l,n)},"PUBLIC").setMultipleInstances(!0)),Qn(hE,pE,e),Qn(hE,pE,"esm2020")}ui.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};ui.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};YU();const Nn=Oh(()=>VU(Ec)),zA=async(e,t)=>{const n=Nn;if(!n)throw new Error("No Firebase database connection to use");const i=gr(n,`messagingTokens/${e}/${t}`);await jA(i)},YE=async(e,t)=>{const n=Nn;if(!n)throw new Error("No Firebase database connection to use");const i=gr(n,`messagingTokens/${e}/${t}`),a={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await I_(i,a)},QU=({children:e})=>{const[t,n]=T.useState();T.useEffect(()=>{if(_o){const u=k6(_o,f=>{console.log("[MessagingProvider] Received message ",f);const h=f.notification?.title??f.data?.title,p=f.notification?.body??f.data?.body;h&&new Notification(h,{body:p})});return()=>{u()}}return()=>{}},[]);const i=lt(du);T.useEffect(()=>{_o&&i&&Xw().then(u=>(n(u),YE(i,u))).catch(u=>{Dr(u)})},[i]);const a=T.useCallback(()=>{_o&&i&&Xw().then(u=>(n(u),YE(i,u))).catch(u=>{Dr(u)})},[i]);T.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&a()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[a]);const l=T.useCallback(async()=>{t&&i&&(await zA(i,t),n(void 0))},[t,i]);return _.jsx(fu.Provider,{value:{token:t,refreshToken:a,deleteToken:l},children:e})},BA=60,O_=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,nt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",STATS:"/stats"},HA=({size:e=22})=>_.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[_.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),_.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function FA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qA=FA,VA=new wa("auth","Firebase",FA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new kv("@firebase/auth");function WU(e,...t){th.logLevel<=ot.WARN&&th.warn(`Auth (${Qo}): ${e}`,...t)}function vf(e,...t){th.logLevel<=ot.ERROR&&th.error(`Auth (${Qo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e,...t){throw M_(e,...t)}function dr(e,...t){return M_(e,...t)}function N_(e,t,n){const i={...qA(),[t]:n};return new wa("auth","Firebase",i).create(t,{appName:e.name})}function di(e){return N_(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function KU(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&Zn(e,"argument-error"),N_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function M_(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return VA.create(e,...t)}function Oe(e,t,...n){if(!e)throw M_(t,...n)}function oi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw vf(t),new Error(t)}function mi(e,t){e||oi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(){return typeof self<"u"&&self.location?.href||""}function XU(){return QE()==="http:"||QE()==="https:"}function QE(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XU()||zL()||"connection"in navigator)?navigator.onLine:!0}function JU(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,n){this.shortDelay=t,this.longDelay=n,mi(n>t,"Short delay should be less than long delay!"),this.isMobile=Mv()||OT()}get(){return ZU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(e,t){mi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;oi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;oi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;oi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t$=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],n$=new _u(3e4,6e4);function vs(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function _s(e,t,n,i,a={}){return YA(e,a,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Go({key:e.config.apiKey,...u}).slice(1),h=await e._getAdditionalHeaders();h["Content-Type"]="application/json",e.languageCode&&(h["X-Firebase-Locale"]=e.languageCode);const p={method:t,headers:h,...l};return $L()||(p.referrerPolicy="no-referrer"),e.emulatorConfig&&Vo(e.emulatorConfig.host)&&(p.credentials="include"),GA.fetch()(await QA(e,e.config.apiHost,n,f),p)})}async function YA(e,t,n){e._canInitEmulator=!1;const i={...e$,...t};try{const a=new i$(e),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Wd(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[h,p]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wd(e,"credential-already-in-use",u);if(h==="EMAIL_EXISTS")throw Wd(e,"email-already-in-use",u);if(h==="USER_DISABLED")throw Wd(e,"user-disabled",u);const g=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw N_(e,g,p);Zn(e,g)}}catch(a){if(a instanceof vi)throw a;Zn(e,"network-request-failed",{message:String(a)})}}async function bu(e,t,n,i,a={}){const l=await _s(e,t,n,i,a);return"mfaPendingCredential"in l&&Zn(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function QA(e,t,n,i){const a=`${t}${n}?${i}`,l=e,u=l.config.emulator?k_(e.config,a):`${e.config.apiScheme}://${a}`;return t$.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function r$(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class i${clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(dr(this.auth,"network-request-failed")),n$.get())})}}function Wd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=dr(e,t,i);return a.customData._tokenResponse=n,a}function WE(e){return e!==void 0&&e.enterprise!==void 0}class s${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return r$(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function a$(e,t){return _s(e,"GET","/v2/recaptchaConfig",vs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o$(e,t){return _s(e,"POST","/v1/accounts:delete",t)}async function nh(e,t){return _s(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function l$(e,t=!1){const n=Vt(e),i=await n.getIdToken(t),a=L_(i);Oe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l?.sign_in_provider;return{claims:a,token:i,authTime:Oc(Vg(a.auth_time)),issuedAtTime:Oc(Vg(a.iat)),expirationTime:Oc(Vg(a.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Vg(e){return Number(e)*1e3}function L_(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return vf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Mf(n);return a?JSON.parse(a):(vf("Failed to decode base64 JWT payload"),null)}catch(a){return vf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function KE(e){const t=L_(e);return Oe(t,"internal-error"),Oe(typeof t.exp<"u","internal-error"),Oe(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof vi&&c$(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function c$({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u${constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oc(this.lastLoginAt),this.creationTime=Oc(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(e){const t=e.auth,n=await e.getIdToken(),i=await eu(e,nh(t,{idToken:n}));Oe(i?.users.length,t,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const l=a.providerUserInfo?.length?WA(a.providerUserInfo):[],u=f$(e.providerData,l),f=e.isAnonymous,h=!(e.email&&a.passwordHash)&&!u?.length,p=f?h:!1,g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Wy(a.createdAt,a.lastLoginAt),isAnonymous:p};Object.assign(e,g)}async function d$(e){const t=Vt(e);await rh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function f$(e,t){return[...e.filter(i=>!t.some(a=>a.providerId===i.providerId)),...t]}function WA(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h$(e,t){const n=await YA(e,{},async()=>{const i=Go({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:l}=e.config,u=await QA(e,a,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:f,body:i};return e.emulatorConfig&&Vo(e.emulatorConfig.host)&&(h.credentials="include"),GA.fetch()(u,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p$(e,t){return _s(e,"POST","/v2/accounts:revokeToken",vs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Oe(t.idToken,"internal-error"),Oe(typeof t.idToken<"u","internal-error"),Oe(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):KE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Oe(t.length!==0,"internal-error");const n=KE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await h$(t,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,u=new Co;return i&&(Oe(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),a&&(Oe(typeof a=="string","internal-error",{appName:t}),u.accessToken=a),l&&(Oe(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return oi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e,t){Oe(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ar{constructor({uid:t,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new u$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Wy(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await eu(this,this.stsTokenManager.getToken(this.auth,t));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return l$(this,t)}reload(){return d$(this)}_assign(t){this!==t&&(Oe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ar({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await rh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(di(this.auth));const t=await this.getIdToken();return await eu(this,o$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,h=n._redirectEventId??void 0,p=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:y,emailVerified:v,isAnonymous:S,providerData:w,stsTokenManager:D}=n;Oe(y&&D,t,"internal-error");const R=Co.fromJSON(this.name,D);Oe(typeof y=="string",t,"internal-error"),Yi(i,t.name),Yi(a,t.name),Oe(typeof v=="boolean",t,"internal-error"),Oe(typeof S=="boolean",t,"internal-error"),Yi(l,t.name),Yi(u,t.name),Yi(f,t.name),Yi(h,t.name),Yi(p,t.name),Yi(g,t.name);const I=new ar({uid:y,auth:t,email:a,emailVerified:v,displayName:i,isAnonymous:S,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:R,createdAt:p,lastLoginAt:g});return w&&Array.isArray(w)&&(I.providerData=w.map(L=>({...L}))),h&&(I._redirectEventId=h),I}static async _fromIdTokenResponse(t,n,i=!1){const a=new Co;a.updateFromServerResponse(n);const l=new ar({uid:n.localId,auth:t,stsTokenManager:a,isAnonymous:i});return await rh(l),l}static async _fromGetAccountInfoResponse(t,n,i){const a=n.users[0];Oe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?WA(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!l?.length,f=new Co;f.updateFromIdToken(i);const h=new ar({uid:a.localId,auth:t,stsTokenManager:f,isAnonymous:u}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Wy(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(h,p),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new Map;function li(e){mi(e instanceof Function,"Expected a class definition");let t=XE.get(e);return t?(mi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,XE.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}KA.type="NONE";const ZE=KA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(e,t,n){return`firebase:${e}:${t}:${n}`}class To{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=_f(this.userKey,a.apiKey,l),this.fullPersistenceKey=_f("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await nh(this.auth,{idToken:t}).catch(()=>{});return n?ar._fromGetAccountInfoResponse(this.auth,n,t):null}return ar._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new To(li(ZE),t,i);const a=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let l=a[0]||li(ZE);const u=_f(i,t.config.apiKey,t.name);let f=null;for(const p of n)try{const g=await p._get(u);if(g){let y;if(typeof g=="string"){const v=await nh(t,{idToken:g}).catch(()=>{});if(!v)break;y=await ar._fromGetAccountInfoResponse(t,v,g)}else y=ar._fromJSON(t,g);p!==l&&(f=y),l=p;break}}catch{}const h=a.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!h.length?new To(l,t,i):(l=h[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async p=>{if(p!==l)try{await p._remove(u)}catch{}})),new To(l,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(XA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nI(t))return"Blackberry";if(rI(t))return"Webos";if(ZA(t))return"Safari";if((t.includes("chrome/")||JA(t))&&!t.includes("edge/"))return"Chrome";if(tI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function XA(e=dn()){return/firefox\//i.test(e)}function ZA(e=dn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function JA(e=dn()){return/crios\//i.test(e)}function eI(e=dn()){return/iemobile/i.test(e)}function tI(e=dn()){return/android/i.test(e)}function nI(e=dn()){return/blackberry/i.test(e)}function rI(e=dn()){return/webos/i.test(e)}function P_(e=dn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function m$(e=dn()){return P_(e)&&!!window.navigator?.standalone}function g$(){return BL()&&document.documentMode===10}function iI(e=dn()){return P_(e)||tI(e)||rI(e)||nI(e)||/windows phone/i.test(e)||eI(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(e,t=[]){let n;switch(e){case"Browser":n=JE(dn());break;case"Worker":n=`${JE(dn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qo}/${i}`}/**
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
 */class y${constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const h=t(l);u(h)}catch(h){f(h)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function v$(e,t={}){return _s(e,"GET","/v2/passwordPolicy",vs(e,t))}/**
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
 */const _$=6;class b${constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??_$,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),a&&(n.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<t.length;a++)i=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(t,n,i,a){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ex(this),this.idTokenSubscription=new ex(this),this.beforeStateQueue=new y$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=li(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await To.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await nh(this,{idToken:t}),i=await ar._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(On(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await rh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=JU()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(On(this.app))return Promise.reject(di(this));const n=t?Vt(t):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Oe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return On(this.app)?Promise.reject(di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(li(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await v$(this),n=new b$(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new wa("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await p$(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&li(t)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[li(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const h=t.addObserver(n,i,a);return()=>{u=!0,h()}}else{const h=t.addObserver(n);return()=>{u=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&WU(`Error while retrieving App Check token: ${t.error}`),t?.token}}function bs(e){return Vt(e)}class ex{constructor(t){this.auth=t,this.observer=null,this.addObserver=KL(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w$(e){Yh=e}function aI(e){return Yh.loadJS(e)}function E$(){return Yh.recaptchaEnterpriseScript}function x$(){return Yh.gapiScript}function C$(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class T${constructor(){this.enterprise=new R$}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class R${ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const A$="recaptcha-enterprise",oI="NO_RECAPTCHA";class I${constructor(t){this.type=A$,this.auth=bs(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{a$(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const p=new s$(h);return l.tenantId==null?l._agentRecaptchaConfig=p:l._tenantRecaptchaConfigs[l.tenantId]=p,u(p.siteKey)}}).catch(h=>{f(h)})})}function a(l,u,f){const h=window.grecaptcha;WE(h)?h.enterprise.ready(()=>{h.enterprise.execute(l,{action:t}).then(p=>{u(p)}).catch(()=>{u(oI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new T$().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&WE(window.grecaptcha))a(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let h=E$();h.length!==0&&(h+=f),aI(h).then(()=>{a(f,l,u)}).catch(p=>{u(p)})}}).catch(f=>{u(f)})})}}async function tx(e,t,n,i=!1,a=!1){const l=new I$(e);let u;if(a)u=oI;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const h=f.phoneEnrollmentInfo.phoneNumber,p=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const h=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Ky(e,t,n,i,a){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await tx(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await tx(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(e,t){const n=Yo(e,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(da(l,t??{}))return a;Zn(a,"already-initialized")}return n.initialize({options:t})}function D$(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(li);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function O$(e,t,n){const i=bs(e);Oe(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const a=!1,l=cI(t),{host:u,port:f}=N$(t),h=f===null?"":`:${f}`,p={url:`${l}//${u}${h}/`},g=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Oe(da(p,i.config.emulator)&&da(g,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=p,i.emulatorConfig=g,i.settings.appVerificationDisabledForTesting=!0,Vo(u)?(IT(`${l}//${u}${h}`),DT("Auth",!0)):M$()}function cI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function N$(e){const t=cI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:nx(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:nx(u)}}}function nx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function M$(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return oi("not implemented")}_getIdTokenResponse(t){return oi("not implemented")}_linkToIdToken(t,n){return oi("not implemented")}_getReauthenticationResolver(t){return oi("not implemented")}}async function k$(e,t){return _s(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L$(e,t){return bu(e,"POST","/v1/accounts:signInWithPassword",vs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P$(e,t){return bu(e,"POST","/v1/accounts:signInWithEmailLink",vs(e,t))}async function j$(e,t){return bu(e,"POST","/v1/accounts:signInWithEmailLink",vs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends j_{constructor(t,n,i,a=null){super("password",i),this._email=t,this._password=n,this._tenantId=a}static _fromEmailAndPassword(t,n){return new tu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new tu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ky(t,n,"signInWithPassword",L$);case"emailLink":return P$(t,{email:this._email,oobCode:this._password});default:Zn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ky(t,i,"signUpPassword",k$);case"emailLink":return j$(t,{idToken:n,email:this._email,oobCode:this._password});default:Zn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(e,t){return bu(e,"POST","/v1/accounts:signInWithIdp",vs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$="http://localhost";class _a extends j_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new _a(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const u=new _a(i,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Ro(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Ro(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ro(t,n)}buildRequest(){const t={requestUri:U$,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Go(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $$(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z$(e){const t=mc(gc(e)).link,n=t?mc(gc(t)).deep_link_id:null,i=mc(gc(e)).deep_link_id;return(i?mc(gc(i)).link:null)||i||n||t||e}class U_{constructor(t){const n=mc(gc(t)),i=n.apiKey??null,a=n.oobCode??null,l=$$(n.mode??null);Oe(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=z$(t);try{return new U_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.providerId=el.PROVIDER_ID}static credential(t,n){return tu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=U_.parseLink(n);return Oe(i,"argument-error"),tu._fromEmailAndCode(t,i.code,i.tenantId)}}el.PROVIDER_ID="password";el.EMAIL_PASSWORD_SIGN_IN_METHOD="password";el.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Su extends $_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Su{constructor(){super("facebook.com")}static credential(t){return _a._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return es.credentialFromTaggedObject(t)}static credentialFromError(t){return es.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return es.credential(t.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Su{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return _a._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ii.credentialFromTaggedObject(t)}static credentialFromError(t){return ii.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return ii.credential(n,i)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Su{constructor(){super("github.com")}static credential(t){return _a._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ts.credentialFromTaggedObject(t)}static credentialFromError(t){return ts.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ts.credential(t.oauthAccessToken)}catch{return null}}}ts.GITHUB_SIGN_IN_METHOD="github.com";ts.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Su{constructor(){super("twitter.com")}static credential(t,n){return _a._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ns.credentialFromTaggedObject(t)}static credentialFromError(t){return ns.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ns.credential(n,i)}catch{return null}}}ns.TWITTER_SIGN_IN_METHOD="twitter.com";ns.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B$(e,t){return bu(e,"POST","/v1/accounts:signUp",vs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,a=!1){const l=await ar._fromIdTokenResponse(t,i,a),u=rx(i);return new ba({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const a=rx(i);return new ba({user:t,providerId:a,_tokenResponse:i,operationType:n})}}function rx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends vi{constructor(t,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,ih.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,a){return new ih(t,n,i,a)}}function uI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ih._fromErrorAndOperation(e,l,t,i):l})}async function H$(e,t,n=!1){const i=await eu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ba._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F$(e,t,n=!1){const{auth:i}=e;if(On(i.app))return Promise.reject(di(i));const a="reauthenticate";try{const l=await eu(e,uI(i,a,t,e),n);Oe(l.idToken,i,"internal-error");const u=L_(l.idToken);Oe(u,i,"internal-error");const{sub:f}=u;return Oe(e.uid===f,i,"user-mismatch"),ba._forOperation(e,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Zn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(e,t,n=!1){if(On(e.app))return Promise.reject(di(e));const i="signIn",a=await uI(e,i,t),l=await ba._fromIdTokenResponse(e,i,a);return n||await e._updateCurrentUser(l.user),l}async function q$(e,t){return dI(bs(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(e){const t=bs(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function V$(e,t,n){if(On(e.app))return Promise.reject(di(e));const i=bs(e),u=await Ky(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",B$).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&fI(e),h}),f=await ba._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function G$(e,t,n){return On(e.app)?Promise.reject(di(e)):q$(Vt(e),el.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&fI(e),i})}function Y$(e,t,n,i){return Vt(e).onIdTokenChanged(t,n,i)}function Q$(e,t,n){return Vt(e).beforeAuthStateChanged(t,n)}function W$(e,t,n,i){return Vt(e).onAuthStateChanged(t,n,i)}const sh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sh,"1"),this.storage.removeItem(sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K$=1e3,X$=10;class pI extends hI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&t(n,a,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,h)=>{this.notifyListeners(u,h)});return}const i=t.key;n?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);g$()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,X$):a()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},K$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}pI.type="LOCAL";const Z$=pI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI extends hI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}mI.type="SESSION";const gI=mI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J$(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(a=>a.isListeningto(t));if(n)return n;const i=new Qh(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:a,data:l}=n.data,u=this.handlersMap[a];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(u).map(async p=>p(n.origin,l)),h=await J$(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:h})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((f,h)=>{const p=z_("",20);a.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},i);u={messageChannel:a,onMessage(y){const v=y;if(v.data.eventId===p)switch(v.data.status){case"ack":clearTimeout(g),l=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(v.data.response);break;default:clearTimeout(g),clearTimeout(l),h(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return window}function tz(e){Ir().location.href=e}/**
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
 */function yI(){return typeof Ir().WorkerGlobalScope<"u"&&typeof Ir().importScripts=="function"}async function nz(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rz(){return navigator?.serviceWorker?.controller||null}function iz(){return yI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="firebaseLocalStorageDb",sz=1,ah="firebaseLocalStorage",_I="fbase_key";class wu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wh(e,t){return e.transaction([ah],t?"readwrite":"readonly").objectStore(ah)}function az(){const e=indexedDB.deleteDatabase(vI);return new wu(e).toPromise()}function Xy(){const e=indexedDB.open(vI,sz);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(ah,{keyPath:_I})}catch(a){n(a)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(ah)?t(i):(i.close(),await az(),t(await Xy()))})})}async function ix(e,t,n){const i=Wh(e,!0).put({[_I]:t,value:n});return new wu(i).toPromise()}async function oz(e,t){const n=Wh(e,!1).get(t),i=await new wu(n).toPromise();return i===void 0?null:i.value}function sx(e,t){const n=Wh(e,!0).delete(t);return new wu(n).toPromise()}const lz=800,cz=3;class bI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xy(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>cz)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qh._getInstance(iz()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await nz(),!this.activeServiceWorker)return;this.sender=new ez(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xy();return await ix(t,sh,"1"),await sx(t,sh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ix(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>oz(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>sx(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(a=>{const l=Wh(a,!1).getAll();return new wu(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:a,value:l}of t)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bI.type="LOCAL";const uz=bI;new _u(3e4,6e4);/**
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
 */function SI(e,t){return t?li(t):(Oe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_ extends j_{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ro(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ro(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ro(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function dz(e){return dI(e.auth,new B_(e),e.bypassAuthState)}function fz(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),F$(n,new B_(e),e.bypassAuthState)}async function hz(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),H$(n,new B_(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(t,n,i,a,l=!1){this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dz;case"linkViaPopup":case"linkViaRedirect":return hz;case"reauthViaPopup":case"reauthViaRedirect":return fz;default:Zn(this.auth,"internal-error")}}resolve(t){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pz=new _u(2e3,1e4);async function mz(e,t,n){if(On(e.app))return Promise.reject(dr(e,"operation-not-supported-in-this-environment"));const i=bs(e);KU(e,t,$_);const a=SI(i,n);return new ra(i,"signInViaPopup",t,a).executeNotNull()}class ra extends wI{constructor(t,n,i,a,l){super(t,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,ra.currentPopupAction&&ra.currentPopupAction.cancel(),ra.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Oe(t,this.auth,"internal-error"),t}async onExecution(){mi(this.filter.length===1,"Popup operations only handle one event");const t=z_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ra.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pz.get())};t()}}ra.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gz="pendingRedirect",bf=new Map;class yz extends wI{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=bf.get(this.auth._key());if(!t){try{const i=await vz(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}bf.set(this.auth._key(),t)}return this.bypassAuthState||bf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vz(e,t){const n=Sz(t),i=bz(e);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function _z(e,t){bf.set(e._key(),t)}function bz(e){return li(e._redirectPersistence)}function Sz(e){return _f(gz,e.config.apiKey,e.name)}async function wz(e,t,n=!1){if(On(e.app))return Promise.reject(di(e));const i=bs(e),a=SI(i,t),u=await new yz(i,a,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ez=600*1e3;class xz{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Cz(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!EI(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(dr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ez&&this.cachedEventUids.clear(),this.cachedEventUids.has(ax(t))}saveEventToCache(t){this.cachedEventUids.add(ax(t)),this.lastProcessedEventTime=Date.now()}}function ax(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function EI({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Cz(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EI(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tz(e,t={}){return _s(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rz=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Az=/^https?/;async function Iz(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tz(e);for(const n of t)try{if(Dz(n))return}catch{}Zn(e,"unauthorized-domain")}function Dz(e){const t=Qy(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!Az.test(n))return!1;if(Rz.test(e))return i===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const Oz=new _u(3e4,6e4);function ox(){const e=Ir().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Nz(e){return new Promise((t,n)=>{function i(){ox(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ox(),n(dr(e,"network-request-failed"))},timeout:Oz.get()})}if(Ir().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Ir().gapi?.load)i();else{const a=C$("iframefcb");return Ir()[a]=()=>{gapi.load?i():n(dr(e,"network-request-failed"))},aI(`${x$()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Sf=null,t})}let Sf=null;function Mz(e){return Sf=Sf||Nz(e),Sf}/**
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
 */const kz=new _u(5e3,15e3),Lz="__/auth/iframe",Pz="emulator/auth/iframe",jz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uz=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $z(e){const t=e.config;Oe(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k_(t,Pz):`https://${e.config.authDomain}/${Lz}`,i={apiKey:t.apiKey,appName:e.name,v:Qo},a=Uz.get(e.config.apiHost);a&&(i.eid=a);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Go(i).slice(1)}`}async function zz(e){const t=await Mz(e),n=Ir().gapi;return Oe(n,e,"internal-error"),t.open({where:document.body,url:$z(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jz,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const u=dr(e,"network-request-failed"),f=Ir().setTimeout(()=>{l(u)},kz.get());function h(){Ir().clearTimeout(f),a(i)}i.ping(h).then(h,()=>{l(u)})}))}/**
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
 */const Bz={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hz=500,Fz=600,qz="_blank",Vz="http://localhost";class lx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gz(e,t,n,i=Hz,a=Fz){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const h={...Bz,width:i.toString(),height:a.toString(),top:l,left:u},p=dn().toLowerCase();n&&(f=JA(p)?qz:n),XA(p)&&(t=t||Vz,h.scrollbars="yes");const g=Object.entries(h).reduce((v,[S,w])=>`${v}${S}=${w},`,"");if(m$(p)&&f!=="_self")return Yz(t||"",f),new lx(null);const y=window.open(t||"",f,g);Oe(y,e,"popup-blocked");try{y.focus()}catch{}return new lx(y)}function Yz(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Qz="__/auth/handler",Wz="emulator/auth/handler",Kz=encodeURIComponent("fac");async function cx(e,t,n,i,a,l){Oe(e.config.authDomain,e,"auth-domain-config-required"),Oe(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Qo,eventId:a};if(t instanceof $_){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Sy(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,y]of Object.entries({}))u[g]=y}if(t instanceof Su){const g=t.getScopes().filter(y=>y!=="");g.length>0&&(u.scopes=g.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const g of Object.keys(f))f[g]===void 0&&delete f[g];const h=await e._getAppCheckToken(),p=h?`#${Kz}=${encodeURIComponent(h)}`:"";return`${Xz(e)}?${Go(f).slice(1)}${p}`}function Xz({config:e}){return e.emulator?k_(e,Wz):`https://${e.authDomain}/${Qz}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="webStorageSupport";class Zz{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gI,this._completeRedirectFn=wz,this._overrideRedirectResult=_z}async _openPopup(t,n,i,a){mi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await cx(t,n,i,Qy(),a);return Gz(t,l,z_())}async _openRedirect(t,n,i,a){await this._originValidation(t);const l=await cx(t,n,i,Qy(),a);return tz(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(mi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await zz(t),i=new xz(t);return n.register("authEvent",a=>(Oe(a?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Gg,{type:Gg},a=>{const l=a?.[0]?.[Gg];l!==void 0&&n(!!l),Zn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Iz(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return iI()||ZA()||P_()}}const Jz=Zz;var ux="@firebase/auth",dx="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t8(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n8(e){Or(new fr("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;Oe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sI(e)},p=new S$(i,a,l,h);return D$(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Or(new fr("auth-internal",t=>{const n=bs(t.getProvider("auth").getImmediate());return(i=>new e8(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(ux,dx,t8(e)),Qn(ux,dx,"esm2020")}/**
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
 */const r8=300,i8=AT("authIdTokenMaxAge")||r8;let fx=null;const s8=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>i8)return;const a=n?.token;fx!==a&&(fx=a,await fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function a8(e=Pv()){const t=Yo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=lI(e,{popupRedirectResolver:Jz,persistence:[uz,Z$,gI]}),i=AT("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=s8(l.toString());Q$(n,u,()=>u(n.currentUser)),Y$(n,f=>u(f))}}const a=TT("auth");return a&&O$(n,`http://${a}`),n}function o8(){return document.getElementsByTagName("head")?.[0]??document}w$({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=a=>{const l=dr("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",o8().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n8("Browser");const l8=qA,si=Oh(()=>{if(!Ec)throw new Error("Firebase app not initialized");try{return a8(Ec)}catch{return lI(Ec,{errorMap:l8})}}),c8=M(gs)`
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
`,u8=M.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,d8=M.button`
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
  transition: background-color 0.15s, color 0.15s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: ${e=>e.theme.colors.main};
  }
`,f8=()=>{const e=lt(Ko),{deleteToken:t}=T.useContext(fu),n=T.useCallback(async()=>{await t(),await si?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?_.jsx(c8,{to:nt.SIGN_IN,children:"Sign in"}):_.jsxs(_.Fragment,{children:[_.jsx(u8,{children:e.data.displayName}),_.jsx(d8,{type:"button",onClick:n,children:"Sign out"})]})},h8="#181a2f",p8=280,m8=M.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,g8=M.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${p8}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,y8=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${h8};
  color: #fff;
  flex-shrink: 0;
`,v8=M(gs)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,_8=M.span`
  font-size: 15px;
  font-weight: 600;
`,b8=M.button`
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
`,S8=M.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,Kd=M(bv)`
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
`,w8=M.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,E8=()=>_.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:_.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),x8=({open:e,onClose:t})=>{const n=lt(O_);return _.jsxs(_.Fragment,{children:[_.jsx(m8,{$open:e,onClick:t}),_.jsxs(g8,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[_.jsxs(y8,{children:[_.jsxs(v8,{to:nt.CLASS_LIST,onClick:t,children:[_.jsx(HA,{size:20}),_.jsx(_8,{children:"Peloton Alerts"})]}),_.jsx(b8,{onClick:t,"aria-label":"Close menu",children:_.jsx(E8,{})})]}),_.jsxs(S8,{onClick:t,children:[_.jsx(Kd,{to:nt.CLASS_LIST,end:!0,children:"Classes"}),_.jsx(Kd,{to:nt.ALERTS,children:"Alerts"}),_.jsx(Kd,{to:nt.ABOUT,end:!0,children:"FAQ"}),n&&_.jsx(Kd,{to:nt.STATS,children:"Stats"})]}),_.jsx(w8,{children:_.jsx(f8,{})})]})]})},C8=M.div`
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
`,T8=({children:e,open:t,onClose:n})=>{const i=T.useRef(null),a=T.useCallback(l=>{l.key==="Escape"&&n()},[n]);return T.useEffect(()=>{if(t)return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[t,a]),T.useEffect(()=>{if(!t)return;const l=f=>{const h=f.target;if(!(h instanceof Node)){n();return}const p=i.current;p&&p.contains(h)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?_.jsx(C8,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},R8=M(gs)`
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
`,A8=M.button`
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
`,I8=M.div`
  position: relative;
`,D8=M.button`
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
`,O8=()=>{const e=lt(Ko),[t,n]=T.useState(!1),{deleteToken:i}=T.useContext(fu),a=T.useCallback(async()=>{await i(),await si?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return _.jsx(R8,{to:nt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return _.jsxs(I8,{children:[_.jsx(A8,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),_.jsx(T8,{open:t,onClose:()=>n(!1),children:_.jsx(D8,{type:"button",onClick:a,children:"Sign out"})})]})},N8="#181a2f",Kh=680,M8=M.nav`
  height: inherit;
  background-color: ${N8};
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
`,k8=M(gs)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,L8=M.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,P8=M.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${Kh}px) {
    display: none;
  }
`,Xd=M(bv)`
  font-size: 15px;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.15s, background-color 0.15s;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.08);
  }

  &.active {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.12);
  }
`,j8=M.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${Kh}px) {
    display: none;
  }
`,U8=M.button`
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
`,$8=()=>_.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:_.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),z8=()=>{const[e,t]=T.useState(!1),n=lt(O_);return _.jsxs(_.Fragment,{children:[_.jsxs(M8,{children:[_.jsxs(k8,{to:nt.CLASS_LIST,children:[_.jsx(HA,{}),_.jsx(L8,{children:"Peloton Alerts"})]}),_.jsxs(P8,{children:[_.jsx(Xd,{to:nt.CLASS_LIST,end:!0,children:"Classes"}),_.jsx(Xd,{to:nt.ALERTS,children:"Alerts"}),_.jsx(Xd,{to:nt.ABOUT,end:!0,children:"FAQ"}),n&&_.jsx(Xd,{to:nt.STATS,children:"Stats"})]}),_.jsx(j8,{children:_.jsx(O8,{})}),_.jsx(U8,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:_.jsx($8,{})})]}),_.jsx(x8,{open:e,onClose:()=>t(!1)})]})},B8=M.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,H8=M.div`
  position: sticky;
  height: calc(${BA}px + env(safe-area-inset-top));
  top: 0;
  z-index: 1;
`,F8=M.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,aa=({children:e})=>_.jsxs(B8,{children:[_.jsx(H8,{children:_.jsx(z8,{})}),_.jsx(F8,{children:e})]}),Re=(...e)=>an`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${an(...e)}
  }
`,xI=(...e)=>an`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${an(...e)}
  }
`,q8=M.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Re`
    padding: 16px 12px;
  `}
`,V8=M.div`
  margin-bottom: 20px;
`,G8=M.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,oc=M.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,lc=M.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,cc=M.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,uc=M.div`
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
`,Y8=()=>_.jsx(aa,{children:_.jsxs(q8,{children:[_.jsx(V8,{children:_.jsx(G8,{children:"FAQ"})}),_.jsxs(oc,{children:[_.jsx(lc,{children:_.jsx(cc,{children:"What is this?"})}),_.jsx(uc,{children:_.jsxs("p",{children:["A quicker, smarter way to browse"," ",_.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),_.jsxs(oc,{children:[_.jsx(lc,{children:_.jsx(cc,{children:"How do I view classes?"})}),_.jsx(uc,{children:_.jsxs("p",{children:["Open the ",_.jsx(gs,{to:nt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),_.jsxs(oc,{children:[_.jsx(lc,{children:_.jsx(cc,{children:"Is the class data live?"})}),_.jsx(uc,{children:_.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),_.jsxs(oc,{children:[_.jsx(lc,{children:_.jsx(cc,{children:"When do new classes become available?"})}),_.jsx(uc,{children:_.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),_.jsxs(oc,{children:[_.jsx(lc,{children:_.jsx(cc,{children:"Can I request a feature or report a bug?"})}),_.jsx(uc,{children:_.jsxs("p",{children:["Yes — this project is open source and lives on"," ",_.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})});var qs={},Yg={},hx;function Q8(){return hx||(hx=1,Object.defineProperty(Yg,"__esModule",{value:!0})),Yg}var Qg={},px;function W8(){return px||(px=1,Object.defineProperty(Qg,"__esModule",{value:!0})),Qg}var Vs={},mx;function K8(){return mx||(mx=1,Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.DEFAULT_STUDIO_ID=Vs.STUDIOS=void 0,Vs.STUDIOS={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},Vs.DEFAULT_STUDIO_ID="7248695"),Vs}var gx;function X8(){return gx||(gx=1,(function(e){var t=qs&&qs.__createBinding||(Object.create?(function(i,a,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(a,l);(!f||("get"in f?!a.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(i,u,f)}):(function(i,a,l,u){u===void 0&&(u=l),i[u]=a[l]})),n=qs&&qs.__exportStar||function(i,a){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(a,l)&&t(a,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),n(Q8(),e),n(W8(),e),n(K8(),e)})(qs)),qs}var Si=X8();const Z8=e=>{try{return window.localStorage.getItem(e)}catch(t){return Dr(t),null}},J8="STUDIO_ID",CI=e=>{const t=Z8(J8);return t===null?e:Object.keys(Si.STUDIOS).includes(t)?t:e},Ca=_i([e=>e.studioSelector],e=>e.studioId),eB={studioId:CI(Si.DEFAULT_STUDIO_ID)},Zy=Rr({name:"studioSelector",initialState:eB,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:wf}=Zy.actions,is=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],oh={startMin:0,endMin:1440},tB={startMin:420,endMin:1140},Jy=oh,ev=e=>e.startMin===oh.startMin&&e.endMin===oh.endMin,lh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const a=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:a.format(i)}}),nB=async(e,t)=>{const n=Nn;if(!n)throw new Error("No Firebase database connection to use");const i=(await PU(gr(n,`alerts/${e}`),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},rB=async(e,t)=>{const n=Nn;if(!n)throw new Error("No Firebase database connection to use");await UA(gr(n,`alerts/${e}/${t.id}`),t)},Ta=an`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,TI=an`
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;an`
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;const iB=M.div`
  display: flex;
  flex-direction: column;
`,sB=M.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,aB=M.input`
  ${Ta}
  padding: 12px 8px;
  font-family: inherit;
`,oB=M.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,lB=({label:e,hint:t,placeholder:n,value:i,onChange:a})=>{const l=T.useId();return _.jsxs(iB,{children:[_.jsx(sB,{htmlFor:l,children:e}),_.jsx(aB,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>a(u.value)}),t&&_.jsx(oB,{id:`${l}-hint`,children:t})]})},cB=M.label`
  ${Ta}
  ${TI}
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
`,uB=M.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,dB=M.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,fB=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,hB=M.input`
  accent-color: ${e=>e.theme.colors.accent};
`,yx=({name:e,value:t,checked:n,onChange:i,label:a,hint:l,icon:u})=>{const f=T.useId();return _.jsxs(cB,{htmlFor:f,children:[_.jsx(hB,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,_.jsxs(uB,{children:[_.jsx(dB,{children:a}),l&&_.jsx(fB,{children:l})]})]})},vx=M.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,_x=M.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,bx=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,Sx=M.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,wx=M.div`
  margin-top: 32px;

  ${Re`
    margin-top: 24px;
  `}
`,pB=Object.entries(Si.STUDIOS).map(([e,t])=>({id:e,label:t.location})),mB=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],gB=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:a,onStatusChange:l})=>_.jsxs("div",{children:[_.jsx(lB,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),_.jsx(wx,{}),_.jsxs(vx,{children:[_.jsx(_x,{children:"Which studio?"}),_.jsx(bx,{children:"Pick the Peloton studio you want to monitor."}),_.jsx(Sx,{children:pB.map(u=>_.jsx(yx,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),_.jsx(wx,{}),_.jsxs(vx,{children:[_.jsx(_x,{children:"When should we alert you?"}),_.jsx(bx,{children:"Choose whether to include waitlisted classes."}),_.jsx(Sx,{children:mB.map(u=>_.jsx(yx,{name:"status",value:u.status,checked:a===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),Ex={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},RI=.2,ch=e=>Math.round(e*(1-RI*2)),yB=e=>Math.round(e*RI),vB=M.div`
  width: ${e=>ch(e.size)}px;
  height: ${e=>ch(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>yB(e.size)}px;
  flex-shrink: 0;
`,_B=M.img`
  width: ${e=>ch(e.size)}px;
  height: ${e=>ch(e.size)}px;
  display: block;
`,uh=({discipline:e,size:t=32})=>{const n=T.useMemo(()=>{const i=Object.keys(Ex),a=e.name.toLowerCase(),l=i.find(u=>u.toLowerCase()===a)??i.find(u=>{const f=u.toLowerCase();return f.includes(a)||a.includes(f)});if(l)return Ex[l];{const u=`Received unsupported discipline ${e.name}`;return console.log(u),Dv(u),"#fafafa"}},[e.name]);return _.jsx(vB,{color:n,size:t,children:_.jsx(_B,{alt:e.name,src:e.iconUrl,size:t,color:n})})},bB=M.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  color: #bbb;
`,H_=({instructor:e,size:t=32})=>_.jsx(bB,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var SB=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},AI=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(AI||{});function xx(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var Cx=ds;function F_(e,t){if(e===t||!(Cx(e)&&Cx(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let a=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=F_(e[u],t[u]),a&&(a=e[u]===l[u]);return a?e:l}function Wg(e){let t=0;for(const n in e)t++;return t}var Tx=e=>[].concat(...e);function wB(e){return new RegExp("(^|:)//").test(e)}function EB(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function dh(e){return e!=null}function xB(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var CB=e=>e.replace(/\/$/,""),TB=e=>e.replace(/^\//,"");function RB(e,t){if(!e)return t;if(!t)return e;if(wB(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=CB(e),t=TB(t),`${e}${n}${t}`}function AB(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function tv(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var nv=()=>new Map,Rx=(...e)=>fetch(...e),IB=e=>e.status>=200&&e.status<=299,DB=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function Ax(e){if(!ds(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function OB({baseUrl:e,prepareHeaders:t=y=>y,fetchFn:n=Rx,paramsSerializer:i,isJsonContentType:a=DB,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:h,validateStatus:p,...g}={}){return typeof fetch>"u"&&n===Rx&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(v,S,w)=>{const{getState:D,extra:R,endpoint:I,forced:L,type:x}=S;let A,{url:N,headers:C=new Headers(g.headers),params:P=void 0,responseHandler:V=h??"json",validateStatus:H=p??IB,timeout:B=f,...z}=typeof v=="string"?{url:v}:v,G,F=S.signal;B&&(G=new AbortController,S.signal.addEventListener("abort",G.abort),F=G.signal);let K={...g,signal:F,...z};C=new Headers(Ax(C)),K.headers=await t(C,{getState:D,arg:v,extra:R,endpoint:I,forced:L,type:x,extraOptions:w})||C;const ue=de=>typeof de=="object"&&(ds(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!K.headers.has("content-type")&&ue(K.body)&&K.headers.set("content-type",l),ue(K.body)&&a(K.headers)&&(K.body=JSON.stringify(K.body,u)),P){const de=~N.indexOf("?")?"&":"?",me=i?i(P):new URLSearchParams(Ax(P));N+=de+me}N=RB(e,N);const U=new Request(N,K);A={request:new Request(N,K)};let ne,oe=!1,O=G&&setTimeout(()=>{oe=!0,G.abort()},B);try{ne=await n(U)}catch(de){return{error:{status:oe?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:A}}finally{O&&clearTimeout(O),G?.signal.removeEventListener("abort",G.abort)}const X=ne.clone();A.response=X;let le,ie="";try{let de;if(await Promise.all([y(ne,V).then(me=>le=me,me=>de=me),X.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:A}}return H(ne,le)?{data:le,meta:A}:{error:{status:ne.status,data:le},meta:A}};async function y(v,S){if(typeof S=="function")return S(v);if(S==="content-type"&&(S=a(v.headers)?"json":"text"),S==="json"){const w=await v.text();return w.length?JSON.parse(w):null}return v.text()}}var Ix=class{constructor(e,t=void 0){this.value=e,this.meta=t}},q_=lr("__rtkq/focused"),II=lr("__rtkq/unfocused"),V_=lr("__rtkq/online"),DI=lr("__rtkq/offline");function Xh(e){return e.type==="query"}function NB(e){return e.type==="mutation"}function Zh(e){return e.type==="infinitequery"}function fh(e){return Xh(e)||Zh(e)}function G_(e,t,n,i,a,l){return MB(e)?e(t,n,i,a).filter(dh).map(rv).map(l):Array.isArray(e)?e.map(rv).map(l):[]}function MB(e){return typeof e=="function"}function rv(e){return typeof e=="string"?{type:e}:e}function kB(e,t){return e.catch(t)}var nu=Symbol("forceQueryFn"),iv=e=>typeof e[nu]=="function";function LB({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:a,context:l,internalState:u}){const{runningQueries:f,runningMutations:h}=u,{unsubscribeQueryResult:p,removeMutationResult:g,updateSubscriptionOptions:y}=a.internalActions;return{buildInitiateQuery:I,buildInitiateInfiniteQuery:L,buildInitiateMutation:x,getRunningQueryThunk:v,getRunningMutationThunk:S,getRunningQueriesThunk:w,getRunningMutationsThunk:D};function v(A,N){return C=>{const P=l.endpointDefinitions[A],V=e({queryArgs:N,endpointDefinition:P,endpointName:A});return f.get(C)?.[V]}}function S(A,N){return C=>h.get(C)?.[N]}function w(){return A=>Object.values(f.get(A)||{}).filter(dh)}function D(){return A=>Object.values(h.get(A)||{}).filter(dh)}function R(A,N){const C=(P,{subscribe:V=!0,forceRefetch:H,subscriptionOptions:B,[nu]:z,...G}={})=>(F,K)=>{const ue=e({queryArgs:P,endpointDefinition:N,endpointName:A});let U;const ee={...G,type:"query",subscribe:V,forceRefetch:H,subscriptionOptions:B,endpointName:A,originalArgs:P,queryCacheKey:ue,[nu]:z};if(Xh(N))U=t(ee);else{const{direction:Ae,initialPageParam:be}=G;U=n({...ee,direction:Ae,initialPageParam:be})}const ne=a.endpoints[A].select(P),oe=F(U),O=ne(K()),{requestId:X,abort:le}=oe,ie=O.requestId!==X,de=f.get(F)?.[ue],me=()=>ne(K()),pe=Object.assign(z?oe.then(me):ie&&!de?Promise.resolve(O):Promise.all([de,oe]).then(me),{arg:P,requestId:X,subscriptionOptions:B,queryCacheKey:ue,abort:le,async unwrap(){const Ae=await pe;if(Ae.isError)throw Ae.error;return Ae.data},refetch:()=>F(C(P,{subscribe:!1,forceRefetch:!0})),unsubscribe(){V&&F(p({queryCacheKey:ue,requestId:X}))},updateSubscriptionOptions(Ae){pe.subscriptionOptions=Ae,F(y({endpointName:A,requestId:X,queryCacheKey:ue,options:Ae}))}});if(!de&&!ie&&!z){const Ae=AB(f,F,{});Ae[ue]=pe,pe.then(()=>{delete Ae[ue],Wg(Ae)||f.delete(F)})}return pe};return C}function I(A,N){return R(A,N)}function L(A,N){return R(A,N)}function x(A){return(N,{track:C=!0,fixedCacheKey:P}={})=>(V,H)=>{const B=i({type:"mutation",endpointName:A,originalArgs:N,track:C,fixedCacheKey:P}),z=V(B),{requestId:G,abort:F,unwrap:K}=z,ue=kB(z.unwrap().then(oe=>({data:oe})),oe=>({error:oe})),U=()=>{V(g({requestId:G,fixedCacheKey:P}))},ee=Object.assign(ue,{arg:z.arg,requestId:G,abort:F,unwrap:K,reset:U}),ne=h.get(V)||{};return h.set(V,ne),ne[G]=ee,ee.then(()=>{delete ne[G],Wg(ne)||h.delete(V)}),P&&(ne[P]=ee,ee.then(()=>{ne[P]===ee&&(delete ne[P],Wg(ne)||h.delete(V))})),ee}}}var OI=class extends SB{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},Gs=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function Ys(e,t,n,i){const a=await e["~standard"].validate(t);if(a.issues)throw new OI(a.issues,t,n,i);return a.value}function Dx(e){return e}var dc=(e={})=>({...e,[Mh]:!0});function PB({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:a,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:h,skipSchemaValidation:p}){const g=(z,G,F,K)=>(ue,U)=>{const ee=n[z],ne=i({queryArgs:G,endpointDefinition:ee,endpointName:z});if(ue(a.internalActions.queryResultPatched({queryCacheKey:ne,patches:F})),!K)return;const oe=a.endpoints[z].select(G)(U()),O=G_(ee.providesTags,oe.data,void 0,G,{},l);ue(a.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:O}]))};function y(z,G,F=0){const K=[G,...z];return F&&K.length>F?K.slice(0,-1):K}function v(z,G,F=0){const K=[...z,G];return F&&K.length>F?K.slice(1):K}const S=(z,G,F,K=!0)=>(ue,U)=>{const ne=a.endpoints[z].select(G)(U()),oe={patches:[],inversePatches:[],undo:()=>ue(a.util.patchQueryData(z,G,oe.inversePatches,K))};if(ne.status==="uninitialized")return oe;let O;if("data"in ne)if(hr(ne.data)){const[X,le,ie]=_R(ne.data,F);oe.patches.push(...le),oe.inversePatches.push(...ie),O=X}else O=F(ne.data),oe.patches.push({op:"replace",path:[],value:O}),oe.inversePatches.push({op:"replace",path:[],value:ne.data});return oe.patches.length===0||ue(a.util.patchQueryData(z,G,oe.patches,K)),oe},w=(z,G,F)=>K=>K(a.endpoints[z].initiate(G,{subscribe:!1,forceRefetch:!0,[nu]:()=>({data:F})})),D=(z,G)=>z.query&&z[G]?z[G]:Dx,R=async(z,{signal:G,abort:F,rejectWithValue:K,fulfillWithValue:ue,dispatch:U,getState:ee,extra:ne})=>{const oe=n[z.endpointName],{metaSchema:O,skipSchemaValidation:X=p}=oe;try{let le=Dx;const ie={signal:G,abort:F,dispatch:U,getState:ee,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?I(z,ee()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[nu]:void 0;let me;const pe=async(be,De,Ue,vt)=>{if(De==null&&be.pages.length)return Promise.resolve({data:be});const mt={queryArg:z.originalArgs,pageParam:De},Mn=await Ae(mt),wt=vt?y:v;return{data:{pages:wt(be.pages,Mn.data,Ue),pageParams:wt(be.pageParams,De,Ue)},meta:Mn.meta}};async function Ae(be){let De;const{extraOptions:Ue,argSchema:vt,rawResponseSchema:mt,responseSchema:Mn}=oe;if(vt&&!Gs(X,"arg")&&(be=await Ys(vt,be,"argSchema",{})),de?De=de():oe.query?(le=D(oe,"transformResponse"),De=await t(oe.query(be),ie,Ue)):De=await oe.queryFn(be,ie,Ue,kr=>t(kr,ie,Ue)),typeof process<"u",De.error)throw new Ix(De.error,De.meta);let{data:wt}=De;mt&&!Gs(X,"rawResponse")&&(wt=await Ys(mt,De.data,"rawResponseSchema",De.meta));let kn=await le(wt,De.meta,be);return Mn&&!Gs(X,"response")&&(kn=await Ys(Mn,kn,"responseSchema",De.meta)),{...De,data:kn}}if(z.type==="query"&&"infiniteQueryOptions"in oe){const{infiniteQueryOptions:be}=oe,{maxPages:De=1/0}=be;let Ue;const vt={pages:[],pageParams:[]},mt=u.selectQueryEntry(ee(),z.queryCacheKey)?.data,wt=I(z,ee())&&!z.direction||!mt?vt:mt;if("direction"in z&&z.direction&&wt.pages.length){const kn=z.direction==="backward",Gt=(kn?NI:sv)(be,wt,z.originalArgs);Ue=await pe(wt,Gt,De,kn)}else{const{initialPageParam:kn=be.initialPageParam}=z,kr=mt?.pageParams??[],Gt=kr[0]??kn,tl=kr.length;Ue=await pe(wt,Gt,De),de&&(Ue={data:Ue.data.pages[0]});for(let Ss=1;Ss<tl;Ss++){const Ra=sv(be,Ue.data,z.originalArgs);Ue=await pe(Ue.data,Ra,De)}}me=Ue}else me=await Ae(z.originalArgs);return O&&!Gs(X,"meta")&&me.meta&&(me.meta=await Ys(O,me.meta,"metaSchema",me.meta)),ue(me.data,dc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof Ix){let de=D(oe,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=oe;let{value:Ae,meta:be}=ie;try{me&&!Gs(X,"rawErrorResponse")&&(Ae=await Ys(me,Ae,"rawErrorResponseSchema",be)),O&&!Gs(X,"meta")&&(be=await Ys(O,be,"metaSchema",be));let De=await de(Ae,be,z.originalArgs);return pe&&!Gs(X,"errorResponse")&&(De=await Ys(pe,De,"errorResponseSchema",be)),K(De,dc({baseQueryMeta:be}))}catch(De){ie=De}}try{if(ie instanceof OI){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};oe.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=h}=oe;if(me)return K(me(ie,de),dc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function I(z,G){const F=u.selectQueryEntry(G,z.queryCacheKey),K=u.selectConfig(G).refetchOnMountOrArgChange,ue=F?.fulfilledTimeStamp,U=z.forceRefetch??(z.subscribe&&K);return U?U===!0||(Number(new Date)-Number(ue))/1e3>=U:!1}const L=()=>dE(`${e}/executeQuery`,R,{getPendingMeta({arg:G}){const F=n[G.endpointName];return dc({startedTimeStamp:Date.now(),...Zh(F)?{direction:G.direction}:{}})},condition(G,{getState:F}){const K=F(),ue=u.selectQueryEntry(K,G.queryCacheKey),U=ue?.fulfilledTimeStamp,ee=G.originalArgs,ne=ue?.originalArgs,oe=n[G.endpointName],O=G.direction;return iv(G)?!0:ue?.status==="pending"?!1:I(G,K)||Xh(oe)&&oe?.forceRefetch?.({currentArg:ee,previousArg:ne,endpointState:ue,state:K})?!0:!(U&&!O)},dispatchConditionRejection:!0}),x=L(),A=L(),N=dE(`${e}/executeMutation`,R,{getPendingMeta(){return dc({startedTimeStamp:Date.now()})}}),C=z=>"force"in z,P=z=>"ifOlderThan"in z,V=(z,G,F)=>(K,ue)=>{const U=C(F)&&F.force,ee=P(F)&&F.ifOlderThan,ne=(O=!0)=>{const X={forceRefetch:O,isPrefetch:!0};return a.endpoints[z].initiate(G,X)},oe=a.endpoints[z].select(G)(ue());if(U)K(ne());else if(ee){const O=oe?.fulfilledTimeStamp;if(!O){K(ne());return}(Number(new Date)-Number(new Date(O)))/1e3>=ee&&K(ne())}else K(ne(!1))};function H(z){return G=>G?.meta?.arg?.endpointName===z}function B(z,G){return{matchPending:Cc(Yv(z),H(G)),matchFulfilled:Cc(fs(z),H(G)),matchRejected:Cc(Po(z),H(G))}}return{queryThunk:x,mutationThunk:N,infiniteQueryThunk:A,prefetch:V,updateQueryData:S,upsertQueryData:w,patchQueryData:g,buildMatchThunkActions:B}}function sv(e,{pages:t,pageParams:n},i){const a=t.length-1;return e.getNextPageParam(t[a],t,n[a],n,i)}function NI(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function MI(e,t,n,i){return G_(n[e.meta.arg.endpointName][t],fs(e)?e.payload:void 0,Lh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function Zd(e,t,n){const i=e[t];i&&n(i)}function ru(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function Ox(e,t,n){const i=e[ru(t)];i&&n(i)}var Jd={};function jB({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:a,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:h,config:p}){const g=lr(`${e}/resetApiState`);function y(H,B,z,G){H[B.queryCacheKey]??={status:"uninitialized",endpointName:B.endpointName},Zd(H,B.queryCacheKey,F=>{F.status="pending",F.requestId=z&&F.requestId?F.requestId:G.requestId,B.originalArgs!==void 0&&(F.originalArgs=B.originalArgs),F.startedTimeStamp=G.startedTimeStamp;const K=a[G.arg.endpointName];Zh(K)&&"direction"in B&&(F.direction=B.direction)})}function v(H,B,z,G){Zd(H,B.arg.queryCacheKey,F=>{if(F.requestId!==B.requestId&&!G)return;const{merge:K}=a[B.arg.endpointName];if(F.status="fulfilled",K)if(F.data!==void 0){const{fulfilledTimeStamp:ue,arg:U,baseQueryMeta:ee,requestId:ne}=B;let oe=cu(F.data,O=>K(O,z,{arg:U.originalArgs,baseQueryMeta:ee,fulfilledTimeStamp:ue,requestId:ne}));F.data=oe}else F.data=z;else F.data=a[B.arg.endpointName].structuralSharing??!0?F_(Nr(F.data)?q6(F.data):F.data,z):z;delete F.error,F.fulfilledTimeStamp=B.fulfilledTimeStamp})}const S=Rr({name:`${e}/queries`,initialState:Jd,reducers:{removeQueryResult:{reducer(H,{payload:{queryCacheKey:B}}){delete H[B]},prepare:nc()},cacheEntriesUpserted:{reducer(H,B){for(const z of B.payload){const{queryDescription:G,value:F}=z;y(H,G,!0,{arg:G,requestId:B.meta.requestId,startedTimeStamp:B.meta.timestamp}),v(H,{arg:G,requestId:B.meta.requestId,fulfilledTimeStamp:B.meta.timestamp,baseQueryMeta:{}},F,!0)}},prepare:H=>({payload:H.map(G=>{const{endpointName:F,arg:K,value:ue}=G,U=a[F];return{queryDescription:{type:"query",endpointName:F,originalArgs:G.arg,queryCacheKey:i({queryArgs:K,endpointDefinition:U,endpointName:F})},value:ue}}),meta:{[Mh]:!0,requestId:Qv(),timestamp:Date.now()}})},queryResultPatched:{reducer(H,{payload:{queryCacheKey:B,patches:z}}){Zd(H,B,G=>{G.data=iE(G.data,z.concat())})},prepare:nc()}},extraReducers(H){H.addCase(t.pending,(B,{meta:z,meta:{arg:G}})=>{const F=iv(G);y(B,G,F,z)}).addCase(t.fulfilled,(B,{meta:z,payload:G})=>{const F=iv(z.arg);v(B,z,G,F)}).addCase(t.rejected,(B,{meta:{condition:z,arg:G,requestId:F},error:K,payload:ue})=>{Zd(B,G.queryCacheKey,U=>{if(!z){if(U.requestId!==F)return;U.status="rejected",U.error=ue??K}})}).addMatcher(f,(B,z)=>{const{queries:G}=u(z);for(const[F,K]of Object.entries(G))(K?.status==="fulfilled"||K?.status==="rejected")&&(B[F]=K)})}}),w=Rr({name:`${e}/mutations`,initialState:Jd,reducers:{removeMutationResult:{reducer(H,{payload:B}){const z=ru(B);z in H&&delete H[z]},prepare:nc()}},extraReducers(H){H.addCase(n.pending,(B,{meta:z,meta:{requestId:G,arg:F,startedTimeStamp:K}})=>{F.track&&(B[ru(z)]={requestId:G,status:"pending",endpointName:F.endpointName,startedTimeStamp:K})}).addCase(n.fulfilled,(B,{payload:z,meta:G})=>{G.arg.track&&Ox(B,G,F=>{F.requestId===G.requestId&&(F.status="fulfilled",F.data=z,F.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(B,{payload:z,error:G,meta:F})=>{F.arg.track&&Ox(B,F,K=>{K.requestId===F.requestId&&(K.status="rejected",K.error=z??G)})}).addMatcher(f,(B,z)=>{const{mutations:G}=u(z);for(const[F,K]of Object.entries(G))(K?.status==="fulfilled"||K?.status==="rejected")&&F!==K?.requestId&&(B[F]=K)})}}),D={tags:{},keys:{}},R=Rr({name:`${e}/invalidation`,initialState:D,reducers:{updateProvidedBy:{reducer(H,B){for(const{queryCacheKey:z,providedTags:G}of B.payload){I(H,z);for(const{type:F,id:K}of G){const ue=(H.tags[F]??={})[K||"__internal_without_id"]??=[];ue.includes(z)||ue.push(z)}H.keys[z]=G}},prepare:nc()}},extraReducers(H){H.addCase(S.actions.removeQueryResult,(B,{payload:{queryCacheKey:z}})=>{I(B,z)}).addMatcher(f,(B,z)=>{const{provided:G}=u(z);for(const[F,K]of Object.entries(G.tags??{}))for(const[ue,U]of Object.entries(K)){const ee=(B.tags[F]??={})[ue||"__internal_without_id"]??=[];for(const ne of U)ee.includes(ne)||ee.push(ne),B.keys[ne]=G.keys[ne]}}).addMatcher(hi(fs(t),Lh(t)),(B,z)=>{L(B,[z])}).addMatcher(S.actions.cacheEntriesUpserted.match,(B,z)=>{const G=z.payload.map(({queryDescription:F,value:K})=>({type:"UNKNOWN",payload:K,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:F}}));L(B,G)})}});function I(H,B){const z=H.keys[B]??[];for(const G of z){const F=G.type,K=G.id??"__internal_without_id",ue=H.tags[F]?.[K];ue&&(H.tags[F][K]=ue.filter(U=>U!==B))}delete H.keys[B]}function L(H,B){const z=B.map(G=>{const F=MI(G,"providesTags",a,h),{queryCacheKey:K}=G.meta.arg;return{queryCacheKey:K,providedTags:F}});R.caseReducers.updateProvidedBy(H,R.actions.updateProvidedBy(z))}const x=Rr({name:`${e}/subscriptions`,initialState:Jd,reducers:{updateSubscriptionOptions(H,B){},unsubscribeQueryResult(H,B){},internal_getRTKQSubscriptions(){}}}),A=Rr({name:`${e}/internalSubscriptions`,initialState:Jd,reducers:{subscriptionsUpdated:{reducer(H,B){return iE(H,B.payload)},prepare:nc()}}}),N=Rr({name:`${e}/config`,initialState:{online:xB(),focused:EB(),middlewareRegistered:!1,...p},reducers:{middlewareRegistered(H,{payload:B}){H.middlewareRegistered=H.middlewareRegistered==="conflict"||l!==B?"conflict":!0}},extraReducers:H=>{H.addCase(V_,B=>{B.online=!0}).addCase(DI,B=>{B.online=!1}).addCase(q_,B=>{B.focused=!0}).addCase(II,B=>{B.focused=!1}).addMatcher(f,B=>({...B}))}}),C=fR({queries:S.reducer,mutations:w.reducer,provided:R.reducer,subscriptions:A.reducer,config:N.reducer}),P=(H,B)=>C(g.match(B)?void 0:H,B),V={...N.actions,...S.actions,...x.actions,...A.actions,...w.actions,...R.actions,resetApiState:g};return{reducer:P,actions:V}}var rr=Symbol.for("RTKQ/skipToken"),kI={status:"uninitialized"},Nx=cu(kI,()=>{}),Mx=cu(kI,()=>{});function UB({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=x=>Nx,a=x=>Mx;return{buildQuerySelector:v,buildInfiniteQuerySelector:S,buildMutationSelector:w,selectInvalidatedBy:D,selectCachedArgsForQuery:R,selectApiState:u,selectQueries:f,selectMutations:p,selectQueryEntry:h,selectConfig:g};function l(x){return{...x,...xx(x.status)}}function u(x){return x[t]}function f(x){return u(x)?.queries}function h(x,A){return f(x)?.[A]}function p(x){return u(x)?.mutations}function g(x){return u(x)?.config}function y(x,A,N){return C=>{if(C===rr)return n(i,N);const P=e({queryArgs:C,endpointDefinition:A,endpointName:x});return n(H=>h(H,P)??Nx,N)}}function v(x,A){return y(x,A,l)}function S(x,A){const{infiniteQueryOptions:N}=A;function C(P){const V={...P,...xx(P.status)},{isLoading:H,isError:B,direction:z}=V,G=z==="forward",F=z==="backward";return{...V,hasNextPage:I(N,V.data,V.originalArgs),hasPreviousPage:L(N,V.data,V.originalArgs),isFetchingNextPage:H&&G,isFetchingPreviousPage:H&&F,isFetchNextPageError:B&&G,isFetchPreviousPageError:B&&F}}return y(x,A,C)}function w(){return x=>{let A;return typeof x=="object"?A=ru(x)??rr:A=x,n(A===rr?a:P=>u(P)?.mutations?.[A]??Mx,l)}}function D(x,A){const N=x[t],C=new Set;for(const P of A.filter(dh).map(rv)){const V=N.provided.tags[P.type];if(!V)continue;let H=(P.id!==void 0?V[P.id]:Tx(Object.values(V)))??[];for(const B of H)C.add(B)}return Tx(Array.from(C.values()).map(P=>{const V=N.queries[P];return V?[{queryCacheKey:P,endpointName:V.endpointName,originalArgs:V.originalArgs}]:[]}))}function R(x,A){return Object.values(f(x)).filter(N=>N?.endpointName===A&&N.status!=="uninitialized").map(N=>N.originalArgs)}function I(x,A,N){return A?sv(x,A,N)!=null:!1}function L(x,A,N){return!A||!x.getPreviousPageParam?!1:NI(x,A,N)!=null}}var kx=WeakMap?new WeakMap:void 0,Lx=({endpointName:e,queryArgs:t})=>{let n="";const i=kx?.get(t);if(typeof i=="string")n=i;else{const a=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=ds(u)?Object.keys(u).sort().reduce((f,h)=>(f[h]=u[h],f),{}):u,u));ds(t)&&kx?.set(t,a),n=a}return`${e}(${n})`};function LI(...e){return function(n){const i=Bf(p=>n.extractRehydrationInfo?.(p,{reducerPath:n.reducerPath??"api"})),a={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(p){let g=Lx;if("serializeQueryArgs"in p.endpointDefinition){const y=p.endpointDefinition.serializeQueryArgs;g=v=>{const S=y(v);return typeof S=="string"?S:Lx({...v,queryArgs:S})}}else n.serializeQueryArgs&&(g=n.serializeQueryArgs);return g(p)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(p){p()},apiUid:Qv(),extractRehydrationInfo:i,hasRehydrationInfo:Bf(p=>i(p)!=null)},u={injectEndpoints:h,enhanceEndpoints({addTagTypes:p,endpoints:g}){if(p)for(const y of p)a.tagTypes.includes(y)||a.tagTypes.push(y);if(g)for(const[y,v]of Object.entries(g))typeof v=="function"?v(l.endpointDefinitions[y]):Object.assign(l.endpointDefinitions[y]||{},v);return u}},f=e.map(p=>p.init(u,a,l));function h(p){const g=p.endpoints({query:y=>({...y,type:"query"}),mutation:y=>({...y,type:"mutation"}),infiniteQuery:y=>({...y,type:"infinitequery"})});for(const[y,v]of Object.entries(g)){if(p.overrideExisting!==!0&&y in l.endpointDefinitions){if(p.overrideExisting==="throw")throw new Error(cr(39));continue}l.endpointDefinitions[y]=v;for(const S of f)S.injectEndpoint(y,v)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function ti(e,...t){return Object.assign(e,...t)}var $B=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const a=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:h}=e.internalActions,p=(D,R)=>{if(f.match(R)){const{queryCacheKey:L,requestId:x,options:A}=R.payload,N=D.get(L);return N?.has(x)&&N.set(x,A),!0}if(h.match(R)){const{queryCacheKey:L,requestId:x}=R.payload,A=D.get(L);return A&&A.delete(x),!0}if(e.internalActions.removeQueryResult.match(R))return D.delete(R.payload.queryCacheKey),!0;if(t.pending.match(R)){const{meta:{arg:L,requestId:x}}=R,A=tv(D,L.queryCacheKey,nv);return L.subscribe&&A.set(x,L.subscriptionOptions??A.get(x)??{}),!0}let I=!1;if(t.rejected.match(R)){const{meta:{condition:L,arg:x,requestId:A}}=R;if(L&&x.subscribe){const N=tv(D,x.queryCacheKey,nv);N.set(A,x.subscriptionOptions??N.get(A)??{}),I=!0}}return I},g=()=>n.currentSubscriptions,S={getSubscriptions:g,getSubscriptionCount:D=>g().get(D)?.size??0,isRequestSubscribed:(D,R)=>!!g()?.get(D)?.get(R)};function w(D){return JSON.parse(JSON.stringify(Object.fromEntries([...D].map(([R,I])=>[R,Object.fromEntries(I)]))))}return(D,R)=>{if(l||(l=w(n.currentSubscriptions)),e.util.resetApiState.match(D))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(D))return[!1,S];const I=p(n.currentSubscriptions,D);let L=!0;if(I){u||(u=setTimeout(()=>{const N=w(n.currentSubscriptions),[,C]=_R(l,()=>N);R.next(e.internalActions.subscriptionsUpdated(C)),l=N,u=null},500));const x=typeof D.type=="string"&&!!D.type.startsWith(a),A=t.rejected.match(D)&&D.meta.condition&&!!D.meta.arg.subscribe;L=!x&&!A}return[L,!1]}},zB=2147483647/1e3-1,BB=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:a,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:h})=>{const{removeQueryResult:p,unsubscribeQueryResult:g,cacheEntriesUpserted:y}=t.internalActions,v=a.runningQueries.get(h.dispatch),S=hi(g.match,n.fulfilled,n.rejected,y.match);function w(x){const A=a.currentSubscriptions.get(x);if(!A)return!1;const N=A.size>0,C=v?.[x]!==void 0;return N||C}const D={},R=(x,A,N)=>{const C=A.getState(),P=u(C);if(S(x)){let V;if(y.match(x))V=x.payload.map(H=>H.queryDescription.queryCacheKey);else{const{queryCacheKey:H}=g.match(x)?x.payload:x.meta.arg;V=[H]}I(V,A,P)}if(t.util.resetApiState.match(x))for(const[V,H]of Object.entries(D))H&&clearTimeout(H),delete D[V];if(i.hasRehydrationInfo(x)){const{queries:V}=i.extractRehydrationInfo(x);I(Object.keys(V),A,P)}};function I(x,A,N){const C=A.getState();for(const P of x){const V=l(C,P);V?.endpointName&&L(P,V.endpointName,A,N)}}function L(x,A,N,C){const V=i.endpointDefinitions[A]?.keepUnusedDataFor??C.keepUnusedDataFor;if(V===1/0)return;const H=Math.max(0,Math.min(V,zB));if(!w(x)){const B=D[x];B&&clearTimeout(B),D[x]=setTimeout(()=>{if(!w(x)){const z=l(N.getState(),x);z?.endpointName&&N.dispatch(f(z.endpointName,z.originalArgs))?.abort(),N.dispatch(p({queryCacheKey:x}))}delete D[x]},H*1e3)}}return R},Px=new Error("Promise never resolved before cacheEntryRemoved."),HB=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:a,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const h=ky(i),p=ky(a),g=fs(i,a),y={};function v(I,L,x){const A=y[I];A?.valueResolved&&(A.valueResolved({data:L,meta:x}),delete A.valueResolved)}function S(I){const L=y[I];L&&(delete y[I],L.cacheEntryRemoved())}const w=(I,L,x)=>{const A=D(I);function N(C,P,V,H){const B=u(x,P),z=u(L.getState(),P);!B&&z&&R(C,H,P,L,V)}if(i.pending.match(I))N(I.meta.arg.endpointName,A,I.meta.requestId,I.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(I))for(const{queryDescription:C,value:P}of I.payload){const{endpointName:V,originalArgs:H,queryCacheKey:B}=C;N(V,B,I.meta.requestId,H),v(B,P,{})}else if(a.pending.match(I))L.getState()[t].mutations[A]&&R(I.meta.arg.endpointName,I.meta.arg.originalArgs,A,L,I.meta.requestId);else if(g(I))v(A,I.payload,I.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(I)||e.internalActions.removeMutationResult.match(I))S(A);else if(e.util.resetApiState.match(I))for(const C of Object.keys(y))S(C)};function D(I){return h(I)?I.meta.arg.queryCacheKey:p(I)?I.meta.arg.fixedCacheKey??I.meta.requestId:e.internalActions.removeQueryResult.match(I)?I.payload.queryCacheKey:e.internalActions.removeMutationResult.match(I)?ru(I.payload):""}function R(I,L,x,A,N){const C=n.endpointDefinitions[I],P=C?.onCacheEntryAdded;if(!P)return;const V={},H=new Promise(ue=>{V.cacheEntryRemoved=ue}),B=Promise.race([new Promise(ue=>{V.valueResolved=ue}),H.then(()=>{throw Px})]);B.catch(()=>{}),y[x]=V;const z=e.endpoints[I].select(fh(C)?L:x),G=A.dispatch((ue,U,ee)=>ee),F={...A,getCacheEntry:()=>z(A.getState()),requestId:N,extra:G,updateCachedData:fh(C)?ue=>A.dispatch(e.util.updateQueryData(I,L,ue)):void 0,cacheDataLoaded:B,cacheEntryRemoved:H},K=P(L,F);Promise.resolve(K).catch(ue=>{if(ue!==Px)throw ue})}return w},FB=({api:e,context:{apiUid:t},reducerPath:n})=>(i,a)=>{e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(t))},qB=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:a,api:l,assertTagType:u,refetchQuery:f,internalState:h})=>{const{removeQueryResult:p}=l.internalActions,g=hi(fs(i),Lh(i)),y=hi(fs(i,a),Po(i,a));let v=[];const S=(R,I)=>{g(R)?D(MI(R,"invalidatesTags",n,u),I):y(R)?D([],I):l.util.invalidateTags.match(R)&&D(G_(R.payload,void 0,void 0,void 0,void 0,u),I)};function w(R){const{queries:I,mutations:L}=R;for(const x of[I,L])for(const A in x)if(x[A]?.status==="pending")return!0;return!1}function D(R,I){const L=I.getState(),x=L[e];if(v.push(...R),x.config.invalidationBehavior==="delayed"&&w(x))return;const A=v;if(v=[],A.length===0)return;const N=l.util.selectInvalidatedBy(L,A);t.batch(()=>{const C=Array.from(N.values());for(const{queryCacheKey:P}of C){const V=x.queries[P],H=tv(h.currentSubscriptions,P,nv);V&&(H.size===0?I.dispatch(p({queryCacheKey:P})):V.status!=="uninitialized"&&I.dispatch(f(V)))}})}return S},VB=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:a})=>{const{currentPolls:l,currentSubscriptions:u}=a,f=new Set;let h=null;const p=(R,I)=>{(n.internalActions.updateSubscriptionOptions.match(R)||n.internalActions.unsubscribeQueryResult.match(R))&&g(R.payload.queryCacheKey,I),(t.pending.match(R)||t.rejected.match(R)&&R.meta.condition)&&g(R.meta.arg.queryCacheKey,I),(t.fulfilled.match(R)||t.rejected.match(R)&&!R.meta.condition)&&y(R.meta.arg,I),n.util.resetApiState.match(R)&&(w(),h&&(clearTimeout(h),h=null),f.clear())};function g(R,I){f.add(R),h||(h=setTimeout(()=>{for(const L of f)v({queryCacheKey:L},I);f.clear(),h=null},0))}function y({queryCacheKey:R},I){const L=I.getState()[e],x=L.queries[R],A=u.get(R);if(!x||x.status==="uninitialized")return;const{lowestPollingInterval:N,skipPollingIfUnfocused:C}=D(A);if(!Number.isFinite(N))return;const P=l.get(R);P?.timeout&&(clearTimeout(P.timeout),P.timeout=void 0);const V=Date.now()+N;l.set(R,{nextPollTimestamp:V,pollingInterval:N,timeout:setTimeout(()=>{(L.config.focused||!C)&&I.dispatch(i(x)),y({queryCacheKey:R},I)},N)})}function v({queryCacheKey:R},I){const x=I.getState()[e].queries[R],A=u.get(R);if(!x||x.status==="uninitialized")return;const{lowestPollingInterval:N}=D(A);if(!Number.isFinite(N)){S(R);return}const C=l.get(R),P=Date.now()+N;(!C||P<C.nextPollTimestamp)&&y({queryCacheKey:R},I)}function S(R){const I=l.get(R);I?.timeout&&clearTimeout(I.timeout),l.delete(R)}function w(){for(const R of l.keys())S(R)}function D(R=new Map){let I=!1,L=Number.POSITIVE_INFINITY;for(const x of R.values())x.pollingInterval&&(L=Math.min(x.pollingInterval,L),I=x.skipPollingIfUnfocused||I);return{lowestPollingInterval:L,skipPollingIfUnfocused:I}}return p},GB=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const a=Yv(n,i),l=Po(n,i),u=fs(n,i),f={};return(p,g)=>{if(a(p)){const{requestId:y,arg:{endpointName:v,originalArgs:S}}=p.meta,w=t.endpointDefinitions[v],D=w?.onQueryStarted;if(D){const R={},I=new Promise((N,C)=>{R.resolve=N,R.reject=C});I.catch(()=>{}),f[y]=R;const L=e.endpoints[v].select(fh(w)?S:y),x=g.dispatch((N,C,P)=>P),A={...g,getCacheEntry:()=>L(g.getState()),requestId:y,extra:x,updateCachedData:fh(w)?N=>g.dispatch(e.util.updateQueryData(v,S,N)):void 0,queryFulfilled:I};D(S,A)}}else if(u(p)){const{requestId:y,baseQueryMeta:v}=p.meta;f[y]?.resolve({data:p.payload,meta:v}),delete f[y]}else if(l(p)){const{requestId:y,rejectedWithValue:v,baseQueryMeta:S}=p.meta;f[y]?.reject({error:p.payload??p.error,isUnhandledError:!v,meta:S}),delete f[y]}}},YB=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:a})=>{const{removeQueryResult:l}=n.internalActions,u=(h,p)=>{q_.match(h)&&f(p,"refetchOnFocus"),V_.match(h)&&f(p,"refetchOnReconnect")};function f(h,p){const g=h.getState()[e],y=g.queries,v=a.currentSubscriptions;t.batch(()=>{for(const S of v.keys()){const w=y[S],D=v.get(S);if(!D||!w)continue;const R=[...D.values()];(R.some(L=>L[p]===!0)||R.every(L=>L[p]===void 0)&&g.config[p])&&(D.size===0?h.dispatch(l({queryCacheKey:S})):w.status!=="uninitialized"&&h.dispatch(i(w)))}})}return u};function QB(e){const{reducerPath:t,queryThunk:n,api:i,context:a,internalState:l}=e,{apiUid:u}=a,f={invalidateTags:lr(`${t}/invalidateTags`)},h=v=>v.type.startsWith(`${t}/`),p=[FB,BB,qB,VB,HB,GB];return{middleware:v=>{let S=!1;const w={...e,internalState:l,refetchQuery:y,isThisApiSliceAction:h,mwApi:v},D=p.map(L=>L(w)),R=$B(w),I=YB(w);return L=>x=>{if(!hR(x))return L(x);S||(S=!0,v.dispatch(i.internalActions.middlewareRegistered(u)));const A={...v,next:L},N=v.getState(),[C,P]=R(x,A,N);let V;if(C?V=L(x):V=P,v.getState()[t]&&(I(x,A,N),h(x)||a.hasRehydrationInfo(x)))for(const H of D)H(x,A,N);return V}},actions:f};function y(v){return e.api.endpoints[v.endpointName].initiate(v.originalArgs,{subscribe:!1,forceRefetch:!0})}}var jx=Symbol(),PI=({createSelector:e=_i}={})=>({name:jx,init(t,{baseQuery:n,tagTypes:i,reducerPath:a,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:h,refetchOnReconnect:p,invalidationBehavior:g,onSchemaFailure:y,catchSchemaFailure:v,skipSchemaValidation:S},w){e3();const D=pe=>pe;Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:V_,onOffline:DI,onFocus:q_,onFocusLost:II},util:{}});const R=UB({serializeQueryArgs:l,reducerPath:a,createSelector:e}),{selectInvalidatedBy:I,selectCachedArgsForQuery:L,buildQuerySelector:x,buildInfiniteQuerySelector:A,buildMutationSelector:N}=R;ti(t.util,{selectInvalidatedBy:I,selectCachedArgsForQuery:L});const{queryThunk:C,infiniteQueryThunk:P,mutationThunk:V,patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,buildMatchThunkActions:F}=PB({baseQuery:n,reducerPath:a,context:w,api:t,serializeQueryArgs:l,assertTagType:D,selectors:R,onSchemaFailure:y,catchSchemaFailure:v,skipSchemaValidation:S}),{reducer:K,actions:ue}=jB({context:w,queryThunk:C,mutationThunk:V,serializeQueryArgs:l,reducerPath:a,assertTagType:D,config:{refetchOnFocus:h,refetchOnReconnect:p,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:a,invalidationBehavior:g}});ti(t.util,{patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),ti(t.internalActions,ue);const U={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:ee,buildInitiateInfiniteQuery:ne,buildInitiateMutation:oe,getRunningMutationThunk:O,getRunningMutationsThunk:X,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=LB({queryThunk:C,mutationThunk:V,infiniteQueryThunk:P,api:t,serializeQueryArgs:l,context:w,internalState:U});ti(t.util,{getRunningMutationThunk:O,getRunningMutationsThunk:X,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=QB({reducerPath:a,context:w,queryThunk:C,mutationThunk:V,infiniteQueryThunk:P,api:t,assertTagType:D,selectors:R,getRunningQueryThunk:ie,internalState:U});return ti(t.util,me),ti(t,{reducer:K,middleware:de}),{name:jx,injectEndpoint(pe,Ae){const be=t,De=be.endpoints[pe]??={};Xh(Ae)&&ti(De,{name:pe,select:x(pe,Ae),initiate:ee(pe,Ae)},F(C,pe)),NB(Ae)&&ti(De,{name:pe,select:N(),initiate:oe(pe)},F(V,pe)),Zh(Ae)&&ti(De,{name:pe,select:A(pe,Ae),initiate:ne(pe,Ae)},F(C,pe))}}}});PI();function ef(e){return e.replace(e[0],e[0].toUpperCase())}function WB(e){return e.type==="query"}function KB(e){return e.type==="mutation"}function jI(e){return e.type==="infinitequery"}function fc(e,...t){return Object.assign(e,...t)}var Kg=Symbol();function Xg(e){const t=T.useRef(e),n=T.useMemo(()=>F_(t.current,e),[e]);return T.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function tf(e){const t=T.useRef(e);return T.useEffect(()=>{vc(t.current,e)||(t.current=e)},[e]),vc(t.current,e)?t.current:e}var XB=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZB=XB(),JB=()=>typeof navigator<"u"&&navigator.product==="ReactNative",e9=JB(),t9=()=>ZB||e9?T.useLayoutEffect:T.useEffect,n9=t9(),Ux=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:AI.pending}:e;function Zg(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var Jg=["data","status","isLoading","isSuccess","isError","error"];function r9({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:a},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:h}){const p=l?A=>A():T.useEffect;return{buildQueryHooks:I,buildInfiniteQueryHooks:L,buildMutationHook:x,usePrefetch:v};function g(A,N,C){if(N?.endpointName&&A.isUninitialized){const{endpointName:G}=N,F=h.endpointDefinitions[G];C!==rr&&f({queryArgs:N.originalArgs,endpointDefinition:F,endpointName:G})===f({queryArgs:C,endpointDefinition:F,endpointName:G})&&(N=void 0)}let P=A.isSuccess?A.data:N?.data;P===void 0&&(P=A.data);const V=P!==void 0,H=A.isLoading,B=(!N||N.isLoading||N.isUninitialized)&&!V&&H,z=A.isSuccess||V&&(H&&!N?.isError||A.isUninitialized);return{...A,data:P,currentData:A.data,isFetching:H,isLoading:B,isSuccess:z}}function y(A,N,C){if(N?.endpointName&&A.isUninitialized){const{endpointName:G}=N,F=h.endpointDefinitions[G];C!==rr&&f({queryArgs:N.originalArgs,endpointDefinition:F,endpointName:G})===f({queryArgs:C,endpointDefinition:F,endpointName:G})&&(N=void 0)}let P=A.isSuccess?A.data:N?.data;P===void 0&&(P=A.data);const V=P!==void 0,H=A.isLoading,B=(!N||N.isLoading||N.isUninitialized)&&!V&&H,z=A.isSuccess||H&&V;return{...A,data:P,currentData:A.data,isFetching:H,isLoading:B,isSuccess:z}}function v(A,N){const C=n(),P=tf(N);return T.useCallback((V,H)=>C(e.util.prefetch(A,V,{...P,...H})),[A,C,P])}function S(A,N,{refetchOnReconnect:C,refetchOnFocus:P,refetchOnMountOrArgChange:V,skip:H=!1,pollingInterval:B=0,skipPollingIfUnfocused:z=!1,...G}={}){const{initiate:F}=e.endpoints[A],K=n(),ue=T.useRef(void 0);if(!ue.current){const me=K(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const U=Xg(H?rr:N),ee=tf({refetchOnReconnect:C,refetchOnFocus:P,pollingInterval:B,skipPollingIfUnfocused:z}),ne=G.initialPageParam,oe=tf(ne),O=T.useRef(void 0);let{queryCacheKey:X,requestId:le}=O.current||{},ie=!1;X&&le&&(ie=ue.current.isRequestSubscribed(X,le));const de=!ie&&O.current!==void 0;return p(()=>{de&&(O.current=void 0)},[de]),p(()=>{const me=O.current;if(U===rr){me?.unsubscribe(),O.current=void 0;return}const pe=O.current?.subscriptionOptions;if(!me||me.arg!==U){me?.unsubscribe();const Ae=K(F(U,{subscriptionOptions:ee,forceRefetch:V,...jI(h.endpointDefinitions[A])?{initialPageParam:oe}:{}}));O.current=Ae}else ee!==pe&&me.updateSubscriptionOptions(ee)},[K,F,V,U,ee,de,oe,A]),[O,K,F,ee]}function w(A,N){return(P,{skip:V=!1,selectFromResult:H}={})=>{const{select:B}=e.endpoints[A],z=Xg(V?rr:P),G=T.useRef(void 0),F=T.useMemo(()=>u([B(z),(ne,oe)=>oe,ne=>z],N,{memoizeOptions:{resultEqualityCheck:vc}}),[B,z]),K=T.useMemo(()=>H?u([F],H,{devModeChecks:{identityFunctionCheck:"never"}}):F,[F,H]),ue=i(ne=>K(ne,G.current),vc),U=a(),ee=F(U.getState(),G.current);return n9(()=>{G.current=ee},[ee]),ue}}function D(A){T.useEffect(()=>()=>{A.current?.unsubscribe?.(),A.current=void 0},[A])}function R(A){if(!A.current)throw new Error(cr(38));return A.current.refetch()}function I(A){const N=(V,H={})=>{const[B]=S(A,V,H);return D(B),T.useMemo(()=>({refetch:()=>R(B)}),[B])},C=({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:G}=e.endpoints[A],F=n(),[K,ue]=T.useState(Kg),U=T.useRef(void 0),ee=tf({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B,skipPollingIfUnfocused:z});p(()=>{const X=U.current?.subscriptionOptions;ee!==X&&U.current?.updateSubscriptionOptions(ee)},[ee]);const ne=T.useRef(ee);p(()=>{ne.current=ee},[ee]);const oe=T.useCallback(function(X,le=!1){let ie;return t(()=>{U.current?.unsubscribe(),U.current=ie=F(G(X,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(X)}),ie},[F,G]),O=T.useCallback(()=>{U.current?.queryCacheKey&&F(e.internalActions.removeQueryResult({queryCacheKey:U.current?.queryCacheKey}))},[F]);return T.useEffect(()=>()=>{U?.current?.unsubscribe()},[]),T.useEffect(()=>{K!==Kg&&!U.current&&oe(K,!0)},[K,oe]),T.useMemo(()=>[oe,K,{reset:O}],[oe,K,O])},P=w(A,g);return{useQueryState:P,useQuerySubscription:N,useLazyQuerySubscription:C,useLazyQuery(V){const[H,B,{reset:z}]=C(V),G=P(B,{...V,skip:B===Kg}),F=T.useMemo(()=>({lastArg:B}),[B]);return T.useMemo(()=>[H,{...G,reset:z},F],[H,G,z,F])},useQuery(V,H){const B=N(V,H),z=P(V,{selectFromResult:V===rr||H?.skip?void 0:Ux,...H}),G=Zg(z,...Jg);return T.useDebugValue(G),T.useMemo(()=>({...z,...B}),[z,B])}}}function L(A){const N=(P,V={})=>{const[H,B,z,G]=S(A,P,V),F=T.useRef(G);p(()=>{F.current=G},[G]);const K=T.useCallback(function(ee,ne){let oe;return t(()=>{H.current?.unsubscribe(),H.current=oe=B(z(ee,{subscriptionOptions:F.current,direction:ne}))}),oe},[H,B,z]);D(H);const ue=Xg(V.skip?rr:P),U=T.useCallback(()=>R(H),[H]);return T.useMemo(()=>({trigger:K,refetch:U,fetchNextPage:()=>K(ue,"forward"),fetchPreviousPage:()=>K(ue,"backward")}),[U,K,ue])},C=w(A,y);return{useInfiniteQueryState:C,useInfiniteQuerySubscription:N,useInfiniteQuery(P,V){const{refetch:H,fetchNextPage:B,fetchPreviousPage:z}=N(P,V),G=C(P,{selectFromResult:P===rr||V?.skip?void 0:Ux,...V}),F=Zg(G,...Jg,"hasNextPage","hasPreviousPage");return T.useDebugValue(F),T.useMemo(()=>({...G,fetchNextPage:B,fetchPreviousPage:z,refetch:H}),[G,B,z,H])}}}function x(A){return({selectFromResult:N,fixedCacheKey:C}={})=>{const{select:P,initiate:V}=e.endpoints[A],H=n(),[B,z]=T.useState();T.useEffect(()=>()=>{B?.arg.fixedCacheKey||B?.reset()},[B]);const G=T.useCallback(function(X){const le=H(V(X,{fixedCacheKey:C}));return z(le),le},[H,V,C]),{requestId:F}=B||{},K=T.useMemo(()=>P({fixedCacheKey:C,requestId:B?.requestId}),[C,B,P]),ue=T.useMemo(()=>N?u([K],N):K,[N,K]),U=i(ue,vc),ee=C==null?B?.arg.originalArgs:void 0,ne=T.useCallback(()=>{t(()=>{B&&z(void 0),C&&H(e.internalActions.removeMutationResult({requestId:F,fixedCacheKey:C}))})},[H,C,B,F]),oe=Zg(U,...Jg,"endpointName");T.useDebugValue(oe);const O=T.useMemo(()=>({...U,originalArgs:ee,reset:ne}),[U,ee,ne]);return T.useMemo(()=>[G,O],[G,O])}}}var i9=Symbol(),s9=({batch:e=$N,hooks:t={useDispatch:SC,useSelector:wC,useStore:bC},createSelector:n=_i,unstable__sideEffectsInRender:i=!1,...a}={})=>({name:i9,init(l,{serializeQueryArgs:u},f){const h=l,{buildQueryHooks:p,buildInfiniteQueryHooks:g,buildMutationHook:y,usePrefetch:v}=r9({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return fc(h,{usePrefetch:v}),fc(f,{batch:e}),{injectEndpoint(S,w){if(WB(w)){const{useQuery:D,useLazyQuery:R,useLazyQuerySubscription:I,useQueryState:L,useQuerySubscription:x}=p(S);fc(h.endpoints[S],{useQuery:D,useLazyQuery:R,useLazyQuerySubscription:I,useQueryState:L,useQuerySubscription:x}),l[`use${ef(S)}Query`]=D,l[`useLazy${ef(S)}Query`]=R}if(KB(w)){const D=y(S);fc(h.endpoints[S],{useMutation:D}),l[`use${ef(S)}Mutation`]=D}else if(jI(w)){const{useInfiniteQuery:D,useInfiniteQuerySubscription:R,useInfiniteQueryState:I}=g(S);fc(h.endpoints[S],{useInfiniteQuery:D,useInfiniteQuerySubscription:R,useInfiniteQueryState:I}),l[`use${ef(S)}InfiniteQuery`]=D}}}}}),a9=LI(PI(),s9());const UI=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),o9=e=>e.results.map(UI).sort((n,i)=>n.name.localeCompare(i.name)),$I=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:e.id,name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},l9=e=>e.results.map($I).sort((n,i)=>n.name.localeCompare(i.name)),c9=10,u9=e=>{const t=e.instructors[0],n=t?UI(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=e.max_occupancy,a=e.occupancy,l=e.waiting_count;let u="full";a<i?u="free":l<c9&&(u="waitlist");const f=new Date(e.starts_at),p=(new Date(e.ends_at).getTime()-f.getTime())/1e3;return Number.isNaN(p)&&Dv("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:e.id,name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:p,discipline:$I(e.offering_type.category),instructor:n,status:u}},ey=e=>e.results.map(u9),Y_="https://cors.abbondanzo.workers.dev",ty=e=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":e}),$x=e=>{const{search:t}=new URL(e);return`${Y_}/https://schedule.studio.onepeloton.com/api/v2/events${t}`},d9=()=>{const e=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],t=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],n=new URLSearchParams({fields:e.join(","),expand:t.join(","),local_starts_at_gte:new Date().toISOString().replace("Z",""),page_size:"500",sort:"start"});return`${Y_}/https://schedule.studio.onepeloton.com/api/v2/events?${n}`},Ef=a9({reducerPath:"pelotonApi",baseQuery:OB({baseUrl:`${Y_}/https://schedule.studio.onepeloton.com/api/v2/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=ty(t),i=await fetch(d9(),{headers:n});if(!i.ok)return{error:{status:i.status,data:await i.text()}};const a=await i.json();if(!a.next)return{data:ey(a)};const l=ey(a);let u=$x(a.next);for(;u;){const f=await fetch(u,{headers:n});if(!f.ok)return{error:{status:f.status,data:await f.text()}};const h=await f.json();l.push(...ey(h)),u=h.next?$x(h.next):null}return{data:l}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:ty(t)}),transformResponse:t=>l9(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:ty(t)}),transformResponse:t=>o9(t)})})}),{useGetClassesQuery:zI,useGetDisciplinesQuery:Q_,useGetInstructorsQuery:W_}=Ef,f9=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},Xi=e=>e!=null,h9=M.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${TI}
`,p9=M.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,m9=M.input`
  accent-color: ${e=>e.theme.colors.accent};
`,BI=({value:e,checked:t,onChange:n,label:i,icon:a})=>{const l=T.useId();return _.jsxs(h9,{$checked:t,htmlFor:l,children:[_.jsx(m9,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),a,_.jsx(p9,{children:i})]})},zx=M.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,Bx=M.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,Hx=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,Fx=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,nf=M.button`
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
`,HI=M.div`
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
`,qx=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,hh=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,FI=M.p`
  color: #d93025;
  font-size: 14px;
  padding: 16px;
`,qI=M.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,g9=M.div`
  margin-top: 32px;

  ${Re`
    margin-top: 24px;
  `}
`,y9=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:a})=>{const l=W_(e),u=Q_(e),f=T.useRef(t),h=T.useRef(i);T.useEffect(()=>{const S=f.current;if(!l.currentData||!Xi(S))return;const w=new Set(l.currentData.map(R=>R.id)),D=S.filter(R=>w.has(R));D.length<S.length&&(n(D),f.current=D)},[l.currentData,n]),T.useEffect(()=>{const S=h.current;if(!u.currentData||!Xi(S))return;const w=new Set(u.currentData.map(R=>String(R.id))),D=S.filter(R=>w.has(String(R)));D.length<S.length&&(a(D),h.current=D)},[u.currentData,a]);const p=S=>{if(!Xi(t))return;const w=t.includes(S);n(w?t.filter(D=>D!==S):[...t,S])},g=S=>{if(!Xi(i))return;const w=i.includes(S);a(w?i.filter(D=>D!==S):[...i,S])},y=Xi(t),v=Xi(i);return _.jsxs("div",{children:[_.jsxs(zx,{children:[_.jsx(Bx,{children:"Instructors"}),_.jsx(Hx,{children:"Filter by specific instructors or get alerts for all of them."}),_.jsxs(Fx,{children:[_.jsx(nf,{type:"button",$active:!y,onClick:()=>n(null),children:"Any instructor"}),_.jsx(nf,{type:"button",$active:y,onClick:()=>{y||n([])},children:"Specific instructors"}),y&&t.length>0&&_.jsxs(qx,{children:[t.length," selected"]})]}),y&&_.jsx(v9,{query:l,selectedIds:t,onToggle:p})]}),_.jsx(g9,{}),_.jsxs(zx,{children:[_.jsx(Bx,{children:"Disciplines"}),_.jsx(Hx,{children:"Filter by class type or get alerts for everything."}),_.jsxs(Fx,{children:[_.jsx(nf,{type:"button",$active:!v,onClick:()=>a(null),children:"Any discipline"}),_.jsx(nf,{type:"button",$active:v,onClick:()=>{v||a([])},children:"Specific disciplines"}),v&&i.length>0&&_.jsxs(qx,{children:[i.length," selected"]})]}),v&&_.jsx(_9,{query:u,selectedIds:i,onToggle:g})]})]})},v9=({query:e,selectedIds:t,onToggle:n})=>e.isLoading?_.jsx(hh,{children:"Loading instructors…"}):e.error?_.jsxs(FI,{children:["Couldn't load instructors."," ",_.jsx(qI,{type:"button",onClick:()=>e.refetch(),children:"Try again"})]}):!e.currentData||e.currentData.length===0?_.jsx(hh,{children:"No instructors found for this studio."}):_.jsx(HI,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>_.jsx(BI,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:_.jsx(H_,{instructor:i,size:28})},i.id))}),_9=({query:e,selectedIds:t,onToggle:n})=>e.isLoading?_.jsx(hh,{children:"Loading disciplines…"}):e.error?_.jsxs(FI,{children:["Couldn't load disciplines."," ",_.jsx(qI,{type:"button",onClick:()=>e.refetch(),children:"Try again"})]}):!e.currentData||e.currentData.length===0?_.jsx(hh,{children:"No disciplines found for this studio."}):_.jsx(HI,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>_.jsx(BI,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:_.jsx(uh,{discipline:i,size:24})},i.id))}),b9=M.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Re`
    padding: 0;
    margin-bottom: 12px;
  `}
`,S9=M.button`
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
`,w9=M.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,E9=M.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Re`
    display: none;
  `}
`,x9=M.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,C9=({steps:e,currentStep:t,onStepClick:n})=>_.jsx(b9,{role:"navigation","aria-label":"Editor steps",children:e.map((i,a)=>{const l=a<t?"completed":a===t?"active":"upcoming";return _.jsxs(x9,{style:{flex:a<e.length-1?1:0},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[_.jsx(S9,{$state:l,onClick:()=>{l!=="upcoming"&&n(a)},"aria-label":`Step ${a+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),a<e.length-1&&_.jsx(w9,{$filled:a<t})]}),_.jsx(E9,{$state:l,children:i})]},a)})}),T9=M.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,R9=M.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,A9=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,I9=M.div`
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
`,D9=M.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Re`
    justify-content: flex-start;
  `}
`,O9=M.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,N9=e=>{if(ev(e))return"All day";const t=lh.find(i=>i.minutes===e.startMin),n=lh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},M9=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},k9=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:a,timeRanges:l})=>{const u=Si.STUDIOS[t],f=is.filter((g,y)=>l[y]),h=l.find(Boolean),p=l.filter(Boolean).every(g=>g&&h&&g.startMin===h.startMin&&g.endMin===h.endMin);return _.jsxs(T9,{children:[_.jsx(R9,{children:"Review your alert"}),_.jsx(A9,{children:"Double-check everything looks right, then hit Save."}),_.jsxs(I9,{children:[e.trim()&&_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Name"}),_.jsx(Qi,{children:e.trim()})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Studio"}),_.jsx(Qi,{children:u?.location||t})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Alert on"}),_.jsx(Qi,{children:M9(n)})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Instructors"}),_.jsx(Qi,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Disciplines"}),_.jsx(Qi,{children:a===null?"Any discipline":a.length===0?"None selected":`${a.length} selected`})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Days"}),f.length===0?_.jsx(Qi,{children:"No days selected"}):f.length===7?_.jsx(Qi,{children:"Every day"}):_.jsx(D9,{children:f.map(g=>_.jsx(O9,{children:g.slice(0,3)},g))})]}),h&&_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Time window"}),_.jsx(Qi,{children:p?N9(h):"Varies by day"})]})]})]})},L9=M.fieldset`
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
  margin: 0 0 16px;
`,U9=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,$9=M.div`
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
`,z9=M.label`
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
`,B9=M.input`
  accent-color: ${e=>e.theme.colors.accent};
`,H9=M.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Re`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,F9=M.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,q9=M.input`
  accent-color: ${e=>e.theme.colors.accent};
`,Vx=M.select`
  ${Ta}
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
`,V9=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,G9=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,ny=M.button`
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
`,Y9=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=T.useRef(is.map(()=>{})),a=T.useCallback(g=>{const y=[...e];y[g]=y[g]?null:Jy,t(y)},[e,t]),l=T.useCallback(g=>{const y=e[g];if(!y)return;const v=[...e];ev(y)?v[g]=i.current[g]??tB:(i.current[g]=y,v[g]=oh),t(v)},[e,t]),u=T.useCallback((g,y,v)=>{const S=[...e],w=S[g];w&&(y==="startMin"?S[g]={startMin:v,endMin:w.endMin===0||w.endMin>=v?w.endMin:0}:S[g]={...w,endMin:v},t(S))},[e,t]),f=()=>{t(is.map(()=>Jy))},h=()=>{t(is.map(()=>null))},p=()=>{const g=e.find(Boolean);g&&t(e.map(y=>y?{...g}:null))};return _.jsxs(L9,{children:[_.jsx(P9,{children:"Days & times"}),_.jsx(j9,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),_.jsxs(G9,{children:[_.jsx(ny,{type:"button",onClick:f,children:"Select all days"}),n>0&&_.jsx(ny,{type:"button",onClick:h,children:"Clear all"}),n>1&&_.jsx(ny,{type:"button",onClick:p,children:"Copy time to all"})]}),_.jsx(U9,{children:is.map((g,y)=>{const v=e[y],S=!!v&&ev(v);return _.jsxs($9,{$enabled:!!v,children:[_.jsxs(z9,{htmlFor:`day-${y}`,children:[_.jsx(B9,{type:"checkbox",id:`day-${y}`,checked:!!v,onChange:()=>a(y)}),g]}),v&&_.jsxs(H9,{children:[_.jsxs(F9,{htmlFor:`allday-${y}`,children:[_.jsx(q9,{type:"checkbox",id:`allday-${y}`,checked:S,onChange:()=>l(y)}),"All day"]}),!S&&_.jsxs(_.Fragment,{children:[_.jsx(Vx,{value:v.startMin,"aria-label":`${g} start time`,onChange:({target:w})=>{const D=parseInt(w.value);Number.isNaN(D)||u(y,"startMin",D)},children:lh.map(w=>_.jsx("option",{value:w.minutes,children:w.label},w.minutes))}),_.jsx(V9,{children:"to"}),_.jsx(Vx,{value:v.endMin,"aria-label":`${g} end time`,onChange:({target:w})=>{const D=parseInt(w.value);Number.isNaN(D)||u(y,"endMin",D)},children:lh.map(w=>_.jsx("option",{value:w.minutes,disabled:w.minutes>0&&w.minutes<v.startMin,children:w.label},w.minutes))})]})]})]},g)})})]})},ry=["Basics","Filters","Schedule","Review"],Q9=M.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,W9=M.div`
  padding: 24px 24px 0;

  ${Re`
    padding: 16px 16px 0;
  `}
`,K9=M.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,X9=M.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,Z9=M.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Re`
    padding: 8px 16px 16px;
  `}
`,J9=M.div`
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
`,rf=M.button`
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
`,eH=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,tH=M.span`
  font-size: 13px;
  color: ${e=>e.$error?"#d93025":e.theme.colors.secondary};

  ${Re`
    font-size: 12px;
  `}
`,nH=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=ys(),a=lt(Ca),l=lt(du),[u,f]=T.useState(0),[h,p]=T.useState(!1),[g,y]=T.useState();T.useEffect(()=>{e.studioId?i(wf(e.studioId)):i(wf(CI(Si.DEFAULT_STUDIO_ID)))},[e.studioId,i]);const[v,S]=T.useState(e.name||""),[w,D]=T.useState(e.instructors||null),[R,I]=T.useState(e.disciplines||null),[L,x]=T.useState(()=>e.timeRanges||is.map(()=>Jy)),[A,N]=T.useState(e.maxStatus||"free"),C=T.useRef(e.studioId);T.useEffect(()=>{a&&C.current&&a!==C.current&&(D(K=>K&&[]),I(K=>K&&[])),C.current=a},[a]);const P=u<ry.length-1,V=u>0,H=u===ry.length-1,B=T.useCallback(()=>{P&&f(K=>K+1)},[P]),z=T.useCallback(()=>{V&&f(K=>K-1)},[V]),G=T.useCallback(async()=>{if(!a||!l)return;p(!0),y(void 0);const K={id:e.id||null,created:e.created||new Date().getTime(),...v.trim()?{name:v.trim()}:{},studioId:a,instructors:w,disciplines:R,timeRanges:L,maxStatus:A};try{K.id?await rB(l,K):await nB(l,K),t()}catch(ue){Dr(ue),y("Something went wrong. Please try again."),p(!1)}},[e.id,e.created,v,a,l,w,R,L,A,t]),F=!!e.id;return _.jsxs(Q9,{children:[_.jsxs(W9,{children:[_.jsx(K9,{children:F?"Edit alert":"New alert"}),_.jsx(X9,{children:F?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),_.jsx(C9,{steps:ry,currentStep:u,onStepClick:f})]}),_.jsxs(Z9,{children:[u===0&&_.jsx(gB,{name:v,onNameChange:S,studioId:a,onStudioChange:K=>i(wf(K)),maxStatus:A,onStatusChange:N}),u===1&&_.jsx(y9,{studioId:a,selectedInstructors:w,setSelectedInstructors:D,selectedDisciplines:R,setSelectedDisciplines:I}),u===2&&_.jsx(Y9,{timeRanges:L,setTimeRanges:x}),u===3&&_.jsx(k9,{name:v,studioId:a,maxStatus:A,selectedInstructors:w,selectedDisciplines:R,timeRanges:L})]}),_.jsxs(J9,{children:[_.jsx("div",{children:V?_.jsx(rf,{type:"button",onClick:z,children:"Back"}):_.jsx(rf,{type:"button",onClick:n,children:"Cancel"})}),_.jsxs(eH,{children:[g&&_.jsx(tH,{$error:!0,children:g}),H?_.jsx(rf,{type:"button",$primary:!0,onClick:G,disabled:h,children:h?"Saving…":"Save alert"}):_.jsx(rf,{type:"button",$primary:!0,onClick:B,children:"Continue"})]})]})]})},rH=()=>{const e=yi(),t=su(),n=e.state||{};return _.jsx(nH,{alertToEdit:n,onSave:()=>{t(nt.ALERTS)},onCancel:()=>{t(nt.ALERTS)}})},VI=T.createContext({state:"idle"}),iH=({children:e,userId:t})=>{const[n,i]=T.useState({state:"idle"});return T.useEffect(()=>{i({state:"loading"});const a=Nn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=gr(a,`messagingTokens/${t}`),u=D_(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),_.jsx(VI.Provider,{value:n,children:e})},GI=T.createContext({state:"idle"}),sH=({children:e,userId:t})=>{const[n,i]=T.useState({state:"idle"});return T.useEffect(()=>{i({state:"loading"});const a=Nn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=gr(a,`alertPreferences/${t}`),u=D_(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),_.jsx(GI.Provider,{value:n,children:e})},YI=T.createContext({state:"idle"}),aH=({children:e,userId:t})=>{const[n,i]=T.useState({state:"idle"});return T.useEffect(()=>{i({state:"loading"});const a=Nn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=gr(a,`alerts/${t}`),u=D_(l,f=>{const h=f.val();if(!h){i({state:"fulfilled",data:[]});return}const p=Object.entries(h).map(([g,y])=>({...y,timeRanges:new Array(is.length).fill(null).map((v,S)=>y.timeRanges[S]||null),id:g}));i({state:"fulfilled",data:p})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),_.jsx(YI.Provider,{value:n,children:e})},oH=M.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Re`
    padding: 8px;
  `}
`,lH=M.div`
  overflow: auto;
  height: 100%;
`,cH=M.div`
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
`,uH=M.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,dH=M.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,fH=M.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,hH=M(gs)`
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
`,pH=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,mH=({children:e})=>{const t=lt(Ko);return t.state==="loading"?_.jsx(pH,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?_.jsxs(cH,{children:[_.jsx(uH,{children:"🔔"}),_.jsx(dH,{children:"Sign in to use Alerts"}),_.jsx(fH,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),_.jsx(hH,{to:nt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},gH=e=>_.jsx(aa,{children:_.jsx(lH,{children:_.jsx(oH,{children:_.jsx(mH,{...e})})})}),yH=({userId:e})=>_.jsx(aH,{userId:e,children:_.jsx(sH,{userId:e,children:_.jsx(iH,{userId:e,children:_.jsx(mk,{})})})}),vH=()=>_.jsx(gH,{children:e=>_.jsx(yH,{userId:e})}),_H=async(e,t)=>{const n=Nn;if(!n)throw new Error("No Firebase database connection to use");await UA(gr(n,`alertPreferences/${e}`),t)},bH=M.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,SH=M.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Re`
    flex-direction: column;
    align-items: stretch;
  `}
`,wH=M.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,EH=M.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,xH=M.input`
  ${Ta}
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
`,CH=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,TH=M.button`
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
`,RH=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,AH=M.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`,IH=({alertPreferences:e})=>{const t=lt(du),[n,i]=T.useState(e.notificationDelayMin||5),[a,l]=T.useState(!1),[u,f]=T.useState(!1),h=T.useCallback(async p=>{if(p.preventDefault(),!!t){l(!0),f(!1);try{await _H(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]);return _.jsxs(bH,{onSubmit:h,children:[_.jsxs(wH,{children:[_.jsx(EH,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),_.jsx(CH,{children:"Minimum delay between consecutive alert notifications"})]}),_.jsxs(SH,{children:[_.jsx(xH,{id:"delay-input",type:"number",min:0,value:n,onChange:p=>{const g=parseInt(p.target.value,10);Number.isNaN(g)||i(g)}}),_.jsx(TH,{type:"submit",disabled:a,$saved:u,children:a?"Saving…":u?"Saved ✓":"Save"})]})]})},DH=()=>{const e=T.useContext(GI);return e.state==="idle"||e.state==="loading"?_.jsx(RH,{children:"Loading preferences…"}):e.state==="failed"?_.jsx(AH,{children:"Failed to load preferences."}):_.jsx(IH,{alertPreferences:e.data},e.data.lastUpdated)},OH=e=>{if(!e)return"Unknown device";const t=NH(e),n=MH(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},NH=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},MH=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},kH=M.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,LH=M.li`
  ${Ta}
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
`,PH=M.span`
  font-size: 20px;
  flex-shrink: 0;
`,jH=M.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,UH=M.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,$H=M.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,zH=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,BH=M.button`
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
`,HH=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,FH=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,qH=M.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`,VH=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",GH=({device:e,isCurrentDevice:t,onDelete:n})=>{const i=T.useMemo(()=>{const u=new Date(e.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...u?{}:{year:"numeric"}}).format(e.timestamp)},[e.timestamp]),a=OH(e.userAgent);return _.jsxs(LH,{children:[_.jsx(PH,{children:VH(e.userAgent)}),_.jsxs(jH,{children:[_.jsxs(UH,{children:[a,t&&_.jsx($H,{children:"This device"})]}),_.jsxs(zH,{children:["Last active ",i]})]}),_.jsx(BH,{type:"button",onClick:n,"aria-label":`Remove ${a}`,children:"Remove"})]})},YH=({devices:e})=>{const n=T.useContext(fu).token,i=lt(du),a=l=>{i&&zA(i,l).catch(console.error)};return e.length===0?_.jsx(HH,{children:"No devices registered for push notifications yet."}):_.jsx(kH,{children:e.map(([l,u])=>_.jsx(GH,{device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:()=>a(l)},l))})},QH=()=>{const e=T.useContext(VI),t=T.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?_.jsx(FH,{children:"Loading devices…"}):e.state==="failed"?_.jsx(qH,{children:"Failed to load devices. Please try again."}):_.jsx(YH,{devices:t})},WH=async(e,t)=>{const n=Nn;if(!n)throw new Error("No Firebase database connection to use");await jA(gr(n,`alerts/${e}/${t}`))},Gx=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,KH=(e,t)=>{const n=Gx(e,"Any Class","Disciplines"),i=Gx(t,"Any Instructor","Instructors");return`${n} with ${i}`},XH=M.li`
  ${Ta}
  padding: 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Re`
    padding: 12px;
  `}
`,ZH=M.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Re`
    flex-direction: column;
    gap: 8px;
  `}
`,JH=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,e7=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,t7=M.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,n7=M.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?"#e8f5e9":e.$status==="waitlist"?"#fff3e0":"#fce4ec"};
  color: ${e=>e.$status==="free"?"#2e7d32":e.$status==="waitlist"?"#e65100":"#c62828"};
`,r7=M.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,i7=M.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,s7=M.span`
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
`,a7=M.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Re`
    align-self: flex-end;
  `}
`,av=M.button`
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
`,o7=M(av)`
  &:hover {
    border-color: #d93025;
    color: #d93025;
  }
`,l7=M.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,c7={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},u7=e=>c7[e]||{label:e,title:""},d7=T.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=lt(du),{data:a}=W_(e.studioId),{data:l}=Q_(e.studioId),u=T.useMemo(()=>{const y=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",...y?{}:{year:"numeric"}}).format(e.created)},[e.created]),f=T.useMemo(()=>{if(e.name)return e.name;const g=Xi(e.instructors)&&a?e.instructors.map(v=>a.find(S=>S.id===v)?.name).filter(v=>!!v):null,y=Xi(e.disciplines)&&l?e.disciplines.map(v=>l.find(S=>S.id===v)?.name).filter(v=>!!v):null;return KH(y,g)},[e.name,e.instructors,e.disciplines,a,l]),h=Si.STUDIOS[e.studioId]?.location||e.studioId||"No studio",p=u7(e.maxStatus);return _.jsx(XH,{children:_.jsxs(ZH,{children:[_.jsxs(JH,{children:[_.jsxs(e7,{children:[_.jsx(t7,{children:f}),_.jsx(n7,{$status:e.maxStatus,title:p.title,children:p.label})]}),_.jsx(r7,{children:h}),_.jsx(i7,{children:is.map((g,y)=>_.jsx(s7,{$active:!!e.timeRanges[y],title:e.timeRanges[y]?`${g}: monitoring enabled`:`${g}: not monitored`,children:g.charAt(0)},g))}),_.jsxs(l7,{children:["Created ",u]})]}),_.jsxs(a7,{children:[_.jsx(av,{type:"button",onClick:n,"aria-label":"Edit alert",children:"Edit"}),_.jsx(av,{type:"button",onClick:t,"aria-label":"Duplicate alert",children:"Duplicate"}),_.jsx(o7,{type:"button",onClick:()=>i&&WH(i,e.id),"aria-label":"Delete alert",children:"Delete"})]})]})})}),f7=M.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,h7=({alerts:e,onDuplicate:t,onEdit:n})=>_.jsx(f7,{children:e.map(i=>_.jsx(d7,{alert:i,onDuplicate:()=>t(i),onEdit:()=>n(i)},i.id))}),p7=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Re`
    padding: 16px 16px 0;
  `}
`,m7=M.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,g7=M.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,y7=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,v7=M.button`
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
`,_7=M.div`
  padding: 16px 24px 24px;

  ${Re`
    padding: 12px 16px 16px;
  `}
`,b7=M.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,S7=M.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: #d93025;
  font-size: 14px;
`,w7=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=T.useContext(YI),a=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return _.jsxs(_.Fragment,{children:[_.jsxs(p7,{children:[_.jsxs(m7,{children:[_.jsx(g7,{children:"Alerts"}),_.jsx(y7,{children:a?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!a&&!l&&_.jsx(v7,{type:"button",onClick:e,children:"+ New alert"})]}),_.jsxs(_7,{children:[a&&_.jsx(b7,{children:"Loading…"}),l&&_.jsx(S7,{children:"Failed to load your alerts. Please refresh and try again."}),!a&&!l&&u.length===0&&_.jsx(T7,{onAdd:e}),!a&&!l&&u.length>0&&_.jsx(h7,{alerts:u,onEdit:t,onDuplicate:n})]})]})},E7=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,x7=M.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,C7=M.button`
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
`,T7=({onAdd:e})=>_.jsxs(E7,{children:[_.jsx(x7,{children:"Create your first alert to get notified when classes become available."}),_.jsx(C7,{type:"button",onClick:e,children:"Create an alert"})]}),R7=M.button`
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
`;const A7=M.div`
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,I7=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),iy=M(A7)`
  margin-bottom: 1em;
`,D7=M(R7)`
  margin-top: 1em;
`,Yx=M.h2`
  color: ${e=>e.theme.colors.accent};
`,O7=()=>{const[e,t]=T.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=T.useContext(fu),i=I7(),a=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=T.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Dr(u)})},[n]);return i&&!a?_.jsxs(iy,{children:[_.jsx(Yx,{children:"Installation Required"}),_.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?_.jsxs(iy,{children:[_.jsx(Yx,{children:"Unsupported Browser"}),_.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?_.jsxs(iy,{children:[_.jsx("h2",{children:"Grant notification permissions"}),_.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),_.jsx(D7,{type:"button",onClick:l,children:"Grant Permission"})]}):null},N7=M.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Re`
    gap: 16px;
  `}
`,sy=M.section`
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Qx=M.div`
  padding: 20px 24px 0;

  ${Re`
    padding: 16px 16px 0;
  `}
`,Wx=M.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,Kx=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,Xx=M.div`
  padding: 16px 24px 24px;

  ${Re`
    padding: 12px 16px 16px;
  `}
`,M7=()=>{const e=su();return _.jsxs(N7,{children:[_.jsx(sy,{children:_.jsx(w7,{onAdd:()=>{e(nt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(nt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(nt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),_.jsxs(sy,{children:[_.jsxs(Qx,{children:[_.jsx(Wx,{children:"Preferences"}),_.jsx(Kx,{children:"Control how often you receive alert notifications."})]}),_.jsx(Xx,{children:_.jsx(DH,{})})]}),_.jsxs(sy,{children:[_.jsxs(Qx,{children:[_.jsx(Wx,{children:"Devices"}),_.jsx(Kx,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),_.jsxs(Xx,{children:[_.jsx(O7,{}),_.jsx(QH,{})]})]})]})},k7=M.button.attrs({"aria-label":"Close",type:"button"})`
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
`,L7=["free","waitlist","full"],P7=e=>L7.includes(e),K_=e=>{try{return window.localStorage.getItem(e)}catch(t){return Dr(t),null}},X_=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Dr(n)}},QI=e=>{try{window.localStorage.removeItem(e)}catch(t){Dr(t)}},WI="BOOKABLE_STATUS_FILTERS",ov="DISCIPLINE_FILTERS",lv="INSTRUCTOR_FILTERS",j7=e=>{const t=K_(WI);return t===null?e:t.split(";").filter(P7)},U7=e=>{X_(WI,e.join(";"))},$7=e=>{const t=K_(ov);return t===null?e:t.split(";").filter(Boolean)},Zx=e=>{e.length===0?QI(ov):X_(ov,e.join(";"))},z7=e=>{const t=K_(lv);return t===null?e:t.split(";").filter(Boolean)},Jx=e=>{e.length===0?QI(lv):X_(lv,e.join(";"))},B7={selectedBookableStatuses:j7(["free","waitlist"]),selectedInstructors:z7([]),selectedDisciplines:$7([])},KI=Rr({name:"filters",initialState:B7,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],U7(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],Jx(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],Jx(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],Zx(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],Zx(e.selectedDisciplines)}}}),{toggleBookableStatus:H7,toggleInstructor:F7,resetInstructors:q7,toggleDiscipline:V7,resetDisciplines:G7}=KI.actions,Y7=KI.reducer,Q7=()=>{const e=lt(i=>i.filters.selectedBookableStatuses),t=ys(),n=T.useCallback(i=>{t(H7(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},W7=M.button`
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
`,K7=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,X7=M.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,Jh=({label:e,onReset:t,children:n})=>_.jsxs(K7,{children:[_.jsx(X7,{children:e}),t&&_.jsx(W7,{type:"button",onClick:t,children:"Reset"}),n]}),Z7=[{label:"Free",status:"free",color:"#2e7d32"},{label:"Waitlist",status:"waitlist",color:"#e65100"},{label:"Full",status:"full",color:"#9e9e9e"}],J7=M.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,eF=M.button`
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
`,tF=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=Q7();return _.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[_.jsx("legend",{style:{padding:0,width:"100%"},children:_.jsx(Jh,{label:"Status"})}),_.jsx(J7,{children:Z7.map(n=>{const i=e.includes(n.status);return _.jsx(eF,{type:"button",$active:i,$color:n.color,onClick:()=>t(n.status),"aria-pressed":i,children:n.label},n.status)})})]})},nF=()=>{const e=lt(i=>i.filters.selectedDisciplines),t=ys(),n=T.useCallback(i=>{t(V7(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},XI=M.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,ZI=M.li`
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
`,JI=M.span`
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
  transition: border-color 0.1s, background-color 0.1s;

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
`,eD=M.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,ph=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,rF=({discipline:e,checked:t,onClick:n})=>_.jsxs(ZI,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[_.jsx(JI,{$checked:t}),_.jsx(uh,{discipline:e,size:24}),_.jsx(eD,{children:e.name})]}),iF=()=>{const e=lt(Ca),{currentData:t,isLoading:n,error:i}=Q_(e),{selectedDisciplines:a,toggleDiscipline:l}=nF();return i&&!n?_.jsx(ph,{children:"Failed to load disciplines"}):!t||n?_.jsx(ph,{children:"Loading…"}):_.jsx(XI,{children:t.map((u,f)=>_.jsx(rF,{discipline:u,checked:a.includes(u.id),onClick:()=>l(u.id)},f))})},sF=()=>{const e=lt(n=>n.filters.selectedDisciplines.length>0),t=ys();return _.jsxs("div",{children:[_.jsx(Jh,{label:"Disciplines",onReset:e?()=>t(G7()):void 0}),_.jsx(iF,{})]})},aF=()=>{const e=lt(i=>i.filters.selectedInstructors),t=ys(),n=T.useCallback(i=>{t(F7(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},oF=({instructor:e,checked:t,onClick:n})=>_.jsxs(ZI,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[_.jsx(JI,{$checked:t}),_.jsx(H_,{instructor:e,size:28}),_.jsx(eD,{children:e.name})]}),lF=()=>{const e=lt(Ca),{currentData:t,isLoading:n,error:i}=W_(e),{selectedInstructors:a,toggleInstructor:l}=aF();return i&&!n?_.jsx(ph,{children:"Failed to load instructors"}):!t||n?_.jsx(ph,{children:"Loading…"}):_.jsx(XI,{children:t.map((u,f)=>_.jsx(oF,{instructor:u,checked:a.includes(u.id),onClick:()=>l(u.id)},f))})},cF=()=>{const e=lt(n=>n.filters.selectedInstructors.length>0),t=ys();return _.jsxs("div",{children:[_.jsx(Jh,{label:"Instructors",onReset:e?()=>t(q7()):void 0}),_.jsx(lF,{})]})},uF=Object.entries(Si.STUDIOS).map(([e,t])=>({id:e,label:t.location})),dF=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,fF=M.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${Ta}
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
`,hF=M.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,pF=M.span`
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
  transition: border-color 0.1s, background-color 0.1s;

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    opacity: ${e=>e.$selected?1:0};
    transition: opacity 0.1s;
  }
`,mF=M.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,gF=()=>{const e=ys(),t=lt(Ca);return _.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[_.jsx("legend",{style:{padding:0,width:"100%"},children:_.jsx(Jh,{label:"Studio"})}),_.jsx(dF,{children:uF.map(n=>{const i=t===n.id;return _.jsxs(fF,{$selected:i,htmlFor:`studio-${n.id}`,children:[_.jsx(hF,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(wf(n.id))}}),_.jsx(pF,{$selected:i}),_.jsx(mF,{children:n.label})]},n.id)})})]})},yF=M.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,vF=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${xI`
    display: flex;
  `}
`,_F=M.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,bF=M(k7)`
  display: none;

  ${xI`
    display: block;
  `}
`,SF=M.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,sf=M.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,wF=({onClose:e})=>_.jsxs(yF,{children:[_.jsxs(vF,{children:[_.jsx(_F,{children:"Filters"}),_.jsx(bF,{onClick:()=>e()})]}),_.jsxs(SF,{children:[_.jsx(sf,{children:_.jsx(gF,{})}),_.jsx(sf,{children:_.jsx(tF,{})}),_.jsx(sf,{children:_.jsx(sF,{})}),_.jsx(sf,{children:_.jsx(cF,{})})]})]}),EF=()=>{const e=lt(Ca),{refetch:t}=zI(e);return{refresh:T.useCallback(async()=>{await t()},[t])}},eC=150,tC=60,xF=()=>document.documentElement.scrollTop||document.body.scrollTop,CF=({refresh:e})=>{const t=T.useRef(null),n=T.useRef(null),i=T.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return T.useEffect(()=>{if(!i)return;let a=0,l=!1,u=!1,f=!1;const h=S=>{const w=n.current;w&&(w.style.transition=S?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",w.style.transform="",w.style.opacity="0")},p=S=>{a=S.touches[0].clientY,l=!1,u=!1},g=S=>{if(f||xF()>0)return;const w=S.touches[0].clientY-a;if(w<=0){l&&(l=!1,u=!1,h(!1));return}l=!0,u=w>=eC;const D=Math.min(w/eC,1),R=tC*(1-Math.pow(1-D,2)),I=Math.pow(D,.5),L=Math.floor(D*270),x=n.current;x&&(x.style.transition="none",x.style.transform=`translateY(${R}px) rotate(${L}deg)`,x.style.opacity=String(Math.min(I,1)))},y=()=>{if(l)if(l=!1,u&&!f){u=!1,f=!0;const S=n.current;S&&(S.classList.add("animate"),S.style.transition="none",S.style.transform=`translateY(${tC}px)`,S.style.opacity="1"),e().finally(()=>{f=!1;const w=n.current;w&&(w.classList.remove("animate"),h(!0))})}else u=!1,h(!0)},v=()=>{l=!1,u=!1,h(!1)};return document.addEventListener("touchstart",p,{passive:!0}),document.addEventListener("touchmove",g,{passive:!0}),document.addEventListener("touchend",y,{passive:!0}),document.addEventListener("touchcancel",v,{passive:!0}),()=>{document.removeEventListener("touchstart",p),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",v)}},[e,i]),{swipeRef:t,spinnerRef:n}},TF=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,nC=(e,t,n)=>{const i=new Date(e),a=new Intl.DateTimeFormat(void 0,{month:"long",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${a} ${l}`},RF=e=>e.filters.selectedBookableStatuses,AF=e=>e.filters.selectedDisciplines,IF=e=>e.filters.selectedInstructors,DF=(e,t)=>t,OF=_i([RF,AF,IF,DF],(e,t,n,i)=>i.filter(a=>e.includes(a.status)).filter(a=>n.length>0?n.some(l=>l===a.instructor.id):!0).filter(a=>t.length>0?t.includes(a.discipline.id):!0)),tD=_i([Ca],e=>{if(e)return Si.STUDIOS[e]}),NF=_i([OF,tD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let a=1,l=nC(e[0].start,n),u=[e[0]];for(;a<e.length;){const f=e[a],h=nC(f.start,n);h===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=h,u=[f]),a++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),MF=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),Ao={free:{accentColor:"#2e7d32",buttonBg:"#cb3449",buttonText:"#fff",buttonBorder:"#cb3449",label:"Book"},waitlist:{accentColor:"#e65100",buttonBg:"transparent",buttonText:"#e65100",buttonBorder:"#e65100",label:"Waitlist"},full:{accentColor:"#c4c4c4",buttonBg:"transparent",buttonText:"#aaa",buttonBorder:"#d1d1d1",label:"Full"}},kF=M.a`
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

  ${e=>e.$interactive&&an`
      cursor: pointer;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
      }
    `}

  ${e=>!e.$interactive&&an`
      pointer-events: none;
    `}

  ${Re`
    padding: 10px 12px;
    gap: 10px;
  `}
`,LF=M.div`
  flex-shrink: 0;
  width: 84px;
  ${Re`
    width: 70px;
  `}
`,PF=M.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Re`
    font-size: 13px;
  `}
`,jF=M.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Re`
    font-size: 11px;
  `}
`,UF=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Re`
    display: none;
  `}
`,$F=M.div`
  flex: 1;
  min-width: 0;
`,zF=M.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Re`
    font-size: 13px;
  `}
`,BF=M.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Re`
    font-size: 12px;
  `}
`,HF=M.span`
  color: ${e=>e.theme.borderColor};
`,FF=M.div`
  display: none;
  ${Re`
    display: flex;
    align-items: center;
  `}
`,qF=M.button`
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
`,VF=T.memo(({clazz:e})=>{const t=lt(tD),n=e.status,i=n==="free"||n==="waitlist",a=T.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(Dv("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=T.useMemo(()=>MF(e.start,t?.timezone),[e.start,t?.timezone]),u=Ao[n]??Ao.full;return _.jsxs(kF,{$status:n,$interactive:i,href:a,target:"_blank","aria-label":`${u.label} ${e.name} at ${l}`,children:[_.jsxs(LF,{children:[_.jsx(PF,{children:l}),_.jsxs(jF,{children:[e.duration/60," min"]})]}),_.jsxs(UF,{children:[_.jsx(H_,{instructor:e.instructor,size:44}),_.jsx(uh,{discipline:e.discipline,size:36})]}),_.jsxs($F,{children:[_.jsx(zF,{children:e.name}),_.jsxs(BF,{children:[e.instructor.name,_.jsx(HF,{children:"·"}),e.discipline.name,_.jsx(FF,{children:_.jsx(uh,{discipline:e.discipline,size:20})})]})]}),_.jsx(qF,{$status:n,disabled:!i,tabIndex:-1,children:u.label})]})}),GF=M.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,YF=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,QF=M.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,WF=M.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,rC=M.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,KF=M.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Re`
    padding: 24px 16px;
  `}
`,XF=M.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,iC=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,ZF=({classes:e,fulfilledTimeStamp:t})=>{const n=lt(u=>NF(u,e)),i=lt(TF),a=lt(u=>u.filters.selectedBookableStatuses.includes("free")),l=T.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?_.jsxs(KF,{children:[_.jsx(XF,{children:"No classes found"}),i&&_.jsx(iC,{children:"Try resetting your filters or selecting more options in the sidebar."}),a&&!i&&_.jsx(iC,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):_.jsx(GF,{children:n.map((u,f)=>_.jsxs(YF,{children:[_.jsxs(QF,{children:[_.jsx(WF,{children:u.formattedDate}),f===0&&l&&_.jsxs(rC,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&_.jsx(rC,{children:"All times in studio timezone"})]}),u.classes.map((h,p)=>_.jsx(VF,{clazz:h},p))]},f))})},sC=M.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Re`
    padding: 24px 16px;
  `}
`,JF=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,eq=M.p`
  font-size: 14px;
  color: #d93025;
  margin: 0 0 6px;
`,tq=M.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,nq=()=>{const e=lt(Ca),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:a}=zI(e,{refetchOnMountOrArgChange:!0});return i&&!n?_.jsxs(sC,{children:[_.jsx(eq,{children:"Failed to load classes"}),_.jsx(tq,{children:f9(i)})]}):!t||n?_.jsx(sC,{children:_.jsx(JF,{children:"Loading classes…"})}):_.jsx(ZF,{classes:t,fulfilledTimeStamp:a})},rq=M.div``,cv=300,iq=M.aside`
  max-width: 100%;
  width: ${cv}px;
  top: calc(${BA}px + env(safe-area-inset-top, 0px));
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
    left: ${e=>e.$toggleVisible?0:-cv}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,sq=M.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  position: relative;
  margin-left: ${cv}px;

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
`,af=40,aq=M.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,oq=M.div`
  display: inline-block;
  position: relative;
  width: ${af}px;
  height: ${af}px;
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
    width: ${af}px;
    height: ${af}px;
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
`,lq=M.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,cq=M.button`
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
`,uq=()=>_.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:_.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),dq=()=>{const{refresh:e}=EF(),{swipeRef:t,spinnerRef:n}=CF({refresh:e}),[i,a]=T.useState(!1);return _.jsx(aa,{children:_.jsxs(rq,{children:[_.jsx(iq,{$toggleVisible:i,children:_.jsx(wF,{onClose:()=>{a(!1)}})}),_.jsxs(sq,{$toggleVisible:i,onClick:()=>{a(!1)},ref:t,children:[_.jsx(aq,{children:_.jsxs(oq,{ref:n,children:[_.jsx("div",{}),_.jsx("div",{}),_.jsx("div",{})]})}),_.jsx(lq,{children:_.jsxs(cq,{type:"button",onClick:l=>{a(!0),l.stopPropagation()},children:[_.jsx(uq,{}),"Filters"]})}),_.jsx(nq,{})]})]})})},fq=({children:e})=>{const t=lt(Ko),n=lt(O_);return t.state!=="fulfilled"?null:n?_.jsx(_.Fragment,{children:e}):_.jsx(yv,{to:nt.CLASS_LIST,replace:!0})},aC=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},hq=M.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,pq=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,mq=M.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,oC=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,lC=M.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,cC=M.input`
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
`,gq=M.button`
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
`,yq=M.button`
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
`,vq=M.div`
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
`,_q=M.p`
  margin: 0;
  font-size: 13px;
  color: #d93025;
`,bq=M.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,Sq=M.button`
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
`,wq=()=>{const e=su(),[t,n]=T.useState(!1),[i,a]=T.useState(""),[l,u]=T.useState(!1),[f,h]=T.useState(""),[p,g]=T.useState(""),y=T.useCallback(async S=>{if(S.preventDefault(),!(!si||!f||!p)){n(!0),a("");try{l?await V$(si,f,p):await G$(si,f,p),e(nt.CLASS_LIST)}catch(w){console.error("Email auth error:",w);const D=w&&typeof w=="object"&&"code"in w?aC(w):"Authentication failed";a(D),Dr(w)}finally{n(!1)}}},[f,p,l,e]),v=T.useCallback(async()=>{if(si){n(!0),a("");try{const S=new ii;await mz(si,S),e(nt.CLASS_LIST)}catch(S){console.error("Google sign-in error:",S);const w=S&&typeof S=="object"&&"code"in S?aC(S):"Google sign-in failed";a(w),Dr(S)}finally{n(!1)}}},[e]);return _.jsxs("div",{children:[_.jsx(hq,{children:l?"Create account":"Sign in"}),_.jsx(pq,{children:"Set alerts, persist filters across devices, and access beta features."}),_.jsxs(mq,{onSubmit:y,children:[_.jsxs(oC,{children:[_.jsx(lC,{htmlFor:"signin-email",children:"Email"}),_.jsx(cC,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:S=>h(S.target.value),required:!0,disabled:t})]}),_.jsxs(oC,{children:[_.jsx(lC,{htmlFor:"signin-password",children:"Password"}),_.jsx(cC,{id:"signin-password",type:"password",placeholder:"••••••••",value:p,onChange:S=>g(S.target.value),required:!0,disabled:t})]}),i&&_.jsx(_q,{role:"alert",children:i}),_.jsx(gq,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),_.jsx(vq,{style:{marginTop:20,marginBottom:16},children:"or"}),_.jsx(yq,{type:"button",onClick:v,disabled:t,children:"Continue with Google"}),_.jsxs(bq,{children:[l?"Already have an account?":"Don't have an account?"," ",_.jsx(Sq,{type:"button",onClick:()=>{u(!l),a("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},Eq=_i([Ko],e=>e.state==="fulfilled"&&!!e.data),xq=M.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Re`
    padding: 16px 12px;
  `}
`,Cq=M.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Re`
    padding: 24px 20px;
  `}
`,Tq=()=>lt(Eq)?_.jsx(yv,{to:nt.CLASS_LIST}):_.jsx(aa,{children:_.jsx(xq,{children:_.jsx(Cq,{children:_.jsx(wq,{})})})});function Rq(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function Aq(e=14){const[t,n]=T.useState({state:"idle"});return T.useEffect(()=>{if(!Nn){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),$A(gr(Nn,"metrics")).then(i=>{const a=i.val()??{},u=Rq(e).map(f=>{const h=a[f]??{},p=h.diffs??{},g={};for(const[v,S]of Object.entries(p))g[v]={added:S.added??0,changed:S.changed??0,removed:S.removed??0};const y=h.notifications??{};return{date:f,diffs:g,notifications:{sent:y.sent??0,failed:y.failed??0,usersReached:y.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}const ay=M.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Re`
    padding: 20px 16px;
  `}
`,oy=M.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,uC=M.section`
  margin-bottom: 40px;
`,dC=M.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,Iq=M.div`
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
`,fC=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,nD=80,Dq=M.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 20px 16px 12px;
  overflow-x: auto;
`,Oq=M.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  min-width: max-content;
`,Nq=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Mq=M.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: ${nD+16}px;
`,kq=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,Lq=M.div`
  font-size: 9px;
  font-weight: 600;
  line-height: 1;
  color: ${e=>e.$color};
`,Pq=M.div`
  width: 10px;
  height: ${e=>e.$height}px;
  background-color: ${e=>e.$color};
  border-radius: 2px 2px 0 0;
  min-height: 1px;
`,jq=M.div`
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  white-space: nowrap;
`,Uq=M.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,$q=M.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,zq=M.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function Bq(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function hC({days:e,barsForDay:t,legend:n}){const i=e.flatMap(l=>t(l).map(u=>u.value)),a=Math.max(...i,1);return _.jsxs(Dq,{children:[_.jsx(Oq,{children:e.map(l=>_.jsxs(Nq,{children:[_.jsx(Mq,{children:t(l).map(u=>_.jsxs(kq,{children:[u.value>0&&_.jsx(Lq,{$color:u.color,children:u.value}),_.jsx(Pq,{$height:Math.round(u.value/a*nD),$color:u.color})]},u.label))}),_.jsx(jq,{children:Bq(l.date)})]},l.date))}),_.jsx(Uq,{children:n.map(l=>_.jsxs($q,{children:[_.jsx(zq,{$color:l.color}),l.label]},l.label))})]})}const Vn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},Hq=()=>{const e=Aq(14);if(e.state==="idle"||e.state==="loading")return _.jsx(aa,{children:_.jsxs(ay,{children:[_.jsx(oy,{children:"Stats"}),_.jsx(fC,{children:"Loading…"})]})});if(e.state==="failed")return _.jsx(aa,{children:_.jsxs(ay,{children:[_.jsx(oy,{children:"Stats"}),_.jsxs(fC,{children:["Failed to load metrics:"," ",e.error.message??"unknown error"]})]})});const t=e.data,n=t.reduce((a,l)=>{a.sent+=l.notifications.sent,a.failed+=l.notifications.failed,a.usersReached+=l.notifications.usersReached;for(const u of Object.values(l.diffs))a.added+=u.added,a.changed+=u.changed,a.removed+=u.removed;return a},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),i=[...new Set(t.flatMap(a=>Object.keys(a.diffs)))];return _.jsx(aa,{children:_.jsxs(ay,{children:[_.jsx(oy,{children:"Stats"}),_.jsxs(Iq,{children:[_.jsxs(po,{children:[_.jsx(mo,{children:"Notifications sent (14d)"}),_.jsx(go,{children:n.sent.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Users reached (14d)"}),_.jsx(go,{children:n.usersReached.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Delivery failures (14d)"}),_.jsx(go,{children:n.failed.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Classes added (14d)"}),_.jsx(go,{children:n.added.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Classes changed (14d)"}),_.jsx(go,{children:n.changed.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Classes removed (14d)"}),_.jsx(go,{children:n.removed.toLocaleString()})]})]}),_.jsxs(uC,{children:[_.jsx(dC,{children:"Push notifications (14 days)"}),_.jsx(hC,{days:t,barsForDay:a=>[{value:a.notifications.sent,color:Vn.sent,label:"Sent"},{value:a.notifications.failed,color:Vn.failed,label:"Failed"},{value:a.notifications.usersReached,color:Vn.usersReached,label:"Users reached"}],legend:[{color:Vn.sent,label:"Sent"},{color:Vn.failed,label:"Failed"},{color:Vn.usersReached,label:"Users reached"}]})]}),i.map(a=>_.jsxs(uC,{children:[_.jsxs(dC,{children:["Schedule changes — ",Si.STUDIOS[a]?.location??a," (14 days)"]}),_.jsx(hC,{days:t,barsForDay:l=>{const u=l.diffs[a]??{added:0,changed:0,removed:0};return[{value:u.added,color:Vn.added,label:"Added"},{value:u.changed,color:Vn.changed,label:"Changed"},{value:u.removed,color:Vn.removed,label:"Removed"}]},legend:[{color:Vn.added,label:"Added"},{color:Vn.changed,label:"Changed"},{color:Vn.removed,label:"Removed"}]})]},a))]})})},Fq=zk(yk(_.jsxs(Cr,{children:[_.jsx(Cr,{path:nt.CLASS_LIST,element:_.jsx(dq,{})}),_.jsxs(Cr,{path:nt.ALERTS,element:_.jsx(vH,{}),children:[_.jsx(Cr,{index:!0,element:_.jsx(M7,{})}),_.jsx(Cr,{path:"edit",element:_.jsx(rH,{})})]}),_.jsx(Cr,{path:nt.SIGN_IN,element:_.jsx(Tq,{})}),_.jsx(Cr,{path:nt.ABOUT,element:_.jsx(Y8,{})}),_.jsx(Cr,{path:nt.STATS,element:_.jsx(fq,{children:_.jsx(Hq,{})})}),_.jsx(Cr,{path:"*",element:_.jsx(yv,{to:nt.CLASS_LIST,replace:!0})})]}))),qq=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),Vq={state:"idle"},rD=Rr({name:"session",initialState:Vq,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:pC,setSession:Gq,removeSession:mC}=rD.actions,Yq=rD.reducer,Qq=({children:e})=>{const t=ys();return T.useEffect(()=>{if(t(pC()),!si)return t(mC()),()=>{};const n=W$(si,async i=>{if(t(pC()),i){let a=!1;try{a=(Nn?await $A(gr(Nn,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(Gq(qq(i,a)))}else t(mC())});return()=>n()},[t]),_.jsx(_.Fragment,{children:e})},Wq={alerts:[]},iD=Rr({name:"alerts",initialState:Wq,reducers:{addAlert(e,t){e.alerts.push(t.payload)},setAlerts(e,t){e.alerts=t.payload},removeAlerts(e){e.alerts=[]}}}),{addAlert:tV,setAlerts:nV,removeAlerts:rV}=iD.actions,Kq=iD.reducer,Xq=_3({reducer:{alerts:Kq,filters:Y7,session:Yq,[Ef.reducerPath]:Ef.reducer,[Zy.name]:Zy.reducer},middleware:e=>e().concat(Ef.middleware)}),Zq={borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449"},widths:{tablet:1024,mobile:560}};function Jq(){return _.jsx(J2,{theme:Zq,children:_.jsx(LN,{store:Xq,children:_.jsx(Qq,{children:_.jsx(QU,{children:_.jsx(Zk,{router:Fq})})})})})}_N.createRoot(document.getElementById("root")).render(_.jsx(T.StrictMode,{children:_.jsx(Jq,{})}));
//# sourceMappingURL=index-B4VVTW9T.js.map
