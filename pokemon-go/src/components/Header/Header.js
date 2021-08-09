import React from "react"
import { Logo, HeaderContainer, HeaderMain, Faixa } from './styled'
import logo from '../../assets/logo.svg'
import { useHistory } from "react-router-dom"
import { goToPokePage } from '../../routes/Coordinator'


const Header = () => {

    const history = useHistory()

    return (
        <HeaderContainer>
            <HeaderMain>
                <Logo src={logo} onClick={() => goToPokePage(history)}/>
            </HeaderMain>
            <Faixa/>
        </HeaderContainer>
    )

}

export default Header