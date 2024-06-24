import*as t from"@wordpress/interactivity";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const r=(n={getContext:()=>t.getContext,getElement:()=>t.getElement,store:()=>t.store},a={},e.d(a,n),a);var n,a,o;function i(t,e,r,n,a){void 0===n&&(n=0),void 0===a&&(a=o.End);var i=0===t,u=Math.pow(1+t,e),s=a===o.Begin?1:0,m=i?1:t;return-(n+r*u)/(i?e:(1+m*s)*(u-1)/m)}function u(t,e,r,n,a,u){if(void 0===a&&(a=0),void 0===u&&(u=o.End),e<1)return Number.NaN;if(u===o.Begin&&1===e)return 0;var s=function(t,e,r,n,a){return function(t,e,r,n,a){if(void 0===a&&(a=o.End),0===t)return-(n+r*e);var i=Math.pow(1+t,e);return-n*i-r*(1+t*(a===o.Begin?1:0))/t*(i-1)}(t,e-1,r,n,a)}(t,e,i(t,r,n,a,u),n,u)*t;return u===o.Begin&&e>1&&(s/=1+t),s}!function(t){t.Begin="begin",t.End="end"}(o||(o={}));const s=window.navigator.language||window.navigator.userLanguage,m=t=>t.toLocaleString(s,{minimumFractionDigits:2,maximumFractionDigits:2}),c=t=>-1*i(t.rate/100/t.frequency,t.frequency*t.term,t.amount),l=()=>{const t=[],e=Array.from({length:g.numberOfPayments},((t,e)=>e+1)),n=(0,r.getContext)(),a=e.map((t=>u(n.rate/100/n.frequency,t,1*e.length,Number(n.amount))));let o=n.amount;for(let e=0;e<a.length;e++)o=o-n.result-a[e],t.push({"#":e+1,payment:m(n.result),interest:m(-1*a[e]),principal:m(n.result+a[e]),balance:m(o)});n.loanData=t,n.showTable=!0;const{ref:i}=(0,r.getElement)(),s=i.querySelector(".wp-block-mortgage-result");s?.scrollIntoView({behavior:"smooth"})},{state:g}=(0,r.store)("mortgage",{callbacks:{generateTable:()=>{const t=(0,r.getContext)();switch(t.result&&(t.showTable=!0),t.type){case"loan":if(!t.result)return;l();break;case"rates":(()=>{const t=(0,r.getContext)();if(!t.rate||!t.amount)return;const e=[],n=t.rate;[0,1,2,3,4,5,6,7,8].forEach((r=>{t.rate=n+t.increment*r;const a=c({rate:t.rate,amount:t.amount,frequency:12,term:t.term});e.push({rate:t.rate.toFixed(2),installment:m(a),interests:m(12*a*t.term-t.amount),total:m(12*a*t.term)})})),t.rateData=e,t.showTable=!0})();break;case"duration":(()=>{const t=(0,r.getContext)();if(!t.rate||!t.amount)return;const e={rate:t.rate,amount:t.amount,frequency:12,term:10},n=[];[10,15,20,25,30,35,40].forEach((r=>{e.term=r;const a=c(e);n.push({years:r,installment:m(a),interests:m(12*a*r-t.amount),total:m(12*a*r)})})),t.durationData=n,t.showTable=!0})();break;default:l()}}}});