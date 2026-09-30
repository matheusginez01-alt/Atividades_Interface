import { ContaBancaria } from "../models/ContaBancaria.js"
import { ContaCorrenteProps } from "../interface/ContaBancariaProps.js"

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {

    constructor(props: ContaCorrenteProps) {
        super(props)
    }

    public get limiteChequeEspecial(): number { return this.props.limiteChequeEspecial }

    public set setlimiteChequeEspecial(novoLimiteChequeEspecial: number) {
        this.props.limiteChequeEspecial = novoLimiteChequeEspecial
    }
}