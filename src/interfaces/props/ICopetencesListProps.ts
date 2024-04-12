import ICompetence from "#interfaces/ICompetence"

export default interface ICompetencesListProps {
    competences: ICompetence[]
    setCompetences: React.Dispatch<React.SetStateAction<ICompetence[]>>
}