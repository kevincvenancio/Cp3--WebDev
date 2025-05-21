let listagem_produtos = [
    {nome:"Celular",preco:1500,categoria:"Eletronicos",disponibilidade: true},
    {nome:"Notebook",preco:2000,categoria:"Eletronicos",disponibilidade: true},
    {nome:"Relogio",preco:500,categoria:"Eletronicos",disponibilidade: true},
    {nome:"Liquidificador",preco:300,categoria:"Casa",disponibilidade: true},
    {nome:"Colheres",preco:100,categoria:"Casa",disponibilidade: true},
    {nome:"Vassoura",preco:350,categoria:"Casa",disponibilidade: true},
    {nome:"Livro1",preco:200,categoria:"Livros",disponibilidade: false},
    {nome:"Livro2",preco:500,categoria:"Livros",disponibilidade: true},
    {nome:"Livro3",preco:150,categoria:"Livros",disponibilidade: true},
    {nome:"Livro4",preco:250,categoria:"Livros",disponibilidade: false},
]

function listarTodos() {
    exibirProdutos(listagem_produtos);
  }