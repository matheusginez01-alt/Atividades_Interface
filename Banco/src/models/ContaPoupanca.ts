import { ContaBancaria } from "../models/ContaBancaria.js"
import { ContaPoupancaProps } from "../interface/ContaBancariaProps.js"

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    constructor(props: ContaPoupancaProps) {
        super(props)
    }

    public get getTaxaRendimentoMensal(): number { return this.props.taxaRendimentoMensal }

    public set setTaxaRendimentoMensal(novoTaxaRendimentoMensal: number) {
        this.props.taxaRendimentoMensal = novoTaxaRendimentoMensal
    }
}