var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caesar Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies'];
var mains = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesan', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'];
var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'];

//create global variables
var letsCookButton = document.querySelector(".cook-button");
var mealTitleText = document.querySelector(".meal-title-text");
var randomMealText = document.querySelector(".random-meal-text");
var potImage = document.querySelector(".pot-img");
var clearButton = document.querySelector(".clear-button");

function getRandomElement(array) {
  return array[Math.floor(Math.random()*array.length)]
}
//outputs value of the index

function getRecipe() {
  var grabRadio = document.querySelector('input[name="meal-options"]:checked');
  if (!grabRadio) {
    // console.log("truthy");
    return
  }
    if (grabRadio.value === "sidesV") {
      return getRandomElement(sides)
    }
    else if (grabRadio.value === "mainsV") {
      return getRandomElement(mains)
    }
    else if (grabRadio.value === "dessertsV") {
      return getRandomElement(desserts)
    }
}
// console.log(getRecipe());



//choose one radio button (side, main dish, or dessert)

//dont forget exclamation point!!

//click cook-button
//hide pot-img
//show string ‘You should make: ${}!’
  //result should be a random dish from array (based on radio chosen)
//show clear-button
