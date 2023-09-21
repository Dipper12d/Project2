var price = prompt("Please enter in the price:");
console.log(price);
var weight = prompt("Please enter in the weight");
console.log(weight);

ship_cost = 0;
if (weight <= 20) {
  ship_cost = (weight * 85) / 10;
} else if (weight > 20 && weight < 50) {
  ship_cost = Math.round((20 * 2.5 + (weight - 20) * 1.75) * 100) / 100;
} else {
  ship_cost = (weight * 215) / 100;
}

let total = ship_cost + Number(price);
console.log(total);
console.log(`Product cost: ${price}
\nProduct weight: ${weight}
\nShipping cost: ${ship_cost}
\nTotal price: ${total}`);
