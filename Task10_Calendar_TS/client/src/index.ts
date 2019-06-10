import './css/style.css'
import getCalendarController from './core/controllers/calendar.controller';
import getHeaderController from './core/controllers/header.controller';
import getDatesController from './core/controllers/dates.controller';
import getWeekController from './core/controllers/week.controller';

const run = () => {
    getCalendarController.showCalendar();
    getHeaderController.showHeaderDate();
    getWeekController.showWeek();
    getDatesController.showDates();
}

document.addEventListener('DOMContentLoaded', run);