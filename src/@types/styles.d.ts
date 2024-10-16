// d.ts é um arquivo de definição de TIPO, só vão receber tipagens  
import 'styled-components' ;
import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme               // Type é como se fosse uma variavel só que usando tipagem
 
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {} 
}             