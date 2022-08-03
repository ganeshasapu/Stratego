class SelectingCell{
  constructor(num, key){
    //number of cell type left
    this.num = num;

    //pixel corrdinate of cell
    this.pos = [0, 0];

    //rank of cell (null if not numbered)
    this.rank = null;

    //used to prevent clicks in other gameStates
    this.active = false;

    //cell states
    this.is_pressed_down = false;
    this.is_pressed_up = false;
    this.is_hovering = false;

    //used to determine image of cell
    this.key = key
    this.indexes = this.key.split(",")

    //if cell has a rank, set it accordingly
    if(!this.indexes[0] == "11" && !this.indexes[0] == "12"){
      this.rank = this.indexes[0];
    }
    //setting image variables
    this.normalImage = cellImages[this.indexes[0]][this.indexes[1]][0];
    this.lightImage = cellImages[this.indexes[0]][this.indexes[1]][1];
    this.darkImage = cellImages[this.indexes[0]][this.indexes[1]][2];
  }

  //displaying a normal cell
  displayCellNormal(){
    image(this.normalImage, this.pos[0], this.pos[1])
  }

  //displaying a lighter cell
  displayCellLight(){
    image(this.lightImage, this.pos[0], this.pos[1])
  }

  //displaying a darker cell
  displayCellDark(){
    image(this.darkImage, this.pos[0], this.pos[1])
  }
}
