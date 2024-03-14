var string = 'The last is also the first, the only one'

function endsWith(string, word,index=string.length) {
    var tree = ''
     
    

  
    for (var i =index-word.length ; i < string.length; i++) { 
      console.log( tree += string[i])
    }
    if(tree === word){
        return console.log(true)
    }

    return console.log(false)

}
//caso 1 string , one return true
endsWith(string, 'one')
// caso 2 strin, 'barba' return false
endsWith(string, 'barba')
// caso 3 string, 'one' , 12, return false
endsWith(string, 'one', 12)