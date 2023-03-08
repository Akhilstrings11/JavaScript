var a = "10";
var b = 20;
var c = 30;
var sum = a + b + c;

console.log(sum)

var a = 10;
var b = 20;
var c = "30";
var sum = a + b + c;

console.log(sum)

var a = 10;
var b = "20";
var c = 30;
var sum = a + b + c;

console.log(sum)
console.log(typeof sum)

var a = 10;
var b = "20";
var c = 30;
var sum = a + c;

console.log(sum)

var a = 10;
var b = "20";
var c = 30;
b = parseInt(b)

var sum = a + b + c;

console.log(sum)
console.log(typeof sum)

var d = "10.98"
console.log(typeof d, d)
d = Number(d)
console.log(typeof d, d)


var x = 456;
console.log(typeof x)
x = x.toString()
console.log(typeof x)

x = toString()``
console.log(typeof x)

var balance = 20.857452
balance = balance.toFixed(2)
console.log(balance)

var balance2 = 20.857452
balance2 = balance2.toFixed(4)
console.log(balance2)

// Round Number

var bill = 545.49
bill = Math.round(bill)
console.log(bill)

var bill2 = 545.51
bill2 = Math.round(bill2)
console.log(bill2)

// Ceil:-

var ceilBill = Math.ceil(bill)

var groceryBill = 525.1;
console.log(Math.ceil(groceryBill))

// Floor:-

console.log(bill + 0.254)
console.log(Math.floor(bill))

// Power of a Number:-

var powerValue = Math.pow(4,3)
console.log(powerValue)

var sqrtValue = Math.sqrt(100)
console.log(sqrtValue)

// Absolute value always gives a Positive value:-

var hyderabad = 600
var vijayawada = 350
var distance = 350-600
distance = Math.abs(distance)
console.log(distance, "Distance from vijayawada and hyderabad")

// Finding Maximum and Minimum number:-

var maxValue = Math.max(10,20,30,40,54,45,1965,243,999,989)
var minValue = Math.min(10,10,20,30,40,54,45,0965,243,999,989)

console.log( "Max Value=", maxValue, "Min Value", minValue)

var minValue = Math.min(-10,10,20,30,40,54,45,0965,243,999,989)

console.log("Min Value", minValue)
