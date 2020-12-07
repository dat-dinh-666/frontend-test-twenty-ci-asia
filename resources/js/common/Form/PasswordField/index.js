import React from 'react'
import InputField from '../InputField'

export default function PasswordField (props) {
    const { name, id, label, isRequired, placeholder } = props
    return (
        <InputField type="password" label={label} id={id} name={name} isRequired={isRequired} placeholder={placeholder}/>
    )
}

PasswordField.propTypes = InputField.propTypes

PasswordField.defaultProps = {
    isRequired: true,
    placeholder: '...'
}
