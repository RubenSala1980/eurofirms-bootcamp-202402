var months = 'Geneary-Febreary-March- April- May- June- July-August-September-Octuber- November-December'

function split(string, separator, limit) {
    var result = []
    var stringAcumulator = ''
    for(var i =0; i < string.length; i++) {
        
        
        if(result.length == limit) {
            break
        }
        
        if (string[i] === separator) {
           result[result.length] = stringAcumulator
           stringAcumulator = ''
        } 
        else {
            stringAcumulator += string[i]
        }

            
    }
    console.log(result)
    return result

}
console.log('caso1 resultado esperado [Genuary Febreary March April]')
split(months,'-',4)