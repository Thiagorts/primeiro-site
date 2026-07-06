const botao= document.getElementById('curtidas')
botao.addEventListener('click',aumentarcurtidas)
function aumentarcurtidas(){
    let curtidas = document.querySelector('span')
    curtidas.textContent++
}