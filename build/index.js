(window.webpackJsonp_mortgage=window.webpackJsonp_mortgage||[]).push([[2],{16:function(e,t,a){}}]),function(e){function t(t){for(var l,o,c=t[0],u=t[1],i=t[2],m=0,b=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(s&&s(t);b.length;)b.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(l=!1)}l&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var l={},r={1:0},n=[];function o(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=l,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(a,l,function(t){return e[t]}.bind(null,l));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp_mortgage=window.webpackJsonp_mortgage||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var s=u;n.push([23,2]),a()}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t,a){var l;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)&&l.length){var o=r.apply(null,l);o&&e.push(o)}else if("object"===n)for(var c in l)a.call(l,c)&&l[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()},function(e,t){e.exports=window.wp.blocks},function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,a.apply(this,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"mortgage/form","title":"Mortgage","category":"widgets","icon":"calculator","description":"A block to generate a mortgage calculator form.","supports":{"html":true,"reusable":true,"className":true,"color":true},"attributes":{"currency":{"type":"string","default":"$"},"showTable":{"type":"boolean","default":false},"yearSummary":{"type":"boolean","default":false},"type":{"enum":["loan","rates","duration"]}},"styles":[{"name":"regular","label":"Default","isDefault":true},{"name":"bolded","label":"Bolded label"},{"name":"modern","label":"Modern"}],"textdomain":"mortgage","editorScript":"file:./build/index.js","viewScript":"mortgage-block-frontend","style":"file:./build/style-index.css"}')},function(e,t,a){var l=a(17);e.exports=function(e,t){if(null==e)return{};var a,r,n=l(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"mortgage/input","ancestor":["mortgage/form"],"title":"Number input","textdomain":"mortgage","attributes":{"lock":{"type":"object","default":{"move":false,"remove":true}},"type":{"type":"string","source":"attribute","selector":"input","attribute":"type","default":"text"},"id":{"type":"string","source":"attribute","selector":"input","attribute":"id","default":""},"name":{"type":"string","source":"attribute","selector":"input","attribute":"name"},"label":{"type":"string","source":"html","selector":"label","default":"My input"},"placeholder":{"type":"string","source":"attribute","selector":"input","attribute":"placeholder"},"value":{"type":"string","source":"attribute","selector":"input","attribute":"value"},"readOnly":{"type":"boolean","source":"attribute","selector":"input","attribute":"readonly"},"min":{"type":"string","source":"attribute","selector":"input","attribute":"min"},"max":{"type":"string","source":"attribute","selector":"input","attribute":"max"},"step":{"type":"string","source":"attribute","selector":"input","attribute":"step"},"showHelp":{"type":"boolean","default":false},"help":{"type":"string","source":"html","selector":"small"}},"supports":{"multiple":true,"reusable":false,"className":true,"lock":false}}')},function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"mortgage/select","ancestor":["mortgage/form"],"title":"Select","textdomain":"mortgage","attributes":{"lock":{"type":"object","default":{"move":false,"remove":true}},"label":{"type":"string","default":"Calculate"},"name":{"type":"string","default":""},"values":{"type":"array"},"showHelp":{"type":"boolean","default":false},"help":{"type":"string","default":""},"defaultValue":{"type":"number","default":""}},"supports":{"multiple":false,"reusable":false,"className":true,"lock":false}}')},function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"mortgage/button","ancestor":["mortgage/form"],"title":"Button","icon":"button","textdomain":"mortgage","attributes":{"lock":{"type":"object","default":{"move":true,"remove":true}},"text":{"type":"string","default":"Calculate"},"alignment":{"type":"string","default":"left"},"style":{"type":"object","default":{"color":{"background":"#000000","text":"#ffffff"}}}},"supports":{"html":false,"lock":false,"multiple":false,"reusable":false,"className":false,"color":{"background":true,"text":true,"gradients":true},"__experimentalBorder":true,"spacing":{"padding":true,"__experimentalDefaultControls":{"padding":true}}}}')},,,,,,function(e,t){e.exports=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},,,,,,function(e,t,a){"use strict";a.r(t);var l=a(5),r=a(0),n=(a(16),a(8)),o=a.n(n),c=a(1),u=a(2),i=a(3);function s(e){var t=e.attributes,a=e.setAttributes;return Object(c.createElement)(u.InspectorControls,null,Object(c.createElement)(i.PanelBody,{title:Object(r.__)("Form","mortgage"),initialOpen:!0},Object(c.createElement)(i.TextControl,{label:Object(r.__)("Currency symbol","mortgage"),value:t.currency,onChange:function(e){return a({currency:e})}}),Object(c.createElement)(i.ToggleControl,{label:Object(r.__)("Show table","mortgage"),checked:t.showTable,onChange:function(e){return a({showTable:e})}}),Object(c.createElement)(i.ToggleControl,{label:Object(r.__)("Show year summary","mortgage"),checked:t.yearSummary,onChange:function(e){return a({yearSummary:e})}})))}var m=a(6),b=a.n(m),g=a(4),p=a.n(g),f=[{name:"default",title:Object(r.__)("Mortgage calculator","mortgage"),description:Object(r.__)("Test","mortgage"),icon:"calculator",innerBlocks:[["mortgage/input",{name:"amount",label:Object(r.__)("Amount","mortgage"),value:1e4,min:0,max:""}],["mortgage/input",{name:"rate",label:Object(r.__)("Rate","mortgage"),value:4,min:0,step:.01}],["mortgage/input",{name:"term",label:Object(r.__)("Term","mortgage"),value:10}],["mortgage/select",{name:"frequency",label:Object(r.__)("Frequency","mortgage"),values:[{value:52,label:Object(r.__)("Weekly","mortgage")},{value:26,label:Object(r.__)("Fortnightly","mortgage")},{value:12,label:Object(r.__)("Monthly","mortgage")},{value:6,label:Object(r.__)("Bi-Monthly","mortgage")},{value:4,label:Object(r.__)("Quarterly","mortgage")},{value:2,label:Object(r.__)("Half-yearly","mortgage")},{value:1,label:Object(r.__)("Yearly","mortgage")}]}],["mortgage/button",{text:Object(r.__)("Calculate","mortgage")}]],attributes:{type:"loan"},scope:["block","inserter"],isDefault:!0},{name:"rates",title:Object(r.__)("Rates Comparator","mortgage"),description:Object(r.__)("Rates","mortgage"),icon:"calculator",innerBlocks:[["mortgage/input",{name:"amount",label:Object(r.__)("Amount","mortgage"),value:1e4,min:0,max:""}],["mortgage/input",{name:"rate",label:Object(r.__)("Rate","mortgage"),value:4,min:0,step:.01}],["mortgage/input",{name:"term",label:Object(r.__)("Term","mortgage"),value:10}],["mortgage/select",{name:"increment",label:Object(r.__)("Increment","mortgage"),values:[{value:.125,label:"1/8%"},{value:.25,label:"1/4%"},{value:.375,label:"3/8%"},{value:.5,label:"1/2%"},{value:.625,label:"5/8%"},{value:.875,label:"7/8%"},{value:1,label:"1%"}]}],["mortgage/button",{text:Object(r.__)("Calculate","mortgage")}]],attributes:{type:"rates"},scope:["block","inserter"],isDefault:!0},{name:"duration",title:Object(r.__)("Duration Comparator","mortgage"),description:Object(r.__)("Duration","mortgage"),icon:"calculator",innerBlocks:[["mortgage/input",{name:"amount",label:Object(r.__)("Amount","mortgage"),value:1e4,min:0}],["mortgage/input",{name:"rate",label:Object(r.__)("Rate","mortgage"),value:4,min:0,step:.01}],["mortgage/button",{text:Object(r.__)("Calculate","mortgage")}]],attributes:{type:"duration"},scope:["block","inserter"],isDefault:!0}];f.forEach((function(e){e.isActive=function(e,t){return e.type===t.type}}));var d=f,O=a(7);O.name,O.attributes,Object(l.registerBlockType)(O,{variations:d,edit:function(e){e.attributes,e.setAttributes,e.className,e.clientId;var t=Object(u.useBlockProps)(),a=Object(u.useInnerBlocksProps)(t,{template:[["mortgage/input",{name:"amount",label:Object(r.__)("Amount","mortgage"),value:1e4,min:0}],["mortgage/input",{name:"rate",label:Object(r.__)("Rate","mortgage"),value:4,min:0,step:.01}],["mortgage/input",{name:"term",label:Object(r.__)("Term","mortgage"),value:10,max:50}],["mortgage/select",{name:"frequency",label:Object(r.__)("Frequency","mortgage"),values:[{value:52,label:Object(r.__)("Weekly","mortgage")},{value:26,label:Object(r.__)("Fortnightly","mortgage")},{value:12,label:Object(r.__)("Monthly","mortgage")},{value:6,label:Object(r.__)("Bi-Monthly","mortgage")},{value:4,label:Object(r.__)("Quarterly","mortgage")},{value:2,label:Object(r.__)("Half-yearly","mortgage")},{value:1,label:Object(r.__)("Yearly","mortgage")}]}],["mortgage/button",{text:Object(r.__)("Calculate","mortgage")}]]}),l=a.children;return o()(a,["children"]),Object(c.createElement)("div",t,Object(c.createElement)(s,e),l)},save:function(e){var t=e.attributes,a=(e.className,u.useBlockProps.save()),l=u.useInnerBlocksProps.save();return Object(c.createElement)("form",b()({},a,{noValidate:!0,"data-currency":t.currency,"data-yearSummary":t.yearSummary,"data-showTable":t.showTable,"data-type":t.type},l))}});var h=["core/bold","core/italic","core/link"],v=a(9);Object(l.registerBlockType)(v,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"52px",height:"52px",viewBox:"0 0 52 52","enable-background":"new 0 0 52 52"},Object(c.createElement)("path",{d:"M44.8,49.5H7.2c-2.6,0-4.7-2.1-4.7-4.7V7.2c0-2.6,2.1-4.7,4.7-4.7h37.6c2.6,0,4.7,2.1,4.7,4.7v37.6\r C49.5,47.4,47.4,49.5,44.8,49.5z M8.8,10.3v31.3c0,0.9,0.7,1.6,1.6,1.6h31.3c0.9,0,1.6-0.7,1.6-1.6V10.3c0-0.9-0.7-1.6-1.6-1.6H10.4\r C9.5,8.8,8.8,9.5,8.8,10.3z"}),Object(c.createElement)("path",{d:"M36.2,20.3h-2.9l1.2-4.8v-0.1c0-0.2-0.1-0.4-0.4-0.4h-2.3c-0.2,0-0.3,0.1-0.4,0.3l-1.2,4.9h-5.8l1.2-4.8\r v-0.1c0-0.2-0.1-0.4-0.4-0.4h-2.3c-0.2,0-0.3,0.1-0.4,0.3l-1.3,4.9h-3.2c-0.2,0-0.3,0.1-0.4,0.3l-0.6,2.2v0.1c0,0.2,0.1,0.4,0.4,0.4\r h3l-1.4,5.6h-3.1c-0.2,0-0.3,0.1-0.4,0.3l-0.6,2.2v0.1c0,0.2,0.1,0.4,0.4,0.4h2.9l-1.2,4.8v0.1c0,0.2,0.1,0.4,0.4,0.4h2.3\r c0.2,0,0.3-0.1,0.4-0.3l1.3-5h5.7L26,36.4v0.1c0,0.2,0.1,0.4,0.4,0.4h2.3c0.2,0,0.3-0.1,0.4-0.3l1.3-5h3.2c0.2,0,0.3-0.1,0.4-0.3\r l0.6-2.2V29c0-0.2-0.1-0.4-0.4-0.4h-3l1.4-5.6h3.1c0.2,0,0.3-0.1,0.4-0.3l0.6-2.2v-0.1C36.6,20.5,36.4,20.3,36.2,20.3L36.2,20.3z\r M28.1,28.8h-5.8l1.4-5.6h5.7L28.1,28.8z"})),edit:function(e){var t=e.attributes,a=e.setAttributes,l=t.label,n=t.value,o=t.help,s=t.placeholder,m=t.showHelp,b=t.min,g=t.max,p=t.readOnly,f=t.step,d=Object(u.useBlockProps)();return Object(c.createElement)("div",d,Object(c.createElement)(u.BlockControls,null,Object(c.createElement)(i.ToolbarGroup,null,Object(c.createElement)(i.ToolbarButton,{label:Object(r.__)("Show help message"),icon:"editor-help",isPressed:m,onClick:function(){a({showHelp:!m})}}))),Object(c.createElement)(u.InspectorControls,null,Object(c.createElement)(i.PanelBody,{title:Object(r.__)("Options"),initialOpen:!0},Object(c.createElement)(i.TextControl,{label:Object(r.__)("Placeholder","mortgage"),value:s,onChange:function(e){a({placeholder:e})},type:"number"}),Object(c.createElement)(i.ToggleControl,{label:Object(r.__)("Read Only","mortgage"),checked:p,onChange:function(e){a({readOnly:e})}}),Object(c.createElement)(i.TextControl,{label:Object(r.__)("Min","mortgage"),value:b,help:Object(r.__)("Set minimum value","mortgage"),onChange:function(e){a({min:Number(e)})},type:"number",min:0}),Object(c.createElement)(i.TextControl,{label:Object(r.__)("Max","mortgage"),help:Object(r.__)("Set maximum value","mortgage"),value:g,onChange:function(e){a({max:Number(e)})},type:"number",max:100,min:0}),Object(c.createElement)(i.TextControl,{label:Object(r.__)("Step","mortgage"),help:Object(r.__)("Set step value","mortgage"),value:f,onChange:function(e){a({step:Number(e)})},type:"number",step:.01}))),Object(c.createElement)(u.RichText,{tagName:"label",value:l,onChange:function(e){a({label:e})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[]}),Object(c.createElement)("input",{type:"number",placeholder:n,value:n,onChange:function(e){a({value:e.target.value})},name:name,min:b,max:g,step:f||void 0,required:!0,readOnly:p||void 0}),m&&Object(c.createElement)(u.RichText,{tagName:"small",value:o,onChange:function(e){a({help:e})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:h}))},save:function(e){var t=e.attributes,a=(e.className,t.label),l=t.name,r=t.min,n=t.max,o=t.value,i=t.placeholder,s=t.help,m=t.readOnly,b=t.step,g=u.useBlockProps.save();return Object(c.createElement)("div",g,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:a}),Object(c.createElement)("input",{type:"number",name:l,min:r,max:n,step:b||void 0,required:!0,value:o,placeholder:i,readOnly:m||void 0}),s&&Object(c.createElement)(u.RichText.Content,{tagName:"small",value:s}))}});var _=["core/bold","core/italic","core/link"],j=a(10);Object(l.registerBlockType)(j,{icon:Object(c.createElement)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{"fill-rule":"evenodd",d:"M3.75 5.5a.75.75 0 000 1.5h10a.75.75 0 000-1.5h-10zm5 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zM5 12a1 1 0 11-2 0 1 1 0 012 0zm-1 7a1 1 0 100-2 1 1 0 000 2z"}),Object(c.createElement)("path",{d:"M19.309 7.918l-2.245-2.501A.25.25 0 0117.25 5h4.49a.25.25 0 01.185.417l-2.244 2.5a.25.25 0 01-.372 0z"})),edit:function(e){var t=e.attributes,a=e.setAttributes,l=t.label,n=(t.name,t.values),o=t.showHelp,s=t.help,m=t.defaultValue,b=Object(u.useBlockProps)();return Object(c.createElement)("div",b,Object(c.createElement)(u.BlockControls,null,Object(c.createElement)(i.ToolbarGroup,null,Object(c.createElement)(i.ToolbarButton,{label:Object(r.__)("Show help message"),icon:"editor-help",isPressed:o,onClick:function(){a({showHelp:!o})}}))),Object(c.createElement)(u.InspectorControls,null,Object(c.createElement)(i.PanelBody,{title:Object(r.__)("Options"),initialOpen:!0},Object(c.createElement)(i.SelectControl,{label:Object(r.__)("Default value","mortgage"),onChange:function(e){a({defaultValue:Number(e)})},value:m,options:n}))),Object(c.createElement)(u.RichText,{tagName:"label",value:l,onChange:function(e){a({label:e})},placeholder:Object(r.__)("Increment","mortgage"),allowedFormats:[]}),Object(c.createElement)("select",{name:"increment",value:m,onChange:function(){return console.log("ciao")}},n.map((function(e){return Object(c.createElement)("option",{key:e.label,value:e.value},e.label)}))),o&&Object(c.createElement)(u.RichText,{tagName:"small",value:s,onChange:function(e){a({help:e})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:_}))},save:function(e){var t=e.attributes,a=t.label,l=t.name,r=t.values,n=t.help,o=t.defaultValue,i=u.useBlockProps.save();return Object(c.createElement)("div",i,Object(c.createElement)(u.RichText.Content,{tagName:"label",value:a}),Object(c.createElement)("select",{name:l},r.map((function(e){return Object(c.createElement)("option",{key:e.label,value:e.value,selected:o===e.value},e.label)}))),Object(c.createElement)(u.RichText.Content,{tagName:"small",value:n}))}});var y=a(11);Object(l.registerBlockType)(y,{edit:function(e){var t=e.attributes,a=e.setAttributes,l=(t.style,t.text),n=[{icon:"editor-alignleft",title:Object(r.__)("Align Button Left","formello"),align:"left"},{icon:"editor-aligncenter",title:Object(r.__)("Align Button Center","formello"),align:"center"},{icon:"editor-alignright",title:Object(r.__)("Align Button Right","formello"),align:"right"},{icon:"align-wide",title:Object(r.__)("Wide Button","formello"),align:"wide"}],o=Object(u.__experimentalUseColorProps)(t),i=p()(o.className,t.alignment),s=Object(u.useBlockProps)({className:i});return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.BlockControls,null,Object(c.createElement)(u.AlignmentToolbar,{value:t.alignment,alignmentControls:n,onChange:function(e){a({alignment:e})}})),Object(c.createElement)(u.RichText,b()({},s,{tagName:"button",allowedFormats:[],value:l,onChange:function(e){return a({text:e})},placeholder:Object(r.__)("Enter button text…","mortgage")})))},save:function(e){var t,a=e.attributes,l=a.text,r=a.alignment,n=(a.type,a.style),o=null==n||null===(t=n.border)||void 0===t?void 0:t.radius,i=Object(u.__experimentalGetBorderClassesAndStyles)(a);"number"==typeof o&&(i.style.borderRadius="".concat(o,"px"));var s=Object(u.__experimentalGetColorClassesAndStyles)(a),m=p()(s.className,r,"mortgage-btn"),b=u.useBlockProps.save({className:m,style:s.style});return Object(c.createElement)("button",b,l)}})}]);