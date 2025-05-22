let listagem_produtos = [
    {nome:"Celular", preco:1500, categoria:"Eletronicos", disponibilidade: true},
    {nome:"Notebook", preco:2000, categoria:"Eletronicos", disponibilidade: false},
    {nome:"Relogio", preco:500, categoria:"Eletronicos", disponibilidade: true},
    {nome:"Liquidificador", preco:300, categoria:"Casa", disponibilidade: true},
    {nome:"Colheres", preco:100, categoria:"Casa", disponibilidade: true},
    {nome:"Vassoura", preco:350, categoria:"Casa", disponibilidade: false},
    {nome:"Livro1", preco:200, categoria:"Livros", disponibilidade: false},
    {nome:"Livro2", preco:500, categoria:"Livros", disponibilidade: true},
    {nome:"Livro3", preco:150, categoria:"Livros", disponibilidade: true},
    {nome:"Livro4", preco:250, categoria:"Livros", disponibilidade: false},
  ];
  
  window.onload = function() {
    const btnTodos = document.getElementById("btnTodos");
    const btnFiltrar = document.getElementById("filtrar");
  
    btnTodos.addEventListener("click", mostrarTodos);
    btnFiltrar.addEventListener("click", filtrarProdutos);
  }
  
  function mostrarTodos() {
    const imagens = document.querySelectorAll(".imagens img");
    for (let i = 0; i < imagens.length; i++) {
      imagens[i].style.display = "inline"; // mostra todas as imagens
    }
  
    document.getElementById("texto").innerText = "Todos os produtos:";
  }
  
  function filtrarProdutos() {
    const categoria = document.getElementById("categorias").value;
    const checkbox = document.getElementById("checkbox").checked;
    const imagens = document.querySelectorAll(".imagens img");
  
    for (let i = 0; i < imagens.length; i++) {
      let img = imagens[i];
      const imgCategoria = img.className;
  
      // para ver disponibilidade, procura o produto pelo nome (alt)
      let produto = null;
      for (let j = 0; j < listagem_produtos.length; j++) {
        if (listagem_produtos[j].nome === img.alt) {
          produto = listagem_produtos[j];
          break;
        }
      }
  
      // decide se mostra ou não a imagem
      const mostrar =
        (categoria === imgCategoria) &&
        (!checkbox || (checkbox && produto && produto.disponibilidade));
  
      img.style.display = mostrar ? "inline" : "none";
    }
  
    document.getElementById("texto").innerText = "Produtos da categoria: " + categoria;
  }
  