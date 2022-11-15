// declare any variables you need here.
//small mountain
var drawSmallMountain = function (mountainPosition) {
  var mountX = mountainPosition.x;
  var mountY = mountainPosition.y;

  //mountain - land
  stroke(10);
  fill(117, 113, 16);
  ellipse(mountX, mountY, 200, 300);
  //mountain - snow
  noStroke();
  fill(248, 248, 241);
  arc(mountX, mountY - 80, 170, 170, 3.14159, 0);
};

var positions = [
  { x: 420, y: 300 },
  { x: 80, y: 300 }
];
//dog face
const dogFace = 120;
let dogFacePosX;
let dogFacePosY;
//dog eyes
let eyeSize = 38;
let pupilSize = eyeSize / 3;
//dog mouth
let mouthSize = dogFace / 5;
//dog nose
let dogNoseUpperLeftX;
let dogNoseLowerMiddleX;
let dogNoseUpperRightX;
let dogNoseUpperLeftAndRightY;
let dogNoseLowerMiddleY;
//dog mouth
let dogMouthPosY;
let dogMouthLeftPosX;
let dogMouthRightPosY;
let dogTonguePosY;
let dogTongueWidth;
let dogTongueLength;
//dog eyes
let dogRightOuterEyePosX;
let dogRightPupilPosX;
let dogRightOuterEyePosY;
let dogRightPupilPosY;
let dogLeftOuterEyePosX;
let dogLeftPupilPosX;
let dogLeftPupilPosY;
//blanket wrap
let blanketSize = dogFace * 1.66666666667;
let blanketFuzz = dogFace * 1.07;
//dog bone
let dogBoneMidX = 300;
let dogBoneMidY = 350;
let dogBoneRightEdgeX = dogBoneMidX + 120;
let dogBoneLeftEdgeX = 380;
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 500);
}

function draw() {
  //call your functions and do your drawing here.
  background(48, 208, 217);
  largeMountain();
  for (var i = 0; i < positions.length; i++) {
    drawSmallMountain(positions[i]);
  }
  floor();
  doggyInBlanket();
  refreshMe();
  bone();
  yummy();
  lickBone();
  snowflakes();
}

// write functions here that are called in your setup or draw function.

const doggyInBlanket = () => {
  //interactivity - dog position
  dogFacePosX = mouseX;
  dogFacePosY = mouseY;
  //movement - dog nose
  dogNoseUpperLeftX = dogFacePosX - 15;
  dogNoseLowerMiddleX = dogFacePosX;
  dogNoseUpperRightX = dogFacePosX + 15;
  dogNoseUpperLeftAndRightY = dogFacePosY + 6.125;
  dogNoseLowerMiddleY = dogFacePosY + 17.5;
  //movement - dog mouth
  dogMouthPosY = dogFacePosY + 17.5;
  dogMouthLeftPosX = dogFacePosX - 10;
  dogMouthRightPosY = dogFacePosX + 10;
  dogTonguePosY = dogFacePosY + 27.5625;
  dogTongueWidth = dogFace - 100;
  dogTongueLength = dogFace - 90;
  //movement - dog eyes
  dogRightOuterEyePosX = dogFacePosX + 30;
  dogRightPupilPosX = dogRightOuterEyePosX + 5;
  dogRightOuterEyePosY = dogFacePosY - 13.125;
  dogRightPupilPosY = dogRightOuterEyePosY + 5.249;
  dogLeftOuterEyePosX = dogFacePosX - 30;
  dogLeftPupilPosX = dogLeftOuterEyePosX - 5;
  dogLeftPupilPosY = dogFacePosY - 14.875;

  //drawing
  noStroke();
  //outer blanket
  fill(245, 103, 240);
  ellipse(dogFacePosX, dogFacePosY, blanketSize, blanketSize);
  //blanket border
  fill(247, 247, 242);
  ellipse(dogFacePosX, dogFacePosY, blanketFuzz, blanketFuzz);
  //dog face
  fill(219, 209, 66);
  ellipse(dogFacePosX, dogFacePosY, dogFace, dogFace);
  //dog eyes - outer - right
  fill(247, 247, 242);
  ellipse(dogRightOuterEyePosX, dogRightOuterEyePosY, eyeSize, eyeSize);
  //dog eyes - pupil - right
  fill(10, 10, 10);
  ellipse(dogRightPupilPosX, dogRightPupilPosY, pupilSize, pupilSize);
  //dog eyes - outer - left
  fill(247, 247, 242);
  ellipse(dogLeftOuterEyePosX, dogRightOuterEyePosY, eyeSize, eyeSize);
  //dog eyes - pupil - left
  fill(10, 10, 10);
  ellipse(dogLeftPupilPosX, dogLeftPupilPosY, pupilSize, pupilSize);
  //dog tongue
  fill(252, 47, 40);
  ellipse(dogFacePosX, dogTonguePosY, dogTongueWidth, dogTongueLength);
  //dog mouth
  fill(247, 247, 247);
  ellipse(dogMouthLeftPosX, dogMouthPosY, mouthSize, mouthSize);
  ellipse(dogMouthRightPosY, dogMouthPosY, mouthSize, mouthSize);
  //dog nose
  fill(10, 10, 10);
  triangle(
    dogNoseUpperLeftX,
    dogNoseUpperLeftAndRightY,
    dogNoseLowerMiddleX,
    dogNoseLowerMiddleY,
    dogNoseUpperRightX,
    dogNoseUpperLeftAndRightY
  );
};

