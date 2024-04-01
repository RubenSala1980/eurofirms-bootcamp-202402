let body = new Component('div')
body.container = document.body

let wheelRight = new Wheel(90,90)
wheelRight.setLocation(430,380)
body.add(wheelRight)

let wheelLeft = new Wheel(90,90)
wheelLeft.setLocation(180,380)
body.add(wheelLeft)

let carBody = new CarBody(350,200,'red')
carBody.setLocation(150,220)
body.add(carBody)

let carFront = new CarFront(100,100,'red')
carFront.setLocation(500,320)
body.add(carFront)

// var car = new Car(500,400,'red')