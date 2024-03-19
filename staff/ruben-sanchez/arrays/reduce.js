// usando el reduce. suma todos los numeros del array

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]

console.log(numbers.reduce(function(acumulator,currentValue){
   return  acumulator += currentValue



}))

//-----------------------------------------------------

// multiplica todos los nuemros del array

var numbers = [1, 12, 5, 40, 6, 7, 24, 13, 21]
console.log(numbers.reduce(function(acumulator,currentValue){
    return  acumulator * currentValue
 
 
 
 }))
 

// -------------------------------------------------------

// suma todos los numeros del array, dando un valor inicial de 10

var numbers3 = [0,12, 5, 40, 6, 7, 24, 13, 21]
var prueba = numbers.reduce(function(acumulator,currentValue){
    return acumulator + currentValue
     
     
 
 
 
 },10)
 
console.log(prueba)
// ---------------------------------------------------------------

// junta todos los strings del array, en un solo (con el reduce)
// dando un valor inicila de 'Hola'

var strings = ['numdo','pepito', 'como', 'va todo']
var resultado = strings.reduce(function(acumulator,currentValue){
    return acumulator += currentValue
    
},'Hola')
console.log(resultado)

// haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]
var pepe = users.reduce(function(acumulator,currentValue){
    
    if(currentValue.name.startsWith('pe')){
        
        acumulator[acumulator.length] = currentValue
    }
    return acumulator
    
           
},[])
console.log(pepe)
//_-----------------------------------------------------

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email
var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]
var nameil = users.reduce(function(acumulator,user){
        acumulator[acumulator.length] = {name:user.name,email:user.email}
        
        return acumulator
},[])
console.log(nameil)
// en user3 esta el name como primer valor y surname como segundo del usuario,
// crea un objeto que contenga esta propiedades
var user3 = ['peter', 'pan']
var nameSurname = user3.reduce(function(acumulator,user){
    if(
        
    )
   
    return acumulator
})
console.log(nameSurname)
// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]
var nameil2 = users4.reduce(function(acumulator,user){
    acumulator[acumulator.length] = {name:user[0],surname:user[1]}
    
    return acumulator
},[])
console.log(nameil2)