import React from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import styles from './styles.module.css';
import icons from '../icons';
import {useSelector} from 'react-redux';

function SaveChanges() {
    const mobile = useMediaQuery('(max-width: 570px)');
    const fileName = useSelector(state => state.file.name);
    const fileText = useSelector(state => state.file.text);

    const handleSave= () => {
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
            text: fileText
        }

        let allFiles = JSON.parse(localStorage.getItem("files")); 

        if(allFiles){
            for(let i = 0; i < allFiles.length; i++){
                if(allFiles[i].name !== newFile.name) 
                    continue;
                const answer = confirm('File name already exists, Do you wish to override?');
                if(answer){
                    allFiles[i].text = newFile.text;
                    allFiles = JSON.stringify(allFiles);
                    localStorage.setItem("files", allFiles);    
                    alert('File has been overridden');           
                    return;
                }
                else 
                    return;
            }
            const files = JSON.stringify([...allFiles, newFile]);           
            localStorage.setItem("files", files);    
            alert('File has been saved');           
        }

        else{
            const files = JSON.stringify([newFile]);           
            localStorage.setItem("files", files);  
            alert('File has been saved');     
        }

    }

    return(
        <button className={styles.save} onClick={handleSave}>
            <img src={icons['save']}/>
            {!mobile && <span>Save Changes</span>}
        </button>
    )
}

export default SaveChanges;