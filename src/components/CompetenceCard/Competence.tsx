import React from "react"
import './Competence.scss'

import ICompetence from "#interfaces/ICompetence"

interface ICompetenceProps {
    competence: ICompetence;
}

const Competence : React.FC<ICompetenceProps> = ({ competence }) => {
    return (
        <div className="competence">
            <p>{competence.id}</p>
            <p>{competence.name}</p>
            <p>{competence.description}</p>
            <p>{competence.skill}</p>
        </div>
    )
}

export default Competence;