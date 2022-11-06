import { home, specials, lunch, dinner, drinks } from "./home-page";
import { section } from "./home-page";
import { removeAllChildNodes } from "./clear-section";

export const lunchMenu = function () {
  lunch.addEventListener('click', () => {

    removeAllChildNodes(section);

    home.style = 'background-color: #fffada; color: #222;';
    specials.style = 'background-color: #fffada; color: #222;'
    lunch.style = 'background-color: #111; color: #fffada;';
    dinner.style = 'background-color: #fffada; color: #222;';
    drinks.style = 'background-color: #fffada; color: #222;';

    const lunchTab = document.createElement('div');
    lunchTab.setAttribute('id', 'lunchTab');
    section.appendChild(lunchTab);

    //lunch section header
    const tabSectionHeader = document.createElement('div');
    tabSectionHeader.setAttribute('id', 'tabSectionHeader');
    lunchTab.appendChild(tabSectionHeader);

    const title = document.createElement('h3');
    title.textContent = 'LUNCH';
    tabSectionHeader.appendChild(title);

    const tabHours = document.createElement('p');
    tabHours.textContent = 'SERVED FROM 11 AM TO 4 PM';
    tabSectionHeader.appendChild(tabHours);

    const lunchContent = document.createElement('div');
    lunchContent.setAttribute('id', 'lunchContent');
    lunchTab.appendChild(lunchContent);

    //Menu item one
    const item1 = document.createElement('div');
    item1.setAttribute('class', 'items');
    lunchContent.appendChild(item1);

    const itemTitle1 = document.createElement('div');
    itemTitle1.setAttribute('class', 'itemTitle');
    itemTitle1.textContent = "Mac 'n' Cheese";
    item1.appendChild(itemTitle1);

    const itemContent1 = document.createElement('p');
    itemContent1.setAttribute('class', 'itemContent');
    itemContent1.textContent = 'w/extra sharp cheddar & garlicky cream sauce';
    item1.appendChild(itemContent1);

    //Menu item 2
    const item2 = document.createElement('div');
    item2.setAttribute('class', 'items');
    lunchContent.appendChild(item2);

    const itemTitle2 = document.createElement('div');
    itemTitle2.setAttribute('class', 'itemTitle');
    itemTitle2.textContent = "Bruschetta";
    item2.appendChild(itemTitle2);

    const itemContent2 = document.createElement('p');
    itemContent2.setAttribute('class', 'itemContent');
    itemContent2.textContent = 'our classic w/cherry tomatoes, buffalo mozzarella & basil on a toasted baguette, topped with kalamata olives';
    item2.appendChild(itemContent2);

    //Menu item 3
    const item3 = document.createElement('div');
    item3.setAttribute('class', 'items');
    lunchContent.appendChild(item3);

    const itemTitle3 = document.createElement('div');
    itemTitle3.setAttribute('class', 'itemTitle');
    itemTitle3.textContent = "Java Calamari";
    item3.appendChild(itemTitle3);

    const itemContent3 = document.createElement('p');
    itemContent3.setAttribute('class', 'itemContent');
    itemContent3.textContent = "fried calamari tossed w/malt vinegar, cracked red pepper & herbs, served with the Kitchen tartar sauce";
    item3.appendChild(itemContent3);

    //Menu item 4
    const item4 = document.createElement('div');
    item4.setAttribute('class', 'items');
    lunchContent.appendChild(item4);

    const itemTitle4 = document.createElement('div');
    itemTitle4.setAttribute('class', 'itemTitle');
    itemTitle4.textContent = "Roasted Chicken Soup";
    item4.appendChild(itemTitle4);

    const itemContent4 = document.createElement('p');
    itemContent4.setAttribute('class', 'itemContent');
    itemContent4.textContent = 'w/ noodles, free range chicken, fresh garlic & crisp vegetables';
    item4.appendChild(itemContent4);

    //Menu item 5
    const item5 = document.createElement('div');
    item5.setAttribute('class', 'items');
    lunchContent.appendChild(item5);

    const itemTitle5 = document.createElement('div');
    itemTitle5.setAttribute('class', 'itemTitle');
    itemTitle5.textContent = "Grilled Cheeseburger";
    item5.appendChild(itemTitle5);

    const itemContent5 = document.createElement('p');
    itemContent5.setAttribute('class', 'itemContent');
    itemContent5.textContent = "Freshly ground prime beef w/sharp cheddar, sautéed onion, lettuce, tomato & Dijon-mayo on a brioche bun";
    item5.appendChild(itemContent5);

    //Menu item 6
    const item6 = document.createElement('div');
    item6.setAttribute('class', 'items');
    lunchContent.appendChild(item6);

    const itemTitle6 = document.createElement('div');
    itemTitle6.setAttribute('class', 'itemTitle');
    itemTitle6.textContent = "Kale Salad";
    item6.appendChild(itemTitle6);

    const itemContent6 = document.createElement('p');
    itemContent6.setAttribute('class', 'itemContent');
    itemContent6.textContent = "Chopped Kale tossed with roasted pecans, dried cherries, siced radishes, goat cheese & champagne vinaigrette";
    item6.appendChild(itemContent6);

    //Menu item 7
    const item7 = document.createElement('div');
    item7.setAttribute('class', 'items');
    lunchContent.appendChild(item7);

    const itemTitle7 = document.createElement('div');
    itemTitle7.setAttribute('class', 'itemTitle');
    itemTitle7.textContent = "Grilled Steak Sandwich";
    item7.appendChild(itemTitle7);

    const itemContent7 = document.createElement('p');
    itemContent7.setAttribute('class', 'itemContent');
    itemContent7.textContent = "Grilled Flank Steak w/ chimichuri, tomato, iceberg lettuce & a touch of mayo on a La Brea Bakery baguette";
    item7.appendChild(itemContent7);

    //Menu item 8
    const item8 = document.createElement('div');
    item8.setAttribute('class', 'items');
    lunchContent.appendChild(item8);

    const itemTitle8 = document.createElement('div');
    itemTitle8.setAttribute('class', 'itemTitle');
    itemTitle8.textContent = "Meatloaf Sandwich";
    item8.appendChild(itemTitle8);

    const itemContent8 = document.createElement('p');
    itemContent8.setAttribute('class', 'itemContent');
    itemContent8.textContent = "w/ chipotle ketchup, mayo, jack cheese & roasted tomatoes served on sliced sourdough";
    item8.appendChild(itemContent8);

    //Menu item 9
    const item9 = document.createElement('div');
    item9.setAttribute('class', 'items');
    lunchContent.appendChild(item9);

    const itemTitle9 = document.createElement('div');
    itemTitle9.setAttribute('class', 'itemTitle');
    itemTitle9.textContent = "Fish & Chips";
    item9.appendChild(itemTitle9);

    const itemContent9 = document.createElement('p');
    itemContent9.setAttribute('class', 'itemContent');
    itemContent9.textContent = "Beer battered Icelandic cod w/sesame coleslaw & our savory tartar sauce";
    item9.appendChild(itemContent9);

  })
}