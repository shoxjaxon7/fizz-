//
let elMathForm = document.querySelector('.math-form');
let elValueInput = elMathForm.querySelector('.value-input');
let elResult = document.querySelector('.result');

elMathForm.addEventListener('submit', function (evt){
  evt.preventDefault();

  var number = parseFloat(elValueInput.value.trim(), 10);


  if (number%3 === 0 && number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `FizzBuzz`;
  }
  else if (number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Buzz`;
  }
  else if (number%3 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Fizz`;
  }
  else {
    elResult.classList.remove('d-none');
    elResult.textContent = `${number}`;
  };


});
