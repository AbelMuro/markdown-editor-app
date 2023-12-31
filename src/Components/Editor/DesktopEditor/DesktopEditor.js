import React, {useState, useEffect, useCallback} from 'react';
import styles from './styles.module.css';
import Split from 'react-split';
import {useSelector, useDispatch} from 'react-redux';
import MarkdownView from 'react-showdown';

function DesktopEditor() {
    const text = useSelector(state => state.file.text);
    const theme = useSelector(state => state.theme);
    const [editor, setEditor] = useState(true);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch({type: "UPDATE_FILE_TEXT", text: e.target.value});
    }

    const handlePreview = () => {
        setEditor(!editor)
    }

    const currentTheme = useCallback((currentClass) => {
        if(theme === 'dark')
            return [styles.dark, currentClass || ''].join(' ');
        else 
            return [styles.light, currentClass || ''].join(' ');
    }, [theme])



    useEffect(() => {
        document.documentElement.style.setProperty("--gutter", theme === 'light' ? "#eee" : "#1D1F22");
    }, [theme])

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
                <h1 className={currentTheme(styles.editor_title)}>
                    markdown
                </h1>
                <textarea 
                    className={currentTheme(styles.editor_textarea)}
                    value={text}
                    onChange={handleChange}>
                </textarea>
            </section> 
            <section className={currentTheme(styles.preview)}>
                <h1 className={currentTheme(styles.preview_title)}>
                        preview
                    {editor ? 
                        <span className={currentTheme(styles.preview_icon_visible)} onClick={handlePreview}/> : 
                        <span className={currentTheme(styles.preview_icon_hidden)} onClick={handlePreview}/>}
                </h1>
                <MarkdownView markdown={text} className={currentTheme()}/>
            </section>        
        </Split>

    )
}

export default DesktopEditor;