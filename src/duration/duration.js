import Calculator from './calculator.js'

document.addEventListener('submit', handleSubmitEvents, true) // useCapture=false to ensure we bubble upwards (and thus can cancel propagation)

function handleSubmitEvents (e) {
  const formEl = e.target
  if (formEl.className.indexOf('wp-block-mortgage-form') < 0) {
	 return
  }
  // always prevent default (because regular submit doesn't work for Formello)
  e.preventDefault()
  e.stopPropagation()

  if(formEl.reportValidity()){
  	let calculator = new Calculator( formEl )
  	calculator.response(formEl)
  }

}
