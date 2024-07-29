const { adicionarLivro, buscarLivro, removerLivro } = require('./test')

test("adicionar livro funciona", () => {
    const entrada = { titulo: '1984', autor: 'George Owell', anoPublicacao: 1949 }
    const resposta = [
        { titulo: 'Duna', autor: 'Frank Herbert', anoPublicacao: 1965 },
        { titulo: 'O Iluminado', autor: 'Stephen King', anoPublicacao: 1977 },
        { titulo: 'Eu, robô', autor: 'Isaac Asimov', anoPublicacao: 1950 },
        { titulo: '1984', autor: 'George Owell', anoPublicacao: 1949 }
    ]
    expect(adicionarLivro(entrada)).toEqual(resposta)
})

test("erro quando o formato da variavel for errado", () => {
    const livro1 = { titulo: 1984, autor: 'George Owell', anoPublicacao: 1949 };
    const livro2 = { titulo: '1984', autor: 1984, anoPublicacao: 1949 };
    const livro3 = { titulo: '1984', autor: 'George Owell', anoPublicacao: '1949' };
    expect(() => adicionarLivro(livro1)).toThrow()
    expect(() => adicionarLivro(livro2)).toThrow()
    expect(() => adicionarLivro(livro3)).toThrow()
}) 

test("erro quando for um livro já disponivel no acervo", () => {
    const entrada = { titulo: 'Duna', autor: 'Frank Herbert', anoPublicacao: 1965 }
    expect(() => adicionarLivro(entrada)).toThrow()
})

test("buscar livro funciona", () => {
    const entrada = "Duna"
    const resposta = { titulo: 'Duna', autor: 'Frank Herbert', anoPublicacao: 1965 }
    expect(buscarLivro(entrada)).toEqual(resposta)
})

test("titulo começando com letra minuscula", () => {
    const entrada = 'o iluminado'
    expect(buscarLivro(entrada)).toEqual({ titulo: 'O Iluminado', autor: 'Stephen King', anoPublicacao: 1977 })
})

test("buscar livro não disponivel no acervo", () => {
    const entrada = 'Jurassic Park'
    expect(() => buscarLivro(entrada)).toThrow()
})

test("remover livro funciona", () => {
    const entrada = 'Eu, robô'
    const resposta = [
        { titulo: 'Duna', autor: 'Frank Herbert', anoPublicacao: 1965 },
        { titulo: 'O Iluminado', autor: 'Stephen King', anoPublicacao: 1977 },
        { titulo: '1984', autor: 'George Owell', anoPublicacao: 1949 }
    ]
    expect(removerLivro(entrada)).toEqual(resposta) 
})

test("titulo começando com letra minuscula", () => {
    const entrada = 'duna'
    const resposta = [
        { titulo: 'O Iluminado', autor: 'Stephen King', anoPublicacao: 1977 },
        { titulo: '1984', autor: 'George Owell', anoPublicacao: 1949 }
    ]
    expect(removerLivro(entrada)).toEqual(resposta)
})

test("remover livro não disponivel no acervo", () => {
    const entrada = 'Harry Potter e a Pedra Filosofal'
    expect(() => removerLivro(entrada)).toThrow()
})