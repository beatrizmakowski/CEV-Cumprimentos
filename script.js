function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    //var hora = new Date().getHours()
    hora = 19
    var minutos = new Date().getMinutes()
    var timer=setInterval(carregar,1000); 
    mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 5 && hora < 12) {
        greeting.innerHTML = `Bom dia!`
        imagem.src = "./img/morning.jpg"
        document.body.style.background = '#94b3c7'
    } else if (hora >= 12 && hora < 18) {
        greeting.innerHTML = `Boa tarde!`
        imagem.src = "./img/afternoon.jpg"
        document.body.style.background = '#d4a78d'
    } else if (hora >= 18 && hora < 20) {
        greeting.innerHTML = `Boa noite!`
        imagem.src = "./img/evening.jpg"
        document.body.style.background = '#6a5d7a'
    } else {
        greeting.innerHTML = `Boa noite!`
        imagem.src = "./img/night.jpg"
        document.body.style.background = '#2f4266'
    }
    
}


