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

    const handleBlur = (e) => {
        const input = e.target.value;
        if(!input.endsWith('.md'))
            alert('File name must end with .md')
    }

    return(
        <input 
            type='text' 
            className={styles.input} 
            value={fileName} 
            onChange={handleChange}
            onBlur={handleBlur}/>
    );
}

export default FileName;