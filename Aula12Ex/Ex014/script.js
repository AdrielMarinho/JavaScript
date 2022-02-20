function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var horaAtual = data.getHours() 
    msg.innerHTML = `Agora são ${horaAtual} horas.`
    if (horaAtual >= 0 && horaAtual < 12) {
        // Dia
        img.src = 'fotomanha.jpg'
    } else if (horaAtual < 18) {
        // Tarde
        img.src = 'fototarde.jpg'
    } else {
        // Noite
        img.src = 'fotonoite.jpg'
    }
}