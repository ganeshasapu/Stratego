class LakePiece extends UnmoveablePiece{
  constructor(cor, key){
    super(cor);
    //getting indexes from key to determine image
    this.key = key;
    this.indexes = key.split(",");
    this.image = cellImages[this.indexes[0]][this.indexes[1]][this.indexes[2]]
  }
  displayCellImage(){
    image(this.image, cell.cor[0] * cellWidth + cornerPos[0], cell.cor[1] * cellWidth + cornerPos[1])
  }

  updateCellImage(key){
    //updates key and indexes variable
    this.key = key
    this.indexes = key.split(",")
    //sets all images to updated values
    this.image = cellImages[this.indexes[0]][this.indexes[1]][this.indexes[2]];
  }

}
