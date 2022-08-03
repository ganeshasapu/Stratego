explodingFirstFrame = true
bothExploding = false;
//generates all cells and places them in cells array
function generateCells(){
  gameBoard = []
  cells = []
  //generating 10x10 array
  for (i=0; i<10; i++){
    gameBoard.push([])
    for (j=0;j<10;j++){
      //setting cell to appropriate lake piece if correct cor, else setting to blank
      if (i == 2 && j == 4){
        newCell = new LakePiece([i, j], "13,0,0")
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
      else if(i == 2 && j == 5){
        newCell = new LakePiece([i, j], "13,0,2")
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
      else if(i == 3 && j == 4){
        newCell = new LakePiece([i, j], "13,0,1")
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
      else if(i == 3 && j == 5){
        newCell = new LakePiece([i, j], "13,0,3")
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
      else if(i == 6 && j == 4){
        newCell = new LakePiece([i, j], "13,0,0")
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
      else if(i == 6 && j == 5){
        newCell = new LakePiece([i, j], "13,0,2")
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
      else if(i == 7 && j == 4){
        newCell = new LakePiece([i, j], "13,0,1")
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
      else if(i == 7 && j == 5){
        newCell = new LakePiece([i, j], "13,0,3")
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
      else{
        newCell = new MoveablePiece([i, j])
        gameBoard[i].push(newCell)
        cells.push(newCell)
      }
    }
  }
  //changing lower and upper 4 rows to appropriate colours
  for (cell of cells){
    if (cell.cor[1] <= 3){
      cell.updateCellImage("0,1")
    }

    if (cell.cor[1] >= 6){
      cell.updateCellImage("0,0")
    }
  }
}

//generates all cells used to select and place troops
function generateSelectingCells(colourInt){

  selectingCells = []
  newSelectingCell = new SelectingCell(1, "10," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(1, "9," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(2, "8," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(3, "7," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(4, "6," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(4, "5," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(4, "4," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(5, "3," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(8, "2," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(1, "1," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(6, "11," + colourInt)
  selectingCells.push(newSelectingCell)
  newSelectingCell = new SelectingCell(1, "12," + colourInt)
  selectingCells.push(newSelectingCell)
}

//generates all textBoxes used to center text
function generateTextBoxes(){
  //textBoxes are used to predetermine the width of a piece of text, so that it can be centered
  pickingTitleTextBox = gameFont.textBounds("Stratego", 0, 0, 70);
  menuTitleTextBox = gameFont.textBounds("Stratego", 0, 0, 100);

  continueTextBox = gameFont.textBounds("Click to Continue", 0, 0, 50);

  startButtonTextBox = gameFont.textBounds("Start", 0, 0, 50);
  rulesButtonTextBox = gameFont.textBounds("Rules", 0, 0, 50);
  infoButtonTextBox = gameFont.textBounds("Info", 0, 0, 50);

  endTurnTextBox = gameFont.textBounds("End Turn", 0, 0, 50);
  endPlacingTextBox = gameFont.textBounds("End Placing", 0, 0, 40);
  arrowButtonBox = gameFont.textBounds("", 0, 0, 15);
  redWonTextBox = gameFont.textBounds("Red is the Winner!", 0, 0, 70);
  blueWonTextBox = gameFont.textBounds("Blue is the Winner!", 0, 0, 70);

}

//generates all buttons and places them in buttons array
function generateButtons(){
  //menu  buttons
  startButton = new Button(buttonLargeNormal, buttonLargeDark, buttonLargeLight, "Start", [300, 300], startButtonPressed, sizeValue=50, fontValue=gameFont, fillValue=[189, 157, 0], strokeValue=0, strokeWeightValue=3, startButtonTextBox)
  menuButtons.push(startButton)
  startButton.active = true;

  rulesButton = new Button(buttonLargeNormal, buttonLargeDark, buttonLargeLight, "Rules", [300, 450], rulesButtonPressed, sizeValue=50, fontValue=gameFont, fillValue=[189, 157, 0], strokeValue=0, strokeWeightValue=3, rulesButtonTextBox)
  menuButtons.push(rulesButton)
  rulesButton.active = true;

  infoButton = new Button(buttonLargeNormal, buttonLargeDark, buttonLargeLight, "Info", [300, 600], infoButtonPressed, sizeValue=50, fontValue=gameFont, fillValue=[189, 157, 0], strokeValue=0, strokeWeightValue=3, infoButtonTextBox)
  menuButtons.push(infoButton)
  infoButton.active = true;

  backButton = new Button(arrowButtonNormal, arrowButtonDark, arrowButtonLight, "", [25, 25], backButtonPressed, sizeValue=15, fontValue=gameFont, fillValue=[189, 157, 0], strokeValue=0, strokeWeightValue=1, arrowButtonBox)
  endTurnButton = new Button(buttonLargeNormal, buttonLargeDark, buttonLargeLight, "End Turn", [325, 700], endTurnButtonPressed, sizeValue=50, fontValue=gameFont, fillValue=[189, 157, 0], strokeValue=0, strokeWeightValue=3, endTurnTextBox)
  endPlacingButton = new Button(buttonLargeNormal, buttonLargeDark, buttonLargeLight, "End Placing", [300, 700], endPlacingButtonPressed, sizeValue=40, fontValue=gameFont, fillValue=[189, 157, 0], strokeValue=0, strokeWeightValue=3, endPlacingTextBox)

}

function generateRandomBoard(){
  for (i=0;i<10;i++){
    for (j=0;j<4;j++){
      randSelCell = random(selectingCells)
      while(randSelCell.num == 0){
        randSelCell = random(selectingCells)
      }
      updateCell(gameBoard[i][j + 6], randSelCell)
    }
  }
}

//displays all cells in the grid
function displayCells(){
  //displays all cells in the gameBoard
  for(cell of cells){
    if(!(cell instanceof LakePiece)){
      //If cell is pressed, display dark
      if (cell.hidden){
        if (cell.is_hovering){
          cell.displayCellHiddenLight()
        }
        else if (cell.is_pressed_down){
          cell.displayCellHiddenDark()
        }
        //Normally, display normal image
        else{
          cell.displayCellHiddenNormal()
        }
      }
      else if(cell.attacked){
        if (cell.is_hovering){
          cell.displayCellAttackedLight()
        }
        else if (cell.is_pressed_down){
          cell.displayCellAttackedDark()
        }
        //Normally, display normal image
        else{
          cell.displayCellAttackedNormal()
        }
        cell.displayCellSwordIcon()
      }
      else if (cell.is_pressed_down){
        cell.displayCellDark()
      }
      //If cell is hovered on, display light
      else if (cell.is_hovering){
        cell.displayCellLight()
      }
      //Normally, display normal image
      else{
        cell.displayCellNormal()
      }
    }
    //displaying lakePiece image
    else{
      cell.displayCellImage()
    }
  }
  for (cell of highlightedCells){
    noFill()
    stroke(7, 199, 4)
    strokeWeight(2)
    rect((cornerPos[0] + (cell.cor[0] * cellWidth)), (cornerPos[1] + (cell.cor[1] * cellWidth)), 50, 50)
  }
  if (clickedCell != null){
    noFill()
    stroke(200)
    strokeWeight(2)
    rect((cornerPos[0] + (clickedCell.cor[0] * cellWidth)), (cornerPos[1] + (clickedCell.cor[1] * cellWidth)), 50, 50)
  }
}

function hideAllCells(){
  for (cell of cells){
    if (!(cell.indexes[1] == 2) && !(cell instanceof LakePiece)){
      cell.hidden = true
      cell.active = false
    }
  }
}

//displays all active buttons
function displayButtons(){
  for(button of buttons){
    if (button.active){
      //displaying dark image if pressed down
      if (button.is_pressed_down){
        button.displayButtonDark()
      }
      //displaying light image if button is hovered on
      else if (button.is_hovering){
        button.displayButtonLight()
      }
      //displaying normal image normally
      else{
        button.displayButtonNormal()
      }
    }
  }
}

//displays all selecting cells
function displayBlueSelectingCells(){
  for(cell of selectingCells){
    //only displaying if active and amount is >0
    if(cell.num != 0 && cell.active){
      //If cell is pressed, display dark
      if (cell.is_pressed_down){
        cell.displayCellDark()
      }
      //If cell is hovered on, display light
      else if (cell.is_hovering){
        cell.displayCellLight()
      }
      //Normally, display normal image
      else{
        cell.displayCellNormal()
      }

      //displaying accompanying text that displayes num of cell left
      textSize(30);
      fill(203, 173, 13)
      stroke(1)
      strokeWeight(1)

      text(cell.num, cell.pos[0] + 67, cell.pos[1] + 35);
    }
  }
  if (selectedCell != null){
    noFill()
    stroke(200)
    strokeWeight(2)
    rect(selectedCell.pos[0], selectedCell.pos[1], 50, 50)
  }
}

//called once a selecting cell runs out or goes from 0 -> 1
//readjusts position of selecting cells
function updateSelectingCellsPositions(){
  count = 0;
  for (cell of selectingCells){
    if (cell.num != 0){
      count += 1;
    }
  }
  numCellsPerFirstRow = Math.floor(count/ 2)
  numCellsPerSecondRow = count - numCellsPerFirstRow
  firstRowLength = numCellsPerFirstRow * 125
  secondRowLength = numCellsPerSecondRow * 125
  firstStartingOffset = (firstRowLength / 2) - 25
  secondStartingOffset = (secondRowLength / 2) - 25

  primaryCount = 0;
  secondCount = 0;
  for (cell of selectingCells){
    if(cell.num != 0){
      if(secondCount < numCellsPerFirstRow){
        selectingCells[primaryCount].pos = [(width/2 - firstStartingOffset) + (secondCount * 125), cornerPos[1] + 525]
        secondCount += 1
      }
      else{
        selectingCells[primaryCount].pos = [(width/2 - secondStartingOffset) + ((secondCount - numCellsPerFirstRow) * 125), cornerPos[1] + 625]
        secondCount += 1
      }
    }
    primaryCount += 1;
  }
}

//called once a gameBoard cell is clicked once selecting cell is picked
//updates cell on gameBoard to selecting cell
function updateCell(cell, selectCell){
  if(cell.cor[1] >= 6){
    if(cell.indexes[0] != 0){
      for(selCell of selectingCells){
        if(selCell.key == cell.key){
          selCell.num += 1;
          if (selCell.num == 1){
            updateSelectingCellsPositions()
            selCell.active = true;
          }
        }
      }
    }
    selectCell.num -= 1
    cell.updateCellImage(selectCell.key)
    cell.key = selectCell.key
    if (selectCell.num == 0){
      checkDonePicking()
      updateSelectingCellsPositions()
      selectedCell = null;
      selectCell.active = false;
    }
  }
}

function moveCell(oldCell, newCell){
  newCell.updateCellImage(oldCell.key)
  oldCell.updateCellImage("0,2")

  oldCell.active = false;
  newCell.active = true;

  clickedCell = null;
  recentlyMovedCell = newCell
  previousCell = oldCell
}

function checkDonePicking(){
  for (cell of selectingCells){
    if (cell.num != 0){
      return
    }
  }
  if(placingState){
    donePlacing = true
    endPlacingButton.active = true;
  }
  else{
    redDonePicking = true
    endPlacingButton.active = true;
  }
}

function checkRePicking(){
  count = 0
  for (cell of selectingCells){
    if (cell.num == 1){
      count += 1;
    }
  }
  if (count == 1){
    if(donePlacing){
      donePlacing = false
      endPlacingButton.active = false;
    }
    else{
      redDonePicking = false
      endPlacingButton.active = false;
    }
  }
}

function changeActiveCells(colourInt){

  for (cell of cells){
    if (cell.indexes[1] != colourInt && cell.indexes[1] != 2 && cell.indexes[0] != 12 && cell.indexes[0] != 11 && cell.indexes[0] != 13){
      cell.active = true;
      cell.hidden = false;
    }
    else if((cell.indexes[0] == 11 || cell.indexes[0] == 12) && cell.indexes[1] != colourInt || cell.indexes[0] == 13){

    }
    else if(cell.indexes[1] == colourInt){
      cell.hidden = true;
      cell.active = false;
    }
  }
}

function highlightNearbyActive(cell){
  x = cell.cor[0]
  y = cell.cor[1]

  if (cell.rank == 2){
    offsetVal = 1
    if(x - offsetVal != -1){
      while (true){
        if (gameBoard[x - offsetVal][y].indexes[0] != 13 && gameBoard[x - offsetVal][y].indexes[1] != cell.indexes[1]){
          highlightedCells.push(gameBoard[x - offsetVal][y])
          if (gameBoard[x - offsetVal][y].indexes[1] != 2){
            break
          }
          offsetVal += 1
        }
        else{
          offsetVal = 1
          break
        }
      }
    }
    if(x + offsetVal != 10){
      while (true){
        if (gameBoard[x + offsetVal][y].indexes[0] != 13 && gameBoard[x + offsetVal][y].indexes[1] != cell.indexes[1]){
          highlightedCells.push(gameBoard[x + offsetVal][y])
          if (gameBoard[x + offsetVal][y].indexes[1] != 2){
            break
          }
          offsetVal += 1
        }
        else{
          offsetVal = 1
          break
        }
      }
    }
    if(y + offsetVal != -1){
      while (true){
        if (gameBoard[x][y - offsetVal].indexes[0] != 13 && gameBoard[x][y - offsetVal].indexes[1] != cell.indexes[1]){
          highlightedCells.push(gameBoard[x][y - offsetVal])
          if (gameBoard[x][y - offsetVal].indexes[1] != 2){
            break
          }
          offsetVal += 1
        }
        else{
          offsetVal = 1
          break
        }
      }
    }
    if(y + offsetVal != 10){
      while (true){
        if (gameBoard[x][y + offsetVal].indexes[0] != 13 && gameBoard[x][y + offsetVal].indexes[1] != cell.indexes[1]){
          highlightedCells.push(gameBoard[x][y + offsetVal])
          if (gameBoard[x][y + offsetVal].indexes[1] != 2){
            break
          }
          offsetVal += 1
        }
        else{
          offsetVal = 1
          break
        }
      }
    }
    for(cell of highlightedCells){
      cell.active = true;
    }
    return
  }

  if(x != 0){
    if(gameBoard[x -1][y].indexes[0] != 13 && gameBoard[x - 1][y].indexes[1] != cell.indexes[1]){
      highlightedCells.push(gameBoard[x -1][y])
    }
  }
  if(x != 9){
    if(gameBoard[x +1][y].indexes[0] != 13 && gameBoard[x + 1][y].indexes[1] != cell.indexes[1]){
      highlightedCells.push(gameBoard[x +1][y])
    }
  }
  if(y != 0){
    if(gameBoard[x][y - 1].indexes[0] != 13 && gameBoard[x][y - 1].indexes[1] != cell.indexes[1]){
      highlightedCells.push(gameBoard[x][y - 1])
    }
  }
  if(y != 9){
    if(gameBoard[x][y + 1].indexes[0] != 13 && gameBoard[x][y + 1].indexes[1] != cell.indexes[1]){
      highlightedCells.push(gameBoard[x][y + 1])
    }
  }
  for(cell of highlightedCells){
    cell.active = true;
  }
}

function removeCell(cell){
  for(selCell of selectingCells){
    if(selCell.key == cell.key){
      selCell.num += 1;
      if (selCell.num == 1){
        updateSelectingCellsPositions()
        selCell.active = true;
        checkRePicking()
      }
      if(selCell.indexes[1] == 0){
        cell.updateCellImage("0,0")
      }
      else{
        cell.updateCellImage("0,1")
      }
    }
  }
}

function flipBoard(){
  newBoard = [];
  newCells = []
  for (i=0;i<10;i++){
    newRow = [];
    for (j=0;j<10;j++){
      gameBoard[i][j].cor = [9-i, 9-j]
      newRow.unshift(gameBoard[i][j]);
      if (gameBoard[i][j] instanceof LakePiece){
        if(gameBoard[i][j].image == lTL){
          gameBoard[i][j].updateCellImage("13,0,3")
        }
        else if(gameBoard[i][j].image == lTR){
          gameBoard[i][j].updateCellImage("13,0,2")
        }
        else if(gameBoard[i][j].image == lBL){
          gameBoard[i][j].updateCellImage("13,0,1")
        }
        else{
          gameBoard[i][j].updateCellImage("13,0,0")
        }
      }
    }
    newBoard.unshift(newRow)
  }
  gameBoard = newBoard;
}

function animate(){

  animationClock = round(millis()) - timeStart
  if (skipAnimation){
    skipAnimation = false
    animationClock = 7501
  }
  fill(0, 0, 0, 175)
  noStroke()
  rect(0, 0, 850, 850)

  noFill()
  strokeWeight(15)
  stroke(color(172, 19, 237))
  rect(0, 0, width, height)


  if (animationClock < 1000){
    //image(cellImages[clickedCell.indexes[0]][clickedCell.indexes[1]][3], 200, 300)
    copy(cellImages[attackingCell.indexes[0]][attackingCell.indexes[1]][3], 0, 0, 400, 400, 125, 300, 250, 250)

    //image(cellImages[attackedCell.indexes[0]][attackedCell.indexes[1]][3], 550, 300)
    copy(cellImages[attackedCell.indexes[0]][attackedCell.indexes[1]][3], 0, 0, 400, 400, 475, 300, 250, 250)

    fill(0, 0, 0)
    noStroke()
    rect(475, 300, 250, 250)
  }
  else if (animationClock >= 1000 && animationClock < 3500){
    //image(cellImages[clickedCell.indexes[0]][clickedCell.indexes[1]][3], 200, 300)
    copy(cellImages[attackingCell.indexes[0]][attackingCell.indexes[1]][3], 0, 0, 400, 400, 125, 300, 250, 250)

    //image(cellImages[attackedCell.indexes[0]][attackedCell.indexes[1]][3], 550, 300)
    copy(cellImages[attackedCell.indexes[0]][attackedCell.indexes[1]][3], 0, 0, 400, 400, 475, 300, 250, 250)
    fill(0, 0, 0, 255 - ((animationClock - 1000) / 10))
    noStroke()
    rect(475, 300, 250, 250)
  }
  else if (animationClock >= 3500 && animationClock <= 7500){
    explodingState = true;
    if (attackingCell.indexes[0] == 1 && attackedCell.indexes[0] == 10){
      console.log("7")
      copy(cellImages[attackingCell.indexes[0]][attackingCell.indexes[1]][3], 0, 0, 400, 400, 125, 300, 250, 250)
      explode(attackedCell, "attacked")
    }
    else if(attackedCell.indexes[0] == 11){
      console.log("6")
      if(attackingCell.indexes[0] == 3){
        copy(cellImages[attackingCell.indexes[0]][attackingCell.indexes[1]][3], 0, 0, 400, 400, 125, 300, 250, 250)
        explode(attackedCell, "attacked")
      }
      else{
        console.log("5")
        copy(cellImages[attackedCell.indexes[0]][attackedCell.indexes[1]][3], 0, 0, 400, 400, 475, 300, 250, 250)
        explode(attackingCell, "attacking")
      }
    }
    else if(attackedCell.indexes[0] == 12){
      console.log("Game win")
      copy(cellImages[attackingCell.indexes[0]][attackingCell.indexes[1]][3], 0, 0, 400, 400, 125, 300, 250, 250)
      explode(attackedCell, "attacked")
    }
    else if(attackingCell.rank > attackedCell.rank){
      console.log("4")

      copy(cellImages[attackingCell.indexes[0]][attackingCell.indexes[1]][3], 0, 0, 400, 400, 125, 300, 250, 250)
      explode(attackedCell, "attacked")
    }
    else if(attackedCell.rank > attackingCell.rank){
      console.log("3")
      copy(cellImages[attackedCell.indexes[0]][attackedCell.indexes[1]][3], 0, 0, 400, 400, 475, 300, 250, 250)
      explode(attackingCell, "attacking")
    }
    else if(attackedCell.rank == attackingCell.rank){
      console.log("1")
      explode(attackingCell, "attacking", optionalCell=attackedCell, optionalCellType="attacked")
    }
  }
  if(animationClock >= 7500){
    explodingState = false
    animatingState = false
    attackedCell.attacked = false;
    endTurnButton.active = false;

    if (attackingCell.indexes[0] == 1 && attackedCell.indexes[0] == 10){
      moveCell(attackingCell, attackedCell)
    }

    else if(attackedCell.indexes[0] == 11){
      if(attackingCell.indexes[0] == 3){
        moveCell(attackingCell, attackedCell)
      }
      else{
        attackingCell.updateCellImage("0,2")
      }
    }
    else if(attackedCell.indexes[0] == 12){
      console.log("Tester")
      if(blueTurnState){
        blueWonState = true
      }
      else{
        redWonState = true
      }
      redTurnState = false
      blueTurnState = false
      for(i=0;i<24;i++){
        newBeam = new Beam(i*15, i)
        beams.push(newBeam)
      }
      return
  }
    else if(attackingCell.rank > attackedCell.rank){
      moveCell(attackingCell, attackedCell)
    }
    else if(attackedCell.rank > attackingCell.rank){
      attackingCell.updateCellImage("0,2")
    }
    else if(attackedCell.rank == attackingCell.rank){
      attackingCell.updateCellImage("0,2")
      attackedCell.updateCellImage("0,2")
    }

    for (tCell of cells){
      tCell.active = false
      tCell.is_hovering = false
      tCell.hidden = false;
      tCell.is_pressed_down = false
    }
    flipBoard()
    endTurnButton.active = false;
    attackingCell = null;
    attackedCell = null;
    highlightedCells = []

    hideAllCells()
    neutralPageCounter = 5
    neutralPageState = true;
  }
}

function explode(explodingCell, cellType, optionalCell=null, optionalCellType=null){

  if (explodingFirstFrame){
    explodingCells = []
    for(i=0;i<10;i++){
      for (j=0;j<10;j++){
          newExploding = new ExplodingCell(explodingCell, [i, j], cellType)
          explodingCells.push(newExploding)
      }
    }
    if(optionalCell != null){
      for(i=0;i<10;i++){
        for (j=0;j<10;j++){
            newExploding = new ExplodingCell(optionalCell, [i, j], optionalCellType)
            explodingCells.push(newExploding)
        }
      }
    }
    explodingFirstFrame = false
  }

  for(expCell of explodingCells){
    randNum = int(random(1, 26));
    if (randNum == 1){
      expCell.crumbling = true
    }
    if (animationClock >= 6000){
      expCell.crumbling = true
    }
    expCell.update()
  }
}
