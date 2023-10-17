import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../icons';

function AllFiles() {
    const [files, setFiles] = useState([]);
    const unsaved = useSelector(state => state.file.unsaved);
    const dispatch = useDispatch();

    const handleOpenFile = (e) => {
        if(unsaved){
            const answer = confirm('Any unsaved changes will be lost, do you still wish to continue?');
            if(!answer) return;
        }

        const fileName = e.target.parentElement.getAttribute('data-name');
        const allFiles = JSON.parse(localStorage.getItem('files'));

        for(let i = 0; i < allFiles.length; i++){
            if(allFiles[i].name === fileName){
                dispatch({type: 'OPEN_FILE', name: allFiles[i].name, text: allFiles[i].text});
                dispatch({type: 'OPEN_CLOSE_MENU'});
                return;
            }
        }
    }

    useEffect(() => {
        const allFiles = JSON.parse(localStorage.getItem('files')) || [];
        setFiles(allFiles.reverse());

        document.addEventListener('storage', () => {
            const allFiles = JSON.parse(localStorage.getItem('files')) || [];
            console.log('event triggered');
            setFiles(allFiles.reverse());
        })
    }, [])

    return(
        <>
            {
                files.map((file) => {
                    return(
                        <div 
                            className={styles.documentData} 
                            key={file.name}
                            data-name={file.name}>
                                <img src={icons['document']}/>
                                <h2>
                                    {file.date}
                                </h2>
                                <a onClick={handleOpenFile}>
                                    {file.name}
                                </a>
                        </div> 
                    )
                })
            }
        </>
    )
}

export default AllFiles;