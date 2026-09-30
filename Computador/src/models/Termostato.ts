import { TermostatoProps } from "../interface/DispositivoProps.js"
export class Termostato<T extends TermostatoProps = TermostatoProps> {

    constructor(protected props: T) { }

    public get getTemperaturaAtual(): number { return this.props.temperaturaAtual; }
    public get getTemperaturaAlvo(): number { return this.props.temperaturaAlvo; }

    public set setTemperaturaAtual(novaTemperaturaAtual: number) {
        if (novaTemperaturaAtual === 0) {
            console.log("\n ERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.temperaturaAtual = novaTemperaturaAtual;
    }

    public set setTemperaturaAlvo(novaTemperaturaAlvo: number) {
        if (novaTemperaturaAlvo === 0) {
            console.log("\n ERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.temperaturaAlvo = novaTemperaturaAlvo;
    }
}