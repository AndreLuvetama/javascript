var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

   var nivel = window.location.search // recupera o nivel enviado ndo index => window.location.href = 'app.html?' + nivel
    nivel = nivel.replace('?', '')

    if(nivel === 'normal') {
        //1500
        criaMosquitoTempo = 1500
    } else if(nivel === 'dificil') {
        //1000
        criaMosquitoTempo = 1000
    } else if(nivel === 'chucknorris') {
        //750
        criaMosquitoTempo = 750
    }


//Recupera o tamanho do palco
function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
     console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()
var cronometro = setInterval(function(){   
    //o tempo é decrementado a cada is(1000)
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro) //zera o cronemetro
        clearInterval(criaMosquito) //limpa a execução da função criar mosquito
        window.location.href = 'vitoria.html' //direciona para a pgn de vitória
    }else{
        document.getElementById("cronometro").innerHTML = tempo
    }
}, 1000)
function posicaoRandomica(){
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
           // alert('Interromper o jogo(Game Over)')
        }else{
            document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"
            vidas++
        }
    }
    //Pega a posição randomica
    var posicaoX = Math.floor(Math.random() * largura) - 90//Retorna o menor número inteiro
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)

    //Criação do elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png' //caminho da imagem no css
    mosquito.className =  tamanhoAleatoreo() + ' ' + ladoAleatoreo()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)  
    
}

function tamanhoAleatoreo(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1'  //Neste caso não precisa do breack por ter o return
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
   
    }
}

function ladoAleatoreo(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'  //Neste caso não precisa do breack por ter o return
        case 1:
            return 'ladoB'    
    }   
}