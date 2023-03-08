const LatestCars = ["Tesla", "Audi", "Ferreri", "Toyota"]
console.log(LatestCars)
console.log("first car",LatestCars[0])
console.log(LatestCars[1])
console.log(LatestCars[3])

const noOfCars = LatestCars.length;
console.log(noOfCars)
document.getElementById("totalcars").innerHTML = noOfCars;

console.log("last car is :", LatestCars[noOfCars - 1])

console.log(LatestCars)
LatestCars.push("Skoda")
LatestCars.push("Mahindra")
console.log(LatestCars)

const removedCars = []
const removedItem = LatestCars.pop();
removedCars.push(removedItem)
removedCars.push(LatestCars.pop())
removedCars.push(LatestCars.pop())
removedCars.unshift(LatestCars.pop())
console.log("Removed Car is ",removedItem)

console.log(LatestCars, "After using pop method")
LatestCars.push(removedItem)
console.log(LatestCars)

console.log(LatestCars)
LatestCars.shift()
console.log(LatestCars)

LatestCars.unshift("Tesla")
console.log(LatestCars)

console.log("Removed cars data", removedCars)

console.log(LatestCars)
let CarsStringData = LatestCars.toString()
console.log(CarsStringData)


console.log(LatestCars)
const selectedCars = LatestCars.slice(2,4)
console.log(selectedCars)
const favourateCar = LatestCars.slice(1,2)
console.log(favourateCar)
console.log(LatestCars)

LatestCars.splice(2,0,"tesla", "nano")
console.log(LatestCars)

const storedCarsData = LatestCars.sort()
console.log(LatestCars)

const reversedData = LatestCars.reverse()
console.log(reversedData)

const iitRanks = [10,20,30,40, 22,53,24,99,347,342,999]

const firstRank = Math.min.apply(null, iitRanks)
console.log(firstRank)

const iitRanks2 = [-1,10,20,30,40, 22,53,24,999,347,342.7052]

const firstRank2 = Math.min.apply(null, iitRanks2)
console.log(firstRank)

const lastRank = Math.max.apply(null, iitRanks)
console.log(lastRank)

const storedRanks = iitRanks.sort( (a,b) => b -a)
console.log(storedRanks)

console.log(iitRanks)
console.log(LatestCars)
