import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/VeiculoProps.js";

export class Carro extends Veiculo<CarroProps>{

    constructor(props: CarroProps) {
        super(props);
    }

    public get getQtdePortas(): number { return this.props.qtdePortas; }

    public set setQtdePortas(novaQtdePortas: number) {
        this.props.qtdePortas = novaQtdePortas;
    }
}