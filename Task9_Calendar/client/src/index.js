var root = document.querySelector("#root");

calendarController.setView(calendarView);
calendarController.showCalendar();

headerDateController.setModel(dateModel);
headerDateController.setView(headerDateView);
headerDateController.showHeaderDate();
headerDateController.setChild(datesController);

weekController.setView(weekView);
weekController.setModel(dateModel);
weekController.showWeek();

datesController.setModel(dateModel);
datesController.setView(datesView);
datesController.setChild(weatherDialogBoxController);
datesController.showDates();

weatherDialogBoxController.setModel(dateModel);
weatherDialogBoxController.setView(weatherDialogBoxView);
weatherDialogBoxController.showWeatherDialogBox();
weatherDialogBoxController.setChild(weatherController);

weatherController.setModel(weatherModel);
weatherController.setView(weatherView);
weatherController.showWeatherData();


