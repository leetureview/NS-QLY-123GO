function GT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function KT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qv={exports:{}},xu={},Hv={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),QT=Symbol.for("react.portal"),YT=Symbol.for("react.fragment"),JT=Symbol.for("react.strict_mode"),XT=Symbol.for("react.profiler"),ZT=Symbol.for("react.provider"),e1=Symbol.for("react.context"),t1=Symbol.for("react.forward_ref"),n1=Symbol.for("react.suspense"),r1=Symbol.for("react.memo"),s1=Symbol.for("react.lazy"),Bm=Symbol.iterator;function i1(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var Wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gv=Object.assign,Kv={};function Ii(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Wv}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qv(){}Qv.prototype=Ii.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Wv}var Wd=Hd.prototype=new Qv;Wd.constructor=Hd;Gv(Wd,Ii.prototype);Wd.isPureReactComponent=!0;var $m=Array.isArray,Yv=Object.prototype.hasOwnProperty,Gd={current:null},Jv={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Yv.call(e,r)&&!Jv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:la,type:t,key:i,ref:o,props:s,_owner:Gd.current}}function o1(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qm=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function ol(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case QT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+bc(o,0):r,$m(s)?(n="",t!=null&&(n=t.replace(qm,"$&/")+"/"),ol(s,e,n,"",function(c){return c})):s!=null&&(Kd(s)&&(s=o1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(qm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",$m(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+bc(i,l);o+=ol(i,e,n,u,s)}else if(u=i1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+bc(i,l++),o+=ol(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var r=[],s=0;return ol(t,r,"","",function(i){return e.call(n,i,s++)}),r}function l1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},al={transition:null},u1={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:al,ReactCurrentOwner:Gd};function Zv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Ii;te.Fragment=YT;te.Profiler=XT;te.PureComponent=Hd;te.StrictMode=JT;te.Suspense=n1;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u1;te.act=Zv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Gd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Yv.call(e,u)&&!Jv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:la,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:e1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZT,_context:t},t.Consumer=t};te.createElement=Xv;te.createFactory=function(t){var e=Xv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:t1,render:t}};te.isValidElement=Kd;te.lazy=function(t){return{$$typeof:s1,_payload:{_status:-1,_result:t},_init:l1}};te.memo=function(t,e){return{$$typeof:r1,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};te.unstable_act=Zv;te.useCallback=function(t,e){return mt.current.useCallback(t,e)};te.useContext=function(t){return mt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};te.useEffect=function(t,e){return mt.current.useEffect(t,e)};te.useId=function(){return mt.current.useId()};te.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return mt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};te.useRef=function(t){return mt.current.useRef(t)};te.useState=function(t){return mt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return mt.current.useTransition()};te.version="18.3.1";Hv.exports=te;var O=Hv.exports;const c1=KT(O),h1=GT({__proto__:null,default:c1},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=O,f1=Symbol.for("react.element"),p1=Symbol.for("react.fragment"),m1=Object.prototype.hasOwnProperty,g1=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y1={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)m1.call(e,r)&&!y1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:f1,type:t,key:i,ref:o,props:s,_owner:g1.current}}xu.Fragment=p1;xu.jsx=e0;xu.jsxs=e0;qv.exports=xu;var d=qv.exports,t0={exports:{}},bt={},n0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Z=B.length;B.push(K);e:for(;0<Z;){var we=Z-1>>>1,ke=B[we];if(0<s(ke,K))B[we]=K,B[Z]=ke,Z=we;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Z=B.pop();if(Z!==K){B[0]=Z;e:for(var we=0,ke=B.length,qr=ke>>>1;we<qr;){var Vt=2*(we+1)-1,Hr=B[Vt],Gt=Vt+1,Hn=B[Gt];if(0>s(Hr,Z))Gt<ke&&0>s(Hn,Hr)?(B[we]=Hn,B[Gt]=Z,we=Gt):(B[we]=Hr,B[Vt]=Z,we=Vt);else if(Gt<ke&&0>s(Hn,Z))B[we]=Hn,B[Gt]=Z,we=Gt;else break e}}return K}function s(B,K){var Z=B.sortIndex-K.sortIndex;return Z!==0?Z:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,S=!1,N=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=B)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function R(B){if(k=!1,T(B),!N)if(n(u)!==null)N=!0,le(j);else{var K=n(c);K!==null&&Ve(R,K.startTime-B)}}function j(B,K){N=!1,k&&(k=!1,E(v),v=-1),S=!0;var Z=g;try{for(T(K),m=n(u);m!==null&&(!(m.expirationTime>K)||B&&!C());){var we=m.callback;if(typeof we=="function"){m.callback=null,g=m.priorityLevel;var ke=we(m.expirationTime<=K);K=t.unstable_now(),typeof ke=="function"?m.callback=ke:m===n(u)&&r(u),T(K)}else r(u);m=n(u)}if(m!==null)var qr=!0;else{var Vt=n(c);Vt!==null&&Ve(R,Vt.startTime-K),qr=!1}return qr}finally{m=null,g=Z,S=!1}}var U=!1,w=null,v=-1,x=5,A=-1;function C(){return!(t.unstable_now()-A<x)}function b(){if(w!==null){var B=t.unstable_now();A=B;var K=!0;try{K=w(!0,B)}finally{K?I():(U=!1,w=null)}}else U=!1}var I;if(typeof y=="function")I=function(){y(b)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,W=Ae.port2;Ae.port1.onmessage=b,I=function(){W.postMessage(null)}}else I=function(){P(b,0)};function le(B){w=B,U||(U=!0,I())}function Ve(B,K){v=P(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||S||(N=!0,le(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var Z=g;g=K;try{return B()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=g;g=B;try{return K()}finally{g=Z}},t.unstable_scheduleCallback=function(B,K,Z){var we=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?we+Z:we):Z=we,B){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=Z+ke,B={id:f++,callback:K,priorityLevel:B,startTime:Z,expirationTime:ke,sortIndex:-1},Z>we?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(k?(E(v),v=-1):k=!0,Ve(R,Z-we))):(B.sortIndex=ke,e(u,B),N||S||(N=!0,le(j))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var K=g;return function(){var Z=g;g=K;try{return B.apply(this,arguments)}finally{g=Z}}}})(r0);n0.exports=r0;var v1=n0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1=O,kt=v1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,bo={};function ws(t,e){ai(t,e),ai(t+"Capture",e)}function ai(t,e){for(bo[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,w1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hm={},Wm={};function E1(t){return wh.call(Wm,t)?!0:wh.call(Hm,t)?!1:w1.test(t)?Wm[t]=!0:(Hm[t]=!0,!1)}function x1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T1(t,e,n,r){if(e===null||typeof e>"u"||x1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Yd);Xe[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Yd);Xe[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Yd);Xe[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jd(t,e,n,r){var s=Xe.hasOwnProperty(e)?Xe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T1(e,n,s,r)&&(n=null),r||s===null?E1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=_1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),Os=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),a0=Symbol.for("react.offscreen"),Gm=Symbol.iterator;function Zi(t){return t===null||typeof t!="object"?null:(t=Gm&&t[Gm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Dc;function lo(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Vc=!1;function Oc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function I1(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Os:return"Portal";case Eh:return"Profiler";case Xd:return"StrictMode";case xh:return"Suspense";case Th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o0:return(t.displayName||"Context")+".Consumer";case i0:return(t._context.displayName||"Context")+".Provider";case Zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function S1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A1(t){var e=l0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fa(t){t._valueTracker||(t._valueTracker=A1(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=l0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function c0(t,e){e=e.checked,e!=null&&Jd(t,"checked",e,!1)}function Ah(t,e){c0(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ch(t,e,n){(e!=="number"||Nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function Ks(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Nh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(uo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function h0(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function d0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?d0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ua,f0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C1=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){C1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function p0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function m0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=p0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var N1=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(t,e){if(e){if(N1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,Qs=null,Ys=null;function Xm(t){if(t=ha(t)){if(typeof Dh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Cu(e),Dh(t.stateNode,t.type,e))}}function g0(t){Qs?Ys?Ys.push(t):Ys=[t]:Qs=t}function y0(){if(Qs){var t=Qs,e=Ys;if(Ys=Qs=null,Xm(t),e)for(t=0;t<e.length;t++)Xm(e[t])}}function v0(t,e){return t(e)}function _0(){}var Lc=!1;function w0(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return v0(t,e,n)}finally{Lc=!1,(Qs!==null||Ys!==null)&&(_0(),y0())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Vh=!1;if(On)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Vh=!1}function R1(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var vo=!1,Rl=null,kl=!1,Oh=null,k1={onError:function(t){vo=!0,Rl=t}};function P1(t,e,n,r,s,i,o,l,u){vo=!1,Rl=null,R1.apply(k1,arguments)}function b1(t,e,n,r,s,i,o,l,u){if(P1.apply(this,arguments),vo){if(vo){var c=Rl;vo=!1,Rl=null}else throw Error(F(198));kl||(kl=!0,Oh=c)}}function Es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zm(t){if(Es(t)!==t)throw Error(F(188))}function D1(t){var e=t.alternate;if(!e){if(e=Es(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Zm(s),t;if(i===r)return Zm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function x0(t){return t=D1(t),t!==null?T0(t):null}function T0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T0(t);if(e!==null)return e;t=t.sibling}return null}var I0=kt.unstable_scheduleCallback,eg=kt.unstable_cancelCallback,V1=kt.unstable_shouldYield,O1=kt.unstable_requestPaint,be=kt.unstable_now,L1=kt.unstable_getCurrentPriorityLevel,nf=kt.unstable_ImmediatePriority,S0=kt.unstable_UserBlockingPriority,Pl=kt.unstable_NormalPriority,j1=kt.unstable_LowPriority,A0=kt.unstable_IdlePriority,Tu=null,yn=null;function M1(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:z1,F1=Math.log,U1=Math.LN2;function z1(t){return t>>>=0,t===0?32:31-(F1(t)/U1|0)|0}var za=64,Ba=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=co(l):(i&=o,i!==0&&(r=co(i)))}else o=n&~s,o!==0?r=co(o):i!==0&&(r=co(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),s=1<<n,r|=t[n],e&=~s;return r}function B1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-tn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=B1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C0(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function q1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-tn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ce=0;function N0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var R0,sf,k0,P0,b0,jh=!1,$a=[],pr=null,mr=null,gr=null,Oo=new Map,Lo=new Map,nr=[],H1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tg(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function to(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ha(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function W1(t,e,n,r,s){switch(e){case"focusin":return pr=to(pr,t,e,n,r,s),!0;case"dragenter":return mr=to(mr,t,e,n,r,s),!0;case"mouseover":return gr=to(gr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Oo.set(i,to(Oo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Lo.set(i,to(Lo.get(i)||null,t,e,n,r,s)),!0}return!1}function D0(t){var e=es(t.target);if(e!==null){var n=Es(e);if(n!==null){if(e=n.tag,e===13){if(e=E0(n),e!==null){t.blockedOn=e,b0(t.priority,function(){k0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=ha(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function ng(t,e,n){ll(t)&&n.delete(e)}function G1(){jh=!1,pr!==null&&ll(pr)&&(pr=null),mr!==null&&ll(mr)&&(mr=null),gr!==null&&ll(gr)&&(gr=null),Oo.forEach(ng),Lo.forEach(ng)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,jh||(jh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,G1)))}function jo(t){function e(s){return no(s,t)}if(0<$a.length){no($a[0],t);for(var n=1;n<$a.length;n++){var r=$a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&no(pr,t),mr!==null&&no(mr,t),gr!==null&&no(gr,t),Oo.forEach(e),Lo.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)D0(n),n.blockedOn===null&&nr.shift()}var Js=qn.ReactCurrentBatchConfig,Dl=!0;function K1(t,e,n,r){var s=ce,i=Js.transition;Js.transition=null;try{ce=1,of(t,e,n,r)}finally{ce=s,Js.transition=i}}function Q1(t,e,n,r){var s=ce,i=Js.transition;Js.transition=null;try{ce=4,of(t,e,n,r)}finally{ce=s,Js.transition=i}}function of(t,e,n,r){if(Dl){var s=Mh(t,e,n,r);if(s===null)Gc(t,e,r,Vl,n),tg(t,r);else if(W1(s,t,e,n,r))r.stopPropagation();else if(tg(t,r),e&4&&-1<H1.indexOf(t)){for(;s!==null;){var i=ha(s);if(i!==null&&R0(i),i=Mh(t,e,n,r),i===null&&Gc(t,e,r,Vl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}var Vl=null;function Mh(t,e,n,r){if(Vl=null,t=tf(r),t=es(t),t!==null)if(e=Es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vl=t,null}function V0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L1()){case nf:return 1;case S0:return 4;case Pl:case j1:return 16;case A0:return 536870912;default:return 16}default:return 16}}var ur=null,af=null,ul=null;function O0(){if(ul)return ul;var t,e=af,n=e.length,r,s="value"in ur?ur.value:ur.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ul=s.slice(t,1<r?1-r:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function rg(){return!1}function Dt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qa:rg,this.isPropagationStopped=rg,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Dt(Si),ca=Ie({},Si,{view:0,detail:0}),Y1=Dt(ca),Mc,Fc,ro,Iu=Ie({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Mc=t.screenX-ro.screenX,Fc=t.screenY-ro.screenY):Fc=Mc=0,ro=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),sg=Dt(Iu),J1=Ie({},Iu,{dataTransfer:0}),X1=Dt(J1),Z1=Ie({},ca,{relatedTarget:0}),Uc=Dt(Z1),eI=Ie({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),tI=Dt(eI),nI=Ie({},Si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rI=Dt(nI),sI=Ie({},Si,{data:0}),ig=Dt(sI),iI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aI[t])?!!e[t]:!1}function uf(){return lI}var uI=Ie({},ca,{key:function(t){if(t.key){var e=iI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cI=Dt(uI),hI=Ie({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=Dt(hI),dI=Ie({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),fI=Dt(dI),pI=Ie({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),mI=Dt(pI),gI=Ie({},Iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yI=Dt(gI),vI=[9,13,27,32],cf=On&&"CompositionEvent"in window,_o=null;On&&"documentMode"in document&&(_o=document.documentMode);var _I=On&&"TextEvent"in window&&!_o,L0=On&&(!cf||_o&&8<_o&&11>=_o),ag=" ",lg=!1;function j0(t,e){switch(t){case"keyup":return vI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function wI(t,e){switch(t){case"compositionend":return M0(e);case"keypress":return e.which!==32?null:(lg=!0,ag);case"textInput":return t=e.data,t===ag&&lg?null:t;default:return null}}function EI(t,e){if(js)return t==="compositionend"||!cf&&j0(t,e)?(t=O0(),ul=af=ur=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L0&&e.locale!=="ko"?null:e.data;default:return null}}var xI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xI[t.type]:e==="textarea"}function F0(t,e,n,r){g0(r),e=Ol(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,Mo=null;function TI(t){Y0(t,0)}function Su(t){var e=Us(t);if(u0(e))return t}function II(t,e){if(t==="change")return e}var U0=!1;if(On){var zc;if(On){var Bc="oninput"in document;if(!Bc){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),Bc=typeof cg.oninput=="function"}zc=Bc}else zc=!1;U0=zc&&(!document.documentMode||9<document.documentMode)}function hg(){wo&&(wo.detachEvent("onpropertychange",z0),Mo=wo=null)}function z0(t){if(t.propertyName==="value"&&Su(Mo)){var e=[];F0(e,Mo,t,tf(t)),w0(TI,e)}}function SI(t,e,n){t==="focusin"?(hg(),wo=e,Mo=n,wo.attachEvent("onpropertychange",z0)):t==="focusout"&&hg()}function AI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(Mo)}function CI(t,e){if(t==="click")return Su(e)}function NI(t,e){if(t==="input"||t==="change")return Su(e)}function RI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:RI;function Fo(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!wh.call(e,s)||!sn(t[s],e[s]))return!1}return!0}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,e){var n=dg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dg(n)}}function B0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?B0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $0(){for(var t=window,e=Nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kI(t){var e=$0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&B0(n.ownerDocument.documentElement,n)){if(r!==null&&hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=fg(n,i);var o=fg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PI=On&&"documentMode"in document&&11>=document.documentMode,Ms=null,Fh=null,Eo=null,Uh=!1;function pg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uh||Ms==null||Ms!==Nl(r)||(r=Ms,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Fo(Eo,r)||(Eo=r,r=Ol(Fh,"onSelect"),0<r.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ms)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},$c={},q0={};On&&(q0=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Au(t){if($c[t])return $c[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q0)return $c[t]=e[n];return t}var H0=Au("animationend"),W0=Au("animationiteration"),G0=Au("animationstart"),K0=Au("transitionend"),Q0=new Map,mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Q0.set(t,e),ws(e,[t])}for(var qc=0;qc<mg.length;qc++){var Hc=mg[qc],bI=Hc.toLowerCase(),DI=Hc[0].toUpperCase()+Hc.slice(1);jr(bI,"on"+DI)}jr(H0,"onAnimationEnd");jr(W0,"onAnimationIteration");jr(G0,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(K0,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function gg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,b1(r,e,void 0,t),t.currentTarget=null}function Y0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;gg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;gg(s,l,c),i=u}}}if(kl)throw t=Oh,kl=!1,Oh=null,t}function ye(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var r=t+"__bubble";n.has(r)||(J0(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),J0(n,t,r,e)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[Wa]){t[Wa]=!0,s0.forEach(function(n){n!=="selectionchange"&&(VI.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wa]||(e[Wa]=!0,Wc("selectionchange",!1,e))}}function J0(t,e,n,r){switch(V0(e)){case 1:var s=K1;break;case 4:s=Q1;break;default:s=of}n=s.bind(null,e,n,t),s=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=es(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}w0(function(){var c=i,f=tf(n),m=[];e:{var g=Q0.get(t);if(g!==void 0){var S=lf,N=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":S=cI;break;case"focusin":N="focus",S=Uc;break;case"focusout":N="blur",S=Uc;break;case"beforeblur":case"afterblur":S=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=X1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=fI;break;case H0:case W0:case G0:S=tI;break;case K0:S=mI;break;case"scroll":S=Y1;break;case"wheel":S=yI;break;case"copy":case"cut":case"paste":S=rI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=og}var k=(e&4)!==0,P=!k&&t==="scroll",E=k?g!==null?g+"Capture":null:g;k=[];for(var y=c,T;y!==null;){T=y;var R=T.stateNode;if(T.tag===5&&R!==null&&(T=R,E!==null&&(R=Vo(y,E),R!=null&&k.push(zo(y,R,T)))),P)break;y=y.return}0<k.length&&(g=new S(g,N,null,n,f),m.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==bh&&(N=n.relatedTarget||n.fromElement)&&(es(N)||N[Ln]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(N=n.relatedTarget||n.toElement,S=c,N=N?es(N):null,N!==null&&(P=Es(N),N!==P||N.tag!==5&&N.tag!==6)&&(N=null)):(S=null,N=c),S!==N)){if(k=sg,R="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=og,R="onPointerLeave",E="onPointerEnter",y="pointer"),P=S==null?g:Us(S),T=N==null?g:Us(N),g=new k(R,y+"leave",S,n,f),g.target=P,g.relatedTarget=T,R=null,es(f)===c&&(k=new k(E,y+"enter",N,n,f),k.target=T,k.relatedTarget=P,R=k),P=R,S&&N)t:{for(k=S,E=N,y=0,T=k;T;T=ks(T))y++;for(T=0,R=E;R;R=ks(R))T++;for(;0<y-T;)k=ks(k),y--;for(;0<T-y;)E=ks(E),T--;for(;y--;){if(k===E||E!==null&&k===E.alternate)break t;k=ks(k),E=ks(E)}k=null}else k=null;S!==null&&yg(m,g,S,k,!1),N!==null&&P!==null&&yg(m,P,N,k,!0)}}e:{if(g=c?Us(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var j=II;else if(ug(g))if(U0)j=NI;else{j=AI;var U=SI}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=CI);if(j&&(j=j(t,c))){F0(m,j,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Ch(g,"number",g.value)}switch(U=c?Us(c):window,t){case"focusin":(ug(U)||U.contentEditable==="true")&&(Ms=U,Fh=c,Eo=null);break;case"focusout":Eo=Fh=Ms=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,pg(m,n,f);break;case"selectionchange":if(PI)break;case"keydown":case"keyup":pg(m,n,f)}var w;if(cf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else js?j0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(L0&&n.locale!=="ko"&&(js||v!=="onCompositionStart"?v==="onCompositionEnd"&&js&&(w=O0()):(ur=f,af="value"in ur?ur.value:ur.textContent,js=!0)),U=Ol(c,v),0<U.length&&(v=new ig(v,t,null,n,f),m.push({event:v,listeners:U}),w?v.data=w:(w=M0(n),w!==null&&(v.data=w)))),(w=_I?wI(t,n):EI(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(f=new ig("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=w))}Y0(m,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Vo(t,n),i!=null&&r.unshift(zo(t,i,s)),i=Vo(t,e),i!=null&&r.push(zo(t,i,s))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Vo(n,i),u!=null&&o.unshift(zo(n,u,l))):s||(u=Vo(n,i),u!=null&&o.push(zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OI=/\r\n?/g,LI=/\u0000|\uFFFD/g;function vg(t){return(typeof t=="string"?t:""+t).replace(OI,`
`).replace(LI,"")}function Ga(t,e,n){if(e=vg(e),vg(t)!==e&&n)throw Error(F(425))}function Ll(){}var zh=null,Bh=null;function $h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,jI=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,MI=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(FI)}:qh;function FI(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);jo(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),mn="__reactFiber$"+Ai,Bo="__reactProps$"+Ai,Ln="__reactContainer$"+Ai,Hh="__reactEvents$"+Ai,UI="__reactListeners$"+Ai,zI="__reactHandles$"+Ai;function es(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wg(t);t!==null;){if(n=t[mn])return n;t=wg(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[mn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Cu(t){return t[Bo]||null}var Wh=[],zs=-1;function Mr(t){return{current:t}}function _e(t){0>zs||(t.current=Wh[zs],Wh[zs]=null,zs--)}function me(t,e){zs++,Wh[zs]=t.current,t.current=e}var Nr={},lt=Mr(Nr),Et=Mr(!1),us=Nr;function li(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function xt(t){return t=t.childContextTypes,t!=null}function jl(){_e(Et),_e(lt)}function Eg(t,e,n){if(lt.current!==Nr)throw Error(F(168));me(lt,e),me(Et,n)}function X0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,S1(t)||"Unknown",s));return Ie({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,us=lt.current,me(lt,t),me(Et,Et.current),!0}function xg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=X0(t,e,us),r.__reactInternalMemoizedMergedChildContext=t,_e(Et),_e(lt),me(lt,t)):_e(Et),me(Et,n)}var Cn=null,Nu=!1,Qc=!1;function Z0(t){Cn===null?Cn=[t]:Cn.push(t)}function BI(t){Nu=!0,Z0(t)}function Fr(){if(!Qc&&Cn!==null){Qc=!0;var t=0,e=ce;try{var n=Cn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,Nu=!1}catch(s){throw Cn!==null&&(Cn=Cn.slice(t+1)),I0(nf,Fr),s}finally{ce=e,Qc=!1}}return null}var Bs=[],$s=0,Fl=null,Ul=0,Ot=[],Lt=0,cs=null,Nn=1,Rn="";function Jr(t,e){Bs[$s++]=Ul,Bs[$s++]=Fl,Fl=t,Ul=e}function e_(t,e,n){Ot[Lt++]=Nn,Ot[Lt++]=Rn,Ot[Lt++]=cs,cs=t;var r=Nn;t=Rn;var s=32-tn(r)-1;r&=~(1<<s),n+=1;var i=32-tn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Nn=1<<32-tn(e)+s|n<<s|r,Rn=i+t}else Nn=1<<i|n<<s|r,Rn=t}function df(t){t.return!==null&&(Jr(t,1),e_(t,1,0))}function ff(t){for(;t===Fl;)Fl=Bs[--$s],Bs[$s]=null,Ul=Bs[--$s],Bs[$s]=null;for(;t===cs;)cs=Ot[--Lt],Ot[Lt]=null,Rn=Ot[--Lt],Ot[Lt]=null,Nn=Ot[--Lt],Ot[Lt]=null}var Nt=null,At=null,Ee=!1,Xt=null;function t_(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,At=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:Nn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,At=null,!0):!1;default:return!1}}function Gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kh(t){if(Ee){var e=At;if(e){var n=e;if(!Tg(t,e)){if(Gh(t))throw Error(F(418));e=yr(n.nextSibling);var r=Nt;e&&Tg(t,e)?t_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Nt=t)}}else{if(Gh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ee=!1,Nt=t}}}function Ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Ka(t){if(t!==Nt)return!1;if(!Ee)return Ig(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$h(t.type,t.memoizedProps)),e&&(e=At)){if(Gh(t))throw n_(),Error(F(418));for(;e;)t_(t,e),e=yr(e.nextSibling)}if(Ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Nt?yr(t.stateNode.nextSibling):null;return!0}function n_(){for(var t=At;t;)t=yr(t.nextSibling)}function ui(){At=Nt=null,Ee=!1}function pf(t){Xt===null?Xt=[t]:Xt.push(t)}var $I=qn.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sg(t){var e=t._init;return e(t._payload)}function r_(t){function e(E,y){if(t){var T=E.deletions;T===null?(E.deletions=[y],E.flags|=16):T.push(y)}}function n(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function r(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function s(E,y){return E=Er(E,y),E.index=0,E.sibling=null,E}function i(E,y,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<y?(E.flags|=2,y):T):(E.flags|=2,y)):(E.flags|=1048576,y)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,y,T,R){return y===null||y.tag!==6?(y=nh(T,E.mode,R),y.return=E,y):(y=s(y,T),y.return=E,y)}function u(E,y,T,R){var j=T.type;return j===Ls?f(E,y,T.props.children,R,T.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===er&&Sg(j)===y.type)?(R=s(y,T.props),R.ref=so(E,y,T),R.return=E,R):(R=yl(T.type,T.key,T.props,null,E.mode,R),R.ref=so(E,y,T),R.return=E,R)}function c(E,y,T,R){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=rh(T,E.mode,R),y.return=E,y):(y=s(y,T.children||[]),y.return=E,y)}function f(E,y,T,R,j){return y===null||y.tag!==7?(y=os(T,E.mode,R,j),y.return=E,y):(y=s(y,T),y.return=E,y)}function m(E,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=nh(""+y,E.mode,T),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ma:return T=yl(y.type,y.key,y.props,null,E.mode,T),T.ref=so(E,null,y),T.return=E,T;case Os:return y=rh(y,E.mode,T),y.return=E,y;case er:var R=y._init;return m(E,R(y._payload),T)}if(uo(y)||Zi(y))return y=os(y,E.mode,T,null),y.return=E,y;Qa(E,y)}return null}function g(E,y,T,R){var j=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:l(E,y,""+T,R);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ma:return T.key===j?u(E,y,T,R):null;case Os:return T.key===j?c(E,y,T,R):null;case er:return j=T._init,g(E,y,j(T._payload),R)}if(uo(T)||Zi(T))return j!==null?null:f(E,y,T,R,null);Qa(E,T)}return null}function S(E,y,T,R,j){if(typeof R=="string"&&R!==""||typeof R=="number")return E=E.get(T)||null,l(y,E,""+R,j);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ma:return E=E.get(R.key===null?T:R.key)||null,u(y,E,R,j);case Os:return E=E.get(R.key===null?T:R.key)||null,c(y,E,R,j);case er:var U=R._init;return S(E,y,T,U(R._payload),j)}if(uo(R)||Zi(R))return E=E.get(T)||null,f(y,E,R,j,null);Qa(y,R)}return null}function N(E,y,T,R){for(var j=null,U=null,w=y,v=y=0,x=null;w!==null&&v<T.length;v++){w.index>v?(x=w,w=null):x=w.sibling;var A=g(E,w,T[v],R);if(A===null){w===null&&(w=x);break}t&&w&&A.alternate===null&&e(E,w),y=i(A,y,v),U===null?j=A:U.sibling=A,U=A,w=x}if(v===T.length)return n(E,w),Ee&&Jr(E,v),j;if(w===null){for(;v<T.length;v++)w=m(E,T[v],R),w!==null&&(y=i(w,y,v),U===null?j=w:U.sibling=w,U=w);return Ee&&Jr(E,v),j}for(w=r(E,w);v<T.length;v++)x=S(w,E,v,T[v],R),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?v:x.key),y=i(x,y,v),U===null?j=x:U.sibling=x,U=x);return t&&w.forEach(function(C){return e(E,C)}),Ee&&Jr(E,v),j}function k(E,y,T,R){var j=Zi(T);if(typeof j!="function")throw Error(F(150));if(T=j.call(T),T==null)throw Error(F(151));for(var U=j=null,w=y,v=y=0,x=null,A=T.next();w!==null&&!A.done;v++,A=T.next()){w.index>v?(x=w,w=null):x=w.sibling;var C=g(E,w,A.value,R);if(C===null){w===null&&(w=x);break}t&&w&&C.alternate===null&&e(E,w),y=i(C,y,v),U===null?j=C:U.sibling=C,U=C,w=x}if(A.done)return n(E,w),Ee&&Jr(E,v),j;if(w===null){for(;!A.done;v++,A=T.next())A=m(E,A.value,R),A!==null&&(y=i(A,y,v),U===null?j=A:U.sibling=A,U=A);return Ee&&Jr(E,v),j}for(w=r(E,w);!A.done;v++,A=T.next())A=S(w,E,v,A.value,R),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?v:A.key),y=i(A,y,v),U===null?j=A:U.sibling=A,U=A);return t&&w.forEach(function(b){return e(E,b)}),Ee&&Jr(E,v),j}function P(E,y,T,R){if(typeof T=="object"&&T!==null&&T.type===Ls&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ma:e:{for(var j=T.key,U=y;U!==null;){if(U.key===j){if(j=T.type,j===Ls){if(U.tag===7){n(E,U.sibling),y=s(U,T.props.children),y.return=E,E=y;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===er&&Sg(j)===U.type){n(E,U.sibling),y=s(U,T.props),y.ref=so(E,U,T),y.return=E,E=y;break e}n(E,U);break}else e(E,U);U=U.sibling}T.type===Ls?(y=os(T.props.children,E.mode,R,T.key),y.return=E,E=y):(R=yl(T.type,T.key,T.props,null,E.mode,R),R.ref=so(E,y,T),R.return=E,E=R)}return o(E);case Os:e:{for(U=T.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(E,y.sibling),y=s(y,T.children||[]),y.return=E,E=y;break e}else{n(E,y);break}else e(E,y);y=y.sibling}y=rh(T,E.mode,R),y.return=E,E=y}return o(E);case er:return U=T._init,P(E,y,U(T._payload),R)}if(uo(T))return N(E,y,T,R);if(Zi(T))return k(E,y,T,R);Qa(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(n(E,y.sibling),y=s(y,T),y.return=E,E=y):(n(E,y),y=nh(T,E.mode,R),y.return=E,E=y),o(E)):n(E,y)}return P}var ci=r_(!0),s_=r_(!1),zl=Mr(null),Bl=null,qs=null,mf=null;function gf(){mf=qs=Bl=null}function yf(t){var e=zl.current;_e(zl),t._currentValue=e}function Qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){Bl=t,mf=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(Bl===null)throw Error(F(308));qs=t,Bl.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var ts=null;function vf(t){ts===null?ts=[t]:ts.push(t)}function i_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,vf(e)):(n.next=s.next,s.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,jn(t,n)}return s=r.interleaved,s===null?(e.next=e,vf(r)):(e.next=s.next,s.next=e),r.interleaved=e,jn(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}function Ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,r){var s=t.updateQueue;tr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,k=l;switch(g=e,S=n,k.tag){case 1:if(N=k.payload,typeof N=="function"){m=N.call(S,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=k.payload,g=typeof N=="function"?N.call(S,m,g):N,g==null)break e;m=Ie({},m,g);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=m):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ds|=o,t.lanes=o,t.memoizedState=m}}function Cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var da={},vn=Mr(da),$o=Mr(da),qo=Mr(da);function ns(t){if(t===da)throw Error(F(174));return t}function wf(t,e){switch(me(qo,e),me($o,t),me(vn,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}_e(vn),me(vn,e)}function hi(){_e(vn),_e($o),_e(qo)}function a_(t){ns(qo.current);var e=ns(vn.current),n=Rh(e,t.type);e!==n&&(me($o,t),me(vn,n))}function Ef(t){$o.current===t&&(_e(vn),_e($o))}var xe=Mr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function xf(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var dl=qn.ReactCurrentDispatcher,Jc=qn.ReactCurrentBatchConfig,hs=0,Te=null,Ue=null,He=null,Hl=!1,xo=!1,Ho=0,qI=0;function tt(){throw Error(F(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function If(t,e,n,r,s,i){if(hs=i,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?KI:QI,t=n(r,s),xo){i=0;do{if(xo=!1,Ho=0,25<=i)throw Error(F(301));i+=1,He=Ue=null,e.updateQueue=null,dl.current=YI,t=n(r,s)}while(xo)}if(dl.current=Wl,e=Ue!==null&&Ue.next!==null,hs=0,He=Ue=Te=null,Hl=!1,e)throw Error(F(300));return t}function Sf(){var t=Ho!==0;return Ho=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Te.memoizedState=He=t:He=He.next=t,He}function Wt(){if(Ue===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=He===null?Te.memoizedState:He.next;if(e!==null)He=e,Ue=t;else{if(t===null)throw Error(F(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Te.memoizedState=He=t:He=He.next=t}return He}function Wo(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((hs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Te.lanes|=f,ds|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,sn(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Te.lanes|=i,ds|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=Wt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);sn(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function l_(){}function u_(t,e){var n=Te,r=Wt(),s=e(),i=!sn(r.memoizedState,s);if(i&&(r.memoizedState=s,wt=!0),r=r.queue,Af(d_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Go(9,h_.bind(null,n,r,s,e),void 0,null),We===null)throw Error(F(349));hs&30||c_(n,e,s)}return s}function c_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function h_(t,e,n,r){e.value=n,e.getSnapshot=r,f_(e)&&p_(t)}function d_(t,e,n){return n(function(){f_(e)&&p_(t)})}function f_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function p_(t){var e=jn(t,1);e!==null&&nn(e,t,1,-1)}function Ng(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=GI.bind(null,Te,t),[e.memoizedState,t]}function Go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function m_(){return Wt().memoizedState}function fl(t,e,n,r){var s=fn();Te.flags|=t,s.memoizedState=Go(1|e,n,void 0,r===void 0?null:r)}function Ru(t,e,n,r){var s=Wt();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&Tf(r,o.deps)){s.memoizedState=Go(e,n,i,r);return}}Te.flags|=t,s.memoizedState=Go(1|e,n,i,r)}function Rg(t,e){return fl(8390656,8,t,e)}function Af(t,e){return Ru(2048,8,t,e)}function g_(t,e){return Ru(4,2,t,e)}function y_(t,e){return Ru(4,4,t,e)}function v_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function __(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,v_.bind(null,e,t),n)}function Cf(){}function w_(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function E_(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x_(t,e,n){return hs&21?(sn(n,e)||(n=C0(),Te.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function HI(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Jc.transition;Jc.transition={};try{t(!1),e()}finally{ce=n,Jc.transition=r}}function T_(){return Wt().memoizedState}function WI(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I_(t))S_(e,n);else if(n=i_(t,e,n,r),n!==null){var s=ft();nn(n,t,r,s),A_(n,e,r)}}function GI(t,e,n){var r=wr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I_(t))S_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,sn(l,o)){var u=e.interleaved;u===null?(s.next=s,vf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=i_(t,e,s,r),n!==null&&(s=ft(),nn(n,t,r,s),A_(n,e,r))}}function I_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function S_(t,e){xo=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}var Wl={readContext:Ht,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},KI={readContext:Ht,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,v_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WI.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Ng,useDebugValue:Cf,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Ng(!1),e=t[0];return t=HI.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,s=fn();if(Ee){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),We===null)throw Error(F(349));hs&30||c_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Rg(d_.bind(null,r,i,t),[t]),r.flags|=2048,Go(9,h_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=fn(),e=We.identifierPrefix;if(Ee){var n=Rn,r=Nn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QI={readContext:Ht,useCallback:w_,useContext:Ht,useEffect:Af,useImperativeHandle:__,useInsertionEffect:g_,useLayoutEffect:y_,useMemo:E_,useReducer:Xc,useRef:m_,useState:function(){return Xc(Wo)},useDebugValue:Cf,useDeferredValue:function(t){var e=Wt();return x_(e,Ue.memoizedState,t)},useTransition:function(){var t=Xc(Wo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:l_,useSyncExternalStore:u_,useId:T_,unstable_isNewReconciler:!1},YI={readContext:Ht,useCallback:w_,useContext:Ht,useEffect:Af,useImperativeHandle:__,useInsertionEffect:g_,useLayoutEffect:y_,useMemo:E_,useReducer:Zc,useRef:m_,useState:function(){return Zc(Wo)},useDebugValue:Cf,useDeferredValue:function(t){var e=Wt();return Ue===null?e.memoizedState=t:x_(e,Ue.memoizedState,t)},useTransition:function(){var t=Zc(Wo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:l_,useSyncExternalStore:u_,useId:T_,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ku={isMounted:function(t){return(t=t._reactInternals)?Es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),s=wr(t),i=bn(r,s);i.payload=e,n!=null&&(i.callback=n),e=vr(t,i,s),e!==null&&(nn(e,t,s,r),hl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),s=wr(t),i=bn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=vr(t,i,s),e!==null&&(nn(e,t,s,r),hl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=wr(t),s=bn(n,r);s.tag=2,e!=null&&(s.callback=e),e=vr(t,s,r),e!==null&&(nn(e,t,r,n),hl(e,t,r))}};function kg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(s,i):!0}function C_(t,e,n){var r=!1,s=Nr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ht(i):(s=xt(e)?us:lt.current,r=e.contextTypes,i=(r=r!=null)?li(t,s):Nr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ku.enqueueReplaceState(e,e.state,null)}function Jh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},_f(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ht(i):(i=xt(e)?us:lt.current,s.context=li(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ku.enqueueReplaceState(s,s.state,null),$l(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function di(t,e){try{var n="",r=e;do n+=I1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JI=typeof WeakMap=="function"?WeakMap:Map;function N_(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kl||(Kl=!0,ld=r),Xh(t,e)},n}function R_(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Xh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xh(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=hS.bind(null,t,e,n),e.then(t,t))}function Dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var XI=qn.ReactCurrentOwner,wt=!1;function dt(t,e,n,r){e.child=t===null?s_(e,null,n,r):ci(e,t.child,n,r)}function Og(t,e,n,r,s){n=n.render;var i=e.ref;return Xs(e,s),r=If(t,e,n,r,i,s),n=Sf(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Mn(t,e,s)):(Ee&&n&&df(e),e.flags|=1,dt(t,e,r,s),e.child)}function Lg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Of(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,k_(t,e,i,r,s)):(t=yl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return Mn(t,e,s)}return e.flags|=1,t=Er(i,r),t.ref=e.ref,t.return=e,e.child=t}function k_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Fo(i,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Mn(t,e,s)}return Zh(t,e,n,r,s)}function P_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ws,St),St|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ws,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(Ws,St),St|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,me(Ws,St),St|=r;return dt(t,e,s,n),e.child}function b_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zh(t,e,n,r,s){var i=xt(n)?us:lt.current;return i=li(e,i),Xs(e,s),n=If(t,e,n,r,i,s),r=Sf(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Mn(t,e,s)):(Ee&&r&&df(e),e.flags|=1,dt(t,e,n,s),e.child)}function jg(t,e,n,r,s){if(xt(n)){var i=!0;Ml(e)}else i=!1;if(Xs(e,s),e.stateNode===null)pl(t,e),C_(e,n,r),Jh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ht(c):(c=xt(n)?us:lt.current,c=li(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Pg(e,o,r,c),tr=!1;var g=e.memoizedState;o.state=g,$l(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Et.current||tr?(typeof f=="function"&&(Yh(e,n,f,r),u=e.memoizedState),(l=tr||kg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,o_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Yt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=xt(n)?us:lt.current,u=li(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Pg(e,o,r,u),tr=!1,g=e.memoizedState,o.state=g,$l(e,r,o,s);var N=e.memoizedState;l!==m||g!==N||Et.current||tr?(typeof S=="function"&&(Yh(e,n,S,r),N=e.memoizedState),(c=tr||kg(e,n,c,r,g,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ed(t,e,n,r,i,s)}function ed(t,e,n,r,s,i){b_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&xg(e,n,!1),Mn(t,e,i);r=e.stateNode,XI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ci(e,t.child,null,i),e.child=ci(e,null,l,i)):dt(t,e,l,i),e.memoizedState=r.state,s&&xg(e,n,!0),e.child}function D_(t){var e=t.stateNode;e.pendingContext?Eg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Eg(t,e.context,!1),wf(t,e.containerInfo)}function Mg(t,e,n,r,s){return ui(),pf(s),e.flags|=256,dt(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function V_(t,e,n){var r=e.pendingProps,s=xe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),me(xe,s&1),t===null)return Kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Du(o,r,0,null),t=os(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=nd(n),e.memoizedState=td,t):Nf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return ZI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Er(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Er(l,i):(i=os(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=td,r}return i=t.child,t=i.sibling,r=Er(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nf(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,r){return r!==null&&pf(r),ci(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(F(422))),Ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Du({mode:"visible",children:r.children},s,0,null),i=os(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ci(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,i);if(!(e.mode&1))return Ya(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=eh(i,r,void 0),Ya(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=We,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,jn(t,s),nn(r,t,s,-1))}return Vf(),r=eh(Error(F(421))),Ya(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=dS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,At=yr(s.nextSibling),Nt=e,Ee=!0,Xt=null,t!==null&&(Ot[Lt++]=Nn,Ot[Lt++]=Rn,Ot[Lt++]=cs,Nn=t.id,Rn=t.overflow,cs=e),e=Nf(e,r.children),e.flags|=4096,e)}function Fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qh(t.return,e,n)}function th(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function O_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(dt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,n,e);else if(t.tag===19)Fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(xe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),th(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ql(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}th(e,!0,n,null,i);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:D_(e),ui();break;case 5:a_(e);break;case 1:xt(e.type)&&Ml(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;me(zl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?V_(t,e,n):(me(xe,xe.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);me(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return O_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),me(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,P_(t,e,n)}return Mn(t,e,n)}var L_,rd,j_,M_;L_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};j_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ns(vn.current);var i=null;switch(n){case"input":s=Sh(t,s),r=Sh(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=Nh(t,s),r=Nh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ll)}kh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};M_=function(t,e,n,r){n!==r&&(e.flags|=4)};function io(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tS(t,e,n){var r=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return xt(e.type)&&jl(),nt(e),null;case 3:return r=e.stateNode,hi(),_e(Et),_e(lt),xf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(hd(Xt),Xt=null))),rd(t,e),nt(e),null;case 5:Ef(e);var s=ns(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)j_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return nt(e),null}if(t=ns(vn.current),Ka(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[mn]=e,r[Bo]=i,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(s=0;s<ho.length;s++)ye(ho[s],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Km(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Ym(r,i),ye("invalid",r)}kh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ga(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ga(r.textContent,l,t),s=["children",""+l]):bo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Fa(r),Qm(r,i,!0);break;case"textarea":Fa(r),Jm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ll)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=d0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[Bo]=r,L_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ph(n,r),n){case"dialog":ye("cancel",t),ye("close",t),s=r;break;case"iframe":case"object":case"embed":ye("load",t),s=r;break;case"video":case"audio":for(s=0;s<ho.length;s++)ye(ho[s],t);s=r;break;case"source":ye("error",t),s=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),s=r;break;case"details":ye("toggle",t),s=r;break;case"input":Km(t,r),s=Sh(t,r),ye("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Ym(t,r),s=Nh(t,r),ye("invalid",t);break;default:s=r}kh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?m0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&f0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Do(t,u):typeof u=="number"&&Do(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(bo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ye("scroll",t):u!=null&&Jd(t,i,u,o))}switch(n){case"input":Fa(t),Qm(t,r,!1);break;case"textarea":Fa(t),Jm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ks(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)M_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ns(qo.current),ns(vn.current),Ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(i=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return nt(e),null;case 13:if(_e(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&At!==null&&e.mode&1&&!(e.flags&128))n_(),ui(),e.flags|=98560,i=!1;else if(i=Ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[mn]=e}else ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),i=!1}else Xt!==null&&(hd(Xt),Xt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?ze===0&&(ze=3):Vf())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return hi(),rd(t,e),t===null&&Uo(e.stateNode.containerInfo),nt(e),null;case 10:return yf(e.type._context),nt(e),null;case 17:return xt(e.type)&&jl(),nt(e),null;case 19:if(_e(xe),i=e.memoizedState,i===null)return nt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)io(i,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,io(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(xe,xe.current&1|2),e.child}t=t.sibling}i.tail!==null&&be()>fi&&(e.flags|=128,r=!0,io(i,!1),e.lanes=4194304)}else{if(!r)if(t=ql(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return nt(e),null}else 2*be()-i.renderingStartTime>fi&&n!==1073741824&&(e.flags|=128,r=!0,io(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=be(),e.sibling=null,n=xe.current,me(xe,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return Df(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function nS(t,e){switch(ff(e),e.tag){case 1:return xt(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hi(),_e(Et),_e(lt),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(_e(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(xe),null;case 4:return hi(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Ja=!1,it=!1,rS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Ug=!1;function sS(t,e){if(zh=Dl,t=$0(),hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var S;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bh={focusedElem:t,selectionRange:n},Dl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var k=N.memoizedProps,P=N.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:Yt(e.type,k),P);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(R){Ne(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return N=Ug,Ug=!1,N}function To(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&sd(e,n,i)}s=s.next}while(s!==r)}}function Pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F_(t){var e=t.alternate;e!==null&&(t.alternate=null,F_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[Bo],delete e[Hh],delete e[UI],delete e[zI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U_(t){return t.tag===5||t.tag===3||t.tag===4}function zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ll));else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Ke=null,Jt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)z_(t,e,n),n=n.sibling}function z_(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:it||Hs(n,e);case 6:var r=Ke,s=Jt;Ke=null,Xn(t,e,n),Ke=r,Jt=s,Ke!==null&&(Jt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Jt?(t=Ke,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),jo(t)):Kc(Ke,n.stateNode));break;case 4:r=Ke,s=Jt,Ke=n.stateNode.containerInfo,Jt=!0,Xn(t,e,n),Ke=r,Jt=s;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&sd(n,e,o),s=s.next}while(s!==r)}Xn(t,e,n);break;case 1:if(!it&&(Hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Xn(t,e,n),it=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rS),e.forEach(function(r){var s=fS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Jt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Jt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(Ke===null)throw Error(F(160));z_(i,o,s),Ke=null,Jt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ne(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B_(e,t),e=e.sibling}function B_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),dn(t),r&4){try{To(3,t,t.return),Pu(3,t)}catch(k){Ne(t,t.return,k)}try{To(5,t,t.return)}catch(k){Ne(t,t.return,k)}}break;case 1:Kt(e,t),dn(t),r&512&&n!==null&&Hs(n,n.return);break;case 5:if(Kt(e,t),dn(t),r&512&&n!==null&&Hs(n,n.return),t.flags&32){var s=t.stateNode;try{Do(s,"")}catch(k){Ne(t,t.return,k)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&c0(s,i),Ph(l,o);var c=Ph(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?m0(s,m):f==="dangerouslySetInnerHTML"?f0(s,m):f==="children"?Do(s,m):Jd(s,f,m,c)}switch(l){case"input":Ah(s,i);break;case"textarea":h0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Ks(s,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ks(s,!!i.multiple,i.defaultValue,!0):Ks(s,!!i.multiple,i.multiple?[]:"",!1))}s[Bo]=i}catch(k){Ne(t,t.return,k)}}break;case 6:if(Kt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(k){Ne(t,t.return,k)}}break;case 3:if(Kt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(k){Ne(t,t.return,k)}break;case 4:Kt(e,t),dn(t);break;case 13:Kt(e,t),dn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Pf=be())),r&4&&Bg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||f,Kt(e,t),it=c):Kt(e,t),dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(g=H,S=g.child,g.tag){case 0:case 11:case 14:case 15:To(4,g,g.return);break;case 1:Hs(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(k){Ne(r,n,k)}}break;case 5:Hs(g,g.return);break;case 22:if(g.memoizedState!==null){qg(m);continue}}S!==null?(S.return=g,H=S):qg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=p0("display",o))}catch(k){Ne(t,t.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){Ne(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Kt(e,t),dn(t),r&4&&Bg(t);break;case 21:break;default:Kt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Do(s,""),r.flags&=-33);var i=zg(t);ad(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=zg(t);od(t,l,o);break;default:throw Error(F(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){H=t,$_(t)}function $_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ja;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||it;l=Ja;var c=it;if(Ja=o,(it=u)&&!c)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Hg(s):u!==null?(u.return=o,H=u):Hg(s);for(;i!==null;)H=i,$_(i),i=i.sibling;H=s,Ja=l,it=c}$g(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):$g(t)}}function $g(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||Pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Cg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&jo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}it||e.flags&512&&id(e)}catch(g){Ne(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function qg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Hg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pu(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ne(e,s,u)}}var i=e.return;try{id(e)}catch(u){Ne(e,i,u)}break;case 5:var o=e.return;try{id(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var oS=Math.ceil,Gl=qn.ReactCurrentDispatcher,Rf=qn.ReactCurrentOwner,Ut=qn.ReactCurrentBatchConfig,ae=0,We=null,Le=null,Je=0,St=0,Ws=Mr(0),ze=0,Ko=null,ds=0,bu=0,kf=0,Io=null,vt=null,Pf=0,fi=1/0,An=null,Kl=!1,ld=null,_r=null,Xa=!1,cr=null,Ql=0,So=0,ud=null,ml=-1,gl=0;function ft(){return ae&6?be():ml!==-1?ml:ml=be()}function wr(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:$I.transition!==null?(gl===0&&(gl=C0()),gl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:V0(t.type)),t):1}function nn(t,e,n,r){if(50<So)throw So=0,ud=null,Error(F(185));ua(t,n,r),(!(ae&2)||t!==We)&&(t===We&&(!(ae&2)&&(bu|=n),ze===4&&rr(t,Je)),Tt(t,r),n===1&&ae===0&&!(e.mode&1)&&(fi=be()+500,Nu&&Fr()))}function Tt(t,e){var n=t.callbackNode;$1(t,e);var r=bl(t,t===We?Je:0);if(r===0)n!==null&&eg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&eg(n),e===1)t.tag===0?BI(Wg.bind(null,t)):Z0(Wg.bind(null,t)),MI(function(){!(ae&6)&&Fr()}),n=null;else{switch(N0(r)){case 1:n=nf;break;case 4:n=S0;break;case 16:n=Pl;break;case 536870912:n=A0;break;default:n=Pl}n=J_(n,q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q_(t,e){if(ml=-1,gl=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=bl(t,t===We?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yl(t,r);else{e=r;var s=ae;ae|=2;var i=W_();(We!==t||Je!==e)&&(An=null,fi=be()+500,is(t,e));do try{uS();break}catch(l){H_(t,l)}while(!0);gf(),Gl.current=i,ae=s,Le!==null?e=0:(We=null,Je=0,e=ze)}if(e!==0){if(e===2&&(s=Lh(t),s!==0&&(r=s,e=cd(t,s))),e===1)throw n=Ko,is(t,0),rr(t,r),Tt(t,be()),n;if(e===6)rr(t,r);else{if(s=t.current.alternate,!(r&30)&&!aS(s)&&(e=Yl(t,r),e===2&&(i=Lh(t),i!==0&&(r=i,e=cd(t,i))),e===1))throw n=Ko,is(t,0),rr(t,r),Tt(t,be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Xr(t,vt,An);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Pf+500-be(),10<e)){if(bl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qh(Xr.bind(null,t,vt,An),e);break}Xr(t,vt,An);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-tn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oS(r/1960))-r,10<r){t.timeoutHandle=qh(Xr.bind(null,t,vt,An),r);break}Xr(t,vt,An);break;case 5:Xr(t,vt,An);break;default:throw Error(F(329))}}}return Tt(t,be()),t.callbackNode===n?q_.bind(null,t):null}function cd(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=vt,vt=n,e!==null&&hd(e)),t}function hd(t){vt===null?vt=t:vt.push.apply(vt,t)}function aS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!sn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~kf,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Wg(t){if(ae&6)throw Error(F(327));Zs();var e=bl(t,0);if(!(e&1))return Tt(t,be()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=cd(t,r))}if(n===1)throw n=Ko,is(t,0),rr(t,e),Tt(t,be()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,vt,An),Tt(t,be()),null}function bf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(fi=be()+500,Nu&&Fr())}}function fs(t){cr!==null&&cr.tag===0&&!(ae&6)&&Zs();var e=ae;ae|=1;var n=Ut.transition,r=ce;try{if(Ut.transition=null,ce=1,t)return t()}finally{ce=r,Ut.transition=n,ae=e,!(ae&6)&&Fr()}}function Df(){St=Ws.current,_e(Ws)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jI(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jl();break;case 3:hi(),_e(Et),_e(lt),xf();break;case 5:Ef(r);break;case 4:hi();break;case 13:_e(xe);break;case 19:_e(xe);break;case 10:yf(r.type._context);break;case 22:case 23:Df()}n=n.return}if(We=t,Le=t=Er(t.current,null),Je=St=e,ze=0,Ko=null,kf=bu=ds=0,vt=Io=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ts=null}return t}function H_(t,e){do{var n=Le;try{if(gf(),dl.current=Wl,Hl){for(var r=Te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Hl=!1}if(hs=0,He=Ue=Te=null,xo=!1,Ho=0,Rf.current=null,n===null||n.return===null){ze=1,Ko=e,Le=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Dg(o);if(S!==null){S.flags&=-257,Vg(S,o,l,i,e),S.mode&1&&bg(i,c,e),e=S,u=c;var N=e.updateQueue;if(N===null){var k=new Set;k.add(u),e.updateQueue=k}else N.add(u);break e}else{if(!(e&1)){bg(i,c,e),Vf();break e}u=Error(F(426))}}else if(Ee&&l.mode&1){var P=Dg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Vg(P,o,l,i,e),pf(di(u,l));break e}}i=u=di(u,l),ze!==4&&(ze=2),Io===null?Io=[i]:Io.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=N_(i,u,e);Ag(i,E);break e;case 1:l=u;var y=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(_r===null||!_r.has(T)))){i.flags|=65536,e&=-e,i.lanes|=e;var R=R_(i,l,e);Ag(i,R);break e}}i=i.return}while(i!==null)}K_(n)}catch(j){e=j,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function W_(){var t=Gl.current;return Gl.current=Wl,t===null?Wl:t}function Vf(){(ze===0||ze===3||ze===2)&&(ze=4),We===null||!(ds&268435455)&&!(bu&268435455)||rr(We,Je)}function Yl(t,e){var n=ae;ae|=2;var r=W_();(We!==t||Je!==e)&&(An=null,is(t,e));do try{lS();break}catch(s){H_(t,s)}while(!0);if(gf(),ae=n,Gl.current=r,Le!==null)throw Error(F(261));return We=null,Je=0,ze}function lS(){for(;Le!==null;)G_(Le)}function uS(){for(;Le!==null&&!V1();)G_(Le)}function G_(t){var e=Y_(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?K_(t):Le=e,Rf.current=null}function K_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Le=null;return}}else if(n=tS(n,e,St),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);ze===0&&(ze=5)}function Xr(t,e,n){var r=ce,s=Ut.transition;try{Ut.transition=null,ce=1,cS(t,e,n,r)}finally{Ut.transition=s,ce=r}return null}function cS(t,e,n,r){do Zs();while(cr!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(q1(t,i),t===We&&(Le=We=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,J_(Pl,function(){return Zs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ut.transition,Ut.transition=null;var o=ce;ce=1;var l=ae;ae|=4,Rf.current=null,sS(t,n),B_(n,t),kI(Bh),Dl=!!zh,Bh=zh=null,t.current=n,iS(n),O1(),ae=l,ce=o,Ut.transition=i}else t.current=n;if(Xa&&(Xa=!1,cr=t,Ql=s),i=t.pendingLanes,i===0&&(_r=null),M1(n.stateNode),Tt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Kl)throw Kl=!1,t=ld,ld=null,t;return Ql&1&&t.tag!==0&&Zs(),i=t.pendingLanes,i&1?t===ud?So++:(So=0,ud=t):So=0,Fr(),null}function Zs(){if(cr!==null){var t=N0(Ql),e=Ut.transition,n=ce;try{if(Ut.transition=null,ce=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Ql=0,ae&6)throw Error(F(331));var s=ae;for(ae|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:To(8,f,i)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var g=f.sibling,S=f.return;if(F_(f),f===c){H=null;break}if(g!==null){g.return=S,H=g;break}H=S}}}var N=i.alternate;if(N!==null){var k=N.child;if(k!==null){N.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:To(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,H=E;break e}H=i.return}}var y=t.current;for(H=y;H!==null;){o=H;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,H=T;else e:for(o=y;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pu(9,l)}}catch(j){Ne(l,l.return,j)}if(l===o){H=null;break e}var R=l.sibling;if(R!==null){R.return=l.return,H=R;break e}H=l.return}}if(ae=s,Fr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Tu,t)}catch{}r=!0}return r}finally{ce=n,Ut.transition=e}}return!1}function Gg(t,e,n){e=di(n,e),e=N_(t,e,1),t=vr(t,e,1),e=ft(),t!==null&&(ua(t,1,e),Tt(t,e))}function Ne(t,e,n){if(t.tag===3)Gg(t,t,n);else for(;e!==null;){if(e.tag===3){Gg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=di(n,t),t=R_(e,t,1),e=vr(e,t,1),t=ft(),e!==null&&(ua(e,1,t),Tt(e,t));break}}e=e.return}}function hS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Je&n)===n&&(ze===4||ze===3&&(Je&130023424)===Je&&500>be()-Pf?is(t,0):kf|=n),Tt(t,e)}function Q_(t,e){e===0&&(t.mode&1?(e=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):e=1);var n=ft();t=jn(t,e),t!==null&&(ua(t,e,n),Tt(t,n))}function dS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q_(t,n)}function fS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Q_(t,n)}var Y_;Y_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,eS(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Ee&&e.flags&1048576&&e_(e,Ul,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pl(t,e),t=e.pendingProps;var s=li(e,lt.current);Xs(e,n),s=If(null,e,r,t,s,n);var i=Sf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(i=!0,Ml(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,_f(e),s.updater=ku,e.stateNode=s,s._reactInternals=e,Jh(e,r,t,n),e=ed(null,e,r,!0,i,n)):(e.tag=0,Ee&&i&&df(e),dt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=mS(r),t=Yt(r,t),s){case 0:e=Zh(null,e,r,t,n);break e;case 1:e=jg(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=Lg(null,e,r,Yt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),Zh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),jg(t,e,r,s,n);case 3:e:{if(D_(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,o_(t,e),$l(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=di(Error(F(423)),e),e=Mg(t,e,r,n,s);break e}else if(r!==s){s=di(Error(F(424)),e),e=Mg(t,e,r,n,s);break e}else for(At=yr(e.stateNode.containerInfo.firstChild),Nt=e,Ee=!0,Xt=null,n=s_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===s){e=Mn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return a_(e),t===null&&Kh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,$h(r,s)?o=null:i!==null&&$h(r,i)&&(e.flags|=32),b_(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Kh(e),null;case 13:return V_(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ci(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),Og(t,e,r,s,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,me(zl,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===s.children&&!Et.current){e=Mn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=bn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Qh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}dt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Xs(e,n),s=Ht(s),r=r(s),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,s=Yt(r,e.pendingProps),s=Yt(r.type,s),Lg(t,e,r,s,n);case 15:return k_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Yt(r,s),pl(t,e),e.tag=1,xt(r)?(t=!0,Ml(e)):t=!1,Xs(e,n),C_(e,r,s),Jh(e,r,s,n),ed(null,e,r,!0,t,n);case 19:return O_(t,e,n);case 22:return P_(t,e,n)}throw Error(F(156,e.tag))};function J_(t,e){return I0(t,e)}function pS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new pS(t,e,n,r)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zd)return 11;if(t===ef)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return os(n.children,s,i,e);case Xd:o=8,s|=8;break;case Eh:return t=Ft(12,n,e,s|2),t.elementType=Eh,t.lanes=i,t;case xh:return t=Ft(13,n,e,s),t.elementType=xh,t.lanes=i,t;case Th:return t=Ft(19,n,e,s),t.elementType=Th,t.lanes=i,t;case a0:return Du(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case i0:o=10;break e;case o0:o=9;break e;case Zd:o=11;break e;case ef:o=14;break e;case er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function os(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Du(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=a0,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,r,s,i,o,l,u){return t=new gS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ft(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(i),t}function yS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function X_(t){if(!t)return Nr;t=t._reactInternals;e:{if(Es(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(xt(n))return X0(t,n,e)}return e}function Z_(t,e,n,r,s,i,o,l,u){return t=Lf(n,r,!0,t,s,i,o,l,u),t.context=X_(null),n=t.current,r=ft(),s=wr(n),i=bn(r,s),i.callback=e??null,vr(n,i,s),t.current.lanes=s,ua(t,s,r),Tt(t,r),t}function Vu(t,e,n,r){var s=e.current,i=ft(),o=wr(s);return n=X_(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(s,e,o),t!==null&&(nn(t,s,o,i),hl(t,s,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){Kg(t,e),(t=t.alternate)&&Kg(t,e)}function vS(){return null}var ew=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mf(t){this._internalRoot=t}Ou.prototype.render=Mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Vu(t,e,null,null)};Ou.prototype.unmount=Mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){Vu(null,t,null,null)}),e[Ln]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=P0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&D0(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qg(){}function _S(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Jl(o);i.call(c)}}var o=Z_(e,r,t,0,null,!1,!1,"",Qg);return t._reactRootContainer=o,t[Ln]=o.current,Uo(t.nodeType===8?t.parentNode:t),fs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Jl(u);l.call(c)}}var u=Lf(t,0,!1,null,null,!1,!1,"",Qg);return t._reactRootContainer=u,t[Ln]=u.current,Uo(t.nodeType===8?t.parentNode:t),fs(function(){Vu(e,u,n,r)}),u}function ju(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Jl(o);l.call(u)}}Vu(e,o,t,s)}else o=_S(n,e,t,s,r);return Jl(o)}R0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(rf(e,n|1),Tt(e,be()),!(ae&6)&&(fi=be()+500,Fr()))}break;case 13:fs(function(){var r=jn(t,1);if(r!==null){var s=ft();nn(r,t,1,s)}}),jf(t,1)}};sf=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=ft();nn(e,t,134217728,n)}jf(t,134217728)}};k0=function(t){if(t.tag===13){var e=wr(t),n=jn(t,e);if(n!==null){var r=ft();nn(n,t,e,r)}jf(t,e)}};P0=function(){return ce};b0=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Dh=function(t,e,n){switch(e){case"input":if(Ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Cu(r);if(!s)throw Error(F(90));u0(r),Ah(r,s)}}}break;case"textarea":h0(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};v0=bf;_0=fs;var wS={usingClientEntryPoint:!1,Events:[ha,Us,Cu,g0,y0,bf]},oo={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x0(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||vS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Tu=Za.inject(ES),yn=Za}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(F(200));return yS(t,e,null,n)};bt.createRoot=function(t,e){if(!Ff(t))throw Error(F(299));var n=!1,r="",s=ew;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,r,s),t[Ln]=e.current,Uo(t.nodeType===8?t.parentNode:t),new Mf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=x0(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return fs(t)};bt.hydrate=function(t,e,n){if(!Lu(e))throw Error(F(200));return ju(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=ew;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Z_(e,null,t,1,n??null,s,!1,i,o),t[Ln]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ou(e)};bt.render=function(t,e,n){if(!Lu(e))throw Error(F(200));return ju(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Lu(t))throw Error(F(40));return t._reactRootContainer?(fs(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};bt.unstable_batchedUpdates=bf;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ju(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function tw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tw)}catch(t){console.error(t)}}tw(),t0.exports=bt;var xS=t0.exports,nw,Yg=xS;nw=Yg.createRoot,Yg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const Jg="popstate";function TS(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return dd("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Xl(s)}return SS(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Uf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IS(){return Math.random().toString(36).substr(2,8)}function Xg(t,e){return{usr:t.state,key:t.key,idx:e}}function dd(t,e,n,r){return n===void 0&&(n=null),Qo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||r||IS()})}function Xl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ci(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SS(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=hr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Qo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=hr.Pop;let P=f(),E=P==null?null:P-c;c=P,u&&u({action:l,location:k.location,delta:E})}function g(P,E){l=hr.Push;let y=dd(k.location,P,E);c=f()+1;let T=Xg(y,c),R=k.createHref(y);try{o.pushState(T,"",R)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(R)}i&&u&&u({action:l,location:k.location,delta:1})}function S(P,E){l=hr.Replace;let y=dd(k.location,P,E);c=f();let T=Xg(y,c),R=k.createHref(y);o.replaceState(T,"",R),i&&u&&u({action:l,location:k.location,delta:0})}function N(P){let E=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof P=="string"?P:Xl(P);return y=y.replace(/ $/,"%20"),Re(E,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,E)}let k={get action(){return l},get location(){return t(s,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Jg,m),u=P,()=>{s.removeEventListener(Jg,m),u=null}},createHref(P){return e(s,P)},createURL:N,encodeLocation(P){let E=N(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:S,go(P){return o.go(P)}};return k}var Zg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zg||(Zg={}));function AS(t,e,n){return n===void 0&&(n="/"),CS(t,e,n)}function CS(t,e,n,r){let s=typeof e=="string"?Ci(e):e,i=pi(s.pathname||"/",n);if(i==null)return null;let o=rw(t);NS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=FS(i);l=jS(o[u],c)}return l}function rw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=xr([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(Re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),rw(i.children,e,f,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:OS(c,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of sw(i.path))s(i,o,u)}),e}function sw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=sw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function NS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RS=/^:[\w-]+$/,kS=3,PS=2,bS=1,DS=10,VS=-2,ey=t=>t==="*";function OS(t,e){let n=t.split("/"),r=n.length;return n.some(ey)&&(r+=VS),e&&(r+=PS),n.filter(s=>!ey(s)).reduce((s,i)=>s+(RS.test(i)?kS:i===""?bS:DS),r)}function LS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function jS(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=fd({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:xr([i,m.pathname]),pathnameBase:qS(xr([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=xr([i,m.pathnameBase]))}return o}function fd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:g,isOptional:S}=f;if(g==="*"){let k=l[m]||"";o=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const N=l[m];return S&&!N?c[g]=void 0:c[g]=(N||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function MS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Uf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function FS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Uf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function pi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const US=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zS=t=>US.test(t);function BS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ci(t):t,i;if(n)if(zS(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Uf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=ty(n.substring(1),"/"):i=ty(n,e)}else i=e;return{pathname:i,search:HS(r),hash:WS(s)}}function ty(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function sh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $S(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function iw(t,e){let n=$S(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ow(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ci(t):(s=Qo({},t),Re(!s.pathname||!s.pathname.includes("?"),sh("?","pathname","search",s)),Re(!s.pathname||!s.pathname.includes("#"),sh("#","pathname","hash",s)),Re(!s.search||!s.search.includes("#"),sh("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=BS(s,l),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),qS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function GS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const aw=["post","put","patch","delete"];new Set(aw);const KS=["get",...aw];new Set(KS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yo.apply(this,arguments)}const Mu=O.createContext(null),lw=O.createContext(null),Ur=O.createContext(null),Fu=O.createContext(null),zr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),uw=O.createContext(null);function QS(t,e){let{relative:n}=e===void 0?{}:e;fa()||Re(!1);let{basename:r,navigator:s}=O.useContext(Ur),{hash:i,pathname:o,search:l}=Uu(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:xr([r,o])),s.createHref({pathname:u,search:l,hash:i})}function fa(){return O.useContext(Fu)!=null}function Ni(){return fa()||Re(!1),O.useContext(Fu).location}function cw(t){O.useContext(Ur).static||O.useLayoutEffect(t)}function zf(){let{isDataRoute:t}=O.useContext(zr);return t?uA():YS()}function YS(){fa()||Re(!1);let t=O.useContext(Mu),{basename:e,future:n,navigator:r}=O.useContext(Ur),{matches:s}=O.useContext(zr),{pathname:i}=Ni(),o=JSON.stringify(iw(s,n.v7_relativeSplatPath)),l=O.useRef(!1);return cw(()=>{l.current=!0}),O.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=ow(c,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:xr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,i,t])}function JS(){let{matches:t}=O.useContext(zr),e=t[t.length-1];return e?e.params:{}}function Uu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Ur),{matches:s}=O.useContext(zr),{pathname:i}=Ni(),o=JSON.stringify(iw(s,r.v7_relativeSplatPath));return O.useMemo(()=>ow(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function XS(t,e){return ZS(t,e)}function ZS(t,e,n,r){fa()||Re(!1);let{navigator:s}=O.useContext(Ur),{matches:i}=O.useContext(zr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ni(),f;if(e){var m;let P=typeof e=="string"?Ci(e):e;u==="/"||(m=P.pathname)!=null&&m.startsWith(u)||Re(!1),f=P}else f=c;let g=f.pathname||"/",S=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let N=AS(t,{pathname:S}),k=sA(N&&N.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:xr([u,s.encodeLocation?s.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:xr([u,s.encodeLocation?s.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,n,r);return e&&k?O.createElement(Fu.Provider,{value:{location:Yo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:hr.Pop}},k):k}function eA(){let t=lA(),e=GS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,null)}const tA=O.createElement(eA,null);class nA extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(zr.Provider,{value:this.props.routeContext},O.createElement(uw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rA(t){let{routeContext:e,match:n,children:r}=t,s=O.useContext(Mu);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(zr.Provider,{value:e},r)}function sA(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Re(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:S}=n,N=m.route.loader&&g[m.route.id]===void 0&&(!S||S[m.route.id]===void 0);if(m.route.lazy||N){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let S,N=!1,k=null,P=null;n&&(S=l&&m.route.id?l[m.route.id]:void 0,k=m.route.errorElement||tA,u&&(c<0&&g===0?(cA("route-fallback"),N=!0,P=null):c===g&&(N=!0,P=m.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),y=()=>{let T;return S?T=k:N?T=P:m.route.Component?T=O.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=f,O.createElement(rA,{match:m,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:T})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?O.createElement(nA,{location:n.location,revalidation:n.revalidation,component:k,error:S,children:y(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):y()},null)}var hw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(hw||{}),dw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(dw||{});function iA(t){let e=O.useContext(Mu);return e||Re(!1),e}function oA(t){let e=O.useContext(lw);return e||Re(!1),e}function aA(t){let e=O.useContext(zr);return e||Re(!1),e}function fw(t){let e=aA(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function lA(){var t;let e=O.useContext(uw),n=oA(),r=fw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function uA(){let{router:t}=iA(hw.UseNavigateStable),e=fw(dw.UseNavigateStable),n=O.useRef(!1);return cw(()=>{n.current=!0}),O.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Yo({fromRouteId:e},i)))},[t,e])}const ny={};function cA(t,e,n){ny[t]||(ny[t]=!0)}function hA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Qt(t){Re(!1)}function dA(t){let{basename:e="/",children:n=null,location:r,navigationType:s=hr.Pop,navigator:i,static:o=!1,future:l}=t;fa()&&Re(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:i,static:o,future:Yo({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=Ci(r));let{pathname:f="/",search:m="",hash:g="",state:S=null,key:N="default"}=r,k=O.useMemo(()=>{let P=pi(f,u);return P==null?null:{location:{pathname:P,search:m,hash:g,state:S,key:N},navigationType:s}},[u,f,m,g,S,N,s]);return k==null?null:O.createElement(Ur.Provider,{value:c},O.createElement(Fu.Provider,{children:n,value:k}))}function fA(t){let{children:e,location:n}=t;return XS(pd(e),n)}new Promise(()=>{});function pd(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,s)=>{if(!O.isValidElement(r))return;let i=[...e,s];if(r.type===O.Fragment){n.push.apply(n,pd(r.props.children,i));return}r.type!==Qt&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pd(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zl.apply(this,arguments)}function pw(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function pA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mA(t,e){return t.button===0&&(!e||e==="_self")&&!pA(t)}const gA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yA=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],vA="6";try{window.__reactRouterVersion=vA}catch{}const _A=O.createContext({isTransitioning:!1}),wA="startTransition",ry=h1[wA];function EA(t){let{basename:e,children:n,future:r,window:s}=t,i=O.useRef();i.current==null&&(i.current=TS({window:s,v5Compat:!0}));let o=i.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=O.useCallback(m=>{c&&ry?ry(()=>u(m)):u(m)},[u,c]);return O.useLayoutEffect(()=>o.listen(f),[o,f]),O.useEffect(()=>hA(r),[r]),O.createElement(dA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const xA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zt=O.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:m}=e,g=pw(e,gA),{basename:S}=O.useContext(Ur),N,k=!1;if(typeof c=="string"&&TA.test(c)&&(N=c,xA))try{let T=new URL(window.location.href),R=c.startsWith("//")?new URL(T.protocol+c):new URL(c),j=pi(R.pathname,S);R.origin===T.origin&&j!=null?c=j+R.search+R.hash:k=!0}catch{}let P=QS(c,{relative:s}),E=AA(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:s,viewTransition:m});function y(T){r&&r(T),T.defaultPrevented||E(T)}return O.createElement("a",Zl({},g,{href:N||P,onClick:k||i?r:y,ref:n,target:u}))}),IA=O.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:c,children:f}=e,m=pw(e,yA),g=Uu(u,{relative:m.relative}),S=Ni(),N=O.useContext(lw),{navigator:k,basename:P}=O.useContext(Ur),E=N!=null&&CA(g)&&c===!0,y=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,T=S.pathname,R=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;s||(T=T.toLowerCase(),R=R?R.toLowerCase():null,y=y.toLowerCase()),R&&P&&(R=pi(R,P)||R);const j=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let U=T===y||!o&&T.startsWith(y)&&T.charAt(j)==="/",w=R!=null&&(R===y||!o&&R.startsWith(y)&&R.charAt(y.length)==="/"),v={isActive:U,isPending:w,isTransitioning:E},x=U?r:void 0,A;typeof i=="function"?A=i(v):A=[i,U?"active":null,w?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(v):l;return O.createElement(zt,Zl({},m,{"aria-current":x,className:A,ref:n,style:C,to:u,viewTransition:c}),typeof f=="function"?f(v):f)});var md;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(md||(md={}));var sy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sy||(sy={}));function SA(t){let e=O.useContext(Mu);return e||Re(!1),e}function AA(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,u=zf(),c=Ni(),f=Uu(t,{relative:o});return O.useCallback(m=>{if(mA(m,n)){m.preventDefault();let g=r!==void 0?r:Xl(c)===Xl(f);u(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[c,u,f,r,s,n,t,i,o,l])}function CA(t,e){e===void 0&&(e={});let n=O.useContext(_A);n==null&&Re(!1);let{basename:r}=SA(md.useViewTransitionState),s=Uu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=pi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=pi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fd(s.pathname,o)!=null||fd(s.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),oe=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>O.createElement("svg",{ref:f,...NA,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${RA(t)}`,l].join(" "),...c},[...e.map(([m,g])=>O.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=oe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=oe("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=oe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=oe("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=oe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=oe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=oe("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=oe("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=oe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=oe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=oe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=oe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=oe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=oe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=oe("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=oe("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=oe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=oe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=oe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=oe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=oe("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=oe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=oe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=oe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=oe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=oe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=oe("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=oe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),KA=[{path:"/",name:"Dashboard",icon:$A},{path:"/drivers",name:"Quản lý tài xế",icon:_w},{path:"/night-shift",name:"Lịch trực đêm",icon:yw},{path:"/finance",name:"Tiền thế chân",icon:Hf},{path:"/revenue",name:"Quản lý doanh thu",icon:Jo},{path:"/reports",name:"Báo cáo",icon:gw},{path:"/settings",name:"Cài đặt",icon:vw}];function QA(){const[t,e]=O.useState(!1),n=Ni();return d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>e(!t),className:"lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar text-white shadow-lg",children:t?d.jsx(ww,{size:24}):d.jsx(qA,{size:24})}),t&&d.jsx("div",{className:"lg:hidden fixed inset-0 bg-black/50 z-30",onClick:()=>e(!1)}),d.jsxs("aside",{className:`fixed top-0 left-0 h-full w-64 bg-sidebar text-white z-40 transform transition-transform duration-300 lg:translate-x-0 ${t?"translate-x-0":"-translate-x-full"}`,children:[d.jsxs("div",{className:"flex items-center gap-3 px-6 py-6 border-b border-white/10",children:[d.jsx("div",{className:"w-10 h-10 bg-taxi-500 rounded-xl flex items-center justify-center",children:d.jsx(Rr,{size:24,className:"text-white"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-lg font-bold",children:"NS-QLY"}),d.jsx("p",{className:"text-xs text-gray-400",children:"Quản lý Taxi"})]})]}),d.jsx("nav",{className:"mt-6 px-3",children:d.jsx("ul",{className:"space-y-1",children:KA.map(r=>{const s=r.icon,i=n.pathname===r.path||r.path!=="/"&&n.pathname.startsWith(r.path);return d.jsx("li",{children:d.jsxs(IA,{to:r.path,onClick:()=>e(!1),className:`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${i?"bg-taxi-500 text-white shadow-lg shadow-taxi-500/30":"text-gray-300 hover:bg-sidebar-hover hover:text-white"}`,children:[d.jsx(s,{size:20,className:`transition-transform group-hover:scale-110 ${i?"text-white":"text-gray-400 group-hover:text-taxi-400"}`}),d.jsx("span",{className:"font-medium",children:r.name})]})},r.path)})})}),d.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 border-t border-white/10",children:d.jsxs("div",{className:"flex items-center gap-3 px-2",children:[d.jsx("div",{className:"w-8 h-8 bg-taxi-600 rounded-full flex items-center justify-center text-sm font-semibold",children:"A"}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("p",{className:"text-sm font-medium truncate",children:"Admin"}),d.jsx("p",{className:"text-xs text-gray-400 truncate",children:"admin@taxi.vn"})]})]})})]})]})}function YA({children:t}){return d.jsxs("div",{className:"min-h-screen bg-slate-50",children:[d.jsx(QA,{}),d.jsx("main",{className:"lg:ml-64 min-h-screen",children:d.jsx("div",{className:"p-4 lg:p-8",children:t})})]})}const JA=()=>{};var iy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},XA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[f],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ew(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new ZA;const g=i<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),m!==64){const N=c<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eC=function(t){const e=Ew(t);return xw.encodeByteArray(e,!0)},eu=function(t){return eC(t).replace(/\./g,"")},Tw=function(t){try{return xw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nC=()=>tC().__FIREBASE_DEFAULTS__,rC=()=>{if(typeof process>"u"||typeof iy>"u")return;const t=iy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tw(t[1]);return e&&JSON.parse(e)},zu=()=>{try{return JA()||nC()||rC()||sC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iw=t=>{var e,n;return(n=(e=zu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},iC=t=>{const e=Iw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sw=()=>{var t;return(t=zu())==null?void 0:t.config},Aw=t=>{var e;return(e=zu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ri(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cw(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function aC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[eu(JSON.stringify(n)),eu(JSON.stringify(o)),""].join(".")}const Ao={};function lC(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ao))Ao[e]?t.emulator.push(e):t.prod.push(e);return t}function uC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let oy=!1;function Nw(t,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||Ao[t]===e||Ao[t]||oy)return;Ao[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=lC().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{oy=!0,o()},g}function f(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=uC(r),S=n("text"),N=document.getElementById(S)||document.createElement("span"),k=n("learnmore"),P=document.getElementById(k)||document.createElement("a"),E=n("preprendIcon"),y=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const T=g.element;l(T),f(P,k);const R=c();u(y,E),T.append(y,N,P,R),document.body.appendChild(T)}i?(N.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function hC(){var e;const t=(e=zu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pC(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mC(){return!hC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kw(){try{return typeof indexedDB=="object"}catch{return!1}}function Pw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function gC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yC,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vC(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new un(s,l,r)}}function vC(t,e){return t.replace(_C,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _C=/\{\$([^}]+)}/g;function wC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ay(i)&&ay(o)){if(!kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ay(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function EC(t,e){const n=new xC(t,e);return n.subscribe.bind(n)}class xC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ih),s.error===void 0&&(s.error=ih),s.complete===void 0&&(s.complete=ih);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=1e3,SC=2,AC=4*60*60*1e3,CC=.5;function ly(t,e=IC,n=SC){const r=e*Math.pow(n,t),s=Math.round(CC*r*(Math.random()-.5)*2);return Math.min(AC,r+s)}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kC(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RC(t){return t===Zr?void 0:t}function kC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const bC={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},DC=ne.INFO,VC={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},OC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=VC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bu{constructor(e){this.name=e,this._logLevel=DC,this._logHandler=OC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const LC=(t,e)=>e.some(n=>t instanceof n);let uy,cy;function jC(){return uy||(uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return cy||(cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bw=new WeakMap,_d=new WeakMap,Dw=new WeakMap,oh=new WeakMap,Wf=new WeakMap;function FC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bw.set(n,t)}).catch(()=>{}),Wf.set(e,t),e}function UC(t){if(_d.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_d.set(t,e)}let wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zC(t){wd=t(wd)}function BC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ah(this),e,...n);return Dw.set(r,e.sort?e.sort():[e]),Tr(r)}:MC().includes(t)?function(...e){return t.apply(ah(this),e),Tr(bw.get(this))}:function(...e){return Tr(t.apply(ah(this),e))}}function $C(t){return typeof t=="function"?BC(t):(t instanceof IDBTransaction&&UC(t),LC(t,jC())?new Proxy(t,wd):t)}function Tr(t){if(t instanceof IDBRequest)return FC(t);if(oh.has(t))return oh.get(t);const e=$C(t);return e!==t&&(oh.set(t,e),Wf.set(e,t)),e}const ah=t=>Wf.get(t);function Vw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tr(o.result),u.oldVersion,u.newVersion,Tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const qC=["get","getKey","getAll","getAllKeys","count"],HC=["put","add","delete","clear"],lh=new Map;function hy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=HC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qC.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return lh.set(e,i),i}zC(t=>({...t,get:(e,n,r)=>hy(e,n)||t.get(e,n,r),has:(e,n)=>!!hy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ed="@firebase/app",dy="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Bu("@firebase/app"),KC="@firebase/app-compat",QC="@firebase/analytics-compat",YC="@firebase/analytics",JC="@firebase/app-check-compat",XC="@firebase/app-check",ZC="@firebase/auth",eN="@firebase/auth-compat",tN="@firebase/database",nN="@firebase/data-connect",rN="@firebase/database-compat",sN="@firebase/functions",iN="@firebase/functions-compat",oN="@firebase/installations",aN="@firebase/installations-compat",lN="@firebase/messaging",uN="@firebase/messaging-compat",cN="@firebase/performance",hN="@firebase/performance-compat",dN="@firebase/remote-config",fN="@firebase/remote-config-compat",pN="@firebase/storage",mN="@firebase/storage-compat",gN="@firebase/firestore",yN="@firebase/ai",vN="@firebase/firestore-compat",_N="firebase",wN="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="[DEFAULT]",EN={[Ed]:"fire-core",[KC]:"fire-core-compat",[YC]:"fire-analytics",[QC]:"fire-analytics-compat",[XC]:"fire-app-check",[JC]:"fire-app-check-compat",[ZC]:"fire-auth",[eN]:"fire-auth-compat",[tN]:"fire-rtdb",[nN]:"fire-data-connect",[rN]:"fire-rtdb-compat",[sN]:"fire-fn",[iN]:"fire-fn-compat",[oN]:"fire-iid",[aN]:"fire-iid-compat",[lN]:"fire-fcm",[uN]:"fire-fcm-compat",[cN]:"fire-perf",[hN]:"fire-perf-compat",[dN]:"fire-rc",[fN]:"fire-rc-compat",[pN]:"fire-gcs",[mN]:"fire-gcs-compat",[gN]:"fire-fst",[vN]:"fire-fst-compat",[yN]:"fire-vertex","fire-js":"fire-js",[_N]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new Map,xN=new Map,Td=new Map;function fy(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(Td.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,t);for(const n of tu.values())fy(n,t);for(const n of xN.values())fy(n,t);return!0}function Ts(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new xs("app","Firebase",TN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=wN;function Ow(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:xd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ir.create("bad-app-name",{appName:String(s)});if(n||(n=Sw()),!n)throw Ir.create("no-options");const i=tu.get(s);if(i){if(kr(n,i.options)&&kr(r,i.config))return i;throw Ir.create("duplicate-app",{appName:s})}const o=new PC(s);for(const u of Td.values())o.addComponent(u);const l=new IN(n,r,o);return tu.set(s,l),l}function Gf(t=xd){const e=tu.get(t);if(!e&&t===xd&&Sw())return Ow();if(!e)throw Ir.create("no-app",{appName:t});return e}function Bt(t,e,n){let r=EN[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(o.join(" "));return}In(new on(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const SN="firebase-heartbeat-database",AN=1,Xo="firebase-heartbeat-store";let uh=null;function Lw(){return uh||(uh=Vw(SN,AN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),uh}async function CN(t){try{const n=(await Lw()).transaction(Xo),r=await n.objectStore(Xo).get(jw(t));return await n.done,r}catch(e){if(e instanceof un)Fn.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function py(t,e){try{const r=(await Lw()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,jw(t)),await r.done}catch(n){if(n instanceof un)Fn.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function jw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NN=1024,RN=30;class kN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=my();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>RN){const o=DN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=my(),{heartbeatsToSend:r,unsentEntries:s}=PN(this._heartbeatsCache.heartbeats),i=eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function my(){return new Date().toISOString().substring(0,10)}function PN(t,e=NN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kw()?Pw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return py(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return py(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gy(t){return eu(JSON.stringify({version:2,heartbeats:t})).length}function DN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){In(new on("platform-logger",e=>new WC(e),"PRIVATE")),In(new on("heartbeat",e=>new kN(e),"PRIVATE")),Bt(Ed,dy,t),Bt(Ed,dy,"esm2020"),Bt("fire-js","")}VN("");var ON="firebase",LN="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(ON,LN,"app");const Mw="@firebase/installations",Kf="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=1e4,Uw=`w:${Kf}`,zw="FIS_v2",jN="https://firebaseinstallations.googleapis.com/v1",MN=60*60*1e3,FN="installations",UN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ps=new xs(FN,UN,zN);function Bw(t){return t instanceof un&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w({projectId:t}){return`${jN}/projects/${t}/installations`}function qw(t){return{token:t.token,requestStatus:2,expiresIn:$N(t.expiresIn),creationTime:Date.now()}}async function Hw(t,e){const r=(await e.json()).error;return ps.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ww({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function BN(t,{refreshToken:e}){const n=Ww(t);return n.append("Authorization",qN(e)),n}async function Gw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $N(t){return Number(t.replace("s","000"))}function qN(t){return`${zw} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$w(t),s=Ww(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:zw,appId:t.appId,sdkVersion:Uw},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await Gw(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:qw(c.authToken)}}else throw await Hw("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=/^[cdef][\w-]{21}$/,Id="";function KN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=QN(t);return GN.test(n)?n:Id}catch{return Id}}function QN(t){return WN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new Map;function Yw(t,e){const n=$u(t);Jw(n,e),YN(n,e)}function Jw(t,e){const n=Qw.get(t);if(n)for(const r of n)r(e)}function YN(t,e){const n=JN();n&&n.postMessage({key:t,fid:e}),XN()}let rs=null;function JN(){return!rs&&"BroadcastChannel"in self&&(rs=new BroadcastChannel("[Firebase] FID Change"),rs.onmessage=t=>{Jw(t.data.key,t.data.fid)}),rs}function XN(){Qw.size===0&&rs&&(rs.close(),rs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="firebase-installations-database",eR=1,ms="firebase-installations-store";let ch=null;function Qf(){return ch||(ch=Vw(ZN,eR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ms)}}})),ch}async function nu(t,e){const n=$u(t),s=(await Qf()).transaction(ms,"readwrite"),i=s.objectStore(ms),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Yw(t,e.fid),e}async function Xw(t){const e=$u(t),r=(await Qf()).transaction(ms,"readwrite");await r.objectStore(ms).delete(e),await r.done}async function qu(t,e){const n=$u(t),s=(await Qf()).transaction(ms,"readwrite"),i=s.objectStore(ms),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&Yw(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(t){let e;const n=await qu(t.appConfig,r=>{const s=tR(r),i=nR(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Id?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tR(t){const e=t||{fid:KN(),registrationStatus:0};return Zw(e)}function nR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ps.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sR(t)}:{installationEntry:e}}async function rR(t,e){try{const n=await HN(t,e);return nu(t.appConfig,n)}catch(n){throw Bw(n)&&n.customData.serverCode===409?await Xw(t.appConfig):await nu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sR(t){let e=await yy(t.appConfig);for(;e.registrationStatus===1;)await Kw(100),e=await yy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yf(t);return r||n}return e}function yy(t){return qu(t,e=>{if(!e)throw ps.create("installation-not-found");return Zw(e)})}function Zw(t){return iR(t)?{fid:t.fid,registrationStatus:0}:t}function iR(t){return t.registrationStatus===1&&t.registrationTime+Fw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR({appConfig:t,heartbeatServiceProvider:e},n){const r=aR(t,n),s=BN(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Uw,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await Gw(()=>fetch(r,l));if(u.ok){const c=await u.json();return qw(c)}else throw await Hw("Generate Auth Token",u)}function aR(t,{fid:e}){return`${$w(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(t,e=!1){let n;const r=await qu(t.appConfig,i=>{if(!eE(i))throw ps.create("not-registered");const o=i.authToken;if(!e&&cR(o))return i;if(o.requestStatus===1)return n=lR(t,e),i;{if(!navigator.onLine)throw ps.create("app-offline");const l=dR(i);return n=uR(t,l),l}});return n?await n:r.authToken}async function lR(t,e){let n=await vy(t.appConfig);for(;n.authToken.requestStatus===1;)await Kw(100),n=await vy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Jf(t,e):r}function vy(t){return qu(t,e=>{if(!eE(e))throw ps.create("not-registered");const n=e.authToken;return fR(n)?{...e,authToken:{requestStatus:0}}:e})}async function uR(t,e){try{const n=await oR(t,e),r={...e,authToken:n};return await nu(t.appConfig,r),n}catch(n){if(Bw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xw(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await nu(t.appConfig,r)}throw n}}function eE(t){return t!==void 0&&t.registrationStatus===2}function cR(t){return t.requestStatus===2&&!hR(t)}function hR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+MN}function dR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function fR(t){return t.requestStatus===1&&t.requestTime+Fw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Yf(e);return r?r.catch(console.error):Jf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e=!1){const n=t;return await gR(n),(await Jf(n,e)).token}async function gR(t){const{registrationPromise:e}=await Yf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){if(!t||!t.options)throw hh("App Configuration");if(!t.name)throw hh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hh(t){return ps.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="installations",vR="installations-internal",_R=t=>{const e=t.getProvider("app").getImmediate(),n=yR(e),r=Ts(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wR=t=>{const e=t.getProvider("app").getImmediate(),n=Ts(e,tE).getImmediate();return{getId:()=>pR(n),getToken:s=>mR(n,s)}};function ER(){In(new on(tE,_R,"PUBLIC")),In(new on(vR,wR,"PRIVATE"))}ER();Bt(Mw,Kf);Bt(Mw,Kf,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="analytics",xR="firebase_id",TR="origin",IR=60*1e3,SR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Bu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new xs("analytics","Analytics",AR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t){if(!t.startsWith(Xf)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return pt.warn(e.message),""}return t}function nE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function NR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function RR(t,e){const n=NR("firebase-js-sdk-policy",{createScriptURL:CR}),r=document.createElement("script"),s=`${Xf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function kR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function PR(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await nE(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){pt.error(l)}t("config",s,i)}async function bR(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await nE(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){pt.error(i)}}function DR(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await bR(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await PR(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){pt.error(l)}}return s}function VR(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=DR(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function OR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=30,jR=1e3;class MR{constructor(e={},n=jR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const rE=new MR;function FR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function UR(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:FR(n)},s=SR.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function zR(t,e=rE,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Rt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new qR;return setTimeout(async()=>{l.abort()},IR),sE({appId:r,apiKey:s,measurementId:i},o,l,e)}async function sE(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=rE){var l;const{appId:i,measurementId:o}=t;try{await BR(r,e)}catch(u){if(o)return pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await UR(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!$R(c)){if(s.deleteThrottleMetadata(i),o)return pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?ly(n,s.intervalMillis,LR):ly(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(i,m),pt.debug(`Calling attemptFetch again in ${f} millis`),sE(t,m,r,s)}}function BR(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $R(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HR(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function WR(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(){if(kw())try{await Pw()}catch(t){return pt.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return pt.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function KR(t,e,n,r,s,i,o){const l=zR(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>pt.error(g)),e.push(l);const u=GR().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);OR(i)||RR(i,c.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[TR]="firebase",m.update=!0,f!=null&&(m[xR]=f),s("config",c.measurementId,m),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.app=e}_delete(){return delete ei[this.app.options.appId],Promise.resolve()}}let ei={},_y=[];const wy={};let dh="dataLayer",YR="gtag",Ey,Zf,xy=!1;function JR(){const t=[];if(Rw()&&t.push("This is a browser extension environment."),gC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});pt.warn(n.message)}}function XR(t,e,n){JR();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(ei[r]!=null)throw Rt.create("already-exists",{id:r});if(!xy){kR(dh);const{wrappedGtag:i,gtagCore:o}=VR(ei,_y,wy,dh,YR);Zf=i,Ey=o,xy=!0}return ei[r]=KR(t,_y,wy,e,Ey,dh,n),new QR(t)}function ZR(t=Gf()){t=Ge(t);const e=Ts(t,ru);return e.isInitialized()?e.getImmediate():e2(t)}function e2(t,e={}){const n=Ts(t,ru);if(n.isInitialized()){const s=n.getImmediate();if(kr(e,n.getOptions()))return s;throw Rt.create("already-initialized")}return n.initialize({options:e})}function t2(t,e,n){t=Ge(t),WR(Zf,ei[t.app.options.appId],e,n).catch(r=>pt.error(r))}function n2(t,e,n,r){t=Ge(t),HR(Zf,ei[t.app.options.appId],e,n,r).catch(s=>pt.error(s))}const Ty="@firebase/analytics",Iy="0.10.19";function r2(){In(new on(ru,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return XR(r,s,n)},"PUBLIC")),In(new on("analytics-internal",t,"PRIVATE")),Bt(Ty,Iy),Bt(Ty,Iy,"esm2020");function t(e){try{const n=e.getProvider(ru).getImmediate();return{logEvent:(r,s,i)=>n2(n,r,s,i),setUserProperties:(r,s)=>t2(n,r,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}r2();var Sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,iE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function x(){}x.prototype=v.prototype,w.F=v.prototype,w.prototype=new x,w.prototype.constructor=w,w.D=function(A,C,b){for(var I=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)I[Ae-2]=arguments[Ae];return v.prototype[C].apply(A,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,x){x||(x=0);const A=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)A[C]=v.charCodeAt(x++)|v.charCodeAt(x++)<<8|v.charCodeAt(x++)<<16|v.charCodeAt(x++)<<24;else for(C=0;C<16;++C)A[C]=v[x++]|v[x++]<<8|v[x++]<<16|v[x++]<<24;v=w.g[0],x=w.g[1],C=w.g[2];let b=w.g[3],I;I=v+(b^x&(C^b))+A[0]+3614090360&4294967295,v=x+(I<<7&4294967295|I>>>25),I=b+(C^v&(x^C))+A[1]+3905402710&4294967295,b=v+(I<<12&4294967295|I>>>20),I=C+(x^b&(v^x))+A[2]+606105819&4294967295,C=b+(I<<17&4294967295|I>>>15),I=x+(v^C&(b^v))+A[3]+3250441966&4294967295,x=C+(I<<22&4294967295|I>>>10),I=v+(b^x&(C^b))+A[4]+4118548399&4294967295,v=x+(I<<7&4294967295|I>>>25),I=b+(C^v&(x^C))+A[5]+1200080426&4294967295,b=v+(I<<12&4294967295|I>>>20),I=C+(x^b&(v^x))+A[6]+2821735955&4294967295,C=b+(I<<17&4294967295|I>>>15),I=x+(v^C&(b^v))+A[7]+4249261313&4294967295,x=C+(I<<22&4294967295|I>>>10),I=v+(b^x&(C^b))+A[8]+1770035416&4294967295,v=x+(I<<7&4294967295|I>>>25),I=b+(C^v&(x^C))+A[9]+2336552879&4294967295,b=v+(I<<12&4294967295|I>>>20),I=C+(x^b&(v^x))+A[10]+4294925233&4294967295,C=b+(I<<17&4294967295|I>>>15),I=x+(v^C&(b^v))+A[11]+2304563134&4294967295,x=C+(I<<22&4294967295|I>>>10),I=v+(b^x&(C^b))+A[12]+1804603682&4294967295,v=x+(I<<7&4294967295|I>>>25),I=b+(C^v&(x^C))+A[13]+4254626195&4294967295,b=v+(I<<12&4294967295|I>>>20),I=C+(x^b&(v^x))+A[14]+2792965006&4294967295,C=b+(I<<17&4294967295|I>>>15),I=x+(v^C&(b^v))+A[15]+1236535329&4294967295,x=C+(I<<22&4294967295|I>>>10),I=v+(C^b&(x^C))+A[1]+4129170786&4294967295,v=x+(I<<5&4294967295|I>>>27),I=b+(x^C&(v^x))+A[6]+3225465664&4294967295,b=v+(I<<9&4294967295|I>>>23),I=C+(v^x&(b^v))+A[11]+643717713&4294967295,C=b+(I<<14&4294967295|I>>>18),I=x+(b^v&(C^b))+A[0]+3921069994&4294967295,x=C+(I<<20&4294967295|I>>>12),I=v+(C^b&(x^C))+A[5]+3593408605&4294967295,v=x+(I<<5&4294967295|I>>>27),I=b+(x^C&(v^x))+A[10]+38016083&4294967295,b=v+(I<<9&4294967295|I>>>23),I=C+(v^x&(b^v))+A[15]+3634488961&4294967295,C=b+(I<<14&4294967295|I>>>18),I=x+(b^v&(C^b))+A[4]+3889429448&4294967295,x=C+(I<<20&4294967295|I>>>12),I=v+(C^b&(x^C))+A[9]+568446438&4294967295,v=x+(I<<5&4294967295|I>>>27),I=b+(x^C&(v^x))+A[14]+3275163606&4294967295,b=v+(I<<9&4294967295|I>>>23),I=C+(v^x&(b^v))+A[3]+4107603335&4294967295,C=b+(I<<14&4294967295|I>>>18),I=x+(b^v&(C^b))+A[8]+1163531501&4294967295,x=C+(I<<20&4294967295|I>>>12),I=v+(C^b&(x^C))+A[13]+2850285829&4294967295,v=x+(I<<5&4294967295|I>>>27),I=b+(x^C&(v^x))+A[2]+4243563512&4294967295,b=v+(I<<9&4294967295|I>>>23),I=C+(v^x&(b^v))+A[7]+1735328473&4294967295,C=b+(I<<14&4294967295|I>>>18),I=x+(b^v&(C^b))+A[12]+2368359562&4294967295,x=C+(I<<20&4294967295|I>>>12),I=v+(x^C^b)+A[5]+4294588738&4294967295,v=x+(I<<4&4294967295|I>>>28),I=b+(v^x^C)+A[8]+2272392833&4294967295,b=v+(I<<11&4294967295|I>>>21),I=C+(b^v^x)+A[11]+1839030562&4294967295,C=b+(I<<16&4294967295|I>>>16),I=x+(C^b^v)+A[14]+4259657740&4294967295,x=C+(I<<23&4294967295|I>>>9),I=v+(x^C^b)+A[1]+2763975236&4294967295,v=x+(I<<4&4294967295|I>>>28),I=b+(v^x^C)+A[4]+1272893353&4294967295,b=v+(I<<11&4294967295|I>>>21),I=C+(b^v^x)+A[7]+4139469664&4294967295,C=b+(I<<16&4294967295|I>>>16),I=x+(C^b^v)+A[10]+3200236656&4294967295,x=C+(I<<23&4294967295|I>>>9),I=v+(x^C^b)+A[13]+681279174&4294967295,v=x+(I<<4&4294967295|I>>>28),I=b+(v^x^C)+A[0]+3936430074&4294967295,b=v+(I<<11&4294967295|I>>>21),I=C+(b^v^x)+A[3]+3572445317&4294967295,C=b+(I<<16&4294967295|I>>>16),I=x+(C^b^v)+A[6]+76029189&4294967295,x=C+(I<<23&4294967295|I>>>9),I=v+(x^C^b)+A[9]+3654602809&4294967295,v=x+(I<<4&4294967295|I>>>28),I=b+(v^x^C)+A[12]+3873151461&4294967295,b=v+(I<<11&4294967295|I>>>21),I=C+(b^v^x)+A[15]+530742520&4294967295,C=b+(I<<16&4294967295|I>>>16),I=x+(C^b^v)+A[2]+3299628645&4294967295,x=C+(I<<23&4294967295|I>>>9),I=v+(C^(x|~b))+A[0]+4096336452&4294967295,v=x+(I<<6&4294967295|I>>>26),I=b+(x^(v|~C))+A[7]+1126891415&4294967295,b=v+(I<<10&4294967295|I>>>22),I=C+(v^(b|~x))+A[14]+2878612391&4294967295,C=b+(I<<15&4294967295|I>>>17),I=x+(b^(C|~v))+A[5]+4237533241&4294967295,x=C+(I<<21&4294967295|I>>>11),I=v+(C^(x|~b))+A[12]+1700485571&4294967295,v=x+(I<<6&4294967295|I>>>26),I=b+(x^(v|~C))+A[3]+2399980690&4294967295,b=v+(I<<10&4294967295|I>>>22),I=C+(v^(b|~x))+A[10]+4293915773&4294967295,C=b+(I<<15&4294967295|I>>>17),I=x+(b^(C|~v))+A[1]+2240044497&4294967295,x=C+(I<<21&4294967295|I>>>11),I=v+(C^(x|~b))+A[8]+1873313359&4294967295,v=x+(I<<6&4294967295|I>>>26),I=b+(x^(v|~C))+A[15]+4264355552&4294967295,b=v+(I<<10&4294967295|I>>>22),I=C+(v^(b|~x))+A[6]+2734768916&4294967295,C=b+(I<<15&4294967295|I>>>17),I=x+(b^(C|~v))+A[13]+1309151649&4294967295,x=C+(I<<21&4294967295|I>>>11),I=v+(C^(x|~b))+A[4]+4149444226&4294967295,v=x+(I<<6&4294967295|I>>>26),I=b+(x^(v|~C))+A[11]+3174756917&4294967295,b=v+(I<<10&4294967295|I>>>22),I=C+(v^(b|~x))+A[2]+718787259&4294967295,C=b+(I<<15&4294967295|I>>>17),I=x+(b^(C|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,v){v===void 0&&(v=w.length);const x=v-this.blockSize,A=this.C;let C=this.h,b=0;for(;b<v;){if(C==0)for(;b<=x;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<v;)if(A[C++]=w.charCodeAt(b++),C==this.blockSize){s(this,A),C=0;break}}else for(;b<v;)if(A[C++]=w[b++],C==this.blockSize){s(this,A),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;v=this.o*8;for(var x=w.length-8;x<w.length;++x)w[x]=v&255,v/=256;for(this.v(w),w=Array(16),v=0,x=0;x<4;++x)for(let A=0;A<32;A+=8)w[v++]=this.g[x]>>>A&255;return w};function i(w,v){var x=l;return Object.prototype.hasOwnProperty.call(x,w)?x[w]:x[w]=v(w)}function o(w,v){this.h=v;const x=[];let A=!0;for(let C=w.length-1;C>=0;C--){const b=w[C]|0;A&&b==v||(x[C]=b,A=!1)}this.g=x}var l={};function u(w){return-128<=w&&w<128?i(w,function(v){return new o([v|0],v<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return P(c(-w));const v=[];let x=1;for(let A=0;w>=x;A++)v[A]=w/x|0,x*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return P(f(w.substring(1),v));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=c(Math.pow(v,8));let A=m;for(let b=0;b<w.length;b+=8){var C=Math.min(8,w.length-b);const I=parseInt(w.substring(b,b+C),v);C<8?(C=c(Math.pow(v,C)),A=A.j(C).add(c(I))):(A=A.j(x),A=A.add(c(I)))}return A}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let w=0,v=1;for(let x=0;x<this.g.length;x++){const A=this.i(x);w+=(A>=0?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(k(this))return"-"+P(this).toString(w);const v=c(Math.pow(w,6));var x=this;let A="";for(;;){const C=R(x,v).g;x=E(x,C.j(v));let b=((x.g.length>0?x.g[0]:x.h)>>>0).toString(w);if(x=C,N(x))return b+A;for(;b.length<6;)b="0"+b;A=b+A}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=E(this,w),k(w)?-1:N(w)?0:1};function P(w){const v=w.g.length,x=[];for(let A=0;A<v;A++)x[A]=~w.g[A];return new o(x,~w.h).add(g)}t.abs=function(){return k(this)?P(this):this},t.add=function(w){const v=Math.max(this.g.length,w.g.length),x=[];let A=0;for(let C=0;C<=v;C++){let b=A+(this.i(C)&65535)+(w.i(C)&65535),I=(b>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);A=I>>>16,b&=65535,I&=65535,x[C]=I<<16|b}return new o(x,x[x.length-1]&-2147483648?-1:0)};function E(w,v){return w.add(P(v))}t.j=function(w){if(N(this)||N(w))return m;if(k(this))return k(w)?P(this).j(P(w)):P(P(this).j(w));if(k(w))return P(this.j(P(w)));if(this.l(S)<0&&w.l(S)<0)return c(this.m()*w.m());const v=this.g.length+w.g.length,x=[];for(var A=0;A<2*v;A++)x[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<w.g.length;C++){const b=this.i(A)>>>16,I=this.i(A)&65535,Ae=w.i(C)>>>16,W=w.i(C)&65535;x[2*A+2*C]+=I*W,y(x,2*A+2*C),x[2*A+2*C+1]+=b*W,y(x,2*A+2*C+1),x[2*A+2*C+1]+=I*Ae,y(x,2*A+2*C+1),x[2*A+2*C+2]+=b*Ae,y(x,2*A+2*C+2)}for(w=0;w<v;w++)x[w]=x[2*w+1]<<16|x[2*w];for(w=v;w<2*v;w++)x[w]=0;return new o(x,0)};function y(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function T(w,v){this.g=w,this.h=v}function R(w,v){if(N(v))throw Error("division by zero");if(N(w))return new T(m,m);if(k(w))return v=R(P(w),v),new T(P(v.g),P(v.h));if(k(v))return v=R(w,P(v)),new T(P(v.g),v.h);if(w.g.length>30){if(k(w)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var x=g,A=v;A.l(w)<=0;)x=j(x),A=j(A);var C=U(x,1),b=U(A,1);for(A=U(A,2),x=U(x,2);!N(A);){var I=b.add(A);I.l(w)<=0&&(C=C.add(x),b=I),A=U(A,1),x=U(x,1)}return v=E(w,C.j(v)),new T(C,v)}for(C=m;w.l(v)>=0;){for(x=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(x)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),b=c(x),I=b.j(v);k(I)||I.l(w)>0;)x-=A,b=c(x),I=b.j(v);N(b)&&(b=g),C=C.add(b),w=E(w,I)}return new T(C,w)}t.B=function(w){return R(this,w).h},t.and=function(w){const v=Math.max(this.g.length,w.g.length),x=[];for(let A=0;A<v;A++)x[A]=this.i(A)&w.i(A);return new o(x,this.h&w.h)},t.or=function(w){const v=Math.max(this.g.length,w.g.length),x=[];for(let A=0;A<v;A++)x[A]=this.i(A)|w.i(A);return new o(x,this.h|w.h)},t.xor=function(w){const v=Math.max(this.g.length,w.g.length),x=[];for(let A=0;A<v;A++)x[A]=this.i(A)^w.i(A);return new o(x,this.h^w.h)};function j(w){const v=w.g.length+1,x=[];for(let A=0;A<v;A++)x[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(x,w.h)}function U(w,v){const x=v>>5;v%=32;const A=w.g.length-x,C=[];for(let b=0;b<A;b++)C[b]=v>0?w.i(b+x)>>>v|w.i(b+x+1)<<32-v:w.i(b+x);return new o(C,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,iE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Sr=o}).apply(typeof Sy<"u"?Sy:typeof self<"u"?self:typeof window<"u"?window:{});var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oE,fo,aE,vl,Sd,lE,uE,cE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof el=="object"&&el];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in p))break e;p=p[D]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(_,D,V){for(var z=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)z[ee-2]=arguments[ee];return h.prototype[D].apply(_,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function N(a,h){for(let _=1;_<arguments.length;_++){const D=arguments[_];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const V=D.length||0;a.length=p+V;for(let z=0;z<V;z++)a[p+z]=D[z]}else a.push(D)}}class k{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class y{constructor(){this.h=this.g=null}add(h,p){const _=T.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var T=new k(()=>new R,a=>a.reset());class R{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let j,U=!1,w=new y,v=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(x)}};function x(){for(var a;a=E();){try{a.h.call(a.g)}catch(p){P(p)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Ae(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Ae,C),Ae.prototype.init=function(a,h){const p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var W="closure_listenable_"+(Math.random()*1e6|0),le=0;function Ve(a,h,p,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=D,this.key=++le,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function Z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function we(a){const h={};for(const p in a)h[p]=a[p];return h}const ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qr(a,h){let p,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(p in _)a[p]=_[p];for(let V=0;V<ke.length;V++)p=ke[V],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function Vt(a){this.src=a,this.g={},this.h=0}Vt.prototype.add=function(a,h,p,_,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const z=Gt(a,h,_,D);return z>-1?(h=a[z],p||(h.fa=!1)):(h=new Ve(h,this.src,V,!!_,D),h.fa=p,a.push(h)),h};function Hr(a,h){const p=h.type;if(p in a.g){var _=a.g[p],D=Array.prototype.indexOf.call(_,h,void 0),V;(V=D>=0)&&Array.prototype.splice.call(_,D,1),V&&(B(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Gt(a,h,p,_){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==_)return D}return-1}var Hn="closure_lm_"+(Math.random()*1e6|0),hc={};function qp(a,h,p,_,D){if(Array.isArray(h)){for(let V=0;V<h.length;V++)qp(a,h[V],p,_,D);return null}return p=Gp(p),a&&a[W]?a.J(h,p,l(_)?!!_.capture:!1,D):vT(a,h,p,!1,_,D)}function vT(a,h,p,_,D,V){if(!h)throw Error("Invalid event type");const z=l(D)?!!D.capture:!!D;let ee=fc(a);if(ee||(a[Hn]=ee=new Vt(a)),p=ee.add(h,p,_,z,V),p.proxy)return p;if(_=_T(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)b||(D=z),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(Wp(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function _T(){function a(p){return h.call(a.src,a.listener,p)}const h=wT;return a}function Hp(a,h,p,_,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)Hp(a,h[V],p,_,D);else _=l(_)?!!_.capture:!!_,p=Gp(p),a&&a[W]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],p=Gt(h,p,_,D),p>-1&&(B(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=fc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Gt(h,p,_,D)),(p=a>-1?h[a]:null)&&dc(p))}function dc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[W])Hr(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Wp(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=fc(h))?(Hr(p,a),p.h==0&&(p.src=null,h[Hn]=null)):B(a)}}}function Wp(a){return a in hc?hc[a]:hc[a]="on"+a}function wT(a,h){if(a.da)a=!0;else{h=new Ae(h,this);const p=a.listener,_=a.ha||a.src;a.fa&&dc(a),a=p.call(_,h)}return a}function fc(a){return a=a[Hn],a instanceof Vt?a:null}var pc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Gp(a){return typeof a=="function"?a:(a[pc]||(a[pc]=function(h){return a.handleEvent(h)}),a[pc])}function et(){A.call(this),this.i=new Vt(this),this.M=this,this.G=null}m(et,A),et.prototype[W]=!0,et.prototype.removeEventListener=function(a,h,p,_){Hp(this,a,h,p,_)};function ct(a,h){var p,_=a.G;if(_)for(p=[];_;_=_.G)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var D=h;h=new C(_,a),qr(h,D)}D=!0;let V,z;if(p)for(z=p.length-1;z>=0;z--)V=h.g=p[z],D=Sa(V,_,!0,h)&&D;if(V=h.g=a,D=Sa(V,_,!0,h)&&D,D=Sa(V,_,!1,h)&&D,p)for(z=0;z<p.length;z++)V=h.g=p[z],D=Sa(V,_,!1,h)&&D}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let _=0;_<p.length;_++)B(p[_]);delete a.g[h],a.h--}}this.G=null},et.prototype.J=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},et.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Sa(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let V=0;V<h.length;++V){const z=h[V];if(z&&!z.da&&z.capture==p){const ee=z.listener,Fe=z.ha||z.src;z.fa&&Hr(a.i,z),D=ee.call(Fe,_)!==!1&&D}}return D&&!_.defaultPrevented}function ET(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Kp(a){a.g=ET(()=>{a.g=null,a.i&&(a.i=!1,Kp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class xT extends A{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Kp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(a){A.call(this),this.h=a,this.g={}}m(ji,A);var Qp=[];function Yp(a){K(a.g,function(h,p){this.g.hasOwnProperty(p)&&dc(h)},a),a.g={}}ji.prototype.N=function(){ji.Z.N.call(this),Yp(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mc=o.JSON.stringify,TT=o.JSON.parse,IT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jp(){}function Xp(){}var Mi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gc(){C.call(this,"d")}m(gc,C);function yc(){C.call(this,"c")}m(yc,C);var Wr={},Zp=null;function Aa(){return Zp=Zp||new et}Wr.Ia="serverreachability";function em(a){C.call(this,Wr.Ia,a)}m(em,C);function Fi(a){const h=Aa();ct(h,new em(h))}Wr.STAT_EVENT="statevent";function tm(a,h){C.call(this,Wr.STAT_EVENT,a),this.stat=h}m(tm,C);function ht(a){const h=Aa();ct(h,new tm(h,a))}Wr.Ja="timingevent";function nm(a,h){C.call(this,Wr.Ja,a),this.size=h}m(nm,C);function Ui(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function zi(){this.g=!0}zi.prototype.ua=function(){this.g=!1};function ST(a,h,p,_,D,V){a.info(function(){if(a.g)if(V){var z="",ee=V.split("&");for(let he=0;he<ee.length;he++){var Fe=ee[he].split("=");if(Fe.length>1){const $e=Fe[0];Fe=Fe[1];const hn=$e.split("_");z=hn.length>=2&&hn[1]=="type"?z+($e+"="+Fe+"&"):z+($e+"=redacted&")}}}else z=null;else z=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+p+`
`+z})}function AT(a,h,p,_,D,V,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+p+`
`+V+" "+z})}function Cs(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+NT(a,p)+(_?" "+_:"")})}function CT(a,h){a.info(function(){return"TIMEOUT: "+h})}zi.prototype.info=function(){};function NT(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var D=_[0];if(D!="noop"&&D!="stop"&&D!="close")for(let z=1;z<_.length;z++)_[z]=""}}}}return mc(V)}catch{return h}}var Ca={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},rm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},sm;function vc(){}m(vc,Jp),vc.prototype.g=function(){return new XMLHttpRequest},sm=new vc;function Bi(a){return encodeURIComponent(String(a))}function RT(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Wn(a,h,p,_){this.j=a,this.i=h,this.l=p,this.S=_||1,this.V=new ji(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new im}function im(){this.i=null,this.g="",this.h=!1}var om={},_c={};function wc(a,h,p){a.M=1,a.A=Ra(cn(h)),a.u=p,a.R=!0,am(a,null)}function am(a,h){a.F=Date.now(),Na(a),a.B=cn(a.A);var p=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),wm(p.i,"t",_),a.C=0,p=a.j.L,a.h=new im,a.g=Mm(a.j,p?h:null,!a.u),a.P>0&&(a.O=new xT(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,_=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Qp[0]=D.toString()),D=Qp);for(let V=0;V<D.length;V++){const z=qp(p,D[V],_||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?we(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Fi(),ST(a.i,a.v,a.B,a.l,a.S,a.u)}Wn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Qn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Qn(this.g),Fe=this.g.ya(),he=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Cm(this.g)))){this.K||ee!=4||Fe==7||(Fe==8||he<=0?Fi(3):Fi(2)),Ec(this);var h=this.g.ca();this.X=h;var p=kT(this);if(this.o=h==200,AT(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,D=this.g;if((_=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(_)){var V=_;break t}}V=null}if(a=V)Cs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xc(this,a);else{this.o=!1,this.m=3,ht(12),Gr(this),$i(this);break e}}if(this.R){a=!0;let $e;for(;!this.K&&this.C<p.length;)if($e=PT(this,p),$e==_c){ee==4&&(this.m=4,ht(14),a=!1),Cs(this.i,this.l,null,"[Incomplete Response]");break}else if($e==om){this.m=4,ht(15),Cs(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Cs(this.i,this.l,$e,null),xc(this,$e);if(lm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,ht(16),a=!1),this.o=this.o&&a,!a)Cs(this.i,this.l,p,"[Invalid Chunked Response]"),Gr(this),$i(this);else if(p.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),kc(z),z.P=!0,ht(11))}}else Cs(this.i,this.l,p,null),xc(this,p);ee==4&&Gr(this),this.o&&!this.K&&(ee==4?Vm(this.j,this):(this.o=!1,Na(this)))}else HT(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),Gr(this),$i(this)}}}catch{}finally{}};function kT(a){if(!lm(a))return a.g.la();const h=Cm(a.g);if(h==="")return"";let p="";const _=h.length,D=Qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gr(a),$i(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<_;V++)a.h.h=!0,p+=a.h.i.decode(h[V],{stream:!(D&&V==_-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function lm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function PT(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?_c:(p=Number(h.substring(p,_)),isNaN(p)?om:(_+=1,_+p>h.length?_c:(h=h.slice(_,_+p),a.C=_+p,h)))}Wn.prototype.cancel=function(){this.K=!0,Gr(this)};function Na(a){a.T=Date.now()+a.H,um(a,a.H)}function um(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ui(c(a.aa,a),h)}function Ec(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(CT(this.i,this.B),this.M!=2&&(Fi(),ht(17)),Gr(this),this.m=2,$i(this)):um(this,this.T-a)};function $i(a){a.j.I==0||a.K||Vm(a.j,a)}function Gr(a){Ec(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Yp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function xc(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Tc(p.h,a))){if(!a.L&&Tc(p.h,a)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Va(p),ba(p);else break e;Rc(p),ht(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ui(c(p.Va,p),6e3));dm(p.h)<=1&&p.ta&&(p.ta=void 0)}else Qr(p,11)}else if((a.L||p.g==a)&&Va(p),!I(h))for(D=p.Ba.g.parse(h),h=0;h<D.length;h++){let he=D[h];const $e=he[0];if(!($e<=p.K))if(p.K=$e,he=he[1],p.I==2)if(he[0]=="c"){p.M=he[1],p.ba=he[2];const hn=he[3];hn!=null&&(p.ka=hn,p.j.info("VER="+p.ka));const Yr=he[4];Yr!=null&&(p.za=Yr,p.j.info("SVER="+p.za));const Yn=he[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(_=1.5*Yn,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Jn=a.g;if(Jn){const La=Jn.g?Jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var V=_.h;V.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ic(V,V.h),V.h=null))}if(_.G){const Pc=Jn.g?Jn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(_.wa=Pc,ge(_.J,_.G,Pc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var z=a;if(_.na=jm(_,_.L?_.ba:null,_.W),z.L){fm(_.h,z);var ee=z,Fe=_.O;Fe&&(ee.H=Fe),ee.D&&(Ec(ee),Na(ee)),_.g=z}else bm(_);p.i.length>0&&Da(p)}else he[0]!="stop"&&he[0]!="close"||Qr(p,7);else p.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Qr(p,7):Nc(p):he[0]!="noop"&&p.l&&p.l.qa(he),p.A=0)}}Fi(4)}catch{}}var bT=class{constructor(a,h){this.g=a,this.map=h}};function cm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dm(a){return a.h?1:a.g?a.g.size:0}function Tc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ic(a,h){a.g?a.g.add(h):a.h=h}function fm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}cm.prototype.cancel=function(){if(this.i=pm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function pm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return S(a.i)}var mm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DT(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const _=a[p].indexOf("=");let D,V=null;_>=0?(D=a[p].substring(0,_),V=a[p].substring(_+1)):D=a[p],h(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Gn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Gn?(this.l=a.l,qi(this,a.j),this.o=a.o,this.g=a.g,Hi(this,a.u),this.h=a.h,Sc(this,Em(a.i)),this.m=a.m):a&&(h=String(a).match(mm))?(this.l=!1,qi(this,h[1]||"",!0),this.o=Wi(h[2]||""),this.g=Wi(h[3]||"",!0),Hi(this,h[4]),this.h=Wi(h[5]||"",!0),Sc(this,h[6]||"",!0),this.m=Wi(h[7]||"")):(this.l=!1,this.i=new Ki(null,this.l))}Gn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Gi(h,gm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Gi(h,gm,!0),"@"),a.push(Bi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Gi(p,p.charAt(0)=="/"?LT:OT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Gi(p,MT)),a.join("")},Gn.prototype.resolve=function(a){const h=cn(this);let p=!!a.j;p?qi(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var _=a.h;if(p)Hi(h,a.u);else if(p=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var D=h.h.lastIndexOf("/");D!=-1&&(_=h.h.slice(0,D+1)+_)}if(D=_,D==".."||D==".")_="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){_=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let z=0;z<D.length;){const ee=D[z++];ee=="."?_&&z==D.length&&V.push(""):ee==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),_&&z==D.length&&V.push("")):(V.push(ee),_=!0)}_=V.join("/")}else _=D}return p?h.h=_:p=a.i.toString()!=="",p?Sc(h,Em(a.i)):p=!!a.m,p&&(h.m=a.m),h};function cn(a){return new Gn(a)}function qi(a,h,p){a.j=p?Wi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Hi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Sc(a,h,p){h instanceof Ki?(a.i=h,FT(a.i,a.l)):(p||(h=Gi(h,jT)),a.i=new Ki(h,a.l))}function ge(a,h,p){a.i.set(h,p)}function Ra(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Wi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,VT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function VT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gm=/[#\/\?@]/g,OT=/[#\?:]/g,LT=/[#\?]/g,jT=/[#\?@]/g,MT=/#/g;function Ki(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kr(a){a.g||(a.g=new Map,a.h=0,a.i&&DT(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ki.prototype,t.add=function(a,h){Kr(this),this.i=null,a=Ns(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function ym(a,h){Kr(a),h=Ns(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function vm(a,h){return Kr(a),h=Ns(a,h),a.g.has(h)}t.forEach=function(a,h){Kr(this),this.g.forEach(function(p,_){p.forEach(function(D){a.call(h,D,_,this)},this)},this)};function _m(a,h){Kr(a);let p=[];if(typeof h=="string")vm(a,h)&&(p=p.concat(a.g.get(Ns(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Kr(this),this.i=null,a=Ns(this,a),vm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=_m(this,a),a.length>0?String(a[0]):h):h};function wm(a,h,p){ym(a,h),p.length>0&&(a.i=null,a.g.set(Ns(a,h),S(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const D=Bi(p);p=_m(this,p);for(let V=0;V<p.length;V++){let z=D;p[V]!==""&&(z+="="+Bi(p[V])),a.push(z)}}return this.i=a.join("&")};function Em(a){const h=new Ki;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ns(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function FT(a,h){h&&!a.j&&(Kr(a),a.i=null,a.g.forEach(function(p,_){const D=_.toLowerCase();_!=D&&(ym(this,_),wm(this,D,p))},a)),a.j=h}function UT(a,h){const p=new zi;if(o.Image){const _=new Image;_.onload=f(Kn,p,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Kn,p,"TestLoadImage: error",!1,h,_),_.onabort=f(Kn,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Kn,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function zT(a,h){const p=new zi,_=new AbortController,D=setTimeout(()=>{_.abort(),Kn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?Kn(p,"TestPingServer: ok",!0,h):Kn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Kn(p,"TestPingServer: error",!1,h)})}function Kn(a,h,p,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(p)}catch{}}function BT(){this.g=new IT}function Ac(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Ac,Jp),Ac.prototype.g=function(){return new ka(this.i,this.h)};function ka(a,h){et.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ka,et),t=ka.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Yi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;xm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function xm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qi(this):Yi(this),this.readyState==3&&xm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Qi(this))},t.Na=function(a){this.g&&(this.response=a,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Yi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tm(a){let h="";return K(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function Cc(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Tm(p),typeof a=="string"?p!=null&&Bi(p):ge(a,h,p))}function Ce(a){et.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ce,et);var $T=/^https?$/i,qT=["POST","PUT"];t=Ce.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():sm.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Im(this,V);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)p.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(qT,h,void 0)>=0)||_||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of p)this.g.setRequestHeader(V,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Im(this,V)}};function Im(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Sm(a),Pa(a)}function Sm(a){a.A||(a.A=!0,ct(a,"complete"),ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ct(this,"complete"),ct(this,"abort"),Pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pa(this,!0)),Ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Am(this):this.Xa())},t.Xa=function(){Am(this)};function Am(a){if(a.h&&typeof i<"u"){if(a.v&&Qn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ct(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=V===0){let z=String(a.D).match(mm)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),_=!$T.test(z?z.toLowerCase():"")}p=_}if(p)ct(a,"complete"),ct(a,"success");else{a.o=6;try{var D=Qn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Sm(a)}}finally{Pa(a)}}}}function Pa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||ct(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),TT(h)}};function Cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HT(a){const h={};a=(a.g&&Qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(I(a[_]))continue;var p=RT(a[_]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[D]||[];h[D]=V,V.push(p)}Z(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Nm(a){this.za=0,this.i=[],this.j=new zi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ji("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ji("baseRetryDelayMs",5e3,a),this.Za=Ji("retryDelaySeedMs",1e4,a),this.Ta=Ji("forwardChannelMaxRetries",2,a),this.va=Ji("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new cm(a&&a.concurrentRequestLimit),this.Ba=new BT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Nm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,_){ht(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=jm(this,null,this.W),Da(this)};function Nc(a){if(Rm(a),a.I==3){var h=a.V++,p=cn(a.J);if(ge(p,"SID",a.M),ge(p,"RID",h),ge(p,"TYPE","terminate"),Xi(a,p),h=new Wn(a,a.j,h),h.M=2,h.A=Ra(cn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Mm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Na(h)}Lm(a)}function ba(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function Rm(a){ba(a),a.v&&(o.clearTimeout(a.v),a.v=null),Va(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Da(a){if(!hm(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||v(),U||(j(),U=!0),w.add(h,a),a.D=0}}function WT(a,h){return dm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ui(c(a.Ea,a,h),Om(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new Wn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=we(V),qr(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Pm(this,D,h),p=cn(this.J),ge(p,"RID",a),ge(p,"CVER",22),this.G&&ge(p,"X-HTTP-Session-Id",this.G),Xi(this,p),V&&(this.R?h="headers="+Bi(Tm(V))+"&"+h:this.u&&Cc(p,this.u,V)),Ic(this.h,D),this.Ra&&ge(p,"TYPE","init"),this.S?(ge(p,"$req",h),ge(p,"SID","null"),D.U=!0,wc(D,p,null)):wc(D,p,h),this.I=2}}else this.I==3&&(a?km(this,a):this.i.length==0||hm(this.h)||km(this))};function km(a,h){var p;h?p=h.l:p=a.V++;const _=cn(a.J);ge(_,"SID",a.M),ge(_,"RID",p),ge(_,"AID",a.K),Xi(a,_),a.u&&a.o&&Cc(_,a.u,a.o),p=new Wn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Pm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ic(a.h,p),wc(p,_,h)}function Xi(a,h){a.H&&K(a.H,function(p,_){ge(h,_,p)}),a.l&&K({},function(p,_){ge(h,_,p)})}function Pm(a,h,p){p=Math.min(a.i.length,p);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const Fe=["count="+p];ee==-1?p>0?(ee=D[0].g,Fe.push("ofs="+ee)):ee=0:Fe.push("ofs="+ee);let he=!0;for(let $e=0;$e<p;$e++){var V=D[$e].g;const hn=D[$e].map;if(V-=ee,V<0)ee=Math.max(0,D[$e].g-100),he=!1;else try{V="req"+V+"_"||"";try{var z=hn instanceof Map?hn:Object.entries(hn);for(const[Yr,Yn]of z){let Jn=Yn;l(Yn)&&(Jn=mc(Yn)),Fe.push(V+Yr+"="+encodeURIComponent(Jn))}}catch(Yr){throw Fe.push(V+"type="+encodeURIComponent("_badmap")),Yr}}catch{_&&_(hn)}}if(he){z=Fe.join("&");break e}}z=void 0}return a=a.i.splice(0,p),h.G=a,z}function bm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||v(),U||(j(),U=!0),w.add(h,a),a.A=0}}function Rc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ui(c(a.Da,a),Om(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Dm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ui(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),ba(this),Dm(this))};function kc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Dm(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=cn(a.na);ge(h,"RID","rpc"),ge(h,"SID",a.M),ge(h,"AID",a.K),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(h,"TO",a.ia),ge(h,"TYPE","xmlhttp"),Xi(a,h),a.u&&a.o&&Cc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ra(cn(h)),p.u=null,p.R=!0,am(p,a)}t.Va=function(){this.C!=null&&(this.C=null,ba(this),Rc(this),ht(19))};function Va(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vm(a,h){var p=null;if(a.g==h){Va(a),kc(a),a.g=null;var _=2}else if(Tc(a.h,h))p=h.G,fm(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;_=Aa(),ct(_,new nm(_,p)),Da(a)}else bm(a);else if(D=h.m,D==3||D==0&&h.X>0||!(_==1&&WT(a,h)||_==2&&Rc(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),D){case 1:Qr(a,5);break;case 4:Qr(a,10);break;case 3:Qr(a,6);break;default:Qr(a,2)}}}function Om(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function Qr(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),_=a.Ua;const D=!_;_=new Gn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||qi(_,"https"),Ra(_),D?UT(_.toString(),p):zT(_.toString(),p)}else ht(2);a.I=0,a.l&&a.l.pa(h),Lm(a),Rm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Lm(a){if(a.I=0,a.ja=[],a.l){const h=pm(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function jm(a,h,p){var _=p instanceof Gn?cn(p):new Gn(p);if(_.g!="")h&&(_.g=h+"."+_.g),Hi(_,_.u);else{var D=o.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const V=new Gn(null);_&&qi(V,_),h&&(V.g=h),D&&Hi(V,D),p&&(V.h=p),_=V}return p=a.G,h=a.wa,p&&h&&ge(_,p,h),ge(_,"VER",a.ka),Xi(a,_),_}function Mm(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ce(new Ac({ab:p})):new Ce(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fm(){}t=Fm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Oa(){}Oa.prototype.g=function(a,h){return new It(a,h)};function It(a,h){et.call(this),this.g=new Nm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Rs(this)}m(It,et),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Nc(this.g)},It.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=mc(a),a=p);h.i.push(new bT(h.Ya++,a)),h.I==3&&Da(h)},It.prototype.N=function(){this.g.l=null,delete this.j,Nc(this.g),delete this.g,It.Z.N.call(this)};function Um(a){gc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Um,gc);function zm(){yc.call(this),this.status=1}m(zm,yc);function Rs(a){this.g=a}m(Rs,Fm),Rs.prototype.ra=function(){ct(this.g,"a")},Rs.prototype.qa=function(a){ct(this.g,new Um(a))},Rs.prototype.pa=function(a){ct(this.g,new zm)},Rs.prototype.oa=function(){ct(this.g,"b")},Oa.prototype.createWebChannel=Oa.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,cE=function(){return new Oa},uE=function(){return Aa()},lE=Wr,Sd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ca.NO_ERROR=0,Ca.TIMEOUT=8,Ca.HTTP_ERROR=6,vl=Ca,rm.COMPLETE="complete",aE=rm,Xp.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",et.prototype.listen=et.prototype.J,fo=Xp,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,oE=Ce}).apply(typeof el<"u"?el:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="12.9.0";function s2(t){Pi=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const gs=new Bu("@firebase/firestore");function Ps(){return gs.logLevel}function q(t,...e){if(gs.logLevel<=ne.DEBUG){const n=e.map(ep);gs.debug(`Firestore (${Pi}): ${t}`,...n)}}function Un(t,...e){if(gs.logLevel<=ne.ERROR){const n=e.map(ep);gs.error(`Firestore (${Pi}): ${t}`,...n)}}function ys(t,...e){if(gs.logLevel<=ne.WARN){const n=e.map(ep);gs.warn(`Firestore (${Pi}): ${t}`,...n)}}function ep(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,hE(t,r,n)}function hE(t,e,n){let r=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Un(r),new Error(r)}function ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||hE(e,s,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class i2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class o2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class a2{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new dE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class l2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class u2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new l2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ay{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ay(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ay(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=h2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Ad(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return fh(s)===fh(i)?re(s,i):fh(s)?1:-1}return re(t.length,e.length)}const d2=55296,f2=57343;function fh(t){const e=t.charCodeAt(0);return e>=d2&&e<=f2}function mi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return re(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):Ad(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sr.fromString(e.substring(4,e.length-2))}}class pe extends pn{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const p2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends pn{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return p2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cy}static keyField(){return new Ye([Cy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function fE(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function m2(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ny(t){if(!G.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ry(t){if(G.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hu(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function ma(t,e){if(!pE(t))throw new $(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=-62135596800,Py=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Py);return new ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ky)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Py}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ma(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ky;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:Me("string",ve._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ve(0,0))}static max(){return new J(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zo=-1;function g2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Pr(s,G.empty(),e)}function y2(t){return new Pr(t.readTime,t.key,Zo)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(J.min(),G.empty(),Zo)}static max(){return new Pr(J.max(),G.empty(),Zo)}}function v2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==_2)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function E2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=-1;function Gu(t){return t==null}function su(t){return t===0&&1/t==-1/0}function x2(t){return typeof t=="number"&&Number.isInteger(t)&&!su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="";function T2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=by(e)),e=I2(t.get(n),e);return by(e)}function I2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case mE:n+="";break;default:n+=i}}return n}function by(t){return t+mE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tl(this.root,e,this.comparator,!0)}}class tl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vy(this.data.getIterator())}getIteratorFrom(e){return new Vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Be(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class yE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yE("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const S2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=S2.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="server_timestamp",_E="__type__",wE="__previous_value__",EE="__local_write_time__";function rp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[_E])==null?void 0:r.stringValue)===vE}function Ku(t){const e=t.mapValue.fields[wE];return rp(e)?Ku(e):e}function ea(t){const e=br(t.mapValue.fields[EE].timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const iu="(default)";class ta{constructor(e,n){this.projectId=e,this.database=n||iu}static empty(){return new ta("","")}get isDefaultDatabase(){return this.database===iu}isEqual(e){return e instanceof ta&&e.projectId===this.projectId&&e.database===this.database}}function C2(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ta(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="__type__",N2="__max__",nl={mapValue:{}},TE="__vector__",ou="value";function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rp(t)?4:k2(t)?9007199254740991:R2(t)?10:11:Q(28295,{value:t})}function Sn(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ea(t).isEqual(ea(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=br(s.timestampValue),l=br(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pe(s.doubleValue),l=Pe(i.doubleValue);return o===l?su(o)===su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Dy(o)!==Dy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Sn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function na(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Pe(i.integerValue||i.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Oy(t.timestampValue,e.timestampValue);case 4:return Oy(ea(t),ea(e));case 5:return Ad(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Dr(i),u=Dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=re(l[c],u[c]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=re(Pe(i.latitude),Pe(o.latitude));return l!==0?l:re(Pe(i.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ly(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,S,N,k;const l=i.fields||{},u=o.fields||{},c=(g=l[ou])==null?void 0:g.arrayValue,f=(S=u[ou])==null?void 0:S.arrayValue,m=re(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return m!==0?m:Ly(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===nl.mapValue&&o===nl.mapValue)return 0;if(i===nl.mapValue)return 1;if(o===nl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=Ad(u[m],f[m]);if(g!==0)return g;const S=gi(l[u[m]],c[f[m]]);if(S!==0)return S}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function Oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=br(t),r=br(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function Ly(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gi(n[s],r[s]);if(i)return i}return re(n.length,r.length)}function yi(t){return Cd(t)}function Cd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Cd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Cd(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function _l(t){switch(Vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ku(t);return e?16+_l(e):16;case 5:return 2*t.stringValue.length;case 6:return Dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+_l(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Br(r.fields,(i,o)=>{s+=i.length+_l(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function jy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nd(t){return!!t&&"integerValue"in t}function sp(t){return!!t&&"arrayValue"in t}function My(t){return!!t&&"nullValue"in t}function Fy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wl(t){return!!t&&"mapValue"in t}function R2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[xE])==null?void 0:r.stringValue)===TE}function Co(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return{...t}}function k2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===N2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Co(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _t(Co(this.value))}}function IE(t){const e=[];return Br(t.fields,(n,r)=>{const s=new Ye([n]);if(wl(r)){const i=IE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,J.min(),J.min(),J.min(),_t.empty(),0)}static newFoundDocument(e,n,r,s){return new ot(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new ot(e,2,n,J.min(),J.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,J.min(),J.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class au{constructor(e,n){this.position=e,this.inclusive=n}}function Uy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lu{constructor(e,n="asc"){this.field=e,this.dir=n}}function P2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class SE{}class je extends SE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new D2(e,n,r):n==="array-contains"?new L2(e,r):n==="in"?new j2(e,r):n==="not-in"?new M2(e,r):n==="array-contains-any"?new F2(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new V2(e,r):new O2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gi(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends SE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ln(e,n)}matches(e){return AE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function AE(t){return t.op==="and"}function CE(t){return b2(t)&&AE(t)}function b2(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Rd(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(CE(t))return t.filters.map(e=>Rd(e)).join(",");{const e=t.filters.map(n=>Rd(n)).join(",");return`${t.op}(${e})`}}function NE(t,e){return t instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&Sn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&NE(o,s.filters[l]),!0):!1}(t,e):void Q(19439)}function RE(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(RE).join(" ,")+"}"}(t):"Filter"}class D2 extends je{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class V2 extends je{constructor(e,n){super(e,"in",n),this.keys=kE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class O2 extends je{constructor(e,n){super(e,"not-in",n),this.keys=kE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class L2 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sp(n)&&na(n.arrayValue,this.value)}}class j2 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class M2 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!na(this.value.arrayValue,n)}}class F2 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function By(t,e=null,n=[],r=[],s=null,i=null,o=null){return new U2(t,e,n,r,s,i,o)}function ip(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.Te=n}return e.Te}function op(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!P2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zy(t.startAt,e.startAt)&&zy(t.endAt,e.endAt)}function kd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function z2(t,e,n,r,s,i,o,l){return new ga(t,e,n,r,s,i,o,l)}function ap(t){return new ga(t)}function $y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function B2(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function PE(t){return t.collectionGroup!==null}function No(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new lu(i,r))}),n.has(Ye.keyField().canonicalString())||e.Ie.push(new lu(Ye.keyField(),r))}return e.Ie}function _n(t){const e=X(t);return e.Ee||(e.Ee=$2(e,No(t))),e.Ee}function $2(t,e){if(t.limitType==="F")return By(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new lu(s.field,i)});const n=t.endAt?new au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new au(t.startAt.position,t.startAt.inclusive):null;return By(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pd(t,e){const n=t.filters.concat([e]);return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bd(t,e,n){return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qu(t,e){return op(_n(t),_n(e))&&t.limitType===e.limitType}function bE(t){return`${ip(_n(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>RE(s)).join(", ")}]`),Gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>yi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>yi(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function Yu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of No(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Uy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,No(r),s)||r.endAt&&!function(o,l,u){const c=Uy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,No(r),s))}(t,e)}function q2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DE(t){return(e,n)=>{let r=!1;for(const s of No(t)){const i=H2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function H2(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?gi(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=new Se(G.comparator);function zn(){return W2}const VE=new Se(G.comparator);function po(...t){let e=VE;for(const n of t)e=e.insert(n.key,n);return e}function OE(t){let e=VE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ss(){return Ro()}function LE(){return Ro()}function Ro(){return new Is(t=>t.toString(),(t,e)=>t.isEqual(e))}const G2=new Se(G.comparator),K2=new Be(G.comparator);function se(...t){let e=K2;for(const n of t)e=e.add(n);return e}const Q2=new Be(re);function Y2(){return Q2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function jE(t){return{integerValue:""+t}}function J2(t,e){return x2(e)?jE(e):lp(t,e)}/**
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
 */class Ju{constructor(){this._=void 0}}function X2(t,e,n){return t instanceof uu?function(s,i){const o={fields:{[_E]:{stringValue:vE},[EE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rp(i)&&(i=Ku(i)),i&&(o.fields[wE]=i),{mapValue:o}}(n,e):t instanceof ra?FE(t,e):t instanceof sa?UE(t,e):function(s,i){const o=ME(s,i),l=qy(o)+qy(s.Ae);return Nd(o)&&Nd(s.Ae)?jE(l):lp(s.serializer,l)}(t,e)}function Z2(t,e,n){return t instanceof ra?FE(t,e):t instanceof sa?UE(t,e):n}function ME(t,e){return t instanceof cu?function(r){return Nd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class uu extends Ju{}class ra extends Ju{constructor(e){super(),this.elements=e}}function FE(t,e){const n=zE(e);for(const r of t.elements)n.some(s=>Sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends Ju{constructor(e){super(),this.elements=e}}function UE(t,e){let n=zE(e);for(const r of t.elements)n=n.filter(s=>!Sn(s,r));return{arrayValue:{values:n}}}class cu extends Ju{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function qy(t){return Pe(t.integerValue||t.doubleValue)}function zE(t){return sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ek(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ra&&s instanceof ra||r instanceof sa&&s instanceof sa?mi(r.elements,s.elements,Sn):r instanceof cu&&s instanceof cu?Sn(r.Ae,s.Ae):r instanceof uu&&s instanceof uu}(t.transform,e.transform)}class tk{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function El(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xu{}function BE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new up(t.key,$t.none()):new ya(t.key,t.data,$t.none());{const n=t.data,r=_t.empty();let s=new Be(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $r(t.key,r,new Ct(s.toArray()),$t.none())}}function nk(t,e,n){t instanceof ya?function(s,i,o){const l=s.value.clone(),u=Wy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(s,i,o){if(!El(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Wy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll($E(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,r){return t instanceof ya?function(i,o,l,u){if(!El(i.precondition,o))return l;const c=i.value.clone(),f=Gy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(i,o,l,u){if(!El(i.precondition,o))return l;const c=Gy(i.fieldTransforms,u,o),f=o.data;return f.setAll($E(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return El(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function rk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ME(r.transform,s||null);i!=null&&(n===null&&(n=_t.empty()),n.set(r.field,i))}return n||null}function Hy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mi(r,s,(i,o)=>ek(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ya extends Xu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $r extends Xu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $E(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wy(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Z2(o,l,n[s]))}return r}function Gy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,X2(i,o,e))}return r}class up extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sk extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=BE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>Hy(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>Hy(n,r))}}class cp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return G2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new cp(e,n,r,s)}}/**
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
 */class ok{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ak{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ie;function lk(t){switch(t){case L.OK:return Q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function qE(t){if(t===void 0)return Un("GRPC error has no .code"),L.UNKNOWN;switch(t){case Oe.OK:return L.OK;case Oe.CANCELLED:return L.CANCELLED;case Oe.UNKNOWN:return L.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return L.INTERNAL;case Oe.UNAVAILABLE:return L.UNAVAILABLE;case Oe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Oe.NOT_FOUND:return L.NOT_FOUND;case Oe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Oe.ABORTED:return L.ABORTED;case Oe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Oe.DATA_LOSS:return L.DATA_LOSS;default:return Q(39323,{code:t})}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uk(){return new TextEncoder}/**
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
 */const ck=new Sr([4294967295,4294967295],0);function Ky(t){const e=uk().encode(t),n=new iE;return n.update(e),new Uint8Array(n.digest())}function Qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([s,i],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mo(`Invalid padding: ${n}`);if(r<0)throw new mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Sr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Sr.fromNumber(r)));return s.compare(ck)===1&&(s=new Sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ky(e),[r,s]=Qy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ky(e),[r,s]=Qy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zu(J.min(),s,new Se(re),zn(),se())}}class va{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new va(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class HE{constructor(e,n){this.targetId=e,this.Ce=n}}class WE{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Yy{constructor(){this.ve=0,this.Fe=Jy(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new va(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Jy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hk{constructor(e){this.Ge=e,this.ze=new Map,this.je=zn(),this.He=rl(),this.Je=rl(),this.Ze=new Se(re)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(kd(i))if(r===0){const o=new G(i.path);this.et(n,o,ot.newNoDocument(o,J.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Dr(r).toUint8Array()}catch(u){if(u instanceof yE)return ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hp(o,s,i)}catch(u){return ys(u instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&kd(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ot.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=se();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Zu(e,n,this.Ze,this.je,r);return this.je=zn(),this.He=rl(),this.Je=rl(),this.Ze=new Se(re),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Yy,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Be(re),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Be(re),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Yy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function rl(){return new Se(G.comparator)}function Jy(){return new Se(G.comparator)}const dk={asc:"ASCENDING",desc:"DESCENDING"},fk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pk={and:"AND",or:"OR"};class mk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dd(t,e){return t.useProto3Json||Gu(e)?e:{value:e}}function hu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gk(t,e){return hu(t,e.toTimestamp())}function wn(t){return ue(!!t,49232),J.fromTimestamp(function(n){const r=br(n);return new ve(r.seconds,r.nanos)}(t))}function dp(t,e){return Vd(t,e).canonicalString()}function Vd(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KE(t){const e=pe.fromString(t);return ue(ZE(e),10190,{key:e.toString()}),e}function Od(t,e){return dp(t.databaseId,e.path)}function ph(t,e){const n=KE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(YE(n))}function QE(t,e){return dp(t.databaseId,e)}function yk(t){const e=KE(t);return e.length===4?pe.emptyPath():YE(e)}function Ld(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YE(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Xy(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function vk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ue(f===void 0||typeof f=="string",58123),Ze.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:qE(c.code);return new $(f,c.message||"")}(o);n=new WE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ph(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):J.min(),l=new _t({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new xl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ph(t,r.document),i=r.readTime?wn(r.readTime):J.min(),o=ot.newNoDocument(s,i),l=r.removedTargetIds||[];n=new xl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ph(t,r.document),i=r.removedTargetIds||[];n=new xl([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ak(s,i),l=r.targetId;n=new HE(l,o)}}return n}function _k(t,e){let n;if(e instanceof ya)n={update:Xy(t,e.key,e.value)};else if(e instanceof up)n={delete:Od(t,e.key)};else if(e instanceof $r)n={update:Xy(t,e.key,e.data),updateMask:Nk(e.fieldMask)};else{if(!(e instanceof sk))return Q(16599,{dt:e.type});n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof uu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function wk(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(J.min())&&(o=wn(i)),new tk(o,s.transformResults||[])}(n,e))):[]}function Ek(t,e){return{documents:[QE(t,e.path)]}}function xk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QE(t,s);const i=function(c){if(c.length!==0)return XE(ln.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ds(g.field),direction:Sk(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Dd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function Tk(t){let e=yk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ue(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=JE(m);return g instanceof ln&&CE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(N){return new lu(Vs(N.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Gu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new au(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,S=m.values||[];return new au(S,g)}(n.endAt)),z2(e,s,o,i,l,"F",u,c)}function Ik(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function JE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vs(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vs(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vs(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vs(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(Vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>JE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function Sk(t){return dk[t]}function Ak(t){return fk[t]}function Ck(t){return pk[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Vs(t){return Ye.fromServerFormat(t.fieldPath)}function XE(t){return t instanceof je?function(n){if(n.op==="=="){if(Fy(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(My(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fy(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(My(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:Ak(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>XE(s));return r.length===1?r[0]:{compositeFilter:{op:Ck(n.op),filters:r}}}(t):Q(54877,{filter:t})}function Nk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function ex(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.yt=e}}function kk(t){const e=Tk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.Sn=new bk}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Pr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class bk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Be(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(pe.comparator)).toArray()}}/**
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
 */const Zy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tx=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(tx,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new vi(0)}static ar(){return new vi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="LruGarbageCollector",Dk=1048576;function tv([t,e],[n,r]){const s=re(t,n);return s===0?re(e,r):s}class Vk{constructor(e){this.Pr=e,this.buffer=new Be(tv),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();tv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ok{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(ev,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Di(n)?q(ev,"Ignoring IndexedDB error during garbage collection: ",n):await bi(n)}await this.Ar(3e5)})}}class Lk{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Wu.ce);const r=new Vk(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Zy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Ps()<=ne.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function jk(t,e){return new Lk(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.changes=new Is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ko(r.mutation,s,Ct.empty(),ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=ss();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=po();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=zn();const o=Ro(),l=function(){return Ro()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof $r)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ko(f.mutation,c,f.mutation.getFieldMask(),ve.now())):o.set(c.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new Fk(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ro();let s=new Se((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Ct.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=LE();f.forEach(g=>{if(!i.has(g)){const S=BE(n.get(g),r.get(g));S!==null&&m.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return B2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(ss());let l=Zo,u=i;return o.next(c=>M.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,se())).next(f=>({batchId:l,changes:OE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=po();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=po();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const c=function(m,g){return new ga(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,ot.newInvalidDocument(f)))});let l=po();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&ko(f.mutation,c,Ct.empty(),ve.now()),Yu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:kk(s.bundledQuery),readTime:wn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class Bk{constructor(){this.overlays=new Se(G.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ss();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=ss(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=ss(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=ss(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ok(n,r));let i=this.Lr.get(n);i===void 0&&(i=se(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class $k{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.kr=new Be(qe.Kr),this.qr=new Be(qe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new qe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new pe([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new pe([])),r=new qe(n,e),s=new qe(n,e+1);let i=se();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return G.comparator(e.key,n.key)||re(e.Hr,n.Hr)}static Ur(e,n){return re(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Be(qe.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ik(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?np:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(re);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new qe(new G(i),0);let l=new Be(re);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ue(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new qe(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.ti=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=zn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||v2(y2(f),r)<=0||(s.has(f.key)||Yu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Wk(this)}getSize(e){return M.resolve(this.size)}}class Wk extends Mk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.persistence=e,this.ri=new Is(n=>ip(n),op),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new fp,this.targetCount=0,this.oi=vi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this._i={},this.overlays={},this.ai=new Wu(0),this.ui=!1,this.ui=!0,this.ci=new $k,this.referenceDelegate=e(this),this.li=new Gk(this),this.indexManager=new Pk,this.remoteDocumentCache=function(s){return new Hk(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Rk(n),this.Pi=new zk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Bk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new qk(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new Kk(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Kk extends w2{constructor(e){super(),this.currentSequenceNumber=e}}class pp{constructor(e){this.persistence=e,this.Ri=new fp,this.Ai=null}static Vi(e){return new pp(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class du{constructor(e,n){this.persistence=e,this.fi=new Is(r=>T2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jk(this,n)}static Vi(e,n){return new du(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_l(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mp(e,n.fromCache,r,s)}}/**
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
 */class Qk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return mC()?8:E2(ut())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Qk;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ps()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ps()<=ne.DEBUG&&q("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ps()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):M.resolve())}gs(e,n){if($y(n))return M.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bd(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,bd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return $y(n)||s.isEqual(J.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(Ps()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bs(n)),this.Ds(e,o,n,g2(s,Zo)).next(l=>l))})}bs(e,n){let r=new Be(DE(e));return n.forEach((s,i)=>{Yu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ps()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",bs(n)),this.fs.getDocumentsMatchingQuery(e,n,Pr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="LocalStore",Jk=3e8;class Xk{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Se(re),this.Fs=new Is(i=>ip(i),op),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function Zk(t,e,n,r){return new Xk(t,e,n,r)}async function rx(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function eP(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let S=M.resolve();return g.forEach(N=>{S=S.next(()=>f.getEntry(u,N)).next(k=>{const P=c.docVersions.get(N);ue(P!==null,48541),k.version.compareTo(P)<0&&(m.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),f.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function sx(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function tP(t,e){const n=X(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Ze.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(m,S),function(k,P,E){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Jk?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,S,f)&&l.push(n.li.updateTargetData(i,S))});let u=zn(),c=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(nP(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(J.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function nP(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=zn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(gp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function rP(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=np),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sP(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function jd(t,e,n){const r=X(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Di(o))throw o;q(gp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function nv(t,e,n){const r=X(t);let s=J.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=X(u),g=m.Fs.get(f);return g!==void 0?M.resolve(m.vs.get(g)):m.li.getTargetData(c,f)}(r,o,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:se())).next(l=>(iP(r,q2(e),l),{documents:l,ks:i})))}function iP(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class rv{constructor(){this.activeTargetIds=Y2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oP{constructor(){this.vo=new rv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new rv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="ConnectivityMonitor";class iv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(sv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(sv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let sl=null;function Md(){return sl===null?sl=function(){return 268435456+Math.round(2147483648*Math.random())}():sl++,"0x"+sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="RestConnection",lP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===iu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Md(),l=this.Qo(e,n.toUriEncodedString());q(mh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Ri(c);return this.zo(e,l,u,r,f).then(m=>(q(mh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ys(mh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=lP[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection",ao=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class ti extends uP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ti.c_){const e=uE();ao(e,lE.STAT_EVENT,n=>{n.stat===Sd.PROXY?q(rt,"STAT_EVENT: detected buffering proxy"):n.stat===Sd.NOPROXY&&q(rt,"STAT_EVENT: detected no buffering proxy")}),ti.c_=!0}}zo(e,n,r,s,i){const o=Md();return new Promise((l,u)=>{const c=new oE;c.setWithCredentials(!0),c.listenOnce(aE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case vl.NO_ERROR:const m=c.getResponseJson();q(rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case vl.TIMEOUT:q(rt,`RPC '${e}' ${o} timed out`),u(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case vl.HTTP_ERROR:const g=c.getStatus();if(q(rt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const k=function(E){const y=E.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(y)>=0?y:L.UNKNOWN}(N.status);u(new $(k,N.message))}else u(new $(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(L.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(rt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(rt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Md(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");q(rt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,g=!1;const S=new cP({Ho:N=>{g?q(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(q(rt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),q(rt,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Jo:()=>f.close()});return ao(f,fo.EventType.OPEN,()=>{g||(q(rt,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),ao(f,fo.EventType.CLOSE,()=>{g||(g=!0,q(rt,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(f))}),ao(f,fo.EventType.ERROR,N=>{g||(g=!0,ys(rt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),S.o_(new $(L.UNAVAILABLE,"The operation could not be completed")))}),ao(f,fo.EventType.MESSAGE,N=>{var k;if(!g){const P=N.data[0];ue(!!P,16349);const E=P,y=(E==null?void 0:E.error)||((k=E[0])==null?void 0:k.error);if(y){q(rt,`RPC '${e}' stream ${s} received error:`,y);const T=y.status;let R=function(w){const v=Oe[w];if(v!==void 0)return qE(v)}(T),j=y.message;T==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ys(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),R===void 0&&(R=L.INTERNAL,j="Unknown error status: "+T+" with message "+y.message),g=!0,S.o_(new $(R,j)),f.close()}else q(rt,`RPC '${e}' stream ${s} received:`,P),S.__(P)}}),ti.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return cE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return new ti(t)}function gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){return new mk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ti.c_=!1;class ix{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="PersistentStream";class ox{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ix(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(ov,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(ov,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dP extends ox{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=vk(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?wn(o.readTime):J.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Ld(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=kd(u)?{documents:Ek(i,u)}:{query:xk(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=GE(i,o.resumeToken);const c=Dd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=hu(i,o.snapshotVersion.toTimestamp());const c=Dd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Ik(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Ld(this.serializer),n.removeTarget=e,this.K_(n)}}class fP extends ox{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=wk(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ld(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_k(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{}class mP extends pP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Vd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(L.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Vd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function gP(t,e,n,r){return new mP(t,e,n,r)}class yP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const vs="RemoteStore";class vP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ss(this)&&(q(vs,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ea.add(4),await _a(c),c.Va.set("Unknown"),c.Ea.delete(4),await tc(c)}(this))})}),this.Va=new yP(r,s)}}async function tc(t){if(Ss(t))for(const e of t.Ra)await e(!0)}async function _a(t){for(const e of t.Ra)await e(!1)}function ax(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),wp(n)?_p(n):Vi(n).O_()&&vp(n,e))}function yp(t,e){const n=X(t),r=Vi(n);n.Ia.delete(e),r.O_()&&lx(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ss(n)&&n.Va.set("Unknown"))}function vp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vi(t).Z_(e)}function lx(t,e){t.da.$e(e),Vi(t).X_(e)}function _p(t){t.da=new hk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Vi(t).start(),t.Va.ua()}function wp(t){return Ss(t)&&!Vi(t).x_()&&t.Ia.size>0}function Ss(t){return X(t).Ea.size===0}function ux(t){t.da=void 0}async function _P(t){t.Va.set("Online")}async function wP(t){t.Ia.forEach((e,n)=>{vp(t,e)})}async function EP(t,e){ux(t),wp(t)?(t.Va.ha(e),_p(t)):t.Va.set("Unknown")}async function xP(t,e,n){if(t.Va.set("Online"),e instanceof WE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){q(vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fu(t,r)}else if(e instanceof xl?t.da.Xe(e):e instanceof HE?t.da.st(e):t.da.tt(e),!n.isEqual(J.min()))try{const r=await sx(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),lx(i,u);const m=new dr(f.target,u,c,f.sequenceNumber);vp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(vs,"Failed to raise snapshot:",r),await fu(t,r)}}async function fu(t,e,n){if(!Di(e))throw e;t.Ea.add(1),await _a(t),t.Va.set("Offline"),n||(n=()=>sx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(vs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await tc(t)})}function cx(t,e){return e().catch(n=>fu(t,n,e))}async function nc(t){const e=X(t),n=Or(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:np;for(;TP(e);)try{const s=await rP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,IP(e,s)}catch(s){await fu(e,s)}hx(e)&&dx(e)}function TP(t){return Ss(t)&&t.Ta.length<10}function IP(t,e){t.Ta.push(e);const n=Or(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function hx(t){return Ss(t)&&!Or(t).x_()&&t.Ta.length>0}function dx(t){Or(t).start()}async function SP(t){Or(t).ra()}async function AP(t){const e=Or(t);for(const n of t.Ta)e.ea(n.mutations)}async function CP(t,e,n){const r=t.Ta.shift(),s=cp.from(r,e,n);await cx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await nc(t)}async function NP(t,e){e&&Or(t).Y_&&await async function(r,s){if(function(o){return lk(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Or(r).B_(),await cx(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await nc(r)}}(t,e),hx(t)&&dx(t)}async function av(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q(vs,"RemoteStore received new credentials");const r=Ss(n);n.Ea.add(3),await _a(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await tc(n)}async function RP(t,e){const n=X(t);e?(n.Ea.delete(2),await tc(n)):e||(n.Ea.add(2),await _a(n),n.Va.set("Unknown"))}function Vi(t){return t.ma||(t.ma=function(n,r,s){const i=X(n);return i.sa(),new dP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:_P.bind(null,t),Yo:wP.bind(null,t),t_:EP.bind(null,t),J_:xP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),wp(t)?_p(t):t.Va.set("Unknown")):(await t.ma.stop(),ux(t))})),t.ma}function Or(t){return t.fa||(t.fa=function(n,r,s){const i=X(n);return i.sa(),new fP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:SP.bind(null,t),t_:NP.bind(null,t),ta:AP.bind(null,t),na:CP.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await nc(t)):(await t.fa.stop(),t.Ta.length>0&&(q(vs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ep(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Di(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{static emptySet(e){return new ni(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=po(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ni)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class lv{constructor(){this.ga=new Se(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _i(e,n,ni.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class PP{constructor(){this.queries=uv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=uv(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function uv(){return new Is(t=>bE(t),Qu)}async function fx(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new kP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=xp(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Tp(n)}async function px(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bP(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Tp(n)}function DP(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Tp(t){t.Ca.forEach(e=>{e.next()})}var Fd,cv;(cv=Fd||(Fd={})).Ma="default",cv.Cache="cache";class mx{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.key=e}}class yx{constructor(e){this.key=e}}class VP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=DE(e),this.tu=new ni(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new lv,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),S=Yu(this.query,m)?m:null,N=!!g&&this.mutatedKeys.has(g.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;g&&S?g.data.isEqual(S.data)?N!==k&&(r.track({type:3,doc:S}),P=!0):this.su(g,S)||(r.track({type:2,doc:S}),P=!0,(u&&this.eu(S,u)>0||c&&this.eu(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),P=!0):g&&!S&&(r.track({type:1,doc:g}),P=!0,(u||c)&&(l=!0)),P&&(S?(o=o.add(S),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(S,N){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:P})}};return k(S)-k(N)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new _i(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new lv,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new yx(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new gx(r))}),n}cu(e){this.Za=e.ks,this.Ya=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return _i.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ip="SyncEngine";class OP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LP{constructor(e){this.key=e,this.hu=!1}}class jP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Is(l=>bE(l),Qu),this.Iu=new Map,this.Eu=new Set,this.Ru=new Se(G.comparator),this.Au=new Map,this.Vu=new fp,this.du={},this.mu=new Map,this.fu=vi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function MP(t,e,n=!0){const r=Tx(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await vx(r,e,n,!0),s}async function FP(t,e){const n=Tx(t);await vx(n,e,!0,!1)}async function vx(t,e,n,r){const s=await sP(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await UP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ax(t.remoteStore,s),l}async function UP(t,e,n,r,s){t.pu=(m,g,S)=>async function(k,P,E,y){let T=P.view.ru(E);T.Ss&&(T=await nv(k.localStore,P.query,!1).then(({documents:w})=>P.view.ru(w,T)));const R=y&&y.targetChanges.get(P.targetId),j=y&&y.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(T,k.isPrimaryClient,R,j);return dv(k,P.targetId,U.au),U.snapshot}(t,m,g,S);const i=await nv(t.localStore,e,!0),o=new VP(e,i.ks),l=o.ru(i.documents),u=va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);dv(t,n,c.au);const f=new OP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function zP(t,e,n){const r=X(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Qu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await jd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yp(r.remoteStore,s.targetId),Ud(r,s.targetId)}).catch(bi)):(Ud(r,s.targetId),await jd(r.localStore,s.targetId,!0))}async function BP(t,e){const n=X(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yp(n.remoteStore,r.targetId))}async function $P(t,e,n){const r=YP(t);try{const s=await function(o,l){const u=X(o),c=ve.now(),f=l.reduce((S,N)=>S.add(N.key),se());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=zn(),k=se();return u.xs.getEntries(S,f).next(P=>{N=P,N.forEach((E,y)=>{y.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,N)).next(P=>{m=P;const E=[];for(const y of l){const T=rk(y,m.get(y.key).overlayedDocument);T!=null&&E.push(new $r(y.key,T,IE(T.value.mapValue),$t.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,E,l)}).next(P=>{g=P;const E=P.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(S,P.batchId,E)})}).then(()=>({batchId:g.batchId,changes:OE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Se(re)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await wa(r,s.changes),await nc(r.remoteStore)}catch(s){const i=xp(s,"Failed to persist write");n.reject(i)}}async function _x(t,e){const n=X(t);try{const r=await tP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ue(o.hu,14607):s.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await wa(n,r,e)}catch(r){await bi(r)}}function hv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.ba)g.va(l)&&(c=!0)}),c&&Tp(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Se(G.comparator);o=o.insert(i,ot.newNoDocument(i,J.min()));const l=se().add(i),u=new Zu(J.min(),new Map,new Se(re),o,l);await _x(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Sp(r)}else await jd(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(bi)}async function HP(t,e){const n=X(t),r=e.batch.batchId;try{const s=await eP(n.localStore,e);Ex(n,r,null),wx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wa(n,s)}catch(s){await bi(s)}}async function WP(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ue(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);Ex(r,e,n),wx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wa(r,s)}catch(s){await bi(s)}}function wx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Ex(t,e,n){const r=X(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||xx(t,r)})}function xx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(yp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Sp(t))}function dv(t,e,n){for(const r of n)r instanceof gx?(t.Vu.addReference(r.key,e),GP(t,r)):r instanceof yx?(q(Ip,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||xx(t,r.key)):Q(19791,{wu:r})}function GP(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(Ip,"New document in limbo: "+n),t.Eu.add(r),Sp(t))}function Sp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(pe.fromString(e)),r=t.fu.next();t.Au.set(r,new LP(n)),t.Ru=t.Ru.insert(n,r),ax(t.remoteStore,new dr(_n(ap(n.path)),r,"TargetPurposeLimboResolution",Wu.ce))}}async function wa(t,e,n){const r=X(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=mp.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(c,g=>M.forEach(g.Ts,S=>f.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>M.forEach(g.Is,S=>f.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!Di(m))throw m;q(gp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const S=f.vs.get(g),N=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(N);f.vs=f.vs.insert(g,k)}}}(r.localStore,i))}async function KP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q(Ip,"User change. New user:",e.toKey());const r=await rx(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new $(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wa(n,r.Ns)}}function QP(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let s=se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Tx(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_x.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qP.bind(null,e),e.Pu.J_=bP.bind(null,e.eventManager),e.Pu.yu=DP.bind(null,e.eventManager),e}function YP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WP.bind(null,e),e}class pu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Zk(this.persistence,new Yk,e.initialUser,this.serializer)}Cu(e){return new nx(pp.Vi,this.serializer)}Du(e){return new oP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pu.provider={build:()=>new pu};class JP extends pu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ue(this.persistence.referenceDelegate instanceof du,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ok(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new nx(r=>du.Vi(r,n),this.serializer)}}class zd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KP.bind(null,this.syncEngine),await RP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PP}()}createDatastore(e){const n=ec(e.databaseInfo.databaseId),r=hP(e.databaseInfo);return gP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new vP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>hv(this.syncEngine,n,0),function(){return iv.v()?new iv:new aP}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new jP(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);q(vs,"RemoteStore shutting down."),i.Ea.add(5),await _a(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}zd.provider={build:()=>new zd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ix{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="FirestoreClient";class XP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=tp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(Lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yh(t,e){t.asyncQueue.verifyOperationInProgress(),q(Lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rx(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZP(t);q(Lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>av(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>av(e.remoteStore,s)),t._onlineComponents=e}async function ZP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Lr,"Using user provided OfflineComponentProvider");try{await yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await yh(t,new pu)}}else q(Lr,"Using default OfflineComponentProvider"),await yh(t,new JP(void 0));return t._offlineComponents}async function Sx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Lr,"Using user provided OnlineComponentProvider"),await fv(t,t._uninitializedComponentsProvider._online)):(q(Lr,"Using default OnlineComponentProvider"),await fv(t,new zd))),t._onlineComponents}function eb(t){return Sx(t).then(e=>e.syncEngine)}async function Ax(t){const e=await Sx(t),n=e.eventManager;return n.onListen=MP.bind(null,e.syncEngine),n.onUnlisten=zP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BP.bind(null,e.syncEngine),n}function tb(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Ix({next:g=>{f.Nu(),o.enqueueAndForget(()=>px(i,m));const S=g.docs.has(l);!S&&g.fromCache?c.reject(new $(L.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?c.reject(new $(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new mx(ap(l.path),f,{includeMetadataChanges:!0,Ka:!0});return fx(i,m)}(await Ax(t),t.asyncQueue,e,n,r)),r.promise}function nb(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Ix({next:g=>{f.Nu(),o.enqueueAndForget(()=>px(i,m)),g.fromCache&&u.source==="server"?c.reject(new $(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new mx(l,f,{includeMetadataChanges:!0,Ka:!0});return fx(i,m)}(await Ax(t),t.asyncQueue,e,n,r)),r.promise}function rb(t,e){const n=new Dn;return t.asyncQueue.enqueueAndForget(async()=>$P(await eb(t),e,n)),n.promise}/**
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
 */function Cx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="ComponentProvider",pv=new Map;function ib(t,e,n,r,s){return new A2(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Cx(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="firestore.googleapis.com",mv=!0;class gv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nx,this.ssl=mv}else this.host=e.host,this.ssl=e.ssl??mv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Dk)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cx(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new i2;switch(r.type){case"firstParty":return new u2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pv.get(n);r&&(q(sb,"Removing Datastore"),pv.delete(n),r.terminate())}(this),Promise.resolve()}}function ob(t,e,n,r={}){var c;t=an(t,rc);const s=Ri(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Cw(`https://${l}`),Nw("Firestore",!0)),i.host!==Nx&&i.host!==l&&ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!kr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=st.MOCK_USER;else{f=aC(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new st(g)}t._authCredentials=new o2(new dE(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oi(this.firestore,e,this._query)}}class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}toJSON(){return{type:De._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ma(n,De._jsonSchema))return new De(e,r||null,new G(pe.fromString(n.referencePath)))}}De._jsonSchemaVersion="firestore/documentReference/1.0",De._jsonSchema={type:Me("string",De._jsonSchemaVersion),referencePath:Me("string")};class Ar extends Oi{constructor(e,n,r){super(e,n,ap(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new G(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function at(t,e,...n){if(t=Ge(t),fE("collection","path",e),t instanceof rc){const r=pe.fromString(e,...n);return Ry(r),new Ar(t,null,r)}{if(!(t instanceof De||t instanceof Ar))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Ry(r),new Ar(t.firestore,null,r)}}function qt(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=tp.newId()),fE("doc","path",e),t instanceof rc){const r=pe.fromString(e,...n);return Ny(r),new De(t,null,new G(r))}{if(!(t instanceof De||t instanceof Ar))throw new $(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Ny(r),new De(t.firestore,t instanceof Ar?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="AsyncQueue";class vv{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ix(this,"async_queue_retry"),this._c=()=>{const r=gh();r&&q(yv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=gh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Dn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Di(e))throw e;q(yv,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Un("INTERNAL UNHANDLED ERROR: ",_v(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ep.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:_v(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function _v(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class As extends rc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vv(e),this._firestoreClient=void 0,await e}}}function ab(t,e){const n=typeof t=="object"?t:Gf(),r=typeof t=="string"?t:iu,s=Ts(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=iC("firestore");i&&ob(s,...i)}return s}function Ap(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lb(t),t._firestoreClient}function lb(t){var r,s,i,o;const e=t._freezeSettings(),n=ib(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new XP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(Ze.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ma(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:Me("string",jt._jsonSchemaVersion),bytes:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(ma(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:Me("string",En._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
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
 */class rn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ma(e,rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new rn(e.vectorValues);throw new $(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rn._jsonSchemaVersion="firestore/vectorValue/1.0",rn._jsonSchema={type:Me("string",rn._jsonSchemaVersion),vectorValues:Me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=/^__.*__$/;class cb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new ya(e,this.data,n,this.fieldTransforms)}}class Rx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class Rp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Rp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return mu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(kx(this.dataSource)&&ub.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class hb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}createContext(e,n,r,s=!1){return new Rp({dataSource:e,methodName:n,targetDoc:r,path:Ye.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sc(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new hb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Px(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);kp("Data must be an object, but it was:",o,r);const l=bx(r,o);let u,c;if(i.merge)u=new Ct(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=wi(e,m,n);if(!o.contains(g))throw new $(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ox(f,g)||f.push(g)}u=new Ct(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new cb(new _t(l),u,c)}class ic extends Np{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}function db(t,e,n,r){const s=t.createContext(1,e,n);kp("Data must be an object, but it was:",s,r);const i=[],o=_t.empty();Br(r,(u,c)=>{const f=Vx(e,u,n);c=Ge(c);const m=s.childContextForFieldPath(f);if(c instanceof ic)i.push(f);else{const g=Ea(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ct(i);return new Rx(o,l,s.fieldTransforms)}function fb(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[wi(e,r,n)],u=[s];if(i.length%2!=0)throw new $(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(wi(e,i[g])),u.push(i[g+1]);const c=[],f=_t.empty();for(let g=l.length-1;g>=0;--g)if(!Ox(c,l[g])){const S=l[g];let N=u[g];N=Ge(N);const k=o.childContextForFieldPath(S);if(N instanceof ic)c.push(S);else{const P=Ea(N,k);P!=null&&(c.push(S),f.set(S,P))}}const m=new Ct(c);return new Rx(f,m,o.fieldTransforms)}function pb(t,e,n,r=!1){return Ea(n,t.createContext(r?4:3,e))}function Ea(t,e){if(Dx(t=Ge(t)))return kp("Unsupported field value:",e,t),bx(t,e);if(t instanceof Np)return function(r,s){if(!kx(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Ea(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return J2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ve.fromDate(r);return{timestampValue:hu(s.serializer,i)}}if(r instanceof ve){const i=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hu(s.serializer,i)}}if(r instanceof En)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jt)return{bytesValue:GE(s.serializer,r._byteString)};if(r instanceof De){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rn)return function(o,l){const u=o instanceof rn?o.toArray():o;return{mapValue:{fields:{[xE]:{stringValue:TE},[ou]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return lp(l.serializer,f)})}}}}}}(r,s);if(ex(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Hu(r)}`)}(t,e)}function bx(t,e){const n={};return gE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=Ea(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Dx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof En||t instanceof jt||t instanceof De||t instanceof Np||t instanceof rn||ex(t))}function kp(t,e,n){if(!Dx(n)||!pE(n)){const r=Hu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function wi(t,e,n){if((e=Ge(e))instanceof Cp)return e._internalPath;if(typeof e=="string")return Vx(t,e);throw mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const mb=new RegExp("[~\\*/\\[\\]]");function Vx(t,e,n){if(e.search(mb)>=0)throw mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cp(...e.split("."))._internalPath}catch{throw mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(L.INVALID_ARGUMENT,l+t+u)}function Ox(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ou].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Pe(o.doubleValue));return new rn(n)}convertGeoPoint(e){return new En(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ku(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){const n=br(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ue(ZE(r),9688,{name:e});const s=new ta(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Lx extends gb{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}const wv="@firebase/firestore",Ev="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(wi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yb extends jx{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pp{}class _b extends Pp{}function fr(t,e,...n){let r=[];e instanceof Pp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof bp).length,l=i.filter(u=>u instanceof oc).length;if(o>1||o>0&&l>0)throw new $(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class oc extends _b{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new oc(e,n,r)}_apply(e){const n=this._parse(e);return Mx(e._query,n),new Oi(e.firestore,e.converter,Pd(e._query,n))}_parse(e){const n=sc(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Tv(m,f);const N=[];for(const k of m)N.push(xv(u,i,k));g={arrayValue:{values:N}}}else g=xv(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Tv(m,f),g=pb(l,o,m,f==="in"||f==="not-in");return je.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zt(t,e,n){const r=e,s=wi("where",t);return oc._create(s,r,n)}class bp extends Pp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Mx(o,u),o=Pd(o,u)}(e._query,n),new Oi(e.firestore,e.converter,Pd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xv(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new $(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PE(e)&&n.indexOf("/")!==-1)throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!G.isDocumentKey(r))throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jy(t,new G(r))}if(n instanceof De)return jy(t,n._key);throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hu(n)}.`)}function Tv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mx(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Fx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends jx{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=as._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}as._jsonSchemaVersion="firestore/documentSnapshot/1.0",as._jsonSchema={type:Me("string",as._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class Tl extends as{data(e={}){return super.data(e)}}class ri{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new go(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Tl(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Tl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new go(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Tl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new go(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:wb(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ri._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */function Ux(t){t=an(t,De);const e=an(t.firestore,As),n=Ap(e);return tb(n,t._key).then(r=>xb(e,t,r))}function Mt(t){t=an(t,Oi);const e=an(t.firestore,As),n=Ap(e),r=new Lx(e);return vb(t._query),nb(n,t._query).then(s=>new ri(e,r,t,s))}function Eb(t,e,n){t=an(t,De);const r=an(t.firestore,As),s=Fx(t.converter,e),i=sc(r);return lc(r,[Px(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,$t.none())])}function ia(t,e,n,...r){t=an(t,De);const s=an(t.firestore,As),i=sc(s);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Cp?fb(i,"updateDoc",t._key,e,n,r):db(i,"updateDoc",t._key,e),lc(s,[o.toMutation(t._key,$t.exists(!0))])}function Dp(t){return lc(an(t.firestore,As),[new up(t._key,$t.none())])}function ac(t,e){const n=an(t.firestore,As),r=qt(t),s=Fx(t.converter,e),i=sc(t.firestore);return lc(n,[Px(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function lc(t,e){const n=Ap(t);return rb(n,e)}function xb(t,e,n){const r=n.docs.get(e._key),s=new Lx(t);return new as(t,s,e._key,r,new go(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){s2(ki),In(new on("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new As(new a2(r.getProvider("auth-internal")),new c2(o,r.getProvider("app-check-internal")),C2(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Bt(wv,Ev,e),Bt(wv,Ev,"esm2020")})();function zx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tb=zx,Bx=new xs("auth","Firebase",zx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Bu("@firebase/auth");function Ib(t,...e){gu.logLevel<=ne.WARN&&gu.warn(`Auth (${ki}): ${t}`,...e)}function Il(t,...e){gu.logLevel<=ne.ERROR&&gu.error(`Auth (${ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw Vp(t,...e)}function xn(t,...e){return Vp(t,...e)}function $x(t,e,n){const r={...Tb(),[e]:n};return new xs("auth","Firebase",r).create(e,{appName:t.name})}function ls(t){return $x(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bx.create(t,...e)}function Y(t,e,...n){if(!t)throw Vp(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Il(e),new Error(e)}function $n(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Sb(){return Iv()==="http:"||Iv()==="https:"}function Iv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sb()||Rw()||"connection"in navigator)?navigator.onLine:!0}function Cb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=cC()||fC()}get(){return Ab()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kb=new xa(3e4,6e4);function Lp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Li(t,e,n,r,s={}){return Hx(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return dC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(c.credentials="include"),qx.fetch()(await Wx(t,t.config.apiHost,n,l),c)})}async function Hx(t,e,n){t._canInitEmulator=!1;const r={...Nb,...e};try{const s=new bb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw il(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw il(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw il(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $x(t,f,c);Bn(t,f)}}catch(s){if(s instanceof un)throw s;Bn(t,"network-request-failed",{message:String(s)})}}async function Pb(t,e,n,r,s={}){const i=await Li(t,e,n,r,s);return"mfaPendingCredential"in i&&Bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wx(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Op(t.config,s):`${t.config.apiScheme}://${s}`;return Rb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class bb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),kb.get())})}}function il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e){return Li(t,"POST","/v1/accounts:delete",e)}async function yu(t,e){return Li(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vb(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=jp(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Po(vh(s.auth_time)),issuedAtTime:Po(vh(s.iat)),expirationTime:Po(vh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vh(t){return Number(t)*1e3}function jp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tw(n);return s?JSON.parse(s):(Il("Failed to decode base64 JWT payload"),null)}catch(s){return Il("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sv(t){const e=jp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&Ob(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ob({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await oa(t,yu(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Gx(s.providerUserInfo):[],o=Mb(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new $d(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function jb(t){const e=Ge(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gx(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e){const n=await Hx(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Wx(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(u.credentials="include"),qx.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ub(t,e){return Li(t,"POST","/v2/accounts:revokeToken",Lp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Sv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Fb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new si;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Lb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $d(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await oa(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vb(this,e)}reload(){return jb(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(ls(this.auth));const e=await this.getIdToken();return await oa(this,Db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:S,providerData:N,stsTokenManager:k}=n;Y(m&&k,e,"internal-error");const P=si.fromJSON(this.name,k);Y(typeof m=="string",e,"internal-error"),Zn(r,e.name),Zn(s,e.name),Y(typeof g=="boolean",e,"internal-error"),Y(typeof S=="boolean",e,"internal-error"),Zn(i,e.name),Zn(o,e.name),Zn(l,e.name),Zn(u,e.name),Zn(c,e.name),Zn(f,e.name);const E=new en({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:f});return N&&Array.isArray(N)&&(E.providerData=N.map(y=>({...y}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new si;s.updateFromServerResponse(n);const i=new en({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gx(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new si;l.updateFromIdToken(r);const u=new en({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $d(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new Map;function Pn(t){$n(t instanceof Function,"Expected a class definition");let e=Av.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Av.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kx.type="NONE";const Cv=Kx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e,n){return`firebase:${t}:${e}:${n}`}class ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Sl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Sl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yu(this.auth,{idToken:e}).catch(()=>{});return n?en._fromGetAccountInfoResponse(this.auth,n,e):null}return en._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ii(Pn(Cv),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Pn(Cv);const o=Sl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await yu(e,{idToken:f}).catch(()=>{});if(!g)break;m=await en._fromGetAccountInfoResponse(e,g,f)}else m=en._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ii(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ii(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eT(e))return"Blackberry";if(tT(e))return"Webos";if(Yx(e))return"Safari";if((e.includes("chrome/")||Jx(e))&&!e.includes("edge/"))return"Chrome";if(Zx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qx(t=ut()){return/firefox\//i.test(t)}function Yx(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jx(t=ut()){return/crios\//i.test(t)}function Xx(t=ut()){return/iemobile/i.test(t)}function Zx(t=ut()){return/android/i.test(t)}function eT(t=ut()){return/blackberry/i.test(t)}function tT(t=ut()){return/webos/i.test(t)}function Mp(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zb(t=ut()){var e;return Mp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Bb(){return pC()&&document.documentMode===10}function nT(t=ut()){return Mp(t)||Zx(t)||tT(t)||eT(t)||/windows phone/i.test(t)||Xx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e=[]){let n;switch(t){case"Browser":n=Nv(ut());break;case"Worker":n=`${Nv(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}/**
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
 */class $b{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qb(t,e={}){return Li(t,"GET","/v2/passwordPolicy",Lp(t,e))}/**
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
 */const Hb=6;class Wb{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Hb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rv(this),this.idTokenSubscription=new Rv(this),this.beforeStateQueue=new $b(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yu(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(ls(this));const n=e?Ge(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(ls(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(ls(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qb(this),n=new Wb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ub(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ib(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fp(t){return Ge(t)}class Rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=EC(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kb(t){Up=t}function Qb(t){return Up.loadJS(t)}function Yb(){return Up.gapiScript}function Jb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t,e){const n=Ts(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(kr(i,e??{}))return s;Bn(s,"already-initialized")}return n.initialize({options:e})}function Zb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eD(t,e,n){const r=Fp(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sT(e),{host:o,port:l}=tD(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(kr(c,r.config.emulator)&&kr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ri(o)?(Cw(`${i}//${o}${u}`),Nw("Auth",!0)):nD()}function sT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tD(t){const e=sT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kv(o)}}}function kv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return Pb(t,"POST","/v1/accounts:signInWithIdp",Lp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="http://localhost";class _s extends iT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new _s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:rD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends oT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Ta{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ta{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ta{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await en._fromIdTokenResponse(e,r,s),o=Pv(r);return new Ei({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Pv(r);return new Ei({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Pv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _u(e,n,r,s)}}function aT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,i,e,r):i})}async function sD(t,e,n=!1){const r=await oa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(ls(r));const s="reauthenticate";try{const i=await oa(t,aT(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=jp(i.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Ei._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(t,e,n=!1){if(gn(t.app))return Promise.reject(ls(t));const r="signIn",s=await aT(t,r,e),i=await Ei._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function aD(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function lD(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}const wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=1e3,cD=10;class uT extends lT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Bb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cD):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uT.type="LOCAL";const hD=uT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT extends lT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cT.type="SESSION";const hT=cT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await dD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=zp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function pD(t){Tn().location.href=t}/**
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
 */function dT(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function mD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function yD(){return dT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="firebaseLocalStorageDb",vD=1,Eu="firebaseLocalStorage",pT="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function _D(){const t=indexedDB.deleteDatabase(fT);return new Ia(t).toPromise()}function qd(){const t=indexedDB.open(fT,vD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:pT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await _D(),e(await qd()))})})}async function bv(t,e,n){const r=cc(t,!0).put({[pT]:e,value:n});return new Ia(r).toPromise()}async function wD(t,e){const n=cc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function Dv(t,e){const n=cc(t,!0).delete(e);return new Ia(n).toPromise()}const ED=800,xD=3;class mT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(yD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await mD(),!this.activeServiceWorker)return;this.sender=new fD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qd();return await bv(e,wu,"1"),await Dv(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cc(s,!1).getAll();return new Ia(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ED)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mT.type="LOCAL";const TD=mT;new xa(3e4,6e4);/**
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
 */function ID(t,e){return e?Pn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends iT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SD(t){return oD(t.auth,new Bp(t),t.bypassAuthState)}function AD(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),iD(n,new Bp(t),t.bypassAuthState)}async function CD(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),sD(n,new Bp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SD;case"linkViaPopup":case"linkViaRedirect":return CD;case"reauthViaPopup":case"reauthViaRedirect":return AD;default:Bn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=new xa(2e3,1e4);class Gs extends gT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=zp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ND.get())};e()}}Gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD="pendingRedirect",Al=new Map;class kD extends gT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Al.get(this.auth._key());if(!e){try{const r=await PD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Al.set(this.auth._key(),e)}return this.bypassAuthState||Al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PD(t,e){const n=VD(e),r=DD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bD(t,e){Al.set(t._key(),e)}function DD(t){return Pn(t._redirectPersistence)}function VD(t){return Sl(RD,t.config.apiKey,t.name)}async function OD(t,e,n=!1){if(gn(t.app))return Promise.reject(ls(t));const r=Fp(t),s=ID(r,e),o=await new kD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=10*60*1e3;class jD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vv(e))}saveEventToCache(e){this.cachedEventUids.add(Vv(e)),this.lastProcessedEventTime=Date.now()}}function Vv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FD(t,e={}){return Li(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zD=/^https?/;async function BD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FD(t);for(const n of e)try{if($D(n))return}catch{}Bn(t,"unauthorized-domain")}function $D(t){const e=Bd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zD.test(n))return!1;if(UD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qD=new xa(3e4,6e4);function Ov(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HD(t){return new Promise((e,n)=>{var s,i,o;function r(){Ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ov(),n(xn(t,"network-request-failed"))},timeout:qD.get()})}if((i=(s=Tn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Tn().gapi)!=null&&o.load)r();else{const l=Jb("iframefcb");return Tn()[l]=()=>{gapi.load?r():n(xn(t,"network-request-failed"))},Qb(`${Yb()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Cl=null,e})}let Cl=null;function WD(t){return Cl=Cl||HD(t),Cl}/**
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
 */const GD=new xa(5e3,15e3),KD="__/auth/iframe",QD="emulator/auth/iframe",YD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XD(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Op(e,QD):`https://${t.config.authDomain}/${KD}`,r={apiKey:e.apiKey,appName:t.name,v:ki},s=JD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pa(r).slice(1)}`}async function ZD(t){const e=await WD(t),n=Tn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:XD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),l=Tn().setTimeout(()=>{i(o)},GD.get());function u(){Tn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const e4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t4=500,n4=600,r4="_blank",s4="http://localhost";class Lv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function i4(t,e,n,r=t4,s=n4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...e4,width:r.toString(),height:s.toString(),top:i,left:o},c=ut().toLowerCase();n&&(l=Jx(c)?r4:n),Qx(c)&&(e=e||s4,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,N])=>`${g}${S}=${N},`,"");if(zb(c)&&l!=="_self")return o4(e||"",l),new Lv(null);const m=window.open(e||"",l,f);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new Lv(m)}function o4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const a4="__/auth/handler",l4="emulator/auth/handler",u4=encodeURIComponent("fac");async function jv(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:s};if(e instanceof oT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ta){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${u4}=${encodeURIComponent(u)}`:"";return`${c4(t)}?${pa(l).slice(1)}${c}`}function c4({config:t}){return t.emulator?Op(t,l4):`https://${t.authDomain}/${a4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="webStorageSupport";class h4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hT,this._completeRedirectFn=OD,this._overrideRedirectResult=bD}async _openPopup(e,n,r,s){var o;$n((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await jv(e,n,r,Bd(),s);return i4(e,i,zp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jv(e,n,r,Bd(),s);return pD(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZD(e),r=new jD(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[_h];i!==void 0&&n(!!i),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nT()||Yx()||Mp()}}const d4=h4;var Mv="@firebase/auth",Fv="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m4(t){In(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rT(t)},c=new Gb(r,s,i,u);return Zb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new on("auth-internal",e=>{const n=Fp(e.getProvider("auth").getImmediate());return(r=>new f4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Mv,Fv,p4(t)),Bt(Mv,Fv,"esm2020")}/**
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
 */const g4=5*60,y4=Aw("authIdTokenMaxAge")||g4;let Uv=null;const v4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>y4)return;const s=n==null?void 0:n.token;Uv!==s&&(Uv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _4(t=Gf()){const e=Ts(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xb(t,{popupRedirectResolver:d4,persistence:[TD,hD,hT]}),r=Aw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=v4(i.toString());lD(n,o,()=>o(n.currentUser)),aD(n,l=>o(l))}}const s=Iw("auth");return s&&eD(n,`http://${s}`),n}function w4(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Kb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",w4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m4("Browser");const E4={apiKey:"AIzaSyD9qeU8nNWLWaR_NO56dpvuGxKvC6DWnEo",authDomain:"qlnhansu123go.firebaseapp.com",projectId:"qlnhansu123go",storageBucket:"qlnhansu123go.firebasestorage.app",messagingSenderId:"1077518563443",appId:"1:1077518563443:web:a7b3adc2ef62438e8b1206",measurementId:"G-3Q6L1TN3TE"},$p=Ow(E4);ZR($p);const de=ab($p);_4($p);const fe={DRIVERS:"drivers",DEPOSITS:"deposits",REVENUE:"revenue",NIGHT_SHIFTS:"nightShifts",SETTINGS:"settings"},zv={driverSharePercent:60,companySharePercent:40},xi={get:async()=>{try{const t=qt(de,fe.SETTINGS,"config"),e=await Ux(t);return e.exists()?e.data():zv}catch(t){return console.error("Error getting settings:",t),zv}},save:async t=>{try{const e=qt(de,fe.SETTINGS,"config");return await Eb(e,t),!0}catch(e){return console.error("Error saving settings:",e),!1}}},Vn={getAll:async()=>{try{return(await Mt(at(de,fe.DRIVERS))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting drivers:",t),[]}},getById:async t=>{try{const e=qt(de,fe.DRIVERS,t),n=await Ux(e);return n.exists()?{id:n.id,...n.data()}:null}catch(e){return console.error("Error getting driver:",e),null}},add:async t=>{try{const e={...t,createdAt:new Date().toISOString().split("T")[0]};return{id:(await ac(at(de,fe.DRIVERS),e)).id,...e}}catch(e){return console.error("Error adding driver:",e),null}},update:async(t,e)=>{try{const n=qt(de,fe.DRIVERS,t);return await ia(n,e),{id:t,...e}}catch(n){return console.error("Error updating driver:",n),null}},delete:async t=>{try{return await Dp(qt(de,fe.DRIVERS,t)),!0}catch(e){return console.error("Error deleting driver:",e),!1}}},Ti={getAll:async()=>{try{return(await Mt(at(de,fe.DEPOSITS))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting deposits:",t),[]}},getByDriverId:async t=>{try{const e=fr(at(de,fe.DEPOSITS),Zt("driverId","==",t)),n=await Mt(e);return n.docs.length>0?{id:n.docs[0].id,...n.docs[0].data()}:null}catch(e){return console.error("Error getting deposit:",e),null}},update:async(t,e)=>{try{const n=await Ti.getByDriverId(t);if(n){const r=e>=n.requiredAmount?"paid":e>0?"partial":"unpaid",s={paidAmount:e,status:r,lastPaymentDate:new Date().toISOString().split("T")[0]};return await ia(qt(de,fe.DEPOSITS,n.id),s),{...n,...s}}return null}catch(n){return console.error("Error updating deposit:",n),null}},createForDriver:async t=>{try{const e={driverId:t.id,driverName:t.name,requiredAmount:5e6,paidAmount:0,status:"unpaid",lastPaymentDate:null};return{id:(await ac(at(de,fe.DEPOSITS),e)).id,...e}}catch(e){return console.error("Error creating deposit:",e),null}}},aa={getAll:async()=>{try{return(await Mt(at(de,fe.REVENUE))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting revenue:",t),[]}},getByVehicleCode:async t=>{try{const e=fr(at(de,fe.REVENUE),Zt("vehicleCode","==",t));return(await Mt(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error getting revenue by vehicle:",e),[]}},getByMonth:async t=>{try{const e=fr(at(de,fe.REVENUE),Zt("month","==",t));return(await Mt(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error getting revenue by month:",e),[]}},add:async t=>{try{const e=fr(at(de,fe.REVENUE),Zt("vehicleCode","==",t.vehicleCode),Zt("month","==",t.month)),n=await Mt(e);if(n.docs.length>0){const i=qt(de,fe.REVENUE,n.docs[0].id);return await ia(i,t),{id:n.docs[0].id,...t}}const r={...t,bonus:t.bonus||0,penalty:t.penalty||0};return{id:(await ac(at(de,fe.REVENUE),r)).id,...r}}catch(e){return console.error("Error adding revenue:",e),null}},update:async(t,e)=>{try{const n=qt(de,fe.REVENUE,t);return await ia(n,e),{id:t,...e}}catch(n){return console.error("Error updating revenue:",n),null}},delete:async t=>{try{return await Dp(qt(de,fe.REVENUE,t)),!0}catch(e){return console.error("Error deleting revenue:",e),!1}},calculateNet:async t=>{const e=await xi.get();return t.amount*e.driverSharePercent/100+(t.bonus||0)-(t.penalty||0)}},lr={getAll:async()=>{try{return(await Mt(at(de,fe.NIGHT_SHIFTS))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("Error getting night shifts:",t),[]}},getByDate:async t=>{try{const e=fr(at(de,fe.NIGHT_SHIFTS),Zt("date","==",t));return(await Mt(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error getting shifts by date:",e),[]}},getByMonth:async t=>{try{return(await lr.getAll()).filter(n=>n.date.startsWith(t))}catch(e){return console.error("Error getting shifts by month:",e),[]}},getByDriver:async t=>{try{const e=fr(at(de,fe.NIGHT_SHIFTS),Zt("driverId","==",t));return(await Mt(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error getting shifts by driver:",e),[]}},add:async t=>{try{const e=fr(at(de,fe.NIGHT_SHIFTS),Zt("date","==",t.date),Zt("driverId","==",t.driverId)),n=await Mt(e);if(n.docs.length>0)return{id:n.docs[0].id,...n.docs[0].data()};const r={...t,status:"scheduled"};return{id:(await ac(at(de,fe.NIGHT_SHIFTS),r)).id,...r}}catch(e){return console.error("Error adding shift:",e),null}},remove:async(t,e)=>{try{const n=fr(at(de,fe.NIGHT_SHIFTS),Zt("date","==",t),Zt("driverId","==",e)),r=await Mt(n);for(const s of r.docs)await Dp(qt(de,fe.NIGHT_SHIFTS,s.id));return!0}catch(n){return console.error("Error removing shift:",n),!1}},updateStatus:async(t,e)=>{try{const n=qt(de,fe.NIGHT_SHIFTS,t);return await ia(n,{status:e}),{id:t,status:e}}catch(n){return console.error("Error updating shift status:",n),null}},countByDriverMonth:async(t,e)=>(await lr.getByMonth(e)).filter(r=>r.driverId===t).length};function x4(){const[t,e]=O.useState({totalDrivers:0,monthlyRevenue:0,totalDeposits:0,paidDeposits:0}),[n,r]=O.useState([]),[s,i]=O.useState(!0);O.useEffect(()=>{o()},[]);const o=async()=>{i(!0);try{const c=await Vn.getAll(),f=await Ti.getAll(),m=await aa.getAll(),g=new Date().toISOString().slice(0,7),S=m.filter(N=>N.month===g).reduce((N,k)=>N+(k.amount||0),0);e({totalDrivers:c.length,monthlyRevenue:S,totalDeposits:f.reduce((N,k)=>N+(k.paidAmount||0),0),paidDeposits:f.filter(N=>N.status==="paid").length}),r(c.slice(-5).reverse())}catch(c){console.error("Error loading dashboard data:",c)}i(!1)},l=c=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(c),u=[{title:"Tổng tài xế",value:t.totalDrivers,icon:_w,color:"bg-blue-500",change:"+2",changeType:"up"},{title:"Doanh thu tháng",value:l(t.monthlyRevenue),icon:Jo,color:"bg-taxi-500",change:"+12%",changeType:"up"},{title:"Tiền cọc đã thu",value:l(t.totalDeposits),icon:Hf,color:"bg-green-500",change:`${t.paidDeposits}/${t.totalDrivers}`,changeType:"neutral"},{title:"Xe đang hoạt động",value:t.totalDrivers,icon:Rr,color:"bg-purple-500",change:"100%",changeType:"up"}];return s?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in",children:[d.jsxs("div",{className:"mb-8",children:[d.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Dashboard"}),d.jsx("p",{className:"text-gray-500 mt-1",children:"Tổng quan hoạt động công ty taxi"})]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8",children:u.map((c,f)=>{const m=c.icon;return d.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300",children:[d.jsxs("div",{className:"flex items-start justify-between mb-4",children:[d.jsx("div",{className:`${c.color} p-3 rounded-xl`,children:d.jsx(m,{className:"text-white",size:24})}),d.jsxs("div",{className:`flex items-center gap-1 text-sm ${c.changeType==="up"?"text-green-600":c.changeType==="down"?"text-red-600":"text-gray-500"}`,children:[c.changeType==="up"&&d.jsx(bA,{size:16}),c.changeType==="down"&&d.jsx(PA,{size:16}),d.jsx("span",{children:c.change})]})]}),d.jsx("h3",{className:"text-gray-500 text-sm font-medium",children:c.title}),d.jsx("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:c.value})]},f)})}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[d.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Thao tác nhanh"}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs(zt,{to:"/drivers/new",className:"flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-taxi-500 to-taxi-600 text-white hover:from-taxi-600 hover:to-taxi-700 transition-all duration-300 group",children:[d.jsx("div",{className:"p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform",children:d.jsx($f,{size:20})}),d.jsx("span",{className:"font-medium",children:"Thêm tài xế"})]}),d.jsxs(zt,{to:"/revenue/new",className:"flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group",children:[d.jsx("div",{className:"p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform",children:d.jsx(Jo,{size:20})}),d.jsx("span",{className:"font-medium",children:"Nhập doanh thu"})]})]})]}),d.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Tài xế mới"}),d.jsx(zt,{to:"/drivers",className:"text-taxi-600 text-sm font-medium hover:underline",children:"Xem tất cả"})]}),d.jsxs("div",{className:"space-y-3",children:[n.map(c=>{var f;return d.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors",children:[d.jsx("div",{className:"w-10 h-10 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold",children:(f=c.name)==null?void 0:f.charAt(0)}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("p",{className:"font-medium text-gray-900 truncate",children:c.name}),d.jsx("p",{className:"text-sm text-gray-500",children:c.licensePlate})]}),d.jsx("span",{className:"text-xs text-gray-400",children:c.vehicleCode})]},c.id)}),n.length===0&&d.jsx("p",{className:"text-gray-500 text-center py-4",children:"Chưa có tài xế nào"})]})]})]})]})}function T4(){const[t,e]=O.useState([]),[n,r]=O.useState(""),[s,i]=O.useState(null),[o,l]=O.useState(!0);O.useEffect(()=>{u()},[]);const u=async()=>{l(!0);const m=await Vn.getAll();e(m),l(!1)},c=async m=>{await Vn.delete(m),await u(),i(null)},f=t.filter(m=>{var g,S,N;return((g=m.name)==null?void 0:g.toLowerCase().includes(n.toLowerCase()))||((S=m.licensePlate)==null?void 0:S.toLowerCase().includes(n.toLowerCase()))||((N=m.vehicleCode)==null?void 0:N.toLowerCase().includes(n.toLowerCase()))});return o?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Quản lý tài xế"}),d.jsxs("p",{className:"text-gray-500 mt-1",children:["Danh sách ",t.length," tài xế"]})]}),d.jsxs(zt,{to:"/drivers/new",className:"inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30",children:[d.jsx($f,{size:20}),d.jsx("span",{children:"Thêm tài xế"})]})]}),d.jsx("div",{className:"bg-white rounded-2xl p-4 mb-6 shadow-sm",children:d.jsxs("div",{className:"relative",children:[d.jsx(WA,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:20}),d.jsx("input",{type:"text",placeholder:"Tìm kiếm...",value:n,onChange:m=>r(m.target.value),className:"w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none"})]})}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[d.jsx("div",{className:"hidden lg:block overflow-x-auto",children:d.jsxs("table",{className:"w-full",children:[d.jsx("thead",{className:"bg-gray-50 border-b",children:d.jsxs("tr",{children:[d.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-gray-600",children:"Tài xế"}),d.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-gray-600",children:"Biển số"}),d.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-gray-600",children:"Loại xe"}),d.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-gray-600",children:"Mã xe"}),d.jsx("th",{className:"text-right px-6 py-4 text-sm font-semibold text-gray-600",children:"Thao tác"})]})}),d.jsx("tbody",{className:"divide-y",children:f.map(m=>{var g;return d.jsxs("tr",{className:"hover:bg-gray-50",children:[d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"flex items-center gap-3",children:[m.avatar?d.jsx("img",{src:m.avatar,alt:m.name,className:"w-10 h-10 rounded-full object-cover"}):d.jsx("div",{className:"w-10 h-10 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold",children:(g=m.name)==null?void 0:g.charAt(0)}),d.jsx("span",{className:"font-medium text-gray-900",children:m.name})]})}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("span",{className:"inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm",children:[d.jsx(Rr,{size:14}),m.licensePlate]})}),d.jsx("td",{className:"px-6 py-4 text-gray-600",children:m.vehicleType}),d.jsx("td",{className:"px-6 py-4 font-mono text-sm text-gray-600",children:m.vehicleCode}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"flex items-center justify-end gap-2",children:[d.jsx(zt,{to:`/drivers/edit/${m.id}`,className:"p-2 text-gray-500 hover:text-taxi-600 hover:bg-taxi-50 rounded-lg",children:d.jsx(gd,{size:18})}),d.jsx("button",{onClick:()=>i(m.id),className:"p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg",children:d.jsx(yd,{size:18})})]})})]},m.id)})})]})}),d.jsx("div",{className:"lg:hidden divide-y",children:f.map(m=>{var g;return d.jsxs("div",{className:"p-4 flex items-start gap-3",children:[m.avatar?d.jsx("img",{src:m.avatar,alt:m.name,className:"w-12 h-12 rounded-full object-cover"}):d.jsx("div",{className:"w-12 h-12 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold text-lg",children:(g=m.name)==null?void 0:g.charAt(0)}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("h3",{className:"font-semibold text-gray-900",children:m.name}),d.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[d.jsx("span",{className:"text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-mono",children:m.licensePlate}),d.jsx("span",{className:"text-xs text-gray-500",children:m.vehicleCode})]})]}),d.jsxs("div",{className:"flex gap-1",children:[d.jsx(zt,{to:`/drivers/edit/${m.id}`,className:"p-2 text-gray-500 hover:text-taxi-600 rounded-lg",children:d.jsx(gd,{size:18})}),d.jsx("button",{onClick:()=>i(m.id),className:"p-2 text-gray-500 hover:text-red-600 rounded-lg",children:d.jsx(yd,{size:18})})]})]},m.id)})}),f.length===0&&d.jsxs("div",{className:"text-center py-12",children:[d.jsx(Rr,{className:"mx-auto text-gray-300 mb-4",size:48}),d.jsx("p",{className:"text-gray-500",children:"Không tìm thấy tài xế"})]})]}),s&&d.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:d.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[d.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Xác nhận xóa"}),d.jsx("p",{className:"text-gray-500 mb-6",children:"Bạn có chắc muốn xóa tài xế này?"}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:()=>i(null),className:"flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 font-medium",children:"Hủy"}),d.jsx("button",{onClick:()=>c(s),className:"flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 font-medium",children:"Xóa"})]})]})})]})}const Bv=["Toyota Vios","Toyota Camry","Hyundai Accent","Hyundai Elantra","Kia Morning","Kia Cerato","Honda City","Honda Civic","Mazda 3","VinFast Fadil"];function $v(){const{id:t}=JS(),e=zf(),n=!!t,[r,s]=O.useState({name:"",licensePlate:"",vehicleType:Bv[0],vehicleCode:"",avatar:null}),[i,o]=O.useState({}),[l,u]=O.useState(!1),[c,f]=O.useState(!1);O.useEffect(()=>{n&&m()},[t,n]);const m=async()=>{u(!0);const P=await Vn.getById(t);P?s({name:P.name,licensePlate:P.licensePlate,vehicleType:P.vehicleType,vehicleCode:P.vehicleCode,avatar:P.avatar||null}):e("/drivers"),u(!1)},g=()=>{const P={};return r.name.trim()||(P.name="Vui lòng nhập họ tên"),r.licensePlate.trim()||(P.licensePlate="Vui lòng nhập biển số xe"),r.vehicleCode.trim()||(P.vehicleCode="Vui lòng nhập mã số xe"),o(P),Object.keys(P).length===0},S=async P=>{if(P.preventDefault(),!!g()){f(!0);try{if(n)await Vn.update(t,r);else{const E=await Vn.add(r);E&&await Ti.createForDriver(E)}e("/drivers")}catch(E){console.error("Error saving driver:",E),alert("Có lỗi xảy ra khi lưu dữ liệu!")}f(!1)}},N=P=>E=>{s(y=>({...y,[P]:E.target.value})),i[P]&&o(y=>({...y,[P]:null}))},k=P=>{var T;const E=(T=P.target.files)==null?void 0:T[0];if(!E)return;if(E.size>1024*1024){alert("Ảnh phải nhỏ hơn 1MB");return}const y=new FileReader;y.onload=R=>s(j=>{var U;return{...j,avatar:(U=R.target)==null?void 0:U.result}}),y.readAsDataURL(E)};return l?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto",children:[d.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[d.jsx(zt,{to:"/drivers",className:"p-2 hover:bg-gray-100 rounded-xl",children:d.jsx(mw,{size:24,className:"text-gray-600"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:n?"Chỉnh sửa tài xế":"Thêm tài xế mới"}),d.jsx("p",{className:"text-gray-500 mt-1",children:n?"Cập nhật thông tin":"Nhập thông tin tài xế mới"})]})]}),d.jsxs("form",{onSubmit:S,className:"bg-white rounded-2xl p-6 shadow-sm",children:[d.jsx("div",{className:"flex justify-center mb-8",children:d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"w-28 h-28 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center overflow-hidden",children:r.avatar?d.jsx("img",{src:r.avatar,alt:"Avatar",className:"w-full h-full object-cover"}):r.name?d.jsx("span",{className:"text-4xl font-bold",children:r.name.charAt(0).toUpperCase()}):d.jsx(vd,{size:48})}),d.jsxs("label",{className:"absolute bottom-0 right-0 w-10 h-10 bg-taxi-500 hover:bg-taxi-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg transition-colors",children:[d.jsx(VA,{size:20}),d.jsx("input",{type:"file",accept:"image/*",onChange:k,className:"hidden"})]})]})}),d.jsx("p",{className:"text-center text-sm text-gray-500 mb-6",children:"Click vào icon camera để tải ảnh lên (tối đa 1MB)"}),d.jsxs("div",{className:"space-y-5",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(vd,{size:16}),"Họ và tên"]}),d.jsx("input",{type:"text",value:r.name,onChange:N("name"),placeholder:"Nguyễn Văn A",className:`w-full px-4 py-3 rounded-xl border ${i.name?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none`}),i.name&&d.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.name})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(Rr,{size:16}),"Biển số xe"]}),d.jsx("input",{type:"text",value:r.licensePlate,onChange:N("licensePlate"),placeholder:"30A-12345",className:`w-full px-4 py-3 rounded-xl border ${i.licensePlate?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono`}),i.licensePlate&&d.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.licensePlate})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(Rr,{size:16}),"Loại xe"]}),d.jsx("select",{value:r.vehicleType,onChange:N("vehicleType"),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white",children:Bv.map(P=>d.jsx("option",{value:P,children:P},P))})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(BA,{size:16}),"Mã số xe"]}),d.jsx("input",{type:"text",value:r.vehicleCode,onChange:N("vehicleCode"),placeholder:"TX001",className:`w-full px-4 py-3 rounded-xl border ${i.vehicleCode?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono uppercase`}),i.vehicleCode&&d.jsx("p",{className:"text-red-500 text-sm mt-1",children:i.vehicleCode})]})]}),d.jsxs("div",{className:"flex gap-3 mt-8",children:[d.jsx(zt,{to:"/drivers",className:"flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-center",children:"Hủy"}),d.jsxs("button",{type:"submit",disabled:c,className:"flex-1 px-4 py-3 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium flex items-center justify-center gap-2 disabled:opacity-50",children:[c?d.jsx(Pt,{size:20,className:"animate-spin"}):d.jsx(qf,{size:20}),d.jsx("span",{children:n?"Cập nhật":"Thêm mới"})]})]})]})]})}function I4(){const[t,e]=O.useState([]),[n,r]=O.useState(null),[s,i]=O.useState(""),[o,l]=O.useState("all"),[u,c]=O.useState(!0),[f,m]=O.useState(!1);O.useEffect(()=>{g()},[]);const g=async()=>{c(!0);const R=await Ti.getAll();e(R),c(!1)},S=R=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(R),N=R=>{r(R.id),i(R.paidAmount.toString())},k=async R=>{m(!0);const j=parseInt(s)||0;await Ti.update(R,j),await g(),r(null),i(""),m(!1)},P=()=>{r(null),i("")},E=R=>{switch(R){case"paid":return d.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium",children:[d.jsx(OA,{size:14}),"Đã đóng đủ"]});case"partial":return d.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium",children:[d.jsx(FA,{size:14}),"Đóng một phần"]});default:return d.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium",children:[d.jsx(GA,{size:14}),"Chưa đóng"]})}},y=t.filter(R=>o==="all"?!0:R.status===o),T={total:t.length,paid:t.filter(R=>R.status==="paid").length,partial:t.filter(R=>R.status==="partial").length,unpaid:t.filter(R=>R.status==="unpaid").length,totalAmount:t.reduce((R,j)=>R+(j.paidAmount||0),0)};return u?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in",children:[d.jsxs("div",{className:"mb-6",children:[d.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Quản lý tiền thế chân"}),d.jsx("p",{className:"text-gray-500 mt-1",children:"Theo dõi tiền cọc của tài xế"})]}),d.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[d.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-sm",children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Tổng thu"}),d.jsx("p",{className:"text-xl font-bold text-gray-900",children:S(T.totalAmount)})]}),d.jsxs("div",{className:"bg-green-50 rounded-xl p-4 border border-green-100",children:[d.jsx("p",{className:"text-sm text-green-600",children:"Đã đóng đủ"}),d.jsxs("p",{className:"text-xl font-bold text-green-700",children:[T.paid," tài xế"]})]}),d.jsxs("div",{className:"bg-yellow-50 rounded-xl p-4 border border-yellow-100",children:[d.jsx("p",{className:"text-sm text-yellow-600",children:"Đóng một phần"}),d.jsxs("p",{className:"text-xl font-bold text-yellow-700",children:[T.partial," tài xế"]})]}),d.jsxs("div",{className:"bg-red-50 rounded-xl p-4 border border-red-100",children:[d.jsx("p",{className:"text-sm text-red-600",children:"Chưa đóng"}),d.jsxs("p",{className:"text-xl font-bold text-red-700",children:[T.unpaid," tài xế"]})]})]}),d.jsx("div",{className:"bg-white rounded-2xl p-4 mb-6 shadow-sm",children:d.jsx("div",{className:"flex flex-wrap gap-2",children:[{value:"all",label:"Tất cả"},{value:"paid",label:"Đã đóng đủ"},{value:"partial",label:"Đóng một phần"},{value:"unpaid",label:"Chưa đóng"}].map(R=>d.jsx("button",{onClick:()=>l(R.value),className:`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${o===R.value?"bg-taxi-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:R.label},R.value))})}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[d.jsx("div",{className:"divide-y divide-gray-100",children:y.map(R=>{var j;return d.jsxs("div",{className:"p-4 lg:p-6 hover:bg-gray-50 transition-colors",children:[d.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-4",children:[d.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[d.jsx("div",{className:"w-12 h-12 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center font-semibold text-lg",children:(j=R.driverName)==null?void 0:j.charAt(0)}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-gray-900",children:R.driverName}),R.lastPaymentDate&&d.jsxs("p",{className:"text-sm text-gray-500",children:["Thanh toán lần cuối: ",R.lastPaymentDate]})]})]}),d.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-4",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsxs("div",{className:"text-right",children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Đã đóng / Yêu cầu"}),n===R.id?d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("input",{type:"number",value:s,onChange:U=>i(U.target.value),className:"w-32 px-3 py-1 border border-gray-200 rounded-lg text-right font-mono",autoFocus:!0}),d.jsxs("span",{className:"text-gray-500",children:["/ ",S(R.requiredAmount)]})]}):d.jsxs("p",{className:"font-semibold text-gray-900",children:[S(R.paidAmount||0)," / ",S(R.requiredAmount)]})]}),E(R.status)]}),n===R.id?d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:P,className:"px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm",children:"Hủy"}),d.jsxs("button",{onClick:()=>k(R.driverId),disabled:f,className:"px-3 py-1.5 bg-taxi-500 text-white hover:bg-taxi-600 rounded-lg text-sm font-medium flex items-center gap-1",children:[f&&d.jsx(Pt,{size:14,className:"animate-spin"}),"Lưu"]})]}):d.jsx("button",{onClick:()=>N(R),className:"p-2 text-gray-500 hover:text-taxi-600 hover:bg-taxi-50 rounded-lg transition-colors",children:d.jsx(gd,{size:18})})]})]}),d.jsx("div",{className:"mt-4",children:d.jsx("div",{className:"h-2 bg-gray-100 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${R.status==="paid"?"bg-green-500":R.status==="partial"?"bg-yellow-500":"bg-gray-300"}`,style:{width:`${Math.min((R.paidAmount||0)/R.requiredAmount*100,100)}%`}})})})]},R.id)})}),y.length===0&&d.jsxs("div",{className:"text-center py-12",children:[d.jsx(Hf,{className:"mx-auto text-gray-300 mb-4",size:48}),d.jsx("p",{className:"text-gray-500",children:"Không có dữ liệu"})]})]})]})}function S4(){const[t,e]=O.useState([]),[n,r]=O.useState({driverSharePercent:60}),[s,i]=O.useState(""),[o,l]=O.useState(null),[u,c]=O.useState(!0);O.useEffect(()=>{f()},[]);const f=async()=>{c(!0);try{const[y,T]=await Promise.all([aa.getAll(),xi.get()]);if(e(y),r(T),y.length>0){const R=[...new Set(y.map(j=>j.month))].sort().reverse();i(R[0]||"")}}catch(y){console.error("Error loading data:",y)}c(!1)},m=y=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(y),g=async y=>{await aa.delete(y),await f(),l(null)},S=[...new Set(t.map(y=>y.month))].sort().reverse(),N=s?t.filter(y=>y.month===s):t,k=N.reduce((y,T)=>y+(T.amount||0),0),P=y=>`Tháng ${parseInt(y.split("-")[1])}/${y.split("-")[0]}`,E=y=>(y.amount||0)*n.driverSharePercent/100+(y.bonus||0)-(y.penalty||0);return u?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Quản lý doanh thu"}),d.jsx("p",{className:"text-gray-500 mt-1",children:"Doanh thu và tiền thực nhận của tài xế"})]}),d.jsxs(zt,{to:"/revenue/new",className:"inline-flex items-center gap-2 px-4 py-2.5 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium shadow-lg shadow-taxi-500/30",children:[d.jsx($f,{size:20}),d.jsx("span",{children:"Nhập doanh thu"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6",children:[d.jsxs("div",{className:"lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm",children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[d.jsx(Bf,{size:16,className:"inline mr-2"}),"Chọn tháng"]}),d.jsxs("div",{className:"flex flex-wrap gap-2",children:[d.jsx("button",{onClick:()=>i(""),className:`px-4 py-2 rounded-xl text-sm font-medium ${s===""?"bg-taxi-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:"Tất cả"}),S.map(y=>d.jsx("button",{onClick:()=>i(y),className:`px-4 py-2 rounded-xl text-sm font-medium ${s===y?"bg-taxi-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:P(y)},y))]})]}),d.jsxs("div",{className:"bg-gradient-to-r from-taxi-500 to-taxi-600 rounded-2xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx(Jo,{size:24}),d.jsx("span",{className:"font-medium",children:s?P(s):"Tổng"})]}),d.jsx("p",{className:"text-3xl font-bold",children:m(k)})]})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full",children:[d.jsx("thead",{className:"bg-gray-50 border-b",children:d.jsxs("tr",{children:[d.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-gray-600",children:"Xe"}),d.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-gray-600",children:"Tài xế"}),d.jsx("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:"Doanh thu"}),d.jsx("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:"Thưởng"}),d.jsx("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:"Phạt"}),d.jsxs("th",{className:"text-right px-4 py-3 text-sm font-semibold text-gray-600",children:["Thực nhận (",n.driverSharePercent,"%)"]}),d.jsx("th",{className:"px-4 py-3"})]})}),d.jsx("tbody",{className:"divide-y",children:N.map(y=>d.jsxs("tr",{className:"hover:bg-gray-50",children:[d.jsx("td",{className:"px-4 py-3",children:d.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm",children:[d.jsx(Rr,{size:14}),y.vehicleCode]})}),d.jsx("td",{className:"px-4 py-3 font-medium",children:y.driverName}),d.jsx("td",{className:"px-4 py-3 text-right font-mono",children:m(y.amount||0)}),d.jsx("td",{className:"px-4 py-3 text-right font-mono text-green-600",children:y.bonus?`+${m(y.bonus)}`:"-"}),d.jsx("td",{className:"px-4 py-3 text-right font-mono text-red-600",children:y.penalty?`-${m(y.penalty)}`:"-"}),d.jsx("td",{className:"px-4 py-3 text-right font-bold text-taxi-600",children:m(E(y))}),d.jsx("td",{className:"px-4 py-3",children:d.jsx("button",{onClick:()=>l(y.id),className:"p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg",children:d.jsx(yd,{size:16})})})]},y.id))})]})}),N.length===0&&d.jsxs("div",{className:"text-center py-12",children:[d.jsx(Jo,{className:"mx-auto text-gray-300 mb-4",size:48}),d.jsx("p",{className:"text-gray-500",children:"Chưa có dữ liệu"})]})]}),o&&d.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:d.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[d.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Xác nhận xóa"}),d.jsx("p",{className:"text-gray-500 mb-6",children:"Bạn có chắc muốn xóa?"}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:()=>l(null),className:"flex-1 px-4 py-2.5 border rounded-xl hover:bg-gray-50 font-medium",children:"Hủy"}),d.jsx("button",{onClick:()=>g(o),className:"flex-1 px-4 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 font-medium",children:"Xóa"})]})]})})]})}function A4(){const t=zf(),[e,n]=O.useState([]),[r,s]=O.useState({driverSharePercent:60}),[i,o]=O.useState({vehicleCode:"",driverName:"",month:"",amount:"",bonus:"",penalty:""}),[l,u]=O.useState({}),[c,f]=O.useState(!0),[m,g]=O.useState(!1);O.useEffect(()=>{S()},[]);const S=async()=>{f(!0);try{const[w,v]=await Promise.all([Vn.getAll(),xi.get()]);n(w),s(v),w.length>0&&o(x=>({...x,vehicleCode:w[0].vehicleCode,driverName:w[0].name})),o(x=>({...x,month:new Date().toISOString().slice(0,7)}))}catch(w){console.error("Error loading data:",w)}f(!1)},N=()=>{const w={};return i.vehicleCode||(w.vehicleCode="Vui lòng chọn xe"),i.month||(w.month="Vui lòng chọn tháng"),(!i.amount||parseInt(i.amount)<=0)&&(w.amount="Vui lòng nhập doanh thu"),u(w),Object.keys(w).length===0},k=async w=>{if(w.preventDefault(),!!N()){g(!0);try{await aa.add({vehicleCode:i.vehicleCode,driverName:i.driverName,month:i.month,amount:parseInt(i.amount)||0,bonus:parseInt(i.bonus)||0,penalty:parseInt(i.penalty)||0}),t("/revenue")}catch(v){console.error("Error saving revenue:",v),alert("Có lỗi xảy ra khi lưu dữ liệu!")}g(!1)}},P=w=>{const v=w.target.value,x=e.find(A=>A.vehicleCode===v);o(A=>({...A,vehicleCode:v,driverName:(x==null?void 0:x.name)||""}))},E=w=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(w),y=parseInt(i.amount)||0,T=parseInt(i.bonus)||0,R=parseInt(i.penalty)||0,j=y*r.driverSharePercent/100,U=j+T-R;return c?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto",children:[d.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[d.jsx(zt,{to:"/revenue",className:"p-2 hover:bg-gray-100 rounded-xl",children:d.jsx(mw,{size:24,className:"text-gray-600"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900",children:"Nhập doanh thu"}),d.jsx("p",{className:"text-gray-500 mt-1",children:"Nhập doanh thu và thưởng/phạt cho xe"})]})]}),d.jsxs("form",{onSubmit:k,className:"bg-white rounded-2xl p-6 shadow-sm",children:[d.jsxs("div",{className:"space-y-5",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(Rr,{size:16}),"Chọn xe"]}),d.jsx("select",{value:i.vehicleCode,onChange:P,className:`w-full px-4 py-3 rounded-xl border ${l.vehicleCode?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none bg-white`,children:e.map(w=>d.jsxs("option",{value:w.vehicleCode,children:[w.vehicleCode," - ",w.name]},w.id))})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(Bf,{size:16}),"Tháng"]}),d.jsx("input",{type:"month",value:i.month,onChange:w=>o(v=>({...v,month:w.target.value})),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(UA,{size:16}),"Doanh thu (VND)"]}),d.jsx("input",{type:"number",value:i.amount,onChange:w=>o(v=>({...v,amount:w.target.value})),placeholder:"15000000",className:`w-full px-4 py-3 rounded-xl border ${l.amount?"border-red-300":"border-gray-200"} focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none font-mono text-lg`})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-green-700 mb-2",children:[d.jsx(zA,{size:16}),"Tiền thưởng"]}),d.jsx("input",{type:"number",value:i.bonus,onChange:w=>o(v=>({...v,bonus:w.target.value})),placeholder:"0",className:"w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none font-mono bg-green-50"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-red-700 mb-2",children:[d.jsx(kA,{size:16}),"Tiền phạt"]}),d.jsx("input",{type:"number",value:i.penalty,onChange:w=>o(v=>({...v,penalty:w.target.value})),placeholder:"0",className:"w-full px-4 py-3 rounded-xl border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none font-mono bg-red-50"})]})]}),y>0&&d.jsxs("div",{className:"p-4 bg-gradient-to-r from-taxi-50 to-green-50 rounded-xl border border-taxi-200",children:[d.jsx("h3",{className:"font-semibold text-gray-800 mb-3",children:"Công thức tính lương"}),d.jsxs("div",{className:"space-y-2 text-sm",children:[d.jsxs("div",{className:"flex justify-between",children:[d.jsx("span",{children:"Doanh thu gốc:"}),d.jsx("span",{className:"font-mono",children:E(y)})]}),d.jsxs("div",{className:"flex justify-between text-taxi-700",children:[d.jsxs("span",{children:["× ",r.driverSharePercent,"% (phần tài xế):"]}),d.jsx("span",{className:"font-mono",children:E(j)})]}),T>0&&d.jsxs("div",{className:"flex justify-between text-green-700",children:[d.jsx("span",{children:"+ Thưởng:"}),d.jsxs("span",{className:"font-mono",children:["+",E(T)]})]}),R>0&&d.jsxs("div",{className:"flex justify-between text-red-700",children:[d.jsx("span",{children:"- Phạt:"}),d.jsxs("span",{className:"font-mono",children:["-",E(R)]})]}),d.jsxs("div",{className:"flex justify-between pt-2 border-t border-taxi-200 text-lg font-bold",children:[d.jsx("span",{children:"= Thực nhận:"}),d.jsx("span",{className:U>=0?"text-green-600":"text-red-600",children:E(U)})]})]})]})]}),d.jsxs("div",{className:"flex gap-3 mt-6",children:[d.jsx(zt,{to:"/revenue",className:"flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium text-center",children:"Hủy"}),d.jsxs("button",{type:"submit",disabled:m,className:"flex-1 px-4 py-3 bg-taxi-500 text-white rounded-xl hover:bg-taxi-600 font-medium flex items-center justify-center gap-2 disabled:opacity-50",children:[m?d.jsx(Pt,{size:20,className:"animate-spin"}):d.jsx(qf,{size:20}),d.jsx("span",{children:"Lưu"})]})]})]})]})}function C4(){const[t,e]=O.useState(new Date),[n,r]=O.useState([]),[s,i]=O.useState([]),[o,l]=O.useState(null),[u,c]=O.useState(!1),[f,m]=O.useState(!0),[g,S]=O.useState({});O.useEffect(()=>{N()},[]),O.useEffect(()=>{s.length>0&&P()},[n,t,s]);const N=async()=>{m(!0);try{const[W,le]=await Promise.all([Vn.getAll(),lr.getAll()]);i(W),r(le)}catch(W){console.error("Error loading data:",W)}m(!1)},k=async()=>{const W=await lr.getAll();r(W)},P=async()=>{const W=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`,le={};for(const Ve of s)le[Ve.id]=await lr.countByDriverMonth(Ve.id,W);S(le)},E=t.getFullYear(),y=t.getMonth();`${E}${String(y+1).padStart(2,"0")}`;const T=new Date(E,y+1,0).getDate(),R=new Date(E,y,1).getDay(),j=["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],U=["CN","T2","T3","T4","T5","T6","T7"],w=()=>e(new Date(E,y-1,1)),v=()=>e(new Date(E,y+1,1)),x=W=>`${E}-${String(y+1).padStart(2,"0")}-${String(W).padStart(2,"0")}`,A=W=>n.filter(le=>le.date===x(W)),C=W=>{l(x(W)),c(!0)},b=async(W,le)=>{n.find(B=>B.date===o&&B.driverId===W)?await lr.remove(o,W):await lr.add({date:o,driverId:W,driverName:le}),await k()},I=W=>n.some(le=>le.date===o&&le.driverId===W),Ae=[];for(let W=0;W<R;W++)Ae.push(null);for(let W=1;W<=T;W++)Ae.push(W);return f?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in",children:[d.jsxs("div",{className:"mb-6",children:[d.jsxs("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3",children:[d.jsx(yw,{className:"text-indigo-500"}),"Lịch trực đêm"]}),d.jsx("p",{className:"text-gray-500 mt-1",children:"Phân công ca trực đêm cho tài xế"})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm p-4 lg:p-6",children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsx("button",{onClick:w,className:"p-2 hover:bg-gray-100 rounded-xl",children:d.jsx(jA,{size:24})}),d.jsxs("h2",{className:"text-xl font-bold text-gray-900",children:[j[y]," ",E]}),d.jsx("button",{onClick:v,className:"p-2 hover:bg-gray-100 rounded-xl",children:d.jsx(MA,{size:24})})]}),d.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:U.map(W=>d.jsx("div",{className:"text-center text-sm font-semibold text-gray-500 py-2",children:W},W))}),d.jsx("div",{className:"grid grid-cols-7 gap-1",children:Ae.map((W,le)=>{if(!W)return d.jsx("div",{className:"aspect-square"},le);const Ve=A(W),B=new Date().toDateString()===new Date(E,y,W).toDateString();return d.jsxs("div",{onClick:()=>C(W),className:`aspect-square p-1 rounded-xl cursor-pointer transition-all hover:bg-indigo-50 border-2 ${B?"border-indigo-500":"border-transparent"} ${Ve.length>0?"bg-indigo-50":"bg-gray-50"}`,children:[d.jsx("div",{className:"text-sm font-medium text-gray-700 mb-1",children:W}),d.jsxs("div",{className:"space-y-0.5 overflow-hidden max-h-16",children:[Ve.slice(0,2).map(K=>{var Z;return d.jsx("div",{className:"text-xs bg-indigo-500 text-white px-1 py-0.5 rounded truncate",children:(Z=K.driverName)==null?void 0:Z.split(" ").pop()},K.id)}),Ve.length>2&&d.jsxs("div",{className:"text-xs text-indigo-600 font-medium",children:["+",Ve.length-2]})]})]},le)})}),d.jsxs("div",{className:"mt-6 pt-4 border-t",children:[d.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Tổng kết tháng"}),d.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:s.map(W=>{var Ve;const le=g[W.id]||0;return d.jsxs("div",{className:"flex items-center gap-2 p-2 bg-gray-50 rounded-lg",children:[d.jsx("div",{className:"w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-semibold",children:(Ve=W.name)==null?void 0:Ve.charAt(0)}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("p",{className:"text-sm font-medium truncate",children:W.name}),d.jsxs("p",{className:"text-xs text-gray-500",children:[le," ca"]})]})]},W.id)})})]})]}),u&&d.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:d.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full animate-slide-in max-h-[80vh] overflow-auto",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("h3",{className:"text-lg font-semibold",children:["Phân ca ngày ",o]}),d.jsx("button",{onClick:()=>c(!1),className:"p-1 hover:bg-gray-100 rounded-lg",children:d.jsx(ww,{size:20})})]}),d.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Chọn tài xế trực đêm"}),d.jsx("div",{className:"space-y-2",children:s.map(W=>{var Ve;const le=I(W.id);return d.jsxs("button",{onClick:()=>b(W.id,W.name),className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${le?"bg-indigo-500 text-white":"bg-gray-50 hover:bg-gray-100"}`,children:[d.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${le?"bg-white/20":"bg-indigo-100 text-indigo-600"}`,children:W.avatar?d.jsx("img",{src:W.avatar,className:"w-full h-full rounded-full object-cover"}):(Ve=W.name)==null?void 0:Ve.charAt(0)}),d.jsxs("div",{className:"flex-1 text-left",children:[d.jsx("p",{className:"font-medium",children:W.name}),d.jsx("p",{className:`text-sm ${le?"text-indigo-200":"text-gray-500"}`,children:W.vehicleCode})]}),le&&d.jsx(LA,{size:20})]},W.id)})})]})})]})}function N4(){const[t,e]=O.useState([]),[n,r]=O.useState(""),[s,i]=O.useState({driverSharePercent:60}),[o,l]=O.useState(!0),[u,c]=O.useState({drivers:[],deposits:[],revenues:[]});O.useEffect(()=>{f()},[]),O.useEffect(()=>{n&&u.drivers.length>0&&m()},[n,u]);const f=async()=>{l(!0);try{const[y,T,R,j]=await Promise.all([xi.get(),Vn.getAll(),Ti.getAll(),aa.getAll()]);i(y),c({drivers:T,deposits:R,revenues:j});const U=[...new Set(j.map(v=>v.month))].sort().reverse(),w=new Date().toISOString().slice(0,7);r(U[0]||w)}catch(y){console.error("Error loading data:",y)}l(!1)},m=async()=>{const{drivers:y,deposits:T,revenues:R}=u,j=R.filter(w=>w.month===n),U=await Promise.all(y.map(async w=>{const v=T.find(le=>le.driverId===w.id),x=j.find(le=>le.vehicleCode===w.vehicleCode),A=await lr.countByDriverMonth(w.id,n),C=(x==null?void 0:x.amount)||0,b=(x==null?void 0:x.bonus)||0,I=(x==null?void 0:x.penalty)||0,W=C*s.driverSharePercent/100+b-I;return{id:w.id,vehicleCode:w.vehicleCode,driverName:w.name,avatar:w.avatar,revenue:C,bonus:b,penalty:I,depositRequired:(v==null?void 0:v.requiredAmount)||0,depositPaid:(v==null?void 0:v.paidAmount)||0,depositMissing:((v==null?void 0:v.requiredAmount)||0)-((v==null?void 0:v.paidAmount)||0),nightShifts:A,netSalary:W}}));e(U)},g=y=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(y),S=y=>`Tháng ${parseInt(y.split("-")[1])}/${y.split("-")[0]}`,N={revenue:t.reduce((y,T)=>y+T.revenue,0),netSalary:t.reduce((y,T)=>y+T.netSalary,0),depositMissing:t.reduce((y,T)=>y+Math.max(0,T.depositMissing),0),nightShifts:t.reduce((y,T)=>y+T.nightShifts,0)},k=[];for(let y=0;y<6;y++){const T=new Date;T.setMonth(T.getMonth()-y),k.push(T.toISOString().slice(0,7))}const P=u.revenues.map(y=>y.month),E=[...new Set([...k,...P])].sort().reverse();return o?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in",children:[d.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:d.jsxs("div",{children:[d.jsxs("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3",children:[d.jsx(gw,{className:"text-taxi-500"}),"Báo cáo tổng kết"]}),d.jsx("p",{className:"text-gray-500 mt-1",children:"Thống kê chi tiết theo tháng"})]})}),d.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm mb-6",children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-3",children:[d.jsx(Bf,{size:16}),"Chọn tháng báo cáo"]}),d.jsx("div",{className:"flex flex-wrap gap-2",children:E.map(y=>d.jsx("button",{onClick:()=>r(y),className:`px-4 py-2 rounded-xl text-sm font-medium transition-all ${n===y?"bg-taxi-500 text-white shadow-lg":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:S(y)},y))})]}),d.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[d.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-sm",children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Tổng doanh thu"}),d.jsx("p",{className:"text-xl font-bold text-gray-900",children:g(N.revenue)})]}),d.jsxs("div",{className:"bg-green-50 rounded-xl p-4 border border-green-100",children:[d.jsx("p",{className:"text-sm text-green-600",children:"Tổng lương thực trả"}),d.jsx("p",{className:"text-xl font-bold text-green-700",children:g(N.netSalary)})]}),d.jsxs("div",{className:"bg-red-50 rounded-xl p-4 border border-red-100",children:[d.jsx("p",{className:"text-sm text-red-600",children:"Tiền cọc còn thiếu"}),d.jsx("p",{className:"text-xl font-bold text-red-700",children:g(N.depositMissing)})]}),d.jsxs("div",{className:"bg-indigo-50 rounded-xl p-4 border border-indigo-100",children:[d.jsx("p",{className:"text-sm text-indigo-600",children:"Tổng ca trực đêm"}),d.jsxs("p",{className:"text-xl font-bold text-indigo-700",children:[N.nightShifts," ca"]})]})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm overflow-hidden",children:[d.jsx("div",{className:"p-4 border-b bg-gray-50",children:d.jsxs("h2",{className:"font-semibold text-gray-900",children:["Chi tiết ",n?S(n):""]})}),d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full",children:[d.jsx("thead",{className:"bg-gray-50 border-b",children:d.jsxs("tr",{children:[d.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Mã xe"}),d.jsx("th",{className:"text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Tài xế"}),d.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Doanh thu"}),d.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Thưởng/Phạt"}),d.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Cọc thiếu"}),d.jsx("th",{className:"text-center px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Ca trực"}),d.jsx("th",{className:"text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase",children:"Lương thực trả"})]})}),d.jsx("tbody",{className:"divide-y",children:t.map(y=>{var T;return d.jsxs("tr",{className:"hover:bg-gray-50",children:[d.jsx("td",{className:"px-4 py-3",children:d.jsx("span",{className:"inline-flex px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-mono text-sm",children:y.vehicleCode})}),d.jsx("td",{className:"px-4 py-3",children:d.jsxs("div",{className:"flex items-center gap-2",children:[y.avatar?d.jsx("img",{src:y.avatar,className:"w-8 h-8 rounded-full object-cover"}):d.jsx("div",{className:"w-8 h-8 bg-taxi-100 text-taxi-600 rounded-full flex items-center justify-center text-sm font-semibold",children:(T=y.driverName)==null?void 0:T.charAt(0)}),d.jsx("span",{className:"font-medium",children:y.driverName})]})}),d.jsx("td",{className:"px-4 py-3 text-right font-mono",children:g(y.revenue)}),d.jsxs("td",{className:"px-4 py-3 text-right",children:[y.bonus>0&&d.jsxs("span",{className:"text-green-600 text-sm",children:["+",g(y.bonus)]}),y.bonus>0&&y.penalty>0&&d.jsx("span",{className:"text-gray-400 mx-1",children:"/"}),y.penalty>0&&d.jsxs("span",{className:"text-red-600 text-sm",children:["-",g(y.penalty)]}),!y.bonus&&!y.penalty&&d.jsx("span",{className:"text-gray-400",children:"-"})]}),d.jsx("td",{className:"px-4 py-3 text-right",children:y.depositMissing>0?d.jsx("span",{className:"text-red-600 font-medium",children:g(y.depositMissing)}):d.jsx("span",{className:"text-green-600",children:"Đủ"})}),d.jsx("td",{className:"px-4 py-3 text-center",children:d.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-sm",children:y.nightShifts})}),d.jsx("td",{className:"px-4 py-3 text-right",children:d.jsx("span",{className:"font-bold text-lg text-taxi-600",children:g(y.netSalary)})})]},y.id)})}),d.jsx("tfoot",{className:"bg-gray-50 border-t-2",children:d.jsxs("tr",{className:"font-bold",children:[d.jsx("td",{className:"px-4 py-3",colSpan:2,children:"TỔNG CỘNG"}),d.jsx("td",{className:"px-4 py-3 text-right",children:g(N.revenue)}),d.jsx("td",{className:"px-4 py-3"}),d.jsx("td",{className:"px-4 py-3 text-right text-red-600",children:g(N.depositMissing)}),d.jsx("td",{className:"px-4 py-3 text-center text-indigo-600",children:N.nightShifts}),d.jsx("td",{className:"px-4 py-3 text-right text-green-600",children:g(N.netSalary)})]})})]})})]})]})}function R4(){const[t,e]=O.useState({driverSharePercent:60,companySharePercent:40}),[n,r]=O.useState(!1),[s,i]=O.useState(!0),[o,l]=O.useState(!1);O.useEffect(()=>{u()},[]);const u=async()=>{i(!0);try{const m=await xi.get();e(m)}catch(m){console.error("Error loading settings:",m)}i(!1)},c=m=>{const g=Math.min(100,Math.max(0,parseInt(m)||0));e({driverSharePercent:g,companySharePercent:100-g}),r(!1)},f=async()=>{l(!0);try{await xi.save(t),r(!0),setTimeout(()=>r(!1),2e3)}catch(m){console.error("Error saving settings:",m),alert("Có lỗi xảy ra khi lưu cài đặt!")}l(!1)};return s?d.jsx("div",{className:"flex items-center justify-center h-64",children:d.jsx(Pt,{className:"w-8 h-8 animate-spin text-taxi-500"})}):d.jsxs("div",{className:"animate-fade-in max-w-2xl mx-auto",children:[d.jsxs("div",{className:"mb-6",children:[d.jsxs("h1",{className:"text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3",children:[d.jsx(vw,{className:"text-gray-500"}),"Cài đặt"]}),d.jsx("p",{className:"text-gray-500 mt-1",children:"Cấu hình hệ thống quản lý taxi"})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm p-6",children:[d.jsxs("h2",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[d.jsx(HA,{size:20,className:"text-taxi-500"}),"Tỷ lệ ăn chia"]}),d.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"Cài đặt phần trăm chia doanh thu giữa tài xế và công ty"}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(vd,{size:16,className:"text-green-500"}),"Tài xế nhận (%)"]}),d.jsx("input",{type:"number",min:"0",max:"100",value:t.driverSharePercent,onChange:m=>c(m.target.value),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-taxi-500 focus:ring-2 focus:ring-taxi-500/20 outline-none text-2xl font-bold text-center"}),d.jsx("div",{className:"mt-2 h-3 bg-gray-100 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-green-500 transition-all",style:{width:`${t.driverSharePercent}%`}})})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[d.jsx(DA,{size:16,className:"text-blue-500"}),"Công ty nhận (%)"]}),d.jsx("div",{className:"w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-2xl font-bold text-center text-gray-600",children:t.companySharePercent}),d.jsx("div",{className:"mt-2 h-3 bg-gray-100 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-blue-500 transition-all",style:{width:`${t.companySharePercent}%`}})})]}),d.jsxs("div",{className:"p-4 bg-taxi-50 rounded-xl border border-taxi-200",children:[d.jsx("h3",{className:"font-semibold text-taxi-800 mb-2",children:"Ví dụ minh họa"}),d.jsxs("p",{className:"text-sm text-taxi-700",children:["Với doanh thu ",d.jsx("strong",{children:"10,000,000 VND"}),":"]}),d.jsxs("div",{className:"mt-2 space-y-1 text-sm",children:[d.jsxs("p",{className:"text-green-700",children:["• Tài xế nhận: ",d.jsxs("strong",{children:[(1e7*t.driverSharePercent/100).toLocaleString("vi-VN")," VND"]})]}),d.jsxs("p",{className:"text-blue-700",children:["• Công ty nhận: ",d.jsxs("strong",{children:[(1e7*t.companySharePercent/100).toLocaleString("vi-VN")," VND"]})]})]})]})]}),d.jsxs("button",{onClick:f,disabled:o,className:`w-full mt-6 px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 ${n?"bg-green-500 text-white":"bg-taxi-500 text-white hover:bg-taxi-600"}`,children:[o?d.jsx(Pt,{size:20,className:"animate-spin"}):d.jsx(qf,{size:20}),n?"Đã lưu!":"Lưu cài đặt"]})]})]})}function k4(){return d.jsx(EA,{children:d.jsx(YA,{children:d.jsxs(fA,{children:[d.jsx(Qt,{path:"/",element:d.jsx(x4,{})}),d.jsx(Qt,{path:"/drivers",element:d.jsx(T4,{})}),d.jsx(Qt,{path:"/drivers/new",element:d.jsx($v,{})}),d.jsx(Qt,{path:"/drivers/edit/:id",element:d.jsx($v,{})}),d.jsx(Qt,{path:"/finance",element:d.jsx(I4,{})}),d.jsx(Qt,{path:"/revenue",element:d.jsx(S4,{})}),d.jsx(Qt,{path:"/revenue/new",element:d.jsx(A4,{})}),d.jsx(Qt,{path:"/night-shift",element:d.jsx(C4,{})}),d.jsx(Qt,{path:"/reports",element:d.jsx(N4,{})}),d.jsx(Qt,{path:"/settings",element:d.jsx(R4,{})})]})})})}nw(document.getElementById("root")).render(d.jsx(O.StrictMode,{children:d.jsx(k4,{})}));
