export function userReducer(state = null, action) {
    switch (action.type) {
        case 'LOGIN':
            return 'test login'
        case 'LOGOUT':
            return 'test logout'
        default:
            return state
    }
}
