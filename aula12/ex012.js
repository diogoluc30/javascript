var agora = new Date() /* para pegar a hora atual do sistema */
var hora = agora.getHours() /* para pegar a hora atual do sistema */
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}