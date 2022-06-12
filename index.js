// Code your solution in this file!

const headquarters = 42

function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  return Math.abs(headquarters-someValue);
}

function distanceFromHqInFeet(someValue) {

  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  return (distanceFromHqInBlocks(someValue) * 264);
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return (Math.abs(start-destination)  * 264);
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceToCalculate = distanceTravelledInFeet(start, destination);
    if (distanceToCalculate <= 400)
       return 0;
    else if (distanceToCalculate <= 2000)
       return ((distanceToCalculate - 400) * 0.02);
    else if (distanceToCalculate <= 2500)
       return 25;
    else
        return "cannot travel that far";
  }