// const numbersArray = [1, 2, 3, 4, 5];
// let type = {even:'even', odd:'odd'};

// function processNumbers(myArray, myCallBack){
//     myArray.forEach(element => {
//         if (element % 2 == 0){
//             handleNumbers(element, type.even)
//         }
//         else {
//             handleNumbers(element, type.odd)
//         }
//     });
// }

// function handleNumbers(number, theType){
//     console.log(`Number ${number} is ${theType}.`)
// }

// processNumbers(numbersArray, handleNumbers);

// function fetchData(callback){
//     setTimeout(() => {
//         const SimulatedMessage = {message: "Simulated API response"};
//         callback(SimulatedMessage);
//     },2000)
// }
// function processFetchedData(data) {
//     console.log("Fetched data:", data);
//   }

// fetchData(processFetchedData);

// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// function filter(myArray, myCallBack){
//     myArray.forEach(element => {
//         if(element % 2 == 0){
//             newArray.push(element);
//         }
//     });
//     myCallBack(newArray);
// }


// function display (filteredArray){
//     console.log("filteredArray: ",filteredArray);
// }

// filter(numbersArray, display);




// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// function bigFunction(myArray, myCallBack){
//     myArray.forEach(element => {
//         newArray.push(element * element);
//     });
//     myCallBack(newArray);
// }

// function display (theArray){
//     console.log("Our new Array: ", theArray);
// }

// bigFunction(numbersArray, display);