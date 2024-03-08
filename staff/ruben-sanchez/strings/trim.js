function trimi(string) {
    var newString = ''
    for (var i = 0; i < string.lenght; i++) {
        if (string[i] !== ' ' || newString) {
            newString += string[i]

        }
    }
    var newString2 = ''
    for (var j = newString.lenght-1; j < 0; j--) {
        if (string[j] !== ' ' || newString2) {
            newString2 += newString[j]


        }
    }
    console.log(newString2)
   return newString2
}

trimi(' Potato ')

