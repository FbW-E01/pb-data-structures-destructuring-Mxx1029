// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring to complete this task.

const edibles = ["banana", "cucumber", "bread", "cakes", "pizza"];

const [fruit, vegetable, ...food] = edibles;
console.log(fruit); 
console.log(vegetable); 
console.log(food); 


// #### 2.Object Destructuring
// * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`. Assign each value to a variable. Print out the values.

const halloweenCostumes = {
    Marco : "Ghost",
    Will: "Grim Reaper",
    Stephan: "Exorcist",
    Polly: "Carrie",
    Jana: "Satan",
}

const {Marco:costumeMarco, Will:costumeWill, Stephan:costumeStephan, Polly:costumePolly, Jana:costumeJana} = halloweenCostumes;
console.log(costumeMarco);
console.log(costumeWill);
console.log(costumeStephan);
console.log(costumePolly);
console.log(costumeJana);


// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to print all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

const band = {
    fullName: "Queen",
    greatestHit: "Bohamian Rhapsody",
    nationality: "UK",
    genre: "rock",
    formed: 1970,
};

function printBandData ({fullName:band, greatestHit, nationality:country, genre, formed:startYear}) {
    console.log(`${band} is a ${genre} band formed in ${startYear} in the ${country}. Their greatest hit is ${greatestHit}.`);
}

printBandData(band);