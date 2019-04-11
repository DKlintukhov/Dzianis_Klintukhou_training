// 255.toString(16) == 0, по условию нужно 00
function isSingle(num) {

	// проверка на длину строки, если 1, то конкатенирием 0
	if(num.toString(16).length === 1) return (0 + num.toString(16)).toUpperCase();
	return num.toString(16);
}

function rgb(r, g, b){
	// проверка на диапозон значений
	if(r > 255) r = 255;
	if(g > 255) g = 255;
	if(b > 255) b = 255;
	if(r < 0) r = 0;
	if(g < 0) g = 0;
	if(b < 0) b = 0;

	// возвращаем в верхнем регистре
	return isSingle(r).toUpperCase() + 
	isSingle(g).toUpperCase() + 
	isSingle(b).toUpperCase();
}