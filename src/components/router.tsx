import { Routes, Route } from 'react-router-dom' ;

import { Home } from '../pages/home' ;
import { History } from '../pages/history';
import { DefaultLayout } from '../layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout /> }>
                <Route index element={<Home/>} />        {/* Aqui, o index indica que é a rota padrão */}
                <Route path='history' element={<History />}/>
            </Route>    
        </Routes>
    )
}