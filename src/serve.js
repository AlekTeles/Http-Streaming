import http  from 'node:http'

// -Criar usuários
// -Listagem usuários
// -Edição de usuários
// -Remoção de usuários

// -HTTP
// -Método HTTP
// -URL 

// GET, POST, PUT, PATCH , DELETE

// GET => Buscar uma recurso do back-end
// POST => Criar uma recurso no back-end
// PUT => Atualização um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criar um usuário no back-end

const server = http.createServer((req, res) => {
    const { method, url} = req

    console.log(method, url)

    return res.end('Hello Wor')
})

server.listen(3333)