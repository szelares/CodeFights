function matrixElementsSum(matrix) {
 let zeroIndex = [];
 let price = 0;
 
  for(let i = 0; i < matrix.length; i ++){
   for(let j = 0; j < matrix[i].length; j++){
    if(matrix[i][j] === 0){
     zeroIndex.push(j);
    } 
    else if(zeroIndex.indexOf(j) === -1){
     price += matrix[i][j];
   }
  }
 } 
 return price;
}
