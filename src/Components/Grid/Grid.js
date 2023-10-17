import React from 'react';
import styles from './styles.module.css';

function Grid({children}) {

    return(
        <main className={styles.container}>
            {children}
        </main>
    )
}

export default Grid;