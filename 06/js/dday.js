var now = new Date();
var firstDay = new Date("2022-04-02");

var toNow = new.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;

var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = passedDay + "일";

var future = toFirst + 100 * (1000 * 60 * 60 * 24);
var someday = newDate(future);

var year = someday.getFullYear();
var month = someday.getMonth();
var date = somedat.getDate();

document.querySelector("#date100").innerText = year + "년 " + month + "월 " + date + "일 ";