export default (state: any= {}, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {...action.data});
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};
