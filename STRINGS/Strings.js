var myName = "Akhil Strings"

var myFirstName = "Akhil"
var myLastName = "Strings"

var nameOverView = "My Name is" + " " + myFirstName
                   + " " + myLastName
console.log(nameOverView)

var nameOverView = "What is your First Name?" + " "
                     + myFirstName
console.log(nameOverView)
var nameOverView = "What is your Necond Name?" + " "
                    + myLastName
console.log(nameOverView)

console.log(myFirstName + " " + myLastName)


console.log(myFirstName.toUpperCase())
console.log(myLastName.toLowerCase())

let myNmae = "Akhil Strings"
console.log("my first name is", myName.slice(0,5))
console.log("my Last Name is", myNmae.slice(5,13))

let newBike = "Ninja H2R is a top speeding bike."
console.log(newBike)
console.log(newBike.replace("H2R","ZX10R"))

let bikes = "H2R ZY10R H2R ZY10R H2R ZY10R H2R ZY10R"
console.log(bikes)
console.log(bikes.replaceAll("Y","x"))

let difbikes = "Yamaha kawasaki Honda BMW RoyalEnfield"
console.log(difbikes)
console.log(difbikes.split(" "))



