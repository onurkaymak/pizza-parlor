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
            this.cost += 9;
            break;
        case ("medium"):
            console.log("Medium Pizza!");
            this.cost += 12;
            break;
        case ("large"):
            console.log("Large Pizza!");
            this.cost += 15;
            break;
        case ("xl"):
            console.log("XL Pizza!");
            this.cost += 18;
            break;
    }

    if (this.toppings.length >= 4) {
        console.log("Unlimited toppings!");
        this.cost += 11;
    } else {
        switch (this.toppings.length) {
            case (1):
                console.log("One topping!");
                this.cost += 3;
                break;
            case (2):
                console.log("Two topping!");
                this.cost += 5;
                break;
            case (3):
                console.log("Three topping!");
                this.cost += 7;
                break;
            default:
                console.log("No toppings!");
        }
    }

}

// const myPizza = new Pizza(["salami", "mushroom"], "small");

// myPizza.calculateCost();

// console.log(myPizza);

//UI Logic


function formHandler(event) {
    event.preventDefault();

    const size = document.getElementById('select-size')
    const test = size.options[size.selectedIndex];

    console.log(size)
    // console.log(test)
};

window.addEventListener('load', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', formHandler);
});