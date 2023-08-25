# Pizza Parlor

#### By _**Onur Kaymak**_

[Onur Kaymak Portfolio](https://onurkaymak.com)

A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

## Technologies Used

- _HTML5_
- _CSS_
- _JavaScript_
- _Git_
- _VS Code_

## Description

_An independent project assignment for Epicodus, project is about Object-Oriented JavaScript. [More information about Epicodus](https://www.epicodus.com)_

## Setup/Installation Requirements

- _You have two option to view this project;_

## First Option

- _Clone this project from provided GitHub repository: [Repository Link](https://github.com/onurkaymak/pizza-parlor)_
- _Navigate to the project's folder and open index.html file in your browser_
- _If you are using VS Code as code editor, simply go to the project folder and right-click index.html to run on VS Code Live Server feature._

## Second Option

[Project Live Link](https://onurkaymak.github.io/pizza-parlor)

## Tests

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

## Known Bugs

- _There is no known bugs._

## License

MIT License

Copyright (c) [2023] [Onur Kaymak]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
