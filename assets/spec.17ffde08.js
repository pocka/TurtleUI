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
`,default:'"8px"'}]},{name:"turtle-card-action",description:`<p>An action related to a <code>&lt;turtle-card&gt;</code>.</p>
`,attributes:[{name:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],properties:[{name:"disabled",attribute:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],slots:[{name:"",description:`<p>Button-like element if <code>lightdom</code> is set to <code>true</code>, TextFragment otherwise.</p>
`}]},{name:"turtle-card",description:`<p>A card with optional title, image, and actions.</p>
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
`,attributes:[{name:"shadowed",description:`<p>Whether to display shadows.</p>
`,type:"boolean",default:"false"},{name:"bordered",description:`<p>Whether to display a surrounding border.</p>
`,type:"boolean",default:"false"}],properties:[{name:"shadowed",attribute:"shadowed",description:`<p>Whether to display shadows.</p>
`,type:"boolean",default:"false"},{name:"bordered",attribute:"bordered",description:`<p>Whether to display a surrounding border.</p>
`,type:"boolean",default:"false"}],slots:[{name:"",description:`<p>Body contents.</p>
`},{name:"title",description:`<p>Title of the card.</p>
`},{name:"image",description:`<p>A representive image.</p>
`},{name:"action",description:`<p>An action related to the card. Up to 2.</p>
`}],cssProperties:[{name:"--turtle-ui--card--radius",description:`<p>Corner radius of the card. Please use this property instead of overwriting <code>border-radius</code> property.</p>
`,default:'"8px"'}]},{name:"turtle-checkbox",description:`<p>A simple checkbox.</p>
<p>After you changed <code>indeterminate</code> property of the slotted input, please make sure to call <code>sync</code> method on this component.
Otherwise the visual appearance won&#39;t update.</p>
`,properties:[],slots:[{name:"",description:`<p><code>&lt;input type=&quot;checkbox&quot;&gt;</code></p>
`}]},{name:"turtle-command-palette-listbox",description:`<p>Listbox for <code>&lt;turtle-command-palette&gt;</code>.</p>
<p>You need to provide <code>id</code> attribute to the element to enable automatic
WAI-ARIA attributes management.</p>
`,attributes:[{name:"role",description:`<p>WAI-ARIA role. Do not change unless you know what you&#39;re doing.</p>
`,type:"string",default:'"listbox"'}],properties:[{name:"role",attribute:"role",description:`<p>WAI-ARIA role. Do not change unless you know what you&#39;re doing.</p>
`,type:"string",default:'"listbox"'}],slots:[{name:"",description:`<p>A list of <code>&lt;turtle-command-palette-option&gt;</code>.</p>
`}]},{name:"turtle-command-palette-option",attributes:[{name:"role",description:`<p>WAI-ARIA role. Do not change unless you know what you&#39;re doing.</p>
`,type:"string",default:'"option"'}],properties:[{name:"role",attribute:"role",description:`<p>WAI-ARIA role. Do not change unless you know what you&#39;re doing.</p>
`,type:"string",default:'"option"'}],events:[{name:"selectoption",description:`<p>User selected the option. Bubbles.</p>
`}],slots:[{name:"",description:`<p>A name of the option.</p>
`},{name:"description",description:`<p>Descriptive text for the option. Recommended to fill the slot for clarity.</p>
`}]},{name:"turtle-command-palette",description:`<p>Command palette UI, which enables a user to search/select a command from a list of commands.</p>
<p>This component handles basic keyboard controls, such as <kbd>Arrow Up</kbd> and <kbd>Enter</kbd>.
However, this component <strong>does not</strong> handles filtering: you need to filter <code>&lt;turtle-command-palette-option&gt;</code>
element based on the input text.</p>
<p>Also, you need to implement exit actions (e.g. global <kbd>Esc</kbd> handling, backdrop) when you use this element as a modal dialog.</p>
`,attributes:[{name:"role",description:`<p>WAI-ARIA role. Do not change unless you know what you&#39;re doing.</p>
`,type:"string",default:'"combobox"'},{name:"noautoaria",description:`<p>Disables automatic WAI-ARIA attributes management.</p>
`,type:"boolean",default:"false"}],properties:[{name:"role",attribute:"role",description:`<p>WAI-ARIA role. Do not change unless you know what you&#39;re doing.</p>
`,type:"string",default:'"combobox"'},{name:"noAutoAria",attribute:"noautoaria",description:`<p>Disables automatic WAI-ARIA attributes management.</p>
`,type:"boolean",default:"false"}],events:[{name:"cancel",description:`<p>When the user press <code>ESC</code> key on textbox.</p>
`}],slots:[{name:"icon",description:`<p>Icon next to the textbox.</p>
`},{name:"search",description:`<p>Textbox. Use <code>&lt;input type=&quot;text&quot;&gt;</code> with <code>id</code> attribute set.</p>
`},{name:"listbox",description:`<p>Container list of options. Use <code>&lt;turtle-command-palette-listbox&gt;</code> with <code>id</code> attribute set.</p>
`},{name:"placeholder",description:`<p>Placeholder text for when there are no options available.</p>
`}],cssParts:[{name:"icon",description:`<p>The default icon element (<code>&lt;svg&gt;</code>).</p>
`}]},{name:"turtle-design-system",description:`<p>Design System wrapper.</p>
<p>This component provides CSS custom properties and set basic styles to itself.</p>
`,attributes:[{name:"theme",description:`<p>Explicitly set the color theme.</p>
`,type:'"light" | "dark" | undefined'}],properties:[{name:"theme",attribute:"theme",description:`<p>Explicitly set the color theme.</p>
`,type:'"light" | "dark" | undefined'}],slots:[{name:"",description:`<p>Your app.</p>
`}],cssProperties:[{name:"--turtle-ui--unit",description:`<p>Base unit size for responsive font size.</p>
`,default:'"10px"'},{name:"--turtle-ui--color--level--0",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--1",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--2",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--3",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--4",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--5",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--6",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--7",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--8",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--9",description:`<p>L%</p>
`},{name:"--turtle-ui--color--level--10",description:`<p>L%</p>
`},{name:"--turtle-ui--color--tone--mono",description:`<p>H, S%</p>
`},{name:"--turtle-ui--color--tone--safe",description:`<p>H, S%</p>
`},{name:"--turtle-ui--color--tone--warning",description:`<p>H, S%</p>
`},{name:"--turtle-ui--color--tone--danger",description:`<p>H, S%</p>
`},{name:"--turtle-ui--color--tone--primary",description:`<p>H, S%</p>
`}]},{name:"turtle-textbox",description:`<p>Textbox.</p>
`,attributes:[{name:"touched",description:`<p>Whether the user interacted to the slotted item.</p>
`,type:"boolean",default:"false"},{name:"novalidity",description:`<p>When this attribute or property is set to <code>true</code>, the component goes into neither invalid nor valid state.</p>
`,type:"boolean",default:"false"}],properties:[{name:"touched",attribute:"touched",description:`<p>Whether the user interacted to the slotted item.</p>
`,type:"boolean",default:"false"},{name:"noValidity",attribute:"novalidity",description:`<p>When this attribute or property is set to <code>true</code>, the component goes into neither invalid nor valid state.</p>
`,type:"boolean",default:"false"},{name:"isValid",description:`<p>Whether the slotted input is in valid state.</p>
`,type:"boolean"}],events:[{name:"validitychange",description:`<p>Validity state changed.</p>
`},{name:"fieldtouch",description:`<p>The user interacted the slotted input first time.</p>
`}],slots:[{name:"",description:`<p><code>&lt;input&gt;</code>, except <code>type=&quot;radio&quot;</code> and <code>type=&quot;checkbox&quot;</code> at least.</p>
`}]},{name:"turtle-form-field",description:`<p>A distinguishable property of a form.</p>
<p>If you provide <code>&lt;turtle-textbox&gt;</code> or <code>&lt;turtle-selectbox&gt;</code> for the default slot and text element for the <code>description</code> slot,
a color of the <code>description</code> slot will change depends on the validity state of the slotted <code>&lt;turtle-textbox&gt;</code> (or <code>&lt;turtle-selectbox&gt;</code>).</p>
`,properties:[],slots:[{name:"",description:`<p>Form item, required.</p>
`},{name:"label",description:`<p><code>&lt;label&gt;</code> element, required.</p>
`},{name:"description",description:`<p>Description text, optional.</p>
`}]},{name:"turtle-labelled-item",description:`<p>Label styling helper for <code>&lt;turtle-checkbox&gt;</code> and <code>&lt;turtle-radio-button&gt;</code>.</p>
`,properties:[],slots:[{name:"",description:`<p>Checkbox or Radio button.</p>
`},{name:"label",description:`<p><code>&lt;label&gt;</code> element.</p>
`}]},{name:"turtle-list-item",description:`<p>An item of the <code>&lt;turtle-list&gt;</code>.</p>
`,attributes:[{name:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],properties:[{name:"disabled",attribute:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],slots:[{name:"",description:`<p>Button-like element if <code>lightdom</code> is <code>true</code>, TextFragment otherwise.</p>
`},{name:"icon-start",description:`<p>A visual element placed to start position.</p>
`},{name:"icon-end",description:`<p>A visual element placed to end position.</p>
`}],cssProperties:[{name:"--turtle-list-item--icon-size",description:`<p>Size of icons (if exist).</p>
`,default:'"calc(2.4 * var(--turtle-ui--unit))"'},{name:"--turtle-list-item--padding",description:`<p>Padding of the item.</p>
`,default:'"12px"'},{name:"--turtle-list-item--gap",description:`<p>Gap between icons and text.</p>
`,default:'"8px"'}]},{name:"turtle-list",description:`<p>A list of actionable items.</p>
`,properties:[],slots:[{name:"",description:`<p>One or more of <code>&lt;turtle-list-item&gt;</code>.</p>
`}],cssProperties:[{name:"--turtle-list--radius",description:`<p>Corner radius.</p>
`,default:'"8px"'}]},{name:"turtle-notification-action",description:`<p>An action button for <code>&lt;turtle-notification&gt;</code>.</p>
`,attributes:[{name:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],properties:[{name:"disabled",attribute:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],slots:[{name:"",description:`<p>Button-like element if <code>lightdom</code> is <code>true</code>, TextFragment otherwise.</p>
`}]},{name:"turtle-notification",description:`<p>Notification card with user actions. Use when you want a user to perform an action, but don&#39;t want to interrupt the user.</p>
`,properties:[],slots:[{name:"",description:`<p>Body texts.</p>
`},{name:"image",description:`<p>Thumbnail <code>&lt;img&gt;</code> or icon.</p>
`},{name:"action",description:`<p>An action related to the content. Up to 2.</p>
`}],cssProperties:[{name:"--turtle-notifiaction--radius",description:`<p>Corner radius size.</p>
`,default:'"8px"'}]},{name:"turtle-radio-button",description:`<p>Radio button.</p>
`,properties:[],slots:[{name:"",description:`<p><code>&lt;input type=&quot;radio&quot;&gt;</code></p>
`}]},{name:"turtle-selectbox",description:`<p>Select box.</p>
`,attributes:[{name:"touched",description:`<p>Whether the user interacted to the slotted item.</p>
`,type:"boolean",default:"false"},{name:"novalidity",description:`<p>When this attribute or property is set to <code>true</code>, the component goes into neither invalid nor valid state.</p>
`,type:"boolean",default:"false"}],properties:[{name:"touched",attribute:"touched",description:`<p>Whether the user interacted to the slotted item.</p>
`,type:"boolean",default:"false"},{name:"noValidity",attribute:"novalidity",description:`<p>When this attribute or property is set to <code>true</code>, the component goes into neither invalid nor valid state.</p>
`,type:"boolean",default:"false"}],slots:[{name:"",description:`<p><code>&lt;select&gt;</code>.</p>
`}]},{name:"turtle-snackbar-action",attributes:[{name:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],properties:[{name:"disabled",attribute:"disabled",description:`<p>Whether the element itself is disabled or not.</p>
<p>When the <code>lightDOM</code> property is <code>true</code>, this property does not affect to anything.
Specify <code>disabled</code> or <code>aria-disabled</code> attribute for the slotted element (e.g. <code>&lt;button disabled/&gt;</code>, <code>&lt;a aria-disabled=&quot;true&quot;/&gt;</code>).</p>
`,type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:`<p>Whether to use a slotted element as a button element.
You need to provide an Element to slot, instead of a TextFragment.</p>
`,type:"boolean",default:"false"}],slots:[{name:"",description:`<p>Button-like element if <code>lightdom</code> is set to <code>true</code>, otherwise <code>TextFragment</code>.</p>
`}]},{name:"turtle-snackbar",description:`<p>Snackbar component, which delivers an uninterreputible message.</p>
`,attributes:[{name:"severity",description:`<p>Severity of the message.</p>
`,type:'"info" | "success" | "warning" | "danger"',default:'"info"'},{name:"lifetime",description:`<p>Countdown duration in seconds. When not present, neither countdown nor event dispatching starts.</p>
`,type:"number | undefined"},{name:"lifetime-label",description:`<p>Label text for the countdown graphic. Recommended when you set <code>lifetime</code> attribute.</p>
`,type:"string | undefined"},{name:"autofocus",description:`<p>Whether to recieve a focus when the element appears in the DOM tree.
Same to native <code>autofocus</code> attribute.</p>
`,type:"boolean",default:"false"}],properties:[{name:"severity",attribute:"severity",description:`<p>Severity of the message.</p>
`,type:'"info" | "success" | "warning" | "danger"',default:'"info"'},{name:"lifetime",attribute:"lifetime",description:`<p>Countdown duration in seconds. When not present, neither countdown nor event dispatching starts.</p>
`,type:"number | undefined"},{name:"lifetimeLabel",attribute:"lifetime-label",description:`<p>Label text for the countdown graphic. Recommended when you set <code>lifetime</code> attribute.</p>
`,type:"string | undefined"},{name:"autofocus",attribute:"autofocus",description:`<p>Whether to recieve a focus when the element appears in the DOM tree.
Same to native <code>autofocus</code> attribute.</p>
`,type:"boolean",default:"false"}],events:[{name:"timerend",description:`<p>Countdown ended.</p>
`}]},{name:"turtle-toggle-switch",description:`<p>Toggle Switch UI for representing an on/off value.</p>
<p><strong>NOTE:</strong> Due to browsers fire neither <code>blur</code> nor <code>change/input</code> event on unchecked radio (probably the spec defined), you can&#39;t place <code>&lt;input type=&quot;radio&quot;&gt;</code>.</p>
`,properties:[],slots:[{name:"",description:`<p><code>&lt;input type=&quot;checkbox&quot; /&gt;</code>.</p>
`}]}];var o={version:e,tags:t};export{o as default,t as tags,e as version};
