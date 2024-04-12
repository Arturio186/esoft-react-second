import React, { useState, useEffect } from "react"
import './CompetencesList.scss'

import Competence from "#components/Competence/Competence"
import CompetencesListControls from "#components/CompetencesListControls/CompetencesListControls"

import ICompetence from "#interfaces/ICompetence"
import ICompetencesListProps from "#interfaces/props/ICopetencesListProps"

const CompetencesList : React.FC<ICompetencesListProps> = ({ competences, setCompetences }) => {
    const [isCompetencesVisible, setIsCompetencesVisible] = useState<Boolean>(false)

    const [displayCompetences, setDisplayCompetences] = useState<ICompetence[]>(competences)

    useEffect(() => {
        setDisplayCompetences(competences)
    }, [competences])

    return (
        <>  
            <CompetencesListControls 
                competences={competences}
                setDisplayCompetences={setDisplayCompetences}
                isCompetencesVisible={isCompetencesVisible}
                setIsCompetencesVisible={setIsCompetencesVisible}
            />

            <h2>Список компетенций</h2>

            {displayCompetences.length !== 0 ?
                <div className="competences">
                    {isCompetencesVisible && displayCompetences.map(competence => 
                        <Competence 
                            key={competence.id} 
                            competence={competence}
                            competences={competences}
                            setCompetences={setCompetences}
                        />
                    )}
                </div>
                :
                <p className="message">Список пуст</p>
            }
        </>
    )
}

export default CompetencesList