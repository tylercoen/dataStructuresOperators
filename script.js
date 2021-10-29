'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,

  //old way of doing it:
  //order: function(starterIndex, mainIndex){
  //return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //},

  //ES6 way of doing it:
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    ); //destructuring objects passed into the function with default values in place
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// SPLIT and JOIN
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessice ann smith davis');
capitalizeName('tyler coen');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+')); //first number is the total length of the strength after the padding, the second is what it will pad with

const maskCreditCard = function (number) {
  const str = number + ''; //converts a number to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(12345678910));
console.log(maskCreditCard('948758327498275923'));

// Repeat
const message2 = 'Bad weather....ALl departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line`);
};
planesInLine(5);

*/
/*
// property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;

for(const day of properties){
  openStr += `${day}, `;
}
console.log(openStr);

// property Values
const values = Object.values(openingHours)
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
//results in an error because mon is undefined
//console.log(restaurant.openingHours.mon.open);

if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

//with optional chaining. If mon exist then the open property will be read. Works same as above but is cleaner.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days){
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//optional chaining for methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

//optional chaining for arrays
const users = [
  {name: 'Jonas', email: 'hello@jonas.io'}];
  //If the value on the left exists return it if not return 'User array empty'
  console.log(users[0]?.name ?? 'User array empty');
*/

/*
//////////////////////
//The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for (const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}
*/

//console.log([...menu.entries()]);
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,

});

console.log('---------OR---------');
// Logical operators can use and return any data type, short-circuiting
console.log(3 || 'Jonas'); //returns 3
console.log('' || 'Jonas'); //returns 'Jonas'
console.log(true || 0); //returns true
console.log(undefined || null); //returns null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //returns Hello b/c it is the first truthy value then short circuits and does not return any others.

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //numguests has a default value of 10 if it doesn't exist.

const guests2 = restaurant.numGuests || 10; //works the same as above, however if guests is set to 0 it defaults to 10
console.log(guests2);


//Nullish coalescing operator. Nullish: null and undefined
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); //this will actually return 0 

console.log('---------AND---------');
console.log(0 && 'Jonas');//short circuits after the first fasly value, the opposite of above.
console.log(7 && 'Jonas');//if it is truthy it simply continues and the last value is returned
console.log('Hello' && 23 && null && 'Jonas'); //returns null then short circuits

if (restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('musrhooms', 'spinachs')//operates the same as above. if orderPizza doesn't exist it short circuits
*/

/*
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];//takes 1,2 and the REST of the array
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); //the rest pattern should be the last element or you couldn't skip any

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
console.log(sum);
};

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);
const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinachs');
*/

/*
//spread operator (to unpack an array)
const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(arr, badNewArr);

const newArr = [1, 2, ...arr]; //takes elements out of the arr and represents them in the newArr
console.log(newArr);

console.log(...newArr);//logs the individual elements of an array

const newMenu = [...restaurant.mainMenu, 'Gnocci'];//creates a new array without manipulating original
console.log(newMenu);

//copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

//join two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

//iterables are arrays, strings, maps, sets, NOT objects
//Spread can be used on all iterables.
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

//const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt("Ingredient 2?"), prompt("Ingredient 3?"),];
//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/*
//destructuring the above object
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant; //renaming the variables and destructuring the object
console.log(restaurantName, hours, tags);


//setting default values. If menu doesn't exist it defaults to the empty array. We reanmed startermenu into starters and set it to an emtpy array but since it does exist it will show that array
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
//{ a, b } = obj;
//console.log(a,b); //this won't work since a, b are already defined above
//You have to wrap it in parentheses
({ a, b } = obj);
console.log(a,b); //reassings a to 23 and b to 7

// nested object destructuring
const { 
  fri: { open: o, close: c },
 } = openingHours;
console.log(o,c);
*/

/*
//Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0]; 
const b = arr[1];
const c = arr[2]; 

const [x, y, z] = arr; //destructuring an array
console.log(x, y, z);
console.log(arr);//keeps original array

let [main, , secondary] = restaurant.categories; //takes 0 skips 1 and takes 2
console.log(main, secondary);

//const temp = main;
//main = secondary;
//secondary = temp;//without destructuring
//console.log(main, secondary);


//with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]]; 
//const [i, , j]= nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);

*/

/*Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2') COMPLETE

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players COMPLETE

3. Create an array 'allPlayers' containing all players of both teams (22
players) Complete


4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic' COMPLETE

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')COMPLETE


6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)COMPLETE

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. COMPLETE
Then, call the function again with players from game.scored
GOOD LUCK 😀*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
const gk = players1[0];
const [, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
const {
  odds: { team1, x: draw, team2 },
} = game;
const printGoals = function (...names) {
  console.log(...names, names.length);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

console.log(players1);
console.log(players2);
console.log(gk);
console.log(fieldPlayers);
console.log(allPlayers);
console.log(players1Final);
console.log(team1, draw, team2);
printGoals(...game.scored);
for (let goals of game.scored.entries()) {
  console.log(`Goal ${goals[0] + 1}: `, goals[1]);
}
let avgOdds = 0;
for (let k of Object.values(game.odds)) {
  avgOdds += k;
}
avgOdds = avgOdds / 3;
console.log(avgOdds);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr}: ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/*Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
*/

/*
//Sets -  a collection of unique values w/o duplicates
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); //will automatically remove the duplicates

console.log(new Set('Jonas')); //breaks this out into five letters

console.log(ordersSet.size); //not length but similar.
console.log(ordersSet.has('Pizza')); //returns true
console.log(ordersSet.has('Bread')); //returns false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear(); //removes everything from a set
console.log(ordersSet);
//sets don't have indexes and you can't pull things out but you can delete/add

for (const order of ordersSet) console.log(order);

//Example

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffUnique = [...new Set(staff)]; //spread takes elements out
console.log(staffUnique);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

//MAPS
const rest = new Map(); //best to create an empty map first
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
//rest.clear();

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);
//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
*/
/*
const answer = Number(prompt('Your answer'));
console.log(answer);

answer === question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));
*/
/*
//convert map to an array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log(question.values());
*/
/*

Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
see below

GOAL
GOOD LUCK 😀

*/

/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];

console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

//3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
let eventAverage = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${eventAverage} minutes`);

//4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:[FIRST HALF] 17:

for (const [keys, value] of gameEvents) {
  keys <= 45
    ? console.log(`[FIRST HALF] ${keys}: ${value}`)
    : console.log(`[SECOND HALF] ${keys}: ${value}`);
}
*/

/////////////WORKING WITH STRINGS///////////////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); //gives first occurence of
console.log(airline.lastIndexOf('r')); //gives last occurence of
console.log(airline.indexOf('Portugal')); //case sensitive, shows up as -1 if not there.

console.log(airline.slice(4)); //begin parameter is position 4 it doesn't change the underlying string

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Check email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
//console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); //only replaces first ocurrence
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airbus'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  //console.log(text);
  const textLower = text.toLowerCase().split('\n');
  //console.log(textLower);
  const splitWords = [];
  for (const word of textLower) {
    splitWords.push(word.trim().split('_'));
  }
  //console.log(splitWords);
  for (let [phrase1, phrase2] of splitWords) {
    phrase2 = phrase2[0].toUpperCase() + phrase2.slice(1);
    console.log((phrase1 + phrase2).padEnd(20));
  }
});
