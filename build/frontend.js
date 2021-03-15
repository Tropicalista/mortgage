/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import { pmt, ppmt, ipmt, fv } from 'financial'
var result = document.createElement('p');
var tblDiv = document.createElement('div');
document.addEventListener('submit', handleSubmitEvents, true); // useCapture=false to ensure we bubble upwards (and thus can cancel propagation)

function handleSubmitEvents(e) {
  var formEl = e.target;

  if (formEl.className.indexOf('wp-block-mortgage-form') < 0) {
    return;
  } // always prevent default (because regular submit doesn't work for Formello)


  e.preventDefault();
  e.stopPropagation();

  if (formEl.checkValidity()) {
    calculate(formEl);
  } else {
    response('Please fill out the form!', 'error', formEl);
  }
}

function response(message, type, elm) {
  result.innerHTML = message;
  result.className = 'wp-block-mortgage-result ' + type;

  if ('wp-block-column' === elm.parentNode.className) {
    elm = elm.parentNode.parentNode.parentNode;
  }

  elm.appendChild(result);
  elm.appendChild(tblDiv);
}

function calculate(formEl) {
  var amount = parseFloat(formEl.querySelector('[name="amount"]').value);
  var rate = parseFloat(formEl.querySelector('[name="rate"]').value / 100);
  var term = parseFloat(formEl.querySelector('[name="term"]').value);
  var frequency = parseFloat(formEl.querySelector('[name="frequency"]').value);
  var mortgageTable = amort(amount, rate, term, frequency, formEl); //response( payment, 'success', formEl );
  //result.appendChild( mortgageTable )
}
/**
 * Amort function:
 * Calculates the necessary elements of the loan using the supplied user input
 * and then displays each months updated amortization schedule on the page
*/


function amort(balance, interestRate, terms, frequency, formEl) {
  var settings = formEl.dataset; //Calculate the per month interest rate

  var monthlyRate = interestRate / frequency; //Calculate the payment

  var payment = balance * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -terms * frequency))); //var payment = pmt( interestRate/frequency, frequency*terms, balance ) * -1;
  //begin building the return string for the display of the amort table

  var resultTable = "Loan amount: " + settings.currency + balance.toFixed(2) + "<br />" + "Interest rate: " + (interestRate * 100).toFixed(2) + "%<br />" + "Number of payments: " + terms * frequency + "<br />" + "Recurring payment: " + settings.currency + payment.toFixed(2) + "<br />" + "Total paid: " + settings.currency + (payment * terms * frequency).toFixed(2) + "<br /><br />"; //add header row for table to return string

  resultTable += "<table border='1'><tr><th>Month #</th><th>Payment</th>" + "<th>Interest</th><th>Principal</th><th>Balance</th>";
  var totalPayments = terms * frequency;
  /**
   * Loop that calculates the monthly Loan amortization amounts then adds 
   * them to the return string 
   */

  for (var count = 0; count < totalPayments; ++count) {
    //in-loop interest amount holder
    var interest = 0; //in-loop monthly principal amount holder

    var monthlyPrincipal = 0; //calc the in-loop interest amount and display

    interest = balance * monthlyRate; //calc the in-loop monthly principal and display

    monthlyPrincipal = payment - interest; //update the balance for each loop iteration

    balance = balance - monthlyPrincipal; //start a new table row on each loop iteration

    resultTable += "<tr align=center>"; //display the month number in col 1 using the loop count variable

    resultTable += "<td>" + (count + 1) + "</td>";
    resultTable += "<td>" + settings.currency + payment.toFixed(2) + "</td>";
    resultTable += "<td>" + settings.currency + interest.toFixed(2) + "</td>";
    resultTable += "<td>" + settings.currency + monthlyPrincipal.toFixed(2) + "</td>"; //code for displaying in loop balance

    resultTable += "<td>" + settings.currency + balance.toFixed(2) + "</td>"; //end the table row on each iteration of the loop	

    resultTable += "</tr>";
  } //Final piece added to return string before returning it - closes the table


  resultTable += "</table>";
  response('Recurring payments: ' + settings.currency + payment.toFixed(2), 'success', formEl);
  tblDiv.innerHTML = resultTable;
}

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map