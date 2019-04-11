// перевод из 2 системы в 10
function binToDec(bin){
  let res = 0;
	let binLength = bin.length - 1;
	for (let i = 0; i < bin.length; i++) {

		// к результату прибавляем число умноженное на 2 в степени количества длины строки
		res += bin[i] * (2 ** binLength);
		binLength -= 1;
	}
	return res;
}