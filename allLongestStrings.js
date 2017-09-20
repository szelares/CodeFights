function allLongestStrings(inputArray) {
 let longestString = inputArray[0].length;
 for(let i = 1; i<inputArray.length; i++){
  longestString = longestString >= inputArray[i].length ? longestString : inputArray[i].length;
 }
 return inputArray.filter(function(item){
  return item.length === longestString;
 });
}