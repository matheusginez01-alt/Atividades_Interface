export interface AnimalProps {
    nomeTutor: string
    nomePaciente: string
    peso: number
}

export interface CachorroProps extends AnimalProps {
    porte: string
    tosa: boolean
}

export interface GatoProps extends AnimalProps {
    fivFelvTestado: boolean
    isIndoor: boolean
}