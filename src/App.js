import React from 'react';
import Menu from './Components/Menu'
import Header from './Components/Header'
import Store from './Store';
import { Provider } from 'react-redux';
import './styles.css';

function App() {
    return(
        <Provider store={Store}>
            <main className='container'>
                <Menu/>
                <Header/>
            </main>        
        </Provider>

    )
}
export default App;