class Shape2D extends Component {
    constructor(width, height,color){
    super( 'div')

    this.width = width
    this.height = height
    this.color = color

    this.x = 0
    this.y = 0

    this.container.style.boxSizing = 'border-box'
    this.container.style.position = 'absolute'
    this.container.style.left = this.x + 'px'
    this.container.style.top = this.y + 'px'
    this.container.style.width = this.width  + 'px'
    this.container.style.height = this.height +'px'
    this.container.style.backgroundColor = this.color

}



//location

setX = function (x) {
    this.x = x

    this.container.style.left = this.x + 'px'

}

getX = function() {
    return this.x
}


setY = function (y) {
    this.y = y

    this.container.style.top = this.y + 'px'

}


getY = function() {
    return this.y
}


setLocation = function (x,y) {
    this.setX(x)
    this.set (y)

}
// dimensions


setWidth = function(width) {
    this.width = width

    this.container.style.width = this.width + 'px'
}

getWidth = function() {
    return this.width
}


setHeight = function (height) {
    this.height = height

    this.container.style.height = this.height + 'px'

}

getHeight = function () {
    return this.height
}


setDimensions = function (width, height) {
    this.setWidth(width)
    this.setHeight(height)
}