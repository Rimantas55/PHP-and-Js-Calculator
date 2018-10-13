console.log('Calculator started');

var input_a = document.getElementById('number_a');
var input_b = document.getElementById('number_b');
var result = document.getElementById('result');



function sum() {
	var a = parseInt(input_a.value);
	var b = parseInt(input_b.value);

	if (a > 100 || b > 100){
		alert("Number A or Number B is above 100");
		input_a.style.color = 'red';
		input_b.style.color = 'red';
	} else {

		var sum = a + b;
		// console.log(sum);
		
		var eur = convert_to_eur(sum);
		result.innerHTML = sum + ' (Eur: ' + eur +")";
		input_a.style.background = "green";
		input_b.style.background = "green";
	}
}

function empty() {
	result.innerHTML = 'X';
	input_a.value = 0;
	input_b.value = 0;
}

function convert_to_eur(amount) {
	var result = amount / 3.4528;
	result = Math.round(result);

	if (amount < 100) { //is euru atimame 1 vienteta
		result--;
	}

	return result;

	
}