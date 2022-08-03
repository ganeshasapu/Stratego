class MoveablePiece extends Cell{
  constructor(cor){
    super(cor);

    //states of cell
    this.is_pressed_down = false;
    this.is_pressed_up = false;
    this.is_hovering = false;

    this.normalImage = gENormal;
    this.lightImage = gELight;
    this.darkImage = gEDark;
    this.hiddenImageNormal = null;
    this.hiddenImageDark = null;
    this.hiddenImageLight = null;
    this.rank = null;

    this.active = false;

    this.indexes = ["0", "2"];
    this.key = "0,2";

    this.hidden = false;
    this.attacked = false;

  }

  //updates the image of the cell using key
  updateCellImage(key){
    //updates key and indexes variable
    this.key = key
    this.indexes = key.split(",")
    //sets rank to null if piece does not have a number
    if(this.indexes[0] == "0" || this.indexes[0] == "11" || this.indexes[0] == "12"){
      this.rank = null;
    }
    //sets all ranked pieces to correct number
    else{
      this.rank = parseInt(this.indexes[0]);
    }

    if(this.indexes[1] == 0){
      this.hiddenImageNormal = bHNormal
      this.hiddenImageDark = bHDark
      this.hiddenImageLight = bHLight
    }
    else if(this.indexes[1] == 1){
      this.hiddenImageNormal = rHNormal
      this.hiddenImageDark = rHDark
      this.hiddenImageLight = rHLight
    }
    //sets all images to updated values
    this.normalImage = cellImages[this.indexes[0]][this.indexes[1]][0];
    this.darkImage = cellImages[this.indexes[0]][this.indexes[1]][1];
    this.lightImage = cellImages[this.indexes[0]][this.indexes[1]][2];
  }

  //displaying a normal cell
  displayCellNormal(){
    image(this.normalImage, cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  //displaying a lighter cell
  displayCellLight(){
    image(this.lightImage, cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  //displaying a darker cell
  displayCellDark(){
    image(this.darkImage, cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  displayCellHiddenNormal(){
    image(this.hiddenImageNormal, cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  displayCellHiddenDark(){
    image(this.hiddenImageDark, cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  displayCellHiddenLight(){
    image(this.hiddenImageLight, cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  displayCellAttackedNormal(){
    image(cellImages[0][this.indexes[1]][0], cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  displayCellAttackedDark(){
    image(cellImages[0][this.indexes[1]][1], cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  displayCellAttackedLight(){
    image(cellImages[0][this.indexes[1]][2], cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  displayCellSwordIcon(){
    copy(swordIcon, 0, 0, 555, 555, cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1], 50, 50)
  }
}
