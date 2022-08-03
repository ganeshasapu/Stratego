class Button{
  constructor(image, imageDark, imageLight, text, cor, func, sizeValue=30, fontValue=null, fillValue=[0, 0, 0], strokeValue=0, strokeWeightValue=1, boundingBox=null){
    this.cor = cor;

    //different images for hovering and pressing down on button
    this.imageNormal = image;
    this.imageDark = imageDark;
    this.imageLight = imageLight;

    //different states of button
    this.hovering = false;
    this.is_pressed_down = false;
    this.is_pressed_up = false;
    this.active = false

    //associated function with button
    this.func = func;

    //text displayed in the middle of button
    this.text = text;

    //all text styles that could potentially be used
    this.sizeValue = sizeValue;
    this.fillValue = fillValue;
    this.strokeValue = strokeValue;
    this.fontValue = fontValue;
    this.strokeWeightValue = strokeWeightValue;

    //getting bounding box so that text can be centered
    this.boundingBox = boundingBox;

    //coordinates for text
    this.textCor = [cor[0] + this.imageNormal.width / 2 - this.boundingBox.w / 2, this.cor[1] + this.imageNormal.height - this.boundingBox.h / 3.25]

    //adding button to master list of buttons
    buttons.push(this)

  }

  // displays button in normal state
  displayButtonNormal(){
    //displaying button image
    image(this.imageNormal, this.cor[0], this.cor[1])

    //changing text styles
    textSize(this.sizeValue);
    fill(this.fillValue[0], this.fillValue[1], this.fillValue[2]);
    stroke(this.strokeValue);
    strokeWeight(this.strokeWeightValue);
    textFont(this.fontValue);

    //displaying text for button
    text(this.text, this.textCor[0], this.textCor[1])
  }

  // displays button in pressed down state
  displayButtonDark(){
    //displaying button image
    image(this.imageDark, this.cor[0], this.cor[1])

    //changing text styles
    textSize(this.sizeValue);
    fill(this.fillValue[0], this.fillValue[1], this.fillValue[2]);
    stroke(this.strokeValue);
    strokeWeight(this.strokeWeightValue);
    textFont(this.fontValue);


    text(this.text, this.textCor[0], this.textCor[1])
  }

  // displays button in hovering state
  displayButtonLight(){
    //displaying button image
    image(this.imageLight, this.cor[0], this.cor[1])

    //changing text styles
    textSize(this.sizeValue);
    fill(this.fillValue[0], this.fillValue[1], this.fillValue[2]);
    stroke(this.strokeValue);
    strokeWeight(this.strokeWeightValue);
    textFont(this.fontValue);

    //displaying text for button
    text(this.text, this.textCor[0], this.textCor[1])
  }
}
