import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import './AddCompetenceForm.scss'

import Button from '#components/UI/Button/Button'
import Input from '#components/UI/Input/Input'

import IAddCompetenceFields from '#interfaces/fields/IAddCompetenceFields'

const AddCompetenceForm : React.FC = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<IAddCompetenceFields>({mode: "onChange"});

    const onSubmit: SubmitHandler<IAddCompetenceFields> = (data) => {
        alert('Добавляем!')
    }

    return (
        <section className='form__container'>
            <h2>Добавление компетенции</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__group">
                    <label htmlFor="name">Название</label>
                    <Input 
                        type="text"
                        id="name"
                        placeholder="Название"
                        register={register('name', {
                            required: 'Не может быть пустое название',
                        })}
                        error={errors.name}
                    />
                </div>

                <div className="form__group">
                    <label htmlFor="description">Описание</label>
                    <Input
                        type="text"
                        id="description"
                        placeholder="Описание"
                        register={register('description', {
                            required: 'Не может быть пустое описание',
                        })}
                        error={errors.description}
                    />
                </div>

                <div className="form__group">
                    <label htmlFor="description">Уровень освоения</label>
                    <Input
                        type="number"
                        id="skill"
                        placeholder="Уровень освоения"
                        register={register('skill', {
                            required: 'Не может быть пустой уровень освоения',
                            pattern: {
                                value: /^(100|\d{1,2})$/,
                                message: 'Введите число от 0 до 100'
                            }
                        })}
                        error={errors.skill}
                    />
                </div>
                <Button>Добавить</Button>
            </form>
        </section>
    )
}

export default AddCompetenceForm