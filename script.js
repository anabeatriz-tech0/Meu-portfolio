// Ampliação de imagens da página Áreas e da galeria de Anexos
function abrirImagem(imagem) {
    const modal = document.getElementById("modalImagem");
    const imagemAmpliada = document.getElementById("imagemAmpliada");
    if (!modal || !imagemAmpliada || !imagem) return;
    imagemAmpliada.src = imagem.src;
    imagemAmpliada.alt = imagem.alt || "Imagem ampliada";
    modal.classList.add("ativo");
}
function fecharImagem() {
    const modal = document.getElementById("modalImagem");
    if (modal) modal.classList.remove("ativo");
}
const modalImagem = document.getElementById("modalImagem");
if (modalImagem) {
    modalImagem.addEventListener("click", function(event) {
        if (event.target === this) fecharImagem();
    });
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") fecharImagem();
});
