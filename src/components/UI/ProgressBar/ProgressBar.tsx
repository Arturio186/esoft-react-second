import React from 'react'
import classes from './ProgressBar.module.scss'

import IProgressBarProps from '#interfaces/props/IProgressBarProps'

const ProgressBar: React.FC<IProgressBarProps> = ({ percentage }) => {
    return (
        <div className={classes.container}>
            <div className={classes.bar} style={{ width: `${percentage}%` }}>
                {percentage != 0 && <span className={classes.label}>{percentage}</span>}
            </div>
        </div>
    )
}

export default ProgressBar;