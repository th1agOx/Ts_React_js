import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex ;
    align-items: center;
    justify-content: space-between;

    nav{
        display: flex;
        gap: 0.5rem;
        
        a{
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${props => props.theme['gray-100']};

            border-top: 3px solid transparent;    //limitadores para quando o hover for ativado ( icone não sai de posição )
            border-bottom: 3px solid transparent;

            &:hover {     //propiedade que ativa a borda no hover 
                border-bottom: 3px solid ${props => props.theme['green-500']};
            }

            &.active {      //propriedade que junto do compnenete do reactDOM muda a cor do link 
                color: ${props => props.theme['green-500']};
            }
        }
    }
`