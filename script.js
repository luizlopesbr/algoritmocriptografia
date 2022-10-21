let palavra = 'sol'
let palavraCifrada = []
let numeroSaltos = 3
let numeroCiclos = 3
let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(`Palavra original: ${palavra} \n`) 
for(let k = 1; k <= numeroCiclos; k++){//itera entre os ciclos
    for(let i = 0; i < palavra.length; i++){//itera entre as letras da palavra
        for(let j = 0; j < alfabeto.length; j++){//varre o alfabeto
            if(alfabeto[j] == palavra[i]){
                palavraCifrada.push(alfabeto[j + numeroSaltos])
            }
        }
    }
    console.log(`Alfabeto ${k}: ${alfabeto}`)
    alfabeto.push(alfabeto[0])
    alfabeto.shift(alfabeto[0])
    palavra = palavraCifrada.join(",");
    console.log(`Ciclo ${k}: ${palavraCifrada} \n`)
    palavraCifrada = []
}





