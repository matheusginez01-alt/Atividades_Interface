import { Dispositivo } from "../models/Dispositivo.js"
import { LampadaInteligenteProps } from "../interface/DispositivoProps.js"

export class LampadaInteligente extends Dispositivo<LampadaInteligenteProps> {

    constructor(props: LampadaInteligenteProps) {
        super(props)
    }

    public get getCorHexdecimal(): string { return this.props.corHexadecimal }
    public get getNibelBrilho(): number { return this.props.nivelBrilho }

    public set setCorHexadecimal(novaCorHexadecimal: string) {
         if (novaCorHexadecimal.trim().length === 0) {
            console.log("\n ERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.corHexadecimal = novaCorHexadecimal
    }
    
    public set setNivelBrilho(novoNivelBrilho: number){
         if (novoNivelBrilho === 0) {
            console.log("\n ERRO: O campo nao pode ser vazio!");
            return;
        }
        this.props.nivelBrilho= novoNivelBrilho
    }
}