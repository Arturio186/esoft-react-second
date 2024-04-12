import React from 'react';

import classes from './Input.module.scss';

import IFormInputProps from '#interfaces/props/IInputProps';

const Input : React.FC<IFormInputProps> = ({ placeholder, type, register, error }) => {
    return (
        <>
            <input 
                {...register}
                type={type}
                className={`${error ? `${classes.errorField}` : ''} ${classes.input}`}
                placeholder={placeholder}
            />
            {error && <p className={classes.error}>{error.message}</p>}
        </>
    )
}

export default Input;