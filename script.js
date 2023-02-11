//VARIÁVEIS GLOBAIS

const btnCalcularImc = document.getElementById("btnCalcularImc")
const divResultado = document.getElementById("divResultado")
const idadeDaPessoa = document.getElementById("idadeDaPessoa")

const botaoReiniciar = document.createElement('button')
botaoReiniciar.classList.add('botaoReiniciar')
botaoReiniciar.innerText = 'Calcular novo IMC'

//FUNÇÕES

function calcularImc () {
    const nomeDaPessoa = document.getElementById("nomeDaPessoa").value
    const alturaDaPessoa = document.getElementById("alturaDaPessoa")
    const pesoDaPessoa = document.getElementById("pesoDaPessoa")

    if(alturaDaPessoa.value === '' || pesoDaPessoa.value === '') {
        alert('Campos em branco!')
    } else {
        let imc = pesoDaPessoa.value / (alturaDaPessoa.value**2)
        divResultado.textContent = `${nomeDaPessoa} tem o IMC de ${imc.toFixed(2)} kg/m²`
    
        divResultado.appendChild(botaoReiniciar)
            if(divResultado.style.display === 'none') {
                divResultado.style.display = 'flex'
            }
    }
}

function zerarCampos() {
    nomeDaPessoa.value = ''
    alturaDaPessoa.value = ''
    idadeDaPessoa.value = ''
    pesoDaPessoa.value = ''
    // alert(divResultado)
    divResultado.style.display = 'none'
}

//EVENTOS

btnCalcularImc.addEventListener('click', calcularImc)
botaoReiniciar.addEventListener('click', zerarCampos)