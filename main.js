function carregar(){
    let mensagem = document.getElementById('msg')

    let imagem = document.getElementById('img')

    let data = new Date
    
    let hora = data.getHours()

    let minuto = data.getMinutes()

    mensagem.innerHTML = `A hora atual é: ${hora}h0${minuto}min`

    if(hora > 5 && hora <= 12){
        entardecer.src = 'amanhecer1.jpg'
        document.body.style.backgroundColor = 'yellow'

    }else if (hora > 12 && hora <= 18 ){
        entardecer.src = 'amanhecer.jpg'
        document.body.style.backgroundColor = 'orange'
    }else{
        entardecer.src = 'anoitecer.jpg'
        document.body.style.backgroundColor = 'gray'
    }
    
}
