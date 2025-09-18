/* console.log ("hello world");
console.log(typeof "Jonathan"); 
alert("hello you traveller");
alert("how can you be helped"); */

/* const myVariable ="Mathematics";

console.log(" This is a sentence".length);
console.log("Jonathan".length);
console.log(myVariable.charAt(5));
console.log(myVariable.indexOf("ema"));
console.log(myVariable.lastIndexOf("ema"));
console.log(myVariable.slice(4, 9));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("e"));
console.log(myVariable.split("e"));

/* reference to MDN for more */

/* const myNumber = 42;
const myFloat = 42.01;
const myString ="42"

console.log(myNumber);
console.log(myFloat);
console.log(Number(myString));


console.log(Math.floor(Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);
 */

/* const myName ="Jonathan";
myIndex= Math.floor(Math.random()*8);
console.log(myName.charAt(myIndex)); */

/* newName="pat";
/*i=newName.length;
myIndex=Math.floor(Math.random() * i);
console.log(newName.charAt(myIndex));
 */

/* let soup="chicken noodle soup";
let reply="";
if(soup){
    reply =`here is your order of ${soup}`;
}else{
    reply=`sorry, we're out of soup. `;
}
console.log(reply); */
/*
const name= 'Jonathan';
const alphabets='abcdefghijklmnopqrstuvwxyz';
let index;
index=Math.floor(Math.random() *26 +1);
let randomAlphabet= alphabets.charAt(index);

let randomNameAlphabet;
let nameIndex;
nameIndex=Math.floor(Math.random() *8 +1);
randomNameAlphabet= name.charAt(nameIndex);

if(randomNameAlphabet == randomAlphabet){
    console.log("You're one lucky guy");
    console.log(randomNameAlphabet);
    console.log(randomAlphabet);

}else{
    console.log("Let's try that again shall we");
}
    */

//switch statements
/* switch(expression or vale){

    case choice1:
        // run this code
    break;

    default:
        // run if no case is a match
 } 

let playerOne ="rock";
let computer ="rock"

switch (playerOne){
    case computer:
        console.log("Tie game");
        break;
    case "rock":
        if (computer === "paper"){
            console.log("Computer wins");
        }
        else {
            console.log("playerOne wins")
        }
        break;

     case "paper":
        if (computer === "scissors"){
            console.log("Computer wins");
        }
        else {
            console.log("playerOne wins")
        }
        break;

     case "Scissors":
        if (computer === "rock"){
            console.log("Computer wins");
        }
        else {
            console.log("playerOne wins")
        }
        break;
}
        */

// Conditioinals: Tenary operators
//syntax
// condition ? iftrue : iffalse

/* let soup ="chicken noodle soup";
response = soup ? "yes, there is soup in stock" : "Get thee behind us"
console.log(response); */

/* let myBoolean= confirm("True ===Ok \nCancel === False");
console.log(myBoolean); */
/* let orderTotal = 39.99;
let itemPurchased = "JavaScript All-in-One For Dummies";
let customer = "Joe Q. Developer";
let thankYou = `${customer}, thank you for your order of ${itemPurchased}.
Your payment of ${orderTotal} was successful.`;
console.log(thankYou);

let thankMe = customer + "thank you for your order of" + itemPurchased;
alert(thankMe); */

let name = prompt("Please enter your name.");
if (name) {
  console.log(`${name} is your userName`);
  alert(`You've been hacked ${name}`);
} else {
  console.log("You didn't enter your name.");
}
let myNumber = 0;
while (myNumber < 50) {
  console.log(myNumber);
  myNumber++;
}
