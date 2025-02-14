import {HistoryContainer, HistoryList, Status} from './styled'

export function History() {
    return(
        <HistoryContainer>
           <h1>Meu histórico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>                           {/* linha */}
                            <th>Tarefa</th>            
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>            {/* coluna */}
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>            
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColor='yellow'>Em Andamento</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>            
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>            
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColor='red'>Interrompido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>            
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>            
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>            
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>            
                            <td>25 minutos</td>
                            <td>Há cerca de 2 meses</td>
                            <td>
                                <Status statusColor='green'>Concluído</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer> 
    )
}