import React from 'react'
import classes from './Button.module.scss'

import IButtonProps from '#interfaces/props/IButtonProps'

const Button : React.FC<IButtonProps> = ({ children, onClick }) => {
    return (
        <button className={classes.btn} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button