//numero par o impar

const arrayNumber = [1,2,3,4,5,6,7,8,9,10]

const parImpar = (parent) =>{
    const result = parent.filter( item => (item % 2 !== 0))
    console.log(result)
    return result
}

console.log(parImpar(arrayNumber))

const numberParImpar = num => {
    
        if(num % 2 === 0){
     return result = `${num} es par`
    }
     else{ 
        return result = `${num} es impar`;
    }
 }

console.log(numberParImpar(10))

const validacionImpart = (a,b,c) =>{

    if(a % 2 !== 0 ){
     a
    }else{
        a = 1
    }
    if(b % 2 !== 0){
        b
    }else{
        b = 1
    }
    if(c % 2 !== 0){
        c
    }else{
        c =1
    }
    return (a * b * c === 1)?'No es impart':a*b*c


}

console.log(validacionImpart(2, 2, 7))