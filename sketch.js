//2D array with cells in correct places
gameBoard = []

//arrays to access all of a type of object
cells = []
buttons = []
explodingCells = []
beams = []

//arrays to set buttons change active value
menuButtons = []

highlightedCells = []

//array used for placing screen
selectingCells = []
selectedCell = null;
clickedCell = null;
attackedCell = null;
attackingCell = null;
recentlyMovedCell = null;
previousCell = null;

/*
array with all cell images stored conveniently (type x colour x darkness)
3x3 - empty
2x3 - 1
2x3 - 2
2x3 - 3
2x3 - 4
2x3 - 5
2x3 - 6
2x3 - 7
2x3 - 8
2x3 - 9
2x3 - 10
2x3 - Bomb
2x3 - Flag
1x4 - Lake
*/

cellImages = []
//dimensions for game
cellWidth = 50
cornerPos = [175, 125];

beamRadius = 700

//gamestate variables
menuState = true;
tutorialState = false;
infoState = false;

placingState = false;
donePlacingState = false;

blueTurnState = false;
redTurnState = false;

timeStart = 0;
startingAnimation = false;
skipAnimation = false;
attackingState = false;
animatingState = false;
explodingState = false;
neutralPageState = false;
neutralPageCounter = 0;

gameOverState = false
blueWonState = false
redWonState = false

//function used to load assets
function preload(){
  //loads all images used in game
  loadImages()
  //loading font used
  gameFont = loadFont('misc/Fonts/Seagram.ttf');

  //placing all images in cellImages array for ease of access
  placeImages()
}

//Checks if mouse is hovering over cells or buttons
function checkMouse(){
  //gameBoard cells
	for (cell of cells){
    if (cell.active){
      if(!(cell instanceof LakePiece)){
        cell.is_pressed_down = false;
        cell.is_hovering = false;
        //if mouse is over cell
    		if ((cornerPos[0] + (cell.cor[0] * cellWidth)) < mouseX && mouseX < (cornerPos[0] + (cell.cor[0] * cellWidth)) + cellWidth && (cornerPos[1] + (cell.cor[1] * cellWidth)) < mouseY && mouseY < (cornerPos[1] + (cell.cor[1] * cellWidth)) + cellWidth){
    			cell.is_hovering = true;
          //if the mouse is pressed down on
          if (mouseIsPressed){
            cell.is_pressed_down = true;
            cell.is_hovering = false;
          }
          else{
            cell.is_pressed_down = false;
          }
    		}
        else{
    			cell.is_hovering = false;
    		}
      }
    }
  }

  //selecting cells
  for (cell of selectingCells){
    cell.is_pressed_down = false;
    cell.is_hovering = false;
    //if mouse is over cell
		if (cell.pos[0] < mouseX && mouseX < cell.pos[0] + cellWidth && cell.pos[1] < mouseY && mouseY < cell.pos[1] + cellWidth && cell.active){
			cell.is_hovering = true;
      //if the mouse is pressed down on
      if (mouseIsPressed){
        cell.is_pressed_down = true;
        cell.is_hovering = false;
      }
      else{
        cell.is_pressed_down = false;
      }
		}
  }

  //buttons
  for (button of buttons){
    if (button.active){
      button.is_pressed_down = false;
      button.is_hovering = false;
      //if mouse is over button
      if (button.cor[0] < mouseX && mouseX < button.cor[0] + button.imageNormal.width && button.cor[1] < mouseY && mouseY < button.cor[1] + button.imageNormal.height){
        button.is_hovering = true;
        //if mouse is pressing down on button
        if (mouseIsPressed){
          button.is_pressed_down = true;
          button.is_hovering = false;
        }
        else{
          cell.is_pressed_down = false;
        }
      }
    }
  }
}

