export const goToPokePage = (history) => {
    history.push('/')
}


export const goToPokeDetalisPage = (history, number) => {
    history.push(`/detalhe/${number}`)
}
