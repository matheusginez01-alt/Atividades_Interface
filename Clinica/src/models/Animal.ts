import { AnimalProps } from "../interface/AnimalProps.js"

export class Animal<T extends AnimalProps = AnimalProps> {

    constructor(protected props: T) { }

    public get getNomeTutor(): string { return this.props.nomeTutor }
    public get getNomePaciente(): string { return this.props.nomePaciente }
    public get getPeso(): number { return this.props.peso }

    public set setNomeTutor(novoNomeTutor: string) {
        if (novoNomeTutor.trim().length === 0) {
            console.log("\n ERRO: Este campo nao pode ser vazio!")
            return
        }
        this.props.nomeTutor = novoNomeTutor
    }

    public set setNomePaciente(novoNomePaciente: string) {
        if (novoNomePaciente.trim().length === 0) {
            console.log("\n ERRO: Este campo nao pode ser vazio!")
            return
        }
        this.props.nomePaciente = novoNomePaciente
    }

    public set setPeso(novoPeso: number) {
        if (novoPeso = 0) {
            console.log("\n ERRO: Este campo nao pode ser vazio!")
            return
        }
        this.props.peso = novoPeso
    }
}