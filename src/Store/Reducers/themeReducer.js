export default function themeReducer(theme = 'light', action) {
    switch(action.type){
        case 'switch': 
            return theme === 'light' ? 'dark' : 'light';
        default: 
            return theme;
    }
}