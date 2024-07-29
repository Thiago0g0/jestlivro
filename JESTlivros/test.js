const livro = { titulo: 'Jurassic Park', autor: 'Michael Crichton', anoPublicacao: 1990 };
const livro2 = { titulo: 'duna', autor: 'Frank Herbert', anoPublicacao: 1965 };

var livros = [
    { titulo: 'Duna', autor: 'Frank Herbert', anoPublicacao: 1965 },
    { titulo: 'O Iluminado', autor: 'Stephen King', anoPublicacao: 1977 },
    { titulo: 'Eu, robô', autor: 'Isaac Asimov', anoPublicacao: 1950 }
]


function adicionarLivro(livro) {
    const tituloTeste = livro.titulo.toString()
    const autorTeste = livro.autor.toString()
    const anoTeste = Number(livro.anoPublicacao)
    for(i=0; i < livros.length; i++){
        if(livros[i].titulo === livro.titulo){
            throw new Error(`o livro ${livro.titulo} já esta disponivel no acervo`)
        }
    }
    if (livro.titulo === tituloTeste && livro.autor === autorTeste && livro.anoPublicacao === anoTeste) {
        livros.push(livro)
    } else {
        throw new Error(`Não foi possivel adicionar o livro ${livro.titulo}`)
    }

    return livros
}
//console.log(adicionarLivro(livro))

function buscarLivro(titulo) {
    titulo = titulo.toLowerCase()
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].titulo.toLocaleLowerCase() === titulo) {
            return livros[i];
        }
    }
    throw new Error(`O livro ${titulo} não foi encontrado no arcevo`);
}
console.log(buscarLivro('duna'))

function removerLivro(titulo) {
    titulo = titulo.toLowerCase()
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].titulo.toLocaleLowerCase() === titulo) {
            livros.splice(i, 1)
            return livros
        }

    }
    throw new Error(`O livro ${titulo} não foi encontrado no acervo`);
}


module.exports = {adicionarLivro, buscarLivro, removerLivro}