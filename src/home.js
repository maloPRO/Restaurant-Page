const slogan = document.createElement('p');
slogan.textContent = 'Bienvenidos!';
slogan.setAttribute('id', 'slogan');
section.appendChild(slogan);

//opening hours
const workingHours = document.createElement('div');
workingHours.setAttribute('id', 'workingHours');
section.appendChild(workingHours);

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
time1.textContent = '11 A.M - 10 P.M';
weekends.appendChild(time1);

workingHours.appendChild(weekends);


home.addEventListener('click', () => {
  removeAllChildNodes(section);
  section.appendChild(slogan);
  section.appendChild(workingHours)
  
});