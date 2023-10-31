import React, {useState, useEffect, useRef, memo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';
import Showdown from 'showdown';

var converter = new Showdown.Converter();

function MobileEditor() {
    const [preview, setPreview] = useState(false);
    const previewRef = useRef();
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

    useEffect(() => {
        if(!preview) return;

        previewRef.current.setHTML(converter.makeHtml(text));  
    }, [text, preview])


    return(
        <section className={styles.container}>
            {preview ? 
                <section className={currentTheme(styles.preview)}>
                    <h1 className={currentTheme(styles.preview_title)}>
                        preview 
                        <span className={currentTheme(styles.previewHideIcon)} onClick={handlePreview}/>
                    </h1>
                    <div ref={previewRef} className={currentTheme()}></div>
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