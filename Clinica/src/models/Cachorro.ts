import { Animal } from "../models/Animal.js"
import { CachorroProps } from "../interface/AnimalProps.js"

export class Cachorro extends Animal<CachorroProps> {

    constructor(props: CachorroProps) {
        super(props)
    }

    public get getPorte(): string { return this.props.porte }
    public get getTosa(): boolean { return this.props.tosa }

    public set setPorte(novoPorte: string) {
        this.props.porte = novoPorte
    }
    
    public set setTosa(novaTosa: boolean){
        this.props.tosa = novaTosa
    }
}