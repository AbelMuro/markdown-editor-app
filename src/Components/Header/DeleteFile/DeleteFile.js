import React, {useState, useEffect, useRef, useCallback} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';

function DeleteFile() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const dialogRef = useRef();
    const name = useSelector(state => state.file.name);
    const theme = useSelector(state => state.theme);

    const dispatchEvent = () => {
        const event = new Event('storage');
        document.dispatchEvent(event);
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleOverlay = (e) => {
        if(e.target.matches('.' + styles.overlay))
            setOpen(false)
    }


    const handleDelete = () => {
        let allFiles = JSON.parse(localStorage.getItem('files')) || [];

        allFiles = allFiles.filter((file) => {
            if(file.name === name)
                return false;
            else
                return true;
        })

        localStorage.setItem('files', JSON.stringify(allFiles))
        dispatchEvent();
        dispatch({type: 'CLEAR_FILE'});
        handleOpen();
    }

    const currentTheme = useCallback((className) => {
        if(theme === 'light')
            return [styles.light, className].join(' ');
        else
            return [styles.dark, className].join(' ');
    }, [])

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return;
                overlayRef.current.style.backgroundColor = theme === 'light' ? 'rgba(21, 22, 25, 0.5)' : 'rgba(124, 129, 135, 0.5)';
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = '';
            setTimeout(() => {
                if(!overlayRef.current) return;
                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [open])

    return(
        <>
            <button className={styles.delete} onClick={handleOpen}></button>  

            <div className={styles.overlay} ref={overlayRef} onClick={handleOverlay}>
                <dialog open={true} className={currentTheme(styles.dialog)} ref={dialogRef}>
                    <h1>
                       Delete this document? 
                    </h1>
                    <p>
                        Are you sure you want to delete the '{name}'
                        document and its contents? This action cannot be reversed.
                    </p>
                    <button onClick={handleDelete}>
                        Confirm & Delete
                    </button>
                </dialog>            
            </div>      
        </>
    )
}

export default DeleteFile;