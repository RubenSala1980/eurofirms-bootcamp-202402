class Wheel extends Shape2D  {
    constructor(width,height) {
    super(width, height, 'gray')

    this.setStyle('borderRadius','50%')

    var wheel = 'solid black ' + (width +height) * 0.1 +'px'

    this.setStyle('border',wheel)
    this.setStyle('zIndex', 1)
}

