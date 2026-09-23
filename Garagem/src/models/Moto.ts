import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/VeiculoProps.js";

export class Moto extends Veiculo<MotoProps>{

    constructor(props: MotoProps) {
        super(props);
    }

    public get getCilindradas(): number { return this.props.cilindradas; }

    public set setCilindradas(novaCilindrada: number) {
        this.props.cilindradas = novaCilindrada;
    }
}