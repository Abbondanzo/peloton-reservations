(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Vk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mg={exports:{}},tc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1;function Gk(){if(J1)return tc;J1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return tc.Fragment=t,tc.jsx=n,tc.jsxs=n,tc}var ew;function Yk(){return ew||(ew=1,mg.exports=Gk()),mg.exports}var y=Yk(),gg={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tw;function Wk(){if(tw)return je;tw=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,I={};function T(k,K,ce){this.props=k,this.context=K,this.refs=I,this.updater=ce||b}T.prototype.isReactComponent={},T.prototype.setState=function(k,K){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,K,"setState")},T.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function O(){}O.prototype=T.prototype;function M(k,K,ce){this.props=k,this.context=K,this.refs=I,this.updater=ce||b}var C=M.prototype=new O;C.constructor=M,w(C,T.prototype),C.isPureReactComponent=!0;var D=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},A=Object.prototype.hasOwnProperty;function P(k,K,ce,ie,de,me){return ce=me.ref,{$$typeof:e,type:k,key:K,ref:ce!==void 0?ce:null,props:me}}function V(k,K){return P(k.type,K,void 0,void 0,void 0,k.props)}function H(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function B(k){var K={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ce){return K[ce]})}var z=/\/+/g;function G(k,K){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):K.toString(36)}function q(){}function te(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(q,q):(k.status="pending",k.then(function(K){k.status==="pending"&&(k.status="fulfilled",k.value=K)},function(K){k.status==="pending"&&(k.status="rejected",k.reason=K)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function oe(k,K,ce,ie,de){var me=typeof k;(me==="undefined"||me==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case e:case t:pe=!0;break;case g:return pe=k._init,oe(pe(k._payload),K,ce,ie,de)}}if(pe)return de=de(k),pe=ie===""?"."+G(k,0):ie,D(de)?(ce="",pe!=null&&(ce=pe.replace(z,"$&/")+"/"),oe(de,K,ce,"",function(Oe){return Oe})):de!=null&&(H(de)&&(de=V(de,ce+(de.key==null||k&&k.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),K.push(de)),1;pe=0;var Ae=ie===""?".":ie+":";if(D(k))for(var be=0;be<k.length;be++)ie=k[be],me=Ae+G(ie,be),pe+=oe(ie,K,ce,me,de);else if(be=_(k),typeof be=="function")for(k=be.call(k),be=0;!(ie=k.next()).done;)ie=ie.value,me=Ae+G(ie,be++),pe+=oe(ie,K,ce,me,de);else if(me==="object"){if(typeof k.then=="function")return oe(te(k),K,ce,ie,de);throw K=String(k),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return pe}function j(k,K,ce){if(k==null)return k;var ie=[],de=0;return oe(k,ie,"","",function(me){return K.call(ce,me,de++)}),ie}function J(k){if(k._status===-1){var K=k._result;K=K(),K.then(function(ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=ce)},function(ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=ce)}),k._status===-1&&(k._status=0,k._result=K)}if(k._status===1)return k._result.default;throw k._result}var ne=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function le(){}return je.Children={map:j,forEach:function(k,K,ce){j(k,function(){K.apply(this,arguments)},ce)},count:function(k){var K=0;return j(k,function(){K++}),K},toArray:function(k){return j(k,function(K){return K})||[]},only:function(k){if(!H(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},je.Component=T,je.Fragment=n,je.Profiler=o,je.PureComponent=M,je.StrictMode=i,je.Suspense=p,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,je.__COMPILER_RUNTIME={__proto__:null,c:function(k){return N.H.useMemoCache(k)}},je.cache=function(k){return function(){return k.apply(null,arguments)}},je.cloneElement=function(k,K,ce){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ie=w({},k.props),de=k.key,me=void 0;if(K!=null)for(pe in K.ref!==void 0&&(me=void 0),K.key!==void 0&&(de=""+K.key),K)!A.call(K,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&K.ref===void 0||(ie[pe]=K[pe]);var pe=arguments.length-2;if(pe===1)ie.children=ce;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];ie.children=Ae}return P(k.type,de,void 0,void 0,me,ie)},je.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},je.createElement=function(k,K,ce){var ie,de={},me=null;if(K!=null)for(ie in K.key!==void 0&&(me=""+K.key),K)A.call(K,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=K[ie]);var pe=arguments.length-2;if(pe===1)de.children=ce;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(k&&k.defaultProps)for(ie in pe=k.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return P(k,me,void 0,void 0,null,de)},je.createRef=function(){return{current:null}},je.forwardRef=function(k){return{$$typeof:f,render:k}},je.isValidElement=H,je.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:J}},je.memo=function(k,K){return{$$typeof:h,type:k,compare:K===void 0?null:K}},je.startTransition=function(k){var K=N.T,ce={};N.T=ce;try{var ie=k(),de=N.S;de!==null&&de(ce,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(le,ne)}catch(me){ne(me)}finally{N.T=K}},je.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},je.use=function(k){return N.H.use(k)},je.useActionState=function(k,K,ce){return N.H.useActionState(k,K,ce)},je.useCallback=function(k,K){return N.H.useCallback(k,K)},je.useContext=function(k){return N.H.useContext(k)},je.useDebugValue=function(){},je.useDeferredValue=function(k,K){return N.H.useDeferredValue(k,K)},je.useEffect=function(k,K,ce){var ie=N.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(k,K)},je.useId=function(){return N.H.useId()},je.useImperativeHandle=function(k,K,ce){return N.H.useImperativeHandle(k,K,ce)},je.useInsertionEffect=function(k,K){return N.H.useInsertionEffect(k,K)},je.useLayoutEffect=function(k,K){return N.H.useLayoutEffect(k,K)},je.useMemo=function(k,K){return N.H.useMemo(k,K)},je.useOptimistic=function(k,K){return N.H.useOptimistic(k,K)},je.useReducer=function(k,K,ce){return N.H.useReducer(k,K,ce)},je.useRef=function(k){return N.H.useRef(k)},je.useState=function(k){return N.H.useState(k)},je.useSyncExternalStore=function(k,K,ce){return N.H.useSyncExternalStore(k,K,ce)},je.useTransition=function(){return N.H.useTransition()},je.version="19.1.1",je}var nw;function Eh(){return nw||(nw=1,gg.exports=Wk()),gg.exports}var E=Eh();const dr=Vk(E);var yg={exports:{}},nc={},vg={exports:{}},_g={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rw;function Qk(){return rw||(rw=1,(function(e){function t(j,J){var ne=j.length;j.push(J);e:for(;0<ne;){var le=ne-1>>>1,k=j[le];if(0<o(k,J))j[le]=J,j[ne]=k,ne=le;else break e}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var J=j[0],ne=j.pop();if(ne!==J){j[0]=ne;e:for(var le=0,k=j.length,K=k>>>1;le<K;){var ce=2*(le+1)-1,ie=j[ce],de=ce+1,me=j[de];if(0>o(ie,ne))de<k&&0>o(me,ie)?(j[le]=me,j[de]=ne,le=de):(j[le]=ie,j[ce]=ne,le=ce);else if(de<k&&0>o(me,ne))j[le]=me,j[de]=ne,le=de;else break e}}return J}function o(j,J){var ne=j.sortIndex-J.sortIndex;return ne!==0?ne:j.id-J.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,v=null,_=3,b=!1,w=!1,I=!1,T=!1,O=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function D(j){for(var J=n(h);J!==null;){if(J.callback===null)i(h);else if(J.startTime<=j)i(h),J.sortIndex=J.expirationTime,t(p,J);else break;J=n(h)}}function N(j){if(I=!1,D(j),!w)if(n(p)!==null)w=!0,A||(A=!0,G());else{var J=n(h);J!==null&&oe(N,J.startTime-j)}}var A=!1,P=-1,V=5,H=-1;function B(){return T?!0:!(e.unstable_now()-H<V)}function z(){if(T=!1,A){var j=e.unstable_now();H=j;var J=!0;try{e:{w=!1,I&&(I=!1,M(P),P=-1),b=!0;var ne=_;try{t:{for(D(j),v=n(p);v!==null&&!(v.expirationTime>j&&B());){var le=v.callback;if(typeof le=="function"){v.callback=null,_=v.priorityLevel;var k=le(v.expirationTime<=j);if(j=e.unstable_now(),typeof k=="function"){v.callback=k,D(j),J=!0;break t}v===n(p)&&i(p),D(j)}else i(p);v=n(p)}if(v!==null)J=!0;else{var K=n(h);K!==null&&oe(N,K.startTime-j),J=!1}}break e}finally{v=null,_=ne,b=!1}J=void 0}}finally{J?G():A=!1}}}var G;if(typeof C=="function")G=function(){C(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,te=q.port2;q.port1.onmessage=z,G=function(){te.postMessage(null)}}else G=function(){O(z,0)};function oe(j,J){P=O(function(){j(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(j){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var ne=_;_=J;try{return j()}finally{_=ne}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ne=_;_=j;try{return J()}finally{_=ne}},e.unstable_scheduleCallback=function(j,J,ne){var le=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?le+ne:le):ne=le,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=ne+k,j={id:g++,callback:J,priorityLevel:j,startTime:ne,expirationTime:k,sortIndex:-1},ne>le?(j.sortIndex=ne,t(h,j),n(p)===null&&j===n(h)&&(I?(M(P),P=-1):I=!0,oe(N,ne-le))):(j.sortIndex=k,t(p,j),w||b||(w=!0,A||(A=!0,G()))),j},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(j){var J=_;return function(){var ne=_;_=J;try{return j.apply(this,arguments)}finally{_=ne}}}})(_g)),_g}var iw;function Kk(){return iw||(iw=1,vg.exports=Qk()),vg.exports}var bg={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sw;function Xk(){if(sw)return on;sw=1;var e=Eh();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:h,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,on.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,g)},on.flushSync=function(p){var h=u.T,g=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=h,i.p=g,i.d.f()}},on.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},on.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},on.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,v=f(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:b}):g==="script"&&i.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},on.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=f(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},on.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=f(g,h.crossOrigin);i.d.L(p,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},on.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=f(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},on.requestFormReset=function(p){i.d.r(p)},on.unstable_batchedUpdates=function(p,h){return p(h)},on.useFormState=function(p,h,g){return u.H.useFormState(p,h,g)},on.useFormStatus=function(){return u.H.useHostTransitionStatus()},on.version="19.1.1",on}var ow;function YT(){if(ow)return bg.exports;ow=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),bg.exports=Xk(),bg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aw;function Zk(){if(aw)return nc;aw=1;var e=Kk(),t=Eh(),n=YT();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=d,c=m;else{for(var S=!1,x=d.child;x;){if(x===a){S=!0,a=d,c=m;break}if(x===c){S=!0,c=d,a=m;break}x=x.sibling}if(!S){for(x=m.child;x;){if(x===a){S=!0,a=m,c=d;break}if(x===c){S=!0,c=m,a=d;break}x=x.sibling}if(!S)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:s}function h(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=h(r),s!==null)return s;r=r.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var q=Symbol.for("react.client.reference");function te(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===q?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case w:return"Fragment";case T:return"Profiler";case I:return"StrictMode";case N:return"Suspense";case A:return"SuspenseList";case H:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case b:return"Portal";case C:return(r.displayName||"Context")+".Provider";case M:return(r._context.displayName||"Context")+".Consumer";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:te(r.type)||"Memo";case V:s=r._payload,r=r._init;try{return te(r(s))}catch{}}return null}var oe=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},le=[],k=-1;function K(r){return{current:r}}function ce(r){0>k||(r.current=le[k],le[k]=null,k--)}function ie(r,s){k++,le[k]=r.current,r.current=s}var de=K(null),me=K(null),pe=K(null),Ae=K(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?R1(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=R1(s),r=A1(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ce(de),ie(de,r)}function Oe(){ce(de),ce(me),ce(pe)}function $e(r){r.memoizedState!==null&&ie(Ae,r);var s=de.current,a=A1(s,r.type);s!==a&&(ie(me,r),ie(de,a))}function _t(r){me.current===r&&(ce(de),ce(me)),Ae.current===r&&(ce(Ae),Kl._currentValue=ne)}var gt=Object.prototype.hasOwnProperty,Ln=e.unstable_scheduleCallback,Et=e.unstable_cancelCallback,Pn=e.unstable_shouldYield,Ur=e.unstable_requestPaint,Wt=e.unstable_now,sl=e.unstable_getCurrentPriorityLevel,As=e.unstable_ImmediatePriority,Oo=e.unstable_UserBlockingPriority,ko=e.unstable_NormalPriority,$r=e.unstable_LowPriority,Ci=e.unstable_IdlePriority,Iu=e.log,ol=e.unstable_setDisableYieldValue,hn=null,bt=null;function sr(r){if(typeof Iu=="function"&&ol(r),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(hn,r)}catch{}}var Qt=Math.clz32?Math.clz32:Du,dp=Math.log,wr=Math.LN2;function Du(r){return r>>>=0,r===0?32:31-(dp(r)/wr|0)|0}var Is=256,Ds=4194304;function zr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Os(r,s,a){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,S=r.pingedLanes;r=r.warmLanes;var x=c&134217727;return x!==0?(c=x&~m,c!==0?d=zr(c):(S&=x,S!==0?d=zr(S):a||(a=x&~r,a!==0&&(d=zr(a))))):(x=c&~m,x!==0?d=zr(x):S!==0?d=zr(S):a||(a=c&~r,a!==0&&(d=zr(a)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,a=s&-s,m>=a||m===32&&(a&4194048)!==0)?s:d}function xr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Ou(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var r=Is;return Is<<=1,(Is&4194048)===0&&(Is=256),r}function ku(){var r=Ds;return Ds<<=1,(Ds&62914560)===0&&(Ds=4194304),r}function Mo(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ks(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Nu(r,s,a,c,d,m){var S=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var x=r.entanglements,L=r.expirationTimes,Q=r.hiddenUpdates;for(a=S&~a;0<a;){var re=31-Qt(a),ae=1<<re;x[re]=0,L[re]=-1;var X=Q[re];if(X!==null)for(Q[re]=null,re=0;re<X.length;re++){var Z=X[re];Z!==null&&(Z.lane&=-536870913)}a&=~ae}c!==0&&Ns(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(S&~s))}function Ns(r,s,a){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Qt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|a&4194090}function Ms(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Qt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}function al(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ll(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function U(){var r=J.p;return r!==0?r:(r=window.event,r===void 0?32:Y1(r.type))}function Y(r,s){var a=J.p;try{return J.p=r,s()}finally{J.p=a}}var ee=Math.random().toString(36).slice(2),ue="__reactFiber$"+ee,fe="__reactProps$"+ee,ye="__reactContainer$"+ee,we="__reactEvents$"+ee,ve="__reactListeners$"+ee,Ee="__reactHandles$"+ee,Ce="__reactResources$"+ee,_e="__reactMarker$"+ee;function Se(r){delete r[ue],delete r[fe],delete r[we],delete r[ve],delete r[Ee]}function ze(r){var s=r[ue];if(s)return s;for(var a=r.parentNode;a;){if(s=a[ye]||a[ue]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=k1(r);r!==null;){if(a=r[ue])return a;r=k1(r)}return s}r=a,a=r.parentNode}return null}function Ze(r){if(r=r[ue]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function yt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Tt(r){var s=r[Ce];return s||(s=r[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Le(r){r[_e]=!0}var st=new Set,Er={};function xn(r,s){ln(r,s),ln(r+"Capture",s)}function ln(r,s){for(Er[r]=s,r=0;r<s.length;r++)st.add(s[r])}var jn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},Ri={};function Br(r){return gt.call(Ri,r)?!0:gt.call(Lo,r)?!1:jn.test(r)?Ri[r]=!0:(Lo[r]=!0,!1)}function Hr(r,s,a){if(Br(s))if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+a)}}function Fr(r,s,a){if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+a)}}function Pe(r,s,a,c){if(c===null)r.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(s,a,""+c)}}var kt,qr;function pn(r){if(kt===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);kt=s&&s[1]||"",qr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+r+qr}var St=!1;function Ai(r,s){if(!r||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(Z){var X=Z}Reflect.construct(r,[],ae)}else{try{ae.call()}catch(Z){X=Z}r.call(ae.prototype)}}else{try{throw Error()}catch(Z){X=Z}(ae=r())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),S=m[0],x=m[1];if(S&&x){var L=S.split(`
`),Q=x.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===Q.length)for(c=L.length-1,d=Q.length-1;1<=c&&0<=d&&L[c]!==Q[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==Q[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==Q[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?pn(a):""}function Mu(r){switch(r.tag){case 26:case 27:case 5:return pn(r.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Ai(r.type,!1);case 11:return Ai(r.type.render,!1);case 1:return Ai(r.type,!0);case 31:return pn("Activity");default:return""}}function Lu(r){try{var s="";do s+=Mu(r),r=r.return;while(r);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Un(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function wb(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function zD(r){var s=wb(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(S){c=""+S,m.call(this,S)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Pu(r){r._valueTracker||(r._valueTracker=zD(r))}function xb(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=wb(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function ju(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var BD=/[\n"\\]/g;function $n(r){return r.replace(BD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function fp(r,s,a,c,d,m,S,x){r.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.type=S:r.removeAttribute("type"),s!=null?S==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Un(s)):r.value!==""+Un(s)&&(r.value=""+Un(s)):S!=="submit"&&S!=="reset"||r.removeAttribute("value"),s!=null?hp(r,S,Un(s)):a!=null?hp(r,S,Un(a)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?r.name=""+Un(x):r.removeAttribute("name")}function Eb(r,s,a,c,d,m,S,x){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;a=a!=null?""+Un(a):"",s=s!=null?""+Un(s):a,x||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=x?r.checked:!!c,r.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(r.name=S)}function hp(r,s,a){s==="number"&&ju(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function Po(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Un(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Tb(r,s,a){if(s!=null&&(s=""+Un(s),s!==r.value&&(r.value=s),a==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=a!=null?""+Un(a):""}function Cb(r,s,a,c){if(s==null){if(c!=null){if(a!=null)throw Error(i(92));if(oe(c)){if(1<c.length)throw Error(i(93));c=c[0]}a=c}a==null&&(a=""),s=a}a=Un(s),r.defaultValue=a,c=r.textContent,c===a&&c!==""&&c!==null&&(r.value=c)}function jo(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var HD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rb(r,s,a){var c=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,a):typeof a!="number"||a===0||HD.has(s)?s==="float"?r.cssFloat=a:r[s]=(""+a).trim():r[s]=a+"px"}function Ab(r,s,a){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&a[d]!==c&&Rb(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&Rb(r,m,s[m])}function pp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var FD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(r){return qD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var mp=null;function gp(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Uo=null,$o=null;function Ib(r){var s=Ze(r);if(s&&(r=s.stateNode)){var a=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(fp(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+$n(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));fp(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<a.length;s++)c=a[s],c.form===r.form&&xb(c)}break e;case"textarea":Tb(r,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Po(r,!!a.multiple,s,!1)}}}var yp=!1;function Db(r,s,a){if(yp)return r(s,a);yp=!0;try{var c=r(s);return c}finally{if(yp=!1,(Uo!==null||$o!==null)&&(xd(),Uo&&(s=Uo,r=$o,$o=Uo=null,Ib(s),r)))for(s=0;s<r.length;s++)Ib(r[s])}}function cl(r,s){var a=r.stateNode;if(a===null)return null;var c=a[fe]||null;if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,s,typeof a));return a}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vp=!1;if(Vr)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){vp=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{vp=!1}var Ii=null,_p=null,$u=null;function Ob(){if($u)return $u;var r,s=_p,a=s.length,c,d="value"in Ii?Ii.value:Ii.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var S=a-r;for(c=1;c<=S&&s[a-c]===d[m-c];c++);return $u=d.slice(r,1<c?1-c:void 0)}function zu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Bu(){return!0}function kb(){return!1}function mn(r){function s(a,c,d,m,S){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var x in r)r.hasOwnProperty(x)&&(a=r[x],this[x]=a?a(m):m[x]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bu:kb,this.isPropagationStopped=kb,this}return g(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=mn(Ls),dl=g({},Ls,{view:0,detail:0}),VD=mn(dl),bp,Sp,fl,Fu=g({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fl&&(fl&&r.type==="mousemove"?(bp=r.screenX-fl.screenX,Sp=r.screenY-fl.screenY):Sp=bp=0,fl=r),bp)},movementY:function(r){return"movementY"in r?r.movementY:Sp}}),Nb=mn(Fu),GD=g({},Fu,{dataTransfer:0}),YD=mn(GD),WD=g({},dl,{relatedTarget:0}),wp=mn(WD),QD=g({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),KD=mn(QD),XD=g({},Ls,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ZD=mn(XD),JD=g({},Ls,{data:0}),Mb=mn(JD),eO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rO(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=nO[r])?!!s[r]:!1}function xp(){return rO}var iO=g({},dl,{key:function(r){if(r.key){var s=eO[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=zu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?tO[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xp,charCode:function(r){return r.type==="keypress"?zu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),sO=mn(iO),oO=g({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lb=mn(oO),aO=g({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xp}),lO=mn(aO),cO=g({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),uO=mn(cO),dO=g({},Fu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),fO=mn(dO),hO=g({},Ls,{newState:0,oldState:0}),pO=mn(hO),mO=[9,13,27,32],Ep=Vr&&"CompositionEvent"in window,hl=null;Vr&&"documentMode"in document&&(hl=document.documentMode);var gO=Vr&&"TextEvent"in window&&!hl,Pb=Vr&&(!Ep||hl&&8<hl&&11>=hl),jb=" ",Ub=!1;function $b(r,s){switch(r){case"keyup":return mO.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zb(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var zo=!1;function yO(r,s){switch(r){case"compositionend":return zb(s);case"keypress":return s.which!==32?null:(Ub=!0,jb);case"textInput":return r=s.data,r===jb&&Ub?null:r;default:return null}}function vO(r,s){if(zo)return r==="compositionend"||!Ep&&$b(r,s)?(r=Ob(),$u=_p=Ii=null,zo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Pb&&s.locale!=="ko"?null:s.data;default:return null}}var _O={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!_O[r.type]:s==="textarea"}function Hb(r,s,a,c){Uo?$o?$o.push(c):$o=[c]:Uo=c,s=Id(s,"onChange"),0<s.length&&(a=new Hu("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var pl=null,ml=null;function bO(r){w1(r,0)}function qu(r){var s=yt(r);if(xb(s))return r}function Fb(r,s){if(r==="change")return s}var qb=!1;if(Vr){var Tp;if(Vr){var Cp="oninput"in document;if(!Cp){var Vb=document.createElement("div");Vb.setAttribute("oninput","return;"),Cp=typeof Vb.oninput=="function"}Tp=Cp}else Tp=!1;qb=Tp&&(!document.documentMode||9<document.documentMode)}function Gb(){pl&&(pl.detachEvent("onpropertychange",Yb),ml=pl=null)}function Yb(r){if(r.propertyName==="value"&&qu(ml)){var s=[];Hb(s,ml,r,gp(r)),Db(bO,s)}}function SO(r,s,a){r==="focusin"?(Gb(),pl=s,ml=a,pl.attachEvent("onpropertychange",Yb)):r==="focusout"&&Gb()}function wO(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return qu(ml)}function xO(r,s){if(r==="click")return qu(s)}function EO(r,s){if(r==="input"||r==="change")return qu(s)}function TO(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var En=typeof Object.is=="function"?Object.is:TO;function gl(r,s){if(En(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!gt.call(s,d)||!En(r[d],s[d]))return!1}return!0}function Wb(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Qb(r,s){var a=Wb(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wb(a)}}function Kb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Kb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Xb(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ju(r.document);s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=ju(r.document)}return s}function Rp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var CO=Vr&&"documentMode"in document&&11>=document.documentMode,Bo=null,Ap=null,yl=null,Ip=!1;function Zb(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ip||Bo==null||Bo!==ju(c)||(c=Bo,"selectionStart"in c&&Rp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yl&&gl(yl,c)||(yl=c,c=Id(Ap,"onSelect"),0<c.length&&(s=new Hu("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Bo)))}function Ps(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Ho={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Dp={},Jb={};Vr&&(Jb=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function js(r){if(Dp[r])return Dp[r];if(!Ho[r])return r;var s=Ho[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Jb)return Dp[r]=s[a];return r}var e0=js("animationend"),t0=js("animationiteration"),n0=js("animationstart"),RO=js("transitionrun"),AO=js("transitionstart"),IO=js("transitioncancel"),r0=js("transitionend"),i0=new Map,Op="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Op.push("scrollEnd");function or(r,s){i0.set(r,s),xn(s,[r])}var s0=new WeakMap;function zn(r,s){if(typeof r=="object"&&r!==null){var a=s0.get(r);return a!==void 0?a:(s={value:r,source:s,stack:Lu(s)},s0.set(r,s),s)}return{value:r,source:s,stack:Lu(s)}}var Bn=[],Fo=0,kp=0;function Vu(){for(var r=Fo,s=kp=Fo=0;s<r;){var a=Bn[s];Bn[s++]=null;var c=Bn[s];Bn[s++]=null;var d=Bn[s];Bn[s++]=null;var m=Bn[s];if(Bn[s++]=null,c!==null&&d!==null){var S=c.pending;S===null?d.next=d:(d.next=S.next,S.next=d),c.pending=d}m!==0&&o0(a,d,m)}}function Gu(r,s,a,c){Bn[Fo++]=r,Bn[Fo++]=s,Bn[Fo++]=a,Bn[Fo++]=c,kp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function Np(r,s,a,c){return Gu(r,s,a,c),Yu(r)}function qo(r,s){return Gu(r,null,null,s),Yu(r)}function o0(r,s,a){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a);for(var d=!1,m=r.return;m!==null;)m.childLanes|=a,c=m.alternate,c!==null&&(c.childLanes|=a),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Qt(a),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=a|536870912),m):null}function Yu(r){if(50<Hl)throw Hl=0,$m=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Vo={};function DO(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new DO(r,s,a,c)}function Mp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Gr(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function a0(r,s){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Wu(r,s,a,c,d,m){var S=0;if(c=r,typeof r=="function")Mp(r)&&(S=1);else if(typeof r=="string")S=kk(r,a,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case H:return r=Tn(31,a,s,d),r.elementType=H,r.lanes=m,r;case w:return Us(a.children,d,m,s);case I:S=8,d|=24;break;case T:return r=Tn(12,a,s,d|2),r.elementType=T,r.lanes=m,r;case N:return r=Tn(13,a,s,d),r.elementType=N,r.lanes=m,r;case A:return r=Tn(19,a,s,d),r.elementType=A,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case O:case C:S=10;break e;case M:S=9;break e;case D:S=11;break e;case P:S=14;break e;case V:S=16,c=null;break e}S=29,a=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Tn(S,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function Us(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function Lp(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function Pp(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Go=[],Yo=0,Qu=null,Ku=0,Hn=[],Fn=0,$s=null,Yr=1,Wr="";function zs(r,s){Go[Yo++]=Ku,Go[Yo++]=Qu,Qu=r,Ku=s}function l0(r,s,a){Hn[Fn++]=Yr,Hn[Fn++]=Wr,Hn[Fn++]=$s,$s=r;var c=Yr;r=Wr;var d=32-Qt(c)-1;c&=~(1<<d),a+=1;var m=32-Qt(s)+d;if(30<m){var S=d-d%5;m=(c&(1<<S)-1).toString(32),c>>=S,d-=S,Yr=1<<32-Qt(s)+d|a<<d|c,Wr=m+r}else Yr=1<<m|a<<d|c,Wr=r}function jp(r){r.return!==null&&(zs(r,1),l0(r,1,0))}function Up(r){for(;r===Qu;)Qu=Go[--Yo],Go[Yo]=null,Ku=Go[--Yo],Go[Yo]=null;for(;r===$s;)$s=Hn[--Fn],Hn[Fn]=null,Wr=Hn[--Fn],Hn[Fn]=null,Yr=Hn[--Fn],Hn[Fn]=null}var cn=null,Ct=null,Je=!1,Bs=null,Tr=!1,$p=Error(i(519));function Hs(r){var s=Error(i(418,""));throw bl(zn(s,r)),$p}function c0(r){var s=r.stateNode,a=r.type,c=r.memoizedProps;switch(s[ue]=r,s[fe]=c,a){case"dialog":Ye("cancel",s),Ye("close",s);break;case"iframe":case"object":case"embed":Ye("load",s);break;case"video":case"audio":for(a=0;a<ql.length;a++)Ye(ql[a],s);break;case"source":Ye("error",s);break;case"img":case"image":case"link":Ye("error",s),Ye("load",s);break;case"details":Ye("toggle",s);break;case"input":Ye("invalid",s),Eb(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Pu(s);break;case"select":Ye("invalid",s);break;case"textarea":Ye("invalid",s),Cb(s,c.value,c.defaultValue,c.children),Pu(s)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||c.suppressHydrationWarning===!0||C1(s.textContent,a)?(c.popover!=null&&(Ye("beforetoggle",s),Ye("toggle",s)),c.onScroll!=null&&Ye("scroll",s),c.onScrollEnd!=null&&Ye("scrollend",s),c.onClick!=null&&(s.onclick=Dd),s=!0):s=!1,s||Hs(r)}function u0(r){for(cn=r.return;cn;)switch(cn.tag){case 5:case 13:Tr=!1;return;case 27:case 3:Tr=!0;return;default:cn=cn.return}}function vl(r){if(r!==cn)return!1;if(!Je)return u0(r),Je=!0,!1;var s=r.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||tg(r.type,r.memoizedProps)),a=!a),a&&Ct&&Hs(r),u0(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){Ct=lr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;r=r.nextSibling}Ct=null}}else s===27?(s=Ct,Vi(r.type)?(r=sg,sg=null,Ct=r):Ct=s):Ct=cn?lr(r.stateNode.nextSibling):null;return!0}function _l(){Ct=cn=null,Je=!1}function d0(){var r=Bs;return r!==null&&(vn===null?vn=r:vn.push.apply(vn,r),Bs=null),r}function bl(r){Bs===null?Bs=[r]:Bs.push(r)}var zp=K(null),Fs=null,Qr=null;function Di(r,s,a){ie(zp,s._currentValue),s._currentValue=a}function Kr(r){r._currentValue=zp.current,ce(zp)}function Bp(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Hp(r,s,a,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var S=d.child;m=m.firstContext;e:for(;m!==null;){var x=m;m=d;for(var L=0;L<s.length;L++)if(x.context===s[L]){m.lanes|=a,x=m.alternate,x!==null&&(x.lanes|=a),Bp(m.return,a,r),c||(S=null);break e}m=x.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(i(341));S.lanes|=a,m=S.alternate,m!==null&&(m.lanes|=a),Bp(S,a,r),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===r){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Sl(r,s,a,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(i(387));if(S=S.memoizedProps,S!==null){var x=d.type;En(d.pendingProps.value,S.value)||(r!==null?r.push(x):r=[x])}}else if(d===Ae.current){if(S=d.alternate,S===null)throw Error(i(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Kl):r=[Kl])}d=d.return}r!==null&&Hp(s,r,a,c),s.flags|=262144}function Xu(r){for(r=r.firstContext;r!==null;){if(!En(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function qs(r){Fs=r,Qr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function sn(r){return f0(Fs,r)}function Zu(r,s){return Fs===null&&qs(r),f0(r,s)}function f0(r,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Qr===null){if(r===null)throw Error(i(308));Qr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Qr=Qr.next=s;return a}var OO=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(a,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(a){return a()})}},kO=e.unstable_scheduleCallback,NO=e.unstable_NormalPriority,Pt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fp(){return{controller:new OO,data:new Map,refCount:0}}function wl(r){r.refCount--,r.refCount===0&&kO(NO,function(){r.controller.abort()})}var xl=null,qp=0,Wo=0,Qo=null;function MO(r,s){if(xl===null){var a=xl=[];qp=0,Wo=Gm(),Qo={status:"pending",value:void 0,then:function(c){a.push(c)}}}return qp++,s.then(h0,h0),s}function h0(){if(--qp===0&&xl!==null){Qo!==null&&(Qo.status="fulfilled");var r=xl;xl=null,Wo=0,Qo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function LO(r,s){var a=[],c={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<a.length;d++)(0,a[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),c}var p0=j.S;j.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&MO(r,s),p0!==null&&p0(r,s)};var Vs=K(null);function Vp(){var r=Vs.current;return r!==null?r:ft.pooledCache}function Ju(r,s){s===null?ie(Vs,Vs.current):ie(Vs,s.pool)}function m0(){var r=Vp();return r===null?null:{parent:Pt._currentValue,pool:r}}var El=Error(i(460)),g0=Error(i(474)),ed=Error(i(542)),Gp={then:function(){}};function y0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function td(){}function v0(r,s,a){switch(a=r[a],a===void 0?r.push(s):a!==s&&(s.then(td,td),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,b0(r),r;default:if(typeof s.status=="string")s.then(td,td);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,b0(r),r}throw Tl=s,El}}var Tl=null;function _0(){if(Tl===null)throw Error(i(459));var r=Tl;return Tl=null,r}function b0(r){if(r===El||r===ed)throw Error(i(483))}var Oi=!1;function Yp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ki(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ni(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(rt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Yu(r),o0(r,null,a),s}return Gu(r,c,s,a),Yu(r)}function Cl(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ms(r,a)}}function Qp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?d=m=S:m=m.next=S,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}var Kp=!1;function Rl(){if(Kp){var r=Qo;if(r!==null)throw r}}function Al(r,s,a,c){Kp=!1;var d=r.updateQueue;Oi=!1;var m=d.firstBaseUpdate,S=d.lastBaseUpdate,x=d.shared.pending;if(x!==null){d.shared.pending=null;var L=x,Q=L.next;L.next=null,S===null?m=Q:S.next=Q,S=L;var re=r.alternate;re!==null&&(re=re.updateQueue,x=re.lastBaseUpdate,x!==S&&(x===null?re.firstBaseUpdate=Q:x.next=Q,re.lastBaseUpdate=L))}if(m!==null){var ae=d.baseState;S=0,re=Q=L=null,x=m;do{var X=x.lane&-536870913,Z=X!==x.lane;if(Z?(Qe&X)===X:(c&X)===X){X!==0&&X===Wo&&(Kp=!0),re!==null&&(re=re.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var Me=r,Re=x;X=s;var lt=a;switch(Re.tag){case 1:if(Me=Re.payload,typeof Me=="function"){ae=Me.call(lt,ae,X);break e}ae=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Re.payload,X=typeof Me=="function"?Me.call(lt,ae,X):Me,X==null)break e;ae=g({},ae,X);break e;case 2:Oi=!0}}X=x.callback,X!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=d.callbacks,Z===null?d.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:x.tag,payload:x.payload,callback:x.callback,next:null},re===null?(Q=re=Z,L=ae):re=re.next=Z,S|=X;if(x=x.next,x===null){if(x=d.shared.pending,x===null)break;Z=x,x=Z.next,Z.next=null,d.lastBaseUpdate=Z,d.shared.pending=null}}while(!0);re===null&&(L=ae),d.baseState=L,d.firstBaseUpdate=Q,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),Bi|=S,r.lanes=S,r.memoizedState=ae}}function S0(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function w0(r,s){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)S0(a[r],s)}var Ko=K(null),nd=K(0);function x0(r,s){r=ri,ie(nd,r),ie(Ko,s),ri=r|s.baseLanes}function Xp(){ie(nd,ri),ie(Ko,Ko.current)}function Zp(){ri=nd.current,ce(Ko),ce(nd)}var Mi=0,He=null,ot=null,Nt=null,rd=!1,Xo=!1,Gs=!1,id=0,Il=0,Zo=null,PO=0;function Dt(){throw Error(i(321))}function Jp(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!En(r[a],s[a]))return!1;return!0}function em(r,s,a,c,d,m){return Mi=m,He=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,j.H=r===null||r.memoizedState===null?oS:aS,Gs=!1,m=a(c,d),Gs=!1,Xo&&(m=T0(s,a,c,d)),E0(r),m}function E0(r){j.H=ud;var s=ot!==null&&ot.next!==null;if(Mi=0,Nt=ot=He=null,rd=!1,Il=0,Zo=null,s)throw Error(i(300));r===null||zt||(r=r.dependencies,r!==null&&Xu(r)&&(zt=!0))}function T0(r,s,a,c){He=r;var d=0;do{if(Xo&&(Zo=null),Il=0,Xo=!1,25<=d)throw Error(i(301));if(d+=1,Nt=ot=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}j.H=FO,m=s(a,c)}while(Xo);return m}function jO(){var r=j.H,s=r.useState()[0];return s=typeof s.then=="function"?Dl(s):s,r=r.useState()[0],(ot!==null?ot.memoizedState:null)!==r&&(He.flags|=1024),s}function tm(){var r=id!==0;return id=0,r}function nm(r,s,a){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~a}function rm(r){if(rd){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}rd=!1}Mi=0,Nt=ot=He=null,Xo=!1,Il=id=0,Zo=null}function gn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?He.memoizedState=Nt=r:Nt=Nt.next=r,Nt}function Mt(){if(ot===null){var r=He.alternate;r=r!==null?r.memoizedState:null}else r=ot.next;var s=Nt===null?He.memoizedState:Nt.next;if(s!==null)Nt=s,ot=r;else{if(r===null)throw He.alternate===null?Error(i(467)):Error(i(310));ot=r,r={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Nt===null?He.memoizedState=Nt=r:Nt=Nt.next=r}return Nt}function im(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(r){var s=Il;return Il+=1,Zo===null&&(Zo=[]),r=v0(Zo,r,s),s=He,(Nt===null?s.memoizedState:Nt.next)===null&&(s=s.alternate,j.H=s===null||s.memoizedState===null?oS:aS),r}function sd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Dl(r);if(r.$$typeof===C)return sn(r)}throw Error(i(438,String(r)))}function sm(r){var s=null,a=He.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var c=He.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=im(),He.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(r),c=0;c<r;c++)a[c]=B;return s.index++,a}function Xr(r,s){return typeof s=="function"?s(r):s}function od(r){var s=Mt();return om(s,ot,r)}function om(r,s,a){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=a;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var S=d.next;d.next=m.next,m.next=S}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var x=S=null,L=null,Q=s,re=!1;do{var ae=Q.lane&-536870913;if(ae!==Q.lane?(Qe&ae)===ae:(Mi&ae)===ae){var X=Q.revertLane;if(X===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ae===Wo&&(re=!0);else if((Mi&X)===X){Q=Q.next,X===Wo&&(re=!0);continue}else ae={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(x=L=ae,S=m):L=L.next=ae,He.lanes|=X,Bi|=X;ae=Q.action,Gs&&a(m,ae),m=Q.hasEagerState?Q.eagerState:a(m,ae)}else X={lane:ae,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(x=L=X,S=m):L=L.next=X,He.lanes|=ae,Bi|=ae;Q=Q.next}while(Q!==null&&Q!==s);if(L===null?S=m:L.next=x,!En(m,r.memoizedState)&&(zt=!0,re&&(a=Qo,a!==null)))throw a;r.memoizedState=m,r.baseState=S,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function am(r){var s=Mt(),a=s.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var S=d=d.next;do m=r(m,S.action),S=S.next;while(S!==d);En(m,s.memoizedState)||(zt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function C0(r,s,a){var c=He,d=Mt(),m=Je;if(m){if(a===void 0)throw Error(i(407));a=a()}else a=s();var S=!En((ot||d).memoizedState,a);S&&(d.memoizedState=a,zt=!0),d=d.queue;var x=I0.bind(null,c,d,r);if(Ol(2048,8,x,[r]),d.getSnapshot!==s||S||Nt!==null&&Nt.memoizedState.tag&1){if(c.flags|=2048,Jo(9,ad(),A0.bind(null,c,d,a,s),null),ft===null)throw Error(i(349));m||(Mi&124)!==0||R0(c,s,a)}return a}function R0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=He.updateQueue,s===null?(s=im(),He.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function A0(r,s,a,c){s.value=a,s.getSnapshot=c,D0(s)&&O0(r)}function I0(r,s,a){return a(function(){D0(s)&&O0(r)})}function D0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!En(r,a)}catch{return!0}}function O0(r){var s=qo(r,2);s!==null&&Dn(s,r,2)}function lm(r){var s=gn();if(typeof r=="function"){var a=r;if(r=a(),Gs){sr(!0);try{a()}finally{sr(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:r},s}function k0(r,s,a,c){return r.baseState=a,om(r,ot,typeof c=="function"?c:Xr)}function UO(r,s,a,c,d){if(cd(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};j.T!==null?a(!0):m.isTransition=!1,c(m),a=s.pending,a===null?(m.next=s.pending=m,N0(s,m)):(m.next=a.next,s.pending=a.next=m)}}function N0(r,s){var a=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=j.T,S={};j.T=S;try{var x=a(d,c),L=j.S;L!==null&&L(S,x),M0(r,s,x)}catch(Q){cm(r,s,Q)}finally{j.T=m}}else try{m=a(d,c),M0(r,s,m)}catch(Q){cm(r,s,Q)}}function M0(r,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){L0(r,s,c)},function(c){return cm(r,s,c)}):L0(r,s,a)}function L0(r,s,a){s.status="fulfilled",s.value=a,P0(s),r.state=a,s=r.pending,s!==null&&(a=s.next,a===s?r.pending=null:(a=a.next,s.next=a,N0(r,a)))}function cm(r,s,a){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=a,P0(s),s=s.next;while(s!==c)}r.action=null}function P0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function j0(r,s){return s}function U0(r,s){if(Je){var a=ft.formState;if(a!==null){e:{var c=He;if(Je){if(Ct){t:{for(var d=Ct,m=Tr;d.nodeType!==8;){if(!m){d=null;break t}if(d=lr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ct=lr(d.nextSibling),c=d.data==="F!";break e}}Hs(c)}c=!1}c&&(s=a[0])}}return a=gn(),a.memoizedState=a.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:j0,lastRenderedState:s},a.queue=c,a=rS.bind(null,He,c),c.dispatch=a,c=lm(!1),m=pm.bind(null,He,!1,c.queue),c=gn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,a=UO.bind(null,He,d,m,a),d.dispatch=a,c.memoizedState=r,[s,a,!1]}function $0(r){var s=Mt();return z0(s,ot,r)}function z0(r,s,a){if(s=om(r,s,j0)[0],r=od(Xr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Dl(s)}catch(S){throw S===El?ed:S}else c=s;s=Mt();var d=s.queue,m=d.dispatch;return a!==s.memoizedState&&(He.flags|=2048,Jo(9,ad(),$O.bind(null,d,a),null)),[c,m,r]}function $O(r,s){r.action=s}function B0(r){var s=Mt(),a=ot;if(a!==null)return z0(s,a,r);Mt(),s=s.memoizedState,a=Mt();var c=a.queue.dispatch;return a.memoizedState=r,[s,c,!1]}function Jo(r,s,a,c){return r={tag:r,create:a,deps:c,inst:s,next:null},s=He.updateQueue,s===null&&(s=im(),He.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r),r}function ad(){return{destroy:void 0,resource:void 0}}function H0(){return Mt().memoizedState}function ld(r,s,a,c){var d=gn();c=c===void 0?null:c,He.flags|=r,d.memoizedState=Jo(1|s,ad(),a,c)}function Ol(r,s,a,c){var d=Mt();c=c===void 0?null:c;var m=d.memoizedState.inst;ot!==null&&c!==null&&Jp(c,ot.memoizedState.deps)?d.memoizedState=Jo(s,m,a,c):(He.flags|=r,d.memoizedState=Jo(1|s,m,a,c))}function F0(r,s){ld(8390656,8,r,s)}function q0(r,s){Ol(2048,8,r,s)}function V0(r,s){return Ol(4,2,r,s)}function G0(r,s){return Ol(4,4,r,s)}function Y0(r,s){if(typeof s=="function"){r=r();var a=s(r);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function W0(r,s,a){a=a!=null?a.concat([r]):null,Ol(4,4,Y0.bind(null,s,r),a)}function um(){}function Q0(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;return s!==null&&Jp(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function K0(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;if(s!==null&&Jp(s,c[1]))return c[0];if(c=r(),Gs){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c}function dm(r,s,a){return a===void 0||(Mi&1073741824)!==0?r.memoizedState=s:(r.memoizedState=a,r=JS(),He.lanes|=r,Bi|=r,a)}function X0(r,s,a,c){return En(a,s)?a:Ko.current!==null?(r=dm(r,a,c),En(r,s)||(zt=!0),r):(Mi&42)===0?(zt=!0,r.memoizedState=a):(r=JS(),He.lanes|=r,Bi|=r,s)}function Z0(r,s,a,c,d){var m=J.p;J.p=m!==0&&8>m?m:8;var S=j.T,x={};j.T=x,pm(r,!1,s,a);try{var L=d(),Q=j.S;if(Q!==null&&Q(x,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=LO(L,c);kl(r,s,re,In(r))}else kl(r,s,c,In(r))}catch(ae){kl(r,s,{then:function(){},status:"rejected",reason:ae},In())}finally{J.p=m,j.T=S}}function zO(){}function fm(r,s,a,c){if(r.tag!==5)throw Error(i(476));var d=J0(r).queue;Z0(r,d,s,ne,a===null?zO:function(){return eS(r),a(c)})}function J0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:ne},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:a},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function eS(r){var s=J0(r).next.queue;kl(r,s,{},In())}function hm(){return sn(Kl)}function tS(){return Mt().memoizedState}function nS(){return Mt().memoizedState}function BO(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var a=In();r=ki(a);var c=Ni(s,r,a);c!==null&&(Dn(c,s,a),Cl(c,s,a)),s={cache:Fp()},r.payload=s;return}s=s.return}}function HO(r,s,a){var c=In();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},cd(r)?iS(s,a):(a=Np(r,s,a,c),a!==null&&(Dn(a,r,c),sS(a,s,c)))}function rS(r,s,a){var c=In();kl(r,s,a,c)}function kl(r,s,a,c){var d={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(cd(r))iS(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,x=m(S,a);if(d.hasEagerState=!0,d.eagerState=x,En(x,S))return Gu(r,s,d,0),ft===null&&Vu(),!1}catch{}finally{}if(a=Np(r,s,d,c),a!==null)return Dn(a,r,c),sS(a,s,c),!0}return!1}function pm(r,s,a,c){if(c={lane:2,revertLane:Gm(),action:c,hasEagerState:!1,eagerState:null,next:null},cd(r)){if(s)throw Error(i(479))}else s=Np(r,a,c,2),s!==null&&Dn(s,r,2)}function cd(r){var s=r.alternate;return r===He||s!==null&&s===He}function iS(r,s){Xo=rd=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function sS(r,s,a){if((a&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ms(r,a)}}var ud={readContext:sn,use:sd,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},oS={readContext:sn,use:sd,useCallback:function(r,s){return gn().memoizedState=[r,s===void 0?null:s],r},useContext:sn,useEffect:F0,useImperativeHandle:function(r,s,a){a=a!=null?a.concat([r]):null,ld(4194308,4,Y0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return ld(4194308,4,r,s)},useInsertionEffect:function(r,s){ld(4,2,r,s)},useMemo:function(r,s){var a=gn();s=s===void 0?null:s;var c=r();if(Gs){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c},useReducer:function(r,s,a){var c=gn();if(a!==void 0){var d=a(s);if(Gs){sr(!0);try{a(s)}finally{sr(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=HO.bind(null,He,r),[c.memoizedState,r]},useRef:function(r){var s=gn();return r={current:r},s.memoizedState=r},useState:function(r){r=lm(r);var s=r.queue,a=rS.bind(null,He,s);return s.dispatch=a,[r.memoizedState,a]},useDebugValue:um,useDeferredValue:function(r,s){var a=gn();return dm(a,r,s)},useTransition:function(){var r=lm(!1);return r=Z0.bind(null,He,r.queue,!0,!1),gn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,a){var c=He,d=gn();if(Je){if(a===void 0)throw Error(i(407));a=a()}else{if(a=s(),ft===null)throw Error(i(349));(Qe&124)!==0||R0(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,F0(I0.bind(null,c,m,r),[r]),c.flags|=2048,Jo(9,ad(),A0.bind(null,c,m,a,s),null),a},useId:function(){var r=gn(),s=ft.identifierPrefix;if(Je){var a=Wr,c=Yr;a=(c&~(1<<32-Qt(c)-1)).toString(32)+a,s="«"+s+"R"+a,a=id++,0<a&&(s+="H"+a.toString(32)),s+="»"}else a=PO++,s="«"+s+"r"+a.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:hm,useFormState:U0,useActionState:U0,useOptimistic:function(r){var s=gn();s.memoizedState=s.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=pm.bind(null,He,!0,a),a.dispatch=s,[r,s]},useMemoCache:sm,useCacheRefresh:function(){return gn().memoizedState=BO.bind(null,He)}},aS={readContext:sn,use:sd,useCallback:Q0,useContext:sn,useEffect:q0,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:K0,useReducer:od,useRef:H0,useState:function(){return od(Xr)},useDebugValue:um,useDeferredValue:function(r,s){var a=Mt();return X0(a,ot.memoizedState,r,s)},useTransition:function(){var r=od(Xr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:C0,useId:tS,useHostTransitionStatus:hm,useFormState:$0,useActionState:$0,useOptimistic:function(r,s){var a=Mt();return k0(a,ot,r,s)},useMemoCache:sm,useCacheRefresh:nS},FO={readContext:sn,use:sd,useCallback:Q0,useContext:sn,useEffect:q0,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:K0,useReducer:am,useRef:H0,useState:function(){return am(Xr)},useDebugValue:um,useDeferredValue:function(r,s){var a=Mt();return ot===null?dm(a,r,s):X0(a,ot.memoizedState,r,s)},useTransition:function(){var r=am(Xr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:C0,useId:tS,useHostTransitionStatus:hm,useFormState:B0,useActionState:B0,useOptimistic:function(r,s){var a=Mt();return ot!==null?k0(a,ot,r,s):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:sm,useCacheRefresh:nS},ea=null,Nl=0;function dd(r){var s=Nl;return Nl+=1,ea===null&&(ea=[]),v0(ea,r,s)}function Ml(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function fd(r,s){throw s.$$typeof===v?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function lS(r){var s=r._init;return s(r._payload)}function cS(r){function s(F,$){if(r){var W=F.deletions;W===null?(F.deletions=[$],F.flags|=16):W.push($)}}function a(F,$){if(!r)return null;for(;$!==null;)s(F,$),$=$.sibling;return null}function c(F){for(var $=new Map;F!==null;)F.key!==null?$.set(F.key,F):$.set(F.index,F),F=F.sibling;return $}function d(F,$){return F=Gr(F,$),F.index=0,F.sibling=null,F}function m(F,$,W){return F.index=W,r?(W=F.alternate,W!==null?(W=W.index,W<$?(F.flags|=67108866,$):W):(F.flags|=67108866,$)):(F.flags|=1048576,$)}function S(F){return r&&F.alternate===null&&(F.flags|=67108866),F}function x(F,$,W,se){return $===null||$.tag!==6?($=Lp(W,F.mode,se),$.return=F,$):($=d($,W),$.return=F,$)}function L(F,$,W,se){var ge=W.type;return ge===w?re(F,$,W.props.children,se,W.key):$!==null&&($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&lS(ge)===$.type)?($=d($,W.props),Ml($,W),$.return=F,$):($=Wu(W.type,W.key,W.props,null,F.mode,se),Ml($,W),$.return=F,$)}function Q(F,$,W,se){return $===null||$.tag!==4||$.stateNode.containerInfo!==W.containerInfo||$.stateNode.implementation!==W.implementation?($=Pp(W,F.mode,se),$.return=F,$):($=d($,W.children||[]),$.return=F,$)}function re(F,$,W,se,ge){return $===null||$.tag!==7?($=Us(W,F.mode,se,ge),$.return=F,$):($=d($,W),$.return=F,$)}function ae(F,$,W){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Lp(""+$,F.mode,W),$.return=F,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return W=Wu($.type,$.key,$.props,null,F.mode,W),Ml(W,$),W.return=F,W;case b:return $=Pp($,F.mode,W),$.return=F,$;case V:var se=$._init;return $=se($._payload),ae(F,$,W)}if(oe($)||G($))return $=Us($,F.mode,W,null),$.return=F,$;if(typeof $.then=="function")return ae(F,dd($),W);if($.$$typeof===C)return ae(F,Zu(F,$),W);fd(F,$)}return null}function X(F,$,W,se){var ge=$!==null?$.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return ge!==null?null:x(F,$,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case _:return W.key===ge?L(F,$,W,se):null;case b:return W.key===ge?Q(F,$,W,se):null;case V:return ge=W._init,W=ge(W._payload),X(F,$,W,se)}if(oe(W)||G(W))return ge!==null?null:re(F,$,W,se,null);if(typeof W.then=="function")return X(F,$,dd(W),se);if(W.$$typeof===C)return X(F,$,Zu(F,W),se);fd(F,W)}return null}function Z(F,$,W,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return F=F.get(W)||null,x($,F,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case _:return F=F.get(se.key===null?W:se.key)||null,L($,F,se,ge);case b:return F=F.get(se.key===null?W:se.key)||null,Q($,F,se,ge);case V:var Fe=se._init;return se=Fe(se._payload),Z(F,$,W,se,ge)}if(oe(se)||G(se))return F=F.get(W)||null,re($,F,se,ge,null);if(typeof se.then=="function")return Z(F,$,W,dd(se),ge);if(se.$$typeof===C)return Z(F,$,W,Zu($,se),ge);fd($,se)}return null}function Me(F,$,W,se){for(var ge=null,Fe=null,xe=$,Ie=$=0,Ht=null;xe!==null&&Ie<W.length;Ie++){xe.index>Ie?(Ht=xe,xe=null):Ht=xe.sibling;var Ke=X(F,xe,W[Ie],se);if(Ke===null){xe===null&&(xe=Ht);break}r&&xe&&Ke.alternate===null&&s(F,xe),$=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke,xe=Ht}if(Ie===W.length)return a(F,xe),Je&&zs(F,Ie),ge;if(xe===null){for(;Ie<W.length;Ie++)xe=ae(F,W[Ie],se),xe!==null&&($=m(xe,$,Ie),Fe===null?ge=xe:Fe.sibling=xe,Fe=xe);return Je&&zs(F,Ie),ge}for(xe=c(xe);Ie<W.length;Ie++)Ht=Z(xe,F,Ie,W[Ie],se),Ht!==null&&(r&&Ht.alternate!==null&&xe.delete(Ht.key===null?Ie:Ht.key),$=m(Ht,$,Ie),Fe===null?ge=Ht:Fe.sibling=Ht,Fe=Ht);return r&&xe.forEach(function(Ki){return s(F,Ki)}),Je&&zs(F,Ie),ge}function Re(F,$,W,se){if(W==null)throw Error(i(151));for(var ge=null,Fe=null,xe=$,Ie=$=0,Ht=null,Ke=W.next();xe!==null&&!Ke.done;Ie++,Ke=W.next()){xe.index>Ie?(Ht=xe,xe=null):Ht=xe.sibling;var Ki=X(F,xe,Ke.value,se);if(Ki===null){xe===null&&(xe=Ht);break}r&&xe&&Ki.alternate===null&&s(F,xe),$=m(Ki,$,Ie),Fe===null?ge=Ki:Fe.sibling=Ki,Fe=Ki,xe=Ht}if(Ke.done)return a(F,xe),Je&&zs(F,Ie),ge;if(xe===null){for(;!Ke.done;Ie++,Ke=W.next())Ke=ae(F,Ke.value,se),Ke!==null&&($=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return Je&&zs(F,Ie),ge}for(xe=c(xe);!Ke.done;Ie++,Ke=W.next())Ke=Z(xe,F,Ie,Ke.value,se),Ke!==null&&(r&&Ke.alternate!==null&&xe.delete(Ke.key===null?Ie:Ke.key),$=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return r&&xe.forEach(function(qk){return s(F,qk)}),Je&&zs(F,Ie),ge}function lt(F,$,W,se){if(typeof W=="object"&&W!==null&&W.type===w&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case _:e:{for(var ge=W.key;$!==null;){if($.key===ge){if(ge=W.type,ge===w){if($.tag===7){a(F,$.sibling),se=d($,W.props.children),se.return=F,F=se;break e}}else if($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&lS(ge)===$.type){a(F,$.sibling),se=d($,W.props),Ml(se,W),se.return=F,F=se;break e}a(F,$);break}else s(F,$);$=$.sibling}W.type===w?(se=Us(W.props.children,F.mode,se,W.key),se.return=F,F=se):(se=Wu(W.type,W.key,W.props,null,F.mode,se),Ml(se,W),se.return=F,F=se)}return S(F);case b:e:{for(ge=W.key;$!==null;){if($.key===ge)if($.tag===4&&$.stateNode.containerInfo===W.containerInfo&&$.stateNode.implementation===W.implementation){a(F,$.sibling),se=d($,W.children||[]),se.return=F,F=se;break e}else{a(F,$);break}else s(F,$);$=$.sibling}se=Pp(W,F.mode,se),se.return=F,F=se}return S(F);case V:return ge=W._init,W=ge(W._payload),lt(F,$,W,se)}if(oe(W))return Me(F,$,W,se);if(G(W)){if(ge=G(W),typeof ge!="function")throw Error(i(150));return W=ge.call(W),Re(F,$,W,se)}if(typeof W.then=="function")return lt(F,$,dd(W),se);if(W.$$typeof===C)return lt(F,$,Zu(F,W),se);fd(F,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,$!==null&&$.tag===6?(a(F,$.sibling),se=d($,W),se.return=F,F=se):(a(F,$),se=Lp(W,F.mode,se),se.return=F,F=se),S(F)):a(F,$)}return function(F,$,W,se){try{Nl=0;var ge=lt(F,$,W,se);return ea=null,ge}catch(xe){if(xe===El||xe===ed)throw xe;var Fe=Tn(29,xe,null,F.mode);return Fe.lanes=se,Fe.return=F,Fe}finally{}}}var ta=cS(!0),uS=cS(!1),qn=K(null),Cr=null;function Li(r){var s=r.alternate;ie(jt,jt.current&1),ie(qn,r),Cr===null&&(s===null||Ko.current!==null||s.memoizedState!==null)&&(Cr=r)}function dS(r){if(r.tag===22){if(ie(jt,jt.current),ie(qn,r),Cr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Cr=r)}}else Pi()}function Pi(){ie(jt,jt.current),ie(qn,qn.current)}function Zr(r){ce(qn),Cr===r&&(Cr=null),ce(jt)}var jt=K(0);function hd(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ig(a)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function mm(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:g({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var gm={enqueueSetState:function(r,s,a){r=r._reactInternals;var c=In(),d=ki(c);d.payload=s,a!=null&&(d.callback=a),s=Ni(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=In(),d=ki(c);d.tag=1,d.payload=s,a!=null&&(d.callback=a),s=Ni(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=In(),c=ki(a);c.tag=2,s!=null&&(c.callback=s),s=Ni(r,c,a),s!==null&&(Dn(s,r,a),Cl(s,r,a))}};function fS(r,s,a,c,d,m,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,S):s.prototype&&s.prototype.isPureReactComponent?!gl(a,c)||!gl(d,m):!0}function hS(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&gm.enqueueReplaceState(s,s.state,null)}function Ys(r,s){var a=s;if("ref"in s){a={};for(var c in s)c!=="ref"&&(a[c]=s[c])}if(r=r.defaultProps){a===s&&(a=g({},a));for(var d in r)a[d]===void 0&&(a[d]=r[d])}return a}var pd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function pS(r){pd(r)}function mS(r){console.error(r)}function gS(r){pd(r)}function md(r,s){try{var a=r.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function yS(r,s,a){try{var c=r.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ym(r,s,a){return a=ki(a),a.tag=3,a.payload={element:null},a.callback=function(){md(r,s)},a}function vS(r){return r=ki(r),r.tag=3,r}function _S(r,s,a,c){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){yS(s,a,c)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(r.callback=function(){yS(s,a,c),typeof d!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var x=c.stack;this.componentDidCatch(c.value,{componentStack:x!==null?x:""})})}function qO(r,s,a,c,d){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=a.alternate,s!==null&&Sl(s,a,d,!0),a=qn.current,a!==null){switch(a.tag){case 13:return Cr===null?Bm():a.alternate===null&&Rt===0&&(Rt=3),a.flags&=-257,a.flags|=65536,a.lanes=d,c===Gp?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([c]):s.add(c),Fm(r,c,d)),!1;case 22:return a.flags|=65536,c===Gp?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([c]):a.add(c)),Fm(r,c,d)),!1}throw Error(i(435,a.tag))}return Fm(r,c,d),Bm(),!1}if(Je)return s=qn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==$p&&(r=Error(i(422),{cause:c}),bl(zn(r,a)))):(c!==$p&&(s=Error(i(423),{cause:c}),bl(zn(s,a))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=zn(c,a),d=ym(r.stateNode,c,d),Qp(r,d),Rt!==4&&(Rt=2)),!1;var m=Error(i(520),{cause:c});if(m=zn(m,a),Bl===null?Bl=[m]:Bl.push(m),Rt!==4&&(Rt=2),s===null)return!0;c=zn(c,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,r=d&-d,a.lanes|=r,r=ym(a.stateNode,c,r),Qp(a,r),!1;case 1:if(s=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hi===null||!Hi.has(m))))return a.flags|=65536,d&=-d,a.lanes|=d,d=vS(d),_S(d,r,a,c),Qp(a,d),!1}a=a.return}while(a!==null);return!1}var bS=Error(i(461)),zt=!1;function Kt(r,s,a,c){s.child=r===null?uS(s,null,a,c):ta(s,r.child,a,c)}function SS(r,s,a,c,d){a=a.render;var m=s.ref;if("ref"in c){var S={};for(var x in c)x!=="ref"&&(S[x]=c[x])}else S=c;return qs(s),c=em(r,s,a,S,m,d),x=tm(),r!==null&&!zt?(nm(r,s,d),Jr(r,s,d)):(Je&&x&&jp(s),s.flags|=1,Kt(r,s,c,d),s.child)}function wS(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Mp(m)&&m.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=m,xS(r,s,m,c,d)):(r=Wu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Tm(r,d)){var S=m.memoizedProps;if(a=a.compare,a=a!==null?a:gl,a(S,c)&&r.ref===s.ref)return Jr(r,s,d)}return s.flags|=1,r=Gr(m,c),r.ref=s.ref,r.return=s,s.child=r}function xS(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(gl(m,c)&&r.ref===s.ref)if(zt=!1,s.pendingProps=c=m,Tm(r,d))(r.flags&131072)!==0&&(zt=!0);else return s.lanes=r.lanes,Jr(r,s,d)}return vm(r,s,a,c,d)}function ES(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|a:a,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return TS(r,s,c,a)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Ju(s,m!==null?m.cachePool:null),m!==null?x0(s,m):Xp(),dS(s);else return s.lanes=s.childLanes=536870912,TS(r,s,m!==null?m.baseLanes|a:a,a)}else m!==null?(Ju(s,m.cachePool),x0(s,m),Pi(),s.memoizedState=null):(r!==null&&Ju(s,null),Xp(),Pi());return Kt(r,s,d,a),s.child}function TS(r,s,a,c){var d=Vp();return d=d===null?null:{parent:Pt._currentValue,pool:d},s.memoizedState={baseLanes:a,cachePool:d},r!==null&&Ju(s,null),Xp(),dS(s),r!==null&&Sl(r,s,c,!0),null}function gd(r,s){var a=s.ref;if(a===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(r===null||r.ref!==a)&&(s.flags|=4194816)}}function vm(r,s,a,c,d){return qs(s),a=em(r,s,a,c,void 0,d),c=tm(),r!==null&&!zt?(nm(r,s,d),Jr(r,s,d)):(Je&&c&&jp(s),s.flags|=1,Kt(r,s,a,d),s.child)}function CS(r,s,a,c,d,m){return qs(s),s.updateQueue=null,a=T0(s,c,a,d),E0(r),c=tm(),r!==null&&!zt?(nm(r,s,m),Jr(r,s,m)):(Je&&c&&jp(s),s.flags|=1,Kt(r,s,a,m),s.child)}function RS(r,s,a,c,d){if(qs(s),s.stateNode===null){var m=Vo,S=a.contextType;typeof S=="object"&&S!==null&&(m=sn(S)),m=new a(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=gm,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Yp(s),S=a.contextType,m.context=typeof S=="object"&&S!==null?sn(S):Vo,m.state=s.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(mm(s,a,S,c),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&gm.enqueueReplaceState(m,m.state,null),Al(s,c,m,d),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var x=s.memoizedProps,L=Ys(a,x);m.props=L;var Q=m.context,re=a.contextType;S=Vo,typeof re=="object"&&re!==null&&(S=sn(re));var ae=a.getDerivedStateFromProps;re=typeof ae=="function"||typeof m.getSnapshotBeforeUpdate=="function",x=s.pendingProps!==x,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x||Q!==S)&&hS(s,m,c,S),Oi=!1;var X=s.memoizedState;m.state=X,Al(s,c,m,d),Rl(),Q=s.memoizedState,x||X!==Q||Oi?(typeof ae=="function"&&(mm(s,a,ae,c),Q=s.memoizedState),(L=Oi||fS(s,a,L,c,X,Q,S))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=Q),m.props=c,m.state=Q,m.context=S,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Wp(r,s),S=s.memoizedProps,re=Ys(a,S),m.props=re,ae=s.pendingProps,X=m.context,Q=a.contextType,L=Vo,typeof Q=="object"&&Q!==null&&(L=sn(Q)),x=a.getDerivedStateFromProps,(Q=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==ae||X!==L)&&hS(s,m,c,L),Oi=!1,X=s.memoizedState,m.state=X,Al(s,c,m,d),Rl();var Z=s.memoizedState;S!==ae||X!==Z||Oi||r!==null&&r.dependencies!==null&&Xu(r.dependencies)?(typeof x=="function"&&(mm(s,a,x,c),Z=s.memoizedState),(re=Oi||fS(s,a,re,c,X,Z,L)||r!==null&&r.dependencies!==null&&Xu(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,Z,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,Z,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Z),m.props=c,m.state=Z,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,gd(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=ta(s,r.child,null,d),s.child=ta(s,null,a,d)):Kt(r,s,a,d),s.memoizedState=m.state,r=s.child):r=Jr(r,s,d),r}function AS(r,s,a,c){return _l(),s.flags|=256,Kt(r,s,a,c),s.child}var _m={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bm(r){return{baseLanes:r,cachePool:m0()}}function Sm(r,s,a){return r=r!==null?r.childLanes&~a:0,s&&(r|=Vn),r}function IS(r,s,a){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),S&&(d=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(d?Li(s):Pi(),Je){var x=Ct,L;if(L=x){e:{for(L=x,x=Tr;L.nodeType!==8;){if(!x){x=null;break e}if(L=lr(L.nextSibling),L===null){x=null;break e}}x=L}x!==null?(s.memoizedState={dehydrated:x,treeContext:$s!==null?{id:Yr,overflow:Wr}:null,retryLane:536870912,hydrationErrors:null},L=Tn(18,null,null,0),L.stateNode=x,L.return=s,s.child=L,cn=s,Ct=null,L=!0):L=!1}L||Hs(s)}if(x=s.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return ig(x)?s.lanes=32:s.lanes=536870912,null;Zr(s)}return x=c.children,c=c.fallback,d?(Pi(),d=s.mode,x=yd({mode:"hidden",children:x},d),c=Us(c,d,a,null),x.return=s,c.return=s,x.sibling=c,s.child=x,d=s.child,d.memoizedState=bm(a),d.childLanes=Sm(r,S,a),s.memoizedState=_m,c):(Li(s),wm(s,x))}if(L=r.memoizedState,L!==null&&(x=L.dehydrated,x!==null)){if(m)s.flags&256?(Li(s),s.flags&=-257,s=xm(r,s,a)):s.memoizedState!==null?(Pi(),s.child=r.child,s.flags|=128,s=null):(Pi(),d=c.fallback,x=s.mode,c=yd({mode:"visible",children:c.children},x),d=Us(d,x,a,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,ta(s,r.child,null,a),c=s.child,c.memoizedState=bm(a),c.childLanes=Sm(r,S,a),s.memoizedState=_m,s=d);else if(Li(s),ig(x)){if(S=x.nextSibling&&x.nextSibling.dataset,S)var Q=S.dgst;S=Q,c=Error(i(419)),c.stack="",c.digest=S,bl({value:c,source:null,stack:null}),s=xm(r,s,a)}else if(zt||Sl(r,s,a,!1),S=(a&r.childLanes)!==0,zt||S){if(S=ft,S!==null&&(c=a&-a,c=(c&42)!==0?1:al(c),c=(c&(S.suspendedLanes|a))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,qo(r,c),Dn(S,r,c),bS;x.data==="$?"||Bm(),s=xm(r,s,a)}else x.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Ct=lr(x.nextSibling),cn=s,Je=!0,Bs=null,Tr=!1,r!==null&&(Hn[Fn++]=Yr,Hn[Fn++]=Wr,Hn[Fn++]=$s,Yr=r.id,Wr=r.overflow,$s=s),s=wm(s,c.children),s.flags|=4096);return s}return d?(Pi(),d=c.fallback,x=s.mode,L=r.child,Q=L.sibling,c=Gr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,Q!==null?d=Gr(Q,d):(d=Us(d,x,a,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,x=r.child.memoizedState,x===null?x=bm(a):(L=x.cachePool,L!==null?(Q=Pt._currentValue,L=L.parent!==Q?{parent:Q,pool:Q}:L):L=m0(),x={baseLanes:x.baseLanes|a,cachePool:L}),d.memoizedState=x,d.childLanes=Sm(r,S,a),s.memoizedState=_m,c):(Li(s),a=r.child,r=a.sibling,a=Gr(a,{mode:"visible",children:c.children}),a.return=s,a.sibling=null,r!==null&&(S=s.deletions,S===null?(s.deletions=[r],s.flags|=16):S.push(r)),s.child=a,s.memoizedState=null,a)}function wm(r,s){return s=yd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function yd(r,s){return r=Tn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function xm(r,s,a){return ta(s,r.child,null,a),r=wm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function DS(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Bp(r.return,s,a)}function Em(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function OS(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Kt(r,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&DS(r,a,s);else if(r.tag===19)DS(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&hd(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Em(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&hd(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Em(s,!0,a,null,m);break;case"together":Em(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Jr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Bi|=s.lanes,(a&s.childLanes)===0)if(r!==null){if(Sl(r,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,a=Gr(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Gr(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Tm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Xu(r)))}function VO(r,s,a){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),Di(s,Pt,r.memoizedState.cache),_l();break;case 27:case 5:$e(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:Di(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Li(s),s.flags|=128,null):(a&s.child.childLanes)!==0?IS(r,s,a):(Li(s),r=Jr(r,s,a),r!==null?r.sibling:null);Li(s);break;case 19:var d=(r.flags&128)!==0;if(c=(a&s.childLanes)!==0,c||(Sl(r,s,a,!1),c=(a&s.childLanes)!==0),d){if(c)return OS(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,ES(r,s,a);case 24:Di(s,Pt,r.memoizedState.cache)}return Jr(r,s,a)}function kS(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps)zt=!0;else{if(!Tm(r,a)&&(s.flags&128)===0)return zt=!1,VO(r,s,a);zt=(r.flags&131072)!==0}else zt=!1,Je&&(s.flags&1048576)!==0&&l0(s,Ku,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")Mp(c)?(r=Ys(c,r),s.tag=1,s=RS(null,s,c,r,a)):(s.tag=0,s=vm(null,s,c,r,a));else{if(c!=null){if(d=c.$$typeof,d===D){s.tag=11,s=SS(null,s,c,r,a);break e}else if(d===P){s.tag=14,s=wS(null,s,c,r,a);break e}}throw s=te(c)||c,Error(i(306,s,""))}}return s;case 0:return vm(r,s,s.type,s.pendingProps,a);case 1:return c=s.type,d=Ys(c,s.pendingProps),RS(r,s,c,d,a);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,Wp(r,s),Al(s,c,null,a);var S=s.memoizedState;if(c=S.cache,Di(s,Pt,c),c!==m.cache&&Hp(s,[Pt],a,!0),Rl(),c=S.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=AS(r,s,c,a);break e}else if(c!==d){d=zn(Error(i(424)),s),bl(d),s=AS(r,s,c,a);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Ct=lr(r.firstChild),cn=s,Je=!0,Bs=null,Tr=!0,a=uS(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_l(),c===d){s=Jr(r,s,a);break e}Kt(r,s,c,a)}s=s.child}return s;case 26:return gd(r,s),r===null?(a=P1(s.type,null,s.pendingProps,null))?s.memoizedState=a:Je||(a=s.type,r=s.pendingProps,c=Od(pe.current).createElement(a),c[ue]=s,c[fe]=r,Zt(c,a,r),Le(c),s.stateNode=c):s.memoizedState=P1(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return $e(s),r===null&&Je&&(c=s.stateNode=N1(s.type,s.pendingProps,pe.current),cn=s,Tr=!0,d=Ct,Vi(s.type)?(sg=d,Ct=lr(c.firstChild)):Ct=d),Kt(r,s,s.pendingProps.children,a),gd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((d=c=Ct)&&(c=_k(c,s.type,s.pendingProps,Tr),c!==null?(s.stateNode=c,cn=s,Ct=lr(c.firstChild),Tr=!1,d=!0):d=!1),d||Hs(s)),$e(s),d=s.type,m=s.pendingProps,S=r!==null?r.memoizedProps:null,c=m.children,tg(d,m)?c=null:S!==null&&tg(d,S)&&(s.flags|=32),s.memoizedState!==null&&(d=em(r,s,jO,null,null,a),Kl._currentValue=d),gd(r,s),Kt(r,s,c,a),s.child;case 6:return r===null&&Je&&((r=a=Ct)&&(a=bk(a,s.pendingProps,Tr),a!==null?(s.stateNode=a,cn=s,Ct=null,r=!0):r=!1),r||Hs(s)),null;case 13:return IS(r,s,a);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ta(s,null,c,a):Kt(r,s,c,a),s.child;case 11:return SS(r,s,s.type,s.pendingProps,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:return c=s.pendingProps,Di(s,s.type,c.value),Kt(r,s,c.children,a),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,qs(s),d=sn(d),c=c(d),s.flags|=1,Kt(r,s,c,a),s.child;case 14:return wS(r,s,s.type,s.pendingProps,a);case 15:return xS(r,s,s.type,s.pendingProps,a);case 19:return OS(r,s,a);case 31:return c=s.pendingProps,a=s.mode,c={mode:c.mode,children:c.children},r===null?(a=yd(c,a),a.ref=s.ref,s.child=a,a.return=s,s=a):(a=Gr(r.child,c),a.ref=s.ref,s.child=a,a.return=s,s=a),s;case 22:return ES(r,s,a);case 24:return qs(s),c=sn(Pt),r===null?(d=Vp(),d===null&&(d=ft,m=Fp(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=a),d=m),s.memoizedState={parent:c,cache:d},Yp(s),Di(s,Pt,d)):((r.lanes&a)!==0&&(Wp(r,s),Al(s,null,null,a),Rl()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Di(s,Pt,c)):(c=m.cache,Di(s,Pt,c),c!==d.cache&&Hp(s,[Pt],a,!0))),Kt(r,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function ei(r){r.flags|=4}function NS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!B1(s)){if(s=qn.current,s!==null&&((Qe&4194048)===Qe?Cr!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||s!==Cr))throw Tl=Gp,g0;r.flags|=8192}}function vd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?ku():536870912,r.lanes|=s,sa|=s)}function Ll(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function wt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function GO(r,s,a){var c=s.pendingProps;switch(Up(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(s),null;case 1:return wt(s),null;case 3:return a=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Kr(Pt),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(vl(s)?ei(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,d0())),wt(s),null;case 26:return a=s.memoizedState,r===null?(ei(s),a!==null?(wt(s),NS(s,a)):(wt(s),s.flags&=-16777217)):a?a!==r.memoizedState?(ei(s),wt(s),NS(s,a)):(wt(s),s.flags&=-16777217):(r.memoizedProps!==c&&ei(s),wt(s),s.flags&=-16777217),null;case 27:_t(s),a=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ei(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}r=de.current,vl(s)?c0(s):(r=N1(d,c,a),s.stateNode=r,ei(s))}return wt(s),null;case 5:if(_t(s),a=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ei(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}if(r=de.current,vl(s))c0(s);else{switch(d=Od(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(a,{is:c.is}):d.createElement(a)}}r[ue]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Zt(r,a,c),a){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ei(s)}}return wt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&ei(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,vl(s)){if(r=s.stateNode,a=s.memoizedProps,c=null,d=cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ue]=s,r=!!(r.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||C1(r.nodeValue,a)),r||Hs(s)}else r=Od(r).createTextNode(c),r[ue]=s,s.stateNode=r}return wt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=vl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ue]=s}else _l(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wt(s),d=!1}else d=d0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Zr(s),s):(Zr(s),null)}if(Zr(s),(s.flags&128)!==0)return s.lanes=a,s;if(a=c!==null,r=r!==null&&r.memoizedState!==null,a){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return a!==r&&a&&(s.child.flags|=8192),vd(s,s.updateQueue),wt(s),null;case 4:return Oe(),r===null&&Km(s.stateNode.containerInfo),wt(s),null;case 10:return Kr(s.type),wt(s),null;case 19:if(ce(jt),d=s.memoizedState,d===null)return wt(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ll(d,!1);else{if(Rt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=hd(r),m!==null){for(s.flags|=128,Ll(d,!1),r=m.updateQueue,s.updateQueue=r,vd(s,r),s.subtreeFlags=0,r=a,a=s.child;a!==null;)a0(a,r),a=a.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Wt()>Sd&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304)}else{if(!c)if(r=hd(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,vd(s,r),Ll(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Je)return wt(s),null}else 2*Wt()-d.renderingStartTime>Sd&&a!==536870912&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Wt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(wt(s),null);case 22:case 23:return Zr(s),Zp(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(a&536870912)!==0&&(s.flags&128)===0&&(wt(s),s.subtreeFlags&6&&(s.flags|=8192)):wt(s),a=s.updateQueue,a!==null&&vd(s,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==a&&(s.flags|=2048),r!==null&&ce(Vs),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Kr(Pt),wt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function YO(r,s){switch(Up(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Kr(Pt),Oe(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return _t(s),null;case 13:if(Zr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));_l()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return ce(jt),null;case 4:return Oe(),null;case 10:return Kr(s.type),null;case 22:case 23:return Zr(s),Zp(),r!==null&&ce(Vs),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Kr(Pt),null;case 25:return null;default:return null}}function MS(r,s){switch(Up(s),s.tag){case 3:Kr(Pt),Oe();break;case 26:case 27:case 5:_t(s);break;case 4:Oe();break;case 13:Zr(s);break;case 19:ce(jt);break;case 10:Kr(s.type);break;case 22:case 23:Zr(s),Zp(),r!==null&&ce(Vs);break;case 24:Kr(Pt)}}function Pl(r,s){try{var a=s.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&r)===r){c=void 0;var m=a.create,S=a.inst;c=m(),S.destroy=c}a=a.next}while(a!==d)}}catch(x){dt(s,s.return,x)}}function ji(r,s,a){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var S=c.inst,x=S.destroy;if(x!==void 0){S.destroy=void 0,d=s;var L=a,Q=x;try{Q()}catch(re){dt(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){dt(s,s.return,re)}}function LS(r){var s=r.updateQueue;if(s!==null){var a=r.stateNode;try{w0(s,a)}catch(c){dt(r,r.return,c)}}}function PS(r,s,a){a.props=Ys(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(c){dt(r,s,c)}}function jl(r,s){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof a=="function"?r.refCleanup=a(c):a.current=c}}catch(d){dt(r,s,d)}}function Rr(r,s){var a=r.ref,c=r.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(d){dt(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){dt(r,s,d)}else a.current=null}function jS(r){var s=r.type,a=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(d){dt(r,r.return,d)}}function Cm(r,s,a){try{var c=r.stateNode;pk(c,r.type,a,s),c[fe]=s}catch(d){dt(r,r.return,d)}}function US(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Vi(r.type)||r.tag===4}function Rm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||US(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Vi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Am(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(r),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Dd));else if(c!==4&&(c===27&&Vi(r.type)&&(a=r.stateNode,s=null),r=r.child,r!==null))for(Am(r,s,a),r=r.sibling;r!==null;)Am(r,s,a),r=r.sibling}function _d(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(c===27&&Vi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(_d(r,s,a),r=r.sibling;r!==null;)_d(r,s,a),r=r.sibling}function $S(r){var s=r.stateNode,a=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Zt(s,c,a),s[ue]=r,s[fe]=a}catch(m){dt(r,r.return,m)}}var ti=!1,Ot=!1,Im=!1,zS=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function WO(r,s){if(r=r.containerInfo,Jm=jd,r=Xb(r),Rp(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var S=0,x=-1,L=-1,Q=0,re=0,ae=r,X=null;t:for(;;){for(var Z;ae!==a||d!==0&&ae.nodeType!==3||(x=S+d),ae!==m||c!==0&&ae.nodeType!==3||(L=S+c),ae.nodeType===3&&(S+=ae.nodeValue.length),(Z=ae.firstChild)!==null;)X=ae,ae=Z;for(;;){if(ae===r)break t;if(X===a&&++Q===d&&(x=S),X===m&&++re===c&&(L=S),(Z=ae.nextSibling)!==null)break;ae=X,X=ae.parentNode}ae=Z}a=x===-1||L===-1?null:{start:x,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(eg={focusedElem:r,selectionRange:a},jd=!1,Bt=s;Bt!==null;)if(s=Bt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Bt=r;else for(;Bt!==null;){switch(s=Bt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,a=s,d=m.memoizedProps,m=m.memoizedState,c=a.stateNode;try{var Me=Ys(a.type,d,a.elementType===a.type);r=c.getSnapshotBeforeUpdate(Me,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Re){dt(a,a.return,Re)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,a=r.nodeType,a===9)rg(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":rg(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Bt=r;break}Bt=s.return}}function BS(r,s,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:Ui(r,a),c&4&&Pl(5,a);break;case 1:if(Ui(r,a),c&4)if(r=a.stateNode,s===null)try{r.componentDidMount()}catch(S){dt(a,a.return,S)}else{var d=Ys(a.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(S){dt(a,a.return,S)}}c&64&&LS(a),c&512&&jl(a,a.return);break;case 3:if(Ui(r,a),c&64&&(r=a.updateQueue,r!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{w0(r,s)}catch(S){dt(a,a.return,S)}}break;case 27:s===null&&c&4&&$S(a);case 26:case 5:Ui(r,a),s===null&&c&4&&jS(a),c&512&&jl(a,a.return);break;case 12:Ui(r,a);break;case 13:Ui(r,a),c&4&&qS(r,a),c&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=rk.bind(null,a),Sk(r,a))));break;case 22:if(c=a.memoizedState!==null||ti,!c){s=s!==null&&s.memoizedState!==null||Ot,d=ti;var m=Ot;ti=c,(Ot=s)&&!m?$i(r,a,(a.subtreeFlags&8772)!==0):Ui(r,a),ti=d,Ot=m}break;case 30:break;default:Ui(r,a)}}function HS(r){var s=r.alternate;s!==null&&(r.alternate=null,HS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var vt=null,yn=!1;function ni(r,s,a){for(a=a.child;a!==null;)FS(r,s,a),a=a.sibling}function FS(r,s,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(hn,a)}catch{}switch(a.tag){case 26:Ot||Rr(a,s),ni(r,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||Rr(a,s);var c=vt,d=yn;Vi(a.type)&&(vt=a.stateNode,yn=!1),ni(r,s,a),Gl(a.stateNode),vt=c,yn=d;break;case 5:Ot||Rr(a,s);case 6:if(c=vt,d=yn,vt=null,ni(r,s,a),vt=c,yn=d,vt!==null)if(yn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(m){dt(a,s,m)}else try{vt.removeChild(a.stateNode)}catch(m){dt(a,s,m)}break;case 18:vt!==null&&(yn?(r=vt,O1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),ec(r)):O1(vt,a.stateNode));break;case 4:c=vt,d=yn,vt=a.stateNode.containerInfo,yn=!0,ni(r,s,a),vt=c,yn=d;break;case 0:case 11:case 14:case 15:Ot||ji(2,a,s),Ot||ji(4,a,s),ni(r,s,a);break;case 1:Ot||(Rr(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"&&PS(a,s,c)),ni(r,s,a);break;case 21:ni(r,s,a);break;case 22:Ot=(c=Ot)||a.memoizedState!==null,ni(r,s,a),Ot=c;break;default:ni(r,s,a)}}function qS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{ec(r)}catch(a){dt(s,s.return,a)}}function QO(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new zS),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new zS),s;default:throw Error(i(435,r.tag))}}function Dm(r,s){var a=QO(r);s.forEach(function(c){var d=ik.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}function Cn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c],m=r,S=s,x=S;e:for(;x!==null;){switch(x.tag){case 27:if(Vi(x.type)){vt=x.stateNode,yn=!1;break e}break;case 5:vt=x.stateNode,yn=!1;break e;case 3:case 4:vt=x.stateNode.containerInfo,yn=!0;break e}x=x.return}if(vt===null)throw Error(i(160));FS(m,S,d),vt=null,yn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)VS(s,r),s=s.sibling}var ar=null;function VS(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Cn(s,r),Rn(r),c&4&&(ji(3,r,r.return),Pl(3,r),ji(5,r,r.return));break;case 1:Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),c&64&&ti&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var d=ar;if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),c&4){var m=a!==null?a.memoizedState:null;if(c=r.memoizedState,a===null)if(c===null)if(r.stateNode===null){e:{c=r.type,a=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ue]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Zt(m,c,a),m[ue]=r,Le(m),c=m;break e;case"link":var S=$1("link","href",d).get(c+(a.href||""));if(S){for(var x=0;x<S.length;x++)if(m=S[x],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(x,1);break t}}m=d.createElement(c),Zt(m,c,a),d.head.appendChild(m);break;case"meta":if(S=$1("meta","content",d).get(c+(a.content||""))){for(x=0;x<S.length;x++)if(m=S[x],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(x,1);break t}}m=d.createElement(c),Zt(m,c,a),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ue]=r,Le(m),c=m}r.stateNode=c}else z1(d,r.type,r.stateNode);else r.stateNode=U1(d,c,r.memoizedProps);else m!==c?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,c===null?z1(d,r.type,r.stateNode):U1(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Cm(r,r.memoizedProps,a.memoizedProps)}break;case 27:Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),a!==null&&c&4&&Cm(r,r.memoizedProps,a.memoizedProps);break;case 5:if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),r.flags&32){d=r.stateNode;try{jo(d,"")}catch(Z){dt(r,r.return,Z)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,Cm(r,d,a!==null?a.memoizedProps:d)),c&1024&&(Im=!0);break;case 6:if(Cn(s,r),Rn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,a=r.stateNode;try{a.nodeValue=c}catch(Z){dt(r,r.return,Z)}}break;case 3:if(Md=null,d=ar,ar=kd(s.containerInfo),Cn(s,r),ar=d,Rn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ec(s.containerInfo)}catch(Z){dt(r,r.return,Z)}Im&&(Im=!1,GS(r));break;case 4:c=ar,ar=kd(r.stateNode.containerInfo),Cn(s,r),Rn(r),ar=c;break;case 12:Cn(s,r),Rn(r);break;case 13:Cn(s,r),Rn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pm=Wt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Dm(r,c)));break;case 22:d=r.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,Q=ti,re=Ot;if(ti=Q||d,Ot=re||L,Cn(s,r),Ot=re,ti=Q,Rn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(a===null||L||ti||Ot||Ws(r)),a=null,s=r;;){if(s.tag===5||s.tag===26){if(a===null){L=a=s;try{if(m=L.stateNode,d)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{x=L.stateNode;var ae=L.memoizedProps.style,X=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;x.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Z){dt(L,L.return,Z)}}}else if(s.tag===6){if(a===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(Z){dt(L,L.return,Z)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,Dm(r,a))));break;case 19:Cn(s,r),Rn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Dm(r,c)));break;case 30:break;case 21:break;default:Cn(s,r),Rn(r)}}function Rn(r){var s=r.flags;if(s&2){try{for(var a,c=r.return;c!==null;){if(US(c)){a=c;break}c=c.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var d=a.stateNode,m=Rm(r);_d(r,m,d);break;case 5:var S=a.stateNode;a.flags&32&&(jo(S,""),a.flags&=-33);var x=Rm(r);_d(r,x,S);break;case 3:case 4:var L=a.stateNode.containerInfo,Q=Rm(r);Am(r,Q,L);break;default:throw Error(i(161))}}catch(re){dt(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function GS(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;GS(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Ui(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)BS(r,s.alternate,s),s=s.sibling}function Ws(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:ji(4,s,s.return),Ws(s);break;case 1:Rr(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&PS(s,s.return,a),Ws(s);break;case 27:Gl(s.stateNode);case 26:case 5:Rr(s,s.return),Ws(s);break;case 22:s.memoizedState===null&&Ws(s);break;case 30:Ws(s);break;default:Ws(s)}r=r.sibling}}function $i(r,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:$i(d,m,a),Pl(4,m);break;case 1:if($i(d,m,a),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){dt(c,c.return,Q)}if(c=m,d=c.updateQueue,d!==null){var x=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)S0(L[d],x)}catch(Q){dt(c,c.return,Q)}}a&&S&64&&LS(m),jl(m,m.return);break;case 27:$S(m);case 26:case 5:$i(d,m,a),a&&c===null&&S&4&&jS(m),jl(m,m.return);break;case 12:$i(d,m,a);break;case 13:$i(d,m,a),a&&S&4&&qS(d,m);break;case 22:m.memoizedState===null&&$i(d,m,a),jl(m,m.return);break;case 30:break;default:$i(d,m,a)}s=s.sibling}}function Om(r,s){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&wl(a))}function km(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&wl(r))}function Ar(r,s,a,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)YS(r,s,a,c),s=s.sibling}function YS(r,s,a,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Ar(r,s,a,c),d&2048&&Pl(9,s);break;case 1:Ar(r,s,a,c);break;case 3:Ar(r,s,a,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&wl(r)));break;case 12:if(d&2048){Ar(r,s,a,c),r=s.stateNode;try{var m=s.memoizedProps,S=m.id,x=m.onPostCommit;typeof x=="function"&&x(S,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){dt(s,s.return,L)}}else Ar(r,s,a,c);break;case 13:Ar(r,s,a,c);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?Ar(r,s,a,c):Ul(r,s):m._visibility&2?Ar(r,s,a,c):(m._visibility|=2,na(r,s,a,c,(s.subtreeFlags&10256)!==0)),d&2048&&Om(S,s);break;case 24:Ar(r,s,a,c),d&2048&&km(s.alternate,s);break;default:Ar(r,s,a,c)}}function na(r,s,a,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,S=s,x=a,L=c,Q=S.flags;switch(S.tag){case 0:case 11:case 15:na(m,S,x,L,d),Pl(8,S);break;case 23:break;case 22:var re=S.stateNode;S.memoizedState!==null?re._visibility&2?na(m,S,x,L,d):Ul(m,S):(re._visibility|=2,na(m,S,x,L,d)),d&&Q&2048&&Om(S.alternate,S);break;case 24:na(m,S,x,L,d),d&&Q&2048&&km(S.alternate,S);break;default:na(m,S,x,L,d)}s=s.sibling}}function Ul(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=r,c=s,d=c.flags;switch(c.tag){case 22:Ul(a,c),d&2048&&Om(c.alternate,c);break;case 24:Ul(a,c),d&2048&&km(c.alternate,c);break;default:Ul(a,c)}s=s.sibling}}var $l=8192;function ra(r){if(r.subtreeFlags&$l)for(r=r.child;r!==null;)WS(r),r=r.sibling}function WS(r){switch(r.tag){case 26:ra(r),r.flags&$l&&r.memoizedState!==null&&Mk(ar,r.memoizedState,r.memoizedProps);break;case 5:ra(r);break;case 3:case 4:var s=ar;ar=kd(r.stateNode.containerInfo),ra(r),ar=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=$l,$l=16777216,ra(r),$l=s):ra(r));break;default:ra(r)}}function QS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function zl(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,XS(c,r)}QS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)KS(r),r=r.sibling}function KS(r){switch(r.tag){case 0:case 11:case 15:zl(r),r.flags&2048&&ji(9,r,r.return);break;case 3:zl(r);break;case 12:zl(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,bd(r)):zl(r);break;default:zl(r)}}function bd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,XS(c,r)}QS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:ji(8,s,s.return),bd(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,bd(s));break;default:bd(s)}r=r.sibling}}function XS(r,s){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:ji(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:wl(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,Bt=c;else e:for(a=r;Bt!==null;){c=Bt;var d=c.sibling,m=c.return;if(HS(c),c===a){Bt=null;break e}if(d!==null){d.return=m,Bt=d;break e}Bt=m}}}var KO={getCacheForType:function(r){var s=sn(Pt),a=s.data.get(r);return a===void 0&&(a=r(),s.data.set(r,a)),a}},XO=typeof WeakMap=="function"?WeakMap:Map,rt=0,ft=null,Ge=null,Qe=0,it=0,An=null,zi=!1,ia=!1,Nm=!1,ri=0,Rt=0,Bi=0,Qs=0,Mm=0,Vn=0,sa=0,Bl=null,vn=null,Lm=!1,Pm=0,Sd=1/0,wd=null,Hi=null,Xt=0,Fi=null,oa=null,aa=0,jm=0,Um=null,ZS=null,Hl=0,$m=null;function In(){if((rt&2)!==0&&Qe!==0)return Qe&-Qe;if(j.T!==null){var r=Wo;return r!==0?r:Gm()}return U()}function JS(){Vn===0&&(Vn=(Qe&536870912)===0||Je?No():536870912);var r=qn.current;return r!==null&&(r.flags|=32),Vn}function Dn(r,s,a){(r===ft&&(it===2||it===9)||r.cancelPendingCommit!==null)&&(la(r,0),qi(r,Qe,Vn,!1)),ks(r,a),((rt&2)===0||r!==ft)&&(r===ft&&((rt&2)===0&&(Qs|=a),Rt===4&&qi(r,Qe,Vn,!1)),Ir(r))}function e1(r,s,a){if((rt&6)!==0)throw Error(i(327));var c=!a&&(s&124)===0&&(s&r.expiredLanes)===0||xr(r,s),d=c?ek(r,s):Hm(r,s,!0),m=c;do{if(d===0){ia&&!c&&qi(r,s,0,!1);break}else{if(a=r.current.alternate,m&&!ZO(a)){d=Hm(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var S=0;else S=r.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var x=r;d=Bl;var L=x.current.memoizedState.isDehydrated;if(L&&(la(x,S).flags|=256),S=Hm(x,S,!1),S!==2){if(Nm&&!L){x.errorRecoveryDisabledLanes|=m,Qs|=m,d=4;break e}m=vn,vn=d,m!==null&&(vn===null?vn=m:vn.push.apply(vn,m))}d=S}if(m=!1,d!==2)continue}}if(d===1){la(r,0),qi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:qi(c,s,Vn,!zi);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Pm+300-Wt(),10<d)){if(qi(c,s,Vn,!zi),Os(c,0,!0)!==0)break e;c.timeoutHandle=I1(t1.bind(null,c,a,vn,wd,Lm,s,Vn,Qs,sa,zi,m,2,-0,0),d);break e}t1(c,a,vn,wd,Lm,s,Vn,Qs,sa,zi,m,0,-0,0)}}break}while(!0);Ir(r)}function t1(r,s,a,c,d,m,S,x,L,Q,re,ae,X,Z){if(r.timeoutHandle=-1,ae=s.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:Nk},WS(s),ae=Lk(),ae!==null)){r.cancelPendingCommit=ae(l1.bind(null,r,s,m,a,c,d,S,x,L,re,1,X,Z)),qi(r,m,S,!Q);return}l1(r,s,m,a,c,d,S,x,L)}function ZO(r){for(var s=r;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!En(m(),d))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function qi(r,s,a,c){s&=~Mm,s&=~Qs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Qt(d),S=1<<m;c[m]=-1,d&=~S}a!==0&&Ns(r,a,s)}function xd(){return(rt&6)===0?(Fl(0),!1):!0}function zm(){if(Ge!==null){if(it===0)var r=Ge.return;else r=Ge,Qr=Fs=null,rm(r),ea=null,Nl=0,r=Ge;for(;r!==null;)MS(r.alternate,r),r=r.return;Ge=null}}function la(r,s){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,gk(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),zm(),ft=r,Ge=a=Gr(r.current,null),Qe=s,it=0,An=null,zi=!1,ia=xr(r,s),Nm=!1,sa=Vn=Mm=Qs=Bi=Rt=0,vn=Bl=null,Lm=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Qt(c),m=1<<d;s|=r[d],c&=~m}return ri=s,Vu(),a}function n1(r,s){He=null,j.H=ud,s===El||s===ed?(s=_0(),it=3):s===g0?(s=_0(),it=4):it=s===bS?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Ge===null&&(Rt=1,md(r,zn(s,r.current)))}function r1(){var r=j.H;return j.H=ud,r===null?ud:r}function i1(){var r=j.A;return j.A=KO,r}function Bm(){Rt=4,zi||(Qe&4194048)!==Qe&&qn.current!==null||(ia=!0),(Bi&134217727)===0&&(Qs&134217727)===0||ft===null||qi(ft,Qe,Vn,!1)}function Hm(r,s,a){var c=rt;rt|=2;var d=r1(),m=i1();(ft!==r||Qe!==s)&&(wd=null,la(r,s)),s=!1;var S=Rt;e:do try{if(it!==0&&Ge!==null){var x=Ge,L=An;switch(it){case 8:zm(),S=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(s=!0);var Q=it;if(it=0,An=null,ca(r,x,L,Q),a&&ia){S=0;break e}break;default:Q=it,it=0,An=null,ca(r,x,L,Q)}}JO(),S=Rt;break}catch(re){n1(r,re)}while(!0);return s&&r.shellSuspendCounter++,Qr=Fs=null,rt=c,j.H=d,j.A=m,Ge===null&&(ft=null,Qe=0,Vu()),S}function JO(){for(;Ge!==null;)s1(Ge)}function ek(r,s){var a=rt;rt|=2;var c=r1(),d=i1();ft!==r||Qe!==s?(wd=null,Sd=Wt()+500,la(r,s)):ia=xr(r,s);e:do try{if(it!==0&&Ge!==null){s=Ge;var m=An;t:switch(it){case 1:it=0,An=null,ca(r,s,m,1);break;case 2:case 9:if(y0(m)){it=0,An=null,o1(s);break}s=function(){it!==2&&it!==9||ft!==r||(it=7),Ir(r)},m.then(s,s);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:y0(m)?(it=0,An=null,o1(s)):(it=0,An=null,ca(r,s,m,7));break;case 5:var S=null;switch(Ge.tag){case 26:S=Ge.memoizedState;case 5:case 27:var x=Ge;if(!S||B1(S)){it=0,An=null;var L=x.sibling;if(L!==null)Ge=L;else{var Q=x.return;Q!==null?(Ge=Q,Ed(Q)):Ge=null}break t}}it=0,An=null,ca(r,s,m,5);break;case 6:it=0,An=null,ca(r,s,m,6);break;case 8:zm(),Rt=6;break e;default:throw Error(i(462))}}tk();break}catch(re){n1(r,re)}while(!0);return Qr=Fs=null,j.H=c,j.A=d,rt=a,Ge!==null?0:(ft=null,Qe=0,Vu(),Rt)}function tk(){for(;Ge!==null&&!Pn();)s1(Ge)}function s1(r){var s=kS(r.alternate,r,ri);r.memoizedProps=r.pendingProps,s===null?Ed(r):Ge=s}function o1(r){var s=r,a=s.alternate;switch(s.tag){case 15:case 0:s=CS(a,s,s.pendingProps,s.type,void 0,Qe);break;case 11:s=CS(a,s,s.pendingProps,s.type.render,s.ref,Qe);break;case 5:rm(s);default:MS(a,s),s=Ge=a0(s,ri),s=kS(a,s,ri)}r.memoizedProps=r.pendingProps,s===null?Ed(r):Ge=s}function ca(r,s,a,c){Qr=Fs=null,rm(s),ea=null,Nl=0;var d=s.return;try{if(qO(r,d,s,a,Qe)){Rt=1,md(r,zn(a,r.current)),Ge=null;return}}catch(m){if(d!==null)throw Ge=d,m;Rt=1,md(r,zn(a,r.current)),Ge=null;return}s.flags&32768?(Je||c===1?r=!0:ia||(Qe&536870912)!==0?r=!1:(zi=r=!0,(c===2||c===9||c===3||c===6)&&(c=qn.current,c!==null&&c.tag===13&&(c.flags|=16384))),a1(s,r)):Ed(s)}function Ed(r){var s=r;do{if((s.flags&32768)!==0){a1(s,zi);return}r=s.return;var a=GO(s.alternate,s,ri);if(a!==null){Ge=a;return}if(s=s.sibling,s!==null){Ge=s;return}Ge=s=r}while(s!==null);Rt===0&&(Rt=5)}function a1(r,s){do{var a=YO(r.alternate,r);if(a!==null){a.flags&=32767,Ge=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(r=r.sibling,r!==null)){Ge=r;return}Ge=r=a}while(r!==null);Rt=6,Ge=null}function l1(r,s,a,c,d,m,S,x,L){r.cancelPendingCommit=null;do Td();while(Xt!==0);if((rt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=kp,Nu(r,a,m,S,x,L),r===ft&&(Ge=ft=null,Qe=0),oa=s,Fi=r,aa=a,jm=m,Um=d,ZS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,sk(ko,function(){return h1(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=j.T,j.T=null,d=J.p,J.p=2,S=rt,rt|=4;try{WO(r,s,a)}finally{rt=S,J.p=d,j.T=c}}Xt=1,c1(),u1(),d1()}}function c1(){if(Xt===1){Xt=0;var r=Fi,s=oa,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var c=J.p;J.p=2;var d=rt;rt|=4;try{VS(s,r);var m=eg,S=Xb(r.containerInfo),x=m.focusedElem,L=m.selectionRange;if(S!==x&&x&&x.ownerDocument&&Kb(x.ownerDocument.documentElement,x)){if(L!==null&&Rp(x)){var Q=L.start,re=L.end;if(re===void 0&&(re=Q),"selectionStart"in x)x.selectionStart=Q,x.selectionEnd=Math.min(re,x.value.length);else{var ae=x.ownerDocument||document,X=ae&&ae.defaultView||window;if(X.getSelection){var Z=X.getSelection(),Me=x.textContent.length,Re=Math.min(L.start,Me),lt=L.end===void 0?Re:Math.min(L.end,Me);!Z.extend&&Re>lt&&(S=lt,lt=Re,Re=S);var F=Qb(x,Re),$=Qb(x,lt);if(F&&$&&(Z.rangeCount!==1||Z.anchorNode!==F.node||Z.anchorOffset!==F.offset||Z.focusNode!==$.node||Z.focusOffset!==$.offset)){var W=ae.createRange();W.setStart(F.node,F.offset),Z.removeAllRanges(),Re>lt?(Z.addRange(W),Z.extend($.node,$.offset)):(W.setEnd($.node,$.offset),Z.addRange(W))}}}}for(ae=[],Z=x;Z=Z.parentNode;)Z.nodeType===1&&ae.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<ae.length;x++){var se=ae[x];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}jd=!!Jm,eg=Jm=null}finally{rt=d,J.p=c,j.T=a}}r.current=s,Xt=2}}function u1(){if(Xt===2){Xt=0;var r=Fi,s=oa,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var c=J.p;J.p=2;var d=rt;rt|=4;try{BS(r,s.alternate,s)}finally{rt=d,J.p=c,j.T=a}}Xt=3}}function d1(){if(Xt===4||Xt===3){Xt=0,Ur();var r=Fi,s=oa,a=aa,c=ZS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Xt=5:(Xt=0,oa=Fi=null,f1(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Hi=null),ll(a),s=s.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(hn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=j.T,d=J.p,J.p=2,j.T=null;try{for(var m=r.onRecoverableError,S=0;S<c.length;S++){var x=c[S];m(x.value,{componentStack:x.stack})}}finally{j.T=s,J.p=d}}(aa&3)!==0&&Td(),Ir(r),d=r.pendingLanes,(a&4194090)!==0&&(d&42)!==0?r===$m?Hl++:(Hl=0,$m=r):Hl=0,Fl(0)}}function f1(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,wl(s)))}function Td(r){return c1(),u1(),d1(),h1()}function h1(){if(Xt!==5)return!1;var r=Fi,s=jm;jm=0;var a=ll(aa),c=j.T,d=J.p;try{J.p=32>a?32:a,j.T=null,a=Um,Um=null;var m=Fi,S=aa;if(Xt=0,oa=Fi=null,aa=0,(rt&6)!==0)throw Error(i(331));var x=rt;if(rt|=4,KS(m.current),YS(m,m.current,S,a),rt=x,Fl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(hn,m)}catch{}return!0}finally{J.p=d,j.T=c,f1(r,s)}}function p1(r,s,a){s=zn(a,s),s=ym(r.stateNode,s,2),r=Ni(r,s,2),r!==null&&(ks(r,2),Ir(r))}function dt(r,s,a){if(r.tag===3)p1(r,r,a);else for(;s!==null;){if(s.tag===3){p1(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hi===null||!Hi.has(c))){r=zn(a,r),a=vS(2),c=Ni(s,a,2),c!==null&&(_S(a,c,s,r),ks(c,2),Ir(c));break}}s=s.return}}function Fm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new XO;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(Nm=!0,d.add(a),r=nk.bind(null,r,s,a),s.then(r,r))}function nk(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,ft===r&&(Qe&a)===a&&(Rt===4||Rt===3&&(Qe&62914560)===Qe&&300>Wt()-Pm?(rt&2)===0&&la(r,0):Mm|=a,sa===Qe&&(sa=0)),Ir(r)}function m1(r,s){s===0&&(s=ku()),r=qo(r,s),r!==null&&(ks(r,s),Ir(r))}function rk(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),m1(r,a)}function ik(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),m1(r,a)}function sk(r,s){return Ln(r,s)}var Cd=null,ua=null,qm=!1,Rd=!1,Vm=!1,Ks=0;function Ir(r){r!==ua&&r.next===null&&(ua===null?Cd=ua=r:ua=ua.next=r),Rd=!0,qm||(qm=!0,ak())}function Fl(r,s){if(!Vm&&Rd){Vm=!0;do for(var a=!1,c=Cd;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var S=c.suspendedLanes,x=c.pingedLanes;m=(1<<31-Qt(42|r)+1)-1,m&=d&~(S&~x),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,_1(c,m))}else m=Qe,m=Os(c,c===ft?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||xr(c,m)||(a=!0,_1(c,m));c=c.next}while(a);Vm=!1}}function ok(){g1()}function g1(){Rd=qm=!1;var r=0;Ks!==0&&(mk()&&(r=Ks),Ks=0);for(var s=Wt(),a=null,c=Cd;c!==null;){var d=c.next,m=y1(c,s);m===0?(c.next=null,a===null?Cd=d:a.next=d,d===null&&(ua=a)):(a=c,(r!==0||(m&3)!==0)&&(Rd=!0)),c=d}Fl(r)}function y1(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var S=31-Qt(m),x=1<<S,L=d[S];L===-1?((x&a)===0||(x&c)!==0)&&(d[S]=Ou(x,s)):L<=s&&(r.expiredLanes|=x),m&=~x}if(s=ft,a=Qe,a=Os(r,r===s?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,a===0||r===s&&(it===2||it===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Et(c),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||xr(r,a)){if(s=a&-a,s===r.callbackPriority)return s;switch(c!==null&&Et(c),ll(a)){case 2:case 8:a=Oo;break;case 32:a=ko;break;case 268435456:a=Ci;break;default:a=ko}return c=v1.bind(null,r),a=Ln(a,c),r.callbackPriority=s,r.callbackNode=a,s}return c!==null&&c!==null&&Et(c),r.callbackPriority=2,r.callbackNode=null,2}function v1(r,s){if(Xt!==0&&Xt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(Td()&&r.callbackNode!==a)return null;var c=Qe;return c=Os(r,r===ft?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(e1(r,c,s),y1(r,Wt()),r.callbackNode!=null&&r.callbackNode===a?v1.bind(null,r):null)}function _1(r,s){if(Td())return null;e1(r,s,!0)}function ak(){yk(function(){(rt&6)!==0?Ln(As,ok):g1()})}function Gm(){return Ks===0&&(Ks=No()),Ks}function b1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Uu(""+r)}function S1(r,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,r.id&&a.setAttribute("form",r.id),s.parentNode.insertBefore(a,s),r=new FormData(r),a.parentNode.removeChild(a),r}function lk(r,s,a,c,d){if(s==="submit"&&a&&a.stateNode===d){var m=b1((d[fe]||null).action),S=c.submitter;S&&(s=(s=S[fe]||null)?b1(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var x=new Hu("action","action",null,c,d);r.push({event:x,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ks!==0){var L=S?S1(d,S):new FormData(d);fm(a,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(x.preventDefault(),L=S?S1(d,S):new FormData(d),fm(a,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Ym=0;Ym<Op.length;Ym++){var Wm=Op[Ym],ck=Wm.toLowerCase(),uk=Wm[0].toUpperCase()+Wm.slice(1);or(ck,"on"+uk)}or(e0,"onAnimationEnd"),or(t0,"onAnimationIteration"),or(n0,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(RO,"onTransitionRun"),or(AO,"onTransitionStart"),or(IO,"onTransitionCancel"),or(r0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dk=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function w1(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var S=c.length-1;0<=S;S--){var x=c[S],L=x.instance,Q=x.currentTarget;if(x=x.listener,L!==m&&d.isPropagationStopped())break e;m=x,d.currentTarget=Q;try{m(d)}catch(re){pd(re)}d.currentTarget=null,m=L}else for(S=0;S<c.length;S++){if(x=c[S],L=x.instance,Q=x.currentTarget,x=x.listener,L!==m&&d.isPropagationStopped())break e;m=x,d.currentTarget=Q;try{m(d)}catch(re){pd(re)}d.currentTarget=null,m=L}}}}function Ye(r,s){var a=s[we];a===void 0&&(a=s[we]=new Set);var c=r+"__bubble";a.has(c)||(x1(s,r,2,!1),a.add(c))}function Qm(r,s,a){var c=0;s&&(c|=4),x1(a,r,c,s)}var Ad="_reactListening"+Math.random().toString(36).slice(2);function Km(r){if(!r[Ad]){r[Ad]=!0,st.forEach(function(a){a!=="selectionchange"&&(dk.has(a)||Qm(a,!1,r),Qm(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ad]||(s[Ad]=!0,Qm("selectionchange",!1,s))}}function x1(r,s,a,c){switch(Y1(s)){case 2:var d=Uk;break;case 8:d=$k;break;default:d=ug}a=d.bind(null,s,a,r),d=void 0,!vp||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Xm(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var x=c.stateNode.containerInfo;if(x===d)break;if(S===4)for(S=c.return;S!==null;){var L=S.tag;if((L===3||L===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;x!==null;){if(S=ze(x),S===null)return;if(L=S.tag,L===5||L===6||L===26||L===27){c=m=S;continue e}x=x.parentNode}}c=c.return}Db(function(){var Q=m,re=gp(a),ae=[];e:{var X=i0.get(r);if(X!==void 0){var Z=Hu,Me=r;switch(r){case"keypress":if(zu(a)===0)break e;case"keydown":case"keyup":Z=sO;break;case"focusin":Me="focus",Z=wp;break;case"focusout":Me="blur",Z=wp;break;case"beforeblur":case"afterblur":Z=wp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Nb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=YD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=lO;break;case e0:case t0:case n0:Z=KD;break;case r0:Z=uO;break;case"scroll":case"scrollend":Z=VD;break;case"wheel":Z=fO;break;case"copy":case"cut":case"paste":Z=ZD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Lb;break;case"toggle":case"beforetoggle":Z=pO}var Re=(s&4)!==0,lt=!Re&&(r==="scroll"||r==="scrollend"),F=Re?X!==null?X+"Capture":null:X;Re=[];for(var $=Q,W;$!==null;){var se=$;if(W=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||W===null||F===null||(se=cl($,F),se!=null&&Re.push(Vl($,se,W))),lt)break;$=$.return}0<Re.length&&(X=new Z(X,Me,null,a,re),ae.push({event:X,listeners:Re}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",X&&a!==mp&&(Me=a.relatedTarget||a.fromElement)&&(ze(Me)||Me[ye]))break e;if((Z||X)&&(X=re.window===re?re:(X=re.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(Me=a.relatedTarget||a.toElement,Z=Q,Me=Me?ze(Me):null,Me!==null&&(lt=l(Me),Re=Me.tag,Me!==lt||Re!==5&&Re!==27&&Re!==6)&&(Me=null)):(Z=null,Me=Q),Z!==Me)){if(Re=Nb,se="onMouseLeave",F="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(Re=Lb,se="onPointerLeave",F="onPointerEnter",$="pointer"),lt=Z==null?X:yt(Z),W=Me==null?X:yt(Me),X=new Re(se,$+"leave",Z,a,re),X.target=lt,X.relatedTarget=W,se=null,ze(re)===Q&&(Re=new Re(F,$+"enter",Me,a,re),Re.target=W,Re.relatedTarget=lt,se=Re),lt=se,Z&&Me)t:{for(Re=Z,F=Me,$=0,W=Re;W;W=da(W))$++;for(W=0,se=F;se;se=da(se))W++;for(;0<$-W;)Re=da(Re),$--;for(;0<W-$;)F=da(F),W--;for(;$--;){if(Re===F||F!==null&&Re===F.alternate)break t;Re=da(Re),F=da(F)}Re=null}else Re=null;Z!==null&&E1(ae,X,Z,Re,!1),Me!==null&&lt!==null&&E1(ae,lt,Me,Re,!0)}}e:{if(X=Q?yt(Q):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var ge=Fb;else if(Bb(X))if(qb)ge=EO;else{ge=wO;var Fe=SO}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?Q&&pp(Q.elementType)&&(ge=Fb):ge=xO;if(ge&&(ge=ge(r,Q))){Hb(ae,ge,a,re);break e}Fe&&Fe(r,X,Q),r==="focusout"&&Q&&X.type==="number"&&Q.memoizedProps.value!=null&&hp(X,"number",X.value)}switch(Fe=Q?yt(Q):window,r){case"focusin":(Bb(Fe)||Fe.contentEditable==="true")&&(Bo=Fe,Ap=Q,yl=null);break;case"focusout":yl=Ap=Bo=null;break;case"mousedown":Ip=!0;break;case"contextmenu":case"mouseup":case"dragend":Ip=!1,Zb(ae,a,re);break;case"selectionchange":if(CO)break;case"keydown":case"keyup":Zb(ae,a,re)}var xe;if(Ep)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else zo?$b(r,a)&&(Ie="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(Pb&&a.locale!=="ko"&&(zo||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&zo&&(xe=Ob()):(Ii=re,_p="value"in Ii?Ii.value:Ii.textContent,zo=!0)),Fe=Id(Q,Ie),0<Fe.length&&(Ie=new Mb(Ie,r,null,a,re),ae.push({event:Ie,listeners:Fe}),xe?Ie.data=xe:(xe=zb(a),xe!==null&&(Ie.data=xe)))),(xe=gO?yO(r,a):vO(r,a))&&(Ie=Id(Q,"onBeforeInput"),0<Ie.length&&(Fe=new Mb("onBeforeInput","beforeinput",null,a,re),ae.push({event:Fe,listeners:Ie}),Fe.data=xe)),lk(ae,r,Q,a,re)}w1(ae,s)})}function Vl(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Id(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=cl(r,a),d!=null&&c.unshift(Vl(r,d,m)),d=cl(r,s),d!=null&&c.push(Vl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function da(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function E1(r,s,a,c,d){for(var m=s._reactName,S=[];a!==null&&a!==c;){var x=a,L=x.alternate,Q=x.stateNode;if(x=x.tag,L!==null&&L===c)break;x!==5&&x!==26&&x!==27||Q===null||(L=Q,d?(Q=cl(a,m),Q!=null&&S.unshift(Vl(a,Q,L))):d||(Q=cl(a,m),Q!=null&&S.push(Vl(a,Q,L)))),a=a.return}S.length!==0&&r.push({event:s,listeners:S})}var fk=/\r\n?/g,hk=/\u0000|\uFFFD/g;function T1(r){return(typeof r=="string"?r:""+r).replace(fk,`
`).replace(hk,"")}function C1(r,s){return s=T1(s),T1(r)===s}function Dd(){}function at(r,s,a,c,d,m){switch(a){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||jo(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&jo(r,""+c);break;case"className":Fr(r,"class",c);break;case"tabIndex":Fr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Fr(r,a,c);break;case"style":Ab(r,c,m);break;case"data":if(s!=="object"){Fr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||a!=="href")){r.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Uu(""+c),r.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(s!=="input"&&at(r,s,"name",d.name,d,null),at(r,s,"formEncType",d.formEncType,d,null),at(r,s,"formMethod",d.formMethod,d,null),at(r,s,"formTarget",d.formTarget,d,null)):(at(r,s,"encType",d.encType,d,null),at(r,s,"method",d.method,d,null),at(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Uu(""+c),r.setAttribute(a,c);break;case"onClick":c!=null&&(r.onclick=Dd);break;case"onScroll":c!=null&&Ye("scroll",r);break;case"onScrollEnd":c!=null&&Ye("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}a=Uu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""+c):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":c===!0?r.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,c):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(a,c):r.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(a):r.setAttribute(a,c);break;case"popover":Ye("beforetoggle",r),Ye("toggle",r),Hr(r,"popover",c);break;case"xlinkActuate":Pe(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Pe(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Pe(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Pe(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Pe(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Pe(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Hr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=FD.get(a)||a,Hr(r,a,c))}}function Zm(r,s,a,c,d,m){switch(a){case"style":Ab(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"children":typeof c=="string"?jo(r,c):(typeof c=="number"||typeof c=="bigint")&&jo(r,""+c);break;case"onScroll":c!=null&&Ye("scroll",r);break;case"onScrollEnd":c!=null&&Ye("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Dd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),s=a.slice(2,d?a.length-7:void 0),m=r[fe]||null,m=m!=null?m[a]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(s,c,d);break e}a in r?r[a]=c:c===!0?r.setAttribute(a,""):Hr(r,a,c)}}}function Zt(r,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",r),Ye("load",r);var c=!1,d=!1,m;for(m in a)if(a.hasOwnProperty(m)){var S=a[m];if(S!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,m,S,a,null)}}d&&at(r,s,"srcSet",a.srcSet,a,null),c&&at(r,s,"src",a.src,a,null);return;case"input":Ye("invalid",r);var x=m=S=d=null,L=null,Q=null;for(c in a)if(a.hasOwnProperty(c)){var re=a[c];if(re!=null)switch(c){case"name":d=re;break;case"type":S=re;break;case"checked":L=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":x=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:at(r,s,c,re,a,null)}}Eb(r,m,x,L,Q,S,d,!1),Pu(r);return;case"select":Ye("invalid",r),c=S=m=null;for(d in a)if(a.hasOwnProperty(d)&&(x=a[d],x!=null))switch(d){case"value":m=x;break;case"defaultValue":S=x;break;case"multiple":c=x;default:at(r,s,d,x,a,null)}s=m,a=S,r.multiple=!!c,s!=null?Po(r,!!c,s,!1):a!=null&&Po(r,!!c,a,!0);return;case"textarea":Ye("invalid",r),m=d=c=null;for(S in a)if(a.hasOwnProperty(S)&&(x=a[S],x!=null))switch(S){case"value":c=x;break;case"defaultValue":d=x;break;case"children":m=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(i(91));break;default:at(r,s,S,x,a,null)}Cb(r,c,d,m),Pu(r);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(c=a[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:at(r,s,L,c,a,null)}return;case"dialog":Ye("beforetoggle",r),Ye("toggle",r),Ye("cancel",r),Ye("close",r);break;case"iframe":case"object":Ye("load",r);break;case"video":case"audio":for(c=0;c<ql.length;c++)Ye(ql[c],r);break;case"image":Ye("error",r),Ye("load",r);break;case"details":Ye("toggle",r);break;case"embed":case"source":case"link":Ye("error",r),Ye("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(c=a[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,Q,c,a,null)}return;default:if(pp(s)){for(re in a)a.hasOwnProperty(re)&&(c=a[re],c!==void 0&&Zm(r,s,re,c,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(c=a[x],c!=null&&at(r,s,x,c,a,null))}function pk(r,s,a,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,S=null,x=null,L=null,Q=null,re=null;for(Z in a){var ae=a[Z];if(a.hasOwnProperty(Z)&&ae!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":L=ae;default:c.hasOwnProperty(Z)||at(r,s,Z,null,c,ae)}}for(var X in c){var Z=c[X];if(ae=a[X],c.hasOwnProperty(X)&&(Z!=null||ae!=null))switch(X){case"type":m=Z;break;case"name":d=Z;break;case"checked":Q=Z;break;case"defaultChecked":re=Z;break;case"value":S=Z;break;case"defaultValue":x=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:Z!==ae&&at(r,s,X,Z,c,ae)}}fp(r,S,x,L,Q,re,m,d);return;case"select":Z=S=x=X=null;for(m in a)if(L=a[m],a.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":Z=L;default:c.hasOwnProperty(m)||at(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=a[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":X=m;break;case"defaultValue":x=m;break;case"multiple":S=m;default:m!==L&&at(r,s,d,m,c,L)}s=x,a=S,c=Z,X!=null?Po(r,!!a,X,!1):!!c!=!!a&&(s!=null?Po(r,!!a,s,!0):Po(r,!!a,a?[]:"",!1));return;case"textarea":Z=X=null;for(x in a)if(d=a[x],a.hasOwnProperty(x)&&d!=null&&!c.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:at(r,s,x,null,c,d)}for(S in c)if(d=c[S],m=a[S],c.hasOwnProperty(S)&&(d!=null||m!=null))switch(S){case"value":X=d;break;case"defaultValue":Z=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&at(r,s,S,d,c,m)}Tb(r,X,Z);return;case"option":for(var Me in a)if(X=a[Me],a.hasOwnProperty(Me)&&X!=null&&!c.hasOwnProperty(Me))switch(Me){case"selected":r.selected=!1;break;default:at(r,s,Me,null,c,X)}for(L in c)if(X=c[L],Z=a[L],c.hasOwnProperty(L)&&X!==Z&&(X!=null||Z!=null))switch(L){case"selected":r.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:at(r,s,L,X,c,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in a)X=a[Re],a.hasOwnProperty(Re)&&X!=null&&!c.hasOwnProperty(Re)&&at(r,s,Re,null,c,X);for(Q in c)if(X=c[Q],Z=a[Q],c.hasOwnProperty(Q)&&X!==Z&&(X!=null||Z!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:at(r,s,Q,X,c,Z)}return;default:if(pp(s)){for(var lt in a)X=a[lt],a.hasOwnProperty(lt)&&X!==void 0&&!c.hasOwnProperty(lt)&&Zm(r,s,lt,void 0,c,X);for(re in c)X=c[re],Z=a[re],!c.hasOwnProperty(re)||X===Z||X===void 0&&Z===void 0||Zm(r,s,re,X,c,Z);return}}for(var F in a)X=a[F],a.hasOwnProperty(F)&&X!=null&&!c.hasOwnProperty(F)&&at(r,s,F,null,c,X);for(ae in c)X=c[ae],Z=a[ae],!c.hasOwnProperty(ae)||X===Z||X==null&&Z==null||at(r,s,ae,X,c,Z)}var Jm=null,eg=null;function Od(r){return r.nodeType===9?r:r.ownerDocument}function R1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A1(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function tg(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ng=null;function mk(){var r=window.event;return r&&r.type==="popstate"?r===ng?!1:(ng=r,!0):(ng=null,!1)}var I1=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,D1=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof D1<"u"?function(r){return D1.resolve(null).then(r).catch(vk)}:I1;function vk(r){setTimeout(function(){throw r})}function Vi(r){return r==="head"}function O1(r,s){var a=s,c=0,d=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<c&&8>c){a=c;var S=r.ownerDocument;if(a&1&&Gl(S.documentElement),a&2&&Gl(S.body),a&4)for(a=S.head,Gl(a),S=a.firstChild;S;){var x=S.nextSibling,L=S.nodeName;S[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=x}}if(d===0){r.removeChild(m),ec(s);return}d--}else a==="$"||a==="$?"||a==="$!"?d++:c=a.charCodeAt(0)-48;else c=0;a=m}while(a);ec(s)}function rg(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rg(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function _k(r,s,a,c){for(;r.nodeType===1;){var d=a;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=lr(r.nextSibling),r===null)break}return null}function bk(r,s,a){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=lr(r.nextSibling),r===null))return null;return r}function ig(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function Sk(r,s){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")s();else{var c=function(){s(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function lr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var sg=null;function k1(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}function N1(r,s,a){switch(s=Od(a),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Gl(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Gn=new Map,M1=new Set;function kd(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var ii=J.d;J.d={f:wk,r:xk,D:Ek,C:Tk,L:Ck,m:Rk,X:Ik,S:Ak,M:Dk};function wk(){var r=ii.f(),s=xd();return r||s}function xk(r){var s=Ze(r);s!==null&&s.tag===5&&s.type==="form"?eS(s):ii.r(r)}var fa=typeof document>"u"?null:document;function L1(r,s,a){var c=fa;if(c&&typeof s=="string"&&s){var d=$n(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),M1.has(d)||(M1.add(d),r={rel:r,crossOrigin:a,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Zt(s,"link",r),Le(s),c.head.appendChild(s)))}}function Ek(r){ii.D(r),L1("dns-prefetch",r,null)}function Tk(r,s){ii.C(r,s),L1("preconnect",r,s)}function Ck(r,s,a){ii.L(r,s,a);var c=fa;if(c&&r&&s){var d='link[rel="preload"][as="'+$n(s)+'"]';s==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+$n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+$n(a.imageSizes)+'"]')):d+='[href="'+$n(r)+'"]';var m=d;switch(s){case"style":m=ha(r);break;case"script":m=pa(r)}Gn.has(m)||(r=g({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:r,as:s},a),Gn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Yl(m))||s==="script"&&c.querySelector(Wl(m))||(s=c.createElement("link"),Zt(s,"link",r),Le(s),c.head.appendChild(s)))}}function Rk(r,s){ii.m(r,s);var a=fa;if(a&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+$n(c)+'"][href="'+$n(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=pa(r)}if(!Gn.has(m)&&(r=g({rel:"modulepreload",href:r},s),Gn.set(m,r),a.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wl(m)))return}c=a.createElement("link"),Zt(c,"link",r),Le(c),a.head.appendChild(c)}}}function Ak(r,s,a){ii.S(r,s,a);var c=fa;if(c&&r){var d=Tt(c).hoistableStyles,m=ha(r);s=s||"default";var S=d.get(m);if(!S){var x={loading:0,preload:null};if(S=c.querySelector(Yl(m)))x.loading=5;else{r=g({rel:"stylesheet",href:r,"data-precedence":s},a),(a=Gn.get(m))&&og(r,a);var L=S=c.createElement("link");Le(L),Zt(L,"link",r),L._p=new Promise(function(Q,re){L.onload=Q,L.onerror=re}),L.addEventListener("load",function(){x.loading|=1}),L.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Nd(S,s,c)}S={type:"stylesheet",instance:S,count:1,state:x},d.set(m,S)}}}function Ik(r,s){ii.X(r,s);var a=fa;if(a&&r){var c=Tt(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Wl(d)),m||(r=g({src:r,async:!0},s),(s=Gn.get(d))&&ag(r,s),m=a.createElement("script"),Le(m),Zt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function Dk(r,s){ii.M(r,s);var a=fa;if(a&&r){var c=Tt(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Wl(d)),m||(r=g({src:r,async:!0,type:"module"},s),(s=Gn.get(d))&&ag(r,s),m=a.createElement("script"),Le(m),Zt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function P1(r,s,a,c){var d=(d=pe.current)?kd(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=ha(a.href),a=Tt(d).hoistableStyles,c=a.get(s),c||(c={type:"style",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=ha(a.href);var m=Tt(d).hoistableStyles,S=m.get(r);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,S),(m=d.querySelector(Yl(r)))&&!m._p&&(S.instance=m,S.state.loading=5),Gn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gn.set(r,a),m||Ok(d,r,a,S.state))),s&&c===null)throw Error(i(528,""));return S}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=pa(a),a=Tt(d).hoistableScripts,c=a.get(s),c||(c={type:"script",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function ha(r){return'href="'+$n(r)+'"'}function Yl(r){return'link[rel="stylesheet"]['+r+"]"}function j1(r){return g({},r,{"data-precedence":r.precedence,precedence:null})}function Ok(r,s,a,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Zt(s,"link",a),Le(s),r.head.appendChild(s))}function pa(r){return'[src="'+$n(r)+'"]'}function Wl(r){return"script[async]"+r}function U1(r,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+$n(a.href)+'"]');if(c)return s.instance=c,Le(c),c;var d=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Le(c),Zt(c,"style",d),Nd(c,a.precedence,r),s.instance=c;case"stylesheet":d=ha(a.href);var m=r.querySelector(Yl(d));if(m)return s.state.loading|=4,s.instance=m,Le(m),m;c=j1(a),(d=Gn.get(d))&&og(c,d),m=(r.ownerDocument||r).createElement("link"),Le(m);var S=m;return S._p=new Promise(function(x,L){S.onload=x,S.onerror=L}),Zt(m,"link",c),s.state.loading|=4,Nd(m,a.precedence,r),s.instance=m;case"script":return m=pa(a.src),(d=r.querySelector(Wl(m)))?(s.instance=d,Le(d),d):(c=a,(d=Gn.get(m))&&(c=g({},a),ag(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),Le(d),Zt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Nd(c,a.precedence,r));return s.instance}function Nd(r,s,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,S=0;S<c.length;S++){var x=c[S];if(x.dataset.precedence===s)m=x;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(r,s.firstChild))}function og(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function ag(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Md=null;function $1(r,s,a){if(Md===null){var c=new Map,d=Md=new Map;d.set(a,c)}else d=Md,c=d.get(a),c||(c=new Map,d.set(a,c));if(c.has(r))return c;for(c.set(r,null),a=a.getElementsByTagName(r),d=0;d<a.length;d++){var m=a[d];if(!(m[_e]||m[ue]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=r+S;var x=c.get(S);x?x.push(m):c.set(S,[m])}}return c}function z1(r,s,a){r=r.ownerDocument||r,r.head.insertBefore(a,s==="title"?r.querySelector("head > title"):null)}function kk(r,s,a){if(a===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function B1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Ql=null;function Nk(){}function Mk(r,s,a){if(Ql===null)throw Error(i(475));var c=Ql;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ha(a.href),m=r.querySelector(Yl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Ld.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Le(m);return}m=r.ownerDocument||r,a=j1(a),(d=Gn.get(d))&&og(a,d),m=m.createElement("link"),Le(m);var S=m;S._p=new Promise(function(x,L){S.onload=x,S.onerror=L}),Zt(m,"link",a),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Ld.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function Lk(){if(Ql===null)throw Error(i(475));var r=Ql;return r.stylesheets&&r.count===0&&lg(r,r.stylesheets),0<r.count?function(s){var a=setTimeout(function(){if(r.stylesheets&&lg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(a)}}:null}function Ld(){if(this.count--,this.count===0){if(this.stylesheets)lg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Pd=null;function lg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Pd=new Map,s.forEach(Pk,r),Pd=null,Ld.call(r))}function Pk(r,s){if(!(s.state.loading&4)){var a=Pd.get(r);if(a)var c=a.get(null);else{a=new Map,Pd.set(r,a);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var S=d[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),c=S)}c&&a.set(null,c)}d=s.instance,S=d.getAttribute("data-precedence"),m=a.get(S)||c,m===c&&a.set(null,d),a.set(S,d),this.count++,c=Ld.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Kl={$$typeof:C,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function jk(r,s,a,c,d,m,S,x){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function H1(r,s,a,c,d,m,S,x,L,Q,re,ae){return r=new jk(r,s,a,S,x,L,Q,ae),s=1,m===!0&&(s|=24),m=Tn(3,null,null,s),r.current=m,m.stateNode=r,s=Fp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:a,cache:s},Yp(m),r}function F1(r){return r?(r=Vo,r):Vo}function q1(r,s,a,c,d,m){d=F1(d),c.context===null?c.context=d:c.pendingContext=d,c=ki(s),c.payload={element:a},m=m===void 0?null:m,m!==null&&(c.callback=m),a=Ni(r,c,s),a!==null&&(Dn(a,r,s),Cl(a,r,s))}function V1(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function cg(r,s){V1(r,s),(r=r.alternate)&&V1(r,s)}function G1(r){if(r.tag===13){var s=qo(r,67108864);s!==null&&Dn(s,r,67108864),cg(r,67108864)}}var jd=!0;function Uk(r,s,a,c){var d=j.T;j.T=null;var m=J.p;try{J.p=2,ug(r,s,a,c)}finally{J.p=m,j.T=d}}function $k(r,s,a,c){var d=j.T;j.T=null;var m=J.p;try{J.p=8,ug(r,s,a,c)}finally{J.p=m,j.T=d}}function ug(r,s,a,c){if(jd){var d=dg(c);if(d===null)Xm(r,s,c,Ud,a),W1(r,c);else if(Bk(d,r,s,a,c))c.stopPropagation();else if(W1(r,c),s&4&&-1<zk.indexOf(r)){for(;d!==null;){var m=Ze(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=zr(m.pendingLanes);if(S!==0){var x=m;for(x.pendingLanes|=2,x.entangledLanes|=2;S;){var L=1<<31-Qt(S);x.entanglements[1]|=L,S&=~L}Ir(m),(rt&6)===0&&(Sd=Wt()+500,Fl(0))}}break;case 13:x=qo(m,2),x!==null&&Dn(x,m,2),xd(),cg(m,2)}if(m=dg(c),m===null&&Xm(r,s,c,Ud,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Xm(r,s,c,null,a)}}function dg(r){return r=gp(r),fg(r)}var Ud=null;function fg(r){if(Ud=null,r=ze(r),r!==null){var s=l(r);if(s===null)r=null;else{var a=s.tag;if(a===13){if(r=u(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Ud=r,null}function Y1(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sl()){case As:return 2;case Oo:return 8;case ko:case $r:return 32;case Ci:return 268435456;default:return 32}default:return 32}}var hg=!1,Gi=null,Yi=null,Wi=null,Xl=new Map,Zl=new Map,Qi=[],zk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W1(r,s){switch(r){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Xl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function Jl(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ze(s),s!==null&&G1(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Bk(r,s,a,c,d){switch(s){case"focusin":return Gi=Jl(Gi,r,s,a,c,d),!0;case"dragenter":return Yi=Jl(Yi,r,s,a,c,d),!0;case"mouseover":return Wi=Jl(Wi,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Xl.set(m,Jl(Xl.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Zl.set(m,Jl(Zl.get(m)||null,r,s,a,c,d)),!0}return!1}function Q1(r){var s=ze(r.target);if(s!==null){var a=l(s);if(a!==null){if(s=a.tag,s===13){if(s=u(a),s!==null){r.blockedOn=s,Y(r.priority,function(){if(a.tag===13){var c=In();c=al(c);var d=qo(a,c);d!==null&&Dn(d,a,c),cg(a,c)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function $d(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=dg(r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);mp=c,a.target.dispatchEvent(c),mp=null}else return s=Ze(a),s!==null&&G1(s),r.blockedOn=a,!1;s.shift()}return!0}function K1(r,s,a){$d(r)&&a.delete(s)}function Hk(){hg=!1,Gi!==null&&$d(Gi)&&(Gi=null),Yi!==null&&$d(Yi)&&(Yi=null),Wi!==null&&$d(Wi)&&(Wi=null),Xl.forEach(K1),Zl.forEach(K1)}function zd(r,s){r.blockedOn===s&&(r.blockedOn=null,hg||(hg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hk)))}var Bd=null;function X1(r){Bd!==r&&(Bd=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Bd===r&&(Bd=null);for(var s=0;s<r.length;s+=3){var a=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(fg(c||a)===null)continue;break}var m=Ze(a);m!==null&&(r.splice(s,3),s-=3,fm(m,{pending:!0,data:d,method:a.method,action:c},c,d))}}))}function ec(r){function s(L){return zd(L,r)}Gi!==null&&zd(Gi,r),Yi!==null&&zd(Yi,r),Wi!==null&&zd(Wi,r),Xl.forEach(s),Zl.forEach(s);for(var a=0;a<Qi.length;a++){var c=Qi[a];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)Q1(a),a.blockedOn===null&&Qi.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var d=a[c],m=a[c+1],S=d[fe]||null;if(typeof m=="function")S||X1(a);else if(S){var x=null;if(m&&m.hasAttribute("formAction")){if(d=m,S=m[fe]||null)x=S.formAction;else if(fg(d)!==null)continue}else x=S.action;typeof x=="function"?a[c+1]=x:(a.splice(c,3),c-=3),X1(a)}}}function pg(r){this._internalRoot=r}Hd.prototype.render=pg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var a=s.current,c=In();q1(a,c,r,s,null,null)},Hd.prototype.unmount=pg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;q1(r.current,2,null,r,null,null),xd(),s[ye]=null}};function Hd(r){this._internalRoot=r}Hd.prototype.unstable_scheduleHydration=function(r){if(r){var s=U();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Qi.length&&s!==0&&s<Qi[a].priority;a++);Qi.splice(a,0,r),a===0&&Q1(r)}};var Z1=t.version;if(Z1!=="19.1.1")throw Error(i(527,Z1,"19.1.1"));J.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?h(r):null,r=r===null?null:r.stateNode,r};var Fk={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fd.isDisabled&&Fd.supportsFiber)try{hn=Fd.inject(Fk),bt=Fd}catch{}}return nc.createRoot=function(r,s){if(!o(r))throw Error(i(299));var a=!1,c="",d=pS,m=mS,S=gS,x=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(x=s.unstable_transitionCallbacks)),s=H1(r,1,!1,null,null,a,c,d,m,S,x,null),r[ye]=s.current,Km(r),new pg(s)},nc.hydrateRoot=function(r,s,a){if(!o(r))throw Error(i(299));var c=!1,d="",m=pS,S=mS,x=gS,L=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),s=H1(r,1,!0,s,a??null,c,d,m,S,x,L,Q),s.context=F1(null),a=s.current,c=In(),c=al(c),d=ki(c),d.callback=null,Ni(a,d,c),a=c,s.current.lanes=a,ks(s,a),Ir(s),r[ye]=s.current,Km(r),new Hd(s)},nc.version="19.1.1",nc}var lw;function Jk(){if(lw)return yg.exports;lw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),yg.exports=Zk(),yg.exports}var eN=Jk(),Sg={exports:{}},wg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cw;function tN(){if(cw)return wg;cw=1;var e=Eh();function t(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,o=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return wg.useSyncExternalStoreWithSelector=function(p,h,g,v,_){var b=o(null);if(b.current===null){var w={hasValue:!1,value:null};b.current=w}else w=b.current;b=u(function(){function T(N){if(!O){if(O=!0,M=N,N=v(N),_!==void 0&&w.hasValue){var A=w.value;if(_(A,N))return C=A}return C=N}if(A=C,n(M,N))return A;var P=v(N);return _!==void 0&&_(A,P)?(M=N,A):(M=N,C=P)}var O=!1,M,C,D=g===void 0?null:g;return[function(){return T(h())},D===null?void 0:function(){return T(D())}]},[h,g,v,_]);var I=i(p,b[0],b[1]);return l(function(){w.hasValue=!0,w.value=I},[I]),f(I),I},wg}var uw;function nN(){return uw||(uw=1,Sg.exports=tN()),Sg.exports}var rN=nN();function WT(e){e()}function iN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){WT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!i||e===null||(i=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var dw={notify(){},get:()=>[]};function sN(e,t){let n,i=dw,o=0,l=!1;function u(I){g();const T=i.subscribe(I);let O=!1;return()=>{O||(O=!0,T(),v())}}function f(){i.notify()}function p(){w.onStateChange&&w.onStateChange()}function h(){return l}function g(){o++,n||(n=e.subscribe(p),i=iN())}function v(){o--,n&&o===0&&(n(),n=void 0,i.clear(),i=dw)}function _(){l||(l=!0,g())}function b(){l&&(l=!1,v())}const w={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:p,isSubscribed:h,trySubscribe:_,tryUnsubscribe:b,getListeners:()=>i};return w}var oN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aN=oN(),lN=()=>typeof navigator<"u"&&navigator.product==="ReactNative",cN=lN(),uN=()=>aN||cN?E.useLayoutEffect:E.useEffect,dN=uN();function fw(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Ec(e,t){if(fw(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!fw(e[n[o]],t[n[o]]))return!1;return!0}var fN=Symbol.for("react-redux-context"),hN=typeof globalThis<"u"?globalThis:{};function pN(){if(!E.createContext)return{};const e=hN[fN]??=new Map;let t=e.get(E.createContext);return t||(t=E.createContext(null),e.set(E.createContext,t)),t}var ps=pN();function mN(e){const{children:t,context:n,serverState:i,store:o}=e,l=E.useMemo(()=>{const p=sN(o);return{store:o,subscription:p,getServerState:i?()=>i:void 0}},[o,i]),u=E.useMemo(()=>o.getState(),[o]);dN(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),u!==o.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,u]);const f=n||ps;return E.createElement(f.Provider,{value:l},t)}var gN=mN;function Dv(e=ps){return function(){return E.useContext(e)}}var QT=Dv();function KT(e=ps){const t=e===ps?QT:Dv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var XT=KT();function yN(e=ps){const t=e===ps?XT:KT(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ZT=yN(),vN=(e,t)=>e===t;function _N(e=ps){const t=e===ps?QT:Dv(e),n=(i,o={})=>{const{equalityFn:l=vN}=typeof o=="function"?{equalityFn:o}:o,u=t(),{store:f,subscription:p,getServerState:h}=u;E.useRef(!0);const g=E.useCallback({[i.name](_){return i(_)}}[i.name],[i]),v=rN.useSyncExternalStoreWithSelector(p.addNestedSub,f.getState,h||f.getState,g,l);return E.useDebugValue(v),v};return Object.assign(n,{withTypes:()=>n}),n}var JT=_N(),bN=WT;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var eC=e=>{throw TypeError(e)},SN=(e,t,n)=>t.has(e)||eC("Cannot "+n),xg=(e,t,n)=>(SN(e,t,"read from private field"),n?n.call(e):t.get(e)),wN=(e,t,n)=>t.has(e)?eC("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),hw="popstate";function xN(e={}){function t(o,l){let{pathname:u="/",search:f="",hash:p=""}=Si(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Uc("",{pathname:u,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let p=o.location.href,h=p.indexOf("#");f=h===-1?p:p.slice(0,h)}return f+"#"+(typeof l=="string"?l:ms(l))}function i(o,l){xt(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return TN(t,n,i,e)}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function EN(){return Math.random().toString(36).substring(2,10)}function pw(e,t){return{usr:e.state,key:e.key,idx:t}}function Uc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Si(t):t,state:n,key:t&&t.key||i||EN()}}function ms({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Si(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function TN(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",p=null,h=g();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function g(){return(u.state||{idx:null}).idx}function v(){f="POP";let T=g(),O=T==null?null:T-h;h=T,p&&p({action:f,location:I.location,delta:O})}function _(T,O){f="PUSH";let M=Uc(I.location,T,O);n&&n(M,T),h=g()+1;let C=pw(M,h),D=I.createHref(M);try{u.pushState(C,"",D)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(D)}l&&p&&p({action:f,location:I.location,delta:1})}function b(T,O){f="REPLACE";let M=Uc(I.location,T,O);n&&n(M,T),h=g();let C=pw(M,h),D=I.createHref(M);u.replaceState(C,"",D),l&&p&&p({action:f,location:I.location,delta:0})}function w(T){return tC(T)}let I={get action(){return f},get location(){return e(o,u)},listen(T){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(hw,v),p=T,()=>{o.removeEventListener(hw,v),p=null}},createHref(T){return t(o,T)},createURL:w,encodeLocation(T){let O=w(T);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:_,replace:b,go(T){return u.go(T)}};return I}function tC(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ms(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var _c,mw=class{constructor(e){if(wN(this,_c,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(xg(this,_c).has(e))return xg(this,_c).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){xg(this,_c).set(e,t)}};_c=new WeakMap;var CN=new Set(["lazy","caseSensitive","path","id","index","children"]);function RN(e){return CN.has(e)}var AN=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function IN(e){return AN.has(e)}function DN(e){return e.index===!0}function $c(e,t,n=[],i={},o=!1){return e.map((l,u)=>{let f=[...n,String(u)],p=typeof l.id=="string"?l.id:f.join("-");if(Ue(l.index!==!0||!l.children,"Cannot specify children on an index route"),Ue(o||!i[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),DN(l)){let h={...l,...t(l),id:p};return i[p]=h,h}else{let h={...l,...t(l),id:p,children:void 0};return i[p]=h,l.children&&(h.children=$c(l.children,t,f,i,o)),h}})}function ns(e,t,n="/"){return pf(e,t,n,!1)}function pf(e,t,n,i){let o=typeof t=="string"?Si(t):t,l=Jn(o.pathname||"/",n);if(l==null)return null;let u=nC(e);kN(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let h=FN(l);f=BN(u[p],h,i)}return f}function ON(e,t){let{route:n,pathname:i,params:o}=e;return{id:n.id,pathname:i,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function nC(e,t=[],n=[],i="",o=!1){let l=(u,f,p=o,h)=>{let g={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&p)return;Ue(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let v=Or([i,g.relativePath]),_=n.concat(g);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),nC(u.children,t,_,v,p)),!(u.path==null&&!u.index)&&t.push({path:v,score:$N(v,u.index),routesMeta:_})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let p of rC(u.path))l(u,f,!0,p)}),t}function rC(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=rC(i.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function kN(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zN(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var NN=/^:[\w-]+$/,MN=3,LN=2,PN=1,jN=10,UN=-2,gw=e=>e==="*";function $N(e,t){let n=e.split("/"),i=n.length;return n.some(gw)&&(i+=UN),t&&(i+=LN),n.filter(o=>!gw(o)).reduce((o,l)=>o+(NN.test(l)?MN:l===""?PN:jN),i)}function zN(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function BN(e,t,n=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],h=f===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",v=kf({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),_=p.route;if(!v&&h&&n&&!i[i.length-1].route.index&&(v=kf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:Or([l,v.pathname]),pathnameBase:YN(Or([l,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(l=Or([l,v.pathnameBase]))}return u}function kf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=HN(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((h,{paramName:g,isOptional:v},_)=>{if(g==="*"){let w=f[_]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const b=f[_];return v&&!b?h[g]=void 0:h[g]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function HN(e,t=!1,n=!0){xt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function FN(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function qN({basename:e,pathname:t}){return t==="/"?e:Or([e,t])}function VN(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?Si(e):e;return{pathname:n?n.startsWith("/")?n:GN(n,t):t,search:WN(i),hash:QN(o)}}function GN(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Eg(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Th(e){let t=iC(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Ch(e,t,n,i=!1){let o;typeof e=="string"?o=Si(e):(o={...e},Ue(!o.pathname||!o.pathname.includes("?"),Eg("?","pathname","search",o)),Ue(!o.pathname||!o.pathname.includes("#"),Eg("#","pathname","hash",o)),Ue(!o.search||!o.search.includes("#"),Eg("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let v=t.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}f=v>=0?t[v]:"/"}let p=VN(o,f),h=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var Or=e=>e.join("/").replace(/\/\/+/g,"/"),YN=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),WN=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,QN=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Nf=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function zc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var sC=["POST","PUT","PATCH","DELETE"],KN=new Set(sC),XN=["GET",...sC],ZN=new Set(XN),JN=new Set([301,302,303,307,308]),eM=new Set([307,308]),Tg={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},tM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},nM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ov=e=>nM.test(e),rM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),oC="remix-router-transitions",aC=Symbol("ResetLoaderData");function iM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Ue(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],o=e.mapRouteProperties||rM,l={},u=$c(e.routes,o,void 0,l),f,p=e.basename||"/";p.startsWith("/")||(p=`/${p}`);let h=e.dataStrategy||cM,g={...e.future},v=null,_=new Set,b=null,w=null,I=null,T=e.hydrationData!=null,O=ns(u,e.history.location,p),M=!1,C=null,D;if(O==null&&!e.patchRoutesOnNavigation){let U=Qn(404,{pathname:e.history.location.pathname}),{matches:Y,route:ee}=qd(u);D=!0,O=Y,C={[ee.id]:U}}else if(O&&!e.hydrationData&&Ns(O,u,e.history.location.pathname).active&&(O=null),O)if(O.some(U=>U.route.lazy))D=!1;else if(!O.some(U=>U.route.loader))D=!0;else{let U=e.hydrationData?e.hydrationData.loaderData:null,Y=e.hydrationData?e.hydrationData.errors:null;if(Y){let ee=O.findIndex(ue=>Y[ue.route.id]!==void 0);D=O.slice(0,ee+1).every(ue=>!Ay(ue.route,U,Y))}else D=O.every(ee=>!Ay(ee.route,U,Y))}else{D=!1,O=[];let U=Ns(null,u,e.history.location.pathname);U.active&&U.matches&&(M=!0,O=U.matches)}let N,A={historyAction:e.history.action,location:e.history.location,matches:O,initialized:D,navigation:Tg,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},P="POP",V=!1,H,B=!1,z=new Map,G=null,q=!1,te=!1,oe=new Set,j=new Map,J=0,ne=-1,le=new Map,k=new Set,K=new Map,ce=new Map,ie=new Set,de=new Map,me,pe=null;function Ae(){if(v=e.history.listen(({action:U,location:Y,delta:ee})=>{if(me){me(),me=void 0;return}xt(de.size===0||ee!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ue=Ou({currentLocation:A.location,nextLocation:Y,historyAction:U});if(ue&&ee!=null){let fe=new Promise(ye=>{me=ye});e.history.go(ee*-1),xr(ue,{state:"blocked",location:Y,proceed(){xr(ue,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),fe.then(()=>e.history.go(ee))},reset(){let ye=new Map(A.blockers);ye.set(ue,rc),$e({blockers:ye})}});return}return Et(U,Y)}),n){EM(t,z);let U=()=>TM(t,z);t.addEventListener("pagehide",U),G=()=>t.removeEventListener("pagehide",U)}return A.initialized||Et("POP",A.location,{initialHydration:!0}),N}function be(){v&&v(),G&&G(),_.clear(),H&&H.abort(),A.fetchers.forEach((U,Y)=>Qt(Y)),A.blockers.forEach((U,Y)=>Os(Y))}function Oe(U){return _.add(U),()=>_.delete(U)}function $e(U,Y={}){U.matches&&(U.matches=U.matches.map(fe=>{let ye=l[fe.route.id],we=fe.route;return we.element!==ye.element||we.errorElement!==ye.errorElement||we.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),A={...A,...U};let ee=[],ue=[];A.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?ee.push(ye):ue.push(ye))}),ie.forEach(fe=>{!A.fetchers.has(fe)&&!j.has(fe)&&ee.push(fe)}),[..._].forEach(fe=>fe(A,{deletedFetchers:ee,viewTransitionOpts:Y.viewTransitionOpts,flushSync:Y.flushSync===!0})),ee.forEach(fe=>Qt(fe)),ue.forEach(fe=>A.fetchers.delete(fe))}function _t(U,Y,{flushSync:ee}={}){let ue=A.actionData!=null&&A.navigation.formMethod!=null&&_n(A.navigation.formMethod)&&A.navigation.state==="loading"&&U.state?._isRedirect!==!0,fe;Y.actionData?Object.keys(Y.actionData).length>0?fe=Y.actionData:fe=null:ue?fe=A.actionData:fe=null;let ye=Y.loaderData?Cw(A.loaderData,Y.loaderData,Y.matches||[],Y.errors):A.loaderData,we=A.blockers;we.size>0&&(we=new Map(we),we.forEach((_e,Se)=>we.set(Se,rc)));let ve=q?!1:Nu(U,Y.matches||A.matches),Ee=V===!0||A.navigation.formMethod!=null&&_n(A.navigation.formMethod)&&U.state?._isRedirect!==!0;f&&(u=f,f=void 0),q||P==="POP"||(P==="PUSH"?e.history.push(U,U.state):P==="REPLACE"&&e.history.replace(U,U.state));let Ce;if(P==="POP"){let _e=z.get(A.location.pathname);_e&&_e.has(U.pathname)?Ce={currentLocation:A.location,nextLocation:U}:z.has(U.pathname)&&(Ce={currentLocation:U,nextLocation:A.location})}else if(B){let _e=z.get(A.location.pathname);_e?_e.add(U.pathname):(_e=new Set([U.pathname]),z.set(A.location.pathname,_e)),Ce={currentLocation:A.location,nextLocation:U}}$e({...Y,actionData:fe,loaderData:ye,historyAction:P,location:U,initialized:!0,navigation:Tg,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:Ee,blockers:we},{viewTransitionOpts:Ce,flushSync:ee===!0}),P="POP",V=!1,B=!1,q=!1,te=!1,pe?.resolve(),pe=null}async function gt(U,Y){if(typeof U=="number"){e.history.go(U);return}let ee=Ry(A.location,A.matches,p,U,Y?.fromRouteId,Y?.relative),{path:ue,submission:fe,error:ye}=yw(!1,ee,Y),we=A.location,ve=Uc(A.location,ue,Y&&Y.state);ve={...ve,...e.history.encodeLocation(ve)};let Ee=Y&&Y.replace!=null?Y.replace:void 0,Ce="PUSH";Ee===!0?Ce="REPLACE":Ee===!1||fe!=null&&_n(fe.formMethod)&&fe.formAction===A.location.pathname+A.location.search&&(Ce="REPLACE");let _e=Y&&"preventScrollReset"in Y?Y.preventScrollReset===!0:void 0,Se=(Y&&Y.flushSync)===!0,ze=Ou({currentLocation:we,nextLocation:ve,historyAction:Ce});if(ze){xr(ze,{state:"blocked",location:ve,proceed(){xr(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),gt(U,Y)},reset(){let Ze=new Map(A.blockers);Ze.set(ze,rc),$e({blockers:Ze})}});return}await Et(Ce,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:Y&&Y.replace,enableViewTransition:Y&&Y.viewTransition,flushSync:Se})}function Ln(){pe||(pe=CM()),ol(),$e({revalidation:"loading"});let U=pe.promise;return A.navigation.state==="submitting"?U:A.navigation.state==="idle"?(Et(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),U):(Et(P||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:B===!0}),U)}async function Et(U,Y,ee){H&&H.abort(),H=null,P=U,q=(ee&&ee.startUninterruptedRevalidation)===!0,ks(A.location,A.matches),V=(ee&&ee.preventScrollReset)===!0,B=(ee&&ee.enableViewTransition)===!0;let ue=f||u,fe=ee&&ee.overrideNavigation,ye=ee?.initialHydration&&A.matches&&A.matches.length>0&&!M?A.matches:ns(ue,Y,p),we=(ee&&ee.flushSync)===!0;if(ye&&A.initialized&&!te&&yM(A.location,Y)&&!(ee&&ee.submission&&_n(ee.submission.formMethod))){_t(Y,{matches:ye},{flushSync:we});return}let ve=Ns(ye,ue,Y.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:Tt,notFoundMatches:Le,route:st}=No(Y.pathname);_t(Y,{matches:Le,loaderData:{},errors:{[st.id]:Tt}},{flushSync:we});return}H=new AbortController;let Ee=ba(e.history,Y,H.signal,ee&&ee.submission),Ce=e.getContext?await e.getContext():new mw,_e;if(ee&&ee.pendingError)_e=[rs(ye).route.id,{type:"error",error:ee.pendingError}];else if(ee&&ee.submission&&_n(ee.submission.formMethod)){let Tt=await Pn(Ee,Y,ee.submission,ye,Ce,ve.active,ee&&ee.initialHydration===!0,{replace:ee.replace,flushSync:we});if(Tt.shortCircuited)return;if(Tt.pendingActionResult){let[Le,st]=Tt.pendingActionResult;if(kn(st)&&zc(st.error)&&st.error.status===404){H=null,_t(Y,{matches:Tt.matches,loaderData:{},errors:{[Le]:st.error}});return}}ye=Tt.matches||ye,_e=Tt.pendingActionResult,fe=Cg(Y,ee.submission),we=!1,ve.active=!1,Ee=ba(e.history,Ee.url,Ee.signal)}let{shortCircuited:Se,matches:ze,loaderData:Ze,errors:yt}=await Ur(Ee,Y,ye,Ce,ve.active,fe,ee&&ee.submission,ee&&ee.fetcherSubmission,ee&&ee.replace,ee&&ee.initialHydration===!0,we,_e);Se||(H=null,_t(Y,{matches:ze||ye,...Rw(_e),loaderData:Ze,errors:yt}))}async function Pn(U,Y,ee,ue,fe,ye,we,ve={}){ol();let Ee=wM(Y,ee);if($e({navigation:Ee},{flushSync:ve.flushSync===!0}),ye){let Se=await Ms(ue,Y.pathname,U.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Ze,route:yt}=qd(u);return{matches:Ze,pendingActionResult:[yt.id,{type:"error",error:Se.error}]}}let ze=rs(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[ze,{type:"error",error:Se.error}]}}else if(Se.matches)ue=Se.matches;else{let{notFoundMatches:ze,error:Ze,route:yt}=No(Y.pathname);return{matches:ze,pendingActionResult:[yt.id,{type:"error",error:Ze}]}}}let Ce,_e=mf(ue,Y);if(!_e.route.action&&!_e.route.lazy)Ce={type:"error",error:Qn(405,{method:U.method,pathname:Y.pathname,routeId:_e.route.id})};else{let Se=Ea(o,l,U,ue,_e,we?[]:i,fe),ze=await Ci(U,Se,fe,null);if(Ce=ze[_e.route.id],!Ce){for(let Ze of ue)if(ze[Ze.route.id]){Ce=ze[Ze.route.id];break}}if(U.signal.aborted)return{shortCircuited:!0}}if(oo(Ce)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=xw(Ce.response.headers.get("Location"),new URL(U.url),p)===A.location.pathname+A.location.search,await $r(U,Ce,!0,{submission:ee,replace:Se}),{shortCircuited:!0}}if(kn(Ce)){let Se=rs(ue,_e.route.id);return(ve&&ve.replace)!==!0&&(P="PUSH"),{matches:ue,pendingActionResult:[Se.route.id,Ce,_e.route.id]}}return{matches:ue,pendingActionResult:[_e.route.id,Ce]}}async function Ur(U,Y,ee,ue,fe,ye,we,ve,Ee,Ce,_e,Se){let ze=ye||Cg(Y,we),Ze=we||ve||Iw(ze),yt=!q&&!Ce;if(fe){if(yt){let kt=Wt(Se);$e({navigation:ze,...kt!==void 0?{actionData:kt}:{}},{flushSync:_e})}let Pe=await Ms(ee,Y.pathname,U.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){if(Pe.partialMatches.length===0){let{matches:qr,route:pn}=qd(u);return{matches:qr,loaderData:{},errors:{[pn.id]:Pe.error}}}let kt=rs(Pe.partialMatches).route.id;return{matches:Pe.partialMatches,loaderData:{},errors:{[kt]:Pe.error}}}else if(Pe.matches)ee=Pe.matches;else{let{error:kt,notFoundMatches:qr,route:pn}=No(Y.pathname);return{matches:qr,loaderData:{},errors:{[pn.id]:kt}}}}let Tt=f||u,{dsMatches:Le,revalidatingFetchers:st}=vw(U,ue,o,l,e.history,A,ee,Ze,Y,Ce?[]:i,Ce===!0,te,oe,ie,K,k,Tt,p,e.patchRoutesOnNavigation!=null,Se);if(ne=++J,!e.dataStrategy&&!Le.some(Pe=>Pe.shouldLoad)&&!Le.some(Pe=>Pe.route.middleware)&&st.length===0){let Pe=Is();return _t(Y,{matches:ee,loaderData:{},errors:Se&&kn(Se[1])?{[Se[0]]:Se[1].error}:null,...Rw(Se),...Pe?{fetchers:new Map(A.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(yt){let Pe={};if(!fe){Pe.navigation=ze;let kt=Wt(Se);kt!==void 0&&(Pe.actionData=kt)}st.length>0&&(Pe.fetchers=sl(st)),$e(Pe,{flushSync:_e})}st.forEach(Pe=>{wr(Pe.key),Pe.controller&&j.set(Pe.key,Pe.controller)});let Er=()=>st.forEach(Pe=>wr(Pe.key));H&&H.signal.addEventListener("abort",Er);let{loaderResults:xn,fetcherResults:ln}=await Iu(Le,st,U,ue);if(U.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",Er),st.forEach(Pe=>j.delete(Pe.key));let jn=Vd(xn);if(jn)return await $r(U,jn.result,!0,{replace:Ee}),{shortCircuited:!0};if(jn=Vd(ln),jn)return k.add(jn.key),await $r(U,jn.result,!0,{replace:Ee}),{shortCircuited:!0};let{loaderData:Lo,errors:Ri}=Tw(A,ee,xn,Se,st,ln);Ce&&A.errors&&(Ri={...A.errors,...Ri});let Br=Is(),Hr=Ds(ne),Fr=Br||Hr||st.length>0;return{matches:ee,loaderData:Lo,errors:Ri,...Fr?{fetchers:new Map(A.fetchers)}:{}}}function Wt(U){if(U&&!kn(U[1]))return{[U[0]]:U[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function sl(U){return U.forEach(Y=>{let ee=A.fetchers.get(Y.key),ue=ic(void 0,ee?ee.data:void 0);A.fetchers.set(Y.key,ue)}),new Map(A.fetchers)}async function As(U,Y,ee,ue){wr(U);let fe=(ue&&ue.flushSync)===!0,ye=f||u,we=Ry(A.location,A.matches,p,ee,Y,ue?.relative),ve=ns(ye,we,p),Ee=Ns(ve,ye,we);if(Ee.active&&Ee.matches&&(ve=Ee.matches),!ve){bt(U,Y,Qn(404,{pathname:we}),{flushSync:fe});return}let{path:Ce,submission:_e,error:Se}=yw(!0,we,ue);if(Se){bt(U,Y,Se,{flushSync:fe});return}let ze=e.getContext?await e.getContext():new mw,Ze=(ue&&ue.preventScrollReset)===!0;if(_e&&_n(_e.formMethod)){await Oo(U,Y,Ce,ve,ze,Ee.active,fe,Ze,_e);return}K.set(U,{routeId:Y,path:Ce}),await ko(U,Y,Ce,ve,ze,Ee.active,fe,Ze,_e)}async function Oo(U,Y,ee,ue,fe,ye,we,ve,Ee){ol(),K.delete(U);let Ce=A.fetchers.get(U);hn(U,xM(Ee,Ce),{flushSync:we});let _e=new AbortController,Se=ba(e.history,ee,_e.signal,Ee);if(ye){let St=await Ms(ue,new URL(Se.url).pathname,Se.signal,U);if(St.type==="aborted")return;if(St.type==="error"){bt(U,Y,St.error,{flushSync:we});return}else if(St.matches)ue=St.matches;else{bt(U,Y,Qn(404,{pathname:ee}),{flushSync:we});return}}let ze=mf(ue,ee);if(!ze.route.action&&!ze.route.lazy){let St=Qn(405,{method:Ee.formMethod,pathname:ee,routeId:Y});bt(U,Y,St,{flushSync:we});return}j.set(U,_e);let Ze=J,yt=Ea(o,l,Se,ue,ze,i,fe),Le=(await Ci(Se,yt,fe,U))[ze.route.id];if(Se.signal.aborted){j.get(U)===_e&&j.delete(U);return}if(ie.has(U)){if(oo(Le)||kn(Le)){hn(U,es(void 0));return}}else{if(oo(Le))if(j.delete(U),ne>Ze){hn(U,es(void 0));return}else return k.add(U),hn(U,ic(Ee)),$r(Se,Le,!1,{fetcherSubmission:Ee,preventScrollReset:ve});if(kn(Le)){bt(U,Y,Le.error);return}}let st=A.navigation.location||A.location,Er=ba(e.history,st,_e.signal),xn=f||u,ln=A.navigation.state!=="idle"?ns(xn,A.navigation.location,p):A.matches;Ue(ln,"Didn't find any matches after fetcher action");let jn=++J;le.set(U,jn);let Lo=ic(Ee,Le.data);A.fetchers.set(U,Lo);let{dsMatches:Ri,revalidatingFetchers:Br}=vw(Er,fe,o,l,e.history,A,ln,Ee,st,i,!1,te,oe,ie,K,k,xn,p,e.patchRoutesOnNavigation!=null,[ze.route.id,Le]);Br.filter(St=>St.key!==U).forEach(St=>{let Ai=St.key,Mu=A.fetchers.get(Ai),Lu=ic(void 0,Mu?Mu.data:void 0);A.fetchers.set(Ai,Lu),wr(Ai),St.controller&&j.set(Ai,St.controller)}),$e({fetchers:new Map(A.fetchers)});let Hr=()=>Br.forEach(St=>wr(St.key));_e.signal.addEventListener("abort",Hr);let{loaderResults:Fr,fetcherResults:Pe}=await Iu(Ri,Br,Er,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",Hr),le.delete(U),j.delete(U),Br.forEach(St=>j.delete(St.key)),A.fetchers.has(U)){let St=es(Le.data);A.fetchers.set(U,St)}let kt=Vd(Fr);if(kt)return $r(Er,kt.result,!1,{preventScrollReset:ve});if(kt=Vd(Pe),kt)return k.add(kt.key),$r(Er,kt.result,!1,{preventScrollReset:ve});let{loaderData:qr,errors:pn}=Tw(A,ln,Fr,void 0,Br,Pe);Ds(jn),A.navigation.state==="loading"&&jn>ne?(Ue(P,"Expected pending action"),H&&H.abort(),_t(A.navigation.location,{matches:ln,loaderData:qr,errors:pn,fetchers:new Map(A.fetchers)})):($e({errors:pn,loaderData:Cw(A.loaderData,qr,ln,pn),fetchers:new Map(A.fetchers)}),te=!1)}async function ko(U,Y,ee,ue,fe,ye,we,ve,Ee){let Ce=A.fetchers.get(U);hn(U,ic(Ee,Ce?Ce.data:void 0),{flushSync:we});let _e=new AbortController,Se=ba(e.history,ee,_e.signal);if(ye){let st=await Ms(ue,new URL(Se.url).pathname,Se.signal,U);if(st.type==="aborted")return;if(st.type==="error"){bt(U,Y,st.error,{flushSync:we});return}else if(st.matches)ue=st.matches;else{bt(U,Y,Qn(404,{pathname:ee}),{flushSync:we});return}}let ze=mf(ue,ee);j.set(U,_e);let Ze=J,yt=Ea(o,l,Se,ue,ze,i,fe),Le=(await Ci(Se,yt,fe,U))[ze.route.id];if(j.get(U)===_e&&j.delete(U),!Se.signal.aborted){if(ie.has(U)){hn(U,es(void 0));return}if(oo(Le))if(ne>Ze){hn(U,es(void 0));return}else{k.add(U),await $r(Se,Le,!1,{preventScrollReset:ve});return}if(kn(Le)){bt(U,Y,Le.error);return}hn(U,es(Le.data))}}async function $r(U,Y,ee,{submission:ue,fetcherSubmission:fe,preventScrollReset:ye,replace:we}={}){Y.response.headers.has("X-Remix-Revalidate")&&(te=!0);let ve=Y.response.headers.get("Location");Ue(ve,"Expected a Location header on the redirect Response"),ve=xw(ve,new URL(U.url),p);let Ee=Uc(A.location,ve,{_isRedirect:!0});if(n){let yt=!1;if(Y.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(Ov(ve)){const Tt=tC(ve,!0);yt=Tt.origin!==t.location.origin||Jn(Tt.pathname,p)==null}if(yt){we?t.location.replace(ve):t.location.assign(ve);return}}H=null;let Ce=we===!0||Y.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:ze}=A.navigation;!ue&&!fe&&_e&&Se&&ze&&(ue=Iw(A.navigation));let Ze=ue||fe;if(eM.has(Y.response.status)&&Ze&&_n(Ze.formMethod))await Et(Ce,Ee,{submission:{...Ze,formAction:ve},preventScrollReset:ye||V,enableViewTransition:ee?B:void 0});else{let yt=Cg(Ee,ue);await Et(Ce,Ee,{overrideNavigation:yt,fetcherSubmission:fe,preventScrollReset:ye||V,enableViewTransition:ee?B:void 0})}}async function Ci(U,Y,ee,ue){let fe,ye={};try{fe=await dM(h,U,Y,ue,ee,!1)}catch(we){return Y.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:we}}),ye}if(U.signal.aborted)return ye;for(let[we,ve]of Object.entries(fe))if(bM(ve)){let Ee=ve.result;ye[we]={type:"redirect",response:mM(Ee,U,we,Y,p)}}else ye[we]=await pM(ve);return ye}async function Iu(U,Y,ee,ue){let fe=Ci(ee,U,ue,null),ye=Promise.all(Y.map(async Ee=>{if(Ee.matches&&Ee.match&&Ee.request&&Ee.controller){let _e=(await Ci(Ee.request,Ee.matches,ue,Ee.key))[Ee.match.route.id];return{[Ee.key]:_e}}else return Promise.resolve({[Ee.key]:{type:"error",error:Qn(404,{pathname:Ee.path})}})})),we=await fe,ve=(await ye).reduce((Ee,Ce)=>Object.assign(Ee,Ce),{});return{loaderResults:we,fetcherResults:ve}}function ol(){te=!0,K.forEach((U,Y)=>{j.has(Y)&&oe.add(Y),wr(Y)})}function hn(U,Y,ee={}){A.fetchers.set(U,Y),$e({fetchers:new Map(A.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function bt(U,Y,ee,ue={}){let fe=rs(A.matches,Y);Qt(U),$e({errors:{[fe.route.id]:ee},fetchers:new Map(A.fetchers)},{flushSync:(ue&&ue.flushSync)===!0})}function sr(U){return ce.set(U,(ce.get(U)||0)+1),ie.has(U)&&ie.delete(U),A.fetchers.get(U)||tM}function Qt(U){let Y=A.fetchers.get(U);j.has(U)&&!(Y&&Y.state==="loading"&&le.has(U))&&wr(U),K.delete(U),le.delete(U),k.delete(U),ie.delete(U),oe.delete(U),A.fetchers.delete(U)}function dp(U){let Y=(ce.get(U)||0)-1;Y<=0?(ce.delete(U),ie.add(U)):ce.set(U,Y),$e({fetchers:new Map(A.fetchers)})}function wr(U){let Y=j.get(U);Y&&(Y.abort(),j.delete(U))}function Du(U){for(let Y of U){let ee=sr(Y),ue=es(ee.data);A.fetchers.set(Y,ue)}}function Is(){let U=[],Y=!1;for(let ee of k){let ue=A.fetchers.get(ee);Ue(ue,`Expected fetcher: ${ee}`),ue.state==="loading"&&(k.delete(ee),U.push(ee),Y=!0)}return Du(U),Y}function Ds(U){let Y=[];for(let[ee,ue]of le)if(ue<U){let fe=A.fetchers.get(ee);Ue(fe,`Expected fetcher: ${ee}`),fe.state==="loading"&&(wr(ee),le.delete(ee),Y.push(ee))}return Du(Y),Y.length>0}function zr(U,Y){let ee=A.blockers.get(U)||rc;return de.get(U)!==Y&&de.set(U,Y),ee}function Os(U){A.blockers.delete(U),de.delete(U)}function xr(U,Y){let ee=A.blockers.get(U)||rc;Ue(ee.state==="unblocked"&&Y.state==="blocked"||ee.state==="blocked"&&Y.state==="blocked"||ee.state==="blocked"&&Y.state==="proceeding"||ee.state==="blocked"&&Y.state==="unblocked"||ee.state==="proceeding"&&Y.state==="unblocked",`Invalid blocker state transition: ${ee.state} -> ${Y.state}`);let ue=new Map(A.blockers);ue.set(U,Y),$e({blockers:ue})}function Ou({currentLocation:U,nextLocation:Y,historyAction:ee}){if(de.size===0)return;de.size>1&&xt(!1,"A router only supports one blocker at a time");let ue=Array.from(de.entries()),[fe,ye]=ue[ue.length-1],we=A.blockers.get(fe);if(!(we&&we.state==="proceeding")&&ye({currentLocation:U,nextLocation:Y,historyAction:ee}))return fe}function No(U){let Y=Qn(404,{pathname:U}),ee=f||u,{matches:ue,route:fe}=qd(ee);return{notFoundMatches:ue,route:fe,error:Y}}function ku(U,Y,ee){if(b=U,I=Y,w=ee||null,!T&&A.navigation===Tg){T=!0;let ue=Nu(A.location,A.matches);ue!=null&&$e({restoreScrollPosition:ue})}return()=>{b=null,I=null,w=null}}function Mo(U,Y){return w&&w(U,Y.map(ue=>ON(ue,A.loaderData)))||U.key}function ks(U,Y){if(b&&I){let ee=Mo(U,Y);b[ee]=I()}}function Nu(U,Y){if(b){let ee=Mo(U,Y),ue=b[ee];if(typeof ue=="number")return ue}return null}function Ns(U,Y,ee){if(e.patchRoutesOnNavigation)if(U){if(Object.keys(U[0].params).length>0)return{active:!0,matches:pf(Y,ee,p,!0)}}else return{active:!0,matches:pf(Y,ee,p,!0)||[]};return{active:!1,matches:null}}async function Ms(U,Y,ee,ue){if(!e.patchRoutesOnNavigation)return{type:"success",matches:U};let fe=U;for(;;){let ye=f==null,we=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:ee,path:Y,matches:fe,fetcherKey:ue,patch:(_e,Se)=>{ee.aborted||_w(_e,Se,we,ve,o,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!ee.aborted&&(u=[...u])}if(ee.aborted)return{type:"aborted"};let Ee=ns(we,Y,p);if(Ee)return{type:"success",matches:Ee};let Ce=pf(we,Y,p,!0);if(!Ce||fe.length===Ce.length&&fe.every((_e,Se)=>_e.route.id===Ce[Se].route.id))return{type:"success",matches:null};fe=Ce}}function al(U){l={},f=$c(U,o,void 0,l)}function ll(U,Y,ee=!1){let ue=f==null;_w(U,Y,f||u,l,o,ee),ue&&(u=[...u],$e({}))}return N={get basename(){return p},get future(){return g},get state(){return A},get routes(){return u},get window(){return t},initialize:Ae,subscribe:Oe,enableScrollRestoration:ku,navigate:gt,fetch:As,revalidate:Ln,createHref:U=>e.history.createHref(U),encodeLocation:U=>e.history.encodeLocation(U),getFetcher:sr,deleteFetcher:dp,dispose:be,getBlocker:zr,deleteBlocker:Os,patchRoutes:ll,_internalFetchControllers:j,_internalSetRoutes:al,_internalSetStateDoNotUseOrYouWillBreakYourApp(U){$e(U)}},N}function sM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ry(e,t,n,i,o,l){let u,f;if(o){u=[];for(let h of t)if(u.push(h),h.route.id===o){f=h;break}}else u=t,f=t[t.length-1];let p=Ch(i||".",Th(u),Jn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(p.search=e.search,p.hash=e.hash),(i==null||i===""||i===".")&&f){let h=kv(p.search);if(f.route.index&&!h)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&h){let g=new URLSearchParams(p.search),v=g.getAll("index");g.delete("index"),v.filter(b=>b).forEach(b=>g.append("index",b));let _=g.toString();p.search=_?`?${_}`:""}}return n!=="/"&&(p.pathname=qN({basename:n,pathname:p.pathname})),ms(p)}function yw(e,t,n){if(!n||!sM(n))return{path:t};if(n.formMethod&&!SM(n.formMethod))return{path:t,error:Qn(405,{method:n.formMethod})};let i=()=>({path:t,error:Qn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=hC(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!_n(l))return i();let v=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((_,[b,w])=>`${_}${b}=${w}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:v}}}else if(n.formEncType==="application/json"){if(!_n(l))return i();try{let v=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:v,text:void 0}}}catch{return i()}}}Ue(typeof FormData=="function","FormData is not available in this environment");let f,p;if(n.formData)f=Dy(n.formData),p=n.formData;else if(n.body instanceof FormData)f=Dy(n.body),p=n.body;else if(n.body instanceof URLSearchParams)f=n.body,p=Ew(f);else if(n.body==null)f=new URLSearchParams,p=new FormData;else try{f=new URLSearchParams(n.body),p=Ew(f)}catch{return i()}let h={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(_n(h.formMethod))return{path:t,submission:h};let g=Si(t);return e&&g.search&&kv(g.search)&&f.append("index",""),g.search=`?${f}`,{path:ms(g),submission:h}}function vw(e,t,n,i,o,l,u,f,p,h,g,v,_,b,w,I,T,O,M,C){let D=C?kn(C[1])?C[1].error:C[1].data:void 0,N=o.createURL(l.location),A=o.createURL(p),P;if(g&&l.errors){let q=Object.keys(l.errors)[0];P=u.findIndex(te=>te.route.id===q)}else if(C&&kn(C[1])){let q=C[0];P=u.findIndex(te=>te.route.id===q)-1}let V=C?C[1].statusCode:void 0,H=V&&V>=400,B={currentUrl:N,currentParams:l.matches[0]?.params||{},nextUrl:A,nextParams:u[0].params,...f,actionResult:D,actionStatus:V},z=u.map((q,te)=>{let{route:oe}=q,j=null;if(P!=null&&te>P?j=!1:oe.lazy?j=!0:oe.loader==null?j=!1:g?j=Ay(oe,l.loaderData,l.errors):oM(l.loaderData,l.matches[te],q)&&(j=!0),j!==null)return Iy(n,i,e,q,h,t,j);let J=H?!1:v||N.pathname+N.search===A.pathname+A.search||N.search!==A.search||aM(l.matches[te],q),ne={...B,defaultShouldRevalidate:J},le=Mf(q,ne);return Iy(n,i,e,q,h,t,le,ne)}),G=[];return w.forEach((q,te)=>{if(g||!u.some(ce=>ce.route.id===q.routeId)||b.has(te))return;let oe=l.fetchers.get(te),j=oe&&oe.state!=="idle"&&oe.data===void 0,J=ns(T,q.path,O);if(!J){if(M&&j)return;G.push({key:te,routeId:q.routeId,path:q.path,matches:null,match:null,request:null,controller:null});return}if(I.has(te))return;let ne=mf(J,q.path),le=new AbortController,k=ba(o,q.path,le.signal),K=null;if(_.has(te))_.delete(te),K=Ea(n,i,k,J,ne,h,t);else if(j)v&&(K=Ea(n,i,k,J,ne,h,t));else{let ce={...B,defaultShouldRevalidate:H?!1:v};Mf(ne,ce)&&(K=Ea(n,i,k,J,ne,h,t,ce))}K&&G.push({key:te,routeId:q.routeId,path:q.path,matches:K,match:ne,request:k,controller:le})}),{dsMatches:z,revalidatingFetchers:G}}function Ay(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,o=n!=null&&n[e.id]!==void 0;return!i&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!o}function oM(e,t,n){let i=!t||n.route.id!==t.route.id,o=!e.hasOwnProperty(n.route.id);return i||o}function aM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Mf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function _w(e,t,n,i,o,l){let u;if(e){let h=i[e];Ue(h,`No route found to patch children into: routeId = ${e}`),h.children||(h.children=[]),u=h.children}else u=n;let f=[],p=[];if(t.forEach(h=>{let g=u.find(v=>lC(h,v));g?p.push({existingRoute:g,newRoute:h}):f.push(h)}),f.length>0){let h=$c(f,o,[e||"_","patch",String(u?.length||"0")],i);u.push(...h)}if(l&&p.length>0)for(let h=0;h<p.length;h++){let{existingRoute:g,newRoute:v}=p[h],_=g,[b]=$c([v],o,[],{},!0);Object.assign(_,{element:b.element?b.element:_.element,errorElement:b.errorElement?b.errorElement:_.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:_.hydrateFallbackElement})}}function lC(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(o=>lC(n,o))):!1}var bw=new WeakMap,cC=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let o=n[t.id];if(Ue(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let l=o.lazy[e];if(!l)return;let u=bw.get(o);u||(u={},bw.set(o,u));let f=u[e];if(f)return f;let p=(async()=>{let h=RN(e),v=o[e]!==void 0&&e!=="hasErrorBoundary";if(h)xt(!h,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(v)xt(!1,`Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let _=await l();_!=null&&(Object.assign(o,{[e]:_}),Object.assign(o,i(o)))}typeof o.lazy=="object"&&(o.lazy[e]=void 0,Object.values(o.lazy).every(_=>_===void 0)&&(o.lazy=void 0))})();return u[e]=p,p},Sw=new WeakMap;function lM(e,t,n,i,o){let l=n[e.id];if(Ue(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let g=Sw.get(l);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let v=(async()=>{Ue(typeof e.lazy=="function","No lazy route function found");let _=await e.lazy(),b={};for(let w in _){let I=_[w];if(I===void 0)continue;let T=IN(w),M=l[w]!==void 0&&w!=="hasErrorBoundary";T?xt(!T,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):M?xt(!M,`Route "${l.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):b[w]=I}Object.assign(l,b),Object.assign(l,{...i(l),lazy:void 0})})();return Sw.set(l,v),v.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:v}}let u=Object.keys(e.lazy),f=[],p;for(let g of u){if(o&&o.includes(g))continue;let v=cC({key:g,route:e,manifest:n,mapRouteProperties:i});v&&(f.push(v),g===t&&(p=v))}let h=f.length>0?Promise.all(f).then(()=>{}):void 0;return h?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:h,lazyHandlerPromise:p}}async function ww(e){let t=e.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,l)=>{n[t[l].route.id]=o}),n}async function cM(e){return e.matches.some(t=>t.route.middleware)?uC(e,()=>ww(e)):ww(e)}function uC(e,t){return uM(e,t,i=>i,vM,n);function n(i,o,l){if(l)return Promise.resolve(Object.assign(l.value,{[o]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(h=>h.route.id===o)||0,u.findIndex(h=>h.unstable_shouldCallHandler())||0),p=rs(u,u[f].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:i}})}}}async function uM(e,t,n,i,o){let{matches:l,request:u,params:f,context:p}=e,h=l.flatMap(v=>v.route.middleware?v.route.middleware.map(_=>[v.route.id,_]):[]);return await dC({request:u,params:f,context:p},h,t,n,i,o)}async function dC(e,t,n,i,o,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let p=t[u];if(!p)return await n();let[h,g]=p,v,_=async()=>{if(v)throw new Error("You may only call `next()` once per middleware");try{return v={value:await dC(e,t,n,i,o,l,u+1)},v.value}catch(b){return v={value:await l(b,h,v)},v.value}};try{let b=await g(e,_),w=b!=null?i(b):void 0;return o(w)?w:v?w??v.value:(v={value:await _()},v.value)}catch(b){return await l(b,h,v)}}function fC(e,t,n,i,o){let l=cC({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=lM(i.route,_n(n.method)?"action":"loader",t,e,o);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Iy(e,t,n,i,o,l,u,f=null){let p=!1,h=fC(e,t,n,i,o);return{...i,_lazyPromises:h,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(g){return p=!0,f?typeof g=="boolean"?Mf(i,{...f,defaultShouldRevalidate:g}):Mf(i,f):u},resolve(g){return p||u||g&&!_n(n.method)&&(i.route.lazy||i.route.loader)?fM({request:n,match:i,lazyHandlerPromise:h?.handler,lazyRoutePromise:h?.route,handlerOverride:g,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Ea(e,t,n,i,o,l,u,f=null){return i.map(p=>p.route.id!==o.route.id?{...p,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:fC(e,t,n,p,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Iy(e,t,n,p,l,u,!0,f))}async function dM(e,t,n,i,o,l){n.some(h=>h._lazyPromises?.middleware)&&await Promise.all(n.map(h=>h._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:o,matches:n},p=await e({...u,fetcherKey:i,runClientMiddleware:h=>{let g=u;return uC(g,()=>h({...g,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(h=>[h._lazyPromises?.handler,h._lazyPromises?.route]))}catch{}return p}async function fM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:o,scopedContext:l}){let u,f,p=_n(e.method),h=p?"action":"loader",g=v=>{let _,b=new Promise((T,O)=>_=O);f=()=>_(),e.signal.addEventListener("abort",f);let w=T=>typeof v!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${t.route.id}]`)):v({request:e,params:t.params,context:l},...T!==void 0?[T]:[]),I=(async()=>{try{return{type:"data",result:await(o?o(O=>w(O)):w())}}catch(T){return{type:"error",result:T}}})();return Promise.race([I,b])};try{let v=p?t.route.action:t.route.loader;if(n||i)if(v){let _,[b]=await Promise.all([g(v).catch(w=>{_=w}),n,i]);if(_!==void 0)throw _;u=b}else{await n;let _=p?t.route.action:t.route.loader;if(_)[u]=await Promise.all([g(_),i]);else if(h==="action"){let b=new URL(e.url),w=b.pathname+b.search;throw Qn(405,{method:e.method,pathname:w,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(v)u=await g(v);else{let _=new URL(e.url),b=_.pathname+_.search;throw Qn(404,{pathname:b})}}catch(v){return{type:"error",result:v}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function hM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function pM(e){let{result:t,type:n}=e;if(pC(t)){let i;try{i=await hM(t)}catch(o){return{type:"error",error:o}}return n==="error"?{type:"error",error:new Nf(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?Aw(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Nf(t.init?.status||500,void 0,t.data),statusCode:zc(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:zc(t)?t.status:void 0}:Aw(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function mM(e,t,n,i,o){let l=e.headers.get("Location");if(Ue(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ov(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=Ry(new URL(t.url),u,o,l),e.headers.set("Location",l)}return e}function xw(e,t,n){if(Ov(e)){let i=e,o=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Jn(o.pathname,n)!=null;if(o.origin===t.origin&&l)return o.pathname+o.search+o.hash}return e}function ba(e,t,n,i){let o=e.createURL(hC(t)).toString(),l={signal:n};if(i&&_n(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=Dy(i.formData):l.body=i.formData}return new Request(o,l)}function Dy(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function Ew(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function gM(e,t,n,i=!1,o=!1){let l={},u=null,f,p=!1,h={},g=n&&kn(n[1])?n[1].error:void 0;return e.forEach(v=>{if(!(v.route.id in t))return;let _=v.route.id,b=t[_];if(Ue(!oo(b),"Cannot handle redirect results in processLoaderData"),kn(b)){let w=b.error;if(g!==void 0&&(w=g,g=void 0),u=u||{},o)u[_]=w;else{let I=rs(e,_);u[I.route.id]==null&&(u[I.route.id]=w)}i||(l[_]=aC),p||(p=!0,f=zc(b.error)?b.error.status:500),b.headers&&(h[_]=b.headers)}else l[_]=b.data,b.statusCode&&b.statusCode!==200&&!p&&(f=b.statusCode),b.headers&&(h[_]=b.headers)}),g!==void 0&&n&&(u={[n[0]]:g},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:h}}function Tw(e,t,n,i,o,l){let{loaderData:u,errors:f}=gM(t,n,i);return o.filter(p=>!p.matches||p.matches.some(h=>h.shouldLoad)).forEach(p=>{let{key:h,match:g,controller:v}=p;if(v&&v.signal.aborted)return;let _=l[h];if(Ue(_,"Did not find corresponding fetcher result"),kn(_)){let b=rs(e.matches,g?.route.id);f&&f[b.route.id]||(f={...f,[b.route.id]:_.error}),e.fetchers.delete(h)}else if(oo(_))Ue(!1,"Unhandled fetcher revalidation redirect");else{let b=es(_.data);e.fetchers.set(h,b)}}),{loaderData:u,errors:f}}function Cw(e,t,n,i){let o=Object.entries(t).filter(([,l])=>l!==aC).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(o[u]=e[u]),i&&i.hasOwnProperty(u))break}return o}function Rw(e){return e?kn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function rs(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function qd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Qn(e,{pathname:t,routeId:n,method:i,type:o,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new Nf(e||500,u,new Error(f),!0)}function Vd(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,o]=t[n];if(oo(o))return{key:i,result:o}}}function hC(e){let t=typeof e=="string"?Si(e):e;return ms({...t,hash:""})}function yM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function vM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&_M(n))}function _M(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function bM(e){return pC(e.result)&&JN.has(e.result.status)}function kn(e){return e.type==="error"}function oo(e){return(e&&e.type)==="redirect"}function Aw(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function pC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function SM(e){return ZN.has(e.toUpperCase())}function _n(e){return KN.has(e.toUpperCase())}function kv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function mf(e,t){let n=typeof t=="string"?Si(t).search:t.search;if(e[e.length-1].route.index&&kv(n||""))return e[e.length-1];let i=iC(e);return i[i.length-1]}function Iw(e){let{formMethod:t,formAction:n,formEncType:i,text:o,formData:l,json:u}=e;if(!(!t||!n||!i)){if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function Cg(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function wM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ic(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function xM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function es(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function EM(e,t){try{let n=e.sessionStorage.getItem(oC);if(n){let i=JSON.parse(n);for(let[o,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(o,new Set(l||[]))}}catch{}}function TM(e,t){if(t.size>0){let n={};for(let[i,o]of t)n[i]=[...o];try{e.sessionStorage.setItem(oC,JSON.stringify(n))}catch(i){xt(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function CM(){let e,t,n=new Promise((i,o)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{o(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Co=E.createContext(null);Co.displayName="DataRouter";var du=E.createContext(null);du.displayName="DataRouterState";E.createContext(!1);var Nv=E.createContext({isTransitioning:!1});Nv.displayName="ViewTransition";var mC=E.createContext(new Map);mC.displayName="Fetchers";var RM=E.createContext(null);RM.displayName="Await";var Sr=E.createContext(null);Sr.displayName="Navigation";var Rh=E.createContext(null);Rh.displayName="Location";var rr=E.createContext({outlet:null,matches:[],isDataRoute:!1});rr.displayName="Route";var Mv=E.createContext(null);Mv.displayName="RouteError";function AM(e,{relative:t}={}){Ue(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=E.useContext(Sr),{hash:o,pathname:l,search:u}=fu(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Or([n,l])),i.createHref({pathname:f,search:u,hash:o})}function Ga(){return E.useContext(Rh)!=null}function Pr(){return Ue(Ga(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Rh).location}var gC="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yC(e){E.useContext(Sr).static||E.useLayoutEffect(e)}function xs(){let{isDataRoute:e}=E.useContext(rr);return e?qM():IM()}function IM(){Ue(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(Co),{basename:t,navigator:n}=E.useContext(Sr),{matches:i}=E.useContext(rr),{pathname:o}=Pr(),l=JSON.stringify(Th(i)),u=E.useRef(!1);return yC(()=>{u.current=!0}),E.useCallback((p,h={})=>{if(xt(u.current,gC),!u.current)return;if(typeof p=="number"){n.go(p);return}let g=Ch(p,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Or([t,g.pathname])),(h.replace?n.replace:n.push)(g,h.state,h)},[t,n,l,o,e])}var DM=E.createContext(null);function OM(e){let t=E.useContext(rr).outlet;return t&&E.createElement(DM.Provider,{value:e},t)}function kM(){let{matches:e}=E.useContext(rr),t=e[e.length-1];return t?t.params:{}}function fu(e,{relative:t}={}){let{matches:n}=E.useContext(rr),{pathname:i}=Pr(),o=JSON.stringify(Th(n));return E.useMemo(()=>Ch(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function NM(e,t,n,i,o){Ue(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=E.useContext(Sr),{matches:u}=E.useContext(rr),f=u[u.length-1],p=f?f.params:{},h=f?f.pathname:"/",g=f?f.pathnameBase:"/",v=f&&f.route;{let M=v&&v.path||"";vC(h,!v||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let _=Pr(),b;b=_;let w=b.pathname||"/",I=w;if(g!=="/"){let M=g.replace(/^\//,"").split("/");I="/"+w.replace(/^\//,"").split("/").slice(M.length).join("/")}let T=ns(e,{pathname:I});return xt(v||T!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),xt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),UM(T&&T.map(M=>Object.assign({},M,{params:Object.assign({},p,M.params),pathname:Or([g,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?g:Or([g,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),u,n,i,o)}function MM(){let e=FM(),t=zc(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:l},"ErrorBoundary")," or"," ",E.createElement("code",{style:l},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,u)}var LM=E.createElement(MM,null),PM=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?E.createElement(rr.Provider,{value:this.props.routeContext},E.createElement(Mv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jM({routeContext:e,match:t,children:n}){let i=E.useContext(Co);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(rr.Provider,{value:e},n)}function UM(e,t=[],n=null,i=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let h=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);Ue(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(n)for(let h=0;h<l.length;h++){let g=l[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=h),g.route.id){let{loaderData:v,errors:_}=n,b=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||b){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,g,v)=>{let _,b=!1,w=null,I=null;n&&(_=u&&g.route.id?u[g.route.id]:void 0,w=g.route.errorElement||LM,f&&(p<0&&v===0?(vC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,I=null):p===v&&(b=!0,I=g.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,v+1)),O=()=>{let M;return _?M=w:b?M=I:g.route.Component?M=E.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=h,E.createElement(jM,{match:g,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:M})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?E.createElement(PM,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:O(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:i}):O()},null)}function Lv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $M(e){let t=E.useContext(Co);return Ue(t,Lv(e)),t}function zM(e){let t=E.useContext(du);return Ue(t,Lv(e)),t}function BM(e){let t=E.useContext(rr);return Ue(t,Lv(e)),t}function Pv(e){let t=BM(e),n=t.matches[t.matches.length-1];return Ue(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function HM(){return Pv("useRouteId")}function FM(){let e=E.useContext(Mv),t=zM("useRouteError"),n=Pv("useRouteError");return e!==void 0?e:t.errors?.[n]}function qM(){let{router:e}=$M("useNavigate"),t=Pv("useNavigate"),n=E.useRef(!1);return yC(()=>{n.current=!0}),E.useCallback(async(o,l={})=>{xt(n.current,gC),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Dw={};function vC(e,t,n){!t&&!Dw[e]&&(Dw[e]=!0,xt(!1,n))}var Ow={};function kw(e,t){!e&&!Ow[t]&&(Ow[t]=!0,console.warn(t))}function VM(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&xt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:E.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&xt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&xt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var GM=["HydrateFallback","hydrateFallbackElement"],YM=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function WM({router:e,flushSync:t,unstable_onError:n}){let[i,o]=E.useState(e.state),[l,u]=E.useState(),[f,p]=E.useState({isTransitioning:!1}),[h,g]=E.useState(),[v,_]=E.useState(),[b,w]=E.useState(),I=E.useRef(new Map),T=E.useCallback(N=>{o(A=>(N.errors&&n&&Object.entries(N.errors).forEach(([P,V])=>{A.errors?.[P]!==V&&n(V)}),N))},[n]),O=E.useCallback((N,{deletedFetchers:A,flushSync:P,viewTransitionOpts:V})=>{N.fetchers.forEach((B,z)=>{B.data!==void 0&&I.current.set(z,B.data)}),A.forEach(B=>I.current.delete(B)),kw(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let H=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(kw(V==null||H,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!V||!H){t&&P?t(()=>T(N)):E.startTransition(()=>T(N));return}if(t&&P){t(()=>{v&&(h&&h.resolve(),v.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let B=e.window.document.startViewTransition(()=>{t(()=>T(N))});B.finished.finally(()=>{t(()=>{g(void 0),_(void 0),u(void 0),p({isTransitioning:!1})})}),t(()=>_(B));return}v?(h&&h.resolve(),v.skipTransition(),w({state:N,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(u(N),p({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[e.window,t,v,h,T]);E.useLayoutEffect(()=>e.subscribe(O),[e,O]),E.useEffect(()=>{f.isTransitioning&&!f.flushSync&&g(new YM)},[f]),E.useEffect(()=>{if(h&&l&&e.window){let N=l,A=h.promise,P=e.window.document.startViewTransition(async()=>{E.startTransition(()=>T(N)),await A});P.finished.finally(()=>{g(void 0),_(void 0),u(void 0),p({isTransitioning:!1})}),_(P)}},[l,h,e.window,T]),E.useEffect(()=>{h&&l&&i.location.key===l.location.key&&h.resolve()},[h,v,i.location,l]),E.useEffect(()=>{!f.isTransitioning&&b&&(u(b.state),p({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),w(void 0))},[f.isTransitioning,b]);let M=E.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:N=>e.navigate(N),push:(N,A,P)=>e.navigate(N,{state:A,preventScrollReset:P?.preventScrollReset}),replace:(N,A,P)=>e.navigate(N,{replace:!0,state:A,preventScrollReset:P?.preventScrollReset})}),[e]),C=e.basename||"/",D=E.useMemo(()=>({router:e,navigator:M,static:!1,basename:C,unstable_onError:n}),[e,M,C,n]);return E.createElement(E.Fragment,null,E.createElement(Co.Provider,{value:D},E.createElement(du.Provider,{value:i},E.createElement(mC.Provider,{value:I.current},E.createElement(Nv.Provider,{value:f},E.createElement(ZM,{basename:C,location:i.location,navigationType:i.historyAction,navigator:M},E.createElement(QM,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var QM=E.memo(KM);function KM({routes:e,future:t,state:n,unstable_onError:i}){return NM(e,void 0,n,i,t)}function jv({to:e,replace:t,state:n,relative:i}){Ue(Ga(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=E.useContext(Sr);xt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=E.useContext(rr),{pathname:u}=Pr(),f=xs(),p=Ch(e,Th(l),u,i==="path"),h=JSON.stringify(p);return E.useEffect(()=>{f(JSON.parse(h),{replace:t,state:n,relative:i})},[f,h,i,t,n]),null}function XM(e){return OM(e.context)}function Wn(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ZM({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){Ue(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=E.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=Si(n));let{pathname:p="/",search:h="",hash:g="",state:v=null,key:_="default"}=n,b=E.useMemo(()=>{let w=Jn(p,u);return w==null?null:{location:{pathname:w,search:h,hash:g,state:v,key:_},navigationType:i}},[u,p,h,g,v,_,i]);return xt(b!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:E.createElement(Sr.Provider,{value:f},E.createElement(Rh.Provider,{children:t,value:b}))}function Oy(e,t=[]){let n=[];return E.Children.forEach(e,(i,o)=>{if(!E.isValidElement(i))return;let l=[...t,o];if(i.type===E.Fragment){n.push.apply(n,Oy(i.props.children,l));return}Ue(i.type===Wn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Oy(i.props.children,l)),n.push(u)}),n}var JM=Oy,gf="get",yf="application/x-www-form-urlencoded";function Ah(e){return e!=null&&typeof e.tagName=="string"}function e2(e){return Ah(e)&&e.tagName.toLowerCase()==="button"}function t2(e){return Ah(e)&&e.tagName.toLowerCase()==="form"}function n2(e){return Ah(e)&&e.tagName.toLowerCase()==="input"}function r2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function i2(e,t){return e.button===0&&(!t||t==="_self")&&!r2(e)}function ky(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function s2(e,t){let n=ky(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}var Gd=null;function o2(){if(Gd===null)try{new FormData(document.createElement("form"),0),Gd=!1}catch{Gd=!0}return Gd}var a2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rg(e){return e!=null&&!a2.has(e)?(xt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yf}"`),null):e}function l2(e,t){let n,i,o,l,u;if(t2(e)){let f=e.getAttribute("action");i=f?Jn(f,t):null,n=e.getAttribute("method")||gf,o=Rg(e.getAttribute("enctype"))||yf,l=new FormData(e)}else if(e2(e)||n2(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(i=p?Jn(p,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||gf,o=Rg(e.getAttribute("formenctype"))||Rg(f.getAttribute("enctype"))||yf,l=new FormData(f,e),!o2()){let{name:h,type:g,value:v}=e;if(g==="image"){let _=h?`${h}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else h&&l.append(h,v)}}else{if(Ah(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=gf,i=null,o=yf,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function c2(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Jn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function u2(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function d2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function f2(e,t,n){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await u2(l,n);return u.links?u.links():[]}return[]}));return g2(i.flat(1).filter(d2).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Nw(e,t,n,i,o,l){let u=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,f=(p,h)=>n[h].pathname!==p.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==p.params["*"];return l==="assets"?t.filter((p,h)=>u(p,h)||f(p,h)):l==="data"?t.filter((p,h)=>{let g=i.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(u(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function h2(e,t,{includeHydrateFallback:n}={}){return p2(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function p2(e){return[...new Set(e)]}function m2(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function g2(e,t){let n=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(m2(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function _C(){let e=E.useContext(Co);return Uv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function y2(){let e=E.useContext(du);return Uv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var $v=E.createContext(void 0);$v.displayName="FrameworkContext";function bC(){let e=E.useContext($v);return Uv(e,"You must render this element inside a <HydratedRouter> element"),e}function v2(e,t){let n=E.useContext($v),[i,o]=E.useState(!1),[l,u]=E.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=t,_=E.useRef(null);E.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let I=O=>{O.forEach(M=>{u(M.isIntersecting)})},T=new IntersectionObserver(I,{threshold:.5});return _.current&&T.observe(_.current),()=>{T.disconnect()}}},[e]),E.useEffect(()=>{if(i){let I=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(I)}}},[i]);let b=()=>{o(!0)},w=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,_,{}]:[l,_,{onFocus:sc(f,b),onBlur:sc(p,w),onMouseEnter:sc(h,b),onMouseLeave:sc(g,w),onTouchStart:sc(v,b)}]:[!1,_,{}]}function sc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function _2({page:e,...t}){let{router:n}=_C(),i=E.useMemo(()=>ns(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?E.createElement(S2,{page:e,matches:i,...t}):null}function b2(e){let{manifest:t,routeModules:n}=bC(),[i,o]=E.useState([]);return E.useEffect(()=>{let l=!1;return f2(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),i}function S2({page:e,matches:t,...n}){let i=Pr(),{manifest:o,routeModules:l}=bC(),{basename:u}=_C(),{loaderData:f,matches:p}=y2(),h=E.useMemo(()=>Nw(e,t,p,o,i,"data"),[e,t,p,o,i]),g=E.useMemo(()=>Nw(e,t,p,o,i,"assets"),[e,t,p,o,i]),v=E.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let w=new Set,I=!1;if(t.forEach(O=>{let M=o.routes[O.route.id];!M||!M.hasLoader||(!h.some(C=>C.route.id===O.route.id)&&O.route.id in f&&l[O.route.id]?.shouldRevalidate||M.hasClientLoader?I=!0:w.add(O.route.id))}),w.size===0)return[];let T=c2(e,u,"data");return I&&w.size>0&&T.searchParams.set("_routes",t.filter(O=>w.has(O.route.id)).map(O=>O.route.id).join(",")),[T.pathname+T.search]},[u,f,i,o,h,t,e,l]),_=E.useMemo(()=>h2(g,o),[g,o]),b=b2(g);return E.createElement(E.Fragment,null,v.map(w=>E.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),_.map(w=>E.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),b.map(({key:w,link:I})=>E.createElement("link",{key:w,nonce:n.nonce,...I})))}function w2(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var SC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{SC&&(window.__reactRouterVersion="7.9.1")}catch{}function x2(e,t){return iM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:xN({window:t?.window}),hydrationData:E2(),routes:e,mapRouteProperties:VM,hydrationRouteProperties:GM,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function E2(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:T2(e.errors)}),e}function T2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,o]of t)if(o&&o.__type==="RouteErrorResponse")n[i]=new Nf(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let u=new l(o.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(o.message);l.stack="",n[i]=l}}else n[i]=o;return n}var wC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Es=E.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:h,preventScrollReset:g,viewTransition:v,..._},b){let{basename:w}=E.useContext(Sr),I=typeof h=="string"&&wC.test(h),T,O=!1;if(typeof h=="string"&&I&&(T=h,SC))try{let H=new URL(window.location.href),B=h.startsWith("//")?new URL(H.protocol+h):new URL(h),z=Jn(B.pathname,w);B.origin===H.origin&&z!=null?h=z+B.search+B.hash:O=!0}catch{xt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=AM(h,{relative:o}),[C,D,N]=v2(i,_),A=A2(h,{replace:u,state:f,target:p,preventScrollReset:g,relative:o,viewTransition:v});function P(H){t&&t(H),H.defaultPrevented||A(H)}let V=E.createElement("a",{..._,...N,href:T||M,onClick:O||l?t:P,ref:w2(b,D),target:p,"data-discover":!I&&n==="render"?"true":void 0});return C&&!I?E.createElement(E.Fragment,null,V,E.createElement(_2,{page:M})):V});Es.displayName="Link";var zv=E.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...h},g){let v=fu(u,{relative:h.relative}),_=Pr(),b=E.useContext(du),{navigator:w,basename:I}=E.useContext(Sr),T=b!=null&&M2(v)&&f===!0,O=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,M=_.pathname,C=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(M=M.toLowerCase(),C=C?C.toLowerCase():null,O=O.toLowerCase()),C&&I&&(C=Jn(C,I)||C);const D=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let N=M===O||!o&&M.startsWith(O)&&M.charAt(D)==="/",A=C!=null&&(C===O||!o&&C.startsWith(O)&&C.charAt(O.length)==="/"),P={isActive:N,isPending:A,isTransitioning:T},V=N?t:void 0,H;typeof i=="function"?H=i(P):H=[i,N?"active":null,A?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(P):l;return E.createElement(Es,{...h,"aria-current":V,className:H,ref:g,style:B,to:u,viewTransition:f},typeof p=="function"?p(P):p)});zv.displayName="NavLink";var C2=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:l,method:u=gf,action:f,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:v,..._},b)=>{let w=k2(),I=N2(f,{relative:h}),T=u.toLowerCase()==="get"?"get":"post",O=typeof f=="string"&&wC.test(f),M=C=>{if(p&&p(C),C.defaultPrevented)return;C.preventDefault();let D=C.nativeEvent.submitter,N=D?.getAttribute("formmethod")||u;w(D||C.currentTarget,{fetcherKey:t,method:N,navigate:n,replace:o,state:l,relative:h,preventScrollReset:g,viewTransition:v})};return E.createElement("form",{ref:b,method:T,action:I,onSubmit:i?p:M,..._,"data-discover":!O&&e==="render"?"true":void 0})});C2.displayName="Form";function R2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xC(e){let t=E.useContext(Co);return Ue(t,R2(e)),t}function A2(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=xs(),p=Pr(),h=fu(e,{relative:l});return E.useCallback(g=>{if(i2(g,t)){g.preventDefault();let v=n!==void 0?n:ms(p)===ms(h);f(e,{replace:v,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[p,f,h,n,i,t,e,o,l,u])}function I2(e){xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=E.useRef(ky(e)),n=E.useRef(!1),i=Pr(),o=E.useMemo(()=>s2(i.search,n.current?null:t.current),[i.search]),l=xs(),u=E.useCallback((f,p)=>{const h=ky(typeof f=="function"?f(new URLSearchParams(o)):f);n.current=!0,l("?"+h,p)},[l,o]);return[o,u]}var D2=0,O2=()=>`__${String(++D2)}__`;function k2(){let{router:e}=xC("useSubmit"),{basename:t}=E.useContext(Sr),n=HM();return E.useCallback(async(i,o={})=>{let{action:l,method:u,encType:f,formData:p,body:h}=l2(i,t);if(o.navigate===!1){let g=o.fetcherKey||O2();await e.fetch(g,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function N2(e,{relative:t}={}){let{basename:n}=E.useContext(Sr),i=E.useContext(rr);Ue(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...fu(e||".",{relative:t})},u=Pr();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Or([n,l.pathname])),ms(l)}function M2(e,{relative:t}={}){let n=E.useContext(Nv);Ue(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=xC("useViewTransitionState"),o=fu(e,{relative:t});if(!n.isTransitioning)return!1;let l=Jn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Jn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return kf(o.pathname,u)!=null||kf(o.pathname,l)!=null}var L2=YT();function P2(e){return E.createElement(WM,{flushSync:L2.flushSync,...e})}var Gt=function(){return Gt=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Gt.apply(this,arguments)};function Bc(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var mt="-ms-",Tc="-moz-",tt="-webkit-",EC="comm",Ih="rule",Bv="decl",j2="@import",TC="@keyframes",U2="@layer",CC=Math.abs,Hv=String.fromCharCode,Ny=Object.assign;function $2(e,t){return qt(e,0)^45?(((t<<2^qt(e,0))<<2^qt(e,1))<<2^qt(e,2))<<2^qt(e,3):0}function RC(e){return e.trim()}function ai(e,t){return(e=t.exec(e))?e[0]:e}function Be(e,t,n){return e.replace(t,n)}function vf(e,t,n){return e.indexOf(t,n)}function qt(e,t){return e.charCodeAt(t)|0}function Oa(e,t,n){return e.slice(t,n)}function Dr(e){return e.length}function AC(e){return e.length}function bc(e,t){return t.push(e),e}function z2(e,t){return e.map(t).join("")}function Mw(e,t){return e.filter(function(n){return!ai(n,t)})}var Dh=1,ka=1,IC=0,er=0,Lt=0,Ya="";function Oh(e,t,n,i,o,l,u,f){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:Dh,column:ka,length:u,return:"",siblings:f}}function ts(e,t){return Ny(Oh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ma(e){for(;e.root;)e=ts(e.root,{children:[e]});bc(e,e.siblings)}function B2(){return Lt}function H2(){return Lt=er>0?qt(Ya,--er):0,ka--,Lt===10&&(ka=1,Dh--),Lt}function pr(){return Lt=er<IC?qt(Ya,er++):0,ka++,Lt===10&&(ka=1,Dh++),Lt}function fo(){return qt(Ya,er)}function _f(){return er}function kh(e,t){return Oa(Ya,e,t)}function My(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F2(e){return Dh=ka=1,IC=Dr(Ya=e),er=0,[]}function q2(e){return Ya="",e}function Ag(e){return RC(kh(er-1,Ly(e===91?e+2:e===40?e+1:e)))}function V2(e){for(;(Lt=fo())&&Lt<33;)pr();return My(e)>2||My(Lt)>3?"":" "}function G2(e,t){for(;--t&&pr()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return kh(e,_f()+(t<6&&fo()==32&&pr()==32))}function Ly(e){for(;pr();)switch(Lt){case e:return er;case 34:case 39:e!==34&&e!==39&&Ly(Lt);break;case 40:e===41&&Ly(e);break;case 92:pr();break}return er}function Y2(e,t){for(;pr()&&e+Lt!==57;)if(e+Lt===84&&fo()===47)break;return"/*"+kh(t,er-1)+"*"+Hv(e===47?e:pr())}function W2(e){for(;!My(fo());)pr();return kh(e,er)}function Q2(e){return q2(bf("",null,null,null,[""],e=F2(e),0,[0],e))}function bf(e,t,n,i,o,l,u,f,p){for(var h=0,g=0,v=u,_=0,b=0,w=0,I=1,T=1,O=1,M=0,C="",D=o,N=l,A=i,P=C;T;)switch(w=M,M=pr()){case 40:if(w!=108&&qt(P,v-1)==58){vf(P+=Be(Ag(M),"&","&\f"),"&\f",CC(h?f[h-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:P+=Ag(M);break;case 9:case 10:case 13:case 32:P+=V2(w);break;case 92:P+=G2(_f()-1,7);continue;case 47:switch(fo()){case 42:case 47:bc(K2(Y2(pr(),_f()),t,n,p),p);break;default:P+="/"}break;case 123*I:f[h++]=Dr(P)*O;case 125*I:case 59:case 0:switch(M){case 0:case 125:T=0;case 59+g:O==-1&&(P=Be(P,/\f/g,"")),b>0&&Dr(P)-v&&bc(b>32?Pw(P+";",i,n,v-1,p):Pw(Be(P," ","")+";",i,n,v-2,p),p);break;case 59:P+=";";default:if(bc(A=Lw(P,t,n,h,g,o,f,C,D=[],N=[],v,l),l),M===123)if(g===0)bf(P,t,A,A,D,l,v,f,N);else switch(_===99&&qt(P,3)===110?100:_){case 100:case 108:case 109:case 115:bf(e,A,A,i&&bc(Lw(e,A,A,0,0,o,f,C,o,D=[],v,N),N),o,N,v,f,i?D:N);break;default:bf(P,A,A,A,[""],N,0,f,N)}}h=g=b=0,I=O=1,C=P="",v=u;break;case 58:v=1+Dr(P),b=w;default:if(I<1){if(M==123)--I;else if(M==125&&I++==0&&H2()==125)continue}switch(P+=Hv(M),M*I){case 38:O=g>0?1:(P+="\f",-1);break;case 44:f[h++]=(Dr(P)-1)*O,O=1;break;case 64:fo()===45&&(P+=Ag(pr())),_=fo(),g=v=Dr(C=P+=W2(_f())),M++;break;case 45:w===45&&Dr(P)==2&&(I=0)}}return l}function Lw(e,t,n,i,o,l,u,f,p,h,g,v){for(var _=o-1,b=o===0?l:[""],w=AC(b),I=0,T=0,O=0;I<i;++I)for(var M=0,C=Oa(e,_+1,_=CC(T=u[I])),D=e;M<w;++M)(D=RC(T>0?b[M]+" "+C:Be(C,/&\f/g,b[M])))&&(p[O++]=D);return Oh(e,t,n,o===0?Ih:f,p,h,g,v)}function K2(e,t,n,i){return Oh(e,t,n,EC,Hv(B2()),Oa(e,2,-2),0,i)}function Pw(e,t,n,i,o){return Oh(e,t,n,Bv,Oa(e,0,i),Oa(e,i+1,-1),i,o)}function DC(e,t,n){switch($2(e,t)){case 5103:return tt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+e+e;case 4789:return Tc+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+e+Tc+e+mt+e+e;case 5936:switch(qt(e,t+11)){case 114:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return tt+e+mt+e+e;case 6165:return tt+e+mt+"flex-"+e+e;case 5187:return tt+e+Be(e,/(\w+).+(:[^]+)/,tt+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return tt+e+mt+"flex-item-"+Be(e,/flex-|-self/g,"")+(ai(e,/flex-|baseline/)?"":mt+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return tt+e+mt+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return tt+e+mt+Be(e,"shrink","negative")+e;case 5292:return tt+e+mt+Be(e,"basis","preferred-size")+e;case 6060:return tt+"box-"+Be(e,"-grow","")+tt+e+mt+Be(e,"grow","positive")+e;case 4554:return tt+Be(e,/([^-])(transform)/g,"$1"+tt+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+e+e;case 4200:if(!ai(e,/flex-|baseline/))return mt+"grid-column-align"+Oa(e,t)+e;break;case 2592:case 3360:return mt+Be(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,ai(i.props,/grid-\w+-end/)})?~vf(e+(n=n[t].value),"span",0)?e:mt+Be(e,"-start","")+e+mt+"grid-row-span:"+(~vf(n,"span",0)?ai(n,/\d+/):+ai(n,/\d+/)-+ai(e,/\d+/))+";":mt+Be(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return ai(i.props,/grid-\w+-start/)})?e:mt+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,tt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dr(e)-1-t>6)switch(qt(e,t+1)){case 109:if(qt(e,t+4)!==45)break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Tc+(qt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vf(e,"stretch",0)?DC(Be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,f,p,h){return mt+o+":"+l+h+(u?mt+o+"-span:"+(f?p:+p-+l)+h:"")+e});case 4949:if(qt(e,t+6)===121)return Be(e,":",":"+tt)+e;break;case 6444:switch(qt(e,qt(e,14)===45?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(qt(e,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+mt+"$2box$3")+e;case 100:return Be(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function Lf(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function X2(e,t,n,i){switch(e.type){case U2:if(e.children.length)break;case j2:case Bv:return e.return=e.return||e.value;case EC:return"";case TC:return e.return=e.value+"{"+Lf(e.children,i)+"}";case Ih:if(!Dr(e.value=e.props.join(",")))return""}return Dr(n=Lf(e.children,i))?e.return=e.value+"{"+n+"}":""}function Z2(e){var t=AC(e);return function(n,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,o,l)||"";return u}}function J2(e){return function(t){t.root||(t=t.return)&&e(t)}}function eL(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Bv:e.return=DC(e.value,e.length,n);return;case TC:return Lf([ts(e,{value:Be(e.value,"@","@"+tt)})],i);case Ih:if(e.length)return z2(n=e.props,function(o){switch(ai(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ma(ts(e,{props:[Be(o,/:(read-\w+)/,":"+Tc+"$1")]})),ma(ts(e,{props:[o]})),Ny(e,{props:Mw(n,i)});break;case"::placeholder":ma(ts(e,{props:[Be(o,/:(plac\w+)/,":"+tt+"input-$1")]})),ma(ts(e,{props:[Be(o,/:(plac\w+)/,":"+Tc+"$1")]})),ma(ts(e,{props:[Be(o,/:(plac\w+)/,mt+"input-$1")]})),ma(ts(e,{props:[o]})),Ny(e,{props:Mw(n,i)});break}return""})}}var tL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},Na=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",OC="active",kC="data-styled-version",Nh="6.1.19",Fv=`/*!sc*/
`,Pf=typeof window<"u"&&typeof document<"u",nL=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),rL={},Mh=Object.freeze([]),Ma=Object.freeze({});function NC(e,t,n){return n===void 0&&(n=Ma),e.theme!==n.theme&&e.theme||t||n.theme}var MC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),iL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sL=/(^-|-$)/g;function jw(e){return e.replace(iL,"-").replace(sL,"")}var oL=/(a)(d)/gi,Yd=52,Uw=function(e){return String.fromCharCode(e+(e>25?39:97))};function Py(e){var t,n="";for(t=Math.abs(e);t>Yd;t=t/Yd|0)n=Uw(t%Yd)+n;return(Uw(t%Yd)+n).replace(oL,"$1-$2")}var Ig,LC=5381,Sa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},PC=function(e){return Sa(LC,e)};function jC(e){return Py(PC(e)>>>0)}function aL(e){return e.displayName||e.name||"Component"}function Dg(e){return typeof e=="string"&&!0}var UC=typeof Symbol=="function"&&Symbol.for,$C=UC?Symbol.for("react.memo"):60115,lL=UC?Symbol.for("react.forward_ref"):60112,cL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dL=((Ig={})[lL]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ig[$C]=zC,Ig);function $w(e){return("type"in(t=e)&&t.type.$$typeof)===$C?zC:"$$typeof"in e?dL[e.$$typeof]:cL;var t}var fL=Object.defineProperty,hL=Object.getOwnPropertyNames,zw=Object.getOwnPropertySymbols,pL=Object.getOwnPropertyDescriptor,mL=Object.getPrototypeOf,Bw=Object.prototype;function BC(e,t,n){if(typeof t!="string"){if(Bw){var i=mL(t);i&&i!==Bw&&BC(e,i,n)}var o=hL(t);zw&&(o=o.concat(zw(t)));for(var l=$w(e),u=$w(t),f=0;f<o.length;++f){var p=o[f];if(!(p in uL||n&&n[p]||u&&p in u||l&&p in l)){var h=pL(t,p);try{fL(e,p,h)}catch{}}}}return e}function ho(e){return typeof e=="function"}function qv(e){return typeof e=="object"&&"styledComponentId"in e}function ao(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jy(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Hc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Uy(e,t,n){if(n===void 0&&(n=!1),!n&&!Hc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Uy(e[i],t[i]);else if(Hc(t))for(var i in t)e[i]=Uy(e[i],t[i]);return e}function Vv(e,t){Object.defineProperty(e,"toString",{value:t})}function gs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var gL=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw gs(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,n.length);u<p;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Fv);return n},e})(),Sf=new Map,jf=new Map,wf=1,Wd=function(e){if(Sf.has(e))return Sf.get(e);for(;jf.has(wf);)wf++;var t=wf++;return Sf.set(e,t),jf.set(t,e),t},yL=function(e,t){wf=t+1,Sf.set(e,t),jf.set(t,e)},vL="style[".concat(Na,"][").concat(kC,'="').concat(Nh,'"]'),_L=new RegExp("^".concat(Na,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bL=function(e,t,n){for(var i,o=n.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},SL=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Fv),o=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var p=f.match(_L);if(p){var h=0|parseInt(p[1],10),g=p[2];h!==0&&(yL(g,h),bL(e,g,p[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(f)}}},Hw=function(e){for(var t=document.querySelectorAll(vL),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(Na)!==OC&&(SL(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function wL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var HC=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=(function(f){var p=Array.from(f.querySelectorAll("style[".concat(Na,"]")));return p[p.length-1]})(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(Na,OC),i.setAttribute(kC,Nh);var u=wL();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},xL=(function(){function e(t){this.element=HC(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===n)return u}throw gs(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),EL=(function(){function e(t){this.element=HC(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),TL=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),Fw=Pf,CL={isServer:!Pf,useCSSOMInjection:!nL},Uf=(function(){function e(t,n,i){t===void 0&&(t=Ma),n===void 0&&(n={});var o=this;this.options=Gt(Gt({},CL),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Pf&&Fw&&(Fw=!1,Hw(this)),Vv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,p="",h=function(v){var _=(function(O){return jf.get(O)})(v);if(_===void 0)return"continue";var b=l.names.get(_),w=u.getGroup(v);if(b===void 0||!b.size||w.length===0)return"continue";var I="".concat(Na,".g").concat(v,'[id="').concat(_,'"]'),T="";b!==void 0&&b.forEach(function(O){O.length>0&&(T+="".concat(O,","))}),p+="".concat(w).concat(I,'{content:"').concat(T,'"}').concat(Fv)},g=0;g<f;g++)h(g);return p})(o)})}return e.registerId=function(t){return Wd(t)},e.prototype.rehydrate=function(){!this.server&&Pf&&Hw(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Gt(Gt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new TL(o):i?new xL(o):new EL(o)})(this.options),new gL(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Wd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Wd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Wd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),RL=/&/g,AL=/^\s*\/\/.*$/gm;function FC(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=FC(n.children,t)),n})}function IL(e){var t,n,i,o=Ma,l=o.options,u=l===void 0?Ma:l,f=o.plugins,p=f===void 0?Mh:f,h=function(_,b,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):_},g=p.slice();g.push(function(_){_.type===Ih&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(RL,n).replace(i,h))}),u.prefix&&g.push(eL),g.push(X2);var v=function(_,b,w,I){b===void 0&&(b=""),w===void 0&&(w=""),I===void 0&&(I="&"),t=I,n=b,i=new RegExp("\\".concat(n,"\\b"),"g");var T=_.replace(AL,""),O=Q2(w||b?"".concat(w," ").concat(b," { ").concat(T," }"):T);u.namespace&&(O=FC(O,u.namespace));var M=[];return Lf(O,Z2(g.concat(J2(function(C){return M.push(C)})))),M};return v.hash=p.length?p.reduce(function(_,b){return b.name||gs(15),Sa(_,b.name)},LC).toString():"",v}var DL=new Uf,$y=IL(),qC=dr.createContext({shouldForwardProp:void 0,styleSheet:DL,stylis:$y});qC.Consumer;dr.createContext(void 0);function zy(){return E.useContext(qC)}var OL=(function(){function e(t,n){var i=this;this.inject=function(o,l){l===void 0&&(l=$y);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Vv(this,function(){throw gs(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$y),this.name+t.hash},e})(),kL=function(e){return e>="A"&&e<="Z"};function qw(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;kL(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var VC=function(e){return e==null||e===!1||e===""},GC=function(e){var t,n,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!VC(l)&&(Array.isArray(l)&&l.isCss||ho(l)?i.push("".concat(qw(o),":"),l,";"):Hc(l)?i.push.apply(i,Bc(Bc(["".concat(o," {")],GC(l),!1),["}"],!1)):i.push("".concat(qw(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in tL||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function cs(e,t,n,i){if(VC(e))return[];if(qv(e))return[".".concat(e.styledComponentId)];if(ho(e)){if(!ho(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return cs(o,t,n,i)}var l;return e instanceof OL?n?(e.inject(n,i),[e.getName(i)]):[e]:Hc(e)?GC(e):Array.isArray(e)?Array.prototype.concat.apply(Mh,e.map(function(u){return cs(u,t,n,i)})):[e.toString()]}function YC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ho(n)&&!qv(n))return!1}return!0}var NL=PC(Nh),ML=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&YC(t),this.componentId=n,this.baseHash=Sa(NL,n),this.baseStyle=i,Uf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ao(o,this.staticRulesId);else{var l=jy(cs(this.rules,t,n,i)),u=Py(Sa(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}o=ao(o,u),this.staticRulesId=u}else{for(var p=Sa(this.baseHash,i.hash),h="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")h+=v;else if(v){var _=jy(cs(v,t,n,i));p=Sa(p,_+g),h+=_}}if(h){var b=Py(p>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,i(h,".".concat(b),void 0,this.componentId)),o=ao(o,b)}}return o},e})(),La=dr.createContext(void 0);La.Consumer;function Gv(){var e=E.useContext(La);if(!e)throw gs(18);return e}function LL(e){var t=dr.useContext(La),n=E.useMemo(function(){return(function(i,o){if(!i)throw gs(14);if(ho(i)){var l=i(o);return l}if(Array.isArray(i)||typeof i!="object")throw gs(8);return o?Gt(Gt({},o),i):i})(e.theme,t)},[e.theme,t]);return e.children?dr.createElement(La.Provider,{value:n},e.children):null}var Og={};function PL(e,t,n){var i=qv(e),o=e,l=!Dg(e),u=t.attrs,f=u===void 0?Mh:u,p=t.componentId,h=p===void 0?(function(D,N){var A=typeof D!="string"?"sc":jw(D);Og[A]=(Og[A]||0)+1;var P="".concat(A,"-").concat(jC(Nh+A+Og[A]));return N?"".concat(N,"-").concat(P):P})(t.displayName,t.parentComponentId):p,g=t.displayName,v=g===void 0?(function(D){return Dg(D)?"styled.".concat(D):"Styled(".concat(aL(D),")")})(e):g,_=t.displayName&&t.componentId?"".concat(jw(t.displayName),"-").concat(t.componentId):t.componentId||h,b=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,w=t.shouldForwardProp;if(i&&o.shouldForwardProp){var I=o.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;w=function(D,N){return I(D,N)&&T(D,N)}}else w=I}var O=new ML(n,_,i?o.componentStyle:void 0);function M(D,N){return(function(A,P,V){var H=A.attrs,B=A.componentStyle,z=A.defaultProps,G=A.foldedComponentIds,q=A.styledComponentId,te=A.target,oe=dr.useContext(La),j=zy(),J=A.shouldForwardProp||j.shouldForwardProp,ne=NC(P,oe,z)||Ma,le=(function(me,pe,Ae){for(var be,Oe=Gt(Gt({},pe),{className:void 0,theme:Ae}),$e=0;$e<me.length;$e+=1){var _t=ho(be=me[$e])?be(Oe):be;for(var gt in _t)Oe[gt]=gt==="className"?ao(Oe[gt],_t[gt]):gt==="style"?Gt(Gt({},Oe[gt]),_t[gt]):_t[gt]}return pe.className&&(Oe.className=ao(Oe.className,pe.className)),Oe})(H,P,ne),k=le.as||te,K={};for(var ce in le)le[ce]===void 0||ce[0]==="$"||ce==="as"||ce==="theme"&&le.theme===ne||(ce==="forwardedAs"?K.as=le.forwardedAs:J&&!J(ce,k)||(K[ce]=le[ce]));var ie=(function(me,pe){var Ae=zy(),be=me.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return be})(B,le),de=ao(G,q);return ie&&(de+=" "+ie),le.className&&(de+=" "+le.className),K[Dg(k)&&!MC.has(k)?"class":"className"]=de,V&&(K.ref=V),E.createElement(k,K)})(C,D,N)}M.displayName=v;var C=dr.forwardRef(M);return C.attrs=b,C.componentStyle=O,C.displayName=v,C.shouldForwardProp=w,C.foldedComponentIds=i?ao(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=_,C.target=i?o.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=i?(function(N){for(var A=[],P=1;P<arguments.length;P++)A[P-1]=arguments[P];for(var V=0,H=A;V<H.length;V++)Uy(N,H[V],!0);return N})({},o.defaultProps,D):D}}),Vv(C,function(){return".".concat(C.styledComponentId)}),l&&BC(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Vw(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var Gw=function(e){return Object.assign(e,{isCss:!0})};function nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ho(e)||Hc(e))return Gw(cs(Vw(Mh,Bc([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?cs(i):Gw(cs(Vw(i,t)))}function By(e,t,n){if(n===void 0&&(n=Ma),!t)throw gs(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,nn.apply(void 0,Bc([o],l,!1)))};return i.attrs=function(o){return By(e,t,Gt(Gt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return By(e,t,Gt(Gt({},n),o))},i}var WC=function(e){return By(PL,e)},R=WC;MC.forEach(function(e){R[e]=WC(e)});var jL=(function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=YC(t),Uf.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,o){var l=o(jy(cs(this.rules,n,i,o)),""),u=this.componentId+t;i.insertRules(u,u,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,o){t>2&&Uf.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,o)},e})();function UL(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=nn.apply(void 0,Bc([e],t,!1)),o="sc-global-".concat(jC(JSON.stringify(i))),l=new jL(i,o),u=function(p){var h=zy(),g=dr.useContext(La),v=dr.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&f(v,p,h.styleSheet,g,h.stylis),dr.useLayoutEffect(function(){if(!h.styleSheet.server)return f(v,p,h.styleSheet,g,h.stylis),function(){return l.removeStyles(v,h.styleSheet)}},[v,p,h.styleSheet,g,h.stylis]),null};function f(p,h,g,v,_){if(l.isStatic)l.renderStyles(p,rL,g,_);else{var b=Gt(Gt({},h),{theme:NC(h,v,u.defaultProps)});l.renderStyles(p,b,g,_)}}return dr.memo(u)}const Ta=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,ys=globalThis,Cc="10.11.0";function QC(){return Yv(ys),ys}function Yv(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Cc,t[Cc]=t[Cc]||{}}function Wv(e,t,n=ys){const i=n.__SENTRY__=n.__SENTRY__||{},o=i[Cc]=i[Cc]||{};return o[e]||(o[e]=t())}const $L="Sentry Logger ",Yw={};function zL(e){if(!("console"in ys))return e();const t=ys.console,n={},i=Object.keys(Yw);i.forEach(o=>{const l=Yw[o];n[o]=t[o],t[o]=l});try{return e()}finally{i.forEach(o=>{t[o]=n[o]})}}function BL(){Kv().enabled=!0}function HL(){Kv().enabled=!1}function KC(){return Kv().enabled}function FL(...e){Qv("log",...e)}function qL(...e){Qv("warn",...e)}function VL(...e){Qv("error",...e)}function Qv(e,...t){Ta&&KC()&&zL(()=>{ys.console[e](`${$L}[${e}]:`,...t)})}function Kv(){return Ta?Wv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const xf={enable:BL,disable:HL,isEnabled:KC,log:FL,warn:qL,error:VL},GL=Object.prototype.toString;function YL(e,t){return GL.call(e)===`[object ${t}]`}function WL(e){return YL(e,"Object")}function QL(e){return!!(e?.then&&typeof e.then=="function")}function KL(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function XL(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{Ta&&xf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function ZL(){const e=ys;return e.crypto||e.msCrypto}function Rc(e=ZL()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const XC=1e3;function ZC(){return Date.now()/XC}function JL(){const{performance:e}=ys;if(!e?.now||!e.timeOrigin)return ZC;const t=e.timeOrigin;return()=>(t+e.now())/XC}let Ww;function eP(){return(Ww??(Ww=JL()))()}function tP(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||eP(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Rc()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function JC(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=JC(i[o],t[o],n-1));return i}function Qw(){return Rc()}const Hy="_sentrySpan";function Kw(e,t){t?XL(e,Hy,t):delete e[Hy]}function Xw(e){return e[Hy]}const nP=100;class po{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Qw(),sampleRand:Math.random()}}clone(){const t=new po;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,Kw(t,Xw(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&tP(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof po?n.getScopeData():WL(n)?t:void 0,{tags:o,extra:l,user:u,contexts:f,level:p,fingerprint:h=[],propagationContext:g}=i||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),p&&(this._level=p),h.length&&(this._fingerprint=h),g&&(this._propagationContext=g),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,Kw(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Qw(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:nP;if(i<=0)return this;const o={timestamp:ZC(),...t,message:t.message?KL(t.message,2048):t.message};return this._breadcrumbs.push(o),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:Xw(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=JC(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Rc();if(!this._client)return Ta&&xf.warn("No client configured on scope - will not capture exception!"),i;const o=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:o,...n,event_id:i},this),i}captureMessage(t,n,i){const o=i?.event_id||Rc();if(!this._client)return Ta&&xf.warn("No client configured on scope - will not capture message!"),o;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:o},this),o}captureEvent(t,n){const i=n?.event_id||Rc();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(Ta&&xf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function rP(){return Wv("defaultCurrentScope",()=>new po)}function iP(){return Wv("defaultIsolationScope",()=>new po)}class sP{constructor(t,n){let i;t?i=t:i=new po;let o;n?o=n:o=new po,this._stack=[{scope:i}],this._isolationScope=o}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(o){throw this._popScope(),o}return QL(i)?i.then(o=>(this._popScope(),o),o=>{throw this._popScope(),o}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Pa(){const e=QC(),t=Yv(e);return t.stack=t.stack||new sP(rP(),iP())}function oP(e){return Pa().withScope(e)}function aP(e,t){const n=Pa();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function Zw(e){return Pa().withScope(()=>e(Pa().getIsolationScope()))}function lP(){return{withIsolationScope:Zw,withScope:oP,withSetScope:aP,withSetIsolationScope:(e,t)=>Zw(t),getCurrentScope:()=>Pa().getScope(),getIsolationScope:()=>Pa().getIsolationScope()}}function cP(e){const t=Yv(e);return t.acs?t.acs:lP()}function eR(){const e=QC();return cP(e).getCurrentScope()}function Nr(e,t){return eR().captureException(e,void 0)}function Xv(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return eR().captureMessage(e,n,i)}const uP=()=>{};var Jw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(e,t){if(!e)throw Wa(t)},Wa=function(e){return new Error("Firebase Database ("+tR.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},dP=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=e[n++];t[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=e[n++],u=e[n++],f=e[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(p>>10)),t[i++]=String.fromCharCode(56320+(p&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return t.join("")},Zv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const l=e[o],u=o+1<e.length,f=u?e[o+1]:0,p=o+2<e.length,h=p?e[o+2]:0,g=l>>2,v=(l&3)<<4|f>>4;let _=(f&15)<<2|h>>6,b=h&63;p||(b=64,u||(_=64)),i.push(n[g],n[v],n[_],n[b])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nR(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):dP(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const l=n[e.charAt(o++)],f=o<e.length?n[e.charAt(o)]:0;++o;const h=o<e.length?n[e.charAt(o)]:64;++o;const v=o<e.length?n[e.charAt(o)]:64;if(++o,l==null||f==null||h==null||v==null)throw new fP;const _=l<<2|f>>4;if(i.push(_),h!==64){const b=f<<4&240|h>>2;if(i.push(b),v!==64){const w=h<<6&192|v;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class fP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rR=function(e){const t=nR(e);return Zv.encodeByteArray(t,!0)},$f=function(e){return rR(e).replace(/\./g,"")},zf=function(e){try{return Zv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(e){return iR(void 0,e)}function iR(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!pP(n)||(e[n]=iR(e[n],t[n]));return e}function pP(e){return e!=="__proto__"}/**
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
 */function mP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gP=()=>mP().__FIREBASE_DEFAULTS__,yP=()=>{if(typeof process>"u"||typeof Jw>"u")return;const e=Jw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},vP=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zf(e[1]);return t&&JSON.parse(t)},Jv=()=>{try{return uP()||gP()||yP()||vP()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sR=e=>Jv()?.emulatorHosts?.[e],_P=e=>{const t=sR(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},oR=()=>Jv()?.config,aR=e=>Jv()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Qa(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lR(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function bP(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[$f(JSON.stringify(n)),$f(JSON.stringify(u)),""].join(".")}const Ac={};function SP(){const e={prod:[],emulator:[]};for(const t of Object.keys(Ac))Ac[t]?e.emulator.push(t):e.prod.push(t);return e}function wP(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let ex=!1;function cR(e,t){if(typeof window>"u"||typeof document>"u"||!Qa(window.location.host)||Ac[e]===t||Ac[e]||ex)return;Ac[e]=t;function n(_){return`__firebase__banner__${_}`}const i="__firebase__banner",l=SP().prod.length>0;function u(){const _=document.getElementById(i);_&&_.remove()}function f(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{ex=!0,u()},_}function g(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function v(){const _=wP(i),b=n("text"),w=document.getElementById(b)||document.createElement("span"),I=n("learnmore"),T=document.getElementById(I)||document.createElement("a"),O=n("preprendIcon"),M=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const C=_.element;f(C),g(T,I);const D=h();p(M,O),C.append(M,w,T,D),document.body.appendChild(C)}l?(w.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function xP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EP(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function uR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TP(){const e=fn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function CP(){return tR.NODE_ADMIN===!0}function dR(){try{return typeof indexedDB=="object"}catch{return!1}}function fR(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function RP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="FirebaseError";class wi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=AP,Object.setPrototypeOf(this,wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,l=this.errors[t],u=l?IP(l,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new wi(o,f,i)}}function IP(e,t){return e.replace(DP,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const DP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const hR=function(e){let t={},n={},i={},o="";try{const l=e.split(".");t=Fc(zf(l[0])||""),n=Fc(zf(l[1])||""),o=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:o}},OP=function(e){const t=hR(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kP=function(e){const t=hR(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ja(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Fy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Bf(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function mo(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const l=e[o],u=t[o];if(tx(l)&&tx(u)){if(!mo(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function tx(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let v=0;v<16;v++)i[v]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)i[v]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let v=16;v<80;v++){const _=i[v-3]^i[v-8]^i[v-14]^i[v-16];i[v]=(_<<1|_>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],h,g;for(let v=0;v<80;v++){v<40?v<20?(h=f^l&(u^f),g=1518500249):(h=l^u^f,g=1859775393):v<60?(h=l&u|f&(l|u),g=2400959708):(h=l^u^f,g=3395469782);const _=(o<<5|o>>>27)+h+p+g+i[v]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=_}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=i;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<n;)if(l[u]=t.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=t[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[o]>>l&255,++i;return t}}function MP(e,t){const n=new LP(e,t);return n.subscribe.bind(n)}class LP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let o;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");PP(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:i},o.next===void 0&&(o.next=kg),o.error===void 0&&(o.error=kg),o.complete===void 0&&(o.complete=kg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function kg(){}function Lh(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;o=65536+(l<<10)+u}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Ph=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Yt(e){return e&&e._delegate?e._delegate:e}class _r{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new hu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zP(t))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(t=ro){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ro){return this.instances.has(t)}getOptions(t=ro){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(o)}return o}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(i)??new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:$P(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ro){return this.component?this.component.multipleInstances?t:ro:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $P(e){return e===ro?void 0:e}function zP(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new UP(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ct||(ct={}));const HP={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},FP=ct.INFO,qP={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},VP=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=qP[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class t_{constructor(t){this.name=t,this._logLevel=FP,this._logHandler=VP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?HP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...t),this._logHandler(this,ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...t),this._logHandler(this,ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...t),this._logHandler(this,ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...t),this._logHandler(this,ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...t),this._logHandler(this,ct.ERROR,...t)}}const GP=(e,t)=>t.some(n=>e instanceof n);let nx,rx;function YP(){return nx||(nx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WP(){return rx||(rx=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pR=new WeakMap,qy=new WeakMap,mR=new WeakMap,Ng=new WeakMap,n_=new WeakMap;function QP(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(pi(e.result)),o()},u=()=>{i(e.error),o()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&pR.set(n,e)}).catch(()=>{}),n_.set(t,e),t}function KP(e){if(qy.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});qy.set(e,t)}let Vy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||mR.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function XP(e){Vy=e(Vy)}function ZP(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Mg(this),t,...n);return mR.set(i,t.sort?t.sort():[t]),pi(i)}:WP().includes(e)?function(...t){return e.apply(Mg(this),t),pi(pR.get(this))}:function(...t){return pi(e.apply(Mg(this),t))}}function JP(e){return typeof e=="function"?ZP(e):(e instanceof IDBTransaction&&KP(e),GP(e,YP())?new Proxy(e,Vy):e)}function pi(e){if(e instanceof IDBRequest)return QP(e);if(Ng.has(e))return Ng.get(e);const t=JP(e);return t!==e&&(Ng.set(e,t),n_.set(t,e)),t}const Mg=e=>n_.get(e);function jh(e,t,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(e,t),f=pi(u);return i&&u.addEventListener("upgradeneeded",p=>{i(pi(u.result),p.oldVersion,p.newVersion,pi(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),f}function Lg(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),pi(n).then(()=>{})}const e4=["get","getKey","getAll","getAllKeys","count"],t4=["put","add","delete","clear"],Pg=new Map;function ix(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Pg.get(t))return Pg.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=t4.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||e4.includes(n)))return;const l=async function(u,...f){const p=this.transaction(u,o?"readwrite":"readonly");let h=p.store;return i&&(h=h.index(f.shift())),(await Promise.all([h[n](...f),o&&p.done]))[0]};return Pg.set(t,l),l}XP(e=>({...e,get:(t,n,i)=>ix(t,n)||e.get(t,n,i),has:(t,n)=>!!ix(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(r4(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function r4(e){return e.getComponent()?.type==="VERSION"}const Gy="@firebase/app",sx="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new t_("@firebase/app"),i4="@firebase/app-compat",s4="@firebase/analytics-compat",o4="@firebase/analytics",a4="@firebase/app-check-compat",l4="@firebase/app-check",c4="@firebase/auth",u4="@firebase/auth-compat",d4="@firebase/database",f4="@firebase/data-connect",h4="@firebase/database-compat",p4="@firebase/functions",m4="@firebase/functions-compat",g4="@firebase/installations",y4="@firebase/installations-compat",v4="@firebase/messaging",_4="@firebase/messaging-compat",b4="@firebase/performance",S4="@firebase/performance-compat",w4="@firebase/remote-config",x4="@firebase/remote-config-compat",E4="@firebase/storage",T4="@firebase/storage-compat",C4="@firebase/firestore",R4="@firebase/ai",A4="@firebase/firestore-compat",I4="firebase",D4="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="[DEFAULT]",O4={[Gy]:"fire-core",[i4]:"fire-core-compat",[o4]:"fire-analytics",[s4]:"fire-analytics-compat",[l4]:"fire-app-check",[a4]:"fire-app-check-compat",[c4]:"fire-auth",[u4]:"fire-auth-compat",[d4]:"fire-rtdb",[f4]:"fire-data-connect",[h4]:"fire-rtdb-compat",[p4]:"fire-fn",[m4]:"fire-fn-compat",[g4]:"fire-iid",[y4]:"fire-iid-compat",[v4]:"fire-fcm",[_4]:"fire-fcm-compat",[b4]:"fire-perf",[S4]:"fire-perf-compat",[w4]:"fire-rc",[x4]:"fire-rc-compat",[E4]:"fire-gcs",[T4]:"fire-gcs-compat",[C4]:"fire-fst",[A4]:"fire-fst-compat",[R4]:"fire-vertex","fire-js":"fire-js",[I4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Map,k4=new Map,Wy=new Map;function ox(e,t){try{e.container.addComponent(t)}catch(n){yi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mr(e){const t=e.name;if(Wy.has(t))return yi.debug(`There were multiple attempts to register component ${t}.`),!1;Wy.set(t,e);for(const n of Hf.values())ox(n,e);for(const n of k4.values())ox(n,e);return!0}function Xa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Nn(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},us=new Ro("app","Firebase",N4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw us.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=D4;function gR(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:Yy,automaticDataCollectionEnabled:!0,...t},o=i.name;if(typeof o!="string"||!o)throw us.create("bad-app-name",{appName:String(o)});if(n||(n=oR()),!n)throw us.create("no-options");const l=Hf.get(o);if(l){if(mo(n,l.options)&&mo(i,l.config))return l;throw us.create("duplicate-app",{appName:o})}const u=new BP(o);for(const p of Wy.values())u.addComponent(p);const f=new M4(n,i,u);return Hf.set(o,f),f}function r_(e=Yy){const t=Hf.get(e);if(!t&&e===Yy&&oR())return gR();if(!t)throw us.create("no-app",{appName:e});return t}function Zn(e,t,n){let i=O4[e]??e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yi.warn(u.join(" "));return}Mr(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const L4="firebase-heartbeat-database",P4=1,qc="firebase-heartbeat-store";let jg=null;function yR(){return jg||(jg=jh(L4,P4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(qc)}catch(n){console.warn(n)}}}}).catch(e=>{throw us.create("idb-open",{originalErrorMessage:e.message})})),jg}async function j4(e){try{const n=(await yR()).transaction(qc),i=await n.objectStore(qc).get(vR(e));return await n.done,i}catch(t){if(t instanceof wi)yi.warn(t.message);else{const n=us.create("idb-get",{originalErrorMessage:t?.message});yi.warn(n.message)}}}async function ax(e,t){try{const i=(await yR()).transaction(qc,"readwrite");await i.objectStore(qc).put(t,vR(e)),await i.done}catch(n){if(n instanceof wi)yi.warn(n.message);else{const i=us.create("idb-set",{originalErrorMessage:n?.message});yi.warn(i.message)}}}function vR(e){return`${e.name}!${e.options.appId}`}/**
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
 */const U4=1024,$4=30;class z4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lx();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>$4){const o=F4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){yi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lx(),{heartbeatsToSend:n,unsentEntries:i}=B4(this._heartbeatsCache.heartbeats),o=$f(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return yi.warn(t),""}}}function lx(){return new Date().toISOString().substring(0,10)}function B4(e,t=U4){const n=[];let i=e.slice();for(const o of e){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),cx(n)>t){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),cx(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class H4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dR()?fR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await j4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return ax(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return ax(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function cx(e){return $f(JSON.stringify({version:2,heartbeats:e})).length}function F4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q4(e){Mr(new _r("platform-logger",t=>new n4(t),"PRIVATE")),Mr(new _r("heartbeat",t=>new z4(t),"PRIVATE")),Zn(Gy,sx,e),Zn(Gy,sx,"esm2020"),Zn("fire-js","")}q4("");const _R="@firebase/installations",i_="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=1e4,SR=`w:${i_}`,wR="FIS_v2",V4="https://firebaseinstallations.googleapis.com/v1",G4=3600*1e3,Y4="installations",W4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},go=new Ro(Y4,W4,Q4);function xR(e){return e instanceof wi&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER({projectId:e}){return`${V4}/projects/${e}/installations`}function TR(e){return{token:e.token,requestStatus:2,expiresIn:X4(e.expiresIn),creationTime:Date.now()}}async function CR(e,t){const i=(await t.json()).error;return go.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function RR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function K4(e,{refreshToken:t}){const n=RR(e);return n.append("Authorization",Z4(t)),n}async function AR(e){const t=await e();return t.status>=500&&t.status<600?e():t}function X4(e){return Number(e.replace("s","000"))}function Z4(e){return`${wR} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J4({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=ER(e),o=RR(e),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={fid:n,authVersion:wR,appId:e.appId,sdkVersion:SR},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await AR(()=>fetch(i,f));if(p.ok){const h=await p.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:TR(h.authToken)}}else throw await CR("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ej(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tj=/^[cdef][\w-]{21}$/,Qy="";function nj(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=rj(e);return tj.test(n)?n:Qy}catch{return Qy}}function rj(e){return ej(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const DR=new Map;function OR(e,t){const n=Uh(e);kR(n,t),ij(n,t)}function kR(e,t){const n=DR.get(e);if(n)for(const i of n)i(t)}function ij(e,t){const n=sj();n&&n.postMessage({key:e,fid:t}),oj()}let lo=null;function sj(){return!lo&&"BroadcastChannel"in self&&(lo=new BroadcastChannel("[Firebase] FID Change"),lo.onmessage=e=>{kR(e.data.key,e.data.fid)}),lo}function oj(){DR.size===0&&lo&&(lo.close(),lo=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aj="firebase-installations-database",lj=1,yo="firebase-installations-store";let Ug=null;function s_(){return Ug||(Ug=jh(aj,lj,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(yo)}}})),Ug}async function Ff(e,t){const n=Uh(e),o=(await s_()).transaction(yo,"readwrite"),l=o.objectStore(yo),u=await l.get(n);return await l.put(t,n),await o.done,(!u||u.fid!==t.fid)&&OR(e,t.fid),t}async function NR(e){const t=Uh(e),i=(await s_()).transaction(yo,"readwrite");await i.objectStore(yo).delete(t),await i.done}async function $h(e,t){const n=Uh(e),o=(await s_()).transaction(yo,"readwrite"),l=o.objectStore(yo),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&OR(e,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(e){let t;const n=await $h(e.appConfig,i=>{const o=cj(i),l=uj(e,o);return t=l.registrationPromise,l.installationEntry});return n.fid===Qy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function cj(e){const t=e||{fid:nj(),registrationStatus:0};return MR(t)}function uj(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(go.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=dj(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fj(e)}:{installationEntry:t}}async function dj(e,t){try{const n=await J4(e,t);return Ff(e.appConfig,n)}catch(n){throw xR(n)&&n.customData.serverCode===409?await NR(e.appConfig):await Ff(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fj(e){let t=await ux(e.appConfig);for(;t.registrationStatus===1;)await IR(100),t=await ux(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await o_(e);return i||n}return t}function ux(e){return $h(e,t=>{if(!t)throw go.create("installation-not-found");return MR(t)})}function MR(e){return hj(e)?{fid:e.fid,registrationStatus:0}:e}function hj(e){return e.registrationStatus===1&&e.registrationTime+bR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pj({appConfig:e,heartbeatServiceProvider:t},n){const i=mj(e,n),o=K4(e,n),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={installation:{sdkVersion:SR,appId:e.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await AR(()=>fetch(i,f));if(p.ok){const h=await p.json();return TR(h)}else throw await CR("Generate Auth Token",p)}function mj(e,{fid:t}){return`${ER(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(e,t=!1){let n;const i=await $h(e.appConfig,l=>{if(!LR(l))throw go.create("not-registered");const u=l.authToken;if(!t&&vj(u))return l;if(u.requestStatus===1)return n=gj(e,t),l;{if(!navigator.onLine)throw go.create("app-offline");const f=bj(l);return n=yj(e,f),f}});return n?await n:i.authToken}async function gj(e,t){let n=await dx(e.appConfig);for(;n.authToken.requestStatus===1;)await IR(100),n=await dx(e.appConfig);const i=n.authToken;return i.requestStatus===0?a_(e,t):i}function dx(e){return $h(e,t=>{if(!LR(t))throw go.create("not-registered");const n=t.authToken;return Sj(n)?{...t,authToken:{requestStatus:0}}:t})}async function yj(e,t){try{const n=await pj(e,t),i={...t,authToken:n};return await Ff(e.appConfig,i),n}catch(n){if(xR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await NR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Ff(e.appConfig,i)}throw n}}function LR(e){return e!==void 0&&e.registrationStatus===2}function vj(e){return e.requestStatus===2&&!_j(e)}function _j(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+G4}function bj(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Sj(e){return e.requestStatus===1&&e.requestTime+bR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wj(e){const t=e,{installationEntry:n,registrationPromise:i}=await o_(t);return i?i.catch(console.error):a_(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xj(e,t=!1){const n=e;return await Ej(n),(await a_(n,t)).token}async function Ej(e){const{registrationPromise:t}=await o_(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tj(e){if(!e||!e.options)throw $g("App Configuration");if(!e.name)throw $g("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw $g(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function $g(e){return go.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="installations",Cj="installations-internal",Rj=e=>{const t=e.getProvider("app").getImmediate(),n=Tj(t),i=Xa(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Aj=e=>{const t=e.getProvider("app").getImmediate(),n=Xa(t,PR).getImmediate();return{getId:()=>wj(n),getToken:o=>xj(n,o)}};function Ij(){Mr(new _r(PR,Rj,"PUBLIC")),Mr(new _r(Cj,Aj,"PRIVATE"))}Ij();Zn(_R,i_);Zn(_R,i_,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dj="/firebase-messaging-sw.js",Oj="/firebase-cloud-messaging-push-scope",jR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",kj="https://fcmregistrations.googleapis.com/v1",UR="google.c.a.c_id",Nj="google.c.a.c_l",Mj="google.c.a.ts",Lj="google.c.a.e",fx=1e4;var hx;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(hx||(hx={}));/**
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
 */function li(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Pj(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="fcm_token_details_db",jj=5,px="fcm_token_object_Store";async function Uj(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(zg))return null;let t=null;return(await jh(zg,jj,{upgrade:async(i,o,l,u)=>{if(o<2||!i.objectStoreNames.contains(px))return;const f=u.objectStore(px),p=await f.index("fcmSenderId").get(e);if(await f.clear(),!!p){if(o===2){const h=p;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:li(h.vapidKey)}}}else if(o===3){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:li(h.auth),p256dh:li(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:li(h.vapidKey)}}}else if(o===4){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:li(h.auth),p256dh:li(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:li(h.vapidKey)}}}}}})).close(),await Lg(zg),await Lg("fcm_vapid_details_db"),await Lg("undefined"),$j(t)?t:null}function $j(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zj="firebase-messaging-database",Bj=1,Gc="firebase-messaging-store";let Bg=null;function $R(){return Bg||(Bg=jh(zj,Bj,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gc)}}})),Bg}async function Hj(e){const t=zR(e),i=await(await $R()).transaction(Gc).objectStore(Gc).get(t);if(i)return i;{const o=await Uj(e.appConfig.senderId);if(o)return await l_(e,o),o}}async function l_(e,t){const n=zR(e),o=(await $R()).transaction(Gc,"readwrite");return await o.objectStore(Gc).put(t,n),await o.done,t}function zR({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},an=new Ro("messaging","Messaging",Fj);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qj(e,t){const n=await u_(e),i=BR(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(c_(e.appConfig),o)).json()}catch(u){throw an.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw an.create("token-subscribe-no-token");return l.token}async function Vj(e,t){const n=await u_(e),i=BR(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${c_(e.appConfig)}/${t.token}`,o)).json()}catch(u){throw an.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-update-failed",{errorInfo:u})}if(!l.token)throw an.create("token-update-no-token");return l.token}async function Gj(e,t){const i={method:"DELETE",headers:await u_(e)};try{const l=await(await fetch(`${c_(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw an.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw an.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function c_({projectId:e}){return`${kj}/projects/${e}/registrations`}async function u_({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function BR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==jR&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yj=10080*60*1e3;async function Wj(e){const t=await Kj(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:li(t.getKey("auth")),p256dh:li(t.getKey("p256dh"))},i=await Hj(e.firebaseDependencies);if(i){if(Xj(i.subscriptionOptions,n))return Date.now()>=i.createTime+Yj?Qj(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await Gj(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return mx(e.firebaseDependencies,n)}else return mx(e.firebaseDependencies,n)}async function Qj(e,t){try{const n=await Vj(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await l_(e.firebaseDependencies,i),n}catch(n){throw n}}async function mx(e,t){const i={token:await qj(e,t),createTime:Date.now(),subscriptionOptions:t};return await l_(e,i),i.token}async function Kj(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Pj(t)})}function Xj(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Zj(t,e),Jj(t,e),e6(t,e),t}function Zj(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const l=t.notification.icon;l&&(e.notification.icon=l)}function Jj(e,t){t.data&&(e.data=t.data)}function e6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t6(e){return typeof e=="object"&&!!e&&UR in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n6(e){if(!e||!e.options)throw Hg("App Configuration Object");if(!e.name)throw Hg("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Hg(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Hg(e){return an.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=n6(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i6(e){try{e.swRegistration=await navigator.serviceWorker.register(Dj,{scope:Oj}),e.swRegistration.update().catch(()=>{}),await s6(e.swRegistration)}catch(t){throw an.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function s6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${fx} ms`)),fx),o=e.installing||e.waiting;e.active?(clearTimeout(i),t()):o?o.onstatechange=l=>{l.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o6(e,t){if(!t&&!e.swRegistration&&await i6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw an.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=jR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(e,t){if(!navigator)throw an.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw an.create("permission-blocked");return await a6(e,t?.vapidKey),await o6(e,t?.serviceWorkerRegistration),Wj(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l6(e,t,n){const i=c6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[UR],message_name:n[Nj],message_time:n[Mj],message_device_time:Math.floor(Date.now()/1e3)})}function c6(e){switch(e){case Vc.NOTIFICATION_CLICKED:return"notification_open";case Vc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Vc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(gx(n)):e.onMessageHandler.next(gx(n)));const i=n.data;t6(i)&&i[Lj]==="1"&&await l6(e,n.messageType,i)}const yx="@firebase/messaging",vx="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d6=e=>{const t=new r6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>u6(t,n)),t},f6=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>HR(t,i)}};function h6(){Mr(new _r("messaging",d6,"PUBLIC")),Mr(new _r("messaging-internal",f6,"PRIVATE")),Zn(yx,vx),Zn(yx,vx,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p6(){try{await fR()}catch{return!1}return typeof window<"u"&&dR()&&RP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m6(e,t){if(!navigator)throw an.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g6(e=r_()){return p6().then(t=>{if(!t)throw an.create("unsupported-browser")},t=>{throw an.create("indexed-db-unsupported")}),Xa(Yt(e),"messaging").getImmediate()}async function y6(e,t){return e=Yt(e),HR(e,t)}function v6(e,t){return e=Yt(e),m6(e,t)}h6();const zh=e=>{try{return e()}catch(t){throw t}};var _6="firebase",b6="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(_6,b6,"app");const S6={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Ic=zh(()=>gR(S6)),wa=zh(()=>g6(Ic)),w6="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,FR=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/pr-preview/pr-52/messaging-sw.js",{type:"classic"})};let Fg=FR();const _x=async()=>{if(!wa)throw new Error("Messaging is not set up");if(!w6)throw new Error("Browser environment does not allow messaging");let e;try{e=await Fg,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Fg=FR(),e=await Fg}return y6(wa,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Jt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var x6=typeof Symbol=="function"&&Symbol.observable||"@@observable",bx=x6,qg=()=>Math.random().toString(36).substring(7).split("").join("."),E6={INIT:`@@redux/INIT${qg()}`,REPLACE:`@@redux/REPLACE${qg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${qg()}`},qf=E6;function vs(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function qR(e,t,n){if(typeof e!="function")throw new Error(Jt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Jt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Jt(1));return n(qR)(e,t)}let i=e,o=t,l=new Map,u=l,f=0,p=!1;function h(){u===l&&(u=new Map,l.forEach((T,O)=>{u.set(O,T)}))}function g(){if(p)throw new Error(Jt(3));return o}function v(T){if(typeof T!="function")throw new Error(Jt(4));if(p)throw new Error(Jt(5));let O=!0;h();const M=f++;return u.set(M,T),function(){if(O){if(p)throw new Error(Jt(6));O=!1,h(),u.delete(M),l=null}}}function _(T){if(!vs(T))throw new Error(Jt(7));if(typeof T.type>"u")throw new Error(Jt(8));if(typeof T.type!="string")throw new Error(Jt(17));if(p)throw new Error(Jt(9));try{p=!0,o=i(o,T)}finally{p=!1}return(l=u).forEach(M=>{M()}),T}function b(T){if(typeof T!="function")throw new Error(Jt(10));i=T,_({type:qf.REPLACE})}function w(){const T=v;return{subscribe(O){if(typeof O!="object"||O===null)throw new Error(Jt(11));function M(){const D=O;D.next&&D.next(g())}return M(),{unsubscribe:T(M)}},[bx](){return this}}}return _({type:qf.INIT}),{dispatch:_,subscribe:v,getState:g,replaceReducer:b,[bx]:w}}function T6(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:qf.INIT})>"u")throw new Error(Jt(12));if(typeof n(void 0,{type:qf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Jt(13))})}function VR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let o;try{T6(n)}catch(l){o=l}return function(u={},f){if(o)throw o;let p=!1;const h={};for(let g=0;g<i.length;g++){const v=i[g],_=n[v],b=u[v],w=_(b,f);if(typeof w>"u")throw f&&f.type,new Error(Jt(14));h[v]=w,p=p||w!==b}return p=p||i.length!==Object.keys(u).length,p?h:u}}function Vf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function C6(...e){return t=>(n,i)=>{const o=t(n,i);let l=()=>{throw new Error(Jt(15))};const u={getState:o.getState,dispatch:(p,...h)=>l(p,...h)},f=e.map(p=>p(u));return l=Vf(...f)(o.dispatch),{...o,dispatch:l}}}function GR(e){return vs(e)&&"type"in e&&typeof e.type=="string"}var d_=Symbol.for("immer-nothing"),Dc=Symbol.for("immer-draftable"),Sn=Symbol.for("immer-state");function tn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ua=Object.getPrototypeOf;function Lr(e){return!!e&&!!e[Sn]}function br(e){return e?YR(e)||Array.isArray(e)||!!e[Dc]||!!e.constructor?.[Dc]||Ja(e)||pu(e):!1}var R6=Object.prototype.constructor.toString(),Sx=new WeakMap;function YR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=Sx.get(n);return i===void 0&&(i=Function.toString.call(n),Sx.set(n,i)),i===R6}function A6(e){return Lr(e)||tn(15,e),e[Sn].base_}function Yc(e,t,n=!0){vo(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((i,o)=>t(o,i,e))}function vo(e){const t=e[Sn];return t?t.type_:Array.isArray(e)?1:Ja(e)?2:pu(e)?3:0}function Wc(e,t){return vo(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Vg(e,t){return vo(e)===2?e.get(t):e[t]}function WR(e,t,n){const i=vo(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function I6(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Ja(e){return e instanceof Map}function pu(e){return e instanceof Set}function io(e){return e.copy_||e.base_}function Ky(e,t){if(Ja(e))return new Map(e);if(pu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=YR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[Sn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const u=o[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(Ua(e),i)}else{const i=Ua(e);if(i!==null&&n)return{...e};const o=Object.create(i);return Object.assign(o,e)}}function f_(e,t=!1){return Bh(e)||Lr(e)||!br(e)||(vo(e)>1&&Object.defineProperties(e,{set:Qd,add:Qd,clear:Qd,delete:Qd}),Object.freeze(e),t&&Object.values(e).forEach(n=>f_(n,!0))),e}function D6(){tn(2)}var Qd={value:D6};function Bh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var Xy={};function _o(e){const t=Xy[e];return t||tn(0,e),t}function O6(e,t){Xy[e]||(Xy[e]=t)}var Qc;function QR(){return Qc}function k6(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function wx(e,t){t&&(_o("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Zy(e){Jy(e),e.drafts_.forEach(N6),e.drafts_=null}function Jy(e){e===Qc&&(Qc=e.parent_)}function xx(e){return Qc=k6(Qc,e)}function N6(e){const t=e[Sn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ex(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Sn].modified_&&(Zy(t),tn(4)),br(e)&&(e=Gf(t,e),t.parent_||Yf(t,e)),t.patches_&&_o("Patches").generateReplacementPatches_(n[Sn].base_,e,t.patches_,t.inversePatches_)):e=Gf(t,n,[]),Zy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==d_?e:void 0}function Gf(e,t,n){if(Bh(t))return t;const i=e.immer_.shouldUseStrictIteration(),o=t[Sn];if(!o)return Yc(t,(l,u)=>Tx(e,o,t,l,u,n),i),t;if(o.scope_!==e)return t;if(!o.modified_)return Yf(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let u=l,f=!1;o.type_===3&&(u=new Set(l),l.clear(),f=!0),Yc(u,(p,h)=>Tx(e,o,l,p,h,n,f),i),Yf(e,l,!1),n&&e.patches_&&_o("Patches").generatePatches_(o,n,e.patches_,e.inversePatches_)}return o.copy_}function Tx(e,t,n,i,o,l,u){if(o==null||typeof o!="object"&&!u)return;const f=Bh(o);if(!(f&&!u)){if(Lr(o)){const p=l&&t&&t.type_!==3&&!Wc(t.assigned_,i)?l.concat(i):void 0,h=Gf(e,o,p);if(WR(n,i,h),Lr(h))e.canAutoFreeze_=!1;else return}else u&&n.add(o);if(br(o)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===o&&f)return;Gf(e,o),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Ja(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Yf(e,o)}}}function Yf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&f_(t,n)}function M6(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:QR(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=h_;n&&(o=[i],l=Kc);const{revoke:u,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=u,f}var h_={get(e,t){if(t===Sn)return e;const n=io(e);if(!Wc(n,t))return L6(e,n,t);const i=n[t];return e.finalized_||!br(i)?i:i===Gg(e.base_,t)?(Yg(e),e.copy_[t]=tv(i,e)):i},has(e,t){return t in io(e)},ownKeys(e){return Reflect.ownKeys(io(e))},set(e,t,n){const i=KR(io(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const o=Gg(io(e),t),l=o?.[Sn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(I6(n,o)&&(n!==void 0||Wc(e.base_,t)))return!0;Yg(e),ev(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Gg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Yg(e),ev(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=io(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){tn(11)},getPrototypeOf(e){return Ua(e.base_)},setPrototypeOf(){tn(12)}},Kc={};Yc(h_,(e,t)=>{Kc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Kc.deleteProperty=function(e,t){return Kc.set.call(this,e,t,void 0)};Kc.set=function(e,t,n){return h_.set.call(this,e[0],t,n,e[0])};function Gg(e,t){const n=e[Sn];return(n?io(n):e)[t]}function L6(e,t,n){const i=KR(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function KR(e,t){if(!(t in e))return;let n=Ua(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=Ua(n)}}function ev(e){e.modified_||(e.modified_=!0,e.parent_&&ev(e.parent_))}function Yg(e){e.copy_||(e.copy_=Ky(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var P6=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(p=l,...h){return u.produce(p,g=>n.call(this,g,...h))}}typeof n!="function"&&tn(6),i!==void 0&&typeof i!="function"&&tn(7);let o;if(br(t)){const l=xx(this),u=tv(t,void 0);let f=!0;try{o=n(u),f=!1}finally{f?Zy(l):Jy(l)}return wx(l,i),Ex(o,l)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===d_&&(o=void 0),this.autoFreeze_&&f_(o,!0),i){const l=[],u=[];_o("Patches").generateReplacementPatches_(t,o,l,u),i(l,u)}return o}else tn(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,p=>t(p,...f));let i,o;return[this.produce(t,n,(u,f)=>{i=u,o=f}),i,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){br(e)||tn(8),Lr(e)&&(e=j6(e));const t=xx(this),n=tv(e,void 0);return n[Sn].isManual_=!0,Jy(t),n}finishDraft(e,t){const n=e&&e[Sn];(!n||!n.isManual_)&&tn(9);const{scope_:i}=n;return wx(i,t),Ex(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const i=_o("Patches").applyPatches_;return Lr(e)?i(e,t):this.produce(e,o=>i(o,t))}};function tv(e,t){const n=Ja(e)?_o("MapSet").proxyMap_(e,t):pu(e)?_o("MapSet").proxySet_(e,t):M6(e,t);return(t?t.scope_:QR()).drafts_.push(n),n}function j6(e){return Lr(e)||tn(10,e),XR(e)}function XR(e){if(!br(e)||Bh(e))return e;const t=e[Sn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ky(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Ky(e,!0);return Yc(n,(o,l)=>{WR(n,o,XR(l))},i),t&&(t.finalized_=!1),n}function U6(){const t="replace",i="remove";function o(_,b,w,I){switch(_.type_){case 0:case 2:return u(_,b,w,I);case 1:return l(_,b,w,I);case 3:return f(_,b,w,I)}}function l(_,b,w,I){let{base_:T,assigned_:O}=_,M=_.copy_;M.length<T.length&&([T,M]=[M,T],[w,I]=[I,w]);for(let C=0;C<T.length;C++)if(O[C]&&M[C]!==T[C]){const D=b.concat([C]);w.push({op:t,path:D,value:v(M[C])}),I.push({op:t,path:D,value:v(T[C])})}for(let C=T.length;C<M.length;C++){const D=b.concat([C]);w.push({op:"add",path:D,value:v(M[C])})}for(let C=M.length-1;T.length<=C;--C){const D=b.concat([C]);I.push({op:i,path:D})}}function u(_,b,w,I){const{base_:T,copy_:O}=_;Yc(_.assigned_,(M,C)=>{const D=Vg(T,M),N=Vg(O,M),A=C?Wc(T,M)?t:"add":i;if(D===N&&A===t)return;const P=b.concat(M);w.push(A===i?{op:A,path:P}:{op:A,path:P,value:N}),I.push(A==="add"?{op:i,path:P}:A===i?{op:"add",path:P,value:v(D)}:{op:t,path:P,value:v(D)})})}function f(_,b,w,I){let{base_:T,copy_:O}=_,M=0;T.forEach(C=>{if(!O.has(C)){const D=b.concat([M]);w.push({op:i,path:D,value:C}),I.unshift({op:"add",path:D,value:C})}M++}),M=0,O.forEach(C=>{if(!T.has(C)){const D=b.concat([M]);w.push({op:"add",path:D,value:C}),I.unshift({op:i,path:D,value:C})}M++})}function p(_,b,w,I){w.push({op:t,path:[],value:b===d_?void 0:b}),I.push({op:t,path:[],value:_})}function h(_,b){return b.forEach(w=>{const{path:I,op:T}=w;let O=_;for(let N=0;N<I.length-1;N++){const A=vo(O);let P=I[N];typeof P!="string"&&typeof P!="number"&&(P=""+P),(A===0||A===1)&&(P==="__proto__"||P==="constructor")&&tn(19),typeof O=="function"&&P==="prototype"&&tn(19),O=Vg(O,P),typeof O!="object"&&tn(18,I.join("/"))}const M=vo(O),C=g(w.value),D=I[I.length-1];switch(T){case t:switch(M){case 2:return O.set(D,C);case 3:tn(16);default:return O[D]=C}case"add":switch(M){case 1:return D==="-"?O.push(C):O.splice(D,0,C);case 2:return O.set(D,C);case 3:return O.add(C);default:return O[D]=C}case i:switch(M){case 1:return O.splice(D,1);case 2:return O.delete(D);case 3:return O.delete(w.value);default:return delete O[D]}default:tn(17,T)}}),_}function g(_){if(!br(_))return _;if(Array.isArray(_))return _.map(g);if(Ja(_))return new Map(Array.from(_.entries()).map(([w,I])=>[w,g(I)]));if(pu(_))return new Set(Array.from(_).map(g));const b=Object.create(Ua(_));for(const w in _)b[w]=g(_[w]);return Wc(_,Dc)&&(b[Dc]=_[Dc]),b}function v(_){return Lr(_)?g(_):_}O6("Patches",{applyPatches_:h,generatePatches_:o,generateReplacementPatches_:p})}var Xc=new P6,mu=Xc.produce,ZR=Xc.produceWithPatches.bind(Xc),Cx=Xc.applyPatches.bind(Xc);function $6(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function z6(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function B6(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var Rx=e=>Array.isArray(e)?e:[e];function H6(e){const t=Array.isArray(e[0])?e[0]:e;return B6(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function F6(e,t){const n=[],{length:i}=e;for(let o=0;o<i;o++)n.push(e[o].apply(null,t));return n}var q6=class{constructor(e){this.value=e}deref(){return this.value}},V6=typeof WeakRef<"u"?WeakRef:q6,G6=0,Ax=1;function Kd(){return{s:G6,v:void 0,o:null,p:null}}function Wf(e,t={}){let n=Kd();const{resultEqualityCheck:i}=t;let o,l=0;function u(){let f=n;const{length:p}=arguments;for(let v=0,_=p;v<_;v++){const b=arguments[v];if(typeof b=="function"||typeof b=="object"&&b!==null){let w=f.o;w===null&&(f.o=w=new WeakMap);const I=w.get(b);I===void 0?(f=Kd(),w.set(b,f)):f=I}else{let w=f.p;w===null&&(f.p=w=new Map);const I=w.get(b);I===void 0?(f=Kd(),w.set(b,f)):f=I}}const h=f;let g;if(f.s===Ax)g=f.v;else if(g=e.apply(null,arguments),l++,i){const v=o?.deref?.()??o;v!=null&&i(v,g)&&(g=v,l!==0&&l--),o=typeof g=="object"&&g!==null||typeof g=="function"?new V6(g):g}return h.s=Ax,h.v=g,g}return u.clearCache=()=>{n=Kd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function Y6(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...o)=>{let l=0,u=0,f,p={},h=o.pop();typeof h=="object"&&(p=h,h=o.pop()),$6(h,`createSelector expects an output function after the inputs, but received: [${typeof h}]`);const g={...n,...p},{memoize:v,memoizeOptions:_=[],argsMemoize:b=Wf,argsMemoizeOptions:w=[]}=g,I=Rx(_),T=Rx(w),O=H6(o),M=v(function(){return l++,h.apply(null,arguments)},...I),C=b(function(){u++;const N=F6(O,arguments);return f=M.apply(null,N),f},...T);return Object.assign(C,{resultFunc:h,memoizedResultFunc:M,dependencies:O,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:v,argsMemoize:b})};return Object.assign(i,{withTypes:()=>i}),i}var xi=Y6(Wf),W6=Object.assign((e,t=xi)=>{z6(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,p)=>(u[n[p]]=f,u),{}))},{withTypes:()=>W6});function JR(e){return({dispatch:n,getState:i})=>o=>l=>typeof l=="function"?l(n,i,e):o(l)}var Q6=JR(),K6=JR,X6=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Vf:Vf.apply(null,arguments)},Z6=e=>e&&typeof e.match=="function";function mr(e,t){function n(...i){if(t){let o=t(...i);if(!o)throw new Error(gr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>GR(i)&&i.type===e,n}var eA=class xc extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,xc.prototype)}static get[Symbol.species](){return xc}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new xc(...t[0].concat(this)):new xc(...t.concat(this))}};function Ix(e){return br(e)?mu(e,()=>{}):e}function Xd(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function J6(e){return typeof e=="boolean"}var e3=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=t??{};let u=new eA;return n&&(J6(n)?u.push(Q6):u.push(K6(n.extraArgument))),u},Hh="RTK_autoBatch",oc=()=>e=>({payload:e,meta:{[Hh]:!0}}),Dx=e=>t=>{setTimeout(t,e)},t3=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let o=!0,l=!1,u=!1;const f=new Set,p=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Dx(10):e.type==="callback"?e.queueNotification:Dx(e.timeout),h=()=>{u=!1,l&&(l=!1,f.forEach(g=>g()))};return Object.assign({},i,{subscribe(g){const v=()=>o&&g(),_=i.subscribe(v);return f.add(g),()=>{_(),f.delete(g)}},dispatch(g){try{return o=!g?.meta?.[Hh],l=!o,l&&(u||(u=!0,p(h))),i.dispatch(g)}finally{o=!0}}})},n3=e=>function(n){const{autoBatch:i=!0}=n??{};let o=new eA(e);return i&&o.push(t3(typeof i=="object"?i:void 0)),o};function r3(e){const t=e3(),{reducer:n=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(vs(n))f=VR(n);else throw new Error(gr(1));let p;typeof i=="function"?p=i(t):p=t();let h=Vf;o&&(h=X6({trace:!1,...typeof o=="object"&&o}));const g=C6(...p),v=n3(g);let _=typeof u=="function"?u(v):v();const b=h(..._);return qR(f,l,b)}function tA(e){const t={},n=[];let i;const o={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(gr(28));if(f in t)throw new Error(gr(29));return t[f]=u,o},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),o},addMatcher(l,u){return n.push({matcher:l,reducer:u}),o},addDefaultCase(l){return i=l,o}};return e(o),[t,n,i]}function i3(e){return typeof e=="function"}function s3(e,t){let[n,i,o]=tA(t),l;if(i3(e))l=()=>Ix(e());else{const f=Ix(e);l=()=>f}function u(f=l(),p){let h=[n[p.type],...i.filter(({matcher:g})=>g(p)).map(({reducer:g})=>g)];return h.filter(g=>!!g).length===0&&(h=[o]),h.reduce((g,v)=>{if(v)if(Lr(g)){const b=v(g,p);return b===void 0?g:b}else{if(br(g))return mu(g,_=>v(_,p));{const _=v(g,p);if(_===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return _}}return g},f)}return u.getInitialState=l,u}var nA=(e,t)=>Z6(e)?e.match(t):e(t);function vi(...e){return t=>e.some(n=>nA(n,t))}function Oc(...e){return t=>e.every(n=>nA(n,t))}function Fh(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function gu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function p_(...e){return e.length===0?t=>Fh(t,["pending"]):gu(e)?vi(...e.map(t=>t.pending)):p_()(e[0])}function $a(...e){return e.length===0?t=>Fh(t,["rejected"]):gu(e)?vi(...e.map(t=>t.rejected)):$a()(e[0])}function qh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Oc($a(...e),t):gu(e)?Oc($a(...e),t):qh()(e[0])}function _s(...e){return e.length===0?t=>Fh(t,["fulfilled"]):gu(e)?vi(...e.map(t=>t.fulfilled)):_s()(e[0])}function nv(...e){return e.length===0?t=>Fh(t,["pending","fulfilled","rejected"]):gu(e)?vi(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):nv()(e[0])}var o3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",m_=(e=21)=>{let t="",n=e;for(;n--;)t+=o3[Math.random()*64|0];return t},a3=["name","message","stack","code"],Wg=class{constructor(e,t){this.payload=e,this.meta=t}_type},Ox=class{constructor(e,t){this.payload=e,this.meta=t}_type},l3=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of a3)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},kx="External signal was aborted",Nx=(()=>{function e(t,n,i){const o=mr(t+"/fulfilled",(p,h,g,v)=>({payload:p,meta:{...v||{},arg:g,requestId:h,requestStatus:"fulfilled"}})),l=mr(t+"/pending",(p,h,g)=>({payload:void 0,meta:{...g||{},arg:h,requestId:p,requestStatus:"pending"}})),u=mr(t+"/rejected",(p,h,g,v,_)=>({payload:v,error:(i&&i.serializeError||l3)(p||"Rejected"),meta:{..._||{},arg:g,requestId:h,rejectedWithValue:!!v,requestStatus:"rejected",aborted:p?.name==="AbortError",condition:p?.name==="ConditionError"}}));function f(p,{signal:h}={}){return(g,v,_)=>{const b=i?.idGenerator?i.idGenerator(p):m_(),w=new AbortController;let I,T;function O(C){T=C,w.abort()}h&&(h.aborted?O(kx):h.addEventListener("abort",()=>O(kx),{once:!0}));const M=(async function(){let C;try{let N=i?.condition?.(p,{getState:v,extra:_});if(u3(N)&&(N=await N),N===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const A=new Promise((P,V)=>{I=()=>{V({name:"AbortError",message:T||"Aborted"})},w.signal.addEventListener("abort",I)});g(l(b,p,i?.getPendingMeta?.({requestId:b,arg:p},{getState:v,extra:_}))),C=await Promise.race([A,Promise.resolve(n(p,{dispatch:g,getState:v,extra:_,requestId:b,signal:w.signal,abort:O,rejectWithValue:(P,V)=>new Wg(P,V),fulfillWithValue:(P,V)=>new Ox(P,V)})).then(P=>{if(P instanceof Wg)throw P;return P instanceof Ox?o(P.payload,b,p,P.meta):o(P,b,p)})])}catch(N){C=N instanceof Wg?u(null,b,p,N.payload,N.meta):u(N,b,p)}finally{I&&w.signal.removeEventListener("abort",I)}return i&&!i.dispatchConditionRejection&&u.match(C)&&C.meta.condition||g(C),C})();return Object.assign(M,{abort:O,requestId:b,arg:p,unwrap(){return M.then(c3)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:o,settled:vi(u,o),typePrefix:t})}return e.withTypes=()=>e,e})();function c3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function u3(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var d3=Symbol.for("rtk-slice-createasyncthunk");function f3(e,t){return`${e}/${t}`}function h3({creators:e}={}){const t=e?.asyncThunk?.[d3];return function(i){const{name:o,reducerPath:l=o}=i;if(!o)throw new Error(gr(11));const u=(typeof i.reducers=="function"?i.reducers(m3()):i.reducers)||{},f=Object.keys(u),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(C,D){const N=typeof C=="string"?C:C.type;if(!N)throw new Error(gr(12));if(N in p.sliceCaseReducersByType)throw new Error(gr(13));return p.sliceCaseReducersByType[N]=D,h},addMatcher(C,D){return p.sliceMatchers.push({matcher:C,reducer:D}),h},exposeAction(C,D){return p.actionCreators[C]=D,h},exposeCaseReducer(C,D){return p.sliceCaseReducersByName[C]=D,h}};f.forEach(C=>{const D=u[C],N={reducerName:C,type:f3(o,C),createNotation:typeof i.reducers=="function"};y3(D)?_3(N,D,h,t):g3(N,D,h)});function g(){const[C={},D=[],N=void 0]=typeof i.extraReducers=="function"?tA(i.extraReducers):[i.extraReducers],A={...C,...p.sliceCaseReducersByType};return s3(i.initialState,P=>{for(let V in A)P.addCase(V,A[V]);for(let V of p.sliceMatchers)P.addMatcher(V.matcher,V.reducer);for(let V of D)P.addMatcher(V.matcher,V.reducer);N&&P.addDefaultCase(N)})}const v=C=>C,_=new Map,b=new WeakMap;let w;function I(C,D){return w||(w=g()),w(C,D)}function T(){return w||(w=g()),w.getInitialState()}function O(C,D=!1){function N(P){let V=P[C];return typeof V>"u"&&D&&(V=Xd(b,N,T)),V}function A(P=v){const V=Xd(_,D,()=>new WeakMap);return Xd(V,P,()=>{const H={};for(const[B,z]of Object.entries(i.selectors??{}))H[B]=p3(z,P,()=>Xd(b,P,T),D);return H})}return{reducerPath:C,getSelectors:A,get selectors(){return A(N)},selectSlice:N}}const M={name:o,reducer:I,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:T,...O(l),injectInto(C,{reducerPath:D,...N}={}){const A=D??l;return C.inject({reducerPath:A,reducer:I},N),{...M,...O(A,!0)}}};return M}}function p3(e,t,n,i){function o(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return o.unwrapped=e,o}var Kn=h3();function m3(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function g3({type:e,reducerName:t,createNotation:n},i,o){let l,u;if("reducer"in i){if(n&&!v3(i))throw new Error(gr(17));l=i.reducer,u=i.prepare}else l=i;o.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?mr(e,u):mr(e))}function y3(e){return e._reducerDefinitionType==="asyncThunk"}function v3(e){return e._reducerDefinitionType==="reducerWithPrepare"}function _3({type:e,reducerName:t},n,i,o){if(!o)throw new Error(gr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:p,settled:h,options:g}=n,v=o(e,l,g);i.exposeAction(t,v),u&&i.addCase(v.fulfilled,u),f&&i.addCase(v.pending,f),p&&i.addCase(v.rejected,p),h&&i.addMatcher(v.settled,h),i.exposeCaseReducer(t,{fulfilled:u||Zd,pending:f||Zd,rejected:p||Zd,settled:h||Zd})}function Zd(){}function gr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const el=e=>e.session,yu=xi([el],e=>{if(e.state==="fulfilled")return e.data?.id}),Mn=ZT,et=JT,vu=E.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var Mx={};const Lx="@firebase/database",Px="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rA="";function b3(e){rA=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),$t(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Fc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return jr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new S3(t)}}catch{}return new w3},co=iA("localStorage"),x3=iA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new t_("@firebase/database"),E3=(function(){let e=1;return function(){return e++}})(),sA=function(e){const t=jP(e),n=new NP;n.update(t);const i=n.digest();return Zv.encodeByteArray(i)},_u=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=_u.apply(null,i):typeof i=="object"?t+=$t(i):t+=i,t+=" "}return t};let kc=null,jx=!0;const T3=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Ca.logLevel=ct.VERBOSE,kc=Ca.log.bind(Ca)},en=function(...e){if(jx===!0&&(jx=!1,kc===null&&x3.get("logging_enabled")===!0&&T3()),kc){const t=_u.apply(null,e);kc(t)}},bu=function(e){return function(...t){en(e,...t)}},rv=function(...e){const t="FIREBASE INTERNAL ERROR: "+_u(...e);Ca.error(t)},_i=function(...e){const t=`FIREBASE FATAL ERROR: ${_u(...e)}`;throw Ca.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+_u(...e);Ca.warn(t)},C3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},g_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},R3=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},za="[MIN_NAME]",bo="[MAX_NAME]",Ao=function(e,t){if(e===t)return 0;if(e===za||t===bo)return-1;if(t===za||e===bo)return 1;{const n=Ux(e),i=Ux(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},A3=function(e,t){return e===t?0:e<t?-1:1},ac=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+$t(t))},y_=function(e){if(typeof e!="object"||e===null)return $t(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=$t(t[i]),n+=":",n+=y_(e[t[i]]);return n+="}",n},oA=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function rn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const aA=function(e){he(!g_(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let o,l,u,f,p;e===0?(l=0,u=0,o=1/e===-1/0?1:0):(o=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(p=n;p;p-=1)h.push(u%2?1:0),u=Math.floor(u/2);for(p=t;p;p-=1)h.push(l%2?1:0),l=Math.floor(l/2);h.push(o?1:0),h.reverse();const g=h.join("");let v="";for(p=0;p<64;p+=8){let _=parseInt(g.substr(p,8),2).toString(16);_.length===1&&(_="0"+_),v=v+_}return v.toLowerCase()},I3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},D3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function O3(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const k3=new RegExp("^-?(0*)\\d{1,10}$"),N3=-2147483648,M3=2147483647,Ux=function(e){if(k3.test(e)){const t=Number(e);if(t>=N3&&t<=M3)return t}return null},tl=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw dn("Exception was thrown by user callback.",n),t},Math.floor(0))}},L3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class P3{constructor(t,n){this.appCheckProvider=n,this.appName=t.name,Nn(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(en("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(t)}}class Ef{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Ef.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="5",lA="v",cA="s",uA="r",dA="f",fA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hA="ls",pA="p",iv="ac",mA="websocket",gA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(t,n,i,o,l=!1,u="",f=!1,p=!1,h=null){this.secure=n,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=h,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=co.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&co.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function U3(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function vA(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===mA)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===gA)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);U3(e)&&(n.ns=e.namespace);const o=[];return rn(n,(l,u)=>{o.push(l+"="+u)}),i+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3{constructor(){this.counters_={}}incrementCounter(t,n=1){jr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return hP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg={},Kg={};function __(e){const t=e.toString();return Qg[t]||(Qg[t]=new $3),Qg[t]}function z3(e,t){const n=e.toString();return Kg[n]||(Kg[n]=t()),Kg[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&tl(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="start",H3="close",F3="pLPCommand",q3="pRTLPCB",_A="id",bA="pw",SA="ser",V3="cb",G3="seg",Y3="ts",W3="d",Q3="dframe",wA=1870,xA=30,K3=wA-xA,X3=25e3,Z3=3e4;class xa{constructor(t,n,i,o,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bu(t),this.stats_=__(n),this.urlFn=p=>(this.appCheckToken&&(p[iv]=this.appCheckToken),vA(n,gA,p))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new B3(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Z3)),R3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new b_((...l)=>{const[u,f,p,h,g]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===$x)this.id=f,this.password=p;else if(u===H3)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[$x]="t",i[SA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[V3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[lA]=v_,this.transportSessionId&&(i[cA]=this.transportSessionId),this.lastSessionId&&(i[hA]=this.lastSessionId),this.applicationId&&(i[pA]=this.applicationId),this.appCheckToken&&(i[iv]=this.appCheckToken),typeof location<"u"&&location.hostname&&fA.test(location.hostname)&&(i[uA]=dA);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xa.forceAllow_=!0}static forceDisallow(){xa.forceDisallow_=!0}static isAvailable(){return xa.forceAllow_?!0:!xa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!I3()&&!D3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=rR(n),o=oA(i,K3);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Q3]="t",i[_A]=t,i[bA]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=$t(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class b_{constructor(t,n,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=E3(),window[F3+this.uniqueCallbackIdentifier]=t,window[q3+this.uniqueCallbackIdentifier]=n,this.myIFrame=b_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){en("frame writing exception"),f.stack&&en(f.stack),en(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||en("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[_A]=this.myID,t[bA]=this.myPW,t[SA]=this.currentSerial;let n=this.urlFn(t),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xA+i.length<=wA;){const u=this.pendingSegs.shift();i=i+"&"+G3+o+"="+u.seg+"&"+Y3+o+"="+u.ts+"&"+W3+o+"="+u.d,o++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(i,Math.floor(X3)),l=()=>{clearTimeout(o),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{en("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=16384,e5=45e3;let Qf=null;typeof MozWebSocket<"u"?Qf=MozWebSocket:typeof WebSocket<"u"&&(Qf=WebSocket);class ur{constructor(t,n,i,o,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bu(this.connId),this.stats_=__(n),this.connURL=ur.connectionURL_(n,u,f,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,o,l){const u={};return u[lA]=v_,typeof location<"u"&&location.hostname&&fA.test(location.hostname)&&(u[uA]=dA),n&&(u[cA]=n),i&&(u[hA]=i),o&&(u[iv]=o),l&&(u[pA]=l),vA(t,mA,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,co.set("previous_websocket_failure",!0);try{let i;CP(),this.mySock=new Qf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){ur.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Qf!==null&&!ur.forceDisallow_}static previouslyFailed(){return co.isInMemoryStorage||co.get("previous_websocket_failure")===!0}markConnectionHealthy(){co.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Fc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=oA(n,J3);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(e5))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ur.responsesRequiredToBeHealthy=2;ur.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{static get ALL_TRANSPORTS(){return[xa,ur]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=ur&&ur.isAvailable();let i=n&&!ur.previouslyFailed();if(t.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ur];else{const o=this.transports_=[];for(const l of Zc.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Zc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t5=6e4,n5=5e3,r5=10*1024,i5=100*1024,Xg="t",zx="d",s5="s",Bx="r",o5="e",Hx="o",Fx="a",qx="n",Vx="p",a5="h";class l5{constructor(t,n,i,o,l,u,f,p,h,g){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=h,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bu("c:"+this.id+":"),this.transportManager_=new Zc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=Nc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>i5?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>r5?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Xg in t){const n=t[Xg];n===Fx?this.upgradeIfSecondaryHealthy_():n===Bx?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hx&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vx,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fx,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qx,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ac(Xg,t);if(zx in t){const i=t[zx];if(n===a5){const o={...i};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===qx){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===s5?this.onConnectionShutdown_(i):n===Bx?this.onReset_(i):n===o5?rv("Server Error: "+i):n===Hx?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rv("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),v_!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Nc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(t5))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(n5))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vx,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(co.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{put(t,n,i,o){}merge(t,n,i,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kf extends TA{static getInstance(){return new Kf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!e_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=32,Yx=768;class ut{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Xe(){return new ut("")}function qe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function bs(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function S_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function c5(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Jc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function CA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function At(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ut)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&n.push(i[o])}return new ut(n,0)}function We(e){return e.pieceNum_>=e.pieces_.length}function un(e,t){const n=qe(e),i=qe(t);if(n===null)return t;if(n===i)return un(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function u5(e,t){const n=Jc(e,0),i=Jc(t,0);for(let o=0;o<n.length&&o<i.length;o++){const l=Ao(n[o],i[o]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function w_(e,t){if(bs(e)!==bs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Xn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(bs(e)>bs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class d5{constructor(t,n){this.errorPrefix_=n,this.parts_=Jc(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ph(this.parts_[i]);RA(this)}}function f5(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ph(t),RA(e)}function h5(e){const t=e.parts_.pop();e.byteLength_-=Ph(t),e.parts_.length>0&&(e.byteLength_-=1)}function RA(e){if(e.byteLength_>Yx)throw new Error(e.errorPrefix_+"has a key path longer than "+Yx+" bytes ("+e.byteLength_+").");if(e.parts_.length>Gx)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gx+") or object contains a cycle "+so(e))}function so(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_ extends TA{static getInstance(){return new x_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=1e3,p5=300*1e3,Wx=30*1e3,m5=1.3,g5=3e4,y5="server_kill",Qx=3;class mi extends EA{constructor(t,n,i,o,l,u,f,p){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=mi.nextPersistentConnectionId_++,this.log_=bu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lc,this.maxReconnectDelay_=p5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");x_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Kf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const o=++this.requestNumber_,l={r:o,a:t,b:n};this.log_($t(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(t){this.initConnection_();const n=new hu,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,o){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,h=f.s;mi.warnOnListenWarnings_(p,n),(this.listens.get(i)&&this.listens.get(i).get(o))===t&&(this.log_("listen response",f),h!=="ok"&&this.removeListen_(i,o),t.onComplete&&t.onComplete(h,p))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&jr(t,"w")){const i=ja(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||kP(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wx)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=OP(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,o=>{const l=o.s,u=o.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,t._queryObject,n)}sendUnlisten_(t,n,i,o){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";o&&(l.q=i,l.t=o),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,o){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(t,n,i,o){this.putInternal("p",t,n,i,o)}merge(t,n,i,o){this.putInternal("m",t,n,i,o)}putInternal(t,n,i,o,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$t(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):rv("Unrecognized action received from server: "+$t(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>g5&&(this.reconnectDelay_=lc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*m5)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+mi.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,i())},h=function(v){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:h};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,_]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);u?en("getToken() completed but was canceled"):(en("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=_&&_.token,f=new l5(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,b=>{dn(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(y5)},l))}catch(v){this.log_("Failed to get token: "+v),u||(this.repoInfo_.nodeAdmin&&dn(v),p())}}}interrupt(t){en("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){en("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Fy(this.interruptReasons_)&&(this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>y_(l)).join("$"):i="default";const o=this.removeListen_(t,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,n){const i=new ut(t).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(t,n){en("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qx&&(this.reconnectDelay_=Wx,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){en("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qx&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+rA.replace(/\./g,"-")]=1,e_()?t["framework.cordova"]=1:uR()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Kf.getInstance().currentlyOnline();return Fy(this.interruptReasons_)&&t}}mi.nextPersistentConnectionId_=0;mi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Jd;class AA extends Vh{static get __EMPTY_NODE(){return Jd}static set __EMPTY_NODE(t){Jd=t}compare(t,n){return Ao(t.name,n.name)}isDefinedOn(t){throw Wa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(bo,Jd)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new Ve(t,Jd)}toString(){return".key"}}const Ra=new AA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,n,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,o&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Vt{constructor(t,n,i,o,l){this.key=t,this.value=n,this.color=i??Vt.RED,this.left=o??bn.EMPTY_NODE,this.right=l??bn.EMPTY_NODE}copy(t,n,i,o,l){return new Vt(t??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let o=this;const l=i(t,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(t,n,i),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,n,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,o;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return bn.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class v5{copy(t,n,i,o,l){return this}insert(t,n,i){return new Vt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bn{constructor(t,n=bn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new bn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(t){return new bn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,o=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ef(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new ef(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new ef(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new ef(this.root_,null,this.comparator_,!0,t)}}bn.EMPTY_NODE=new v5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _5(e,t){return Ao(e.name,t.name)}function E_(e,t){return Ao(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sv;function b5(e){sv=e}const IA=function(e){return typeof e=="number"?"number:"+aA(e):"string:"+e},DA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&jr(t,".sv"),"Priority must be a string or number.")}else he(e===sv||e.isEmpty(),"priority of unexpected type.");he(e===sv||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kx;class Ft{static set __childrenNodeConstructor(t){Kx=t}static get __childrenNodeConstructor(){return Kx}constructor(t,n=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),DA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ft(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return We(t)?this:qe(t)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=qe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||bs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+IA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=aA(this.value_):t+=this.value_,this.lazyHash_=sA(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ft.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ft.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,o=Ft.VALUE_TYPE_ORDER.indexOf(n),l=Ft.VALUE_TYPE_ORDER.indexOf(i);return he(o>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OA,kA;function S5(e){OA=e}function w5(e){kA=e}class x5 extends Vh{compare(t,n){const i=t.node.getPriority(),o=n.node.getPriority(),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(bo,new Ft("[PRIORITY-POST]",kA))}makePost(t,n){const i=OA(t);return new Ve(n,new Ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const It=new x5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E5=Math.log(2);class T5{constructor(t){const n=l=>parseInt(Math.log(l)/E5,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const o=i(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Xf=function(e,t,n,i){e.sort(t);const o=function(p,h){const g=h-p;let v,_;if(g===0)return null;if(g===1)return v=e[p],_=n?n(v):v,new Vt(_,v.node,Vt.BLACK,null,null);{const b=parseInt(g/2,10)+p,w=o(p,b),I=o(b+1,h);return v=e[b],_=n?n(v):v,new Vt(_,v.node,Vt.BLACK,w,I)}},l=function(p){let h=null,g=null,v=e.length;const _=function(w,I){const T=v-w,O=v;v-=w;const M=o(T+1,O),C=e[T],D=n?n(C):C;b(new Vt(D,C.node,I,null,M))},b=function(w){h?(h.left=w,h=w):(g=w,h=w)};for(let w=0;w<p.count;++w){const I=p.nextBitIsOne(),T=Math.pow(2,p.count-(w+1));I?_(T,Vt.BLACK):(_(T,Vt.BLACK),_(T,Vt.RED))}return g},u=new T5(e.length),f=l(u);return new bn(i||t,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zg;const ga={};class di{static get Default(){return he(ga&&It,"ChildrenNode.ts has not been loaded"),Zg=Zg||new di({".priority":ga},{".priority":It}),Zg}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=ja(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof bn?n:null}hasIndex(t){return jr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==Ra,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=n.getIterator(Ve.Wrap);let u=l.getNext();for(;u;)o=o||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;o?f=Xf(i,t.getCompare()):f=ga;const p=t.toString(),h={...this.indexSet_};h[p]=t;const g={...this.indexes_};return g[p]=f,new di(g,h)}addToIndexes(t,n){const i=Bf(this.indexes_,(o,l)=>{const u=ja(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),o===ga)if(u.isDefinedOn(t.node)){const f=[],p=n.getIterator(Ve.Wrap);let h=p.getNext();for(;h;)h.name!==t.name&&f.push(h),h=p.getNext();return f.push(t),Xf(f,u.getCompare())}else return ga;else{const f=n.get(t.name);let p=o;return f&&(p=p.remove(new Ve(t.name,f))),p.insert(t,t.node)}});return new di(i,this.indexSet_)}removeFromIndexes(t,n){const i=Bf(this.indexes_,o=>{if(o===ga)return o;{const l=n.get(t.name);return l?o.remove(new Ve(t.name,l)):o}});return new di(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;class Ne{static get EMPTY_NODE(){return cc||(cc=new Ne(new bn(E_),null,di.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&DA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cc}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?cc:n}}getChild(t){const n=qe(t);return n===null?this:this.getImmediateChild(n).getChild(pt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new Ve(t,n);let o,l;n.isEmpty()?(o=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?cc:this.priorityNode_;return new Ne(o,u,l)}}updateChild(t,n){const i=qe(t);if(i===null)return n;{he(qe(t)!==".priority"||bs(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(pt(t),n);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,o=0,l=!0;if(this.forEachChild(It,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!t&&l&&o<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+IA(this.getPriority().val())+":"),this.forEachChild(It,(n,i)=>{const o=i.hash();o!==""&&(t+=":"+n+":"+o)}),this.lazyHash_=t===""?"":sA(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new Ve(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Ve(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Ve(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)>0;)o.getNext(),l=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Su?-1:0}withIndex(t){if(t===Ra||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ra||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(It),o=n.getIterator(It);let l=i.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===Ra?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class C5 extends Ne{constructor(){super(new bn(E_),Ne.EMPTY_NODE,di.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const Su=new C5;Object.defineProperties(Ve,{MIN:{value:new Ve(za,Ne.EMPTY_NODE)},MAX:{value:new Ve(bo,Su)}});AA.__EMPTY_NODE=Ne.EMPTY_NODE;Ft.__childrenNodeConstructor=Ne;b5(Su);w5(Su);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R5=!0;function Ut(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ft(n,Ut(t))}if(!(e instanceof Array)&&R5){const n=[];let i=!1;if(rn(e,(u,f)=>{if(u.substring(0,1)!=="."){const p=Ut(f);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),n.push(new Ve(u,p)))}}),n.length===0)return Ne.EMPTY_NODE;const l=Xf(n,_5,u=>u.name,E_);if(i){const u=Xf(n,It.getCompare());return new Ne(l,Ut(t),new di({".priority":u},{".priority":It}))}else return new Ne(l,Ut(t),di.Default)}else{let n=Ne.EMPTY_NODE;return rn(e,(i,o)=>{if(jr(e,i)&&i.substring(0,1)!=="."){const l=Ut(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(Ut(t))}}S5(Ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5 extends Vh{constructor(t){super(),this.indexPath_=t,he(!We(t)&&qe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),o=this.extractChild(n.node),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}makePost(t,n){const i=Ut(t),o=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ve(n,o)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,Su);return new Ve(bo,t)}toString(){return Jc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5 extends Vh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ao(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(t,n){const i=Ut(t);return new Ve(n,i)}toString(){return".value"}}const D5=new I5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(e){return{type:"value",snapshotNode:e}}function Ba(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function eu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function tu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function O5(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.index_=t}updateChild(t,n,i,o,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(eu(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Ba(n,i)):u.trackChildChange(tu(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(It,(o,l)=>{n.hasChild(o)||i.trackChildChange(eu(o,l))}),n.isLeafNode()||n.forEachChild(It,(o,l)=>{if(t.hasChild(o)){const u=t.getImmediateChild(o);u.equals(l)||i.trackChildChange(tu(o,l,u))}else i.trackChildChange(Ba(o,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.indexedFilter_=new T_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=nu.getStartPost_(t),this.endPost_=nu.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,o,l,u){return this.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,o,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(It,(u,f)=>{l.matches(new Ve(u,f))||(o=o.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new nu(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,o,l,u){return this.rangedFilter_.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,o,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let o;if(n.isLeafNode()||n.isEmpty())o=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,o,l){let u;if(this.reverse_){const v=this.index_.getCompare();u=(_,b)=>v(b,_)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const p=new Ve(n,i),h=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),g=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let _=o.getChildAfterChild(this.index_,h,this.reverse_);for(;_!=null&&(_.name===n||f.hasChild(_.name));)_=o.getChildAfterChild(this.index_,_,this.reverse_);const b=_==null?1:u(_,p);if(g&&!i.isEmpty()&&b>=0)return l?.trackChildChange(tu(n,i,v)),f.updateImmediateChild(n,i);{l?.trackChildChange(eu(n,v));const I=f.updateImmediateChild(n,Ne.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(l?.trackChildChange(Ba(_.name,_.node)),I.updateImmediateChild(_.name,_.node)):I}}else return i.isEmpty()?t:g&&u(h,p)>=0?(l!=null&&(l.trackChildChange(eu(h.name,h.node)),l.trackChildChange(Ba(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(h.name,Ne.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:za}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const t=new C_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function N5(e){return e.loadsAllData()?new T_(e.getIndex()):e.hasLimit()?new k5(e):new nu(e)}function Xx(e){const t={};if(e.isDefault())return t;let n;if(e.index_===It?n="$priority":e.index_===D5?n="$value":e.index_===Ra?n="$key":(he(e.index_ instanceof A5,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=$t(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=$t(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+$t(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=$t(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+$t(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Zx(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==It&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends EA{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,o){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=bu("p:rest:"),this.listens_={}}listen(t,n,i,o){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=Zf.getListenId_(t,i),f={};this.listens_[u]=f;const p=Xx(t._queryParams);this.restRequest_(l+".json",p,(h,g)=>{let v=g;if(h===404&&(v=null,h=null),h===null&&this.onDataUpdate_(l,v,!1,i),ja(this.listens_,u)===f){let _;h?h===401?_="permission_denied":_="rest_error:"+h:_="ok",o(_,null)}})}unlisten(t,n){const i=Zf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=Xx(t._queryParams),i=t._path.toString(),o=new hu;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ka(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Fc(f.responseText)}catch{dn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,p)}else f.status!==401&&f.status!==404&&dn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M5{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){return{value:null,children:new Map}}function MA(e,t,n){if(We(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=qe(t);e.children.has(i)||e.children.set(i,Jf());const o=e.children.get(i);t=pt(t),MA(o,t,n)}}function ov(e,t,n){e.value!==null?n(t,e.value):L5(e,(i,o)=>{const l=new ut(t.toString()+"/"+i);ov(o,l,n)})}function L5(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&rn(this.last_,(i,o)=>{n[i]=n[i]-o}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=10*1e3,j5=30*1e3,U5=300*1e3;class $5{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new P5(t);const i=Jx+(j5-Jx)*Math.random();Nc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;rn(t,(o,l)=>{l>0&&jr(this.statsToReport_,o)&&(n[o]=l,i=!0)}),i&&this.server_.reportStats(n),Nc(this.reportStats_.bind(this),Math.floor(Math.random()*2*U5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fr||(fr={}));function R_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function A_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function I_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=fr.ACK_USER_WRITE,this.source=R_()}operationForChild(t){if(We(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ut(t));return new eh(Xe(),n,this.revert)}}else return he(qe(this.path)===t,"operationForChild called for unrelated child."),new eh(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n){this.source=t,this.path=n,this.type=fr.LISTEN_COMPLETE}operationForChild(t){return We(this.path)?new ru(this.source,Xe()):new ru(this.source,pt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=fr.OVERWRITE}operationForChild(t){return We(this.path)?new So(this.source,Xe(),this.snap.getImmediateChild(t)):new So(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=fr.MERGE}operationForChild(t){if(We(this.path)){const n=this.children.subtree(new ut(t));return n.isEmpty()?null:n.value?new So(this.source,Xe(),n.value):new Ha(this.source,Xe(),n)}else return he(qe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ha(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(We(t))return this.isFullyInitialized()&&!this.filtered_;const n=qe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z5{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function B5(e,t,n,i){const o=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(O5(u.childName,u.snapshotNode))}),uc(e,o,"child_removed",t,i,n),uc(e,o,"child_added",t,i,n),uc(e,o,"child_moved",l,i,n),uc(e,o,"child_changed",t,i,n),uc(e,o,"value",t,i,n),o}function uc(e,t,n,i,o,l){const u=i.filter(f=>f.type===n);u.sort((f,p)=>F5(e,f,p)),u.forEach(f=>{const p=H5(e,f,l);o.forEach(h=>{h.respondsTo(f.type)&&t.push(h.createEvent(p,e.query_))})})}function H5(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function F5(e,t,n){if(t.childName==null||n.childName==null)throw Wa("Should only compare child_ events.");const i=new Ve(t.childName,t.snapshotNode),o=new Ve(n.childName,n.snapshotNode);return e.index_.compare(i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(e,t){return{eventCache:e,serverCache:t}}function Mc(e,t,n,i){return Gh(new Ss(t,n,i),e.serverCache)}function LA(e,t,n,i){return Gh(e.eventCache,new Ss(t,n,i))}function th(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function wo(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jg;const q5=()=>(Jg||(Jg=new bn(A3)),Jg);class ht{static fromObject(t){let n=new ht(null);return rn(t,(i,o)=>{n=n.set(new ut(i),o)}),n}constructor(t,n=q5()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Xe(),value:this.value};if(We(t))return null;{const i=qe(t),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(pt(t),n);return l!=null?{path:At(new ut(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(We(t))return this;{const n=qe(t),i=this.children.get(n);return i!==null?i.subtree(pt(t)):new ht(null)}}set(t,n){if(We(t))return new ht(n,this.children);{const i=qe(t),l=(this.children.get(i)||new ht(null)).set(pt(t),n),u=this.children.insert(i,l);return new ht(this.value,u)}}remove(t){if(We(t))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const n=qe(t),i=this.children.get(n);if(i){const o=i.remove(pt(t));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(t){if(We(t))return this.value;{const n=qe(t),i=this.children.get(n);return i?i.get(pt(t)):null}}setTree(t,n){if(We(t))return n;{const i=qe(t),l=(this.children.get(i)||new ht(null)).setTree(pt(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ht(this.value,u)}}fold(t){return this.fold_(Xe(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(At(t,o),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Xe(),n)}findOnPath_(t,n,i){const o=this.value?i(n,this.value):!1;if(o)return o;if(We(t))return null;{const l=qe(t),u=this.children.get(l);return u?u.findOnPath_(pt(t),At(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Xe(),n)}foreachOnPath_(t,n,i){if(We(t))return this;{this.value&&i(n,this.value);const o=qe(t),l=this.children.get(o);return l?l.foreachOnPath_(pt(t),At(n,o),i):new ht(null)}}foreach(t){this.foreach_(Xe(),t)}foreach_(t,n){this.children.inorderTraversal((i,o)=>{o.foreach_(At(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t){this.writeTree_=t}static empty(){return new yr(new ht(null))}}function Lc(e,t,n){if(We(t))return new yr(new ht(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const o=i.path;let l=i.value;const u=un(o,t);return l=l.updateChild(u,n),new yr(e.writeTree_.set(o,l))}else{const o=new ht(n),l=e.writeTree_.setTree(t,o);return new yr(l)}}}function av(e,t,n){let i=e;return rn(n,(o,l)=>{i=Lc(i,At(t,o),l)}),i}function eE(e,t){if(We(t))return yr.empty();{const n=e.writeTree_.setTree(t,new ht(null));return new yr(n)}}function lv(e,t){return Io(e,t)!=null}function Io(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(un(n.path,t)):null}function tE(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(i,o)=>{t.push(new Ve(i,o))}):e.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&t.push(new Ve(i,o.value))}),t}function ds(e,t){if(We(t))return e;{const n=Io(e,t);return n!=null?new yr(new ht(n)):new yr(e.writeTree_.subtree(t))}}function cv(e){return e.writeTree_.isEmpty()}function Fa(e,t){return PA(Xe(),e.writeTree_,t)}function PA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((o,l)=>{o===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=PA(At(e,o),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(At(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e,t){return zA(t,e)}function V5(e,t,n,i,o){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=Lc(e.visibleWrites,t,n)),e.lastWriteId=i}function G5(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=av(e.visibleWrites,t,n),e.lastWriteId=i}function Y5(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function W5(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,l=!1,u=e.allWrites.length-1;for(;o&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&Q5(f,i.path)?o=!1:Xn(i.path,f.path)&&(l=!0)),u--}if(o){if(l)return K5(e),!0;if(i.snap)e.visibleWrites=eE(e.visibleWrites,i.path);else{const f=i.children;rn(f,p=>{e.visibleWrites=eE(e.visibleWrites,At(i.path,p))})}return!0}else return!1}function Q5(e,t){if(e.snap)return Xn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Xn(At(e.path,n),t))return!0;return!1}function K5(e){e.visibleWrites=jA(e.allWrites,X5,Xe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function X5(e){return e.visible}function jA(e,t,n){let i=yr.empty();for(let o=0;o<e.length;++o){const l=e[o];if(t(l)){const u=l.path;let f;if(l.snap)Xn(n,u)?(f=un(n,u),i=Lc(i,f,l.snap)):Xn(u,n)&&(f=un(u,n),i=Lc(i,Xe(),l.snap.getChild(f)));else if(l.children){if(Xn(n,u))f=un(n,u),i=av(i,f,l.children);else if(Xn(u,n))if(f=un(u,n),We(f))i=av(i,Xe(),l.children);else{const p=ja(l.children,qe(f));if(p){const h=p.getChild(pt(f));i=Lc(i,Xe(),h)}}}else throw Wa("WriteRecord should have .snap or .children")}}return i}function UA(e,t,n,i,o){if(!i&&!o){const l=Io(e.visibleWrites,t);if(l!=null)return l;{const u=ds(e.visibleWrites,t);if(cv(u))return n;if(n==null&&!lv(u,Xe()))return null;{const f=n||Ne.EMPTY_NODE;return Fa(u,f)}}}else{const l=ds(e.visibleWrites,t);if(!o&&cv(l))return n;if(!o&&n==null&&!lv(l,Xe()))return null;{const u=function(h){return(h.visible||o)&&(!i||!~i.indexOf(h.writeId))&&(Xn(h.path,t)||Xn(t,h.path))},f=jA(e.allWrites,u,t),p=n||Ne.EMPTY_NODE;return Fa(f,p)}}}function Z5(e,t,n){let i=Ne.EMPTY_NODE;const o=Io(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(It,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=ds(e.visibleWrites,t);return n.forEachChild(It,(u,f)=>{const p=Fa(ds(l,new ut(u)),f);i=i.updateImmediateChild(u,p)}),tE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ds(e.visibleWrites,t);return tE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function J5(e,t,n,i,o){he(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=At(t,n);if(lv(e.visibleWrites,l))return null;{const u=ds(e.visibleWrites,l);return cv(u)?o.getChild(n):Fa(u,o.getChild(n))}}function eU(e,t,n,i){const o=At(t,n),l=Io(e.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=ds(e.visibleWrites,o);return Fa(u,i.getNode().getImmediateChild(n))}else return null}function tU(e,t){return Io(e.visibleWrites,t)}function nU(e,t,n,i,o,l,u){let f;const p=ds(e.visibleWrites,t),h=Io(p,Xe());if(h!=null)f=h;else if(n!=null)f=Fa(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const g=[],v=u.getCompare(),_=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let b=_.getNext();for(;b&&g.length<o;)v(b,i)!==0&&g.push(b),b=_.getNext();return g}else return[]}function rU(){return{visibleWrites:yr.empty(),allWrites:[],lastWriteId:-1}}function nh(e,t,n,i){return UA(e.writeTree,e.treePath,t,n,i)}function D_(e,t){return Z5(e.writeTree,e.treePath,t)}function nE(e,t,n,i){return J5(e.writeTree,e.treePath,t,n,i)}function rh(e,t){return tU(e.writeTree,At(e.treePath,t))}function iU(e,t,n,i,o,l){return nU(e.writeTree,e.treePath,t,n,i,o,l)}function O_(e,t,n){return eU(e.writeTree,e.treePath,t,n)}function $A(e,t){return zA(At(e.treePath,t),e.writeTree)}function zA(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,tu(i,t.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,eu(i,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Ba(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,tu(i,t.snapshotNode,o.oldSnap));else throw Wa("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const BA=new oU;class k_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new Ss(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return O_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wo(this.viewCache_),l=iU(this.writes_,o,n,1,i,t);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aU(e){return{filter:e}}function lU(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function cU(e,t,n,i,o){const l=new sU;let u,f;if(n.type===fr.OVERWRITE){const h=n;h.source.fromUser?u=uv(e,t,h.path,h.snap,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered()&&!We(h.path),u=ih(e,t,h.path,h.snap,i,o,f,l))}else if(n.type===fr.MERGE){const h=n;h.source.fromUser?u=dU(e,t,h.path,h.children,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered(),u=dv(e,t,h.path,h.children,i,o,f,l))}else if(n.type===fr.ACK_USER_WRITE){const h=n;h.revert?u=pU(e,t,h.path,i,o,l):u=fU(e,t,h.path,h.affectedTree,i,o,l)}else if(n.type===fr.LISTEN_COMPLETE)u=hU(e,t,n.path,i,l);else throw Wa("Unknown operation type: "+n.type);const p=l.getChanges();return uU(t,u,p),{viewCache:u,changes:p}}function uU(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=th(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(NA(th(t)))}}function HA(e,t,n,i,o,l){const u=t.eventCache;if(rh(i,n)!=null)return t;{let f,p;if(We(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const h=wo(t),g=h instanceof Ne?h:Ne.EMPTY_NODE,v=D_(i,g);f=e.filter.updateFullNode(t.eventCache.getNode(),v,l)}else{const h=nh(i,wo(t));f=e.filter.updateFullNode(t.eventCache.getNode(),h,l)}else{const h=qe(n);if(h===".priority"){he(bs(n)===1,"Can't have a priority with additional path components");const g=u.getNode();p=t.serverCache.getNode();const v=nE(i,n,g,p);v!=null?f=e.filter.updatePriority(g,v):f=u.getNode()}else{const g=pt(n);let v;if(u.isCompleteForChild(h)){p=t.serverCache.getNode();const _=nE(i,n,u.getNode(),p);_!=null?v=u.getNode().getImmediateChild(h).updateChild(g,_):v=u.getNode().getImmediateChild(h)}else v=O_(i,h,t.serverCache);v!=null?f=e.filter.updateChild(u.getNode(),h,v,g,o,l):f=u.getNode()}}return Mc(t,f,u.isFullyInitialized()||We(n),e.filter.filtersNodes())}}function ih(e,t,n,i,o,l,u,f){const p=t.serverCache;let h;const g=u?e.filter:e.filter.getIndexedFilter();if(We(n))h=g.updateFullNode(p.getNode(),i,null);else if(g.filtersNodes()&&!p.isFiltered()){const b=p.getNode().updateChild(n,i);h=g.updateFullNode(p.getNode(),b,null)}else{const b=qe(n);if(!p.isCompleteForPath(n)&&bs(n)>1)return t;const w=pt(n),T=p.getNode().getImmediateChild(b).updateChild(w,i);b===".priority"?h=g.updatePriority(p.getNode(),T):h=g.updateChild(p.getNode(),b,T,w,BA,null)}const v=LA(t,h,p.isFullyInitialized()||We(n),g.filtersNodes()),_=new k_(o,v,l);return HA(e,v,n,o,_,f)}function uv(e,t,n,i,o,l,u){const f=t.eventCache;let p,h;const g=new k_(o,t,l);if(We(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,u),p=Mc(t,h,!0,e.filter.filtersNodes());else{const v=qe(n);if(v===".priority")h=e.filter.updatePriority(t.eventCache.getNode(),i),p=Mc(t,h,f.isFullyInitialized(),f.isFiltered());else{const _=pt(n),b=f.getNode().getImmediateChild(v);let w;if(We(_))w=i;else{const I=g.getCompleteChild(v);I!=null?S_(_)===".priority"&&I.getChild(CA(_)).isEmpty()?w=I:w=I.updateChild(_,i):w=Ne.EMPTY_NODE}if(b.equals(w))p=t;else{const I=e.filter.updateChild(f.getNode(),v,w,_,g,u);p=Mc(t,I,f.isFullyInitialized(),e.filter.filtersNodes())}}}return p}function rE(e,t){return e.eventCache.isCompleteForChild(t)}function dU(e,t,n,i,o,l,u){let f=t;return i.foreach((p,h)=>{const g=At(n,p);rE(t,qe(g))&&(f=uv(e,f,g,h,o,l,u))}),i.foreach((p,h)=>{const g=At(n,p);rE(t,qe(g))||(f=uv(e,f,g,h,o,l,u))}),f}function iE(e,t,n){return n.foreach((i,o)=>{t=t.updateChild(i,o)}),t}function dv(e,t,n,i,o,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let p=t,h;We(n)?h=i:h=new ht(null).setTree(n,i);const g=t.serverCache.getNode();return h.children.inorderTraversal((v,_)=>{if(g.hasChild(v)){const b=t.serverCache.getNode().getImmediateChild(v),w=iE(e,b,_);p=ih(e,p,new ut(v),w,o,l,u,f)}}),h.children.inorderTraversal((v,_)=>{const b=!t.serverCache.isCompleteForChild(v)&&_.value===null;if(!g.hasChild(v)&&!b){const w=t.serverCache.getNode().getImmediateChild(v),I=iE(e,w,_);p=ih(e,p,new ut(v),I,o,l,u,f)}}),p}function fU(e,t,n,i,o,l,u){if(rh(o,n)!=null)return t;const f=t.serverCache.isFiltered(),p=t.serverCache;if(i.value!=null){if(We(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return ih(e,t,n,p.getNode().getChild(n),o,l,f,u);if(We(n)){let h=new ht(null);return p.getNode().forEachChild(Ra,(g,v)=>{h=h.set(new ut(g),v)}),dv(e,t,n,h,o,l,f,u)}else return t}else{let h=new ht(null);return i.foreach((g,v)=>{const _=At(n,g);p.isCompleteForPath(_)&&(h=h.set(g,p.getNode().getChild(_)))}),dv(e,t,n,h,o,l,f,u)}}function hU(e,t,n,i,o){const l=t.serverCache,u=LA(t,l.getNode(),l.isFullyInitialized()||We(n),l.isFiltered());return HA(e,u,n,i,BA,o)}function pU(e,t,n,i,o,l){let u;if(rh(i,n)!=null)return t;{const f=new k_(i,t,o),p=t.eventCache.getNode();let h;if(We(n)||qe(n)===".priority"){let g;if(t.serverCache.isFullyInitialized())g=nh(i,wo(t));else{const v=t.serverCache.getNode();he(v instanceof Ne,"serverChildren would be complete if leaf node"),g=D_(i,v)}g=g,h=e.filter.updateFullNode(p,g,l)}else{const g=qe(n);let v=O_(i,g,t.serverCache);v==null&&t.serverCache.isCompleteForChild(g)&&(v=p.getImmediateChild(g)),v!=null?h=e.filter.updateChild(p,g,v,pt(n),f,l):t.eventCache.getNode().hasChild(g)?h=e.filter.updateChild(p,g,Ne.EMPTY_NODE,pt(n),f,l):h=p,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=nh(i,wo(t)),u.isLeafNode()&&(h=e.filter.updateFullNode(h,u,l)))}return u=t.serverCache.isFullyInitialized()||rh(i,Xe())!=null,Mc(t,h,u,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new T_(i.getIndex()),l=N5(i);this.processor_=aU(l);const u=n.serverCache,f=n.eventCache,p=o.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),h=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),g=new Ss(p,u.isFullyInitialized(),o.filtersNodes()),v=new Ss(h,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Gh(v,g),this.eventGenerator_=new z5(this.query_)}get query(){return this.query_}}function gU(e){return e.viewCache_.serverCache.getNode()}function yU(e){return th(e.viewCache_)}function vU(e,t){const n=wo(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!We(t)&&!n.getImmediateChild(qe(t)).isEmpty())?n.getChild(t):null}function sE(e){return e.eventRegistrations_.length===0}function _U(e,t){e.eventRegistrations_.push(t)}function oE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const o=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&i.push(u)})}if(t){let o=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))o.push(u);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return i}function aE(e,t,n,i){t.type===fr.MERGE&&t.source.queryId!==null&&(he(wo(e.viewCache_),"We should always have a full cache before handling merges"),he(th(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,l=cU(e.processor_,o,t,n,i);return lU(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,FA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function bU(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(It,(l,u)=>{i.push(Ba(l,u))}),n.isFullyInitialized()&&i.push(NA(n.getNode())),FA(e,i,n.getNode(),t)}function FA(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return B5(e.eventGenerator_,t,n,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;class qA{constructor(){this.views=new Map}}function SU(e){he(!sh,"__referenceConstructor has already been defined"),sh=e}function wU(){return he(sh,"Reference.ts has not been loaded"),sh}function xU(e){return e.views.size===0}function N_(e,t,n,i){const o=t.source.queryId;if(o!==null){const l=e.views.get(o);return he(l!=null,"SyncTree gave us an op for an invalid query."),aE(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat(aE(u,t,n,i));return l}}function VA(e,t,n,i,o){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=nh(n,o?i:null),p=!1;f?p=!0:i instanceof Ne?(f=D_(n,i),p=!1):(f=Ne.EMPTY_NODE,p=!1);const h=Gh(new Ss(f,p,!1),new Ss(i,o,!1));return new mU(t,h)}return u}function EU(e,t,n,i,o,l){const u=VA(e,t,i,o,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),_U(u,n),bU(u,n)}function TU(e,t,n,i){const o=t._queryIdentifier,l=[];let u=[];const f=ws(e);if(o==="default")for(const[p,h]of e.views.entries())u=u.concat(oE(h,n,i)),sE(h)&&(e.views.delete(p),h.query._queryParams.loadsAllData()||l.push(h.query));else{const p=e.views.get(o);p&&(u=u.concat(oE(p,n,i)),sE(p)&&(e.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return f&&!ws(e)&&l.push(new(wU())(t._repo,t._path)),{removed:l,events:u}}function GA(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function fs(e,t){let n=null;for(const i of e.views.values())n=n||vU(i,t);return n}function YA(e,t){if(t._queryParams.loadsAllData())return Wh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function WA(e,t){return YA(e,t)!=null}function ws(e){return Wh(e)!=null}function Wh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh;function CU(e){he(!oh,"__referenceConstructor has already been defined"),oh=e}function RU(){return he(oh,"Reference.ts has not been loaded"),oh}let AU=1;class lE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ht(null),this.pendingWriteTree_=rU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function QA(e,t,n,i,o){return V5(e.pendingWriteTree_,t,n,i,o),o?nl(e,new So(R_(),t,n)):[]}function IU(e,t,n,i){G5(e.pendingWriteTree_,t,n,i);const o=ht.fromObject(n);return nl(e,new Ha(R_(),t,o))}function as(e,t,n=!1){const i=Y5(e.pendingWriteTree_,t);if(W5(e.pendingWriteTree_,t)){let l=new ht(null);return i.snap!=null?l=l.set(Xe(),!0):rn(i.children,u=>{l=l.set(new ut(u),!0)}),nl(e,new eh(i.path,l,n))}else return[]}function wu(e,t,n){return nl(e,new So(A_(),t,n))}function DU(e,t,n){const i=ht.fromObject(n);return nl(e,new Ha(A_(),t,i))}function OU(e,t){return nl(e,new ru(A_(),t))}function kU(e,t,n){const i=L_(e,n);if(i){const o=P_(i),l=o.path,u=o.queryId,f=un(l,t),p=new ru(I_(u),f);return j_(e,l,p)}else return[]}function ah(e,t,n,i,o=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||WA(u,t))){const p=TU(u,t,n,i);xU(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const h=p.removed;if(f=p.events,!o){const g=h.findIndex(_=>_._queryParams.loadsAllData())!==-1,v=e.syncPointTree_.findOnPath(l,(_,b)=>ws(b));if(g&&!v){const _=e.syncPointTree_.subtree(l);if(!_.isEmpty()){const b=LU(_);for(let w=0;w<b.length;++w){const I=b[w],T=I.query,O=JA(e,I);e.listenProvider_.startListening(Pc(T),iu(e,T),O.hashFn,O.onComplete)}}}!v&&h.length>0&&!i&&(g?e.listenProvider_.stopListening(Pc(t),null):h.forEach(_=>{const b=e.queryToTagMap.get(Qh(_));e.listenProvider_.stopListening(Pc(_),b)}))}PU(e,h)}return f}function KA(e,t,n,i){const o=L_(e,i);if(o!=null){const l=P_(o),u=l.path,f=l.queryId,p=un(u,t),h=new So(I_(f),p,n);return j_(e,u,h)}else return[]}function NU(e,t,n,i){const o=L_(e,i);if(o){const l=P_(o),u=l.path,f=l.queryId,p=un(u,t),h=ht.fromObject(n),g=new Ha(I_(f),p,h);return j_(e,u,g)}else return[]}function fv(e,t,n,i=!1){const o=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(o,(_,b)=>{const w=un(_,o);l=l||fs(b,w),u=u||ws(b)});let f=e.syncPointTree_.get(o);f?(u=u||ws(f),l=l||fs(f,Xe())):(f=new qA,e.syncPointTree_=e.syncPointTree_.set(o,f));let p;l!=null?p=!0:(p=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(o).foreachChild((b,w)=>{const I=fs(w,Xe());I&&(l=l.updateImmediateChild(b,I))}));const h=WA(f,t);if(!h&&!t._queryParams.loadsAllData()){const _=Qh(t);he(!e.queryToTagMap.has(_),"View does not exist, but we have a tag");const b=jU();e.queryToTagMap.set(_,b),e.tagToQueryMap.set(b,_)}const g=Yh(e.pendingWriteTree_,o);let v=EU(f,t,n,g,l,p);if(!h&&!u&&!i){const _=YA(f,t);v=v.concat(UU(e,t,_))}return v}function M_(e,t,n){const o=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const p=un(u,t),h=fs(f,p);if(h)return h});return UA(o,t,l,n,!0)}function MU(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(h,g)=>{const v=un(h,n);i=i||fs(g,v)});let o=e.syncPointTree_.get(n);o?i=i||fs(o,Xe()):(o=new qA,e.syncPointTree_=e.syncPointTree_.set(n,o));const l=i!=null,u=l?new Ss(i,!0,!1):null,f=Yh(e.pendingWriteTree_,t._path),p=VA(o,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return yU(p)}function nl(e,t){return XA(t,e.syncPointTree_,null,Yh(e.pendingWriteTree_,Xe()))}function XA(e,t,n,i){if(We(e.path))return ZA(e,t,n,i);{const o=t.get(Xe());n==null&&o!=null&&(n=fs(o,Xe()));let l=[];const u=qe(e.path),f=e.operationForChild(u),p=t.children.get(u);if(p&&f){const h=n?n.getImmediateChild(u):null,g=$A(i,u);l=l.concat(XA(f,p,h,g))}return o&&(l=l.concat(N_(o,e,i,n))),l}}function ZA(e,t,n,i){const o=t.get(Xe());n==null&&o!=null&&(n=fs(o,Xe()));let l=[];return t.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,h=$A(i,u),g=e.operationForChild(u);g&&(l=l.concat(ZA(g,f,p,h)))}),o&&(l=l.concat(N_(o,e,i,n))),l}function JA(e,t){const n=t.query,i=iu(e,n);return{hashFn:()=>(gU(t)||Ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?kU(e,n._path,i):OU(e,n._path);{const l=O3(o,n);return ah(e,n,null,l)}}}}function iu(e,t){const n=Qh(t);return e.queryToTagMap.get(n)}function Qh(e){return e._path.toString()+"$"+e._queryIdentifier}function L_(e,t){return e.tagToQueryMap.get(t)}function P_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function j_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const o=Yh(e.pendingWriteTree_,t);return N_(i,n,o,null)}function LU(e){return e.fold((t,n,i)=>{if(n&&ws(n))return[Wh(n)];{let o=[];return n&&(o=GA(n)),rn(i,(l,u)=>{o=o.concat(u)}),o}})}function Pc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(RU())(e._repo,e._path):e}function PU(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const o=Qh(i),l=e.queryToTagMap.get(o);e.queryToTagMap.delete(o),e.tagToQueryMap.delete(l)}}}function jU(){return AU++}function UU(e,t,n){const i=t._path,o=iu(e,t),l=JA(e,n),u=e.listenProvider_.startListening(Pc(t),o,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(o)he(!ws(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((h,g,v)=>{if(!We(h)&&g&&ws(g))return[Wh(g).query];{let _=[];return g&&(_=_.concat(GA(g).map(b=>b.query))),rn(v,(b,w)=>{_=_.concat(w)}),_}});for(let h=0;h<p.length;++h){const g=p[h];e.listenProvider_.stopListening(Pc(g),iu(e,g))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new U_(n)}node(){return this.node_}}class $_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=At(this.path_,t);return new $_(this.syncTree_,n)}node(){return M_(this.syncTree_,this.path_)}}const $U=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},cE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return zU(e[".sv"],t,n);if(typeof e[".sv"]=="object")return BU(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},zU=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},BU=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const o=t.node();if(he(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},eI=function(e,t,n,i){return z_(t,new $_(n,e),i)},tI=function(e,t,n){return z_(e,new U_(t),n)};function z_(e,t,n){const i=e.getPriority().val(),o=cE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=cE(u.getValue(),t,n);return f!==u.getValue()||o!==u.getPriority().val()?new Ft(f,Ut(o)):e}else{const u=e;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Ft(o))),u.forEachChild(It,(f,p)=>{const h=z_(p,t.getImmediateChild(f),n);h!==p&&(l=l.updateImmediateChild(f,h))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function H_(e,t){let n=t instanceof ut?t:new ut(t),i=e,o=qe(n);for(;o!==null;){const l=ja(i.node.children,o)||{children:{},childCount:0};i=new B_(o,i,l),n=pt(n),o=qe(n)}return i}function rl(e){return e.node.value}function nI(e,t){e.node.value=t,hv(e)}function rI(e){return e.node.childCount>0}function HU(e){return rl(e)===void 0&&!rI(e)}function Kh(e,t){rn(e.node.children,(n,i)=>{t(new B_(n,e,i))})}function iI(e,t,n,i){n&&t(e),Kh(e,o=>{iI(o,t,!0)})}function FU(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function xu(e){return new ut(e.parent===null?e.name:xu(e.parent)+"/"+e.name)}function hv(e){e.parent!==null&&qU(e.parent,e.name,e)}function qU(e,t,n){const i=HU(n),o=jr(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,hv(e)):!i&&!o&&(e.node.children[t]=n.node,e.node.childCount++,hv(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VU=/[\[\].#$\/\u0000-\u001F\u007F]/,GU=/[\[\].#$\u0000-\u001F\u007F]/,ey=10*1024*1024,F_=function(e){return typeof e=="string"&&e.length!==0&&!VU.test(e)},sI=function(e){return typeof e=="string"&&e.length!==0&&!GU.test(e)},YU=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),sI(e)},WU=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!g_(e)||e&&typeof e=="object"&&jr(e,".sv")},oI=function(e,t,n,i){i&&t===void 0||Xh(Lh(e,"value"),t,n)},Xh=function(e,t,n){const i=n instanceof ut?new d5(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+so(i));if(typeof t=="function")throw new Error(e+"contains a function "+so(i)+" with contents = "+t.toString());if(g_(t))throw new Error(e+"contains "+t.toString()+" "+so(i));if(typeof t=="string"&&t.length>ey/3&&Ph(t)>ey)throw new Error(e+"contains a string greater than "+ey+" utf8 bytes "+so(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,l=!1;if(rn(t,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!F_(u)))throw new Error(e+" contains an invalid key ("+u+") "+so(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);f5(i,u),Xh(e,f,i),h5(i)}),o&&l)throw new Error(e+' contains ".value" child '+so(i)+" in addition to actual children.")}},QU=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=Jc(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!F_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(u5);let o=null;for(n=0;n<t.length;n++){if(i=t[n],o!==null&&Xn(o,i))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},KU=function(e,t,n,i){const o=Lh(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const l=[];rn(t,(u,f)=>{const p=new ut(u);if(Xh(o,f,At(n,p)),S_(p)===".priority"&&!WU(f))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),QU(o,l)},aI=function(e,t,n,i){if(!sI(n))throw new Error(Lh(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XU=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aI(e,t,n)},q_=function(e,t){if(qe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},ZU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!F_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YU(n))throw new Error(Lh(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zh(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],l=o.getPath();n!==null&&!w_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&e.eventLists_.push(n)}function lI(e,t,n){Zh(e,n),cI(e,i=>w_(i,t))}function tr(e,t,n){Zh(e,n),cI(e,i=>Xn(i,t)||Xn(t,i))}function cI(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){const l=o.path;t(l)?(e$(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function e$(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();kc&&en("event: "+n.toString()),tl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t$="repo_interrupt",n$=25;class r${constructor(t,n,i,o){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jf(),this.transactionQueueTree_=new B_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function i$(e,t,n){if(e.stats_=__(e.repoInfo_),e.forceRestClient_||L3())e.server_=new Zf(e.repoInfo_,(i,o,l,u)=>{uE(e,i,o,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>dE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new mi(e.repoInfo_,t,(i,o,l,u)=>{uE(e,i,o,l,u)},i=>{dE(e,i)},i=>{s$(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=z3(e.repoInfo_,()=>new $5(e.stats_,e.server_)),e.infoData_=new M5,e.infoSyncTree_=new lE({startListening:(i,o,l,u)=>{let f=[];const p=e.infoData_.getNode(i._path);return p.isEmpty()||(f=wu(e.infoSyncTree_,i._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),V_(e,"connected",!1),e.serverSyncTree_=new lE({startListening:(i,o,l,u)=>(e.server_.listen(i,l,o,(f,p)=>{const h=u(f,p);tr(e.eventQueue_,i._path,h)}),[]),stopListening:(i,o)=>{e.server_.unlisten(i,o)}})}function uI(e){const n=e.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jh(e){return $U({timestamp:uI(e)})}function uE(e,t,n,i,o){e.dataUpdateCount++;const l=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(o)if(i){const p=Bf(n,h=>Ut(h));u=NU(e.serverSyncTree_,l,p,o)}else{const p=Ut(n);u=KA(e.serverSyncTree_,l,p,o)}else if(i){const p=Bf(n,h=>Ut(h));u=DU(e.serverSyncTree_,l,p)}else{const p=Ut(n);u=wu(e.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=qa(e,l)),tr(e.eventQueue_,f,u)}function dE(e,t){V_(e,"connected",t),t===!1&&c$(e)}function s$(e,t){rn(t,(n,i)=>{V_(e,n,i)})}function V_(e,t,n){const i=new ut("/.info/"+t),o=Ut(n);e.infoData_.updateSnapshot(i,o);const l=wu(e.infoSyncTree_,i,o);tr(e.eventQueue_,i,l)}function G_(e){return e.nextWriteId_++}function o$(e,t,n){const i=MU(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(o=>{const l=Ut(o).withIndex(t._queryParams.getIndex());fv(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=wu(e.serverSyncTree_,t._path,l);else{const f=iu(e.serverSyncTree_,t);u=KA(e.serverSyncTree_,t._path,l,f)}return tr(e.eventQueue_,t._path,u),ah(e.serverSyncTree_,t,n,null,!0),l},o=>(Eu(e,"get for query "+$t(t)+" failed: "+o),Promise.reject(new Error(o))))}function a$(e,t,n,i,o){Eu(e,"set",{path:t.toString(),value:n,priority:i});const l=Jh(e),u=Ut(n,i),f=M_(e.serverSyncTree_,t),p=tI(u,f,l),h=G_(e),g=QA(e.serverSyncTree_,t,p,h,!0);Zh(e.eventQueue_,g),e.server_.put(t.toString(),u.val(!0),(_,b)=>{const w=_==="ok";w||dn("set at "+t+" failed: "+_);const I=as(e.serverSyncTree_,h,!w);tr(e.eventQueue_,t,I),pv(e,o,_,b)});const v=W_(e,t);qa(e,v),tr(e.eventQueue_,v,[])}function l$(e,t,n,i){Eu(e,"update",{path:t.toString(),value:n});let o=!0;const l=Jh(e),u={};if(rn(n,(f,p)=>{o=!1,u[f]=eI(At(t,f),Ut(p),e.serverSyncTree_,l)}),o)en("update() called with empty data.  Don't do anything."),pv(e,i,"ok",void 0);else{const f=G_(e),p=IU(e.serverSyncTree_,t,u,f);Zh(e.eventQueue_,p),e.server_.merge(t.toString(),n,(h,g)=>{const v=h==="ok";v||dn("update at "+t+" failed: "+h);const _=as(e.serverSyncTree_,f,!v),b=_.length>0?qa(e,t):t;tr(e.eventQueue_,b,_),pv(e,i,h,g)}),rn(n,h=>{const g=W_(e,At(t,h));qa(e,g)}),tr(e.eventQueue_,t,[])}}function c$(e){Eu(e,"onDisconnectEvents");const t=Jh(e),n=Jf();ov(e.onDisconnect_,Xe(),(o,l)=>{const u=eI(o,l,e.serverSyncTree_,t);MA(n,o,u)});let i=[];ov(n,Xe(),(o,l)=>{i=i.concat(wu(e.serverSyncTree_,o,l));const u=W_(e,o);qa(e,u)}),e.onDisconnect_=Jf(),tr(e.eventQueue_,Xe(),i)}function u$(e,t,n){let i;qe(t._path)===".info"?i=fv(e.infoSyncTree_,t,n):i=fv(e.serverSyncTree_,t,n),lI(e.eventQueue_,t._path,i)}function fE(e,t,n){let i;qe(t._path)===".info"?i=ah(e.infoSyncTree_,t,n):i=ah(e.serverSyncTree_,t,n),lI(e.eventQueue_,t._path,i)}function d$(e){e.persistentConnection_&&e.persistentConnection_.interrupt(t$)}function Eu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),en(n,...t)}function pv(e,t,n,i){t&&tl(()=>{if(n==="ok")t(null);else{const o=(n||"error").toUpperCase();let l=o;i&&(l+=": "+i);const u=new Error(l);u.code=o,t(u)}})}function dI(e,t,n){return M_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function Y_(e,t=e.transactionQueueTree_){if(t||ep(e,t),rl(t)){const n=hI(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&f$(e,xu(t),n)}else rI(t)&&Kh(t,n=>{Y_(e,n)})}function f$(e,t,n){const i=n.map(h=>h.currentWriteId),o=dI(e,t,i);let l=o;const u=o.hash();for(let h=0;h<n.length;h++){const g=n[h];he(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const v=un(t,g.path);l=l.updateChild(v,g.currentOutputSnapshotRaw)}const f=l.val(!0),p=t;e.server_.put(p.toString(),f,h=>{Eu(e,"transaction put response",{path:p.toString(),status:h});let g=[];if(h==="ok"){const v=[];for(let _=0;_<n.length;_++)n[_].status=2,g=g.concat(as(e.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&v.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();ep(e,H_(e.transactionQueueTree_,t)),Y_(e,e.transactionQueueTree_),tr(e.eventQueue_,t,g);for(let _=0;_<v.length;_++)tl(v[_])}else{if(h==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{dn("transaction at "+p.toString()+" failed: "+h);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=h}qa(e,t)}},u)}function qa(e,t){const n=fI(e,t),i=xu(n),o=hI(e,n);return h$(e,o,i),i}function h$(e,t,n){if(t.length===0)return;const i=[];let o=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const p=t[f],h=un(n,p.path);let g=!1,v;if(he(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)g=!0,v=p.abortReason,o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=n$)g=!0,v="maxretry",o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0));else{const _=dI(e,p.path,u);p.currentInputSnapshot=_;const b=t[f].update(_.val());if(b!==void 0){Xh("transaction failed: Data returned ",b,p.path);let w=Ut(b);typeof b=="object"&&b!=null&&jr(b,".priority")||(w=w.updatePriority(_.getPriority()));const T=p.currentWriteId,O=Jh(e),M=tI(w,_,O);p.currentOutputSnapshotRaw=w,p.currentOutputSnapshotResolved=M,p.currentWriteId=G_(e),u.splice(u.indexOf(T),1),o=o.concat(QA(e.serverSyncTree_,p.path,M,p.currentWriteId,p.applyLocally)),o=o.concat(as(e.serverSyncTree_,T,!0))}else g=!0,v="nodata",o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0))}tr(e.eventQueue_,n,o),o=[],g&&(t[f].status=2,(function(_){setTimeout(_,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(v==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(v),!1,null))))}ep(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)tl(i[f]);Y_(e,e.transactionQueueTree_)}function fI(e,t){let n,i=e.transactionQueueTree_;for(n=qe(t);n!==null&&rl(i)===void 0;)i=H_(i,n),t=pt(t),n=qe(t);return i}function hI(e,t){const n=[];return pI(e,t,n),n.sort((i,o)=>i.order-o.order),n}function pI(e,t,n){const i=rl(t);if(i)for(let o=0;o<i.length;o++)n.push(i[o]);Kh(t,o=>{pI(e,o,n)})}function ep(e,t){const n=rl(t);if(n){let i=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[i]=n[o],i++);n.length=i,nI(t,n.length>0?n:void 0)}Kh(t,i=>{ep(e,i)})}function W_(e,t){const n=xu(fI(e,t)),i=H_(e.transactionQueueTree_,t);return FU(i,o=>{ty(e,o)}),ty(e,i),iI(i,o=>{ty(e,o)}),n}function ty(e,t){const n=rl(t);if(n){const i=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(as(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?nI(t,void 0):n.length=l+1,tr(e.eventQueue_,xu(t),o);for(let u=0;u<i.length;u++)tl(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p$(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let o=n[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function m$(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const hE=function(e,t){const n=g$(e),i=n.namespace;n.domain==="firebase.com"&&_i(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&_i("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||C3();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yA(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new ut(n.pathString)}},g$=function(e){let t="",n="",i="",o="",l="",u=!0,f="https",p=443;if(typeof e=="string"){let h=e.indexOf("//");h>=0&&(f=e.substring(0,h-1),e=e.substring(h+2));let g=e.indexOf("/");g===-1&&(g=e.length);let v=e.indexOf("?");v===-1&&(v=e.length),t=e.substring(0,Math.min(g,v)),g<v&&(o=p$(e.substring(g,v)));const _=m$(e.substring(Math.min(e.length,v)));h=t.indexOf(":"),h>=0?(u=f==="https"||f==="wss",p=parseInt(t.substring(h+1),10)):h=t.length;const b=t.slice(0,h);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const w=t.indexOf(".");i=t.substring(0,w).toLowerCase(),n=t.substring(w+1),l=i}"ns"in _&&(l=_.ns)}return{host:t,port:p,domain:n,subdomain:i,secure:u,scheme:f,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",y$=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=pE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=pE.charAt(t[o]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(t,n,i,o){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class _${constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(t,n,i,o){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=o}get key(){return We(this._path)?null:S_(this._path)}get ref(){return new Ei(this._repo,this._path)}get _queryIdentifier(){const t=Zx(this._queryParams),n=y_(t);return n==="{}"?"default":n}get _queryObject(){return Zx(this._queryParams)}isEqual(t){if(t=Yt(t),!(t instanceof Q_))return!1;const n=this._repo===t._repo,i=w_(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return n&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+c5(this._path)}}class Ei extends Q_{constructor(t,n){super(t,n,new C_,!1)}get parent(){const t=CA(this._path);return t===null?null:new Ei(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class su{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ut(t),i=ou(this.ref,t);return new su(this._node.getChild(n),i,It)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>t(new su(o,ou(this.ref,i),It)))}hasChild(t){const n=new ut(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ir(e,t){return e=Yt(e),e._checkNotDeleted("ref"),t!==void 0?ou(e._root,t):e._root}function ou(e,t){return e=Yt(e),qe(e._path)===null?XU("child","path",t):aI("child","path",t),new Ei(e._repo,At(e._path,t))}function b$(e,t){e=Yt(e),q_("push",e._path),oI("push",t,e._path,!0);const n=uI(e._repo),i=y$(n),o=ou(e,i),l=ou(e,i);let u;return t!=null?u=K_(l,t).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function gI(e){return q_("remove",e._path),K_(e,null)}function K_(e,t){e=Yt(e),q_("set",e._path),oI("set",t,e._path,!1);const n=new hu;return a$(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function yI(e,t){KU("update",t,e._path);const n=new hu;return l$(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function vI(e){e=Yt(e);const t=new mI(()=>{}),n=new tp(t);return o$(e._repo,e,n).then(i=>new su(i,new Ei(e._repo,e._path),e._queryParams.getIndex()))}class tp{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new v$("value",this,new su(t.snapshotNode,new Ei(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new _$(this,t,n):null}matches(t){return t instanceof tp?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function S$(e,t,n,i,o){let l;if(typeof i=="object"&&(l=void 0,o=i),typeof i=="function"&&(l=i),o&&o.onlyOnce){const p=n,h=(g,v)=>{fE(e._repo,e,f),p(g,v)};h.userCallback=n.userCallback,h.context=n.context,n=h}const u=new mI(n,l||void 0),f=new tp(u);return u$(e._repo,e,f),()=>fE(e._repo,e,f)}function np(e,t,n,i){return S$(e,"value",t,n,i)}SU(Ei);CU(Ei);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w$="FIREBASE_DATABASE_EMULATOR_HOST",mv={};let x$=!1;function E$(e,t,n,i){const o=t.lastIndexOf(":"),l=t.substring(0,o),u=Qa(l);e.repoInfo_=new yA(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function T$(e,t,n,i,o){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||_i("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),en("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=hE(l,o),f=u.repoInfo,p;typeof process<"u"&&Mx&&(p=Mx[w$]),p?(l=`http://${p}?ns=${f.namespace}`,u=hE(l,o),f=u.repoInfo):u.repoInfo.secure;const h=new j3(e.name,e.options,t);ZU("Invalid Firebase Database URL",u),We(u.path)||_i("Database URL must point to the root of a Firebase Database (not including a child path).");const g=R$(f,e,h,new P3(e,n));return new A$(g,e)}function C$(e,t){const n=mv[t];(!n||n[e.key]!==e)&&_i(`Database ${t}(${e.repoInfo_}) has already been deleted.`),d$(e),delete n[e.key]}function R$(e,t,n,i){let o=mv[t.name];o||(o={},mv[t.name]=o);let l=o[e.toURLString()];return l&&_i("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new r$(e,x$,n,i),o[e.toURLString()]=l,l}class A${constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(i$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ei(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(C$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&_i("Cannot call "+t+" on a deleted database.")}}function I$(e=r_(),t){const n=Xa(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=_P("database");i&&D$(n,...i)}return n}function D$(e,t,n,i={}){e=Yt(e),e._checkNotDeleted("useEmulator");const o=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(o===e._repoInternal.repoInfo_.host&&mo(i,l.repoInfo_.emulatorOptions))return;_i("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&_i('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Ef(Ef.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:bP(i.mockUserToken,e.app.options.projectId);u=new Ef(f)}Qa(t)&&(lR(t),cR("Database",!0)),E$(l,o,i,u)}/**
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
 */function O$(e){b3(Za),Mr(new _r("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return T$(i,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Zn(Lx,Px,e),Zn(Lx,Px,"esm2020")}mi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};mi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};O$();var Xs={},ny={},ry={},mE;function X_(){return mE||(mE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getBookableStatus=e.isWaitlistFull=e.isFree=e.WAITLIST_MAX=void 0,e.WAITLIST_MAX=10;const t=o=>o.occupancy<o.max_occupancy;e.isFree=t;const n=o=>o.waiting_count>=e.WAITLIST_MAX;e.isWaitlistFull=n;const i=o=>(0,e.isFree)(o)?"free":(0,e.isWaitlistFull)(o)?"full":"waitlist";e.getBookableStatus=i})(ry)),ry}var Zs={},gE;function Z_(){return gE||(gE=1,Object.defineProperty(Zs,"__esModule",{value:!0}),Zs.DEFAULT_STUDIO_ID=Zs.STUDIOS=void 0,Zs.STUDIOS={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},Zs.DEFAULT_STUDIO_ID="7248695"),Zs}var yE;function k$(){return yE||(yE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getChangeType=e.getWaitlistChangeType=e.classifyMatch=e.matchesAlert=void 0;const t=X_(),n=Z_(),i=(v,_)=>!(_.maxStatus==="free"&&!(0,t.isFree)(v)||_.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(v)),o=(v,_)=>{if(!_.disciplines)return!0;const b=String(v.offering_type.category.id);return _.disciplines.some(w=>String(w)===b)},l=(v,_)=>_.instructors?v.instructors.some(b=>_.instructors.indexOf(String(b.id))!==-1):!0,u=(v,_)=>{if(!_.timeRanges)return!0;const b=n.STUDIOS[_.studioId]?.timezone;if(!b)return!1;const w=new Date(v.starts_at),I=new Date(w.toLocaleString("en-US",{timeZone:"UTC"})),T=new Date(w.toLocaleString("en-US",{timeZone:b})),O=I.getTime()-T.getTime();w.setTime(w.getTime()-O);const M=_.timeRanges[w.getDay()];if(!M)return!1;const C=w.getHours()*60+w.getMinutes();return M.startMin<=C&&M.endMin>=C},f=(v,_)=>i(v,_)&&o(v,_)&&l(v,_)&&u(v,_);e.matchesAlert=f;const p=(v,_)=>{const b=[];return i(v,_)||b.push("status"),o(v,_)||b.push("discipline"),l(v,_)||b.push("instructor"),u(v,_)||b.push("time"),b.length===0?{type:"match"}:b.length===1?{type:"near-miss",reason:b[0]}:{type:"skipped"}};e.classifyMatch=p;const h=(v,_,b)=>!v.waitlistAlerts||_.waiting_count===b.waiting_count||!o(b,v)||!l(b,v)||!u(b,v)?null:"waitlist_changed";e.getWaitlistChangeType=h;const g=(v,_,b)=>(0,e.matchesAlert)(b,v)?v.maxStatus==="free"&&!(0,t.isFree)(_)&&(0,t.isFree)(b)?"became_free":v.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(_)&&!(0,t.isWaitlistFull)(b)?"waitlist_opened":null:null;e.getChangeType=g})(ny)),ny}var Js={},vE;function N$(){if(vE)return Js;vE=1,Object.defineProperty(Js,"__esModule",{value:!0}),Js.classifySnapshotMatch=Js.buildSnapshot=void 0;const e=X_(),t=Z_(),n=(l,u=Date.now())=>({snapshotAt:u,starts_at:l.starts_at,instructors:l.instructors.map(({id:f,name:p})=>({id:String(f),name:p})),disciplineId:String(l.offering_type.category.id),occupancy:l.occupancy,maxOccupancy:l.max_occupancy,waitingCount:l.waiting_count,status:(0,e.getBookableStatus)(l),name:l.name});Js.buildSnapshot=n;const i=(l,u)=>{if(!u.timeRanges)return!0;const f=t.STUDIOS[u.studioId]?.timezone;if(!f)return!1;const p=new Date(l.starts_at),h=new Date(p.toLocaleString("en-US",{timeZone:"UTC"})),g=new Date(p.toLocaleString("en-US",{timeZone:f})),v=h.getTime()-g.getTime();p.setTime(p.getTime()-v);const _=u.timeRanges[p.getDay()];if(!_)return!1;const b=p.getHours()*60+p.getMinutes();return _.startMin<=b&&_.endMin>=b},o=(l,u)=>{const f=[];return(u.maxStatus==="free"&&l.status!=="free"||u.maxStatus==="waitlist"&&l.status==="full")&&f.push("status"),u.disciplines&&u.disciplines.map(String).indexOf(l.disciplineId)===-1&&f.push("discipline"),u.instructors&&!l.instructors.some(h=>u.instructors.indexOf(h.id)!==-1)&&f.push("instructor"),i(l,u)||f.push("time"),f.length===0?{type:"match"}:f.length===1?{type:"near-miss",reason:f[0]}:{type:"skipped"}};return Js.classifySnapshotMatch=o,Js}var iy={},_E;function M$(){return _E||(_E=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAllPelotonPages=e.rebasePelotonUrl=e.buildEventsUrl=e.getPelotonHeaders=e.PELOTON_CORS_PROXY=e.PELOTON_API_BASE=void 0,e.PELOTON_API_BASE="https://schedule.studio.onepeloton.com/api/v2",e.PELOTON_CORS_PROXY="https://cors.abbondanzo.workers.dev";const t=l=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":l});e.getPelotonHeaders=t;const n=l=>{const{localStartsAtGte:u=new Date,localStartsAtLte:f,fields:p,expand:h,corsProxy:g=!1}=l,v=g?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE,_=new URLSearchParams({local_starts_at_gte:u.toISOString().replace("Z",""),page_size:"500",sort:"start"});return p&&p.length>0&&_.set("fields",p.join(",")),h&&h.length>0&&_.set("expand",h.join(",")),f&&_.set("local_starts_at_lte",f.toISOString().replace("Z","")),`${v}/events?${_}`};e.buildEventsUrl=n;const i=(l,u=!1)=>{const{search:f}=new URL(l);return`${u?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE}/events${f}`};e.rebasePelotonUrl=i;const o=async(l,u,f=!1)=>{const p=await u(l);if(!p.next)return p.results;const h=[...p.results];let g=(0,e.rebasePelotonUrl)(p.next,f);for(;g;){const v=await u(g);h.push(...v.results),g=v.next?(0,e.rebasePelotonUrl)(v.next,f):null}return h};e.fetchAllPelotonPages=o})(iy)),iy}var sy={},bE;function L$(){return bE||(bE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isBookableStatus=e.BOOKABLE_STATUS_KEYS=void 0,e.BOOKABLE_STATUS_KEYS=["free","waitlist","full"];const t=n=>e.BOOKABLE_STATUS_KEYS.indexOf(n)!==-1;e.isBookableStatus=t})(sy)),sy}var oy={},SE;function P$(){return SE||(SE=1,Object.defineProperty(oy,"__esModule",{value:!0})),oy}var dc={},wE;function j$(){return wE||(wE=1,Object.defineProperty(dc,"__esModule",{value:!0}),dc.PATHS=void 0,dc.PATHS={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`}),dc}var eo={},xE;function U$(){if(xE)return eo;xE=1,Object.defineProperty(eo,"__esModule",{value:!0}),eo.isNotEmpty=eo.isEmpty=void 0;const e=n=>n==null;eo.isEmpty=e;const t=n=>n!=null;return eo.isNotEmpty=t,eo}var ay={},EE;function $$(){return EE||(EE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isAllDay=e.DEFAULT_TIME_RANGE=e.SPECIFIC_DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE=void 0,e.ALL_DAY_TIME_RANGE={startMin:0,endMin:1440},e.SPECIFIC_DEFAULT_TIME_RANGE={startMin:420,endMin:1140},e.DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE;const t=n=>n.startMin===e.ALL_DAY_TIME_RANGE.startMin&&n.endMin===e.ALL_DAY_TIME_RANGE.endMin;e.isAllDay=t})(ay)),ay}var TE;function z$(){return TE||(TE=1,(function(e){var t=Xs&&Xs.__createBinding||(Object.create?(function(i,o,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(o,l);(!f||("get"in f?!o.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return o[l]}}),Object.defineProperty(i,u,f)}):(function(i,o,l,u){u===void 0&&(u=l),i[u]=o[l]})),n=Xs&&Xs.__exportStar||function(i,o){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&t(o,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),n(k$(),e),n(N$(),e),n(M$(),e),n(L$(),e),n(P$(),e),n(X_(),e),n(j$(),e),n(U$(),e),n(Z_(),e),n($$(),e)})(Xs)),Xs}var De=z$();const wn=zh(()=>I$(Ic)),_I=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=ir(n,De.PATHS.messagingToken(e,t));await gI(i)},CE=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=ir(n,De.PATHS.messagingToken(e,t)),o={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await K_(i,o)},B$=({children:e})=>{const[t,n]=E.useState();E.useEffect(()=>{if(wa){const u=v6(wa,f=>{console.log("[MessagingProvider] Received message ",f);const p=f.notification?.title??f.data?.title,h=f.notification?.body??f.data?.body;p&&new Notification(p,{body:h})});return()=>{u()}}return()=>{}},[]);const i=et(yu);E.useEffect(()=>{wa&&i&&_x().then(u=>(n(u),CE(i,u))).catch(u=>{Nr(u)})},[i]);const o=E.useCallback(()=>{wa&&i&&_x().then(u=>(n(u),CE(i,u))).catch(u=>{Nr(u)})},[i]);E.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&o()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[o]);const l=E.useCallback(async()=>{t&&i&&(await _I(i,t),n(void 0))},[t,i]);return y.jsx(vu.Provider,{value:{token:t,refreshToken:o,deleteToken:l},children:e})},J_=60,eb=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,nt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",ALERTS_SIMULATION:"/alerts/:alertId/test",STATS:"/stats",WAITLIST_ALERT:"/waitlist-alert"},H$=e=>`/alerts/${e}/test`,bI=({size:e=22})=>y.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[y.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),y.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function SI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wI=SI,xI=new Ro("auth","Firebase",SI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new t_("@firebase/auth");function F$(e,...t){lh.logLevel<=ct.WARN&&lh.warn(`Auth (${Za}): ${e}`,...t)}function Tf(e,...t){lh.logLevel<=ct.ERROR&&lh.error(`Auth (${Za}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e,...t){throw nb(e,...t)}function vr(e,...t){return nb(e,...t)}function tb(e,t,n){const i={...wI(),[t]:n};return new Ro("auth","Firebase",i).create(t,{appName:e.name})}function gi(e){return tb(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function q$(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&nr(e,"argument-error"),tb(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nb(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return xI.create(e,...t)}function ke(e,t,...n){if(!e)throw nb(t,...n)}function fi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tf(t),new Error(t)}function bi(e,t){e||fi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(){return typeof self<"u"&&self.location?.href||""}function V$(){return RE()==="http:"||RE()==="https:"}function RE(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G$(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V$()||EP()||"connection"in navigator)?navigator.onLine:!0}function Y$(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,n){this.shortDelay=t,this.longDelay=n,bi(n>t,"Short delay should be less than long delay!"),this.isMobile=e_()||uR()}get(){return G$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(e,t){bi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q$=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],K$=new Tu(3e4,6e4);function Ts(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Cs(e,t,n,i,o={}){return TI(e,o,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Ka({key:e.config.apiKey,...u}).slice(1),p=await e._getAdditionalHeaders();p["Content-Type"]="application/json",e.languageCode&&(p["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:p,...l};return xP()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(h.credentials="include"),EI.fetch()(await CI(e,e.config.apiHost,n,f),h)})}async function TI(e,t,n){e._canInitEmulator=!1;const i={...W$,...t};try{const o=new Z$(e),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw tf(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,h]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw tf(e,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw tf(e,"email-already-in-use",u);if(p==="USER_DISABLED")throw tf(e,"user-disabled",u);const g=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw tb(e,g,h);nr(e,g)}}catch(o){if(o instanceof wi)throw o;nr(e,"network-request-failed",{message:String(o)})}}async function Cu(e,t,n,i,o={}){const l=await Cs(e,t,n,i,o);return"mfaPendingCredential"in l&&nr(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function CI(e,t,n,i){const o=`${t}${n}?${i}`,l=e,u=l.config.emulator?rb(e.config,o):`${e.config.apiScheme}://${o}`;return Q$.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function X$(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Z${clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vr(this.auth,"network-request-failed")),K$.get())})}}function tf(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=vr(e,t,i);return o.customData._tokenResponse=n,o}function AE(e){return e!==void 0&&e.enterprise!==void 0}class J${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return X$(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ez(e,t){return Cs(e,"GET","/v2/recaptchaConfig",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tz(e,t){return Cs(e,"POST","/v1/accounts:delete",t)}async function ch(e,t){return Cs(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function nz(e,t=!1){const n=Yt(e),i=await n.getIdToken(t),o=ib(i);ke(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:jc(ly(o.auth_time)),issuedAtTime:jc(ly(o.iat)),expirationTime:jc(ly(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ly(e){return Number(e)*1e3}function ib(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Tf("JWT malformed, contained fewer than 3 sections"),null;try{const o=zf(n);return o?JSON.parse(o):(Tf("Failed to decode base64 JWT payload"),null)}catch(o){return Tf("Caught error parsing JWT payload as JSON",o?.toString()),null}}function IE(e){const t=ib(e);return ke(t,"internal-error"),ke(typeof t.exp<"u","internal-error"),ke(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof wi&&rz(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function rz({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jc(this.lastLoginAt),this.creationTime=jc(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(e){const t=e.auth,n=await e.getIdToken(),i=await au(e,ch(t,{idToken:n}));ke(i?.users.length,t,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=o.providerUserInfo?.length?RI(o.providerUserInfo):[],u=oz(e.providerData,l),f=e.isAnonymous,p=!(e.email&&o.passwordHash)&&!u?.length,h=f?p:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new yv(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,g)}async function sz(e){const t=Yt(e);await uh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oz(e,t){return[...e.filter(i=>!t.some(o=>o.providerId===i.providerId)),...t]}function RI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function az(e,t){const n=await TI(e,{},async()=>{const i=Ka({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:l}=e.config,u=await CI(e,o,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(p.credentials="include"),EI.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lz(e,t){return Cs(e,"POST","/v2/accounts:revokeToken",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ke(t.idToken,"internal-error"),ke(typeof t.idToken<"u","internal-error"),ke(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):IE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ke(t.length!==0,"internal-error");const n=IE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await az(t,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,u=new Aa;return i&&(ke(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:t}),u.accessToken=o),l&&(ke(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Aa,this.toJSON())}_performRefresh(){return fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t){ke(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hr{constructor({uid:t,auth:n,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new iz(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new yv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await au(this,this.stsTokenManager.getToken(this.auth,t));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return nz(this,t)}reload(){return sz(this)}_assign(t){this!==t&&(ke(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hr({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await uh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(gi(this.auth));const t=await this.getIdToken();return await au(this,tz(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,h=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:I}=n;ke(v&&I,t,"internal-error");const T=Aa.fromJSON(this.name,I);ke(typeof v=="string",t,"internal-error"),Xi(i,t.name),Xi(o,t.name),ke(typeof _=="boolean",t,"internal-error"),ke(typeof b=="boolean",t,"internal-error"),Xi(l,t.name),Xi(u,t.name),Xi(f,t.name),Xi(p,t.name),Xi(h,t.name),Xi(g,t.name);const O=new hr({uid:v,auth:t,email:o,emailVerified:_,displayName:i,isAnonymous:b,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:T,createdAt:h,lastLoginAt:g});return w&&Array.isArray(w)&&(O.providerData=w.map(M=>({...M}))),p&&(O._redirectEventId=p),O}static async _fromIdTokenResponse(t,n,i=!1){const o=new Aa;o.updateFromServerResponse(n);const l=new hr({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i});return await uh(l),l}static async _fromGetAccountInfoResponse(t,n,i){const o=n.users[0];ke(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?RI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,f=new Aa;f.updateFromIdToken(i);const p=new hr({uid:o.localId,auth:t,stsTokenManager:f,isAnonymous:u}),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new yv(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,h),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Map;function hi(e){bi(e instanceof Function,"Expected a class definition");let t=DE.get(e);return t?(bi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,DE.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}AI.type="NONE";const OE=AI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(e,t,n){return`firebase:${e}:${t}:${n}`}class Ia{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Cf(this.userKey,o.apiKey,l),this.fullPersistenceKey=Cf("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ch(this.auth,{idToken:t}).catch(()=>{});return n?hr._fromGetAccountInfoResponse(this.auth,n,t):null}return hr._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ia(hi(OE),t,i);const o=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let l=o[0]||hi(OE);const u=Cf(i,t.config.apiKey,t.name);let f=null;for(const h of n)try{const g=await h._get(u);if(g){let v;if(typeof g=="string"){const _=await ch(t,{idToken:g}).catch(()=>{});if(!_)break;v=await hr._fromGetAccountInfoResponse(t,_,g)}else v=hr._fromJSON(t,g);h!==l&&(f=v),l=h;break}}catch{}const p=o.filter(h=>h._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ia(l,t,i):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async h=>{if(h!==l)try{await h._remove(u)}catch{}})),new Ia(l,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(II(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(MI(t))return"Blackberry";if(LI(t))return"Webos";if(DI(t))return"Safari";if((t.includes("chrome/")||OI(t))&&!t.includes("edge/"))return"Chrome";if(NI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function II(e=fn()){return/firefox\//i.test(e)}function DI(e=fn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function OI(e=fn()){return/crios\//i.test(e)}function kI(e=fn()){return/iemobile/i.test(e)}function NI(e=fn()){return/android/i.test(e)}function MI(e=fn()){return/blackberry/i.test(e)}function LI(e=fn()){return/webos/i.test(e)}function sb(e=fn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function cz(e=fn()){return sb(e)&&!!window.navigator?.standalone}function uz(){return TP()&&document.documentMode===10}function PI(e=fn()){return sb(e)||NI(e)||LI(e)||MI(e)||/windows phone/i.test(e)||kI(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(e,t=[]){let n;switch(e){case"Browser":n=kE(fn());break;case"Worker":n=`${kE(fn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Za}/${i}`}/**
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
 */class dz{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const p=t(l);u(p)}catch(p){f(p)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function fz(e,t={}){return Cs(e,"GET","/v2/passwordPolicy",Ts(e,t))}/**
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
 */const hz=6;class pz{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??hz,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<t.length;o++)i=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mz{constructor(t,n,i,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new NE(this),this.idTokenSubscription=new NE(this),this.beforeStateQueue=new dz(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=hi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ia.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ch(this,{idToken:t}),i=await hr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Nn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await uh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Y$()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(gi(this));const n=t?Yt(t):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ke(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await fz(this),n=new pz(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ro("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await lz(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&hi(t)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await Ia.create(this,[hi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,i,o);return()=>{u=!0,p()}}else{const p=t.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=jI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&F$(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Rs(e){return Yt(e)}class NE{constructor(t){this.auth=t,this.observer=null,this.addObserver=MP(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gz(e){rp=e}function UI(e){return rp.loadJS(e)}function yz(){return rp.recaptchaEnterpriseScript}function vz(){return rp.gapiScript}function _z(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class bz{constructor(){this.enterprise=new Sz}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Sz{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const wz="recaptcha-enterprise",$I="NO_RECAPTCHA";class xz{constructor(t){this.type=wz,this.auth=Rs(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{ez(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const h=new J$(p);return l.tenantId==null?l._agentRecaptchaConfig=h:l._tenantRecaptchaConfigs[l.tenantId]=h,u(h.siteKey)}}).catch(p=>{f(p)})})}function o(l,u,f){const p=window.grecaptcha;AE(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:t}).then(h=>{u(h)}).catch(()=>{u($I)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bz().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&AE(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=yz();p.length!==0&&(p+=f),UI(p).then(()=>{o(f,l,u)}).catch(h=>{u(h)})}}).catch(f=>{u(f)})})}}async function ME(e,t,n,i=!1,o=!1){const l=new xz(e);let u;if(o)u=$I;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,h=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function vv(e,t,n,i,o){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await ME(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await ME(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(e,t){const n=Xa(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(mo(l,t??{}))return o;nr(o,"already-initialized")}return n.initialize({options:t})}function Ez(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(hi);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function Tz(e,t,n){const i=Rs(e);ke(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!1,l=BI(t),{host:u,port:f}=Cz(t),p=f===null?"":`:${f}`,h={url:`${l}//${u}${p}/`},g=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(mo(h,i.config.emulator)&&mo(g,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=g,i.settings.appVerificationDisabledForTesting=!0,Qa(u)?(lR(`${l}//${u}${p}`),cR("Auth",!0)):Rz()}function BI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Cz(e){const t=BI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:LE(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:LE(u)}}}function LE(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Rz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return fi("not implemented")}_getIdTokenResponse(t){return fi("not implemented")}_linkToIdToken(t,n){return fi("not implemented")}_getReauthenticationResolver(t){return fi("not implemented")}}async function Az(e,t){return Cs(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iz(e,t){return Cu(e,"POST","/v1/accounts:signInWithPassword",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dz(e,t){return Cu(e,"POST","/v1/accounts:signInWithEmailLink",Ts(e,t))}async function Oz(e,t){return Cu(e,"POST","/v1/accounts:signInWithEmailLink",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends ob{constructor(t,n,i,o=null){super("password",i),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new lu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new lu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vv(t,n,"signInWithPassword",Iz);case"emailLink":return Dz(t,{email:this._email,oobCode:this._password});default:nr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vv(t,i,"signUpPassword",Az);case"emailLink":return Oz(t,{idToken:n,email:this._email,oobCode:this._password});default:nr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(e,t){return Cu(e,"POST","/v1/accounts:signInWithIdp",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kz="http://localhost";class xo extends ob{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:o,...l}=n;if(!i||!o)return null;const u=new xo(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Da(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Da(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Da(t,n)}buildRequest(){const t={requestUri:kz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ka(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nz(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mz(e){const t=Sc(wc(e)).link,n=t?Sc(wc(t)).deep_link_id:null,i=Sc(wc(e)).deep_link_id;return(i?Sc(wc(i)).link:null)||i||n||t||e}class ab{constructor(t){const n=Sc(wc(t)),i=n.apiKey??null,o=n.oobCode??null,l=Nz(n.mode??null);ke(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=Mz(t);try{return new ab(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(t,n){return lu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=ab.parseLink(n);return ke(i,"argument-error"),lu._fromEmailAndCode(t,i.code,i.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ru extends lb{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Ru{constructor(){super("facebook.com")}static credential(t){return xo._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return is.credentialFromTaggedObject(t)}static credentialFromError(t){return is.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return is.credential(t.oauthAccessToken)}catch{return null}}}is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ru{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xo._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ci.credentialFromTaggedObject(t)}static credentialFromError(t){return ci.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return ci.credential(n,i)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Ru{constructor(){super("github.com")}static credential(t){return xo._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ss.credentialFromTaggedObject(t)}static credentialFromError(t){return ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ss.credential(t.oauthAccessToken)}catch{return null}}}ss.GITHUB_SIGN_IN_METHOD="github.com";ss.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Ru{constructor(){super("twitter.com")}static credential(t,n){return xo._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return os.credentialFromTaggedObject(t)}static credentialFromError(t){return os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return os.credential(n,i)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lz(e,t){return Cu(e,"POST","/v1/accounts:signUp",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,o=!1){const l=await hr._fromIdTokenResponse(t,i,o),u=PE(i);return new Eo({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const o=PE(i);return new Eo({user:t,providerId:o,_tokenResponse:i,operationType:n})}}function PE(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends wi{constructor(t,n,i,o){super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,o){return new dh(t,n,i,o)}}function HI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(e,l,t,i):l})}async function Pz(e,t,n=!1){const i=await au(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Eo._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jz(e,t,n=!1){const{auth:i}=e;if(Nn(i.app))return Promise.reject(gi(i));const o="reauthenticate";try{const l=await au(e,HI(i,o,t,e),n);ke(l.idToken,i,"internal-error");const u=ib(l.idToken);ke(u,i,"internal-error");const{sub:f}=u;return ke(e.uid===f,i,"user-mismatch"),Eo._forOperation(e,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&nr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(e,t,n=!1){if(Nn(e.app))return Promise.reject(gi(e));const i="signIn",o=await HI(e,i,t),l=await Eo._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(l.user),l}async function Uz(e,t){return FI(Rs(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(e){const t=Rs(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function $z(e,t,n){if(Nn(e.app))return Promise.reject(gi(e));const i=Rs(e),u=await vv(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lz).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&qI(e),p}),f=await Eo._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function zz(e,t,n){return Nn(e.app)?Promise.reject(gi(e)):Uz(Yt(e),il.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&qI(e),i})}function Bz(e,t,n,i){return Yt(e).onIdTokenChanged(t,n,i)}function Hz(e,t,n){return Yt(e).beforeAuthStateChanged(t,n)}function Fz(e,t,n,i){return Yt(e).onAuthStateChanged(t,n,i)}const fh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fh,"1"),this.storage.removeItem(fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qz=1e3,Vz=10;class GI extends VI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&t(n,o,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const i=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);uz()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,Vz):o()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},qz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}GI.type="LOCAL";const Gz=GI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends VI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}YI.type="SESSION";const WI=YI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yz(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const i=new ip(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(u).map(async h=>h(n.origin,l)),p=await Yz(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ip.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wz{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const h=cb("",20);o.port1.start();const g=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(v){const _=v;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(g),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(_.data.response);break;default:clearTimeout(g),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return window}function Qz(e){kr().location.href=e}/**
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
 */function QI(){return typeof kr().WorkerGlobalScope<"u"&&typeof kr().importScripts=="function"}async function Kz(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xz(){return navigator?.serviceWorker?.controller||null}function Zz(){return QI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="firebaseLocalStorageDb",Jz=1,hh="firebaseLocalStorage",XI="fbase_key";class Au{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sp(e,t){return e.transaction([hh],t?"readwrite":"readonly").objectStore(hh)}function e8(){const e=indexedDB.deleteDatabase(KI);return new Au(e).toPromise()}function _v(){const e=indexedDB.open(KI,Jz);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(hh,{keyPath:XI})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(hh)?t(i):(i.close(),await e8(),t(await _v()))})})}async function jE(e,t,n){const i=sp(e,!0).put({[XI]:t,value:n});return new Au(i).toPromise()}async function t8(e,t){const n=sp(e,!1).get(t),i=await new Au(n).toPromise();return i===void 0?null:i.value}function UE(e,t){const n=sp(e,!0).delete(t);return new Au(n).toPromise()}const n8=800,r8=3;class ZI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _v(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>r8)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ip._getInstance(Zz()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Kz(),!this.activeServiceWorker)return;this.sender=new Wz(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Xz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _v();return await jE(t,fh,"1"),await UE(t,fh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>jE(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>t8(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>UE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const l=sp(o,!1).getAll();return new Au(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:o,value:l}of t)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZI.type="LOCAL";const i8=ZI;new Tu(3e4,6e4);/**
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
 */function JI(e,t){return t?hi(t):(ke(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub extends ob{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Da(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Da(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Da(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function s8(e){return FI(e.auth,new ub(e),e.bypassAuthState)}function o8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),jz(n,new ub(e),e.bypassAuthState)}async function a8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),Pz(n,new ub(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(t,n,i,o,l=!1){this.auth=t,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return s8;case"linkViaPopup":case"linkViaRedirect":return a8;case"reauthViaPopup":case"reauthViaRedirect":return o8;default:nr(this.auth,"internal-error")}}resolve(t){bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l8=new Tu(2e3,1e4);async function c8(e,t,n){if(Nn(e.app))return Promise.reject(vr(e,"operation-not-supported-in-this-environment"));const i=Rs(e);q$(e,t,lb);const o=JI(i,n);return new uo(i,"signInViaPopup",t,o).executeNotNull()}class uo extends eD{constructor(t,n,i,o,l){super(t,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ke(t,this.auth,"internal-error"),t}async onExecution(){bi(this.filter.length===1,"Popup operations only handle one event");const t=cb();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,l8.get())};t()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u8="pendingRedirect",Rf=new Map;class d8 extends eD{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Rf.get(this.auth._key());if(!t){try{const i=await f8(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Rf.set(this.auth._key(),t)}return this.bypassAuthState||Rf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f8(e,t){const n=m8(t),i=p8(e);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function h8(e,t){Rf.set(e._key(),t)}function p8(e){return hi(e._redirectPersistence)}function m8(e){return Cf(u8,e.config.apiKey,e.name)}async function g8(e,t,n=!1){if(Nn(e.app))return Promise.reject(gi(e));const i=Rs(e),o=JI(i,t),u=await new d8(i,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y8=600*1e3;class v8{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_8(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!tD(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(vr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=y8&&this.cachedEventUids.clear(),this.cachedEventUids.has($E(t))}saveEventToCache(t){this.cachedEventUids.add($E(t)),this.lastProcessedEventTime=Date.now()}}function $E(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tD({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function _8(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tD(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b8(e,t={}){return Cs(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w8=/^https?/;async function x8(e){if(e.config.emulator)return;const{authorizedDomains:t}=await b8(e);for(const n of t)try{if(E8(n))return}catch{}nr(e,"unauthorized-domain")}function E8(e){const t=gv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!w8.test(n))return!1;if(S8.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const T8=new Tu(3e4,6e4);function zE(){const e=kr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function C8(e){return new Promise((t,n)=>{function i(){zE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zE(),n(vr(e,"network-request-failed"))},timeout:T8.get()})}if(kr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(kr().gapi?.load)i();else{const o=_z("iframefcb");return kr()[o]=()=>{gapi.load?i():n(vr(e,"network-request-failed"))},UI(`${vz()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Af=null,t})}let Af=null;function R8(e){return Af=Af||C8(e),Af}/**
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
 */const A8=new Tu(5e3,15e3),I8="__/auth/iframe",D8="emulator/auth/iframe",O8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N8(e){const t=e.config;ke(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?rb(t,D8):`https://${e.config.authDomain}/${I8}`,i={apiKey:t.apiKey,appName:e.name,v:Za},o=k8.get(e.config.apiHost);o&&(i.eid=o);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ka(i).slice(1)}`}async function M8(e){const t=await R8(e),n=kr().gapi;return ke(n,e,"internal-error"),t.open({where:document.body,url:N8(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O8,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=vr(e,"network-request-failed"),f=kr().setTimeout(()=>{l(u)},A8.get());function p(){kr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const L8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P8=500,j8=600,U8="_blank",$8="http://localhost";class BE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z8(e,t,n,i=P8,o=j8){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...L8,width:i.toString(),height:o.toString(),top:l,left:u},h=fn().toLowerCase();n&&(f=OI(h)?U8:n),II(h)&&(t=t||$8,p.scrollbars="yes");const g=Object.entries(p).reduce((_,[b,w])=>`${_}${b}=${w},`,"");if(cz(h)&&f!=="_self")return B8(t||"",f),new BE(null);const v=window.open(t||"",f,g);ke(v,e,"popup-blocked");try{v.focus()}catch{}return new BE(v)}function B8(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const H8="__/auth/handler",F8="emulator/auth/handler",q8=encodeURIComponent("fac");async function HE(e,t,n,i,o,l){ke(e.config.authDomain,e,"auth-domain-config-required"),ke(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Za,eventId:o};if(t instanceof lb){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Fy(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,v]of Object.entries({}))u[g]=v}if(t instanceof Ru){const g=t.getScopes().filter(v=>v!=="");g.length>0&&(u.scopes=g.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const g of Object.keys(f))f[g]===void 0&&delete f[g];const p=await e._getAppCheckToken(),h=p?`#${q8}=${encodeURIComponent(p)}`:"";return`${V8(e)}?${Ka(f).slice(1)}${h}`}function V8({config:e}){return e.emulator?rb(e,F8):`https://${e.authDomain}/${H8}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="webStorageSupport";class G8{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WI,this._completeRedirectFn=g8,this._overrideRedirectResult=h8}async _openPopup(t,n,i,o){bi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await HE(t,n,i,gv(),o);return z8(t,l,cb())}async _openRedirect(t,n,i,o){await this._originValidation(t);const l=await HE(t,n,i,gv(),o);return Qz(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(bi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await M8(t),i=new v8(t);return n.register("authEvent",o=>(ke(o?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(cy,{type:cy},o=>{const l=o?.[0]?.[cy];l!==void 0&&n(!!l),nr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x8(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return PI()||DI()||sb()}}const Y8=G8;var FE="@firebase/auth",qE="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W8{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q8(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K8(e){Mr(new _r("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;ke(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jI(e)},h=new mz(i,o,l,p);return Ez(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Mr(new _r("auth-internal",t=>{const n=Rs(t.getProvider("auth").getImmediate());return(i=>new W8(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(FE,qE,Q8(e)),Zn(FE,qE,"esm2020")}/**
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
 */const X8=300,Z8=aR("authIdTokenMaxAge")||X8;let VE=null;const J8=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Z8)return;const o=n?.token;VE!==o&&(VE=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function eB(e=r_()){const t=Xa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=zI(e,{popupRedirectResolver:Y8,persistence:[i8,Gz,WI]}),i=aR("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=J8(l.toString());Hz(n,u,()=>u(n.currentUser)),Bz(n,f=>u(f))}}const o=sR("auth");return o&&Tz(n,`http://${o}`),n}function tB(){return document.getElementsByTagName("head")?.[0]??document}gz({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=o=>{const l=vr("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",tB().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K8("Browser");const nB=wI,ui=zh(()=>{if(!Ic)throw new Error("Firebase app not initialized");try{return eB(Ic)}catch{return zI(Ic,{errorMap:nB})}}),nD=E.createContext({isDark:!1,toggle:()=>{}}),rB=R.button`
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
`,iB=R.span`
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
`,rD=()=>{const{isDark:e,toggle:t}=E.useContext(nD);return y.jsxs(rB,{type:"button",role:"switch","aria-checked":e,onClick:t,children:["Dark mode",y.jsx(iB,{$on:e,"aria-hidden":"true"})]})},sB=R(Es)`
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
`,oB=R.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,aB=R.button`
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
`,lB=()=>{const e=et(el),{deleteToken:t}=E.useContext(vu),n=E.useCallback(async()=>{await t(),await ui?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?y.jsx(sB,{to:nt.SIGN_IN,children:"Sign in"}):y.jsxs(y.Fragment,{children:[y.jsx(oB,{children:e.data.displayName}),y.jsx(rD,{}),y.jsx(aB,{type:"button",onClick:n,children:"Sign out"})]})},cB="#181a2f",uB=280,dB=R.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,fB=R.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${uB}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,hB=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${cB};
  color: #fff;
  flex-shrink: 0;
`,pB=R(Es)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,mB=R.span`
  font-size: 15px;
  font-weight: 600;
`,gB=R.button`
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
`,yB=R.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,nf=R(zv)`
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
`,vB=R.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,_B=()=>y.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:y.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),bB=({open:e,onClose:t})=>{const n=et(eb);return y.jsxs(y.Fragment,{children:[y.jsx(dB,{$open:e,onClick:t}),y.jsxs(fB,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[y.jsxs(hB,{children:[y.jsxs(pB,{to:nt.CLASS_LIST,onClick:t,children:[y.jsx(bI,{size:20}),y.jsx(mB,{children:"Peloton Alerts"})]}),y.jsx(gB,{onClick:t,"aria-label":"Close menu",children:y.jsx(_B,{})})]}),y.jsxs(yB,{onClick:t,children:[y.jsx(nf,{to:nt.CLASS_LIST,end:!0,children:"Classes"}),y.jsx(nf,{to:nt.ALERTS,children:"Alerts"}),y.jsx(nf,{to:nt.ABOUT,end:!0,children:"FAQ"}),n&&y.jsx(nf,{to:nt.STATS,children:"Stats"})]}),y.jsx(vB,{children:y.jsx(lB,{})})]})]})},SB=R.div`
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
`,wB=({children:e,open:t,onClose:n})=>{const i=E.useRef(null),o=E.useCallback(l=>{l.key==="Escape"&&n()},[n]);return E.useEffect(()=>{if(t)return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,o]),E.useEffect(()=>{if(!t)return;const l=f=>{const p=f.target;if(!(p instanceof Node)){n();return}const h=i.current;h&&h.contains(p)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?y.jsx(SB,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},xB=R(Es)`
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
`,EB=R.button`
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
`,TB=R.div`
  position: relative;
`,CB=R.hr`
  margin: 4px 0;
  border: none;
  border-top: 1px solid ${e=>e.theme.borderColor};
`,RB=R.button`
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
`,AB=()=>{const e=et(el),[t,n]=E.useState(!1),{deleteToken:i}=E.useContext(vu),o=E.useCallback(async()=>{await i(),await ui?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return y.jsx(xB,{to:nt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return y.jsxs(TB,{children:[y.jsx(EB,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),y.jsxs(wB,{open:t,onClose:()=>n(!1),children:[y.jsx(rD,{}),y.jsx(CB,{}),y.jsx(RB,{type:"button",onClick:o,children:"Sign out"})]})]})},IB="#181a2f",op=680,DB=R.nav`
  height: inherit;
  background-color: ${IB};
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
`,OB=R(Es)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,kB=R.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,NB=R.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${op}px) {
    display: none;
  }
`,rf=R(zv)`
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
`,MB=R.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${op}px) {
    display: none;
  }
`,LB=R.button`
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
`,PB=()=>y.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:y.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),jB=()=>{const[e,t]=E.useState(!1),n=et(eb);return y.jsxs(y.Fragment,{children:[y.jsxs(DB,{children:[y.jsxs(OB,{to:nt.CLASS_LIST,children:[y.jsx(bI,{}),y.jsx(kB,{children:"Peloton Alerts"})]}),y.jsxs(NB,{children:[y.jsx(rf,{to:nt.CLASS_LIST,end:!0,children:"Classes"}),y.jsx(rf,{to:nt.ALERTS,children:"Alerts"}),y.jsx(rf,{to:nt.ABOUT,end:!0,children:"FAQ"}),n&&y.jsx(rf,{to:nt.STATS,children:"Stats"})]}),y.jsx(MB,{children:y.jsx(AB,{})}),y.jsx(LB,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:y.jsx(PB,{})})]}),y.jsx(bB,{open:e,onClose:()=>t(!1)})]})},UB=R.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,$B=R.div`
  position: sticky;
  height: calc(${J_}px + env(safe-area-inset-top));
  top: 0;
  z-index: 2;
`,zB=R.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,hs=({children:e})=>y.jsxs(UB,{children:[y.jsx($B,{children:y.jsx(jB,{})}),y.jsx(zB,{children:e})]}),Te=(...e)=>nn`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${nn(...e)}
  }
`,iD=(...e)=>nn`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${nn(...e)}
  }
`,BB=R.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Te`
    padding: 16px 12px;
  `}
`,HB=R.div`
  margin-bottom: 20px;
`,FB=R.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,fc=R.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,hc=R.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,pc=R.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,mc=R.div`
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
`,qB=()=>y.jsx(hs,{children:y.jsxs(BB,{children:[y.jsx(HB,{children:y.jsx(FB,{children:"FAQ"})}),y.jsxs(fc,{children:[y.jsx(hc,{children:y.jsx(pc,{children:"What is this?"})}),y.jsx(mc,{children:y.jsxs("p",{children:["A quicker, smarter way to browse"," ",y.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),y.jsxs(fc,{children:[y.jsx(hc,{children:y.jsx(pc,{children:"How do I view classes?"})}),y.jsx(mc,{children:y.jsxs("p",{children:["Open the ",y.jsx(Es,{to:nt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),y.jsxs(fc,{children:[y.jsx(hc,{children:y.jsx(pc,{children:"Is the class data live?"})}),y.jsx(mc,{children:y.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),y.jsxs(fc,{children:[y.jsx(hc,{children:y.jsx(pc,{children:"When do new classes become available?"})}),y.jsx(mc,{children:y.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),y.jsxs(fc,{children:[y.jsx(hc,{children:y.jsx(pc,{children:"Can I request a feature or report a bug?"})}),y.jsx(mc,{children:y.jsxs("p",{children:["Yes — this project is open source and lives on"," ",y.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),Ti=nn`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,db=nn`
  &:hover {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`;nn`
  &:focus {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`;const fb=E.createContext({state:"idle"}),VB=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.snapshotAt=="number"&&typeof t.starts_at=="string"&&Array.isArray(t.instructors)&&typeof t.disciplineId=="string"&&typeof t.occupancy=="number"&&typeof t.maxOccupancy=="number"&&typeof t.waitingCount=="number"&&typeof t.status=="string"},GB=e=>{const[t,n]=E.useState({state:"loading"});return E.useEffect(()=>{if(!e){n({state:"fulfilled",data:[]});return}n({state:"loading"});const i=wn;if(!i){n({state:"failed",error:new Error("No database connection")});return}const o=ir(i,De.PATHS.classHistory(e)),l=np(o,u=>{const f=u.val();if(!f){n({state:"fulfilled",data:[]});return}const p=[];for(const[h,g]of Object.entries(f))if(!(!g||typeof g!="object"))for(const v of Object.values(g))VB(v)&&p.push({...v,classId:h});p.sort((h,g)=>g.snapshotAt-h.snapshotAt),n({state:"fulfilled",data:p})},u=>{n({state:"failed",error:u})});return()=>l()},[e]),t},Va=(e,t,n)=>{const i=new Date(e),o=new Intl.DateTimeFormat(void 0,{month:n?"long":"short",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return n?`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${o} ${l}`:`${o} ${l}`},YB=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],WB=(e,t)=>{const n=new Map;for(const i of e){const o=new Date(i.snapshotAt),l=Va(o.toISOString(),t,!0);if(!n.has(l)){const u=new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:t}).format(o);n.set(l,{dayIndex:YB.indexOf(u),snapshots:[]})}n.get(l).snapshots.push(i)}return Array.from(n.entries()).map(([i,{dayIndex:o,snapshots:l}])=>({label:i,dayIndex:o,snapshots:l}))},To=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),QB=R.div`
  border: 1px solid ${e=>e.theme.colors.status.free.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.free.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.free.bg};
  padding: 12px 14px;
`,KB=R.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.free.text};
  margin-bottom: 6px;
`,XB=R.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  font-weight: 500;
`,ZB=R.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
`,JB=R.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,eH=({snapshot:e,timezone:t})=>{const n=Va(e.starts_at,t,!1),i=To(e.starts_at,t),o=To(new Date(e.snapshotAt).toISOString(),t),l=e.instructors[0]?.name??"Unknown instructor",u=e.maxOccupancy-e.occupancy;return y.jsxs(QB,{children:[y.jsx(KB,{children:"● Would have triggered"}),y.jsxs(XB,{children:[n," ",i,e.name?` · ${e.name}`:""," · ",l]}),y.jsx(ZB,{children:e.status==="free"?`Free · ${u} spot${u===1?"":"s"} available`:e.status==="waitlist"?`Waitlist · ${e.waitingCount} waiting`:"Full"}),y.jsxs(JB,{children:["detected at ",o]})]})},tH=R.div`
  border: 1px solid ${e=>e.theme.colors.status.waitlist.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.waitlist.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.waitlist.bg};
  padding: 12px 14px;
`,nH=R.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.waitlist.text};
  margin-bottom: 6px;
`,rH=R.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,iH=R.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,sH={instructor:"wrong instructor",time:"outside your time range",discipline:"wrong discipline",status:"class not bookable"},oH=({snapshot:e,reason:t,timezone:n})=>{const i=Va(e.starts_at,n,!1),o=To(e.starts_at,n),l=To(new Date(e.snapshotAt).toISOString(),n),u=e.instructors[0]?.name??"Unknown instructor";return y.jsxs(tH,{children:[y.jsxs(nH,{children:["◌ Near miss — ",sH[t]]}),y.jsxs(rH,{children:[i," ",o,e.name?` · ${e.name}`:""," · ",u]}),y.jsxs(iH,{children:["detected at ",l]})]})},aH=R.button`
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
`,lH=R.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,cH=R.li`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,uH=R.span`
  font-size: 11px;
  opacity: 0.6;
`,dH=({snapshots:e,timezone:t})=>{const[n,i]=E.useState(!1),o=e.length;return y.jsxs("div",{children:[y.jsxs(aH,{type:"button",onClick:()=>i(l=>!l),children:[y.jsx("span",{children:n?"▾":"▸"}),o," class",o===1?"":"es"," skipped"]}),n&&y.jsx(lH,{children:e.map((l,u)=>{const f=Va(l.starts_at,t,!1),p=To(l.starts_at,t),h=To(new Date(l.snapshotAt).toISOString(),t);return y.jsxs(cH,{children:[y.jsxs("span",{children:[f," ",p,l.name?` · ${l.name}`:"",l.instructors[0]?` · ${l.instructors[0].name}`:""]}),y.jsxs(uH,{children:["detected at ",h]})]},u)})})]})},fH=R.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,hH=R.h3`
  position: sticky;
  top: calc(${J_}px + env(safe-area-inset-top, 0px));
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
`,pH=R.span`
  font-size: 11px;
  font-weight: 400;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
`,mH=({label:e,dayIndex:t,snapshots:n,alert:i,timezone:o})=>{const l=!!i.timeRanges[t],u=[],f=[],p=[];for(const h of n){const g=De.classifySnapshotMatch(h,i);g.type==="match"?u.push(h):g.type==="near-miss"?f.push({snapshot:h,reason:g.reason}):p.push(h)}return y.jsxs(fH,{children:[y.jsxs(hH,{children:[e,!l&&y.jsx(pH,{children:"not monitored"})]}),u.map((h,g)=>y.jsx(eH,{snapshot:h,timezone:o},g)),f.map(({snapshot:h,reason:g},v)=>y.jsx(oH,{snapshot:h,reason:g,timezone:o},v)),p.length>0&&y.jsx(dH,{snapshots:p,timezone:o})]})},gH=R.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  flex-wrap: wrap;
`,GE=R.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,YE=R.strong`
  color: ${e=>e.$color??e.theme.colors.main};
`,yH=({matchCount:e,nearMissCount:t})=>{const n=Gv();return y.jsxs(gH,{children:[y.jsxs(GE,{children:[y.jsx(YE,{$color:n.colors.status.free.text,children:e})," ",e===1?"class":"classes"," would have triggered"]}),y.jsxs(GE,{children:[y.jsx(YE,{$color:n.colors.status.waitlist.text,children:t})," ","near ",t===1?"miss":"misses"]})]})},vH=R.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${Ti}
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.mainSurface};
`,_H=R.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  ${Te`
    padding: 16px;
  `}
`,bH=R.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,SH=R.button`
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
`,wH=R.button`
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
`,xH=R.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,EH=R.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,TH=R.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,sf=R.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`,CH=()=>{const{alertId:e}=kM(),t=xs(),n=E.useContext(fb),[i,o]=E.useState("idle"),l=E.useMemo(()=>n.state!=="fulfilled"?null:n.data.find(T=>T.id===e)??null,[n,e]),u=GB(l?.studioId??null),f=l?De.STUDIOS[l.studioId]?.timezone??"UTC":"UTC",p=E.useMemo(()=>!l||u.state!=="fulfilled"?[]:WB(u.data,f),[l,u,f]),{matchCount:h,nearMissCount:g}=E.useMemo(()=>{if(!l||u.state!=="fulfilled")return{matchCount:0,nearMissCount:0};let T=0,O=0;for(const M of u.data){const C=De.classifySnapshotMatch(M,l);C.type==="match"?T++:C.type==="near-miss"&&O++}return{matchCount:T,nearMissCount:O}},[l,u]),v=n.state==="loading"||n.state==="idle"||u.state==="loading",_="Notification"in window&&"serviceWorker"in navigator,b=E.useCallback(async()=>{if(_){o("sending");try{if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){o("idle");return}const T=await navigator.serviceWorker.ready,O=l?De.STUDIOS[l.studioId]:null,M="Spot opened up!",C=`${l?.name??"Test alert"} — ${O?.location??"Studio"} · test notification`;await T.showNotification(M,{body:C,icon:"/icons/icon-192x192.png",badge:"/icons/icon-96x96.png",data:{classUrl:"/p/7248695-peloton-studios-new-york/e/99586855-30-min-intervals-ride/"}}),o("sent"),setTimeout(()=>o("idle"),3e3)}catch{o("error"),setTimeout(()=>o("idle"),3e3)}}},[l,_]),w=l?.name??"Alert",I=i==="sending"?"Sending…":i==="sent"?"Sent!":i==="error"?"Error":"Send test notification";return y.jsxs(vH,{children:[y.jsxs(_H,{children:[y.jsx(wH,{type:"button",onClick:()=>t(-1),children:"← Alerts"}),y.jsxs(bH,{children:[y.jsx("div",{children:y.jsxs(xH,{children:[w," — Past 7 Days"]})}),_&&y.jsx(SH,{type:"button",$sent:i==="sent",disabled:i==="sending",onClick:b,title:"Fire a test push notification to verify delivery and the notification URL",children:I})]}),y.jsx(EH,{children:l?`${De.STUDIOS[l.studioId]?.location??l.studioId}`:""})]}),y.jsxs(TH,{children:[v&&y.jsx(sf,{children:"Loading…"}),!v&&!l&&y.jsx(sf,{children:"Alert not found."}),!v&&l&&u.state==="fulfilled"&&y.jsxs(y.Fragment,{children:[y.jsx(yH,{matchCount:h,nearMissCount:g}),p.length===0&&y.jsx(sf,{children:"No class history yet. History builds up as the backend detects class changes."}),p.map(({label:T,dayIndex:O,snapshots:M})=>y.jsx(mH,{label:T,dayIndex:O,snapshots:M,alert:l,timezone:f},T))]}),!v&&u.state==="failed"&&y.jsx(sf,{children:"Failed to load class history."})]})]})},RH=e=>{try{return window.localStorage.getItem(e)}catch(t){return Nr(t),null}},AH="STUDIO_ID",sD=e=>{const t=RH(AH);return t===null?e:Object.keys(De.STUDIOS).includes(t)?t:e},IH={studioId:sD(De.DEFAULT_STUDIO_ID)},bv=Kn({name:"studioSelector",initialState:IH,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:ph}=bv.actions,DH=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=(await b$(ir(n,De.PATHS.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},OH=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await yI(ir(n,De.PATHS.alert(e,t.id)),t)},kH=R.div`
  display: flex;
  flex-direction: column;
`,NH=R.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,MH=R.input`
  ${Ti}
  padding: 12px 8px;
  font-family: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  color: ${e=>e.theme.colors.main};
`,LH=R.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,PH=({label:e,hint:t,placeholder:n,value:i,onChange:o})=>{const l=E.useId();return y.jsxs(kH,{children:[y.jsx(NH,{htmlFor:l,children:e}),y.jsx(MH,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>o(u.value)}),t&&y.jsx(LH,{id:`${l}-hint`,children:t})]})},jH=R.label`
  ${Ti}
  ${db}
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
`,UH=R.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,$H=R.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,zH=R.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,BH=R.input`
  accent-color: ${e=>e.theme.colors.accent};
`,WE=({name:e,value:t,checked:n,onChange:i,label:o,hint:l,icon:u})=>{const f=E.useId();return y.jsxs(jH,{htmlFor:f,children:[y.jsx(BH,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,y.jsxs(UH,{children:[y.jsx($H,{children:o}),l&&y.jsx(zH,{children:l})]})]})},uy=R.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,dy=R.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,fy=R.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,QE=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,hy=R.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,HH=R.label`
  ${Ti}
  ${db}
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
`,FH=R.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,qH=R.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,VH=R.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,GH=R.input`
  accent-color: ${e=>e.theme.colors.accent};
  flex-shrink: 0;
`,YH=Object.entries(De.STUDIOS).map(([e,t])=>({id:e,label:t.location})),WH=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],QH=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:o,onStatusChange:l,waitlistAlerts:u,onWaitlistAlertsChange:f})=>{const p=E.useId();return y.jsxs("div",{children:[y.jsx(PH,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),y.jsx(hy,{}),y.jsxs(uy,{children:[y.jsx(dy,{children:"Which studio?"}),y.jsx(fy,{children:"Pick the Peloton studio you want to monitor."}),y.jsx(QE,{children:YH.map(h=>y.jsx(WE,{name:"studio",value:h.id,checked:n===h.id,onChange:()=>i(h.id),label:h.label},h.id))})]}),y.jsx(hy,{}),y.jsxs(uy,{children:[y.jsx(dy,{children:"When should we alert you?"}),y.jsx(fy,{children:"Choose whether to include waitlisted classes."}),y.jsx(QE,{children:WH.map(h=>y.jsx(WE,{name:"status",value:h.status,checked:o===h.status,onChange:()=>l(h.status),label:h.label,hint:h.hint},h.status))})]}),y.jsx(hy,{}),y.jsxs(uy,{children:[y.jsx(dy,{children:"Waitlist position alerts"}),y.jsx(fy,{children:"Get a notification whenever the waitlist count changes — useful for monitoring if it's your turn to accept a spot."}),y.jsxs(HH,{htmlFor:p,children:[y.jsx(GH,{type:"checkbox",id:p,checked:u,onChange:h=>f(h.target.checked)}),y.jsxs(FH,{children:[y.jsx(qH,{children:"Notify me when the waitlist count changes"}),y.jsx(VH,{children:"Opens a prompt to check your email when the count shifts"})]})]})]})]})},KE={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},oD=.2,mh=e=>Math.round(e*(1-oD*2)),KH=e=>Math.round(e*oD),XH=R.div`
  width: ${e=>mh(e.size)}px;
  height: ${e=>mh(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>KH(e.size)}px;
  flex-shrink: 0;
`,ZH=R.img`
  width: ${e=>mh(e.size)}px;
  height: ${e=>mh(e.size)}px;
  display: block;
`,gh=({discipline:e,size:t=32})=>{const n=Gv(),i=E.useMemo(()=>{const o=Object.keys(KE),l=e.name.toLowerCase(),u=o.find(f=>f.toLowerCase()===l)??o.find(f=>{const p=f.toLowerCase();return p.includes(l)||l.includes(p)});if(u)return KE[u];{const f=`Received unsupported discipline ${e.name}`;return console.log(f),Xv(f),n.colors.secondarySurface}},[e.name,n.colors.secondarySurface]);return y.jsx(XH,{color:i,size:t,children:y.jsx(ZH,{alt:e.name,src:e.iconUrl,size:t,color:i})})},JH=R.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 50%;
  color: ${e=>e.theme.colors.secondary};
`,hb=({instructor:e,size:t=32})=>y.jsx(JH,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var e9=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},aD=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(aD||{});function XE(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var ZE=vs;function pb(e,t){if(e===t||!(ZE(e)&&ZE(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let o=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=pb(e[u],t[u]),o&&(o=e[u]===l[u]);return o?e:l}function py(e){let t=0;for(const n in e)t++;return t}var JE=e=>[].concat(...e);function t9(e){return new RegExp("(^|:)//").test(e)}function n9(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function yh(e){return e!=null}function r9(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var i9=e=>e.replace(/\/$/,""),s9=e=>e.replace(/^\//,"");function o9(e,t){if(!e)return t;if(!t)return e;if(t9(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=i9(e),t=s9(t),`${e}${n}${t}`}function a9(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function Sv(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var wv=()=>new Map,eT=(...e)=>fetch(...e),l9=e=>e.status>=200&&e.status<=299,c9=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function tT(e){if(!vs(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function u9({baseUrl:e,prepareHeaders:t=v=>v,fetchFn:n=eT,paramsSerializer:i,isJsonContentType:o=c9,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:p,validateStatus:h,...g}={}){return typeof fetch>"u"&&n===eT&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(_,b,w)=>{const{getState:I,extra:T,endpoint:O,forced:M,type:C}=b;let D,{url:N,headers:A=new Headers(g.headers),params:P=void 0,responseHandler:V=p??"json",validateStatus:H=h??l9,timeout:B=f,...z}=typeof _=="string"?{url:_}:_,G,q=b.signal;B&&(G=new AbortController,b.signal.addEventListener("abort",G.abort),q=G.signal);let te={...g,signal:q,...z};A=new Headers(tT(A)),te.headers=await t(A,{getState:I,arg:_,extra:T,endpoint:O,forced:M,type:C,extraOptions:w})||A;const oe=de=>typeof de=="object"&&(vs(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!te.headers.has("content-type")&&oe(te.body)&&te.headers.set("content-type",l),oe(te.body)&&o(te.headers)&&(te.body=JSON.stringify(te.body,u)),P){const de=~N.indexOf("?")?"&":"?",me=i?i(P):new URLSearchParams(tT(P));N+=de+me}N=o9(e,N);const j=new Request(N,te);D={request:new Request(N,te)};let ne,le=!1,k=G&&setTimeout(()=>{le=!0,G.abort()},B);try{ne=await n(j)}catch(de){return{error:{status:le?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:D}}finally{k&&clearTimeout(k),G?.signal.removeEventListener("abort",G.abort)}const K=ne.clone();D.response=K;let ce,ie="";try{let de;if(await Promise.all([v(ne,V).then(me=>ce=me,me=>de=me),K.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:D}}return H(ne,ce)?{data:ce,meta:D}:{error:{status:ne.status,data:ce},meta:D}};async function v(_,b){if(typeof b=="function")return b(_);if(b==="content-type"&&(b=o(_.headers)?"json":"text"),b==="json"){const w=await _.text();return w.length?JSON.parse(w):null}return _.text()}}var nT=class{constructor(e,t=void 0){this.value=e,this.meta=t}},mb=mr("__rtkq/focused"),lD=mr("__rtkq/unfocused"),gb=mr("__rtkq/online"),cD=mr("__rtkq/offline");function ap(e){return e.type==="query"}function d9(e){return e.type==="mutation"}function lp(e){return e.type==="infinitequery"}function vh(e){return ap(e)||lp(e)}function yb(e,t,n,i,o,l){return f9(e)?e(t,n,i,o).filter(yh).map(xv).map(l):Array.isArray(e)?e.map(xv).map(l):[]}function f9(e){return typeof e=="function"}function xv(e){return typeof e=="string"?{type:e}:e}function h9(e,t){return e.catch(t)}var cu=Symbol("forceQueryFn"),Ev=e=>typeof e[cu]=="function";function p9({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:o,context:l,internalState:u}){const{runningQueries:f,runningMutations:p}=u,{unsubscribeQueryResult:h,removeMutationResult:g,updateSubscriptionOptions:v}=o.internalActions;return{buildInitiateQuery:O,buildInitiateInfiniteQuery:M,buildInitiateMutation:C,getRunningQueryThunk:_,getRunningMutationThunk:b,getRunningQueriesThunk:w,getRunningMutationsThunk:I};function _(D,N){return A=>{const P=l.endpointDefinitions[D],V=e({queryArgs:N,endpointDefinition:P,endpointName:D});return f.get(A)?.[V]}}function b(D,N){return A=>p.get(A)?.[N]}function w(){return D=>Object.values(f.get(D)||{}).filter(yh)}function I(){return D=>Object.values(p.get(D)||{}).filter(yh)}function T(D,N){const A=(P,{subscribe:V=!0,forceRefetch:H,subscriptionOptions:B,[cu]:z,...G}={})=>(q,te)=>{const oe=e({queryArgs:P,endpointDefinition:N,endpointName:D});let j;const J={...G,type:"query",subscribe:V,forceRefetch:H,subscriptionOptions:B,endpointName:D,originalArgs:P,queryCacheKey:oe,[cu]:z};if(ap(N))j=t(J);else{const{direction:Ae,initialPageParam:be}=G;j=n({...J,direction:Ae,initialPageParam:be})}const ne=o.endpoints[D].select(P),le=q(j),k=ne(te()),{requestId:K,abort:ce}=le,ie=k.requestId!==K,de=f.get(q)?.[oe],me=()=>ne(te()),pe=Object.assign(z?le.then(me):ie&&!de?Promise.resolve(k):Promise.all([de,le]).then(me),{arg:P,requestId:K,subscriptionOptions:B,queryCacheKey:oe,abort:ce,async unwrap(){const Ae=await pe;if(Ae.isError)throw Ae.error;return Ae.data},refetch:()=>q(A(P,{subscribe:!1,forceRefetch:!0})),unsubscribe(){V&&q(h({queryCacheKey:oe,requestId:K}))},updateSubscriptionOptions(Ae){pe.subscriptionOptions=Ae,q(v({endpointName:D,requestId:K,queryCacheKey:oe,options:Ae}))}});if(!de&&!ie&&!z){const Ae=a9(f,q,{});Ae[oe]=pe,pe.then(()=>{delete Ae[oe],py(Ae)||f.delete(q)})}return pe};return A}function O(D,N){return T(D,N)}function M(D,N){return T(D,N)}function C(D){return(N,{track:A=!0,fixedCacheKey:P}={})=>(V,H)=>{const B=i({type:"mutation",endpointName:D,originalArgs:N,track:A,fixedCacheKey:P}),z=V(B),{requestId:G,abort:q,unwrap:te}=z,oe=h9(z.unwrap().then(le=>({data:le})),le=>({error:le})),j=()=>{V(g({requestId:G,fixedCacheKey:P}))},J=Object.assign(oe,{arg:z.arg,requestId:G,abort:q,unwrap:te,reset:j}),ne=p.get(V)||{};return p.set(V,ne),ne[G]=J,J.then(()=>{delete ne[G],py(ne)||p.delete(V)}),P&&(ne[P]=J,J.then(()=>{ne[P]===J&&(delete ne[P],py(ne)||p.delete(V))})),J}}}var uD=class extends e9{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},to=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function no(e,t,n,i){const o=await e["~standard"].validate(t);if(o.issues)throw new uD(o.issues,t,n,i);return o.value}function rT(e){return e}var gc=(e={})=>({...e,[Hh]:!0});function m9({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:o,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:p,skipSchemaValidation:h}){const g=(z,G,q,te)=>(oe,j)=>{const J=n[z],ne=i({queryArgs:G,endpointDefinition:J,endpointName:z});if(oe(o.internalActions.queryResultPatched({queryCacheKey:ne,patches:q})),!te)return;const le=o.endpoints[z].select(G)(j()),k=yb(J.providesTags,le.data,void 0,G,{},l);oe(o.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:k}]))};function v(z,G,q=0){const te=[G,...z];return q&&te.length>q?te.slice(0,-1):te}function _(z,G,q=0){const te=[...z,G];return q&&te.length>q?te.slice(1):te}const b=(z,G,q,te=!0)=>(oe,j)=>{const ne=o.endpoints[z].select(G)(j()),le={patches:[],inversePatches:[],undo:()=>oe(o.util.patchQueryData(z,G,le.inversePatches,te))};if(ne.status==="uninitialized")return le;let k;if("data"in ne)if(br(ne.data)){const[K,ce,ie]=ZR(ne.data,q);le.patches.push(...ce),le.inversePatches.push(...ie),k=K}else k=q(ne.data),le.patches.push({op:"replace",path:[],value:k}),le.inversePatches.push({op:"replace",path:[],value:ne.data});return le.patches.length===0||oe(o.util.patchQueryData(z,G,le.patches,te)),le},w=(z,G,q)=>te=>te(o.endpoints[z].initiate(G,{subscribe:!1,forceRefetch:!0,[cu]:()=>({data:q})})),I=(z,G)=>z.query&&z[G]?z[G]:rT,T=async(z,{signal:G,abort:q,rejectWithValue:te,fulfillWithValue:oe,dispatch:j,getState:J,extra:ne})=>{const le=n[z.endpointName],{metaSchema:k,skipSchemaValidation:K=h}=le;try{let ce=rT;const ie={signal:G,abort:q,dispatch:j,getState:J,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?O(z,J()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[cu]:void 0;let me;const pe=async(be,Oe,$e,_t)=>{if(Oe==null&&be.pages.length)return Promise.resolve({data:be});const gt={queryArg:z.originalArgs,pageParam:Oe},Ln=await Ae(gt),Et=_t?v:_;return{data:{pages:Et(be.pages,Ln.data,$e),pageParams:Et(be.pageParams,Oe,$e)},meta:Ln.meta}};async function Ae(be){let Oe;const{extraOptions:$e,argSchema:_t,rawResponseSchema:gt,responseSchema:Ln}=le;if(_t&&!to(K,"arg")&&(be=await no(_t,be,"argSchema",{})),de?Oe=de():le.query?(ce=I(le,"transformResponse"),Oe=await t(le.query(be),ie,$e)):Oe=await le.queryFn(be,ie,$e,Ur=>t(Ur,ie,$e)),typeof process<"u",Oe.error)throw new nT(Oe.error,Oe.meta);let{data:Et}=Oe;gt&&!to(K,"rawResponse")&&(Et=await no(gt,Oe.data,"rawResponseSchema",Oe.meta));let Pn=await ce(Et,Oe.meta,be);return Ln&&!to(K,"response")&&(Pn=await no(Ln,Pn,"responseSchema",Oe.meta)),{...Oe,data:Pn}}if(z.type==="query"&&"infiniteQueryOptions"in le){const{infiniteQueryOptions:be}=le,{maxPages:Oe=1/0}=be;let $e;const _t={pages:[],pageParams:[]},gt=u.selectQueryEntry(J(),z.queryCacheKey)?.data,Et=O(z,J())&&!z.direction||!gt?_t:gt;if("direction"in z&&z.direction&&Et.pages.length){const Pn=z.direction==="backward",Wt=(Pn?dD:Tv)(be,Et,z.originalArgs);$e=await pe(Et,Wt,Oe,Pn)}else{const{initialPageParam:Pn=be.initialPageParam}=z,Ur=gt?.pageParams??[],Wt=Ur[0]??Pn,sl=Ur.length;$e=await pe(Et,Wt,Oe),de&&($e={data:$e.data.pages[0]});for(let As=1;As<sl;As++){const Oo=Tv(be,$e.data,z.originalArgs);$e=await pe($e.data,Oo,Oe)}}me=$e}else me=await Ae(z.originalArgs);return k&&!to(K,"meta")&&me.meta&&(me.meta=await no(k,me.meta,"metaSchema",me.meta)),oe(me.data,gc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(ce){let ie=ce;if(ie instanceof nT){let de=I(le,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=le;let{value:Ae,meta:be}=ie;try{me&&!to(K,"rawErrorResponse")&&(Ae=await no(me,Ae,"rawErrorResponseSchema",be)),k&&!to(K,"meta")&&(be=await no(k,be,"metaSchema",be));let Oe=await de(Ae,be,z.originalArgs);return pe&&!to(K,"errorResponse")&&(Oe=await no(pe,Oe,"errorResponseSchema",be)),te(Oe,gc({baseQueryMeta:be}))}catch(Oe){ie=Oe}}try{if(ie instanceof uD){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};le.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=p}=le;if(me)return te(me(ie,de),gc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function O(z,G){const q=u.selectQueryEntry(G,z.queryCacheKey),te=u.selectConfig(G).refetchOnMountOrArgChange,oe=q?.fulfilledTimeStamp,j=z.forceRefetch??(z.subscribe&&te);return j?j===!0||(Number(new Date)-Number(oe))/1e3>=j:!1}const M=()=>Nx(`${e}/executeQuery`,T,{getPendingMeta({arg:G}){const q=n[G.endpointName];return gc({startedTimeStamp:Date.now(),...lp(q)?{direction:G.direction}:{}})},condition(G,{getState:q}){const te=q(),oe=u.selectQueryEntry(te,G.queryCacheKey),j=oe?.fulfilledTimeStamp,J=G.originalArgs,ne=oe?.originalArgs,le=n[G.endpointName],k=G.direction;return Ev(G)?!0:oe?.status==="pending"?!1:O(G,te)||ap(le)&&le?.forceRefetch?.({currentArg:J,previousArg:ne,endpointState:oe,state:te})?!0:!(j&&!k)},dispatchConditionRejection:!0}),C=M(),D=M(),N=Nx(`${e}/executeMutation`,T,{getPendingMeta(){return gc({startedTimeStamp:Date.now()})}}),A=z=>"force"in z,P=z=>"ifOlderThan"in z,V=(z,G,q)=>(te,oe)=>{const j=A(q)&&q.force,J=P(q)&&q.ifOlderThan,ne=(k=!0)=>{const K={forceRefetch:k,isPrefetch:!0};return o.endpoints[z].initiate(G,K)},le=o.endpoints[z].select(G)(oe());if(j)te(ne());else if(J){const k=le?.fulfilledTimeStamp;if(!k){te(ne());return}(Number(new Date)-Number(new Date(k)))/1e3>=J&&te(ne())}else te(ne(!1))};function H(z){return G=>G?.meta?.arg?.endpointName===z}function B(z,G){return{matchPending:Oc(p_(z),H(G)),matchFulfilled:Oc(_s(z),H(G)),matchRejected:Oc($a(z),H(G))}}return{queryThunk:C,mutationThunk:N,infiniteQueryThunk:D,prefetch:V,updateQueryData:b,upsertQueryData:w,patchQueryData:g,buildMatchThunkActions:B}}function Tv(e,{pages:t,pageParams:n},i){const o=t.length-1;return e.getNextPageParam(t[o],t,n[o],n,i)}function dD(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function fD(e,t,n,i){return yb(n[e.meta.arg.endpointName][t],_s(e)?e.payload:void 0,qh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function of(e,t,n){const i=e[t];i&&n(i)}function uu(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function iT(e,t,n){const i=e[uu(t)];i&&n(i)}var af={};function g9({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:o,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:p,config:h}){const g=mr(`${e}/resetApiState`);function v(H,B,z,G){H[B.queryCacheKey]??={status:"uninitialized",endpointName:B.endpointName},of(H,B.queryCacheKey,q=>{q.status="pending",q.requestId=z&&q.requestId?q.requestId:G.requestId,B.originalArgs!==void 0&&(q.originalArgs=B.originalArgs),q.startedTimeStamp=G.startedTimeStamp;const te=o[G.arg.endpointName];lp(te)&&"direction"in B&&(q.direction=B.direction)})}function _(H,B,z,G){of(H,B.arg.queryCacheKey,q=>{if(q.requestId!==B.requestId&&!G)return;const{merge:te}=o[B.arg.endpointName];if(q.status="fulfilled",te)if(q.data!==void 0){const{fulfilledTimeStamp:oe,arg:j,baseQueryMeta:J,requestId:ne}=B;let le=mu(q.data,k=>te(k,z,{arg:j.originalArgs,baseQueryMeta:J,fulfilledTimeStamp:oe,requestId:ne}));q.data=le}else q.data=z;else q.data=o[B.arg.endpointName].structuralSharing??!0?pb(Lr(q.data)?A6(q.data):q.data,z):z;delete q.error,q.fulfilledTimeStamp=B.fulfilledTimeStamp})}const b=Kn({name:`${e}/queries`,initialState:af,reducers:{removeQueryResult:{reducer(H,{payload:{queryCacheKey:B}}){delete H[B]},prepare:oc()},cacheEntriesUpserted:{reducer(H,B){for(const z of B.payload){const{queryDescription:G,value:q}=z;v(H,G,!0,{arg:G,requestId:B.meta.requestId,startedTimeStamp:B.meta.timestamp}),_(H,{arg:G,requestId:B.meta.requestId,fulfilledTimeStamp:B.meta.timestamp,baseQueryMeta:{}},q,!0)}},prepare:H=>({payload:H.map(G=>{const{endpointName:q,arg:te,value:oe}=G,j=o[q];return{queryDescription:{type:"query",endpointName:q,originalArgs:G.arg,queryCacheKey:i({queryArgs:te,endpointDefinition:j,endpointName:q})},value:oe}}),meta:{[Hh]:!0,requestId:m_(),timestamp:Date.now()}})},queryResultPatched:{reducer(H,{payload:{queryCacheKey:B,patches:z}}){of(H,B,G=>{G.data=Cx(G.data,z.concat())})},prepare:oc()}},extraReducers(H){H.addCase(t.pending,(B,{meta:z,meta:{arg:G}})=>{const q=Ev(G);v(B,G,q,z)}).addCase(t.fulfilled,(B,{meta:z,payload:G})=>{const q=Ev(z.arg);_(B,z,G,q)}).addCase(t.rejected,(B,{meta:{condition:z,arg:G,requestId:q},error:te,payload:oe})=>{of(B,G.queryCacheKey,j=>{if(!z){if(j.requestId!==q)return;j.status="rejected",j.error=oe??te}})}).addMatcher(f,(B,z)=>{const{queries:G}=u(z);for(const[q,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&(B[q]=te)})}}),w=Kn({name:`${e}/mutations`,initialState:af,reducers:{removeMutationResult:{reducer(H,{payload:B}){const z=uu(B);z in H&&delete H[z]},prepare:oc()}},extraReducers(H){H.addCase(n.pending,(B,{meta:z,meta:{requestId:G,arg:q,startedTimeStamp:te}})=>{q.track&&(B[uu(z)]={requestId:G,status:"pending",endpointName:q.endpointName,startedTimeStamp:te})}).addCase(n.fulfilled,(B,{payload:z,meta:G})=>{G.arg.track&&iT(B,G,q=>{q.requestId===G.requestId&&(q.status="fulfilled",q.data=z,q.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(B,{payload:z,error:G,meta:q})=>{q.arg.track&&iT(B,q,te=>{te.requestId===q.requestId&&(te.status="rejected",te.error=z??G)})}).addMatcher(f,(B,z)=>{const{mutations:G}=u(z);for(const[q,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&q!==te?.requestId&&(B[q]=te)})}}),I={tags:{},keys:{}},T=Kn({name:`${e}/invalidation`,initialState:I,reducers:{updateProvidedBy:{reducer(H,B){for(const{queryCacheKey:z,providedTags:G}of B.payload){O(H,z);for(const{type:q,id:te}of G){const oe=(H.tags[q]??={})[te||"__internal_without_id"]??=[];oe.includes(z)||oe.push(z)}H.keys[z]=G}},prepare:oc()}},extraReducers(H){H.addCase(b.actions.removeQueryResult,(B,{payload:{queryCacheKey:z}})=>{O(B,z)}).addMatcher(f,(B,z)=>{const{provided:G}=u(z);for(const[q,te]of Object.entries(G.tags??{}))for(const[oe,j]of Object.entries(te)){const J=(B.tags[q]??={})[oe||"__internal_without_id"]??=[];for(const ne of j)J.includes(ne)||J.push(ne),B.keys[ne]=G.keys[ne]}}).addMatcher(vi(_s(t),qh(t)),(B,z)=>{M(B,[z])}).addMatcher(b.actions.cacheEntriesUpserted.match,(B,z)=>{const G=z.payload.map(({queryDescription:q,value:te})=>({type:"UNKNOWN",payload:te,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:q}}));M(B,G)})}});function O(H,B){const z=H.keys[B]??[];for(const G of z){const q=G.type,te=G.id??"__internal_without_id",oe=H.tags[q]?.[te];oe&&(H.tags[q][te]=oe.filter(j=>j!==B))}delete H.keys[B]}function M(H,B){const z=B.map(G=>{const q=fD(G,"providesTags",o,p),{queryCacheKey:te}=G.meta.arg;return{queryCacheKey:te,providedTags:q}});T.caseReducers.updateProvidedBy(H,T.actions.updateProvidedBy(z))}const C=Kn({name:`${e}/subscriptions`,initialState:af,reducers:{updateSubscriptionOptions(H,B){},unsubscribeQueryResult(H,B){},internal_getRTKQSubscriptions(){}}}),D=Kn({name:`${e}/internalSubscriptions`,initialState:af,reducers:{subscriptionsUpdated:{reducer(H,B){return Cx(H,B.payload)},prepare:oc()}}}),N=Kn({name:`${e}/config`,initialState:{online:r9(),focused:n9(),middlewareRegistered:!1,...h},reducers:{middlewareRegistered(H,{payload:B}){H.middlewareRegistered=H.middlewareRegistered==="conflict"||l!==B?"conflict":!0}},extraReducers:H=>{H.addCase(gb,B=>{B.online=!0}).addCase(cD,B=>{B.online=!1}).addCase(mb,B=>{B.focused=!0}).addCase(lD,B=>{B.focused=!1}).addMatcher(f,B=>({...B}))}}),A=VR({queries:b.reducer,mutations:w.reducer,provided:T.reducer,subscriptions:D.reducer,config:N.reducer}),P=(H,B)=>A(g.match(B)?void 0:H,B),V={...N.actions,...b.actions,...C.actions,...D.actions,...w.actions,...T.actions,resetApiState:g};return{reducer:P,actions:V}}var cr=Symbol.for("RTKQ/skipToken"),hD={status:"uninitialized"},sT=mu(hD,()=>{}),oT=mu(hD,()=>{});function y9({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=C=>sT,o=C=>oT;return{buildQuerySelector:_,buildInfiniteQuerySelector:b,buildMutationSelector:w,selectInvalidatedBy:I,selectCachedArgsForQuery:T,selectApiState:u,selectQueries:f,selectMutations:h,selectQueryEntry:p,selectConfig:g};function l(C){return{...C,...XE(C.status)}}function u(C){return C[t]}function f(C){return u(C)?.queries}function p(C,D){return f(C)?.[D]}function h(C){return u(C)?.mutations}function g(C){return u(C)?.config}function v(C,D,N){return A=>{if(A===cr)return n(i,N);const P=e({queryArgs:A,endpointDefinition:D,endpointName:C});return n(H=>p(H,P)??sT,N)}}function _(C,D){return v(C,D,l)}function b(C,D){const{infiniteQueryOptions:N}=D;function A(P){const V={...P,...XE(P.status)},{isLoading:H,isError:B,direction:z}=V,G=z==="forward",q=z==="backward";return{...V,hasNextPage:O(N,V.data,V.originalArgs),hasPreviousPage:M(N,V.data,V.originalArgs),isFetchingNextPage:H&&G,isFetchingPreviousPage:H&&q,isFetchNextPageError:B&&G,isFetchPreviousPageError:B&&q}}return v(C,D,A)}function w(){return C=>{let D;return typeof C=="object"?D=uu(C)??cr:D=C,n(D===cr?o:P=>u(P)?.mutations?.[D]??oT,l)}}function I(C,D){const N=C[t],A=new Set;for(const P of D.filter(yh).map(xv)){const V=N.provided.tags[P.type];if(!V)continue;let H=(P.id!==void 0?V[P.id]:JE(Object.values(V)))??[];for(const B of H)A.add(B)}return JE(Array.from(A.values()).map(P=>{const V=N.queries[P];return V?[{queryCacheKey:P,endpointName:V.endpointName,originalArgs:V.originalArgs}]:[]}))}function T(C,D){return Object.values(f(C)).filter(N=>N?.endpointName===D&&N.status!=="uninitialized").map(N=>N.originalArgs)}function O(C,D,N){return D?Tv(C,D,N)!=null:!1}function M(C,D,N){return!D||!C.getPreviousPageParam?!1:dD(C,D,N)!=null}}var aT=WeakMap?new WeakMap:void 0,lT=({endpointName:e,queryArgs:t})=>{let n="";const i=aT?.get(t);if(typeof i=="string")n=i;else{const o=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=vs(u)?Object.keys(u).sort().reduce((f,p)=>(f[p]=u[p],f),{}):u,u));vs(t)&&aT?.set(t,o),n=o}return`${e}(${n})`};function pD(...e){return function(n){const i=Wf(h=>n.extractRehydrationInfo?.(h,{reducerPath:n.reducerPath??"api"})),o={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(h){let g=lT;if("serializeQueryArgs"in h.endpointDefinition){const v=h.endpointDefinition.serializeQueryArgs;g=_=>{const b=v(_);return typeof b=="string"?b:lT({..._,queryArgs:b})}}else n.serializeQueryArgs&&(g=n.serializeQueryArgs);return g(h)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(h){h()},apiUid:m_(),extractRehydrationInfo:i,hasRehydrationInfo:Wf(h=>i(h)!=null)},u={injectEndpoints:p,enhanceEndpoints({addTagTypes:h,endpoints:g}){if(h)for(const v of h)o.tagTypes.includes(v)||o.tagTypes.push(v);if(g)for(const[v,_]of Object.entries(g))typeof _=="function"?_(l.endpointDefinitions[v]):Object.assign(l.endpointDefinitions[v]||{},_);return u}},f=e.map(h=>h.init(u,o,l));function p(h){const g=h.endpoints({query:v=>({...v,type:"query"}),mutation:v=>({...v,type:"mutation"}),infiniteQuery:v=>({...v,type:"infinitequery"})});for(const[v,_]of Object.entries(g)){if(h.overrideExisting!==!0&&v in l.endpointDefinitions){if(h.overrideExisting==="throw")throw new Error(gr(39));continue}l.endpointDefinitions[v]=_;for(const b of f)b.injectEndpoint(v,_)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function si(e,...t){return Object.assign(e,...t)}var v9=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const o=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:p}=e.internalActions,h=(I,T)=>{if(f.match(T)){const{queryCacheKey:M,requestId:C,options:D}=T.payload,N=I.get(M);return N?.has(C)&&N.set(C,D),!0}if(p.match(T)){const{queryCacheKey:M,requestId:C}=T.payload,D=I.get(M);return D&&D.delete(C),!0}if(e.internalActions.removeQueryResult.match(T))return I.delete(T.payload.queryCacheKey),!0;if(t.pending.match(T)){const{meta:{arg:M,requestId:C}}=T,D=Sv(I,M.queryCacheKey,wv);return M.subscribe&&D.set(C,M.subscriptionOptions??D.get(C)??{}),!0}let O=!1;if(t.rejected.match(T)){const{meta:{condition:M,arg:C,requestId:D}}=T;if(M&&C.subscribe){const N=Sv(I,C.queryCacheKey,wv);N.set(D,C.subscriptionOptions??N.get(D)??{}),O=!0}}return O},g=()=>n.currentSubscriptions,b={getSubscriptions:g,getSubscriptionCount:I=>g().get(I)?.size??0,isRequestSubscribed:(I,T)=>!!g()?.get(I)?.get(T)};function w(I){return JSON.parse(JSON.stringify(Object.fromEntries([...I].map(([T,O])=>[T,Object.fromEntries(O)]))))}return(I,T)=>{if(l||(l=w(n.currentSubscriptions)),e.util.resetApiState.match(I))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(I))return[!1,b];const O=h(n.currentSubscriptions,I);let M=!0;if(O){u||(u=setTimeout(()=>{const N=w(n.currentSubscriptions),[,A]=ZR(l,()=>N);T.next(e.internalActions.subscriptionsUpdated(A)),l=N,u=null},500));const C=typeof I.type=="string"&&!!I.type.startsWith(o),D=t.rejected.match(I)&&I.meta.condition&&!!I.meta.arg.subscribe;M=!C&&!D}return[M,!1]}},_9=2147483647/1e3-1,b9=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:o,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:p})=>{const{removeQueryResult:h,unsubscribeQueryResult:g,cacheEntriesUpserted:v}=t.internalActions,_=o.runningQueries.get(p.dispatch),b=vi(g.match,n.fulfilled,n.rejected,v.match);function w(C){const D=o.currentSubscriptions.get(C);if(!D)return!1;const N=D.size>0,A=_?.[C]!==void 0;return N||A}const I={},T=(C,D,N)=>{const A=D.getState(),P=u(A);if(b(C)){let V;if(v.match(C))V=C.payload.map(H=>H.queryDescription.queryCacheKey);else{const{queryCacheKey:H}=g.match(C)?C.payload:C.meta.arg;V=[H]}O(V,D,P)}if(t.util.resetApiState.match(C))for(const[V,H]of Object.entries(I))H&&clearTimeout(H),delete I[V];if(i.hasRehydrationInfo(C)){const{queries:V}=i.extractRehydrationInfo(C);O(Object.keys(V),D,P)}};function O(C,D,N){const A=D.getState();for(const P of C){const V=l(A,P);V?.endpointName&&M(P,V.endpointName,D,N)}}function M(C,D,N,A){const V=i.endpointDefinitions[D]?.keepUnusedDataFor??A.keepUnusedDataFor;if(V===1/0)return;const H=Math.max(0,Math.min(V,_9));if(!w(C)){const B=I[C];B&&clearTimeout(B),I[C]=setTimeout(()=>{if(!w(C)){const z=l(N.getState(),C);z?.endpointName&&N.dispatch(f(z.endpointName,z.originalArgs))?.abort(),N.dispatch(h({queryCacheKey:C}))}delete I[C]},H*1e3)}}return T},cT=new Error("Promise never resolved before cacheEntryRemoved."),S9=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:o,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const p=nv(i),h=nv(o),g=_s(i,o),v={};function _(O,M,C){const D=v[O];D?.valueResolved&&(D.valueResolved({data:M,meta:C}),delete D.valueResolved)}function b(O){const M=v[O];M&&(delete v[O],M.cacheEntryRemoved())}const w=(O,M,C)=>{const D=I(O);function N(A,P,V,H){const B=u(C,P),z=u(M.getState(),P);!B&&z&&T(A,H,P,M,V)}if(i.pending.match(O))N(O.meta.arg.endpointName,D,O.meta.requestId,O.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(O))for(const{queryDescription:A,value:P}of O.payload){const{endpointName:V,originalArgs:H,queryCacheKey:B}=A;N(V,B,O.meta.requestId,H),_(B,P,{})}else if(o.pending.match(O))M.getState()[t].mutations[D]&&T(O.meta.arg.endpointName,O.meta.arg.originalArgs,D,M,O.meta.requestId);else if(g(O))_(D,O.payload,O.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(O)||e.internalActions.removeMutationResult.match(O))b(D);else if(e.util.resetApiState.match(O))for(const A of Object.keys(v))b(A)};function I(O){return p(O)?O.meta.arg.queryCacheKey:h(O)?O.meta.arg.fixedCacheKey??O.meta.requestId:e.internalActions.removeQueryResult.match(O)?O.payload.queryCacheKey:e.internalActions.removeMutationResult.match(O)?uu(O.payload):""}function T(O,M,C,D,N){const A=n.endpointDefinitions[O],P=A?.onCacheEntryAdded;if(!P)return;const V={},H=new Promise(oe=>{V.cacheEntryRemoved=oe}),B=Promise.race([new Promise(oe=>{V.valueResolved=oe}),H.then(()=>{throw cT})]);B.catch(()=>{}),v[C]=V;const z=e.endpoints[O].select(vh(A)?M:C),G=D.dispatch((oe,j,J)=>J),q={...D,getCacheEntry:()=>z(D.getState()),requestId:N,extra:G,updateCachedData:vh(A)?oe=>D.dispatch(e.util.updateQueryData(O,M,oe)):void 0,cacheDataLoaded:B,cacheEntryRemoved:H},te=P(M,q);Promise.resolve(te).catch(oe=>{if(oe!==cT)throw oe})}return w},w9=({api:e,context:{apiUid:t},reducerPath:n})=>(i,o)=>{e.util.resetApiState.match(i)&&o.dispatch(e.internalActions.middlewareRegistered(t))},x9=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:o,api:l,assertTagType:u,refetchQuery:f,internalState:p})=>{const{removeQueryResult:h}=l.internalActions,g=vi(_s(i),qh(i)),v=vi(_s(i,o),$a(i,o));let _=[];const b=(T,O)=>{g(T)?I(fD(T,"invalidatesTags",n,u),O):v(T)?I([],O):l.util.invalidateTags.match(T)&&I(yb(T.payload,void 0,void 0,void 0,void 0,u),O)};function w(T){const{queries:O,mutations:M}=T;for(const C of[O,M])for(const D in C)if(C[D]?.status==="pending")return!0;return!1}function I(T,O){const M=O.getState(),C=M[e];if(_.push(...T),C.config.invalidationBehavior==="delayed"&&w(C))return;const D=_;if(_=[],D.length===0)return;const N=l.util.selectInvalidatedBy(M,D);t.batch(()=>{const A=Array.from(N.values());for(const{queryCacheKey:P}of A){const V=C.queries[P],H=Sv(p.currentSubscriptions,P,wv);V&&(H.size===0?O.dispatch(h({queryCacheKey:P})):V.status!=="uninitialized"&&O.dispatch(f(V)))}})}return b},E9=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:o})=>{const{currentPolls:l,currentSubscriptions:u}=o,f=new Set;let p=null;const h=(T,O)=>{(n.internalActions.updateSubscriptionOptions.match(T)||n.internalActions.unsubscribeQueryResult.match(T))&&g(T.payload.queryCacheKey,O),(t.pending.match(T)||t.rejected.match(T)&&T.meta.condition)&&g(T.meta.arg.queryCacheKey,O),(t.fulfilled.match(T)||t.rejected.match(T)&&!T.meta.condition)&&v(T.meta.arg,O),n.util.resetApiState.match(T)&&(w(),p&&(clearTimeout(p),p=null),f.clear())};function g(T,O){f.add(T),p||(p=setTimeout(()=>{for(const M of f)_({queryCacheKey:M},O);f.clear(),p=null},0))}function v({queryCacheKey:T},O){const M=O.getState()[e],C=M.queries[T],D=u.get(T);if(!C||C.status==="uninitialized")return;const{lowestPollingInterval:N,skipPollingIfUnfocused:A}=I(D);if(!Number.isFinite(N))return;const P=l.get(T);P?.timeout&&(clearTimeout(P.timeout),P.timeout=void 0);const V=Date.now()+N;l.set(T,{nextPollTimestamp:V,pollingInterval:N,timeout:setTimeout(()=>{(M.config.focused||!A)&&O.dispatch(i(C)),v({queryCacheKey:T},O)},N)})}function _({queryCacheKey:T},O){const C=O.getState()[e].queries[T],D=u.get(T);if(!C||C.status==="uninitialized")return;const{lowestPollingInterval:N}=I(D);if(!Number.isFinite(N)){b(T);return}const A=l.get(T),P=Date.now()+N;(!A||P<A.nextPollTimestamp)&&v({queryCacheKey:T},O)}function b(T){const O=l.get(T);O?.timeout&&clearTimeout(O.timeout),l.delete(T)}function w(){for(const T of l.keys())b(T)}function I(T=new Map){let O=!1,M=Number.POSITIVE_INFINITY;for(const C of T.values())C.pollingInterval&&(M=Math.min(C.pollingInterval,M),O=C.skipPollingIfUnfocused||O);return{lowestPollingInterval:M,skipPollingIfUnfocused:O}}return h},T9=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const o=p_(n,i),l=$a(n,i),u=_s(n,i),f={};return(h,g)=>{if(o(h)){const{requestId:v,arg:{endpointName:_,originalArgs:b}}=h.meta,w=t.endpointDefinitions[_],I=w?.onQueryStarted;if(I){const T={},O=new Promise((N,A)=>{T.resolve=N,T.reject=A});O.catch(()=>{}),f[v]=T;const M=e.endpoints[_].select(vh(w)?b:v),C=g.dispatch((N,A,P)=>P),D={...g,getCacheEntry:()=>M(g.getState()),requestId:v,extra:C,updateCachedData:vh(w)?N=>g.dispatch(e.util.updateQueryData(_,b,N)):void 0,queryFulfilled:O};I(b,D)}}else if(u(h)){const{requestId:v,baseQueryMeta:_}=h.meta;f[v]?.resolve({data:h.payload,meta:_}),delete f[v]}else if(l(h)){const{requestId:v,rejectedWithValue:_,baseQueryMeta:b}=h.meta;f[v]?.reject({error:h.payload??h.error,isUnhandledError:!_,meta:b}),delete f[v]}}},C9=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:o})=>{const{removeQueryResult:l}=n.internalActions,u=(p,h)=>{mb.match(p)&&f(h,"refetchOnFocus"),gb.match(p)&&f(h,"refetchOnReconnect")};function f(p,h){const g=p.getState()[e],v=g.queries,_=o.currentSubscriptions;t.batch(()=>{for(const b of _.keys()){const w=v[b],I=_.get(b);if(!I||!w)continue;const T=[...I.values()];(T.some(M=>M[h]===!0)||T.every(M=>M[h]===void 0)&&g.config[h])&&(I.size===0?p.dispatch(l({queryCacheKey:b})):w.status!=="uninitialized"&&p.dispatch(i(w)))}})}return u};function R9(e){const{reducerPath:t,queryThunk:n,api:i,context:o,internalState:l}=e,{apiUid:u}=o,f={invalidateTags:mr(`${t}/invalidateTags`)},p=_=>_.type.startsWith(`${t}/`),h=[w9,b9,x9,E9,S9,T9];return{middleware:_=>{let b=!1;const w={...e,internalState:l,refetchQuery:v,isThisApiSliceAction:p,mwApi:_},I=h.map(M=>M(w)),T=v9(w),O=C9(w);return M=>C=>{if(!GR(C))return M(C);b||(b=!0,_.dispatch(i.internalActions.middlewareRegistered(u)));const D={..._,next:M},N=_.getState(),[A,P]=T(C,D,N);let V;if(A?V=M(C):V=P,_.getState()[t]&&(O(C,D,N),p(C)||o.hasRehydrationInfo(C)))for(const H of I)H(C,D,N);return V}},actions:f};function v(_){return e.api.endpoints[_.endpointName].initiate(_.originalArgs,{subscribe:!1,forceRefetch:!0})}}var uT=Symbol(),mD=({createSelector:e=xi}={})=>({name:uT,init(t,{baseQuery:n,tagTypes:i,reducerPath:o,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:p,refetchOnReconnect:h,invalidationBehavior:g,onSchemaFailure:v,catchSchemaFailure:_,skipSchemaValidation:b},w){U6();const I=pe=>pe;Object.assign(t,{reducerPath:o,endpoints:{},internalActions:{onOnline:gb,onOffline:cD,onFocus:mb,onFocusLost:lD},util:{}});const T=y9({serializeQueryArgs:l,reducerPath:o,createSelector:e}),{selectInvalidatedBy:O,selectCachedArgsForQuery:M,buildQuerySelector:C,buildInfiniteQuerySelector:D,buildMutationSelector:N}=T;si(t.util,{selectInvalidatedBy:O,selectCachedArgsForQuery:M});const{queryThunk:A,infiniteQueryThunk:P,mutationThunk:V,patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,buildMatchThunkActions:q}=m9({baseQuery:n,reducerPath:o,context:w,api:t,serializeQueryArgs:l,assertTagType:I,selectors:T,onSchemaFailure:v,catchSchemaFailure:_,skipSchemaValidation:b}),{reducer:te,actions:oe}=g9({context:w,queryThunk:A,mutationThunk:V,serializeQueryArgs:l,reducerPath:o,assertTagType:I,config:{refetchOnFocus:p,refetchOnReconnect:h,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:o,invalidationBehavior:g}});si(t.util,{patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,resetApiState:oe.resetApiState,upsertQueryEntries:oe.cacheEntriesUpserted}),si(t.internalActions,oe);const j={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:J,buildInitiateInfiniteQuery:ne,buildInitiateMutation:le,getRunningMutationThunk:k,getRunningMutationsThunk:K,getRunningQueriesThunk:ce,getRunningQueryThunk:ie}=p9({queryThunk:A,mutationThunk:V,infiniteQueryThunk:P,api:t,serializeQueryArgs:l,context:w,internalState:j});si(t.util,{getRunningMutationThunk:k,getRunningMutationsThunk:K,getRunningQueryThunk:ie,getRunningQueriesThunk:ce});const{middleware:de,actions:me}=R9({reducerPath:o,context:w,queryThunk:A,mutationThunk:V,infiniteQueryThunk:P,api:t,assertTagType:I,selectors:T,getRunningQueryThunk:ie,internalState:j});return si(t.util,me),si(t,{reducer:te,middleware:de}),{name:uT,injectEndpoint(pe,Ae){const be=t,Oe=be.endpoints[pe]??={};ap(Ae)&&si(Oe,{name:pe,select:C(pe,Ae),initiate:J(pe,Ae)},q(A,pe)),d9(Ae)&&si(Oe,{name:pe,select:N(),initiate:le(pe)},q(V,pe)),lp(Ae)&&si(Oe,{name:pe,select:D(pe,Ae),initiate:ne(pe,Ae)},q(A,pe))}}}});mD();function lf(e){return e.replace(e[0],e[0].toUpperCase())}function A9(e){return e.type==="query"}function I9(e){return e.type==="mutation"}function gD(e){return e.type==="infinitequery"}function yc(e,...t){return Object.assign(e,...t)}var my=Symbol();function gy(e){const t=E.useRef(e),n=E.useMemo(()=>pb(t.current,e),[e]);return E.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function cf(e){const t=E.useRef(e);return E.useEffect(()=>{Ec(t.current,e)||(t.current=e)},[e]),Ec(t.current,e)?t.current:e}var D9=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O9=D9(),k9=()=>typeof navigator<"u"&&navigator.product==="ReactNative",N9=k9(),M9=()=>O9||N9?E.useLayoutEffect:E.useEffect,L9=M9(),dT=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:aD.pending}:e;function yy(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var vy=["data","status","isLoading","isSuccess","isError","error"];function P9({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:o},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:p}){const h=l?D=>D():E.useEffect;return{buildQueryHooks:O,buildInfiniteQueryHooks:M,buildMutationHook:C,usePrefetch:_};function g(D,N,A){if(N?.endpointName&&D.isUninitialized){const{endpointName:G}=N,q=p.endpointDefinitions[G];A!==cr&&f({queryArgs:N.originalArgs,endpointDefinition:q,endpointName:G})===f({queryArgs:A,endpointDefinition:q,endpointName:G})&&(N=void 0)}let P=D.isSuccess?D.data:N?.data;P===void 0&&(P=D.data);const V=P!==void 0,H=D.isLoading,B=(!N||N.isLoading||N.isUninitialized)&&!V&&H,z=D.isSuccess||V&&(H&&!N?.isError||D.isUninitialized);return{...D,data:P,currentData:D.data,isFetching:H,isLoading:B,isSuccess:z}}function v(D,N,A){if(N?.endpointName&&D.isUninitialized){const{endpointName:G}=N,q=p.endpointDefinitions[G];A!==cr&&f({queryArgs:N.originalArgs,endpointDefinition:q,endpointName:G})===f({queryArgs:A,endpointDefinition:q,endpointName:G})&&(N=void 0)}let P=D.isSuccess?D.data:N?.data;P===void 0&&(P=D.data);const V=P!==void 0,H=D.isLoading,B=(!N||N.isLoading||N.isUninitialized)&&!V&&H,z=D.isSuccess||H&&V;return{...D,data:P,currentData:D.data,isFetching:H,isLoading:B,isSuccess:z}}function _(D,N){const A=n(),P=cf(N);return E.useCallback((V,H)=>A(e.util.prefetch(D,V,{...P,...H})),[D,A,P])}function b(D,N,{refetchOnReconnect:A,refetchOnFocus:P,refetchOnMountOrArgChange:V,skip:H=!1,pollingInterval:B=0,skipPollingIfUnfocused:z=!1,...G}={}){const{initiate:q}=e.endpoints[D],te=n(),oe=E.useRef(void 0);if(!oe.current){const me=te(e.internalActions.internal_getRTKQSubscriptions());oe.current=me}const j=gy(H?cr:N),J=cf({refetchOnReconnect:A,refetchOnFocus:P,pollingInterval:B,skipPollingIfUnfocused:z}),ne=G.initialPageParam,le=cf(ne),k=E.useRef(void 0);let{queryCacheKey:K,requestId:ce}=k.current||{},ie=!1;K&&ce&&(ie=oe.current.isRequestSubscribed(K,ce));const de=!ie&&k.current!==void 0;return h(()=>{de&&(k.current=void 0)},[de]),h(()=>{const me=k.current;if(j===cr){me?.unsubscribe(),k.current=void 0;return}const pe=k.current?.subscriptionOptions;if(!me||me.arg!==j){me?.unsubscribe();const Ae=te(q(j,{subscriptionOptions:J,forceRefetch:V,...gD(p.endpointDefinitions[D])?{initialPageParam:le}:{}}));k.current=Ae}else J!==pe&&me.updateSubscriptionOptions(J)},[te,q,V,j,J,de,le,D]),[k,te,q,J]}function w(D,N){return(P,{skip:V=!1,selectFromResult:H}={})=>{const{select:B}=e.endpoints[D],z=gy(V?cr:P),G=E.useRef(void 0),q=E.useMemo(()=>u([B(z),(ne,le)=>le,ne=>z],N,{memoizeOptions:{resultEqualityCheck:Ec}}),[B,z]),te=E.useMemo(()=>H?u([q],H,{devModeChecks:{identityFunctionCheck:"never"}}):q,[q,H]),oe=i(ne=>te(ne,G.current),Ec),j=o(),J=q(j.getState(),G.current);return L9(()=>{G.current=J},[J]),oe}}function I(D){E.useEffect(()=>()=>{D.current?.unsubscribe?.(),D.current=void 0},[D])}function T(D){if(!D.current)throw new Error(gr(38));return D.current.refetch()}function O(D){const N=(V,H={})=>{const[B]=b(D,V,H);return I(B),E.useMemo(()=>({refetch:()=>T(B)}),[B])},A=({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:G}=e.endpoints[D],q=n(),[te,oe]=E.useState(my),j=E.useRef(void 0),J=cf({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B,skipPollingIfUnfocused:z});h(()=>{const K=j.current?.subscriptionOptions;J!==K&&j.current?.updateSubscriptionOptions(J)},[J]);const ne=E.useRef(J);h(()=>{ne.current=J},[J]);const le=E.useCallback(function(K,ce=!1){let ie;return t(()=>{j.current?.unsubscribe(),j.current=ie=q(G(K,{subscriptionOptions:ne.current,forceRefetch:!ce})),oe(K)}),ie},[q,G]),k=E.useCallback(()=>{j.current?.queryCacheKey&&q(e.internalActions.removeQueryResult({queryCacheKey:j.current?.queryCacheKey}))},[q]);return E.useEffect(()=>()=>{j?.current?.unsubscribe()},[]),E.useEffect(()=>{te!==my&&!j.current&&le(te,!0)},[te,le]),E.useMemo(()=>[le,te,{reset:k}],[le,te,k])},P=w(D,g);return{useQueryState:P,useQuerySubscription:N,useLazyQuerySubscription:A,useLazyQuery(V){const[H,B,{reset:z}]=A(V),G=P(B,{...V,skip:B===my}),q=E.useMemo(()=>({lastArg:B}),[B]);return E.useMemo(()=>[H,{...G,reset:z},q],[H,G,z,q])},useQuery(V,H){const B=N(V,H),z=P(V,{selectFromResult:V===cr||H?.skip?void 0:dT,...H}),G=yy(z,...vy);return E.useDebugValue(G),E.useMemo(()=>({...z,...B}),[z,B])}}}function M(D){const N=(P,V={})=>{const[H,B,z,G]=b(D,P,V),q=E.useRef(G);h(()=>{q.current=G},[G]);const te=E.useCallback(function(J,ne){let le;return t(()=>{H.current?.unsubscribe(),H.current=le=B(z(J,{subscriptionOptions:q.current,direction:ne}))}),le},[H,B,z]);I(H);const oe=gy(V.skip?cr:P),j=E.useCallback(()=>T(H),[H]);return E.useMemo(()=>({trigger:te,refetch:j,fetchNextPage:()=>te(oe,"forward"),fetchPreviousPage:()=>te(oe,"backward")}),[j,te,oe])},A=w(D,v);return{useInfiniteQueryState:A,useInfiniteQuerySubscription:N,useInfiniteQuery(P,V){const{refetch:H,fetchNextPage:B,fetchPreviousPage:z}=N(P,V),G=A(P,{selectFromResult:P===cr||V?.skip?void 0:dT,...V}),q=yy(G,...vy,"hasNextPage","hasPreviousPage");return E.useDebugValue(q),E.useMemo(()=>({...G,fetchNextPage:B,fetchPreviousPage:z,refetch:H}),[G,B,z,H])}}}function C(D){return({selectFromResult:N,fixedCacheKey:A}={})=>{const{select:P,initiate:V}=e.endpoints[D],H=n(),[B,z]=E.useState();E.useEffect(()=>()=>{B?.arg.fixedCacheKey||B?.reset()},[B]);const G=E.useCallback(function(K){const ce=H(V(K,{fixedCacheKey:A}));return z(ce),ce},[H,V,A]),{requestId:q}=B||{},te=E.useMemo(()=>P({fixedCacheKey:A,requestId:B?.requestId}),[A,B,P]),oe=E.useMemo(()=>N?u([te],N):te,[N,te]),j=i(oe,Ec),J=A==null?B?.arg.originalArgs:void 0,ne=E.useCallback(()=>{t(()=>{B&&z(void 0),A&&H(e.internalActions.removeMutationResult({requestId:q,fixedCacheKey:A}))})},[H,A,B,q]),le=yy(j,...vy,"endpointName");E.useDebugValue(le);const k=E.useMemo(()=>({...j,originalArgs:J,reset:ne}),[j,J,ne]);return E.useMemo(()=>[G,k],[G,k])}}}var j9=Symbol(),U9=({batch:e=bN,hooks:t={useDispatch:ZT,useSelector:JT,useStore:XT},createSelector:n=xi,unstable__sideEffectsInRender:i=!1,...o}={})=>({name:j9,init(l,{serializeQueryArgs:u},f){const p=l,{buildQueryHooks:h,buildInfiniteQueryHooks:g,buildMutationHook:v,usePrefetch:_}=P9({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return yc(p,{usePrefetch:_}),yc(f,{batch:e}),{injectEndpoint(b,w){if(A9(w)){const{useQuery:I,useLazyQuery:T,useLazyQuerySubscription:O,useQueryState:M,useQuerySubscription:C}=h(b);yc(p.endpoints[b],{useQuery:I,useLazyQuery:T,useLazyQuerySubscription:O,useQueryState:M,useQuerySubscription:C}),l[`use${lf(b)}Query`]=I,l[`useLazy${lf(b)}Query`]=T}if(I9(w)){const I=v(b);yc(p.endpoints[b],{useMutation:I}),l[`use${lf(b)}Mutation`]=I}else if(gD(w)){const{useInfiniteQuery:I,useInfiniteQuerySubscription:T,useInfiniteQueryState:O}=g(b);yc(p.endpoints[b],{useInfiniteQuery:I,useInfiniteQuerySubscription:T,useInfiniteQueryState:O}),l[`use${lf(b)}InfiniteQuery`]=I}}}}}),$9=pD(mD(),U9());const yD=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),z9=e=>e.results.map(yD).sort((n,i)=>n.name.localeCompare(i.name)),vD=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:String(e.id),name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},B9=e=>e.results.map(vD).sort((n,i)=>n.name.localeCompare(i.name)),H9=e=>{const t=e.instructors[0],n=t?yD(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=De.getBookableStatus(e),o=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-o.getTime())/1e3;return Number.isNaN(u)&&Xv("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:String(e.id),name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:vD(e.offering_type.category),instructor:n,status:i}},F9=e=>e.results.map(H9),q9=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],V9=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],If=$9({reducerPath:"pelotonApi",baseQuery:u9({baseUrl:`${De.PELOTON_CORS_PROXY}/${De.PELOTON_API_BASE}/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=De.getPelotonHeaders(t),i=De.buildEventsUrl({fields:q9,expand:V9,corsProxy:!0}),o=await De.fetchAllPelotonPages(i,async l=>{const u=await fetch(l,{headers:n});if(!u.ok)throw new Error(`${u.status}: ${await u.text()}`);return u.json()},!0);return{data:F9({results:o})}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:De.getPelotonHeaders(t)}),transformResponse:t=>B9(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:De.getPelotonHeaders(t)}),transformResponse:t=>z9(t)})})}),{useGetClassesQuery:_D,useGetDisciplinesQuery:vb,useGetInstructorsQuery:_b}=If,G9=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},Y9=R.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${db}
`,W9=R.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,Q9=R.input`
  accent-color: ${e=>e.theme.colors.accent};
`,bD=({value:e,checked:t,onChange:n,label:i,icon:o})=>{const l=E.useId();return y.jsxs(Y9,{$checked:t,htmlFor:l,children:[y.jsx(Q9,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),o,y.jsx(W9,{children:i})]})},fT=R.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,hT=R.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,pT=R.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,mT=R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,uf=R.button`
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
`,SD=R.div`
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
`,gT=R.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,_h=R.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,wD=R.p`
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
  padding: 16px;
`,xD=R.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,K9=R.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,X9=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:o})=>{const l=_b(e),u=vb(e),f=E.useRef(t),p=E.useRef(i);E.useEffect(()=>{const b=f.current;if(!l.currentData||!De.isNotEmpty(b))return;const w=new Set(l.currentData.map(T=>T.id)),I=b.filter(T=>w.has(T));I.length<b.length&&(n(I),f.current=I)},[l.currentData,n]),E.useEffect(()=>{const b=p.current;if(!u.currentData||!De.isNotEmpty(b))return;const w=new Set(u.currentData.map(T=>String(T.id))),I=b.filter(T=>w.has(String(T))).map(String);I.length<b.length&&(o(I),p.current=I)},[u.currentData,o]);const h=E.useCallback(b=>{if(!De.isNotEmpty(t))return;const w=t.includes(b);n(w?t.filter(I=>I!==b):[...t,b])},[t,n]),g=E.useCallback(b=>{if(!De.isNotEmpty(i))return;const w=i.includes(b);o(w?i.filter(I=>I!==b):[...i,b])},[i,o]),v=De.isNotEmpty(t),_=De.isNotEmpty(i);return y.jsxs("div",{children:[y.jsxs(fT,{children:[y.jsx(hT,{children:"Instructors"}),y.jsx(pT,{children:"Filter by specific instructors or get alerts for all of them."}),y.jsxs(mT,{children:[y.jsx(uf,{type:"button",$active:!v,onClick:()=>n(null),children:"Any instructor"}),y.jsx(uf,{type:"button",$active:v,onClick:()=>{v||n([])},children:"Specific instructors"}),v&&t.length>0&&y.jsxs(gT,{children:[t.length," selected"]})]}),v&&y.jsx(Z9,{query:l,selectedIds:t,onToggle:h})]}),y.jsx(K9,{}),y.jsxs(fT,{children:[y.jsx(hT,{children:"Disciplines"}),y.jsx(pT,{children:"Filter by class type or get alerts for everything."}),y.jsxs(mT,{children:[y.jsx(uf,{type:"button",$active:!_,onClick:()=>o(null),children:"Any discipline"}),y.jsx(uf,{type:"button",$active:_,onClick:()=>{_||o([])},children:"Specific disciplines"}),_&&i.length>0&&y.jsxs(gT,{children:[i.length," selected"]})]}),_&&y.jsx(J9,{query:u,selectedIds:i,onToggle:g})]})]})},Z9=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?y.jsx(_h,{children:"Loading instructors…"}):e.error?y.jsxs(wD,{children:["Couldn't load instructors."," ",y.jsx(xD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?y.jsx(_h,{children:"No instructors found for this studio."}):y.jsx(SD,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>y.jsx(bD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:y.jsx(hb,{instructor:i,size:28})},i.id))})),J9=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?y.jsx(_h,{children:"Loading disciplines…"}):e.error?y.jsxs(wD,{children:["Couldn't load disciplines."," ",y.jsx(xD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?y.jsx(_h,{children:"No disciplines found for this studio."}):y.jsx(SD,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>y.jsx(bD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:y.jsx(gh,{discipline:i,size:24})},i.id))})),e7=R.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Te`
    padding: 0;
    margin-bottom: 12px;
  `}
`,t7=R.button`
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
`,n7=R.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,r7=R.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Te`
    display: none;
  `}
`,i7=R.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,s7=({steps:e,currentStep:t,onStepClick:n})=>y.jsx(e7,{role:"navigation","aria-label":"Editor steps",children:e.map((i,o)=>{const l=o<t?"completed":o===t?"active":"upcoming";return y.jsxs(i7,{style:{flex:o<e.length-1?1:0},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[y.jsx(t7,{$state:l,onClick:()=>{l!=="upcoming"&&n(o)},"aria-label":`Step ${o+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),o<e.length-1&&y.jsx(n7,{$filled:o<t})]}),y.jsx(r7,{$state:l,children:i})]},o)})}),ls=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],bh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const o=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:o.format(i)}}),o7=R.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,a7=R.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,l7=R.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,c7=R.div`
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Zi=R.div`
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
`,Ji=R.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`,oi=R.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Te`
    text-align: left;
  `}
`,u7=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Te`
    justify-content: flex-start;
  `}
`,d7=R.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,f7=e=>{if(De.isAllDay(e))return"All day";const t=bh.find(i=>i.minutes===e.startMin),n=bh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},h7=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},p7=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:o,timeRanges:l,waitlistAlerts:u})=>{const f=De.STUDIOS[t],p=ls.filter((v,_)=>l[_]),h=l.find(Boolean),g=l.filter(Boolean).every(v=>v&&h&&v.startMin===h.startMin&&v.endMin===h.endMin);return y.jsxs(o7,{children:[y.jsx(a7,{children:"Review your alert"}),y.jsx(l7,{children:"Double-check everything looks right, then hit Save."}),y.jsxs(c7,{children:[e.trim()&&y.jsxs(Zi,{children:[y.jsx(Ji,{children:"Name"}),y.jsx(oi,{children:e.trim()})]}),y.jsxs(Zi,{children:[y.jsx(Ji,{children:"Studio"}),y.jsx(oi,{children:f?.location||t})]}),y.jsxs(Zi,{children:[y.jsx(Ji,{children:"Alert on"}),y.jsx(oi,{children:h7(n)})]}),y.jsxs(Zi,{children:[y.jsx(Ji,{children:"Instructors"}),y.jsx(oi,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),y.jsxs(Zi,{children:[y.jsx(Ji,{children:"Disciplines"}),y.jsx(oi,{children:o===null?"Any discipline":o.length===0?"None selected":`${o.length} selected`})]}),y.jsxs(Zi,{children:[y.jsx(Ji,{children:"Days"}),p.length===0?y.jsx(oi,{children:"No days selected"}):p.length===7?y.jsx(oi,{children:"Every day"}):y.jsx(u7,{children:p.map(v=>y.jsx(d7,{children:v.slice(0,3)},v))})]}),h&&y.jsxs(Zi,{children:[y.jsx(Ji,{children:"Time window"}),y.jsx(oi,{children:g?f7(h):"Varies by day"})]}),y.jsxs(Zi,{children:[y.jsx(Ji,{children:"Waitlist alerts"}),y.jsx(oi,{children:u?"On":"Off"})]})]})]})},m7=R.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,g7=R.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,y7=R.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,v7=R.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,_7=R.div`
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
`,b7=R.label`
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
`,S7=R.input`
  accent-color: ${e=>e.theme.colors.accent};
`,w7=R.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Te`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,x7=R.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,E7=R.input`
  accent-color: ${e=>e.theme.colors.accent};
`,yT=R.select`
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
`,T7=R.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,C7=R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,_y=R.button`
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
`,R7=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=E.useRef(ls.map(()=>{})),o=E.useCallback(g=>{const v=[...e];v[g]=v[g]?null:De.DEFAULT_TIME_RANGE,t(v)},[e,t]),l=E.useCallback(g=>{const v=e[g];if(!v)return;const _=[...e];De.isAllDay(v)?_[g]=i.current[g]??De.SPECIFIC_DEFAULT_TIME_RANGE:(i.current[g]=v,_[g]=De.ALL_DAY_TIME_RANGE),t(_)},[e,t]),u=E.useCallback((g,v,_)=>{const b=[...e],w=b[g];w&&(v==="startMin"?b[g]={startMin:_,endMin:w.endMin===0||w.endMin>=_?w.endMin:0}:b[g]={...w,endMin:_},t(b))},[e,t]),f=E.useCallback(()=>{t(ls.map(()=>De.DEFAULT_TIME_RANGE))},[t]),p=E.useCallback(()=>{t(ls.map(()=>null))},[t]),h=E.useCallback(()=>{const g=e.find(Boolean);g&&t(e.map(v=>v?{...g}:null))},[e,t]);return y.jsxs(m7,{children:[y.jsx(g7,{children:"Days & times"}),y.jsx(y7,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),y.jsxs(C7,{children:[y.jsx(_y,{type:"button",onClick:f,children:"Select all days"}),n>0&&y.jsx(_y,{type:"button",onClick:p,children:"Clear all"}),n>1&&y.jsx(_y,{type:"button",onClick:h,children:"Copy time to all"})]}),y.jsx(v7,{children:ls.map((g,v)=>{const _=e[v],b=!!_&&De.isAllDay(_);return y.jsxs(_7,{$enabled:!!_,children:[y.jsxs(b7,{htmlFor:`day-${v}`,children:[y.jsx(S7,{type:"checkbox",id:`day-${v}`,checked:!!_,onChange:()=>o(v)}),g]}),_&&y.jsxs(w7,{children:[y.jsxs(x7,{htmlFor:`allday-${v}`,children:[y.jsx(E7,{type:"checkbox",id:`allday-${v}`,checked:b,onChange:()=>l(v)}),"All day"]}),!b&&y.jsxs(y.Fragment,{children:[y.jsx(yT,{value:_.startMin,"aria-label":`${g} start time`,onChange:({target:w})=>{const I=parseInt(w.value);Number.isNaN(I)||u(v,"startMin",I)},children:bh.map(w=>y.jsx("option",{value:w.minutes,children:w.label},w.minutes))}),y.jsx(T7,{children:"to"}),y.jsx(yT,{value:_.endMin,"aria-label":`${g} end time`,onChange:({target:w})=>{const I=parseInt(w.value);Number.isNaN(I)||u(v,"endMin",I)},children:bh.map(w=>y.jsx("option",{value:w.minutes,disabled:w.minutes>0&&w.minutes<_.startMin,children:w.label},w.minutes))})]})]})]},g)})})]})},Do=xi([e=>e.studioSelector],e=>e.studioId),A7=e=>{const t=Mn(),n=et(Do);E.useEffect(()=>{e.studioId?t(ph(e.studioId)):t(ph(sD(De.DEFAULT_STUDIO_ID)))},[e.studioId,t]);const[i,o]=E.useState(e.name||""),[l,u]=E.useState(e.instructors||null),[f,p]=E.useState(e.disciplines||null),[h,g]=E.useState(()=>e.timeRanges||ls.map(()=>De.DEFAULT_TIME_RANGE)),[v,_]=E.useState(e.maxStatus||"free"),[b,w]=E.useState(e.waitlistAlerts??!1),I=E.useRef(e.studioId);return E.useEffect(()=>{n&&I.current&&n!==I.current&&(u(T=>T&&[]),p(T=>T&&[])),I.current=n},[n]),{selectedStudioId:n,name:i,setName:o,selectedInstructors:l,setSelectedInstructors:u,selectedDisciplines:f,setSelectedDisciplines:p,timeRanges:h,setTimeRanges:g,maxStatus:v,setMaxStatus:_,waitlistAlerts:b,setWaitlistAlerts:w}},by=["Basics","Filters","Schedule","Review"],I7=R.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,D7=R.div`
  padding: 24px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,O7=R.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,k7=R.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,N7=R.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Te`
    padding: 8px 16px 16px;
  `}
`,M7=R.div`
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
`,df=R.button`
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
`,L7=R.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,P7=R.span`
  font-size: 13px;
  color: ${e=>e.$error?e.theme.colors.error:e.theme.colors.secondary};

  ${Te`
    font-size: 12px;
  `}
`,j7=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=Mn(),o=et(yu),[l,u]=E.useState(0),[f,p]=E.useState(!1),[h,g]=E.useState(),{selectedStudioId:v,name:_,setName:b,selectedInstructors:w,setSelectedInstructors:I,selectedDisciplines:T,setSelectedDisciplines:O,timeRanges:M,setTimeRanges:C,maxStatus:D,setMaxStatus:N,waitlistAlerts:A,setWaitlistAlerts:P}=A7(e),V=l<by.length-1,H=l>0,B=l===by.length-1,z=E.useCallback(()=>{V&&u(oe=>oe+1)},[V]),G=E.useCallback(()=>{H&&u(oe=>oe-1)},[H]),q=E.useCallback(async()=>{if(!v||!o)return;p(!0),g(void 0);const oe={id:e.id||null,created:e.created||new Date().getTime(),..._.trim()?{name:_.trim()}:{},studioId:v,instructors:w,disciplines:T,timeRanges:M,maxStatus:D,...A?{waitlistAlerts:!0}:{}};try{oe.id?await OH(o,oe):await DH(o,oe),t()}catch(j){Nr(j),g("Something went wrong. Please try again."),p(!1)}},[e.id,e.created,_,v,o,w,T,M,D,A,t]),te=!!e.id;return y.jsxs(I7,{children:[y.jsxs(D7,{children:[y.jsx(O7,{children:te?"Edit alert":"New alert"}),y.jsx(k7,{children:te?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),y.jsx(s7,{steps:by,currentStep:l,onStepClick:u})]}),y.jsxs(N7,{children:[l===0&&y.jsx(QH,{name:_,onNameChange:b,studioId:v,onStudioChange:oe=>i(ph(oe)),maxStatus:D,onStatusChange:N,waitlistAlerts:A,onWaitlistAlertsChange:P}),l===1&&y.jsx(X9,{studioId:v,selectedInstructors:w,setSelectedInstructors:I,selectedDisciplines:T,setSelectedDisciplines:O}),l===2&&y.jsx(R7,{timeRanges:M,setTimeRanges:C}),l===3&&y.jsx(p7,{name:_,studioId:v,maxStatus:D,selectedInstructors:w,selectedDisciplines:T,timeRanges:M,waitlistAlerts:A})]}),y.jsxs(M7,{children:[y.jsx("div",{children:H?y.jsx(df,{type:"button",onClick:G,children:"Back"}):y.jsx(df,{type:"button",onClick:n,children:"Cancel"})}),y.jsxs(L7,{children:[h&&y.jsx(P7,{$error:!0,children:h}),B?y.jsx(df,{type:"button",$primary:!0,onClick:q,disabled:f,children:f?"Saving…":"Save alert"}):y.jsx(df,{type:"button",$primary:!0,onClick:z,children:"Continue"})]})]})]})},U7=()=>{const e=Pr(),t=xs(),n=e.state||{};return y.jsx(j7,{alertToEdit:n,onSave:()=>{t(nt.ALERTS)},onCancel:()=>{t(nt.ALERTS)}})},$7={userId:null,data:{state:"idle"}},ED=Kn({name:"alerts",initialState:$7,reducers:{setAlertsLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertsData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertsFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertsLoading:z7,setAlertsData:vT,setAlertsFailed:_T}=ED.actions,B7=ED.reducer,H7={userId:null,data:{state:"idle"}},TD=Kn({name:"alertPreferences",initialState:H7,reducers:{setAlertPreferencesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertPreferencesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertPreferencesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertPreferencesLoading:F7,setAlertPreferencesData:q7,setAlertPreferencesFailed:bT}=TD.actions,V7=TD.reducer,bb=e=>{try{return window.localStorage.getItem(e)}catch(t){return Nr(t),null}},Sb=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Nr(n)}},CD=e=>{try{window.localStorage.removeItem(e)}catch(t){Nr(t)}},RD="BOOKABLE_STATUS_FILTERS",Cv="DISCIPLINE_FILTERS",Rv="INSTRUCTOR_FILTERS",G7=e=>{const t=bb(RD);return t===null?e:t.split(";").filter(De.isBookableStatus)},Y7=e=>{Sb(RD,e.join(";"))},W7=e=>{const t=bb(Cv);return t===null?e:t.split(";").filter(Boolean)},Sy=e=>{e.length===0?CD(Cv):Sb(Cv,e.join(";"))},Q7=e=>{const t=bb(Rv);return t===null?e:t.split(";").filter(Boolean)},ST=e=>{e.length===0?CD(Rv):Sb(Rv,e.join(";"))},K7={selectedBookableStatuses:G7(["free","waitlist"]),selectedInstructors:Q7([]),selectedDisciplines:W7([])},AD=Kn({name:"filters",initialState:K7,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],Y7(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],ST(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],ST(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],Sy(e.selectedDisciplines)},setDisciplines(e,t){e.selectedDisciplines=t.payload,Sy(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],Sy(e.selectedDisciplines)}}}),{toggleBookableStatus:X7,toggleInstructor:Z7,resetInstructors:J7,toggleDiscipline:eF,setDisciplines:tF,resetDisciplines:nF}=AD.actions,rF=AD.reducer,iF={userId:null,data:{state:"idle"}},ID=Kn({name:"registeredDevices",initialState:iF,reducers:{setRegisteredDevicesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setRegisteredDevicesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setRegisteredDevicesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setRegisteredDevicesLoading:sF,setRegisteredDevicesData:oF,setRegisteredDevicesFailed:wT}=ID.actions,aF=ID.reducer,lF={state:"idle"},DD=Kn({name:"session",initialState:lF,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:xT,setSession:cF,removeSession:ET}=DD.actions,uF=DD.reducer,cp=r3({reducer:{alerts:B7,alertPreferences:V7,filters:rF,registeredDevices:aF,session:uF,[If.reducerPath]:If.reducer,[bv.name]:bv.reducer},middleware:e=>e().concat(If.middleware)}),OD=E.createContext({state:"idle"}),dF=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.registeredDevices);E.useEffect(()=>{const l=wn;if(!l)return n(wT({userId:t,error:{message:"No database set up"}})),()=>{};const u=cp.getState().registeredDevices;(u.userId!==t||u.data.state!=="fulfilled")&&n(sF(t));const f=ir(l,`messagingTokens/${t}`),p=np(f,h=>{const g=h.val();n(oF({userId:t,data:g||{}}))},h=>{n(wT({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return y.jsx(OD.Provider,{value:o,children:e})},kD=E.createContext({state:"idle"}),fF=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.alertPreferences);E.useEffect(()=>{const l=wn;if(!l)return n(bT({userId:t,error:{message:"No database set up"}})),()=>{};const u=cp.getState().alertPreferences;(u.userId!==t||u.data.state!=="fulfilled")&&n(F7(t));const f=ir(l,De.PATHS.alertPreferences(t)),p=np(f,h=>{const g=h.val();n(q7({userId:t,data:g||{}}))},h=>{n(bT({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return y.jsx(kD.Provider,{value:o,children:e})},hF=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.alerts);E.useEffect(()=>{const l=wn;if(!l)return n(_T({userId:t,error:{message:"No database set up"}})),()=>{};const u=cp.getState().alerts;(u.userId!==t||u.data.state!=="fulfilled")&&n(z7(t));const f=ir(l,De.PATHS.alerts(t)),p=np(f,h=>{const g=h.val();if(!g){n(vT({userId:t,data:[]}));return}const v=Object.entries(g).map(([_,b])=>({...b,timeRanges:new Array(ls.length).fill(null).map((w,I)=>b.timeRanges[I]||null),id:_}));n(vT({userId:t,data:v}))},h=>{n(_T({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return y.jsx(fb.Provider,{value:o,children:e})},pF=R.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Te`
    padding: 8px;
  `}
`,mF=R.div`
  overflow: auto;
  height: 100%;
`,gF=R.div`
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
`,yF=R.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,vF=R.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,_F=R.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,bF=R(Es)`
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
`,SF=R.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,wF=({children:e})=>{const t=et(el);return t.state==="loading"?y.jsx(SF,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?y.jsxs(gF,{children:[y.jsx(yF,{children:"🔔"}),y.jsx(vF,{children:"Sign in to use Alerts"}),y.jsx(_F,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),y.jsx(bF,{to:nt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},xF=e=>y.jsx(hs,{children:y.jsx(mF,{children:y.jsx(pF,{children:y.jsx(wF,{...e})})})}),EF=({userId:e})=>y.jsx(hF,{userId:e,children:y.jsx(fF,{userId:e,children:y.jsx(dF,{userId:e,children:y.jsx(XM,{})})})}),TF=()=>y.jsx(xF,{children:e=>y.jsx(EF,{userId:e})}),CF=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await yI(ir(n,De.PATHS.alertPreferences(e)),t)},RF=R.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,AF=R.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Te`
    flex-direction: column;
    align-items: stretch;
  `}
`,IF=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,DF=R.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,OF=R.input`
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
`,kF=R.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,NF=R.button`
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
`,MF=R.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,LF=R.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,PF=({alertPreferences:e})=>{const t=et(yu),[n,i]=E.useState(e.notificationDelayMin||5),[o,l]=E.useState(!1),[u,f]=E.useState(!1),p=E.useCallback(async h=>{if(h.preventDefault(),!!t){l(!0),f(!1);try{await CF(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]);return y.jsxs(RF,{onSubmit:p,children:[y.jsxs(IF,{children:[y.jsx(DF,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),y.jsx(kF,{children:"Minimum delay between consecutive alert notifications"})]}),y.jsxs(AF,{children:[y.jsx(OF,{id:"delay-input",type:"number",min:0,value:n,onChange:h=>{const g=parseInt(h.target.value,10);Number.isNaN(g)||i(g)}}),y.jsx(NF,{type:"submit",disabled:o,$saved:u,children:o?"Saving…":u?"Saved ✓":"Save"})]})]})},jF=()=>{const e=E.useContext(kD);return e.state==="idle"||e.state==="loading"?y.jsx(MF,{children:"Loading preferences…"}):e.state==="failed"?y.jsx(LF,{children:"Failed to load preferences."}):y.jsx(PF,{alertPreferences:e.data},e.data.lastUpdated)},UF=e=>{if(!e)return"Unknown device";const t=$F(e),n=zF(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},$F=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},zF=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},BF=R.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,HF=R.li`
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
`,FF=R.span`
  font-size: 20px;
  flex-shrink: 0;
`,qF=R.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,VF=R.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,GF=R.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,YF=R.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,WF=R.button`
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
`,QF=R.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,KF=R.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,XF=R.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,ZF=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",JF=E.memo(({deviceToken:e,device:t,isCurrentDevice:n,onDelete:i})=>{const o=E.useMemo(()=>{const f=new Date(t.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...f?{}:{year:"numeric"}}).format(t.timestamp)},[t.timestamp]),l=UF(t.userAgent);return y.jsxs(HF,{children:[y.jsx(FF,{children:ZF(t.userAgent)}),y.jsxs(qF,{children:[y.jsxs(VF,{children:[l,n&&y.jsx(GF,{children:"This device"})]}),y.jsxs(YF,{children:["Last active ",o]})]}),y.jsx(WF,{type:"button",onClick:()=>i(e),"aria-label":`Remove ${l}`,children:"Remove"})]})}),eq=({devices:e})=>{const n=E.useContext(vu).token,i=et(yu),o=E.useCallback(l=>{i&&_I(i,l).catch(console.error)},[i]);return e.length===0?y.jsx(QF,{children:"No devices registered for push notifications yet."}):y.jsx(BF,{children:e.map(([l,u])=>y.jsx(JF,{deviceToken:l,device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:o},l))})},tq=()=>{const e=E.useContext(OD),t=E.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?y.jsx(KF,{children:"Loading devices…"}):e.state==="failed"?y.jsx(XF,{children:"Failed to load devices. Please try again."}):y.jsx(eq,{devices:t})},nq=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await gI(ir(n,De.PATHS.alert(e,t)))},TT=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,rq=(e,t)=>{const n=TT(e,"Any Class","Disciplines"),i=TT(t,"Any Instructor","Instructors");return`${n} with ${i}`},iq=R.li`
  ${Ti}
  padding: 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Te`
    padding: 12px;
  `}
`,sq=R.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Te`
    flex-direction: column;
    gap: 8px;
  `}
`,oq=R.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,aq=R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,lq=R.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,cq=R.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?e.theme.colors.status.free.bg:e.$status==="waitlist"?e.theme.colors.status.waitlist.bg:`${e.theme.colors.error}20`};
  color: ${e=>e.$status==="free"?e.theme.colors.status.free.text:e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.error};
`,uq=R.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,dq=R.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,fq=R.span`
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
`,hq=R.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Te`
    align-self: flex-end;
  `}
`,Df=R.button`
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
`,pq=R(Df)`
  &:hover {
    border-color: ${e=>e.theme.colors.error};
    color: ${e=>e.theme.colors.error};
  }
`,mq=R.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,gq={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},yq=e=>gq[e]||{label:e,title:""},vq=E.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=xs(),o=et(yu),{data:l}=_b(e.studioId),{data:u}=vb(e.studioId),f=E.useMemo(()=>{const w=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",...w?{}:{year:"numeric"}}).format(e.created)},[e.created]),p=E.useMemo(()=>new Map(l?.map(b=>[b.id,b.name])),[l]),h=E.useMemo(()=>new Map(u?.map(b=>[b.id,b.name])),[u]),g=E.useMemo(()=>{if(e.name)return e.name;const b=De.isNotEmpty(e.instructors)&&l?e.instructors.map(I=>p.get(I)).filter(I=>!!I):null,w=De.isNotEmpty(e.disciplines)&&u?e.disciplines.map(I=>h.get(I)).filter(I=>!!I):null;return rq(w,b)},[e.name,e.instructors,e.disciplines,l,u,p,h]),v=De.STUDIOS[e.studioId]?.location||e.studioId||"No studio",_=yq(e.maxStatus);return y.jsx(iq,{children:y.jsxs(sq,{children:[y.jsxs(oq,{children:[y.jsxs(aq,{children:[y.jsx(lq,{children:g}),y.jsx(cq,{$status:e.maxStatus,title:_.title,children:_.label})]}),y.jsx(uq,{children:v}),y.jsx(dq,{children:ls.map((b,w)=>y.jsx(fq,{$active:!!e.timeRanges[w],title:e.timeRanges[w]?`${b}: monitoring enabled`:`${b}: not monitored`,children:b.charAt(0)},b))}),y.jsxs(mq,{children:["Created ",f]})]}),y.jsxs(hq,{children:[y.jsx(Df,{type:"button",onClick:()=>i(H$(e.id)),"aria-label":"Test alert",children:"Test"}),y.jsx(Df,{type:"button",onClick:()=>n(e),"aria-label":"Edit alert",children:"Edit"}),y.jsx(Df,{type:"button",onClick:()=>t(e),"aria-label":"Duplicate alert",children:"Duplicate"}),y.jsx(pq,{type:"button",onClick:()=>o&&nq(o,e.id),"aria-label":"Delete alert",children:"Delete"})]})]})})}),_q=R.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,bq=({alerts:e,onDuplicate:t,onEdit:n})=>y.jsx(_q,{children:e.map(i=>y.jsx(vq,{alert:i,onDuplicate:t,onEdit:n},i.id))}),Sq=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,wq=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,xq=R.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,Eq=R.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,Tq=R.button`
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
`,Cq=R.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,Rq=R.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,Aq=R.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
`,Iq=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=E.useContext(fb),o=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return y.jsxs(y.Fragment,{children:[y.jsxs(Sq,{children:[y.jsxs(wq,{children:[y.jsx(xq,{children:"Alerts"}),y.jsx(Eq,{children:o?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!o&&!l&&y.jsx(Tq,{type:"button",onClick:e,children:"+ New alert"})]}),y.jsxs(Cq,{children:[o&&y.jsx(Rq,{children:"Loading…"}),l&&y.jsx(Aq,{children:"Failed to load your alerts. Please refresh and try again."}),!o&&!l&&u.length===0&&y.jsx(Nq,{onAdd:e}),!o&&!l&&u.length>0&&y.jsx(bq,{alerts:u,onEdit:t,onDuplicate:n})]})]})},Dq=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,Oq=R.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,kq=R.button`
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
`,Nq=({onAdd:e})=>y.jsxs(Dq,{children:[y.jsx(Oq,{children:"Create your first alert to get notified when classes become available."}),y.jsx(kq,{type:"button",onClick:e,children:"Create an alert"})]}),Mq=R.button`
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
`;R.button`
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
`;const Lq=R.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,Pq=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),wy=R(Lq)`
  margin-bottom: 1em;
`,jq=R(Mq)`
  margin-top: 1em;
`,CT=R.h2`
  color: ${e=>e.theme.colors.accent};
`,Uq=()=>{const[e,t]=E.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=E.useContext(vu),i=Pq(),o=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=E.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Nr(u)})},[n]);return i&&!o?y.jsxs(wy,{children:[y.jsx(CT,{children:"Installation Required"}),y.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?y.jsxs(wy,{children:[y.jsx(CT,{children:"Unsupported Browser"}),y.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?y.jsxs(wy,{children:[y.jsx("h2",{children:"Grant notification permissions"}),y.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),y.jsx(jq,{type:"button",onClick:l,children:"Grant Permission"})]}):null},$q=R.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    gap: 16px;
  `}
`,xy=R.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,RT=R.div`
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,AT=R.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,IT=R.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,DT=R.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,zq=()=>{const e=xs();return y.jsxs($q,{children:[y.jsx(xy,{children:y.jsx(Iq,{onAdd:()=>{e(nt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(nt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(nt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),y.jsxs(xy,{children:[y.jsxs(RT,{children:[y.jsx(AT,{children:"Preferences"}),y.jsx(IT,{children:"Control how often you receive alert notifications."})]}),y.jsx(DT,{children:y.jsx(jF,{})})]}),y.jsxs(xy,{children:[y.jsxs(RT,{children:[y.jsx(AT,{children:"Devices"}),y.jsx(IT,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),y.jsxs(DT,{children:[y.jsx(Uq,{}),y.jsx(tq,{})]})]})]})},Bq=R.button.attrs({"aria-label":"Close",type:"button"})`
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
`,Hq=()=>{const e=et(i=>i.filters.selectedBookableStatuses),t=Mn(),n=E.useCallback(i=>{t(X7(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},Fq=R.button`
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
`,qq=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,Vq=R.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,up=({label:e,onReset:t,children:n})=>y.jsxs(qq,{children:[y.jsx(Vq,{children:e}),t&&y.jsx(Fq,{type:"button",onClick:t,children:"Reset"}),n]}),Gq=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,Yq=R.button`
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
`,Wq=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=Hq(),n=Gv(),i=[{label:"Free",status:"free",color:n.colors.status.free.text},{label:"Waitlist",status:"waitlist",color:n.colors.status.waitlist.text},{label:"Full",status:"full",color:n.colors.status.full.text}];return y.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[y.jsx("legend",{style:{padding:0,width:"100%"},children:y.jsx(up,{label:"Status"})}),y.jsx(Gq,{children:i.map(o=>{const l=e.includes(o.status);return y.jsx(Yq,{type:"button",$active:l,$color:o.color,onClick:()=>t(o.status),"aria-pressed":l,children:o.label},o.status)})})]})},Qq=()=>{const e=et(i=>i.filters.selectedDisciplines),t=Mn(),n=E.useCallback(i=>{t(eF(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},ND=R.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,MD=R.li`
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
`,LD=R.span`
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
`,PD=R.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,Sh=R.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,Kq=({discipline:e,checked:t,onClick:n})=>y.jsxs(MD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[y.jsx(LD,{$checked:t}),y.jsx(gh,{discipline:e,size:24}),y.jsx(PD,{children:e.name})]}),Xq=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i}=vb(e),{selectedDisciplines:o,toggleDiscipline:l}=Qq(),u=Mn(),f=E.useRef(o);return E.useEffect(()=>{const p=f.current;if(!t||p.length===0)return;const h=new Set(t.map(v=>v.id)),g=p.filter(v=>h.has(v));g.length<p.length&&u(tF(g))},[t,u]),i&&!n?y.jsx(Sh,{children:"Failed to load disciplines"}):!t||n?y.jsx(Sh,{children:"Loading…"}):y.jsx(ND,{children:t.map((p,h)=>y.jsx(Kq,{discipline:p,checked:o.includes(p.id),onClick:()=>l(p.id)},h))})},Zq=()=>{const e=et(n=>n.filters.selectedDisciplines.length>0),t=Mn();return y.jsxs("div",{children:[y.jsx(up,{label:"Disciplines",onReset:e?()=>t(nF()):void 0}),y.jsx(Xq,{})]})},Jq=()=>{const e=et(i=>i.filters.selectedInstructors),t=Mn(),n=E.useCallback(i=>{t(Z7(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},eV=({instructor:e,checked:t,onClick:n})=>y.jsxs(MD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[y.jsx(LD,{$checked:t}),y.jsx(hb,{instructor:e,size:28}),y.jsx(PD,{children:e.name})]}),tV=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i}=_b(e),{selectedInstructors:o,toggleInstructor:l}=Jq();return i&&!n?y.jsx(Sh,{children:"Failed to load instructors"}):!t||n?y.jsx(Sh,{children:"Loading…"}):y.jsx(ND,{children:t.map((u,f)=>y.jsx(eV,{instructor:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},nV=()=>{const e=et(n=>n.filters.selectedInstructors.length>0),t=Mn();return y.jsxs("div",{children:[y.jsx(up,{label:"Instructors",onReset:e?()=>t(J7()):void 0}),y.jsx(tV,{})]})},rV=Object.entries(De.STUDIOS).map(([e,t])=>({id:e,label:t.location})),iV=R.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,sV=R.label`
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
`,oV=R.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,aV=R.span`
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
`,lV=R.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,cV=()=>{const e=Mn(),t=et(Do);return y.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[y.jsx("legend",{style:{padding:0,width:"100%"},children:y.jsx(up,{label:"Studio"})}),y.jsx(iV,{children:rV.map(n=>{const i=t===n.id;return y.jsxs(sV,{$selected:i,htmlFor:`studio-${n.id}`,children:[y.jsx(oV,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(ph(n.id))}}),y.jsx(aV,{$selected:i}),y.jsx(lV,{children:n.label})]},n.id)})})]})},uV=R.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,dV=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${iD`
    display: flex;
  `}
`,fV=R.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,hV=R(Bq)`
  display: none;

  ${iD`
    display: block;
  `}
`,pV=R.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,ff=R.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,mV=({onClose:e})=>y.jsxs(uV,{children:[y.jsxs(dV,{children:[y.jsx(fV,{children:"Filters"}),y.jsx(hV,{onClick:()=>e()})]}),y.jsxs(pV,{children:[y.jsx(ff,{children:y.jsx(cV,{})}),y.jsx(ff,{children:y.jsx(Wq,{})}),y.jsx(ff,{children:y.jsx(Zq,{})}),y.jsx(ff,{children:y.jsx(nV,{})})]})]}),gV=()=>{const e=et(Do),{refetch:t}=_D(e);return{refresh:E.useCallback(async()=>{await t()},[t])}},OT=150,kT=60,yV=()=>document.documentElement.scrollTop||document.body.scrollTop,vV=({refresh:e})=>{const t=E.useRef(null),n=E.useRef(null),i=E.useRef(e);E.useLayoutEffect(()=>{i.current=e});const o=E.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return E.useEffect(()=>{if(!o)return;let l=0,u=!1,f=!1,p=!1;const h=w=>{const I=n.current;I&&(I.style.transition=w?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",I.style.transform="",I.style.opacity="0")},g=w=>{l=w.touches[0].clientY,u=!1,f=!1},v=w=>{if(p||yV()>0)return;const I=w.touches[0].clientY-l;if(I<=0){u&&(u=!1,f=!1,h(!1));return}u=!0,f=I>=OT;const T=Math.min(I/OT,1),O=kT*(1-Math.pow(1-T,2)),M=Math.pow(T,.5),C=Math.floor(T*270),D=n.current;D&&(D.style.transition="none",D.style.transform=`translateY(${O}px) rotate(${C}deg)`,D.style.opacity=String(Math.min(M,1)))},_=()=>{if(u)if(u=!1,f&&!p){f=!1,p=!0;const w=n.current;w&&(w.classList.add("animate"),w.style.transition="none",w.style.transform=`translateY(${kT}px)`,w.style.opacity="1");let I=!1;const T=()=>{if(I)return;I=!0,p=!1;const M=n.current;M&&(M.classList.remove("animate"),h(!0))},O=setTimeout(T,1e4);i.current().finally(()=>{clearTimeout(O),T()})}else f=!1,h(!0)},b=()=>{u=!1,f=!1,h(!1)};return document.addEventListener("touchstart",g,{passive:!0}),document.addEventListener("touchmove",v,{passive:!0}),document.addEventListener("touchend",_,{passive:!0}),document.addEventListener("touchcancel",b,{passive:!0}),()=>{document.removeEventListener("touchstart",g),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",_),document.removeEventListener("touchcancel",b)}},[o]),{swipeRef:t,spinnerRef:n}},_V=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,bV=e=>e.filters.selectedBookableStatuses,SV=e=>e.filters.selectedDisciplines,wV=e=>e.filters.selectedInstructors,xV=(e,t)=>t,EV=xi([bV,SV,wV,xV],(e,t,n,i)=>i.filter(o=>e.includes(o.status)).filter(o=>n.length>0?n.some(l=>l===o.instructor.id):!0).filter(o=>t.length>0?t.includes(o.discipline.id):!0)),jD=xi([Do],e=>{if(e)return De.STUDIOS[e]}),TV=xi([EV,jD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let o=1,l=Va(e[0].start,n,!0),u=[e[0]];for(;o<e.length;){const f=e[o],p=Va(f.start,n,!0);p===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=p,u=[f]),o++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),NT={free:{label:"Book"},waitlist:{label:"Waitlist"},full:{label:"Full"}},CV=R.a`
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
`,RV=R.div`
  flex-shrink: 0;
  width: 84px;
  ${Te`
    width: 70px;
  `}
`,AV=R.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Te`
    font-size: 13px;
  `}
`,IV=R.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Te`
    font-size: 11px;
  `}
`,DV=R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Te`
    display: none;
  `}
`,OV=R.div`
  flex: 1;
  min-width: 0;
`,kV=R.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Te`
    font-size: 13px;
  `}
`,NV=R.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Te`
    font-size: 12px;
  `}
`,MV=R.span`
  color: ${e=>e.theme.borderColor};
`,LV=R.div`
  display: none;
  ${Te`
    display: flex;
    align-items: center;
  `}
`,PV=R.button`
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
`,jV=E.memo(({clazz:e})=>{const t=et(jD),n=e.status,i=n==="free"||n==="waitlist",o=E.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(Xv("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=E.useMemo(()=>To(e.start,t?.timezone),[e.start,t?.timezone]),u=NT[n]??NT.full;return y.jsxs(CV,{$status:n,$interactive:i,href:o,target:"_blank","aria-label":`${u.label} ${e.name} at ${l}`,children:[y.jsxs(RV,{children:[y.jsx(AV,{children:l}),y.jsxs(IV,{children:[e.duration/60," min"]})]}),y.jsxs(DV,{children:[y.jsx(hb,{instructor:e.instructor,size:44}),y.jsx(gh,{discipline:e.discipline,size:36})]}),y.jsxs(OV,{children:[y.jsx(kV,{children:e.name}),y.jsxs(NV,{children:[e.instructor.name,y.jsx(MV,{children:"·"}),e.discipline.name,y.jsx(LV,{children:y.jsx(gh,{discipline:e.discipline,size:20})})]})]}),y.jsx(PV,{$status:n,disabled:!i,tabIndex:-1,children:u.label})]})}),UV=R.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,$V=R.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,zV=R.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,BV=R.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,MT=R.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,HV=R.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,FV=R.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,LT=R.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,qV=({classes:e,fulfilledTimeStamp:t})=>{const n=et(u=>TV(u,e)),i=et(_V),o=et(u=>u.filters.selectedBookableStatuses.includes("free")),l=E.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?y.jsxs(HV,{children:[y.jsx(FV,{children:"No classes found"}),i&&y.jsx(LT,{children:"Try resetting your filters or selecting more options in the sidebar."}),o&&!i&&y.jsx(LT,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):y.jsx(UV,{children:n.map((u,f)=>y.jsxs($V,{children:[y.jsxs(zV,{children:[y.jsx(BV,{children:u.formattedDate}),f===0&&l&&y.jsxs(MT,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&y.jsx(MT,{children:"All times in studio timezone"})]}),u.classes.map((p,h)=>y.jsx(jV,{clazz:p},h))]},f))})},PT=R.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,VV=R.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,GV=R.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  margin: 0 0 6px;
`,YV=R.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,WV=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:o}=_D(e,{refetchOnMountOrArgChange:!0});return i&&!n?y.jsxs(PT,{children:[y.jsx(GV,{children:"Failed to load classes"}),y.jsx(YV,{children:G9(i)})]}):!t||n?y.jsx(PT,{children:y.jsx(VV,{children:"Loading classes…"})}):y.jsx(qV,{classes:t,fulfilledTimeStamp:o})},QV=R.div``,Av=300,KV=R.aside`
  max-width: 100%;
  width: ${Av}px;
  top: calc(${J_}px + env(safe-area-inset-top, 0px));
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
    left: ${e=>e.$toggleVisible?0:-Av}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,XV=R.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  position: relative;
  margin-left: ${Av}px;

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
`,hf=40,ZV=R.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,JV=R.div`
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
`,eG=R.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,tG=R.button`
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
`,nG=()=>y.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:y.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),rG=()=>{const{refresh:e}=gV(),{swipeRef:t,spinnerRef:n}=vV({refresh:e}),[i,o]=E.useState(!1);return y.jsx(hs,{children:y.jsxs(QV,{children:[y.jsx(KV,{$toggleVisible:i,children:y.jsx(mV,{onClose:()=>{o(!1)}})}),y.jsxs(XV,{$toggleVisible:i,onClick:()=>{o(!1)},ref:t,children:[y.jsx(ZV,{children:y.jsxs(JV,{ref:n,children:[y.jsx("div",{}),y.jsx("div",{}),y.jsx("div",{})]})}),y.jsx(eG,{children:y.jsxs(tG,{type:"button",onClick:l=>{o(!0),l.stopPropagation()},children:[y.jsx(nG,{}),"Filters"]})}),y.jsx(WV,{})]})]})})},iG=({children:e})=>{const t=et(el),n=et(eb);return t.state!=="fulfilled"?null:n?y.jsx(y.Fragment,{children:e}):y.jsx(jv,{to:nt.CLASS_LIST,replace:!0})},jT=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},sG=R.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,oG=R.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,aG=R.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,UT=R.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,$T=R.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,zT=R.input`
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
`,lG=R.button`
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
`,cG=R.button`
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
`,uG=R.div`
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
`,dG=R.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.error};
`,fG=R.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,hG=R.button`
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
`,pG=()=>{const e=xs(),[t,n]=E.useState(!1),[i,o]=E.useState(""),[l,u]=E.useState(!1),[f,p]=E.useState(""),[h,g]=E.useState(""),v=E.useCallback(async b=>{if(b.preventDefault(),!(!ui||!f||!h)){n(!0),o("");try{l?await $z(ui,f,h):await zz(ui,f,h),e(nt.CLASS_LIST)}catch(w){console.error("Email auth error:",w);const I=w&&typeof w=="object"&&"code"in w?jT(w):"Authentication failed";o(I),Nr(w)}finally{n(!1)}}},[f,h,l,e]),_=E.useCallback(async()=>{if(ui){n(!0),o("");try{const b=new ci;await c8(ui,b),e(nt.CLASS_LIST)}catch(b){console.error("Google sign-in error:",b);const w=b&&typeof b=="object"&&"code"in b?jT(b):"Google sign-in failed";o(w),Nr(b)}finally{n(!1)}}},[e]);return y.jsxs("div",{children:[y.jsx(sG,{children:l?"Create account":"Sign in"}),y.jsx(oG,{children:"Set alerts, persist filters across devices, and access beta features."}),y.jsxs(aG,{onSubmit:v,children:[y.jsxs(UT,{children:[y.jsx($T,{htmlFor:"signin-email",children:"Email"}),y.jsx(zT,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:b=>p(b.target.value),required:!0,disabled:t})]}),y.jsxs(UT,{children:[y.jsx($T,{htmlFor:"signin-password",children:"Password"}),y.jsx(zT,{id:"signin-password",type:"password",placeholder:"••••••••",value:h,onChange:b=>g(b.target.value),required:!0,disabled:t})]}),i&&y.jsx(dG,{role:"alert",children:i}),y.jsx(lG,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),y.jsx(uG,{style:{marginTop:20,marginBottom:16},children:"or"}),y.jsx(cG,{type:"button",onClick:_,disabled:t,children:"Continue with Google"}),y.jsxs(fG,{children:[l?"Already have an account?":"Don't have an account?"," ",y.jsx(hG,{type:"button",onClick:()=>{u(!l),o("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},mG=xi([el],e=>e.state==="fulfilled"&&!!e.data),gG=R.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Te`
    padding: 16px 12px;
  `}
`,yG=R.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Te`
    padding: 24px 20px;
  `}
`,vG=()=>et(mG)?y.jsx(jv,{to:nt.CLASS_LIST}):y.jsx(hs,{children:y.jsx(gG,{children:y.jsx(yG,{children:y.jsx(pG,{})})})});function _G(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function bG(e=14){const[t,n]=E.useState({state:"idle"});return E.useEffect(()=>{if(!wn){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),vI(ir(wn,"metrics")).then(i=>{const o=i.val()??{},u=_G(e).map(f=>{const p=o[f]??{},h=p.diffs??{},g={};for(const[_,b]of Object.entries(h))g[_]={added:b.added??0,changed:b.changed??0,removed:b.removed??0};const v=p.notifications??{};return{date:f,diffs:g,notifications:{sent:v.sent??0,failed:v.failed??0,usersReached:v.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}const Ey=R.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Te`
    padding: 20px 16px;
  `}
`,Ty=R.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,BT=R.section`
  margin-bottom: 40px;
`,HT=R.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,SG=R.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${Te`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`,ya=R.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 20px;
`,va=R.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 4px;
`,_a=R.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
`,FT=R.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,wh=1e3,Of=140,xh=12,UD=4,$D=Of-xh-UD;function vc(e,t){return t<=1?wh/2:e/(t-1)*wh}function Cy(e,t){return xh+$D*(1-e/t)}const wG=[.25,.5,.75],xG=R.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 16px 12px;
`,EG=R.svg`
  display: block;
  width: 100%;
  height: 140px;
  /* currentColor is used by grid lines so they inherit the theme secondary color */
  color: ${e=>e.theme.colors.secondary};
`,TG=R.div`
  display: flex;
  margin-top: 6px;
`,CG=R.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  overflow: hidden;
`,RG=R.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,AG=R.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,IG=R.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function DG(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function OG({days:e,legend:t}){return y.jsxs(y.Fragment,{children:[y.jsx(TG,{children:e.map(n=>y.jsx(CG,{children:DG(n.date)},n.date))}),y.jsx(RG,{children:t.map(n=>y.jsxs(AG,{children:[y.jsx(IG,{$color:n.color}),n.label]},n.label))})]})}const kG=R.div`
  position: relative;
`,NG=R.div`
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
`,MG=R.div`
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,LG=R.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.6;
`,PG=R.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,jG=R.span`
  margin-left: auto;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,UG=R.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$color};
  border: 2px solid ${e=>e.theme.colors.mainSurface};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;function qT({days:e,seriesForDay:t,legend:n}){const i=e.length,[o,l]=E.useState(null),u=e.map(t),f=Math.max(...u.flatMap(_=>_.map(b=>b.value)),1),p=u[0].length,h=Cy(0,f).toFixed(1);function g(_,b){const{left:w,width:I}=b.getBoundingClientRect(),T=(_-w)/I;return Math.max(0,Math.min(i-1,Math.round(T*(i-1))))}const v=o!==null?o/(i-1)*100:null;return y.jsxs(xG,{children:[y.jsxs(kG,{children:[o!==null&&v!==null&&y.jsxs(y.Fragment,{children:[y.jsxs(NG,{$pct:v,children:[y.jsx(MG,{children:e[o].date}),u[o].map(_=>y.jsxs(LG,{children:[y.jsx(PG,{$color:_.color}),_.label,y.jsx(jG,{children:_.value})]},_.label))]}),u[o].map((_,b)=>y.jsx(UG,{$color:_.color,style:{left:`${v}%`,top:`${Cy(_.value,f)/Of*100}%`}},b))]}),y.jsxs(EG,{viewBox:`0 0 ${wh} ${Of}`,preserveAspectRatio:"none","aria-hidden":"true",style:{cursor:"crosshair",display:"block"},onMouseMove:_=>l(g(_.clientX,_.currentTarget)),onMouseLeave:()=>l(null),onTouchStart:_=>l(g(_.touches[0].clientX,_.currentTarget)),onTouchMove:_=>l(g(_.touches[0].clientX,_.currentTarget)),onTouchEnd:()=>l(null),children:[wG.map(_=>{const b=(xh+$D*(1-_)).toFixed(1);return y.jsx("line",{x1:0,y1:b,x2:wh,y2:b,stroke:"currentColor",strokeOpacity:.1,strokeWidth:1,vectorEffect:"non-scaling-stroke"},_)}),o!==null&&y.jsx("line",{x1:vc(o,i).toFixed(1),y1:xh,x2:vc(o,i).toFixed(1),y2:Of-UD,stroke:"currentColor",strokeOpacity:.2,strokeWidth:1,vectorEffect:"non-scaling-stroke"}),Array.from({length:p},(_,b)=>{const w=u[0][b].color,T=u.map((M,C)=>({x:vc(C,i),y:Cy(M[b].value,f)})).map(({x:M,y:C},D)=>`${D===0?"M":"L"}${M.toFixed(1)},${C.toFixed(1)}`).join(" "),O=[T,`L${vc(i-1,i).toFixed(1)},${h}`,`L${vc(0,i).toFixed(1)},${h}`,"Z"].join(" ");return y.jsxs("g",{children:[y.jsx("path",{d:O,fill:w,fillOpacity:.12}),y.jsx("path",{d:T,fill:"none",stroke:w,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]},b)})]})]}),y.jsx(OG,{days:e,legend:n})]})}const Yn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},$G=()=>{const e=bG(14);if(e.state==="idle"||e.state==="loading")return y.jsx(hs,{children:y.jsxs(Ey,{children:[y.jsx(Ty,{children:"Stats"}),y.jsx(FT,{children:"Loading…"})]})});if(e.state==="failed")return y.jsx(hs,{children:y.jsxs(Ey,{children:[y.jsx(Ty,{children:"Stats"}),y.jsxs(FT,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const t=e.data,n=t.reduce((o,l)=>{o.sent+=l.notifications.sent,o.failed+=l.notifications.failed,o.usersReached+=l.notifications.usersReached;for(const u of Object.values(l.diffs))o.added+=u.added,o.changed+=u.changed,o.removed+=u.removed;return o},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),i=[...new Set(t.flatMap(o=>Object.keys(o.diffs)))];return y.jsx(hs,{children:y.jsxs(Ey,{children:[y.jsx(Ty,{children:"Stats"}),y.jsxs(SG,{children:[y.jsxs(ya,{children:[y.jsx(va,{children:"Notifications sent (14d)"}),y.jsx(_a,{children:n.sent.toLocaleString()})]}),y.jsxs(ya,{children:[y.jsx(va,{children:"Users reached (14d)"}),y.jsx(_a,{children:n.usersReached.toLocaleString()})]}),y.jsxs(ya,{children:[y.jsx(va,{children:"Delivery failures (14d)"}),y.jsx(_a,{children:n.failed.toLocaleString()})]}),y.jsxs(ya,{children:[y.jsx(va,{children:"Classes added (14d)"}),y.jsx(_a,{children:n.added.toLocaleString()})]}),y.jsxs(ya,{children:[y.jsx(va,{children:"Classes changed (14d)"}),y.jsx(_a,{children:n.changed.toLocaleString()})]}),y.jsxs(ya,{children:[y.jsx(va,{children:"Classes removed (14d)"}),y.jsx(_a,{children:n.removed.toLocaleString()})]})]}),y.jsxs(BT,{children:[y.jsx(HT,{children:"Push notifications (14 days)"}),y.jsx(qT,{days:t,seriesForDay:o=>[{value:o.notifications.sent,color:Yn.sent,label:"Sent"},{value:o.notifications.failed,color:Yn.failed,label:"Failed"},{value:o.notifications.usersReached,color:Yn.usersReached,label:"Users reached"}],legend:[{color:Yn.sent,label:"Sent"},{color:Yn.failed,label:"Failed"},{color:Yn.usersReached,label:"Users reached"}]})]}),i.map(o=>y.jsxs(BT,{children:[y.jsxs(HT,{children:["Schedule changes — ",De.STUDIOS[o]?.location??o," (14 days)"]}),y.jsx(qT,{days:t,seriesForDay:l=>{const u=l.diffs[o]??{added:0,changed:0,removed:0};return[{value:u.added,color:Yn.added,label:"Added"},{value:u.changed,color:Yn.changed,label:"Changed"},{value:u.removed,color:Yn.removed,label:"Removed"}]},legend:[{color:Yn.added,label:"Added"},{color:Yn.changed,label:"Changed"},{color:Yn.removed,label:"Removed"}]})]},o))]})})},zG=R.div`
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
`,BG=R.div`
  font-size: 48px;
  margin-bottom: 20px;
`,HG=R.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 12px;
`,FG=R.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 28px;
`,qG=R.div`
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
`,VT=R.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${e=>e.theme.colors.secondary};
`,GT=R.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,VG=R.a`
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
`,GG=R.p`
  margin: 16px 0 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`;function YG(e,t){if(!e)return null;try{const n=De.STUDIOS[t]?.timezone;return new Date(e).toLocaleString("en-US",{timeZone:n??"UTC",weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"})}catch{return null}}const WG=()=>{const[e]=I2(),t=e.get("studioId")??"",n=e.get("startsAt")??"",i=e.get("waitingCount"),o=De.STUDIOS[t],l=YG(n,t),u=i!==null?parseInt(i,10):null;return y.jsx(hs,{children:y.jsxs(zG,{children:[y.jsx(BG,{children:"📬"}),y.jsx(HG,{children:"Waitlist count changed"}),y.jsxs(FG,{children:["The number of people on the waitlist just changed",u!==null?` — there ${u===1?"is now 1 person":`are now ${u} people`} ahead`:"",". If you joined this waitlist, check your email — Peloton sends a message when it's your turn, and you'll have a 2-hour window to accept."]}),(l||o)&&y.jsxs(qG,{children:[o&&y.jsxs(y.Fragment,{children:[y.jsx(VT,{children:"Studio"}),y.jsx(GT,{children:o.location})]}),l&&y.jsxs(y.Fragment,{children:[y.jsx(VT,{style:{marginTop:o?8:0},children:"Class time"}),y.jsx(GT,{children:l})]})]}),y.jsx(VG,{href:"mailto:",children:"Open Mail App"}),y.jsx(GG,{children:"Opens your device's default mail app."})]})})},QG=x2(JM(y.jsxs(Wn,{children:[y.jsx(Wn,{path:nt.CLASS_LIST,element:y.jsx(rG,{})}),y.jsxs(Wn,{path:nt.ALERTS,element:y.jsx(TF,{}),children:[y.jsx(Wn,{index:!0,element:y.jsx(zq,{})}),y.jsx(Wn,{path:"edit",element:y.jsx(U7,{})}),y.jsx(Wn,{path:":alertId/test",element:y.jsx(CH,{})})]}),y.jsx(Wn,{path:nt.WAITLIST_ALERT,element:y.jsx(WG,{})}),y.jsx(Wn,{path:nt.SIGN_IN,element:y.jsx(vG,{})}),y.jsx(Wn,{path:nt.ABOUT,element:y.jsx(qB,{})}),y.jsx(Wn,{path:nt.STATS,element:y.jsx(iG,{children:y.jsx($G,{})})}),y.jsx(Wn,{path:"*",element:y.jsx(jv,{to:nt.CLASS_LIST,replace:!0})})]}))),KG=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),XG=({children:e})=>{const t=Mn();return E.useEffect(()=>{if(t(xT()),!ui)return t(ET()),()=>{};const n=Fz(ui,async i=>{if(t(xT()),i){let o=!1;try{o=(wn?await vI(ir(wn,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(cF(KG(i,o)))}else t(ET())});return()=>n()},[t]),y.jsx(y.Fragment,{children:e})},ZG={mode:"light",borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449",error:"#d93025",hoverSurface:"rgba(0, 0, 0, 0.05)",status:{free:{bg:"#e8f5e9",text:"#2e7d32"},waitlist:{bg:"#fff3e0",text:"#e65100"},full:{text:"#9e9e9e"}}},widths:{tablet:1024,mobile:560}},JG={mode:"dark",borderRadius:"8px",borderColor:"#2e2f45",colors:{main:"#e2e4eb",secondary:"#9b98b0",mainSurface:"#1c1d2e",secondarySurface:"#13141f",accent:"#cb3449",error:"#ef5350",hoverSurface:"rgba(255, 255, 255, 0.08)",status:{free:{bg:"rgba(46, 125, 50, 0.15)",text:"#81c784"},waitlist:{bg:"rgba(230, 81, 0, 0.15)",text:"#ffb74d"},full:{text:"#757575"}}},widths:{tablet:1024,mobile:560}},eY=UL`
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
`,Iv="theme-mode";function tY(){const e=localStorage.getItem(Iv);return e!==null?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function nY(){const[e,t]=E.useState(tY),n=E.useCallback(()=>{t(i=>{const o=!i;return localStorage.setItem(Iv,o?"dark":"light"),o})},[]);return E.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=l=>{localStorage.getItem(Iv)===null&&t(l.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),{isDark:e,toggle:n}}function rY(){const{isDark:e,toggle:t}=nY();return E.useEffect(()=>{const i=new URLSearchParams(window.location.search).get("classUrl");i&&(window.history.replaceState(null,"",window.location.pathname+window.location.hash),window.location.assign(new URL(i,"https://schedule.studio.onepeloton.com").href))},[]),y.jsx(nD.Provider,{value:{isDark:e,toggle:t},children:y.jsxs(LL,{theme:e?JG:ZG,children:[y.jsx(eY,{}),y.jsx(gN,{store:cp,children:y.jsx(XG,{children:y.jsx(B$,{children:y.jsx(P2,{router:QG})})})})]})})}eN.createRoot(document.getElementById("root")).render(y.jsx(E.StrictMode,{children:y.jsx(rY,{})}));
//# sourceMappingURL=index-D0eZrhZb.js.map
