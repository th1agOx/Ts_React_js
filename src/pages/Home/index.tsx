import { Play } from "phosphor-react" ;
import { CountDownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input id="task" />

                    <label htmlFor="">durante</label>
                    <input type="number" id="minutesAmount"/>

                    <span>Minutos</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <button id="minutesAmost" type="submit"> 
                    <Play size={24}/>
                    Começar
                </button>
            </form>
        </HomeContainer>
        
    )
}