// QUESTION 1
   // reqs: 1) create array, 2) subtract first from last, 
   // 3) add new element, 4) subtract first from last,
   // 5) use loop to calculate average age

console.log("Question 1: ");
   let agesArray = [3 ,9, 23, 64, 2, 8, 28, 93];
   let subFirstFromLast = agesArray[agesArray.length-1]-agesArray[0];
      // use .length-1 to get the length of the array and display the last element
console.log("First element was subtracted from the last element, resulting in", subFirstFromLast); //93-3=90
   agesArray.push(24);
      //can also use unshift to add element it beginning of array as well as 
      //splice to determine which position to start, how many elements to delete, and what to add
   console.log("This is the new array:", agesArray);
   subFirstFromLast = agesArray[agesArray.length-1]-agesArray[0];
      //same formula as earlier; new element is last and changes the response.
console.log("First element was subtracted from the new last element, resulting in", subFirstFromLast); //24-3=21
   function findAverage(array) {
      let sum1=0;
         //sum1 starts at 0 since we are calculating it
      for (let i=0; i<array.length; i++) {
         //for loop to count numbers up to array length
         sum1 += array[i];
         //adds the array numbers together
      }
         let average= sum1/array.length;
            //calculates array average
         return average;
            //returns array average
   }
console.log("The average of the ages in this array was", findAverage(agesArray)); //sum1=254/length=9 = 28.22...


// QUESTION 2
   //reqs: 1) create array, 2) use loop to calculate average letters in name,
   // 3) loop to concatenate all names, separated by spaces
   
console.log("Question 2:");
   let namesArray = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; //23 characters, 6 names
      let namesChar = namesArray.join(" "); 
         //joins the names together into a string, separated by spaces
      let count = 0; 
         //count starts at 0
      for (let i = 0; i < namesChar.length; i++) {
         //for loop to count from 0 up to the length of namesChar, 
         //which is just the string for namesArray.
         if(namesChar[i]!=" ")
            //clarifies to exclude spaces in counting characters
         count++;
            //counts
}
console.log("The number of characters in the array is", count); //23 characters
console.log("The number of names in the array is", namesArray.length); //6 names
   let namesAverage= count/(namesArray.length); //23/6=3.83...
      //finds the average number of letters per name
console.log("The average number of letters per name in this array are", namesAverage, "letters.");
console.log("This is the joined array: ", namesChar);
   //referring back to joined array I used earlier to find the 
   // number of characters in the array


//QUESTION 3
   //reqs: 1) How do you access the last element of any array?
console.log("Question 3: How do you access the last element of any array?");
   console.log("E.g. agesArray[agesArray.length-1]");
      //first "agesArray" lets the code know that THIS is where we
      //are pulling information from. the brackets now says the location
      // of the information we want from within the array. 
      //The length of the array minus 1 is the last element.
      //If I wanted the first element, I would use [0] instead


//QUESTION 4
   //reqs: 1) How do you access the first element of any array?
console.log("Question 4: How do you access the first element of any array?")
   console.log("E.g. agesArray[0]");
      //stated before, the first name is where we are pulling information
      //from, the brackets is the location inside the array that we
      // want the information. [1] gives the second placement, and so on.


//QUESTION 5
   //reqs: 1) create array, 2) write loop that uses previous namesArray
   // to make new array for the name lengths
console.log("Question 5:");
   let nameLengths = namesArray.map(function(element) {
      //created new array (nameLengths) using previous array (namesArray)
      // combined with the map method, which calls the function "function"
      // and asks it to take the elements (names) and do the following:
         return element.length;
            //return the length of the elements, so the number of letters
            // in the names
      });
      console.log("This is the new array of name lengths:", nameLengths);


//QUESTION 6
      //reqs: 1) loop to claculate sum of nameLengths
console.log("Question 6:");
   let sum2=0;
         //sum2 starts at 0 since we are calculating it
      for (let i=0; i<nameLengths.length; i++) {
         //for loop to count numbers up to array length
         sum2 += nameLengths[i];
         //adds the array numbers together
      }
console.log("This is the sum of nameLengths:", sum2, "which you'll see is the same as the number of characters in the array of Question 1");


//QUESTION 7
      //reqs: 1) function w/ 2 param (word and n) and returns word concatenated
console.log("Question 7:");
      function repeatString(word,n) {
         // function name has arguments for inputs word and n (number of times to repeat)
         let result = '';
            //since it is a string, instead of =0, it is = ''
         for (let i=0; i<n; i++) {
            //repeat up to the number of times given
            result +=word;
               //result has addition assignment that it increases and assigns itself to a new value
               // e.g. wordword.
         }
         return result;
      }
   console.log(repeatString('Booyah!',3));
      //returns Booyah! less than 3 times, but it includes 0
      // so it's still 3 times (0,1,2)


//QUESTION 8
      //reqs: 1) function two params, returns full name with a space
console.log("Question 8:");
      function createFullName(firstName, lastName) {
         console.log(firstName+" "+lastName);
      }
createFullName("Miranda", "Emory");
      //calls on function


//QUESTION 9
      //reqs: 1) function takes array of numbers and returns true if
      // sum is >100
console.log("Question 9:");
   function sumGreaterThan100 (array) {
      let sum3=0;
         // sum3 starts at 0 since we are calculating it
      for (let i=0; i<array.length; i++) {
         //for loop to count numbers up to array length
      sum3 += array[i];
         //adds the array numbers together; addition assignment
      }
         if (sum3>100) {
            return true;
         } else {
            return false;
         }
   }
let exampleArray = [1,2,3,4,5,6,7,1,9,3,5,300,4,7,5];
   // example that I can change values to change my answers
console.log("This array's sum being larger than 100 is:", sumGreaterThan100(exampleArray));


//QUESTION 10
   //reqs: 1)function takes array of num and retuns average
console.log("Question 10:");
   console.log("The average of the ages in this array was", findAverage(exampleArray));
      //called from findAverage function from Q1. used exampleArray
   
//QUESTION 11
   //reqs: 1) function 2 arrays of numbers and returns true if average
   // of first array is greater than average of second
      function greaterAverage (array1, array2) {
         let avg1= findAverage(array1);
         let avg2= findAverage(array2);
            if (avg1>avg2) {
               return true;
            } else {
               return false;
            }
      }
   let array1 = [30,40]; //35
   let array2 = [50,1]; //25.5
console.log("array1 is greater than array2:", greaterAverage(array1, array2));


//QUESTION 12
      //reqs: 1) function with boolean and number
console.log("Question 12:");
      function willBuyDrink (temp, money) {
         if (temp===true) {
            if (money>10.50){
               return true;
            } else {
               return false;
                  //need this line so the temp=false, money>10.5 is correct
            }
         } else {
            return false;
               //all other options, are false
         }
      }
      let isHotOutisde = true;
      let moneyInPocket = 14;
   console.log("I will buy a drink", willBuyDrink(isHotOutisde, moneyInPocket));