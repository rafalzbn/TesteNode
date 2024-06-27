import tabela2024 from './tabela.js';
import express from 'express';

const app = express('./middlewares/uplaoadImage');

const uploadUser = require()
app.post("/upload-image", uploadUser.single('image'),  async (req, res) =>{
if(req.file){
}
    return res.json({
        erro: false,
        mensagem: "upload realizado com sucesso!"
    })
} );


app.get('/', (requisicao, resposta) => {resposta.status(200).send(tabela2024)});

app.get('/:sobrenome', (requisicao, resposta) => { 
    const sobrenomeInformado = requisicao.params.sobrenome.toUpperCase();
    const nome =  tabela2024.find(infoNome => infoNome.sobrenome === sobrenomeInformado);
    resposta.status(200).send(nome);
    if (!nome) {
        resposta.status(404).send('Não existe esse nome informado no sistema');
        return;
    }
    resposta.status(200).send(nome);
  
});
app.put('/:sigla', (req, res) =>{
    const sobrenomeInformado = req.params.sobrenome.toUpperCase();
    const nomeSelecionado = tabela2024.find(n => n.sobrenome === sobrenomeInformado);

} )

app.listen(300, () => {console.log ('Servidor rodando com sucessor http://localhost:300')
});