const bone = () => {
  noStroke();
  fill(240, 232, 213);
  rect(dogBoneMidX, dogBoneMidY, 120, 35);
  ellipse(dogBoneMidX, dogBoneMidY, 40, 40);
  ellipse(dogBoneMidX, dogBoneLeftEdgeX, 40, 40);
  ellipse(dogBoneRightEdgeX, dogBoneMidY, 40, 40);
  ellipse(dogBoneRightEdgeX, dogBoneLeftEdgeX, 40, 40);
};

const lickBone = () => {
  if (
    mouseIsPressed &&
    mouseX > 320 &&
    mouseX < 400 &&
    mouseY > 300 &&
    mouseY < 320
  ) {
    noStroke();
    fill(252, 47, 40);
    ellipse(mouseX, mouseY + 40, 15, 26);
  }
};

const floor = () => {
  fill(15, 73, 24);
  rect(0, 300, 500, 200);
};

const largeMountain = () => {
  //large mountain
  let largeMountX = 200;
  let largeMountY = 300;
  //mountain - land
  stroke(10);
  fill(117, 113, 16);
  ellipse(largeMountX, largeMountY, 400, 400);
  //mountain - snow
  noStroke();
  fill(243, 243, 237);
  arc(220, largeMountY - 120, 310, 210, 3.14159, 0);
};

const yummy = () => {
  var yummyWords = 75;

  while (
    mouseIsPressed &&
    mouseX > 320 &&
    mouseX < 400 &&
    mouseY > 300 &&
    mouseY < 320 &&
    yummyWords < 450
  ) {
    fill(12, 12, 12);
    textSize(50);
    text("yummy!", 50, yummyWords);
    yummyWords += 70;
  }
};

let snowflakes = () => {
  var xPositions = [
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500)
  ];
  var yPositions = [
    0,
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500),
    random(0, 500)
  ];

  noStroke();
  fill(253, 252, 240);

  for (var i = 0; i < xPositions.length; i++) {
    ellipse(xPositions[i], yPositions[i] % 500, 10, 10);
    yPositions[i] += 0.1;
  }
};

let refreshMe = () => {
  fill(15, 73, 24);
  textSize(12);
  text("Refresh the page once for a surprise!", 275, 20);
};
