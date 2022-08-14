

    function carregar(){
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById("imagem")
        var data = new Date()
        var hora = 2//data.getHours()
        var minuto = data.getMinutes()
        var segundos = data.getSeconds()
        
        msg.innerHTML = `<h3>Agora são ${hora}:${minuto}:${segundos}</h3>`
        
        if(hora >= 6 && hora < 12 ){
            msg.innerHTML +=  "<p><strong>BOM DIAAA !!!</strong></p> "
            img.src = "img/manha.png"
            document.body.style.background = '#a2d8fc'
        }else if (hora >= 12 && hora < 18  ){
            msg.innerHTML +=  "<p><strong>BOA TARDEEE !!!</strong></p> "
            
            img.src = "img/tarde.png"
            document.body.style.background = "#dd9a35"
        }else if (hora>=18 && hora <= 23 ){
            msg.innerHTML +=  "<p><strong>BOA NOITEEE !!!</strong></p> "
            img.src = "img/noite.png"
            document.body.style.background = '#23518d'
        }else{

            msg.innerHTML +=  "<p><strong>BOA MADRUGADAAA !!!</strong></p> "
            img.src = "img/madrugada.png"
            document.body.style.background = "#483e4a"
        }
        
    setTimeout("carregar()",1000)
}


