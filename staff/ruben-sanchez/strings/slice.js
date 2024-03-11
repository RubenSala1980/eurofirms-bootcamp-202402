var line = 'The computer does not work it is infected with a virus'

function slicer(string,begin, end) {
    var newString = ''
    if (begin < 0) {
        begin = string.length+begin
    }
    if ( end < 0){
        end = string.length+end
    }
    for(var i = begin; i < end; i++) {
        newString += string[i]
    }
    console.log(newString)
    return newString

}
// the result should be 'computer does '
slicer(line, 4, 17)

// Begins in index 2  and ends in 24
slicer(line, 2,24)

// now with negative numbers
slicer(line, -10, -1)
