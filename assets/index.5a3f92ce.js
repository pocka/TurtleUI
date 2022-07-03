const yl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=e(l);fetch(l.href,i)}};yl();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pr=Symbol(),Wr=new WeakMap;class ko{constructor(t,e,r){if(this._$cssResult$=!0,r!==pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(vr&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Wr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Wr.set(e,t))}return t}toString(){return this.cssText}}const _l=o=>new ko(typeof o=="string"?o:o+"",void 0,pr),$=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,l,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+o[i+1],o[0]);return new ko(e,o,pr)},xl=(o,t)=>{vr?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),l=window.litNonce;l!==void 0&&r.setAttribute("nonce",l),r.textContent=e.cssText,o.appendChild(r)})},Vr=vr?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return _l(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We;const Gr=window.trustedTypes,$l=Gr?Gr.emptyScript:"",qr=window.reactiveElementPolyfillSupport,Qe={toAttribute(o,t){switch(t){case Boolean:o=o?$l:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Co=(o,t)=>t!==o&&(t==t||o==o),Ve={attribute:!0,type:String,converter:Qe,reflect:!1,hasChanged:Co};class ct extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const l=this._$Ep(r,e);l!==void 0&&(this._$Ev.set(l,r),t.push(l))}),t}static createProperty(t,e=Ve){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,l=this.getPropertyDescriptor(t,r,e);l!==void 0&&Object.defineProperty(this.prototype,t,l)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(l){const i=this[t];this[e]=l,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ve}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const l of r)this.createProperty(l,e[l])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const l of r)e.unshift(Vr(l))}else t!==void 0&&e.push(Vr(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return xl(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=Ve){var l,i;const n=this.constructor._$Ep(t,r);if(n!==void 0&&r.reflect===!0){const a=((i=(l=r.converter)===null||l===void 0?void 0:l.toAttribute)!==null&&i!==void 0?i:Qe.toAttribute)(e,r.type);this._$El=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(t,e){var r,l;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const a=i.getPropertyOptions(n),c=a.converter,d=(l=(r=c==null?void 0:c.fromAttribute)!==null&&r!==void 0?r:typeof c=="function"?c:null)!==null&&l!==void 0?l:Qe.fromAttribute;this._$El=n,this[n]=d(e,a.type),this._$El=null}}requestUpdate(t,e,r){let l=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Co)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):l=!1),!this.isUpdatePending&&l&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((l,i)=>this[i]=l),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(l=>{var i;return(i=l.hostUpdate)===null||i===void 0?void 0:i.call(l)}),this.update(r)):this._$Ek()}catch(l){throw e=!1,this._$Ek(),l}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var l;return(l=r.hostUpdated)===null||l===void 0?void 0:l.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}ct.finalized=!0,ct.elementProperties=new Map,ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},qr==null||qr({ReactiveElement:ct}),((We=globalThis.reactiveElementVersions)!==null&&We!==void 0?We:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ge;const wt=globalThis.trustedTypes,Xr=wt?wt.createPolicy("lit-html",{createHTML:o=>o}):void 0,J=`lit$${(Math.random()+"").slice(9)}$`,Eo="?"+J,Tl=`<${Eo}>`,yt=document,Te=(o="")=>yt.createComment(o),zt=o=>o===null||typeof o!="object"&&typeof o!="function",So=Array.isArray,Al=o=>{var t;return So(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yr=/-->/g,Kr=/>/g,tt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Jr=/'/g,Qr=/"/g,Po=/^(?:script|style|textarea|title)$/i,kl=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),Cl=kl(1),lt=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),to=new WeakMap,bt=yt.createTreeWalker(yt,129,null,!1),El=(o,t)=>{const e=o.length-1,r=[];let l,i=t===2?"<svg>":"",n=Pt;for(let c=0;c<e;c++){const d=o[c];let E,f,_=-1,S=0;for(;S<d.length&&(n.lastIndex=S,f=n.exec(d),f!==null);)S=n.lastIndex,n===Pt?f[1]==="!--"?n=Yr:f[1]!==void 0?n=Kr:f[2]!==void 0?(Po.test(f[2])&&(l=RegExp("</"+f[2],"g")),n=tt):f[3]!==void 0&&(n=tt):n===tt?f[0]===">"?(n=l!=null?l:Pt,_=-1):f[1]===void 0?_=-2:(_=n.lastIndex-f[2].length,E=f[1],n=f[3]===void 0?tt:f[3]==='"'?Qr:Jr):n===Qr||n===Jr?n=tt:n===Yr||n===Kr?n=Pt:(n=tt,l=void 0);const I=n===tt&&o[c+1].startsWith("/>")?" ":"";i+=n===Pt?d+Tl:_>=0?(r.push(E),d.slice(0,_)+"$lit$"+d.slice(_)+J+I):d+J+(_===-2?(r.push(void 0),c):I)}const a=i+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Xr!==void 0?Xr.createHTML(a):a,r]};class Rt{constructor({strings:t,_$litType$:e},r){let l;this.parts=[];let i=0,n=0;const a=t.length-1,c=this.parts,[d,E]=El(t,e);if(this.el=Rt.createElement(d,r),bt.currentNode=this.el.content,e===2){const f=this.el.content,_=f.firstChild;_.remove(),f.append(..._.childNodes)}for(;(l=bt.nextNode())!==null&&c.length<a;){if(l.nodeType===1){if(l.hasAttributes()){const f=[];for(const _ of l.getAttributeNames())if(_.endsWith("$lit$")||_.startsWith(J)){const S=E[n++];if(f.push(_),S!==void 0){const I=l.getAttribute(S.toLowerCase()+"$lit$").split(J),C=/([.?@])?(.*)/.exec(S);c.push({type:1,index:i,name:C[2],strings:I,ctor:C[1]==="."?Pl:C[1]==="?"?Ul:C[1]==="@"?Ol:Ee})}else c.push({type:6,index:i})}for(const _ of f)l.removeAttribute(_)}if(Po.test(l.tagName)){const f=l.textContent.split(J),_=f.length-1;if(_>0){l.textContent=wt?wt.emptyScript:"";for(let S=0;S<_;S++)l.append(f[S],Te()),bt.nextNode(),c.push({type:2,index:++i});l.append(f[_],Te())}}}else if(l.nodeType===8)if(l.data===Eo)c.push({type:2,index:i});else{let f=-1;for(;(f=l.data.indexOf(J,f+1))!==-1;)c.push({type:7,index:i}),f+=J.length-1}i++}}static createElement(t,e){const r=yt.createElement("template");return r.innerHTML=t,r}}function _t(o,t,e=o,r){var l,i,n,a;if(t===lt)return t;let c=r!==void 0?(l=e._$Cl)===null||l===void 0?void 0:l[r]:e._$Cu;const d=zt(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((i=c==null?void 0:c._$AO)===null||i===void 0||i.call(c,!1),d===void 0?c=void 0:(c=new d(o),c._$AT(o,e,r)),r!==void 0?((n=(a=e)._$Cl)!==null&&n!==void 0?n:a._$Cl=[])[r]=c:e._$Cu=c),c!==void 0&&(t=_t(o,c._$AS(o,t.values),c,r)),t}class Sl{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:l}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:yt).importNode(r,!0);bt.currentNode=i;let n=bt.nextNode(),a=0,c=0,d=l[0];for(;d!==void 0;){if(a===d.index){let E;d.type===2?E=new Ce(n,n.nextSibling,this,t):d.type===1?E=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(E=new Ml(n,this,t)),this.v.push(E),d=l[++c]}a!==(d==null?void 0:d.index)&&(n=bt.nextNode(),a++)}return i}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Ce{constructor(t,e,r,l){var i;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=l,this._$Cg=(i=l==null?void 0:l.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_t(this,t,e),zt(t)?t===U||t==null||t===""?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==lt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Al(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==U&&zt(this._$AH)?this._$AA.nextSibling.data=t:this.k(yt.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:l}=t,i=typeof l=="number"?this._$AC(t):(l.el===void 0&&(l.el=Rt.createElement(l.h,this.options)),l);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.m(r);else{const n=new Sl(i,this),a=n.p(this.options);n.m(r),this.k(a),this._$AH=n}}_$AC(t){let e=to.get(t.strings);return e===void 0&&to.set(t.strings,e=new Rt(t)),e}S(t){So(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,l=0;for(const i of t)l===e.length?e.push(r=new Ce(this.M(Te()),this.M(Te()),this,this.options)):r=e[l],r._$AI(i),l++;l<e.length&&(this._$AR(r&&r._$AB.nextSibling,l),e.length=l)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const l=t.nextSibling;t.remove(),t=l}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Ee{constructor(t,e,r,l,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=l,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,l){const i=this.strings;let n=!1;if(i===void 0)t=_t(this,t,e,0),n=!zt(t)||t!==this._$AH&&t!==lt,n&&(this._$AH=t);else{const a=t;let c,d;for(t=i[0],c=0;c<i.length-1;c++)d=_t(this,a[r+c],e,c),d===lt&&(d=this._$AH[c]),n||(n=!zt(d)||d!==this._$AH[c]),d===U?t=U:t!==U&&(t+=(d!=null?d:"")+i[c+1]),this._$AH[c]=d}n&&!l&&this.C(t)}C(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Pl extends Ee{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===U?void 0:t}}const Fl=wt?wt.emptyScript:"";class Ul extends Ee{constructor(){super(...arguments),this.type=4}C(t){t&&t!==U?this.element.setAttribute(this.name,Fl):this.element.removeAttribute(this.name)}}class Ol extends Ee{constructor(t,e,r,l,i){super(t,e,r,l,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=_t(this,t,e,0))!==null&&r!==void 0?r:U)===lt)return;const l=this._$AH,i=t===U&&l!==U||t.capture!==l.capture||t.once!==l.once||t.passive!==l.passive,n=t!==U&&(l===U||i);i&&this.element.removeEventListener(this.name,this,l),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Ml{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){_t(this,t)}}const eo=window.litHtmlPolyfillSupport;eo==null||eo(Rt,Ce),((Ge=globalThis.litHtmlVersions)!==null&&Ge!==void 0?Ge:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qe;const xt=globalThis.trustedTypes,ro=xt?xt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Q=`lit$${(Math.random()+"").slice(9)}$`,Fo="?"+Q,Ll=`<${Fo}>`,$t=document,It=(o="")=>$t.createComment(o),Nt=o=>o===null||typeof o!="object"&&typeof o!="function",Uo=Array.isArray,jl=o=>{var t;return Uo(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oo=/-->/g,lo=/>/g,et=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,io=/'/g,no=/"/g,Oo=/^(?:script|style|textarea|title)$/i,Mo=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),b=Mo(1),T=Mo(2),it=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),ao=new WeakMap,zl=(o,t,e)=>{var r,l;const i=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let n=i._$litPart$;if(n===void 0){const a=(l=e==null?void 0:e.renderBefore)!==null&&l!==void 0?l:null;i._$litPart$=n=new Bt(t.insertBefore(It(),a),a,void 0,e!=null?e:{})}return n._$AI(o),n},mt=$t.createTreeWalker($t,129,null,!1),Rl=(o,t)=>{const e=o.length-1,r=[];let l,i=t===2?"<svg>":"",n=Ft;for(let c=0;c<e;c++){const d=o[c];let E,f,_=-1,S=0;for(;S<d.length&&(n.lastIndex=S,f=n.exec(d),f!==null);)S=n.lastIndex,n===Ft?f[1]==="!--"?n=oo:f[1]!==void 0?n=lo:f[2]!==void 0?(Oo.test(f[2])&&(l=RegExp("</"+f[2],"g")),n=et):f[3]!==void 0&&(n=et):n===et?f[0]===">"?(n=l!=null?l:Ft,_=-1):f[1]===void 0?_=-2:(_=n.lastIndex-f[2].length,E=f[1],n=f[3]===void 0?et:f[3]==='"'?no:io):n===no||n===io?n=et:n===oo||n===lo?n=Ft:(n=et,l=void 0);const I=n===et&&o[c+1].startsWith("/>")?" ":"";i+=n===Ft?d+Ll:_>=0?(r.push(E),d.slice(0,_)+"$lit$"+d.slice(_)+Q+I):d+Q+(_===-2?(r.push(void 0),c):I)}const a=i+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ro!==void 0?ro.createHTML(a):a,r]};class Dt{constructor({strings:t,_$litType$:e},r){let l;this.parts=[];let i=0,n=0;const a=t.length-1,c=this.parts,[d,E]=Rl(t,e);if(this.el=Dt.createElement(d,r),mt.currentNode=this.el.content,e===2){const f=this.el.content,_=f.firstChild;_.remove(),f.append(..._.childNodes)}for(;(l=mt.nextNode())!==null&&c.length<a;){if(l.nodeType===1){if(l.hasAttributes()){const f=[];for(const _ of l.getAttributeNames())if(_.endsWith("$lit$")||_.startsWith(Q)){const S=E[n++];if(f.push(_),S!==void 0){const I=l.getAttribute(S.toLowerCase()+"$lit$").split(Q),C=/([.?@])?(.*)/.exec(S);c.push({type:1,index:i,name:C[2],strings:I,ctor:C[1]==="."?Nl:C[1]==="?"?Hl:C[1]==="@"?Bl:Se})}else c.push({type:6,index:i})}for(const _ of f)l.removeAttribute(_)}if(Oo.test(l.tagName)){const f=l.textContent.split(Q),_=f.length-1;if(_>0){l.textContent=xt?xt.emptyScript:"";for(let S=0;S<_;S++)l.append(f[S],It()),mt.nextNode(),c.push({type:2,index:++i});l.append(f[_],It())}}}else if(l.nodeType===8)if(l.data===Fo)c.push({type:2,index:i});else{let f=-1;for(;(f=l.data.indexOf(Q,f+1))!==-1;)c.push({type:7,index:i}),f+=Q.length-1}i++}}static createElement(t,e){const r=$t.createElement("template");return r.innerHTML=t,r}}function Tt(o,t,e=o,r){var l,i,n,a;if(t===it)return t;let c=r!==void 0?(l=e._$Cl)===null||l===void 0?void 0:l[r]:e._$Cu;const d=Nt(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((i=c==null?void 0:c._$AO)===null||i===void 0||i.call(c,!1),d===void 0?c=void 0:(c=new d(o),c._$AT(o,e,r)),r!==void 0?((n=(a=e)._$Cl)!==null&&n!==void 0?n:a._$Cl=[])[r]=c:e._$Cu=c),c!==void 0&&(t=Tt(o,c._$AS(o,t.values),c,r)),t}class Il{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:l}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:$t).importNode(r,!0);mt.currentNode=i;let n=mt.nextNode(),a=0,c=0,d=l[0];for(;d!==void 0;){if(a===d.index){let E;d.type===2?E=new Bt(n,n.nextSibling,this,t):d.type===1?E=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(E=new Zl(n,this,t)),this.v.push(E),d=l[++c]}a!==(d==null?void 0:d.index)&&(n=mt.nextNode(),a++)}return i}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Bt{constructor(t,e,r,l){var i;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=l,this._$Cg=(i=l==null?void 0:l.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Tt(this,t,e),Nt(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==it&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):jl(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==k&&Nt(this._$AH)?this._$AA.nextSibling.data=t:this.k($t.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:l}=t,i=typeof l=="number"?this._$AC(t):(l.el===void 0&&(l.el=Dt.createElement(l.h,this.options)),l);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.m(r);else{const n=new Il(i,this),a=n.p(this.options);n.m(r),this.k(a),this._$AH=n}}_$AC(t){let e=ao.get(t.strings);return e===void 0&&ao.set(t.strings,e=new Dt(t)),e}S(t){Uo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,l=0;for(const i of t)l===e.length?e.push(r=new Bt(this.M(It()),this.M(It()),this,this.options)):r=e[l],r._$AI(i),l++;l<e.length&&(this._$AR(r&&r._$AB.nextSibling,l),e.length=l)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const l=t.nextSibling;t.remove(),t=l}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Se{constructor(t,e,r,l,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=l,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,l){const i=this.strings;let n=!1;if(i===void 0)t=Tt(this,t,e,0),n=!Nt(t)||t!==this._$AH&&t!==it,n&&(this._$AH=t);else{const a=t;let c,d;for(t=i[0],c=0;c<i.length-1;c++)d=Tt(this,a[r+c],e,c),d===it&&(d=this._$AH[c]),n||(n=!Nt(d)||d!==this._$AH[c]),d===k?t=k:t!==k&&(t+=(d!=null?d:"")+i[c+1]),this._$AH[c]=d}n&&!l&&this.C(t)}C(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Nl extends Se{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===k?void 0:t}}const Dl=xt?xt.emptyScript:"";class Hl extends Se{constructor(){super(...arguments),this.type=4}C(t){t&&t!==k?this.element.setAttribute(this.name,Dl):this.element.removeAttribute(this.name)}}class Bl extends Se{constructor(t,e,r,l,i){super(t,e,r,l,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=Tt(this,t,e,0))!==null&&r!==void 0?r:k)===it)return;const l=this._$AH,i=t===k&&l!==k||t.capture!==l.capture||t.once!==l.once||t.passive!==l.passive,n=t!==k&&(l===k||i);i&&this.element.removeEventListener(this.name,this,l),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Zl{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}}const so=window.litHtmlPolyfillSupport;so==null||so(Dt,Bt),((qe=globalThis.litHtmlVersions)!==null&&qe!==void 0?qe:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe,Ye;class g extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zl(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return it}}g.finalized=!0,g._$litElement$=!0,(Xe=globalThis.litElementHydrateSupport)===null||Xe===void 0||Xe.call(globalThis,{LitElement:g});const uo=globalThis.litElementPolyfillSupport;uo==null||uo({LitElement:g});((Ye=globalThis.litElementVersions)!==null&&Ye!==void 0?Ye:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wl=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function x(o){return(t,e)=>e!==void 0?((r,l,i)=>{l.constructor.createProperty(i,r)})(o,t,e):Wl(o,t)}const m=$`
  /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }
  ul {
    list-style: none;
  }
  button,
  input,
  select {
    margin: 0;
  }
  html {
    box-sizing: border-box;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
`;var Lo=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Pe extends g{constructor(){super(...arguments),this.bordered=!1,this.placeholderAlt=""}static get styles(){return[m,$`
        :host {
          --turtle-avatar--size: calc(4.8 * var(--turtle-ui--unit));

          display: inline-block;
          width: var(--turtle-avatar--size);
          height: var(--turtle-avatar--size);
          box-sizing: border-box;

          border-radius: 50%;
          overflow: hidden;
        }
        :host([bordered]) {
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }

        ::slotted(*),
        .placeholder {
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-sizing: border-box;
        }

        .placeholder-bg {
          fill: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }

        .placeholder-fg {
          fill: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }

        @media (prefers-color-scheme: dark) {
          .placeholder-fg {
            fill: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--6)
            );
          }
        }
      `]}render(){return b`
      <slot>
        <svg
          class="placeholder"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label=${this.placeholderAlt}
        >
          <g clip-path="url(#a)">
            <path class="placeholder-bg" d="M0 0h32v32H0z" />
            <path
              class="placeholder-fg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 20c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Zm0 23c6.0751 0 11-4.9249 11-11s-4.9249-11-11-11C9.92487 21 5 25.9249 5 32s4.92487 11 11 11Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
          </defs>
        </svg>
      </slot>
    `}}Pe.defaultTagName="turtle-avatar";Lo([x({type:Boolean,reflect:!0})],Pe.prototype,"bordered",void 0);Lo([x({type:String,attribute:"placeholder-alt"})],Pe.prototype,"placeholderAlt",void 0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fr=o=>(...t)=>({_$litDirective$:o,values:t});class gr{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const br=fr(class extends gr{constructor(o){var t;if(super(o),o.type!==Ht.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ct===void 0){this.ct=new Set;for(const r in t)this.ct.add(r);return this.render(t)}this.ct.forEach(r=>{t[r]==null&&(this.ct.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const l=t[r];l!=null&&(this.ct.add(r),r.includes("-")?e.setProperty(r,l):e[r]=l)}return lt}});var jo=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Fe extends g{constructor(){super(...arguments),this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[m,$`
        * {
          box-sizing: border-box;
        }

        :host {
          --turtle-balloon--bg: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.8
          );
          --turtle-balloon--tail-width: calc(1.3 * var(--turtle-ui--unit));
          --turtle-balloon--tail-height: calc(0.6 * var(--turtle-ui--unit));
          --turtle-balloon--radius: 4px;

          display: inline-flex;
          box-sizing: border-box;
        }
        :host([tail-position="bottom"]) {
          flex-direction: column;
        }
        :host([tail-position="top"]) {
          flex-direction: column-reverse;
        }
        :host([tail-position="right"]) {
          flex-direction: row;
        }
        :host([tail-position="left"]) {
          flex-direction: row-reverse;
        }

        .body {
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          padding: 8px;

          background-color: var(--turtle-balloon--bg);
          border-radius: var(--turtle-balloon--radius);
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
        }

        .tail {
          border: calc(var(--turtle-balloon--tail-width) * 0.5) solid
            transparent;
        }
        :host([tail-position="bottom"]) > .tail,
        :host([tail-position="top"]) > .tail {
          margin-left: calc(
            (
                100% - var(--turtle-balloon--tail-width) -
                  var(--turtle-balloon--radius) * 2
              ) * var(--turtle-balloon--tail-offset) +
              var(--turtle-balloon--radius) + var(--turtle-balloon--tail-width) *
              0.5
          );
          width: var(--turtle-balloon--tail-width);
          height: var(--turtle-balloon--tail-height);
          transform: translateX(-50%);
        }
        :host([tail-position="bottom"]) > .tail {
          border-top-color: var(--turtle-balloon--bg);
          border-bottom: none;
        }
        :host([tail-position="top"]) > .tail {
          border-bottom-color: var(--turtle-balloon--bg);
          border-top: none;
        }
        :host([tail-position="left"]) > .tail,
        :host([tail-position="right"]) > .tail {
          height: var(--turtle-balloon--tail-width);
          width: var(--turtle-balloon--tail-height);
          align-self: center;
        }
        :host([tail-position="left"]) > .tail {
          border-right-color: var(--turtle-balloon--bg);
          border-left: none;
        }
        :host([tail-position="right"]) > .tail {
          border-left-color: var(--turtle-balloon--bg);
          border-right: none;
        }
      `]}render(){return b`
      <div class="body">
        <slot></slot>
      </div>

      <div
        class="tail"
        style=${br({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}Fe.defaultTagName="turtle-balloon";jo([x({type:String,attribute:"tail-position"})],Fe.prototype,"tailPosition",void 0);jo([x({type:Number,attribute:"tail-offset"})],Fe.prototype,"tailOffset",void 0);var co=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},oe;class G{constructor(t,e=""){this.assigned=!1,oe.set(this,()=>{if(!this.host.shadowRoot)return;const r=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",l=this.host.shadowRoot.querySelector(r);this.assigned=!!l&&l.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",co(this,oe,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",co(this,oe,"f"))}}oe=new WeakMap;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=o=>o!=null?o:U;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vl=o=>o.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=(o,t)=>{var e,r;const l=o._$AN;if(l===void 0)return!1;for(const i of l)(r=(e=i)._$AO)===null||r===void 0||r.call(e,t,!1),jt(i,t);return!0},ke=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},zo=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),Xl(t)}};function Gl(o){this._$AN!==void 0?(ke(this),this._$AM=o,zo(this)):this._$AM=o}function ql(o,t=!1,e=0){const r=this._$AH,l=this._$AN;if(l!==void 0&&l.size!==0)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)jt(r[i],!1),ke(r[i]);else r!=null&&(jt(r,!1),ke(r));else jt(this,o)}const Xl=o=>{var t,e,r,l;o.type==Ht.CHILD&&((t=(r=o)._$AP)!==null&&t!==void 0||(r._$AP=ql),(e=(l=o)._$AQ)!==null&&e!==void 0||(l._$AQ=Gl))};class Yl extends gr{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),zo(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,l;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(l=this.disconnected)===null||l===void 0||l.call(this)),e&&(jt(this,t),ke(this))}setValue(t){if(Vl(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}var Jt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Qt=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,l){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!l:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?l.call(o,e):l?l.value=e:t.set(o,e),e},dt,ht;class Kl extends Yl{constructor(t){if(super(t),dt.set(this,null),ht.set(this,[]),t.type!==Ht.CHILD&&t.type!==Ht.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var r;(r=Jt(this,dt,"f"))===null||r===void 0||r.call(this);const l="parentNode"in t?t.parentNode:t.element;if(!("tagName"in l)||l.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const i=()=>{Jt(this,ht,"f").forEach(a=>a());const n=l.assignedElements();Qt(this,ht,n.map(e).filter(a=>!!a),"f")};return l.addEventListener("slotchange",i),Qt(this,dt,()=>{l.removeEventListener("slotchange",i)},"f"),this.render(e)}render(t){return it}disconnected(){var t;(t=Jt(this,dt,"f"))===null||t===void 0||t.call(this),Qt(this,dt,null,"f"),Jt(this,ht,"f").forEach(e=>e()),Qt(this,ht,[],"f")}}dt=new WeakMap,ht=new WeakMap;const W=fr(Kl);var ho=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},vo=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,l){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!l:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?l.call(o,e):l?l.value=e:t.set(o,e),e},Ut=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)};function At(o){var t,e,r;class l extends o{constructor(){super(...arguments),this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(n=>{!n[0]||vo(this,t,po(n[0].target),"f")})),r.set(this,n=>{!Ut(this,t,"f")||(n.preventDefault(),n.stopPropagation())})}renderLightDOMSlot(n){return b`<slot id="lightdom" class=${Ae(n)}>
        ${W(a=>{if("getAttribute"in a)return vo(this,t,po(a),"f"),a.addEventListener("click",Ut(this,r,"f")),Ut(this,e,"f").observe(a,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{a.removeEventListener("click",Ut(this,r,"f")),Ut(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,r=new WeakMap,ho([x({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),ho([x({type:Boolean,attribute:"lightdom"})],l.prototype,"lightDOM",void 0),l}function po(o){const t=o.getAttribute("aria-disabled");return t?t==="true":"disabled"in o?o.disabled:!1}var mr=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},fo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},le;class Zt extends At(g){constructor(){super(...arguments),this.variant="normal",this.rounded=!1,this.iconOnly=!1,le.set(this,new G(this,"icon"))}static get styles(){return[m,$`
        :host {
          --base-font-size: var(--turtle-ui--base-font-size, 1rem);
          --turtle-ui--button--border-color: var(--turtle-ui--color--border);
          --turtle-ui--button--fg: var(--turtle-ui--color--text);
          --turtle-ui--button--bg: var(--turtle-ui--color--background);
          --turtle-ui--button--bg--hover: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          --turtle-ui--button--bg--active: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
          --turtle-ui--button--highlight-color: var(
            --turtle-ui--color--highlight
          );
          --turtle-ui--button--highlight-shadow-color: var(
            --turtle-ui--color--highlight--shadow
          );
          --turtle-button--base-radius: 8px;

          display: inline-block;
          font-size: var(--base-font-size);
          width: auto;
          box-sizing: border-box;
          position: relative;
        }
        :host([rounded]) {
          --turtle-button--base-radius: 40px;
        }

        :host([variant="primary"]) {
          --turtle-ui--button--border-color: transparent;
          --turtle-ui--button--fg: hsl(
            var(--turtle-ui--color--tone--mono),
            100%
          );
          --turtle-ui--button--bg: var(--turtle-ui--color--primary);
          --turtle-ui--button--bg--hover: var(
            --turtle-ui--color--primary--light
          );
          --turtle-ui--button--bg--active: var(
            --turtle-ui--color--primary--dark
          );
          --turtle-ui--button--highlight-color: rgba(0, 0, 0, 0.4);
          --turtle-ui--button--highlight-shadow-color: rgba(0, 0, 0, 0.4);
        }

        :host([variant="danger"]) {
          --turtle-ui--button--border-color: transparent;
          --turtle-ui--button--fg: hsl(
            var(--turtle-ui--color--tone--mono),
            100%
          );
          --turtle-ui--button--bg: var(--turtle-ui--color--danger);
          --turtle-ui--button--bg--hover: var(
            --turtle-ui--color--danger--light
          );
          --turtle-ui--button--bg--active: var(
            --turtle-ui--color--danger--dark
          );
          --turtle-ui--button--highlight-color: rgba(0, 0, 0, 0.4);
          --turtle-ui--button--highlight-shadow-color: rgba(0, 0, 0, 0.4);
        }

        .button,
        :host([lightdom]) .lightdom::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          height: 100%;
          font: inherit;
          font-size: 1em;
          line-height: 1.5;
          border: 1px solid var(--turtle-ui--button--border-color);
          padding: calc(var(--base-font-size) / 2)
            calc(var(--base-font-size) * 0.75);
          box-sizing: border-box;

          background-color: var(--turtle-ui--button--bg);
          border-radius: var(
              --turtle-button--top-left-radius,
              var(--turtle-button--base-radius)
            )
            var(
              --turtle-button--top-right-radius,
              var(--turtle-button--base-radius)
            )
            var(
              --turtle-button--bottom-right-radius,
              var(--turtle-button--base-radius)
            )
            var(
              --turtle-button--bottom-left-radius,
              var(--turtle-button--base-radius)
            );
          color: var(--turtle-ui--button--fg);
          cursor: pointer;
          font-weight: bold;
          text-align: center;
          text-decoration: inherit;
        }
        .button.with-icon,
        :host([lightdom]) .lightdom.with-icon::slotted(*) {
          padding-inline-start: calc(4 * var(--turtle-ui--unit));
        }
        :host([icon-only]) .button.with-icon,
        :host([icon-only][lightdom]) .lightdom.with-icon::slotted(*) {
          font-size: 0;
          padding: calc(2 * var(--turtle-ui--unit));

          color: transparent;
        }
        .button:hover,
        :host([lightdom]) .lightdom::slotted(:hover) {
          background-color: var(--turtle-ui--button--bg--hover);
        }
        .button:active,
        :host([lightdom]) .lightdom::slotted(:active) {
          background-color: var(--turtle-ui--button--bg--active);
        }
        .button:focus,
        :host([lightdom]) .lightdom::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--button--highlight-shadow-color)
            inset;
          border-color: var(--turtle-ui--button--highlight-color);
          outline: none;
        }
        .button:disabled,
        :host([lightdom]) .lightdom::slotted(:disabled),
        :host([lightdom]) .lightdom::slotted([aria-disabled="true"]) {
          box-shadow: none;
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
        }

        [data-hidden] {
          display: none;
        }

        .icon {
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          font-size: calc(2.4 * var(--turtle-ui--unit));
          display: flex;
          justify-content: center;
          align-items: center;

          color: var(--turtle-ui--button--fg);
          pointer-events: none;
        }
        :host([icon-only]) .icon {
          left: 0;
          right: 0;
        }
        .icon[data-disabled] {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){const t=fo(this,le,"f").assigned?"with-icon":"",e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):b`
          <button
            class="button ${t}"
            ?disabled=${this.disabled}
            part="button"
          >
            <slot></slot>
          </button>
        `;return b`
      ${e}

      <span
        class="icon"
        ?data-hidden=${!fo(this,le,"f").assigned}
        ?data-disabled=${this.disabled}
        part="icon"
      >
        <slot name="icon"></slot>
      </span>
    `}}le=new WeakMap;Zt.defaultTagName="turtle-button";mr([x({type:String})],Zt.prototype,"variant",void 0);mr([x({type:Boolean,reflect:!0})],Zt.prototype,"rounded",void 0);mr([x({type:Boolean,reflect:!0,attribute:"icon-only"})],Zt.prototype,"iconOnly",void 0);var Jl=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class wr extends g{constructor(){super(...arguments),this.evenly=!1}static get styles(){return[m,$`
        :host {
          display: inline-flex;
        }
        :host([evenly]) {
          align-items: stretch;
        }
        :host([evenly]) ::slotted(*) {
          flex: 1;
        }

        ::slotted(:not(:last-child)) {
          --turtle-button--top-right-radius: 0;
          --turtle-button--bottom-right-radius: 0;
        }
        ::slotted(:not(:first-child)) {
          --turtle-button--top-left-radius: 0;
          --turtle-button--bottom-left-radius: 0;
        }
      `]}render(){return b` <slot></slot> `}}wr.defaultTagName="turtle-button-group";Jl([x({type:Boolean,reflect:!0})],wr.prototype,"evenly",void 0);var Ro=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},go=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},tr,er;class Ue extends g{constructor(){super(...arguments),tr.set(this,new G(this,"action")),er.set(this,new G(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[m,$`
        :host {
          --turtle-ui--card--radius: 8px;

          display: block;
          border-radius: var(--turtle-ui--card--radius);

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          overflow: hidden;
        }

        :host([shadowed]) {
          box-shadow: var(--turtle-ui--shadow--1);
        }

        :host([bordered]) {
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }

        .image-sizer {
          position: relative;
          width: 100%;
          height: 0;
          padding-top: min(56.875%, 30vh);
        }
        .image-sizer:not([assigned]) {
          display: none;
        }

        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          overflow: hidden;
        }

        ::slotted([slot="image"]) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .body {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          padding: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: normal;
        }

        ::slotted([slot="title"]) {
          display: block;
          font-size: calc(1.8 * var(--turtle-ui--unit));
          line-height: 1.78;
          margin-bottom: calc(0.8 * var(--turtle-ui--unit));

          font-weight: bold;
        }

        .actions {
          display: flex;
          border-top: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
        .actions:not([assigned]) {
          display: none;
        }

        ::slotted([slot="action"]:not(:first-of-type)) {
          border-left: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
        ::slotted([slot="action"]:first-of-type) {
          border-bottom-left-radius: var(--turtle-ui--card--radius);
        }
        ::slotted([slot="action"]:last-of-type) {
          border-bottom-right-radius: var(--turtle-ui--card--radius);
        }
      `]}render(){return b`
      <div class="image-sizer" ?assigned=${go(this,er,"f").assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${go(this,tr,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}tr=new WeakMap,er=new WeakMap;Ue.defaultTagName="turtle-card";Ro([x({type:Boolean,attribute:"shadowed",reflect:!0})],Ue.prototype,"shadowed",void 0);Ro([x({type:Boolean,attribute:"bordered",reflect:!0})],Ue.prototype,"bordered",void 0);class Io extends At(g){static get styles(){return[m,$`
        :host {
          flex: 1;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 12px;
          font: inherit;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          border: none;
          box-sizing: border-box;

          background: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: inherit;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          cursor: pointer;
          font-weight: normal;
          outline: none;
          text-align: center;
          text-decoration: none;
          user-select: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active,
        ::slotted(:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow) inset;
        }
        .button:disabled,
        ::slotted(:disabled),
        ::slotted([aria-disabled="true"]) {
          box-shadow: none;
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
        }
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():b`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Io.defaultTagName="turtle-card-action";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(o){return x({...o,state:!0})}var No=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},B=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ie,Mt,Y;class Oe extends g{constructor(){super(...arguments),this._checkState="unchecked",this._disabled=!1,ie.set(this,new MutationObserver(t=>{!t[0]||B(this,Mt,"f").call(this,t[0].target)})),Mt.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),Y.set(this,t=>{B(this,Mt,"f").call(this,t.currentTarget)})}static get styles(){return[m,$`
        * {
          box-sizing: border-box;
        }

        :host {
          display: inline-block;
          position: relative;
          width: calc(2 * var(--turtle-ui--unit));
          height: calc(2 * var(--turtle-ui--unit));

          vertical-align: text-bottom;
        }

        ::slotted(input) {
          appearance: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: calc(0.4 * var(--turtle-ui--unit));

          transition: 1ms 0s linear background-color;
        }
        ::slotted(input:checked),
        ::slotted(input:indeterminate) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:not(:disabled):checked:hover),
        ::slotted(input:not(:disabled):indeterminate:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--6)
          );
        }
        ::slotted(input:hover),
        ::slotted(input:focus) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
          outline: none;
        }
        ::slotted(input:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .icon {
          display: none;
          position: absolute;
          width: calc(1.2 * var(--turtle-ui--unit));
          height: calc(1.2 * var(--turtle-ui--unit));
          top: 50%;
          left: 50%;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          pointer-events: none;

          transform: translate(-50%, -50%);
        }
        .icon[data-active] {
          display: block;
        }
        .icon[data-disabled] {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){return b`
      <slot
        >${W(t=>{if("checked"in t)return B(this,Mt,"f").call(this,t),t.addEventListener("change",B(this,Y,"f")),t.addEventListener("input",B(this,Y,"f")),t.addEventListener("transitionstart",B(this,Y,"f")),B(this,ie,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked","indeterminate"]}),()=>{t.removeEventListener("change",B(this,Y,"f")),t.removeEventListener("input",B(this,Y,"f")),t.removeEventListener("transitionstart",B(this,Y,"f")),B(this,ie,"f").disconnect()}})}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState==="checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${Ql}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState==="indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${ti}
      </svg>
    `}}ie=new WeakMap,Mt=new WeakMap,Y=new WeakMap;Oe.defaultTagName="turtle-checkbox";No([R()],Oe.prototype,"_checkState",void 0);No([R()],Oe.prototype,"_disabled",void 0);const Ql=T`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,ti=T`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`,O=$`
  :host {
    display: inline-flex;
    width: auto;
    height: 1em;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: inherit;
    height: inherit;

    color: inherit;
  }
`;class Do extends g{static get styles(){return[m,O]}render(){return Ho()}}Do.defaultTagName="turtle-terminal-icon";const Ho=o=>T`
  <svg part=${Ae(o)} class="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;var Me=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},Ke=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,l){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!l:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?l.call(o,e):l?l.value=e:t.set(o,e),e},M=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},V,K,vt,ne,ae,rr,or;class kt extends g{constructor(){super(...arguments),this.role="combobox",this.noAutoAria=!1,V.set(this,null),K.set(this,0),this._listbox=null,this._options=[],vt.set(this,t=>{var e,r;if(this.noAutoAria||(Ke(this,K,t,"f"),!M(this,V,"f")))return;if(!this._options.length){M(this,V,"f").removeAttribute("aria-activedescendant");return}this._options.forEach((i,n)=>{n===t?i.setAttribute("aria-selected","true"):i.removeAttribute("aria-selected")});const l=this._options[t];if(!(l!=null&&l.id)){console.warn("[turtle-command-palette] Listbox option MUST have an ID.");return}((e=this._listbox)===null||e===void 0?void 0:e.clientHeight)!==((r=this._listbox)===null||r===void 0?void 0:r.scrollHeight)&&l.scrollIntoView(),M(this,V,"f").setAttribute("aria-activedescendant",l.id)}),ne.set(this,()=>{if(this.noAutoAria||!M(this,V,"f")||!this._listbox||this.role!=="combobox")return;if(!this._listbox.id){console.warn("[turtle-command-palette] Listbox MUST have an ID.");return}const t=Array.from(this._listbox.children);this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-owns",this._listbox.id),this.setAttribute("aria-expanded",String(t.length>0)),M(this,V,"f").setAttribute("aria-controls",this._listbox.id)}),ae.set(this,t=>{if(!t.isComposing)switch(t.key){case"Enter":M(this,rr,"f").call(this),t.preventDefault();return;case"Escape":M(this,or,"f").call(this),t.preventDefault();return;case"ArrowUp":{const e=M(this,K,"f")<=0?this._options.length-1:M(this,K,"f")-1;M(this,vt,"f").call(this,e),t.preventDefault();return}case"ArrowDown":{const e=M(this,K,"f")>=this._options.length-1?0:M(this,K,"f")+1;M(this,vt,"f").call(this,e),t.preventDefault();return}}}),rr.set(this,(t=M(this,K,"f"))=>{const e=this._options[t];!e||e.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))}),or.set(this,()=>{this.dispatchEvent(new CustomEvent("cancel"))})}static get styles(){return[m,$`
        :host {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          padding: 16px;
          box-sizing: border-box;
          max-height: 100%;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--9)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .searchbox {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .search::slotted(*) {
          appearance: none;
          display: block;
          flex: 1;
          min-width: 0;
          padding: 8px 12px;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          font: inherit;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          border-radius: 8px;
          outline: none;
        }
        .search::slotted(*:hover),
        .search::slotted(*:focus) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        .search::slotted(*:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
        }
        .search::slotted(input)::placeholder {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );

          opacity: 1;
        }

        .icon::slotted(*),
        [part="icon"] {
          flex-shrink: 0;
          width: calc(3.2 * var(--turtle-ui--unit));
          height: calc(3.2 * var(--turtle-ui--unit));
          margin: 4px 0;
          margin-inline-end: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }

        .listbox::slotted(*) {
          margin-top: 16px;
          flex-shrink: 1;
        }

        .placeholder::slotted(*) {
          display: block;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin: 0;
          margin-top: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
          text-align: center;
        }

        [data-hidden]::slotted(*) {
          display: none;
        }
      `]}render(){return b`
      <div class="searchbox">
        <slot class="icon" name="icon"
          >${Ho("icon")}</slot
        >
        <slot class="search" name="search"
          >${W(t=>{if("disabled"in t)return Ke(this,V,t,"f"),M(this,ne,"f").call(this),t.addEventListener("keydown",M(this,ae,"f")),()=>{Ke(this,V,null,"f"),t.removeEventListener("keydown",M(this,ae,"f"))}})}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${W(t=>{var e;this._listbox=t,this._options=Array.from(t.children),M(this,ne,"f").call(this),M(this,vt,"f").call(this,0);const r=()=>{M(this,vt,"f").call(this,0),this._options=Array.from(t.children)};(e=t.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",r);const l=i=>{if(!i.target||!("getAttribute"in i.target))return;const a=i.target.closest("turtle-command-palette-option");a&&a.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))};return t.addEventListener("click",l),()=>{var i;this._listbox=null,this._options=[],(i=t.shadowRoot)===null||i===void 0||i.removeEventListener("slotchange",r),t.removeEventListener("click",l)}})}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length>0}
      ></slot>
    `}}V=new WeakMap,K=new WeakMap,vt=new WeakMap,ne=new WeakMap,ae=new WeakMap,rr=new WeakMap,or=new WeakMap;kt.defaultTagName="turtle-command-palette";Me([x({type:String,reflect:!0})],kt.prototype,"role",void 0);Me([x({type:Boolean,attribute:"noautoaria"})],kt.prototype,"noAutoAria",void 0);Me([R()],kt.prototype,"_listbox",void 0);Me([R()],kt.prototype,"_options",void 0);var ei=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},bo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},se;class yr extends g{constructor(){super(...arguments),this.role="listbox",se.set(this,()=>{this.children.length>0?this.removeAttribute("empty"):this.setAttribute("empty","")})}static get styles(){return[m,$`
        :host {
          --turtle-command-palette-listbox--radius: 8px;

          display: block;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          border-radius: var(--turtle-command-palette-listbox--radius);
          overflow-y: auto;
        }
        :host([empty]) {
          display: none;
        }

        ::slotted(:first-child) {
          border-top-left-radius: var(--turtle-command-palette-listbox--radius);
          border-top-right-radius: var(
            --turtle-command-palette-listbox--radius
          );
        }
        ::slotted(:last-child) {
          border-bottom-left-radius: var(
            --turtle-command-palette-listbox--radius
          );
          border-bottom-right-radius: var(
            --turtle-command-palette-listbox--radius
          );
        }
        ::slotted(*:not(:first-child)) {
          border-top: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
      `]}connectedCallback(){super.connectedCallback(),bo(this,se,"f").call(this)}render(){return b`<slot @slotchange=${bo(this,se,"f")}></slot>`}}se=new WeakMap;yr.defaultTagName="turtle-command-palette-listbox";ei([x({type:String,reflect:!0})],yr.prototype,"role",void 0);var ri=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class _r extends g{constructor(){super(...arguments),this.role="option"}static get styles(){return[m,$`
        :host {
          display: block;
          padding: 12px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          cursor: pointer;
        }
        :host([aria-selected="true"]) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9),
            0.5
          );
        }
        :host(:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        :host(:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .title {
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: bold;
        }

        .description::slotted(*) {
          display: block;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin: 0;
          margin-top: 4px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
        }
      `]}render(){return b`
      <span class="title">
        <slot></slot>
      </span>

      <slot class="description" name="description"></slot>
    `}}_r.defaultTagName="turtle-command-palette-option";ri([x({type:String,reflect:!0})],_r.prototype,"role",void 0);var oi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class xr extends g{static get styles(){return $`
      :host {
        --turtle-ui--unit: 10px;
        --turtle-ui--base-font-size: calc(1.6 * var(--turtle-ui--unit));

        /* Levels (light) */
        --turtle-ui--color--level--light-0: 0%;
        --turtle-ui--color--level--light-1: 10%;
        --turtle-ui--color--level--light-2: 20%;
        --turtle-ui--color--level--light-3: 30%;
        --turtle-ui--color--level--light-4: 40%;
        --turtle-ui--color--level--light-5: 50%;
        --turtle-ui--color--level--light-6: 60%;
        --turtle-ui--color--level--light-7: 70%;
        --turtle-ui--color--level--light-8: 80%;
        --turtle-ui--color--level--light-9: 90%;
        --turtle-ui--color--level--light-10: 100%;
        --turtle-ui--color--level--light-safe: 34%;
        --turtle-ui--color--level--light-danger: 44%;
        --turtle-ui--color--level--light-primary: 40%;
        --turtle-ui--level--modifier--light-darker: -1;
        --turtle-ui--level--modifier--light-lighter: 1;
        --turtle-ui--level--modifier--light-amount: 16%;

        /* Levels (dark) */
        --turtle-ui--color--level--dark-0: 100%;
        --turtle-ui--color--level--dark-1: 92%;
        --turtle-ui--color--level--dark-2: 84%;
        --turtle-ui--color--level--dark-3: 76%;
        --turtle-ui--color--level--dark-4: 68%;
        --turtle-ui--color--level--dark-5: 60%;
        --turtle-ui--color--level--dark-6: 52%;
        --turtle-ui--color--level--dark-7: 44%;
        --turtle-ui--color--level--dark-8: 36%;
        --turtle-ui--color--level--dark-9: 28%;
        --turtle-ui--color--level--dark-10: 20%;
        --turtle-ui--level--modifier--dark-darker: 1;
        --turtle-ui--level--modifier--dark-lighter: -1;

        /* Default levels */
        --turtle-ui--color--level--0: var(--turtle-ui--color--level--light-0);
        --turtle-ui--color--level--1: var(--turtle-ui--color--level--light-1);
        --turtle-ui--color--level--2: var(--turtle-ui--color--level--light-2);
        --turtle-ui--color--level--3: var(--turtle-ui--color--level--light-3);
        --turtle-ui--color--level--4: var(--turtle-ui--color--level--light-4);
        --turtle-ui--color--level--5: var(--turtle-ui--color--level--light-5);
        --turtle-ui--color--level--6: var(--turtle-ui--color--level--light-6);
        --turtle-ui--color--level--7: var(--turtle-ui--color--level--light-7);
        --turtle-ui--color--level--8: var(--turtle-ui--color--level--light-8);
        --turtle-ui--color--level--9: var(--turtle-ui--color--level--light-9);
        --turtle-ui--color--level--10: var(--turtle-ui--color--level--light-10);
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--light-safe
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--light-danger
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--light-primary
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--light-darker
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--light-lighter
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--light-amount
        );

        --turtle-ui--color--tone--mono: 0, 0%;
        --turtle-ui--color--tone--safe: 123, 46%;
        --turtle-ui--color--tone--warning: 43, 96%;
        --turtle-ui--color--tone--danger: 14, 100%;
        --turtle-ui--color--tone--primary: 204, 100%;

        --turtle-ui--color--background: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--10)
        );
        --turtle-ui--color--text: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--0)
        );
        --turtle-ui--color--border: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--7)
        );
        --turtle-ui--color--safe: hsl(
          var(--turtle-ui--color--tone--safe),
          var(--turtle-ui--color--level--safe)
        );
        --turtle-ui--color--safe--light: hsl(
          var(--turtle-ui--color--tone--safe),
          calc(
            var(--turtle-ui--color--level--safe) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--safe--dark: hsl(
          var(--turtle-ui--color--tone--safe),
          calc(
            var(--turtle-ui--color--level--safe) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--primary: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary)
        );
        --turtle-ui--color--primary--light: hsl(
          var(--turtle-ui--color--tone--primary),
          calc(
            var(--turtle-ui--color--level--primary) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--primary--dark: hsl(
          var(--turtle-ui--color--tone--primary),
          calc(
            var(--turtle-ui--color--level--primary) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--danger: hsl(
          var(--turtle-ui--color--tone--danger),
          var(--turtle-ui--color--level--danger)
        );
        --turtle-ui--color--danger--light: hsl(
          var(--turtle-ui--color--tone--danger),
          calc(
            var(--turtle-ui--color--level--danger) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--danger--dark: hsl(
          var(--turtle-ui--color--tone--danger),
          calc(
            var(--turtle-ui--color--level--danger) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--highlight: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary)
        );
        --turtle-ui--color--highlight--shadow: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary),
          0.32
        );

        --turtle-ui--shadow--1: 0px 4px 16px rgba(0, 0, 0, 0.08);
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --turtle-ui--color--level--0: var(
            --turtle-ui--color--level--dark-0,
            var(--turtle-ui--color--level--light-0)
          );
          --turtle-ui--color--level--1: var(
            --turtle-ui--color--level--dark-1,
            var(--turtle-ui--color--level--light-1)
          );
          --turtle-ui--color--level--2: var(
            --turtle-ui--color--level--dark-2,
            var(--turtle-ui--color--level--light-2)
          );
          --turtle-ui--color--level--3: var(
            --turtle-ui--color--level--dark-3,
            var(--turtle-ui--color--level--light-3)
          );
          --turtle-ui--color--level--4: var(
            --turtle-ui--color--level--dark-4,
            var(--turtle-ui--color--level--light-4)
          );
          --turtle-ui--color--level--5: var(
            --turtle-ui--color--level--dark-5,
            var(--turtle-ui--color--level--light-5)
          );
          --turtle-ui--color--level--6: var(
            --turtle-ui--color--level--dark-6,
            var(--turtle-ui--color--level--light-6)
          );
          --turtle-ui--color--level--7: var(
            --turtle-ui--color--level--dark-7,
            var(--turtle-ui--color--level--light-7)
          );
          --turtle-ui--color--level--8: var(
            --turtle-ui--color--level--dark-8,
            var(--turtle-ui--color--level--light-8)
          );
          --turtle-ui--color--level--9: var(
            --turtle-ui--color--level--dark-9,
            var(--turtle-ui--color--level--light-9)
          );
          --turtle-ui--color--level--10: var(
            --turtle-ui--color--level--dark-10,
            var(--turtle-ui--color--level--light-10)
          );
          --turtle-ui--color--level--safe: var(
            --turtle-ui--color--level--dark-safe,
            var(--turtle-ui--color--level--light-safe)
          );
          --turtle-ui--color--level--danger: var(
            --turtle-ui--color--level--dark-danger,
            var(--turtle-ui--color--level--light-danger)
          );
          --turtle-ui--color--level--primary: var(
            --turtle-ui--color--level--dark-primary,
            var(--turtle-ui--color--level--light-primary)
          );
          --turtle-ui--level--modifier--darker: var(
            --turtle-ui--level--modifier--dark-darker,
            var(--turtle-ui--level--modifier--light-darker)
          );
          --turtle-ui--level--modifier--lighter: var(
            --turtle-ui--level--modifier--dark-lighter,
            var(--turtle-ui--level--modifier--light-lighter)
          );
          --turtle-ui--level--modifier--amount: var(
            --turtle-ui--level--modifier--dark-amount,
            var(--turtle-ui--level--modifier--light-amount)
          );
        }
      }

      :host([theme="light"]) {
        --turtle-ui--color--level--0: var(--turtle-ui--color--level--light-0);
        --turtle-ui--color--level--1: var(--turtle-ui--color--level--light-1);
        --turtle-ui--color--level--2: var(--turtle-ui--color--level--light-2);
        --turtle-ui--color--level--3: var(--turtle-ui--color--level--light-3);
        --turtle-ui--color--level--4: var(--turtle-ui--color--level--light-4);
        --turtle-ui--color--level--5: var(--turtle-ui--color--level--light-5);
        --turtle-ui--color--level--6: var(--turtle-ui--color--level--light-6);
        --turtle-ui--color--level--7: var(--turtle-ui--color--level--light-7);
        --turtle-ui--color--level--8: var(--turtle-ui--color--level--light-8);
        --turtle-ui--color--level--9: var(--turtle-ui--color--level--light-9);
        --turtle-ui--color--level--10: var(--turtle-ui--color--level--light-10);
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--light-safe
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--light-danger
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--light-primary
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--light-darker
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--light-lighter
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--light-amount
        );
      }

      :host([theme="dark"]) {
        --turtle-ui--color--level--0: var(
          --turtle-ui--color--level--dark-0,
          var(--turtle-ui--color--level--light-0)
        );
        --turtle-ui--color--level--1: var(
          --turtle-ui--color--level--dark-1,
          var(--turtle-ui--color--level--light-1)
        );
        --turtle-ui--color--level--2: var(
          --turtle-ui--color--level--dark-2,
          var(--turtle-ui--color--level--light-2)
        );
        --turtle-ui--color--level--3: var(
          --turtle-ui--color--level--dark-3,
          var(--turtle-ui--color--level--light-3)
        );
        --turtle-ui--color--level--4: var(
          --turtle-ui--color--level--dark-4,
          var(--turtle-ui--color--level--light-4)
        );
        --turtle-ui--color--level--5: var(
          --turtle-ui--color--level--dark-5,
          var(--turtle-ui--color--level--light-5)
        );
        --turtle-ui--color--level--6: var(
          --turtle-ui--color--level--dark-6,
          var(--turtle-ui--color--level--light-6)
        );
        --turtle-ui--color--level--7: var(
          --turtle-ui--color--level--dark-7,
          var(--turtle-ui--color--level--light-7)
        );
        --turtle-ui--color--level--8: var(
          --turtle-ui--color--level--dark-8,
          var(--turtle-ui--color--level--light-8)
        );
        --turtle-ui--color--level--9: var(
          --turtle-ui--color--level--dark-9,
          var(--turtle-ui--color--level--light-9)
        );
        --turtle-ui--color--level--10: var(
          --turtle-ui--color--level--dark-10,
          var(--turtle-ui--color--level--light-10)
        );
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--dark-safe,
          var(--turtle-ui--color--level--light-safe)
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--dark-danger,
          var(--turtle-ui--color--level--light-danger)
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--dark-primary,
          var(--turtle-ui--color--level--light-primary)
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--dark-darker,
          var(--turtle-ui--level--modifier--light-darker)
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--dark-lighter,
          var(--turtle-ui--level--modifier--light-lighter)
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--dark-amount,
          var(--turtle-ui--level--modifier--light-amount)
        );
      }

      :host {
        display: block;
        font-family: "Ubuntu", sans-serif;

        background-color: var(--turtle-ui--color--background);
        color: var(--turtle-ui--color--text);
      }
    `}render(){return b`<slot></slot>`}}xr.defaultTagName="turtle-design-system";oi([x({type:String,reflect:!0})],xr.prototype,"theme",void 0);var Bo=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Le extends g{constructor(){super(),this.disabled=!1,this.borderColor="neutral",this.addEventListener("drop",t=>{t.preventDefault(),this.disabled&&t.stopImmediatePropagation()},{capture:!0}),this.addEventListener("dragover",t=>{t.preventDefault(),this.disabled&&(t.dataTransfer&&(t.dataTransfer.dropEffect="none"),t.stopImmediatePropagation())},{capture:!0})}static get styles(){return[m,$`
        :host {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: calc(24 * var(--turtle-ui--unit));
          gap: calc(0.8 * var(--turtle-ui--unit));
          border: 2px dashed
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10),
            0.24
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          border-radius: 8px;
          user-select: none;
        }
        :host([disabled]) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
          cursor: not-allowed;
        }
        :host([border-color="primary"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        :host([border-color="safe"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }
        :host([border-color="danger"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );
        }
        :host([border-color="warning"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--warning),
            var(--turtle-ui--color--level--4)
          );
        }

        .icon::slotted(*) {
          font-size: calc(3.2 * var(--turtle-ui--unit));
        }

        .text {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
        }
      `]}render(){return b`
      <slot class="icon" name="icon"></slot>

      <span class="text">
        <slot></slot>
      </span>
    `}}Le.defaultTagName="turtle-drop-zone";Bo([x({type:Boolean,reflect:!0})],Le.prototype,"disabled",void 0);Bo([x({type:String,reflect:!0,attribute:"border-color"})],Le.prototype,"borderColor",void 0);var je=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},li=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,l){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!l:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?l.call(o,e):l?l.value=e:t.set(o,e),e},D=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},pt,ot,ue,Zo,ce,de;function ii(o){const t=o.getAttribute("aria-controls");if(!t)return null;const e=document.getElementById(t);return!e||!(e instanceof HTMLInputElement)||e.type!=="file"?null:e}class Ct extends g{constructor(){super(...arguments),pt.add(this),this.multiple=!1,this.delimiter=", ",ot.set(this,null),ce.set(this,t=>{const e=t.currentTarget;li(this,ot,e.files,"f"),this.requestUpdate(),this.dispatchEvent(new CustomEvent("selectfile",{detail:{files:e.files}}))}),de.set(this,t=>{const e=t.currentTarget,r=ii(e)||D(this,pt,"m",Zo).call(this);r.removeEventListener("input",D(this,ce,"f")),r.addEventListener("input",D(this,ce,"f"),{once:!0}),r.click()})}static get styles(){return[m,$`
        :host {
          display: flex;
          gap: calc(1.6 * var(--turtle-ui--unit));
          justify-content: start;
          align-items: center;

          overflow: visible;
        }

        .input::slotted(*) {
          flex-shrink: 0;
        }

        .filename {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;

          white-space: nowrap;
          overflow-x: hidden;
          text-overflow: ellipsis;
        }
      `]}get files(){return D(this,ot,"f")}render(){return b`
      <slot class="input"
        >${W(t=>(t.addEventListener("click",D(this,de,"f")),()=>{t.removeEventListener("click",D(this,de,"f"))}))}</slot
      >

      <span class="filename" part="text">
        ${D(this,pt,"a",ue)?b`<span title=${D(this,pt,"a",ue)}>${D(this,pt,"a",ue)}</span>`:b`<slot name="placeholder"></slot>`}
      </span>
    `}}ot=new WeakMap,ce=new WeakMap,de=new WeakMap,pt=new WeakSet,ue=function(){return!D(this,ot,"f")||!D(this,ot,"f").length?null:Array.from(D(this,ot,"f")).map(t=>t.name).join(this.delimiter)},Zo=function(){const t=document.createElement("input");return t.type="file",typeof this.accept=="string"&&(t.accept=this.accept),typeof this.capture=="string"&&(t.capture=this.capture),t.multiple=this.multiple,t};Ct.defaultTagName="turtle-file-input";je([x({type:String})],Ct.prototype,"accept",void 0);je([x({type:String})],Ct.prototype,"capture",void 0);je([x({type:Boolean})],Ct.prototype,"multiple",void 0);je([x({type:String})],Ct.prototype,"delimiter",void 0);var ni=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},st=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ft,he;class $r extends g{constructor(){super(...arguments),this._elementState="neutral",ft.set(this,t=>{st(this,he,"f").call(this,t.currentTarget)}),he.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[m,$`
        :host {
          display: inline-block;
        }

        .label::slotted(*) {
          display: block;
          box-sizing: border-box;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;
          margin-block-end: 8px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: bold;
        }

        .item::slotted(*) {
          width: 100%;
        }

        .description::slotted(*) {
          display: block;
          box-sizing: border-box;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin-block-start: 8px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }
        .invalid::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );
        }
        .valid::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }
      `]}render(){return b`
      <slot class="label" name="label"></slot>

      <slot class="item"
        >${W(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return st(this,he,"f").call(this,t),t.addEventListener("validitychange",st(this,ft,"f")),t.addEventListener("fieldtouch",st(this,ft,"f")),()=>{t.removeEventListener("validitychange",st(this,ft,"f")),t.removeEventListener("fieldtouch",st(this,ft,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}ft=new WeakMap,he=new WeakMap;$r.defaultTagName="turtle-form-field";ni([R()],$r.prototype,"_elementState",void 0);class Wo extends g{static get styles(){return[m,$`
        :host {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }

        .label::slotted(*) {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }
      `]}render(){return b`
      <slot></slot>

      <slot class="label" name="label"></slot>
    `}}Wo.defaultTagName="turtle-labelled-item";class Vo extends g{static get styles(){return[m,$`
        :host {
          --turtle-list--radius: 8px;

          box-sizing: border-box;
          display: inline-grid;
          grid-template-columns: minmax(100%, 1fr);
          grid-template-rows: min-content;
          gap: 1px;
          align-items: stretch;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          border-radius: var(--turtle-list--radius);
          overflow: hidden;
        }
      `]}render(){return b` <slot></slot> `}}Vo.defaultTagName="turtle-list";var mo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},lr,ir;class Go extends At(g){constructor(){super(...arguments),lr.set(this,new G(this,"icon-start")),ir.set(this,new G(this,"icon-end"))}static get styles(){return[m,$`
        :host {
          --turtle-list-item--icon-size: calc(2.4 * var(--turtle-ui--unit));
          --turtle-list-item--padding: 12px;
          --turtle-list-item--gap: 8px;

          display: block;
          position: relative;
          box-sizing: border-box;
        }

        .button,
        .body-slot::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          min-height: calc(
            2.4 * var(--turtle-ui--unit) + var(--turtle-list-item--padding) * 2
          );
          padding: var(--turtle-list-item--padding);
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;
          border: none;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          cursor: pointer;
          text-align: start;
          text-decoration: none;
          outline: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .button:hover,
        .body-slot::slotted(*:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active,
        .body-slot::slotted(*:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus,
        .body-slot::slotted(*:focus) {
          box-shadow: inset 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
        }
        .button:disabled,
        .body-slot::slotted(:disabled),
        .body-slot::slotted([aria-disabled="true"]) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          box-shadow: none;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
        }
        :host(:first-child) .button,
        :host(:first-child) .body-slot::slotted(*) {
          border-radius: var(--turtle-list--radius) var(--turtle-list--radius) 0
            0;
        }
        :host(:last-child) .button,
        :host(:last-child) .body-slot::slotted(*) {
          border-radius: 0 0 var(--turtle-list--radius)
            var(--turtle-list--radius);
        }

        .icon-start,
        .icon-start::slotted(*) {
          padding-inline-start: calc(
            var(--turtle-list-item--padding) +
              var(--turtle-list-item--icon-size) + var(--turtle-list-item--gap)
          );
        }

        .icon-end,
        .icon-end::slotted(*) {
          padding-inline-end: calc(
            var(--turtle-list-item--padding) +
              var(--turtle-list-item--icon-size) + var(--turtle-list-item--gap)
          );
        }

        [name="icon-start"]::slotted(*),
        [name="icon-end"]::slotted(*) {
          position: absolute;
          top: 50%;
          font-size: var(--turtle-list-item--icon-size);

          color: inherit;
          pointer-events: none;

          transform: translateY(-50%);
        }

        [name="icon-start"]::slotted(*) {
          left: var(--turtle-list-item--padding);
        }
        [name="icon-end"]::slotted(*) {
          right: var(--turtle-list-item--padding);
        }

        :host([disabled]) [name^="icon-"]::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){const t=["body-slot",mo(this,lr,"f").assigned?"icon-start":"",mo(this,ir,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):b`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return b`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}lr=new WeakMap,ir=new WeakMap;Go.defaultTagName="turtle-list-item";var ai=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},nr;class qo extends g{constructor(){super(...arguments),nr.set(this,new G(this,"image"))}static get styles(){return[m,$`
        * {
          box-sizing: border-box;
        }

        :host {
          --turtle-notification--radius: 8px;

          display: flex;
          width: 100%;
          box-sizing: border-box;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;

          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.8
          );
          border-radius: var(--turtle-notification--radius);
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          overflow: hidden;
        }

        .body {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 8px;
        }

        .text {
          flex: 1;
          margin: 8px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          overflow: hidden;
          text-overflow: ellipsis;
        }

        .image {
          width: calc(4 * var(--turtle-ui--unit));
          height: calc(4 * var(--turtle-ui--unit));
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          font-size: calc(2.4 * var(--turtle-ui--unit));

          border-radius: 4px;
          overflow: hidden;
        }
        .image[data-hidden] {
          display: none;
        }

        [name="image"]::slotted(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .actions {
          flex-grow: 0;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          border-inline-start: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }

        ::slotted([slot="action"]) {
          border-block-start: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
        ::slotted([slot="action"]:only-of-type) {
          flex-grow: 1;
        }
        ::slotted([slot="action"]:first-of-type) {
          --turtle-notification-action--top-right-radius: var(
            --turtle-notification--radius
          );
          border-block-start: none;
        }
        ::slotted([slot="action"]:last-of-type) {
          --turtle-notification-action--bottom-right-radius: var(
            --turtle-notification--radius
          );
        }
      `]}render(){return b`
      <div class="body">
        <div class="image" ?data-hidden=${!ai(this,nr,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}nr=new WeakMap;qo.defaultTagName="turtle-notification";class Xo extends At(g){static get styles(){return[m,$`
        :host {
          box-sizing: border-box;
          display: inline-flex;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 12px;
          font: inherit;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          border: none;
          box-sizing: border-box;

          background-color: transparent;
          border-radius: 0
            var(--turtle-notification-action--top-right-radius, 0)
            var(--turtle-notification-action--bottom-right-radius, 0) 0;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          cursor: pointer;
          outline: none;
          text-align: center;
          text-decoration: none;
          user-select: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10),
            0.08
          );
        }
        .button:active,
        ::slotted(:active) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.16
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.32
            )
            inset;
        }
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():b`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Xo.defaultTagName="turtle-notification-action";var si=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},te=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ve,pe;class Tr extends At(g){constructor(){super(...arguments),this.pressable=!1,ve.set(this,new G(this,"icon")),pe.set(this,new G(this,"action-icon"))}static get styles(){return[m,$`
        :host {
          --turtle-pill--radius--default: calc(3.2 * var(--turtle-ui--unit));
          --turtle-pill--background--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          --turtle-pill--color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          --turtle-pill--border-color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          --turtle-pill--inactive-color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--5)
          );

          position: relative;
          display: inline-block;
        }

        .label,
        .button,
        .lightdom::slotted(*) {
          appearance: none;

          display: inline-block;
          font: inherit;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          padding: 2px calc(0.8 * var(--turtle-ui--unit));
          border: 1px solid
            var(
              --turtle-pill--border-color,
              var(--turtle-pill--border-color--default)
            );

          border-radius: var(
            --turtle-pill--radius,
            var(--turtle-pill--radius--default)
          );
          background-color: var(
            --turtle-pill--background,
            var(--turtle-pill--background--default)
          );
          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
          text-decoration: none;

          cursor: default;
        }

        .with-icon,
        .with-icon::slotted(*) {
          padding-left: calc(3 * var(--turtle-ui--unit));
        }

        .with-action-icon,
        .with-action-icon::slotted(*) {
          padding-right: calc(3 * var(--turtle-ui--unit));
        }

        .button,
        .lightdom::slotted(*) {
          cursor: pointer;
        }

        .button:focus,
        .lightdom::slotted(*:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
          outline: none;
        }

        .icon,
        .action-icon {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          bottom: 0;
          margin: auto 0;
          font-size: calc(2 * var(--turtle-ui--unit));

          pointer-events: none;
        }

        .icon {
          left: calc(0.4 * var(--turtle-ui--unit));

          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
        }

        .action-icon {
          right: calc(0.4 * var(--turtle-ui--unit));

          color: var(
            --turtle-pill--inactive-color,
            var(--turtle-pill--inactive-color--default)
          );
        }

        :host(:hover) > .action-icon {
          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
        }

        [data-hidden] {
          display: none;
        }
      `]}render(){const t=[te(this,ve,"f").assigned?"with-icon":null,te(this,pe,"f").assigned?"with-action-icon":null].filter(Boolean).join(" "),e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):this.pressable?b`<button part="button" class="button ${t}">
          <slot></slot>
        </button>`:b`<span part="label" class="label ${t}"
          ><slot></slot
        ></span>`;return b`
      <div
        part="icon"
        class="icon"
        ?data-hidden=${!te(this,ve,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="icon"></slot>
      </div>

      ${e}

      <div
        part="action-icon"
        class="action-icon"
        ?data-hidden=${!te(this,pe,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="action-icon"></slot>
      </div>
    `}}ve=new WeakMap,pe=new WeakMap;Tr.defaultTagName="turtle-pill";si([x({type:Boolean})],Tr.prototype,"pressable",void 0);var ui=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},ee=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},fe,ge;class Ar extends g{constructor(){super(...arguments),this._progress={max:1,value:0},fe.set(this,t=>{this._progress={max:t.max,value:t.value}}),ge.set(this,new MutationObserver(t=>{!t[0]||ee(this,fe,"f").call(this,t[0].target)}))}static get styles(){return[m,$`
        :host {
          --_height: var(--turtle-progressbar--height, 8px);
          --_inner-bar--color: var(
            --turtle-progressbar--inner-bar--color,
            hsl(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4)
            )
          );

          display: block;
          position: relative;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          height: var(--_height);
          padding: 2px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: var(--_height);
        }

        .inner-bar {
          height: 100%;

          background-color: var(--_inner-bar--color);
          border-radius: var(--_height);

          transition: width 0.22s ease;
        }

        ::slotted(progress) {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;

          visibility: hidden;
          pointer-events: none;
          user-select: none;
        }
      `]}render(){const{max:t,value:e}=this._progress,r=Math.min(1,Math.max(0,t<0?0:e/t));return b`
      <slot
        >${W(l=>{if(l instanceof HTMLProgressElement)return ee(this,fe,"f").call(this,l),ee(this,ge,"f").observe(l,{attributes:!0,attributeFilter:["value","max"]}),()=>{ee(this,ge,"f").disconnect()}})}</slot
      >

      <div
        part="inner-bar"
        class="inner-bar"
        aria-hidden="true"
        style=${br({width:r*100+"%"})}
      ></div>
    `}}fe=new WeakMap,ge=new WeakMap;Ar.defaultTagName="turtle-progressbar";ui([R()],Ar.prototype,"_progress",void 0);class Yo extends g{static get styles(){return[m,$`
        :host {
          display: inline-flex;
          width: calc(2 * var(--turtle-ui--unit));
          height: calc(2 * var(--turtle-ui--unit));
          justify-content: center;
          align-items: center;
          box-sizing: border-box;

          vertical-align: text-bottom;
        }

        ::slotted(input) {
          --inner-shadow-color: transparent;

          -webkit-appearance: none;
          appearance: none;
          display: block;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 50%;
          box-shadow: 0 0 0 0.45rem var(--inner-shadow-color) inset;
          outline: none;
        }
        ::slotted(input:checked) {
          --inner-shadow-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:hover) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:checked:hover) {
          --inner-shadow-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--6)
          );
        }
        ::slotted(input:focus) {
          box-shadow: 0 0 0 0.45rem var(--inner-shadow-color) inset,
            0 0 0 0.4rem
              hsla(
                var(--turtle-ui--color--tone--primary),
                var(--turtle-ui--color--level--4),
                0.16
              );
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
          outline: none;
        }
        ::slotted(input:disabled) {
          --inner-shadow-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
        ::slotted(input:checked:disabled) {
          --inner-shadow-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){return b`<slot></slot>`}}Yo.defaultTagName="turtle-radio-button";var ze=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},rt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},be,me,Lt;function we(o){switch(o.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return o.validity.valid}class nt extends g{constructor(){super(...arguments),this.touched=!1,this.noValidity=!1,this._disabled=!1,be.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&rt(this,Lt,"f").call(this,t[0].target)})),me.set(this,t=>{rt(this,Lt,"f").call(this,t.currentTarget)}),Lt.set(this,t=>{const e=we(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[m,$`
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
        }

        .wrapper {
          display: inherit;
          width: 100%;
        }

        ::slotted(input),
        ::slotted(select) {
          --border-color: var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7);
          --right-offset: calc(4px + 2.4 * var(--turtle-ui--unit));

          appearance: none;
          width: 100%;
          border: 1px solid hsl(var(--border-color));
          padding: 8px;
          padding-right: calc(8px + var(--right-offset));
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 8px;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          outline: none;
        }
        ::slotted(input:placeholder) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
        ::slotted(input:focus),
        ::slotted(select:focus) {
          --border-color: var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4);

          box-shadow: 0 0 0 4px hsla(var(--border-color), 0.16);
        }
        ::slotted(input:disabled),
        ::slotted(select:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        :host([novalidity]) ::slotted(input),
        :host([novalidity]) ::slotted(select) {
          --right-offset: 0;
        }

        :host([touched]:not([novalidity])) ::slotted(input:not(:disabled)),
        :host([touched]:not([novalidity])) ::slotted(select:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(input[aria-invalid="false"]:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(select[aria-invalid="false"]:not(:disabled)) {
          --border-color: var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3);
        }

        :host([touched]:not([novalidity])) ::slotted(:invalid:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(select[aria-invalid="true"]:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(input[aria-invalid="true"]:not(:disabled)) {
          --border-color: var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4);
        }

        .indicator {
          display: none;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          right: calc(8px + 1.2 * var(--turtle-ui--unit));
          width: calc(1.4 * var(--turtle-ui--unit));
          height: calc(1.4 * var(--turtle-ui--unit));
          font-size: calc(0.7 * var(--turtle-ui--unit));

          border-radius: 50%;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          pointer-events: none;

          transform: translate(50%, -50%);
        }

        .valid {
          background-color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }

        @keyframes shake {
          0%,
          100% {
            transform: translate(50%, -50%);
          }

          20%,
          60% {
            transform: translate(50%, -50%) translateX(-8%);
          }

          40%,
          80% {
            transform: translate(50%, -50%) translateX(8%);
          }
        }
        .invalid {
          background-color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );

          animation: 0.3s 0s 1 ease-in shake;
        }
        :host([touched]:not([novalidity]))
          > [data-invalid="false"]:not([data-disabled])
          > .valid,
        :host([touched]:not([novalidity]))
          > [data-invalid="true"]:not([data-disabled])
          > .invalid {
          display: flex;
        }

        .icon {
          width: 1em;
          height: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .invalid {
            animation: none;
          }
        }
      `]}get isValid(){return!!this._isElementValid}render(){var t;return b`
      <div
        class="wrapper"
        data-invalid=${String(!(!((t=this._isElementValid)!==null&&t!==void 0)||t))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${W(e=>{if("validity"in e)return rt(this,Lt,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",rt(this,me,"f")),e.addEventListener("focusout",this.touch),rt(this,be,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",rt(this,me,"f")),e.removeEventListener("focusout",this.touch),rt(this,be,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Ko}</div>
        <div class="indicator invalid" aria-hidden="true">${Jo}</div>
      </div>
    `}}be=new WeakMap,me=new WeakMap,Lt=new WeakMap;nt.defaultTagName="turtle-textbox";ze([x({type:Boolean,reflect:!0})],nt.prototype,"touched",void 0);ze([x({type:Boolean,attribute:"novalidity"})],nt.prototype,"noValidity",void 0);ze([R()],nt.prototype,"_isElementValid",void 0);ze([R()],nt.prototype,"_disabled",void 0);const Ko=T`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,Jo=T`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var Re=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},re=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ye,_e;class Et extends g{constructor(){super(...arguments),this.touched=!1,this.noValidity=!1,this._disabled=!1,ye.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=we(t[0].target))})),_e.set(this,t=>{this._isElementValid=we(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...nt.styles,$`
        :host {
          --caret-size: calc(1.6 * var(--turtle-ui--unit));
          --caret-padding: 4px;
          --caret-total-shift: (var(--caret-size) + var(--caret-padding) * 2);
        }

        ::slotted(select) {
          --right-offset: calc(
            4px + 2.4 * var(--turtle-ui--unit) + var(--caret-total-shift)
          );
        }
        :host([novalidity]) ::slotted(select) {
          --right-offset: calc(4px + var(--caret-total-shift));
        }

        .indicator {
          right: calc(
            8px + 1.2 * var(--turtle-ui--unit) + var(--caret-total-shift)
          );
        }

        .caret {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          right: calc(8px + var(--caret-padding));
          width: var(--caret-size);
          height: var(--caret-size);
          font-size: var(--caret-size);

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          pointer-events: none;

          transform: translate(0, -50%);
        }

        .wrapper[data-disabled] > .caret {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){var t;return b`
      <div
        class="wrapper"
        data-invalid=${String(!(!((t=this._isElementValid)!==null&&t!==void 0)||t))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${W(e=>{if("validity"in e)return this._isElementValid=we(e),this._disabled=e.disabled,e.addEventListener("input",re(this,_e,"f")),e.addEventListener("focusout",this.touch),re(this,ye,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",re(this,_e,"f")),e.removeEventListener("focusout",this.touch),re(this,ye,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Ko}</div>
        <div class="indicator invalid" aria-hidden="true">${Jo}</div>

        <div class="caret" aria-hidden="true">${ci}</div>
      </div>
    `}}ye=new WeakMap,_e=new WeakMap;Et.defaultTagName="turtle-selectbox";Re([x({type:Boolean,reflect:!0})],Et.prototype,"touched",void 0);Re([x({type:Boolean,attribute:"novalidity"})],Et.prototype,"noValidity",void 0);Re([R()],Et.prototype,"_isElementValid",void 0);Re([R()],Et.prototype,"_disabled",void 0);const ci=T`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var di=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};function hi(o){class t extends o{constructor(){super(...arguments),this.autofocus=!1}firstUpdated(r){super.firstUpdated(r),this.autofocus&&this.focus()}}return di([x({type:Boolean})],t.prototype,"autofocus",void 0),t}var kr=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},wo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ar,sr;class Wt extends hi(g){constructor(){super(...arguments),ar.set(this,new G(this,"action")),this.severity="info",sr.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[m,$`
        * {
          box-sizing: border-box;
        }

        :host {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--mono);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--9);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--10);
          --turtle-snackbar--fg-tone: var(--turtle-ui--color--tone--mono);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--0);
          --turtle-snackbar--focus-tone: var(--turtle-ui--color--tone--primary);
          --turtle-snackbar--focus-level: var(--turtle-ui--color--level--4);

          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          padding: 8px 12px;
          margin: 0;
          gap: 4px;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level)
          );
          border-radius: 8px;
          color: hsl(
            var(--turtle-snackbar--fg-tone),
            var(--turtle-snackbar--fg-level)
          );
        }
        :host([severity="success"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--safe);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--3);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--4);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host([severity="warning"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--warning);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--5);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--6);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host([severity="danger"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--danger);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--4);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--7);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-snackbar--focus-tone),
              var(--turtle-snackbar--focus-level),
              0.3
            );
          outline: none;
        }

        @media (prefers-color-scheme: dark) {
          :host([severity="warning"]) {
            --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          }
        }

        .body {
          flex: 1;
        }

        .lifetime {
          width: auto;
          height: calc(1.8 * var(--turtle-ui--unit));

          fill: none;
          stroke: currentColor;
          stroke-width: 50;
          stroke-dasharray: 10;

          animation: linear both live;
          transform: rotate(90deg) scaleX(-1);
        }
        @keyframes live {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: 10;
          }
        }

        .actions {
          display: none;
          justify-content: flex-end;
          align-items: stretch;
          gap: 4px;
        }
        .actions[data-assigned] {
          display: flex;
        }
      `]}render(){return b`
      <div class="body">
        <slot></slot>
      </div>

      ${typeof this.lifetime=="number"?T`
        <svg
          class="lifetime"
          style=${br({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${Ae(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${Ae(this.lifetimeLabel)}
          @animationend=${wo(this,sr,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:k}

      <div class="actions" ?data-assigned=${wo(this,ar,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}ar=new WeakMap,sr=new WeakMap;Wt.defaultTagName="turtle-snackbar";kr([x({type:String,reflect:!0})],Wt.prototype,"severity",void 0);kr([x({type:Number})],Wt.prototype,"lifetime",void 0);kr([x({type:String,attribute:"lifetime-label"})],Wt.prototype,"lifetimeLabel",void 0);class Qo extends At(g){static get styles(){return[m,$`
        :host {
          box-sizing: border-box;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 0 calc(0.2 * var(--turtle-ui--unit));
          font: inherit;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          border: none;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level)
          );
          border-radius: 2px;
          color: hsl(
            var(--turtle-snackbar--fg-tone),
            var(--turtle-snackbar--fg-level)
          );
          cursor: pointer;
          outline: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level-hover)
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-snackbar--fg-tone),
              var(--turtle-snackbar--fg-level),
              0.16
            );
        }
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():b`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Qo.defaultTagName="turtle-snackbar-action";var tl=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},ut=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},xe,gt;class Ie extends g{constructor(){super(...arguments),this._checked=!1,this._disabled=!1,xe.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),gt.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[m,$`
        :host {
          position: relative;
          display: inline-flex;
          justify-content: flex-start;
          align-items: flex-start;
        }

        ::slotted(input) {
          -webkit-appearance: none;
          appearance: none;
          width: calc(4 * var(--turtle-ui--unit));
          height: calc(2.4 * var(--turtle-ui--unit));
          margin: 0;
          padding: 0;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          box-sizing: border-box;

          background: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-radius: calc(4 * var(--turtle-ui--unit));

          transition: 1ms 0s linear background-color;
        }
        ::slotted(input:checked) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:hover) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:checked:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--6)
          );
        }
        ::slotted(input:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow);
          outline: none;
        }
        ::slotted(input:disabled:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .knob {
          display: block;
          position: absolute;
          width: calc(1.8 * var(--turtle-ui--unit));
          height: calc(1.8 * var(--turtle-ui--unit));
          top: 50%;
          left: calc(0.3 * var(--turtle-ui--unit));
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--light-10)
          );
          border-radius: 50%;
          pointer-events: none;

          transform: translateY(-50%);
          transition: transform 0.3s ease;
        }
        .knob[data-checked] {
          transform: translate(100%, -50%)
            translateX(calc(-0.6 * var(--turtle-ui--unit)));
        }

        .knob[data-disabled] {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .knob {
            transition: none;
          }
        }
      `]}render(){return b`
      <slot>
        ${W(t=>{if("checked"in t)return t.hasAttribute("role")||t.setAttribute("role","switch"),this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",ut(this,gt,"f")),t.addEventListener("transitionstart",ut(this,gt,"f")),ut(this,xe,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",ut(this,gt,"f")),t.removeEventListener("transitionstart",ut(this,gt,"f")),ut(this,xe,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}xe=new WeakMap,gt=new WeakMap;Ie.defaultTagName="turtle-toggle-switch";tl([R()],Ie.prototype,"_checked",void 0);tl([R()],Ie.prototype,"_disabled",void 0);var vi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Cr extends g{constructor(){super(...arguments),this.direction="down"}static get styles(){return[m,O,$`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.414 8.414 19 7l-7.293 7.293L4.414 7 3 8.414l8.707 8.707 8.707-8.707Z" fill="currentColor"/>
      </svg>
    `}}Cr.defaultTagName="turtle-angle-icon";vi([x({type:String,reflect:!0})],Cr.prototype,"direction",void 0);var pi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Er extends g{constructor(){super(...arguments),this.direction="down"}static get styles(){return[m,O,$`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m13.034 17.043 6.504-6.505L21 12l-9 9-9-9 1.462-1.462 6.504 6.505V3h2.068v14.043Z" fill="currentColor"/>
      </svg>
    `}}Er.defaultTagName="turtle-arrow-icon";pi([x({type:String,reflect:!0})],Er.prototype,"direction",void 0);var fi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Sr extends g{constructor(){super(...arguments),this.outlined=!1}static get styles(){return[m,O]}render(){return this.outlined?T`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}Sr.defaultTagName="turtle-attention-icon";fi([x({type:Boolean})],Sr.prototype,"outlined",void 0);class el extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}el.defaultTagName="turtle-brand-icon";class rl extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}rl.defaultTagName="turtle-check-icon";var gi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Pr extends g{constructor(){super(...arguments),this.outlined=!1}static get styles(){return[m,O]}render(){return this.outlined?T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Zm7 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `:T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm9 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `}}Pr.defaultTagName="turtle-circle-check-icon";gi([x({type:Boolean})],Pr.prototype,"outlined",void 0);var bi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Fr extends g{constructor(){super(...arguments),this.outlined=!1}static get styles(){return[m,O]}render(){return this.outlined?T`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}Fr.defaultTagName="turtle-circle-cross-icon";bi([x({type:Boolean})],Fr.prototype,"outlined",void 0);var mi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Ur extends g{constructor(){super(...arguments),this.outlined=!1}static get styles(){return[m,O]}render(){return this.outlined?T`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}Ur.defaultTagName="turtle-circle-minus-icon";mi([x({type:Boolean})],Ur.prototype,"outlined",void 0);var wi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Or extends g{constructor(){super(...arguments),this.outlined=!1}static get styles(){return[m,O]}render(){return this.outlined?T`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}Or.defaultTagName="turtle-circle-plus-icon";wi([x({type:Boolean})],Or.prototype,"outlined",void 0);class ol extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}ol.defaultTagName="turtle-cross-icon";class ll extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}ll.defaultTagName="turtle-dots-icon";class il extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z" fill="currentColor"/>
      </svg>
    `}}il.defaultTagName="turtle-file-upload-icon";class nl extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 4.70718L17.7071 3.29297L9 12.0001L17.7071 20.7072L19.1213 19.293L11.8284 12.0001L19.1213 4.70718ZM6 4H4V20H6V4Z" fill="currentColor" />
      </svg>
    `}}nl.defaultTagName="turtle-first-page-icon";var yi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Mr extends g{constructor(){super(...arguments),this.outlined=!1}static get styles(){return[m,O]}render(){return this.outlined?T`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}Mr.defaultTagName="turtle-heart-icon";yi([x({type:Boolean})],Mr.prototype,"outlined",void 0);var _i=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class Lr extends g{constructor(){super(...arguments),this.outlined=!1}static get styles(){return[m,O]}render(){return this.outlined?T`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}Lr.defaultTagName="turtle-info-icon";_i([x({type:Boolean})],Lr.prototype,"outlined",void 0);class al extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87866 4.70718L6.29288 3.29297L15 12.0001L6.29288 20.7072L4.87866 19.293L12.1716 12.0001L4.87866 4.70718ZM20 4H18V20H20V4Z" fill="currentColor"/>
      </svg>
    `}}al.defaultTagName="turtle-last-page-icon";class sl extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}sl.defaultTagName="turtle-minus-icon";class ul extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}ul.defaultTagName="turtle-plus-icon";var xi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,i=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(i=(l<3?n(i):l>3?n(t,e,i):n(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};class jr extends g{constructor(){super(...arguments),this.outlined=!1}static get styles(){return[m,O]}render(){return this.outlined?T`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}jr.defaultTagName="turtle-question-icon";xi([x({type:Boolean})],jr.prototype,"outlined",void 0);class cl extends g{static get styles(){return[m,O]}render(){return T`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}cl.defaultTagName="turtle-reload-icon";const dl=[Cr,Er,Sr,el,rl,Pr,Fr,Ur,Or,ol,ll,il,nl,Mr,Lr,al,sl,ul,jr,cl,Do],$i=[Pe,Fe,Zt,wr,Ue,Io,Oe,kt,yr,_r,xr,Le,Ct,$r,Wo,Vo,Go,qo,Xo,Tr,Ar,Yo,Et,Wt,Qo,nt,Ie,...dl];function Ti(o){for(const t of o){const[e,r]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,r)}}var Ai=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Ci=(o,t,e,r)=>{for(var l=r>1?void 0:r?ki(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(l=(r?n(t,e,l):n(l))||l);return r&&l&&Ai(t,e,l),l};class zr extends g{constructor(){super(...arguments),this.topHref="./"}static get styles(){return[m,$`
        :host {
          --site-header--color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px;

          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
          color: var(--site-header--color);
        }

        .top-link {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-size: calc(2 * var(--turtle-ui--unit));
          line-height: 1;
          border-bottom: 1px solid transparent;

          color: inherit;
          font-weight: bold;
          text-decoration: none;
        }
        .top-link:focus,
        .top-link:hover {
          border-bottom-color: currentColor;
        }

        .brand-icon {
          font-size: calc(3.2 * var(--turtle-ui--unit));
          margin-inline-end: calc(0.4 * var(--turtle-ui--unit));
        }

        .nav-list {
          display: flex;
          gap: 4px;
        }

        [name="nav"]::slotted(a) {
          padding: calc(0.8 * var(--turtle-ui--unit));
          border: 1px solid transparent;

          border-radius: 4px;
          color: var(--site-header--color);
          text-decoration: none;
        }
        [name="nav"]::slotted(a:hover) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10),
            0.16
          );
        }
        [name="nav"]::slotted(a:active) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.16
          );
        }
        [name="nav"]::slotted(a:focus) {
          border-color: currentColor;
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--10),
              0.32
            );
        }

        @media (max-width: 450px) {
          .nav-list {
            display: none;
          }
        }
      `]}render(){return b`
      <a class="top-link" href=${this.topHref}>
        <turtle-brand-icon class="brand-icon"></turtle-brand-icon>
        Turtle UI
      </a>

      <div class="nav-list">
        <slot name="nav"></slot>
      </div>
    `}}zr.defaultTagName="site-header";Ci([x({type:String,attribute:"top-href"})],zr.prototype,"topHref",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hl=Symbol.for(""),Ei=o=>{var t,e;if(((t=o)===null||t===void 0?void 0:t.r)===hl)return(e=o)===null||e===void 0?void 0:e._$litStatic$},N=o=>({_$litStatic$:o,r:hl}),yo=new Map,Si=o=>(t,...e)=>{const r=e.length;let l,i;const n=[],a=[];let c,d=0,E=!1;for(;d<r;){for(c=t[d];d<r&&(i=e[d],(l=Ei(i))!==void 0);)c+=l+t[++d],E=!0;a.push(i),n.push(c),d++}if(d===r&&n.push(t[r]),E){const f=n.join("$$lit$$");(t=yo.get(f))===void 0&&(n.raw=n,yo.set(f,t=n)),e=a}return o(t,...e)},Ot=Si(Cl);var Pi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Ui=(o,t,e,r)=>{for(var l=r>1?void 0:r?Fi(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(l=(r?n(t,e,l):n(l))||l);return r&&l&&Pi(t,e,l),l};class Rr extends g{constructor(){super(...arguments),this._selected=null}static get styles(){return[m,$`
        .section {
          margin-top: calc(1.6 * var(--turtle-ui--unit));
        }

        .catalogue {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            calc(4 * var(--turtle-ui--unit))
          );
          place-items: center;
          gap: 8px;
        }

        button {
          appearance: none;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: calc(3.2 * var(--turtle-ui--unit));
          border: 1px solid transparent;
          outline: none;

          background-color: transparent;
          border-radius: 2px;
          color: inherit;
          cursor: pointer;
        }
        button:hover {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9),
            0.5
          );
        }
        button:focus {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            )
            inset;
        }
        button[data-selected] {
          color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }

        .title {
          display: block;
          font-size: calc(1.8 * var(--turtle-ui--unit));

          font-weight: bold;
        }

        .demo {
          overflow-x: hidden;
        }
      `]}render(){return Ot`
      <site-section class="section">
        <div class="catalogue">
          ${dl.map(t=>{const e=t.defaultTagName,r=t.defaultTagName===this._selected,l=()=>{this._selected=t.defaultTagName};return"direction"in t.prototype?Ot`
                <button ?data-selected=${r} title=${`<${e} direction="up">`} @click=${l}>
                  <${N(e)} direction="up"></${N(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} direction="right">`} @click=${l}>
                  <${N(e)} direction="right"></${N(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} direction="down">`} @click=${l}>
                  <${N(e)} direction="down"></${N(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} direction="left">`} @click=${l}>
                  <${N(e)} direction="left"></${N(e)}>
                </button>
              `:"outlined"in t.prototype?Ot`
                <button ?data-selected=${r} title=${`<${e}>`} @click=${l}>
                  <${N(e)}></${N(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} outlined>`} @click=${l}>
                  <${N(e)} outlined></${N(e)}>
                </button>
              `:Ot`
              <button ?data-selected=${r} title=${`<${e}>`} @click=${l}>
                <${N(e)}></${N(e)}>
              </button>
            `})}
        </div>
        ${this._selected?Ot`
              <div class="demo">
                <span class="title">${this._selected}</span>
                <site-wc-doc name=${this._selected}></site-wc-doc>
              </div>
            `:k}
      </site-section>
    `}}Rr.defaultTagName="site-icon-catalogue";Ui([R()],Rr.prototype,"_selected",2);var Oi=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Li=(o,t,e,r)=>{for(var l=r>1?void 0:r?Mi(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(l=(r?n(t,e,l):n(l))||l);return r&&l&&Oi(t,e,l),l},ji=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)},Je=(o,t,e)=>(ji(o,t,"read from private field"),e?e.call(o):t.get(o)),_o=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},ur,$e;class Ir extends g{constructor(){super(...arguments),this.menuOpened=!1,_o(this,ur,()=>{this.menuOpened=!this.menuOpened}),_o(this,$e,()=>{this.menuOpened=!1})}static get styles(){return[m,$`
        :host {
          --header-height: calc(5.6 * var(--turtle-ui--unit));
          --gap: 0px;
          --z-topmost: 100;
          --z-top: 50;
          --z-default: 0;

          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: min-content 1fr;
          grid-template-areas:
            "header"
            "body";
          gap: var(--gap);
          width: 100%;
          min-height: 100%;
        }

        .header::slotted(*) {
          grid-area: header;
          position: sticky;
          top: 0;

          z-index: var(--z-top);
        }

        .body::slotted(*) {
          grid-area: body;

          z-index: var(--z-default);
        }

        .sidebar::slotted(*) {
          --x-offset: 0;
          position: fixed;
          top: 0;
          bottom: 0;
          left: -100%;
          width: 100%;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          overflow-y: auto;
          z-index: var(--z-topmost);

          transform: translate3D(var(--x-offset), 0, 0);
          transition: transform 0.1s ease-out;
        }
        /*
         * Safari, a.k.a. the new IE, seems to implement the :host selector incorrectly
         * so when we do ":host([menu-opened]) .sidebar::slotted(*)" the assigned element
         * does not recieve the styles defined in the rule, while the devtool shows the rule
         * is applied to the element.
         */
        .sidebar.open::slotted(*) {
          --x-offset: 100%;

          transition: transform 0.2s ease;
        }

        .menu-toggle {
          position: fixed;
          left: calc(-0.6 * var(--turtle-ui--unit));
          bottom: 8px;

          z-index: var(--z-topmost);
        }

        .angle {
          vertical-align: middle;
        }

        @media (min-width: 1000px) {
          :host {
            --gap: 8px;
            --x-offset: 0;
            --sidebar-width: calc(24 * var(--turtle-ui--unit));

            width: 100%;
            grid-template-columns: var(--sidebar-width) 1fr;
            grid-template-rows: var(--header-height) minmax(0, min-content) 1fr;
            grid-template-areas:
              "header header"
              "sidebar body"
              "blank body";
          }

          .header::slotted(*) {
            z-index: var(--z-topmost);
          }

          .sidebar::slotted(*) {
            position: fixed;
            top: calc(var(--header-height) + var(--gap));
            bottom: auto;
            height: calc(100% - var(--header-height) - var(--gap) * 2);
            left: var(--gap);
            width: var(--sidebar-width);

            border-radius: 4px;
            z-index: var(--z-top);

            transform: none;
          }

          .menu-toggle {
            display: none;
          }
        }
      `]}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",Je(this,$e))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",Je(this,$e))}render(){return b`
      <slot class="header" name="header"></slot>
      <slot class="body"></slot>
      <slot
        class="sidebar ${this.menuOpened?"open":"closed"}"
        name="sidebar"
      ></slot>

      <turtle-button
        class="menu-toggle"
        variant="primary"
        aria-label=${this.menuOpened?"Close menu":"Open menu"}
        @click=${Je(this,ur)}
      >
        <turtle-angle-icon
          class="angle"
          direction=${this.menuOpened?"left":"right"}
        ></turtle-angle-icon>
      </turtle-button>
    `}}ur=new WeakMap;$e=new WeakMap;Ir.defaultTagName="site-layout";Li([x({type:Boolean,attribute:"menu-opened",reflect:!0})],Ir.prototype,"menuOpened",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class cr extends gr{constructor(t){if(super(t),this.it=U,t.type!==Ht.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||t==null)return this.ft=void 0,this.it=t;if(t===lt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}cr.directiveName="unsafeHTML",cr.resultType=1;const Ne=fr(cr);var zi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Nr=(o,t,e,r)=>{for(var l=r>1?void 0:r?Ri(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(l=(r?n(t,e,l):n(l))||l);return r&&l&&zi(t,e,l),l},Ii=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)},xo=(o,t,e)=>(Ii(o,t,"read from private field"),e?e.call(o):t.get(o)),$o=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},dr,hr;class Vt extends g{constructor(){super(...arguments),this.code="",this.initialLineCount=1,this.isEditorVisible=!1,$o(this,dr,t=>{this.code=t.currentTarget.value}),$o(this,hr,()=>{this.isEditorVisible=!this.isEditorVisible,requestAnimationFrame(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.getElementById("shadow_editor");!t||t.focus()})})}static get styles(){return[m,$`
        :host {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: stretch;

          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--8)
            );
          border-radius: 8px;
        }

        .badge {
          align-self: flex-start;
          display: inline-block;
          padding: calc(0.2 * var(--turtle-ui--unit))
            calc(0.4 * var(--turtle-ui--unit));
          font-size: calc(1.2 * var(--turtle-ui--unit));

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-bottom-right-radius: 2px;
        }
        .badge:first-child {
          border-top-left-radius: inherit;
        }

        .preview {
          padding: 8px 16px;
          border-bottom: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--9)
            );
          overflow-x: auto;
        }

        .code {
          font-family: "Ubuntu Mono", monospace;
          margin: 0;
          padding: 8px 16px;
          border: none;
          resize: vertical;
          font-size: calc(1.4 * var(--turtle-ui--unit));

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--2)
          );
          border-bottom-left-radius: inherit;
          border-bottom-right-radius: inherit;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
        }

        .toggle {
          margin: calc(0.4 * var(--turtle-ui--unit));
        }

        @media (prefers-color-scheme: dark) {
          .code {
            background-color: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--10)
            );
            color: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--2)
            );
          }
        }
      `]}connectedCallback(){super.connectedCallback(),this.code||(this.code=Ni(this.innerHTML).trim(),this.initialLineCount=this.code.split(`
