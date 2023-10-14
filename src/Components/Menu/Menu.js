import React, {useEffect, useRef} from 'react';
import ThemeSwitch from './ThemeSwitch';
import styles from './styles.module.css';
import icons from './icons';
import {useDispatch, useSelector} from 'react-redux';

function Menu() {
    const dispatch = useDispatch();
    const menuRef = useRef();
    const open = useSelector(state => state.menu);

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
            <button className={styles.menu_button}>
                + New Document
            </button>
            <div className={styles.menu_documents}>
                {/* <div className={styles.menu_documentData}>
                        <img src={icons['document']}/>
                        <a>
                            Document Name
                        </a>
                        <h2>
                            welcome.md
                        </h2>
                    </div> */}
            </div>
            <ThemeSwitch/>
        </section>
    )
}

export default Menu;