// проврка на букву в верхнем регистре
function isLetterUpperCase(letter) {
	if(letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) return true;
	else return false;
}

// проврка на букву в нижнем регистре
function isLetterLowerCase(letter) {
	if(letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) return true;
	else return false;
}

function toCamelCase(str){
	if(str.length === 0) return "";
	
	// добавление 0-терминатора для отслеживания конца строки
	let strWithTerminator = str + 0;
	let resStr = " ";

	// последнего послдеднего вырезанного символа 
	let index = 0;

	for (let i = 0; i < strWithTerminator.length; i++) {

		// проверка на символ и на регистр в Unicode
		if(isLetterUpperCase(strWithTerminator.charAt(i)) || isLetterLowerCase(strWithTerminator.charAt(i))) {

			// если не символ, то продолжить
			continue;

		} else {

			// вырезаем часть строки до символа
			resStr += strWithTerminator.substr(index, i - index);

			// прибавляем к строке букву в верхнем регистре
			resStr += strWithTerminator.charAt(i + 1).toUpperCase();
			index = i + 2;
		}
	}
	return resStr.trim();
}
