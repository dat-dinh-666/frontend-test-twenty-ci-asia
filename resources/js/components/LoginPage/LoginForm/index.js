import React from 'react'
import PasswordField from '../../../common/Form/PasswordField'
import SubmitBtn from '../../../common/Form/SubmitBtn'
import AuthService from '../../../services/auth.service'
import { toast } from 'react-toastify'
import InputField from '../../../common/Form/InputField'
import { useHistory } from 'react-router'

export default function LoginForm (props) {
    const history = useHistory()

    async function onSubmit (e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const params = {}

        for (const [key, value] of formData.entries()) {
            params[key] = value
        }

        if (!validate(params)) {
            toast.error('Input is invalid')
        }

        if (await AuthService.login(params)) {
            toast.success('Login successfully')
            history.push('/')
            return
        }
        toast.error('Login unsuccessfully')
    }

    function validate (params) {
        return true
    }

    return (
        <form onSubmit={onSubmit} className="max-w-xl mx-auto">
            <legend className="text-3xl text-center mb-4">
                <span>Login</span>
            </legend>
            <InputField type="email" name={'email'} id={'email'} label={'Email'} placeholder={'Please enter email'} isRequired={true}/>
            <div className="mb-4 text-sm italic">Test email: fetest@gmail.com</div>
            <PasswordField name={'password'} id={'password'} label={'Password'} placeholder={'Please enter password'} isRequired={true}/>
            <div className="mb-4 text-sm italic">Test password: admin@123</div>
            <SubmitBtn className={'btn-primary w-full'}/>
        </form>
    )
}
