// сумма всех чисел кратных 3 или 5
function solution(number){
	let sum = 0;
  for (let i = 0; i < number; i++) {

  	// проверка на кратность, если true, то суммируем
  	if((i % 3 == 0) || (i % 5 == 0)) sum += i;
  }
  return sum;
}
