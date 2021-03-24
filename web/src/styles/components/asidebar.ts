import styled from "styled-components";

const Container = styled.div`
    height: 85vh;
    width: 20vw;
    background: var(--white-opacity);

    display: flex;
    justify-content: center;
    align-items: center;


    > ul {
        list-style: none;

        > li{
            display: flex;
            justify-content: space-between;
            align-items:center;

            color: var(--light-blue);
            font-size: 1.7rem;
            font-family: "Nunito";
            font-weight: 700;
            margin: 3vh 0;
            cursor: pointer;

            transition: all .7s;

            > svg{
                margin: 0 2vw;
                font-size: 2.7rem;
            }


            &:hover {
                color: var(--dark-blue)
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