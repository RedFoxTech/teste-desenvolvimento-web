import styled from "styled-components";

const Container = styled.div`
    height: 85vh;
    width: 25vw;
    background: var(--white-opacity);

    display: flex;
    justify-content: center;
    align-items: center;


    > ul {
        list-style: none;

        > li{
            display: flex;
            justify-content: space-around;
            align-items:center;

            color: var(--dark-blue);
            font-size: 1.7rem;
            font-family: "Nunito";

            > svg{
                margin: 0 3%;
            }
        }
    }


    @media(max-width: 1024px){
        display: none; 
    }
`

export { 
    Container
}