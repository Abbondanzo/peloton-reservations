const Ut=()=>{};var xe={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[n++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[n++],o=t[n++],i=t[n++],c=((s&7)<<18|(a&63)<<12|(o&63)<<6|i&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const a=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|o&63)}}return e.join("")},et={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const a=t[s],o=s+1<t.length,i=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,w=a>>2,g=(a&3)<<4|i>>4;let m=(i&15)<<2|l>>6,R=l&63;c||(R=64,o||(m=64)),r.push(n[w],n[g],n[m],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ze(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const a=n[t.charAt(s++)],i=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,a==null||i==null||l==null||g==null)throw new Ft;const m=a<<2|i>>4;if(r.push(m),l!==64){const R=i<<4&240|l>>2;if(r.push(R),g!==64){const Lt=l<<6&192|g;r.push(Lt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ft extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ht=function(t){const e=Ze(t);return et.encodeByteArray(e,!0)},tt=function(t){return Ht(t).replace(/\./g,"")},qt=function(t){try{return et.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kt=()=>jt().__FIREBASE_DEFAULTS__,Wt=()=>{if(typeof process>"u"||typeof xe>"u")return;const t=xe.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qt(t[1]);return e&&JSON.parse(e)},Gt=()=>{try{return Ut()||Kt()||Wt()||Vt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nt=()=>Gt()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function rt(){try{return typeof indexedDB=="object"}catch{return!1}}function st(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="FirebaseError";class M extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jt,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y.prototype.create)}}class Y{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],o=a?Yt(a,r):"Error",i=`${this.serviceName}: ${o} (${s}).`;return new M(s,i,r)}}function Yt(t,e){return t.replace(Qt,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qt=/\{\$([^}]+)}/g;function le(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const a=t[s],o=e[s];if($e(a)&&$e(o)){if(!le(a,o))return!1}else if(a!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $e(t){return t!==null&&typeof t=="object"}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class A{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(en(e))try{this.getOrInitializeService({instanceIdentifier:v})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=v){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=v){return this.instances.has(e)}getOptions(e=v){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(a);r===i&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zt(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=v){return this.component?this.component.multipleInstances?e:v:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zt(t){return t===v?void 0:t}function en(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));const nn={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},rn=d.INFO,sn={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},an=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class on{constructor(e){this.name=e,this._logLevel=rn,this._logHandler=an,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}const cn=(t,e)=>e.some(n=>t instanceof n);let Oe,Pe;function un(){return Oe||(Oe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ln(){return Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ot=new WeakMap,he=new WeakMap,it=new WeakMap,Z=new WeakMap,be=new WeakMap;function hn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",o)},a=()=>{n(C(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ot.set(n,t)}).catch(()=>{}),be.set(e,t),e}function dn(t){if(he.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",o),t.removeEventListener("abort",o)},a=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",o),t.addEventListener("abort",o)});he.set(t,e)}let de={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return he.get(t);if(e==="objectStoreNames")return t.objectStoreNames||it.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fn(t){de=t(de)}function pn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ee(this),e,...n);return it.set(r,e.sort?e.sort():[e]),C(r)}:ln().includes(t)?function(...e){return t.apply(ee(this),e),C(ot.get(this))}:function(...e){return C(t.apply(ee(this),e))}}function gn(t){return typeof t=="function"?pn(t):(t instanceof IDBTransaction&&dn(t),cn(t,un())?new Proxy(t,de):t)}function C(t){if(t instanceof IDBRequest)return hn(t);if(Z.has(t))return Z.get(t);const e=gn(t);return e!==t&&(Z.set(t,e),be.set(e,t)),e}const ee=t=>be.get(t);function H(t,e,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const o=indexedDB.open(t,e),i=C(o);return r&&o.addEventListener("upgradeneeded",c=>{r(C(o.result),c.oldVersion,c.newVersion,C(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),i.then(c=>{a&&c.addEventListener("close",()=>a()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}function K(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),C(n).then(()=>{})}const mn=["get","getKey","getAll","getAllKeys","count"],wn=["put","add","delete","clear"],te=new Map;function Me(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(te.get(e))return te.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mn.includes(n)))return;const a=async function(o,...i){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),s&&c.done]))[0]};return te.set(e,a),a}fn(t=>({...t,get:(e,n,r)=>Me(e,n)||t.get(e,n,r),has:(e,n)=>!!Me(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yn(t){return t.getComponent()?.type==="VERSION"}const fe="@firebase/app",Le="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new on("@firebase/app"),_n="@firebase/app-compat",En="@firebase/analytics-compat",Cn="@firebase/analytics",Tn="@firebase/app-check-compat",Sn="@firebase/app-check",In="@firebase/auth",Rn="@firebase/auth-compat",vn="@firebase/database",kn="@firebase/data-connect",An="@firebase/database-compat",Nn="@firebase/functions",Dn="@firebase/functions-compat",xn="@firebase/installations",$n="@firebase/installations-compat",On="@firebase/messaging",Pn="@firebase/messaging-compat",Mn="@firebase/performance",Ln="@firebase/performance-compat",Un="@firebase/remote-config",Bn="@firebase/remote-config-compat",Fn="@firebase/storage",Hn="@firebase/storage-compat",qn="@firebase/firestore",jn="@firebase/ai",Kn="@firebase/firestore-compat",Wn="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="[DEFAULT]",Vn={[fe]:"fire-core",[_n]:"fire-core-compat",[Cn]:"fire-analytics",[En]:"fire-analytics-compat",[Sn]:"fire-app-check",[Tn]:"fire-app-check-compat",[In]:"fire-auth",[Rn]:"fire-auth-compat",[vn]:"fire-rtdb",[kn]:"fire-data-connect",[An]:"fire-rtdb-compat",[Nn]:"fire-fn",[Dn]:"fire-fn-compat",[xn]:"fire-iid",[$n]:"fire-iid-compat",[On]:"fire-fcm",[Pn]:"fire-fcm-compat",[Mn]:"fire-perf",[Ln]:"fire-perf-compat",[Un]:"fire-rc",[Bn]:"fire-rc-compat",[Fn]:"fire-gcs",[Hn]:"fire-gcs-compat",[qn]:"fire-fst",[Kn]:"fire-fst-compat",[jn]:"fire-vertex","fire-js":"fire-js",[Wn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=new Map,Gn=new Map,ge=new Map;function Ue(t,e){try{t.container.addComponent(e)}catch(n){T.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function P(t){const e=t.name;if(ge.has(e))return T.debug(`There were multiple attempts to register component ${e}.`),!1;ge.set(e,t);for(const n of W.values())Ue(n,t);for(const n of Gn.values())Ue(n,t);return!0}function ye(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},I=new Y("app","Firebase",zn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new A("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}function ct(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pe,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw I.create("bad-app-name",{appName:String(s)});if(n||(n=nt()),!n)throw I.create("no-options");const a=W.get(s);if(a){if(le(n,a.options)&&le(r,a.config))return a;throw I.create("duplicate-app",{appName:s})}const o=new tn(s);for(const c of ge.values())o.addComponent(c);const i=new Jn(n,r,o);return W.set(s,i),i}function Yn(t=pe){const e=W.get(t);if(!e&&t===pe&&nt())return ct();if(!e)throw I.create("no-app",{appName:t});return e}function $(t,e,n){let r=Vn[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),T.warn(o.join(" "));return}P(new A(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Qn="firebase-heartbeat-database",Xn=1,F="firebase-heartbeat-store";let ne=null;function ut(){return ne||(ne=H(Qn,Xn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(F)}catch(n){console.warn(n)}}}}).catch(t=>{throw I.create("idb-open",{originalErrorMessage:t.message})})),ne}async function Zn(t){try{const n=(await ut()).transaction(F),r=await n.objectStore(F).get(lt(t));return await n.done,r}catch(e){if(e instanceof M)T.warn(e.message);else{const n=I.create("idb-get",{originalErrorMessage:e?.message});T.warn(n.message)}}}async function Be(t,e){try{const r=(await ut()).transaction(F,"readwrite");await r.objectStore(F).put(e,lt(t)),await r.done}catch(n){if(n instanceof M)T.warn(n.message);else{const r=I.create("idb-set",{originalErrorMessage:n?.message});T.warn(r.message)}}}function lt(t){return`${t.name}!${t.options.appId}`}/**
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
 */const er=1024,tr=30;class nr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fe();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>tr){const s=ar(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){T.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fe(),{heartbeatsToSend:n,unsentEntries:r}=rr(this._heartbeatsCache.heartbeats),s=tt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return T.warn(e),""}}}function Fe(){return new Date().toISOString().substring(0,10)}function rr(t,e=er){const n=[];let r=t.slice();for(const s of t){const a=n.find(o=>o.agent===s.agent);if(a){if(a.dates.push(s.date),He(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),He(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rt()?st().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Be(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Be(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function He(t){return tt(JSON.stringify({version:2,heartbeats:t})).length}function ar(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){P(new A("platform-logger",e=>new bn(e),"PRIVATE")),P(new A("heartbeat",e=>new nr(e),"PRIVATE")),$(fe,Le,t),$(fe,Le,"esm2020"),$("fire-js","")}or("");const ht="@firebase/installations",_e="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=1e4,ft=`w:${_e}`,pt="FIS_v2",ir="https://firebaseinstallations.googleapis.com/v1",cr=3600*1e3,ur="installations",lr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},N=new Y(ur,lr,hr);function gt(t){return t instanceof M&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt({projectId:t}){return`${ir}/projects/${t}/installations`}function wt(t){return{token:t.token,requestStatus:2,expiresIn:fr(t.expiresIn),creationTime:Date.now()}}async function bt(t,e){const r=(await e.json()).error;return N.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function dr(t,{refreshToken:e}){const n=yt(t);return n.append("Authorization",pr(e)),n}async function _t(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fr(t){return Number(t.replace("s","000"))}function pr(t){return`${pt} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=mt(t),s=yt(t),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:pt,appId:t.appId,sdkVersion:ft},i={method:"POST",headers:s,body:JSON.stringify(o)},c=await _t(()=>fetch(r,i));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:wt(l.authToken)}}else throw await bt("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=/^[cdef][\w-]{21}$/,me="";function br(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=yr(t);return wr.test(n)?n:me}catch{return me}}function yr(t){return mr(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Map;function Tt(t,e){const n=Q(t);St(n,e),_r(n,e)}function St(t,e){const n=Ct.get(t);if(n)for(const r of n)r(e)}function _r(t,e){const n=Er();n&&n.postMessage({key:t,fid:e}),Cr()}let k=null;function Er(){return!k&&"BroadcastChannel"in self&&(k=new BroadcastChannel("[Firebase] FID Change"),k.onmessage=t=>{St(t.data.key,t.data.fid)}),k}function Cr(){Ct.size===0&&k&&(k.close(),k=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="firebase-installations-database",Sr=1,D="firebase-installations-store";let re=null;function Ee(){return re||(re=H(Tr,Sr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(D)}}})),re}async function V(t,e){const n=Q(t),s=(await Ee()).transaction(D,"readwrite"),a=s.objectStore(D),o=await a.get(n);return await a.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Tt(t,e.fid),e}async function It(t){const e=Q(t),r=(await Ee()).transaction(D,"readwrite");await r.objectStore(D).delete(e),await r.done}async function X(t,e){const n=Q(t),s=(await Ee()).transaction(D,"readwrite"),a=s.objectStore(D),o=await a.get(n),i=e(o);return i===void 0?await a.delete(n):await a.put(i,n),await s.done,i&&(!o||o.fid!==i.fid)&&Tt(t,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t){let e;const n=await X(t.appConfig,r=>{const s=Ir(r),a=Rr(t,s);return e=a.registrationPromise,a.installationEntry});return n.fid===me?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ir(t){const e=t||{fid:br(),registrationStatus:0};return Rt(e)}function Rr(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(N.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vr(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kr(t)}:{installationEntry:e}}async function vr(t,e){try{const n=await gr(t,e);return V(t.appConfig,n)}catch(n){throw gt(n)&&n.customData.serverCode===409?await It(t.appConfig):await V(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kr(t){let e=await qe(t.appConfig);for(;e.registrationStatus===1;)await Et(100),e=await qe(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ce(t);return r||n}return e}function qe(t){return X(t,e=>{if(!e)throw N.create("installation-not-found");return Rt(e)})}function Rt(t){return Ar(t)?{fid:t.fid,registrationStatus:0}:t}function Ar(t){return t.registrationStatus===1&&t.registrationTime+dt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr({appConfig:t,heartbeatServiceProvider:e},n){const r=Dr(t,n),s=dr(t,n),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:ft,appId:t.appId}},i={method:"POST",headers:s,body:JSON.stringify(o)},c=await _t(()=>fetch(r,i));if(c.ok){const l=await c.json();return wt(l)}else throw await bt("Generate Auth Token",c)}function Dr(t,{fid:e}){return`${mt(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t,e=!1){let n;const r=await X(t.appConfig,a=>{if(!vt(a))throw N.create("not-registered");const o=a.authToken;if(!e&&Or(o))return a;if(o.requestStatus===1)return n=xr(t,e),a;{if(!navigator.onLine)throw N.create("app-offline");const i=Mr(a);return n=$r(t,i),i}});return n?await n:r.authToken}async function xr(t,e){let n=await je(t.appConfig);for(;n.authToken.requestStatus===1;)await Et(100),n=await je(t.appConfig);const r=n.authToken;return r.requestStatus===0?Te(t,e):r}function je(t){return X(t,e=>{if(!vt(e))throw N.create("not-registered");const n=e.authToken;return Lr(n)?{...e,authToken:{requestStatus:0}}:e})}async function $r(t,e){try{const n=await Nr(t,e),r={...e,authToken:n};return await V(t.appConfig,r),n}catch(n){if(gt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await It(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await V(t.appConfig,r)}throw n}}function vt(t){return t!==void 0&&t.registrationStatus===2}function Or(t){return t.requestStatus===2&&!Pr(t)}function Pr(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+cr}function Mr(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Lr(t){return t.requestStatus===1&&t.requestTime+dt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ce(e);return r?r.catch(console.error):Te(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e=!1){const n=t;return await Fr(n),(await Te(n,e)).token}async function Fr(t){const{registrationPromise:e}=await Ce(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){if(!t||!t.options)throw se("App Configuration");if(!t.name)throw se("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw se(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function se(t){return N.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="installations",qr="installations-internal",jr=t=>{const e=t.getProvider("app").getImmediate(),n=Hr(e),r=ye(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Kr=t=>{const e=t.getProvider("app").getImmediate(),n=ye(e,kt).getImmediate();return{getId:()=>Ur(n),getToken:s=>Br(n,s)}};function Wr(){P(new A(kt,jr,"PUBLIC")),P(new A(qr,Kr,"PRIVATE"))}Wr();$(ht,_e);$(ht,_e,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Vr="https://fcmregistrations.googleapis.com/v1",Nt="FCM_MSG",Gr="google.c.a.c_id",zr=3,Jr=1;var G;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(G||(G={}));/**
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
 */var z;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(z||(z={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Yr(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let a=0;a<r.length;++a)s[a]=r.charCodeAt(a);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="fcm_token_details_db",Qr=5,Ke="fcm_token_object_Store";async function Xr(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(ae))return null;let e=null;return(await H(ae,Qr,{upgrade:async(r,s,a,o)=>{if(s<2||!r.objectStoreNames.contains(Ke))return;const i=o.objectStore(Ke),c=await i.index("fcmSenderId").get(t);if(await i.clear(),!!c){if(s===2){const l=c;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:l.createTime??Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:y(l.vapidKey)}}}else if(s===3){const l=c;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:y(l.auth),p256dh:y(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:y(l.vapidKey)}}}else if(s===4){const l=c;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:y(l.auth),p256dh:y(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:y(l.vapidKey)}}}}}})).close(),await K(ae),await K("fcm_vapid_details_db"),await K("undefined"),Zr(e)?e:null}function Zr(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="firebase-messaging-database",ts=1,x="firebase-messaging-store";let oe=null;function Se(){return oe||(oe=H(es,ts,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(x)}}})),oe}async function Ie(t){const e=ve(t),r=await(await Se()).transaction(x).objectStore(x).get(e);if(r)return r;{const s=await Xr(t.appConfig.senderId);if(s)return await Re(t,s),s}}async function Re(t,e){const n=ve(t),s=(await Se()).transaction(x,"readwrite");return await s.objectStore(x).put(e,n),await s.done,e}async function ns(t){const e=ve(t),r=(await Se()).transaction(x,"readwrite");await r.objectStore(x).delete(e),await r.done}function ve({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},b=new Y("messaging","Messaging",rs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e){const n=await Ae(t),r=xt(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(ke(t.appConfig),s)).json()}catch(o){throw b.create("token-subscribe-failed",{errorInfo:o?.toString()})}if(a.error){const o=a.error.message;throw b.create("token-subscribe-failed",{errorInfo:o})}if(!a.token)throw b.create("token-subscribe-no-token");return a.token}async function as(t,e){const n=await Ae(t),r=xt(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${ke(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw b.create("token-update-failed",{errorInfo:o?.toString()})}if(a.error){const o=a.error.message;throw b.create("token-update-failed",{errorInfo:o})}if(!a.token)throw b.create("token-update-no-token");return a.token}async function Dt(t,e){const r={method:"DELETE",headers:await Ae(t)};try{const a=await(await fetch(`${ke(t.appConfig)}/${e}`,r)).json();if(a.error){const o=a.error.message;throw b.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw b.create("token-unsubscribe-failed",{errorInfo:s?.toString()})}}function ke({projectId:t}){return`${Vr}/projects/${t}/registrations`}async function Ae({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function xt({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==At&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=10080*60*1e3;async function is(t){const e=await us(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:y(e.getKey("auth")),p256dh:y(e.getKey("p256dh"))},r=await Ie(t.firebaseDependencies);if(r){if(ls(r.subscriptionOptions,n))return Date.now()>=r.createTime+os?cs(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Dt(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ve(t.firebaseDependencies,n)}else return Ve(t.firebaseDependencies,n)}async function We(t){const e=await Ie(t.firebaseDependencies);e&&(await Dt(t.firebaseDependencies,e.token),await ns(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function cs(t,e){try{const n=await as(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await Re(t.firebaseDependencies,r),n}catch(n){throw n}}async function Ve(t,e){const r={token:await ss(t,e),createTime:Date.now(),subscriptionOptions:e};return await Re(t,r),r.token}async function us(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Yr(e)})}function ls(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,a=e.p256dh===t.p256dh;return n&&r&&s&&a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ds(e,t),fs(e,t),ps(e,t),e}function ds(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const a=e.notification.icon;a&&(t.notification.icon=a)}function fs(t,e){e.data&&(t.data=e.data)}function ps(t,e){if(!e.fcmOptions&&!e.notification?.click_action)return;t.fcmOptions={};const n=e.fcmOptions?.link??e.notification?.click_action;n&&(t.fcmOptions.link=n);const r=e.fcmOptions?.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){return typeof t=="object"&&!!t&&Gr in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){return new Promise(e=>{setTimeout(e,t)})}async function ws(t,e){const n=bs(e,await t.firebaseDependencies.installations.getId());ys(t,n,e.productId)}function bs(t,e){const n={};return t.from&&(n.project_number=t.from),t.fcmMessageId&&(n.message_id=t.fcmMessageId),n.instance_id=e,t.notification?n.message_type=G.DISPLAY_NOTIFICATION.toString():n.message_type=G.DATA_MESSAGE.toString(),n.sdk_platform=zr.toString(),n.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(n.collapse_key=t.collapse_key),n.event=Jr.toString(),t.fcmOptions?.analytics_label&&(n.analytics_label=t.fcmOptions?.analytics_label),n}function ys(t,e,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify({messaging_client_event:e}),n&&(r.compliance_data=_s(n)),t.logEvents.push(r)}function _s(t){return{privacy_context:{prequest:{origin_associated_product_id:t}}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){const{newSubscription:n}=t;if(!n){await We(e);return}const r=await Ie(e.firebaseDependencies);await We(e),e.vapidKey=r?.subscriptionOptions?.vapidKey??At,await is(e)}async function Cs(t,e){const n=Is(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&await ws(e,n);const r=await $t();if(vs(r))return ks(r,n);if(n.notification&&await As(Ss(n)),!!e&&e.onBackgroundMessageHandler){const s=hs(n);typeof e.onBackgroundMessageHandler=="function"?await e.onBackgroundMessageHandler(s):e.onBackgroundMessageHandler.next(s)}}async function Ts(t){const e=t.notification?.data?.[Nt];if(e){if(t.action)return}else return;t.stopImmediatePropagation(),t.notification.close();const n=Ns(e);if(!n)return;const r=new URL(n,self.location.href),s=new URL(self.location.origin);if(r.host!==s.host)return;let a=await Rs(r);if(a?a=await a.focus():(a=await self.clients.openWindow(n),await ms(3e3)),!!a)return e.messageType=z.NOTIFICATION_CLICKED,e.isFirebaseMessaging=!0,a.postMessage(e)}function Ss(t){const e={...t.notification};return e.data={[Nt]:t},e}function Is({data:t}){if(!t)return null;try{return t.json()}catch{return null}}async function Rs(t){const e=await $t();for(const n of e){const r=new URL(n.url,self.location.href);if(t.host===r.host)return n}return null}function vs(t){return t.some(e=>e.visibilityState==="visible"&&!e.url.startsWith("chrome-extension://"))}function ks(t,e){e.isFirebaseMessaging=!0,e.messageType=z.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function $t(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function As(t){const{actions:e}=t,{maxActions:n}=Notification;return e&&n&&e.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`),self.registration.showNotification(t.title??"",t)}function Ns(t){const e=t.fcmOptions?.link??t.notification?.click_action;return e||(gs(t.data)?self.location.origin:null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){if(!t||!t.options)throw ie("App Configuration Object");if(!t.name)throw ie("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw ie(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ie(t){return b.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Ds(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=t=>{const e=new xs(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(Cs(n,e))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(Es(n,e))}),self.addEventListener("notificationclick",n=>{n.waitUntil(Ts(n))}),e};function Os(){P(new A("messaging-sw",$s,"PUBLIC"))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(){return rt()&&await st()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e){if(self.document!==void 0)throw b.create("only-available-in-sw");return t.onBackgroundMessageHandler=e,()=>{t.onBackgroundMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t=Yn()){return Ps().then(e=>{if(!e)throw b.create("unsupported-browser")},e=>{throw b.create("indexed-db-unsupported")}),ye(at(t),"messaging-sw").getImmediate()}function Us(t,e){return t=at(t),Ms(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Os();try{self["workbox:core:7.3.0"]&&_()}catch{}const u=(()=>{"__WB_DISABLE_DEV_LOGS"in globalThis||(self.__WB_DISABLE_DEV_LOGS=!1);let t=!1;const e={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b",groupCollapsed:"#3498db",groupEnd:null},n=function(a,o){if(self.__WB_DISABLE_DEV_LOGS)return;if(a==="groupCollapsed"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){console[a](...o);return}const i=[`background: ${e[a]}`,"border-radius: 0.5em","color: white","font-weight: bold","padding: 2px 0.5em"],c=t?[]:["%cworkbox",i.join(";")];console[a](...c,...o),a==="groupCollapsed"&&(t=!0),a==="groupEnd"&&(t=!1)},r={},s=Object.keys(e);for(const a of s){const o=a;r[o]=(...i)=>{n(o,i)}}return r})(),Bs={"invalid-value":({paramName:t,validValueDescription:e,value:n})=>{if(!t||!e)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${t}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(n)}.`},"not-an-array":({moduleName:t,className:e,funcName:n,paramName:r})=>{if(!t||!e||!n||!r)throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${r}' passed into '${t}.${e}.${n}()' must be an array.`},"incorrect-type":({expectedType:t,paramName:e,moduleName:n,className:r,funcName:s})=>{if(!t||!e||!n||!s)throw new Error("Unexpected input to 'incorrect-type' error.");const a=r?`${r}.`:"";return`The parameter '${e}' passed into '${n}.${a}${s}()' must be of type ${t}.`},"incorrect-class":({expectedClassName:t,paramName:e,moduleName:n,className:r,funcName:s,isReturnValueProblem:a})=>{if(!t||!n||!s)throw new Error("Unexpected input to 'incorrect-class' error.");const o=r?`${r}.`:"";return a?`The return value from '${n}.${o}${s}()' must be an instance of class ${t}.`:`The parameter '${e}' passed into '${n}.${o}${s}()' must be an instance of class ${t}.`},"missing-a-method":({expectedMethod:t,paramName:e,moduleName:n,className:r,funcName:s})=>{if(!t||!e||!n||!r||!s)throw new Error("Unexpected input to 'missing-a-method' error.");return`${n}.${r}.${s}() expected the '${e}' parameter to expose a '${t}' method.`},"add-to-cache-list-unexpected-type":({entry:t})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(t)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:t,secondEntry:e})=>{if(!t||!e)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${t} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`},"plugin-error-request-will-fetch":({thrownErrorMessage:t})=>{if(!t)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${t}'.`},"invalid-cache-name":({cacheNameId:t,value:e})=>{if(!t)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return`You must provide a name containing at least one character for setCacheDetails({${t}: '...'}). Received a value of '${JSON.stringify(e)}'`},"unregister-route-but-not-found-with-method":({method:t})=>{if(!t)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return`The route you're trying to unregister was not  previously registered for the method type '${t}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:t})=>`Replaying the background sync queue '${t}' failed.`,"duplicate-queue-name":({name:t})=>`The Queue name '${t}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:t,paramName:e})=>`The '${t}()' method can only be used when the '${e}' is used in the constructor.`,"unsupported-route-type":({moduleName:t,className:e,funcName:n,paramName:r})=>`The supplied '${r}' parameter was an unsupported type. Please check the docs for ${t}.${e}.${n} for valid input types.`,"not-array-of-class":({value:t,expectedClass:e,moduleName:n,className:r,funcName:s,paramName:a})=>`The supplied '${a}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(t)},'. Please check the call to ${n}.${r}.${s}() to fix the issue.`,"max-entries-or-age-required":({moduleName:t,className:e,funcName:n})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${t}.${e}.${n}`,"statuses-or-headers-required":({moduleName:t,className:e,funcName:n})=>`You must define either config.statuses or config.headersin ${t}.${e}.${n}`,"invalid-string":({moduleName:t,funcName:e,paramName:n})=>{if(!n||!t||!e)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${n}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${t}.${e}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:t})=>{if(!t)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${t}"`},"single-range-only":({normalizedRangeHeader:t})=>{if(!t)throw new Error("Unexpected input to 'single-range-only' error.");return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${t}"`},"invalid-range-values":({normalizedRangeHeader:t})=>{if(!t)throw new Error("Unexpected input to 'invalid-range-values' error.");return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${t}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:t,start:e,end:n})=>`The start (${e}) and end (${n}) values in the Range are not satisfiable by the cached response, which is ${t} bytes.`,"attempt-to-cache-non-get-request":({url:t,method:e})=>`Unable to cache '${t}' because it is a '${e}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:t})=>`There was an attempt to cache '${t}' but the response was not defined.`,"no-response":({url:t,error:e})=>{let n=`The strategy could not generate a response for '${t}'.`;return e&&(n+=` The underlying error is ${e}.`),n},"bad-precaching-response":({url:t,status:e})=>`The precaching request for '${t}' failed`+(e?` with an HTTP status of ${e}.`:"."),"non-precached-url":({url:t})=>`createHandlerBoundToURL('${t}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:t})=>`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${t} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:t,url:e})=>`Unable to find a precached response in ${t} for ${e}.`,"cross-origin-copy-response":({origin:t})=>`workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${t}.`,"opaque-streams-source":({type:t})=>{const e=`One of the workbox-streams sources resulted in an '${t}' response.`;return t==="opaqueredirect"?`${e} Please do not use a navigation request that results in a redirect as a source.`:`${e} Please ensure your sources are CORS-enabled.`}},Fs=(t,e={})=>{const n=Bs[t];if(!n)throw new Error(`Unable to find message for code '${t}'.`);return n(e)},Hs=Fs;class h extends Error{constructor(e,n){const r=Hs(e,n);super(r),this.name=e,this.details=n}}const qs=(t,e)=>{if(!Array.isArray(t))throw new h("not-an-array",e)},js=(t,e,n)=>{if(typeof t[e]!=="function")throw n.expectedMethod=e,new h("missing-a-method",n)},Ks=(t,e,n)=>{if(typeof t!==e)throw n.expectedType=e,new h("incorrect-type",n)},Ws=(t,e,n)=>{if(!(t instanceof e))throw n.expectedClassName=e.name,new h("incorrect-class",n)},Vs=(t,e,n)=>{if(!e.includes(t))throw n.validValueDescription=`Valid values are ${JSON.stringify(e)}.`,new h("invalid-value",n)},Gs=(t,e,n)=>{const r=new h("not-array-of-class",n);if(!Array.isArray(t))throw r;for(const s of t)if(!(s instanceof e))throw r},f={hasMethod:js,isArray:qs,isInstance:Ws,isOneOf:Vs,isType:Ks,isArrayOfClass:Gs},we=new Set;function zs(t){f.isType(t,"function",{moduleName:"workbox-core",funcName:"register",paramName:"callback"}),we.add(t),u.log("Registered a callback to respond to quota errors.",t)}const E={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},ce=t=>[E.prefix,t,E.suffix].filter(e=>e&&e.length>0).join("-"),Js=t=>{for(const e of Object.keys(E))t(e)},q={updateDetails:t=>{Js(e=>{typeof t[e]=="string"&&(E[e]=t[e])})},getGoogleAnalyticsName:t=>t||ce(E.googleAnalytics),getPrecacheName:t=>t||ce(E.precache),getPrefix:()=>E.prefix,getRuntimeName:t=>t||ce(E.runtime),getSuffix:()=>E.suffix};function Ge(t,e){const n=new URL(t);for(const r of e)n.searchParams.delete(r);return n.href}async function Ys(t,e,n,r){const s=Ge(e.url,n);if(e.url===s)return t.match(e,r);const a=Object.assign(Object.assign({},r),{ignoreSearch:!0}),o=await t.keys(e,a);for(const i of o){const c=Ge(i.url,n);if(s===c)return t.match(i,r)}}let L;function Qs(){if(L===void 0){const t=new Response("");if("body"in t)try{new Response(t.body),L=!0}catch{L=!1}L=!1}return L}function Ot(t){t.then(()=>{})}class Xs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}async function Zs(){u.log(`About to run ${we.size} callbacks to clean up caches.`);for(const t of we)await t(),u.log(t,"is complete.");u.log("Finished running callbacks.")}const p=t=>new URL(String(t),location.href).href.replace(new RegExp(`^${location.origin}`),"");function ea(t){return new Promise(e=>setTimeout(e,t))}function ze(t,e){const n=e();return t.waitUntil(n),n}async function ta(t,e){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new h("cross-origin-copy-response",{origin:n});const r=t.clone(),a={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},o=Qs()?r.body:await r.blob();return new Response(o,a)}function na(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:expiration:7.3.0"]&&_()}catch{}const ra="workbox-expiration",U="cache-entries",Je=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class sa{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const n=e.createObjectStore(U,{keyPath:"id"});n.createIndex("cacheName","cacheName",{unique:!1}),n.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&K(this._cacheName)}async setTimestamp(e,n){e=Je(e);const r={url:e,timestamp:n,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction(U,"readwrite",{durability:"relaxed"});await a.store.put(r),await a.done}async getTimestamp(e){const r=await(await this.getDb()).get(U,this._getId(e));return r?.timestamp}async expireEntries(e,n){const r=await this.getDb();let s=await r.transaction(U).store.index("timestamp").openCursor(null,"prev");const a=[];let o=0;for(;s;){const c=s.value;c.cacheName===this._cacheName&&(e&&c.timestamp<e||n&&o>=n?a.push(s.value):o++),s=await s.continue()}const i=[];for(const c of a)await r.delete(U,c.id),i.push(c.url);return i}_getId(e){return this._cacheName+"|"+Je(e)}async getDb(){return this._db||(this._db=await H(ra,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class aa{constructor(e,n={}){this._isRunning=!1,this._rerunRequested=!1;{if(f.isType(e,"string",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"cacheName"}),!(n.maxEntries||n.maxAgeSeconds))throw new h("max-entries-or-age-required",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor"});n.maxEntries&&f.isType(n.maxEntries,"number",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"config.maxEntries"}),n.maxAgeSeconds&&f.isType(n.maxAgeSeconds,"number",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"config.maxAgeSeconds"})}this._maxEntries=n.maxEntries,this._maxAgeSeconds=n.maxAgeSeconds,this._matchOptions=n.matchOptions,this._cacheName=e,this._timestampModel=new sa(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,n=await this._timestampModel.expireEntries(e,this._maxEntries),r=await self.caches.open(this._cacheName);for(const s of n)await r.delete(s,this._matchOptions);n.length>0?(u.groupCollapsed(`Expired ${n.length} ${n.length===1?"entry":"entries"} and removed ${n.length===1?"it":"them"} from the '${this._cacheName}' cache.`),u.log(`Expired the following ${n.length===1?"URL":"URLs"}:`),n.forEach(s=>u.log(`    ${s}`)),u.groupEnd()):u.debug("Cache expiration ran and found no entries to remove."),this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,Ot(this.expireEntries()))}async updateTimestamp(e){f.isType(e,"string",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"updateTimestamp",paramName:"url"}),await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const n=await this._timestampModel.getTimestamp(e),r=Date.now()-this._maxAgeSeconds*1e3;return n!==void 0?n<r:!0}else throw new h("expired-test-without-max-age",{methodName:"isURLExpired",paramName:"maxAgeSeconds"})}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class oa{constructor(e={}){this.cachedResponseWillBeUsed=async({event:n,request:r,cacheName:s,cachedResponse:a})=>{if(!a)return null;const o=this._isResponseDateFresh(a),i=this._getCacheExpiration(s);Ot(i.expireEntries());const c=i.updateTimestamp(r.url);if(n)try{n.waitUntil(c)}catch{"request"in n&&u.warn(`Unable to ensure service worker stays alive when updating cache entry for '${p(n.request.url)}'.`)}return o?a:null},this.cacheDidUpdate=async({cacheName:n,request:r})=>{f.isType(n,"string",{moduleName:"workbox-expiration",className:"Plugin",funcName:"cacheDidUpdate",paramName:"cacheName"}),f.isInstance(r,Request,{moduleName:"workbox-expiration",className:"Plugin",funcName:"cacheDidUpdate",paramName:"request"});const s=this._getCacheExpiration(n);await s.updateTimestamp(r.url),await s.expireEntries()};{if(!(e.maxEntries||e.maxAgeSeconds))throw new h("max-entries-or-age-required",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor"});e.maxEntries&&f.isType(e.maxEntries,"number",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor",paramName:"config.maxEntries"}),e.maxAgeSeconds&&f.isType(e.maxAgeSeconds,"number",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor",paramName:"config.maxAgeSeconds"})}this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&zs(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===q.getRuntimeName())throw new h("expire-custom-caches-only");let n=this._cacheExpirations.get(e);return n||(n=new aa(e,this._config),this._cacheExpirations.set(e,n)),n}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const n=this._getDateHeaderTimestamp(e);if(n===null)return!0;const r=Date.now();return n>=r-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const n=e.headers.get("date"),s=new Date(n).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,n]of this._cacheExpirations)await self.caches.delete(e),await n.delete();this._cacheExpirations=new Map}}try{self["workbox:precaching:7.3.0"]&&_()}catch{}const ia="__WB_REVISION__";function ca(t){if(!t)throw new h("add-to-cache-list-unexpected-type",{entry:t});if(typeof t=="string"){const a=new URL(t,location.href);return{cacheKey:a.href,url:a.href}}const{revision:e,url:n}=t;if(!n)throw new h("add-to-cache-list-unexpected-type",{entry:t});if(!e){const a=new URL(n,location.href);return{cacheKey:a.href,url:a.href}}const r=new URL(n,location.href),s=new URL(n,location.href);return r.searchParams.set(ia,e),{cacheKey:r.href,url:s.href}}class ua{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:n})=>{n&&(n.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:n,cachedResponse:r})=>{if(e.type==="install"&&n&&n.originalRequest&&n.originalRequest instanceof Request){const s=n.originalRequest.url;r?this.notUpdatedURLs.push(s):this.updatedURLs.push(s)}return r}}}class la{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:n,params:r})=>{const s=r?.cacheKey||this._precacheController.getCacheKeyForURL(n.url);return s?new Request(s,{headers:n.headers}):n},this._precacheController=e}}const ha=(t,e)=>{u.groupCollapsed(t);for(const n of e)u.log(n);u.groupEnd()};function da(t){const e=t.length;e>0&&(u.groupCollapsed(`During precaching cleanup, ${e} cached request${e===1?" was":"s were"} deleted.`),ha("Deleted Cache Requests",t),u.groupEnd())}function Ye(t,e){if(e.length!==0){u.groupCollapsed(t);for(const n of e)u.log(n);u.groupEnd()}}function fa(t,e){const n=t.length,r=e.length;if(n||r){let s=`Precaching ${n} file${n===1?"":"s"}.`;r>0&&(s+=` ${r} file${r===1?" is":"s are"} already cached.`),u.groupCollapsed(s),Ye("View newly precached URLs.",t),Ye("View previously precached URLs.",e),u.groupEnd()}}try{self["workbox:strategies:7.3.0"]&&_()}catch{}function j(t){return typeof t=="string"?new Request(t):t}class pa{constructor(e,n){this._cacheKeys={},f.isInstance(n.event,ExtendableEvent,{moduleName:"workbox-strategies",className:"StrategyHandler",funcName:"constructor",paramName:"options.event"}),Object.assign(this,n),this.event=n.event,this._strategy=e,this._handlerDeferred=new Xs,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:n}=this;let r=j(e);if(r.mode==="navigate"&&n instanceof FetchEvent&&n.preloadResponse){const o=await n.preloadResponse;if(o)return u.log(`Using a preloaded navigation response for '${p(r.url)}'`),o}const s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const o of this.iterateCallbacks("requestWillFetch"))r=await o({request:r.clone(),event:n})}catch(o){if(o instanceof Error)throw new h("plugin-error-request-will-fetch",{thrownErrorMessage:o.message})}const a=r.clone();try{let o;o=await fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions),u.debug(`Network request for '${p(r.url)}' returned a response with status '${o.status}'.`);for(const i of this.iterateCallbacks("fetchDidSucceed"))o=await i({event:n,request:a,response:o});return o}catch(o){throw u.log(`Network request for '${p(r.url)}' threw an error.`,o),s&&await this.runCallbacks("fetchDidFail",{error:o,event:n,originalRequest:s.clone(),request:a.clone()}),o}}async fetchAndCachePut(e){const n=await this.fetch(e),r=n.clone();return this.waitUntil(this.cachePut(e,r)),n}async cacheMatch(e){const n=j(e);let r;const{cacheName:s,matchOptions:a}=this._strategy,o=await this.getCacheKey(n,"read"),i=Object.assign(Object.assign({},a),{cacheName:s});r=await caches.match(o,i),r?u.debug(`Found a cached response in '${s}'.`):u.debug(`No cached response found in '${s}'.`);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await c({cacheName:s,matchOptions:a,cachedResponse:r,request:o,event:this.event})||void 0;return r}async cachePut(e,n){const r=j(e);await ea(0);const s=await this.getCacheKey(r,"write");{if(s.method&&s.method!=="GET")throw new h("attempt-to-cache-non-get-request",{url:p(s.url),method:s.method});const g=n.headers.get("Vary");g&&u.debug(`The response for ${p(s.url)} has a 'Vary: ${g}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`)}if(!n)throw u.error(`Cannot cache non-existent response for '${p(s.url)}'.`),new h("cache-put-with-no-response",{url:p(s.url)});const a=await this._ensureResponseSafeToCache(n);if(!a)return u.debug(`Response '${p(s.url)}' will not be cached.`,a),!1;const{cacheName:o,matchOptions:i}=this._strategy,c=await self.caches.open(o),l=this.hasCallback("cacheDidUpdate"),w=l?await Ys(c,s.clone(),["__WB_REVISION__"],i):null;u.debug(`Updating the '${o}' cache with a new Response for ${p(s.url)}.`);try{await c.put(s,l?a.clone():a)}catch(g){if(g instanceof Error)throw g.name==="QuotaExceededError"&&await Zs(),g}for(const g of this.iterateCallbacks("cacheDidUpdate"))await g({cacheName:o,oldResponse:w,newResponse:a.clone(),request:s,event:this.event});return!0}async getCacheKey(e,n){const r=`${e.url} | ${n}`;if(!this._cacheKeys[r]){let s=e;for(const a of this.iterateCallbacks("cacheKeyWillBeUsed"))s=j(await a({mode:n,request:s,event:this.event,params:this.params}));this._cacheKeys[r]=s}return this._cacheKeys[r]}hasCallback(e){for(const n of this._strategy.plugins)if(e in n)return!0;return!1}async runCallbacks(e,n){for(const r of this.iterateCallbacks(e))await r(n)}*iterateCallbacks(e){for(const n of this._strategy.plugins)if(typeof n[e]=="function"){const r=this._pluginStateMap.get(n);yield a=>{const o=Object.assign(Object.assign({},a),{state:r});return n[e](o)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){for(;this._extendLifetimePromises.length;){const e=this._extendLifetimePromises.splice(0),r=(await Promise.allSettled(e)).find(s=>s.status==="rejected");if(r)throw r.reason}}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let n=e,r=!1;for(const s of this.iterateCallbacks("cacheWillUpdate"))if(n=await s({request:this.request,response:n,event:this.event})||void 0,r=!0,!n)break;return r||(n&&n.status!==200&&(n=void 0),n&&n.status!==200&&(n.status===0?u.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`):u.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))),n}}class Pt{constructor(e={}){this.cacheName=q.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[n]=this.handleAll(e);return n}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const n=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new pa(this,{event:n,request:r,params:s}),o=this._getResponse(a,r,n),i=this._awaitComplete(o,a,r,n);return[o,i]}async _getResponse(e,n,r){await e.runCallbacks("handlerWillStart",{event:r,request:n});let s;try{if(s=await this._handle(n,e),!s||s.type==="error")throw new h("no-response",{url:n.url})}catch(a){if(a instanceof Error){for(const o of e.iterateCallbacks("handlerDidError"))if(s=await o({error:a,event:r,request:n}),s)break}if(s)u.log(`While responding to '${p(n.url)}', an ${a instanceof Error?a.toString():""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);else throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))s=await a({event:r,request:n,response:s});return s}async _awaitComplete(e,n,r,s){let a,o;try{a=await e}catch{}try{await n.runCallbacks("handlerDidRespond",{event:s,request:r,response:a}),await n.doneWaiting()}catch(i){i instanceof Error&&(o=i)}if(await n.runCallbacks("handlerDidComplete",{event:s,request:r,response:a,error:o}),n.destroy(),o)throw o}}class S extends Pt{constructor(e={}){e.cacheName=q.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(S.copyRedirectedCacheableResponsesPlugin)}async _handle(e,n){const r=await n.cacheMatch(e);return r||(n.event&&n.event.type==="install"?await this._handleInstall(e,n):await this._handleFetch(e,n))}async _handleFetch(e,n){let r;const s=n.params||{};if(this._fallbackToNetwork){u.warn(`The precached response for ${p(e.url)} in ${this.cacheName} was not found. Falling back to the network.`);const a=s.integrity,o=e.integrity,i=!o||o===a;r=await n.fetch(new Request(e,{integrity:e.mode!=="no-cors"?o||a:void 0})),a&&i&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await n.cachePut(e,r.clone())&&u.log(`A response for ${p(e.url)} was used to "repair" the precache.`))}else throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const a=s.cacheKey||await n.getCacheKey(e,"read");u.groupCollapsed("Precaching is responding to: "+p(e.url)),u.log(`Serving the precached url: ${p(a instanceof Request?a.url:a)}`),u.groupCollapsed("View request details here."),u.log(e),u.groupEnd(),u.groupCollapsed("View response details here."),u.log(r),u.groupEnd(),u.groupEnd()}return r}async _handleInstall(e,n){this._useDefaultCacheabilityPluginIfNeeded();const r=await n.fetch(e);if(!await n.cachePut(e,r.clone()))throw new h("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,n=0;for(const[r,s]of this.plugins.entries())s!==S.copyRedirectedCacheableResponsesPlugin&&(s===S.defaultPrecacheCacheabilityPlugin&&(e=r),s.cacheWillUpdate&&n++);n===0?this.plugins.push(S.defaultPrecacheCacheabilityPlugin):n>1&&e!==null&&this.plugins.splice(e,1)}}S.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:t}){return!t||t.status>=400?null:t}};S.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:t}){return t.redirected?await ta(t):t}};class ga{constructor({cacheName:e,plugins:n=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new S({cacheName:q.getPrecacheName(e),plugins:[...n,new la({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){f.isArray(e,{moduleName:"workbox-precaching",className:"PrecacheController",funcName:"addToCacheList",paramName:"entries"});const n=[];for(const r of e){typeof r=="string"?n.push(r):r&&r.revision===void 0&&n.push(r.url);const{cacheKey:s,url:a}=ca(r),o=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==s)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:s});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(s)&&this._cacheKeysToIntegrities.get(s)!==r.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(s,r.integrity)}if(this._urlsToCacheKeys.set(a,s),this._urlsToCacheModes.set(a,o),n.length>0){const i=`Workbox is precaching URLs without revision info: ${n.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;u.warn(i)}}}install(e){return ze(e,async()=>{const n=new ua;this.strategy.plugins.push(n);for(const[a,o]of this._urlsToCacheKeys){const i=this._cacheKeysToIntegrities.get(o),c=this._urlsToCacheModes.get(a),l=new Request(a,{integrity:i,cache:c,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:o},request:l,event:e}))}const{updatedURLs:r,notUpdatedURLs:s}=n;return fa(r,s),{updatedURLs:r,notUpdatedURLs:s}})}activate(e){return ze(e,async()=>{const n=await self.caches.open(this.strategy.cacheName),r=await n.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const o of r)s.has(o.url)||(await n.delete(o),a.push(o.url));return da(a),{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const n=new URL(e,location.href);return this._urlsToCacheKeys.get(n.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const n=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(n);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){const n=this.getCacheKeyForURL(e);if(!n)throw new h("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:n},r.params),this.strategy.handle(r))}}let ue;const Ne=()=>(ue||(ue=new ga),ue);try{self["workbox:routing:7.3.0"]&&_()}catch{}const Mt="GET",ma=["DELETE","GET","HEAD","PATCH","POST","PUT"],J=t=>t&&typeof t=="object"?(f.hasMethod(t,"handle",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),t):(f.isType(t,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),{handle:t});class O{constructor(e,n,r=Mt){f.isType(e,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"match"}),r&&f.isOneOf(r,ma,{paramName:"method"}),this.handler=J(n),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=J(e)}}class wa extends O{constructor(e,n,r){f.isInstance(e,RegExp,{moduleName:"workbox-routing",className:"RegExpRoute",funcName:"constructor",paramName:"pattern"});const s=({url:a})=>{const o=e.exec(a.href);if(o){if(a.origin!==location.origin&&o.index!==0){u.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${a.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);return}return o.slice(1)}};super(s,n,r)}}class ba{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:n}=e,r=this.handleRequest({request:n,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:n}=e.data;u.debug("Caching URLs from the window",n.urlsToCache);const r=Promise.all(n.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);const a=new Request(...s);return this.handleRequest({request:a,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}}))}handleRequest({request:e,event:n}){f.isInstance(e,Request,{moduleName:"workbox-routing",className:"Router",funcName:"handleRequest",paramName:"options.request"});const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http")){u.debug("Workbox Router only supports URLs that start with 'http'.");return}const s=r.origin===location.origin,{params:a,route:o}=this.findMatchingRoute({event:n,request:e,sameOrigin:s,url:r});let i=o&&o.handler;const c=[];i&&(c.push(["Found a route to handle this request:",o]),a&&c.push(["Passing the following params to the route's handler:",a]));const l=e.method;if(!i&&this._defaultHandlerMap.has(l)&&(c.push(`Failed to find a matching route. Falling back to the default handler for ${l}.`),i=this._defaultHandlerMap.get(l)),!i){u.debug(`No route found for: ${p(r)}`);return}u.groupCollapsed(`Router is responding to: ${p(r)}`),c.forEach(m=>{Array.isArray(m)?u.log(...m):u.log(m)}),u.groupEnd();let w;try{w=i.handle({url:r,request:e,event:n,params:a})}catch(m){w=Promise.reject(m)}const g=o&&o.catchHandler;return w instanceof Promise&&(this._catchHandler||g)&&(w=w.catch(async m=>{if(g){u.groupCollapsed(`Error thrown when responding to:  ${p(r)}. Falling back to route's Catch Handler.`),u.error("Error thrown by:",o),u.error(m),u.groupEnd();try{return await g.handle({url:r,request:e,event:n,params:a})}catch(R){R instanceof Error&&(m=R)}}if(this._catchHandler)return u.groupCollapsed(`Error thrown when responding to:  ${p(r)}. Falling back to global Catch Handler.`),u.error("Error thrown by:",o),u.error(m),u.groupEnd(),this._catchHandler.handle({url:r,request:e,event:n});throw m})),w}findMatchingRoute({url:e,sameOrigin:n,request:r,event:s}){const a=this._routes.get(r.method)||[];for(const o of a){let i;const c=o.match({url:e,sameOrigin:n,request:r,event:s});if(c)return c instanceof Promise&&u.warn(`While routing ${p(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`,o),i=c,(Array.isArray(i)&&i.length===0||c.constructor===Object&&Object.keys(c).length===0||typeof c=="boolean")&&(i=void 0),{route:o,params:i}}return{}}setDefaultHandler(e,n=Mt){this._defaultHandlerMap.set(n,J(e))}setCatchHandler(e){this._catchHandler=J(e)}registerRoute(e){f.isType(e,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),f.hasMethod(e,"match",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),f.isType(e.handler,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),f.hasMethod(e.handler,"handle",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.handler"}),f.isType(e.method,"string",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.method"}),this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const n=this._routes.get(e.method).indexOf(e);if(n>-1)this._routes.get(e.method).splice(n,1);else throw new h("unregister-route-route-not-registered")}}let B;const ya=()=>(B||(B=new ba,B.addFetchListener(),B.addCacheListener()),B);function De(t,e,n){let r;if(typeof t=="string"){const a=new URL(t,location.href);{if(!(t.startsWith("/")||t.startsWith("http")))throw new h("invalid-string",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});const i=t.startsWith("http")?a.pathname:t,c="[*:?+]";new RegExp(`${c}`).exec(i)&&u.debug(`The '$capture' parameter contains an Express-style wildcard character (${c}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`)}const o=({url:i})=>(i.pathname===a.pathname&&i.origin!==a.origin&&u.debug(`${t} only partially matches the cross-origin URL ${i.toString()}. This route will only handle cross-origin requests if they match the entire URL.`),i.href===a.href);r=new O(o,e,n)}else if(t instanceof RegExp)r=new wa(t,e,n);else if(typeof t=="function")r=new O(t,e,n);else if(t instanceof O)r=t;else throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return ya().registerRoute(r),r}function _a(t,e=[]){for(const n of[...t.searchParams.keys()])e.some(r=>r.test(n))&&t.searchParams.delete(n);return t}function*Ea(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:s}={}){const a=new URL(t,location.href);a.hash="",yield a.href;const o=_a(a,e);if(yield o.href,n&&o.pathname.endsWith("/")){const i=new URL(o.href);i.pathname+=n,yield i.href}if(r){const i=new URL(o.href);i.pathname+=".html",yield i.href}if(s){const i=s({url:a});for(const c of i)yield c.href}}class Ca extends O{constructor(e,n){const r=({request:s})=>{const a=e.getURLsToCacheKeys();for(const o of Ea(s.url,n)){const i=a.get(o);if(i){const c=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:c}}}u.debug("Precaching did not find a match for "+p(s.url))};super(r,e.strategy)}}function Ta(t){const e=Ne(),n=new Ca(e,t);De(n)}const Sa="-precache-",Ia=async(t,e=Sa)=>{const r=(await self.caches.keys()).filter(s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t);return await Promise.all(r.map(s=>self.caches.delete(s))),r};function Ra(){self.addEventListener("activate",(t=>{const e=q.getPrecacheName();t.waitUntil(Ia(e).then(n=>{n.length>0&&u.log("The following out-of-date precaches were cleaned up automatically:",n)}))}))}function va(t){return Ne().createHandlerBoundToURL(t)}function ka(t){Ne().precache(t)}function Aa(t,e){ka(t),Ta(e)}class Na extends O{constructor(e,{allowlist:n=[/./],denylist:r=[]}={}){f.isArrayOfClass(n,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.allowlist"}),f.isArrayOfClass(r,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.denylist"}),super(s=>this._match(s),e),this._allowlist=n,this._denylist=r}_match({url:e,request:n}){if(n&&n.mode!=="navigate")return!1;const r=e.pathname+e.search;for(const s of this._denylist)if(s.test(r))return u.log(`The navigation route ${r} is not being used, since the URL matches this denylist pattern: ${s.toString()}`),!1;return this._allowlist.some(s=>s.test(r))?(u.debug(`The navigation route ${r} is being used.`),!0):(u.log(`The navigation route ${r} is not being used, since the URL being navigated to doesn't match the allowlist.`),!1)}}const Qe={strategyStart:(t,e)=>`Using ${t} to respond to '${p(e.url)}'`,printFinalResponse:t=>{t&&(u.groupCollapsed("View the final response here."),u.log(t||"[No response returned]"),u.groupEnd())}},Da={cacheWillUpdate:async({response:t})=>t.status===200||t.status===0?t:null};class xa extends Pt{constructor(e={}){super(e),this.plugins.some(n=>"cacheWillUpdate"in n)||this.plugins.unshift(Da)}async _handle(e,n){const r=[];f.isInstance(e,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"handle",paramName:"request"});const s=n.fetchAndCachePut(e).catch(()=>{});n.waitUntil(s);let a=await n.cacheMatch(e),o;if(a)r.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`);else{r.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`);try{a=await s}catch(i){i instanceof Error&&(o=i)}}{u.groupCollapsed(Qe.strategyStart(this.constructor.name,e));for(const i of r)u.log(i);Qe.printFinalResponse(a),u.groupEnd()}if(!a)throw new h("no-response",{url:e.url,error:o});return a}}var $a="firebase",Oa="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$($a,Oa,"app");const Pa=t=>{try{return t()}catch(e){console.error(e)}},Ma={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Xe=Pa(()=>ct(Ma)),La=1;console.log(`Running manifest v${La}`);Aa([{"revision":"fb6bc519e60b6a4f4f5e612297d967f0","url":"index.html"},{"revision":null,"url":"assets/index-DDVPQvuI.css"},{"revision":null,"url":"assets/index-BZ8r5-YS.js"},{"revision":"f404aa33159772b83b4157e6c60f70b0","url":"images/icon-128x128.png"},{"revision":"3fbcb69ff82cb057aacbde829fcac3d4","url":"images/icon-144x144.png"},{"revision":"39949bda1302596136fabed62326b345","url":"images/icon-152x152.png"},{"revision":"e79959ae56ff2009393ad140e0a72d50","url":"images/icon-192x192.png"},{"revision":"6fbbdcf26e7ab28e1aa14b9ee6e13a7c","url":"images/icon-384x384.png"},{"revision":"1a80b4ca483f9c7556030ce1b91811c0","url":"images/icon-48x48.png"},{"revision":"12af888af4f6a759d2486fe81235b801","url":"images/icon-512x512.png"},{"revision":"397913248c674925c6b0c9abe0af5c7f","url":"images/icon-72x72.png"},{"revision":"9c80cc49e5bba8f35cd85ad5c60c8d09","url":"images/icon-96x96.png"},{"revision":"991659711b54db7eaba6086facf73163","url":"manifest.webmanifest"}]);Ra();let Ua;De(new Na(va("index.html"),{allowlist:Ua}));De(({url:t})=>t.origin===self.location.origin&&t.pathname.endsWith(".png"),new xa({cacheName:"images",plugins:[new oa({maxEntries:50})]}));na();if(Xe){const t=Ls(Xe),e=/iPhone|iPad|iPod/.test(self.navigator.userAgent);Us(t,n=>{console.log("[messaging-sw] Received background message ",n);const r=n.notification?.title??n.data?.title,s=n.notification?.body??n.data?.body;r&&(n.notification&&!e||self.registration.showNotification(r,{body:s}))})}console.log("Service worker loaded :)");
//# sourceMappingURL=messaging-sw.js.map
