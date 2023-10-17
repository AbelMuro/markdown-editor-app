export default function menuReducer(open = false, action){
    switch(action.type){
        case 'OPEN_CLOSE_MENU':
            return !open;
        default:
            return open;
    }
}