import ICompetence from "#interfaces/ICompetence"

export default interface IAddCompetenceFormProps {
    competences: ICompetence[]
    setCompetences: React.Dispatch<React.SetStateAction<ICompetence[]>>
}