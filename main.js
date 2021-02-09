const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const brGSalario = x => x.pais == 'Brazil' && x.genero == "M" && x.salario >= 15000

axios.get(url).then(response => {
    const funcionarios = response.data
    const brMSalario = funcionarios.filter(brGSalario)
    console.log(brMSalario)

    console.log("A quantidade de Brasileiros do sexo Masculino com salario acima de 15000 são", brMSalario.length)
})