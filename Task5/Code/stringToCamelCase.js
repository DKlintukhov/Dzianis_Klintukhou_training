// проврка на букву в верхнем регистре
function isLetterUpperCase(letter) {
    let char = letter.charCodeAt();
    if (char >= 65 && char <= 90) {
        return true;
    }
    else {
        return false;
    }
}

// проврка на букву в нижнем регистре
function isLetterLowerCase(letter) {
    let char = letter.charCodeAt();
    if (char >= 97 && char <= 122) {
        return true;
    }
    else {
        return false;
    }
}

function toCamelCase(str) {
    if (str.length === 0) {
        return "";
    }

    // добавление 0-терминатора для отслеживания конца строки
    let strWithTerminator = str + 0;
    let resStr = " ";

    // index для послдеднего вырезанного символа 
    for (let i = 0, index = 0; i < strWithTerminator.length; i++) {

        let char = strWithTerminator.charAt(i);

        // проверка на символ и на регистр в Unicode
        if (!(isLetterUpperCase(char) || isLetterLowerCase(char))) {

            // вырезаем часть строки до символа
            resStr += strWithTerminator.substr(index, i - index);

            // прибавляем к строке букву в верхнем регистре
            resStr += strWithTerminator.charAt(i + 1).toUpperCase();
            index = i + 2;
        }
    }
    return resStr.trim();
}
