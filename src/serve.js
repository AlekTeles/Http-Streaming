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

// Stateful - Stateless

// JSON - Javascript Object Notation

// Cabeçalhos (Requisição/resposta) => Metadados

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url} = req

    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers)
        .toString())
    } catch {
        req.body = null
    }

    


    if (method === 'GET'  && url === '/users') { 
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users)) 
    }

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body

        users.push({ 
            id: 1,
            name,
            email,
        }) 
         
        return res.writeHead(201).end() 
    }

    console.log(method, url)

    return res.writeHead(404).end('Not Found')
})

server.listen(3333) 