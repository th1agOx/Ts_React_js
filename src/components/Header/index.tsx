import { HeaderContainer } from "./styles" ;
import logoIgnite from '../../assets/Logo-ignite.svg' ;
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <HeaderContainer>
            <a href="https://app.rocketseat.com.br/" target="_blank">
                <img src={logoIgnite} alt=""/>
            </a>
            <nav>
                <NavLink to="/" title="Timer" >          {/* Componente do *reactDOM* que direciona para segunda página title acessibilidade */}
                    <Timer size={24} />
                </NavLink>

                <NavLink to="/history" title="histoty" >
                    <Scroll size={24} />
                </NavLink>
            </nav>

        </HeaderContainer>
    )
}