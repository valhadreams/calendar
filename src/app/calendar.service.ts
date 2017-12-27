import { Injectable } from '@angular/core';

export class Day {
  constructor(private _date : Date, private _events : any[]){}

  get date() : Date {
    return this._date;
  }

  get events() : any[] {
    return this._events;
  }

  set date(date : Date) {
    this._date = date;
  }

  set events(events : any[]) {
    this._events = events;
  }
}

@Injectable()
export class CalendarService {
  dayOfWeeks = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

  constructor() { }

  getDayOfWeeks(){
    return this.dayOfWeeks;
  }

  getEventOfDay(year : number, month: number, date: number){

  }

  setEventOfDay(year : number, month: number, date: number){

  }
}
