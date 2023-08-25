```
Describe: Pizza()

Test #1: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium", cost: 0 }


Describe: calculateCost()

Test #1: "It should calculate a price for the size of the pizza depends on selected size"
Code:
const myPizza = new Pizza(["salami", "mushroom"], "medium");
myPizza.calculateCost();
Expected Output: Pizza { toppings: ["salami", "mushroom"], size: "medium", cost: 16 }

Test #2: "It should calculate a price for the pizza depends on selected size and toppings variations"
Code:
const myPizza = new Pizza(["salami", "mushroom"], "medium");
myPizza.calculateCost();
Expected Output: Pizza { toppings: ["salami", "mushroom"], size: "small", cost: 14 }
```
