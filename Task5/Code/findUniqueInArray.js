// найти уникальный элемент массива
function findUnique(numbers) {
    if (numbers.length === 1) {
        return numbers[0];
    }

    numbers.sort((a, b) => a - b);

    let arrLength = numbers.length - 1;

    // проверка последнего элемента
    if (numbers[arrLength] > numbers[arrLength - 1]) {
        return numbers[arrLength];
    }

    // i с начала массива, k с конца массива
    for (let i = 0, k = arrLength; i <= arrLength; i += 2, k -= 2) {

        // от начала
        if (numbers[i] < numbers[i + 1]) {
            return numbers[i];
        }

        // с конца
        if (numbers[k] !== numbers[k - 1]) {
            return numbers[k];
        }
    }
}