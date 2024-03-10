import LivroCategoria from "../Modelo/livroCategoria.js";

export default class LivroCategoriaCtrl {
    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const livroCodigo = dados.livroCodigo;
            const categoriaCodigo = dados.categoriaCodigo;
            if (livroCodigo && categoriaCodigo) {
                const livroCategoria = new LivroCategoria(livroCodigo, categoriaCodigo);
                livroCategoria.gravar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Relação livro-categoria incluída com sucesso!"
                    });
                })
                .catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao registrar a relação livro-categoria:" + erro.message
                    });
                });
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe o código do livro e da categoria!"
                });
            }
        } else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método POST para cadastrar uma relação livro-categoria!"
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'DELETE' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const livroCodigo = dados.livroCodigo;
            const categoriaCodigo = dados.categoriaCodigo;
            if (livroCodigo && categoriaCodigo) {
                const livroCategoria = new LivroCategoria(livroCodigo, categoriaCodigo);
                livroCategoria.excluir().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Relação livro-categoria excluída com sucesso!"
                    });
                })
                .catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir a relação livro-categoria:" + erro.message
                    });
                });
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe o código do livro e da categoria!"
                });
            }
        } else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método DELETE para excluir uma relação livro-categoria!"
            });
        }
    }
}
