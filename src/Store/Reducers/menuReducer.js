export default function menuReducer(open = false, action){
    switch(action.type){
        case 'menu':
            return !open;
        default:
            return open;
    }
}