import React, { useState, useEffect } from "react"
import './CompetencesList.scss'

import Competence from "#components/Competence/Competence"
import CompetencesListControls from "#components/CompetencesListControls/CompetencesListControls"

import ICompetence from "#interfaces/ICompetence"
import ICompetencesListProps from "#interfaces/props/ICopetencesListProps"

const CompetencesList : React.FC<ICompetencesListProps> = ({ competences, setCompetences }) => {
    const [isCompetencesVisible, setIsCompetencesVisible] = useState<Boolean>(false)

    const [originalCompetences, setOriginalCompetences] = useState<ICompetence[]>([])

    useEffect(() => {
        setOriginalCompetences(competences)
    }, [])
    
    return (
        <>  
            <CompetencesListControls 
                competences={competences}
                setCompetences={setCompetences}
                originalCompetences={originalCompetences}
                isCompetencesVisible={isCompetencesVisible}
                setIsCompetencesVisible={setIsCompetencesVisible}
            />

            <h2>Список компетенций</h2>
            <div className="competences">
                {isCompetencesVisible && competences.map(competence => 
                    <Competence key={competence.id} competence={competence}/>
                )}
            </div>
            
        </>
    )
}

export default CompetencesList