let num =[5,2,8,9,3]

num[5] = 1
num.push(7)
num.push(10)

console.log(num);
console.log(`${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log(`O meu vetor em ordem ${num.sort(function(a, b){return a-b})}`);
console.log(num.push());
console.log(`O valor 7 esta na posição ${num.indexOf(7)}`); //-1 significa que valor não foi encontrado

//representando o valor de cada vetor
for(let pos=0;pos<num.length;pos+=1){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

//simplificando... 'key' vai percorrer cada valor do objeto 'num'
for (const key in num) {
    console.log(num[key]);
}