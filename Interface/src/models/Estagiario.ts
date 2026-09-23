import { PessoaFisica } from "./PessoaFisica.js"
import { EstagiarioProps } from "../interfaces/PessoaFisicaProps.js"

// Passamos EstagiarioProps para o Generic da classe mãe
export class Estagiario extends PessoaFisica<EstagiarioProps> {

    constructor(props: EstagiarioProps) {
        super(props)
    }

    public get getInstituicaoEnsino(): string { return this.props.institucaoEnsino }
    public get getBolsaAuxilio(): number { return this.props.bolsaAuxilio }

    public set setInstituicaoEnsino(novaInstituicaoEnsino: string) {
        if (novaInstituicaoEnsino.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!")
            return
        }
        this.props.institucaoEnsino = novaInstituicaoEnsino
    }
    public set setBolsaAuxilio(novaBolsaAuxilio: number) {
        if (novaBolsaAuxilio = 0) {
            console.log("\n ERRO: O campo não pode ser vazio!")
            return
        }
        this.props.bolsaAuxilio = novaBolsaAuxilio
    }
}