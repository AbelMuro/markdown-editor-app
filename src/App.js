import React from 'react';
import Menu from './Components/Menu'
import Header from './Components/Header'
import Editor from './Components/Editor';
import MobileEditor from './Components/MobileEditor';
import useMediaQuery from './Hooks/useMediaQuery.js';
import {Store, PersistedStore }from './Store';
import {PersistGate} from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './styles.css';

function App() {
    const mobile = useMediaQuery('(max-width: 570px)');

    return(
        <Provider store={Store}>
            <PersistGate persistor={PersistedStore}>
                <main className='container'>
                    <Menu/>
                    <Header/>
                    {mobile ? <MobileEditor/> : <Editor/>}
                </main>                   
            </PersistGate>
     
        </Provider>

    )
}
export default App;