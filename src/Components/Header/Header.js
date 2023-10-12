import React, {useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const mobile = useMediaQuery('(max-width: 570px)');
    const open = useSelector(state => state.menu);
    const menuIconRef = useRef();
    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch({type: 'menu'});
    }

    return(
        <header className={styles.header}>
            <div className={styles.header_document}>
                <button className={styles.header_menuButton} onClick={handleMenu}>
                    <img src={open ? icons['close'] : icons['menu']} className={open ? styles.closeIcon : styles.menuIcon} ref={menuIconRef}/>
                </button>
                <img className={styles.header_logo} src={icons['logo']}/>
                <div className={styles.header_line}></div>
                <div className={styles.header_documentData}>
                    <img src={icons['document']}/>
                    <h2>
                        Document Name
                    </h2>
                    <h1>
                        welcome.md
                    </h1>
                </div>
            </div>
            <div className={styles.header_edit}>
                <button className={styles.header_trashButton}></button>
                <button className={styles.header_saveButton}>
                    <img src={icons['save']}/>
                    {!mobile && <span>Save Changes</span>}
                </button>
            </div>
        </header>
    )
}

export default Header;