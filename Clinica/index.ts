import readLine from "readline-sync"
import { Cachorro } from "./src/models/Cachorro.js"

console.log("=== Cadastro de Paciente ===")

const novaConta = new Cachorro({ nomeTutor: "Honda", nomePaciente: "Civic", peso: 2021, porte: "222", tosa: false })

console.log(`\n=== Conta cadastrada ===`)

novaConta.setNomeTutor = readLine.question("\nDigite o nome do tutor: ")
novaConta.setNomePaciente = readLine.question("Digite o nome paciente: ")
novaConta.setPeso = readLine.questionInt("Digite o peso do animal: ")
novaConta.setPorte = readLine.question("Digite o porte do cachorro: ")
novaConta.setTosa = true