import React from "react"
import { ErrorPageContainer, ErroImage, Erro404 } from "./styled"
import ImagemErro from "../../assets/erroPage.jpg"


const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErroImage src={ImagemErro} />
            <Erro404>Ooops...</Erro404>
            <Erro404> Erro 404 - Página não encontrada :(</Erro404>

            
        </ErrorPageContainer>
    )
}

export default ErrorPage;