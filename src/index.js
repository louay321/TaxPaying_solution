// solution approach
//I imported the tax constants from a different file
import { TaxApplicable, ImportTax } from "./constants.js";
//problem number 1

function calculateTax(input) {
  var result = [];
  var salesTax = 0.0;
  var totalPrice = 0.0;
  //define list of items that does not apply for 10%
  const noTax = [
    "book",
    "novel",
    "scripture",
    "tome",
    "volume",
    "chocolate",
    "candy",
    "conserved",
    "can",
    "food",
    "medic",
    "pill"
  ];

  //read every input and add results to output arr
  for (let item of input) {
    //initiate tax value to apply in the end.
    let taxVal = 0;

    //get price of item which is usually after 'at '
    let price = parseFloat(item.substring(item.indexOf(" at ") + 3));

    //if item is tax applicable add 10% to tax amount
    //(not included in noTax array)
    if (!noTax.some((taxItem) => item.toLowerCase().includes(taxItem))) {
      taxVal += TaxApplicable;
    }
    //if item is imported add 5% to tax amount
    if (item.toLowerCase().includes("imported")) {
      taxVal += ImportTax;
    }
    //get the new price value keep tax total
    let taxing = (price * taxVal) / 100;
    salesTax += taxing;
    price += taxing;

    //round to 2 decimals
    price = Math.round((price + Number.EPSILON) * 100) / 100;
    // price = (Math.ceil(price*20 - 0.5)/20).toFixed(2);
    totalPrice += price;

    //return result of prices
    result.push(item.substring(0, item.indexOf(" at")) + ": " + price);
  }
  //return result of sales taxes
  result.push("Sales Taxes: " + (Math.ceil(salesTax * 20) / 20).toFixed(2));

  //return result of total prices
  result.push("Total: " + totalPrice);
  console.log(result);
  return result;
}

//read inputs as array ["input1",... "inputn"]
//testing with input 1
let input = [
  "1 book at 12.49",
  "1 music CD at 14.99",
  "1 chocolate bar at 0.85"
];
calculateTax(input);
