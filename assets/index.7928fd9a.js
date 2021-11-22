import{r as v,e as d,s,p as c,i as Mt,a as be,d as ge,t as Rt,b as me,l as lt,c as f,y as h,T as g,o as it,f as we}from"./vendor.afad3e45.js";const ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}};ye();const u=v`
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
`;var Lt=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class M extends s{constructor(){super(...arguments);this.bordered=!1,this.placeholderAlt=""}static get styles(){return[u,v`
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
      `]}render(){return c`
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
    `}}M.defaultTagName="turtle-avatar";Lt([d({type:Boolean,reflect:!0})],M.prototype,"bordered",void 0);Lt([d({type:String,attribute:"placeholder-alt"})],M.prototype,"placeholderAlt",void 0);var Nt=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class R extends s{constructor(){super(...arguments);this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[u,v`
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
      `]}render(){return c`
      <div class="body">
        <slot></slot>
      </div>

      <div
        class="tail"
        style=${Mt({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}R.defaultTagName="turtle-balloon";Nt([d({type:String,attribute:"tail-position"})],R.prototype,"tailPosition",void 0);Nt([d({type:Number,attribute:"tail-offset"})],R.prototype,"tailOffset",void 0);var L=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},N=globalThis&&globalThis.__classPrivateFieldSet||function(r,t,e,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?r!==t||!i:!t.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(r,e):i?i.value=e:t.set(r,e),e},y,x;class xe extends ge{constructor(t){super(t);if(y.set(this,null),x.set(this,[]),t.type!==Rt.CHILD&&t.type!==Rt.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var o;(o=L(this,y,"f"))===null||o===void 0||o.call(this);const i="parentNode"in t?t.parentNode:t.element;if(!("tagName"in i)||i.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const l=()=>{L(this,x,"f").forEach(n=>n());const a=i.assignedElements();N(this,x,a.map(e).filter(n=>!!n),"f")};return i.addEventListener("slotchange",l),N(this,y,()=>{i.removeEventListener("slotchange",l)},"f"),this.render(e)}render(t){return me}disconnected(){var t;(t=L(this,y,"f"))===null||t===void 0||t.call(this),N(this,y,null,"f"),L(this,x,"f").forEach(e=>e()),N(this,x,[],"f")}}y=new WeakMap,x=new WeakMap;const _=be(xe);var Zt=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},Dt=globalThis&&globalThis.__classPrivateFieldSet||function(r,t,e,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?r!==t||!i:!t.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(r,e):i?i.value=e:t.set(r,e),e},j=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)};function z(r){var t,e,o;class i extends r{constructor(){super(...arguments);this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(a=>{!a[0]||Dt(this,t,Bt(a[0].target),"f")})),o.set(this,a=>{!j(this,t,"f")||(a.preventDefault(),a.stopPropagation())})}renderLightDOMSlot(a){return c`<slot id="lightdom" class=${lt(a)}>
        ${_(n=>{if("getAttribute"in n)return Dt(this,t,Bt(n),"f"),n.addEventListener("click",j(this,o,"f")),j(this,e,"f").observe(n,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{n.removeEventListener("click",j(this,o,"f")),j(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,o=new WeakMap,Zt([d({type:Boolean,reflect:!0})],i.prototype,"disabled",void 0),Zt([d({type:Boolean,attribute:"lightdom"})],i.prototype,"lightDOM",void 0),i}function Bt(r){const t=r.getAttribute("aria-disabled");return t?t==="true":"disabled"in r?r.disabled:!1}var _e=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class at extends z(s){constructor(){super(...arguments);this.variant="normal"}static get styles(){return[u,v`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():c`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}at.defaultTagName="turtle-button";_e([d({type:String})],at.prototype,"variant",void 0);var Te=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class nt extends s{constructor(){super(...arguments);this.evenly=!1}static get styles(){return[u,v`
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
      `]}render(){return c` <slot></slot> `}}nt.defaultTagName="turtle-button-group";Te([d({type:Boolean,reflect:!0})],nt.prototype,"evenly",void 0);var Ft=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},Z;class T{constructor(t,e=""){this.assigned=!1,Z.set(this,()=>{if(!this.host.shadowRoot)return;const o=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",i=this.host.shadowRoot.querySelector(o);this.assigned=!!i&&i.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",Ft(this,Z,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",Ft(this,Z,"f"))}}Z=new WeakMap;var It=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},Wt=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},st,ut;class D extends s{constructor(){super(...arguments);st.set(this,new T(this,"action")),ut.set(this,new T(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[u,v`
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
      `]}render(){return c`
      <div class="image-sizer" ?assigned=${Wt(this,ut,"f").assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${Wt(this,st,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}st=new WeakMap,ut=new WeakMap;D.defaultTagName="turtle-card";It([d({type:Boolean,attribute:"shadowed",reflect:!0})],D.prototype,"shadowed",void 0);It([d({type:Boolean,attribute:"bordered",reflect:!0})],D.prototype,"bordered",void 0);class Vt extends z(s){static get styles(){return[u,v`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():c`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Vt.defaultTagName="turtle-card-action";var Gt=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},b=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},B,k,C;class F extends s{constructor(){super(...arguments);this.sync=()=>{},this._checkState="unchecked",this._disabled=!1,B.set(this,new MutationObserver(t=>{!t[0]||b(this,k,"f").call(this,t[0].target)})),k.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),C.set(this,t=>{b(this,k,"f").call(this,t.currentTarget)})}static get styles(){return[u,v`
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
      `]}render(){return c`
      <slot
        >${_(t=>{if("checked"in t)return b(this,k,"f").call(this,t),t.addEventListener("change",b(this,C,"f")),t.addEventListener("input",b(this,C,"f")),b(this,B,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked","indeterminate"]}),this.sync=()=>{b(this,k,"f").call(this,t)},()=>{t.removeEventListener("change",b(this,C,"f")),t.removeEventListener("input",b(this,C,"f")),b(this,B,"f").disconnect(),this.sync=()=>{}}})}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState==="checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${ke}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState==="indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${Ce}
      </svg>
    `}}B=new WeakMap,k=new WeakMap,C=new WeakMap;F.defaultTagName="turtle-checkbox";Gt([f()],F.prototype,"_checkState",void 0);Gt([f()],F.prototype,"_disabled",void 0);const ke=h`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,Ce=h`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`;var $e=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class ct extends s{static get styles(){return v`
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
    `}render(){return c`<slot></slot>`}}ct.defaultTagName="turtle-design-system";$e([d({type:String,reflect:!0})],ct.prototype,"theme",void 0);var Pe=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},$=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},P,I;class dt extends s{constructor(){super(...arguments);this._elementState="neutral",P.set(this,t=>{$(this,I,"f").call(this,t.currentTarget)}),I.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[u,v`
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
      `]}render(){return c`
      <slot class="label" name="label"></slot>

      <slot class="item"
        >${_(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return $(this,I,"f").call(this,t),t.addEventListener("validitychange",$(this,P,"f")),t.addEventListener("fieldtouch",$(this,P,"f")),()=>{t.removeEventListener("validitychange",$(this,P,"f")),t.removeEventListener("fieldtouch",$(this,P,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}P=new WeakMap,I=new WeakMap;dt.defaultTagName="turtle-form-field";Pe([f()],dt.prototype,"_elementState",void 0);class At extends s{static get styles(){return[u,v`
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
      `]}render(){return c`
      <slot></slot>

      <slot class="label" name="label"></slot>
    `}}At.defaultTagName="turtle-labelled-item";class Ht extends s{static get styles(){return[u,v`
        :host {
          --turtle-ui--list--radius: 8px;

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
          border-radius: var(--turtle-ui--list--radius);
          overflow: hidden;
        }
      `]}render(){return c` <slot></slot> `}}Ht.defaultTagName="turtle-list";var Ut=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},ht,vt;class qt extends z(s){constructor(){super(...arguments);ht.set(this,new T(this,"icon-start")),vt.set(this,new T(this,"icon-end"))}static get styles(){return[u,v`
        :host {
          --turtle-ui--list-item--icon-size: calc(2.4 * var(--turtle-ui--unit));
          --turtle-ui--list-item--padding: 12px;
          --turtle-ui--list-item--gap: 8px;

          display: block;
          position: relative;
          box-sizing: border-box;
        }

        .button,
        .body-slot::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          height: calc(
            2.4 * var(--turtle-ui--unit) + var(--turtle-ui--list-item--padding) *
              2
          );
          padding: var(--turtle-ui--list-item--padding);
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
          border-radius: var(--turtle-ui--list--radius)
            var(--turtle-ui--list--radius) 0 0;
        }
        :host(:last-child) .button,
        :host(:last-child) .body-slot::slotted(*) {
          border-radius: 0 0 var(--turtle-ui--list--radius)
            var(--turtle-ui--list--radius);
        }

        .icon-start,
        .icon-start::slotted(*) {
          padding-inline-start: calc(
            var(--turtle-ui--list-item--padding) +
              var(--turtle-ui--list-item--icon-size) +
              var(--turtle-ui--list-item--gap)
          );
        }

        .icon-end,
        .icon-end::slotted(*) {
          padding-inline-end: calc(
            var(--turtle-ui--list-item--padding) +
              var(--turtle-ui--list-item--icon-size) +
              var(--turtle-ui--list-item--gap)
          );
        }

        [name="icon-start"]::slotted(*),
        [name="icon-end"]::slotted(*) {
          position: absolute;
          top: 50%;
          font-size: var(--turtle-ui--list-item--icon-size);

          color: inherit;
          pointer-events: none;

          transform: translateY(-50%);
        }

        [name="icon-start"]::slotted(*) {
          left: var(--turtle-ui--list-item--padding);
        }
        [name="icon-end"]::slotted(*) {
          right: var(--turtle-ui--list-item--padding);
        }

        :host([disabled]) [name^="icon-"]::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){const t=["body-slot",Ut(this,ht,"f").assigned?"icon-start":"",Ut(this,vt,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):c`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return c`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}ht=new WeakMap,vt=new WeakMap;qt.defaultTagName="turtle-list-item";var Oe=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},pt;class Xt extends s{constructor(){super(...arguments);pt.set(this,new T(this,"image"))}static get styles(){return[u,v`
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
      `]}render(){return c`
      <div class="body">
        <div class="image" ?data-hidden=${!Oe(this,pt,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}pt=new WeakMap;Xt.defaultTagName="turtle-notification";class Yt extends z(s){static get styles(){return[u,v`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():c`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Yt.defaultTagName="turtle-notification-action";class Kt extends s{static get styles(){return[u,v`
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
      `]}render(){return c`<slot></slot>`}}Kt.defaultTagName="turtle-radio-button";var W=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},m=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},V,G,E;function A(r){switch(r.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return r.validity.valid}class w extends s{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,V.set(this,new MutationObserver(t=>{let e=!1;for(const o of t)switch(o.attributeName){case"disabled":this._disabled=o.target.disabled;break;default:e=!0;break}e&&m(this,E,"f").call(this,t[0].target)})),G.set(this,t=>{m(this,E,"f").call(this,t.currentTarget)}),E.set(this,t=>{const e=A(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[u,v`
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
      `]}get isValid(){return!!this._isElementValid}render(){var t;return c`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${_(e=>{if("validity"in e)return m(this,E,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",m(this,G,"f")),e.addEventListener("focusout",this.touch),m(this,V,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",m(this,G,"f")),e.removeEventListener("focusout",this.touch),m(this,V,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Qt}</div>
        <div class="indicator invalid" aria-hidden="true">${Jt}</div>
      </div>
    `}}V=new WeakMap,G=new WeakMap,E=new WeakMap;w.defaultTagName="turtle-textbox";W([d({type:Boolean,reflect:!0})],w.prototype,"touched",void 0);W([d({type:Boolean,attribute:"novalidity"})],w.prototype,"noValidity",void 0);W([f()],w.prototype,"_isElementValid",void 0);W([f()],w.prototype,"_disabled",void 0);const Qt=h`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,Jt=h`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var H=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},U=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},q,X;class O extends s{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,q.set(this,new MutationObserver(t=>{let e=!1;for(const o of t)switch(o.attributeName){case"disabled":this._disabled=o.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=A(t[0].target))})),X.set(this,t=>{this._isElementValid=A(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...w.styles,v`
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
      `]}render(){var t;return c`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${_(e=>{if("validity"in e)return this._isElementValid=A(e),this._disabled=e.disabled,e.addEventListener("input",U(this,X,"f")),e.addEventListener("focusout",this.touch),U(this,q,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",U(this,X,"f")),e.removeEventListener("focusout",this.touch),U(this,q,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Qt}</div>
        <div class="indicator invalid" aria-hidden="true">${Jt}</div>

        <div class="caret" aria-hidden="true">${je}</div>
      </div>
    `}}q=new WeakMap,X=new WeakMap;O.defaultTagName="turtle-selectbox";H([d({type:Boolean,reflect:!0})],O.prototype,"touched",void 0);H([d({type:Boolean,attribute:"novalidity"})],O.prototype,"noValidity",void 0);H([f()],O.prototype,"_isElementValid",void 0);H([f()],O.prototype,"_disabled",void 0);const je=h`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var ze=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};function Ee(r){class t extends r{constructor(){super(...arguments);this.autofocus=!1}firstUpdated(o){super.firstUpdated(o),this.autofocus&&this.focus()}}return ze([d({type:Boolean})],t.prototype,"autofocus",void 0),t}var ft=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},te=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},bt,gt;class S extends Ee(s){constructor(){super(...arguments);bt.set(this,new T(this,"action")),this.severity="info",gt.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[u,v`
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
      `]}render(){return c`
      <div class="body">
        <slot></slot>
      </div>

      ${typeof this.lifetime=="number"?h`
        <svg
          class="lifetime"
          style=${Mt({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${lt(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${lt(this.lifetimeLabel)}
          @animationend=${te(this,gt,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:g}

      <div class="actions" ?data-assigned=${te(this,bt,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}bt=new WeakMap,gt=new WeakMap;S.defaultTagName="turtle-snackbar";ft([d({type:String,reflect:!0})],S.prototype,"severity",void 0);ft([d({type:Number})],S.prototype,"lifetime",void 0);ft([d({type:String,attribute:"lifetime-label"})],S.prototype,"lifetimeLabel",void 0);class ee extends z(s){static get styles(){return[u,v`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():c`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}ee.defaultTagName="turtle-snackbar-action";var re=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},Y=globalThis&&globalThis.__classPrivateFieldGet||function(r,t,e,o){if(e==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!o:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?o:e==="a"?o.call(r):o?o.value:t.get(r)},K,Q;class J extends s{constructor(){super(...arguments);this._checked=!1,this._disabled=!1,K.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),Q.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[u,v`
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
      `]}render(){return c`
      <slot>
        ${_(t=>{if("checked"in t)return this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",Y(this,Q,"f")),Y(this,K,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",Y(this,Q,"f")),Y(this,K,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}K=new WeakMap,Q=new WeakMap;J.defaultTagName="turtle-toggle-switch";re([f()],J.prototype,"_checked",void 0);re([f()],J.prototype,"_disabled",void 0);const p=v`
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
`;var Se=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class mt extends s{constructor(){super(...arguments);this.direction="down"}static get styles(){return[u,p,v`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.414 8.414 19 7l-7.293 7.293L4.414 7 3 8.414l8.707 8.707 8.707-8.707Z" fill="currentColor"/>
      </svg>
    `}}mt.defaultTagName="turtle-angle-icon";Se([d({type:String,reflect:!0})],mt.prototype,"direction",void 0);var Me=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class wt extends s{constructor(){super(...arguments);this.direction="down"}static get styles(){return[u,p,v`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m13.034 17.043 6.504-6.505L21 12l-9 9-9-9 1.462-1.462 6.504 6.505V3h2.068v14.043Z" fill="currentColor"/>
      </svg>
    `}}wt.defaultTagName="turtle-arrow-icon";Me([d({type:String,reflect:!0})],wt.prototype,"direction",void 0);var Re=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class yt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[u,p]}render(){return this.outlined?h`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}yt.defaultTagName="turtle-attention-icon";Re([d({type:Boolean})],yt.prototype,"outlined",void 0);class oe extends s{static get styles(){return[u,p]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}oe.defaultTagName="turtle-brand-icon";class le extends s{static get styles(){return[u,p]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}le.defaultTagName="turtle-check-icon";var Le=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class xt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[u,p]}render(){return this.outlined?h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Zm7 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `:h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm9 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `}}xt.defaultTagName="turtle-circle-check-icon";Le([d({type:Boolean})],xt.prototype,"outlined",void 0);var Ne=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class _t extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[u,p]}render(){return this.outlined?h`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}_t.defaultTagName="turtle-circle-cross-icon";Ne([d({type:Boolean})],_t.prototype,"outlined",void 0);var Ze=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Tt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[u,p]}render(){return this.outlined?h`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}Tt.defaultTagName="turtle-circle-minus-icon";Ze([d({type:Boolean})],Tt.prototype,"outlined",void 0);var De=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class kt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[u,p]}render(){return this.outlined?h`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}kt.defaultTagName="turtle-circle-plus-icon";De([d({type:Boolean})],kt.prototype,"outlined",void 0);class ie extends s{static get styles(){return[u,p]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}ie.defaultTagName="turtle-cross-icon";class ae extends s{static get styles(){return[u,p]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}ae.defaultTagName="turtle-dots-icon";var Be=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Ct extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[u,p]}render(){return this.outlined?h`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}Ct.defaultTagName="turtle-heart-icon";Be([d({type:Boolean})],Ct.prototype,"outlined",void 0);var Fe=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class $t extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[u,p]}render(){return this.outlined?h`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}$t.defaultTagName="turtle-info-icon";Fe([d({type:Boolean})],$t.prototype,"outlined",void 0);class ne extends s{static get styles(){return[u,p]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}ne.defaultTagName="turtle-minus-icon";class se extends s{static get styles(){return[u,p]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}se.defaultTagName="turtle-plus-icon";var Ie=globalThis&&globalThis.__decorate||function(r,t,e,o){var i=arguments.length,l=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(l=(i<3?a(l):i>3?a(t,e,l):a(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Pt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[u,p]}render(){return this.outlined?h`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}Pt.defaultTagName="turtle-question-icon";Ie([d({type:Boolean})],Pt.prototype,"outlined",void 0);class ue extends s{static get styles(){return[u,p]}render(){return h`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}ue.defaultTagName="turtle-reload-icon";const We=[mt,wt,yt,oe,le,xt,_t,Tt,kt,ie,ae,Ct,$t,ne,se,Pt,ue],Ve=[M,R,at,nt,D,Vt,F,ct,dt,At,Ht,qt,Xt,Yt,Kt,O,S,ee,w,J,...We];function Ge(r){for(const t of r){const[e,o]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,o)}}var Ae=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ue=(r,t,e,o)=>{for(var i=o>1?void 0:o?He(t,e):t,l=r.length-1,a;l>=0;l--)(a=r[l])&&(i=(o?a(t,e,i):a(i))||i);return o&&i&&Ae(t,e,i),i};class Ot extends s{constructor(){super(...arguments);this.topHref="./"}static get styles(){return[u,v`
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
      `]}render(){return c`
      <a class="top-link" href=${this.topHref}>
        <turtle-brand-icon class="brand-icon"></turtle-brand-icon>
        Turtle UI
      </a>

      <div class="nav-list">
        <slot name="nav"></slot>
      </div>
    `}}Ot.defaultTagName="site-header";Ue([d({type:String,attribute:"top-href"})],Ot.prototype,"topHref",2);var qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ye=(r,t,e,o)=>{for(var i=o>1?void 0:o?Xe(t,e):t,l=r.length-1,a;l>=0;l--)(a=r[l])&&(i=(o?a(t,e,i):a(i))||i);return o&&i&&qe(t,e,i),i},Ke=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)},jt=(r,t,e)=>(Ke(r,t,"read from private field"),e?e.call(r):t.get(r)),ce=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},zt,tt;class Et extends s{constructor(){super(...arguments);this.menuOpened=!1,ce(this,zt,()=>{this.menuOpened=!this.menuOpened}),ce(this,tt,()=>{this.menuOpened=!1})}static get styles(){return[u,v`
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
      `]}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",jt(this,tt))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",jt(this,tt))}render(){return c`
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
        @click=${jt(this,zt)}
      >
        <turtle-angle-icon
          class="angle"
          direction=${this.menuOpened?"left":"right"}
        ></turtle-angle-icon>
      </turtle-button>
    `}}zt=new WeakMap;tt=new WeakMap;Et.defaultTagName="site-layout";Ye([d({type:Boolean,attribute:"menu-opened",reflect:!0})],Et.prototype,"menuOpened",2);var Qe=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,de=(r,t,e,o)=>{for(var i=o>1?void 0:o?Je(t,e):t,l=r.length-1,a;l>=0;l--)(a=r[l])&&(i=(o?a(t,e,i):a(i))||i);return o&&i&&Qe(t,e,i),i},tr=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)},er=(r,t,e)=>(tr(r,t,"read from private field"),e?e.call(r):t.get(r)),rr=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},St;class et extends s{constructor(){super(...arguments);this.code="",this.initialLineCount=1,rr(this,St,t=>{this.code=t.currentTarget.value})}static get styles(){return[u,v`
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
      `]}connectedCallback(){super.connectedCallback(),this.code||(this.code=or(this.innerHTML).trim(),this.initialLineCount=this.code.split(`
`).length)}render(){return c`
      <span class="badge">Preview</span>

      <div class="preview">${it(this.code)}</div>

      <label class="badge" for="shadow_editor">Live Editor</label>

      <textarea
        id="shadow_editor"
        class="code"
        rows=${this.initialLineCount}
        .value=${this.code}
        @input=${er(this,St)}
      />
    `}}St=new WeakMap;et.defaultTagName="site-sandbox";de([d({type:String})],et.prototype,"code",2);de([f()],et.prototype,"initialLineCount",2);function or(r){const t=r.split(`
`).filter(i=>!!i);if(!t.length)return r;const e=t[0].replace(/^(\s+)?([^\s].*)?$/,"$1").length,o=new RegExp(`^\\s{${e}}`);return t.map(i=>i.replace(o,"")).join(`
`)}class he extends s{static get styles(){return[u,v`
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
      `]}render(){return c` <slot></slot> `}}he.defaultTagName="site-section";const lr="modulepreload",ve={},ir="/TurtleUI/",ar=function(t,e){return!e||e.length===0?t():Promise.all(e.map(o=>{if(o=`${ir}${o}`,o in ve)return;ve[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":lr,i||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((n,fe)=>{a.addEventListener("load",n),a.addEventListener("error",fe)})})).then(()=>t())};var nr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,pe=(r,t,e,o)=>{for(var i=o>1?void 0:o?sr(t,e):t,l=r.length-1,a;l>=0;l--)(a=r[l])&&(i=(o?a(t,e,i):a(i))||i);return o&&i&&nr(t,e,i),i};class rt extends s{constructor(){super(...arguments);this.name="",this._spec=void 0}static get styles(){return[u,v`
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
        .attr-name {
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
      `]}async connectedCallback(){super.connectedCallback(),this._spec=await ar(()=>import("./spec.486c193a.js"),[])}get spec(){var t;return((t=this._spec)==null?void 0:t.tags.find(e=>e.name===this.name))||null}render(){var e;if(!this.spec)return c` <span>Component definition not found.</span> `;console.log(this.spec);const t=ur(this.spec.name);return c`
      ${this.spec.description?c`<div class="component-description">
            ${it(this.spec.description)}
          </div>`:g}

      <span class="usage-title">Setup</span>
      <pre
        class="usage"
      ><code><span class="keyword">import</span> { registerTurtleUIComponents, ${t} } <span class="keyword">from</span> <span class="string">"@turtleui/webcomponents"</span>;

<span class="function">registerTurtleUIComponents</span>([${t}]);
</code></pre>

      ${this.spec.attributes&&this.spec.attributes.length>0?dr(this.spec.attributes):g}
      ${this.spec.properties&&this.spec.properties.length>0?cr(this.spec.properties):g}
      ${this.spec.slots&&this.spec.slots.length>0?hr(this.spec.slots):g}
      ${((e=this.spec.cssProperties)==null?void 0:e.length)?pr(this.spec.cssProperties):g}
    `}}rt.defaultTagName="site-wc-doc";pe([d({type:String})],rt.prototype,"name",2);pe([f()],rt.prototype,"_spec",2);function ur(r){return r.split("-").map(t=>t.slice(0,1).toUpperCase()+t.slice(1)).join("")}function cr(r){return c`
    <table>
      <thead>
        <tr>
          <th class="property-name">Property</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${r.map(t=>c`
            <tr>
              <td class="property-name"><code>${t.name}</code></td>
              <td class="data-type"><code>${t.type}</code></td>
              <td class="description">${ot(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function dr(r){return c`
    <table>
      <thead>
        <tr>
          <th class="attr-name">Attribute</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${r.map(t=>c`
            <tr>
              <td class="attr-name"><code>${t.name}</code></td>
              <td class="data-type"><code>${t.type}</code></td>
              <td class="description">${ot(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function hr(r){return c`
    <table>
      <thead>
        <tr>
          <th class="slot-name">Slot</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${r.map(t=>c`
            <tr>
              <td class="slot-name">
                <code>${vr(t.name)}</code>
              </td>
              <td class="description">${ot(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function vr(r){return r?`<slot name="${r}"></slot>"`:"<slot></slot>"}function pr(r){return c`
    <table>
      <thead>
        <tr>
          <th class="property-name">CSS Custom Property</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${r.map(t=>c`
            <tr>
              <td class="property-name">${t.name}</td>
              <td class="description">${ot(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function ot(r){return!r.description&&!r.default?g:c`
    ${r.description?it(r.description):g}
    ${r.default?c`<p>Default value is <code>${r.default}</code>.</p>`:g}
  `}Ge([...Ve,Ot,Et,et,he,rt]);we.exports.highlightAll();