//Called when mouse is released
function mouseClicked(){
  if(animatingState){
    skipAnimation = true;
  }
  if(neutralPageState){
    neutralPageState = false
    if(neutralPageCounter == 1){
      flipBoard()
      generateSelectingCells(1)
      updateSelectingCellsPositions()
      backButton.active = true

      for (cell of selectingCells){
        cell.active = true;
      }

      for (cell of cells){
        cell.active = false
        cell.is_pressed_down = false
      }

      for (i=0;i<10;i++){
        for (j=0;j<10;j++){
          if (j <= 3){
            gameBoard[i][j].hidden = true;
          }

          if (j >= 6){
            gameBoard[i][j].active = true;
            gameBoard[i][j].hidden = false;
          }
        }
      }
      generateRandomBoard()
    }
    else if(neutralPageCounter == 2){
      placingState = false;
      donePlacingState = false;
      redTurnState = true;
      endTurnButtonPressed(1)
    }
    else if(neutralPageCounter == 3){
      attackingState = false;
      animatingState = true;
      startingAnimation = true;
      explodingFirstFrame = true;
    }
    else if(neutralPageCounter == 4){
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
    }
    else if(neutralPageCounter == 5){
      for (cell of cells){
        cell.active = false;
        cell.hidden = false;
      }
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
    }
  }
  //gameBoard cells

  for (cell of cells){
    //if mouse is over cell
    if ((cornerPos[0] + (cell.cor[0] * cellWidth)) < mouseX && mouseX < (cornerPos[0] + (cell.cor[0] * cellWidth)) + cellWidth && (cornerPos[1] + (cell.cor[1] * cellWidth)) < mouseY && mouseY < (cornerPos[1] + (cell.cor[1] * cellWidth)) + cellWidth && cell.active){
      if(placingState){
        if(selectedCell != null){
          updateCell(cell, selectedCell)
        }
        else if(selectedCell == null && cell.indexes[0] != 0){
          removeCell(cell)
        }
      }
      else if(highlightedCells.includes(cell)){
        if(cell.indexes[0] == 0){
          for(hCell of highlightedCells){
            hCell.active = false;
          }
          moveCell(clickedCell, cell)
          for (tCell of cells){
            tCell.active = false
            tCell.is_pressed_down = false
          }
          recentlyMovedCell.active = true
          endTurnButton.active = true;
          highlightedCells = []
          //endTurnButtonPressed()
        }
        else if(cell.hidden){

          attackedCell = cell;
          attackedCell.attacked = true;
          recentlyMovedCell = attackedCell
          attackedCell.hidden = false;
          attackingState = true;
          attackingCell = clickedCell
          clickedCell = null;

          for(hCell of highlightedCells){
            hCell.active = false;
          }

          for (tCell of cells){
            tCell.active = false
            tCell.is_pressed_down = false
          }

          recentlyMovedCell.active = true

          endTurnButton.active = true;
          highlightedCells = []
        }
      }
      else if(endTurnButton.active){
        if (cell == recentlyMovedCell){
          if (cell.attacked){
            cell.attacked = false
            if(redTurnState){
              for (tCell of cells){
                if(tCell.indexes[1] != 1){
                  tCell.active = false
                  tCell.is_pressed_down = false
                }
                else{
                  tCell.active = true
                  tCell.is_pressed_down = false
                }
              }
            }
            else{
              for (tCell of cells){
                if(tCell.indexes[1] != 0){
                  tCell.active = false
                  tCell.is_pressed_down = false
                }
                else{
                  tCell.active = true
                  tCell.is_pressed_down = false
                }
              }
            }
            recentlyMovedCell.hidden = true
          }
          else{
            moveCell(recentlyMovedCell, previousCell)
            if(redTurnState){
              for (tCell of cells){
                if(tCell.indexes[1] != 1){
                  tCell.active = false
                  tCell.is_pressed_down = false
                }
                else{
                  tCell.active = true
                  tCell.is_pressed_down = false
                }
              }
            }
            else{
              for (tCell of cells){
                if(tCell.indexes[1] != 0){
                  tCell.active = false
                  tCell.is_pressed_down = false
                }
                else{
                  tCell.active = true
                  tCell.is_pressed_down = false
                }
              }
            }
          }
          endTurnButton.active = false
          recentlyMovedCell = null;
          previousCell = null;
          highlightedCells = []
        }
      }
      else{
        if(cell.active){
          for(hCell of highlightedCells){
            hCell.active = false;
          }
          highlightedCells = []
          if (clickedCell == cell){
            clickedCell = null;
          }
          else{
            clickedCell = cell;
            highlightNearbyActive(cell)
          }
        }
      }
    }
  }
  // selecting cells
  for (cell of selectingCells){
    //if mouse is over cell
		if (cell.pos[0] < mouseX && mouseX < cell.pos[0] + cellWidth && cell.pos[1] < mouseY && mouseY < cell.pos[1] + cellWidth && cell.active){
      if (selectedCell == cell){
        selectedCell = null;
      }
      else{
        selectedCell = cell;
      }
      //console.log("Cell: " + cell.num + " Clicked")
    }
  }

  //buttons
  for (button of buttons){
    if(button.cor[0] < mouseX && mouseX < button.cor[0] + button.imageNormal.width && button.cor[1] < mouseY && mouseY < button.cor[1] + button.imageNormal.height && button.active){
      //calls the function associated with button
      button.func()
    }
  }
}

//called once at beginning
function setup() {
  //creating game window
  width = 850
	height = 850
  createCanvas(width, height)

  //creating all text boxes
  generateTextBoxes()

  //creating all cells and placing them in arrays
  generateCells()

  generateSelectingCells(0)

  //creating all buttons
  generateButtons()


  //setting initial positions of selecting cells
  updateSelectingCellsPositions()

  angleMode(DEGREES)
  glow.resize(1000, 1200)

}

