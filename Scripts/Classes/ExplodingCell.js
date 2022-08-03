class ExplodingCell{
  constructor(explodingCell, cor, cellType){

    this.cor = cor
    if(cellType == "attacking"){
      this.pos = [125 + (this.cor[0] * 25), 300 + (this.cor[1] * 25)]
    }
    else{
      this.pos = [475 + (this.cor[0] * 25), 300 + (this.cor[1] * 25)]
    }

    this.image = cellImages[explodingCell.indexes[0]][explodingCell.indexes[1]][3].get(this.cor[0] * 40, this.cor[1] * 40, 40, 40)

    this.vel = [0, 0]
    this.acc = [0, 0]
    this.crumbling = false
  }
  update(){

    this.vel[0] += this.acc[0]
    this.pos[0] += this.vel[0]

    this.vel[1] += this.acc[1]
    this.pos[1] += this.vel[1]
    if(this.crumbling){
      this.acc[1] += 0.35
    }
  }
  display(){
    image(this.image, this.pos[0], this.pos[1], 25, 25)
    //copy(this.image, (this.cor[0] * 40), (this.cor[1] * 40), 40, 40, round(this.pos[0]), round(this.pos[1]), 25, 25)
  }
}
