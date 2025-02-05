import styled from "styled-components" ;

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 5rem;

    display:flex ;
    flex-direction: column;

    h1 {
        font-size: 2.4rem; 
        font-weight: 700;
        color: ${props => props.theme['gray-100']};
    }
`;

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 3.2rem;

    table {
        width: 100%;
        border-collapse: collapse;      //na tabela a borda é a mesma para os elementos  
        min-width: 600px;
    }

    th {
        background-color: ${props => props.theme['gray-600']};
        padding: 1.6rem 2.4rem;
        text-align: left;

        color: ${props => props.theme['gray-100']};
        font-size: 1.4rem;
        line-height: 1.6;

        &:first-child {
            border-top-left-radius: 8px;
            padding-left: 3rem;
        }

        &:last-child {
            border-top-right-radius: 8px;
            padding-right: 3rem;
        }
    }

    td {
        background-color: ${props => props.theme['gray-700']};
        border-top: 4px solid ${props => props.theme['gray-800']};       //"divisoria ideia"
        padding: 1.6rem 2.4rem;

        font-size: 1.4rem;
        line-height: 1.6rem;

        &:first-child {
            width: 50%;
            padding-left: 3rem;
        }

        &:last-child {
            width: 13rem;
            padding-left: 3rem;
        }
    }
`;

//criando base de cores
const STATUS_COLORS = {
    yellow: 'yellow-500' ,
    green: 'green-500' ,
    red: 'red-500' ,
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS        //PROPRIEDADES DE CORES IDENTIFICADAS PELAS KEYS NA BASE STATUS_COLORS
}

export const Status = styled.span<StatusProps>`   //concluido
    display: flex;
    align-items: center;
    gap: .8rem;

    //elemento adicionado dentro da tag antes de qualquer elemento 
    &::before {
        content: '';

        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};     //mapeando base de dados onde estão os hexadecimal das cores
    }

`;

