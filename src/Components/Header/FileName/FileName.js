import React from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';

//need to fix the change handler below
const FileName = (props) => {
    const name = useSelector(state => state.file.name)    
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let input = e.target.value;
        if(input.match(/[^a-zA-Z._-]/g)) return;
        dispatch({type: 'update file name', name: input});
    }

    const handleBlur = (e) => {
        let input = e.target.value;
        if(!input.endsWith('.md')){
            alert('File name must end with .md');
            return;
        }

        input = input.slice(0, input.length - 3);
        input = input.replaceAll('.', '');
        if(!input.length){
            alert('Please enter a file name');
            return;
        }
        dispatch({type: 'update file name', name: input + '.md'});
    }


    return(
        <input 
            type='text' 
            className={styles.input} 
            value={name} 
            onChange={handleChange}
            onBlur={handleBlur}/>
    );
}

export default FileName;