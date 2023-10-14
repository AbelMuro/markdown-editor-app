import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import Showdown from 'showdown';
import Split from 'react-split';
import {useSelector, useDispatch} from 'react-redux';

var converter = new Showdown.Converter();

function Editor() {
    const text = useSelector(state => state.file.text);
    const [editor, setEditor] = useState(true);
    const dispatch = useDispatch();
    const previewRef = useRef();

    const handleChange = (e) => {
        dispatch({type: "update file text", text: e.target.value});
    }

    const handlePreview = () => {
        setEditor(!editor)
    }


    useEffect(() => {
        previewRef.current.setHTML(converter.makeHtml(text));  
    }, [text])



    return(
        <Split
            sizes={editor ? [50, 50] : [0, 100]}
            minSize={editor ? [200, 200] : [0, 100]}
            gutterSize={editor ? 10 : 0}
            gutterAlign="center" 
            snapOffset={50}
            dragInterval={20}
            cursor="col-resize"
            className={styles.container}>
            <section className={styles.editor}>
                <h1 className={styles.editor_title}>
                    markdown
                </h1>
                <textarea 
                    className={styles.editor_textarea}
                    value={text}
                    onChange={handleChange}>
                </textarea>
            </section> 
            <section className={styles.preview}>
                <h1 className={styles.preview_title}>
                    preview
                    {editor ? 
                        <span className={styles.preview_icon_visible} onClick={handlePreview}/> : 
                        <span className={styles.preview_icon_hidden} onClick={handlePreview}/>}
                </h1>
                <div ref={previewRef}></div>
            </section>        
        </Split>

    )
}

export default Editor;