import { removeAllChildNodes } from './clear-section';
import Icon from './images/chef-icon.svg';
export const content = document.getElementById('content');

const title = document.createElement('div');
title.setAttribute('id', 'title');
title.textContent = "URBANDINE";

const myIcon = new Image();
myIcon.src = Icon;
title.appendChild(myIcon);
content.appendChild(title);

const nav = document.createElement('div');
nav.setAttribute('id', 'nav');
content.appendChild(nav);

export const home = document.createElement('div');
export const specials = document.createElement('div');
export const lunch = document.createElement('div');
export const dinner = document.createElement('div');
export const drinks = document.createElement('div');

home.setAttribute('class','navItem');
specials.setAttribute('class', 'navItem');
lunch.setAttribute('class', 'navItem');
dinner.setAttribute('class', 'navItem');
drinks.setAttribute('class', 'navItem');

home.textContent = 'Home'
specials.textContent = 'Specials';
lunch.textContent = 'Lunch';
dinner.textContent = 'Dinner';
drinks.textContent = 'Drinks';

nav.appendChild(home);
nav.appendChild(specials);
nav.appendChild(lunch);
nav.appendChild(dinner);
nav.appendChild(drinks);

export const section = document.createElement('div');
section.setAttribute('id', 'section');
content.appendChild(section);

//welcome
const homeTab = document.createElement('div');
homeTab.setAttribute('id', 'homeTab');
section.appendChild(homeTab);

const slogan = document.createElement('p');
slogan.textContent = 'Eat Drink Enjoy';
slogan.setAttribute('id', 'slogan');
homeTab.appendChild(slogan);

//opening hours
const workingHours = document.createElement('div');
workingHours.setAttribute('id', 'workingHours');
homeTab.appendChild(workingHours);

const hoursTitle = document.createElement('div');
hoursTitle.setAttribute('id', 'hoursTitle');
hoursTitle.textContent = 'Opening hours';
workingHours.appendChild(hoursTitle);
 
//weekdays
const weekdays = document.createElement('div');
weekdays.setAttribute('id', 'weekdays');
weekdays.setAttribute('class', 'week-days');

const days = document.createElement('p');
days.setAttribute('class', 'days');
days.textContent = "Weekdays";
weekdays.appendChild(days);

const time = document.createElement('p');
time.setAttribute('class', 'time');
time.textContent = '11 A.M - 10 P.M';
weekdays.appendChild(time);

workingHours.appendChild(weekdays);

//weekends
const weekends = document.createElement('div');
weekends.setAttribute('id', 'weekends');
weekends.setAttribute('class', 'week-days');

const days1 = document.createElement('p');
days1.setAttribute('class', 'days');
days1.textContent = "Weekends";
weekends.appendChild(days1);

const time1 = document.createElement('p');
time1.setAttribute('class', 'time');
time1.textContent = '9 A.M - 11 P.M';
weekends.appendChild(time1);

workingHours.appendChild(weekends);

//Order online

const orderSection = document.createElement('div');
orderSection.setAttribute('id', 'orderSection');
homeTab.appendChild(orderSection);

const orderButton = document.createElement('button');
orderButton.setAttribute('id', 'orderButton');
orderButton.textContent = 'Order Online';
orderSection.appendChild(orderButton);

const reserve = document.createElement('button');
reserve.setAttribute('id', 'reserve');
reserve.textContent = 'Reserve Table';
orderSection.appendChild(reserve);

//Adress
const adress = document.createElement('div');
adress.setAttribute('id', 'adress');
adress.textContent = '4348 TYCHO STATION, TA 90029 — (323) 664-3663';
homeTab.appendChild(adress);

home.style = 'background-color: #222; color: #fffada;';

home.addEventListener('click', () => {
  removeAllChildNodes(section);
  section.appendChild(homeTab);

  home.style = 'background-color: #222; color: #fffada;';
  specials.style = 'background-color: #fffada; color: #222;'
  lunch.style = 'background-color: #fffada; color: #222;';
  dinner.style = 'background-color: #fffada; color: #222;';
  drinks.style = 'background-color: #fffada; color: #222;';
  
});








