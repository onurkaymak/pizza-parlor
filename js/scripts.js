// Business Logic

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
};

const myPizza = new Pizza(["salami", "mushroom"], "medium");

console.log(myPizza);