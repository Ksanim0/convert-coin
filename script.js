let input = document.getElementById("botao")
let select = document.getElementById("select-moedas")
let primeiro = document.getElementById("selectfirst") 


async function converterMoedas(){

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    

    if(select.value === "dolar"){
    let valorEmDolares = inputValorReais / dolar
    inputMoedas.innerHTML= valorEmDolares.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }

    if(select.value === "euro"){
        let valorEmEuros = inputValorReais/ euro
        inputMoedas.innerHTML=valorEmEuros.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
    }



    textoReal.innerHTML= inputValorReais.toLocaleString("pt-br",{style: "currency", currency: "BRL"})
}

function bandeira1() {       
    let textoMoedas1 = document.getElementById("texto-moedas1")
    let bandeiraMoedas1 = document.getElementById("bandeira-moedas1")


    if (primeiro.value === "real") {
        textoMoedas1.innerHTML ="Real Brasileiro"
        bandeiraMoedas1.src ="imagem/brasil.png"
    }

    if (primeiro.value === "euro") {
        textoMoedas1.innerHTML ="Euro"
        bandeiraMoedas1.src ="imagem/euro.png"
    }

    if (primeiro.value === "dolar") {
        textoMoedas1.innerHTML ="Dolar Americano"
        bandeiraMoedas1.src ="imagem/eua.png"
    }
    converterMoedas()    }

function trocaDeMoeda(){
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    if(select.value === "dolar"){
        textoMoedas.innerHTML ="Dolar Americano"
        bandeiraMoedas.src ="imagem/eua.png"
    }
    if(select.value ==="euro"){
        textoMoedas.innerHTML ="Euro"
        bandeiraMoedas.src ="imagem/euro.png"
    }
    if(select.value === "real"){
        textoMoedas.innerHTML ="Real Brasileiro"
        bandeiraMoedas.src ="imagem/brasil.png"
    }

    converterMoedas()
}

primeiro.addEventListener("change", bandeira1)
botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)
