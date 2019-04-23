var root = library.getSelector("#root");

// добавляем все компоненты в DOM
render.addToHTML(headerNode, "afterBegin", buttonNodeL);
render.addToHTML(headerNode, "beforeEnd", headerDateNode);
render.addToHTML(headerNode, "beforeEnd", buttonNodeR);
render.addToHTML(calendarNode, "afterBegin", daysOfWeekNode);
render.addToHTML(calendarNode, "beforeEnd", datesNode);
render.addToHTML(calendarNode, "afterBegin", headerNode);

render.addToHTML(root, "AfterBegin", calendarNode);