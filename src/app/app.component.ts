import { Component } from '@angular/core';
import {CalendarService, Day} from './calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalendarService]
})
export class AppComponent {

  currentDate : Date;
  dayOfWeeks;
  days : Array<Day>;

  constructor(private calendarService : CalendarService){
    this.dayOfWeeks = this.calendarService.getDayOfWeeks();
    this.currentDate = new Date();
    const thisYear = this.currentDate.getFullYear();
    const thisMonth = this.currentDate.getMonth();

    this.setMonthData(thisYear, thisMonth);
  }

  setMonthData(year : number, month : number){
    this.days = new Array();
    let lastDateOfMonth = new Date(year, month + 1, 0);

    const lastDay = lastDateOfMonth.getDate();

    for(let i = 0; i < lastDay; i ++ ) {

      const date = new Date(year, month, i + 1);
      const events = ['weight', 'running'];
      const dayObj = new Day(date, events);
      if(i === 0) {
        for (let j = 0; j < dayObj.date.getDay(); j++) {
          this.days.push(new Day(null, []));
        }
      }
      this.days.push(dayObj);
      if(i === lastDay - 1) {
        for (let j = dayObj.date.getDay() + 1; j < this.dayOfWeeks.length; j++) {
          this.days.push(new Day(null, []));
        }
      }
    }
  }

  clickPrevBtn(){
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
    this.setMonthData(this.currentDate.getFullYear(), this.currentDate.getMonth());
  }

  clickNextBtn(){
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
    this.setMonthData(this.currentDate.getFullYear(), this.currentDate.getMonth());
  }

  clickAddEvent(day : Object){
    console.log(day);
  }

  clickEditEvent(day : Object){
    console.log(day);
  }
}
