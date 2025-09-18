//Objects
// key-value pairs in curly braces
const myObj = { name: "Jonathan" };
const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "code"],
  beverage: {
    morning: "Tea",
    afternoon: "Yogurt",
  },
  action: function () {
    // an anonymous function inside the object
    /* return "Hello World"; */
    return `Time for ${this.beverage.morning}`; // the "this" keyword is used to refer to or imply the object itself
  },
};
console.log(anotherObj.name);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

//ex 2
const vehicle = {
  wheels: 4,
  engine: function () {
    return "goes vroom";
  },
};

const truck = Object.create(vehicle); // using the vehicle as a constructor for the trunk object
truck.doors = 2;
console.log(truck); //no inheritance here
console.log(truck.wheels); // this is inheritance in play
console.log(truck.engine()); // this too is inheritance

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  // the engine function that was inherited was then overwritten
  return "goes Whoosh";
};

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
tesla.engine = function () {
  return "shhhhhhhh.....";
};
console.log(tesla.wheels); // inherited from the car object form the vehicle object

//iterating through objects using the for-in loop
const band = {
  vocal: "sweggy",
  guitar: "Joseph",
  mixing: "rap bug",
  drums: "skimzy",
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  //The for in loop
  console.log(`on ${job}, its ${band[job]}!`);
}

//destructuring objects
const { guitar: myVariable } = band;
