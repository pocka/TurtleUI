(self.webpackChunk_turtle_ui_webcomponents=self.webpackChunk_turtle_ui_webcomponents||[]).push([[179],{50046:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(48366).configure)([__webpack_require__(49373)],module,!1)},26025:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{decorators:()=>decorators,parameters:()=>parameters});var client_api=__webpack_require__(52141),types=__webpack_require__(74789),esm=__webpack_require__(61739),create=__webpack_require__(94352),client=__webpack_require__(48366),lit_html=__webpack_require__(56643),style_map=__webpack_require__(19295),turtle_buttonspec=(__webpack_require__(58242),__webpack_require__(13675)),turtle_buttonspec_default=__webpack_require__.n(turtle_buttonspec),turtle_design_systemspec=__webpack_require__(28810),turtle_design_systemspec_default=__webpack_require__.n(turtle_design_systemspec);const spec=[turtle_buttonspec_default(),turtle_design_systemspec_default()].reduce(((a,b)=>({...a,...b,tags:[...a.tags,...b.tags]})),{tags:[]});(0,client.setCustomElements)(spec);const parameters={actions:{argTypesRegex:"^on[A-Z].*"},darkMode:{dark:{...create.n.dark},light:{...create.n.light}}},decorators=[(story,{parameters})=>lit_html.dy`<turtle-design-system
      style=${(0,style_map.V)({position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"auto",padding:"fullscreen"===parameters.layout?"0":"1em",boxSizing:"border-box"})}
      >${story()}</turtle-design-system
    >`];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"render":return(0,types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},52167:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(48366)},97555:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>turtle_button_stories});var lit_html=__webpack_require__(56643),esm=__webpack_require__(43066),lit=__webpack_require__(59987),minireset_css_lit=__webpack_require__(26345);class TurtleButton extends lit.oi{static get styles(){return[minireset_css_lit.N,lit.iv`
        :host {
          --base-font-size: var(--turtle-ui--base-font-size, 1rem);

          font-size: var(--base-font-size);
        }

        .button {
          appearance: none;
          font-size: 1em;
          line-height: 1.5;
          border: 1px solid var(--turtle-ui--color--border);
          padding: calc(var(--base-font-size) / 2)
            calc(var(--base-font-size) * 0.75);

          background-color: var(--turtle-ui--color--background);
          border-radius: 8px;
          color: var(--turtle-ui--color--text);
          cursor: pointer;
          font-weight: bold;
          text-align: center;
        }
        .button:hover {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow) inset;
          border-color: var(--turtle-ui--color--highlight);
          outline: none;
        }
      `]}render(){return lit.dy` <button class="button"><slot></slot></button> `}}customElements.get("turtle-button")||customElements.define("turtle-button",TurtleButton);const turtle_button_stories={title:"Components/turtle-button",component:"turtle-button",parameters:{design:(0,esm.vc)({type:"figma",url:"https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=6%3A7"})}},Default=(()=>lit_html.dy`<turtle-button>Button</turtle-button>`).bind({})},22455:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56643),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(43066);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/turtle-design-system",component:__webpack_require__(58242).D,parameters:{design:(0,storybook_addon_designs__WEBPACK_IMPORTED_MODULE_1__.vc)({type:"figma",url:"https://www.figma.com/file/nTH9nNqobGQzWqmDDE5H5r/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=19%3A698"})},argTypes:{theme:{control:{type:"radio",options:["light","dark"]}}}},Default=({theme})=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`<turtle-design-system theme=${theme}>
    <p>Hello, World!</p>
  </turtle-design-system>`},58242:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>TAG_NAME});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59987),lit_decorators_property__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74473),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};const TAG_NAME="turtle-design-system";class TurtleDesignSystem extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static get styles(){return lit__WEBPACK_IMPORTED_MODULE_0__.iv`
      :host {
        --turtle-ui--base-font-size: 1rem;

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
        --turtle-ui--color--level--primary: 40%;
        --turtle-ui--level--modifier--darker: -1;
        --turtle-ui--level--modifier--lighter: 1;
        --turtle-ui--level--modifier--amount: 16%;

        --turtle-ui--color--tone--mono: 0, 0%;
        --turtle-ui--color--tone--safe: 123, 46%;
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
        --turtle-ui--color--highlight: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary)
        );
        --turtle-ui--color--highlight--shadow: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary),
          0.32
        );
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

        background-color: var(--turtle-ui--color--background);
        color: var(--turtle-ui--color--text);
      }
    `}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.dy`<slot></slot>`}}__decorate([(0,lit_decorators_property__WEBPACK_IMPORTED_MODULE_1__.C)({type:String,reflect:!0})],TurtleDesignSystem.prototype,"theme",void 0),customElements.get(TAG_NAME)||customElements.define(TAG_NAME,TurtleDesignSystem)},13675:module=>{module.exports={version:"experimental",tags:[{name:"turtle-button",description:"A basic button element.",properties:[{name:"styles",type:"object"},{name:"override"}]}]}},28810:module=>{module.exports={version:"experimental",tags:[{name:"turtle-design-system",description:"Design System wrapper\n\nThis component provides CSS custom properties and set basic styles to itself.",attributes:[{name:"theme",description:"Explicitly set the color theme.",type:'"light" | "dark" | undefined'}],properties:[{name:"theme",attribute:"theme",description:"Explicitly set the color theme.",type:'"light" | "dark" | undefined'},{name:"styles"},{name:"override"}]}]}},49373:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./turtle-button.stories.ts":97555,"./turtle-design-system.stories.ts":22455};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=49373},88043:()=>{},38091:()=>{},83168:()=>{}},__webpack_require__=>{"use strict";var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[819],(()=>(__webpack_exec__(97067),__webpack_exec__(4006),__webpack_exec__(52167),__webpack_exec__(71010),__webpack_exec__(62482),__webpack_exec__(92587),__webpack_exec__(34620),__webpack_exec__(20786),__webpack_exec__(4232),__webpack_exec__(50984),__webpack_exec__(13155),__webpack_exec__(71129),__webpack_exec__(68789),__webpack_exec__(7062),__webpack_exec__(26025),__webpack_exec__(50046))));__webpack_require__.O()}]);
//# sourceMappingURL=main.8736a72f.iframe.bundle.js.map