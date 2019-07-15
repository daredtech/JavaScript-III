/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - a way to reference the object
* 2. Implicit Binding - to know which object's function to call (object comes before dot)
* 3. New binding - used in constructor to reference the object that is created/returned by it
* 4. Explicit binding - used to override the constructor values
*
* write out a code example of each explanation above
*/

const myCat = new Object ();
myCat.name = "Pixel";
myCat.friend = "Unix";

// Principle 1
// code example for Window Binding

function myFried (name) {
	console.log(`${this}`);
	return name;
}

myFried(myCat);


// Principle 2
// code example for Implicit Binding

const myPoliteCat = {
  greeting: 'Meow,',
  askForFood: function(name) {
    console.log(`${this.greeting} ${name}. Please feed me!`);
  }
};
myPoliteCat.askForFood('Human');


// Principle 3
// code example for New Binding

function intoduction (cat, ilike) {
	this.greeting = "Hi, I am ";
	this.cat = cat;
	this.ilike = ilike;
	this.whatCatLikes = function () {
		console.log(this.greeting + this.cat +". " + this.ilike);
	}
}

const pixel = new intoduction ("Pixel", "I like to nap.");
const unix = new intoduction ("Unix", "I like to eat.");

pixel.whatCatLikes();
unix.whatCatLikes();


// Principle 4
// code example for Explicit Binding
function letsplay() {
	console.log("Let's play, " + this.human);
}

var name = {
	human:'Nice Human.'
}

letsplay.apply(name); 
