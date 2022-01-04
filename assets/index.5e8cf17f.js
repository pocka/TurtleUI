import{r as h,e as d,s,p as u,i as kt,a as Ye,d as Qe,t as ne,b as Je,l as A,c as b,y as v,T as m,f as D,o as g,g as W,h as tr}from"./vendor.10ea095f.js";const er=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};er();const c=h`
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
`;var se=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class V extends s{constructor(){super(...arguments);this.bordered=!1,this.placeholderAlt=""}static get styles(){return[c,h`
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
    `}}V.defaultTagName="turtle-avatar";se([d({type:Boolean,reflect:!0})],V.prototype,"bordered",void 0);se([d({type:String,attribute:"placeholder-alt"})],V.prototype,"placeholderAlt",void 0);var ue=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class H extends s{constructor(){super(...arguments);this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[c,h`
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
        style=${kt({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}H.defaultTagName="turtle-balloon";ue([d({type:String,attribute:"tail-position"})],H.prototype,"tailPosition",void 0);ue([d({type:Number,attribute:"tail-offset"})],H.prototype,"tailOffset",void 0);var ce=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},G;class y{constructor(t,e=""){this.assigned=!1,G.set(this,()=>{if(!this.host.shadowRoot)return;const r=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",i=this.host.shadowRoot.querySelector(r);this.assigned=!!i&&i.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",ce(this,G,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",ce(this,G,"f"))}}G=new WeakMap;var U=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},q=globalThis&&globalThis.__classPrivateFieldSet||function(l,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?l!==t||!i:!t.has(l))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(l,e):i?i.value=e:t.set(l,e),e},P,C;class rr extends Qe{constructor(t){super(t);if(P.set(this,null),C.set(this,[]),t.type!==ne.CHILD&&t.type!==ne.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var r;(r=U(this,P,"f"))===null||r===void 0||r.call(this);const i="parentNode"in t?t.parentNode:t.element;if(!("tagName"in i)||i.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const o=()=>{U(this,C,"f").forEach(n=>n());const a=i.assignedElements();q(this,C,a.map(e).filter(n=>!!n),"f")};return i.addEventListener("slotchange",o),q(this,P,()=>{i.removeEventListener("slotchange",o)},"f"),this.render(e)}render(t){return Je}disconnected(){var t;(t=U(this,P,"f"))===null||t===void 0||t.call(this),q(this,P,null,"f"),U(this,C,"f").forEach(e=>e()),q(this,C,[],"f")}}P=new WeakMap,C=new WeakMap;const x=Ye(rr);var de=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},he=globalThis&&globalThis.__classPrivateFieldSet||function(l,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?l!==t||!i:!t.has(l))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(l,e):i?i.value=e:t.set(l,e),e},N=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)};function O(l){var t,e,r;class i extends l{constructor(){super(...arguments);this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(a=>{!a[0]||he(this,t,ve(a[0].target),"f")})),r.set(this,a=>{!N(this,t,"f")||(a.preventDefault(),a.stopPropagation())})}renderLightDOMSlot(a){return u`<slot id="lightdom" class=${A(a)}>
        ${x(n=>{if("getAttribute"in n)return he(this,t,ve(n),"f"),n.addEventListener("click",N(this,r,"f")),N(this,e,"f").observe(n,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{n.removeEventListener("click",N(this,r,"f")),N(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,r=new WeakMap,de([d({type:Boolean,reflect:!0})],i.prototype,"disabled",void 0),de([d({type:Boolean,attribute:"lightdom"})],i.prototype,"lightDOM",void 0),i}function ve(l){const t=l.getAttribute("aria-disabled");return t?t==="true":"disabled"in l?l.disabled:!1}var Pt=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},pe=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},X;class Z extends O(s){constructor(){super(...arguments);this.variant="normal",this.rounded=!1,this.iconOnly=!1,X.set(this,new y(this,"icon"))}static get styles(){return[c,h`
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
      `]}render(){const t=pe(this,X,"f").assigned?"with-icon":"",e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):u`
          <button
            class="button ${t}"
            ?disabled=${this.disabled}
            part="button"
          >
            <slot></slot>
          </button>
        `;return u`
      ${e}

      <span
        class="icon"
        ?data-hidden=${!pe(this,X,"f").assigned}
        ?data-disabled=${this.disabled}
        part="icon"
      >
        <slot name="icon"></slot>
      </span>
    `}}X=new WeakMap;Z.defaultTagName="turtle-button";Pt([d({type:String})],Z.prototype,"variant",void 0);Pt([d({type:Boolean,reflect:!0})],Z.prototype,"rounded",void 0);Pt([d({type:Boolean,reflect:!0,attribute:"icon-only"})],Z.prototype,"iconOnly",void 0);var lr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Ct extends s{constructor(){super(...arguments);this.evenly=!1}static get styles(){return[c,h`
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
      `]}render(){return u` <slot></slot> `}}Ct.defaultTagName="turtle-button-group";lr([d({type:Boolean,reflect:!0})],Ct.prototype,"evenly",void 0);var fe=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},be=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},Ot,jt;class K extends s{constructor(){super(...arguments);Ot.set(this,new y(this,"action")),jt.set(this,new y(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[c,h`
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
      <div class="image-sizer" ?assigned=${be(this,jt,"f").assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${be(this,Ot,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}Ot=new WeakMap,jt=new WeakMap;K.defaultTagName="turtle-card";fe([d({type:Boolean,attribute:"shadowed",reflect:!0})],K.prototype,"shadowed",void 0);fe([d({type:Boolean,attribute:"bordered",reflect:!0})],K.prototype,"bordered",void 0);class ge extends O(s){static get styles(){return[c,h`
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
        `}}ge.defaultTagName="turtle-card-action";var me=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},w=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},Y,j,E;class Q extends s{constructor(){super(...arguments);this.sync=()=>{},this._checkState="unchecked",this._disabled=!1,Y.set(this,new MutationObserver(t=>{!t[0]||w(this,j,"f").call(this,t[0].target)})),j.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),E.set(this,t=>{w(this,j,"f").call(this,t.currentTarget)})}static get styles(){return[c,h`
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
        >${x(t=>{if("checked"in t)return w(this,j,"f").call(this,t),t.addEventListener("change",w(this,E,"f")),t.addEventListener("input",w(this,E,"f")),w(this,Y,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked","indeterminate"]}),this.sync=()=>{w(this,j,"f").call(this,t)},()=>{t.removeEventListener("change",w(this,E,"f")),t.removeEventListener("input",w(this,E,"f")),w(this,Y,"f").disconnect(),this.sync=()=>{}}})}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState==="checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${or}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState==="indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${ir}
      </svg>
    `}}Y=new WeakMap,j=new WeakMap,E=new WeakMap;Q.defaultTagName="turtle-checkbox";me([b()],Q.prototype,"_checkState",void 0);me([b()],Q.prototype,"_disabled",void 0);const or=v`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,ir=v`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`,p=h`
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
`;class we extends s{static get styles(){return[c,p]}render(){return ye()}}we.defaultTagName="turtle-terminal-icon";const ye=l=>v`
  <svg part=${A(l)} class="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;var J=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Et=globalThis&&globalThis.__classPrivateFieldSet||function(l,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?l!==t||!i:!t.has(l))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(l,e):i?i.value=e:t.set(l,e),e},f=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},_,T,L,tt,et,Lt,Mt;class M extends s{constructor(){super(...arguments);this.role="combobox",this.noAutoAria=!1,_.set(this,null),T.set(this,0),this._listbox=null,this._options=[],L.set(this,t=>{var e,r;if(this.noAutoAria||(Et(this,T,t,"f"),!f(this,_,"f")))return;if(!this._options.length){f(this,_,"f").removeAttribute("aria-activedescendant");return}this._options.forEach((o,a)=>{a===t?o.setAttribute("aria-selected","true"):o.removeAttribute("aria-selected")});const i=this._options[t];if(!(i==null?void 0:i.id)){console.warn("[turtle-command-palette] Listbox option MUST have an ID.");return}((e=this._listbox)===null||e===void 0?void 0:e.clientHeight)!==((r=this._listbox)===null||r===void 0?void 0:r.scrollHeight)&&i.scrollIntoView(),f(this,_,"f").setAttribute("aria-activedescendant",i.id)}),tt.set(this,()=>{if(this.noAutoAria||!f(this,_,"f")||!this._listbox||this.role!=="combobox")return;if(!this._listbox.id){console.warn("[turtle-command-palette] Listbox MUST have an ID.");return}const t=Array.from(this._listbox.children);this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-owns",this._listbox.id),this.setAttribute("aria-expanded",String(t.length>0)),f(this,_,"f").setAttribute("aria-controls",this._listbox.id)}),et.set(this,t=>{if(!t.isComposing)switch(t.key){case"Enter":f(this,Lt,"f").call(this),t.preventDefault();return;case"Escape":f(this,Mt,"f").call(this),t.preventDefault();return;case"ArrowUp":{const e=f(this,T,"f")<=0?this._options.length-1:f(this,T,"f")-1;f(this,L,"f").call(this,e),t.preventDefault();return}case"ArrowDown":{const e=f(this,T,"f")>=this._options.length-1?0:f(this,T,"f")+1;f(this,L,"f").call(this,e),t.preventDefault();return}}}),Lt.set(this,(t=f(this,T,"f"))=>{const e=this._options[t];!e||e.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))}),Mt.set(this,()=>{this.dispatchEvent(new CustomEvent("cancel"))})}static get styles(){return[c,h`
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
        <slot class="icon" name="icon"
          >${ye("icon")}</slot
        >
        <slot class="search" name="search"
          >${x(t=>{if("disabled"in t)return Et(this,_,t,"f"),f(this,tt,"f").call(this),t.addEventListener("keydown",f(this,et,"f")),()=>{Et(this,_,null,"f"),t.removeEventListener("keydown",f(this,et,"f"))}})}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${x(t=>{var e;this._listbox=t,this._options=Array.from(t.children),f(this,tt,"f").call(this),f(this,L,"f").call(this,0);const r=()=>{f(this,L,"f").call(this,0),this._options=Array.from(t.children)};(e=t.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",r);const i=o=>{if(!o.target||!("getAttribute"in o.target))return;const n=o.target.closest("turtle-command-palette-option");n&&n.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))};return t.addEventListener("click",i),()=>{var o;this._listbox=null,this._options=[],(o=t.shadowRoot)===null||o===void 0||o.removeEventListener("slotchange",r),t.removeEventListener("click",i)}})}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length>0}
      ></slot>
    `}}_=new WeakMap,T=new WeakMap,L=new WeakMap,tt=new WeakMap,et=new WeakMap,Lt=new WeakMap,Mt=new WeakMap;M.defaultTagName="turtle-command-palette";J([d({type:String,reflect:!0})],M.prototype,"role",void 0);J([d({type:Boolean,attribute:"noautoaria"})],M.prototype,"noAutoAria",void 0);J([b()],M.prototype,"_listbox",void 0);J([b()],M.prototype,"_options",void 0);var ar=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},xe=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},rt;class St extends s{constructor(){super(...arguments);this.role="listbox",rt.set(this,()=>{this.children.length>0?this.removeAttribute("empty"):this.setAttribute("empty","")})}static get styles(){return[c,h`
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
      `]}connectedCallback(){super.connectedCallback(),xe(this,rt,"f").call(this)}render(){return u`<slot @slotchange=${xe(this,rt,"f")}></slot>`}}rt=new WeakMap;St.defaultTagName="turtle-command-palette-listbox";ar([d({type:String,reflect:!0})],St.prototype,"role",void 0);var nr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class zt extends s{constructor(){super(...arguments);this.role="option"}static get styles(){return[c,h`
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
    `}}zt.defaultTagName="turtle-command-palette-option";nr([d({type:String,reflect:!0})],zt.prototype,"role",void 0);var sr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Rt extends s{static get styles(){return h`
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
    `}render(){return u`<slot></slot>`}}Rt.defaultTagName="turtle-design-system";sr([d({type:String,reflect:!0})],Rt.prototype,"theme",void 0);var ur=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},S=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},z,lt;class Dt extends s{constructor(){super(...arguments);this._elementState="neutral",z.set(this,t=>{S(this,lt,"f").call(this,t.currentTarget)}),lt.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[c,h`
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
        >${x(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return S(this,lt,"f").call(this,t),t.addEventListener("validitychange",S(this,z,"f")),t.addEventListener("fieldtouch",S(this,z,"f")),()=>{t.removeEventListener("validitychange",S(this,z,"f")),t.removeEventListener("fieldtouch",S(this,z,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}z=new WeakMap,lt=new WeakMap;Dt.defaultTagName="turtle-form-field";ur([b()],Dt.prototype,"_elementState",void 0);class _e extends s{static get styles(){return[c,h`
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
    `}}_e.defaultTagName="turtle-labelled-item";class Te extends s{static get styles(){return[c,h`
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
      `]}render(){return u` <slot></slot> `}}Te.defaultTagName="turtle-list";var $e=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},Nt,Zt;class ke extends O(s){constructor(){super(...arguments);Nt.set(this,new y(this,"icon-start")),Zt.set(this,new y(this,"icon-end"))}static get styles(){return[c,h`
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
      `]}render(){const t=["body-slot",$e(this,Nt,"f").assigned?"icon-start":"",$e(this,Zt,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):u`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return u`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}Nt=new WeakMap,Zt=new WeakMap;ke.defaultTagName="turtle-list-item";var cr=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},Bt;class Pe extends s{constructor(){super(...arguments);Bt.set(this,new y(this,"image"))}static get styles(){return[c,h`
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
        <div class="image" ?data-hidden=${!cr(this,Bt,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}Bt=new WeakMap;Pe.defaultTagName="turtle-notification";class Ce extends O(s){static get styles(){return[c,h`
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
        `}}Ce.defaultTagName="turtle-notification-action";var dr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},ot=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},it,at;class Ft extends O(s){constructor(){super(...arguments);this.pressable=!1,it.set(this,new y(this,"icon")),at.set(this,new y(this,"action-icon"))}static get styles(){return[c,h`
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
      `]}render(){const t=[ot(this,it,"f").assigned?"with-icon":null,ot(this,at,"f").assigned?"with-action-icon":null].filter(Boolean).join(" "),e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):this.pressable?u`<button part="button" class="button ${t}">
          <slot></slot>
        </button>`:u`<span part="label" class="label ${t}"
          ><slot></slot
        ></span>`;return u`
      <div
        part="icon"
        class="icon"
        ?data-hidden=${!ot(this,it,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="icon"></slot>
      </div>

      ${e}

      <div
        part="action-icon"
        class="action-icon"
        ?data-hidden=${!ot(this,at,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="action-icon"></slot>
      </div>
    `}}it=new WeakMap,at=new WeakMap;Ft.defaultTagName="turtle-pill";dr([d({type:Boolean})],Ft.prototype,"pressable",void 0);var hr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},nt=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},st,ut;class It extends s{constructor(){super(...arguments);this._progress={max:1,value:0},st.set(this,t=>{this._progress={max:t.max,value:t.value}}),ut.set(this,new MutationObserver(t=>{!t[0]||nt(this,st,"f").call(this,t[0].target)}))}static get styles(){return[c,h`
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
      `]}render(){const{max:t,value:e}=this._progress,r=Math.min(1,Math.max(0,t<0?0:e/t));return u`
      <slot
        >${x(i=>{if(i instanceof HTMLProgressElement)return nt(this,st,"f").call(this,i),nt(this,ut,"f").observe(i,{attributes:!0,attributeFilter:["value","max"]}),()=>{nt(this,ut,"f").disconnect()}})}</slot
      >

      <div
        part="inner-bar"
        class="inner-bar"
        aria-hidden="true"
        style=${kt({width:r*100+"%"})}
      ></div>
    `}}st=new WeakMap,ut=new WeakMap;It.defaultTagName="turtle-progressbar";hr([b()],It.prototype,"_progress",void 0);class Oe extends s{static get styles(){return[c,h`
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
      `]}render(){return u`<slot></slot>`}}Oe.defaultTagName="turtle-radio-button";var ct=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},$=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},dt,ht,B;function vt(l){switch(l.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return l.validity.valid}class k extends s{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,dt.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&$(this,B,"f").call(this,t[0].target)})),ht.set(this,t=>{$(this,B,"f").call(this,t.currentTarget)}),B.set(this,t=>{const e=vt(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[c,h`
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
          ${x(e=>{if("validity"in e)return $(this,B,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",$(this,ht,"f")),e.addEventListener("focusout",this.touch),$(this,dt,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",$(this,ht,"f")),e.removeEventListener("focusout",this.touch),$(this,dt,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${je}</div>
        <div class="indicator invalid" aria-hidden="true">${Ee}</div>
      </div>
    `}}dt=new WeakMap,ht=new WeakMap,B=new WeakMap;k.defaultTagName="turtle-textbox";ct([d({type:Boolean,reflect:!0})],k.prototype,"touched",void 0);ct([d({type:Boolean,attribute:"novalidity"})],k.prototype,"noValidity",void 0);ct([b()],k.prototype,"_isElementValid",void 0);ct([b()],k.prototype,"_disabled",void 0);const je=v`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,Ee=v`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var pt=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},ft=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},bt,gt;class R extends s{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,bt.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=vt(t[0].target))})),gt.set(this,t=>{this._isElementValid=vt(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...k.styles,h`
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
          ${x(e=>{if("validity"in e)return this._isElementValid=vt(e),this._disabled=e.disabled,e.addEventListener("input",ft(this,gt,"f")),e.addEventListener("focusout",this.touch),ft(this,bt,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",ft(this,gt,"f")),e.removeEventListener("focusout",this.touch),ft(this,bt,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${je}</div>
        <div class="indicator invalid" aria-hidden="true">${Ee}</div>

        <div class="caret" aria-hidden="true">${vr}</div>
      </div>
    `}}bt=new WeakMap,gt=new WeakMap;R.defaultTagName="turtle-selectbox";pt([d({type:Boolean,reflect:!0})],R.prototype,"touched",void 0);pt([d({type:Boolean,attribute:"novalidity"})],R.prototype,"noValidity",void 0);pt([b()],R.prototype,"_isElementValid",void 0);pt([b()],R.prototype,"_disabled",void 0);const vr=v`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var pr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};function fr(l){class t extends l{constructor(){super(...arguments);this.autofocus=!1}firstUpdated(r){super.firstUpdated(r),this.autofocus&&this.focus()}}return pr([d({type:Boolean})],t.prototype,"autofocus",void 0),t}var At=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},Le=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},Wt,Vt;class F extends fr(s){constructor(){super(...arguments);Wt.set(this,new y(this,"action")),this.severity="info",Vt.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[c,h`
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
          style=${kt({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${A(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${A(this.lifetimeLabel)}
          @animationend=${Le(this,Vt,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:m}

      <div class="actions" ?data-assigned=${Le(this,Wt,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}Wt=new WeakMap,Vt=new WeakMap;F.defaultTagName="turtle-snackbar";At([d({type:String,reflect:!0})],F.prototype,"severity",void 0);At([d({type:Number})],F.prototype,"lifetime",void 0);At([d({type:String,attribute:"lifetime-label"})],F.prototype,"lifetimeLabel",void 0);class Me extends O(s){static get styles(){return[c,h`
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
        `}}Me.defaultTagName="turtle-snackbar-action";var Se=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o},mt=globalThis&&globalThis.__classPrivateFieldGet||function(l,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?l!==t||!r:!t.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(l):r?r.value:t.get(l)},wt,yt;class xt extends s{constructor(){super(...arguments);this._checked=!1,this._disabled=!1,wt.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),yt.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[c,h`
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
      `]}render(){return u`
      <slot>
        ${x(t=>{if("checked"in t)return this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",mt(this,yt,"f")),mt(this,wt,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",mt(this,yt,"f")),mt(this,wt,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}wt=new WeakMap,yt=new WeakMap;xt.defaultTagName="turtle-toggle-switch";Se([b()],xt.prototype,"_checked",void 0);Se([b()],xt.prototype,"_disabled",void 0);var br=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Ht extends s{constructor(){super(...arguments);this.direction="down"}static get styles(){return[c,p,h`
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
    `}}Ht.defaultTagName="turtle-angle-icon";br([d({type:String,reflect:!0})],Ht.prototype,"direction",void 0);var gr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Gt extends s{constructor(){super(...arguments);this.direction="down"}static get styles(){return[c,p,h`
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
    `}}Gt.defaultTagName="turtle-arrow-icon";gr([d({type:String,reflect:!0})],Gt.prototype,"direction",void 0);var mr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Ut extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,p]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}Ut.defaultTagName="turtle-attention-icon";mr([d({type:Boolean})],Ut.prototype,"outlined",void 0);class ze extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}ze.defaultTagName="turtle-brand-icon";class Re extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}Re.defaultTagName="turtle-check-icon";var wr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class qt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,p]}render(){return this.outlined?v`
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
    `}}qt.defaultTagName="turtle-circle-check-icon";wr([d({type:Boolean})],qt.prototype,"outlined",void 0);var yr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Xt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,p]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}Xt.defaultTagName="turtle-circle-cross-icon";yr([d({type:Boolean})],Xt.prototype,"outlined",void 0);var xr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Kt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,p]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}Kt.defaultTagName="turtle-circle-minus-icon";xr([d({type:Boolean})],Kt.prototype,"outlined",void 0);var _r=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Yt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,p]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}Yt.defaultTagName="turtle-circle-plus-icon";_r([d({type:Boolean})],Yt.prototype,"outlined",void 0);class De extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}De.defaultTagName="turtle-cross-icon";class Ne extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}Ne.defaultTagName="turtle-dots-icon";class Ze extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z" fill="currentColor"/>
      </svg>
    `}}Ze.defaultTagName="turtle-file-upload-icon";class Be extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 4.70718L17.7071 3.29297L9 12.0001L17.7071 20.7072L19.1213 19.293L11.8284 12.0001L19.1213 4.70718ZM6 4H4V20H6V4Z" fill="currentColor" />
      </svg>
    `}}Be.defaultTagName="turtle-first-page-icon";var Tr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Qt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,p]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}Qt.defaultTagName="turtle-heart-icon";Tr([d({type:Boolean})],Qt.prototype,"outlined",void 0);var $r=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class Jt extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,p]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}Jt.defaultTagName="turtle-info-icon";$r([d({type:Boolean})],Jt.prototype,"outlined",void 0);class Fe extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87866 4.70718L6.29288 3.29297L15 12.0001L6.29288 20.7072L4.87866 19.293L12.1716 12.0001L4.87866 4.70718ZM20 4H18V20H20V4Z" fill="currentColor"/>
      </svg>
    `}}Fe.defaultTagName="turtle-last-page-icon";class Ie extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}Ie.defaultTagName="turtle-minus-icon";class Ae extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}Ae.defaultTagName="turtle-plus-icon";var kr=globalThis&&globalThis.__decorate||function(l,t,e,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,e,r);else for(var n=l.length-1;n>=0;n--)(a=l[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o};class te extends s{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[c,p]}render(){return this.outlined?v`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}te.defaultTagName="turtle-question-icon";kr([d({type:Boolean})],te.prototype,"outlined",void 0);class We extends s{static get styles(){return[c,p]}render(){return v`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}We.defaultTagName="turtle-reload-icon";const Ve=[Ht,Gt,Ut,ze,Re,qt,Xt,Kt,Yt,De,Ne,Ze,Be,Qt,Jt,Fe,Ie,Ae,te,We,we],Pr=[V,H,Z,Ct,K,ge,Q,M,St,zt,Rt,Dt,_e,Te,ke,Pe,Ce,Ft,It,Oe,R,F,Me,k,xt,...Ve];function Cr(l){for(const t of l){const[e,r]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,r)}}var Or=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Er=(l,t,e,r)=>{for(var i=r>1?void 0:r?jr(t,e):t,o=l.length-1,a;o>=0;o--)(a=l[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Or(t,e,i),i};class ee extends s{constructor(){super(...arguments);this.topHref="./"}static get styles(){return[c,h`
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
    `}}ee.defaultTagName="site-header";Er([d({type:String,attribute:"top-href"})],ee.prototype,"topHref",2);var Lr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Sr=(l,t,e,r)=>{for(var i=r>1?void 0:r?Mr(t,e):t,o=l.length-1,a;o>=0;o--)(a=l[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Lr(t,e,i),i};class re extends s{constructor(){super(...arguments);this._selected=null}static get styles(){return[c,h`
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
      `]}render(){return D`
      <site-section class="section">
        <div class="catalogue">
          ${Ve.map(t=>{const e=t.defaultTagName,r=t.defaultTagName===this._selected,i=()=>{this._selected=t.defaultTagName};return"direction"in t.prototype?D`
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
              `:"outlined"in t.prototype?D`
                <button ?data-selected=${r} title=${`<${e}>`} @click=${i}>
                  <${g(e)}></${g(e)}>
                </button>
                <button ?data-selected=${r} title=${`<${e} outlined>`} @click=${i}>
                  <${g(e)} outlined></${g(e)}>
                </button>
              `:D`
              <button ?data-selected=${r} title=${`<${e}>`} @click=${i}>
                <${g(e)}></${g(e)}>
              </button>
            `})}
        </div>
        ${this._selected?D`
              <div class="demo">
                <span class="title">${this._selected}</span>
                <site-wc-doc name=${this._selected}></site-wc-doc>
              </div>
            `:m}
      </site-section>
    `}}re.defaultTagName="site-icon-catalogue";Sr([b()],re.prototype,"_selected",2);var zr=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,Dr=(l,t,e,r)=>{for(var i=r>1?void 0:r?Rr(t,e):t,o=l.length-1,a;o>=0;o--)(a=l[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&zr(t,e,i),i},Nr=(l,t,e)=>{if(!t.has(l))throw TypeError("Cannot "+e)},le=(l,t,e)=>(Nr(l,t,"read from private field"),e?e.call(l):t.get(l)),He=(l,t,e)=>{if(t.has(l))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(l):t.set(l,e)},oe,_t;class ie extends s{constructor(){super(...arguments);this.menuOpened=!1,He(this,oe,()=>{this.menuOpened=!this.menuOpened}),He(this,_t,()=>{this.menuOpened=!1})}static get styles(){return[c,h`
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
      `]}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",le(this,_t))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",le(this,_t))}render(){return u`
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
        @click=${le(this,oe)}
      >
        <turtle-angle-icon
          class="angle"
          direction=${this.menuOpened?"left":"right"}
        ></turtle-angle-icon>
      </turtle-button>
    `}}oe=new WeakMap;_t=new WeakMap;ie.defaultTagName="site-layout";Dr([d({type:Boolean,attribute:"menu-opened",reflect:!0})],ie.prototype,"menuOpened",2);var Zr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Ge=(l,t,e,r)=>{for(var i=r>1?void 0:r?Br(t,e):t,o=l.length-1,a;o>=0;o--)(a=l[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Zr(t,e,i),i},Fr=(l,t,e)=>{if(!t.has(l))throw TypeError("Cannot "+e)},Ir=(l,t,e)=>(Fr(l,t,"read from private field"),e?e.call(l):t.get(l)),Ar=(l,t,e)=>{if(t.has(l))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(l):t.set(l,e)},ae;class Tt extends s{constructor(){super(...arguments);this.code="",this.initialLineCount=1,Ar(this,ae,t=>{this.code=t.currentTarget.value})}static get styles(){return[c,h`
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
      `]}connectedCallback(){super.connectedCallback(),this.code||(this.code=Wr(this.innerHTML).trim(),this.initialLineCount=this.code.split(`
`).length)}render(){return u`
      <span class="badge">Demo</span>

      <div class="preview">${W(this.code)}</div>

      <label class="badge" for="shadow_editor">Live Editor</label>

      <textarea
        id="shadow_editor"
        class="code"
        rows=${this.initialLineCount}
        .value=${this.code}
        @input=${Ir(this,ae)}
      />
    `}}ae=new WeakMap;Tt.defaultTagName="site-sandbox";Ge([d({type:String})],Tt.prototype,"code",2);Ge([b()],Tt.prototype,"initialLineCount",2);function Wr(l){const t=l.split(`
`).filter(i=>!!i);if(!t.length)return l;const e=t[0].replace(/^(\s+)?([^\s].*)?$/,"$1").length,r=new RegExp(`^\\s{${e}}`);return t.map(i=>i.replace(r,"")).join(`
`)}class Ue extends s{static get styles(){return[c,h`
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
      `]}render(){return u` <slot></slot> `}}Ue.defaultTagName="site-section";const Vr="modulepreload",qe={},Hr="/TurtleUI/",Gr=function(t,e){return!e||e.length===0?t():Promise.all(e.map(r=>{if(r=`${Hr}${r}`,r in qe)return;qe[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Vr,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((n,Ke)=>{a.addEventListener("load",n),a.addEventListener("error",Ke)})})).then(()=>t())};var Ur=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Xe=(l,t,e,r)=>{for(var i=r>1?void 0:r?qr(t,e):t,o=l.length-1,a;o>=0;o--)(a=l[o])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Ur(t,e,i),i};class $t extends s{constructor(){super(...arguments);this.name="",this._spec=void 0}static get styles(){return[c,h`
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

        .description p:not(:first-child),
        .component-description p:not(:first-child) {
          margin-top: 0.75em;
        }
      `]}async connectedCallback(){super.connectedCallback(),this._spec=await Gr(()=>import("./spec.09ab5a06.js"),[])}get spec(){var t;return((t=this._spec)==null?void 0:t.tags.find(e=>e.name===this.name))||null}render(){var e,r,i;if(!this.spec)return u` <span>Component definition not found.</span> `;const t=Xr(this.spec.name);return u`
      ${this.spec.description?u`<div class="component-description">
            ${W(this.spec.description)}
          </div>`:m}

      <span class="usage-title">Setup</span>
      <pre
        class="usage"
      ><code><span class="keyword">import</span> { registerTurtleUIComponents, ${t} } <span class="keyword">from</span> <span class="string">"@turtleui/webcomponents"</span>;

<span class="function">registerTurtleUIComponents</span>([${t}]);
</code></pre>

      ${this.spec.attributes&&this.spec.attributes.length>0?Yr(this.spec.attributes):m}
      ${this.spec.properties&&this.spec.properties.length>0?Kr(this.spec.properties):m}
      ${((e=this.spec.events)==null?void 0:e.length)?Qr(this.spec.events):m}
      ${this.spec.slots&&this.spec.slots.length>0?Jr(this.spec.slots):m}
      ${((r=this.spec.cssProperties)==null?void 0:r.length)?el(this.spec.cssProperties):m}
      ${((i=this.spec.cssParts)==null?void 0:i.length)?rl(this.spec.cssParts):m}
    `}}$t.defaultTagName="site-wc-doc";Xe([d({type:String})],$t.prototype,"name",2);Xe([b()],$t.prototype,"_spec",2);function Xr(l){return l.split("-").map(t=>t.slice(0,1).toUpperCase()+t.slice(1)).join("")}function Kr(l){return u`
    <table>
      <thead>
        <tr>
          <th class="property-name">Property</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${l.map(t=>u`
            <tr>
              <td class="property-name"><code>${t.name}</code></td>
              <td class="data-type"><code>${t.type}</code></td>
              <td class="description">${I(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Yr(l){return u`
    <table>
      <thead>
        <tr>
          <th class="attr-name">Attribute</th>
          <th class="data-type">Data Type</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${l.map(t=>u`
            <tr>
              <td class="attr-name"><code>${t.name}</code></td>
              <td class="data-type"><code>${t.type}</code></td>
              <td class="description">${I(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Qr(l){return u`
    <table>
      <thead>
        <tr>
          <th class="event-name">Event</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${l.map(t=>u`
            <tr>
              <td class="event-name"><code>${t.name}</code></td>
              <td class="description">
                ${"description"in t?W(t.description):m}
              </td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function Jr(l){return u`
    <table>
      <thead>
        <tr>
          <th class="slot-name">Slot</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${l.map(t=>u`
            <tr>
              <td class="slot-name">
                <code>${tl(t.name)}</code>
              </td>
              <td class="description">${I(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function tl(l){return l?`<slot name="${l}"></slot>"`:"<slot></slot>"}function el(l){return u`
    <table>
      <thead>
        <tr>
          <th class="property-name">CSS Custom Property</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${l.map(t=>u`
            <tr>
              <td class="property-name">${t.name}</td>
              <td class="description">${I(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function rl(l){return u`
    <table>
      <thead>
        <tr>
          <th class="part-name">CSS Part</th>
          <th class="description">Description</th>
        </tr>
      </thead>
      <tbody>
        ${l.map(t=>u`
            <tr>
              <td class="part-name">${t.name}</td>
              <td class="description">${I(t)}</td>
            </tr>
          `)}
      </tbody>
    </table>
  `}function I(l){return!l.description&&!l.default?m:u`
    ${l.description?W(l.description):m}
    ${l.default?u`<p>Default value is <code>${l.default}</code>.</p>`:m}
  `}Cr([...Pr,ee,re,ie,Tt,Ue,$t]);tr.exports.highlightAll();
