import React from "react";
import TextField from "../../../common/Form/TextField";
import PasswordField from "../../../common/Form/PasswordField";

export default function LoginForm(props) {
    function onSubmit(e){
        console.log(e);
    }

    return (
        <form onSubmit={onSubmit}>
            <TextField name={'username'} id={'username'} label={'User Name'} isRequired={true}/>
            <PasswordField name={'password'} id={'password'} label={'Password'} isRequired={true}/>
        </form>
    )
}
