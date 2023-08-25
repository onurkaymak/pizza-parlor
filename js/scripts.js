// Business Logic

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.cost = 0;
};

Pizza.prototype.calculateCost = function () {
    if (this.toppings.length > 0) {
        console.log('there are toppings');
    }
    else {
        console.log('there is no toppings');
    }
    if (this.size === "medium") {
        this.cost += 1.50;
    }
}

const myPizza = new Pizza(["salami", "mushroom"], "medium");

console.log(myPizza);

myPizza.calculateCost();

console.log(myPizza);