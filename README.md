# MA2020-TechTask
Masters Academy 2020 Node.js technical task

### Task
Create a function that receives an array of goods and returns cost that should be paid for all these goods.

Your code should:
- Print to the console the total quantity of pairs of socks (`Socks - ${quantity}`);
- Print to the console the total quantity of the hats of red color (`Red Hats - ${quantity}`);
- Print to the console the cost of the goods by colors (`Red - ${costRed}, Green - ${costGreen}, Blue - ${costBlue}`);
- Print to the console the result of the execution of this function.

### Initial data
```javascript
const data = [
  {'type': 'socks', 'color': 'red', 'quantity': 10, 'priceForPair': '$3'},
  {'type': 'socks', 'color': 'green', 'quantity': 5, 'priceForPair': '$10'},
  {'type': 'socks', 'color': 'blue', 'quantity': 8, 'priceForPair': '$6'},
  {'type': 'hat', 'color': 'red', 'quantity': 7, 'price': '$5'},
  {'type': 'hat', 'color': 'green', 'quantity': 0, 'price': '$6'},
  {'type': 'socks', 'color': 'blue', 'priceForPair': '$6'},
  {'type': 'socks', 'color': 'red', 'quantity': 10, 'priceForPair': '$3'},
  {'type': 'socks', 'color': 'white', 'quantity': 3, 'priceForPair': '$4'},
  {'type': 'socks', 'color': 'green', 'priceForPair': '$10'},
  {'type': 'socks', 'color': 'blue', 'quantity': 2, 'priceForPair': '$6'},
  {'type': 'hat', 'color': 'green', 'quantity': 3, 'price': '$5'},
  {'type': 'hat', 'color': 'red', 'quantity': 1, 'price': '$6'},
  {'type': 'socks', 'color': 'blue', 'priceForPair': '$6'},
];
```

### Result
```
Socks - 38 pairs
Red Hats - 8 items
Red - $101, Green - $65, Blue - $60, White - $12
Total price - $238
```
