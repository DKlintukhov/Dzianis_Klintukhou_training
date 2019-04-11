// сумма 2-ичных чисел в 10-ичной
function toDec(num) {
	let res = 0;
	let numLength = num.length - 1;

	for (let i = 0; i < num.length; i++) {
		// к результату прибавляем число умноженное на 2 в степени количества длины строки
		res += num[i] * (2 ** numLength);

		// инкрементируем длину
		numLength -= 1;
	}
	return res;
}

function calculate(num1,num2){
	return toDec(num1) + toDec(num2);
}