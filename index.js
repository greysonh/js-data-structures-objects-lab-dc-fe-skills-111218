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
  driver[key] = value;
  return driver;
}

//Not destructive
function deleteFromDriverByKey(driver, key) {
  
}

//Destructive
function destructivelyDeleteFromDriverByKey() {
  
}