`).length)}render(){return b`
      <span class="badge">Demo</span>

      <div class="preview">${Ne(this.code)}</div>

      <label class="badge" for="shadow_editor">Live Editor</label>

      ${this.isEditorVisible?b`
            <textarea
              id="shadow_editor"
              class="code"
              rows=${this.initialLineCount}
              .value=${this.code}
              @input=${xo(this,dr)}
            ></textarea>
          `:k}

      <turtle-button class="toggle" @click=${xo(this,hr)}>
        ${this.isEditorVisible?"Close":"Open"} editor
      </turtle-button>
    `}}dr=new WeakMap;hr=new WeakMap;Vt.defaultTagName="site-sandbox";Nr([x({type:String})],Vt.prototype,"code",2);Nr([R()],Vt.prototype,"initialLineCount",2);Nr([R()],Vt.prototype,"isEditorVisible",2);function Ni(o){const t=o.split(`
`).filter(l=>!!l);if(!t.length)return o;const e=t[0].replace(/^(\s+)?([^\s].*)?$/,"$1").length,r=new RegExp(`^\\s{${e}}`);return t.map(l=>l.replace(r,"")).join(`
`)}class vl extends g{static get styles(){return[m,$`
        @media (min-width: 1300px) {
          :host {
            --gap: 24px;
            --half: calc((100% - var(--gap)) / 2);

            display: grid;
            grid-template-columns:
              min(var(--half), calc(80 * var(--turtle-ui--unit)))
              1fr;
            align-items: flex-start;
            column-gap: var(--gap);
            box-sizing: border-box;
          }

          ::slotted(*) {
            grid-column: 1;
          }

          ::slotted(.demo) {
            grid-column: 2;
          }
        }
      `]}render(){return b` <slot></slot> `}}vl.defaultTagName="site-section";const Di="modulepreload",To={},Hi="/TurtleUI/",Bi=function(t,e){return!e||e.length===0?t():Promise.all(e.map(r=>{if(r=`${Hi}${r}`,r in To)return;To[r]=!0;const l=r.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":Di,l||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),l)return new Promise((a,c)=>{n.addEventListener("load",a),n.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var Zi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,pl=(o,t,e,r)=>{for(var l=r>1?void 0:r?Wi(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(l=(r?n(t,e,l):n(l))||l);return r&&l&&Zi(t,e,l),l};class De extends g{constructor(){super(...arguments),this.name="",this._spec=void 0}static get styles(){return[m,$`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          display: block;
          box-sizing: border-box;
        }

        .component-description {
          margin-top: calc(1.6 * var(--turtle-ui--unit));
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.5;
        }

        .usage-title {
          display: block;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          margin-top: 1em;

          font-weight: bold;
        }
        .usage {
          margin-top: 4px;
          margin-bottom: calc(2.4 * var(--turtle-ui--unit));
          padding: calc(0.8 * var(--turtle-ui--unit)) 16px;
          min-width: 0;
          max-width: 100%;
          overflow-x: auto;
          font-size: calc(1.4 * var(--turtle-ui--unit));

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-radius: 4px;
        }
        .usage .keyword {
          color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--3)
          );
        }
        .usage .function {
          color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--3)
          );
        }
        .usage .string {
          color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }

        table {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: stretch;
          margin-top: calc(1.6 * var(--turtle-ui--unit));
          min-width: 100%;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          font-size: calc(1.4 * var(--turtle-ui--unit));

          border-radius: 4px;
          overflow: hidden;
        }

        thead {
          display: block;
          font-size: calc(1.2 * var(--turtle-ui--unit));

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: bold;
        }
        tbody {
          display: block;
        }
        tr {
          display: flex;
          justify-content: start;
          align-items: stretch;
          flex-wrap: wrap;
        }
        tbody > tr {
          border-top: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--9)
            );
        }

        th {
          display: block;
          padding: 6px 8px;
          flex-shrink: 0;

          font-weight: normal;
          text-align: start;
        }
        td {
          display: block;
          padding: 8px;
          flex-shrink: 0;
        }

        .property-name,
        .attr-name,
        .event-name,
        .part-name {
          flex-basis: 50%;
          font-weight: bold;
        }
        .slot-name {
          flex-basis: 100%;
          font-weight: bold;
        }
        .data-type {
          flex-basis: 50%;
          font-size: calc(1.2 * var(--turtle-ui--unit));

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--2)
          );
        }
        .description {
          flex-basis: 100%;
          font-size: calc(1.2 * var(--turtle-ui--unit));

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--2)
          );
        }

        .component-description a {
          color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--3)
          );
        }

        .component-description ul {
          list-style: disc;
          padding-left: 1em;
          margin-top: 0.5em;
        }

        .component-description p code {
          padding: 0 4px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-radius: 4px;
        }

        .component-description pre {
          margin: calc(0.8 * var(--turtle-ui--unit)) 0;
          padding: calc(0.8 * var(--turtle-ui--unit)) 16px;
          min-width: 0;
          max-width: 100%;
          overflow-x: auto;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-radius: 4px;
        }

        /* syntax highlighting */
        .component-description .token.attr-name {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--1)
          );
        }
        .component-description .token.string,
        .component-description .token.attr-value {
          color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }
        .component-description .token.keyword,
        .component-description .token.tag,
        .component-description .token.selector {
          color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--3)
          );
        }
        .component-description .token.function,
        .component-description .token.property {
          color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--3)
          );
        }
        .component-description .token.comment {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
        }

        .description p:not(:first-child),
        .component-description p:not(:first-child) {
          margin-top: 0.75em;
        }
      `]}async connectedCallback(){super.connectedCallback(),this._spec=await Bi(()=>import("./spec.72e271c5.js"),[])}get spec(){var t;return((t=this._spec)==null?void 0:t.tags.find(e=>e.name===this.name))||null}render(){var e,r,l;if(!this.spec)return b` <span>Component definition not found.</span> `;const t=Vi(this.spec.name);return b`
      ${this.spec.description?b`<div class="component-description">
            ${Ne(this.spec.description)}
          </div>`:k}

      <span class="usage-title">Setup</span>
      <pre
        class="usage"
      ><code><span class="keyword">import</span> { registerTurtleUIComponents, ${t} } <span class="keyword">from</span> <span class="string">"@turtleui/webcomponents"</span>;

