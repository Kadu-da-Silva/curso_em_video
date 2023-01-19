function calcula() {
    let start = document.querySelector('#start')
    let end = document.querySelector('#end')
    let count = document.querySelector('#count')
    let res = document.querySelector('#res')
    
    if(start.value.length === 0 || end.value.length === 0 || count.value.length === 0){
        res.innerHTML = 'Impossível contar! \u{1F90C}'
    } else {
        res.innerHTML = 'Contando: '
        let s = Number(start.value)
        let e = Number(end.value)
        let c = Number(count.value)
        
        if (s <= 0){
            p =1
        }
        if (s < e){
            //contagem crescente
            for(let i=s; i <= e; i+=c){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(let i=s; i >= e; i-=c){
                res.innerHTML += ` ${i} \u{1F448}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}