function abrirImagem(imagem) {
  document.getElementById("modal").style.display = "block";

  document.getElementById("imagemModal").src = imagem;
}

function fecharImagem() {
  document.getElementById("modal").style.display = "none";
}
