import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';
import Showdown from 'showdown';

var converter = new Showdown.Converter();

function MobileEditor() {
    const [preview, setPreview] = useState(false);
    const previewRef = useRef();
    const text = useSelector(state => state.file.text);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch({type: "UPDATE_FILE_TEXT", text: e.target.value});
    }

    const handlePreview = () => {
        setPreview(!preview);
    }

    useEffect(() => {
        if(!preview) return;

        previewRef.current.setHTML(converter.makeHtml(text));  
    }, [text, preview])


    return(
        <section className={styles.container}>
            {preview ? 
                <section className={styles.preview}>
                    <h1 className={styles.preview_title}>
                        preview 
                        <span className={styles.previewHideIcon} onClick={handlePreview}/>
                    </h1>
                    <div ref={previewRef}></div>
                </section>   
                : 
                <section className={styles.editor}>
                    <h1 className={styles.editor_title}>
                        markdown
                        <span className={styles.previewShowIcon} onClick={handlePreview}/>
                    </h1>
                    <textarea 
                        className={styles.editor_textarea}
                        value={text}
                        onChange={handleChange}>
                    </textarea>
                </section>}
        </section>
    )
}

export default MobileEditor;