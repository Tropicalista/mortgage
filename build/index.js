(window.webpackJsonp_mortgage=window.webpackJsonp_mortgage||[]).push([[4],{23:function(e,t,a){}}]),function(e){function t(t){for(var l,o,c=t[0],u=t[1],m=t[2],i=0,s=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(b&&b(t);s.length;)s.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(l=!1)}l&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var l={},r={2:0},n=[];function o(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=l,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(a,l,function(t){return e[t]}.bind(null,l));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp_mortgage=window.webpackJsonp_mortgage||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var b=u;n.push([26,4]),a()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t,a){var l;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)&&l.length){var o=r.apply(null,l);o&&e.push(o)}else if("object"===n)for(var c in l)a.call(l,c)&&l[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()},,,,function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,a.apply(this,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},,,,,,,,function(e){e.exports=JSON.parse('{"apiVersion":"2","name":"mortgage/form","title":"Mortgage","category":"widgets","icon":"calculator","description":"A block to generate a very simple and easy to use mortgage calculator form.","supports":{"html":false,"className":true},"attributes":{"label":{"type":"object","default":{"amount":"Amount","rate":"Rate","term":"Term","frequency":"Payment frequency"}},"defaults":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"frequency":12}},"placeholder":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"frequency":12}},"help":{"type":"object","default":{"amount":"","rate":"","term":"","frequency":""}},"button":{"type":"string","default":"Calculate"},"currency":{"type":"string","default":"$"},"showTable":{"type":"boolean","default":false},"yearSummary":{"type":"boolean","default":false},"asRow":{"type":"boolean","default":false},"boldedLabel":{"type":"boolean","default":true}},"styles":[{"name":"regular","label":"Default","isDefault":true},{"name":"bolded","label":"Bolded label"}],"textdomain":"mortgage","editorScript":"file:./build/index.js","viewScript":"mortgage-block-frontend","style":"file:./build/style-index.css"}')},function(e){e.exports=JSON.parse('{"apiVersion":"2","name":"mortgage/duration","title":"Mortgage duration","category":"widgets","icon":"calculator","description":"A block to generate a mortgage calculator comparator form.","supports":{"html":false},"attributes":{"label":{"type":"object","default":{"amount":"Amount","rate":"Rate","term":"Term","frequency":"Payment frequency"}},"defaults":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"frequency":12}},"placeholder":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"frequency":12}},"help":{"type":"object","default":{"amount":"","rate":"","term":"","frequency":""}},"button":{"type":"string","default":"Calculate"},"currency":{"type":"string","default":"$"},"yearSummary":{"type":"boolean","default":false},"asRow":{"type":"boolean","default":false},"boldedLabel":{"type":"boolean","default":true}},"textdomain":"mortgage","editorScript":"file:../../build/duration.js","style":"file:../../build/style-index.css","viewScript":"mortgage-duration-frontend"}')},function(e){e.exports=JSON.parse('{"apiVersion":"2","name":"mortgage/rates","title":"Mortgage rates comparison","category":"widgets","icon":"calculator","description":"A block to generate a mortgage calculator rate comparator form.","textdomain":"mortgage","supports":{"html":false},"attributes":{"label":{"type":"object","default":{"amount":"Amount","rate":"Rate","term":"Term","increment":"Increment"}},"defaults":{"type":"object","default":{"amount":10000,"rate":4,"term":10,"increment":1}},"placeholder":{"type":"object","default":{"amount":10000,"rate":4,"term":10}},"help":{"type":"object","default":{"amount":"","rate":"","term":"","increment":""}},"button":{"type":"string","default":"Calculate"},"currency":{"type":"string","default":"$"},"yearSummary":{"type":"boolean","default":false},"asRow":{"type":"boolean","default":false},"boldedLabel":{"type":"boolean","default":true}},"editorScript":"file:../../build/rates.js","viewScript":"mortgage-rates-frontend","style":"file:../../build/style-index.css"}')},function(e,t,a){var l=a(24);e.exports=function(e,t){if(null==e)return{};var a,r,n=l(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"mortgage/button","title":"Button","description":"A block to display form button.","icon":"button","textdomain":"mortgage","attributes":{"text":{"type":"string","default":"Calculate"},"alignment":{"type":"string","default":"left"},"style":{"type":"object","default":{"color":{"background":"#000000","text":"#ffffff"}}}},"supports":{"html":false,"multiple":false,"reusable":false,"className":false,"color":{"background":true,"text":true,"gradients":true},"spacing":{"padding":true,"__experimentalDefaultControls":{"padding":true}}}}')},,function(e,t){e.exports=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,a){"use strict";a.r(t);var l=a(9),r=a(1),n=(a(23),a(8)),o=a.n(n),c=a(21),u=a.n(c),m=a(0),b=a(2),i=a(3),s=a(4),p=a.n(s);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=["core/bold","core/italic","core/link"],f=a(10),h=a.n(f),j=a(18),y=j.name,v=j.attributes;function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}Object(l.registerBlockType)(y,{apiVersion:2,title:Object(r.__)("Mortgage","mortgage"),description:Object(r.__)("A block to generate a very simple and easy to use mortgage calculator form.","mortgage"),category:"widgets",attributes:v,edit:function(e){var t=e.attributes,a=e.setAttributes,l=(e.className,Object(b.useBlockProps)());l.className=p()(l.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel});var n=Object(b.useInnerBlocksProps)(l,{allowedBlocks:["mortgage/button"],templateLock:!1,template:[["mortgage/button"]]}),o=n.children;return u()(n,["children"]),Object(m.createElement)("div",l,Object(m.createElement)(b.InspectorControls,null,Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Form Options","mortgage"),initialOpen:!0},Object(m.createElement)(i.TextControl,{label:Object(r.__)("Currency symbol","mortgage"),value:t.currency,onChange:function(e){return a({currency:e})}}),Object(m.createElement)(i.ToggleControl,{label:Object(r.__)("Show table","mortgage"),checked:t.showTable,onChange:function(e){return a({showTable:e})}}),t.showTable&&Object(m.createElement)(i.ToggleControl,{label:Object(r.__)("Show year summary","mortgage"),checked:t.yearSummary,onChange:function(e){return a({yearSummary:e})}})),Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Default Values","mortgage"),initialOpen:!1},Object(m.createElement)(i.TextControl,{type:"number",label:Object(r.__)("Amount Default Value","mortgage"),value:t.defaults.amount,onChange:function(e){return a({defaults:g(g({},t.defaults),{},{amount:e})})}}),Object(m.createElement)(i.TextControl,{type:"number",label:Object(r.__)("Rate Default Value","mortgage"),value:t.defaults.rate,onChange:function(e){return a({defaults:g(g({},t.defaults),{},{rate:e})})}}),Object(m.createElement)(i.TextControl,{type:"number",label:Object(r.__)("Term Default Value","mortgage"),value:t.defaults.term,onChange:function(e){return a({defaults:g(g({},t.defaults),{},{term:e})})}})),Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Placeholder Options","mortgage"),initialOpen:!1},Object(m.createElement)(i.TextControl,{label:Object(r.__)("Amount Placeholder","mortgage"),value:t.placeholder.amount,onChange:function(e){return a({placeholder:g(g({},t.placeholder),{},{amount:e})})}}),Object(m.createElement)(i.TextControl,{label:Object(r.__)("Rate Placeholder","mortgage"),value:t.placeholder.rate,onChange:function(e){return a({placeholder:g(g({},t.placeholder),{},{rate:e})})}}),Object(m.createElement)(i.TextControl,{label:Object(r.__)("Term Placeholder","mortgage"),value:t.placeholder.term,onChange:function(e){return a({placeholder:g(g({},t.placeholder),{},{term:e})})}}))),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.amount,onChange:function(e){a({label:g(g({},t.label),{},{amount:e})})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[]}),Object(m.createElement)("input",{type:"number",name:"",placeholder:t.placeholder.amount,disabled:!0,value:t.defaults.amount}),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.amount,onChange:function(e){a({help:g(g({},t.help),{},{amount:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:O})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.rate,onChange:function(e){a({label:g(g({},t.label),{},{rate:e})})},placeholder:Object(r.__)("Rate","mortgage"),allowedFormats:[]}),Object(m.createElement)("input",{type:"number",name:"",placeholder:t.placeholder.rate,disabled:!0,value:t.defaults.rate}),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.rate,onChange:function(e){a({help:g(g({},t.help),{},{rate:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:O})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.term,onChange:function(e){a({label:g(g({},t.label),{},{term:e})})},placeholder:Object(r.__)("Term","mortgage"),allowedFormats:[]}),Object(m.createElement)("input",{type:"number",name:"",placeholder:t.placeholder.term,disabled:!0,value:t.defaults.term}),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.term,onChange:function(e){a({help:g(g({},t.help),{},{term:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:O})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.frequency,onChange:function(e){a({label:g(g({},t.label),{},{frequency:e})})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[]}),Object(m.createElement)("select",{name:"frequency"},Object(m.createElement)("option",{value:"12"},Object(r.__)("Monthly","mortgage")),Object(m.createElement)("option",{value:"6"},Object(r.__)("Bi-Monthly","mortgage")),Object(m.createElement)("option",{value:"4"},Object(r.__)("Quarterly","mortgage")),Object(m.createElement)("option",{value:"2"},Object(r.__)("Semi-annually","mortgage"))),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.frequency,onChange:function(e){a({help:g(g({},t.help),{},{frequency:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:O})),Object(m.createElement)("div",null,o))},save:function(e){var t=e.attributes,a=(e.className,b.useBlockProps.save());return a.className=p()(a.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel}),Object(m.createElement)("form",h()({},a,{noValidate:!0,"data-currency":t.currency,"data-yearSummary":t.yearSummary,"data-showTable":t.showTable}),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.amount}),Object(m.createElement)("input",{type:"number",name:"amount",min:"0",required:!0,value:t.defaults.amount,placeholder:t.placeholder.amount}),t.help.amount&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.amount})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.rate}),Object(m.createElement)("input",{type:"number",name:"rate",min:"0",step:"0.01",required:!0,value:t.defaults.rate,placeholder:t.placeholder.rate}),t.help.rate&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.rate})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.term}),Object(m.createElement)("input",{type:"number",name:"term",min:"0",required:!0,value:t.defaults.term,placeholder:t.placeholder.term}),t.help.term&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.term})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.frequency}),Object(m.createElement)("select",{name:"frequency"},Object(m.createElement)("option",{value:"12"},Object(r.__)("Monthly","mortgage")),Object(m.createElement)("option",{value:"6"},Object(r.__)("Bi-Monthly","mortgage")),Object(m.createElement)("option",{value:"4"},Object(r.__)("Quarterly","mortgage")),Object(m.createElement)("option",{value:"2"},Object(r.__)("Semi-annually","mortgage"))),t.help.frequency&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.frequency})),Object(m.createElement)("div",null,Object(m.createElement)(b.InnerBlocks.Content,null)))}});var x=["core/bold","core/italic","core/link"],w=a(19),C=w.name,T=w.attributes;function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}Object(l.registerBlockType)(C,{category:"widgets",attributes:T,edit:function(e){var t=e.attributes,a=e.setAttributes,l=(e.className,Object(b.useBlockProps)());return l.className=p()(l.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel,"wp-block-mortgage-form":!0}),Object(m.createElement)("div",l,Object(m.createElement)(b.InspectorControls,null,Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Form Options","mortgage"),initialOpen:!0},Object(m.createElement)(i.TextControl,{label:Object(r.__)("Button text","mortgage"),value:t.button,onChange:function(e){return a({button:e})}}),Object(m.createElement)(i.TextControl,{label:Object(r.__)("Currency symbol","mortgage"),value:t.currency,onChange:function(e){return a({currency:e})}}),Object(m.createElement)(i.ToggleControl,{label:Object(r.__)("Display label on side","mortgage"),checked:t.asRow,onChange:function(e){return a({asRow:e})}}),Object(m.createElement)(i.ToggleControl,{label:Object(r.__)("Bolded label","mortgage"),checked:t.boldedLabel,onChange:function(e){return a({boldedLabel:e})}})),Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Default Values","mortgage"),initialOpen:!1},Object(m.createElement)(i.TextControl,{type:"number",label:Object(r.__)("Amount Default Value","mortgage"),value:t.defaults.amount,onChange:function(e){return a({defaults:_(_({},t.defaults),{},{amount:e})})}}),Object(m.createElement)(i.TextControl,{type:"number",label:Object(r.__)("Rate Default Value","mortgage"),value:t.defaults.rate,onChange:function(e){return a({defaults:_(_({},t.defaults),{},{rate:e})})}})),Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Placeholder Options","mortgage"),initialOpen:!1},Object(m.createElement)(i.TextControl,{label:Object(r.__)("Amount Placeholder","mortgage"),value:t.placeholder.amount,onChange:function(e){return a({placeholder:_(_({},t.placeholder),{},{amount:e})})}}),Object(m.createElement)(i.TextControl,{label:Object(r.__)("Rate Placeholder","mortgage"),value:t.placeholder.rate,onChange:function(e){return a({placeholder:_(_({},t.placeholder),{},{rate:e})})}}))),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.amount,onChange:function(e){a({label:_(_({},t.label),{},{amount:e})})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(m.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.amount,disabled:!0,value:t.defaults.amount}),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.amount,onChange:function(e){a({help:_(_({},t.help),{},{amount:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:x,keepPlaceholderOnFocus:!0})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.rate,onChange:function(e){a({label:_(_({},t.label),{},{rate:e})})},placeholder:Object(r.__)("Rate","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(m.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.rate,disabled:!0,value:t.defaults.rate}),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.rate,onChange:function(e){a({help:_(_({},t.help),{},{rate:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:x,keepPlaceholderOnFocus:!0})),Object(m.createElement)("div",null,Object(m.createElement)("button",null,t.button)))},save:function(e){var t=e.attributes,a=(e.className,b.useBlockProps.save());return a.className=p()(a.className,{"wp-block-mortgage-form":!0,"as-row":t.asRow,"bolded-label":t.boldedLabel}),Object(m.createElement)("form",h()({},a,{noValidate:!0,"data-currency":t.currency,"data-yearSummary":t.yearSummary}),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.amount}),Object(m.createElement)("input",{type:"number",name:"amount",min:"0",required:!0,value:t.defaults.amount,placeholder:t.placeholder.amount}),t.help.amount&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.amount})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.rate}),Object(m.createElement)("input",{type:"number",name:"rate",min:"0",step:"0.01",required:!0,value:t.defaults.rate,placeholder:t.placeholder.rate}),t.help.rate&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.rate})),Object(m.createElement)("div",null,Object(m.createElement)("button",{className:"mortgage-btn"},t.button)))}});var R=["core/bold","core/italic","core/link"],k=a(20),S=k.name,B=k.attributes;Object(l.registerBlockType)(S,{category:"widgets",attributes:B,edit:function(e){var t=e.attributes,a=e.setAttributes,l=(e.className,Object(b.useBlockProps)());return l.className=p()(l.className,{"as-row":t.asRow,"bolded-label":t.boldedLabel,"wp-block-mortgage-form":!0}),Object(m.createElement)("div",l,Object(m.createElement)(b.InspectorControls,null,Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Form Options","mortgage"),initialOpen:!0},Object(m.createElement)(i.TextControl,{label:Object(r.__)("Button text","mortgage"),value:t.button,onChange:function(e){return a({button:e})}}),Object(m.createElement)(i.TextControl,{label:Object(r.__)("Currency symbol","mortgage"),value:t.currency,onChange:function(e){return a({currency:e})}}),Object(m.createElement)(i.ToggleControl,{label:Object(r.__)("Display label on side","mortgage"),checked:t.asRow,onChange:function(e){return a({asRow:e})}}),Object(m.createElement)(i.ToggleControl,{label:Object(r.__)("Bolded label","mortgage"),checked:t.boldedLabel,onChange:function(e){return a({boldedLabel:e})}})),Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Default Values","mortgage"),initialOpen:!1},Object(m.createElement)(i.TextControl,{type:"number",label:Object(r.__)("Amount Default Value","mortgage"),value:t.defaults.amount,onChange:function(e){return a({defaults:N(N({},t.defaults),{},{amount:e})})}}),Object(m.createElement)(i.TextControl,{type:"number",label:Object(r.__)("Rate Default Value","mortgage"),value:t.defaults.rate,onChange:function(e){return a({defaults:N(N({},t.defaults),{},{rate:e})})}})),Object(m.createElement)(i.PanelBody,{title:Object(r.__)("Placeholder Options","mortgage"),initialOpen:!1},Object(m.createElement)(i.TextControl,{label:Object(r.__)("Amount Placeholder","mortgage"),value:t.placeholder.amount,onChange:function(e){return a({placeholder:N(N({},t.placeholder),{},{amount:e})})}}),Object(m.createElement)(i.TextControl,{label:Object(r.__)("Rate Placeholder","mortgage"),value:t.placeholder.rate,onChange:function(e){return a({placeholder:N(N({},t.placeholder),{},{rate:e})})}}))),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.amount,onChange:function(e){a({label:N(N({},t.label),{},{amount:e})})},placeholder:Object(r.__)("Enter label...","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(m.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.amount,disabled:!0,value:t.defaults.amount}),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.amount,onChange:function(e){a({help:N(N({},t.help),{},{amount:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:R,keepPlaceholderOnFocus:!0})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.term,onChange:function(e){a({label:N(N({},t.label),{},{term:e})})},placeholder:Object(r.__)("Term","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(m.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.term,disabled:!0,value:t.defaults.term}),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.term,onChange:function(e){a({help:N(N({},t.help),{},{term:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:R,keepPlaceholderOnFocus:!0})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.rate,onChange:function(e){a({label:N(N({},t.label),{},{rate:e})})},placeholder:Object(r.__)("Rate","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(m.createElement)("input",{type:"number",name:"",readOnly:!0,placeholder:t.placeholder.rate,disabled:!0,value:t.defaults.rate}),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.rate,onChange:function(e){a({help:N(N({},t.help),{},{rate:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:R,keepPlaceholderOnFocus:!0})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText,{tagName:"label",value:t.label.increment,onChange:function(e){a({label:N(N({},t.label),{},{increment:e})})},placeholder:Object(r.__)("Increment","mortgage"),allowedFormats:[],keepPlaceholderOnFocus:!0}),Object(m.createElement)("select",{disabled:!0},Object(m.createElement)("option",null,"Select rate")),Object(m.createElement)(b.RichText,{tagName:"small",value:t.help.increment,onChange:function(e){a({help:N(N({},t.help),{},{increment:e})})},placeholder:Object(r.__)("Enter help message...","mortgage"),allowedFormats:R,keepPlaceholderOnFocus:!0})),Object(m.createElement)("div",null,Object(m.createElement)("button",null,t.button)))},save:function(e){var t=e.attributes,a=(e.className,b.useBlockProps.save());return a.className=p()(a.className,{"bolded-label":t.boldedLabel,"wp-block-mortgage-form":!0}),Object(m.createElement)("form",h()({},a,{noValidate:!0,"data-currency":t.currency,"data-yearSummary":t.yearSummary}),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.amount}),Object(m.createElement)("input",{type:"number",name:"amount",min:"0",required:!0,value:t.defaults.amount,placeholder:t.placeholder.amount}),t.help.amount&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.amount})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.term}),Object(m.createElement)("input",{type:"number",name:"term",min:"0",step:"1",required:!0,value:t.defaults.term,placeholder:t.placeholder.term}),t.help.term&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.term})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.rate}),Object(m.createElement)("input",{type:"number",name:"rate",min:"0",step:"0.01",required:!0,value:t.defaults.rate,placeholder:t.placeholder.rate}),t.help.rate&&Object(m.createElement)(b.RichText.Content,{tagName:"small",value:t.help.rate})),Object(m.createElement)("div",null,Object(m.createElement)(b.RichText.Content,{tagName:"label",value:t.label.increment}),Object(m.createElement)("select",{name:"increment"},Object(m.createElement)("option",{value:"0.125"},"1/8%"),Object(m.createElement)("option",{value:"0.250"},"1/4%"),Object(m.createElement)("option",{value:"0.375"},"3/8%"),Object(m.createElement)("option",{value:"0.5"},"1/2%"),Object(m.createElement)("option",{value:"0.625"},"5/8%"),Object(m.createElement)("option",{value:"0.875"},"7/8%"),Object(m.createElement)("option",{value:"1"},"1%"))),Object(m.createElement)("div",null,Object(m.createElement)("button",{className:"mortgage-btn"},t.button)))}});var F=a(22);Object(l.registerBlockType)(F,{edit:function(e){var t=e.attributes,a=e.setAttributes,l=(t.style,t.text),n=[{icon:"editor-alignleft",title:Object(r.__)("Align Button Left","formello"),align:"left"},{icon:"editor-aligncenter",title:Object(r.__)("Align Button Center","formello"),align:"center"},{icon:"editor-alignright",title:Object(r.__)("Align Button Right","formello"),align:"right"},{icon:"align-wide",title:Object(r.__)("Wide Button","formello"),align:"wide"}],o=Object(b.__experimentalUseColorProps)(t),c=p()(o.className,t.alignment),u=Object(b.useBlockProps)({className:c});return Object(m.createElement)(m.Fragment,null,Object(m.createElement)(b.BlockControls,null,Object(m.createElement)(b.AlignmentToolbar,{value:t.alignment,alignmentControls:n,onChange:function(e){a({alignment:e})}})),Object(m.createElement)(b.RichText,h()({},u,{tagName:"button",allowedFormats:[],value:l,onChange:function(e){return a({text:e})},placeholder:Object(r.__)("Enter button text…","mortgage")})))},save:function(e){var t,a=e.attributes,l=a.text,r=a.alignment,n=(a.type,a.style),o=null==n||null===(t=n.border)||void 0===t?void 0:t.radius,c=Object(b.__experimentalGetBorderClassesAndStyles)(a);"number"==typeof o&&(c.style.borderRadius="".concat(o,"px"));var u=Object(b.__experimentalGetColorClassesAndStyles)(a),i=p()(u.className,r,"mortgage-btn"),s=b.useBlockProps.save({className:i,style:u.style});return Object(m.createElement)("button",s,l)}})}]);