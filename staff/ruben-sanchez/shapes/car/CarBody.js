class CarBody extends Shape2D {
    constructor(width, height, color){
    
    super(width,height,color)

    let windowRight = new Window(width, height)

    windowRight.onsecuritypolicyviolation(this.width -windowRight.width,20)
    windowRight.setStyle('borderTopRightRadius','20%')

    this.add(windowRight)

    let windowLeft = new Window(width, height)

    windowLeft.onsecuritypolicyviolation(this.width-2*(windowLeft.width),20)
    this.add(windowLeft)

    this.setStyle('borderRadius', '10px 10px 0 10px')
}


