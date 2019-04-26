var root = library.getSelector("#root");

// добавляем все компоненты в DOM
calendarComponent.insertAdjacentElement("afterbegin", dialogBoxComponent);
dialogBoxComponent.insertAdjacentElement("beforeEnd", buttonCloseComponent);
calendarHeaderComponent.insertAdjacentElement("afterBegin", buttonNextMonthComponent);
calendarHeaderComponent.insertAdjacentElement("afterBegin", headerDateComponent);
calendarHeaderComponent.insertAdjacentElement("afterBegin", buttonPrevMonthComponent);
calendarComponent.insertAdjacentElement("afterBegin", daysOfWeekComponent);
calendarComponent.insertAdjacentElement("beforeEnd", datesComponent);
calendarComponent.insertAdjacentElement("afterBegin", calendarHeaderComponent);

root.insertAdjacentElement("AfterBegin", calendarComponent);