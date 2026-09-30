import readLine from "readline-sync"
import { LampadaInteligente } from "./src/models/LampadaInteligente.js"

const novaConta = new LampadaInteligente({ idRede: "matheus", nomeLocal: "matheus", isLigado: true, corHexadecimal: "22", nivelBrilho: 22})

novaConta.setIdRede = readLine.question("\nDigite o ID da rede: ")
novaConta.setNomeLocal = readLine.question("Digite o nome do local: ")
novaConta.setIsLigado = false
novaConta.setCorHexadecimal = readLine.question("Digite a cor em hexadecimal: ")
novaConta.setNivelBrilho = readLine.questionInt("Digite o nivel do brilho: ")