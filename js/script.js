class Calculadora {
    
    somatoria(numeros){
        let soma = 0;

        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        return soma;
    
    }
    

    somatoriaX(vetorX){
        let resultado = 0;
        resultado = this.somatoria(vetorX);
        return resultado;
    }

    somatoriaY(vetorY){
        let resultado = 0;
        resultado = this.somatoria(vetorY);
        return resultado;
    }

    somatoriaXY(vetorY,vetorX){

        let xy = 0
        let arrayXy = []

        for (let i = 0; i < vetorX.length; i++){
            let multiplicaTemp = vetorX[i] * vetorY[i]
            arrayXy.push(multiplicaTemp);
        }
        xy = this.somatoria(arrayXy)

        return xy
    }

    somatoriaX2(vetorX){

        let resultSomaX2 = 0
        let somaX2 = []
        
        for (let i = 0; i < vetorX.length; i++){
            let xQuadrado = vetorX[i] * vetorX[i]
            somaX2.push(xQuadrado)
        }
        resultSomaX2 = this.somatoria(somaX2)
        return resultSomaX2
    }

    somatoriaY2(vetorY){
        
        let resultSomaY2 = 0
        let somaY2 = []
        
        for (let i = 0; i < vetorY.length; i++){
            let yQuadrado = vetorY[i] * vetorY[i]
            somaY2.push(yQuadrado)
        }
        resultSomaY2 = this.somatoria(somaY2)
        return resultSomaY2
    }
    
    calculaR (vetorX,vetorY){
        
        console.log(vetorX)
        console.log(vetorY)
        

        let tamanho = vetorX.length
        

        let xy = 0
        let resultSomaX = 0
        let resultSomaY = 0
        let resultSomaX2 = 0
        let resultSomaY2 = 0

        //calculando XY
        xy = this.somatoriaXY(vetorX,vetorY)

        // somatória de X
        resultSomaX = this.somatoriaX(vetorX)


        // somatória de Y
        resultSomaY = this.somatoriaY(vetorY)


        // somatória x^2
        resultSomaX2 = this.somatoriaX2(vetorX)

        // somatória y^2
        resultSomaY2 = this.somatoriaY2(vetorY)

        let resultadoCoeficienteCorrelacaoCima = (tamanho*xy) - (resultSomaX*resultSomaY)
        console.log("resultado cima R: ", resultadoCoeficienteCorrelacaoCima)
        let resultadoCoeficienteCorrelacaoBaixo = ((tamanho*(resultSomaX2)) - (resultSomaX*resultSomaX))*((tamanho*(resultSomaY2)) - (resultSomaY*resultSomaY))
        console.log("resultado baixo R: ", resultadoCoeficienteCorrelacaoBaixo)
        let resultadoCoeficienteCorrelacao = resultadoCoeficienteCorrelacaoCima/Math.sqrt(resultadoCoeficienteCorrelacaoBaixo)


        console.log("Xy: ",xy)
        console.log("Result SomaX: ",resultSomaX)
        console.log("Result SomaY: ",resultSomaY)
        console.log("Result SomaX2: ",resultSomaX2)
        console.log("Result SomaY2: ",resultSomaY2)

        return resultadoCoeficienteCorrelacao

    }

    calcularB0(vetorX, vetorY){

       let mediaX = this.somatoria(vetorX)/vetorX.length
       let mediaY = this.somatoria(vetorY)/vetorY.length
       let b1 = this.calcularB1(vetorX, vetorY)

       let resultadoCoeficienteLinear = mediaY - (b1*mediaX)

       console.log(resultadoCoeficienteLinear)

       return resultadoCoeficienteLinear

    }

    calcularB1(vetorX,vetorY){
        
        let tamanho = vetorX.length

        let xy = 0
        let resultSomaX = 0
        let resultSomaY = 0
        let resultSomaX2 = 0
        let resultSomaY2 = 0

        //calculando XY
        xy = this.somatoriaXY(vetorX,vetorY)

        // somatória de X
        resultSomaX = this.somatoriaX(vetorX)


        // somatória de Y
        resultSomaY = this.somatoriaY(vetorY)


        // somatória x^2
        resultSomaX2 = this.somatoriaX2(vetorX)

        // somatória y^2
        resultSomaY2 = this.somatoriaY2(vetorY)

        let resultadoCoeficienteAngular = ((tamanho*xy) - (resultSomaX*resultSomaY))/((tamanho*(resultSomaX2)) - (resultSomaX*resultSomaX))

        console.log(resultadoCoeficienteAngular)

        return resultadoCoeficienteAngular

    }

    escondeClasse(elemento){
        elemento.classList.remove("hide");
    }

    erro(){
        document.querySelector("#input-x").value = ""
        document.querySelector("#input-y").value = ""
        
        let inputs = document.querySelectorAll(".inputs")
        
        inputs.forEach(function(input) {
            input.placeholder = "Insira os dados corretamente"
            input.style.borderColor = "red"
        });
    }

    reset(){
        document.querySelector("#input-x").value = ""
        document.querySelector("#input-y").value = ""
        
        let inputs = document.querySelectorAll(".inputs")
        
        inputs.forEach(function(input) {
            input.placeholder = ""
            input.style.borderColor = "#ccc"
        }); 
    }
}


