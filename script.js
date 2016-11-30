var squares5Inner,
    squares10Inner,
    squares100Inner;

var squaresContainer = new SquaresContainer();

document.addEventListener("DOMContentLoaded", function(event) {
  squares5Inner = generateSquares5Inner();
  squares10Inner = generateSquares10Inner()
  squares100Inner = generateSquares100Inner();

  document.getElementById("squares5-wrap").innerHTML = squares5Inner;
  document.getElementById("squares10-wrap").innerHTML = squares10Inner;
  document.getElementById("squares100-wrap").innerHTML = squares100Inner;

});

function generateSquaresInner(numSquares, innerContent) {
  var inner = '';
  for(var i =0; i < numSquares; ++i) {
    inner += innerContent;
  }
  return inner;
}

function generateSquares5Inner() {
  return generateSquaresInner(5, "<div class='block'></div>");
}

function generateSquares10Inner() {
  return generateSquaresInner(10, "<div class='block'></div>");
}

function generateSquaresInnerVertical(rows) {
  return generateSquaresInner(rows, "<div class='block-col-block'></div>");
}

function generateSquares100Inner() {
  var inner = '';
  var innerVertical = generateSquaresInnerVertical(10);
  for(var i = 0; i < 10; ++i) {
    inner += "<div class='block-col'>";
    inner += innerVertical;
    inner += '</div>';
  }
  return inner;
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  // console.log(ev);
  selectedDivId = ev.srcElement.id;
  // console.log(selectedDivId);
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var div = squaresContainer.generateGameBoxInner(data);

  // console.log(squaresContainer);

  document.getElementById("squares-container").appendChild(div);
}

function check() {
  var x = 342 + 132;
  alert('your answer was: '+squaresContainer.totalCount+
    '\nthe correct answer was: '+ x+
    '\nyour answer was '+(squaresContainer.totalCount == x ? 'correct!' : 'incorrect'));
}
