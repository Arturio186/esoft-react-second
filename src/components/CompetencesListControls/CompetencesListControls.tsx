import React, { useState } from "react"
import './CompetencesListControls.scss'

import Button from "#components/UI/Button/Button"

import ICompetence from "#interfaces/ICompetence"
import ICompetencesListControlsProps from "#interfaces/props/ICompetencesListControlsProps"

const CompetencesListControls : React.FC<ICompetencesListControlsProps> = (
    { competences, originalCompetences, setCompetences, isCompetencesVisible,  setIsCompetencesVisible }) => {
    const [isCompetencesFiltered, setIsCopetencesFiltered] = useState<Boolean>(false)

    const ApplyFilter = (filtered: ICompetence[]) => {
        setCompetences(filtered)
        setIsCopetencesFiltered(true)
    }

    const RemoveFilter = () => {
        setCompetences(originalCompetences)
        setIsCopetencesFiltered(false)
    }

    return (
        <div className="controls">
            {isCompetencesVisible ? 
                <Button onClick={() => setIsCompetencesVisible(visible => !visible)}>
                    Убрать компетенции
                </Button> 
                : 
                <Button onClick={() => setIsCompetencesVisible(visible => !visible)}>
                    Показать компетенции
                </Button>
            }
            
            {isCompetencesFiltered && <Button onClick={RemoveFilter}>Убрать фильтр</Button>}

            {!isCompetencesFiltered && 
                <div className="filter__controls">
                    <Button onClick={() => ApplyFilter(competences.filter(competence => competence.skill > 50))}>
                        Показать компетенции с уровнем изучения {'>'}50%
                    </Button>

                    <Button onClick={() => ApplyFilter(competences.filter(competence => competence.skill < 50))}>
                        Показать компетенции с уровнем изучения {'<'}50%
                    </Button>
                </div>
            }
        </div>
    )
}

export default CompetencesListControls;