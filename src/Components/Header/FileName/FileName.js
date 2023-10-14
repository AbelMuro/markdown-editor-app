import React, {useState} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';


//need to fix the on change event handler
function FileName() {
    const name = useSelector(state => state.file.name)    
    const [fileName, setFileName] = useState(name);

    const handleChange = (e) => {

        console.log(e.target.value.match(/[^a-zA-Z._-]/g))
        if(e.target.value.match(/[^a-zA-Z._-]/g)){
            console.log('hi')
            return;
        } 
        setFileName(e.target.value);
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