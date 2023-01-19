function tabuada(){
    let num = document.querySelector('input#n1')
    let tab = document.querySelector('input#n2')
    let res = document.getElementById('res')
    
    if (num.value.length == 0 || tab.value.length == 0) {
        window.alert('Por favor, preencha todos os campos!')
    } else {
        let n = Number(num.value)
        let t = Number(tab.value)
        res.innerHTML = ''
        for (let i=0; i <= t; i += 1){
            let item = document.createElement('option')
            item.text = `${n} X ${i} = ${n*i}`
            res.appendChild(item)
        }
    }
}