import React, {useEffect, useRef} from 'react';
import ThemeSwitch from './ThemeSwitch';
import styles from './styles.module.css';
import icons from './icons';
import AllFiles from './AllFiles';
import {useSelector, useDispatch} from 'react-redux';

function Menu() {
    const dispatch = useDispatch();
    const menuRef = useRef();
    const open = useSelector(state => state.menu);
    const unsaved = useSelector(state => state.file.unsaved);

    const handleNewDocument = () => {
        if(unsaved){
            const answer = confirm('Any unsaved changes will be lost, do you still wish to proceed?');
            if(!answer) return  
        }
        dispatch({type: 'NEW_FILE'});
        dispatch({type: 'OPEN_CLOSE_MENU'});
    }

    useEffect(() => {
        if(open)
            menuRef.current.classList.add(styles.menuOpen);        
        else
            menuRef.current.classList.remove(styles.menuOpen);
    }, [open])

    return(
        <section className={styles.menu} ref={menuRef}>
            <img className={styles.menu_logo} src={icons['logo']}/>
            <h1 className={styles.menu_title}>
                MY DOCUMENTS
            </h1>
            <button className={styles.menu_button} onClick={handleNewDocument}>
                + New Document
            </button>
            <div className={styles.menu_documents}>
                <AllFiles/>
            </div>
            <ThemeSwitch/>
        </section>
    )
}

export default Menu;