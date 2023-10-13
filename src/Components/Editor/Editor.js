import React, {useState, useEffect,useRef} from 'react';
import styles from './styles.module.css';
import Showdown from 'showdown';
import Split from 'react-split';

var converter = new Showdown.Converter();

function Editor() {
    const [text, setText] = useState('');
    const previewRef = useRef();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        previewRef.current.setHTML(converter.makeHtml(text));  
    }, [text])

    useEffect(() => {
    }, [])

    return(
        <Split className={styles.container}>
            <section className={styles.editor} id='one'>
                <h1 className={styles.editor_title}>
                    markdown
                </h1>
                <textarea 
                    className={styles.editor_textarea}
                    value={text}
                    onChange={handleChange}>
                </textarea>
            </section>    
            <section className={styles.preview} id='two'>
                <h1 className={styles.preview_title}>
                    preview
                </h1>
                <div ref={previewRef}></div>
            </section>        
        </Split>

    )
}

export default Editor;