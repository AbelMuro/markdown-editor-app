import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';
import MarkdownView from 'react-showdown';

function MobileEditor() {
    const [preview, setPreview] = useState(false);
    const text = useSelector(state => state.file.text);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch({type: "UPDATE_FILE_TEXT", text: e.target.value});
    }

    const handlePreview = () => {
        setPreview(!preview);
    }

    const currentTheme = useCallback((currentClass) => {
        if(theme === 'dark')
            return [styles.dark, currentClass || ''].join(' ');
        else 
            return [styles.light, currentClass || ''].join(' ');
    }, [theme])



    return(
        <section className={styles.container}>
            {preview ? 
                <section className={currentTheme(styles.preview)}>
                    <h1 className={currentTheme(styles.preview_title)}>
                        preview 
                        <span className={currentTheme(styles.previewHideIcon)} onClick={handlePreview}/>
                    </h1>
                    <MarkdownView markdown={text} className={currentTheme()}/>
                </section>   
                : 
                <section className={styles.editor}>
                    <h1 className={currentTheme(styles.editor_title)}>
                        markdown
                        <span className={currentTheme(styles.previewShowIcon)} onClick={handlePreview}/>
                    </h1>
                    <textarea 
                        className={currentTheme(styles.editor_textarea)}
                        value={text}
                        onChange={handleChange}>
                    </textarea>
                </section>}
        </section>
    )
}

export default MobileEditor;