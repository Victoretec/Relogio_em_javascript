

    function carregar(){
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById("imagem")
        var periodo = window.document.getElementById("periodo")
        var data = new Date()
        var hora = 18//data.getHours()
        var minuto = data.getMinutes()
        var segundos = data.getSeconds()

        
        msg.innerHTML = `<h3>Agora são ${hora}:${minuto}:${segundos} Horas</h3>`
        
        if(hora >= 6 && hora < 12 ){
            msg.innerHTML +=  "<p>BOM DIAAA !!!</p> "
            img.src = "img/manha.png"
            document.body.style.background = '#a2d8fc'
            periodo.innerHTML = "A persistência é o caminho do êxito."
        }else if (hora >= 12 && hora < 18  ){
            msg.innerHTML +=  "<p>BOA TARDEEE !!!</p> "
            periodo.innerHTML = "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis."
            img.src = "img/tarde.png"
            document.body.style.background = "#dd9a35"
        }else if (hora>=18 && hora <= 23 ){
            msg.innerHTML +=  "<p>BOA NOITEEE !!!</p> "
            img.src = "img/noite.png"
            document.body.style.background = '#23518d'
            periodo.innerHTML = "Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho."
        }else{

            msg.innerHTML =  "<p>BOA MADRUGADAAA !!!</strong></p> "
            img.src = "img/madrugada.png"
            document.body.style.background = "#483e4a"
            periodo.innerHTML = "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre."
        }
        
        setTimeout("carregar()",1000)

}


