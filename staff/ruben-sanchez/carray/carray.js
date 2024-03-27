function Carray() {
    var elements = arguments

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        this[i] = element
    }

    this.length = elements.length
}

Carray.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callback(element)
    }
}

Carray.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var matches = callback(element)

        if (matches)
            return element
    }
}

Carray.prototype.map = function (callback) {
    var results = new Carray

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        var mappedElement = callback(element)

        results[results.length] = mappedElement
        results.length++
    }

    return results
}

Carray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]

        this.length++
    }

    return this.length
}
Carray.prototype.unshift = function () {
   var newLength = this.length +arguments.length

    for (var i= newLength-1; i >= arguments.length;i--) {
        this[i] = this[i-arguments.length]
    }

    for (var j= 0; j < arguments.length;j++) {
        this[j] = arguments[j]
    }

     this.length = newLength

     return this.length



}

Carray.prototype.filter = function (callback) {
   var result = new Carray()
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element)) {
            result[result.length] = element
            result.length++
        }
    }
    return result
}

Carray.prototype.every = function (callback) {
    
    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        if (!callback(element)) {
            return false
        }
        
    }
    return true
}


Carray.prototype.shift=function(){
    
    var deletedElement = this[0]
    for(var i=0; i < this.length-1;i++){
        this[i]=this[i+1]
    }
    this.length--

    delete this[this.length]
    return deletedElement
}
Carray.prototype.pop = function(){
    var deletedElement = this[this.length]

    for


}


module.exports = Carray

