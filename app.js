const ProductType = {
    SOCKS: 'socks',
    HAT: 'hat',
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
  {'type': 'socks', 'color': 'blue', 'priceForPair': '$6'}
]

const calculatePrice = (quantity, price) => (quantity ? quantity : 0) * price.substring(1);

const process = () => {
  let totalPrice = 0;

  data.forEach((item) => {
    switch (item.type) {
      case ProductType.SOCKS:
        totalPrice += calculatePrice(item.quantity, item.priceForPair);
        break;
      case ProductType.HAT:
        totalPrice += calculatePrice(item.quantity, item.price);
        break;
    }
  });

  console.log(`Total price: $${totalPrice}`);
}

process();
