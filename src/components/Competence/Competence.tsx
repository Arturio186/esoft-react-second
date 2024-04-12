import React from "react"
import './Competence.scss'

import ICompetence from "#interfaces/ICompetence"
import Button from "#components/UI/Button/Button";

interface ICompetenceProps {
    competence: ICompetence
    competences: ICompetence[]
    setCompetences: React.Dispatch<React.SetStateAction<ICompetence[]>>
}

const Competence : React.FC<ICompetenceProps> = ({ competence, competences, setCompetences }) => {
    return (
        <div className="competence">
            <p className="title">{competence.name}</p>
            <p className="description">{competence.description}</p>
            <p className="">{competence.skill}</p>
            <Button onClick={() => setCompetences(competences.filter(c => c.id != competence.id))}>Удалить</Button>
        </div>
    )
}

export default Competence;