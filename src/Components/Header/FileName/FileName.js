import React, {useState} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

//need to fix the change handler below
function FileName() {
    const name = useSelector(state => state.file.name)    
    const [fileName, setFileName] = useState(name);

    const handleChange = (e) => {
        let input = e.target.value;
        if(input.match(/[^a-zA-Z._-]/g)) return;
    
        setFileName(input);
    }

    return(
        <input 
            type='text' 
            className={styles.input} 
            value={fileName} 
            onChange={handleChange}/>
    );
}

export default FileName;