//called multiple times a second
function draw() {
  //checking if hovering/pressing with mouse
  checkMouse()
  //displaying background image
  image(back, 0, 0)
  //using game states to display correct elements

  if(menuState){
    noFill()
    strokeWeight(15)
    stroke(color(172, 19, 237))
    rect(0, 0, width, height)

    textFont(gameFont);
    textSize(100);
    fill(203, 173, 13)
    stroke(1)
    strokeWeight(5)
    text("Stratego", (width / 2) - (menuTitleTextBox.w / 2), 150);
    image(redGeneralImage, 600, 300);
    image(blueGeneralImage, 25, 300);

  }
  else if (placingState){
    if(gameBoard[9][9].indexes[1] == 0){
      noFill()
      strokeWeight(15)
      stroke(color(77, 87, 232))
      rect(0, 0, width, height)
    }
    else{
      noFill()
      strokeWeight(15)
      stroke(color(237, 62, 62))
      rect(0, 0, width, height)
    }

    //displaying title
    textFont(gameFont);
    textSize(70);
    fill(203, 173, 13)
    stroke(1)
    strokeWeight(5)
    text("Stratego", (width / 2) - (pickingTitleTextBox.w / 2), 85);

    //displaying selection cells
    displayBlueSelectingCells()
    //displaying cells
    displayCells()
  }
  else if(blueTurnState){
    noFill()
    strokeWeight(15)
    stroke(color(77, 87, 232))
    rect(0, 0, width, height)

    textFont(gameFont);
    textSize(70);
    fill(203, 173, 13)
    stroke(1)
    strokeWeight(5)
    text("Stratego", (width / 2) - (pickingTitleTextBox.w / 2), 85);
    displayCells()
  }
  else if(redTurnState){
    noFill()
    strokeWeight(15)
    stroke(color(237, 62, 62))
    rect(0, 0, width, height)

    textFont(gameFont);
    textSize(70);
    fill(203, 173, 13)
    stroke(1)
    strokeWeight(5)
    text("Stratego", (width / 2) - (pickingTitleTextBox.w / 2), 85);
    displayCells()
  }
  else if(blueWonState){
    for(i=0;i<24;i++){
        beams[i].angle += 0.25
        x1 = beamRadius * cos(beams[i].angle) + width/2
        y1 = beamRadius * sin(beams[i].angle) + height/2

        x2 = beamRadius * cos(beams[i].angle + 15) + width/2
        y2 = beamRadius * sin(beams[i].angle + 15) + height/2

        noStroke()
        if(beams[i].num % 2 == 0){
          fill(color(124, 97, 255))
        }
        else{
          fill(color(67, 34, 230))
        }
        triangle(width/2, height/2, x1, y1, x2, y2)
      }
      textSize(70);
      fill(203, 173, 13)
      stroke(1)
      strokeWeight(5)
      image(glow, -25, -120)
      text("Blue is the Winner!", (width / 2) - (blueWonTextBox.w / 2), 85);
      blueGeneralImage.resize(300, 0)
      image(blueGeneralImage, width/2 - 150, height/2 - 150);
  }
  else if(redWonState){
    for(i=0;i<24;i++){
        beams[i].angle += 0.25
        x1 = beamRadius * cos(beams[i].angle) + width/2
        y1 = beamRadius * sin(beams[i].angle) + height/2

        x2 = beamRadius * cos(beams[i].angle + 15) + width/2
        y2 = beamRadius * sin(beams[i].angle + 15) + height/2

        noStroke()
        if(beams[i].num % 2 == 0){
          fill(color(227, 100, 100))
        }
        else{
          fill(color(217, 76, 76))
        }
        triangle(width/2, height/2, x1, y1, x2, y2)
      }
      textSize(70);
      fill(203, 173, 13)
      stroke(1)
      strokeWeight(5)
      image(glow, -25, -120)
      text("Red is the Winner!", (width / 2) - (redWonTextBox.w / 2), 85);
      redGeneralImage.resize(300, 0)
      image(redGeneralImage, width/2 - 150, height/2 - 150);
  }
  if(animatingState){
    if (startingAnimation){
      timeStart = round(millis());
      startingAnimation = false;
       for (cell of cells){
         if (!(cell.indexes[1] == 2) && !(cell instanceof LakePiece)){
           cell.hidden = true
         }
       }
    }
    animate()
    if(explodingState){
      for (expCell of explodingCells){
        expCell.display()
      }
    }
  }
  if(neutralPageState){
    fill(0, 0, 0, 175)
    noStroke()
    rect(0, 0, 850, 850)

    noFill()
    strokeWeight(15)
    stroke(color(172, 19, 237))
    rect(0, 0, width, height)

    textFont(gameFont);
    textSize(50);
    fill(203, 173, 13)
    stroke(1)
    strokeWeight(5)
    text("Click To Continue", (width / 2) - (continueTextBox.w / 2), height / 2);
  }
  //displays all active buttons on the
  displayButtons()

}
