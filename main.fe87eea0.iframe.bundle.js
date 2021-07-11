(self.webpackChunk_turtle_ui_webcomponents=self.webpackChunk_turtle_ui_webcomponents||[]).push([[179],{50046:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(48366).configure)([__webpack_require__(49373)],module,!1)},26025:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});var client_api=__webpack_require__(52141),types=__webpack_require__(74789),esm=__webpack_require__(61739),client=__webpack_require__(48366),turtle_buttonspec=__webpack_require__(13675);const spec=[__webpack_require__.n(turtle_buttonspec)()].reduce(((a,b)=>({...a,...b,tags:[...a.tags,...b.tags]})),{tags:[]});(0,client.setCustomElements)(spec);const parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"render":return(0,types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},52167:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(48366)},97555:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>turtle_button_stories});var lit_html=__webpack_require__(56643),lit=__webpack_require__(59987),minireset_css_lit=__webpack_require__(26345);class TurtleButton extends lit.oi{static get styles(){return[minireset_css_lit.N,lit.iv`
        :host {
          --base-font-size: var(--turtle-ui--base-font-size, 1rem);
          --border-color: var(--turtle-ui--color--border, #ccc);
          --bg: var(--turtle-ui--color--bg, #fff);
          --fg: var(--turtle-ui--color--fg, #000);

          font-size: var(--base-font-size);
        }

        .button {
          font-size: 1em;
          line-height: 1.5;
          border: 1px solid var(--border-color);

          background-color: var(--bg);
          border-radius: 8px;
          color: var(--fg);
          cursor: pointer;
          font-weight: bold;
          padding: calc(var(--base-font-size) / 2);
          text-align: center;
        }
      `]}render(){return lit.dy` <button class="button"><slot></slot></button> `}}customElements.get("turtle-button")||customElements.define("turtle-button",TurtleButton);const turtle_button_stories={title:"Components/turtle-button",component:"turtle-button"},Default=(()=>lit_html.dy`<turtle-button>Button</turtle-button>`).bind({})},13675:module=>{module.exports={version:"experimental",tags:[{name:"turtle-button",description:"A basic button element.",properties:[{name:"styles",type:"object"},{name:"override"}]}]}},49373:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./turtle-button.stories.ts":97555};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=49373},38091:()=>{},83168:()=>{}},__webpack_require__=>{"use strict";var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[282],(()=>(__webpack_exec__(97067),__webpack_exec__(4006),__webpack_exec__(52167),__webpack_exec__(98819),__webpack_exec__(62482),__webpack_exec__(20786),__webpack_exec__(4232),__webpack_exec__(50984),__webpack_exec__(13155),__webpack_exec__(71129),__webpack_exec__(68789),__webpack_exec__(7062),__webpack_exec__(26025),__webpack_exec__(50046))));__webpack_require__.O()}]);
//# sourceMappingURL=main.fe87eea0.iframe.bundle.js.map