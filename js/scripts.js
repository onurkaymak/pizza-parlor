// Business Logic

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.cost = 0;
};

Pizza.prototype.calculateCost = function () {
    switch (this.size) {
        case ("small"):
            console.log("Small Pizza!");
            this.cost += 12;
            break;
        case ("medium"):
            console.log("Medium Pizza!");
            this.cost += 16;
            break;
        case ("large"):
            console.log("Large Pizza!");
            this.cost += 20;
            break;
        case ("xl"):
            console.log("XL Pizza!");
            this.cost += 24;
            break;
    }

}

const myPizza = new Pizza(["salami", "mushroom", "jalapeno"], "medium");

myPizza.calculateCost();

console.log(myPizza);