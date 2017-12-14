// Write your solution in this file!
const driver={},newObj={};
function updateDriverWithKeyAndValue(driver, key, value){
  return(Object.assign({},driver,key,value));
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return(Object.assign(driver,key,value));
}
function deleteFromDriverByKey(driver, key){
  Object.assign(newObj,driver);
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromdriverByKey(driver, key){
  delete driver[key];
  return driver;
}
