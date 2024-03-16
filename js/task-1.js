const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItems = item.querySelectorAll('li');
  const itemCount = categoryItems.length;

    console.log(
        `Category: ${categoryTitle}
Elements: ${itemCount}`);
});
