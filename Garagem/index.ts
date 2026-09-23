import readLine from "readline-sync"
import { Veiculo } from "./src/models/Veiculo.js"

console.log("=== CADASTRO DE VEICULO ===")

const novoVeiculo = new Veiculo({
    marca: "Honda", modelo: "Civic", ano: 2021})

console.log(`\nVeiculo cadastrado: ${novoVeiculo.getMarca}+${novoVeiculo.getMarca}`)

novoVeiculo.setMarca = readLine.question("\nDigite a marca do veiculo: ")
novoVeiculo.setModelo = readLine.question("Digite o modelo do veiculo: ")
novoVeiculo.setAno = readLine.questionInt("Digite o ano do veiculo: ")