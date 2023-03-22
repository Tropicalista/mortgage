(()=>{"use strict";var t;function e(e,r,a,s,n){void 0===s&&(s=0),void 0===n&&(n=t.End);var i=0===e,o=Math.pow(1+e,r),m=n===t.Begin?1:0,h=i?1:e;return-(s+a*o)/(i?r:(1+h*m)*(o-1)/h)}function r(r,a,s,n,i,o){if(void 0===i&&(i=0),void 0===o&&(o=t.End),a<1)return Number.NaN;if(o===t.Begin&&1===a)return 0;var m=function(e,r,a,s,n){return function(e,r,a,s,n){if(void 0===n&&(n=t.End),0===e)return-(s+a*r);var i=Math.pow(1+e,r);return-s*i-a*(1+e*(n===t.Begin?1:0))/e*(i-1)}(e,r-1,a,s,n)}(r,a,e(r,s,n,i,o),n,o)*r;return o===t.Begin&&a>1&&(m/=1+r),m}!function(t){t.Begin="begin",t.End="end"}(t||(t={}));const a=navigator.language||navigator.userLanguage,s=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("table"),{__}=wp.i18n;class m{constructor(t){this.frequency=12,this.setFormInput(t),this.currency="<small>"+t.dataset.currency+"</small>",this.showSummary="true"===t.dataset.yearsummary,this.showTable="true"===t.dataset.showtable,this.type=t.dataset.type}setFormInput(t){const e=new FormData(t);for(const[t,r]of e)this[t]=parseFloat(r);this.rate=this.rate/100}payment(){return-1*e(this.rate/this.frequency,this.frequency*this.term,this.amount)}summary(){return"<p>"+__("Loan amount","mortgage")+": <b>"+this.formatNumber(this.amount)+"</b><br />"+__("Interest rate","mortgage")+": <b>"+(100*this.rate).toFixed(2)+"%</b><br />"+__("Number of payments","mortgage")+": <b>"+this.term*this.frequency+"</b><br />"+__("Recurring payment","mortgage")+": <b>"+this.formatNumber(this.result)+"</b><br />"+__("Total paid","mortgage")+": <b>"+this.formatNumber(this.result*this.term*this.frequency)+"</b></p>"}generateTable(t,e){for(const r of e){const e=t.insertRow();this.showSummary&&this.yearSummary(r["#"]);for(const t in r)e.insertCell().innerHTML=r[t]}}generateTableHead(t,e){const r=t.createTHead().insertRow();for(const t of e){const e=document.createElement("th"),a=document.createTextNode(t);e.appendChild(a),r.appendChild(e)}}yearSummary(t){if(0!=t%this.frequency)return;const e=this.ipmts.slice(0,t);let r="";const a=Number(t/this.frequency);r+=__("Total after year ","mortgage")+a+": "+this.formatNumber(this.result*this.frequency*a),r+="<br>"+__("Interests paid after year ","mortgage")+a+": "+this.formatNumber(-1*e.reduce(((t,e)=>t+e),0));const s=o.insertRow(-1).insertCell(0);s.innerHTML=r,s.colSpan=5}mortgageTable(t){const e=[],a=["#",__("Installment","mortgage"),__("Interest","mortgage"),__("Principal","mortgage"),__("Balance","mortgage")];this.periods=this.getPeriods(),this.ipmts=this.periods.map((t=>r(this.rate/this.frequency,t,1*this.periods.length,this.amount)));let s=this.amount;for(let t=0;t<this.ipmts.length;t++)s=s-this.result-this.ipmts[t],e.push({"#":t+1,payment:this.formatNumber(this.result),interest:this.formatNumber(-1*this.ipmts[t]),principal:this.formatNumber(this.result+this.ipmts[t]),balance:this.formatNumber(s)});o.innerHTML="",this.generateTableHead(o,a),this.generateTable(o,e)}loanResponse(t){t.parentNode,t.closest(".wp-block-columns")&&(t=t.parentNode.parentNode),this.result=this.payment(),__("Installment","mortgage"),__("Interest","mortgage"),__("Principal","mortgage"),__("Balance","mortgage"),s.className="wp-block-mortgage-result success",s.innerHTML="<p>"+__("Installment","mortgage")+": <b>"+this.formatNumber(this.result)+"</b></p>",n.className="wp-block-mortgage-summary",n.innerHTML=this.summary(),this.showTable&&(this.mortgageTable(t),i.className="wp-block-mortgage-table",i.appendChild(o),t.after(i)),t.after(n),t.after(s),s.scrollIntoView({behavior:"smooth"})}durationResponse(t){t.parentNode,t.closest(".wp-block-columns")&&(t=t.parentNode.parentNode);const e=[__("Duration","mortgage"),__("Installment","mortgage"),__("Interests","mortgage"),__("Total","mortgage")],r=[];[10,15,20,25,30,35,40].forEach((t=>{this.term=t,r.push({years:t+__(" Years","mortgage"),recurring:this.formatNumber(this.payment()),interests:this.formatNumber(this.payment()*this.frequency*t-this.amount),total:this.formatNumber(this.payment()*this.frequency*t),interests:this.formatNumber(this.payment()*this.frequency*t-this.amount)})})),o.innerHTML="",this.generateTableHead(o,e),this.generateTable(o,r),s.className="wp-block-mortgage-table",s.appendChild(o),t.after(s),s.scrollIntoView({behavior:"smooth"})}ratesResponse(t){this.increment=parseFloat(t.querySelector('[name="increment"]').value/100),t.parentNode,t.closest(".wp-block-columns")&&(t=t.parentNode.parentNode);const e=[__("Rate","mortgage"),__("Installment","mortgage"),__("Interests","mortgage"),__("Total","mortgage")],r=[],a=this.rate;[0,1,2,3,4,5,6,7,8].forEach((t=>{this.rate=a+this.increment*t,r.push({rate:(100*this.rate).toFixed(2)+"<small>%</small>",recurring:this.formatNumber(this.payment()),interests:this.formatNumber(12*this.payment()*this.term-this.amount),total:this.formatNumber(12*this.payment()*this.term)})})),o.innerHTML="",this.generateTableHead(o,e),this.generateTable(o,r),s.className="wp-block-mortgage-table",s.appendChild(o),t.after(s),s.scrollIntoView({behavior:"smooth"})}response(t){switch(this.type){case"loan":default:this.loanResponse(t);break;case"rates":this.ratesResponse(t);break;case"duration":this.durationResponse(t)}}getPeriods(){const t=Array.from(Array(this.term*this.frequency).keys());return t.shift(),t.push(t.slice(-1).pop()+1),t}formatNumber(t){return this.currency+t.toLocaleString(a,{minimumFractionDigits:2,maximumFractionDigits:2})}}document.addEventListener("submit",(function(t){const e=t.target;e.className.indexOf("wp-block-mortgage-form")<0||(t.preventDefault(),t.stopPropagation(),e.reportValidity()&&new m(e).response(e))}),!0)})();