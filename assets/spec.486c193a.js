const e="experimental",t=[{name:"turtle-angle-icon",attributes:[{name:"direction",type:'"up" | "down" | "right" | "left"',default:'"down"'}],properties:[{name:"direction",attribute:"direction",type:'"up" | "down" | "right" | "left"',default:'"down"'}]},{name:"turtle-arrow-icon",attributes:[{name:"direction",type:'"up" | "down" | "right" | "left"',default:'"down"'}],properties:[{name:"direction",attribute:"direction",type:'"up" | "down" | "right" | "left"',default:'"down"'}]},{name:"turtle-attention-icon",attributes:[{name:"outlined",type:"boolean",default:"false"}],properties:[{name:"outlined",attribute:"outlined",type:"boolean",default:"false"}]},{name:"turtle-brand-icon",properties:[]},{name:"turtle-check-icon",properties:[]},{name:"turtle-circle-check-icon",attributes:[{name:"outlined",type:"boolean",default:"false"}],properties:[{name:"outlined",attribute:"outlined",type:"boolean",default:"false"}]},{name:"turtle-circle-cross-icon",attributes:[{name:"outlined",type:"boolean",default:"false"}],properties:[{name:"outlined",attribute:"outlined",type:"boolean",default:"false"}]},{name:"turtle-circle-minus-icon",attributes:[{name:"outlined",type:"boolean",default:"false"}],properties:[{name:"outlined",attribute:"outlined",type:"boolean",default:"false"}]},{name:"turtle-circle-plus-icon",attributes:[{name:"outlined",type:"boolean",default:"false"}],properties:[{name:"outlined",attribute:"outlined",type:"boolean",default:"false"}]},{name:"turtle-cross-icon",properties:[]},{name:"turtle-dots-icon",properties:[]},{name:"turtle-heart-icon",attributes:[{name:"outlined",type:"boolean",default:"false"}],properties:[{name:"outlined",attribute:"outlined",type:"boolean",default:"false"}]},{name:"turtle-info-icon",attributes:[{name:"outlined",type:"boolean",default:"false"}],properties:[{name:"outlined",attribute:"outlined",type:"boolean",default:"false"}]},{name:"turtle-minus-icon",properties:[]},{name:"turtle-plus-icon",properties:[]},{name:"turtle-question-icon",attributes:[{name:"outlined",type:"boolean",default:"false"}],properties:[{name:"outlined",attribute:"outlined",type:"boolean",default:"false"}]},{name:"turtle-reload-icon",properties:[]},{name:"turtle-avatar",description:`<p>Displays an avatar image. When the image is not specified, the component shows a placeholder image.</p>
`,attributes:[{name:"bordered",description:`<p>Whether to display a border line.</p>
`,type:"boolean",default:"false"},{name:"placeholder-alt",description:`<p>Label text for the fallback image.
Strongly recommended to set unless the slot is always assigned.</p>
`,type:"string",default:'""'}],properties:[{name:"bordered",attribute:"bordered",description:`<p>Whether to display a border line.</p>
`,type:"boolean",default:"false"},{name:"placeholderAlt",attribute:"placeholder-alt",description:`<p>Label text for the fallback image.
Strongly recommended to set unless the slot is always assigned.</p>
`,type:"string",default:'""'}],slots:[{name:"",description:`<p>An avatar image (<code>&lt;img&gt;</code> element or any <code>object-fit</code>-able element, except <code>&lt;picture&gt;</code> element.)</p>
`}],cssProperties:[{name:"--turtle-avatar--size",description:`<p>Width and Height of the component.</p>
`,default:'"calc(4.8 * var(--turtle-ui--unit))"'}]},{name:"turtle-balloon",description:`<p>Balloon UI component. In other words, Callout.</p>
`,attributes:[{name:"tail-position",description:`<p>Where to show the balloon tail?</p>
`,type:'"top" | "right" | "bottom" | "left"',default:'"bottom"'},{name:"tail-offset",description:`<p>Horizontal position of the tail, in ratio (0.0 ~ 1.0, where 0.0 = 0%, 1.0 = 100%).
Ignored when <code>tail-position</code> is <code>&quot;left&quot;</code> or <code>&quot;right&quot;</code>.</p>
`,type:"number",default:"0.5"}],properties:[{name:"tailPosition",attribute:"tail-position",description:`<p>Where to show the balloon tail?</p>
`,type:'"top" | "right" | "bottom" | "left"',default:'"bottom"'},{name:"tailOffset",attribute:"tail-offset",description:`<p>Horizontal position of the tail, in ratio (0.0 ~ 1.0, where 0.0 = 0%, 1.0 = 100%).
Ignored when <code>tail-position</code> is <code>&quot;left&quot;</code> or <code>&quot;right&quot;</code>.</p>
`,type:"number",default:"0.5"}]},{name:"turtle-button-group",description:`<p>Combines multiple buttons. Useful for grouping buttons by relations.</p>
`,attributes:[{name:"evenly",description:`<p>When this attribute/property is set, each child buttons have same width.
Make sure to specify the width.</p>
`,type:"boolean",default:"false"}],properties:[{name:"evenly",attribute:"evenly",description:`<p>When this attribute/property is set, each child buttons have same width.
Make sure to specify the width.</p>
`,type:"boolean",default:"false"}]},{name:"turtle-button",description:`<p>A button UI.</p>
`,attributes:[{name:"variant",description:`<p>Color variant of the button.
If an unsupported value was provided, it fallbacks to <code>&quot;normal&quot;</code>.</p>
`,type:'"normal" | "danger" | "primary"',default:'"normal"'},{name:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],properties:[{name:"variant",attribute:"variant",description:`<p>Color variant of the button.
If an unsupported value was provided, it fallbacks to <code>&quot;normal&quot;</code>.</p>
`,type:'"normal" | "danger" | "primary"',default:'"normal"'},{name:"disabled",attribute:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],cssProperties:[{name:"--turtle-button--base-radius",description:`<p>The size of corner radius.</p>
`,default:'"8px"'}]},{name:"turtle-card-action",attributes:[{name:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],properties:[{name:"disabled",attribute:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}]},{name:"turtle-card",description:`<p>A card with optional title, image, and actions.</p>
<h2 id="limitations">Limitations</h2>
<h3 id="picture-ignores-our-slotted-styles"><code>&lt;picture&gt;</code> ignores our <code>::slotted</code> styles</h3>
<p>When you place <code>&lt;picture&gt;</code> element for <code>image</code> slot, due to the poor design of <code>&lt;picture&gt;</code> element,
you need to style <code>&lt;img&gt;</code> element inside so it does fit to the container.</p>
<pre><code class="language-css">turtle-card &gt; picture[slot=&quot;image&quot;] &gt; img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</code></pre>
`,attributes:[{name:"shadowed",description:`<p>Whether to display shadow.</p>
`,type:"boolean",default:"false"},{name:"bordered",description:`<p>Whether to display borders around.</p>
`,type:"boolean",default:"false"}],properties:[{name:"shadowed",attribute:"shadowed",description:`<p>Whether to display shadow.</p>
`,type:"boolean",default:"false"},{name:"bordered",attribute:"bordered",description:`<p>Whether to display borders around.</p>
`,type:"boolean",default:"false"}]},{name:"turtle-checkbox",properties:[{name:"sync",description:`<p>Update the component&#39;s internal state based on asiggned slot contents.
You need to call this method after changing <code>indeterminate</code> property of the <code>&lt;input&gt;</code>, since
we have neither property equivalent for MutationObserver nor a change event for the property.</p>
`,type:"() => void",default:'"() => {}"'}]},{name:"turtle-design-system",description:`<p>Design System wrapper</p>
<p>This component provides CSS custom properties and set basic styles to itself.</p>
`,attributes:[{name:"theme",description:`<p>Explicitly set the color theme.</p>
`,type:'"light" | "dark" | undefined'}],properties:[{name:"theme",attribute:"theme",description:`<p>Explicitly set the color theme.</p>
`,type:'"light" | "dark" | undefined'}]},{name:"turtle-textbox",attributes:[{name:"touched",type:"boolean",default:"false"},{name:"novalidity",type:"boolean",default:"false"}],properties:[{name:"touched",attribute:"touched",type:"boolean",default:"false"},{name:"noValidity",attribute:"novalidity",type:"boolean",default:"false"},{name:"isValid",type:"boolean"},{name:"touch",type:"() => void",default:'"() => {\\n    if (!this.touched) {\\n      this.touched = true;\\n      this.dispatchEvent(new CustomEvent(\\"fieldtouch\\"));\\n    }\\n  }"'}],events:[{name:"validitychange"},{name:"fieldtouch"}]},{name:"turtle-form-field",properties:[]},{name:"turtle-labelled-item",properties:[]},{name:"turtle-list",properties:[]},{name:"turtle-notification-action",attributes:[{name:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],properties:[{name:"disabled",attribute:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}]},{name:"turtle-notification",properties:[]},{name:"turtle-radio-button",properties:[]},{name:"turtle-selectbox",attributes:[{name:"touched",type:"boolean",default:"false"},{name:"novalidity",type:"boolean",default:"false"}],properties:[{name:"touched",attribute:"touched",type:"boolean",default:"false"},{name:"noValidity",attribute:"novalidity",type:"boolean",default:"false"},{name:"touch",type:"() => void",default:'"() => {\\n    this.touched = true;\\n  }"'}]},{name:"turtle-snackbar-action",attributes:[{name:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],properties:[{name:"disabled",attribute:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}]},{name:"turtle-snackbar",attributes:[{name:"severity",type:"Severity",default:'"info"'},{name:"lifetime",description:`<p>in seconds</p>
`,type:"number | undefined"},{name:"lifetime-label",type:"string | undefined"},{name:"autofocus",type:"boolean",default:"false"}],properties:[{name:"severity",attribute:"severity",type:"Severity",default:'"info"'},{name:"lifetime",attribute:"lifetime",description:`<p>in seconds</p>
`,type:"number | undefined"},{name:"lifetimeLabel",attribute:"lifetime-label",type:"string | undefined"},{name:"autofocus",attribute:"autofocus",type:"boolean",default:"false"}],events:[{name:"timerend"}]},{name:"turtle-toggle-switch",description:`<p>Toggle Switch UI for representing an on/off value.
This component only works with Light DOM approach: you need to provide <code>&lt;input type=&quot;checkbox&quot;&gt;</code>
and set properties on them, not this component.</p>
<p>NOTE: Due to browsers fire neither <code>blur</code> nor <code>change/input</code> event on unchecked radio (probably the spec defined), you can&#39;t place <code>&lt;input type=&quot;radio&quot;&gt;</code>.</p>
`,properties:[],slots:[{name:"",description:`<p>Slot for an <code>&lt;input type=&quot;checkbox&quot; /&gt;</code>.</p>
`}]}];var o={version:e,tags:t};export{o as default,t as tags,e as version};
