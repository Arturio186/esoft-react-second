import ICompetence from "#interfaces/ICompetence"

export default interface ICompetencesListControlsProps {
    competences: ICompetence[]
    setDisplayCompetences: React.Dispatch<React.SetStateAction<ICompetence[]>>
    isCompetencesVisible: Boolean
    setIsCompetencesVisible: React.Dispatch<React.SetStateAction<Boolean>>
}