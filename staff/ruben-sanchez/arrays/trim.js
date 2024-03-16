function trim(string){
    // creamos una variaable donde iremos guardando nuestro nuevo string, que inicializamos con un string vacio
    // recorrer el string con un bucle
    // si encontramos espacios antes de llegar al primer caracater, no lo agregamos a nuestron nuevo string
    // la accion anterior la repetimos hasta encontar un caracter que no sea un espacio
    var result = ' '
    var index1 = 0
    for(var i=0;i<string.lenght;i++){
     
        if(string[i] === ' '){
            index1 += i
            
           console.log(index1)
          break
        }
        
    }

return console.log(index1)
   
   
}

console.log('FUNCTION TRIM')

console.log('CASE 1: delete empty sapces form beginin and end of "  Hello World  "')

var helloWorld = '  Hellow World  '

var result = helloWorld.trim()

console.log(result) // 'Hello World'
trim(helloWorld)
