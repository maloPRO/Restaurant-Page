import { home, specials, lunch, dinner,drinks } from "./home-page";
import { section } from "./home-page";
import { removeAllChildNodes } from "./clear-section";

export const specialsMenu = function () {
  specials.addEventListener('click', () => {
    removeAllChildNodes(section);

    home.style = 'background-color: #fffada; color: #222;';
    specials.style = 'background-color: #222; color: #fffada;'
    lunch.style = 'background-color: #fffada; color: #222;';
    dinner.style = 'background-color: #fffada; color: #222;';
    drinks.style = 'background-color: #fffada; color: #222;';
    

    const specialsTab = document.createElement('div');
    specialsTab.setAttribute('id', 'specialsTab')
    section.appendChild(specialsTab);

    //Specials header
    const tabSectionHeader = document.createElement('div');
    tabSectionHeader.setAttribute('id', 'tabSectionHeader');
    specialsTab.appendChild(tabSectionHeader);

    const title = document.createElement('h3');
    title.textContent = "TODAY'S SPECICALS";
    tabSectionHeader.appendChild(title);

    const tabHours = document.createElement('p');
    tabHours.textContent = 'All Day Every Day';
    tabSectionHeader.appendChild(tabHours);

    //specials content container
    const specialsContainer = document.createElement('div');
    specialsContainer.setAttribute('id', 'specialsContainer');
    specialsTab.appendChild(specialsContainer);
    
    //First special of the day
    const specialsOne = document.createElement('div');
    specialsOne.setAttribute('class', 'specialsNum');
    specialsOne.setAttribute('id', 'specialsOne');
    specialsContainer.appendChild(specialsOne);

    const specialsOneContent1 = document.createElement('p');
    specialsOneContent1.textContent = 'Burger of the day';
    specialsOne.appendChild(specialsOneContent1);

    const specialsOneContent2 = document.createElement('p');
    specialsOneContent2.textContent = 'Say cheese burger';
    specialsOne.appendChild(specialsOneContent2);

    const specialsOnePrice = document.createElement('p');
    specialsOnePrice.textContent = '$ 4.95';
    specialsOne.appendChild(specialsOnePrice);

   //Second special of the day
    const specialsTwo = document.createElement('div');
    specialsTwo.setAttribute('class', 'specialsNum');
    specialsTwo.setAttribute('id', 'specialsTwo');
    specialsContainer.appendChild(specialsTwo);

    const specialsTwoContent1 = document.createElement('p');
    specialsTwoContent1.textContent = 'Soup of the Day';
    specialsTwo.appendChild(specialsTwoContent1);

    const specialsTwoContent2 = document.createElement('p');
    specialsTwoContent2.textContent = 'Black Bean(with creame fraiche and cilantro)';
    specialsTwo.appendChild(specialsTwoContent2);

    const specialsTwoPrice = document.createElement('p');
    specialsTwoPrice.textContent = '$ 3.99';
    specialsTwo.appendChild(specialsTwoPrice);

    //Third special
    const specialsThree = document.createElement('div');
    specialsThree.setAttribute('class', 'specialsNum');
    specialsThree.setAttribute('id', 'specialsThree');
    specialsContainer.appendChild(specialsThree);

    const specialsThreeContent1 = document.createElement('p');
    specialsThreeContent1.textContent = 'Drink of the Day';
    specialsThree.appendChild(specialsThreeContent1);

    const specialsThreeContent2 = document.createElement('p');
    specialsThreeContent2.textContent = 'Holy vodka';
    specialsThree.appendChild(specialsThreeContent2);

    const specialsThreePrice = document.createElement('p');
    specialsThreePrice.textContent = '$ 1.99';
    specialsThree.appendChild(specialsThreePrice);



  })
}