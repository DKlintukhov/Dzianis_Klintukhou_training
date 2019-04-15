// разбивка строки по именам 
function list(names) {

    // если 1 элемент, то возвращаем
    if (names.length === 1) {
        return names[0].name;
    }

    // если 0, элементов, то возвращаем пустую строку
    if (names.length === 0) {
        return "";
    }

    // начальная позиция с первым именем
    let resStr = names[0].name;

    for (let i = 1; i < names.length; i++) {

        // если последний элемент, то перед именем прибавляем &
        if (i === names.length - 1) {
            resStr += " & " + names[i].name;

        // иначе разделитель между именами
        } else {
            resStr += ", " + names[i].name;
        }
    }
    return resStr.trim();
}