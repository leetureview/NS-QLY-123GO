function XT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function JT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kv={exports:{}},Su={},Qv={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),ZT=Symbol.for("react.portal"),e1=Symbol.for("react.fragment"),t1=Symbol.for("react.strict_mode"),n1=Symbol.for("react.profiler"),r1=Symbol.for("react.provider"),s1=Symbol.for("react.context"),i1=Symbol.for("react.forward_ref"),o1=Symbol.for("react.suspense"),a1=Symbol.for("react.memo"),l1=Symbol.for("react.lazy"),Hm=Symbol.iterator;function u1(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var Yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xv=Object.assign,Jv={};function Ci(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Yv}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zv(){}Zv.prototype=Ci.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Yv}var Zd=Jd.prototype=new Zv;Zd.constructor=Jd;Xv(Zd,Ci.prototype);Zd.isPureReactComponent=!0;var Wm=Array.isArray,e0=Object.prototype.hasOwnProperty,ef={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)e0.call(e,r)&&!t0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ua,type:t,key:i,ref:o,props:s,_owner:ef.current}}function c1(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function h1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gm=/\/+/g;function Fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h1(""+t.key):e.toString(36)}function ll(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case ZT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Fc(o,0):r,Wm(s)?(n="",t!=null&&(n=t.replace(Gm,"$&/")+"/"),ll(s,e,n,"",function(c){return c})):s!=null&&(tf(s)&&(s=c1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Gm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Wm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Fc(i,l);o+=ll(i,e,n,u,s)}else if(u=u1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Fc(i,l++),o+=ll(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var r=[],s=0;return ll(t,r,"","",function(i){return e.call(n,i,s++)}),r}function d1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},ul={transition:null},f1={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:ul,ReactCurrentOwner:ef};function r0(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Ci;te.Fragment=e1;te.Profiler=n1;te.PureComponent=Jd;te.StrictMode=t1;te.Suspense=o1;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f1;te.act=r0;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ef.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)e0.call(e,u)&&!t0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ua,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:s1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r1,_context:t},t.Consumer=t};te.createElement=n0;te.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:i1,render:t}};te.isValidElement=tf;te.lazy=function(t){return{$$typeof:l1,_payload:{_status:-1,_result:t},_init:d1}};te.memo=function(t,e){return{$$typeof:a1,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};te.unstable_act=r0;te.useCallback=function(t,e){return yt.current.useCallback(t,e)};te.useContext=function(t){return yt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};te.useEffect=function(t,e){return yt.current.useEffect(t,e)};te.useId=function(){return yt.current.useId()};te.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return yt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};te.useRef=function(t){return yt.current.useRef(t)};te.useState=function(t){return yt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return yt.current.useTransition()};te.version="18.3.1";Qv.exports=te;var V=Qv.exports;const p1=JT(V),m1=XT({__proto__:null,default:p1},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1=V,y1=Symbol.for("react.element"),v1=Symbol.for("react.fragment"),_1=Object.prototype.hasOwnProperty,w1=g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x1={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_1.call(e,r)&&!x1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:y1,type:t,key:i,ref:o,props:s,_owner:w1.current}}Su.Fragment=v1;Su.jsx=s0;Su.jsxs=s0;Kv.exports=Su;var h=Kv.exports,i0={exports:{}},Ot={},o0={exports:{}},a0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Z=B.length;B.push(K);e:for(;0<Z;){var we=Z-1>>>1,ke=B[we];if(0<s(ke,K))B[we]=K,B[Z]=ke,Z=we;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Z=B.pop();if(Z!==K){B[0]=Z;e:for(var we=0,ke=B.length,qr=ke>>>1;we<qr;){var Mt=2*(we+1)-1,Hr=B[Mt],Kt=Mt+1,Hn=B[Kt];if(0>s(Hr,Z))Kt<ke&&0>s(Hn,Hr)?(B[we]=Hn,B[Kt]=Z,we=Kt):(B[we]=Hr,B[Mt]=Z,we=Mt);else if(Kt<ke&&0>s(Hn,Z))B[we]=Hn,B[Kt]=Z,we=Kt;else break e}}return K}function s(B,K){var Z=B.sortIndex-K.sortIndex;return Z!==0?Z:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,I=!1,N=!1,P=!1,A=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=B)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function k(B){if(P=!1,T(B),!N)if(n(u)!==null)N=!0,le(L);else{var K=n(c);K!==null&&Ve(k,K.startTime-B)}}function L(B,K){N=!1,P&&(P=!1,x(v),v=-1),I=!0;var Z=g;try{for(T(K),m=n(u);m!==null&&(!(m.expirationTime>K)||B&&!R());){var we=m.callback;if(typeof we=="function"){m.callback=null,g=m.priorityLevel;var ke=we(m.expirationTime<=K);K=t.unstable_now(),typeof ke=="function"?m.callback=ke:m===n(u)&&r(u),T(K)}else r(u);m=n(u)}if(m!==null)var qr=!0;else{var Mt=n(c);Mt!==null&&Ve(k,Mt.startTime-K),qr=!1}return qr}finally{m=null,g=Z,I=!1}}var U=!1,w=null,v=-1,E=5,C=-1;function R(){return!(t.unstable_now()-C<E)}function b(){if(w!==null){var B=t.unstable_now();C=B;var K=!0;try{K=w(!0,B)}finally{K?S():(U=!1,w=null)}}else U=!1}var S;if(typeof y=="function")S=function(){y(b)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,W=Ce.port2;Ce.port1.onmessage=b,S=function(){W.postMessage(null)}}else S=function(){A(b,0)};function le(B){w=B,U||(U=!0,S())}function Ve(B,K){v=A(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||I||(N=!0,le(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var Z=g;g=K;try{return B()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=g;g=B;try{return K()}finally{g=Z}},t.unstable_scheduleCallback=function(B,K,Z){var we=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?we+Z:we):Z=we,B){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=Z+ke,B={id:f++,callback:K,priorityLevel:B,startTime:Z,expirationTime:ke,sortIndex:-1},Z>we?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(P?(x(v),v=-1):P=!0,Ve(k,Z-we))):(B.sortIndex=ke,e(u,B),N||I||(N=!0,le(L))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var K=g;return function(){var Z=g;g=K;try{return B.apply(this,arguments)}finally{g=Z}}}})(a0);o0.exports=a0;var E1=o0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1=V,jt=E1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,Vo={};function ws(t,e){li(t,e),li(t+"Capture",e)}function li(t,e){for(Vo[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ah=Object.prototype.hasOwnProperty,I1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Km={},Qm={};function S1(t){return Ah.call(Qm,t)?!0:Ah.call(Km,t)?!1:I1.test(t)?Qm[t]=!0:(Km[t]=!0,!1)}function C1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A1(t,e,n,r){if(e===null||typeof e>"u"||C1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nf=/[\-:]([a-z])/g;function rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nf,rf);Ze[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nf,rf);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nf,rf);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sf(t,e,n,r){var s=Ze.hasOwnProperty(e)?Ze[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(A1(e,n,s,r)&&(n=null),r||s===null?S1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=T1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),js=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),Nh=Symbol.for("react.profiler"),u0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),h0=Symbol.for("react.offscreen"),Ym=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Uc;function co(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var zc=!1;function Bc(t,e){if(!t||zc)return"";zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?co(t):""}function N1(t){switch(t.tag){case 5:return co(t.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return t=Bc(t.type,!1),t;case 11:return t=Bc(t.type.render,!1),t;case 1:return t=Bc(t.type,!0),t;default:return""}}function Ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case js:return"Portal";case Nh:return"Profiler";case of:return"StrictMode";case Rh:return"Suspense";case kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c0:return(t.displayName||"Context")+".Consumer";case u0:return(t._context.displayName||"Context")+".Provider";case af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lf:return e=t.displayName||null,e!==null?e:Ph(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Ph(t(e))}catch{}}return null}function R1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ph(e);case 8:return e===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function d0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function k1(t){var e=d0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=k1(t))}function f0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=d0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&sf(t,"checked",e,!1)}function Dh(t,e){p0(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vh(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vh(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function Ks(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function jh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ho(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function m0(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function eg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P1=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){P1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function v0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function _0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=v0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var b1=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lh(t,e){if(e){if(b1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fh=null;function uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uh=null,Qs=null,Ys=null;function tg(t){if(t=da(t)){if(typeof Uh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=ku(e),Uh(t.stateNode,t.type,e))}}function w0(t){Qs?Ys?Ys.push(t):Ys=[t]:Qs=t}function x0(){if(Qs){var t=Qs,e=Ys;if(Ys=Qs=null,tg(t),e)for(t=0;t<e.length;t++)tg(e[t])}}function E0(t,e){return t(e)}function T0(){}var $c=!1;function I0(t,e,n){if($c)return t(e,n);$c=!0;try{return E0(t,e,n)}finally{$c=!1,(Qs!==null||Ys!==null)&&(T0(),x0())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var zh=!1;if(jn)try{var no={};Object.defineProperty(no,"passive",{get:function(){zh=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{zh=!1}function D1(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var wo=!1,Pl=null,bl=!1,Bh=null,V1={onError:function(t){wo=!0,Pl=t}};function j1(t,e,n,r,s,i,o,l,u){wo=!1,Pl=null,D1.apply(V1,arguments)}function O1(t,e,n,r,s,i,o,l,u){if(j1.apply(this,arguments),wo){if(wo){var c=Pl;wo=!1,Pl=null}else throw Error(F(198));bl||(bl=!0,Bh=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function S0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ng(t){if(xs(t)!==t)throw Error(F(188))}function L1(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ng(s),t;if(i===r)return ng(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function C0(t){return t=L1(t),t!==null?A0(t):null}function A0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=A0(t);if(e!==null)return e;t=t.sibling}return null}var N0=jt.unstable_scheduleCallback,rg=jt.unstable_cancelCallback,M1=jt.unstable_shouldYield,F1=jt.unstable_requestPaint,be=jt.unstable_now,U1=jt.unstable_getCurrentPriorityLevel,cf=jt.unstable_ImmediatePriority,R0=jt.unstable_UserBlockingPriority,Dl=jt.unstable_NormalPriority,z1=jt.unstable_LowPriority,k0=jt.unstable_IdlePriority,Cu=null,yn=null;function B1(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:H1,$1=Math.log,q1=Math.LN2;function H1(t){return t>>>=0,t===0?32:31-($1(t)/q1|0)|0}var $a=64,qa=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=fo(l):(i&=o,i!==0&&(r=fo(i)))}else o=n&~s,o!==0?r=fo(o):i!==0&&(r=fo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),s=1<<n,r|=t[n],e&=~s;return r}function W1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-tn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=W1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function $h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P0(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function K1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-tn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function b0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D0,df,V0,j0,O0,qh=!1,Ha=[],pr=null,mr=null,gr=null,Lo=new Map,Mo=new Map,nr=[],Q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sg(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function ro(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=da(e),e!==null&&df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Y1(t,e,n,r,s){switch(e){case"focusin":return pr=ro(pr,t,e,n,r,s),!0;case"dragenter":return mr=ro(mr,t,e,n,r,s),!0;case"mouseover":return gr=ro(gr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Lo.set(i,ro(Lo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Mo.set(i,ro(Mo.get(i)||null,t,e,n,r,s)),!0}return!1}function L0(t){var e=es(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=S0(n),e!==null){t.blockedOn=e,O0(t.priority,function(){V0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fh=r,n.target.dispatchEvent(r),Fh=null}else return e=da(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function ig(t,e,n){cl(t)&&n.delete(e)}function X1(){qh=!1,pr!==null&&cl(pr)&&(pr=null),mr!==null&&cl(mr)&&(mr=null),gr!==null&&cl(gr)&&(gr=null),Lo.forEach(ig),Mo.forEach(ig)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,qh||(qh=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,X1)))}function Fo(t){function e(s){return so(s,t)}if(0<Ha.length){so(Ha[0],t);for(var n=1;n<Ha.length;n++){var r=Ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&so(pr,t),mr!==null&&so(mr,t),gr!==null&&so(gr,t),Lo.forEach(e),Mo.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)L0(n),n.blockedOn===null&&nr.shift()}var Xs=qn.ReactCurrentBatchConfig,jl=!0;function J1(t,e,n,r){var s=de,i=Xs.transition;Xs.transition=null;try{de=1,ff(t,e,n,r)}finally{de=s,Xs.transition=i}}function Z1(t,e,n,r){var s=de,i=Xs.transition;Xs.transition=null;try{de=4,ff(t,e,n,r)}finally{de=s,Xs.transition=i}}function ff(t,e,n,r){if(jl){var s=Hh(t,e,n,r);if(s===null)eh(t,e,r,Ol,n),sg(t,r);else if(Y1(s,t,e,n,r))r.stopPropagation();else if(sg(t,r),e&4&&-1<Q1.indexOf(t)){for(;s!==null;){var i=da(s);if(i!==null&&D0(i),i=Hh(t,e,n,r),i===null&&eh(t,e,r,Ol,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else eh(t,e,r,null,n)}}var Ol=null;function Hh(t,e,n,r){if(Ol=null,t=uf(r),t=es(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=S0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function M0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U1()){case cf:return 1;case R0:return 4;case Dl:case z1:return 16;case k0:return 536870912;default:return 16}default:return 16}}var ur=null,pf=null,hl=null;function F0(){if(hl)return hl;var t,e=pf,n=e.length,r,s="value"in ur?ur.value:ur.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return hl=s.slice(t,1<r?1-r:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function og(){return!1}function Lt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wa:og,this.isPropagationStopped=og,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mf=Lt(Ai),ha=Ie({},Ai,{view:0,detail:0}),eI=Lt(ha),Hc,Wc,io,Au=Ie({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Hc=t.screenX-io.screenX,Wc=t.screenY-io.screenY):Wc=Hc=0,io=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),ag=Lt(Au),tI=Ie({},Au,{dataTransfer:0}),nI=Lt(tI),rI=Ie({},ha,{relatedTarget:0}),Gc=Lt(rI),sI=Ie({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),iI=Lt(sI),oI=Ie({},Ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aI=Lt(oI),lI=Ie({},Ai,{data:0}),lg=Lt(lI),uI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hI[t])?!!e[t]:!1}function gf(){return dI}var fI=Ie({},ha,{key:function(t){if(t.key){var e=uI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pI=Lt(fI),mI=Ie({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=Lt(mI),gI=Ie({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),yI=Lt(gI),vI=Ie({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),_I=Lt(vI),wI=Ie({},Au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xI=Lt(wI),EI=[9,13,27,32],yf=jn&&"CompositionEvent"in window,xo=null;jn&&"documentMode"in document&&(xo=document.documentMode);var TI=jn&&"TextEvent"in window&&!xo,U0=jn&&(!yf||xo&&8<xo&&11>=xo),cg=" ",hg=!1;function z0(t,e){switch(t){case"keyup":return EI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function II(t,e){switch(t){case"compositionend":return B0(e);case"keypress":return e.which!==32?null:(hg=!0,cg);case"textInput":return t=e.data,t===cg&&hg?null:t;default:return null}}function SI(t,e){if(Ls)return t==="compositionend"||!yf&&z0(t,e)?(t=F0(),hl=pf=ur=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U0&&e.locale!=="ko"?null:e.data;default:return null}}var CI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CI[t.type]:e==="textarea"}function $0(t,e,n,r){w0(r),e=Ll(e,"onChange"),0<e.length&&(n=new mf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eo=null,Uo=null;function AI(t){e_(t,0)}function Nu(t){var e=Us(t);if(f0(e))return t}function NI(t,e){if(t==="change")return e}var q0=!1;if(jn){var Kc;if(jn){var Qc="oninput"in document;if(!Qc){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),Qc=typeof fg.oninput=="function"}Kc=Qc}else Kc=!1;q0=Kc&&(!document.documentMode||9<document.documentMode)}function pg(){Eo&&(Eo.detachEvent("onpropertychange",H0),Uo=Eo=null)}function H0(t){if(t.propertyName==="value"&&Nu(Uo)){var e=[];$0(e,Uo,t,uf(t)),I0(AI,e)}}function RI(t,e,n){t==="focusin"?(pg(),Eo=e,Uo=n,Eo.attachEvent("onpropertychange",H0)):t==="focusout"&&pg()}function kI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(Uo)}function PI(t,e){if(t==="click")return Nu(e)}function bI(t,e){if(t==="input"||t==="change")return Nu(e)}function DI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:DI;function zo(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ah.call(e,s)||!sn(t[s],e[s]))return!1}return!0}function mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gg(t,e){var n=mg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mg(n)}}function W0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function G0(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VI(t){var e=G0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&W0(n.ownerDocument.documentElement,n)){if(r!==null&&vf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=gg(n,i);var o=gg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jI=jn&&"documentMode"in document&&11>=document.documentMode,Ms=null,Wh=null,To=null,Gh=!1;function yg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gh||Ms==null||Ms!==kl(r)||(r=Ms,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&zo(To,r)||(To=r,r=Ll(Wh,"onSelect"),0<r.length&&(e=new mf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ms)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Yc={},K0={};jn&&(K0=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Ru(t){if(Yc[t])return Yc[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K0)return Yc[t]=e[n];return t}var Q0=Ru("animationend"),Y0=Ru("animationiteration"),X0=Ru("animationstart"),J0=Ru("transitionend"),Z0=new Map,vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Z0.set(t,e),ws(e,[t])}for(var Xc=0;Xc<vg.length;Xc++){var Jc=vg[Xc],OI=Jc.toLowerCase(),LI=Jc[0].toUpperCase()+Jc.slice(1);Lr(OI,"on"+LI)}Lr(Q0,"onAnimationEnd");Lr(Y0,"onAnimationIteration");Lr(X0,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(J0,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MI=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function _g(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,O1(r,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;_g(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;_g(s,l,c),i=u}}}if(bl)throw t=Bh,bl=!1,Bh=null,t}function ye(t,e){var n=e[Jh];n===void 0&&(n=e[Jh]=new Set);var r=t+"__bubble";n.has(r)||(t_(e,t,2,!1),n.add(r))}function Zc(t,e,n){var r=0;e&&(r|=4),t_(n,t,r,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[Ka]){t[Ka]=!0,l0.forEach(function(n){n!=="selectionchange"&&(MI.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,Zc("selectionchange",!1,e))}}function t_(t,e,n,r){switch(M0(e)){case 1:var s=J1;break;case 4:s=Z1;break;default:s=ff}n=s.bind(null,e,n,t),s=void 0,!zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function eh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=es(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}I0(function(){var c=i,f=uf(n),m=[];e:{var g=Z0.get(t);if(g!==void 0){var I=mf,N=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":I=pI;break;case"focusin":N="focus",I=Gc;break;case"focusout":N="blur",I=Gc;break;case"beforeblur":case"afterblur":I=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=nI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=yI;break;case Q0:case Y0:case X0:I=iI;break;case J0:I=_I;break;case"scroll":I=eI;break;case"wheel":I=xI;break;case"copy":case"cut":case"paste":I=aI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=ug}var P=(e&4)!==0,A=!P&&t==="scroll",x=P?g!==null?g+"Capture":null:g;P=[];for(var y=c,T;y!==null;){T=y;var k=T.stateNode;if(T.tag===5&&k!==null&&(T=k,x!==null&&(k=Oo(y,x),k!=null&&P.push($o(y,k,T)))),A)break;y=y.return}0<P.length&&(g=new I(g,N,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Fh&&(N=n.relatedTarget||n.fromElement)&&(es(N)||N[On]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(N=n.relatedTarget||n.toElement,I=c,N=N?es(N):null,N!==null&&(A=xs(N),N!==A||N.tag!==5&&N.tag!==6)&&(N=null)):(I=null,N=c),I!==N)){if(P=ag,k="onMouseLeave",x="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=ug,k="onPointerLeave",x="onPointerEnter",y="pointer"),A=I==null?g:Us(I),T=N==null?g:Us(N),g=new P(k,y+"leave",I,n,f),g.target=A,g.relatedTarget=T,k=null,es(f)===c&&(P=new P(x,y+"enter",N,n,f),P.target=T,P.relatedTarget=A,k=P),A=k,I&&N)t:{for(P=I,x=N,y=0,T=P;T;T=ks(T))y++;for(T=0,k=x;k;k=ks(k))T++;for(;0<y-T;)P=ks(P),y--;for(;0<T-y;)x=ks(x),T--;for(;y--;){if(P===x||x!==null&&P===x.alternate)break t;P=ks(P),x=ks(x)}P=null}else P=null;I!==null&&wg(m,g,I,P,!1),N!==null&&A!==null&&wg(m,A,N,P,!0)}}e:{if(g=c?Us(c):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var L=NI;else if(dg(g))if(q0)L=bI;else{L=kI;var U=RI}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=PI);if(L&&(L=L(t,c))){$0(m,L,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Vh(g,"number",g.value)}switch(U=c?Us(c):window,t){case"focusin":(dg(U)||U.contentEditable==="true")&&(Ms=U,Wh=c,To=null);break;case"focusout":To=Wh=Ms=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,yg(m,n,f);break;case"selectionchange":if(jI)break;case"keydown":case"keyup":yg(m,n,f)}var w;if(yf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ls?z0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(U0&&n.locale!=="ko"&&(Ls||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ls&&(w=F0()):(ur=f,pf="value"in ur?ur.value:ur.textContent,Ls=!0)),U=Ll(c,v),0<U.length&&(v=new lg(v,t,null,n,f),m.push({event:v,listeners:U}),w?v.data=w:(w=B0(n),w!==null&&(v.data=w)))),(w=TI?II(t,n):SI(t,n))&&(c=Ll(c,"onBeforeInput"),0<c.length&&(f=new lg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=w))}e_(m,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Oo(t,n),i!=null&&r.unshift($o(t,i,s)),i=Oo(t,e),i!=null&&r.push($o(t,i,s))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Oo(n,i),u!=null&&o.unshift($o(n,u,l))):s||(u=Oo(n,i),u!=null&&o.push($o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FI=/\r\n?/g,UI=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(FI,`
`).replace(UI,"")}function Qa(t,e,n){if(e=xg(e),xg(t)!==e&&n)throw Error(F(425))}function Ml(){}var Kh=null,Qh=null;function Yh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,zI=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,BI=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch($I)}:Xh;function $I(t){setTimeout(function(){throw t})}function th(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Fo(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),mn="__reactFiber$"+Ni,qo="__reactProps$"+Ni,On="__reactContainer$"+Ni,Jh="__reactEvents$"+Ni,qI="__reactListeners$"+Ni,HI="__reactHandles$"+Ni;function es(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[mn])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[mn]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function ku(t){return t[qo]||null}var Zh=[],zs=-1;function Mr(t){return{current:t}}function _e(t){0>zs||(t.current=Zh[zs],Zh[zs]=null,zs--)}function me(t,e){zs++,Zh[zs]=t.current,t.current=e}var Nr={},ut=Mr(Nr),It=Mr(!1),us=Nr;function ui(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function Fl(){_e(It),_e(ut)}function Ig(t,e,n){if(ut.current!==Nr)throw Error(F(168));me(ut,e),me(It,n)}function n_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,R1(t)||"Unknown",s));return Ie({},n,r)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,us=ut.current,me(ut,t),me(It,It.current),!0}function Sg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=n_(t,e,us),r.__reactInternalMemoizedMergedChildContext=t,_e(It),_e(ut),me(ut,t)):_e(It),me(It,n)}var An=null,Pu=!1,nh=!1;function r_(t){An===null?An=[t]:An.push(t)}function WI(t){Pu=!0,r_(t)}function Fr(){if(!nh&&An!==null){nh=!0;var t=0,e=de;try{var n=An;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,Pu=!1}catch(s){throw An!==null&&(An=An.slice(t+1)),N0(cf,Fr),s}finally{de=e,nh=!1}}return null}var Bs=[],$s=0,zl=null,Bl=0,Ft=[],Ut=0,cs=null,Nn=1,Rn="";function Xr(t,e){Bs[$s++]=Bl,Bs[$s++]=zl,zl=t,Bl=e}function s_(t,e,n){Ft[Ut++]=Nn,Ft[Ut++]=Rn,Ft[Ut++]=cs,cs=t;var r=Nn;t=Rn;var s=32-tn(r)-1;r&=~(1<<s),n+=1;var i=32-tn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Nn=1<<32-tn(e)+s|n<<s|r,Rn=i+t}else Nn=1<<i|n<<s|r,Rn=t}function _f(t){t.return!==null&&(Xr(t,1),s_(t,1,0))}function wf(t){for(;t===zl;)zl=Bs[--$s],Bs[$s]=null,Bl=Bs[--$s],Bs[$s]=null;for(;t===cs;)cs=Ft[--Ut],Ft[Ut]=null,Rn=Ft[--Ut],Ft[Ut]=null,Nn=Ft[--Ut],Ft[Ut]=null}var Dt=null,Pt=null,xe=!1,Jt=null;function i_(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Pt=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:Nn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Pt=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(xe){var e=Pt;if(e){var n=e;if(!Cg(t,e)){if(ed(t))throw Error(F(418));e=yr(n.nextSibling);var r=Dt;e&&Cg(t,e)?i_(r,n):(t.flags=t.flags&-4097|2,xe=!1,Dt=t)}}else{if(ed(t))throw Error(F(418));t.flags=t.flags&-4097|2,xe=!1,Dt=t}}}function Ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Ya(t){if(t!==Dt)return!1;if(!xe)return Ag(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yh(t.type,t.memoizedProps)),e&&(e=Pt)){if(ed(t))throw o_(),Error(F(418));for(;e;)i_(t,e),e=yr(e.nextSibling)}if(Ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Dt?yr(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=Pt;t;)t=yr(t.nextSibling)}function ci(){Pt=Dt=null,xe=!1}function xf(t){Jt===null?Jt=[t]:Jt.push(t)}var GI=qn.ReactCurrentBatchConfig;function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Xa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ng(t){var e=t._init;return e(t._payload)}function a_(t){function e(x,y){if(t){var T=x.deletions;T===null?(x.deletions=[y],x.flags|=16):T.push(y)}}function n(x,y){if(!t)return null;for(;y!==null;)e(x,y),y=y.sibling;return null}function r(x,y){for(x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function s(x,y){return x=xr(x,y),x.index=0,x.sibling=null,x}function i(x,y,T){return x.index=T,t?(T=x.alternate,T!==null?(T=T.index,T<y?(x.flags|=2,y):T):(x.flags|=2,y)):(x.flags|=1048576,y)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,y,T,k){return y===null||y.tag!==6?(y=uh(T,x.mode,k),y.return=x,y):(y=s(y,T),y.return=x,y)}function u(x,y,T,k){var L=T.type;return L===Os?f(x,y,T.props.children,k,T.key):y!==null&&(y.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===er&&Ng(L)===y.type)?(k=s(y,T.props),k.ref=oo(x,y,T),k.return=x,k):(k=_l(T.type,T.key,T.props,null,x.mode,k),k.ref=oo(x,y,T),k.return=x,k)}function c(x,y,T,k){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=ch(T,x.mode,k),y.return=x,y):(y=s(y,T.children||[]),y.return=x,y)}function f(x,y,T,k,L){return y===null||y.tag!==7?(y=os(T,x.mode,k,L),y.return=x,y):(y=s(y,T),y.return=x,y)}function m(x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=uh(""+y,x.mode,T),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ua:return T=_l(y.type,y.key,y.props,null,x.mode,T),T.ref=oo(x,null,y),T.return=x,T;case js:return y=ch(y,x.mode,T),y.return=x,y;case er:var k=y._init;return m(x,k(y._payload),T)}if(ho(y)||to(y))return y=os(y,x.mode,T,null),y.return=x,y;Xa(x,y)}return null}function g(x,y,T,k){var L=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return L!==null?null:l(x,y,""+T,k);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ua:return T.key===L?u(x,y,T,k):null;case js:return T.key===L?c(x,y,T,k):null;case er:return L=T._init,g(x,y,L(T._payload),k)}if(ho(T)||to(T))return L!==null?null:f(x,y,T,k,null);Xa(x,T)}return null}function I(x,y,T,k,L){if(typeof k=="string"&&k!==""||typeof k=="number")return x=x.get(T)||null,l(y,x,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ua:return x=x.get(k.key===null?T:k.key)||null,u(y,x,k,L);case js:return x=x.get(k.key===null?T:k.key)||null,c(y,x,k,L);case er:var U=k._init;return I(x,y,T,U(k._payload),L)}if(ho(k)||to(k))return x=x.get(T)||null,f(y,x,k,L,null);Xa(y,k)}return null}function N(x,y,T,k){for(var L=null,U=null,w=y,v=y=0,E=null;w!==null&&v<T.length;v++){w.index>v?(E=w,w=null):E=w.sibling;var C=g(x,w,T[v],k);if(C===null){w===null&&(w=E);break}t&&w&&C.alternate===null&&e(x,w),y=i(C,y,v),U===null?L=C:U.sibling=C,U=C,w=E}if(v===T.length)return n(x,w),xe&&Xr(x,v),L;if(w===null){for(;v<T.length;v++)w=m(x,T[v],k),w!==null&&(y=i(w,y,v),U===null?L=w:U.sibling=w,U=w);return xe&&Xr(x,v),L}for(w=r(x,w);v<T.length;v++)E=I(w,x,v,T[v],k),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?v:E.key),y=i(E,y,v),U===null?L=E:U.sibling=E,U=E);return t&&w.forEach(function(R){return e(x,R)}),xe&&Xr(x,v),L}function P(x,y,T,k){var L=to(T);if(typeof L!="function")throw Error(F(150));if(T=L.call(T),T==null)throw Error(F(151));for(var U=L=null,w=y,v=y=0,E=null,C=T.next();w!==null&&!C.done;v++,C=T.next()){w.index>v?(E=w,w=null):E=w.sibling;var R=g(x,w,C.value,k);if(R===null){w===null&&(w=E);break}t&&w&&R.alternate===null&&e(x,w),y=i(R,y,v),U===null?L=R:U.sibling=R,U=R,w=E}if(C.done)return n(x,w),xe&&Xr(x,v),L;if(w===null){for(;!C.done;v++,C=T.next())C=m(x,C.value,k),C!==null&&(y=i(C,y,v),U===null?L=C:U.sibling=C,U=C);return xe&&Xr(x,v),L}for(w=r(x,w);!C.done;v++,C=T.next())C=I(w,x,v,C.value,k),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?v:C.key),y=i(C,y,v),U===null?L=C:U.sibling=C,U=C);return t&&w.forEach(function(b){return e(x,b)}),xe&&Xr(x,v),L}function A(x,y,T,k){if(typeof T=="object"&&T!==null&&T.type===Os&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ua:e:{for(var L=T.key,U=y;U!==null;){if(U.key===L){if(L=T.type,L===Os){if(U.tag===7){n(x,U.sibling),y=s(U,T.props.children),y.return=x,x=y;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===er&&Ng(L)===U.type){n(x,U.sibling),y=s(U,T.props),y.ref=oo(x,U,T),y.return=x,x=y;break e}n(x,U);break}else e(x,U);U=U.sibling}T.type===Os?(y=os(T.props.children,x.mode,k,T.key),y.return=x,x=y):(k=_l(T.type,T.key,T.props,null,x.mode,k),k.ref=oo(x,y,T),k.return=x,x=k)}return o(x);case js:e:{for(U=T.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(x,y.sibling),y=s(y,T.children||[]),y.return=x,x=y;break e}else{n(x,y);break}else e(x,y);y=y.sibling}y=ch(T,x.mode,k),y.return=x,x=y}return o(x);case er:return U=T._init,A(x,y,U(T._payload),k)}if(ho(T))return N(x,y,T,k);if(to(T))return P(x,y,T,k);Xa(x,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(n(x,y.sibling),y=s(y,T),y.return=x,x=y):(n(x,y),y=uh(T,x.mode,k),y.return=x,x=y),o(x)):n(x,y)}return A}var hi=a_(!0),l_=a_(!1),$l=Mr(null),ql=null,qs=null,Ef=null;function Tf(){Ef=qs=ql=null}function If(t){var e=$l.current;_e($l),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){ql=t,Ef=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(ql===null)throw Error(F(308));qs=t,ql.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var ts=null;function Sf(t){ts===null?ts=[t]:ts.push(t)}function u_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Sf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Ln(t,n)}return s=r.interleaved,s===null?(e.next=e,Sf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Ln(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}function Rg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,r){var s=t.updateQueue;tr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,I=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,P=l;switch(g=e,I=n,P.tag){case 1:if(N=P.payload,typeof N=="function"){m=N.call(I,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,g=typeof N=="function"?N.call(I,m,g):N,g==null)break e;m=Ie({},m,g);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=m):f=f.next=I,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ds|=o,t.lanes=o,t.memoizedState=m}}function kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var fa={},vn=Mr(fa),Ho=Mr(fa),Wo=Mr(fa);function ns(t){if(t===fa)throw Error(F(174));return t}function Af(t,e){switch(me(Wo,e),me(Ho,t),me(vn,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Oh(e,t)}_e(vn),me(vn,e)}function di(){_e(vn),_e(Ho),_e(Wo)}function h_(t){ns(Wo.current);var e=ns(vn.current),n=Oh(e,t.type);e!==n&&(me(Ho,t),me(vn,n))}function Nf(t){Ho.current===t&&(_e(vn),_e(Ho))}var Ee=Mr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rh=[];function Rf(){for(var t=0;t<rh.length;t++)rh[t]._workInProgressVersionPrimary=null;rh.length=0}var pl=qn.ReactCurrentDispatcher,sh=qn.ReactCurrentBatchConfig,hs=0,Te=null,Ue=null,He=null,Gl=!1,Io=!1,Go=0,KI=0;function nt(){throw Error(F(321))}function kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Pf(t,e,n,r,s,i){if(hs=i,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?JI:ZI,t=n(r,s),Io){i=0;do{if(Io=!1,Go=0,25<=i)throw Error(F(301));i+=1,He=Ue=null,e.updateQueue=null,pl.current=eS,t=n(r,s)}while(Io)}if(pl.current=Kl,e=Ue!==null&&Ue.next!==null,hs=0,He=Ue=Te=null,Gl=!1,e)throw Error(F(300));return t}function bf(){var t=Go!==0;return Go=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Te.memoizedState=He=t:He=He.next=t,He}function Gt(){if(Ue===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=He===null?Te.memoizedState:He.next;if(e!==null)He=e,Ue=t;else{if(t===null)throw Error(F(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Te.memoizedState=He=t:He=He.next=t}return He}function Ko(t,e){return typeof e=="function"?e(t):e}function ih(t){var e=Gt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((hs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Te.lanes|=f,ds|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,sn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Te.lanes|=i,ds|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oh(t){var e=Gt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);sn(i,e.memoizedState)||(Tt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function d_(){}function f_(t,e){var n=Te,r=Gt(),s=e(),i=!sn(r.memoizedState,s);if(i&&(r.memoizedState=s,Tt=!0),r=r.queue,Df(g_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Qo(9,m_.bind(null,n,r,s,e),void 0,null),Ge===null)throw Error(F(349));hs&30||p_(n,e,s)}return s}function p_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m_(t,e,n,r){e.value=n,e.getSnapshot=r,y_(e)&&v_(t)}function g_(t,e,n){return n(function(){y_(e)&&v_(t)})}function y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function v_(t){var e=Ln(t,1);e!==null&&nn(e,t,1,-1)}function Pg(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=t,t=t.dispatch=XI.bind(null,Te,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function __(){return Gt().memoizedState}function ml(t,e,n,r){var s=fn();Te.flags|=t,s.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var s=Gt();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&kf(r,o.deps)){s.memoizedState=Qo(e,n,i,r);return}}Te.flags|=t,s.memoizedState=Qo(1|e,n,i,r)}function bg(t,e){return ml(8390656,8,t,e)}function Df(t,e){return bu(2048,8,t,e)}function w_(t,e){return bu(4,2,t,e)}function x_(t,e){return bu(4,4,t,e)}function E_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T_(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,E_.bind(null,e,t),n)}function Vf(){}function I_(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function S_(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function C_(t,e,n){return hs&21?(sn(n,e)||(n=P0(),Te.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function QI(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=sh.transition;sh.transition={};try{t(!1),e()}finally{de=n,sh.transition=r}}function A_(){return Gt().memoizedState}function YI(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N_(t))R_(e,n);else if(n=u_(t,e,n,r),n!==null){var s=mt();nn(n,t,r,s),k_(n,e,r)}}function XI(t,e,n){var r=wr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N_(t))R_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,sn(l,o)){var u=e.interleaved;u===null?(s.next=s,Sf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=u_(t,e,s,r),n!==null&&(s=mt(),nn(n,t,r,s),k_(n,e,r))}}function N_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function R_(t,e){Io=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function k_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}var Kl={readContext:Wt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},JI={readContext:Wt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,E_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YI.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Pg,useDebugValue:Vf,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Pg(!1),e=t[0];return t=QI.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,s=fn();if(xe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ge===null)throw Error(F(349));hs&30||p_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,bg(g_.bind(null,r,i,t),[t]),r.flags|=2048,Qo(9,m_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=fn(),e=Ge.identifierPrefix;if(xe){var n=Rn,r=Nn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZI={readContext:Wt,useCallback:I_,useContext:Wt,useEffect:Df,useImperativeHandle:T_,useInsertionEffect:w_,useLayoutEffect:x_,useMemo:S_,useReducer:ih,useRef:__,useState:function(){return ih(Ko)},useDebugValue:Vf,useDeferredValue:function(t){var e=Gt();return C_(e,Ue.memoizedState,t)},useTransition:function(){var t=ih(Ko)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:f_,useId:A_,unstable_isNewReconciler:!1},eS={readContext:Wt,useCallback:I_,useContext:Wt,useEffect:Df,useImperativeHandle:T_,useInsertionEffect:w_,useLayoutEffect:x_,useMemo:S_,useReducer:oh,useRef:__,useState:function(){return oh(Ko)},useDebugValue:Vf,useDeferredValue:function(t){var e=Gt();return Ue===null?e.memoizedState=t:C_(e,Ue.memoizedState,t)},useTransition:function(){var t=oh(Ko)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:f_,useId:A_,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Du={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),s=wr(t),i=bn(r,s);i.payload=e,n!=null&&(i.callback=n),e=vr(t,i,s),e!==null&&(nn(e,t,s,r),fl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),s=wr(t),i=bn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=vr(t,i,s),e!==null&&(nn(e,t,s,r),fl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=wr(t),s=bn(n,r);s.tag=2,e!=null&&(s.callback=e),e=vr(t,s,r),e!==null&&(nn(e,t,r,n),fl(e,t,r))}};function Dg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(s,i):!0}function P_(t,e,n){var r=!1,s=Nr,i=e.contextType;return typeof i=="object"&&i!==null?i=Wt(i):(s=St(e)?us:ut.current,r=e.contextTypes,i=(r=r!=null)?ui(t,s):Nr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Vg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Du.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Cf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Wt(i):(i=St(e)?us:ut.current,s.context=ui(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(rd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Du.enqueueReplaceState(s,s.state,null),Hl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e){try{var n="",r=e;do n+=N1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ah(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function b_(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yl||(Yl=!0,md=r),id(t,e)},n}function D_(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){id(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=mS.bind(null,t,e,n),e.then(t,t))}function Og(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var nS=qn.ReactCurrentOwner,Tt=!1;function pt(t,e,n,r){e.child=t===null?l_(e,null,n,r):hi(e,t.child,n,r)}function Mg(t,e,n,r,s){n=n.render;var i=e.ref;return Js(e,s),r=Pf(t,e,n,r,i,s),n=bf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Mn(t,e,s)):(xe&&n&&_f(e),e.flags|=1,pt(t,e,r,s),e.child)}function Fg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,V_(t,e,i,r,s)):(t=_l(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&t.ref===e.ref)return Mn(t,e,s)}return e.flags|=1,t=xr(i,r),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(zo(i,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Mn(t,e,s)}return od(t,e,n,r,s)}function j_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ws,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ws,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(Ws,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,me(Ws,Rt),Rt|=r;return pt(t,e,s,n),e.child}function O_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,r,s){var i=St(n)?us:ut.current;return i=ui(e,i),Js(e,s),n=Pf(t,e,n,r,i,s),r=bf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Mn(t,e,s)):(xe&&r&&_f(e),e.flags|=1,pt(t,e,n,s),e.child)}function Ug(t,e,n,r,s){if(St(n)){var i=!0;Ul(e)}else i=!1;if(Js(e,s),e.stateNode===null)gl(t,e),P_(e,n,r),sd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wt(c):(c=St(n)?us:ut.current,c=ui(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Vg(e,o,r,c),tr=!1;var g=e.memoizedState;o.state=g,Hl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||It.current||tr?(typeof f=="function"&&(rd(e,n,f,r),u=e.memoizedState),(l=tr||Dg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,c_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Yt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=St(n)?us:ut.current,u=ui(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Vg(e,o,r,u),tr=!1,g=e.memoizedState,o.state=g,Hl(e,r,o,s);var N=e.memoizedState;l!==m||g!==N||It.current||tr?(typeof I=="function"&&(rd(e,n,I,r),N=e.memoizedState),(c=tr||Dg(e,n,c,r,g,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ad(t,e,n,r,i,s)}function ad(t,e,n,r,s,i){O_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Sg(e,n,!1),Mn(t,e,i);r=e.stateNode,nS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hi(e,t.child,null,i),e.child=hi(e,null,l,i)):pt(t,e,l,i),e.memoizedState=r.state,s&&Sg(e,n,!0),e.child}function L_(t){var e=t.stateNode;e.pendingContext?Ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ig(t,e.context,!1),Af(t,e.containerInfo)}function zg(t,e,n,r,s){return ci(),xf(s),e.flags|=256,pt(t,e,n,r),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function M_(t,e,n){var r=e.pendingProps,s=Ee.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),me(Ee,s&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ou(o,r,0,null),t=os(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ud(n),e.memoizedState=ld,t):jf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return rS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=xr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=xr(l,i):(i=os(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=ld,r}return i=t.child,t=i.sibling,r=xr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jf(t,e){return e=Ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,r){return r!==null&&xf(r),hi(e,t.child,null,n),t=jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ah(Error(F(422))),Ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ou({mode:"visible",children:r.children},s,0,null),i=os(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&hi(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=ld,i);if(!(e.mode&1))return Ja(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=ah(i,r,void 0),Ja(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=Ge,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ln(t,s),nn(r,t,s,-1))}return zf(),r=ah(Error(F(421))),Ja(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=gS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Pt=yr(s.nextSibling),Dt=e,xe=!0,Jt=null,t!==null&&(Ft[Ut++]=Nn,Ft[Ut++]=Rn,Ft[Ut++]=cs,Nn=t.id,Rn=t.overflow,cs=e),e=jf(e,r.children),e.flags|=4096,e)}function Bg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nd(t.return,e,n)}function lh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function F_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(pt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,n,e);else if(t.tag===19)Bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),lh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Wl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}lh(e,!0,n,null,i);break;case"together":lh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sS(t,e,n){switch(e.tag){case 3:L_(e),ci();break;case 5:h_(e);break;case 1:St(e.type)&&Ul(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;me($l,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?M_(t,e,n):(me(Ee,Ee.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);me(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return F_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),me(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,j_(t,e,n)}return Mn(t,e,n)}var U_,cd,z_,B_;U_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};z_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ns(vn.current);var i=null;switch(n){case"input":s=bh(t,s),r=bh(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=jh(t,s),r=jh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ml)}Lh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};B_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ao(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iS(t,e,n){var r=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return St(e.type)&&Fl(),rt(e),null;case 3:return r=e.stateNode,di(),_e(It),_e(ut),Rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(vd(Jt),Jt=null))),cd(t,e),rt(e),null;case 5:Nf(e);var s=ns(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return rt(e),null}if(t=ns(vn.current),Ya(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[mn]=e,r[qo]=i,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(s=0;s<po.length;s++)ye(po[s],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Xm(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Zm(r,i),ye("invalid",r)}Lh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Qa(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Qa(r.textContent,l,t),s=["children",""+l]):Vo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":za(r),Jm(r,i,!0);break;case"textarea":za(r),eg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ml)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[qo]=r,U_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mh(n,r),n){case"dialog":ye("cancel",t),ye("close",t),s=r;break;case"iframe":case"object":case"embed":ye("load",t),s=r;break;case"video":case"audio":for(s=0;s<po.length;s++)ye(po[s],t);s=r;break;case"source":ye("error",t),s=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),s=r;break;case"details":ye("toggle",t),s=r;break;case"input":Xm(t,r),s=bh(t,r),ye("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Zm(t,r),s=jh(t,r),ye("invalid",t);break;default:s=r}Lh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?_0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&y0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jo(t,u):typeof u=="number"&&jo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ye("scroll",t):u!=null&&sf(t,i,u,o))}switch(n){case"input":za(t),Jm(t,r,!1);break;case"textarea":za(t),eg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ks(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)B_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ns(Wo.current),ns(vn.current),Ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(i=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return rt(e),null;case 13:if(_e(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Pt!==null&&e.mode&1&&!(e.flags&128))o_(),ci(),e.flags|=98560,i=!1;else if(i=Ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[mn]=e}else ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),i=!1}else Jt!==null&&(vd(Jt),Jt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?ze===0&&(ze=3):zf())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return di(),cd(t,e),t===null&&Bo(e.stateNode.containerInfo),rt(e),null;case 10:return If(e.type._context),rt(e),null;case 17:return St(e.type)&&Fl(),rt(e),null;case 19:if(_e(Ee),i=e.memoizedState,i===null)return rt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ao(i,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wl(t),o!==null){for(e.flags|=128,ao(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Ee,Ee.current&1|2),e.child}t=t.sibling}i.tail!==null&&be()>pi&&(e.flags|=128,r=!0,ao(i,!1),e.lanes=4194304)}else{if(!r)if(t=Wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!xe)return rt(e),null}else 2*be()-i.renderingStartTime>pi&&n!==1073741824&&(e.flags|=128,r=!0,ao(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=be(),e.sibling=null,n=Ee.current,me(Ee,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function oS(t,e){switch(wf(e),e.tag){case 1:return St(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return di(),_e(It),_e(ut),Rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(_e(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ee),null;case 4:return di(),null;case 10:return If(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var Za=!1,ot=!1,aS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function hd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var $g=!1;function lS(t,e){if(Kh=jl,t=G0(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qh={focusedElem:t,selectionRange:n},jl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var P=N.memoizedProps,A=N.memoizedState,x=e.stateNode,y=x.getSnapshotBeforeUpdate(e.elementType===e.type?P:Yt(e.type,P),A);x.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(k){Ne(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return N=$g,$g=!1,N}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&hd(e,n,i)}s=s.next}while(s!==r)}}function Vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $_(t){var e=t.alternate;e!==null&&(t.alternate=null,$_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[qo],delete e[Jh],delete e[qI],delete e[HI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q_(t){return t.tag===5||t.tag===3||t.tag===4}function qg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(r!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var Qe=null,Xt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)H_(t,e,n),n=n.sibling}function H_(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:ot||Hs(n,e);case 6:var r=Qe,s=Xt;Qe=null,Jn(t,e,n),Qe=r,Xt=s,Qe!==null&&(Xt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Xt?(t=Qe,n=n.stateNode,t.nodeType===8?th(t.parentNode,n):t.nodeType===1&&th(t,n),Fo(t)):th(Qe,n.stateNode));break;case 4:r=Qe,s=Xt,Qe=n.stateNode.containerInfo,Xt=!0,Jn(t,e,n),Qe=r,Xt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&hd(n,e,o),s=s.next}while(s!==r)}Jn(t,e,n);break;case 1:if(!ot&&(Hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Jn(t,e,n),ot=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function Hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aS),e.forEach(function(r){var s=yS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,Xt=!1;break e;case 3:Qe=l.stateNode.containerInfo,Xt=!0;break e;case 4:Qe=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(Qe===null)throw Error(F(160));H_(i,o,s),Qe=null,Xt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ne(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W_(e,t),e=e.sibling}function W_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),dn(t),r&4){try{So(3,t,t.return),Vu(3,t)}catch(P){Ne(t,t.return,P)}try{So(5,t,t.return)}catch(P){Ne(t,t.return,P)}}break;case 1:Qt(e,t),dn(t),r&512&&n!==null&&Hs(n,n.return);break;case 5:if(Qt(e,t),dn(t),r&512&&n!==null&&Hs(n,n.return),t.flags&32){var s=t.stateNode;try{jo(s,"")}catch(P){Ne(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&p0(s,i),Mh(l,o);var c=Mh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?_0(s,m):f==="dangerouslySetInnerHTML"?y0(s,m):f==="children"?jo(s,m):sf(s,f,m,c)}switch(l){case"input":Dh(s,i);break;case"textarea":m0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Ks(s,!!i.multiple,I,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ks(s,!!i.multiple,i.defaultValue,!0):Ks(s,!!i.multiple,i.multiple?[]:"",!1))}s[qo]=i}catch(P){Ne(t,t.return,P)}}break;case 6:if(Qt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Ne(t,t.return,P)}}break;case 3:if(Qt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(P){Ne(t,t.return,P)}break;case 4:Qt(e,t),dn(t);break;case 13:Qt(e,t),dn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Mf=be())),r&4&&Hg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(c=ot)||f,Qt(e,t),ot=c):Qt(e,t),dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(g=H,I=g.child,g.tag){case 0:case 11:case 14:case 15:So(4,g,g.return);break;case 1:Hs(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(P){Ne(r,n,P)}}break;case 5:Hs(g,g.return);break;case 22:if(g.memoizedState!==null){Gg(m);continue}}I!==null?(I.return=g,H=I):Gg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=v0("display",o))}catch(P){Ne(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ne(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qt(e,t),dn(t),r&4&&Hg(t);break;case 21:break;default:Qt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(jo(s,""),r.flags&=-33);var i=qg(t);pd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=qg(t);fd(t,l,o);break;default:throw Error(F(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uS(t,e,n){H=t,G_(t)}function G_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Za;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ot;l=Za;var c=ot;if(Za=o,(ot=u)&&!c)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Kg(s):u!==null?(u.return=o,H=u):Kg(s);for(;i!==null;)H=i,G_(i),i=i.sibling;H=s,Za=l,ot=c}Wg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Wg(t)}}function Wg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||Vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&kg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Fo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ot||e.flags&512&&dd(e)}catch(g){Ne(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Gg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Kg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vu(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ne(e,s,u)}}var i=e.return;try{dd(e)}catch(u){Ne(e,i,u)}break;case 5:var o=e.return;try{dd(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var cS=Math.ceil,Ql=qn.ReactCurrentDispatcher,Of=qn.ReactCurrentOwner,$t=qn.ReactCurrentBatchConfig,ae=0,Ge=null,Oe=null,Je=0,Rt=0,Ws=Mr(0),ze=0,Yo=null,ds=0,ju=0,Lf=0,Co=null,xt=null,Mf=0,pi=1/0,Cn=null,Yl=!1,md=null,_r=null,el=!1,cr=null,Xl=0,Ao=0,gd=null,yl=-1,vl=0;function mt(){return ae&6?be():yl!==-1?yl:yl=be()}function wr(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:GI.transition!==null?(vl===0&&(vl=P0()),vl):(t=de,t!==0||(t=window.event,t=t===void 0?16:M0(t.type)),t):1}function nn(t,e,n,r){if(50<Ao)throw Ao=0,gd=null,Error(F(185));ca(t,n,r),(!(ae&2)||t!==Ge)&&(t===Ge&&(!(ae&2)&&(ju|=n),ze===4&&rr(t,Je)),Ct(t,r),n===1&&ae===0&&!(e.mode&1)&&(pi=be()+500,Pu&&Fr()))}function Ct(t,e){var n=t.callbackNode;G1(t,e);var r=Vl(t,t===Ge?Je:0);if(r===0)n!==null&&rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rg(n),e===1)t.tag===0?WI(Qg.bind(null,t)):r_(Qg.bind(null,t)),BI(function(){!(ae&6)&&Fr()}),n=null;else{switch(b0(r)){case 1:n=cf;break;case 4:n=R0;break;case 16:n=Dl;break;case 536870912:n=k0;break;default:n=Dl}n=tw(n,K_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function K_(t,e){if(yl=-1,vl=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=Vl(t,t===Ge?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jl(t,r);else{e=r;var s=ae;ae|=2;var i=Y_();(Ge!==t||Je!==e)&&(Cn=null,pi=be()+500,is(t,e));do try{fS();break}catch(l){Q_(t,l)}while(!0);Tf(),Ql.current=i,ae=s,Oe!==null?e=0:(Ge=null,Je=0,e=ze)}if(e!==0){if(e===2&&(s=$h(t),s!==0&&(r=s,e=yd(t,s))),e===1)throw n=Yo,is(t,0),rr(t,r),Ct(t,be()),n;if(e===6)rr(t,r);else{if(s=t.current.alternate,!(r&30)&&!hS(s)&&(e=Jl(t,r),e===2&&(i=$h(t),i!==0&&(r=i,e=yd(t,i))),e===1))throw n=Yo,is(t,0),rr(t,r),Ct(t,be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Jr(t,xt,Cn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Mf+500-be(),10<e)){if(Vl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Xh(Jr.bind(null,t,xt,Cn),e);break}Jr(t,xt,Cn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-tn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cS(r/1960))-r,10<r){t.timeoutHandle=Xh(Jr.bind(null,t,xt,Cn),r);break}Jr(t,xt,Cn);break;case 5:Jr(t,xt,Cn);break;default:throw Error(F(329))}}}return Ct(t,be()),t.callbackNode===n?K_.bind(null,t):null}function yd(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=xt,xt=n,e!==null&&vd(e)),t}function vd(t){xt===null?xt=t:xt.push.apply(xt,t)}function hS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!sn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Lf,e&=~ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Qg(t){if(ae&6)throw Error(F(327));Zs();var e=Vl(t,0);if(!(e&1))return Ct(t,be()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var r=$h(t);r!==0&&(e=r,n=yd(t,r))}if(n===1)throw n=Yo,is(t,0),rr(t,e),Ct(t,be()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,xt,Cn),Ct(t,be()),null}function Ff(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(pi=be()+500,Pu&&Fr())}}function fs(t){cr!==null&&cr.tag===0&&!(ae&6)&&Zs();var e=ae;ae|=1;var n=$t.transition,r=de;try{if($t.transition=null,de=1,t)return t()}finally{de=r,$t.transition=n,ae=e,!(ae&6)&&Fr()}}function Uf(){Rt=Ws.current,_e(Ws)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zI(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:di(),_e(It),_e(ut),Rf();break;case 5:Nf(r);break;case 4:di();break;case 13:_e(Ee);break;case 19:_e(Ee);break;case 10:If(r.type._context);break;case 22:case 23:Uf()}n=n.return}if(Ge=t,Oe=t=xr(t.current,null),Je=Rt=e,ze=0,Yo=null,Lf=ju=ds=0,xt=Co=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ts=null}return t}function Q_(t,e){do{var n=Oe;try{if(Tf(),pl.current=Kl,Gl){for(var r=Te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Gl=!1}if(hs=0,He=Ue=Te=null,Io=!1,Go=0,Of.current=null,n===null||n.return===null){ze=1,Yo=e,Oe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=Og(o);if(I!==null){I.flags&=-257,Lg(I,o,l,i,e),I.mode&1&&jg(i,c,e),e=I,u=c;var N=e.updateQueue;if(N===null){var P=new Set;P.add(u),e.updateQueue=P}else N.add(u);break e}else{if(!(e&1)){jg(i,c,e),zf();break e}u=Error(F(426))}}else if(xe&&l.mode&1){var A=Og(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Lg(A,o,l,i,e),xf(fi(u,l));break e}}i=u=fi(u,l),ze!==4&&(ze=2),Co===null?Co=[i]:Co.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=b_(i,u,e);Rg(i,x);break e;case 1:l=u;var y=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(_r===null||!_r.has(T)))){i.flags|=65536,e&=-e,i.lanes|=e;var k=D_(i,l,e);Rg(i,k);break e}}i=i.return}while(i!==null)}J_(n)}catch(L){e=L,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function Y_(){var t=Ql.current;return Ql.current=Kl,t===null?Kl:t}function zf(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(ds&268435455)&&!(ju&268435455)||rr(Ge,Je)}function Jl(t,e){var n=ae;ae|=2;var r=Y_();(Ge!==t||Je!==e)&&(Cn=null,is(t,e));do try{dS();break}catch(s){Q_(t,s)}while(!0);if(Tf(),ae=n,Ql.current=r,Oe!==null)throw Error(F(261));return Ge=null,Je=0,ze}function dS(){for(;Oe!==null;)X_(Oe)}function fS(){for(;Oe!==null&&!M1();)X_(Oe)}function X_(t){var e=ew(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?J_(t):Oe=e,Of.current=null}function J_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oS(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Oe=null;return}}else if(n=iS(n,e,Rt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);ze===0&&(ze=5)}function Jr(t,e,n){var r=de,s=$t.transition;try{$t.transition=null,de=1,pS(t,e,n,r)}finally{$t.transition=s,de=r}return null}function pS(t,e,n,r){do Zs();while(cr!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(K1(t,i),t===Ge&&(Oe=Ge=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,tw(Dl,function(){return Zs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=$t.transition,$t.transition=null;var o=de;de=1;var l=ae;ae|=4,Of.current=null,lS(t,n),W_(n,t),VI(Qh),jl=!!Kh,Qh=Kh=null,t.current=n,uS(n),F1(),ae=l,de=o,$t.transition=i}else t.current=n;if(el&&(el=!1,cr=t,Xl=s),i=t.pendingLanes,i===0&&(_r=null),B1(n.stateNode),Ct(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Yl)throw Yl=!1,t=md,md=null,t;return Xl&1&&t.tag!==0&&Zs(),i=t.pendingLanes,i&1?t===gd?Ao++:(Ao=0,gd=t):Ao=0,Fr(),null}function Zs(){if(cr!==null){var t=b0(Xl),e=$t.transition,n=de;try{if($t.transition=null,de=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Xl=0,ae&6)throw Error(F(331));var s=ae;for(ae|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:So(8,f,i)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var g=f.sibling,I=f.return;if($_(f),f===c){H=null;break}if(g!==null){g.return=I,H=g;break}H=I}}}var N=i.alternate;if(N!==null){var P=N.child;if(P!==null){N.child=null;do{var A=P.sibling;P.sibling=null,P=A}while(P!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:So(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,H=x;break e}H=i.return}}var y=t.current;for(H=y;H!==null;){o=H;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,H=T;else e:for(o=y;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vu(9,l)}}catch(L){Ne(l,l.return,L)}if(l===o){H=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,H=k;break e}H=l.return}}if(ae=s,Fr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Cu,t)}catch{}r=!0}return r}finally{de=n,$t.transition=e}}return!1}function Yg(t,e,n){e=fi(n,e),e=b_(t,e,1),t=vr(t,e,1),e=mt(),t!==null&&(ca(t,1,e),Ct(t,e))}function Ne(t,e,n){if(t.tag===3)Yg(t,t,n);else for(;e!==null;){if(e.tag===3){Yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=fi(n,t),t=D_(e,t,1),e=vr(e,t,1),t=mt(),e!==null&&(ca(e,1,t),Ct(e,t));break}}e=e.return}}function mS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Je&n)===n&&(ze===4||ze===3&&(Je&130023424)===Je&&500>be()-Mf?is(t,0):Lf|=n),Ct(t,e)}function Z_(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=mt();t=Ln(t,e),t!==null&&(ca(t,e,n),Ct(t,n))}function gS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z_(t,n)}function yS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Z_(t,n)}var ew;ew=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,sS(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,xe&&e.flags&1048576&&s_(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gl(t,e),t=e.pendingProps;var s=ui(e,ut.current);Js(e,n),s=Pf(null,e,r,t,s,n);var i=bf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,Ul(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Cf(e),s.updater=Du,e.stateNode=s,s._reactInternals=e,sd(e,r,t,n),e=ad(null,e,r,!0,i,n)):(e.tag=0,xe&&i&&_f(e),pt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=_S(r),t=Yt(r,t),s){case 0:e=od(null,e,r,t,n);break e;case 1:e=Ug(null,e,r,t,n);break e;case 11:e=Mg(null,e,r,t,n);break e;case 14:e=Fg(null,e,r,Yt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),od(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),Ug(t,e,r,s,n);case 3:e:{if(L_(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,c_(t,e),Hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=fi(Error(F(423)),e),e=zg(t,e,r,n,s);break e}else if(r!==s){s=fi(Error(F(424)),e),e=zg(t,e,r,n,s);break e}else for(Pt=yr(e.stateNode.containerInfo.firstChild),Dt=e,xe=!0,Jt=null,n=l_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ci(),r===s){e=Mn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return h_(e),t===null&&td(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Yh(r,s)?o=null:i!==null&&Yh(r,i)&&(e.flags|=32),O_(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&td(e),null;case 13:return M_(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hi(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),Mg(t,e,r,s,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,me($l,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===s.children&&!It.current){e=Mn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=bn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),nd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),nd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}pt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Js(e,n),s=Wt(s),r=r(s),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,s=Yt(r,e.pendingProps),s=Yt(r.type,s),Fg(t,e,r,s,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),gl(t,e),e.tag=1,St(r)?(t=!0,Ul(e)):t=!1,Js(e,n),P_(e,r,s),sd(e,r,s,n),ad(null,e,r,!0,t,n);case 19:return F_(t,e,n);case 22:return j_(t,e,n)}throw Error(F(156,e.tag))};function tw(t,e){return N0(t,e)}function vS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new vS(t,e,n,r)}function Bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _S(t){if(typeof t=="function")return Bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===af)return 11;if(t===lf)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return os(n.children,s,i,e);case of:o=8,s|=8;break;case Nh:return t=Bt(12,n,e,s|2),t.elementType=Nh,t.lanes=i,t;case Rh:return t=Bt(13,n,e,s),t.elementType=Rh,t.lanes=i,t;case kh:return t=Bt(19,n,e,s),t.elementType=kh,t.lanes=i,t;case h0:return Ou(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u0:o=10;break e;case c0:o=9;break e;case af:o=11;break e;case lf:o=14;break e;case er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function os(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function Ou(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=h0,t.lanes=n,t.stateNode={isHidden:!1},t}function uh(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function ch(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qc(0),this.expirationTimes=qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,r,s,i,o,l,u){return t=new wS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Bt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(i),t}function xS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nw(t){if(!t)return Nr;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(St(n))return n_(t,n,e)}return e}function rw(t,e,n,r,s,i,o,l,u){return t=$f(n,r,!0,t,s,i,o,l,u),t.context=nw(null),n=t.current,r=mt(),s=wr(n),i=bn(r,s),i.callback=e??null,vr(n,i,s),t.current.lanes=s,ca(t,s,r),Ct(t,r),t}function Lu(t,e,n,r){var s=e.current,i=mt(),o=wr(s);return n=nw(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(s,e,o),t!==null&&(nn(t,s,o,i),fl(t,s,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Xg(t,e),(t=t.alternate)&&Xg(t,e)}function ES(){return null}var sw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}Mu.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Lu(t,e,null,null)};Mu.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){Lu(null,t,null,null)}),e[On]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=j0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&L0(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function TS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Zl(o);i.call(c)}}var o=rw(e,r,t,0,null,!1,!1,"",Jg);return t._reactRootContainer=o,t[On]=o.current,Bo(t.nodeType===8?t.parentNode:t),fs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Zl(u);l.call(c)}}var u=$f(t,0,!1,null,null,!1,!1,"",Jg);return t._reactRootContainer=u,t[On]=u.current,Bo(t.nodeType===8?t.parentNode:t),fs(function(){Lu(e,u,n,r)}),u}function Uu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Zl(o);l.call(u)}}Lu(e,o,t,s)}else o=TS(n,e,t,s,r);return Zl(o)}D0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(hf(e,n|1),Ct(e,be()),!(ae&6)&&(pi=be()+500,Fr()))}break;case 13:fs(function(){var r=Ln(t,1);if(r!==null){var s=mt();nn(r,t,1,s)}}),qf(t,1)}};df=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=mt();nn(e,t,134217728,n)}qf(t,134217728)}};V0=function(t){if(t.tag===13){var e=wr(t),n=Ln(t,e);if(n!==null){var r=mt();nn(n,t,e,r)}qf(t,e)}};j0=function(){return de};O0=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Uh=function(t,e,n){switch(e){case"input":if(Dh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ku(r);if(!s)throw Error(F(90));f0(r),Dh(r,s)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};E0=Ff;T0=fs;var IS={usingClientEntryPoint:!1,Events:[da,Us,ku,w0,x0,Ff]},lo={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SS={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Cu=tl.inject(SS),yn=tl}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IS;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(F(200));return xS(t,e,null,n)};Ot.createRoot=function(t,e){if(!Wf(t))throw Error(F(299));var n=!1,r="",s=sw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,r,s),t[On]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Hf(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return fs(t)};Ot.hydrate=function(t,e,n){if(!Fu(e))throw Error(F(200));return Uu(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=sw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rw(e,null,t,1,n??null,s,!1,i,o),t[On]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Mu(e)};Ot.render=function(t,e,n){if(!Fu(e))throw Error(F(200));return Uu(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!Fu(t))throw Error(F(40));return t._reactRootContainer?(fs(function(){Uu(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};Ot.unstable_batchedUpdates=Ff;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Uu(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iw)}catch(t){console.error(t)}}iw(),i0.exports=Ot;var CS=i0.exports,ow,Zg=CS;ow=Zg.createRoot,Zg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xo.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const ey="popstate";function AS(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return _d("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:eu(s)}return RS(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NS(){return Math.random().toString(36).substr(2,8)}function ty(t,e){return{usr:t.state,key:t.key,idx:e}}function _d(t,e,n,r){return n===void 0&&(n=null),Xo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ri(e):e,{state:n,key:e&&e.key||r||NS()})}function eu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ri(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function RS(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=hr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Xo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=hr.Pop;let A=f(),x=A==null?null:A-c;c=A,u&&u({action:l,location:P.location,delta:x})}function g(A,x){l=hr.Push;let y=_d(P.location,A,x);c=f()+1;let T=ty(y,c),k=P.createHref(y);try{o.pushState(T,"",k)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;s.location.assign(k)}i&&u&&u({action:l,location:P.location,delta:1})}function I(A,x){l=hr.Replace;let y=_d(P.location,A,x);c=f();let T=ty(y,c),k=P.createHref(y);o.replaceState(T,"",k),i&&u&&u({action:l,location:P.location,delta:0})}function N(A){let x=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof A=="string"?A:eu(A);return y=y.replace(/ $/,"%20"),Re(x,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,x)}let P={get action(){return l},get location(){return t(s,o)},listen(A){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(ey,m),u=A,()=>{s.removeEventListener(ey,m),u=null}},createHref(A){return e(s,A)},createURL:N,encodeLocation(A){let x=N(A);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:I,go(A){return o.go(A)}};return P}var ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ny||(ny={}));function kS(t,e,n){return n===void 0&&(n="/"),PS(t,e,n)}function PS(t,e,n,r){let s=typeof e=="string"?Ri(e):e,i=mi(s.pathname||"/",n);if(i==null)return null;let o=aw(t);bS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=$S(i);l=zS(o[u],c)}return l}function aw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Er([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(Re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),aw(i.children,e,f,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:FS(c,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of lw(i.path))s(i,o,u)}),e}function lw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=lw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function bS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:US(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DS=/^:[\w-]+$/,VS=3,jS=2,OS=1,LS=10,MS=-2,ry=t=>t==="*";function FS(t,e){let n=t.split("/"),r=n.length;return n.some(ry)&&(r+=MS),e&&(r+=jS),n.filter(s=>!ry(s)).reduce((s,i)=>s+(DS.test(i)?VS:i===""?OS:LS),r)}function US(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function zS(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=wd({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:Er([i,m.pathname]),pathnameBase:KS(Er([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=Er([i,m.pathnameBase]))}return o}function wd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=BS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:g,isOptional:I}=f;if(g==="*"){let P=l[m]||"";o=i.slice(0,i.length-P.length).replace(/(.)\/+$/,"$1")}const N=l[m];return I&&!N?c[g]=void 0:c[g]=(N||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function BS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function $S(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const qS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HS=t=>qS.test(t);function WS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ri(t):t,i;if(n)if(HS(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Gf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=sy(n.substring(1),"/"):i=sy(n,e)}else i=e;return{pathname:i,search:QS(r),hash:YS(s)}}function sy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function hh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function uw(t,e){let n=GS(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function cw(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ri(t):(s=Xo({},t),Re(!s.pathname||!s.pathname.includes("?"),hh("?","pathname","search",s)),Re(!s.pathname||!s.pathname.includes("#"),hh("#","pathname","hash",s)),Re(!s.search||!s.search.includes("#"),hh("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=WS(s,l),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const Er=t=>t.join("/").replace(/\/\/+/g,"/"),KS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),QS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hw=["post","put","patch","delete"];new Set(hw);const JS=["get",...hw];new Set(JS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}const zu=V.createContext(null),dw=V.createContext(null),Ur=V.createContext(null),Bu=V.createContext(null),zr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),fw=V.createContext(null);function ZS(t,e){let{relative:n}=e===void 0?{}:e;pa()||Re(!1);let{basename:r,navigator:s}=V.useContext(Ur),{hash:i,pathname:o,search:l}=qu(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Er([r,o])),s.createHref({pathname:u,search:l,hash:i})}function pa(){return V.useContext(Bu)!=null}function ki(){return pa()||Re(!1),V.useContext(Bu).location}function pw(t){V.useContext(Ur).static||V.useLayoutEffect(t)}function $u(){let{isDataRoute:t}=V.useContext(zr);return t?dC():eC()}function eC(){pa()||Re(!1);let t=V.useContext(zu),{basename:e,future:n,navigator:r}=V.useContext(Ur),{matches:s}=V.useContext(zr),{pathname:i}=ki(),o=JSON.stringify(uw(s,n.v7_relativeSplatPath)),l=V.useRef(!1);return pw(()=>{l.current=!0}),V.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=cw(c,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Er([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,i,t])}function mw(){let{matches:t}=V.useContext(zr),e=t[t.length-1];return e?e.params:{}}function qu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(Ur),{matches:s}=V.useContext(zr),{pathname:i}=ki(),o=JSON.stringify(uw(s,r.v7_relativeSplatPath));return V.useMemo(()=>cw(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function tC(t,e){return nC(t,e)}function nC(t,e,n,r){pa()||Re(!1);let{navigator:s}=V.useContext(Ur),{matches:i}=V.useContext(zr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ki(),f;if(e){var m;let A=typeof e=="string"?Ri(e):e;u==="/"||(m=A.pathname)!=null&&m.startsWith(u)||Re(!1),f=A}else f=c;let g=f.pathname||"/",I=g;if(u!=="/"){let A=u.replace(/^\//,"").split("/");I="/"+g.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=kS(t,{pathname:I}),P=aC(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:Er([u,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:Er([u,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,n,r);return e&&P?V.createElement(Bu.Provider,{value:{location:Jo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:hr.Pop}},P):P}function rC(){let t=hC(),e=XS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:s},n):null,null)}const sC=V.createElement(rC,null);class iC extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(zr.Provider,{value:this.props.routeContext},V.createElement(fw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oC(t){let{routeContext:e,match:n,children:r}=t,s=V.useContext(zu);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(zr.Provider,{value:e},r)}function aC(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Re(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:I}=n,N=m.route.loader&&g[m.route.id]===void 0&&(!I||I[m.route.id]===void 0);if(m.route.lazy||N){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let I,N=!1,P=null,A=null;n&&(I=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||sC,u&&(c<0&&g===0?(fC("route-fallback"),N=!0,A=null):c===g&&(N=!0,A=m.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,g+1)),y=()=>{let T;return I?T=P:N?T=A:m.route.Component?T=V.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=f,V.createElement(oC,{match:m,routeContext:{outlet:f,matches:x,isDataRoute:n!=null},children:T})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?V.createElement(iC,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:y(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):y()},null)}var gw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gw||{}),yw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yw||{});function lC(t){let e=V.useContext(zu);return e||Re(!1),e}function uC(t){let e=V.useContext(dw);return e||Re(!1),e}function cC(t){let e=V.useContext(zr);return e||Re(!1),e}function vw(t){let e=cC(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function hC(){var t;let e=V.useContext(fw),n=uC(),r=vw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function dC(){let{router:t}=lC(gw.UseNavigateStable),e=vw(yw.UseNavigateStable),n=V.useRef(!1);return pw(()=>{n.current=!0}),V.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Jo({fromRouteId:e},i)))},[t,e])}const iy={};function fC(t,e,n){iy[t]||(iy[t]=!0)}function pC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function _t(t){Re(!1)}function mC(t){let{basename:e="/",children:n=null,location:r,navigationType:s=hr.Pop,navigator:i,static:o=!1,future:l}=t;pa()&&Re(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:i,static:o,future:Jo({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=Ri(r));let{pathname:f="/",search:m="",hash:g="",state:I=null,key:N="default"}=r,P=V.useMemo(()=>{let A=mi(f,u);return A==null?null:{location:{pathname:A,search:m,hash:g,state:I,key:N},navigationType:s}},[u,f,m,g,I,N,s]);return P==null?null:V.createElement(Ur.Provider,{value:c},V.createElement(Bu.Provider,{children:n,value:P}))}function gC(t){let{children:e,location:n}=t;return tC(xd(e),n)}new Promise(()=>{});function xd(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,s)=>{if(!V.isValidElement(r))return;let i=[...e,s];if(r.type===V.Fragment){n.push.apply(n,xd(r.props.children,i));return}r.type!==_t&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xd(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tu.apply(this,arguments)}function _w(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function yC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vC(t,e){return t.button===0&&(!e||e==="_self")&&!yC(t)}const _C=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wC=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],xC="6";try{window.__reactRouterVersion=xC}catch{}const EC=V.createContext({isTransitioning:!1}),TC="startTransition",oy=m1[TC];function IC(t){let{basename:e,children:n,future:r,window:s}=t,i=V.useRef();i.current==null&&(i.current=AS({window:s,v5Compat:!0}));let o=i.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=V.useCallback(m=>{c&&oy?oy(()=>u(m)):u(m)},[u,c]);return V.useLayoutEffect(()=>o.listen(f),[o,f]),V.useEffect(()=>pC(r),[r]),V.createElement(mC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const SC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=V.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:m}=e,g=_w(e,_C),{basename:I}=V.useContext(Ur),N,P=!1;if(typeof c=="string"&&CC.test(c)&&(N=c,SC))try{let T=new URL(window.location.href),k=c.startsWith("//")?new URL(T.protocol+c):new URL(c),L=mi(k.pathname,I);k.origin===T.origin&&L!=null?c=L+k.search+k.hash:P=!0}catch{}let A=ZS(c,{relative:s}),x=RC(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:s,viewTransition:m});function y(T){r&&r(T),T.defaultPrevented||x(T)}return V.createElement("a",tu({},g,{href:N||A,onClick:P||i?r:y,ref:n,target:u}))}),AC=V.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:c,children:f}=e,m=_w(e,wC),g=qu(u,{relative:m.relative}),I=ki(),N=V.useContext(dw),{navigator:P,basename:A}=V.useContext(Ur),x=N!=null&&kC(g)&&c===!0,y=P.encodeLocation?P.encodeLocation(g).pathname:g.pathname,T=I.pathname,k=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;s||(T=T.toLowerCase(),k=k?k.toLowerCase():null,y=y.toLowerCase()),k&&A&&(k=mi(k,A)||k);const L=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let U=T===y||!o&&T.startsWith(y)&&T.charAt(L)==="/",w=k!=null&&(k===y||!o&&k.startsWith(y)&&k.charAt(y.length)==="/"),v={isActive:U,isPending:w,isTransitioning:x},E=U?r:void 0,C;typeof i=="function"?C=i(v):C=[i,U?"active":null,w?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(v):l;return V.createElement(lt,tu({},m,{"aria-current":E,className:C,ref:n,style:R,to:u,viewTransition:c}),typeof f=="function"?f(v):f)});var Ed;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var ay;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ay||(ay={}));function NC(t){let e=V.useContext(zu);return e||Re(!1),e}function RC(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,u=$u(),c=ki(),f=qu(t,{relative:o});return V.useCallback(m=>{if(vC(m,n)){m.preventDefault();let g=r!==void 0?r:eu(c)===eu(f);u(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[c,u,f,r,s,n,t,i,o,l])}function kC(t,e){e===void 0&&(e={});let n=V.useContext(EC);n==null&&Re(!1);let{basename:r}=NC(Ed.useViewTransitionState),s=qu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=mi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=mi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return wd(s.pathname,o)!=null||wd(s.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ie=(t,e)=>{const n=V.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>V.createElement("svg",{ref:f,...PC,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${bC(t)}`,l].join(" "),...c},[...e.map(([m,g])=>V.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=ie("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=ie("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=ie("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=ie("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=ie("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=ie("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=ie("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=ie("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=ie("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=ie("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=ie("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=ie("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=ie("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=ie("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=ie("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=ie("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=ie("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=ie("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=ie("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=ie("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=ie("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=ie("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=ie("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=ie("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=ie("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=ie("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=ie("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=ie("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=ie("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=ie("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=ie("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=ie("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=ie("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),JC=[{path:"/",name:"Dashboard",icon:WC},{path:"/drivers",name:"Quản lý tài xế",icon:Tw},{path:"/night-shift",name:"Lịch trực đêm",icon:xw},{path:"/finance",name:"Tiền thế chân",icon:Qf},{path:"/revenue",name:"Quản lý doanh thu",icon:Zo},{path:"/expenses",name:"Chi phí",icon:Id},{path:"/reports",name:"Báo cáo",icon:ww},{path:"/settings",name:"Cài đặt",icon:Ew}];function ZC(){const[t,e]=V.useState(!1),n=ki();return h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>e(!t),className:"lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar text-white shadow-lg",children:t?h.jsx(Iw,{size:24}):h.jsx(GC,{size:24})}),t&&h.jsx("div",{className:"lg:hidden fixed inset-0 bg-black/50 z-30",onClick:()=>e(!1)}),h.jsxs("aside",{className:`fixed top-0 left-0 h-full w-64 bg-sidebar text-white z-40 transform transition-transform duration-300 lg:translate-x-0 ${t?"translate-x-0":"-translate-x-full"}`,children:[h.jsxs("div",{className:"flex items-center gap-3 px-6 py-6 border-b border-white/10",children:[h.jsx("div",{className:"w-10 h-10 bg-taxi-500 rounded-xl flex items-center justify-center",children:h.jsx(Rr,{size:24,className:"text-white"})}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-lg font-bold",children:"NS-QLY"}),h.jsx("p",{className:"text-xs text-gray-400",children:"Quản lý Taxi"})]})]}),h.jsx("nav",{className:"mt-6 px-3",children:h.jsx("ul",{className:"space-y-1",children:JC.map(r=>{const s=r.icon,i=n.pathname===r.path||r.path!=="/"&&n.pathname.startsWith(r.path);return h.jsx("li",{children:h.jsxs(AC,{to:r.path,onClick:()=>e(!1),className:`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${i?"bg-taxi-500 text-white shadow-lg shadow-taxi-500/30":"text-gray-300 hover:bg-sidebar-hover hover:text-white"}`,children:[h.jsx(s,{size:20,className:`transition-transform group-hover:scale-110 ${i?"text-white":"text-gray-400 group-hover:text-taxi-400"}`}),h.jsx("span",{className:"font-medium",children:r.name})]})},r.path)})})}),h.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 border-t border-white/10",children:h.jsxs("div",{className:"flex items-center gap-3 px-2",children:[h.jsx("div",{className:"w-8 h-8 bg-taxi-600 rounded-full flex items-center justify-center text-sm font-semibold",children:"A"}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("p",{className:"text-sm font-medium truncate",children:"Admin"}),h.jsx("p",{className:"text-xs text-gray-400 truncate",children:"admin@taxi.vn"})]})]})})]})]})}function eA({children:t}){return h.jsxs("div",{className:"min-h-screen bg-slate-50",children:[h.jsx(ZC,{}),h.jsx("main",{className:"lg:ml-64 min-h-screen",children:h.jsx("div",{className:"p-4 lg:p-8",children:t})})]})}const tA=()=>{};var ly={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new rA;const g=i<<2|l>>4;if(r.push(g),c!==64){const I=l<<4&240|c>>2;if(r.push(I),m!==64){const N=c<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sA=function(t){const e=Sw(t);return Cw.encodeByteArray(e,!0)},ru=function(t){return sA(t).replace(/\./g,"")},Aw=function(t){try{return Cw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oA=()=>iA().__FIREBASE_DEFAULTS__,aA=()=>{if(typeof process>"u"||typeof ly>"u")return;const t=ly.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Aw(t[1]);return e&&JSON.parse(e)},Ku=()=>{try{return tA()||oA()||aA()||lA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nw=t=>{var e,n;return(n=(e=Ku())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},uA=t=>{const e=Nw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rw=()=>{var t;return(t=Ku())==null?void 0:t.config},kw=t=>{var e;return(e=Ku())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Pi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pw(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function hA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ru(JSON.stringify(n)),ru(JSON.stringify(o)),""].join(".")}const No={};function dA(){const t={prod:[],emulator:[]};for(const e of Object.keys(No))No[e]?t.emulator.push(e):t.prod.push(e);return t}function fA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let uy=!1;function bw(t,e){if(typeof window>"u"||typeof document>"u"||!Pi(window.location.host)||No[t]===e||No[t]||uy)return;No[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=dA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{uy=!0,o()},g}function f(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=fA(r),I=n("text"),N=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),A=document.getElementById(P)||document.createElement("a"),x=n("preprendIcon"),y=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const T=g.element;l(T),f(A,P);const k=c();u(y,x),T.append(y,N,A,k),document.body.appendChild(T)}i?(N.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function mA(){var e;const t=(e=Ku())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vA(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _A(){return!mA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vw(){try{return typeof indexedDB=="object"}catch{return!1}}function jw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function wA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xA,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Es.prototype.create)}}class Es{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new un(s,l,r)}}function EA(t,e){return t.replace(TA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TA=/\{\$([^}]+)}/g;function IA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cy(i)&&cy(o)){if(!kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function SA(t,e){const n=new CA(t,e);return n.subscribe.bind(n)}class CA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=dh),s.error===void 0&&(s.error=dh),s.complete===void 0&&(s.complete=dh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=1e3,RA=2,kA=4*60*60*1e3,PA=.5;function hy(t,e=NA,n=RA){const r=e*Math.pow(n,t),s=Math.round(PA*r*(Math.random()-.5)*2);return Math.min(kA,r+s)}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VA(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DA(t){return t===Zr?void 0:t}function VA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const OA={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},LA=ne.INFO,MA={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},FA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=MA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qu{constructor(e){this.name=e,this._logLevel=LA,this._logHandler=FA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const UA=(t,e)=>e.some(n=>t instanceof n);let dy,fy;function zA(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BA(){return fy||(fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ow=new WeakMap,Cd=new WeakMap,Lw=new WeakMap,fh=new WeakMap,Yf=new WeakMap;function $A(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ow.set(n,t)}).catch(()=>{}),Yf.set(e,t),e}function qA(t){if(Cd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cd.set(t,e)}let Ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HA(t){Ad=t(Ad)}function WA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ph(this),e,...n);return Lw.set(r,e.sort?e.sort():[e]),Tr(r)}:BA().includes(t)?function(...e){return t.apply(ph(this),e),Tr(Ow.get(this))}:function(...e){return Tr(t.apply(ph(this),e))}}function GA(t){return typeof t=="function"?WA(t):(t instanceof IDBTransaction&&qA(t),UA(t,zA())?new Proxy(t,Ad):t)}function Tr(t){if(t instanceof IDBRequest)return $A(t);if(fh.has(t))return fh.get(t);const e=GA(t);return e!==t&&(fh.set(t,e),Yf.set(e,t)),e}const ph=t=>Yf.get(t);function Mw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tr(o.result),u.oldVersion,u.newVersion,Tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const KA=["get","getKey","getAll","getAllKeys","count"],QA=["put","add","delete","clear"],mh=new Map;function py(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mh.get(e))return mh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return mh.set(e,i),i}HA(t=>({...t,get:(e,n,r)=>py(e,n)||t.get(e,n,r),has:(e,n)=>!!py(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nd="@firebase/app",my="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Qu("@firebase/app"),JA="@firebase/app-compat",ZA="@firebase/analytics-compat",eN="@firebase/analytics",tN="@firebase/app-check-compat",nN="@firebase/app-check",rN="@firebase/auth",sN="@firebase/auth-compat",iN="@firebase/database",oN="@firebase/data-connect",aN="@firebase/database-compat",lN="@firebase/functions",uN="@firebase/functions-compat",cN="@firebase/installations",hN="@firebase/installations-compat",dN="@firebase/messaging",fN="@firebase/messaging-compat",pN="@firebase/performance",mN="@firebase/performance-compat",gN="@firebase/remote-config",yN="@firebase/remote-config-compat",vN="@firebase/storage",_N="@firebase/storage-compat",wN="@firebase/firestore",xN="@firebase/ai",EN="@firebase/firestore-compat",TN="firebase",IN="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="[DEFAULT]",SN={[Nd]:"fire-core",[JA]:"fire-core-compat",[eN]:"fire-analytics",[ZA]:"fire-analytics-compat",[nN]:"fire-app-check",[tN]:"fire-app-check-compat",[rN]:"fire-auth",[sN]:"fire-auth-compat",[iN]:"fire-rtdb",[oN]:"fire-data-connect",[aN]:"fire-rtdb-compat",[lN]:"fire-fn",[uN]:"fire-fn-compat",[cN]:"fire-iid",[hN]:"fire-iid-compat",[dN]:"fire-fcm",[fN]:"fire-fcm-compat",[pN]:"fire-perf",[mN]:"fire-perf-compat",[gN]:"fire-rc",[yN]:"fire-rc-compat",[vN]:"fire-gcs",[_N]:"fire-gcs-compat",[wN]:"fire-fst",[EN]:"fire-fst-compat",[xN]:"fire-vertex","fire-js":"fire-js",[TN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Map,CN=new Map,kd=new Map;function gy(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(kd.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;kd.set(e,t);for(const n of su.values())gy(n,t);for(const n of CN.values())gy(n,t);return!0}function Ts(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Es("app","Firebase",AN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=IN;function Fw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ir.create("bad-app-name",{appName:String(s)});if(n||(n=Rw()),!n)throw Ir.create("no-options");const i=su.get(s);if(i){if(kr(n,i.options)&&kr(r,i.config))return i;throw Ir.create("duplicate-app",{appName:s})}const o=new jA(s);for(const u of kd.values())o.addComponent(u);const l=new NN(n,r,o);return su.set(s,l),l}function Xf(t=Rd){const e=su.get(t);if(!e&&t===Rd&&Rw())return Fw();if(!e)throw Ir.create("no-app",{appName:t});return e}function qt(t,e,n){let r=SN[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(o.join(" "));return}In(new on(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const RN="firebase-heartbeat-database",kN=1,ea="firebase-heartbeat-store";let gh=null;function Uw(){return gh||(gh=Mw(RN,kN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),gh}async function PN(t){try{const n=(await Uw()).transaction(ea),r=await n.objectStore(ea).get(zw(t));return await n.done,r}catch(e){if(e instanceof un)Fn.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function yy(t,e){try{const r=(await Uw()).transaction(ea,"readwrite");await r.objectStore(ea).put(e,zw(t)),await r.done}catch(n){if(n instanceof un)Fn.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function zw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bN=1024,DN=30;class VN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ON(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>DN){const o=LN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vy(),{heartbeatsToSend:r,unsentEntries:s}=jN(this._heartbeatsCache.heartbeats),i=ru(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function vy(){return new Date().toISOString().substring(0,10)}function jN(t,e=bN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_y(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ON{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vw()?jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _y(t){return ru(JSON.stringify({version:2,heartbeats:t})).length}function LN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){In(new on("platform-logger",e=>new YA(e),"PRIVATE")),In(new on("heartbeat",e=>new VN(e),"PRIVATE")),qt(Nd,my,t),qt(Nd,my,"esm2020"),qt("fire-js","")}MN("");var FN="firebase",UN="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(FN,UN,"app");const Bw="@firebase/installations",Jf="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=1e4,qw=`w:${Jf}`,Hw="FIS_v2",zN="https://firebaseinstallations.googleapis.com/v1",BN=60*60*1e3,$N="installations",qN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ps=new Es($N,qN,HN);function Ww(t){return t instanceof un&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw({projectId:t}){return`${zN}/projects/${t}/installations`}function Kw(t){return{token:t.token,requestStatus:2,expiresIn:GN(t.expiresIn),creationTime:Date.now()}}async function Qw(t,e){const r=(await e.json()).error;return ps.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WN(t,{refreshToken:e}){const n=Yw(t);return n.append("Authorization",KN(e)),n}async function Xw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GN(t){return Number(t.replace("s","000"))}function KN(t){return`${Hw} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Gw(t),s=Yw(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Hw,appId:t.appId,sdkVersion:qw},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await Xw(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Kw(c.authToken)}}else throw await Qw("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/^[cdef][\w-]{21}$/,Pd="";function JN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ZN(t);return XN.test(n)?n:Pd}catch{return Pd}}function ZN(t){return YN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Map;function ex(t,e){const n=Yu(t);tx(n,e),e2(n,e)}function tx(t,e){const n=Zw.get(t);if(n)for(const r of n)r(e)}function e2(t,e){const n=t2();n&&n.postMessage({key:t,fid:e}),n2()}let rs=null;function t2(){return!rs&&"BroadcastChannel"in self&&(rs=new BroadcastChannel("[Firebase] FID Change"),rs.onmessage=t=>{tx(t.data.key,t.data.fid)}),rs}function n2(){Zw.size===0&&rs&&(rs.close(),rs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="firebase-installations-database",s2=1,ms="firebase-installations-store";let yh=null;function Zf(){return yh||(yh=Mw(r2,s2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ms)}}})),yh}async function iu(t,e){const n=Yu(t),s=(await Zf()).transaction(ms,"readwrite"),i=s.objectStore(ms),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ex(t,e.fid),e}async function nx(t){const e=Yu(t),r=(await Zf()).transaction(ms,"readwrite");await r.objectStore(ms).delete(e),await r.done}async function Xu(t,e){const n=Yu(t),s=(await Zf()).transaction(ms,"readwrite"),i=s.objectStore(ms),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&ex(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t){let e;const n=await Xu(t.appConfig,r=>{const s=i2(r),i=o2(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Pd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function i2(t){const e=t||{fid:JN(),registrationStatus:0};return rx(e)}function o2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ps.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=a2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:l2(t)}:{installationEntry:e}}async function a2(t,e){try{const n=await QN(t,e);return iu(t.appConfig,n)}catch(n){throw Ww(n)&&n.customData.serverCode===409?await nx(t.appConfig):await iu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function l2(t){let e=await wy(t.appConfig);for(;e.registrationStatus===1;)await Jw(100),e=await wy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ep(t);return r||n}return e}function wy(t){return Xu(t,e=>{if(!e)throw ps.create("installation-not-found");return rx(e)})}function rx(t){return u2(t)?{fid:t.fid,registrationStatus:0}:t}function u2(t){return t.registrationStatus===1&&t.registrationTime+$w<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2({appConfig:t,heartbeatServiceProvider:e},n){const r=h2(t,n),s=WN(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:qw,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await Xw(()=>fetch(r,l));if(u.ok){const c=await u.json();return Kw(c)}else throw await Qw("Generate Auth Token",u)}function h2(t,{fid:e}){return`${Gw(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(t,e=!1){let n;const r=await Xu(t.appConfig,i=>{if(!sx(i))throw ps.create("not-registered");const o=i.authToken;if(!e&&p2(o))return i;if(o.requestStatus===1)return n=d2(t,e),i;{if(!navigator.onLine)throw ps.create("app-offline");const l=g2(i);return n=f2(t,l),l}});return n?await n:r.authToken}async function d2(t,e){let n=await xy(t.appConfig);for(;n.authToken.requestStatus===1;)await Jw(100),n=await xy(t.appConfig);const r=n.authToken;return r.requestStatus===0?tp(t,e):r}function xy(t){return Xu(t,e=>{if(!sx(e))throw ps.create("not-registered");const n=e.authToken;return y2(n)?{...e,authToken:{requestStatus:0}}:e})}async function f2(t,e){try{const n=await c2(t,e),r={...e,authToken:n};return await iu(t.appConfig,r),n}catch(n){if(Ww(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nx(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await iu(t.appConfig,r)}throw n}}function sx(t){return t!==void 0&&t.registrationStatus===2}function p2(t){return t.requestStatus===2&&!m2(t)}function m2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BN}function g2(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function y2(t){return t.requestStatus===1&&t.requestTime+$w<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t){const e=t,{installationEntry:n,registrationPromise:r}=await ep(e);return r?r.catch(console.error):tp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t,e=!1){const n=t;return await w2(n),(await tp(n,e)).token}async function w2(t){const{registrationPromise:e}=await ep(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(t){if(!t||!t.options)throw vh("App Configuration");if(!t.name)throw vh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw vh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function vh(t){return ps.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="installations",E2="installations-internal",T2=t=>{const e=t.getProvider("app").getImmediate(),n=x2(e),r=Ts(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},I2=t=>{const e=t.getProvider("app").getImmediate(),n=Ts(e,ix).getImmediate();return{getId:()=>v2(n),getToken:s=>_2(n,s)}};function S2(){In(new on(ix,T2,"PUBLIC")),In(new on(E2,I2,"PRIVATE"))}S2();qt(Bw,Jf);qt(Bw,Jf,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="analytics",C2="firebase_id",A2="origin",N2=60*1e3,R2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",np="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new Qu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vt=new Es("analytics","Analytics",k2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t){if(!t.startsWith(np)){const e=Vt.create("invalid-gtag-resource",{gtagURL:t});return gt.warn(e.message),""}return t}function ox(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function b2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function D2(t,e){const n=b2("firebase-js-sdk-policy",{createScriptURL:P2}),r=document.createElement("script"),s=`${np}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function V2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function j2(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await ox(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){gt.error(l)}t("config",s,i)}async function O2(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await ox(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){gt.error(i)}}function L2(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await O2(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await j2(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){gt.error(l)}}return s}function M2(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=L2(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function F2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(np)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=30,z2=1e3;class B2{constructor(e={},n=z2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ax=new B2;function $2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function q2(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:$2(n)},s=R2.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Vt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function H2(t,e=ax,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Vt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Vt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new K2;return setTimeout(async()=>{l.abort()},N2),lx({appId:r,apiKey:s,measurementId:i},o,l,e)}async function lx(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=ax){var l;const{appId:i,measurementId:o}=t;try{await W2(r,e)}catch(u){if(o)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await q2(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!G2(c)){if(s.deleteThrottleMetadata(i),o)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?hy(n,s.intervalMillis,U2):hy(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,m),gt.debug(`Calling attemptFetch again in ${f} millis`),lx(t,m,r,s)}}function W2(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function G2(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class K2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Q2(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function Y2(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(){if(Vw())try{await jw()}catch(t){return gt.warn(Vt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gt.warn(Vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function J2(t,e,n,r,s,i,o){const l=H2(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>gt.error(g)),e.push(l);const u=X2().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);F2(i)||D2(i,c.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[A2]="firebase",m.update=!0,f!=null&&(m[C2]=f),s("config",c.measurementId,m),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.app=e}_delete(){return delete ei[this.app.options.appId],Promise.resolve()}}let ei={},Ey=[];const Ty={};let _h="dataLayer",eR="gtag",Iy,rp,Sy=!1;function tR(){const t=[];if(Dw()&&t.push("This is a browser extension environment."),wA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Vt.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function nR(t,e,n){tR();const r=t.options.appId;if(!r)throw Vt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vt.create("no-api-key");if(ei[r]!=null)throw Vt.create("already-exists",{id:r});if(!Sy){V2(_h);const{wrappedGtag:i,gtagCore:o}=M2(ei,Ey,Ty,_h,eR);rp=i,Iy=o,Sy=!0}return ei[r]=J2(t,Ey,Ty,e,Iy,_h,n),new Z2(t)}function rR(t=Xf()){t=Ke(t);const e=Ts(t,ou);return e.isInitialized()?e.getImmediate():sR(t)}function sR(t,e={}){const n=Ts(t,ou);if(n.isInitialized()){const s=n.getImmediate();if(kr(e,n.getOptions()))return s;throw Vt.create("already-initialized")}return n.initialize({options:e})}function iR(t,e,n){t=Ke(t),Y2(rp,ei[t.app.options.appId],e,n).catch(r=>gt.error(r))}function oR(t,e,n,r){t=Ke(t),Q2(rp,ei[t.app.options.appId],e,n,r).catch(s=>gt.error(s))}const Cy="@firebase/analytics",Ay="0.10.19";function aR(){In(new on(ou,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return nR(r,s,n)},"PUBLIC")),In(new on("analytics-internal",t,"PRIVATE")),qt(Cy,Ay),qt(Cy,Ay,"esm2020");function t(e){try{const n=e.getProvider(ou).getImmediate();return{logEvent:(r,s,i)=>oR(n,r,s,i),setUserProperties:(r,s)=>iR(n,r,s)}}catch(n){throw Vt.create("interop-component-reg-failed",{reason:n})}}}aR();var Ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,ux;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function E(){}E.prototype=v.prototype,w.F=v.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(C,R,b){for(var S=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)S[Ce-2]=arguments[Ce];return v.prototype[R].apply(C,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,E){E||(E=0);const C=Array(16);if(typeof v=="string")for(var R=0;R<16;++R)C[R]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(R=0;R<16;++R)C[R]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=w.g[0],E=w.g[1],R=w.g[2];let b=w.g[3],S;S=v+(b^E&(R^b))+C[0]+3614090360&4294967295,v=E+(S<<7&4294967295|S>>>25),S=b+(R^v&(E^R))+C[1]+3905402710&4294967295,b=v+(S<<12&4294967295|S>>>20),S=R+(E^b&(v^E))+C[2]+606105819&4294967295,R=b+(S<<17&4294967295|S>>>15),S=E+(v^R&(b^v))+C[3]+3250441966&4294967295,E=R+(S<<22&4294967295|S>>>10),S=v+(b^E&(R^b))+C[4]+4118548399&4294967295,v=E+(S<<7&4294967295|S>>>25),S=b+(R^v&(E^R))+C[5]+1200080426&4294967295,b=v+(S<<12&4294967295|S>>>20),S=R+(E^b&(v^E))+C[6]+2821735955&4294967295,R=b+(S<<17&4294967295|S>>>15),S=E+(v^R&(b^v))+C[7]+4249261313&4294967295,E=R+(S<<22&4294967295|S>>>10),S=v+(b^E&(R^b))+C[8]+1770035416&4294967295,v=E+(S<<7&4294967295|S>>>25),S=b+(R^v&(E^R))+C[9]+2336552879&4294967295,b=v+(S<<12&4294967295|S>>>20),S=R+(E^b&(v^E))+C[10]+4294925233&4294967295,R=b+(S<<17&4294967295|S>>>15),S=E+(v^R&(b^v))+C[11]+2304563134&4294967295,E=R+(S<<22&4294967295|S>>>10),S=v+(b^E&(R^b))+C[12]+1804603682&4294967295,v=E+(S<<7&4294967295|S>>>25),S=b+(R^v&(E^R))+C[13]+4254626195&4294967295,b=v+(S<<12&4294967295|S>>>20),S=R+(E^b&(v^E))+C[14]+2792965006&4294967295,R=b+(S<<17&4294967295|S>>>15),S=E+(v^R&(b^v))+C[15]+1236535329&4294967295,E=R+(S<<22&4294967295|S>>>10),S=v+(R^b&(E^R))+C[1]+4129170786&4294967295,v=E+(S<<5&4294967295|S>>>27),S=b+(E^R&(v^E))+C[6]+3225465664&4294967295,b=v+(S<<9&4294967295|S>>>23),S=R+(v^E&(b^v))+C[11]+643717713&4294967295,R=b+(S<<14&4294967295|S>>>18),S=E+(b^v&(R^b))+C[0]+3921069994&4294967295,E=R+(S<<20&4294967295|S>>>12),S=v+(R^b&(E^R))+C[5]+3593408605&4294967295,v=E+(S<<5&4294967295|S>>>27),S=b+(E^R&(v^E))+C[10]+38016083&4294967295,b=v+(S<<9&4294967295|S>>>23),S=R+(v^E&(b^v))+C[15]+3634488961&4294967295,R=b+(S<<14&4294967295|S>>>18),S=E+(b^v&(R^b))+C[4]+3889429448&4294967295,E=R+(S<<20&4294967295|S>>>12),S=v+(R^b&(E^R))+C[9]+568446438&4294967295,v=E+(S<<5&4294967295|S>>>27),S=b+(E^R&(v^E))+C[14]+3275163606&4294967295,b=v+(S<<9&4294967295|S>>>23),S=R+(v^E&(b^v))+C[3]+4107603335&4294967295,R=b+(S<<14&4294967295|S>>>18),S=E+(b^v&(R^b))+C[8]+1163531501&4294967295,E=R+(S<<20&4294967295|S>>>12),S=v+(R^b&(E^R))+C[13]+2850285829&4294967295,v=E+(S<<5&4294967295|S>>>27),S=b+(E^R&(v^E))+C[2]+4243563512&4294967295,b=v+(S<<9&4294967295|S>>>23),S=R+(v^E&(b^v))+C[7]+1735328473&4294967295,R=b+(S<<14&4294967295|S>>>18),S=E+(b^v&(R^b))+C[12]+2368359562&4294967295,E=R+(S<<20&4294967295|S>>>12),S=v+(E^R^b)+C[5]+4294588738&4294967295,v=E+(S<<4&4294967295|S>>>28),S=b+(v^E^R)+C[8]+2272392833&4294967295,b=v+(S<<11&4294967295|S>>>21),S=R+(b^v^E)+C[11]+1839030562&4294967295,R=b+(S<<16&4294967295|S>>>16),S=E+(R^b^v)+C[14]+4259657740&4294967295,E=R+(S<<23&4294967295|S>>>9),S=v+(E^R^b)+C[1]+2763975236&4294967295,v=E+(S<<4&4294967295|S>>>28),S=b+(v^E^R)+C[4]+1272893353&4294967295,b=v+(S<<11&4294967295|S>>>21),S=R+(b^v^E)+C[7]+4139469664&4294967295,R=b+(S<<16&4294967295|S>>>16),S=E+(R^b^v)+C[10]+3200236656&4294967295,E=R+(S<<23&4294967295|S>>>9),S=v+(E^R^b)+C[13]+681279174&4294967295,v=E+(S<<4&4294967295|S>>>28),S=b+(v^E^R)+C[0]+3936430074&4294967295,b=v+(S<<11&4294967295|S>>>21),S=R+(b^v^E)+C[3]+3572445317&4294967295,R=b+(S<<16&4294967295|S>>>16),S=E+(R^b^v)+C[6]+76029189&4294967295,E=R+(S<<23&4294967295|S>>>9),S=v+(E^R^b)+C[9]+3654602809&4294967295,v=E+(S<<4&4294967295|S>>>28),S=b+(v^E^R)+C[12]+3873151461&4294967295,b=v+(S<<11&4294967295|S>>>21),S=R+(b^v^E)+C[15]+530742520&4294967295,R=b+(S<<16&4294967295|S>>>16),S=E+(R^b^v)+C[2]+3299628645&4294967295,E=R+(S<<23&4294967295|S>>>9),S=v+(R^(E|~b))+C[0]+4096336452&4294967295,v=E+(S<<6&4294967295|S>>>26),S=b+(E^(v|~R))+C[7]+1126891415&4294967295,b=v+(S<<10&4294967295|S>>>22),S=R+(v^(b|~E))+C[14]+2878612391&4294967295,R=b+(S<<15&4294967295|S>>>17),S=E+(b^(R|~v))+C[5]+4237533241&4294967295,E=R+(S<<21&4294967295|S>>>11),S=v+(R^(E|~b))+C[12]+1700485571&4294967295,v=E+(S<<6&4294967295|S>>>26),S=b+(E^(v|~R))+C[3]+2399980690&4294967295,b=v+(S<<10&4294967295|S>>>22),S=R+(v^(b|~E))+C[10]+4293915773&4294967295,R=b+(S<<15&4294967295|S>>>17),S=E+(b^(R|~v))+C[1]+2240044497&4294967295,E=R+(S<<21&4294967295|S>>>11),S=v+(R^(E|~b))+C[8]+1873313359&4294967295,v=E+(S<<6&4294967295|S>>>26),S=b+(E^(v|~R))+C[15]+4264355552&4294967295,b=v+(S<<10&4294967295|S>>>22),S=R+(v^(b|~E))+C[6]+2734768916&4294967295,R=b+(S<<15&4294967295|S>>>17),S=E+(b^(R|~v))+C[13]+1309151649&4294967295,E=R+(S<<21&4294967295|S>>>11),S=v+(R^(E|~b))+C[4]+4149444226&4294967295,v=E+(S<<6&4294967295|S>>>26),S=b+(E^(v|~R))+C[11]+3174756917&4294967295,b=v+(S<<10&4294967295|S>>>22),S=R+(v^(b|~E))+C[2]+718787259&4294967295,R=b+(S<<15&4294967295|S>>>17),S=E+(b^(R|~v))+C[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,v){v===void 0&&(v=w.length);const E=v-this.blockSize,C=this.C;let R=this.h,b=0;for(;b<v;){if(R==0)for(;b<=E;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<v;)if(C[R++]=w.charCodeAt(b++),R==this.blockSize){s(this,C),R=0;break}}else for(;b<v;)if(C[R++]=w[b++],R==this.blockSize){s(this,C),R=0;break}}this.h=R,this.o+=v},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;v=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=v&255,v/=256;for(this.v(w),w=Array(16),v=0,E=0;E<4;++E)for(let C=0;C<32;C+=8)w[v++]=this.g[E]>>>C&255;return w};function i(w,v){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=v(w)}function o(w,v){this.h=v;const E=[];let C=!0;for(let R=w.length-1;R>=0;R--){const b=w[R]|0;C&&b==v||(E[R]=b,C=!1)}this.g=E}var l={};function u(w){return-128<=w&&w<128?i(w,function(v){return new o([v|0],v<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return A(c(-w));const v=[];let E=1;for(let C=0;w>=E;C++)v[C]=w/E|0,E*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return A(f(w.substring(1),v));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(v,8));let C=m;for(let b=0;b<w.length;b+=8){var R=Math.min(8,w.length-b);const S=parseInt(w.substring(b,b+R),v);R<8?(R=c(Math.pow(v,R)),C=C.j(R).add(c(S))):(C=C.j(E),C=C.add(c(S)))}return C}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-A(this).m();let w=0,v=1;for(let E=0;E<this.g.length;E++){const C=this.i(E);w+=(C>=0?C:4294967296+C)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(P(this))return"-"+A(this).toString(w);const v=c(Math.pow(w,6));var E=this;let C="";for(;;){const R=k(E,v).g;E=x(E,R.j(v));let b=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=R,N(E))return b+C;for(;b.length<6;)b="0"+b;C=b+C}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=x(this,w),P(w)?-1:N(w)?0:1};function A(w){const v=w.g.length,E=[];for(let C=0;C<v;C++)E[C]=~w.g[C];return new o(E,~w.h).add(g)}t.abs=function(){return P(this)?A(this):this},t.add=function(w){const v=Math.max(this.g.length,w.g.length),E=[];let C=0;for(let R=0;R<=v;R++){let b=C+(this.i(R)&65535)+(w.i(R)&65535),S=(b>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);C=S>>>16,b&=65535,S&=65535,E[R]=S<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(w,v){return w.add(A(v))}t.j=function(w){if(N(this)||N(w))return m;if(P(this))return P(w)?A(this).j(A(w)):A(A(this).j(w));if(P(w))return A(this.j(A(w)));if(this.l(I)<0&&w.l(I)<0)return c(this.m()*w.m());const v=this.g.length+w.g.length,E=[];for(var C=0;C<2*v;C++)E[C]=0;for(C=0;C<this.g.length;C++)for(let R=0;R<w.g.length;R++){const b=this.i(C)>>>16,S=this.i(C)&65535,Ce=w.i(R)>>>16,W=w.i(R)&65535;E[2*C+2*R]+=S*W,y(E,2*C+2*R),E[2*C+2*R+1]+=b*W,y(E,2*C+2*R+1),E[2*C+2*R+1]+=S*Ce,y(E,2*C+2*R+1),E[2*C+2*R+2]+=b*Ce,y(E,2*C+2*R+2)}for(w=0;w<v;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=v;w<2*v;w++)E[w]=0;return new o(E,0)};function y(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function T(w,v){this.g=w,this.h=v}function k(w,v){if(N(v))throw Error("division by zero");if(N(w))return new T(m,m);if(P(w))return v=k(A(w),v),new T(A(v.g),A(v.h));if(P(v))return v=k(w,A(v)),new T(A(v.g),v.h);if(w.g.length>30){if(P(w)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,C=v;C.l(w)<=0;)E=L(E),C=L(C);var R=U(E,1),b=U(C,1);for(C=U(C,2),E=U(E,2);!N(C);){var S=b.add(C);S.l(w)<=0&&(R=R.add(E),b=S),C=U(C,1),E=U(E,1)}return v=x(w,R.j(v)),new T(R,v)}for(R=m;w.l(v)>=0;){for(E=Math.max(1,Math.floor(w.m()/v.m())),C=Math.ceil(Math.log(E)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),b=c(E),S=b.j(v);P(S)||S.l(w)>0;)E-=C,b=c(E),S=b.j(v);N(b)&&(b=g),R=R.add(b),w=x(w,S)}return new T(R,w)}t.B=function(w){return k(this,w).h},t.and=function(w){const v=Math.max(this.g.length,w.g.length),E=[];for(let C=0;C<v;C++)E[C]=this.i(C)&w.i(C);return new o(E,this.h&w.h)},t.or=function(w){const v=Math.max(this.g.length,w.g.length),E=[];for(let C=0;C<v;C++)E[C]=this.i(C)|w.i(C);return new o(E,this.h|w.h)},t.xor=function(w){const v=Math.max(this.g.length,w.g.length),E=[];for(let C=0;C<v;C++)E[C]=this.i(C)^w.i(C);return new o(E,this.h^w.h)};function L(w){const v=w.g.length+1,E=[];for(let C=0;C<v;C++)E[C]=w.i(C)<<1|w.i(C-1)>>>31;return new o(E,w.h)}function U(w,v){const E=v>>5;v%=32;const C=w.g.length-E,R=[];for(let b=0;b<C;b++)R[b]=v>0?w.i(b+E)>>>v|w.i(b+E+1)<<32-v:w.i(b+E);return new o(R,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ux=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Sr=o}).apply(typeof Ny<"u"?Ny:typeof self<"u"?self:typeof window<"u"?window:{});var nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cx,mo,hx,wl,bd,dx,fx,px;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof nl=="object"&&nl];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],d=d(_),d!=_&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var p=[],_;for(_ in d)Object.prototype.hasOwnProperty.call(d,_)&&p.push([_,d[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,p){return a.call.apply(a.bind,arguments)}function c(a,d,p){return c=u,c.apply(null,arguments)}function f(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(_,D,j){for(var z=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)z[ee-2]=arguments[ee];return d.prototype[D].apply(_,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const d=a.length;if(d>0){const p=Array(d);for(let _=0;_<d;_++)p[_]=a[_];return p}return[]}function N(a,d){for(let _=1;_<arguments.length;_++){const D=arguments[_];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const j=D.length||0;a.length=p+j;for(let z=0;z<j;z++)a[p+z]=D[z]}else a.push(D)}}class P{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function A(a){o.setTimeout(()=>{throw a},0)}function x(){var a=w;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class y{constructor(){this.h=this.g=null}add(d,p){const _=T.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var T=new P(()=>new k,a=>a.reset());class k{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let L,U=!1,w=new y,v=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(E)}};function E(){for(var a;a=x();){try{a.h.call(a.g)}catch(p){A(p)}var d=T;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}U=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function Ce(a,d){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}m(Ce,R),Ce.prototype.init=function(a,d){const p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ce.Z.h.call(this)},Ce.prototype.h=function(){Ce.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var W="closure_listenable_"+(Math.random()*1e6|0),le=0;function Ve(a,d,p,_,D){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=D,this.key=++le,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,d,p){for(const _ in a)d.call(p,a[_],_,a)}function Z(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function we(a){const d={};for(const p in a)d[p]=a[p];return d}const ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qr(a,d){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let j=0;j<ke.length;j++)p=ke[j],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function Mt(a){this.src=a,this.g={},this.h=0}Mt.prototype.add=function(a,d,p,_,D){const j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);const z=Kt(a,d,_,D);return z>-1?(d=a[z],p||(d.fa=!1)):(d=new Ve(d,this.src,j,!!_,D),d.fa=p,a.push(d)),d};function Hr(a,d){const p=d.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,d,void 0),j;(j=D>=0)&&Array.prototype.splice.call(_,D,1),j&&(B(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Kt(a,d,p,_){for(let D=0;D<a.length;++D){const j=a[D];if(!j.da&&j.listener==d&&j.capture==!!p&&j.ha==_)return D}return-1}var Hn="closure_lm_"+(Math.random()*1e6|0),vc={};function Gp(a,d,p,_,D){if(Array.isArray(d)){for(let j=0;j<d.length;j++)Gp(a,d[j],p,_,D);return null}return p=Yp(p),a&&a[W]?a.J(d,p,l(_)?!!_.capture:!1,D):ET(a,d,p,!1,_,D)}function ET(a,d,p,_,D,j){if(!d)throw Error("Invalid event type");const z=l(D)?!!D.capture:!!D;let ee=wc(a);if(ee||(a[Hn]=ee=new Mt(a)),p=ee.add(d,p,_,z,j),p.proxy)return p;if(_=TT(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)b||(D=z),D===void 0&&(D=!1),a.addEventListener(d.toString(),_,D);else if(a.attachEvent)a.attachEvent(Qp(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function TT(){function a(p){return d.call(a.src,a.listener,p)}const d=IT;return a}function Kp(a,d,p,_,D){if(Array.isArray(d))for(var j=0;j<d.length;j++)Kp(a,d[j],p,_,D);else _=l(_)?!!_.capture:!!_,p=Yp(p),a&&a[W]?(a=a.i,j=String(d).toString(),j in a.g&&(d=a.g[j],p=Kt(d,p,_,D),p>-1&&(B(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[j],a.h--)))):a&&(a=wc(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Kt(d,p,_,D)),(p=a>-1?d[a]:null)&&_c(p))}function _c(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[W])Hr(d.i,a);else{var p=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(p,_,a.capture):d.detachEvent?d.detachEvent(Qp(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=wc(d))?(Hr(p,a),p.h==0&&(p.src=null,d[Hn]=null)):B(a)}}}function Qp(a){return a in vc?vc[a]:vc[a]="on"+a}function IT(a,d){if(a.da)a=!0;else{d=new Ce(d,this);const p=a.listener,_=a.ha||a.src;a.fa&&_c(a),a=p.call(_,d)}return a}function wc(a){return a=a[Hn],a instanceof Mt?a:null}var xc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Yp(a){return typeof a=="function"?a:(a[xc]||(a[xc]=function(d){return a.handleEvent(d)}),a[xc])}function tt(){C.call(this),this.i=new Mt(this),this.M=this,this.G=null}m(tt,C),tt.prototype[W]=!0,tt.prototype.removeEventListener=function(a,d,p,_){Kp(this,a,d,p,_)};function dt(a,d){var p,_=a.G;if(_)for(p=[];_;_=_.G)p.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new R(d,a);else if(d instanceof R)d.target=d.target||a;else{var D=d;d=new R(_,a),qr(d,D)}D=!0;let j,z;if(p)for(z=p.length-1;z>=0;z--)j=d.g=p[z],D=Aa(j,_,!0,d)&&D;if(j=d.g=a,D=Aa(j,_,!0,d)&&D,D=Aa(j,_,!1,d)&&D,p)for(z=0;z<p.length;z++)j=d.g=p[z],D=Aa(j,_,!1,d)&&D}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let _=0;_<p.length;_++)B(p[_]);delete a.g[d],a.h--}}this.G=null},tt.prototype.J=function(a,d,p,_){return this.i.add(String(a),d,!1,p,_)},tt.prototype.K=function(a,d,p,_){return this.i.add(String(a),d,!0,p,_)};function Aa(a,d,p,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let D=!0;for(let j=0;j<d.length;++j){const z=d[j];if(z&&!z.da&&z.capture==p){const ee=z.listener,Fe=z.ha||z.src;z.fa&&Hr(a.i,z),D=ee.call(Fe,_)!==!1&&D}}return D&&!_.defaultPrevented}function ST(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Xp(a){a.g=ST(()=>{a.g=null,a.i&&(a.i=!1,Xp(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class CT extends C{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Xp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(a){C.call(this),this.h=a,this.g={}}m(Fi,C);var Jp=[];function Zp(a){K(a.g,function(d,p){this.g.hasOwnProperty(p)&&_c(d)},a),a.g={}}Fi.prototype.N=function(){Fi.Z.N.call(this),Zp(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ec=o.JSON.stringify,AT=o.JSON.parse,NT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function em(){}function tm(){}var Ui={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Tc(){R.call(this,"d")}m(Tc,R);function Ic(){R.call(this,"c")}m(Ic,R);var Wr={},nm=null;function Na(){return nm=nm||new tt}Wr.Ia="serverreachability";function rm(a){R.call(this,Wr.Ia,a)}m(rm,R);function zi(a){const d=Na();dt(d,new rm(d))}Wr.STAT_EVENT="statevent";function sm(a,d){R.call(this,Wr.STAT_EVENT,a),this.stat=d}m(sm,R);function ft(a){const d=Na();dt(d,new sm(d,a))}Wr.Ja="timingevent";function im(a,d){R.call(this,Wr.Ja,a),this.size=d}m(im,R);function Bi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function $i(){this.g=!0}$i.prototype.ua=function(){this.g=!1};function RT(a,d,p,_,D,j){a.info(function(){if(a.g)if(j){var z="",ee=j.split("&");for(let fe=0;fe<ee.length;fe++){var Fe=ee[fe].split("=");if(Fe.length>1){const $e=Fe[0];Fe=Fe[1];const hn=$e.split("_");z=hn.length>=2&&hn[1]=="type"?z+($e+"="+Fe+"&"):z+($e+"=redacted&")}}}else z=null;else z=j;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+d+`
`+p+`
`+z})}function kT(a,d,p,_,D,j,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+d+`
`+p+`
`+j+" "+z})}function As(a,d,p,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+bT(a,p)+(_?" "+_:"")})}function PT(a,d){a.info(function(){return"TIMEOUT: "+d})}$i.prototype.info=function(){};function bT(a,d){if(!a.g)return d;if(!d)return null;try{const j=JSON.parse(d);if(j){for(a=0;a<j.length;a++)if(Array.isArray(j[a])){var p=j[a];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var D=_[0];if(D!="noop"&&D!="stop"&&D!="close")for(let z=1;z<_.length;z++)_[z]=""}}}}return Ec(j)}catch{return d}}var Ra={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},om={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},am;function Sc(){}m(Sc,em),Sc.prototype.g=function(){return new XMLHttpRequest},am=new Sc;function qi(a){return encodeURIComponent(String(a))}function DT(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function Wn(a,d,p,_){this.j=a,this.i=d,this.l=p,this.S=_||1,this.V=new Fi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new lm}function lm(){this.i=null,this.g="",this.h=!1}var um={},Cc={};function Ac(a,d,p){a.M=1,a.A=Pa(cn(d)),a.u=p,a.R=!0,cm(a,null)}function cm(a,d){a.F=Date.now(),ka(a),a.B=cn(a.A);var p=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Tm(p.i,"t",_),a.C=0,p=a.j.L,a.h=new lm,a.g=zm(a.j,p?d:null,!a.u),a.P>0&&(a.O=new CT(c(a.Y,a,a.g),a.P)),d=a.V,p=a.g,_=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Jp[0]=D.toString()),D=Jp);for(let j=0;j<D.length;j++){const z=Gp(p,D[j],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.J?we(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),zi(),RT(a.i,a.v,a.B,a.l,a.S,a.u)}Wn.prototype.ba=function(a){a=a.target;const d=this.O;d&&Qn(a)==3?d.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Qn(this.g),Fe=this.g.ya(),fe=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||km(this.g)))){this.K||ee!=4||Fe==7||(Fe==8||fe<=0?zi(3):zi(2)),Nc(this);var d=this.g.ca();this.X=d;var p=VT(this);if(this.o=d==200,kT(this.i,this.v,this.B,this.l,this.S,ee,d),this.o){if(this.U&&!this.L){t:{if(this.g){var _,D=this.g;if((_=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(_)){var j=_;break t}}j=null}if(a=j)As(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Rc(this,a);else{this.o=!1,this.m=3,ft(12),Gr(this),Hi(this);break e}}if(this.R){a=!0;let $e;for(;!this.K&&this.C<p.length;)if($e=jT(this,p),$e==Cc){ee==4&&(this.m=4,ft(14),a=!1),As(this.i,this.l,null,"[Incomplete Response]");break}else if($e==um){this.m=4,ft(15),As(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else As(this.i,this.l,$e,null),Rc(this,$e);if(hm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)As(this.i,this.l,p,"[Invalid Chunked Response]"),Gr(this),Hi(this);else if(p.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Lc(z),z.P=!0,ft(11))}}else As(this.i,this.l,p,null),Rc(this,p);ee==4&&Gr(this),this.o&&!this.K&&(ee==4?Lm(this.j,this):(this.o=!1,ka(this)))}else QT(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),Gr(this),Hi(this)}}}catch{}finally{}};function VT(a){if(!hm(a))return a.g.la();const d=km(a.g);if(d==="")return"";let p="";const _=d.length,D=Qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gr(a),Hi(a),"";a.h.i=new o.TextDecoder}for(let j=0;j<_;j++)a.h.h=!0,p+=a.h.i.decode(d[j],{stream:!(D&&j==_-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function hm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function jT(a,d){var p=a.C,_=d.indexOf(`
`,p);return _==-1?Cc:(p=Number(d.substring(p,_)),isNaN(p)?um:(_+=1,_+p>d.length?Cc:(d=d.slice(_,_+p),a.C=_+p,d)))}Wn.prototype.cancel=function(){this.K=!0,Gr(this)};function ka(a){a.T=Date.now()+a.H,dm(a,a.H)}function dm(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Bi(c(a.aa,a),d)}function Nc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(PT(this.i,this.B),this.M!=2&&(zi(),ft(17)),Gr(this),this.m=2,Hi(this)):dm(this,this.T-a)};function Hi(a){a.j.I==0||a.K||Lm(a.j,a)}function Gr(a){Nc(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Zp(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function Rc(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||kc(p.h,a))){if(!a.L&&kc(p.h,a)&&p.I==3){try{var _=p.Ba.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Oa(p),Va(p);else break e;Oc(p),ft(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Bi(c(p.Va,p),6e3));mm(p.h)<=1&&p.ta&&(p.ta=void 0)}else Qr(p,11)}else if((a.L||p.g==a)&&Oa(p),!S(d))for(D=p.Ba.g.parse(d),d=0;d<D.length;d++){let fe=D[d];const $e=fe[0];if(!($e<=p.K))if(p.K=$e,fe=fe[1],p.I==2)if(fe[0]=="c"){p.M=fe[1],p.ba=fe[2];const hn=fe[3];hn!=null&&(p.ka=hn,p.j.info("VER="+p.ka));const Yr=fe[4];Yr!=null&&(p.za=Yr,p.j.info("SVER="+p.za));const Yn=fe[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(_=1.5*Yn,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Xn=a.g;if(Xn){const Ma=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ma){var j=_.h;j.g||Ma.indexOf("spdy")==-1&&Ma.indexOf("quic")==-1&&Ma.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Pc(j,j.h),j.h=null))}if(_.G){const Mc=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Mc&&(_.wa=Mc,ge(_.J,_.G,Mc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var z=a;if(_.na=Um(_,_.L?_.ba:null,_.W),z.L){gm(_.h,z);var ee=z,Fe=_.O;Fe&&(ee.H=Fe),ee.D&&(Nc(ee),ka(ee)),_.g=z}else jm(_);p.i.length>0&&ja(p)}else fe[0]!="stop"&&fe[0]!="close"||Qr(p,7);else p.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Qr(p,7):jc(p):fe[0]!="noop"&&p.l&&p.l.qa(fe),p.A=0)}}zi(4)}catch{}}var OT=class{constructor(a,d){this.g=a,this.map=d}};function fm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mm(a){return a.h?1:a.g?a.g.size:0}function kc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Pc(a,d){a.g?a.g.add(d):a.h=d}function gm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}fm.prototype.cancel=function(){if(this.i=ym(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ym(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return I(a.i)}var vm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LT(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const _=a[p].indexOf("=");let D,j=null;_>=0?(D=a[p].substring(0,_),j=a[p].substring(_+1)):D=a[p],d(D,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Gn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof Gn?(this.l=a.l,Wi(this,a.j),this.o=a.o,this.g=a.g,Gi(this,a.u),this.h=a.h,bc(this,Im(a.i)),this.m=a.m):a&&(d=String(a).match(vm))?(this.l=!1,Wi(this,d[1]||"",!0),this.o=Ki(d[2]||""),this.g=Ki(d[3]||"",!0),Gi(this,d[4]),this.h=Ki(d[5]||"",!0),bc(this,d[6]||"",!0),this.m=Ki(d[7]||"")):(this.l=!1,this.i=new Yi(null,this.l))}Gn.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Qi(d,_m,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Qi(d,_m,!0),"@"),a.push(qi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Qi(p,p.charAt(0)=="/"?UT:FT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Qi(p,BT)),a.join("")},Gn.prototype.resolve=function(a){const d=cn(this);let p=!!a.j;p?Wi(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var _=a.h;if(p)Gi(d,a.u);else if(p=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var D=d.h.lastIndexOf("/");D!=-1&&(_=d.h.slice(0,D+1)+_)}if(D=_,D==".."||D==".")_="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){_=D.lastIndexOf("/",0)==0,D=D.split("/");const j=[];for(let z=0;z<D.length;){const ee=D[z++];ee=="."?_&&z==D.length&&j.push(""):ee==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),_&&z==D.length&&j.push("")):(j.push(ee),_=!0)}_=j.join("/")}else _=D}return p?d.h=_:p=a.i.toString()!=="",p?bc(d,Im(a.i)):p=!!a.m,p&&(d.m=a.m),d};function cn(a){return new Gn(a)}function Wi(a,d,p){a.j=p?Ki(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Gi(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function bc(a,d,p){d instanceof Yi?(a.i=d,$T(a.i,a.l)):(p||(d=Qi(d,zT)),a.i=new Yi(d,a.l))}function ge(a,d,p){a.i.set(d,p)}function Pa(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ki(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qi(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,MT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function MT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _m=/[#\/\?@]/g,FT=/[#\?:]/g,UT=/[#\?]/g,zT=/[#\?@]/g,BT=/#/g;function Yi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Kr(a){a.g||(a.g=new Map,a.h=0,a.i&&LT(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Yi.prototype,t.add=function(a,d){Kr(this),this.i=null,a=Ns(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function wm(a,d){Kr(a),d=Ns(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function xm(a,d){return Kr(a),d=Ns(a,d),a.g.has(d)}t.forEach=function(a,d){Kr(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(d,D,_,this)},this)},this)};function Em(a,d){Kr(a);let p=[];if(typeof d=="string")xm(a,d)&&(p=p.concat(a.g.get(Ns(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}t.set=function(a,d){return Kr(this),this.i=null,a=Ns(this,a),xm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Em(this,a),a.length>0?String(a[0]):d):d};function Tm(a,d,p){wm(a,d),p.length>0&&(a.i=null,a.g.set(Ns(a,d),I(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let _=0;_<d.length;_++){var p=d[_];const D=qi(p);p=Em(this,p);for(let j=0;j<p.length;j++){let z=D;p[j]!==""&&(z+="="+qi(p[j])),a.push(z)}}return this.i=a.join("&")};function Im(a){const d=new Yi;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function Ns(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function $T(a,d){d&&!a.j&&(Kr(a),a.i=null,a.g.forEach(function(p,_){const D=_.toLowerCase();_!=D&&(wm(this,_),Tm(this,D,p))},a)),a.j=d}function qT(a,d){const p=new $i;if(o.Image){const _=new Image;_.onload=f(Kn,p,"TestLoadImage: loaded",!0,d,_),_.onerror=f(Kn,p,"TestLoadImage: error",!1,d,_),_.onabort=f(Kn,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=f(Kn,p,"TestLoadImage: timeout",!1,d,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function HT(a,d){const p=new $i,_=new AbortController,D=setTimeout(()=>{_.abort(),Kn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(j=>{clearTimeout(D),j.ok?Kn(p,"TestPingServer: ok",!0,d):Kn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Kn(p,"TestPingServer: error",!1,d)})}function Kn(a,d,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function WT(){this.g=new NT}function Dc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Dc,em),Dc.prototype.g=function(){return new ba(this.i,this.h)};function ba(a,d){tt.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ba,tt),t=ba.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Ji(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Xi(this):Ji(this),this.readyState==3&&Sm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Xi(this))},t.Na=function(a){this.g&&(this.response=a,Xi(this))},t.ga=function(){this.g&&Xi(this)};function Xi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ji(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cm(a){let d="";return K(a,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Vc(a,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Cm(p),typeof a=="string"?p!=null&&qi(p):ge(a,d,p))}function Ae(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ae,tt);var GT=/^https?$/i,KT=["POST","PUT"];t=Ae.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():am.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){Am(this,j);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const j of _.keys())p.set(j,_.get(j));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(KT,d,void 0)>=0)||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,z]of p)this.g.setRequestHeader(j,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(j){Am(this,j)}};function Am(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Nm(a),Da(a)}function Nm(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,dt(this,"complete"),dt(this,"abort"),Da(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Da(this,!0)),Ae.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Rm(this):this.Xa())},t.Xa=function(){Rm(this)};function Rm(a){if(a.h&&typeof i<"u"){if(a.v&&Qn(a)==4)setTimeout(a.Ca.bind(a),0);else if(dt(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const j=a.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=j===0){let z=String(a.D).match(vm)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),_=!GT.test(z?z.toLowerCase():"")}p=_}if(p)dt(a,"complete"),dt(a,"success");else{a.o=6;try{var D=Qn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Nm(a)}}finally{Da(a)}}}}function Da(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||dt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),AT(d)}};function km(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function QT(a){const d={};a=(a.g&&Qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(S(a[_]))continue;var p=DT(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=d[D]||[];d[D]=j,j.push(p)}Z(d,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zi(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Pm(a){this.za=0,this.i=[],this.j=new $i,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zi("baseRetryDelayMs",5e3,a),this.Za=Zi("retryDelaySeedMs",1e4,a),this.Ta=Zi("forwardChannelMaxRetries",2,a),this.va=Zi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new fm(a&&a.concurrentRequestLimit),this.Ba=new WT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Pm.prototype,t.ka=8,t.I=1,t.connect=function(a,d,p,_){ft(0),this.W=a,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=Um(this,null,this.W),ja(this)};function jc(a){if(bm(a),a.I==3){var d=a.V++,p=cn(a.J);if(ge(p,"SID",a.M),ge(p,"RID",d),ge(p,"TYPE","terminate"),eo(a,p),d=new Wn(a,a.j,d),d.M=2,d.A=Pa(cn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=zm(d.j,null),d.g.ea(d.A)),d.F=Date.now(),ka(d)}Fm(a)}function Va(a){a.g&&(Lc(a),a.g.cancel(),a.g=null)}function bm(a){Va(a),a.v&&(o.clearTimeout(a.v),a.v=null),Oa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ja(a){if(!pm(a.h)&&!a.m){a.m=!0;var d=a.Ea;L||v(),U||(L(),U=!0),w.add(d,a),a.D=0}}function YT(a,d){return mm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Bi(c(a.Ea,a,d),Mm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new Wn(this,this.j,a);let j=this.o;if(this.U&&(j?(j=we(j),qr(j,this.U)):j=this.U),this.u!==null||this.R||(D.J=j,j=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Vm(this,D,d),p=cn(this.J),ge(p,"RID",a),ge(p,"CVER",22),this.G&&ge(p,"X-HTTP-Session-Id",this.G),eo(this,p),j&&(this.R?d="headers="+qi(Cm(j))+"&"+d:this.u&&Vc(p,this.u,j)),Pc(this.h,D),this.Ra&&ge(p,"TYPE","init"),this.S?(ge(p,"$req",d),ge(p,"SID","null"),D.U=!0,Ac(D,p,null)):Ac(D,p,d),this.I=2}}else this.I==3&&(a?Dm(this,a):this.i.length==0||pm(this.h)||Dm(this))};function Dm(a,d){var p;d?p=d.l:p=a.V++;const _=cn(a.J);ge(_,"SID",a.M),ge(_,"RID",p),ge(_,"AID",a.K),eo(a,_),a.u&&a.o&&Vc(_,a.u,a.o),p=new Wn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Vm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Pc(a.h,p),Ac(p,_,d)}function eo(a,d){a.H&&K(a.H,function(p,_){ge(d,_,p)}),a.l&&K({},function(p,_){ge(d,_,p)})}function Vm(a,d,p){p=Math.min(a.i.length,p);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const Fe=["count="+p];ee==-1?p>0?(ee=D[0].g,Fe.push("ofs="+ee)):ee=0:Fe.push("ofs="+ee);let fe=!0;for(let $e=0;$e<p;$e++){var j=D[$e].g;const hn=D[$e].map;if(j-=ee,j<0)ee=Math.max(0,D[$e].g-100),fe=!1;else try{j="req"+j+"_"||"";try{var z=hn instanceof Map?hn:Object.entries(hn);for(const[Yr,Yn]of z){let Xn=Yn;l(Yn)&&(Xn=Ec(Yn)),Fe.push(j+Yr+"="+encodeURIComponent(Xn))}}catch(Yr){throw Fe.push(j+"type="+encodeURIComponent("_badmap")),Yr}}catch{_&&_(hn)}}if(fe){z=Fe.join("&");break e}}z=void 0}return a=a.i.splice(0,p),d.G=a,z}function jm(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;L||v(),U||(L(),U=!0),w.add(d,a),a.A=0}}function Oc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Bi(c(a.Da,a),Mm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Om(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Bi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),Va(this),Om(this))};function Lc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Om(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=cn(a.na);ge(d,"RID","rpc"),ge(d,"SID",a.M),ge(d,"AID",a.K),ge(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(d,"TO",a.ia),ge(d,"TYPE","xmlhttp"),eo(a,d),a.u&&a.o&&Vc(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Pa(cn(d)),p.u=null,p.R=!0,cm(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Va(this),Oc(this),ft(19))};function Oa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Lm(a,d){var p=null;if(a.g==d){Oa(a),Lc(a),a.g=null;var _=2}else if(kc(a.h,d))p=d.G,gm(a.h,d),_=1;else return;if(a.I!=0){if(d.o)if(_==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var D=a.D;_=Na(),dt(_,new im(_,p)),ja(a)}else jm(a);else if(D=d.m,D==3||D==0&&d.X>0||!(_==1&&YT(a,d)||_==2&&Oc(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),D){case 1:Qr(a,5);break;case 4:Qr(a,10);break;case 3:Qr(a,6);break;default:Qr(a,2)}}}function Mm(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function Qr(a,d){if(a.j.info("Error code "+d),d==2){var p=c(a.bb,a),_=a.Ua;const D=!_;_=new Gn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Wi(_,"https"),Pa(_),D?qT(_.toString(),p):HT(_.toString(),p)}else ft(2);a.I=0,a.l&&a.l.pa(d),Fm(a),bm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Fm(a){if(a.I=0,a.ja=[],a.l){const d=ym(a.h);(d.length!=0||a.i.length!=0)&&(N(a.ja,d),N(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Um(a,d,p){var _=p instanceof Gn?cn(p):new Gn(p);if(_.g!="")d&&(_.g=d+"."+_.g),Gi(_,_.u);else{var D=o.location;_=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;const j=new Gn(null);_&&Wi(j,_),d&&(j.g=d),D&&Gi(j,D),p&&(j.h=p),_=j}return p=a.G,d=a.wa,p&&d&&ge(_,p,d),ge(_,"VER",a.ka),eo(a,_),_}function zm(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Ae(new Dc({ab:p})):new Ae(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bm(){}t=Bm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function La(){}La.prototype.g=function(a,d){return new Nt(a,d)};function Nt(a,d){tt.call(this),this.g=new Pm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!S(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!S(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Rs(this)}m(Nt,tt),Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){jc(this.g)},Nt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Ec(a),a=p);d.i.push(new OT(d.Ya++,a)),d.I==3&&ja(d)},Nt.prototype.N=function(){this.g.l=null,delete this.j,jc(this.g),delete this.g,Nt.Z.N.call(this)};function $m(a){Tc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}m($m,Tc);function qm(){Ic.call(this),this.status=1}m(qm,Ic);function Rs(a){this.g=a}m(Rs,Bm),Rs.prototype.ra=function(){dt(this.g,"a")},Rs.prototype.qa=function(a){dt(this.g,new $m(a))},Rs.prototype.pa=function(a){dt(this.g,new qm)},Rs.prototype.oa=function(){dt(this.g,"b")},La.prototype.createWebChannel=La.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,px=function(){return new La},fx=function(){return Na()},dx=Wr,bd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ra.NO_ERROR=0,Ra.TIMEOUT=8,Ra.HTTP_ERROR=6,wl=Ra,om.COMPLETE="complete",hx=om,tm.EventType=Ui,Ui.OPEN="a",Ui.CLOSE="b",Ui.ERROR="c",Ui.MESSAGE="d",tt.prototype.listen=tt.prototype.J,mo=tm,Ae.prototype.listenOnce=Ae.prototype.K,Ae.prototype.getLastError=Ae.prototype.Ha,Ae.prototype.getLastErrorCode=Ae.prototype.ya,Ae.prototype.getStatus=Ae.prototype.ca,Ae.prototype.getResponseJson=Ae.prototype.La,Ae.prototype.getResponseText=Ae.prototype.la,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Fa,cx=Ae}).apply(typeof nl<"u"?nl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="12.9.0";function lR(t){Di=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Qu("@firebase/firestore");function Ps(){return gs.logLevel}function q(t,...e){if(gs.logLevel<=ne.DEBUG){const n=e.map(sp);gs.debug(`Firestore (${Di}): ${t}`,...n)}}function Un(t,...e){if(gs.logLevel<=ne.ERROR){const n=e.map(sp);gs.error(`Firestore (${Di}): ${t}`,...n)}}function ys(t,...e){if(gs.logLevel<=ne.WARN){const n=e.map(sp);gs.warn(`Firestore (${Di}): ${t}`,...n)}}function sp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,mx(t,r,n)}function mx(t,e,n){let r=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Un(r),new Error(r)}function he(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||mx(e,s,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class cR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hR{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new gx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class dR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class fR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ry{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ry(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ry(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Dd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return wh(s)===wh(i)?re(s,i):wh(s)?1:-1}return re(t.length,e.length)}const gR=55296,yR=57343;function wh(t){const e=t.charCodeAt(0);return e>=gR&&e<=yR}function gi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return re(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):Dd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sr.fromString(e.substring(4,e.length-2))}}class pe extends pn{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const vR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends pn{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return vR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ky}static keyField(){return new Xe([ky])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(pe.fromString(e))}static fromName(e){return new G(pe.fromString(e).popFirst(5))}static empty(){return new G(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _R(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Py(t){if(!G.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function by(t){if(G.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vx(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ju(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ju(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function ga(t,e){if(!vx(t))throw new $(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=-62135596800,Vy=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Vy);return new ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Dy)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vy}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ga(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:Me("string",ve._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ve(0,0))}static max(){return new X(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ta=-1;function wR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Pr(s,G.empty(),e)}function xR(t){return new Pr(t.readTime,t.key,ta)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(X.min(),G.empty(),ta)}static max(){return new Pr(X.max(),G.empty(),ta)}}function ER(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==TR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function SR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ji(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=-1;function ec(t){return t==null}function au(t){return t===0&&1/t==-1/0}function CR(t){return typeof t=="number"&&Number.isInteger(t)&&!au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="";function AR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jy(e)),e=NR(t.get(n),e);return jy(e)}function NR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case _x:n+="";break;default:n+=i}}return n}function jy(t){return t+_x+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rl(this.root,e,this.comparator,!0)}}class rl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Be(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xx("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const RR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=RR.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="server_timestamp",Tx="__type__",Ix="__previous_value__",Sx="__local_write_time__";function ap(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Tx])==null?void 0:r.stringValue)===Ex}function tc(t){const e=t.mapValue.fields[Ix];return ap(e)?tc(e):e}function na(t){const e=br(t.mapValue.fields[Sx].timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const lu="(default)";class ra{constructor(e,n){this.projectId=e,this.database=n||lu}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database===lu}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}function PR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx="__type__",bR="__max__",sl={mapValue:{}},Ax="__vector__",uu="value";function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ap(t)?4:VR(t)?9007199254740991:DR(t)?10:11:Q(28295,{value:t})}function Sn(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=br(s.timestampValue),l=br(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pe(s.doubleValue),l=Pe(i.doubleValue);return o===l?au(o)===au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Oy(o)!==Oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Sn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function sa(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Pe(i.integerValue||i.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return My(t.timestampValue,e.timestampValue);case 4:return My(na(t),na(e));case 5:return Dd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Dr(i),u=Dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=re(l[c],u[c]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=re(Pe(i.latitude),Pe(o.latitude));return l!==0?l:re(Pe(i.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,N,P;const l=i.fields||{},u=o.fields||{},c=(g=l[uu])==null?void 0:g.arrayValue,f=(I=u[uu])==null?void 0:I.arrayValue,m=re(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:Fy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===sl.mapValue&&o===sl.mapValue)return 0;if(i===sl.mapValue)return 1;if(o===sl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=Dd(u[m],f[m]);if(g!==0)return g;const I=yi(l[u[m]],c[f[m]]);if(I!==0)return I}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function My(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=br(t),r=br(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function Fy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=yi(n[s],r[s]);if(i)return i}return re(n.length,r.length)}function vi(t){return Vd(t)}function Vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vd(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function xl(t){switch(Vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tc(t);return e?16+xl(e):16;case 5:return 2*t.stringValue.length;case 6:return Dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+xl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Br(r.fields,(i,o)=>{s+=i.length+xl(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function Uy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jd(t){return!!t&&"integerValue"in t}function lp(t){return!!t&&"arrayValue"in t}function zy(t){return!!t&&"nullValue"in t}function By(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function El(t){return!!t&&"mapValue"in t}function DR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Cx])==null?void 0:r.stringValue)===Ax}function Ro(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ro(t.arrayValue.values[n]);return e}return{...t}}function VR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===bR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!El(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ro(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());El(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];El(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Ro(this.value))}}function Nx(t){const e=[];return Br(t.fields,(n,r)=>{const s=new Xe([n]);if(El(r)){const i=Nx(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,X.min(),X.min(),X.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,X.min(),X.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,X.min(),X.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cu{constructor(e,n){this.position=e,this.inclusive=n}}function $y(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=yi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function jR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Rx{}class Le extends Rx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LR(e,n,r):n==="array-contains"?new UR(e,r):n==="in"?new zR(e,r):n==="not-in"?new BR(e,r):n==="array-contains-any"?new $R(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MR(e,r):new FR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(yi(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends Rx{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ln(e,n)}matches(e){return kx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kx(t){return t.op==="and"}function Px(t){return OR(t)&&kx(t)}function OR(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Od(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(Px(t))return t.filters.map(e=>Od(e)).join(",");{const e=t.filters.map(n=>Od(n)).join(",");return`${t.op}(${e})`}}function bx(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&Sn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&bx(o,s.filters[l]),!0):!1}(t,e):void Q(19439)}function Dx(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${vi(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(Dx).join(" ,")+"}"}(t):"Filter"}class LR extends Le{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class MR extends Le{constructor(e,n){super(e,"in",n),this.keys=Vx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FR extends Le{constructor(e,n){super(e,"not-in",n),this.keys=Vx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vx(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class UR extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lp(n)&&sa(n.arrayValue,this.value)}}class zR extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class BR extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!sa(this.value.arrayValue,n)}}class $R extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Hy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qR(t,e,n,r,s,i,o)}function up(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Od(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),e.Te=n}return e.Te}function cp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qy(t.startAt,e.startAt)&&qy(t.endAt,e.endAt)}function Ld(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function HR(t,e,n,r,s,i,o,l){return new ya(t,e,n,r,s,i,o,l)}function hp(t){return new ya(t)}function Wy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WR(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function jx(t){return t.collectionGroup!==null}function ko(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new hu(i,r))}),n.has(Xe.keyField().canonicalString())||e.Ie.push(new hu(Xe.keyField(),r))}return e.Ie}function _n(t){const e=J(t);return e.Ee||(e.Ee=GR(e,ko(t))),e.Ee}function GR(t,e){if(t.limitType==="F")return Hy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new hu(s.field,i)});const n=t.endAt?new cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cu(t.startAt.position,t.startAt.inclusive):null;return Hy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Md(t,e){const n=t.filters.concat([e]);return new ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fd(t,e,n){return new ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nc(t,e){return cp(_n(t),_n(e))&&t.limitType===e.limitType}function Ox(t){return`${up(_n(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Dx(s)).join(", ")}]`),ec(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>vi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>vi(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function rc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ko(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=$y(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ko(r),s)||r.endAt&&!function(o,l,u){const c=$y(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ko(r),s))}(t,e)}function KR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lx(t){return(e,n)=>{let r=!1;for(const s of ko(t)){const i=QR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QR(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?yi(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new Se(G.comparator);function zn(){return YR}const Mx=new Se(G.comparator);function go(...t){let e=Mx;for(const n of t)e=e.insert(n.key,n);return e}function Fx(t){let e=Mx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ss(){return Po()}function Ux(){return Po()}function Po(){return new Is(t=>t.toString(),(t,e)=>t.isEqual(e))}const XR=new Se(G.comparator),JR=new Be(G.comparator);function se(...t){let e=JR;for(const n of t)e=e.add(n);return e}const ZR=new Be(re);function ek(){return ZR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function zx(t){return{integerValue:""+t}}function tk(t,e){return CR(e)?zx(e):dp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this._=void 0}}function nk(t,e,n){return t instanceof du?function(s,i){const o={fields:{[Tx]:{stringValue:Ex},[Sx]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ap(i)&&(i=tc(i)),i&&(o.fields[Ix]=i),{mapValue:o}}(n,e):t instanceof ia?$x(t,e):t instanceof oa?qx(t,e):function(s,i){const o=Bx(s,i),l=Gy(o)+Gy(s.Ae);return jd(o)&&jd(s.Ae)?zx(l):dp(s.serializer,l)}(t,e)}function rk(t,e,n){return t instanceof ia?$x(t,e):t instanceof oa?qx(t,e):n}function Bx(t,e){return t instanceof fu?function(r){return jd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class du extends sc{}class ia extends sc{constructor(e){super(),this.elements=e}}function $x(t,e){const n=Hx(e);for(const r of t.elements)n.some(s=>Sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oa extends sc{constructor(e){super(),this.elements=e}}function qx(t,e){let n=Hx(e);for(const r of t.elements)n=n.filter(s=>!Sn(s,r));return{arrayValue:{values:n}}}class fu extends sc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Gy(t){return Pe(t.integerValue||t.doubleValue)}function Hx(t){return lp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ia&&s instanceof ia||r instanceof oa&&s instanceof oa?gi(r.elements,s.elements,Sn):r instanceof fu&&s instanceof fu?Sn(r.Ae,s.Ae):r instanceof du&&s instanceof du}(t.transform,e.transform)}class ik{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ic{}function Wx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fp(t.key,Ht.none()):new va(t.key,t.data,Ht.none());{const n=t.data,r=Et.empty();let s=new Be(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $r(t.key,r,new bt(s.toArray()),Ht.none())}}function ok(t,e,n){t instanceof va?function(s,i,o){const l=s.value.clone(),u=Qy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(s,i,o){if(!Tl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Qy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Gx(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof va?function(i,o,l,u){if(!Tl(i.precondition,o))return l;const c=i.value.clone(),f=Yy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(i,o,l,u){if(!Tl(i.precondition,o))return l;const c=Yy(i.fieldTransforms,u,o),f=o.data;return f.setAll(Gx(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Tl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ak(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Bx(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gi(r,s,(i,o)=>sk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends ic{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $r extends ic{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qy(t,e,n){const r=new Map;he(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,rk(o,l,n[s]))}return r}function Yy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,nk(i,o,e))}return r}class fp extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lk extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ok(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ux();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Wx(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>Ky(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>Ky(n,r))}}class pp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){he(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return XR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new pp(e,n,r,s)}}/**
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
 */class ck{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,oe;function dk(t){switch(t){case O.OK:return Q(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function Kx(t){if(t===void 0)return Un("GRPC error has no .code"),O.UNKNOWN;switch(t){case je.OK:return O.OK;case je.CANCELLED:return O.CANCELLED;case je.UNKNOWN:return O.UNKNOWN;case je.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case je.INTERNAL:return O.INTERNAL;case je.UNAVAILABLE:return O.UNAVAILABLE;case je.UNAUTHENTICATED:return O.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case je.NOT_FOUND:return O.NOT_FOUND;case je.ALREADY_EXISTS:return O.ALREADY_EXISTS;case je.PERMISSION_DENIED:return O.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case je.ABORTED:return O.ABORTED;case je.OUT_OF_RANGE:return O.OUT_OF_RANGE;case je.UNIMPLEMENTED:return O.UNIMPLEMENTED;case je.DATA_LOSS:return O.DATA_LOSS;default:return Q(39323,{code:t})}}(oe=je||(je={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fk(){return new TextEncoder}/**
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
 */const pk=new Sr([4294967295,4294967295],0);function Xy(t){const e=fk().encode(t),n=new ux;return n.update(e),new Uint8Array(n.digest())}function Jy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([s,i],0)]}class mp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yo(`Invalid padding: ${n}`);if(r<0)throw new yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Sr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Sr.fromNumber(r)));return s.compare(pk)===1&&(s=new Sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Xy(e),[r,s]=Jy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Xy(e),[r,s]=Jy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oc(X.min(),s,new Se(re),zn(),se())}}class _a{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _a(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Qx{constructor(e,n){this.targetId=e,this.Ce=n}}class Yx{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zy{constructor(){this.ve=0,this.Fe=ev(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new _a(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=ev()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class mk{constructor(e){this.Ge=e,this.ze=new Map,this.je=zn(),this.He=il(),this.Je=il(),this.Ze=new Se(re)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ld(i))if(r===0){const o=new G(i.path);this.et(n,o,at.newNoDocument(o,X.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Dr(r).toUint8Array()}catch(u){if(u instanceof xx)return ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new mp(o,s,i)}catch(u){return ys(u instanceof yo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ld(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,at.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=se();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new oc(e,n,this.Ze,this.je,r);return this.je=zn(),this.He=il(),this.Je=il(),this.Ze=new Se(re),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Zy,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Be(re),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Be(re),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function il(){return new Se(G.comparator)}function ev(){return new Se(G.comparator)}const gk={asc:"ASCENDING",desc:"DESCENDING"},yk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vk={and:"AND",or:"OR"};class _k{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ud(t,e){return t.useProto3Json||ec(e)?e:{value:e}}function pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wk(t,e){return pu(t,e.toTimestamp())}function wn(t){return he(!!t,49232),X.fromTimestamp(function(n){const r=br(n);return new ve(r.seconds,r.nanos)}(t))}function gp(t,e){return zd(t,e).canonicalString()}function zd(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Jx(t){const e=pe.fromString(t);return he(rE(e),10190,{key:e.toString()}),e}function Bd(t,e){return gp(t.databaseId,e.path)}function xh(t,e){const n=Jx(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(eE(n))}function Zx(t,e){return gp(t.databaseId,e)}function xk(t){const e=Jx(t);return e.length===4?pe.emptyPath():eE(e)}function $d(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eE(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function tv(t,e,n){return{name:Bd(t,e),fields:n.value.mapValue.fields}}function Ek(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(he(f===void 0||typeof f=="string",58123),et.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?O.UNKNOWN:Kx(c.code);return new $(f,c.message||"")}(o);n=new Yx(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xh(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):X.min(),l=new Et({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Il(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xh(t,r.document),i=r.readTime?wn(r.readTime):X.min(),o=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Il([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xh(t,r.document),i=r.removedTargetIds||[];n=new Il([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hk(s,i),l=r.targetId;n=new Qx(l,o)}}return n}function Tk(t,e){let n;if(e instanceof va)n={update:tv(t,e.key,e.value)};else if(e instanceof fp)n={delete:Bd(t,e.key)};else if(e instanceof $r)n={update:tv(t,e.key,e.data),updateMask:bk(e.fieldMask)};else{if(!(e instanceof lk))return Q(16599,{dt:e.type});n={verify:Bd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof du)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function Ik(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(X.min())&&(o=wn(i)),new ik(o,s.transformResults||[])}(n,e))):[]}function Sk(t,e){return{documents:[Zx(t,e.path)]}}function Ck(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Zx(t,s);const i=function(c){if(c.length!==0)return nE(ln.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ds(g.field),direction:Rk(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ud(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function Ak(t){let e=xk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){he(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=tE(m);return g instanceof ln&&Px(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(N){return new hu(Vs(N.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ec(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new cu(I,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,I=m.values||[];return new cu(I,g)}(n.endAt)),HR(e,s,o,i,l,"F",u,c)}function Nk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vs(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vs(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vs(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vs(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>tE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function Rk(t){return gk[t]}function kk(t){return yk[t]}function Pk(t){return vk[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Vs(t){return Xe.fromServerFormat(t.fieldPath)}function nE(t){return t instanceof Le?function(n){if(n.op==="=="){if(By(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(zy(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(By(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(zy(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:kk(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>nE(s));return r.length===1?r[0]:{compositeFilter:{op:Pk(n.op),filters:r}}}(t):Q(54877,{filter:t})}function bk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function sE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,s,i=X.min(),o=X.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.yt=e}}function Vk(t){const e=Ak({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.Sn=new Ok}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Pr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Ok{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Be(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iE=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(iE,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new _i(0)}static ar(){return new _i(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="LruGarbageCollector",Lk=1048576;function sv([t,e],[n,r]){const s=re(t,n);return s===0?re(e,r):s}class Mk{constructor(e){this.Pr=e,this.buffer=new Be(sv),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Fk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(rv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ji(n)?q(rv,"Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Ar(3e5)})}}class Uk{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Zu.ce);const r=new Mk(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(nv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Ps()<=ne.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function zk(t,e){return new Uk(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.changes=new Is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class $k{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bo(r.mutation,s,bt.empty(),ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=ss();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=go();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=zn();const o=Po(),l=function(){return Po()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof $r)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),bo(f.mutation,c,f.mutation.getFieldMask(),ve.now())):o.set(c.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new $k(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Po();let s=new Se((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||bt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=Ux();f.forEach(g=>{if(!i.has(g)){const I=Wx(n.get(g),r.get(g));I!==null&&m.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return WR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(ss());let l=ta,u=i;return o.next(c=>M.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,se())).next(f=>({batchId:l,changes:Fx(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=go();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=go();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const c=function(m,g){return new ya(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,at.newInvalidDocument(f)))});let l=go();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&bo(f.mutation,c,bt.empty(),ve.now()),rc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Vk(s.bundledQuery),readTime:wn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class Wk{constructor(){this.overlays=new Se(G.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ss();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=ss(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=ss(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=ss(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ck(n,r));let i=this.Lr.get(n);i===void 0&&(i=se(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.kr=new Be(qe.Kr),this.qr=new Be(qe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new qe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new pe([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new pe([])),r=new qe(n,e),s=new qe(n,e+1);let i=se();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return G.comparator(e.key,n.key)||re(e.Hr,n.Hr)}static Ur(e,n){return re(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Be(qe.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?op:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(re);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new qe(new G(i),0);let l=new Be(re);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){he(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new qe(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.ti=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=zn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ER(xR(f),r)<=0||(s.has(f.key)||rc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Yk(this)}getSize(e){return M.resolve(this.size)}}class Yk extends Bk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.persistence=e,this.ri=new Is(n=>up(n),cp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new yp,this.targetCount=0,this.oi=_i._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new _i(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this._i={},this.overlays={},this.ai=new Zu(0),this.ui=!1,this.ui=!0,this.ci=new Gk,this.referenceDelegate=e(this),this.li=new Xk(this),this.indexManager=new jk,this.remoteDocumentCache=function(s){return new Qk(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Dk(n),this.Pi=new Hk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Kk(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new Jk(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Jk extends IR{constructor(e){super(),this.currentSequenceNumber=e}}class vp{constructor(e){this.persistence=e,this.Ri=new yp,this.Ai=null}static Vi(e){return new vp(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class mu{constructor(e,n){this.persistence=e,this.fi=new Is(r=>AR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=zk(this,n)}static Vi(e,n){return new mu(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,X.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _p(e,n.fromCache,r,s)}}/**
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
 */class Zk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _A()?8:SR(ht())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Zk;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ps()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ps()<=ne.DEBUG&&q("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ps()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):M.resolve())}gs(e,n){if(Wy(n))return M.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fd(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,Fd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Wy(n)||s.isEqual(X.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(Ps()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bs(n)),this.Ds(e,o,n,wR(s,ta)).next(l=>l))})}bs(e,n){let r=new Be(Lx(e));return n.forEach((s,i)=>{rc(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ps()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",bs(n)),this.fs.getDocumentsMatchingQuery(e,n,Pr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="LocalStore",tP=3e8;class nP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Se(re),this.Fs=new Is(i=>up(i),cp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function rP(t,e,n,r){return new nP(t,e,n,r)}async function aE(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function sP(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let I=M.resolve();return g.forEach(N=>{I=I.next(()=>f.getEntry(u,N)).next(P=>{const A=c.docVersions.get(N);he(A!==null,48541),P.version.compareTo(A)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function lE(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function iP(t,e){const n=J(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(et.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(m,I),function(P,A,x){return P.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=tP?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,I,f)&&l.push(n.li.updateTargetData(i,I))});let u=zn(),c=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(oP(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(X.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function oP(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=zn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(wp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function aP(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=op),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lP(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function qd(t,e,n){const r=J(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ji(o))throw o;q(wp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function iv(t,e,n){const r=J(t);let s=X.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=J(u),g=m.Fs.get(f);return g!==void 0?M.resolve(m.vs.get(g)):m.li.getTargetData(c,f)}(r,o,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:se())).next(l=>(uP(r,KR(e),l),{documents:l,ks:i})))}function uP(t,e,n){let r=t.Ms.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class ov{constructor(){this.activeTargetIds=ek()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cP{constructor(){this.vo=new ov,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ov,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="ConnectivityMonitor";class lv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(av,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(av,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ol=null;function Hd(){return ol===null?ol=function(){return 268435456+Math.round(2147483648*Math.random())}():ol++,"0x"+ol.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="RestConnection",dP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class fP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===lu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Hd(),l=this.Qo(e,n.toUriEncodedString());q(Eh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Pi(c);return this.zo(e,l,u,r,f).then(m=>(q(Eh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ys(Eh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=dP[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection",uo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class ti extends fP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ti.c_){const e=fx();uo(e,dx.STAT_EVENT,n=>{n.stat===bd.PROXY?q(st,"STAT_EVENT: detected buffering proxy"):n.stat===bd.NOPROXY&&q(st,"STAT_EVENT: detected no buffering proxy")}),ti.c_=!0}}zo(e,n,r,s,i){const o=Hd();return new Promise((l,u)=>{const c=new cx;c.setWithCredentials(!0),c.listenOnce(hx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case wl.NO_ERROR:const m=c.getResponseJson();q(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case wl.TIMEOUT:q(st,`RPC '${e}' ${o} timed out`),u(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const g=c.getStatus();if(q(st,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const P=function(x){const y=x.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(y)>=0?y:O.UNKNOWN}(N.status);u(new $(P,N.message))}else u(new $(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(O.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(st,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(st,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Hd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");q(st,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,g=!1;const I=new pP({Ho:N=>{g?q(st,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(q(st,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),q(st,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Jo:()=>f.close()});return uo(f,mo.EventType.OPEN,()=>{g||(q(st,`RPC '${e}' stream ${s} transport opened.`),I.i_())}),uo(f,mo.EventType.CLOSE,()=>{g||(g=!0,q(st,`RPC '${e}' stream ${s} transport closed`),I.o_(),this.E_(f))}),uo(f,mo.EventType.ERROR,N=>{g||(g=!0,ys(st,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),I.o_(new $(O.UNAVAILABLE,"The operation could not be completed")))}),uo(f,mo.EventType.MESSAGE,N=>{var P;if(!g){const A=N.data[0];he(!!A,16349);const x=A,y=(x==null?void 0:x.error)||((P=x[0])==null?void 0:P.error);if(y){q(st,`RPC '${e}' stream ${s} received error:`,y);const T=y.status;let k=function(w){const v=je[w];if(v!==void 0)return Kx(v)}(T),L=y.message;T==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&ys(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),k===void 0&&(k=O.INTERNAL,L="Unknown error status: "+T+" with message "+y.message),g=!0,I.o_(new $(k,L)),f.close()}else q(st,`RPC '${e}' stream ${s} received:`,A),I.__(A)}}),ti.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return px()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){return new ti(t)}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t){return new _k(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ti.c_=!1;class uE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="PersistentStream";class cE{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new uE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(uv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(uv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gP extends cE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Ek(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?wn(o.readTime):X.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=$d(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ld(u)?{documents:Sk(i,u)}:{query:Ck(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Xx(i,o.resumeToken);const c=Ud(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=pu(i,o.snapshotVersion.toTimestamp());const c=Ud(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Nk(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=$d(this.serializer),n.removeTarget=e,this.K_(n)}}class yP extends cE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Ik(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=$d(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tk(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{}class _P extends vP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,zd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(O.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,zd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function wP(t,e,n,r){return new _P(t,e,n,r)}class xP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Un(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="RemoteStore";class EP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ss(this)&&(q(vs,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ea.add(4),await wa(c),c.Va.set("Unknown"),c.Ea.delete(4),await lc(c)}(this))})}),this.Va=new xP(r,s)}}async function lc(t){if(Ss(t))for(const e of t.Ra)await e(!0)}async function wa(t){for(const e of t.Ra)await e(!1)}function hE(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ip(n)?Tp(n):Oi(n).O_()&&Ep(n,e))}function xp(t,e){const n=J(t),r=Oi(n);n.Ia.delete(e),r.O_()&&dE(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ss(n)&&n.Va.set("Unknown"))}function Ep(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).Z_(e)}function dE(t,e){t.da.$e(e),Oi(t).X_(e)}function Tp(t){t.da=new mk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.Va.ua()}function Ip(t){return Ss(t)&&!Oi(t).x_()&&t.Ia.size>0}function Ss(t){return J(t).Ea.size===0}function fE(t){t.da=void 0}async function TP(t){t.Va.set("Online")}async function IP(t){t.Ia.forEach((e,n)=>{Ep(t,e)})}async function SP(t,e){fE(t),Ip(t)?(t.Va.ha(e),Tp(t)):t.Va.set("Unknown")}async function CP(t,e,n){if(t.Va.set("Online"),e instanceof Yx&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){q(vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gu(t,r)}else if(e instanceof Il?t.da.Xe(e):e instanceof Qx?t.da.st(e):t.da.tt(e),!n.isEqual(X.min()))try{const r=await lE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),dE(i,u);const m=new dr(f.target,u,c,f.sequenceNumber);Ep(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(vs,"Failed to raise snapshot:",r),await gu(t,r)}}async function gu(t,e,n){if(!ji(e))throw e;t.Ea.add(1),await wa(t),t.Va.set("Offline"),n||(n=()=>lE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(vs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await lc(t)})}function pE(t,e){return e().catch(n=>gu(t,n,e))}async function uc(t){const e=J(t),n=jr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:op;for(;AP(e);)try{const s=await aP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,NP(e,s)}catch(s){await gu(e,s)}mE(e)&&gE(e)}function AP(t){return Ss(t)&&t.Ta.length<10}function NP(t,e){t.Ta.push(e);const n=jr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function mE(t){return Ss(t)&&!jr(t).x_()&&t.Ta.length>0}function gE(t){jr(t).start()}async function RP(t){jr(t).ra()}async function kP(t){const e=jr(t);for(const n of t.Ta)e.ea(n.mutations)}async function PP(t,e,n){const r=t.Ta.shift(),s=pp.from(r,e,n);await pE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await uc(t)}async function bP(t,e){e&&jr(t).Y_&&await async function(r,s){if(function(o){return dk(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();jr(r).B_(),await pE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uc(r)}}(t,e),mE(t)&&gE(t)}async function cv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),q(vs,"RemoteStore received new credentials");const r=Ss(n);n.Ea.add(3),await wa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await lc(n)}async function DP(t,e){const n=J(t);e?(n.Ea.delete(2),await lc(n)):e||(n.Ea.add(2),await wa(n),n.Va.set("Unknown"))}function Oi(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new gP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:TP.bind(null,t),Yo:IP.bind(null,t),t_:SP.bind(null,t),J_:CP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Ip(t)?Tp(t):t.Va.set("Unknown")):(await t.ma.stop(),fE(t))})),t.ma}function jr(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new yP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:RP.bind(null,t),t_:bP.bind(null,t),ta:kP.bind(null,t),na:PP.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await uc(t)):(await t.fa.stop(),t.Ta.length>0&&(q(vs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Sp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cp(t,e){if(Un("AsyncQueue",`${e}: ${t}`),ji(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{static emptySet(e){return new ni(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=go(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ni)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ni;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.ga=new Se(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class wi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new wi(e,n,ni.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class jP{constructor(){this.queries=dv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=dv(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function dv(){return new Is(t=>Ox(t),nc)}async function yE(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new VP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Cp(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ap(n)}async function vE(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OP(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Ap(n)}function LP(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Ap(t){t.Ca.forEach(e=>{e.next()})}var Wd,fv;(fv=Wd||(Wd={})).Ma="default",fv.Cache="cache";class _E{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Wd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.key=e}}class xE{constructor(e){this.key=e}}class MP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=Lx(e),this.tu=new ni(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new hv,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),I=rc(this.query,m)?m:null,N=!!g&&this.mutatedKeys.has(g.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let A=!1;g&&I?g.data.isEqual(I.data)?N!==P&&(r.track({type:3,doc:I}),A=!0):this.su(g,I)||(r.track({type:2,doc:I}),A=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),A=!0):g&&!I&&(r.track({type:1,doc:g}),A=!0,(u||c)&&(l=!0)),A&&(I?(o=o.add(I),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(I,N){const P=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:A})}};return P(I)-P(N)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new wi(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hv,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new xE(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new wE(r))}),n}cu(e){this.Za=e.ks,this.Ya=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return wi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Np="SyncEngine";class FP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UP{constructor(e){this.key=e,this.hu=!1}}class zP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Is(l=>Ox(l),nc),this.Iu=new Map,this.Eu=new Set,this.Ru=new Se(G.comparator),this.Au=new Map,this.Vu=new yp,this.du={},this.mu=new Map,this.fu=_i.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BP(t,e,n=!0){const r=AE(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await EE(r,e,n,!0),s}async function $P(t,e){const n=AE(t);await EE(n,e,!0,!1)}async function EE(t,e,n,r){const s=await lP(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await qP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&hE(t.remoteStore,s),l}async function qP(t,e,n,r,s){t.pu=(m,g,I)=>async function(P,A,x,y){let T=A.view.ru(x);T.Ss&&(T=await iv(P.localStore,A.query,!1).then(({documents:w})=>A.view.ru(w,T)));const k=y&&y.targetChanges.get(A.targetId),L=y&&y.targetMismatches.get(A.targetId)!=null,U=A.view.applyChanges(T,P.isPrimaryClient,k,L);return mv(P,A.targetId,U.au),U.snapshot}(t,m,g,I);const i=await iv(t.localStore,e,!0),o=new MP(e,i.ks),l=o.ru(i.documents),u=_a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);mv(t,n,c.au);const f=new FP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function HP(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!nc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xp(r.remoteStore,s.targetId),Gd(r,s.targetId)}).catch(Vi)):(Gd(r,s.targetId),await qd(r.localStore,s.targetId,!0))}async function WP(t,e){const n=J(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xp(n.remoteStore,r.targetId))}async function GP(t,e,n){const r=eb(t);try{const s=await function(o,l){const u=J(o),c=ve.now(),f=l.reduce((I,N)=>I.add(N.key),se());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let N=zn(),P=se();return u.xs.getEntries(I,f).next(A=>{N=A,N.forEach((x,y)=>{y.isValidDocument()||(P=P.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,N)).next(A=>{m=A;const x=[];for(const y of l){const T=ak(y,m.get(y.key).overlayedDocument);T!=null&&x.push(new $r(y.key,T,Nx(T.value.mapValue),Ht.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,x,l)}).next(A=>{g=A;const x=A.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(I,A.batchId,x)})}).then(()=>({batchId:g.batchId,changes:Fx(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Se(re)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await xa(r,s.changes),await uc(r.remoteStore)}catch(s){const i=Cp(s,"Failed to persist write");n.reject(i)}}async function TE(t,e){const n=J(t);try{const r=await iP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?he(o.hu,14607):s.removedDocuments.size>0&&(he(o.hu,42227),o.hu=!1))}),await xa(n,r,e)}catch(r){await Vi(r)}}function pv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.ba)g.va(l)&&(c=!0)}),c&&Ap(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KP(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Se(G.comparator);o=o.insert(i,at.newNoDocument(i,X.min()));const l=se().add(i),u=new oc(X.min(),new Map,new Se(re),o,l);await TE(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Rp(r)}else await qd(r.localStore,e,!1).then(()=>Gd(r,e,n)).catch(Vi)}async function QP(t,e){const n=J(t),r=e.batch.batchId;try{const s=await sP(n.localStore,e);SE(n,r,null),IE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xa(n,s)}catch(s){await Vi(s)}}async function YP(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(he(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);SE(r,e,n),IE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xa(r,s)}catch(s){await Vi(s)}}function IE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function SE(t,e,n){const r=J(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||CE(t,r)})}function CE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(xp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Rp(t))}function mv(t,e,n){for(const r of n)r instanceof wE?(t.Vu.addReference(r.key,e),XP(t,r)):r instanceof xE?(q(Np,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||CE(t,r.key)):Q(19791,{wu:r})}function XP(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(Np,"New document in limbo: "+n),t.Eu.add(r),Rp(t))}function Rp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(pe.fromString(e)),r=t.fu.next();t.Au.set(r,new UP(n)),t.Ru=t.Ru.insert(n,r),hE(t.remoteStore,new dr(_n(hp(n.path)),r,"TargetPurposeLimboResolution",Zu.ce))}}async function xa(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=_p.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(c,g=>M.forEach(g.Ts,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>M.forEach(g.Is,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!ji(m))throw m;q(wp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const I=f.vs.get(g),N=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(N);f.vs=f.vs.insert(g,P)}}}(r.localStore,i))}async function JP(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){q(Np,"User change. New user:",e.toKey());const r=await aE(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new $(O.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xa(n,r.Ns)}}function ZP(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let s=se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function AE(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KP.bind(null,e),e.Pu.J_=OP.bind(null,e.eventManager),e.Pu.yu=LP.bind(null,e.eventManager),e}function eb(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YP.bind(null,e),e}class yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ac(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return rP(this.persistence,new eP,e.initialUser,this.serializer)}Cu(e){return new oE(vp.Vi,this.serializer)}Du(e){return new cP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yu.provider={build:()=>new yu};class tb extends yu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){he(this.persistence.referenceDelegate instanceof mu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Fk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new oE(r=>mu.Vi(r,n),this.serializer)}}class Kd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JP.bind(null,this.syncEngine),await DP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jP}()}createDatastore(e){const n=ac(e.databaseInfo.databaseId),r=mP(e.databaseInfo);return wP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new EP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>pv(this.syncEngine,n,0),function(){return lv.v()?new lv:new hP}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new zP(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);q(vs,"RemoteStore shutting down."),i.Ea.add(5),await wa(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Kd.provider={build:()=>new Kd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="FirestoreClient";class nb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=ip.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(Or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ih(t,e){t.asyncQueue.verifyOperationInProgress(),q(Or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await aE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rb(t);q(Or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>cv(e.remoteStore,s)),t._onlineComponents=e}async function rb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Or,"Using user provided OfflineComponentProvider");try{await Ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await Ih(t,new yu)}}else q(Or,"Using default OfflineComponentProvider"),await Ih(t,new tb(void 0));return t._offlineComponents}async function RE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Or,"Using user provided OnlineComponentProvider"),await gv(t,t._uninitializedComponentsProvider._online)):(q(Or,"Using default OnlineComponentProvider"),await gv(t,new Kd))),t._onlineComponents}function sb(t){return RE(t).then(e=>e.syncEngine)}async function kE(t){const e=await RE(t),n=e.eventManager;return n.onListen=BP.bind(null,e.syncEngine),n.onUnlisten=HP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$P.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WP.bind(null,e.syncEngine),n}function ib(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new NE({next:g=>{f.Nu(),o.enqueueAndForget(()=>vE(i,m));const I=g.docs.has(l);!I&&g.fromCache?c.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?c.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new _E(hp(l.path),f,{includeMetadataChanges:!0,Ka:!0});return yE(i,m)}(await kE(t),t.asyncQueue,e,n,r)),r.promise}function ob(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new NE({next:g=>{f.Nu(),o.enqueueAndForget(()=>vE(i,m)),g.fromCache&&u.source==="server"?c.reject(new $(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new _E(l,f,{includeMetadataChanges:!0,Ka:!0});return yE(i,m)}(await kE(t),t.asyncQueue,e,n,r)),r.promise}function ab(t,e){const n=new Dn;return t.asyncQueue.enqueueAndForget(async()=>GP(await sb(t),e,n)),n.promise}/**
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
 */function PE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="ComponentProvider",yv=new Map;function ub(t,e,n,r,s){return new kR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,PE(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="firestore.googleapis.com",vv=!0;class _v{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bE,this.ssl=vv}else this.host=e.host,this.ssl=e.ssl??vv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lk)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_R("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _v({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _v(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uR;switch(r.type){case"firstParty":return new fR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yv.get(n);r&&(q(lb,"Removing Datastore"),yv.delete(n),r.terminate())}(this),Promise.resolve()}}function cb(t,e,n,r={}){var c;t=an(t,cc);const s=Pi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Pw(`https://${l}`),bw("Firestore",!0)),i.host!==bE&&i.host!==l&&ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!kr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=it.MOCK_USER;else{f=hA(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new it(g)}t._authCredentials=new cR(new gx(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Li(this.firestore,e,this._query)}}class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}toJSON(){return{type:De._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ga(n,De._jsonSchema))return new De(e,r||null,new G(pe.fromString(n.referencePath)))}}De._jsonSchemaVersion="firestore/documentReference/1.0",De._jsonSchema={type:Me("string",De._jsonSchemaVersion),referencePath:Me("string")};class Cr extends Li{constructor(e,n,r){super(e,n,hp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new G(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function We(t,e,...n){if(t=Ke(t),yx("collection","path",e),t instanceof cc){const r=pe.fromString(e,...n);return by(r),new Cr(t,null,r)}{if(!(t instanceof De||t instanceof Cr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return by(r),new Cr(t.firestore,null,r)}}function At(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=ip.newId()),yx("doc","path",e),t instanceof cc){const r=pe.fromString(e,...n);return Py(r),new De(t,null,new G(r))}{if(!(t instanceof De||t instanceof Cr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Py(r),new De(t.firestore,t instanceof Cr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="AsyncQueue";class xv{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new uE(this,"async_queue_retry"),this._c=()=>{const r=Th();r&&q(wv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Dn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ji(e))throw e;q(wv,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Un("INTERNAL UNHANDLED ERROR: ",Ev(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Sp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:Ev(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ev(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Cs extends cc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new xv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xv(e),this._firestoreClient=void 0,await e}}}function hb(t,e){const n=typeof t=="object"?t:Xf(),r=typeof t=="string"?t:lu,s=Ts(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uA("firestore");i&&cb(s,...i)}return s}function kp(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||db(t),t._firestoreClient}function db(t){var r,s,i,o;const e=t._freezeSettings(),n=ub(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new nb(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(et.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ga(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:Me("string",zt._jsonSchemaVersion),bytes:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(e){if(ga(e,xn._jsonSchema))return new xn(e.latitude,e.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:Me("string",xn._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ga(e,rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new rn(e.vectorValues);throw new $(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rn._jsonSchemaVersion="firestore/vectorValue/1.0",rn._jsonSchema={type:Me("string",rn._jsonSchemaVersion),vectorValues:Me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=/^__.*__$/;class pb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class DE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function VE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class Dp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Dp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return vu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(VE(this.dataSource)&&fb.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class mb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ac(e)}createContext(e,n,r,s=!1){return new Dp({dataSource:e,methodName:n,targetDoc:r,path:Xe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hc(t){const e=t._freezeSettings(),n=ac(t._databaseId);return new mb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jE(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Vp("Data must be an object, but it was:",o,r);const l=OE(r,o);let u,c;if(i.merge)u=new bt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=xi(e,m,n);if(!o.contains(g))throw new $(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);FE(f,g)||f.push(g)}u=new bt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new pb(new Et(l),u,c)}class dc extends bp{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}function gb(t,e,n,r){const s=t.createContext(1,e,n);Vp("Data must be an object, but it was:",s,r);const i=[],o=Et.empty();Br(r,(u,c)=>{const f=ME(e,u,n);c=Ke(c);const m=s.childContextForFieldPath(f);if(c instanceof dc)i.push(f);else{const g=Ea(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new bt(i);return new DE(o,l,s.fieldTransforms)}function yb(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[xi(e,r,n)],u=[s];if(i.length%2!=0)throw new $(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(xi(e,i[g])),u.push(i[g+1]);const c=[],f=Et.empty();for(let g=l.length-1;g>=0;--g)if(!FE(c,l[g])){const I=l[g];let N=u[g];N=Ke(N);const P=o.childContextForFieldPath(I);if(N instanceof dc)c.push(I);else{const A=Ea(N,P);A!=null&&(c.push(I),f.set(I,A))}}const m=new bt(c);return new DE(f,m,o.fieldTransforms)}function vb(t,e,n,r=!1){return Ea(n,t.createContext(r?4:3,e))}function Ea(t,e){if(LE(t=Ke(t)))return Vp("Unsupported field value:",e,t),OE(t,e);if(t instanceof bp)return function(r,s){if(!VE(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Ea(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ve.fromDate(r);return{timestampValue:pu(s.serializer,i)}}if(r instanceof ve){const i=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pu(s.serializer,i)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:Xx(s.serializer,r._byteString)};if(r instanceof De){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rn)return function(o,l){const u=o instanceof rn?o.toArray():o;return{mapValue:{fields:{[Cx]:{stringValue:Ax},[uu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return dp(l.serializer,f)})}}}}}}(r,s);if(sE(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ju(r)}`)}(t,e)}function OE(t,e){const n={};return wx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=Ea(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function LE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof xn||t instanceof zt||t instanceof De||t instanceof bp||t instanceof rn||sE(t))}function Vp(t,e,n){if(!LE(n)||!vx(n)){const r=Ju(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function xi(t,e,n){if((e=Ke(e))instanceof Pp)return e._internalPath;if(typeof e=="string")return ME(t,e);throw vu("Field path arguments must be of type string or ",t,!1,void 0,n)}const _b=new RegExp("[~\\*/\\[\\]]");function ME(t,e,n){if(e.search(_b)>=0)throw vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pp(...e.split("."))._internalPath}catch{throw vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function FE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[uu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Pe(o.doubleValue));return new rn(n)}convertGeoPoint(e){return new xn(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=br(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);he(rE(r),9688,{name:e});const s=new ra(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE extends wb{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}const Tv="@firebase/firestore",Iv="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(xi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xb extends zE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jp{}class Tb extends jp{}function fr(t,e,...n){let r=[];e instanceof jp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Op).length,l=i.filter(u=>u instanceof fc).length;if(o>1||o>0&&l>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class fc extends Tb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fc(e,n,r)}_apply(e){const n=this._parse(e);return BE(e._query,n),new Li(e.firestore,e.converter,Md(e._query,n))}_parse(e){const n=hc(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Cv(m,f);const N=[];for(const P of m)N.push(Sv(u,i,P));g={arrayValue:{values:N}}}else g=Sv(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Cv(m,f),g=vb(l,o,m,f==="in"||f==="not-in");return Le.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zt(t,e,n){const r=e,s=xi("where",t);return fc._create(s,r,n)}class Op extends jp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)BE(o,u),o=Md(o,u)}(e._query,n),new Li(e.firestore,e.converter,Md(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Sv(t,e,n){if(typeof(n=Ke(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jx(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!G.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Uy(t,new G(r))}if(n instanceof De)return Uy(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ju(n)}.`)}function Cv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function $E(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends zE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=as._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}as._jsonSchemaVersion="firestore/documentSnapshot/1.0",as._jsonSchema={type:Me("string",as._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class Sl extends as{data(e={}){return super.data(e)}}class ri{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sl(this._firestore,this._userDataWriter,r.key,r,new vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Sl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Sl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Ib(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ri._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ip.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ib(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */ri._jsonSchemaVersion="firestore/querySnapshot/1.0",ri._jsonSchema={type:Me("string",ri._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){t=an(t,De);const e=an(t.firestore,Cs),n=kp(e);return ib(n,t._key).then(r=>Cb(e,t,r))}function kt(t){t=an(t,Li);const e=an(t.firestore,Cs),n=kp(e),r=new UE(e);return Eb(t._query),ob(n,t._query).then(s=>new ri(e,r,t,s))}function Sb(t,e,n){t=an(t,De);const r=an(t.firestore,Cs),s=$E(t.converter,e),i=hc(r);return mc(r,[jE(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function Ei(t,e,n,...r){t=an(t,De);const s=an(t.firestore,Cs),i=hc(s);let o;return o=typeof(e=Ke(e))=="string"||e instanceof Pp?yb(i,"updateDoc",t._key,e,n,r):gb(i,"updateDoc",t._key,e),mc(s,[o.toMutation(t._key,Ht.exists(!0))])}function pc(t){return mc(an(t.firestore,Cs),[new fp(t._key,Ht.none())])}function Ta(t,e){const n=an(t.firestore,Cs),r=At(t),s=$E(t.converter,e),i=hc(t.firestore);return mc(n,[jE(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function mc(t,e){const n=kp(t);return ab(n,e)}function Cb(t,e,n){const r=n.docs.get(e._key),s=new UE(t);return new as(t,s,e._key,r,new vo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){lR(bi),In(new on("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Cs(new hR(r.getProvider("auth-internal")),new pR(o,r.getProvider("app-check-internal")),PR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),qt(Tv,Iv,e),qt(Tv,Iv,"esm2020")})();function HE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ab=HE,WE=new Es("auth","Firebase",HE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Qu("@firebase/auth");function Nb(t,...e){_u.logLevel<=ne.WARN&&_u.warn(`Auth (${bi}): ${t}`,...e)}function Cl(t,...e){_u.logLevel<=ne.ERROR&&_u.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw Lp(t,...e)}function En(t,...e){return Lp(t,...e)}function GE(t,e,n){const r={...Ab(),[e]:n};return new Es("auth","Firebase",r).create(e,{appName:t.name})}function ls(t){return GE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return WE.create(t,...e)}function Y(t,e,...n){if(!t)throw Lp(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cl(e),new Error(e)}function $n(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Rb(){return Av()==="http:"||Av()==="https:"}function Av(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rb()||Dw()||"connection"in navigator)?navigator.onLine:!0}function Pb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=pA()||yA()}get(){return kb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Vb=new Ia(3e4,6e4);function Fp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Mi(t,e,n,r,s={}){return QE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ma({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return gA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Pi(t.emulatorConfig.host)&&(c.credentials="include"),KE.fetch()(await YE(t,t.config.apiHost,n,l),c)})}async function QE(t,e,n){t._canInitEmulator=!1;const r={...bb,...e};try{const s=new Ob(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw al(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw al(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw al(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw al(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw GE(t,f,c);Bn(t,f)}}catch(s){if(s instanceof un)throw s;Bn(t,"network-request-failed",{message:String(s)})}}async function jb(t,e,n,r,s={}){const i=await Mi(t,e,n,r,s);return"mfaPendingCredential"in i&&Bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function YE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Mp(t.config,s):`${t.config.apiScheme}://${s}`;return Db.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Ob{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),Vb.get())})}}function al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=En(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function wu(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mb(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),s=Up(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Do(Sh(s.auth_time)),issuedAtTime:Do(Sh(s.iat)),expirationTime:Do(Sh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function Up(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Aw(n);return s?JSON.parse(s):(Cl("Failed to decode base64 JWT payload"),null)}catch(s){return Cl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nv(t){const e=Up(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&Fb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Fb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Do(this.lastLoginAt),this.creationTime=Do(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await aa(t,wu(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?XE(s.providerUserInfo):[],o=Bb(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Yd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function zb(t){const e=Ke(t);await xu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function XE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e){const n=await QE(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await YE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Pi(t.emulatorConfig.host)&&(u.credentials="include"),KE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qb(t,e){return Mi(t,"POST","/v2/accounts:revokeToken",Fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Nv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $b(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new si;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ub(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mb(this,e)}reload(){return zb(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(ls(this.auth));const e=await this.getIdToken();return await aa(this,Lb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:I,providerData:N,stsTokenManager:P}=n;Y(m&&P,e,"internal-error");const A=si.fromJSON(this.name,P);Y(typeof m=="string",e,"internal-error"),Zn(r,e.name),Zn(s,e.name),Y(typeof g=="boolean",e,"internal-error"),Y(typeof I=="boolean",e,"internal-error"),Zn(i,e.name),Zn(o,e.name),Zn(l,e.name),Zn(u,e.name),Zn(c,e.name),Zn(f,e.name);const x=new en({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:A,createdAt:c,lastLoginAt:f});return N&&Array.isArray(N)&&(x.providerData=N.map(y=>({...y}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new si;s.updateFromServerResponse(n);const i=new en({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?XE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new si;l.updateFromIdToken(r);const u=new en({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Map;function Pn(t){$n(t instanceof Function,"Expected a class definition");let e=Rv.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}JE.type="NONE";const kv=JE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e,n){return`firebase:${t}:${e}:${n}`}class ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Al(this.userKey,s.apiKey,i),this.fullPersistenceKey=Al("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wu(this.auth,{idToken:e}).catch(()=>{});return n?en._fromGetAccountInfoResponse(this.auth,n,e):null}return en._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ii(Pn(kv),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Pn(kv);const o=Al(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await wu(e,{idToken:f}).catch(()=>{});if(!g)break;m=await en._fromGetAccountInfoResponse(e,g,f)}else m=en._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ii(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ii(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ZE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sT(e))return"Blackberry";if(iT(e))return"Webos";if(eT(e))return"Safari";if((e.includes("chrome/")||tT(e))&&!e.includes("edge/"))return"Chrome";if(rT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ZE(t=ht()){return/firefox\//i.test(t)}function eT(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tT(t=ht()){return/crios\//i.test(t)}function nT(t=ht()){return/iemobile/i.test(t)}function rT(t=ht()){return/android/i.test(t)}function sT(t=ht()){return/blackberry/i.test(t)}function iT(t=ht()){return/webos/i.test(t)}function zp(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hb(t=ht()){var e;return zp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Wb(){return vA()&&document.documentMode===10}function oT(t=ht()){return zp(t)||rT(t)||iT(t)||sT(t)||/windows phone/i.test(t)||nT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e=[]){let n;switch(t){case"Browser":n=Pv(ht());break;case"Worker":n=`${Pv(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
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
 */class Gb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Kb(t,e={}){return Mi(t,"GET","/v2/passwordPolicy",Fp(t,e))}/**
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
 */const Qb=6;class Yb{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Qb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bv(this),this.idTokenSubscription=new bv(this),this.beforeStateQueue=new Gb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wu(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(ls(this));const n=e?Ke(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(ls(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(ls(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kb(this),n=new Yb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Es("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Nb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Bp(t){return Ke(t)}class bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=SA(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $p={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jb(t){$p=t}function Zb(t){return $p.loadJS(t)}function eD(){return $p.gapiScript}function tD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t,e){const n=Ts(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(kr(i,e??{}))return s;Bn(s,"already-initialized")}return n.initialize({options:e})}function rD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sD(t,e,n){const r=Bp(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lT(e),{host:o,port:l}=iD(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(kr(c,r.config.emulator)&&kr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Pi(o)?(Pw(`${i}//${o}${u}`),bw("Auth",!0)):oD()}function lT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iD(t){const e=lT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dv(o)}}}function Dv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return jb(t,"POST","/v1/accounts:signInWithIdp",Fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD="http://localhost";class _s extends uT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new _s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:aD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends cT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Sa{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Sa{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Sa{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await en._fromIdTokenResponse(e,r,s),o=Vv(r);return new Ti({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vv(r);return new Ti({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Eu(e,n,r,s)}}function hT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,i,e,r):i})}async function lD(t,e,n=!1){const r=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(ls(r));const s="reauthenticate";try{const i=await aa(t,hT(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Up(i.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Ti._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t,e,n=!1){if(gn(t.app))return Promise.reject(ls(t));const r="signIn",s=await hT(t,r,e),i=await Ti._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function hD(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function dD(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}const Tu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=1e3,pD=10;class fT extends dT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pD):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fT.type="LOCAL";const mD=fT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT extends dT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pT.type="SESSION";const mT=pT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await gD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=qp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function vD(t){Tn().location.href=t}/**
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
 */function gT(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function _D(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function xD(){return gT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="firebaseLocalStorageDb",ED=1,Iu="firebaseLocalStorage",vT="fbase_key";class Ca{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yc(t,e){return t.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function TD(){const t=indexedDB.deleteDatabase(yT);return new Ca(t).toPromise()}function Xd(){const t=indexedDB.open(yT,ED);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Iu,{keyPath:vT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Iu)?e(r):(r.close(),await TD(),e(await Xd()))})})}async function jv(t,e,n){const r=yc(t,!0).put({[vT]:e,value:n});return new Ca(r).toPromise()}async function ID(t,e){const n=yc(t,!1).get(e),r=await new Ca(n).toPromise();return r===void 0?null:r.value}function Ov(t,e){const n=yc(t,!0).delete(e);return new Ca(n).toPromise()}const SD=800,CD=3;class _T{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(xD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await _D(),!this.activeServiceWorker)return;this.sender=new yD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xd();return await jv(e,Tu,"1"),await Ov(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ID(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ov(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yc(s,!1).getAll();return new Ca(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_T.type="LOCAL";const AD=_T;new Ia(3e4,6e4);/**
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
 */function ND(t,e){return e?Pn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp extends uT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RD(t){return cD(t.auth,new Hp(t),t.bypassAuthState)}function kD(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),uD(n,new Hp(t),t.bypassAuthState)}async function PD(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),lD(n,new Hp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RD;case"linkViaPopup":case"linkViaRedirect":return PD;case"reauthViaPopup":case"reauthViaRedirect":return kD;default:Bn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=new Ia(2e3,1e4);class Gs extends wT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bD.get())};e()}}Gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD="pendingRedirect",Nl=new Map;class VD extends wT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nl.get(this.auth._key());if(!e){try{const r=await jD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nl.set(this.auth._key(),e)}return this.bypassAuthState||Nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jD(t,e){const n=MD(e),r=LD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function OD(t,e){Nl.set(t._key(),e)}function LD(t){return Pn(t._redirectPersistence)}function MD(t){return Al(DD,t.config.apiKey,t.name)}async function FD(t,e,n=!1){if(gn(t.app))return Promise.reject(ls(t));const r=Bp(t),s=ND(r,e),o=await new VD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=10*60*1e3;class zD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lv(e))}saveEventToCache(e){this.cachedEventUids.add(Lv(e)),this.lastProcessedEventTime=Date.now()}}function Lv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HD=/^https?/;async function WD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $D(t);for(const n of e)try{if(GD(n))return}catch{}Bn(t,"unauthorized-domain")}function GD(t){const e=Qd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HD.test(n))return!1;if(qD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const KD=new Ia(3e4,6e4);function Mv(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QD(t){return new Promise((e,n)=>{var s,i,o;function r(){Mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mv(),n(En(t,"network-request-failed"))},timeout:KD.get()})}if((i=(s=Tn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Tn().gapi)!=null&&o.load)r();else{const l=tD("iframefcb");return Tn()[l]=()=>{gapi.load?r():n(En(t,"network-request-failed"))},Zb(`${eD()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function YD(t){return Rl=Rl||QD(t),Rl}/**
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
 */const XD=new Ia(5e3,15e3),JD="__/auth/iframe",ZD="emulator/auth/iframe",e4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n4(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mp(e,ZD):`https://${t.config.authDomain}/${JD}`,r={apiKey:e.apiKey,appName:t.name,v:bi},s=t4.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ma(r).slice(1)}`}async function r4(t){const e=await YD(t),n=Tn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:n4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),l=Tn().setTimeout(()=>{i(o)},XD.get());function u(){Tn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const s4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i4=500,o4=600,a4="_blank",l4="http://localhost";class Fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u4(t,e,n,r=i4,s=o4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...s4,width:r.toString(),height:s.toString(),top:i,left:o},c=ht().toLowerCase();n&&(l=tT(c)?a4:n),ZE(c)&&(e=e||l4,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,N])=>`${g}${I}=${N},`,"");if(Hb(c)&&l!=="_self")return c4(e||"",l),new Fv(null);const m=window.open(e||"",l,f);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new Fv(m)}function c4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const h4="__/auth/handler",d4="emulator/auth/handler",f4=encodeURIComponent("fac");async function Uv(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:s};if(e instanceof cT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Sa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${f4}=${encodeURIComponent(u)}`:"";return`${p4(t)}?${ma(l).slice(1)}${c}`}function p4({config:t}){return t.emulator?Mp(t,d4):`https://${t.authDomain}/${h4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="webStorageSupport";class m4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mT,this._completeRedirectFn=FD,this._overrideRedirectResult=OD}async _openPopup(e,n,r,s){var o;$n((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Uv(e,n,r,Qd(),s);return u4(e,i,qp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Uv(e,n,r,Qd(),s);return vD(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await r4(e),r=new zD(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ch,{type:Ch},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ch];i!==void 0&&n(!!i),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oT()||eT()||zp()}}const g4=m4;var zv="@firebase/auth",Bv="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _4(t){In(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aT(t)},c=new Xb(r,s,i,u);return rD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new on("auth-internal",e=>{const n=Bp(e.getProvider("auth").getImmediate());return(r=>new y4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(zv,Bv,v4(t)),qt(zv,Bv,"esm2020")}/**
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
 */const w4=5*60,x4=kw("authIdTokenMaxAge")||w4;let $v=null;const E4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>x4)return;const s=n==null?void 0:n.token;$v!==s&&($v=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function T4(t=Xf()){const e=Ts(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nD(t,{popupRedirectResolver:g4,persistence:[AD,mD,mT]}),r=kw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=E4(i.toString());dD(n,o,()=>o(n.currentUser)),hD(n,l=>o(l))}}const s=Nw("auth");return s&&sD(n,`http://${s}`),n}function I4(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Jb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=En("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",I4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_4("Browser");const S4={apiKey:"AIzaSyD9qeU8nNWLWaR_NO56dpvuGxKvC6DWnEo",authDomain:"qlnhansu123go.firebaseapp.com",projectId:"qlnhansu123go",storageBucket:"qlnhansu123go.firebasestorage.app",messagingSenderId:"1077518563443",appId:"1:1077518563443:web:a7b3adc2ef62438e8b1206",measurementId:"G-3Q6L1TN3TE"},Wp=Fw(S4);rR(Wp);const ue=hb(Wp);T4(Wp);const ce={DRIVERS:"drivers",DEPOSITS:"deposits",REVENUE:"revenue",NIGHT_SHIFTS:"nightShifts",SETTINGS:"settings",EXPENSES:"expenses"},qv={driverSharePercent:60,companySharePercent:40},Ii={get:async()=>{try{const t=At(ue,ce.SETTINGS,"config"),e=await qE(t);return e.exists()?e.data():qv}catch(t){return console.error("Error getting settings:",t),qv}},save:async t=>{try{const e=At(ue,ce.SETTINGS,"config");return await Sb(e,t),!0}catch(e){return console.error("Error saving settings:",e),!1}}},Vn={getAll:async()=>{try{return(await kt(We(ue,ce.DRIVERS))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting drivers:",t),[]}},getById:async t=>{try{const e=At(ue,ce.DRIVERS,t),n=await qE(e);return n.exists()?{id:n.id,...n.data()}:null}catch(e){return console.error("Error getting driver:",e),null}},add:async t=>{try{const e={...t,createdAt:new Date().toISOString().split("T")[0]};return{id:(await Ta(We(ue,ce.DRIVERS),e)).id,...e}}catch(e){return console.error("Error adding driver:",e),null}},update:async(t,e)=>{try{const n=At(ue,ce.DRIVERS,t);return await Ei(n,e),{id:t,...e}}catch(n){return console.error("Error updating driver:",n),null}},delete:async t=>{try{return await pc(At(ue,ce.DRIVERS,t)),!0}catch(e){return console.error("Error deleting driver:",e),!1}}},Si={getAll:async()=>{try{return(await kt(We(ue,ce.DEPOSITS))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting deposits:",t),[]}},getByDriverId:async t=>{try{const e=fr(We(ue,ce.DEPOSITS),Zt("driverId","==",t)),n=await kt(e);return n.docs.length>0?{id:n.docs[0].id,...n.docs[0].data()}:null}catch(e){return console.error("Error getting deposit:",e),null}},update:async(t,e)=>{try{const n=await Si.getByDriverId(t);if(n){const r=e>=n.requiredAmount?"paid":e>0?"partial":"unpaid",s={paidAmount:e,status:r,lastPaymentDate:new Date().toISOString().split("T")[0]};return await Ei(At(ue,ce.DEPOSITS,n.id),s),{...n,...s}}return null}catch(n){return console.error("Error updating deposit:",n),null}},createForDriver:async t=>{try{const e={driverId:t.id,driverName:t.name,requiredAmount:5e6,paidAmount:0,status:"unpaid",lastPaymentDate:null};return{id:(await Ta(We(ue,ce.DEPOSITS),e)).id,...e}}catch(e){return console.error("Error creating deposit:",e),null}}},la={getAll:async()=>{try{return(await kt(We(ue,ce.REVENUE))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting revenue:",t),[]}},getByVehicleCode:async t=>{try{const e=fr(We(ue,ce.REVENUE),Zt("vehicleCode","==",t));return(await kt(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error getting revenue by vehicle:",e),[]}},getByMonth:async t=>{try{const e=fr(We(ue,ce.REVENUE),Zt("month","==",t));return(await kt(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error getting revenue by month:",e),[]}},add:async t=>{try{const e=fr(We(ue,ce.REVENUE),Zt("vehicleCode","==",t.vehicleCode),Zt("month","==",t.month)),n=await kt(e);if(n.docs.length>0){const i=At(ue,ce.REVENUE,n.docs[0].id);return await Ei(i,t),{id:n.docs[0].id,...t}}const r={...t,bonus:t.bonus||0,penalty:t.penalty||0};return{id:(await Ta(We(ue,ce.REVENUE),r)).id,...r}}catch(e){return console.error("Error adding revenue:",e),null}},update:async(t,e)=>{try{const n=At(ue,ce.REVENUE,t);return await Ei(n,e),{id:t,...e}}catch(n){return console.error("Error updating revenue:",n),null}},delete:async t=>{try{return await pc(At(ue,ce.REVENUE,t)),!0}catch(e){return console.error("Error deleting revenue:",e),!1}},calculateNet:async t=>{const e=await Ii.get();return t.amount*e.driverSharePercent/100+(t.bonus||0)-(t.penalty||0)}},lr={getAll:async()=>{try{return(await kt(We(ue,ce.NIGHT_SHIFTS))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting night shifts:",t),[]}},getByDate:async t=>{try{const e=fr(We(ue,ce.NIGHT_SHIFTS),Zt("date","==",t));return(await kt(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error getting shifts by date:",e),[]}},getByMonth:async t=>{try{return(await lr.getAll()).filter(n=>n.date.startsWith(t))}catch(e){return console.error("Error getting shifts by month:",e),[]}},getByDriver:async t=>{try{const e=fr(We(ue,ce.NIGHT_SHIFTS),Zt("driverId","==",t));return(await kt(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error getting shifts by driver:",e),[]}},add:async t=>{try{const e=fr(We(ue,ce.NIGHT_SHIFTS),Zt("date","==",t.date),Zt("driverId","==",t.driverId)),n=await kt(e);if(n.docs.length>0)return{id:n.docs[0].id,...n.docs[0].data()};const r={...t,status:"scheduled"};return{id:(await Ta(We(ue,ce.NIGHT_SHIFTS),r)).id,...r}}catch(e){return console.error("Error adding shift:",e),null}},remove:async(t,e)=>{try{const n=fr(We(ue,ce.NIGHT_SHIFTS),Zt("date","==",t),Zt("driverId","==",e)),r=await kt(n);for(const s of r.docs)await pc(At(ue,ce.NIGHT_SHIFTS,s.id));return!0}catch(n){return console.error("Error removing shift:",n),!1}},updateStatus:async(t,e)=>{try{const n=At(ue,ce.NIGHT_SHIFTS,t);return await Ei(n,{status:e}),{id:t,status:e}}catch(n){return console.error("Error updating shift status:",n),null}},countByDriverMonth:async(t,e)=>(await lr.getByMonth(e)).filter(r=>r.driverId===t).length},ai={getAll:async()=>{try{return(await kt(We(ue,ce.EXPENSES))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting expenses:",t),[]}},getByMonth:async t=>{try{return(await ai.getAll()).filter(n=>n.date&&n.date.startsWith(t))}catch(e){return console.error("Error getting expenses by month:",e),[]}},add:async t=>{try{return{id:(await Ta(We(ue,ce.EXPENSES),t)).id,...t}}catch(e){return console.error("Error adding expense:",e),null}},update:async(t,e)=>{try{const n=At(ue,ce.EXPENSES,t);return await Ei(n,e),{id:t,...e}}catch(n){return console.error("Error updating expense:",n),null}},delete:async t=>{try{return await pc(At(ue,ce.EXPENSES,t)),!0}catch(e){return console.error("Error deleting expense:",e),!1}}};function C4(){const[t,e]=V.useState({totalDrivers:0,monthlyRevenue:0,totalDeposits:0,paidDeposits:0}),[n,r]=V.useState([]),[s,i]=V.useState(!0);V.useEffect(()=>{o()},[]);const o=async()=>{i(!0);try{const c=await Vn.getAll(),f=await Si.getAll(),m=await la.getAll(),g=new Date().toISOString().slice(0,7),I=m.filter(N=>N.month===g).reduce((N,P)=>N+(P.amount||0),0);e({totalDrivers:c.length,monthlyRevenue:I,totalDeposits:f.reduce((N,P)=>N+(P.paidAmount||0),0),paidDeposits:f.filter(N=>N.status==="paid").length}),r(c.slice(-5).reverse())}catch(c){console.error("Error loading dashboard data:",c)}i(!1)},l=c=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(c),u=[{title:"Tổng tài xế",value:t.totalDrivers,icon:Tw,color:"bg-blue-500",change:"+2",changeType:"up"},{title:"Doanh thu tháng",value:l(t.monthlyRevenue),icon:Zo,color:"bg-taxi-500",change:"+12%",changeType:"up"},{title:"Tiền cọc đã thu",value:l(t.totalDeposits),icon:Qf,color:"bg-green-500",change:`${t.paidDeposits}/${t.totalDrivers}`,changeType:"neutral"},{title:"Xe đang hoạt động",value:t.totalDrivers,icon:Rr,color:"bg-purple-500",change:"100%",changeType:"up"}];return s?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in",children:[h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Dashboard"}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Tổng quan hoạt động công ty taxi"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8",children:u.map((c,f)=>{const m=c.icon;return h.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300",children:[h.jsxs("div",{className:"flex items-start justify-between mb-4",children:[h.jsx("div",{className:`${c.color} p-3 rounded-xl`,children:h.jsx(m,{className:"text-white",size:24})}),h.jsxs("div",{className:`flex items-center gap-1 text-sm ${c.changeType==="up"?"text-green-600":c.changeType==="down"?"text-red-600":"text-gray-500"}`,children:[c.changeType==="up"&&h.jsx(jC,{size:16}),c.changeType==="down"&&h.jsx(VC,{size:16}),h.jsx("span",{children:c.change})]})]}),h.jsx("h3",{className:"text-gray-500 text-sm font-medium",children:c.title}),h.jsx("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:c.value})]},f)})}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Thao tác nhanh"}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs(lt,{to:"/drivers/new",className:"flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-taxi-500 to-taxi-600 text-white hover:from-taxi-600 hover:to-taxi-700 transition-all duration-300 group",children:[h.jsx("div",{className:"p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform",children:h.jsx(Wu,{size:20})}),h.jsx("span",{className:"font-medium",children:"Thêm tài xế"})]}),h.jsxs(lt,{to:"/revenue/new",className:"flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group",children:[h.jsx("div",{className:"p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform",children:h.jsx(Zo,{size:20})}),h.jsx("span",{className:"font-medium",children:"Nhập doanh thu"})]})]})]}),h.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Tài xế mới"}),h.jsx(lt,{to:"/drivers",className:"text-taxi-600 text-sm font-medium hover:underline",children:"Xem tất cả"})]}),h.jsxs("div",{className:"space-y-3",children:[n.map(c=>{var f;return h.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors",children:[h.jsx("div",{className:"w-10 h-10 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold",children:(f=c.name)==null?void 0:f.charAt(0)}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("p",{className:"font-medium text-gray-900 truncate",children:c.name}),h.jsx("p",{className:"text-sm text-gray-500",children:c.licensePlate})]}),h.jsx("span",{className:"text-xs text-gray-400",children:c.vehicleCode})]},c.id)}),n.length===0&&h.jsx("p",{className:"text-gray-500 text-center py-4",children:"Chưa có tài xế nào"})]})]})]})]})}function A4(){const[t,e]=V.useState([]),[n,r]=V.useState(""),[s,i]=V.useState(null),[o,l]=V.useState(!0);V.useEffect(()=>{u()},[]);const u=async()=>{l(!0);const m=await Vn.getAll();e(m),l(!1)},c=async m=>{await Vn.delete(m),await u(),i(null)},f=t.filter(m=>{var g,I,N;return((g=m.name)==null?void 0:g.toLowerCase().includes(n.toLowerCase()))||((I=m.licensePlate)==null?void 0:I.toLowerCase().includes(n.toLowerCase()))||((N=m.vehicleCode)==null?void 0:N.toLowerCase().includes(n.toLowerCase()))});return o?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Quản lý tài xế"}),h.jsxs("p",{className:"text-gray-500 mt-1",children:["Danh sách ",t.length," tài xế"]})]}),h.jsxs(lt,{to:"/drivers/new",className:"inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30",children:[h.jsx(Wu,{size:20}),h.jsx("span",{children:"Thêm tài xế"})]})]}),h.jsx("div",{className:"bg-white rounded-2xl p-4 mb-6 shadow-sm",children:h.jsxs("div",{className:"relative",children:[h.jsx(QC,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:20}),h.jsx("input",{type:"text",placeholder:"Tìm kiếm...",value:n,onChange:m=>r(m.target.value),className:"w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none"})]})}),h.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[h.jsx("div",{className:"hidden lg:block overflow-x-auto",children:h.jsxs("table",{className:"w-full",children:[h.jsx("thead",{className:"bg-gray-50 border-b",children:h.jsxs("tr",{children:[h.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-gray-600",children:"Tài xế"}),h.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-gray-600",children:"Biển số"}),h.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-gray-600",children:"Loại xe"}),h.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-gray-600",children:"Mã xe"}),h.jsx("th",{className:"text-right px-6 py-4 text-sm font-semibold text-gray-600",children:"Thao tác"})]})}),h.jsx("tbody",{className:"divide-y",children:f.map(m=>{var g;return h.jsxs("tr",{className:"hover:bg-gray-50",children:[h.jsx("td",{className:"px-6 py-4",children:h.jsxs("div",{className:"flex items-center gap-3",children:[m.avatar?h.jsx("img",{src:m.avatar,alt:m.name,className:"w-10 h-10 rounded-full object-cover"}):h.jsx("div",{className:"w-10 h-10 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold",children:(g=m.name)==null?void 0:g.charAt(0)}),h.jsx("span",{className:"font-medium text-gray-900",children:m.name})]})}),h.jsx("td",{className:"px-6 py-4",children:h.jsxs("span",{className:"inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm",children:[h.jsx(Rr,{size:14}),m.licensePlate]})}),h.jsx("td",{className:"px-6 py-4 text-gray-600",children:m.vehicleType}),h.jsx("td",{className:"px-6 py-4 font-mono text-sm text-gray-600",children:m.vehicleCode}),h.jsx("td",{className:"px-6 py-4",children:h.jsxs("div",{className:"flex items-center justify-end gap-2",children:[h.jsx(lt,{to:`/drivers/edit/${m.id}`,className:"p-2 text-gray-500 hover:text-taxi-600 hover:bg-taxi-50 rounded-lg",children:h.jsx(Td,{size:18})}),h.jsx("button",{onClick:()=>i(m.id),className:"p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg",children:h.jsx(nu,{size:18})})]})})]},m.id)})})]})}),h.jsx("div",{className:"lg:hidden divide-y",children:f.map(m=>{var g;return h.jsxs("div",{className:"p-4 flex items-start gap-3",children:[m.avatar?h.jsx("img",{src:m.avatar,alt:m.name,className:"w-12 h-12 rounded-full object-cover"}):h.jsx("div",{className:"w-12 h-12 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold text-lg",children:(g=m.name)==null?void 0:g.charAt(0)}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("h3",{className:"font-semibold text-gray-900",children:m.name}),h.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[h.jsx("span",{className:"text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-mono",children:m.licensePlate}),h.jsx("span",{className:"text-xs text-gray-500",children:m.vehicleCode})]})]}),h.jsxs("div",{className:"flex gap-1",children:[h.jsx(lt,{to:`/drivers/edit/${m.id}`,className:"p-2 text-gray-500 hover:text-taxi-600 rounded-lg",children:h.jsx(Td,{size:18})}),h.jsx("button",{onClick:()=>i(m.id),className:"p-2 text-gray-500 hover:text-red-600 rounded-lg",children:h.jsx(nu,{size:18})})]})]},m.id)})}),f.length===0&&h.jsxs("div",{className:"text-center py-12",children:[h.jsx(Rr,{className:"mx-auto text-gray-300 mb-4",size:48}),h.jsx("p",{className:"text-gray-500",children:"Không tìm thấy tài xế"})]})]}),s&&h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[h.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Xác nhận xóa"}),h.jsx("p",{className:"text-gray-500 mb-6",children:"Bạn có chắc muốn xóa tài xế này?"}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:()=>i(null),className:"flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 font-medium",children:"Hủy"}),h.jsx("button",{onClick:()=>c(s),className:"flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 font-medium",children:"Xóa"})]})]})})]})}const Hv=["Toyota Vios","Toyota Camry","Hyundai Accent","Hyundai Elantra","Kia Morning","Kia Cerato","Honda City","Honda Civic","Mazda 3","VinFast Fadil"];function Wv(){const{id:t}=mw(),e=$u(),n=!!t,[r,s]=V.useState({name:"",licensePlate:"",vehicleType:Hv[0],vehicleCode:"",avatar:null}),[i,o]=V.useState({}),[l,u]=V.useState(!1),[c,f]=V.useState(!1);V.useEffect(()=>{n&&m()},[t,n]);const m=async()=>{u(!0);const A=await Vn.getById(t);A?s({name:A.name,licensePlate:A.licensePlate,vehicleType:A.vehicleType,vehicleCode:A.vehicleCode,avatar:A.avatar||null}):e("/drivers"),u(!1)},g=()=>{const A={};return r.name.trim()||(A.name="Vui lòng nhập họ tên"),r.licensePlate.trim()||(A.licensePlate="Vui lòng nhập biển số xe"),r.vehicleCode.trim()||(A.vehicleCode="Vui lòng nhập mã số xe"),o(A),Object.keys(A).length===0},I=async A=>{if(A.preventDefault(),!!g()){f(!0);try{if(n)await Vn.update(t,r);else{const x=await Vn.add(r);x&&await Si.createForDriver(x)}e("/drivers")}catch(x){console.error("Error saving driver:",x),alert("Có lỗi xảy ra khi lưu dữ liệu!")}f(!1)}},N=A=>x=>{s(y=>({...y,[A]:x.target.value})),i[A]&&o(y=>({...y,[A]:null}))},P=A=>{var T;const x=(T=A.target.files)==null?void 0:T[0];if(!x)return;if(x.size>1024*1024){alert("Ảnh phải nhỏ hơn 1MB");return}const y=new FileReader;y.onload=k=>s(L=>{var U;return{...L,avatar:(U=k.target)==null?void 0:U.result}}),y.readAsDataURL(x)};return l?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto",children:[h.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[h.jsx(lt,{to:"/drivers",className:"p-2 hover:bg-gray-100 rounded-xl",children:h.jsx(Kf,{size:24,className:"text-gray-600"})}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:n?"Chỉnh sửa tài xế":"Thêm tài xế mới"}),h.jsx("p",{className:"text-gray-500 mt-1",children:n?"Cập nhật thông tin":"Nhập thông tin tài xế mới"})]})]}),h.jsxs("form",{onSubmit:I,className:"bg-white rounded-2xl p-6 shadow-sm",children:[h.jsx("div",{className:"flex justify-center mb-8",children:h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"w-28 h-28 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center overflow-hidden",children:r.avatar?h.jsx("img",{src:r.avatar,alt:"Avatar",className:"w-full h-full object-cover"}):r.name?h.jsx("span",{className:"text-4xl font-bold",children:r.name.charAt(0).toUpperCase()}):h.jsx(Sd,{size:48})}),h.jsxs("label",{className:"absolute bottom-0 right-0 w-10 h-10 bg-taxi-500 hover:bg-taxi-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg transition-colors",children:[h.jsx(LC,{size:20}),h.jsx("input",{type:"file",accept:"image/*",onChange:P,className:"hidden"})]})]})}),h.jsx("p",{className:"text-center text-sm text-gray-500 mb-6",children:"Click vào icon camera để tải ảnh lên (tối đa 1MB)"}),h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx(Sd,{size:16}),"Họ và tên"]}),h.jsx("input",{type:"text",value:r.name,onChange:N("name"),placeholder:"Nguyễn Văn A",className:`w-full px-4 py-3 rounded-xl border ${i.name?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none`}),i.name&&h.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.name})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx(Rr,{size:16}),"Biển số xe"]}),h.jsx("input",{type:"text",value:r.licensePlate,onChange:N("licensePlate"),placeholder:"30A-12345",className:`w-full px-4 py-3 rounded-xl border ${i.licensePlate?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono`}),i.licensePlate&&h.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.licensePlate})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx(Rr,{size:16}),"Loại xe"]}),h.jsx("select",{value:r.vehicleType,onChange:N("vehicleType"),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white",children:Hv.map(A=>h.jsx("option",{value:A,children:A},A))})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx(HC,{size:16}),"Mã số xe"]}),h.jsx("input",{type:"text",value:r.vehicleCode,onChange:N("vehicleCode"),placeholder:"TX001",className:`w-full px-4 py-3 rounded-xl border ${i.vehicleCode?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono uppercase`}),i.vehicleCode&&h.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.vehicleCode})]})]}),h.jsxs("div",{className:"flex gap-3 mt-8",children:[h.jsx(lt,{to:"/drivers",className:"flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-center",children:"Hủy"}),h.jsxs("button",{type:"submit",disabled:c,className:"flex-1 px-4 py-3 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium flex items-center justify-center gap-2 disabled:opacity-50",children:[c?h.jsx(ct,{size:20,className:"animate-spin"}):h.jsx(Gu,{size:20}),h.jsx("span",{children:n?"Cập nhật":"Thêm mới"})]})]})]})]})}function N4(){const[t,e]=V.useState([]),[n,r]=V.useState(null),[s,i]=V.useState(""),[o,l]=V.useState("all"),[u,c]=V.useState(!0),[f,m]=V.useState(!1);V.useEffect(()=>{g()},[]);const g=async()=>{c(!0);const k=await Si.getAll();e(k),c(!1)},I=k=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(k),N=k=>{r(k.id),i(k.paidAmount.toString())},P=async k=>{m(!0);const L=parseInt(s)||0;await Si.update(k,L),await g(),r(null),i(""),m(!1)},A=()=>{r(null),i("")},x=k=>{switch(k){case"paid":return h.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium",children:[h.jsx(MC,{size:14}),"Đã đóng đủ"]});case"partial":return h.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium",children:[h.jsx(BC,{size:14}),"Đóng một phần"]});default:return h.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium",children:[h.jsx(XC,{size:14}),"Chưa đóng"]})}},y=t.filter(k=>o==="all"?!0:k.status===o),T={total:t.length,paid:t.filter(k=>k.status==="paid").length,partial:t.filter(k=>k.status==="partial").length,unpaid:t.filter(k=>k.status==="unpaid").length,totalAmount:t.reduce((k,L)=>k+(L.paidAmount||0),0)};return u?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Quản lý tiền thế chân"}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Theo dõi tiền cọc của tài xế"})]}),h.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[h.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-sm",children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Tổng thu"}),h.jsx("p",{className:"text-xl font-bold text-gray-900",children:I(T.totalAmount)})]}),h.jsxs("div",{className:"bg-green-50 rounded-xl p-4 border border-green-100",children:[h.jsx("p",{className:"text-sm text-green-600",children:"Đã đóng đủ"}),h.jsxs("p",{className:"text-xl font-bold text-green-700",children:[T.paid," tài xế"]})]}),h.jsxs("div",{className:"bg-yellow-50 rounded-xl p-4 border border-yellow-100",children:[h.jsx("p",{className:"text-sm text-yellow-600",children:"Đóng một phần"}),h.jsxs("p",{className:"text-xl font-bold text-yellow-700",children:[T.partial," tài xế"]})]}),h.jsxs("div",{className:"bg-red-50 rounded-xl p-4 border border-red-100",children:[h.jsx("p",{className:"text-sm text-red-600",children:"Chưa đóng"}),h.jsxs("p",{className:"text-xl font-bold text-red-700",children:[T.unpaid," tài xế"]})]})]}),h.jsx("div",{className:"bg-white rounded-2xl p-4 mb-6 shadow-sm",children:h.jsx("div",{className:"flex flex-wrap gap-2",children:[{value:"all",label:"Tất cả"},{value:"paid",label:"Đã đóng đủ"},{value:"partial",label:"Đóng một phần"},{value:"unpaid",label:"Chưa đóng"}].map(k=>h.jsx("button",{onClick:()=>l(k.value),className:`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${o===k.value?"bg-taxi-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:k.label},k.value))})}),h.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[h.jsx("div",{className:"divide-y divide-gray-100",children:y.map(k=>{var L;return h.jsxs("div",{className:"p-4 lg:p-6 hover:bg-gray-50 transition-colors",children:[h.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-4",children:[h.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[h.jsx("div",{className:"w-12 h-12 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold text-lg",children:(L=k.driverName)==null?void 0:L.charAt(0)}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-gray-900",children:k.driverName}),k.lastPaymentDate&&h.jsxs("p",{className:"text-sm text-gray-500",children:["Thanh toán lần cuối: ",k.lastPaymentDate]})]})]}),h.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-4",children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsxs("div",{className:"text-right",children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Đã đóng / Yêu cầu"}),n===k.id?h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"number",value:s,onChange:U=>i(U.target.value),className:"w-32 px-3 py-1 border border-gray-200 rounded-lg text-right font-mono",autoFocus:!0}),h.jsxs("span",{className:"text-gray-500",children:["/ ",I(k.requiredAmount)]})]}):h.jsxs("p",{className:"font-semibold text-gray-900",children:[I(k.paidAmount||0)," / ",I(k.requiredAmount)]})]}),x(k.status)]}),n===k.id?h.jsxs("div",{className:"flex gap-2",children:[h.jsx("button",{onClick:A,className:"px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm",children:"Hủy"}),h.jsxs("button",{onClick:()=>P(k.driverId),disabled:f,className:"px-3 py-1.5 bg-taxi-500 text-white hover:bg-taxi-600 rounded-lg text-sm font-medium flex items-center gap-1",children:[f&&h.jsx(ct,{size:14,className:"animate-spin"}),"Lưu"]})]}):h.jsx("button",{onClick:()=>N(k),className:"p-2 text-gray-500 hover:text-taxi-600 hover:bg-taxi-50 rounded-lg transition-colors",children:h.jsx(Td,{size:18})})]})]}),h.jsx("div",{className:"mt-4",children:h.jsx("div",{className:"h-2 bg-gray-100 rounded-full overflow-hidden",children:h.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${k.status==="paid"?"bg-green-500":k.status==="partial"?"bg-yellow-500":"bg-gray-300"}`,style:{width:`${Math.min((k.paidAmount||0)/k.requiredAmount*100,100)}%`}})})})]},k.id)})}),y.length===0&&h.jsxs("div",{className:"text-center py-12",children:[h.jsx(Qf,{className:"mx-auto text-gray-300 mb-4",size:48}),h.jsx("p",{className:"text-gray-500",children:"Không có dữ liệu"})]})]})]})}function R4(){const[t,e]=V.useState([]),[n,r]=V.useState({driverSharePercent:60}),[s,i]=V.useState(""),[o,l]=V.useState(null),[u,c]=V.useState(!0);V.useEffect(()=>{f()},[]);const f=async()=>{c(!0);try{const[y,T]=await Promise.all([la.getAll(),Ii.get()]);if(e(y),r(T),y.length>0){const k=[...new Set(y.map(L=>L.month))].sort().reverse();i(k[0]||"")}}catch(y){console.error("Error loading data:",y)}c(!1)},m=y=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(y),g=async y=>{await la.delete(y),await f(),l(null)},I=[...new Set(t.map(y=>y.month))].sort().reverse(),N=s?t.filter(y=>y.month===s):t,P=N.reduce((y,T)=>y+(T.amount||0),0),A=y=>`Tháng ${parseInt(y.split("-")[1])}/${y.split("-")[0]}`,x=y=>(y.amount||0)*n.driverSharePercent/100+(y.bonus||0)-(y.penalty||0);return u?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Quản lý doanh thu"}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Doanh thu và tiền thực nhận của tài xế"})]}),h.jsxs(lt,{to:"/revenue/new",className:"inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30",children:[h.jsx(Wu,{size:20}),h.jsx("span",{children:"Nhập doanh thu"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6",children:[h.jsxs("div",{className:"lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm",children:[h.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[h.jsx(Hu,{size:16,className:"inline mr-2"}),"Chọn tháng"]}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsx("button",{onClick:()=>i(""),className:`px-4 py-2 rounded-xl text-sm font-medium ${s===""?"bg-taxi-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"Tất cả"}),I.map(y=>h.jsx("button",{onClick:()=>i(y),className:`px-4 py-2 rounded-xl text-sm font-medium ${s===y?"bg-taxi-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:A(y)},y))]})]}),h.jsxs("div",{className:"bg-gradient-to-r from-taxi-500 to-taxi-600 rounded-2xl p-6 text-white",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[h.jsx(Zo,{size:24}),h.jsx("span",{className:"font-medium",children:s?A(s):"Tổng"})]}),h.jsx("p",{className:"text-3xl font-bold",children:m(P)})]})]}),h.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full",children:[h.jsx("thead",{className:"bg-gray-50 border-b",children:h.jsxs("tr",{children:[h.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-gray-600",children:"Xe"}),h.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-gray-600",children:"Tài xế"}),h.jsx("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:"Doanh thu"}),h.jsx("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:"Thưởng"}),h.jsx("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:"Phạt"}),h.jsxs("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:["Thực nhận (",n.driverSharePercent,"%)"]}),h.jsx("th",{className:"px-4 py-3"})]})}),h.jsx("tbody",{className:"divide-y",children:N.map(y=>h.jsxs("tr",{className:"hover:bg-gray-50",children:[h.jsx("td",{className:"px-4 py-3",children:h.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm",children:[h.jsx(Rr,{size:14}),y.vehicleCode]})}),h.jsx("td",{className:"px-4 py-3 font-medium",children:y.driverName}),h.jsx("td",{className:"px-4 py-3 text-right font-mono",children:m(y.amount||0)}),h.jsx("td",{className:"px-4 py-3 text-right font-mono text-green-600",children:y.bonus?`+${m(y.bonus)}`:"-"}),h.jsx("td",{className:"px-4 py-3 text-right font-mono text-red-600",children:y.penalty?`-${m(y.penalty)}`:"-"}),h.jsx("td",{className:"px-4 py-3 text-right font-bold text-taxi-600",children:m(x(y))}),h.jsx("td",{className:"px-4 py-3",children:h.jsx("button",{onClick:()=>l(y.id),className:"p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg",children:h.jsx(nu,{size:16})})})]},y.id))})]})}),N.length===0&&h.jsxs("div",{className:"text-center py-12",children:[h.jsx(Zo,{className:"mx-auto text-gray-300 mb-4",size:48}),h.jsx("p",{className:"text-gray-500",children:"Chưa có dữ liệu"})]})]}),o&&h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[h.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Xác nhận xóa"}),h.jsx("p",{className:"text-gray-500 mb-6",children:"Bạn có chắc muốn xóa?"}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:()=>l(null),className:"flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 font-medium",children:"Hủy"}),h.jsx("button",{onClick:()=>g(o),className:"flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 font-medium",children:"Xóa"})]})]})})]})}function k4(){const t=$u(),[e,n]=V.useState([]),[r,s]=V.useState({driverSharePercent:60}),[i,o]=V.useState({vehicleCode:"",driverName:"",month:"",amount:"",bonus:"",penalty:""}),[l,u]=V.useState({}),[c,f]=V.useState(!0),[m,g]=V.useState(!1);V.useEffect(()=>{I()},[]);const I=async()=>{f(!0);try{const[w,v]=await Promise.all([Vn.getAll(),Ii.get()]);n(w),s(v),w.length>0&&o(E=>({...E,vehicleCode:w[0].vehicleCode,driverName:w[0].name})),o(E=>({...E,month:new Date().toISOString().slice(0,7)}))}catch(w){console.error("Error loading data:",w)}f(!1)},N=()=>{const w={};return i.vehicleCode||(w.vehicleCode="Vui lòng chọn xe"),i.month||(w.month="Vui lòng chọn tháng"),(!i.amount||parseInt(i.amount)<=0)&&(w.amount="Vui lòng nhập doanh thu"),u(w),Object.keys(w).length===0},P=async w=>{if(w.preventDefault(),!!N()){g(!0);try{await la.add({vehicleCode:i.vehicleCode,driverName:i.driverName,month:i.month,amount:parseInt(i.amount)||0,bonus:parseInt(i.bonus)||0,penalty:parseInt(i.penalty)||0}),t("/revenue")}catch(v){console.error("Error saving revenue:",v),alert("Có lỗi xảy ra khi lưu dữ liệu!")}g(!1)}},A=w=>{const v=w.target.value,E=e.find(C=>C.vehicleCode===v);o(C=>({...C,vehicleCode:v,driverName:(E==null?void 0:E.name)||""}))},x=w=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(w),y=parseInt(i.amount)||0,T=parseInt(i.bonus)||0,k=parseInt(i.penalty)||0,L=y*r.driverSharePercent/100,U=L+T-k;return c?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto",children:[h.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[h.jsx(lt,{to:"/revenue",className:"p-2 hover:bg-gray-100 rounded-xl",children:h.jsx(Kf,{size:24,className:"text-gray-600"})}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Nhập doanh thu"}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Nhập doanh thu và thưởng/phạt cho xe"})]})]}),h.jsxs("form",{onSubmit:P,className:"bg-white rounded-2xl p-6 shadow-sm",children:[h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx(Rr,{size:16}),"Chọn xe"]}),h.jsx("select",{value:i.vehicleCode,onChange:A,className:`w-full px-4 py-3 rounded-xl border ${l.vehicleCode?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white`,children:e.map(w=>h.jsxs("option",{value:w.vehicleCode,children:[w.vehicleCode," - ",w.name]},w.id))})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx(Hu,{size:16}),"Tháng"]}),h.jsx("input",{type:"month",value:i.month,onChange:w=>o(v=>({...v,month:w.target.value})),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none"})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx($C,{size:16}),"Doanh thu (VND)"]}),h.jsx("input",{type:"number",value:i.amount,onChange:w=>o(v=>({...v,amount:w.target.value})),placeholder:"15000000",className:`w-full px-4 py-3 rounded-xl border ${l.amount?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono text-lg`})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-green-700 mb-2",children:[h.jsx(qC,{size:16}),"Tiền thưởng"]}),h.jsx("input",{type:"number",value:i.bonus,onChange:w=>o(v=>({...v,bonus:w.target.value})),placeholder:"0",className:"w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none font-mono bg-green-50"})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-red-700 mb-2",children:[h.jsx(DC,{size:16}),"Tiền phạt"]}),h.jsx("input",{type:"number",value:i.penalty,onChange:w=>o(v=>({...v,penalty:w.target.value})),placeholder:"0",className:"w-full px-4 py-3 rounded-xl border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none font-mono bg-red-50"})]})]}),y>0&&h.jsxs("div",{className:"p-4 bg-gradient-to-r from-taxi-50 to-green-50 rounded-xl border border-taxi-200",children:[h.jsx("h3",{className:"font-semibold text-gray-800 mb-3",children:"Công thức tính lương"}),h.jsxs("div",{className:"space-y-2 text-sm",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{children:"Doanh thu gốc:"}),h.jsx("span",{className:"font-mono",children:x(y)})]}),h.jsxs("div",{className:"flex justify-between text-taxi-700",children:[h.jsxs("span",{children:["× ",r.driverSharePercent,"% (phần tài xế):"]}),h.jsx("span",{className:"font-mono",children:x(L)})]}),T>0&&h.jsxs("div",{className:"flex justify-between text-green-700",children:[h.jsx("span",{children:"+ Thưởng:"}),h.jsxs("span",{className:"font-mono",children:["+",x(T)]})]}),k>0&&h.jsxs("div",{className:"flex justify-between text-red-700",children:[h.jsx("span",{children:"- Phạt:"}),h.jsxs("span",{className:"font-mono",children:["-",x(k)]})]}),h.jsxs("div",{className:"flex justify-between pt-2 border-t border-taxi-200 text-lg font-bold",children:[h.jsx("span",{children:"= Thực nhận:"}),h.jsx("span",{className:U>=0?"text-green-600":"text-red-600",children:x(U)})]})]})]})]}),h.jsxs("div",{className:"flex gap-3 mt-6",children:[h.jsx(lt,{to:"/revenue",className:"flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-center",children:"Hủy"}),h.jsxs("button",{type:"submit",disabled:m,className:"flex-1 px-4 py-3 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium flex items-center justify-center gap-2 disabled:opacity-50",children:[m?h.jsx(ct,{size:20,className:"animate-spin"}):h.jsx(Gu,{size:20}),h.jsx("span",{children:"Lưu"})]})]})]})]})}function P4(){const[t,e]=V.useState(new Date),[n,r]=V.useState([]),[s,i]=V.useState([]),[o,l]=V.useState(null),[u,c]=V.useState(!1),[f,m]=V.useState(!0),[g,I]=V.useState({});V.useEffect(()=>{N()},[]),V.useEffect(()=>{s.length>0&&A()},[n,t,s]);const N=async()=>{m(!0);try{const[W,le]=await Promise.all([Vn.getAll(),lr.getAll()]);i(W),r(le)}catch(W){console.error("Error loading data:",W)}m(!1)},P=async()=>{const W=await lr.getAll();r(W)},A=async()=>{const W=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`,le={};for(const Ve of s)le[Ve.id]=await lr.countByDriverMonth(Ve.id,W);I(le)},x=t.getFullYear(),y=t.getMonth();`${x}${String(y+1).padStart(2,"0")}`;const T=new Date(x,y+1,0).getDate(),k=new Date(x,y,1).getDay(),L=["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],U=["CN","T2","T3","T4","T5","T6","T7"],w=()=>e(new Date(x,y-1,1)),v=()=>e(new Date(x,y+1,1)),E=W=>`${x}-${String(y+1).padStart(2,"0")}-${String(W).padStart(2,"0")}`,C=W=>n.filter(le=>le.date===E(W)),R=W=>{l(E(W)),c(!0)},b=async(W,le)=>{n.find(B=>B.date===o&&B.driverId===W)?await lr.remove(o,W):await lr.add({date:o,driverId:W,driverName:le}),await P()},S=W=>n.some(le=>le.date===o&&le.driverId===W),Ce=[];for(let W=0;W<k;W++)Ce.push(null);for(let W=1;W<=T;W++)Ce.push(W);return f?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in",children:[h.jsxs("div",{className:"mb-6",children:[h.jsxs("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3",children:[h.jsx(xw,{className:"text-indigo-500"}),"Lịch trực đêm"]}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Phân công ca trực đêm cho tài xế"})]}),h.jsxs("div",{className:"bg-white rounded-2xl shadow-sm p-4 lg:p-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsx("button",{onClick:w,className:"p-2 hover:bg-gray-100 rounded-xl",children:h.jsx(UC,{size:24})}),h.jsxs("h2",{className:"text-xl font-bold text-gray-900",children:[L[y]," ",x]}),h.jsx("button",{onClick:v,className:"p-2 hover:bg-gray-100 rounded-xl",children:h.jsx(zC,{size:24})})]}),h.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:U.map(W=>h.jsx("div",{className:"text-center text-sm font-semibold text-gray-500 py-2",children:W},W))}),h.jsx("div",{className:"grid grid-cols-7 gap-1",children:Ce.map((W,le)=>{if(!W)return h.jsx("div",{className:"aspect-square"},le);const Ve=C(W),B=new Date().toDateString()===new Date(x,y,W).toDateString();return h.jsxs("div",{onClick:()=>R(W),className:`aspect-square p-1 rounded-xl cursor-pointer transition-all hover:bg-indigo-50 border-2 ${B?"border-indigo-500":"border-transparent"} ${Ve.length>0?"bg-indigo-50":"bg-gray-50"}`,children:[h.jsx("div",{className:"text-sm font-medium text-gray-700 mb-1",children:W}),h.jsxs("div",{className:"space-y-0.5 overflow-hidden max-h-16",children:[Ve.slice(0,2).map(K=>{var Z;return h.jsx("div",{className:"text-xs bg-indigo-500 text-white px-1 py-0.5 rounded truncate",children:(Z=K.driverName)==null?void 0:Z.split(" ").pop()},K.id)}),Ve.length>2&&h.jsxs("div",{className:"text-xs text-indigo-600 font-medium",children:["+",Ve.length-2]})]})]},le)})}),h.jsxs("div",{className:"mt-6 pt-4 border-t",children:[h.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Tổng kết tháng"}),h.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:s.map(W=>{var Ve;const le=g[W.id]||0;return h.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg",children:[h.jsx("div",{className:"w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-semibold",children:(Ve=W.name)==null?void 0:Ve.charAt(0)}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("p",{className:"text-sm font-medium truncate",children:W.name}),h.jsxs("p",{className:"text-xs text-gray-500",children:[le," ca"]})]})]},W.id)})})]})]}),u&&h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full animate-slide-in max-h-[80vh] overflow-auto",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("h3",{className:"text-lg font-semibold",children:["Phân ca ngày ",o]}),h.jsx("button",{onClick:()=>c(!1),className:"p-1 hover:bg-gray-100 rounded-lg",children:h.jsx(Iw,{size:20})})]}),h.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Chọn tài xế trực đêm"}),h.jsx("div",{className:"space-y-2",children:s.map(W=>{var Ve;const le=S(W.id);return h.jsxs("button",{onClick:()=>b(W.id,W.name),className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${le?"bg-indigo-500 text-white":"bg-gray-50 hover:bg-gray-100"}`,children:[h.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${le?"bg-white/20":"bg-indigo-100 text-indigo-600"}`,children:W.avatar?h.jsx("img",{src:W.avatar,className:"w-full h-full rounded-full object-cover"}):(Ve=W.name)==null?void 0:Ve.charAt(0)}),h.jsxs("div",{className:"flex-1 text-left",children:[h.jsx("p",{className:"font-medium",children:W.name}),h.jsx("p",{className:`text-sm ${le?"text-indigo-200":"text-gray-500"}`,children:W.vehicleCode})]}),le&&h.jsx(FC,{size:20})]},W.id)})})]})})]})}function b4(){const[t,e]=V.useState([]),[n,r]=V.useState(""),[s,i]=V.useState({driverSharePercent:60}),[o,l]=V.useState(!0),[u,c]=V.useState({drivers:[],deposits:[],revenues:[]});V.useEffect(()=>{f()},[]),V.useEffect(()=>{n&&u.drivers.length>0&&m()},[n,u]);const f=async()=>{l(!0);try{const[y,T,k,L]=await Promise.all([Ii.get(),Vn.getAll(),Si.getAll(),la.getAll()]);i(y),c({drivers:T,deposits:k,revenues:L});const U=[...new Set(L.map(v=>v.month))].sort().reverse(),w=new Date().toISOString().slice(0,7);r(U[0]||w)}catch(y){console.error("Error loading data:",y)}l(!1)},m=async()=>{const{drivers:y,deposits:T,revenues:k}=u,L=k.filter(w=>w.month===n),U=await Promise.all(y.map(async w=>{const v=T.find(le=>le.driverId===w.id),E=L.find(le=>le.vehicleCode===w.vehicleCode),C=await lr.countByDriverMonth(w.id,n),R=(E==null?void 0:E.amount)||0,b=(E==null?void 0:E.bonus)||0,S=(E==null?void 0:E.penalty)||0,W=R*s.driverSharePercent/100+b-S;return{id:w.id,vehicleCode:w.vehicleCode,driverName:w.name,avatar:w.avatar,revenue:R,bonus:b,penalty:S,depositRequired:(v==null?void 0:v.requiredAmount)||0,depositPaid:(v==null?void 0:v.paidAmount)||0,depositMissing:((v==null?void 0:v.requiredAmount)||0)-((v==null?void 0:v.paidAmount)||0),nightShifts:C,netSalary:W}}));e(U)},g=y=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(y),I=y=>`Tháng ${parseInt(y.split("-")[1])}/${y.split("-")[0]}`,N={revenue:t.reduce((y,T)=>y+T.revenue,0),netSalary:t.reduce((y,T)=>y+T.netSalary,0),depositMissing:t.reduce((y,T)=>y+Math.max(0,T.depositMissing),0),nightShifts:t.reduce((y,T)=>y+T.nightShifts,0)},P=[];for(let y=0;y<6;y++){const T=new Date;T.setMonth(T.getMonth()-y),P.push(T.toISOString().slice(0,7))}const A=u.revenues.map(y=>y.month),x=[...new Set([...P,...A])].sort().reverse();return o?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in",children:[h.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:h.jsxs("div",{children:[h.jsxs("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3",children:[h.jsx(ww,{className:"text-taxi-500"}),"Báo cáo tổng kết"]}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Thống kê chi tiết theo tháng"})]})}),h.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm mb-6",children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-3",children:[h.jsx(Hu,{size:16}),"Chọn tháng báo cáo"]}),h.jsx("div",{className:"flex flex-wrap gap-2",children:x.map(y=>h.jsx("button",{onClick:()=>r(y),className:`px-4 py-2 rounded-xl text-sm font-medium transition-all ${n===y?"bg-taxi-500 text-white shadow-lg":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:I(y)},y))})]}),h.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[h.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-sm",children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Tổng doanh thu"}),h.jsx("p",{className:"text-xl font-bold text-gray-900",children:g(N.revenue)})]}),h.jsxs("div",{className:"bg-green-50 rounded-xl p-4 border border-green-100",children:[h.jsx("p",{className:"text-sm text-green-600",children:"Tổng lương thực trả"}),h.jsx("p",{className:"text-xl font-bold text-green-700",children:g(N.netSalary)})]}),h.jsxs("div",{className:"bg-red-50 rounded-xl p-4 border border-red-100",children:[h.jsx("p",{className:"text-sm text-red-600",children:"Tiền cọc còn thiếu"}),h.jsx("p",{className:"text-xl font-bold text-red-700",children:g(N.depositMissing)})]}),h.jsxs("div",{className:"bg-indigo-50 rounded-xl p-4 border border-indigo-100",children:[h.jsx("p",{className:"text-sm text-indigo-600",children:"Tổng ca trực đêm"}),h.jsxs("p",{className:"text-xl font-bold text-indigo-700",children:[N.nightShifts," ca"]})]})]}),h.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[h.jsx("div",{className:"p-4 border-b bg-gray-50",children:h.jsxs("h2",{className:"font-semibold text-gray-900",children:["Chi tiết ",n?I(n):""]})}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full",children:[h.jsx("thead",{className:"bg-gray-50 border-b",children:h.jsxs("tr",{children:[h.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Mã xe"}),h.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Tài xế"}),h.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Doanh thu"}),h.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Thưởng/Phạt"}),h.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Cọc thiếu"}),h.jsx("th",{className:"text-center px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Ca trực"}),h.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Lương thực trả"})]})}),h.jsx("tbody",{className:"divide-y",children:t.map(y=>{var T;return h.jsxs("tr",{className:"hover:bg-gray-50",children:[h.jsx("td",{className:"px-4 py-3",children:h.jsx("span",{className:"inline-flex px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm",children:y.vehicleCode})}),h.jsx("td",{className:"px-4 py-3",children:h.jsxs("div",{className:"flex items-center gap-2",children:[y.avatar?h.jsx("img",{src:y.avatar,className:"w-8 h-8 rounded-full object-cover"}):h.jsx("div",{className:"w-8 h-8 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center text-sm font-semibold",children:(T=y.driverName)==null?void 0:T.charAt(0)}),h.jsx("span",{className:"font-medium",children:y.driverName})]})}),h.jsx("td",{className:"px-4 py-3 text-right font-mono",children:g(y.revenue)}),h.jsxs("td",{className:"px-4 py-3 text-right",children:[y.bonus>0&&h.jsxs("span",{className:"text-green-600 text-sm",children:["+",g(y.bonus)]}),y.bonus>0&&y.penalty>0&&h.jsx("span",{className:"text-gray-400 mx-1",children:"/"}),y.penalty>0&&h.jsxs("span",{className:"text-red-600 text-sm",children:["-",g(y.penalty)]}),!y.bonus&&!y.penalty&&h.jsx("span",{className:"text-gray-400",children:"-"})]}),h.jsx("td",{className:"px-4 py-3 text-right",children:y.depositMissing>0?h.jsx("span",{className:"text-red-600 font-medium",children:g(y.depositMissing)}):h.jsx("span",{className:"text-green-600",children:"Đủ"})}),h.jsx("td",{className:"px-4 py-3 text-center",children:h.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-sm",children:y.nightShifts})}),h.jsx("td",{className:"px-4 py-3 text-right",children:h.jsx("span",{className:"font-bold text-lg text-taxi-600",children:g(y.netSalary)})})]},y.id)})}),h.jsx("tfoot",{className:"bg-gray-50 border-t-2",children:h.jsxs("tr",{className:"font-bold",children:[h.jsx("td",{className:"px-4 py-3",colSpan:2,children:"TỔNG CỘNG"}),h.jsx("td",{className:"px-4 py-3 text-right",children:g(N.revenue)}),h.jsx("td",{className:"px-4 py-3"}),h.jsx("td",{className:"px-4 py-3 text-right text-red-600",children:g(N.depositMissing)}),h.jsx("td",{className:"px-4 py-3 text-center text-indigo-600",children:N.nightShifts}),h.jsx("td",{className:"px-4 py-3 text-right text-green-600",children:g(N.netSalary)})]})})]})})]})]})}function D4(){const[t,e]=V.useState({driverSharePercent:60,companySharePercent:40}),[n,r]=V.useState(!1),[s,i]=V.useState(!0),[o,l]=V.useState(!1);V.useEffect(()=>{u()},[]);const u=async()=>{i(!0);try{const m=await Ii.get();e(m)}catch(m){console.error("Error loading settings:",m)}i(!1)},c=m=>{const g=Math.min(100,Math.max(0,parseInt(m)||0));e({driverSharePercent:g,companySharePercent:100-g}),r(!1)},f=async()=>{l(!0);try{await Ii.save(t),r(!0),setTimeout(()=>r(!1),2e3)}catch(m){console.error("Error saving settings:",m),alert("Có lỗi xảy ra khi lưu cài đặt!")}l(!1)};return s?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto",children:[h.jsxs("div",{className:"mb-6",children:[h.jsxs("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3",children:[h.jsx(Ew,{className:"text-gray-500"}),"Cài đặt"]}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Cấu hình hệ thống quản lý taxi"})]}),h.jsxs("div",{className:"bg-white rounded-2xl shadow-sm p-6",children:[h.jsxs("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[h.jsx(KC,{size:20,className:"text-taxi-500"}),"Tỷ lệ ăn chia"]}),h.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"Cài đặt phần trăm chia doanh thu giữa tài xế và công ty"}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx(Sd,{size:16,className:"text-green-500"}),"Tài xế nhận (%)"]}),h.jsx("input",{type:"number",min:"0",max:"100",value:t.driverSharePercent,onChange:m=>c(m.target.value),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-2xl font-bold text-center"}),h.jsx("div",{className:"mt-2 h-3 bg-gray-100 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-green-500 transition-all",style:{width:`${t.driverSharePercent}%`}})})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[h.jsx(OC,{size:16,className:"text-blue-500"}),"Công ty nhận (%)"]}),h.jsx("div",{className:"w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-2xl font-bold text-center text-gray-600",children:t.companySharePercent}),h.jsx("div",{className:"mt-2 h-3 bg-gray-100 rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-blue-500 transition-all",style:{width:`${t.companySharePercent}%`}})})]}),h.jsxs("div",{className:"p-4 bg-taxi-50 rounded-xl border border-taxi-200",children:[h.jsx("h3",{className:"font-semibold text-taxi-800 mb-2",children:"Ví dụ minh họa"}),h.jsxs("p",{className:"text-sm text-taxi-700",children:["Với doanh thu ",h.jsx("strong",{children:"10,000,000 VND"}),":"]}),h.jsxs("div",{className:"mt-2 space-y-1 text-sm",children:[h.jsxs("p",{className:"text-green-700",children:["• Tài xế nhận: ",h.jsxs("strong",{children:[(1e7*t.driverSharePercent/100).toLocaleString("vi-VN")," VND"]})]}),h.jsxs("p",{className:"text-blue-700",children:["• Công ty nhận: ",h.jsxs("strong",{children:[(1e7*t.companySharePercent/100).toLocaleString("vi-VN")," VND"]})]})]})]})]}),h.jsxs("button",{onClick:f,disabled:o,className:`w-full mt-6 px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 ${n?"bg-green-500 text-white":"bg-taxi-500 text-white hover:bg-taxi-600"}`,children:[o?h.jsx(ct,{size:20,className:"animate-spin"}):h.jsx(Gu,{size:20}),n?"Đã lưu!":"Lưu cài đặt"]})]})]})}function V4(){const[t,e]=V.useState([]),[n,r]=V.useState(""),[s,i]=V.useState(null),[o,l]=V.useState(!0);V.useEffect(()=>{u()},[]);const u=async()=>{l(!0);try{const A=await ai.getAll();if(e(A),A.length>0){const x=[...new Set(A.map(y=>y.date?y.date.substring(0,7):""))].filter(Boolean).sort().reverse();r(x[0]||"")}}catch(A){console.error("Error loading data:",A)}l(!1)},c=A=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(A),f=A=>{if(!A)return"";const x=new Date(A);return new Intl.DateTimeFormat("vi-VN").format(x)},m=async A=>{await ai.delete(A),await u(),i(null)},g=[...new Set(t.map(A=>A.date?A.date.substring(0,7):""))].filter(Boolean).sort().reverse(),I=n?t.filter(A=>A.date&&A.date.startsWith(n)):t,N=I.reduce((A,x)=>A+(Number(x.amount)||0),0),P=A=>`Tháng ${parseInt(A.split("-")[1])}/${A.split("-")[0]}`;return o?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"animate-fade-in",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Chi phí doanh nghiệp"}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Quản lý các khoản chi phí hoạt động của công ty"})]}),h.jsxs(lt,{to:"/expenses/new",className:"inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30",children:[h.jsx(Wu,{size:20}),h.jsx("span",{children:"Nhập chi phí"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6",children:[h.jsxs("div",{className:"lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm",children:[h.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[h.jsx(Hu,{size:16,className:"inline mr-2"}),"Chọn tháng"]}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsx("button",{onClick:()=>r(""),className:`px-4 py-2 rounded-xl text-sm font-medium ${n===""?"bg-taxi-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"Tất cả"}),g.map(A=>h.jsx("button",{onClick:()=>r(A),className:`px-4 py-2 rounded-xl text-sm font-medium ${n===A?"bg-taxi-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:P(A)},A))]})]}),h.jsxs("div",{className:"bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[h.jsx(Id,{size:24}),h.jsx("span",{className:"font-medium",children:n?P(n):"Tổng chi phí"})]}),h.jsx("p",{className:"text-3xl font-bold",children:c(N)})]})]}),h.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full",children:[h.jsx("thead",{className:"bg-gray-50 border-b",children:h.jsxs("tr",{children:[h.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-gray-600",children:"Ngày"}),h.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-gray-600",children:"Tên chi phí"}),h.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-gray-600",children:"Danh mục"}),h.jsx("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:"Số tiền"}),h.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-gray-600",children:"Ghi chú"}),h.jsx("th",{className:"px-4 py-3"})]})}),h.jsx("tbody",{className:"divide-y",children:I.map(A=>h.jsxs("tr",{className:"hover:bg-gray-50",children:[h.jsx("td",{className:"px-4 py-3 font-medium",children:f(A.date)}),h.jsx("td",{className:"px-4 py-3",children:A.title}),h.jsx("td",{className:"px-4 py-3",children:h.jsx("span",{className:"inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm",children:A.category==="rent"?"Thuê VP":A.category==="utilities"?"Điện/Nước/Mạng":A.category==="maintenance"?"Bảo dưỡng":A.category==="office"?"Văn phòng phẩm":A.category==="salary"?"Lương nhân viên":A.category})}),h.jsx("td",{className:"px-4 py-3 text-right font-bold text-red-600",children:c(A.amount||0)}),h.jsx("td",{className:"px-4 py-3 text-sm text-gray-500 max-w-xs truncate",title:A.description,children:A.description||"-"}),h.jsxs("td",{className:"px-4 py-3 text-right space-x-2 whitespace-nowrap",children:[h.jsx(lt,{to:`/expenses/edit/${A.id}`,className:"inline-block p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",children:h.jsx(YC,{size:16})}),h.jsx("button",{onClick:()=>i(A.id),className:"p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg",children:h.jsx(nu,{size:16})})]})]},A.id))})]})}),I.length===0&&h.jsxs("div",{className:"text-center py-12",children:[h.jsx(Id,{className:"mx-auto text-gray-300 mb-4",size:48}),h.jsx("p",{className:"text-gray-500",children:"Chưa có dữ liệu"})]})]}),s&&h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[h.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Xác nhận xóa"}),h.jsx("p",{className:"text-gray-500 mb-6",children:"Bạn có chắc muốn xóa khoản chi phí này?"}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:()=>i(null),className:"flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 font-medium",children:"Hủy"}),h.jsx("button",{onClick:()=>m(s),className:"flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 font-medium",children:"Xóa"})]})]})})]})}function Gv(){const{id:t}=mw(),e=$u(),n=!!t,[r,s]=V.useState(n),[i,o]=V.useState(!1),[l,u]=V.useState(null),[c,f]=V.useState({title:"",category:"rent",amount:"",date:new Date().toISOString().split("T")[0],description:""});V.useEffect(()=>{n&&(async()=>{try{const N=(await ai.getAll()).find(P=>P.id===t);N?f({title:N.title||"",category:N.category||"rent",amount:N.amount||"",date:N.date||new Date().toISOString().split("T")[0],description:N.description||""}):u("Không tìm thấy chi phí")}catch(I){u("Có lỗi xảy ra khi tải dữ liệu"),console.error(I)}s(!1)})()},[t,n]);const m=async g=>{g.preventDefault(),o(!0),u(null);try{const I={...c,amount:Number(c.amount)};n?await ai.update(t,I):await ai.add(I),e("/expenses")}catch(I){u("Có lỗi xảy ra khi lưu dữ liệu"),console.error(I),o(!1)}};return r?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx(ct,{className:"w-8 h-8 animate-spin text-taxi-500"})}):h.jsxs("div",{className:"max-w-2xl mx-auto animate-fade-in",children:[h.jsxs("div",{className:"mb-6 flex items-center gap-4",children:[h.jsx(lt,{to:"/expenses",className:"p-2 -ml-2 text-gray-400 hover:text-gray-900 rounded-xl hover:bg-white transition-colors",children:h.jsx(Kf,{size:24})}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:n?"Sửa chi phí":"Thêm chi phí mới"}),h.jsx("p",{className:"text-gray-500 mt-1",children:"Nhập thông tin chi tiết khoản chi"})]})]}),l&&h.jsx("div",{className:"mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm",children:l}),h.jsxs("form",{onSubmit:m,className:"bg-white rounded-2xl p-6 shadow-sm space-y-6",children:[h.jsxs("div",{children:[h.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Tên chi phí ",h.jsx("span",{className:"text-red-500",children:"*"})]}),h.jsx("input",{type:"text",required:!0,value:c.title,onChange:g=>f(I=>({...I,title:g.target.value})),className:"w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors",placeholder:"VD: Tiền điện tháng 3, Thuê VP..."})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[h.jsxs("div",{children:[h.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Danh mục ",h.jsx("span",{className:"text-red-500",children:"*"})]}),h.jsxs("select",{required:!0,value:c.category,onChange:g=>f(I=>({...I,category:g.target.value})),className:"w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors",children:[h.jsx("option",{value:"rent",children:"Tiền thuê văn phòng"}),h.jsx("option",{value:"utilities",children:"Điện/Nước/Mạng"}),h.jsx("option",{value:"salary",children:"Lương nhân viên"}),h.jsx("option",{value:"maintenance",children:"Sửa chữa/Bảo dưỡng"}),h.jsx("option",{value:"office",children:"Văn phòng phẩm"}),h.jsx("option",{value:"other",children:"Khác"})]})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Ngày chi ",h.jsx("span",{className:"text-red-500",children:"*"})]}),h.jsx("input",{type:"date",required:!0,value:c.date,onChange:g=>f(I=>({...I,date:g.target.value})),className:"w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors"})]})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Số tiền (VNĐ) ",h.jsx("span",{className:"text-red-500",children:"*"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"number",required:!0,min:"0",step:"1000",value:c.amount,onChange:g=>f(I=>({...I,amount:g.target.value})),className:"w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors pr-16",placeholder:"0"}),h.jsx("span",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium",children:"VNĐ"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Ghi chú"}),h.jsx("textarea",{rows:"3",value:c.description,onChange:g=>f(I=>({...I,description:g.target.value})),className:"w-full px-4 py-3 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-taxi-500 focus:ring-taxi-500 transition-colors",placeholder:"Thêm thông tin chi tiết..."})]}),h.jsxs("div",{className:"flex gap-4 pt-4 border-t border-gray-100",children:[h.jsx(lt,{to:"/expenses",className:"flex-1 px-4 py-3 text-center rounded-xl bg-gray-50 text-gray-700 font-medium hover:bg-gray-100 transition-colors",children:"Hủy bỏ"}),h.jsx("button",{type:"submit",disabled:i,className:"flex-1 px-4 py-3 rounded-xl bg-taxi-500 text-white font-medium hover:bg-taxi-600 focus:ring-4 focus:ring-taxi-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2",children:i?h.jsxs(h.Fragment,{children:[h.jsx(ct,{size:20,className:"animate-spin"}),h.jsx("span",{children:"Đang lưu..."})]}):h.jsxs(h.Fragment,{children:[h.jsx(Gu,{size:20}),h.jsx("span",{children:n?"Cập nhật":"Lưu chi phí"})]})})]})]})]})}function j4(){return h.jsx(IC,{children:h.jsx(eA,{children:h.jsxs(gC,{children:[h.jsx(_t,{path:"/",element:h.jsx(C4,{})}),h.jsx(_t,{path:"/drivers",element:h.jsx(A4,{})}),h.jsx(_t,{path:"/drivers/new",element:h.jsx(Wv,{})}),h.jsx(_t,{path:"/drivers/edit/:id",element:h.jsx(Wv,{})}),h.jsx(_t,{path:"/finance",element:h.jsx(N4,{})}),h.jsx(_t,{path:"/revenue",element:h.jsx(R4,{})}),h.jsx(_t,{path:"/revenue/new",element:h.jsx(k4,{})}),h.jsx(_t,{path:"/night-shift",element:h.jsx(P4,{})}),h.jsx(_t,{path:"/expenses",element:h.jsx(V4,{})}),h.jsx(_t,{path:"/expenses/new",element:h.jsx(Gv,{})}),h.jsx(_t,{path:"/expenses/edit/:id",element:h.jsx(Gv,{})}),h.jsx(_t,{path:"/reports",element:h.jsx(b4,{})}),h.jsx(_t,{path:"/settings",element:h.jsx(D4,{})})]})})})}ow(document.getElementById("root")).render(h.jsx(V.StrictMode,{children:h.jsx(j4,{})}));
