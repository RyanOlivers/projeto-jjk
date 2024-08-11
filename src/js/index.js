// 
const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll(".imagem");
const info = document.querySelectorAll(".informacao")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Check do carrosel
        const selecionado = document.querySelector('.selecionado')
        selecionado.classList.remove('selecionado');
        botao.classList.add('selecionado')

        // Trocar imagem 
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove("ativa");
        imagens[indice].classList.add("ativa");

        const infoAtiva = document.querySelector('.informacao.ativa')
        infoAtiva.classList.remove("ativa");
        info[indice].classList.add('ativa')

    });
});