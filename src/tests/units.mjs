/*  this file contains units to be tested later by JEST.
    full implementation is in index.js
    integration testing is out of scope here    */

const {taxAppl, importTax} = require('./constTest');
// I have used commonjs require rather than import ES6 
// because Jest needed some configuration changes 

// read values from external source
function readValues(){
    return [taxAppl, importTax];
}

// find food based on category list 

function findProduct(){
    let listProd = ['chocolate', 'book', 'medicine'];
    let inputVal = "1 piece of belgian chocolate";
    if( listProd.some((listItem) => inputVal.toLowerCase().includes(listItem)) ){
        return true
    }
    else{
        return false
    }
}

function calculatePrice(){
    let price = 14.99;
    let taxVal = 10;
    price += (price*taxVal)/100;
    // price = (Math.ceil(price * 20) / 20).toFixed(2);
    price = Math.round((price + Number.EPSILON) * 100) / 100;
    return price
}

module.exports = {read :readValues(), findProd: findProduct(), calcul: calculatePrice()};
