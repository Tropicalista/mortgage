!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=16)}({11:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(6),a=r.n(n),o=r(7),u=r.n(o),i=r(5);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=navigator.language||navigator.userLanguage,c=document.createElement("div"),m=document.createElement("div"),f=document.createElement("div"),__=wp.i18n.__,d=function(){function t(e){a()(this,t),this.amount=parseFloat(e.querySelector('[name="amount"]').value),this.rate=parseFloat(e.querySelector('[name="rate"]').value/100),this.term=parseFloat(e.querySelector('[name="term"]').value),this.frequency=parseFloat(e.querySelector('[name="frequency"]').value),this.currency="<small>"+e.dataset.currency+"</small>",this.showSummary="true"===e.dataset.yearsummary,this.showTable="true"===e.dataset.showtable,this.result=-1*this.payment(),this.totalInterestPaid=0}return u()(t,[{key:"payment",value:function(){return Object(i.b)(this.rate/this.frequency,this.frequency*this.term,this.amount)}},{key:"summary",value:function(){return"<p>"+__("Loan amount","mortgage")+": <b>"+this.formatNumber(this.amount)+"</b><br />"+__("Interest rate","mortgage")+": <b>"+100*this.rate.toFixed(2)+"%</b><br />"+__("Number of payments","mortgage")+": <b>"+this.term*this.frequency+"</b><br />"+__("Recurring payment","mortgage")+": <b>"+this.formatNumber(this.result)+"</b><br />"+__("Total paid","mortgage")+": <b>"+this.formatNumber(this.result*this.term*this.frequency)+"</b></p>"}},{key:"generateTableHead",value:function(t,e){var r,n=t.createTHead().insertRow(),a=function(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return s(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,void 0):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){i=!0,o=t},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw o}}}}(e);try{for(a.s();!(r=a.n()).done;){var o=r.value,u=document.createElement("th"),i=document.createTextNode(o);u.appendChild(i),n.appendChild(u)}}catch(t){a.e(t)}finally{a.f()}}},{key:"mortgageTable",value:function(){var t=this,e="<table><tr><th>#</th><th>"+__("Payment","mortgage")+"</th><th>"+__("Interest","mortgage")+"</th><th>"+__("Principal","mortgage")+"</th><th>"+__("Balance","mortgage")+"</th>",r=(__("Payment","mortgage"),__("Interest","mortgage"),__("Principal","mortgage"),__("Balance","mortgage"),Array.from(Array(this.term*this.frequency).keys()));r.shift(),r.push(r.slice(-1).pop()+1);for(var n=r.map((function(e){return-1*Object(i.a)(t.rate/t.frequency,e,1*r.length,t.amount)})),a=this.amount,o=0;o<n.length;o++)a=a-this.result+n[o],e+="<tr align=center>",e+="<td>"+(o+1)+"</td>",e+="<td>"+this.formatNumber(this.result)+"</td>",e+="<td>"+this.formatNumber(n[o])+"</td>",e+="<td>"+this.formatNumber(this.result-n[o])+"</td>",e+="<td>"+this.formatNumber(a)+"</td>",e+="</tr>",this.totalInterestPaid+=n[o],0==(o+1)%this.frequency&&this.showSummary&&(e+=this.yearSummary(o+1));return e+"</table>"}},{key:"yearSummary",value:function(t){var e=Number(t/12);console.log(e);var r="<tr>";return r+='<td colspan="5">',r+=__("Total after year ","mortgage")+e+": "+this.formatNumber(this.result*this.frequency*e),r+="<br>"+__("Interests paid after year ","mortgage")+e+": "+this.formatNumber(this.totalInterestPaid),(r+="</td>")+"</tr>"}},{key:"response",value:function(t){"wp-block-columns"===t.parentNode.parentNode.className&&(t=t.parentNode.parentNode),c.className="wp-block-mortgage-result success",c.innerHTML="<p>"+__("Recurring payment","mortgage")+": <b>"+this.formatNumber(this.result)+"</b></p>",m.className="wp-block-mortgage-summary",m.innerHTML=this.summary(),this.showTable&&(f.className="wp-block-mortgage-table",f.innerHTML=this.mortgageTable(),t.after(f)),t.after(m),t.after(c)}},{key:"formatNumber",value:function(t){return this.currency+t.toLocaleString(l,{minimumFractionDigits:2,maximumFractionDigits:2})}}]),t}()},16:function(t,e,r){"use strict";r.r(e);var n=r(11);document.addEventListener("submit",(function(t){var e=t.target;e.className.indexOf("wp-block-mortgage-form")<0||(t.preventDefault(),t.stopPropagation(),e.reportValidity()&&new n.a(e).response(e))}),!0)},5:function(t,e,r){"use strict";var n;function a(t,e,r,a,o){void 0===a&&(a=0),void 0===o&&(o=n.End);var u=0===t,i=Math.pow(1+t,e),s=o===n.Begin?1:0,l=u?1:t;return-(a+r*i)/(u?e:(1+l*s)*(i-1)/l)}function o(t,e,r,o,u,i){if(void 0===u&&(u=0),void 0===i&&(i=n.End),e<1)return Number.NaN;if(i===n.Begin&&1===e)return 0;var s=function(t,e,r,a,o){return function(t,e,r,a,o){if(void 0===o&&(o=n.End),0===t)return-(a+r*e);var u=Math.pow(1+t,e);return-a*u-r*(1+t*(o===n.Begin?1:0))/t*(u-1)}(t,e-1,r,a,o)}(t,e,a(t,r,o,u,i),o,i)*t;return i===n.Begin&&e>1&&(s/=1+t),s}r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return a})),function(t){t.Begin="begin",t.End="end"}(n||(n={}))},6:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},7:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0}});