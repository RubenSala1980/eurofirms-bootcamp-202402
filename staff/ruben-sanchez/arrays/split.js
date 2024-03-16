// function split(string, seaparator, limit = Infinity) {
//     var result = []
//     var acumulatedString = ''

//     for (var i=0; i < string.length && result.length<limit; i++) {
//         var character = string[i]

//         if (separator === '' ){
//             result[result.length] =character
//         }
//         else if (separator?.length < 1 && separator[0]===character){
//             var stringToCompare = ''

//             for (var j=i; j <seaparator.length +i; j++) {
//                 stringToCompare += string[j]
//             }
//         }
//         if (separator === stringToCompare){
//             result[result.length] = acumulatedString

//             acumulatedString = ''
            
//             i += separato.length -1
//         }
//         else {
//             acumulatedString += character
//         }
//     }
//      (character === separator) {
//         result[result.length] = acumulatedString

//         acumulatedString = ''
//     }
//     else {
//         acumulatedString += character
//     }


//  if (result.length < limit && separator !== '') {
//     result[result.length] = acumulatedString
//  }

// return result
// }

console.log('FUNCTION SPLIT')

// -----------------------------------

console.log('CASE 1: split the string with " " separator')

var hello = 'Hello world to the people'

var result = hello.split(' ')

console.log({expected: ['Hello', 'world', 'to', 'the', 'people'], received: result})
console.log(result)
// ------------------------------------------

console.log('CASE 2: split the string with " " separator and a limit of 2')

var hello2 = 'Hello world to the people'

var result2 = hello2.split(' ',2)

console.log({expected: ['Hello', 'world'], recieved: result2})
console.log(result2)
//----------------------------------------

console.log('CASE 3: split the string with " - " separator')

var hello3 = 'Hello-world-to the - people-around 1'

var result3 = hello3.split(' - ')


console.log({expected: ['Hello', 'world', 'to the', 'people-around 1'],recieved: result3})
console.log(result3)
// --------------------------------------------------

console.log('CASE 4: split the string with "" separator')

var hello4 = 'Hello world to the people'

var result4 = hello4.split('')


console.log({
    expected: ['H', 'e', 'l','l','o',' ', 'w', 'o','r','l','d', ' ','t', 'o',' ','t', 'h','e',' ','p','e','o','p','l','e'],received: result4
})
console.log(result4)
//-------------------------------------------

console.log('CASE 5: split the string with undefined separator')

var hello5 = 'Hello world to the people'

var result5 = hello5.split()


console.log({expected: ['Hello world to the people'],recieved: result5})
console.log(result5)
// -------------------------------------------------

console.log('CASE 6: split the string with " - " separato that is not on the string')

var hello6 = 'Hello world to the people'

var result6 = hello6.split(' - ')

console.log({expected: ['Hello world to the people'], received: result6})
console.log(result6)