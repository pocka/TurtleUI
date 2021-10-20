(self.webpackChunk_turtle_ui_webcomponents=self.webpackChunk_turtle_ui_webcomponents||[]).push([[179],{"./.storybook/fonts/Ubuntu/Ubuntu-Bold.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Ubuntu-Bold.50114233.ttf"},"./.storybook/fonts/Ubuntu/Ubuntu-BoldItalic.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Ubuntu-BoldItalic.dac91249.ttf"},"./.storybook/fonts/Ubuntu/Ubuntu-Italic.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Ubuntu-Italic.682cce13.ttf"},"./.storybook/fonts/Ubuntu/Ubuntu-Light.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Ubuntu-Light.c2bf1bb6.ttf"},"./.storybook/fonts/Ubuntu/Ubuntu-LightItalic.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Ubuntu-LightItalic.76a3c21f.ttf"},"./.storybook/fonts/Ubuntu/Ubuntu-Medium.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Ubuntu-Medium.90c045b7.ttf"},"./.storybook/fonts/Ubuntu/Ubuntu-MediumItalic.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Ubuntu-MediumItalic.09227169.ttf"},"./.storybook/fonts/Ubuntu/Ubuntu-Regular.ttf":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Ubuntu-Regular.fbdecfce.ttf"},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{decorators:()=>decorators,parameters:()=>parameters});var ClientApi=__webpack_require__("./.yarn/$$virtual/@storybook-client-api-virtual-7211256db5/0/cache/@storybook-client-api-npm-6.4.0-beta.12-7ad8364f81-c80c3406ac.zip/node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./.yarn/cache/@storybook-client-logger-npm-6.4.0-beta.12-069ce7483f-2e2c518d29.zip/node_modules/@storybook/client-logger/dist/esm/index.js"),create=__webpack_require__("./.yarn/$$virtual/@storybook-theming-virtual-e1072bb8dc/0/cache/@storybook-theming-npm-6.4.0-beta.12-5661fc26f4-c16f6b839b.zip/node_modules/@storybook/theming/dist/esm/create.js"),client=__webpack_require__("./.yarn/$$virtual/@storybook-web-components-virtual-a8ef83f076/0/cache/@storybook-web-components-npm-6.4.0-beta.12-14cc5f3c29-0d58a1108e.zip/node_modules/@storybook/web-components/dist/esm/client/index.js"),lit_html=__webpack_require__("./.yarn/cache/lit-html-npm-1.4.1-4c175266aa-cf3dea0afa.zip/node_modules/lit-html/lit-html.js"),style_map=__webpack_require__("./.yarn/cache/lit-html-npm-1.4.1-4c175266aa-cf3dea0afa.zip/node_modules/lit-html/directives/style-map.js"),injectStylesIntoStyleTag=__webpack_require__("./.yarn/$$virtual/style-loader-virtual-16f026ffab/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-ffc3054882.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),global=__webpack_require__("./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[11].use[1]!./.storybook/global.css"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(global.Z,options);global.Z.locals;var fonts=__webpack_require__("./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[11].use[1]!./.storybook/fonts/fonts.css"),fonts_options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(fonts.Z,fonts_options);fonts.Z.locals;var turtle_button=__webpack_require__("./src/turtle-button.ts"),turtle_card=__webpack_require__("./src/turtle-card.ts"),turtle_design_system=__webpack_require__("./src/turtle-design-system.ts");const allComponents=[turtle_button.C,turtle_card.C,turtle_design_system.P];var turtle_buttonspec=__webpack_require__("./src/turtle-button.ts?spec"),turtle_buttonspec_default=__webpack_require__.n(turtle_buttonspec),turtle_cardspec=__webpack_require__("./src/turtle-card.ts?spec"),turtle_cardspec_default=__webpack_require__.n(turtle_cardspec),turtle_design_systemspec=__webpack_require__("./src/turtle-design-system.ts?spec"),turtle_design_systemspec_default=__webpack_require__.n(turtle_design_systemspec);!function registerTurtleUIComponents(components){for(const c of components){const[tagName,elementConstructor]="defaultTagName"in c?[c.defaultTagName,c]:c;customElements.get(tagName)||customElements.define(tagName,elementConstructor)}}(allComponents);const spec=[turtle_buttonspec_default(),turtle_cardspec_default(),turtle_design_systemspec_default()].reduce(((a,b)=>({...a,...b,tags:[...a.tags,...b.tags]})),{tags:[]});(0,client.setCustomElements)(spec);const parameters={actions:{argTypesRegex:"^on[A-Z].*"},darkMode:{dark:{...create.n.dark},light:{...create.n.light}}},decorators=[(story,{parameters})=>lit_html.dy`<turtle-design-system
      style=${(0,style_map.V)({"--turtle-ui--unit":"1rem",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"auto",padding:"fullscreen"===parameters.layout?"0":"1em",boxSizing:"border-box"})}
      >${story()}</turtle-design-system
    >`];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},"./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[11].use[1]!./.storybook/fonts/fonts.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/api.js"),_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/getUrl.js"),_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),_Ubuntu_Ubuntu_Light_ttf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/fonts/Ubuntu/Ubuntu-Light.ttf"),_Ubuntu_Ubuntu_LightItalic_ttf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/fonts/Ubuntu/Ubuntu-LightItalic.ttf"),_Ubuntu_Ubuntu_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/fonts/Ubuntu/Ubuntu-Regular.ttf"),_Ubuntu_Ubuntu_Italic_ttf__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./.storybook/fonts/Ubuntu/Ubuntu-Italic.ttf"),_Ubuntu_Ubuntu_Medium_ttf__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./.storybook/fonts/Ubuntu/Ubuntu-Medium.ttf"),_Ubuntu_Ubuntu_MediumItalic_ttf__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./.storybook/fonts/Ubuntu/Ubuntu-MediumItalic.ttf"),_Ubuntu_Ubuntu_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./.storybook/fonts/Ubuntu/Ubuntu-Bold.ttf"),_Ubuntu_Ubuntu_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./.storybook/fonts/Ubuntu/Ubuntu-BoldItalic.ttf"),___CSS_LOADER_EXPORT___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Ubuntu_Ubuntu_Light_ttf__WEBPACK_IMPORTED_MODULE_3__),___CSS_LOADER_URL_REPLACEMENT_1___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Ubuntu_Ubuntu_LightItalic_ttf__WEBPACK_IMPORTED_MODULE_4__),___CSS_LOADER_URL_REPLACEMENT_2___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Ubuntu_Ubuntu_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__),___CSS_LOADER_URL_REPLACEMENT_3___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Ubuntu_Ubuntu_Italic_ttf__WEBPACK_IMPORTED_MODULE_6__),___CSS_LOADER_URL_REPLACEMENT_4___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Ubuntu_Ubuntu_Medium_ttf__WEBPACK_IMPORTED_MODULE_7__),___CSS_LOADER_URL_REPLACEMENT_5___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Ubuntu_Ubuntu_MediumItalic_ttf__WEBPACK_IMPORTED_MODULE_8__),___CSS_LOADER_URL_REPLACEMENT_6___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Ubuntu_Ubuntu_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__),___CSS_LOADER_URL_REPLACEMENT_7___=_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Ubuntu_Ubuntu_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_10__);___CSS_LOADER_EXPORT___.push([module.id,'@font-face {\n  font-family: "Ubuntu";\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_0___+');\n  font-weight: 300;\n}\n@font-face {\n  font-family: "Ubuntu";\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_1___+');\n  font-weight: 300;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: "Ubuntu";\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_2___+');\n  font-weight: 400;\n}\n@font-face {\n  font-family: "Ubuntu";\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_3___+');\n  font-weight: 400;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: "Ubuntu";\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_4___+');\n  font-weight: 500 600;\n}\n@font-face {\n  font-family: "Ubuntu";\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_5___+');\n  font-weight: 500 600;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: "Ubuntu";\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_6___+');\n  font-weight: 700;\n}\n@font-face {\n  font-family: "Ubuntu";\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_7___+");\n  font-weight: 700;\n  font-style: italic;\n}\n","",{version:3,sources:["webpack://./.storybook/fonts/fonts.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,4CAAqC;EACrC,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,4CAA2C;EAC3C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,4CAAuC;EACvC,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,4CAAsC;EACtC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,4CAAsC;EACtC,oBAAoB;AACtB;AACA;EACE,qBAAqB;EACrB,4CAA4C;EAC5C,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,4CAAoC;EACpC,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,4CAA0C;EAC1C,gBAAgB;EAChB,kBAAkB;AACpB",sourcesContent:['@font-face {\n  font-family: "Ubuntu";\n  src: url("./Ubuntu/Ubuntu-Light.ttf");\n  font-weight: 300;\n}\n@font-face {\n  font-family: "Ubuntu";\n  src: url("./Ubuntu/Ubuntu-LightItalic.ttf");\n  font-weight: 300;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: "Ubuntu";\n  src: url("./Ubuntu/Ubuntu-Regular.ttf");\n  font-weight: 400;\n}\n@font-face {\n  font-family: "Ubuntu";\n  src: url("./Ubuntu/Ubuntu-Italic.ttf");\n  font-weight: 400;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: "Ubuntu";\n  src: url("./Ubuntu/Ubuntu-Medium.ttf");\n  font-weight: 500 600;\n}\n@font-face {\n  font-family: "Ubuntu";\n  src: url("./Ubuntu/Ubuntu-MediumItalic.ttf");\n  font-weight: 500 600;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: "Ubuntu";\n  src: url("./Ubuntu/Ubuntu-Bold.ttf");\n  font-weight: 700;\n}\n@font-face {\n  font-family: "Ubuntu";\n  src: url("./Ubuntu/Ubuntu-BoldItalic.ttf");\n  font-weight: 700;\n  font-style: italic;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[11].use[1]!./.storybook/global.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.yarn/$$virtual/css-loader-virtual-de1b7641e5/0/cache/css-loader-npm-5.2.6-118c6d409e-b9e5a32246.zip/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_yarn_$$virtual_css_loader_virtual_de1b7641e5_0_cache_css_loader_npm_5_2_6_118c6d409e_b9e5a32246_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"html {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n","",{version:3,sources:["webpack://./.storybook/global.css"],names:[],mappings:"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB",sourcesContent:["html {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./.storybook/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function disableControls(argNames,disableCommonArgs=!0){return{...Object.fromEntries(argNames.map((name=>[name,{control:{disable:!0}}]))),...disableCommonArgs?{override:{table:{disable:!0}},styles:{table:{disable:!0}},defaultTagName:{table:{disable:!0}}}:{}}}__webpack_require__.d(__webpack_exports__,{W:()=>disableControls})},"./src/turtle-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,Primary:()=>Primary,Danger:()=>Danger,Disabled:()=>Disabled,FullWidth:()=>FullWidth,LightDOM:()=>LightDOM});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/cache/lit-html-npm-1.4.1-4c175266aa-cf3dea0afa.zip/node_modules/lit-html/lit-html.js"),lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.yarn/cache/lit-html-npm-1.4.1-4c175266aa-cf3dea0afa.zip/node_modules/lit-html/directives/style-map.js"),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.yarn/cache/storybook-addon-designs-npm-6.0.1-1422296819-13df028364.zip/node_modules/storybook-addon-designs/esm/index.js"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/helpers.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/turtle-button",component:__webpack_require__("./src/turtle-button.ts").C.defaultTagName,parameters:{design:(0,storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.vc)({type:"figma",url:"https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=6%3A7"})},args:{variant:"normal",disabled:!1,syncAttributes:!0},argTypes:{variant:{options:["normal","danger","primary"],control:{type:"radio"}},...(0,_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__.W)(["lightDOM","lightdom","sync-attributes"])}},Template=({disabled,syncAttributes,variant})=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`<turtle-button
    variant=${variant}
    .syncAttributes=${syncAttributes}
    ?disabled=${disabled}
    >Button</turtle-button
  >`,Default=Template.bind({}),Primary=Template.bind({});Primary.args={variant:"primary"};const Danger=Template.bind({});Danger.args={variant:"danger"};const Disabled=Template.bind({});Disabled.args={disabled:!0};const FullWidth=({variant})=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`<turtle-button
    variant=${variant}
    style=${(0,lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__.V)({display:"block",width:"100%"})}
    >Button</turtle-button
  >`,LightDOM=({variant,disabled,syncAttributes})=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <div>
      <turtle-button
        lightdom
        variant=${variant}
        ?disabled=${disabled}
        .syncAttributes=${syncAttributes}
      >
        <button>Button</button>
      </turtle-button>
      <turtle-button
        lightdom
        variant=${variant}
        ?disabled=${disabled}
        .syncAttributes=${syncAttributes}
      >
        <a href="#">Anchor</a>
      </turtle-button>
    </div>
  `},"./src/turtle-button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>TurtleButton});var _TurtleButton_instances,_TurtleButton_syncDisabledAttributeToLightDOM,_TurtleButton_abortClickOnDisabledState,lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/cache/lit-npm-2.0.0-rc.2-bd8fdee0c9-4adc81ee88.zip/node_modules/lit/index.js"),lit_decorators_property__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.yarn/cache/@lit-reactive-element-npm-1.0.0-rc.2-bb65b71e5a-89f9c91234.zip/node_modules/@lit/reactive-element/decorators/property.js"),minireset_css_minireset_css_lit_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.yarn/cache/minireset.css-npm-0.0.7-4fcb543606-bf63cc2b8e.zip/node_modules/minireset.css/minireset.css.lit.js"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__classPrivateFieldGet=function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};class TurtleButton extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{constructor(){super(...arguments),_TurtleButton_instances.add(this),this.variant="normal",this.disabled=!1,this.lightDOM=!1,this.syncAttributes=!0}static get styles(){return[minireset_css_minireset_css_lit_js__WEBPACK_IMPORTED_MODULE_1__.N,lit__WEBPACK_IMPORTED_MODULE_0__.iv`
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
        ::slotted(*) {
          appearance: none;
          display: block;
          width: inherit;
          font: inherit;
          font-size: 1em;
          line-height: 1.5;
          border: 1px solid var(--turtle-ui--button--border-color);
          padding: calc(var(--base-font-size) / 2)
            calc(var(--base-font-size) * 0.75);

          background-color: var(--turtle-ui--button--bg);
          border-radius: 8px;
          color: var(--turtle-ui--button--fg);
          cursor: pointer;
          font-weight: bold;
          text-align: center;
          text-decoration: inherit;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: var(--turtle-ui--button--bg--hover);
        }
        .button:active,
        ::slotted(:active) {
          background-color: var(--turtle-ui--button--bg--active);
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--button--highlight-shadow-color)
            inset;
          border-color: var(--turtle-ui--button--highlight-color);
          outline: none;
        }
        .button:disabled,
        ::slotted(:disabled),
        ::slotted([aria-disabled="true"]) {
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
      `]}render(){return this.lightDOM?lit__WEBPACK_IMPORTED_MODULE_0__.dy`<slot id="lightdom"></slot>`:lit__WEBPACK_IMPORTED_MODULE_0__.dy`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}updated(changedProperties){this.shadowRoot&&this.lightDOM&&this.syncAttributes&&changedProperties.has("disabled")&&__classPrivateFieldGet(this,_TurtleButton_instances,"m",_TurtleButton_syncDisabledAttributeToLightDOM).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",__classPrivateFieldGet(this,_TurtleButton_instances,"m",_TurtleButton_abortClickOnDisabledState),{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",__classPrivateFieldGet(this,_TurtleButton_instances,"m",_TurtleButton_abortClickOnDisabledState),{capture:!0})}}_TurtleButton_instances=new WeakSet,_TurtleButton_syncDisabledAttributeToLightDOM=function _TurtleButton_syncDisabledAttributeToLightDOM(){const slot=this.shadowRoot.getElementById("lightdom");if(!slot)return;const elements=slot.assignedElements();for(const el of elements)"disabled"in el?this.disabled?el.setAttribute("disabled",""):el.removeAttribute("disabled"):el.setAttribute("aria-disabled",String(this.disabled))},_TurtleButton_abortClickOnDisabledState=function _TurtleButton_abortClickOnDisabledState(ev){this.lightDOM&&this.disabled&&(ev.preventDefault(),ev.stopPropagation())},TurtleButton.defaultTagName="turtle-button",__decorate([(0,lit_decorators_property__WEBPACK_IMPORTED_MODULE_2__.C)({type:String})],TurtleButton.prototype,"variant",void 0),__decorate([(0,lit_decorators_property__WEBPACK_IMPORTED_MODULE_2__.C)({type:Boolean,reflect:!0})],TurtleButton.prototype,"disabled",void 0),__decorate([(0,lit_decorators_property__WEBPACK_IMPORTED_MODULE_2__.C)({type:Boolean,attribute:"lightdom"})],TurtleButton.prototype,"lightDOM",void 0),__decorate([(0,lit_decorators_property__WEBPACK_IMPORTED_MODULE_2__.C)({converter:{fromAttribute:value=>"true"===value,toAttribute:value=>String(value)},attribute:"sync-attributes"})],TurtleButton.prototype,"syncAttributes",void 0)},"./src/turtle-card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,Shadowed:()=>Shadowed,Bordered:()=>Bordered,WithTitle:()=>WithTitle});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/cache/lit-html-npm-1.4.1-4c175266aa-cf3dea0afa.zip/node_modules/lit-html/lit-html.js"),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.yarn/cache/storybook-addon-designs-npm-6.0.1-1422296819-13df028364.zip/node_modules/storybook-addon-designs/esm/index.js"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/helpers.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/turtle-card",component:__webpack_require__("./src/turtle-card.ts").C.defaultTagName,parameters:{design:(0,storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.vc)({type:"figma",url:"https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=42%3A2083"})},args:{shadowed:!1,bordered:!1},argTypes:{...(0,_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W)([])}},Template=({shadowed,bordered})=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
    <turtle-card ?shadowed=${shadowed} ?bordered=${bordered}>
      I'm a card text.
    </turtle-card>
  `,Default=Template.bind({}),Shadowed=Template.bind({});Shadowed.args={shadowed:!0};const Bordered=Template.bind({});Bordered.args={bordered:!0};const WithTitle=({shadowed,bordered})=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
  <turtle-card
    ?shadowed=${shadowed}
    ?bordered=${bordered}
    aria-labelledby="title"
  >
    <span id="title" slot="title">Title</span>

    Body text
  </turtle-card>
`;WithTitle.args={bordered:!0}},"./src/turtle-card.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>TurtleCard});var _SlotSensorController_updateSlotted,lit=__webpack_require__("./.yarn/cache/lit-npm-2.0.0-rc.2-bd8fdee0c9-4adc81ee88.zip/node_modules/lit/index.js"),property=__webpack_require__("./.yarn/cache/@lit-reactive-element-npm-1.0.0-rc.2-bb65b71e5a-89f9c91234.zip/node_modules/@lit/reactive-element/decorators/property.js"),minireset_css_lit=__webpack_require__("./.yarn/cache/minireset.css-npm-0.0.7-4fcb543606-bf63cc2b8e.zip/node_modules/minireset.css/minireset.css.lit.js"),__classPrivateFieldGet=function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};class SlotSensorController{constructor(host,slotName=""){this.assigned=!1,_SlotSensorController_updateSlotted.set(this,(()=>{if(!this.host.shadowRoot)return;const query=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",slot=this.host.shadowRoot.querySelector(query);this.assigned=!!slot&&slot.assignedNodes().length>0,this.host.requestUpdate()})),host.addController(this),this.host=host,this.slotName=slotName}hostConnected(){this.host.shadowRoot&&this.host.shadowRoot.addEventListener("slotchange",__classPrivateFieldGet(this,_SlotSensorController_updateSlotted,"f"))}hostDisconnected(){var _a;null===(_a=this.host.shadowRoot)||void 0===_a||_a.removeEventListener("slotchange",__classPrivateFieldGet(this,_SlotSensorController_updateSlotted,"f"))}}_SlotSensorController_updateSlotted=new WeakMap;var _TurtleCard_actionsSensor,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},turtle_card_classPrivateFieldGet=function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};class TurtleCard extends lit.oi{constructor(){super(...arguments),_TurtleCard_actionsSensor.set(this,new SlotSensorController(this,"action")),this.shadowed=!1,this.bordered=!1}static get styles(){return[minireset_css_lit.N,lit.iv`
        :host {
          display: block;
          border-radius: 8px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
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
      `]}render(){return lit.dy`
      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${turtle_card_classPrivateFieldGet(this,_TurtleCard_actionsSensor,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}_TurtleCard_actionsSensor=new WeakMap,TurtleCard.defaultTagName="turtle-card",__decorate([(0,property.C)({type:Boolean,attribute:"shadowed",reflect:!0})],TurtleCard.prototype,"shadowed",void 0),__decorate([(0,property.C)({type:Boolean,attribute:"bordered",reflect:!0})],TurtleCard.prototype,"bordered",void 0)},"./src/turtle-design-system.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/cache/lit-html-npm-1.4.1-4c175266aa-cf3dea0afa.zip/node_modules/lit-html/lit-html.js"),lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.yarn/cache/lit-html-npm-1.4.1-4c175266aa-cf3dea0afa.zip/node_modules/lit-html/directives/if-defined.js"),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.yarn/cache/storybook-addon-designs-npm-6.0.1-1422296819-13df028364.zip/node_modules/storybook-addon-designs/esm/index.js"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/helpers.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/turtle-design-system",component:__webpack_require__("./src/turtle-design-system.ts").P.defaultTagName,parameters:{design:(0,storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.vc)({type:"figma",url:"https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=19%3A698"})},argTypes:{theme:{control:{type:"radio",options:["light","dark"]}},...(0,_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__.W)([])}},Default=({theme})=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`<turtle-design-system theme=${(0,lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__.o)(theme)}>
    <p>Hello, World!</p>
  </turtle-design-system>`},"./src/turtle-design-system.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>TurtleDesignSystem});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/cache/lit-npm-2.0.0-rc.2-bd8fdee0c9-4adc81ee88.zip/node_modules/lit/index.js"),lit_decorators_property__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.yarn/cache/@lit-reactive-element-npm-1.0.0-rc.2-bb65b71e5a-89f9c91234.zip/node_modules/@lit/reactive-element/decorators/property.js"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class TurtleDesignSystem extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static get styles(){return lit__WEBPACK_IMPORTED_MODULE_0__.iv`
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
    `}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.dy`<slot></slot>`}}TurtleDesignSystem.defaultTagName="turtle-design-system",__decorate([(0,lit_decorators_property__WEBPACK_IMPORTED_MODULE_1__.C)({type:String,reflect:!0})],TurtleDesignSystem.prototype,"theme",void 0)},"./src/turtle-button.ts?spec":module=>{module.exports={version:"experimental",tags:[{name:"defaultTagName",description:"A basic button element.",attributes:[{name:"variant",description:'Color variant\n\nUnsupported value will be treated as `"normal"`.',type:'"normal" | "danger" | "primary"',default:'"normal"'},{name:"disabled",type:"boolean",default:"false"},{name:"lightdom",description:'Whether to use a slotted element as a button element.\nYou need to provide an Element to slot, instead of a TextFragment.\n\nWhen `sync-attributes` attribute is set to `true` (default) or `syncAttributes` property is set to `true`,\n<turtle-button> sets slotted elements\' `disabled` or `aria-disabled` attribute to sync to\nthe value of the `disabled` attribute in <turtle-button>. If you set `disabled` or `aria-disabled`\nattribute for the slotted elements, set `sync-attributes="false"`.',type:"boolean",default:"false"},{name:"sync-attributes",description:"Whether to manipulate slotted elements' attributes based on <turtle-button>'s ones.\nAffects only when lightDOM is set to `true`.\n\nYou need to manually set attributes based on component state.",type:"boolean",default:"true"}],properties:[{name:"defaultTagName",type:'"turtle-button"',default:'"turtle-button"'},{name:"variant",attribute:"variant",description:'Color variant\n\nUnsupported value will be treated as `"normal"`.',type:'"normal" | "danger" | "primary"',default:'"normal"'},{name:"disabled",attribute:"disabled",type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:'Whether to use a slotted element as a button element.\nYou need to provide an Element to slot, instead of a TextFragment.\n\nWhen `sync-attributes` attribute is set to `true` (default) or `syncAttributes` property is set to `true`,\n<turtle-button> sets slotted elements\' `disabled` or `aria-disabled` attribute to sync to\nthe value of the `disabled` attribute in <turtle-button>. If you set `disabled` or `aria-disabled`\nattribute for the slotted elements, set `sync-attributes="false"`.',type:"boolean",default:"false"},{name:"syncAttributes",attribute:"sync-attributes",description:"Whether to manipulate slotted elements' attributes based on <turtle-button>'s ones.\nAffects only when lightDOM is set to `true`.\n\nYou need to manually set attributes based on component state.",type:"boolean",default:"true"},{name:"styles",type:"object"},{name:"override"}]},{name:"turtle-button",description:"A basic button element.",attributes:[{name:"variant",description:'Color variant\n\nUnsupported value will be treated as `"normal"`.',type:'"normal" | "danger" | "primary"',default:'"normal"'},{name:"disabled",type:"boolean",default:"false"},{name:"lightdom",description:'Whether to use a slotted element as a button element.\nYou need to provide an Element to slot, instead of a TextFragment.\n\nWhen `sync-attributes` attribute is set to `true` (default) or `syncAttributes` property is set to `true`,\n<turtle-button> sets slotted elements\' `disabled` or `aria-disabled` attribute to sync to\nthe value of the `disabled` attribute in <turtle-button>. If you set `disabled` or `aria-disabled`\nattribute for the slotted elements, set `sync-attributes="false"`.',type:"boolean",default:"false"},{name:"sync-attributes",description:"Whether to manipulate slotted elements' attributes based on <turtle-button>'s ones.\nAffects only when lightDOM is set to `true`.\n\nYou need to manually set attributes based on component state.",type:"boolean",default:"true"}],properties:[{name:"defaultTagName",type:'"turtle-button"',default:'"turtle-button"'},{name:"variant",attribute:"variant",description:'Color variant\n\nUnsupported value will be treated as `"normal"`.',type:'"normal" | "danger" | "primary"',default:'"normal"'},{name:"disabled",attribute:"disabled",type:"boolean",default:"false"},{name:"lightDOM",attribute:"lightdom",description:'Whether to use a slotted element as a button element.\nYou need to provide an Element to slot, instead of a TextFragment.\n\nWhen `sync-attributes` attribute is set to `true` (default) or `syncAttributes` property is set to `true`,\n<turtle-button> sets slotted elements\' `disabled` or `aria-disabled` attribute to sync to\nthe value of the `disabled` attribute in <turtle-button>. If you set `disabled` or `aria-disabled`\nattribute for the slotted elements, set `sync-attributes="false"`.',type:"boolean",default:"false"},{name:"syncAttributes",attribute:"sync-attributes",description:"Whether to manipulate slotted elements' attributes based on <turtle-button>'s ones.\nAffects only when lightDOM is set to `true`.\n\nYou need to manually set attributes based on component state.",type:"boolean",default:"true"},{name:"styles",type:"object"},{name:"override"}]}]}},"./src/turtle-card.ts?spec":module=>{module.exports={version:"experimental",tags:[{name:"defaultTagName",attributes:[{name:"shadowed",description:"Whether to display shadow.",type:"boolean",default:"false"},{name:"bordered",description:"Whether to display borders around.",type:"boolean",default:"false"}],properties:[{name:"defaultTagName",type:'"turtle-card"',default:'"turtle-card"'},{name:"shadowed",attribute:"shadowed",description:"Whether to display shadow.",type:"boolean",default:"false"},{name:"bordered",attribute:"bordered",description:"Whether to display borders around.",type:"boolean",default:"false"},{name:"styles",type:"object"},{name:"override"}]},{name:"turtle-card",attributes:[{name:"shadowed",description:"Whether to display shadow.",type:"boolean",default:"false"},{name:"bordered",description:"Whether to display borders around.",type:"boolean",default:"false"}],properties:[{name:"defaultTagName",type:'"turtle-card"',default:'"turtle-card"'},{name:"shadowed",attribute:"shadowed",description:"Whether to display shadow.",type:"boolean",default:"false"},{name:"bordered",attribute:"bordered",description:"Whether to display borders around.",type:"boolean",default:"false"},{name:"styles",type:"object"},{name:"override"}]}]}},"./src/turtle-design-system.ts?spec":module=>{module.exports={version:"experimental",tags:[{name:"defaultTagName",description:"Design System wrapper\n\nThis component provides CSS custom properties and set basic styles to itself.",attributes:[{name:"theme",description:"Explicitly set the color theme.",type:'"light" | "dark" | undefined'}],properties:[{name:"defaultTagName",type:'"turtle-design-system"',default:'"turtle-design-system"'},{name:"theme",attribute:"theme",description:"Explicitly set the color theme.",type:'"light" | "dark" | undefined'},{name:"styles"},{name:"override"}]},{name:"turtle-design-system",description:"Design System wrapper\n\nThis component provides CSS custom properties and set basic styles to itself.",attributes:[{name:"theme",description:"Explicitly set the color theme.",type:'"light" | "dark" | undefined'}],properties:[{name:"defaultTagName",type:'"turtle-design-system"',default:'"turtle-design-system"'},{name:"theme",attribute:"theme",description:"Explicitly set the color theme.",type:'"light" | "dark" | undefined'},{name:"styles"},{name:"override"}]}]}},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./.yarn/$$virtual/@storybook-web-components-virtual-a8ef83f076/0/cache/@storybook-web-components-npm-6.4.0-beta.12-14cc5f3c29-0d58a1108e.zip/node_modules/@storybook/web-components/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts|mdx))$")],module,!1)},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts|mdx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./turtle-button.stories.ts":"./src/turtle-button.stories.ts","./turtle-card.stories.ts":"./src/turtle-card.stories.ts","./turtle-design-system.stories.ts":"./src/turtle-design-system.stories.ts"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts|mdx))$"},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./.yarn/$$virtual/@storybook-web-components-virtual-a8ef83f076/0/cache/@storybook-web-components-npm-6.4.0-beta.12-14cc5f3c29-0d58a1108e.zip/node_modules/@storybook/web-components/dist/esm/client/index.js")},"?be4c":()=>{},"?89cb":()=>{},"?1134":()=>{},"?d5d7":()=>{}},__webpack_require__=>{"use strict";var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[510],(()=>(__webpack_exec__("./.yarn/$$virtual/@storybook-core-client-virtual-97384af910/0/cache/@storybook-core-client-npm-6.4.0-beta.12-d8058f16af-2f366fb7d6.zip/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-core-client-virtual-97384af910/0/cache/@storybook-core-client-npm-6.4.0-beta.12-d8058f16af-2f366fb7d6.zip/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-docs-virtual-326fc09fee/0/cache/@storybook-addon-docs-npm-6.4.0-beta.12-0b658b05ee-59fc538efc.zip/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-docs-virtual-326fc09fee/0/cache/@storybook-addon-docs-npm-6.4.0-beta.12-0b658b05ee-59fc538efc.zip/node_modules/@storybook/addon-docs/dist/esm/frameworks/web-components/config.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-a11y-virtual-462da99c6e/0/cache/@storybook-addon-a11y-npm-6.4.0-beta.12-55f780ba5c-674516e9a8.zip/node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-a11y-virtual-462da99c6e/0/cache/@storybook-addon-a11y-npm-6.4.0-beta.12-55f780ba5c-674516e9a8.zip/node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-links-virtual-329fcd9180/0/cache/@storybook-addon-links-npm-6.4.0-beta.12-758488771b-979dabbee9.zip/node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-actions-virtual-5113f80d92/0/cache/@storybook-addon-actions-npm-6.4.0-beta.12-c6e3532b70-c0837133d9.zip/node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-actions-virtual-5113f80d92/0/cache/@storybook-addon-actions-npm-6.4.0-beta.12-c6e3532b70-c0837133d9.zip/node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-backgrounds-virtual-f7541370d6/0/cache/@storybook-addon-backgrounds-npm-6.4.0-beta.12-544f736a33-f2fd38900b.zip/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-backgrounds-virtual-f7541370d6/0/cache/@storybook-addon-backgrounds-npm-6.4.0-beta.12-544f736a33-f2fd38900b.zip/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-measure-virtual-49a3e095cd/0/cache/@storybook-addon-measure-npm-6.4.0-beta.12-563229e001-bf3ab0d882.zip/node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.yarn/$$virtual/@storybook-addon-outline-virtual-e61340e49f/0/cache/@storybook-addon-outline-npm-6.4.0-beta.12-951560612e-57ec77ef4d.zip/node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);
//# sourceMappingURL=main.d575403a.iframe.bundle.js.map