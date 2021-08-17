const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
// const newData = fifaData.filter(function(item){
//     return(item.Year === 2014 && item.Stage === 'Final');
// })

//(a) Home Team name for 2014 world cup final

// newData.forEach(function(item){
//     console.log(item["Home Team Name"]);
// });



// //(b) Away Team name for 2014 world cup final
// newData.forEach(function(item){
// 
//     console.log(item["Away Team Name"]);
//     
// });
// //(c) Home Team goals for 2014 world cup final
// newData.forEach(function(item){
//     
//     console.log(item["Home Team Goals"]);
//     
// });
// //(d) Away Team goals for 2014 world cup final
// newData.forEach(function(item){
//     
//     console.log(item["Away Team Goals"]);
//     
// });
// //(e) Winner of 2014 world cup final */
// newData.forEach(function(item){
//     
//     console.log(item["Win conditions"]);
//     
// });

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/
// receive data as paramater - when you invoke, pass fifaData as an argument.
function getFinals(data) {
    // use filter to filter the data for final stage
    const getFinals = data.filter(function(item){
        return (item.Stage === 'Final');
    });
    return getFinals;
}

console.log(getFinals(fifaData));

// }
// getFinals(fifaData);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/
// parameters are data which will be fifaData when you invoke it, getFinalscb will be passed in, use .map to go over getfinalsCB and return the years (item.year)
function getYears(data,getFinalscb) {

    const getYear = getFinalscb(data).map(function(item){
        return item.Year;
    });
    return getYear;
}
console.log(getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 
// getFinalscb from task 2 received as second paramater, use .map to go over getFinalsCB and return the winners using a conditional. Return the winner based on points score. if home > away return home, vice-versa
function getWinners(data, getFinalscb) {
    const winners = [];
    const getYear = getFinalscb(data).map(function(item){
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            return winners.push(item["Home Team Name"]);
        }
        else{
            return winners.push(item["Away Team Name"]);
        }
    });
    return winners;
}
console.log(getWinners(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 
// receive 3 paramaters (data, getYearscb, getWinnerscb), store the results in a var & use map over winners with index to refer to year and use item to refer to current value in winners
hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(data, getYearscb, getWinnerscb) {
    const theWinners = getWinnerscb(data, getFinals);
    const years = getYearscb(data, getFinals);
    const winners = theWinners.map(function(item, index){
        return `In ${years[index]}, ${item} won the world cup!`;
        
    });
    return winners;
}
console.log(getWinnersByYear(fifaData, getYears, getWinners));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/
// getfinalscb, use reduce, add up team goals and divide by length of array. 2 step process.
// hint: lookup .toFixed(2);
function getAverageGoals(getFinalscb) {
   const totalGoals = getFinalscb.reduce(function(acc, item){
    return acc + (item["Away Team Goals"] + item["Home Team Goals"]);
   },0);
   return (totalGoals / getFinalscb.length).toFixed(2);
}
console.log(getAverageGoals(getFinals(fifaData)));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
