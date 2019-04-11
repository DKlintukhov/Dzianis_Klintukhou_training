// найти уникальный элемент массива
function findUnique(numbers) {
	if(numbers.length === 1) return numbers[0];

	// сортировка
	numbers.sort((a, b) => a - b);

	let arrLength = numbers.length - 1;

	// проверка последнего элемента
	if(numbers[arrLength] > numbers[arrLength-1]) return numbers[arrLength];

	// индекс с начала массива
	let i = 0;

	// индекс с конца массива
	let k = arrLength;

	for(; i <= arrLength;) {

		// от начала
		if(numbers[i] < numbers[i + 1]) return numbers[i];

		// с конца
		if(numbers[k] < numbers[k - 1]) return numbers[k];

		else {

			// шаги
			i += 2;
			k -= 2;
		}
	}
}