let calculadora = new Calculadora()

let addBtnX = document.querySelector("#botao-x")
let addBtnCalcular = document.querySelector("#botao-calcular")

let vetorX = []
let vetorY = []

// adiciona o item ao array quando clica no botão e imprime na tela
addBtnX.addEventListener("click", function (){

    let inputX = document.querySelector("#input-x").value
    let inputY = document.querySelector("#input-y").value

    let x = parseFloat(inputX);
    let y = parseFloat(inputY);
    
    if (!isNaN(x) && !isNaN(y)){
        // pega referencia do corpo da tabela
        let corpoTabela = document.getElementById("corpoTabela");

        // cria celulas 
        let celulaX = document.createElement("td");
        celulaX.textContent = inputX;
        let celulaY = document.createElement("td");
        celulaY.textContent = inputY;
        
        // cria uma nova linha
        novaLinha = document.createElement("tr");

        // adiciona as celulas as linhas
        novaLinha.appendChild(celulaX);
        novaLinha.appendChild(celulaY);

        // adicona linha ao corpo da tabela
        corpoTabela.appendChild(novaLinha);

        // adiciona valores aos vetores
        vetorY.push(y)
        vetorX.push(x)

        // limpa os valores
        calculadora.reset()

    } else {
        calculadora.erro()
    }
})

addBtnCalcular.addEventListener("click", function (){
 
    if (vetorX.length > 0){
        // faz a classe dos resultados aparecer
        saidaResultadosMain = document.querySelector("#resultados")
        calculadora.escondeClasse(saidaResultadosMain)

        // resultado somatoria X
        let resultadoSomatoriaX = calculadora.somatoriaX(vetorX)
        let saidaSomaX = document.querySelector("#resultado-soma-x")
        saidaSomaX.textContent = resultadoSomatoriaX

        // resultado somatoria X2
        let resultadoSomatoriaX2 = calculadora.somatoriaX2(vetorX)
        let saidaSomaX2 = document.querySelector("#resultado-soma-x2")
        saidaSomaX2.textContent = resultadoSomatoriaX2

        // resultado somatoria Y
        let resultadoSomatoriaY = calculadora.somatoriaY(vetorY)
        let saidaSomaY = document.querySelector("#resultado-soma-y")
        saidaSomaY.textContent = resultadoSomatoriaY

        // resultado somatoria Y2
        let resultadoSomatoriaY2 = calculadora.somatoriaY2(vetorY)
        let saidaSomaY2 = document.querySelector("#resultado-soma-y2")
        saidaSomaY2.textContent = resultadoSomatoriaY2

        // resultado somatoria XY
        let resultadoSomatoriaXY = calculadora.somatoriaXY(vetorX, vetorY)
        let saidaSomaXY = document.querySelector("#resultado-soma-xy")
        saidaSomaXY.textContent = resultadoSomatoriaXY

        // resultado R
        let resultadoR = calculadora.calculaR(vetorX,vetorY)
        let saidaR = document.querySelector("#resultado-r")
        saidaR.textContent = resultadoR

        // resultado regressão linear
        let saidaRegressao = document.querySelector("#resultado-regressao")
        saidaRegressao.textContent = "y = b0 + b1 . X"

        // resultado b0
        let resultadoCoeficienteLinearSaida = calculadora.calcularB0(vetorX,vetorY)
        let saidaCoeficienteLinear = document.querySelector("#resultado-b0")
        saidaCoeficienteLinear.textContent = resultadoCoeficienteLinearSaida

        // resultado b1
        let resultadoCoeficienteAngularSaida = calculadora.calcularB1(vetorX,vetorY)
        let saidaCoeficienteAngular = document.querySelector("#resultado-b1")
        saidaCoeficienteAngular.textContent = resultadoCoeficienteAngularSaida

        calculadora.reset()

    } else {
        calculadora.erro()
    }
})

