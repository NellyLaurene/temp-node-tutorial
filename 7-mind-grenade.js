const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is: ${num1 + num2}`);
}

addValues();

// IF WE HAVE A FCTS THAT WE HAVE CALLED, AND WE IMPORT IT IN ANOTHER FILE IT WILL BE EXECUTED EVENTHOUGH
// IT HAS NOT BEEN EXPORTED.