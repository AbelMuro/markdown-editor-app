import React from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import styles from './styles.module.css';
import icons from '../icons';
import {useSelector, useDispatch} from 'react-redux';

function SaveChanges() {
    const mobile = useMediaQuery('(max-width: 570px)');
    const fileName = useSelector(state => state.file.name);
    const fileText = useSelector(state => state.file.text);
    const dispatch = useDispatch();

    const dispatchEvent = () => {
        const event = new Event('storage');
        document.dispatchEvent(event);
    }

    const getCurrentDate = () => {
        const date = new Date();
        const month = date.toLocaleString('default', { month: 'long' });
        return date.getDate() + " " + month + " " + date.getFullYear();
    }

    const handleSave = () => {
        if(!fileName.endsWith('.md')){
            alert('File name must end with .md');
            return;
        }
        let file = fileName.slice(0, fileName.length - 3);
        if(!file.length){
            alert('Please enter a file name');
            return;
        }

        const newFile = {
            name: fileName,
            text: fileText,
            date: getCurrentDate()
        }

        let allFiles = JSON.parse(localStorage.getItem("files")); 

        if(allFiles){
            for(let i = 0; i < allFiles.length; i++){
                if(allFiles[i].name !== newFile.name) 
                    continue;
                else{
                    allFiles[i].text = newFile.text;
                    allFiles = JSON.stringify(allFiles);
                    localStorage.setItem("files", allFiles); 
                    dispatchEvent();   
                    dispatch({type: 'SAVE_FILE'}) 
                    alert('Changed have been saved');           
                    return;                    
                }  
            }
            const files = JSON.stringify([...allFiles, newFile]);           
            localStorage.setItem("files", files);   
            dispatchEvent(); 
            dispatch({type: 'SAVE_FILE'})        
        }

        else{
            const files = JSON.stringify([newFile]);           
            localStorage.setItem("files", files);  
            dispatch({type: 'SAVE_FILE'})     
            dispatchEvent(); 
        }
        alert('Changed have been saved');    

    }

    return(
        <button className={styles.save} onClick={handleSave}>
            <img src={icons['save']}/>
            {!mobile && <span>Save Changes</span>}
        </button>
    )
}

export default SaveChanges;