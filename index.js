const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');
const form = document.getElementById('form');
const button = document.getElementById('sumar');
const total = document.getElementById('total');

let num1;
let num2;
let suma;
let checkInput1 = false;
let checkInput2 = false;

input1.addEventListener('change', function () {
	num1 = parseInt(document.getElementById('number1').value);
	checkInput1 = true;
});

input2.addEventListener('change', function () {
	num2 = parseInt(document.getElementById('number2').value);
	checkInput2 = true;
});

button.addEventListener('click', function () {
	if (checkInput1 == false || checkInput2 == false) {
		alert('Ingrese los numeros a sumar');
		total.innerText = 0;
	} else {
		if (isNaN(num1) === true || isNaN(num2) === true) {
			alert('Ingreso un valor invalido, solo se aceptan numeros');
		} else {
			suma = num1 + num2;
			total.innerText = suma;
		}
	}
});
