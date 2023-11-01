import React from 'react';
import DesktopEditor from './DesktopEditor';
import MobileEditor from './MobileEditor';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function Editor() {
    const mobile = useMediaQuery('(max-width: 570px)');

    return <>
            {false ? <MobileEditor/> : <DesktopEditor/>}
           </>
}

export default Editor;