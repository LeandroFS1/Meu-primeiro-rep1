const express = require('express')
const {obterAlunos,obterAlunosPeloId, adicionarAluno} = require('./controladores/controladores')
const validaSenha = require('./intermediarios')
const rotas = express()
rotas.use(validaSenha)
rotas.get('/alunos', obterAlunos )
rotas.get('/alunos/:id' ,obterAlunosPeloId)
rotas.post('/alunos/cadastro', adicionarAluno)
module.exports = rotas