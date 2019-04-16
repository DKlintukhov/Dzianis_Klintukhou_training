// сумма 2-ичных чисел в 10-ичной
function toDec(num) {
    let res = 0;

    for (let i = 0, numLength = num.length - 1; i < num.length; i++, numLength--) {
        
        // к результату прибавляем число умноженное на 2 в степени количества длины строки
        res += num[i] * (2 ** numLength);
    }
    return res;
}

function calculate(num1, num2) {
    return toDec(num1) + toDec(num2);
}