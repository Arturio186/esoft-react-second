import React, { useState } from "react"
import './CompetencesList.scss'

import Button from "#components/UI/Button/Button"

import ICompetencesListProps from "#interfaces/props/ICopetencesListProps"
import Competence from "#components/CompetenceCard/Competence"

const CompetencesList : React.FC<ICompetencesListProps> = ({ competences }) => {
    const [isCompetenceVisible, setIsCompetenceVisible] = useState<Boolean>(false)

    return (
        <>
            {isCompetenceVisible ? 
                <Button onClick={() => setIsCompetenceVisible(visible => !visible)}>
                    Убрать компетенции
                </Button> 
                : 
                <Button onClick={() => setIsCompetenceVisible(visible => !visible)}>
                    Показать компетенции
                </Button>
            }
            {isCompetenceVisible && competences.map(competence => 
                <Competence key={competence.id} competence={competence}/>
            )}
        </>
    )
}

export default CompetencesList