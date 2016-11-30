SquaresContainer.prototype.getInnerHTML = function() {
  if(this.count100 == 1) return generateSquares100Inner();

  var inner = '';
  var numCols = Math.ceil(Math.sqrt(this.count100));
  console.log(numCols+" nc");
  // var base = (numCols * numCols) / this.count100;
  var aboveBase = this.count100 -((numCols * numCols) - numCols);
  console.log(aboveBase+" ab");
  for(var i = 0; i < numCols; ++i) {
    if(i < aboveBase) {
      inner += generateSquares100InnerMultipleBlocks(10 * numCols);//numCols can be thought as just the squareroot of this.count100
    } else {
      console.log(10 * Math.floor((numCols / 2)));
      inner += generateSquares100InnerMultipleBlocks(10 * Math.floor((numCols / 2)));
    }
  }
  return inner;
}
