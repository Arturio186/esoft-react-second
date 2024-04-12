import {UseFormRegisterReturn, FieldError} from 'react-hook-form';

export default interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegisterReturn<any>;
    error: FieldError | undefined;
}