// QUESTION 1
   // reqs: 1) create array, 2) subtract frist from last, 
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
      let sum=0;
         //sum starts at 0 since we are calculating it
      for (let i=0; i<array.length; i++) {
         //for loop to count numbers up to array length
         sum += array[i];
         //adds the array numbers together
      }
         let average= sum/array.length;
            //calculates array average
         return average;
            //returns array average
   }
console.log("The average of the ages in this array was", findAverage(agesArray)); //sum=254/length=9 = 28.22...



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
console.log("The average number of letters per name in this array is", namesAverage);
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
   //reqs: 1) create array, 2) write loop that uses previous array
   // to make new array of name lengths
console.log("Question 5:");
   let nameLengths = namesArray.map(function(element) {
      //created new array (nameLengths) using previous array (namesArray)
      // combined with the map method, which calls the function "function"
      // and asks it to take the elements (names) and do the following:
         return element.length;
            //return the length of the elements, so the number of letters
            // in the names
      });
      console.log("This is the new array of name lengths:",nameLengths);