<span class="function">registerTurtleUIComponents</span>([${t}]);
</code></pre>

      ${this.spec.attributes&&this.spec.attributes.length>0?qi(this.spec.attributes):k}
      ${this.spec.properties&&this.spec.properties.length>0?Gi(this.spec.properties):k}
      ${(e=this.spec.events)!=null&&e.length?Xi(this.spec.events):k}
      ${this.spec.slots&&this.spec.slots.length>0?Yi(this.spec.slots):k}
      ${(r=this.spec.cssProperties)!=null&&r.length?Ji(this.spec.cssProperties):k}
      ${(l=this.spec.cssParts)!=null&&l.length?Qi(this.spec.cssParts):k}
    `}}De.defaultTagName="site-wc-doc";pl([x({type:String})],De.prototype,"name",2);pl([R()],De.prototype,"_spec",2);function Vi(o){return o.split("-").map(t=>t.slice(0,1).toUpperCase()+t.slice(1)).join("")}function Gi(o){return b`
    <table>
      <thead>
        <tr>
          <th class="property-name">Property</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>b`
            <tr>
              <td class="property-name"><code>${t.name}</code></td>
              <td class="data-type"><code>${t.type}</code></td>
              <td class="description">${Gt(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function qi(o){return b`
    <table>
      <thead>
        <tr>
          <th class="attr-name">Attribute</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>b`
            <tr>
              <td class="attr-name"><code>${t.name}</code></td>
              <td class="data-type"><code>${t.type}</code></td>
              <td class="description">${Gt(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Xi(o){return b`
    <table>
      <thead>
        <tr>
          <th class="event-name">Event</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>b`
            <tr>
              <td class="event-name"><code>${t.name}</code></td>
              <td class="description">
                ${"description"in t?Ne(t.description):k}
              </td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Yi(o){return b`
    <table>
      <thead>
        <tr>
          <th class="slot-name">Slot</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>b`
            <tr>
              <td class="slot-name">
                <code>${Ki(t.name)}</code>
              </td>
              <td class="description">${Gt(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Ki(o){return o?`<slot name="${o}"></slot>"`:"<slot></slot>"}function Ji(o){return b`
    <table>
      <thead>
        <tr>
          <th class="property-name">CSS Custom Property</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>b`
            <tr>
              <td class="property-name">${t.name}</td>
              <td class="description">${Gt(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Qi(o){return b`
    <table>
      <thead>
        <tr>
          <th class="part-name">CSS Part</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>b`
            <tr>
              <td class="part-name">${t.name}</td>
              <td class="description">${Gt(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Gt(o){return!o.description&&!o.default?k:b`
    ${o.description?Ne(o.description):k}
    ${o.default?b`<p>Default value is <code>${o.default}</code>.</p>`:k}
  `}Ti([...$i,zr,Rr,Ir,Vt,vl,De]);var Ao=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},fl={exports:{}};(function(o){var t=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=function(r){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,n={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function u(s){return s instanceof c?new c(s.type,u(s.content),s.alias):Array.isArray(s)?s.map(u):s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++i}),u.__id},clone:function u(s,h){h=h||{};var v,p;switch(a.util.type(s)){case"Object":if(p=a.util.objId(s),h[p])return h[p];v={},h[p]=v;for(var y in s)s.hasOwnProperty(y)&&(v[y]=u(s[y],h));return v;case"Array":return p=a.util.objId(s),h[p]?h[p]:(v=[],h[p]=v,s.forEach(function(A,w){v[w]=u(A,h)}),v);default:return s}},getLanguage:function(u){for(;u;){var s=l.exec(u.className);if(s)return s[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,s){u.className=u.className.replace(RegExp(l,"gi"),""),u.classList.add("language-"+s)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(v){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(u){var s=document.getElementsByTagName("script");for(var h in s)if(s[h].src==u)return s[h]}return null}},isActive:function(u,s,h){for(var v="no-"+s;u;){var p=u.classList;if(p.contains(s))return!0;if(p.contains(v))return!1;u=u.parentElement}return!!h}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(u,s){var h=a.util.clone(a.languages[u]);for(var v in s)h[v]=s[v];return h},insertBefore:function(u,s,h,v){v=v||a.languages;var p=v[u],y={};for(var A in p)if(p.hasOwnProperty(A)){if(A==s)for(var w in h)h.hasOwnProperty(w)&&(y[w]=h[w]);h.hasOwnProperty(A)||(y[A]=p[A])}var F=v[u];return v[u]=y,a.languages.DFS(a.languages,function(j,q){q===F&&j!=u&&(this[j]=y)}),y},DFS:function u(s,h,v,p){p=p||{};var y=a.util.objId;for(var A in s)if(s.hasOwnProperty(A)){h.call(s,A,s[A],v||A);var w=s[A],F=a.util.type(w);F==="Object"&&!p[y(w)]?(p[y(w)]=!0,u(w,h,null,p)):F==="Array"&&!p[y(w)]&&(p[y(w)]=!0,u(w,h,A,p))}}},plugins:{},highlightAll:function(u,s){a.highlightAllUnder(document,u,s)},highlightAllUnder:function(u,s,h){var v={callback:h,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),a.hooks.run("before-all-elements-highlight",v);for(var p=0,y;y=v.elements[p++];)a.highlightElement(y,s===!0,v.callback)},highlightElement:function(u,s,h){var v=a.util.getLanguage(u),p=a.languages[v];a.util.setLanguage(u,v);var y=u.parentElement;y&&y.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(y,v);var A=u.textContent,w={element:u,language:v,grammar:p,code:A};function F(q){w.highlightedCode=q,a.hooks.run("before-insert",w),w.element.innerHTML=w.highlightedCode,a.hooks.run("after-highlight",w),a.hooks.run("complete",w),h&&h.call(w.element)}if(a.hooks.run("before-sanity-check",w),y=w.element.parentElement,y&&y.nodeName.toLowerCase()==="pre"&&!y.hasAttribute("tabindex")&&y.setAttribute("tabindex","0"),!w.code){a.hooks.run("complete",w),h&&h.call(w.element);return}if(a.hooks.run("before-highlight",w),!w.grammar){F(a.util.encode(w.code));return}if(s&&r.Worker){var j=new Worker(a.filename);j.onmessage=function(q){F(q.data)},j.postMessage(JSON.stringify({language:w.language,code:w.code,immediateClose:!0}))}else F(a.highlight(w.code,w.grammar,w.language))},highlight:function(u,s,h){var v={code:u,grammar:s,language:h};if(a.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=a.tokenize(v.code,v.grammar),a.hooks.run("after-tokenize",v),c.stringify(a.util.encode(v.tokens),v.language)},tokenize:function(u,s){var h=s.rest;if(h){for(var v in h)s[v]=h[v];delete s.rest}var p=new f;return _(p,p.head,u),E(u,p,s,p.head,0),I(p)},hooks:{all:{},add:function(u,s){var h=a.hooks.all;h[u]=h[u]||[],h[u].push(s)},run:function(u,s){var h=a.hooks.all[u];if(!(!h||!h.length))for(var v=0,p;p=h[v++];)p(s)}},Token:c};r.Prism=a;function c(u,s,h,v){this.type=u,this.content=s,this.alias=h,this.length=(v||"").length|0}c.stringify=function u(s,h){if(typeof s=="string")return s;if(Array.isArray(s)){var v="";return s.forEach(function(F){v+=u(F,h)}),v}var p={type:s.type,content:u(s.content,h),tag:"span",classes:["token",s.type],attributes:{},language:h},y=s.alias;y&&(Array.isArray(y)?Array.prototype.push.apply(p.classes,y):p.classes.push(y)),a.hooks.run("wrap",p);var A="";for(var w in p.attributes)A+=" "+w+'="'+(p.attributes[w]||"").replace(/"/g,"&quot;")+'"';return"<"+p.tag+' class="'+p.classes.join(" ")+'"'+A+">"+p.content+"</"+p.tag+">"};function d(u,s,h,v){u.lastIndex=s;var p=u.exec(h);if(p&&v&&p[1]){var y=p[1].length;p.index+=y,p[0]=p[0].slice(y)}return p}function E(u,s,h,v,p,y){for(var A in h)if(!(!h.hasOwnProperty(A)||!h[A])){var w=h[A];w=Array.isArray(w)?w:[w];for(var F=0;F<w.length;++F){if(y&&y.cause==A+","+F)return;var j=w[F],q=j.inside,Dr=!!j.lookbehind,Hr=!!j.greedy,gl=j.alias;if(Hr&&!j.pattern.global){var bl=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,bl+"g")}for(var Br=j.pattern||j,z=v.next,Z=p;z!==s.tail&&!(y&&Z>=y.reach);Z+=z.value.length,z=z.next){var at=z.value;if(s.length>u.length)return;if(!(at instanceof c)){var qt=1,H;if(Hr){if(H=d(Br,Z,u,Dr),!H||H.index>=u.length)break;var Xt=H.index,ml=H.index+H[0].length,X=Z;for(X+=z.value.length;Xt>=X;)z=z.next,X+=z.value.length;if(X-=z.value.length,Z=X,z.value instanceof c)continue;for(var St=z;St!==s.tail&&(X<ml||typeof St.value=="string");St=St.next)qt++,X+=St.value.length;qt--,at=u.slice(Z,X),H.index-=Z}else if(H=d(Br,0,at,Dr),!H)continue;var Xt=H.index,Yt=H[0],He=at.slice(0,Xt),Zr=at.slice(Xt+Yt.length),Be=Z+at.length;y&&Be>y.reach&&(y.reach=Be);var Kt=z.prev;He&&(Kt=_(s,Kt,He),Z+=He.length),S(s,Kt,qt);var wl=new c(A,q?a.tokenize(Yt,q):Yt,gl,Yt);if(z=_(s,Kt,wl),Zr&&_(s,z,Zr),qt>1){var Ze={cause:A+","+F,reach:Be};E(u,s,h,z.prev,Z,Ze),y&&Ze.reach>y.reach&&(y.reach=Ze.reach)}}}}}}function f(){var u={value:null,prev:null,next:null},s={value:null,prev:u,next:null};u.next=s,this.head=u,this.tail=s,this.length=0}function _(u,s,h){var v=s.next,p={value:h,prev:s,next:v};return s.next=p,v.prev=p,u.length++,p}function S(u,s,h){for(var v=s.next,p=0;p<h&&v!==u.tail;p++)v=v.next;s.next=v,v.prev=s,u.length-=p}function I(u){for(var s=[],h=u.head.next;h!==u.tail;)s.push(h.value),h=h.next;return s}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(u){var s=JSON.parse(u.data),h=s.language,v=s.code,p=s.immediateClose;r.postMessage(a.highlight(v,a.languages[h],h)),p&&r.close()},!1)),a;var C=a.util.currentScript();C&&(a.filename=C.src,C.hasAttribute("data-manual")&&(a.manual=!0));function P(){a.manual||a.highlightAll()}if(!a.manual){var L=document.readyState;L==="loading"||L==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",P):window.requestAnimationFrame?window.requestAnimationFrame(P):window.setTimeout(P,16)}return a}(t);o.exports&&(o.exports=e),typeof Ao!="undefined"&&(Ao.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(l,i){var n={};n["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[i]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+i]={pattern:/[\s\S]+/,inside:e.languages[i]};var c={};c[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(r,l){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:e.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(r){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(typeof e=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading\u2026",l=function(C,P){return"\u2716 Error "+C+" while fetching file: "+P},i="\u2716 Error: File does not exist or is empty",n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",d="loaded",E="failed",f="pre[data-src]:not(["+a+'="'+d+'"]):not(['+a+'="'+c+'"])';function _(C,P,L){var u=new XMLHttpRequest;u.open("GET",C,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?P(u.responseText):u.status>=400?L(l(u.status,u.statusText)):L(i))},u.send(null)}function S(C){var P=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(P){var L=Number(P[1]),u=P[2],s=P[3];return u?s?[L,Number(s)]:[L,void 0]:[L,L]}}e.hooks.add("before-highlightall",function(C){C.selector+=", "+f}),e.hooks.add("before-sanity-check",function(C){var P=C.element;if(P.matches(f)){C.code="",P.setAttribute(a,c);var L=P.appendChild(document.createElement("CODE"));L.textContent=r;var u=P.getAttribute("data-src"),s=C.language;if(s==="none"){var h=(/\.(\w+)$/.exec(u)||[,"none"])[1];s=n[h]||h}e.util.setLanguage(L,s),e.util.setLanguage(P,s);var v=e.plugins.autoloader;v&&v.loadLanguages(s),_(u,function(p){P.setAttribute(a,d);var y=S(P.getAttribute("data-range"));if(y){var A=p.split(/\r\n?|\n/g),w=y[0],F=y[1]==null?A.length:y[1];w<0&&(w+=A.length),w=Math.max(0,Math.min(w-1,A.length)),F<0&&(F+=A.length),F=Math.max(0,Math.min(F,A.length)),p=A.slice(w,F).join(`
`),P.hasAttribute("data-start")||P.setAttribute("data-start",String(w+1))}L.textContent=p,e.highlightElement(L)},function(p){P.setAttribute(a,E),L.textContent=p})}}),e.plugins.fileHighlight={highlight:function(P){for(var L=(P||document).querySelectorAll(f),u=0,s;s=L[u++];)e.highlightElement(s)}};var I=!1;e.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(fl);fl.exports.highlightAll();
