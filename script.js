const imagens = [
    'imagens/1.jpg',
    'imagens/2.png',
    'imagens/3.jpg',
    'imagens/4.jpg',
    'imagens/5.jpg'
  ];
  
  const imagemPrincipal = document.getElementById('imagem-principal');
  const miniaturasContainer = document.getElementById('miniaturas');
  const btnAnterior = document.getElementById('anterior');
  const btnProxima = document.getElementById('proxima');
  
  let imagemAtual = 0;
  
  // Renderiza miniaturas
  imagens.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Miniatura ${index + 1}`;
    img.addEventListener('click', () => {
      mudarImagem(index);
    });
    miniaturasContainer.appendChild(img);
  });
  
  function mudarImagem(index) {
    imagemAtual = index;
    imagemPrincipal.src = imagens[imagemAtual];
    atualizarMiniaturas();
  }
  
  function atualizarMiniaturas() {
    const miniaturas = document.querySelectorAll('.miniaturas img');
    miniaturas.forEach((img, i) => {
      img.classList.toggle('ativa', i === imagemAtual);
    });
  }
  
  btnAnterior.addEventListener('click', () => {
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    mudarImagem(imagemAtual);
  });
  
  btnProxima.addEventListener('click', () => {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    mudarImagem(imagemAtual);
  });
  
  // Inicializa
  mudarImagem(imagemAtual);
  
  
  
  