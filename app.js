//Date calculation variables

const startDay = Math.ceil(new Date("09/01/2022").getTime()/(1000 * 60 * 60 * 24));
const endDay = Math.ceil(new Date("04/28/2023").getTime()/(1000 * 60 * 60 * 24));
const nowDay = Math.ceil(new Date().getTime()/(1000 * 60 * 60 * 24));
const totalDays = endDay - startDay;
const daysLeft = endDay - nowDay;
const daysPassed  = nowDay - startDay;
const percentageLeft = (totalDays /100) * daysLeft;

//DOM variables

const totalDaysEl = document.getElementById("total-days");
const daysSinceEl = document.getElementById("days-since");
const daysLeftEl = document.getElementById("days-left");
const bar = document.getElementById("bar");

//DOM manipulation

totalDaysEl.textContent = `Total days: ${totalDays}`;
daysSinceEl.textContent = `Days since start: ${daysPassed}`;
daysLeftEl.textContent = `Days until finished: ${daysLeft}`;
bar.style.setProperty("--percentage-left", percentageLeft + "%")