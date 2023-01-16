
function paisSelecionado() {
    let txtpais = document.querySelector('input#pais').value.toLowerCase() //só foi com o value
    let divRes = document.querySelector('div#resultado')
    divRes.innerHTML = `<p>Seu País é ${txtpais}?</p><p>Desculpe, mas acho que esse país não existe.</p>`

    let img = document.createElement('img')
    img.style.height = '200px'
    img.style.width = '300px'

    if(txtpais === 'brasil'){
        divRes.innerHTML = '<p>Que legal, você é <strong>BRASILEIRO!!!</strong></p>'
        img.src = 'img.ex010/bandeira-do-brasil.webp'
        document.querySelector('div#resultado').appendChild(img);

        document.body.style.background = 'rgb(55, 226, 20)'
        document.getElementById('titulo').innerHTML = 'BRASIL'
    } else if (txtpais === 'japão'){
        divRes.innerHTML = '<p>Que legal, você é <strong>JAPONÊS!!!</strong></p>'
        img.src = 'img.ex010/bandeira-do-japao.webp'
        document.querySelector('div#resultado').appendChild(img);

        document.body.style.background = 'rgb(209, 32, 32)'
        document.getElementById('titulo').innerHTML = 'JAPÃO'
    } else if (txtpais === 'suíça'){
        divRes.innerHTML = '<p>Que legal, você é <strong>SUÍÇO!!!</strong></p>'
        img.src = 'img.ex010/bandeira-da-suica.webp'
        document.querySelector('div#resultado').appendChild(img);

        document.body.style.background = 'rgb(155, 35, 35)'
        document.getElementById('titulo').innerHTML = 'SUÍÇA'
    } else if (txtpais === 'estados unidos'){
        divRes.innerHTML = '<p>Que legal, você é <strong>ESTADUNIDENSE!!!</strong></p>'
        img.src = 'img.ex010/estados-unidos.webp'
        document.querySelector('div#resultado').appendChild(img);

        document.body.style.background = 'blue'
        document.getElementById('titulo').innerHTML = 'ESTADOS UNIDOS'
    } else if (txtpais === 'jamaica'){
        divRes.innerHTML = '<p>Que legal, você é <strong>JAMAICANO!!!</strong></p>'
        img.src = 'img.ex010/bandeira-jamaica-55e5e212a8375.webp'
        document.querySelector('div#resultado').appendChild(img);

        document.body.style.background = 'green'
        document.getElementById('titulo').innerHTML = 'JAMAICA'
    }
}
