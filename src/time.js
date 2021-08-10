"use strict"

export default function timeDate() {

  let d = new Date();

  let time = {
    day: d.getDate(),
    month: d.getMonth()+1,
    year: d.getFullYear(),
    hours: d.getHours(),
    minuts: d.getMinutes()
  }

  for (let prop in time) {
    if (time[prop] < 10) {
      time[prop] = '0' + time[prop];
    }
  }

  return (`${time['day']}.${time['month']}.${time['year']} ${time['hours']}:${time['minuts']}`);

}
