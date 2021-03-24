import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px auto;

    > svg {
        font-size: 2.8rem;
        color: var(--white-opacity);
        border: 1px solid;
        border-radius: 50%;
        padding: 3px;
        margin-right: 5px
    }

    @media(min-width: 1024px){
        justify-content: center;
        gap: 20px
    }

`
const InfosArea = styled.div`
    display: flex;
    background: var(--white-opacity);
    width: 75vw;
    overflow: scroll;
    overflow-y: hidden;
    border-radius: 10px;

    > main {
        div {
            display: flex;
            padding: 2px;
            > h3 {
                min-width: 170px;
                height: 30px;
                text-align: center;
                font-family: "Nunito"
            }
            

            &.titles { 
                >h3 {
                    color: var(--dark-blue);
                    font-family: "Inter";

                }
            }
        }
    }

    /* Removendo scrollbar scrollbar */

    &::-webkit-scrollbar {
        display: none;
    }

    @media(min-width: 1024px){

        width: 50vw;
        
        &::-webkit-scrollbar {
            display: inherit;
            width: 5px;
            height: 5px
        }

        &::-webkit-scrollbar-thumb {
            background: var(--dark-blue);
        }
    }
    
`

export {
    Container,
    InfosArea
}