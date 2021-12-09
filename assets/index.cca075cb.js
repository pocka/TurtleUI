import{r as h,e as d,s,p as u,i as Kt,a as De,d as Ne,t as Yt,b as Ze,l as gt,c as b,y as v,T as m,f as L,o as g,g as I,h as Be}from"./vendor.10ea095f.js";const Ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}};Ae();const c=h`
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
`;var Qt=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class F extends s{constructor(){super(...arguments);this.bordered=!1,this.placeholderAlt=""}static get styles(){return[c,h`
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
      `]}render(){return u`
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
    `}}F.defaultTagName="turtle-avatar";Qt([d({type:Boolean,reflect:!0})],F.prototype,"bordered",void 0);Qt([d({type:String,attribute:"placeholder-alt"})],F.prototype,"placeholderAlt",void 0);var Jt=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class W extends s{constructor(){super(...arguments);this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[c,h`
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
      `]}render(){return u`
      <div class="body">
        <slot></slot>
      </div>

      <div
        class="tail"
        style=${Kt({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}W.defaultTagName="turtle-balloon";Jt([d({type:String,attribute:"tail-position"})],W.prototype,"tailPosition",void 0);Jt([d({type:Number,attribute:"tail-offset"})],W.prototype,"tailOffset",void 0);var V=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},G=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},C,P;class Ie extends Ne{constructor(t){super(t);if(C.set(this,null),P.set(this,[]),t.type!==Yt.CHILD&&t.type!==Yt.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var r;(r=V(this,C,"f"))===null||r===void 0||r.call(this);const i="parentNode"in t?t.parentNode:t.element;if(!("tagName"in i)||i.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const l=()=>{V(this,P,"f").forEach(n=>n());const a=i.assignedElements();G(this,P,a.map(e).filter(n=>!!n),"f")};return i.addEventListener("slotchange",l),G(this,C,()=>{i.removeEventListener("slotchange",l)},"f"),this.render(e)}render(t){return Ze}disconnected(){var t;(t=V(this,C,"f"))===null||t===void 0||t.call(this),G(this,C,null,"f"),V(this,P,"f").forEach(e=>e()),G(this,P,[],"f")}}C=new WeakMap,P=new WeakMap;const x=De(Ie);var te=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},ee=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},D=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)};function N(o){var t,e,r;class i extends o{constructor(){super(...arguments);this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(a=>{!a[0]||ee(this,t,re(a[0].target),"f")})),r.set(this,a=>{!D(this,t,"f")||(a.preventDefault(),a.stopPropagation())})}renderLightDOMSlot(a){return u`<slot id="lightdom" class=${gt(a)}>
        ${x(n=>{if("getAttribute"in n)return ee(this,t,re(n),"f"),n.addEventListener("click",D(this,r,"f")),D(this,e,"f").observe(n,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{n.removeEventListener("click",D(this,r,"f")),D(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,r=new WeakMap,te([d({type:Boolean,reflect:!0})],i.prototype,"disabled",void 0),te([d({type:Boolean,attribute:"lightdom"})],i.prototype,"lightDOM",void 0),i}function re(o){const t=o.getAttribute("aria-disabled");return t?t==="true":"disabled"in o?o.disabled:!1}var oe=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class H extends N(s){constructor(){super(...arguments);this.variant="normal",this.rounded=!1}static get styles(){return[c,h`
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
        :host([lightdom]) ::slotted(*) {
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
        .button:hover,
        :host([lightdom]) ::slotted(:hover) {
          background-color: var(--turtle-ui--button--bg--hover);
        }
        .button:active,
        :host([lightdom]) ::slotted(:active) {
          background-color: var(--turtle-ui--button--bg--active);
        }
        .button:focus,
        :host([lightdom]) ::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--button--highlight-shadow-color)
            inset;
          border-color: var(--turtle-ui--button--highlight-color);
          outline: none;
        }
        .button:disabled,
        :host([lightdom]) ::slotted(:disabled),
        :host([lightdom]) ::slotted([aria-disabled="true"]) {
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():u`
          <button class="button" ?disabled=${this.disabled} part="button">
            <slot></slot>
          </button>
        `}}H.defaultTagName="turtle-button";oe([d({type:String})],H.prototype,"variant",void 0);oe([d({type:Boolean,reflect:!0})],H.prototype,"rounded",void 0);var Fe=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class mt extends s{constructor(){super(...arguments);this.evenly=!1}static get styles(){return[c,h`
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
      `]}render(){return u` <slot></slot> `}}mt.defaultTagName="turtle-button-group";Fe([d({type:Boolean,reflect:!0})],mt.prototype,"evenly",void 0);var le=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},U;class k{constructor(t,e=""){this.assigned=!1,U.set(this,()=>{if(!this.host.shadowRoot)return;const r=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",i=this.host.shadowRoot.querySelector(r);this.assigned=!!i&&i.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",le(this,U,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",le(this,U,"f"))}}U=new WeakMap;var ie=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},ae=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},wt,yt;class q extends s{constructor(){super(...arguments);wt.set(this,new k(this,"action")),yt.set(this,new k(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[c,h`
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
      `]}render(){return u`
      <div class="image-sizer" ?assigned=${ae(this,yt,"f").assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${ae(this,wt,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}wt=new WeakMap,yt=new WeakMap;q.defaultTagName="turtle-card";ie([d({type:Boolean,attribute:"shadowed",reflect:!0})],q.prototype,"shadowed",void 0);ie([d({type:Boolean,attribute:"bordered",reflect:!0})],q.prototype,"bordered",void 0);class ne extends N(s){static get styles(){return[c,h`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():u`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}ne.defaultTagName="turtle-card-action";var se=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},w=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},X,O,j;class K extends s{constructor(){super(...arguments);this.sync=()=>{},this._checkState="unchecked",this._disabled=!1,X.set(this,new MutationObserver(t=>{!t[0]||w(this,O,"f").call(this,t[0].target)})),O.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),j.set(this,t=>{w(this,O,"f").call(this,t.currentTarget)})}static get styles(){return[c,h`
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
      `]}render(){return u`
      <slot
        >${x(t=>{if("checked"in t)return w(this,O,"f").call(this,t),t.addEventListener("change",w(this,j,"f")),t.addEventListener("input",w(this,j,"f")),w(this,X,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked","indeterminate"]}),this.sync=()=>{w(this,O,"f").call(this,t)},()=>{t.removeEventListener("change",w(this,j,"f")),t.removeEventListener("input",w(this,j,"f")),w(this,X,"f").disconnect(),this.sync=()=>{}}})}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState==="checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${We}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState==="indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${Ve}
      </svg>
    `}}X=new WeakMap,O=new WeakMap,j=new WeakMap;K.defaultTagName="turtle-checkbox";se([b()],K.prototype,"_checkState",void 0);se([b()],K.prototype,"_disabled",void 0);const We=v`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,Ve=v`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`;var Y=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},xt=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},p=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},y,_,E,Q,J,_t,Tt;class S extends s{constructor(){super(...arguments);this.role="combobox",this.noAutoAria=!1,y.set(this,null),_.set(this,0),this._listbox=null,this._options=[],E.set(this,t=>{var e,r;if(this.noAutoAria||(xt(this,_,t,"f"),!p(this,y,"f")))return;if(!this._options.length){p(this,y,"f").removeAttribute("aria-activedescendant");return}this._options.forEach((l,a)=>{a===t?l.setAttribute("aria-selected","true"):l.removeAttribute("aria-selected")});const i=this._options[t];if(!(i==null?void 0:i.id)){console.warn("[turtle-command-palette] Listbox option MUST have an ID.");return}((e=this._listbox)===null||e===void 0?void 0:e.clientHeight)!==((r=this._listbox)===null||r===void 0?void 0:r.scrollHeight)&&i.scrollIntoView(),p(this,y,"f").setAttribute("aria-activedescendant",i.id)}),Q.set(this,()=>{if(this.noAutoAria||!p(this,y,"f")||!this._listbox||this.role!=="combobox")return;if(!this._listbox.id){console.warn("[turtle-command-palette] Listbox MUST have an ID.");return}const t=Array.from(this._listbox.children);this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-owns",this._listbox.id),this.setAttribute("aria-expanded",String(t.length>0)),p(this,y,"f").setAttribute("aria-controls",this._listbox.id)}),J.set(this,t=>{if(!t.isComposing)switch(t.key){case"Enter":p(this,_t,"f").call(this),t.preventDefault();return;case"Escape":p(this,Tt,"f").call(this),t.preventDefault();return;case"ArrowUp":{const e=p(this,_,"f")<=0?this._options.length-1:p(this,_,"f")-1;p(this,E,"f").call(this,e),t.preventDefault();return}case"ArrowDown":{const e=p(this,_,"f")>=this._options.length-1?0:p(this,_,"f")+1;p(this,E,"f").call(this,e),t.preventDefault();return}}}),_t.set(this,(t=p(this,_,"f"))=>{const e=this._options[t];!e||e.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))}),Tt.set(this,()=>{this.dispatchEvent(new CustomEvent("cancel"))})}static get styles(){return[c,h`
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
      `]}render(){return u`
      <div class="searchbox">
        <slot class="icon" name="icon">${Ge}</slot>
        <slot class="search" name="search"
          >${x(t=>{if("disabled"in t)return xt(this,y,t,"f"),p(this,Q,"f").call(this),t.addEventListener("keydown",p(this,J,"f")),()=>{xt(this,y,null,"f"),t.removeEventListener("keydown",p(this,J,"f"))}})}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${x(t=>{var e;this._listbox=t,this._options=Array.from(t.children),p(this,Q,"f").call(this),p(this,E,"f").call(this,0);const r=()=>{p(this,E,"f").call(this,0),this._options=Array.from(t.children)};(e=t.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",r);const i=l=>{if(!l.target||!("getAttribute"in l.target))return;const n=l.target.closest("turtle-command-palette-option");n&&n.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))};return t.addEventListener("click",i),()=>{var l;this._listbox=null,this._options=[],(l=t.shadowRoot)===null||l===void 0||l.removeEventListener("slotchange",r),t.removeEventListener("click",i)}})}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length>0}
      ></slot>
    `}}y=new WeakMap,_=new WeakMap,E=new WeakMap,Q=new WeakMap,J=new WeakMap,_t=new WeakMap,Tt=new WeakMap;S.defaultTagName="turtle-command-palette";Y([d({type:String,reflect:!0})],S.prototype,"role",void 0);Y([d({type:Boolean,attribute:"noautoaria"})],S.prototype,"noAutoAria",void 0);Y([b()],S.prototype,"_listbox",void 0);Y([b()],S.prototype,"_options",void 0);const Ge=v`
  <svg part="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;var He=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},ue=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},tt;class $t extends s{constructor(){super(...arguments);this.role="listbox",tt.set(this,()=>{this.children.length>0?this.removeAttribute("empty"):this.setAttribute("empty","")})}static get styles(){return[c,h`
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
      `]}connectedCallback(){super.connectedCallback(),ue(this,tt,"f").call(this)}render(){return u`<slot @slotchange=${ue(this,tt,"f")}></slot>`}}tt=new WeakMap;$t.defaultTagName="turtle-command-palette-listbox";He([d({type:String,reflect:!0})],$t.prototype,"role",void 0);var Ue=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Ct extends s{constructor(){super(...arguments);this.role="option"}static get styles(){return[c,h`
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
      `]}render(){return u`
      <span class="title">
        <slot></slot>
      </span>

      <slot class="description" name="description"></slot>
    `}}Ct.defaultTagName="turtle-command-palette-option";Ue([d({type:String,reflect:!0})],Ct.prototype,"role",void 0);var qe=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Pt extends s{static get styles(){return h`
      :host {
        --turtle-ui--unit: 10px;
        --turtle-ui--base-font-size: calc(1.6 * var(--turtle-ui--unit));

        --turtle-ui--color--level--0: 0%;
        --turtle-ui--color--level--1: 10%;
        --turtle-ui--color--level--2: 20%;
        --turtle-ui--color--level--3: 30%;
        --turtle-ui--color--level--4: 40%;
        --turtle-ui--color--level--5: 50%;
        --turtle-ui--color--level--6: 60%;
        --turtle-ui--color--level--7: 70%;
        --turtle-ui--color--level--8: 80%;
        --turtle-ui--color--level--9: 90%;
        --turtle-ui--color--level--10: 100%;
        --turtle-ui--color--level--safe: 34%;
        --turtle-ui--color--level--danger: 44%;
        --turtle-ui--color--level--primary: 40%;
        --turtle-ui--level--modifier--darker: -1;
        --turtle-ui--level--modifier--lighter: 1;
        --turtle-ui--level--modifier--amount: 16%;

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
          --turtle-ui--color--level--0: 100%;
          --turtle-ui--color--level--1: 92%;
          --turtle-ui--color--level--2: 84%;
          --turtle-ui--color--level--3: 76%;
          --turtle-ui--color--level--4: 68%;
          --turtle-ui--color--level--5: 60%;
          --turtle-ui--color--level--6: 52%;
          --turtle-ui--color--level--7: 44%;
          --turtle-ui--color--level--8: 36%;
          --turtle-ui--color--level--9: 28%;
          --turtle-ui--color--level--10: 20%;
          --turtle-ui--level--modifier--darker: 1;
          --turtle-ui--level--modifier--lighter: -1;
        }
      }

      :host([theme="light"]) {
        --turtle-ui--color--level--0: 0%;
        --turtle-ui--color--level--1: 10%;
        --turtle-ui--color--level--2: 20%;
        --turtle-ui--color--level--3: 30%;
        --turtle-ui--color--level--4: 40%;
        --turtle-ui--color--level--5: 50%;
        --turtle-ui--color--level--6: 60%;
        --turtle-ui--color--level--7: 70%;
        --turtle-ui--color--level--8: 80%;
        --turtle-ui--color--level--9: 90%;
        --turtle-ui--color--level--10: 100%;
        --turtle-ui--level--modifier--darker: -1;
        --turtle-ui--level--modifier--lighter: 1;
      }

      :host([theme="dark"]) {
        --turtle-ui--color--level--0: 100%;
        --turtle-ui--color--level--1: 92%;
        --turtle-ui--color--level--2: 84%;
        --turtle-ui--color--level--3: 76%;
        --turtle-ui--color--level--4: 68%;
        --turtle-ui--color--level--5: 60%;
        --turtle-ui--color--level--6: 52%;
        --turtle-ui--color--level--7: 44%;
        --turtle-ui--color--level--8: 36%;
        --turtle-ui--color--level--9: 28%;
        --turtle-ui--color--level--10: 20%;
        --turtle-ui--level--modifier--darker: 1;
        --turtle-ui--level--modifier--lighter: -1;
      }

      :host {
        display: block;
        font-family: "Ubuntu", sans-serif;

        background-color: var(--turtle-ui--color--background);
        color: var(--turtle-ui--color--text);
      }
    `}render(){return u`<slot></slot>`}}Pt.defaultTagName="turtle-design-system";qe([d({type:String,reflect:!0})],Pt.prototype,"theme",void 0);var Xe=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},z=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},M,et;class kt extends s{constructor(){super(...arguments);this._elementState="neutral",M.set(this,t=>{z(this,et,"f").call(this,t.currentTarget)}),et.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[c,h`
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
      `]}render(){return u`
      <slot class="label" name="label"></slot>

      <slot class="item"
        >${x(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return z(this,et,"f").call(this,t),t.addEventListener("validitychange",z(this,M,"f")),t.addEventListener("fieldtouch",z(this,M,"f")),()=>{t.removeEventListener("validitychange",z(this,M,"f")),t.removeEventListener("fieldtouch",z(this,M,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}M=new WeakMap,et=new WeakMap;kt.defaultTagName="turtle-form-field";Xe([b()],kt.prototype,"_elementState",void 0);class ce extends s{static get styles(){return[c,h`
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
      `]}render(){return u`
      <slot></slot>

      <slot class="label" name="label"></slot>
    `}}ce.defaultTagName="turtle-labelled-item";class de extends s{static get styles(){return[c,h`
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
      `]}render(){return u` <slot></slot> `}}de.defaultTagName="turtle-list";var he=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Ot,jt;class ve extends N(s){constructor(){super(...arguments);Ot.set(this,new k(this,"icon-start")),jt.set(this,new k(this,"icon-end"))}static get styles(){return[c,h`
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
      `]}render(){const t=["body-slot",he(this,Ot,"f").assigned?"icon-start":"",he(this,jt,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):u`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return u`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}Ot=new WeakMap,jt=new WeakMap;ve.defaultTagName="turtle-list-item";var Ke=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Et;class pe extends s{constructor(){super(...arguments);Et.set(this,new k(this,"image"))}static get styles(){return[c,h`
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
      `]}render(){return u`
      <div class="body">
        <div class="image" ?data-hidden=${!Ke(this,Et,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}Et=new WeakMap;pe.defaultTagName="turtle-notification";class fe extends N(s){static get styles(){return[c,h`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():u`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}fe.defaultTagName="turtle-notification-action";class be extends s{static get styles(){return[c,h`
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
      `]}render(){return u`<slot></slot>`}}be.defaultTagName="turtle-radio-button";var rt=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},T=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ot,lt,Z;function it(o){switch(o.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return o.validity.valid}class $ extends s{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,ot.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&T(this,Z,"f").call(this,t[0].target)})),lt.set(this,t=>{T(this,Z,"f").call(this,t.currentTarget)}),Z.set(this,t=>{const e=it(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[c,h`
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
      `]}get isValid(){return!!this._isElementValid}render(){var t;return u`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${x(e=>{if("validity"in e)return T(this,Z,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",T(this,lt,"f")),e.addEventListener("focusout",this.touch),T(this,ot,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",T(this,lt,"f")),e.removeEventListener("focusout",this.touch),T(this,ot,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${ge}</div>
        <div class="indicator invalid" aria-hidden="true">${me}</div>
      </div>
    `}}ot=new WeakMap,lt=new WeakMap,Z=new WeakMap;$.defaultTagName="turtle-textbox";rt([d({type:Boolean,reflect:!0})],$.prototype,"touched",void 0);rt([d({type:Boolean,attribute:"novalidity"})],$.prototype,"noValidity",void 0);rt([b()],$.prototype,"_isElementValid",void 0);rt([b()],$.prototype,"_disabled",void 0);const ge=v`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,me=v`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var at=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},nt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},st,ut;class R extends s{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,st.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=it(t[0].target))})),ut.set(this,t=>{this._isElementValid=it(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...$.styles,h`
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
      `]}render(){var t;return u`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${x(e=>{if("validity"in e)return this._isElementValid=it(e),this._disabled=e.disabled,e.addEventListener("input",nt(this,ut,"f")),e.addEventListener("focusout",this.touch),nt(this,st,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",nt(this,ut,"f")),e.removeEventListener("focusout",this.touch),nt(this,st,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${ge}</div>
        <div class="indicator invalid" aria-hidden="true">${me}</div>

        <div class="caret" aria-hidden="true">${Ye}</div>
      </div>
    `}}st=new WeakMap,ut=new WeakMap;R.defaultTagName="turtle-selectbox";at([d({type:Boolean,reflect:!0})],R.prototype,"touched",void 0);at([d({type:Boolean,attribute:"novalidity"})],R.prototype,"noValidity",void 0);at([b()],R.prototype,"_isElementValid",void 0);at([b()],R.prototype,"_disabled",void 0);const Ye=v`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var Qe=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};function Je(o){class t extends o{constructor(){super(...arguments);this.autofocus=!1}firstUpdated(r){super.firstUpdated(r),this.autofocus&&this.focus()}}return Qe([d({type:Boolean})],t.prototype,"autofocus",void 0),t}var St=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},we=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},zt,Mt;class B extends Je(s){constructor(){super(...arguments);zt.set(this,new k(this,"action")),this.severity="info",Mt.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[c,h`
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
      `]}render(){return u`
      <div class="body">
        <slot></slot>
      </div>

      ${typeof this.lifetime=="number"?v`
        <svg
          class="lifetime"
          style=${Kt({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${gt(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${gt(this.lifetimeLabel)}
          @animationend=${we(this,Mt,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:m}

      <div class="actions" ?data-assigned=${we(this,zt,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}zt=new WeakMap,Mt=new WeakMap;B.defaultTagName="turtle-snackbar";St([d({type:String,reflect:!0})],B.prototype,"severity",void 0);St([d({type:Number})],B.prototype,"lifetime",void 0);St([d({type:String,attribute:"lifetime-label"})],B.prototype,"lifetimeLabel",void 0);class ye extends N(s){static get styles(){return[c,h`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():u`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}ye.defaultTagName="turtle-snackbar-action";var xe=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},ct=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},dt,ht;class vt extends s{constructor(){super(...arguments);this._checked=!1,this._disabled=!1,dt.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),ht.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[c,h`
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
            var(--turtle-ui--color--level--10)
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

        @media (prefers-color-scheme: dark) {
          .knob {
            background-color: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--2)
            );
          }
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
      `]}render(){return u`
      <slot>
        ${x(t=>{if("checked"in t)return this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",ct(this,ht,"f")),ct(this,dt,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",ct(this,ht,"f")),ct(this,dt,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}dt=new WeakMap,ht=new WeakMap;vt.defaultTagName="turtle-toggle-switch";xe([b()],vt.prototype,"_checked",void 0);xe([b()],vt.prototype,"_disabled",void 0);const f=h`
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
`;var tr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Rt extends s{constructor(){super(...arguments);this.direction="down"}static get styles(){return[c,f,h`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.414 8.414 19 7l-7.293 7.293L4.414 7 3 8.414l8.707 8.707 8.707-8.707Z" fill="currentColor"/>
      </svg>
    `}}Rt.defaultTagName="turtle-angle-icon";tr([d({type:String,reflect:!0})],Rt.prototype,"direction",void 0);var er=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Lt extends s{constructor(){super(...arguments);this.direction="down"}static get styles(){return[c,f,h`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m13.034 17.043 6.504-6.505L21 12l-9 9-9-9 1.462-1.462 6.504 6.505V3h2.068v14.043Z" fill="currentColor"/>
      </svg>
    `}}Lt.defaultTagName="turtle-arrow-icon";er([d({type:String,reflect:!0})],Lt.prototype,"direction",void 0);var rr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Dt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,f]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}Dt.defaultTagName="turtle-attention-icon";rr([d({type:Boolean})],Dt.prototype,"outlined",void 0);class _e extends s{static get styles(){return[c,f]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}_e.defaultTagName="turtle-brand-icon";class Te extends s{static get styles(){return[c,f]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}Te.defaultTagName="turtle-check-icon";var or=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Nt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,f]}render(){return this.outlined?v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Zm7 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm9 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `}}Nt.defaultTagName="turtle-circle-check-icon";or([d({type:Boolean})],Nt.prototype,"outlined",void 0);var lr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Zt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,f]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}Zt.defaultTagName="turtle-circle-cross-icon";lr([d({type:Boolean})],Zt.prototype,"outlined",void 0);var ir=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Bt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,f]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}Bt.defaultTagName="turtle-circle-minus-icon";ir([d({type:Boolean})],Bt.prototype,"outlined",void 0);var ar=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class At extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,f]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}At.defaultTagName="turtle-circle-plus-icon";ar([d({type:Boolean})],At.prototype,"outlined",void 0);class $e extends s{static get styles(){return[c,f]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}$e.defaultTagName="turtle-cross-icon";class Ce extends s{static get styles(){return[c,f]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}Ce.defaultTagName="turtle-dots-icon";var nr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class It extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,f]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}It.defaultTagName="turtle-heart-icon";nr([d({type:Boolean})],It.prototype,"outlined",void 0);var sr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Ft extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,f]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}Ft.defaultTagName="turtle-info-icon";sr([d({type:Boolean})],Ft.prototype,"outlined",void 0);class Pe extends s{static get styles(){return[c,f]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}Pe.defaultTagName="turtle-minus-icon";class ke extends s{static get styles(){return[c,f]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}ke.defaultTagName="turtle-plus-icon";var ur=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var n=o.length-1;n>=0;n--)(a=o[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Wt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,f]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}Wt.defaultTagName="turtle-question-icon";ur([d({type:Boolean})],Wt.prototype,"outlined",void 0);class Oe extends s{static get styles(){return[c,f]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}Oe.defaultTagName="turtle-reload-icon";const je=[Rt,Lt,Dt,_e,Te,Nt,Zt,Bt,At,$e,Ce,It,Ft,Pe,ke,Wt,Oe],cr=[F,W,H,mt,q,ne,K,S,$t,Ct,Pt,kt,ce,de,ve,pe,fe,be,R,B,ye,$,vt,...je];function dr(o){for(const t of o){const[e,r]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,r)}}var hr=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,pr=(o,t,e,r)=>{for(var i=r>1?void 0:r?vr(t,e):t,l=o.length-1,a;l>=0;l--)(a=o[l])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&hr(t,e,i),i};class Vt extends s{constructor(){super(...arguments);this.topHref="./"}static get styles(){return[c,h`
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
      `]}render(){return u`
      <a class="top-link" href=${this.topHref}>
        <turtle-brand-icon class="brand-icon"></turtle-brand-icon>
        Turtle UI
      </a>

      <div class="nav-list">
        <slot name="nav"></slot>
      </div>
    `}}Vt.defaultTagName="site-header";pr([d({type:String,attribute:"top-href"})],Vt.prototype,"topHref",2);var fr=Object.defineProperty,br=Object.getOwnPropertyDescriptor,gr=(o,t,e,r)=>{for(var i=r>1?void 0:r?br(t,e):t,l=o.length-1,a;l>=0;l--)(a=o[l])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&fr(t,e,i),i};class Gt extends s{constructor(){super(...arguments);this._selected=null}static get styles(){return[c,h`
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
      `]}render(){return L`
      <site-section class="section">
        <div class="catalogue">
          ${je.map(t=>{const e=t.defaultTagName,r=t.defaultTagName===this._selected,i=()=>{this._selected=t.defaultTagName};return"direction"in t.prototype?L`
                <button ?data-selected=${r} title=${`<${e} direction="up">`} @click=${i}>
                  <${g(e)} direction="up"></${g(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} direction="right">`} @click=${i}>
                  <${g(e)} direction="right"></${g(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} direction="down">`} @click=${i}>
                  <${g(e)} direction="down"></${g(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} direction="left">`} @click=${i}>
                  <${g(e)} direction="left"></${g(e)}>
                </button>
              `:"outlined"in t.prototype?L`
                <button ?data-selected=${r} title=${`<${e}>`} @click=${i}>
                  <${g(e)}></${g(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} outlined>`} @click=${i}>
                  <${g(e)} outlined></${g(e)}>
                </button>
              `:L`
              <button ?data-selected=${r} title=${`<${e}>`} @click=${i}>
                <${g(e)}></${g(e)}>
              </button>
            `})}
        </div>
        ${this._selected?L`
              <div class="demo">
                <span class="title">${this._selected}</span>
                <site-wc-doc name=${this._selected}></site-wc-doc>
              </div>
            `:m}
      </site-section>
    `}}Gt.defaultTagName="site-icon-catalogue";gr([b()],Gt.prototype,"_selected",2);var mr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,yr=(o,t,e,r)=>{for(var i=r>1?void 0:r?wr(t,e):t,l=o.length-1,a;l>=0;l--)(a=o[l])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&mr(t,e,i),i},xr=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)},Ht=(o,t,e)=>(xr(o,t,"read from private field"),e?e.call(o):t.get(o)),Ee=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},Ut,pt;class qt extends s{constructor(){super(...arguments);this.menuOpened=!1,Ee(this,Ut,()=>{this.menuOpened=!this.menuOpened}),Ee(this,pt,()=>{this.menuOpened=!1})}static get styles(){return[c,h`
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
      `]}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",Ht(this,pt))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",Ht(this,pt))}render(){return u`
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
        @click=${Ht(this,Ut)}
      >
        <turtle-angle-icon
          class="angle"
          direction=${this.menuOpened?"left":"right"}
        ></turtle-angle-icon>
      </turtle-button>
    `}}Ut=new WeakMap;pt=new WeakMap;qt.defaultTagName="site-layout";yr([d({type:Boolean,attribute:"menu-opened",reflect:!0})],qt.prototype,"menuOpened",2);var _r=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Se=(o,t,e,r)=>{for(var i=r>1?void 0:r?Tr(t,e):t,l=o.length-1,a;l>=0;l--)(a=o[l])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&_r(t,e,i),i},$r=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)},Cr=(o,t,e)=>($r(o,t,"read from private field"),e?e.call(o):t.get(o)),Pr=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},Xt;class ft extends s{constructor(){super(...arguments);this.code="",this.initialLineCount=1,Pr(this,Xt,t=>{this.code=t.currentTarget.value})}static get styles(){return[c,h`
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
      `]}connectedCallback(){super.connectedCallback(),this.code||(this.code=kr(this.innerHTML).trim(),this.initialLineCount=this.code.split(`
`).length)}render(){return u`
      <span class="badge">Demo</span>

      <div class="preview">${I(this.code)}</div>

      <label class="badge" for="shadow_editor">Live Editor</label>

      <textarea
        id="shadow_editor"
        class="code"
        rows=${this.initialLineCount}
        .value=${this.code}
        @input=${Cr(this,Xt)}
      />
    `}}Xt=new WeakMap;ft.defaultTagName="site-sandbox";Se([d({type:String})],ft.prototype,"code",2);Se([b()],ft.prototype,"initialLineCount",2);function kr(o){const t=o.split(`
`).filter(i=>!!i);if(!t.length)return o;const e=t[0].replace(/^(\s+)?([^\s].*)?$/,"$1").length,r=new RegExp(`^\\s{${e}}`);return t.map(i=>i.replace(r,"")).join(`
`)}class ze extends s{static get styles(){return[c,h`
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
      `]}render(){return u` <slot></slot> `}}ze.defaultTagName="site-section";const Or="modulepreload",Me={},jr="/TurtleUI/",Er=function(t,e){return!e||e.length===0?t():Promise.all(e.map(r=>{if(r=`${jr}${r}`,r in Me)return;Me[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Or,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((n,Le)=>{a.addEventListener("load",n),a.addEventListener("error",Le)})})).then(()=>t())};var Sr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Re=(o,t,e,r)=>{for(var i=r>1?void 0:r?zr(t,e):t,l=o.length-1,a;l>=0;l--)(a=o[l])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Sr(t,e,i),i};class bt extends s{constructor(){super(...arguments);this.name="",this._spec=void 0}static get styles(){return[c,h`
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

        .description p:not(:first-child),
        .component-description p:not(:first-child) {
          margin-top: 0.75em;
        }
      `]}async connectedCallback(){super.connectedCallback(),this._spec=await Er(()=>import("./spec.ded88898.js"),[])}get spec(){var t;return((t=this._spec)==null?void 0:t.tags.find(e=>e.name===this.name))||null}render(){var e,r,i;if(!this.spec)return u` <span>Component definition not found.</span> `;const t=Mr(this.spec.name);return u`
      ${this.spec.description?u`<div class="component-description">
            ${I(this.spec.description)}
          </div>`:m}

      <span class="usage-title">Setup</span>
      <pre
        class="usage"
      ><code><span class="keyword">import</span> { registerTurtleUIComponents, ${t} } <span class="keyword">from</span> <span class="string">"@turtleui/webcomponents"</span>;

<span class="function">registerTurtleUIComponents</span>([${t}]);
</code></pre>

      ${this.spec.attributes&&this.spec.attributes.length>0?Lr(this.spec.attributes):m}
      ${this.spec.properties&&this.spec.properties.length>0?Rr(this.spec.properties):m}
      ${((e=this.spec.events)==null?void 0:e.length)?Dr(this.spec.events):m}
      ${this.spec.slots&&this.spec.slots.length>0?Nr(this.spec.slots):m}
      ${((r=this.spec.cssProperties)==null?void 0:r.length)?Br(this.spec.cssProperties):m}
      ${((i=this.spec.cssParts)==null?void 0:i.length)?Ar(this.spec.cssParts):m}
    `}}bt.defaultTagName="site-wc-doc";Re([d({type:String})],bt.prototype,"name",2);Re([b()],bt.prototype,"_spec",2);function Mr(o){return o.split("-").map(t=>t.slice(0,1).toUpperCase()+t.slice(1)).join("")}function Rr(o){return u`
    <table>
      <thead>
        <tr>
          <th class="property-name">Property</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>u`
            <tr>
              <td class="property-name"><code>${t.name}</code></td>
              <td class="data-type"><code>${t.type}</code></td>
              <td class="description">${A(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Lr(o){return u`
    <table>
      <thead>
        <tr>
          <th class="attr-name">Attribute</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>u`
            <tr>
              <td class="attr-name"><code>${t.name}</code></td>
              <td class="data-type"><code>${t.type}</code></td>
              <td class="description">${A(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Dr(o){return u`
    <table>
      <thead>
        <tr>
          <th class="event-name">Event</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>u`
            <tr>
              <td class="event-name"><code>${t.name}</code></td>
              <td class="description">
                ${"description"in t?I(t.description):m}
              </td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Nr(o){return u`
    <table>
      <thead>
        <tr>
          <th class="slot-name">Slot</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>u`
            <tr>
              <td class="slot-name">
                <code>${Zr(t.name)}</code>
              </td>
              <td class="description">${A(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Zr(o){return o?`<slot name="${o}"></slot>"`:"<slot></slot>"}function Br(o){return u`
    <table>
      <thead>
        <tr>
          <th class="property-name">CSS Custom Property</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>u`
            <tr>
              <td class="property-name">${t.name}</td>
              <td class="description">${A(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Ar(o){return u`
    <table>
      <thead>
        <tr>
          <th class="part-name">CSS Part</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${o.map(t=>u`
            <tr>
              <td class="part-name">${t.name}</td>
              <td class="description">${A(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function A(o){return!o.description&&!o.default?m:u`
    ${o.description?I(o.description):m}
    ${o.default?u`<p>Default value is <code>${o.default}</code>.</p>`:m}
  `}dr([...cr,Vt,Gt,qt,ft,ze,bt]);Be.exports.highlightAll();
