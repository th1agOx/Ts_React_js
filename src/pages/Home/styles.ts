import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5.4rem;
    }
`;


export const FormContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    color: ${(props) => props.theme['gray-100']};
    font-size: 1.8rem;
    line-height: 160%;
    font-weight: bold;

    flex-wrap: wrap;        // faz a quebra da estrutura para viwports diferentes 
`;

const BaseInput = styled.input`
    background-color: transparent;
    border: 0;
    height: 3rem;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    font-weight: 700;
    flex-wrap: wrap;
    padding: 0 0.8rem;
    color: ${props => props.theme['gray-100']};

    &::placeholder {
        ${props => props.theme['gray-500']}
    }

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }
`;

export const TaskInput = styled(BaseInput) `   
    flex: 1;

/* Remove a seta padrão do navegador */
    &::-webkit-calendar-picker-indicator,
    &::-webkit-datetime-edit,
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        display: none !important;

        -webkit-appearance: none;
        appearance: none               //garante que todo navegador não tenha estilo o padrão do input  
    }

`;

export const MinutsAmountInput = styled(BaseInput) `
    width: 7.2rem;
`;

export const CountDownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 16rem;
    line-height: 6rem;

    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1.6rem;

    span {
        background: ${(props) => props.theme['gray-700']};
        padding: 4rem 2.4rem ;
        border-radius: 8px;
    }
`;

export const Separator = styled.div`
    padding: 4rem 0;
    font-size: 12rem;

    color: ${(props) => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;
 
export const StartCountdownButton = styled.button`                       //trago a tag do html que será o componente *Sempre bem vinda a criação de um novo componente  
    width: 100%;
    height: 6.4rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    
    border-radius: 8px;
    border: 0;
    cursor: pointer;

    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['white']};
    font-size: 1.6rem ;

    &:not(:disabled):hover{
        background-color: ${props => props.theme['green-700']};       
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

// flex 1 width se adapta ao tamho de tela; Aula Aprimorando os inputs para detalhes de estilização em inputs 