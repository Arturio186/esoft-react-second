import ICompetence from "#interfaces/ICompetence"

export default interface IAddCompetenceFormProps {
    competences: Array<ICompetence>
    setCompetences: React.Dispatch<React.SetStateAction<ICompetence[]>>
}