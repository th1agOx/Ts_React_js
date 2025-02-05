import { createGlobalStyle } from 'styled-components';


export const GlobalStyled  = createGlobalStyle`

    *{
        margin: 0;
        padding: 0 ;
        box-sizing: border-box;
        font-size: 62.5% ;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1.5px ${ (props) => props.theme['green-500']};      //não pode ser referenciado atravez da noção ponto por causa do "-"
        border-radius: 4px;
    }

    body {
        background: ${ (props) => props.theme['gray-900']};
        color: ${ (props) => props.theme['gray-300']};

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

`