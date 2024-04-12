import React, { useState } from 'react'
import './App.scss'

import CompetencesList from '#components/CompetencesList/CompetencesList'

import ICompetence from '#interfaces/ICompetence'
import AddCompetenceForm from '#components/Forms/AddCompetenceForm/AddCompetenceForm'

const App : React.FC = () => {
    const [competences, setCopmetences] = useState<Array<ICompetence>>([
        {id: 0, name: 'React', description: 'JavaScript библиотека для создания SPA', skill: 70},
        {id: 1, name: 'TypeScript', description: 'Строго типизированный язык программирования, построенный на JavaScript', skill: 30},
        {id: 2, name: 'Node.js', description: 'Программная платформа, основанная на движке V8 (компилирующем JavaScript в машинный код', skill: 70},
        {id: 3, name: 'PostgreSQL', description: 'СУБД', skill: 40},
    ])

    return (
        <>
            <AddCompetenceForm 
                competences={competences} 
                setCompetences={setCopmetences}
            />
            
            <CompetencesList 
                competences={competences} 
                setCompetences={setCopmetences}
            />
        </>
    )
}

export default App
