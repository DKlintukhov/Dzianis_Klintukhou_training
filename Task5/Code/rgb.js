// проверка диапозона
function isCorrectRange(num) {
	if(num > 255) {
		num = 255;
		return num;
	} 
	else if(num < 0) {
		num = 0;
		return num;
	} 
	else {
		return num;
	}
}

// 255.toString(16) == 0, по условию нужно 00
function isSingle(num) {

	// проверка на длину строки, если 1, то конкатенирием 0
	if(num.toString(16).length === 1) 
		return (0 + num.toString(16)).toUpperCase();
	else
		return num.toString(16).toUpperCase();
}

function rgb(r, g, b){
	// проверка на диапозон значений
	r = isCorrectRange(r);
	g = isCorrectRange(g);
	b = isCorrectRange(b);

	// возвращаем в верхнем регистре
	return isSingle(r) + isSingle(g) + isSingle(b);
}