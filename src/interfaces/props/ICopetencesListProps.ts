import ICompetence from "#interfaces/ICompetence"

export default interface ICompetencesListProps {
    competences: Array<ICompetence>
    setCompetences: React.Dispatch<React.SetStateAction<ICompetence[]>>
}