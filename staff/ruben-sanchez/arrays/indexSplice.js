// usando el indexOf, encuentra el numero 20
// ahora usando el splice , borralo

var numbers = [ 10, 20, 30, 40, 50, 60]

var index = numbers.indexOf(20)

numbers.splice(index,1)

console.log(numbers)

//----------------------------------

// usando el findIndex encuetra el usuario con el id 'g48ge5g' y borralo

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] } ]

var index2 = users.findIndex(function(user){
    return user.id === 'g48ge5g'

})
users.splice(index2,1)
console.log(users)
// borra todos los numeros impares

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]
var numbers2Clone = [...numbers2]
var impar =numbers2Clone.forEach(function (x){
    if(x%2!==0){
        var index = numbers2.indexOf(x)
      numbers2.splice(index,1)
    }

})
console.log(numbers2)

    
console.log(impar)

// borra todos los usuarios cuyo nombre empiece con 'pe'

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

 var pepe = users.filter(function(pe){
    
    if(!pe.name.startsWith('pe'))
    return pepe
return users
 } ),
pepe = users
console.log(users)


