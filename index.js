// Write your solution in this file!

const driver = {name: "Sam"};

//Not destructive
function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = {...driver};
  newObj[key] = value;
  return newObj;
}

//Destructive
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return driver[key] = value;
}

//Not destructive
function deleteFromDriverByKey() {
  
}

//Destructive
function destructivelyDeleteFromDriverByKey() {
  
}