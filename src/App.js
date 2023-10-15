import React from 'react';
import Menu from './Components/Menu'
import Header from './Components/Header'
import Editor from './Components/Editor';
import MobileEditor from './Components/MobileEditor';
import useMediaQuery from './Hooks/useMediaQuery.js';
import Store from './Store';
import { Provider } from 'react-redux';
import './styles.css';

function App() {
    const mobile = useMediaQuery('(max-width: 570px)');


    return(
        <Provider store={Store}>
            <main className='container'>
                <Menu/>
                <Header/>
                {mobile ? <MobileEditor/> : <Editor/>}
            </main>        
        </Provider>

    )
}
export default App;