//called once start button is pressed
function startButtonPressed(){
  //chaning game states
  menuState = false;
  placingState = true;

  //setting all buttons in menu to inactive
  for (button of menuButtons){
    button.active = false;
  }

  for (cell of selectingCells){
    cell.active = true;
  }

  backButton.active = true;

  for (i=0;i<10;i++){
    for (j=0;j<10;j++){
      if (j >= 6){
        gameBoard[i][j].active = true;
      }
    }
  }

  generateRandomBoard()
}

//called once info button is pressed
function infoButtonPressed(){
}

//called once rules button is pressed
function rulesButtonPressed(){
}

function endTurnButtonPressed(){
  if(attackingState){
    /*
    attackingState = false;
    animatingState = true;
    startingAnimation = true;
    explodingFirstFrame = true;
    endTurnButton.active = false;
    */

    hideAllCells()
    neutralPageCounter = 3
    neutralPageState = true;
    endTurnButton.active = false;
    return
  }
  hideAllCells()
  neutralPageCounter = 4
  neutralPageState = true;
  endTurnButton.active = false;
  /*

  endTurnButton.active = false;
  for (cell of cells){
    cell.active = false;
    cell.hidden = false;
  }
  flipBoard()
  if(blueTurnState){
    changeActiveCells(0)
    redTurnState = true;
    blueTurnState = false;
  }
  else{
    changeActiveCells(1)
    blueTurnState = true;
    redTurnState = false;
  }
  */
}

function endPlacingButtonPressed(){

  if(gameBoard[9][9].indexes[1] == 0){
    hideAllCells()
    neutralPageCounter = 1
    neutralPageState = true;
    endPlacingButton.active = false;
    backButton.active = false
  }
  else{
    hideAllCells()
    neutralPageCounter = 2
    neutralPageState = true;
    endPlacingButton.active = false;
    backButton.active = false
  }
}

function backButtonPressed(){
  //chaning game states
  menuState = true;
  selectedCell = null;

  //setting all buttons in menu to inactive
  for (button of menuButtons){
    button.active = true;
  }

  for (cell of selectingCells){
    cell.active = false;
  }

  backButton.active = false;
  endPlacingButton.active = false;

  for (i=0;i<10;i++){
    for (j=0;j<10;j++){
      if (j >= 6){
        gameBoard[i][j].active = false;
      }
    }
  }

  generateCells()
  generateSelectingCells(0)
  updateSelectingCellsPositions()
}
