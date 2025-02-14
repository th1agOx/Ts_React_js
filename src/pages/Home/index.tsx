import { Play } from "phosphor-react" ;
import { CountDownContainer, FormContainer, HomeContainer, MinutsAmountInput, Separator, StartCountdownButton, TaskInput  } from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" placeholder="Dê um nome para o seu projeto" list="task-suggestion"/>

                    <datalist id="task-suggestion" >
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                        <option value="Projeto 4"/>
                    </datalist>

                    <label htmlFor="">durante</label>
                    <MinutsAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>Minutos</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountdownButton disabled id="minutesAmost" type="submit"> 
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
        
    )
}


