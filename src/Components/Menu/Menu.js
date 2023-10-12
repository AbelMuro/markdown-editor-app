import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import {useDispatch, useSelector} from 'react-redux';

function Menu() {
    const dispatch = useDispatch();
    const menuRef = useRef();
    const open = useSelector(state => state.menu);

    useEffect(() => {
        if(open)
            menuRef.current.style.width = '250px';
        else
            menuRef.current.style.width = '0px';
        
    }, [open])

    return(
        <section className={styles.menu} ref={menuRef}>
            <h2 className={styles.menu_title}>
                MY DOCUMENTS
            </h2>
            <button className={styles.menu_newDocument}>
                + New Document
            </button>
            <div className={styles.documentData}>
                <img src={icons['document']}/>
                <h2>
                    Document Name
                </h2>
                <h1>
                    welcome.md
                </h1>
            </div>
        </section>
    )
}

export default Menu;