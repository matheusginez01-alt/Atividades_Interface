import { Animal } from "../models/Animal.js"
import { GatoProps } from "../interface/AnimalProps.js"

export class Gato extends Animal<GatoProps> {

    constructor(props: GatoProps) {
        super(props)
    }

    public get getfivFelvTestado(): boolean { return this.props.fivFelvTestado }
    public get getIsIndoor(): boolean { return this.props.isIndoor }

    public set setFivFelvTestado(novoFivFelvTestado: boolean) {
        this.props.fivFelvTestado = novoFivFelvTestado
    }
    
    public set setIsIndoor(novoIsIndoor: boolean){
        this.props.isIndoor = novoIsIndoor
    }
}