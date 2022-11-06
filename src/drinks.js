import { home, specials, lunch, dinner, drinks } from "./home-page";
import { section } from "./home-page";
import { removeAllChildNodes } from "./clear-section";

export const drinksMenu = function () {
  drinks.addEventListener('click', () => {

    removeAllChildNodes(section);

    home.style = 'background-color: #fffada; color: #222;';
    specials.style = 'background-color: #fffada; color: #222;'
    lunch.style = 'background-color: #fffada; color: #222;';
    dinner.style = 'background-color: #fffada; color: #222;';
    drinks.style = 'background-color: #222; color: #fffada;';

    const drinksTab = document.createElement('div');
    drinksTab.setAttribute('id', 'drinksTab');
    section.appendChild(drinksTab);

    //lunch section header
    const tabSectionHeader = document.createElement('div');
    tabSectionHeader.setAttribute('id', 'tabSectionHeader');
    drinksTab.appendChild(tabSectionHeader);

    const title = document.createElement('h3');
    title.textContent = 'DRINKS';
    tabSectionHeader.appendChild(title);

    const tabHours = document.createElement('p');
    tabHours.textContent = 'SERVED FROM 4 PM';
    tabSectionHeader.appendChild(tabHours);

    const drinksContent = document.createElement('div');
    drinksContent.setAttribute('id', 'drinksContent');
    drinksTab.appendChild(drinksContent);

    //Menu item one
    const item1 = document.createElement('div');
    item1.setAttribute('class', 'items');
    drinksContent.appendChild(item1);

    const itemTitle1 = document.createElement('div');
    itemTitle1.setAttribute('class', 'itemTitle');
    itemTitle1.textContent = "White Wines";
    item1.appendChild(itemTitle1);

    const listOneItem1 = document.createElement('p');
    listOneItem1.setAttribute('class', 'listItem');
    listOneItem1.textContent = 'Cabernet';
    item1.appendChild(listOneItem1);

    const listOneItem2 = document.createElement('p');
    listOneItem2.setAttribute('class', 'listItem');
    listOneItem2.textContent = 'Pinot Grigio';
    item1.appendChild(listOneItem2);

    const listOneItem3 = document.createElement('p');
    listOneItem3.setAttribute('class', 'listItem');
    listOneItem3.textContent = 'Vinho Verde';
    item1.appendChild(listOneItem3);

    //Menu item 2
    const item2 = document.createElement('div');
    item2.setAttribute('class', 'items');
    drinksContent.appendChild(item2);

    const itemTitle2 = document.createElement('div');
    itemTitle2.setAttribute('class', 'itemTitle');
    itemTitle2.textContent = "Red Wines";
    item2.appendChild(itemTitle2);

    const listTwoItem1 = document.createElement('p');
    listTwoItem1.setAttribute('class', 'listItem');
    listTwoItem1.textContent = 'Cabernet Sauvignon';
    item2.appendChild(listTwoItem1);

    const listTwoItem2 = document.createElement('p');
    listTwoItem2.setAttribute('class', 'listItem');
    listTwoItem2.textContent = 'Carménère Blend';
    item2.appendChild(listTwoItem2);

    const listTwoItem3 = document.createElement('p');
    listTwoItem3.setAttribute('class', 'listItem');
    listTwoItem3.textContent = 'Pinot Noir';
    item2.appendChild(listTwoItem3);

    const listTwoItem4 = document.createElement('p');
    listTwoItem4.setAttribute('class', 'listItem');
    listTwoItem4.textContent = 'Malbec';
    item2.appendChild(listTwoItem4);

    

    //Menu item 3
    const item3 = document.createElement('div');
    item3.setAttribute('class', 'items');
    drinksContent.appendChild(item3);

    const itemTitle3 = document.createElement('div');
    itemTitle3.setAttribute('class', 'itemTitle');
    itemTitle3.textContent = "Bottled Beers";
    item3.appendChild(itemTitle3);

    const listThreeItem1 = document.createElement('p');
    listThreeItem1.setAttribute('class', 'listItem');
    listThreeItem1.textContent = "Guineess Extra Stout";
    item3.appendChild(listThreeItem1);

    const listThreeItem2 = document.createElement('p');
    listThreeItem2.setAttribute('class', 'listItem');
    listThreeItem2.textContent = "Ventura Light";
    item3.appendChild(listThreeItem2);
    
    const listThreeItem3 = document.createElement('p');
    listThreeItem3.setAttribute('class', 'listItem');
    listThreeItem3.textContent = "Tusker Lager";
    item3.appendChild(listThreeItem3);

    const listThreeItem4 = document.createElement('p');
    listThreeItem4.setAttribute('class', 'listItem');
    listThreeItem4.textContent = "Amstel";
    item3.appendChild(listThreeItem4);

    //Menu item 4
    const item4 = document.createElement('div');
    item4.setAttribute('class', 'items');
    drinksContent.appendChild(item4);

    const itemTitle4 = document.createElement('div');
    itemTitle4.setAttribute('class', 'itemTitle');
    itemTitle4.textContent = "Scotch & whiskey";
    item4.appendChild(itemTitle4);

    const listFourItem1 = document.createElement('p');
    listFourItem1.setAttribute('class', 'listItem');
    listFourItem1.textContent = 'Johnnie Walker High Rye Blended Scotch Whisky';
    item4.appendChild(listFourItem1);

    const listFourItem2 = document.createElement('p');
    listFourItem2.setAttribute('class', 'listItem');
    listFourItem2.textContent = 'Glenfiddich 12-Year-Old Single Malt'
    item4.appendChild(listFourItem2);


    const listFourItem3 = document.createElement('p');
    listFourItem3.setAttribute('class', 'listItem');
    listFourItem3.textContent = 'Compass Box Artist Blend Scotch Whisky';
    item4.appendChild(listFourItem3);


    const listFourItem4 = document.createElement('p');
    listFourItem4.setAttribute('class', 'listItem');
    listFourItem4.textContent = 'Deanston Virgin Oak Single Malt Whisky';
    item4.appendChild(listFourItem4);



  })
}