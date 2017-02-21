window.onload = function(e) {
  var c = document.getElementById("myCanvas");
  var paper = c.getContext("2d");

  drawSun(paper);
  writeOce(paper);
  drawPool(paper);
  drawLadder(paper);
};

function drawSun(ctx) {
  ctx.beginPath();
  ctx.arc(95,50,40,0,2*Math.PI);
  ctx.stroke();
  ctx.fillStyle = "Gold";
  ctx.fill();
}

function writeOce(ctx) {
  var wordsX = 500;
  var wordSpacing = 30;
  var wordsY = 50;
  ctx.font = "30px Arial";
  ctx.fillStyle = "DeepPink";
  ctx.fillText("O", wordsX, wordsY);

  ctx.fillStyle = "DarkViolet";
  ctx.fillText("C", wordsX + wordSpacing, wordsY);

  ctx.fillStyle = "DeepSkyBlue";
  ctx.fillText("E", wordsX + wordSpacing*2, wordsY);
};

function drawPool(paper) {
  paper.fillStyle = "#9933ff";
  paper.fillRect(300, 530, 400, 50);
};

function drawLadder(paper) {
  var ladderHeight = 300;
  var ladderWidth = 90;
  var ladderX = 300;
  var ladderY = 530;

  paper.fillStyle = "#33ccff";
  paper.fillRect(ladderX, ladderY-ladderHeight, 5, ladderHeight);

  paper.fillStyle = "Fuchsia";
  paper.fillRect(ladderX + ladderWidth, ladderY - ladderHeight, 5, ladderHeight);

  var numberOfRungs = 13;
  var rungColors = ['#FFD700','DarkRed'];

}
