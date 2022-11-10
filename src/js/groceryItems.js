// alert("Hi, you're at the 'Grocery Items' Exercise");

//a list of 32 items
let items = ['Milk', 'Butter', 'Eggs', 'Cheese', 'Bananas', 'Apples', 'Oranges', 'Lettuce', 'Tomatoes', 'Onion', 'Carrot', 'Cucumber', 'Chicken', 'Beef', 'Fish', 'Tofu', 'Pork', 'Bread', 'Rice', 'Noodles', 'Sausages', 'Peanut butter', 'Ketchup', 'Soy sauce', 'Vinegar', 'Oats', 'Cookies', 'Chocolate', 'Spices', 'Wine', 'Sodas', 'Coffee'];

//outputs only 20 items being 'Noodles' as the end item
for(let i = 0; i<= 19; i++){
    let listItems = document.createElement('li');
    listItems.innerText = items[i];
    document.querySelector('#groceryList').appendChild(listItems);
}