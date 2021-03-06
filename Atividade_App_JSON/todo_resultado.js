const url = 'https://dados.ifpb.edu.br/dataset/e99b5cfd-f2f3-4b54-bb4f-6ddd9e480af7/resource/f81de6aa-afde-4cdb-bee0-a9ed2f87c4c3/download/projetos-pesquisa.json'

const axios = require('axios')

/*axios.get(url).then(resposta =>{
    const server = resposta.data
    console.log(server)
})
*/

const inicio_execucao = f => f.inicio_execucao == '27/01/2016'

const area_conhecimento = f => f.area_conhecimento == 'ENGENHARIA ELÉTRICA'

axios.get(url).then(resposta =>{
    const servidores = resposta.data
    module.exports.resultado = servidores.filter(area_conhecimento).filter( inicio_execucao)
    console.log(this.resultado)

})





