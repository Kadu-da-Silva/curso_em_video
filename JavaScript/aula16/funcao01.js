function parImp(n) {
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
console.log(parImp(223));


function soma(n1=0, n2=0) { // se o param não for repassado, terá valor 0 pré definido
    return n1+n2
}
console.log(soma(3,96));


let v = function(x){ //atribuindo uma função a um valor
    return x*2
}
console.log(v(3));


function fatorial(n) {
    let fat = 1
    for(let i=n; i > 1; i-=1) {//enquanto i for menor do que 1 ele irá perder um
        fat *= i
    } 
    return fat
}
console.log(fatorial(5));