const ProductType = {
  SOCKS: 'socks',
  HAT: 'hat',
};

const ProductColor = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
  WHITE: 'white',
};

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

const getQuantity = (item) => item.quantity ? item.quantity : 0;

const calculatePrice = (quantity, price) => quantity * price.substring(1);

const calculateTotal = (obj) => Object.values(obj).reduce((a, b) => a + b);

const print = (socks, hats, colors) => {
  console.log(`Socks - ${socks} pairs`);
  console.log(`Red Hats - ${hats} items`);
  console.log(`Red - $${colors.red}, Green - $${colors.green}, Blue - $${colors.blue}, White - $${colors.white}`);
  console.log(`Total price - $${calculateTotal(colors)}`);
};

const process = () => {
  let socks = 0;
  let hats = 0;

  const colors = {
    red: 0,
    green: 0,
    blue: 0,
    white: 0,
  };

  data.forEach((item) => {
    const quantity = getQuantity(item);

    switch (item.type) {
      case ProductType.SOCKS:
        socks += quantity;
        colors[item.color] += calculatePrice(quantity, item.priceForPair);
        break;
      case ProductType.HAT:
        hats += item.color === ProductColor.RED ? quantity : 0;
        colors[item.color] += calculatePrice(quantity, item.price);
        break;
    }
  });

  print(socks, hats, colors);
}

process();
