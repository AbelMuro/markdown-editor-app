import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles.module.css';


//need to import my dispatch and useSelector hook to change theme
function ThemeSwitch() {
    const dotRef = useRef();
    const moonIconRef = useRef();
    const sunIconRef = useRef();
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleTheme = () => {
        dispatch({type: 'switch'});
    }

    useEffect(() => {
        if(theme === 'light'){
            dotRef.current.style.right = '';
            sunIconRef.current.style.backgroundColor = 'white';
            moonIconRef.current.style.backgroundColor = '';
        }
            
        else{
            dotRef.current.style.right = '30px';
            sunIconRef.current.style.backgroundColor = '';
            moonIconRef.current.style.backgroundColor = 'white';
        }
            
        
    },[theme])

    return(
        <section className={styles.container}>
            <div className={styles.moon} ref={moonIconRef}></div>
            <div className={styles.switch} onClick={handleTheme}>
                <div ref={dotRef}></div>
            </div>
            <div className={styles.sun} ref={sunIconRef}></div>
        </section>
    )
}

export default ThemeSwitch;