import React from 'react'
import InputField from '../InputField'

export default function TextField (props) {
    const { name, id, label, isRequired, placeholder } = props
    return (
        <InputField type="text" label={label} id={id} name={name} isRequired={isRequired} placeholder={placeholder}/>
    )
}

TextField.propTypes = InputField.propTypes

TextField.defaultProps = {
    isRequired: false,
    placeholder: '...'
}
