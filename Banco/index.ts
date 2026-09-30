import readLine from "readline-sync"
import { ContaCorrente } from "./src/models/ContaCorrente.js"

console.log("=== CONTA CORRENTE ===")

const novaConta = new ContaCorrente({ numeroConta: "Honda", titular: "Civic", saldo: 2021, limiteChequeEspecial: 222 })

console.log(`\n=== Conta cadastrada ===`)

novaConta.setNumeroConta = readLine.question("\nDigite a marca do veiculo: ")
novaConta.setTitular = readLine.question("Digite o modelo do veiculo: ")
novaConta.setSaldo = readLine.questionInt("Digite o ano do veiculo: ")
novaConta.setlimiteChequeEspecial = readLine.questionInt("Digite o Limite do cheque especial: ")