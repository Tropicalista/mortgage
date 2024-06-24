(()=>{"use strict";const e=window.wp.blocks,t=window.React,r=window.wp.i18n,o=window.wp.blockEditor,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mortgage/result","ancestor":["mortgage/form"],"title":"Mortgage result","icon":"info","textdomain":"mortgage","usesContext":["mortgage/currency"],"attributes":{"lock":{"type":"object","default":{"move":false,"remove":true}},"text":{"type":"string","default":"Calculate"},"resume":{"type":"boolean"},"style":{"type":"object","default":{"color":{"background":"#dff0d8","text":"#3c763d"}}}},"supports":{"html":false,"lock":false,"reusable":false,"color":{"background":true,"text":true,"gradients":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"spacing":{"padding":true,"__experimentalDefaultControls":{"padding":true}}},"editorScript":"file:./index.js","render":"file:./render.php"}');(0,e.registerBlockType)(a,{edit:function({attributes:e,setAttributes:a,context:l}){const{text:n,resume:s}=e,u=(0,o.useBlockProps)();return(0,t.createElement)("div",{...u},(0,t.createElement)(o.RichText,{tagName:"span",allowedFormats:[],value:n,onChange:e=>a({text:e}),placeholder:(0,r.__)("Enter text…","mortgage")}),(0,t.createElement)("span",null," 100 ",l["mortgage/currency"]))}})})();