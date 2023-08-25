// Business Logic

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
    this.cost = 0;
};

Pizza.prototype.calculateCost = function () {
    switch (this.size) {
        case (1):
            this.cost += 9;
            break;
        case (2):
            this.cost += 12;
            break;
        case (3):
            this.cost += 15;
            break;
        case (4):
            console.log("XL Pizza!");
            this.cost += 18;
            break;
    }

    if (this.toppings.length >= 4) {
        this.cost += 11;
    } else {
        switch (this.toppings.length) {
            case (1):
                this.cost += 3;
                break;
            case (2):
                this.cost += 5;
                break;
            case (3):
                this.cost += 7;
                break;
        }
    }
    return this;
}


//UI Logic

function transactionEffect() {
    let resultContainer = document.getElementById('container-result');

    resultContainer.removeAttribute("class", "hidden");
    resultContainer.setAttribute("class", "container-result");
};

function formCleaner() {
    let sizeInput = document.getElementById('select-size');
    const selectInputErr = document.getElementById('form-select-p');
    const checkboxes = document.getElementsByName('topping');

    selectInputErr.setAttribute("class", "error-p");

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    sizeInput.value = "0";
}

function formHandler(event) {
    event.preventDefault();

    let selectInputErr = document.getElementById('form-select-p');
    let sizeInput = document.getElementById('select-size').selectedIndex;
    let checkboxes = document.getElementsByName('topping');
    let priceTag = document.getElementsByClassName('result-span');
    let loadingSpinner = document.getElementById('loading-spinner');


    let selectedSize = 0;
    let selectedToppings = [];

    if (sizeInput === 0) {
        return selectInputErr.removeAttribute("class");
    }
    else {
        selectedSize = sizeInput;
    }

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedToppings.push(checkbox.value);
        }
    });

    const myPizza = new Pizza(selectedToppings, selectedSize);
    const total = myPizza.calculateCost();

    let price = `${total.cost}`
    priceTag[0].innerText = price;

    console.log(loadingSpinner)

    setTimeout(function () {
        loadingSpinner.removeAttribute("class", "hidden");
    }, 5000)
    // setTimeout(transactionEffect, 500);

    // formCleaner();

};

window.addEventListener('load', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', formHandler);
});