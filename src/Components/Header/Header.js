import React, {useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import { useDispatch, useSelector } from 'react-redux';
import FileName from './FileName';
import SaveChanges from './SaveChanges';
import DeleteFile from './DeleteFile';

function Header() {
    const open = useSelector(state => state.menu);
    const menuIconRef = useRef();
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleMenu = () => {
        dispatch({type: 'OPEN_CLOSE_MENU'});
    }


    return(
        <header className={styles.header}>            
            <div className={styles.header_document}>
                <button className={styles.header_menuButton} onClick={handleMenu} type='button'>
                    <img src={open ? icons['close'] : icons['menu']} className={open ? styles.closeIcon : styles.menuIcon} ref={menuIconRef}/>
                </button>
                <img className={styles.header_logo} src={icons['logo']}/>
                <div className={styles.header_line}></div>
                <div className={styles.header_documentData}>
                    <img src={icons['document']}/>
                    <h2 className={theme === 'dark' ? styles.dark : styles.light}>
                        Document Name
                    </h2>
                    <FileName/>
                </div>
            </div>
            {!open && <div className={styles.header_edit}>
                <DeleteFile/>
                <SaveChanges/>
            </div>}
        </header>
    )
}

export default Header;