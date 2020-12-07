import React from 'react'
import AuthActions from './AuthActions'
import { ROUTE_LOGIN } from '../../constants/routes'
import { useLocation } from 'react-router'
import Logo from './Logo'

export default function Header (props) {
    const location = useLocation()

    return (
        <header className="w-full mb-4 flex justify-between items-center py-2">
            <Logo/>
            {location.pathname !== ROUTE_LOGIN && <AuthActions/>}
        </header>
    )
}
