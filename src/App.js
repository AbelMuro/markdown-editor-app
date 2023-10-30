import React from 'react';
import Grid from './Components/Grid';
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
    const mobile =  true;

    return(
        <Provider store={Store}>
            <PersistGate persistor={PersistedStore}>
                <Grid>
                    <Menu/>
                    <Header/>
                    {mobile ? <MobileEditor/> : <Editor/>}
                </Grid>                   
            </PersistGate>
        </Provider>
    )
}
export default App;