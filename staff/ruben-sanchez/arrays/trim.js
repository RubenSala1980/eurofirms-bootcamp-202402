function trim(string) {
   
    var index1 = 0
    var index2 = 0
    var arr = ''
    for (var i = 0; i < string.length; i++) {
       
        if (string[i] !== ' ') {
            index1 = i
           break
            
          
        }
        
    }
    for (var i = string.length-1;i>0;i--){
        if (string[i] !== ' ') {
            index2 = i
           break
            
          
        }

    }
    for (var i= index1; i <= index2; i++){
       arr += string[i]
    }
console.log(arr)




}






console.log('FUNCTION TRIM')

console.log('CASE 1: delete empty sapces form beginin and end of "  Hello World  "')

var helloWorld = '  Hellow World  '



console.log() // 'Hello World'
trim(helloWorld)
