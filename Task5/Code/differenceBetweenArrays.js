function isAbsent(num, arr) {
    if (arr.indexOf(num) !== -1) {
        return true;
    }
    else {
        return false;
    }
}

// разница между массивами
function array_diff(a, b) {
    if (a.length === 0) {
        return [];
    }

    if (b.length === 0) {
        return a;
    }

    // массив уникальных значений
    let arrUnique = [];

    for (let i = 0; i < a.length; i++) {

        // если в массиве b есть элемент из массива a то push
        if (!(isAbsent(a[i], b))) {

            arrUnique.push(a[i]);
        }
        return arrUnique;
    }
}