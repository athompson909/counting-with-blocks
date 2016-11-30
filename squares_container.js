var limit = 800;

var SquaresContainer = function() {
  this.count1 = 0;
  this.count2 = 0;
  this.count5 = 0;
  this.count10 = 0;
  this.count100 = 0;

  this.totalCount = 0;
}


SquaresContainer.prototype.generateClassBasedOnId = function(id) {
  switch(id) {
    case "squares1-wrap": return "game-box-squares1";
    case "squares2-wrap": return "game-box-squares2";
    case "squares5-wrap": return "game-box-squares5";
    case "squares10-wrap": return "game-box-squares10";
    case "squares100-wrap": return "game-box-squares100";
  }
}

SquaresContainer.prototype.addBox = function(className) {
  switch (className) {
    case "game-box-squares1":
      this.count1++;
      this.totalCount += 1;
      break;
    case "game-box-squares2":
      this.count2++;
      this.totalCount += 2;
      break;
    case "game-box-squares5":
      this.count5++;
      this.totalCount += 5;
      break;
    case "game-box-squares10":
      this.count10++;
      this.totalCount += 10;
      break;
    case "game-box-squares100":
      this.count100++;
      this.totalCount += 100;
      break;
  }
}

SquaresContainer.prototype.generateGameBoxInner = function(data) {

  var div = document.createElement("div");
  div.className = this.generateClassBasedOnId(data);

  this.addBox(div.className);

  div.innerHTML = this.getInnerHTML();

  return div;
}

SquaresContainer.prototype.getInnerHTML = function() {
  if(this.count10 == 10) {
    this.count10 = 0;
    this.count100 += 1;
  }
  if(this.count100 == 0) return this.generateSmallerCountsInner(0);

  var inner = '';
  var aboveBase = this.count100 % 4;
  if(aboveBase == 0) aboveBase = 4;
  console.log(aboveBase+' ab');
  var depth = Math.ceil((this.count100) / 4);
  console.log(depth);

  for(var i = 0; i < 4; ++i) {
    if(i == this.count100) break;
    if(i < aboveBase) {
      if(i % 4 == 0) {
        inner += this.generateSmallerCountsInner(depth * 10);
      } else {
        inner += generateSquares100InnerMultipleBlocks(depth * 10);
      }
    } else {
      inner += generateSquares100InnerMultipleBlocks(((depth - 1)* 10));
    }

  }
  return inner;
}

SquaresContainer.prototype.generateSmallerCountsInner = function(count100height) {
  var inner = '';
  var rowsArr = [
    this.count10+this.count5+this.count2+this.count1,
    this.count10+this.count5+this.count2,
    this.count10+this.count5,
    this.count10+this.count5,
    this.count10+this.count5,
    this.count10,
    this.count10,
    this.count10,
    this.count10,
    this.count10
  ];
  for(var i = 0; i < 10; ++i) {
    var innerVertical = generateSquaresInnerVertical(count100height + rowsArr[i]);
    inner += "<div class='block-col'>";
    inner += innerVertical;
    inner += '</div>';
  }
  return inner;
}


function generateSquares100InnerMultipleBlocks(rows) {
  var inner = '';
  var innerVertical = generateSquaresInnerVertical(rows);
  for(var i = 0; i < 10; ++i) {
    inner += "<div class='block-col'>";
    inner += innerVertical;
    inner += '</div>';
  }
  return inner;
}
