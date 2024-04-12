import ICompetence from "#interfaces/ICompetence"

export default interface ICompetencesListControlsProps {
    competences: ICompetence[]
    setCompetences: React.Dispatch<React.SetStateAction<ICompetence[]>>
    originalCompetences: ICompetence[]
    isCompetencesVisible: Boolean
    setIsCompetencesVisible: React.Dispatch<React.SetStateAction<Boolean>>
}