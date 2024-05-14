function carregar(){
    let mensagem = document.getElementById('msg')

    let imagem = document.getElementById('img')

    let age = prompt('Qual a sua idade?')

    mensagem.innerHTML = `A sua idade é ${age}:`
    
    if( age > 0 && age < 14){
        crianca.src = '0 a 14.jpg'
        //document.body.style.backgroundColor = 'yellow'

    }else if (age > 14 && age <29 ){
        crianca.src = '15 a 29.jpg'
        //document.body.style.backgroundColor = 'orange'
    }else if(age >30 && age <59){
        crianca.src = '30 a 59.jpg'
        document.body.style.backgroundColor = 'gray'
    }else{
        crianca.src = '60.jpg'
    }
    
}
