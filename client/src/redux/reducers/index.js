
const userReducer = (state={} , action) => {
    //console.log("from reducer",action)
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            //return {...state,login:action.payload};
            return {login:action.payload};
        case 'LOGIN_FAILURE':
            //return {...state,...action.user};
            return {errot:action.payload};
        case 'AUTH_SUCCESS':
            //return {...state,authUser:action.payload};
            return {authUser:action.payload};
        case 'AUTH_FAILURE':
            return {authError:action.payload};
        case 'LOGOUT_SUCCESS':
            return {logout:action.payload};
        default:
            return state;
    }
};

export default userReducer;