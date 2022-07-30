

module.exports = function towelSort (matrix) {
  arr = [];
  if(matrix === undefined){
    return arr
  }
  for(i=0; i<matrix.length; i++){
    if(i%2==0){
      arr = arr.concat(matrix[i])
    } else {
      arr = arr.concat(matrix[i].reverse())
    }
  }
  return arr
}
