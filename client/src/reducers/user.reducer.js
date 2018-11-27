const userReducer = (state = {}, action) => {
    switch (action.type) {
         case 'GET_USER':
            return { ...state,list:action.payload }
        /* case ACTION_TYPE_2:
            return state; */
        default:
            return state;
    }
};

export default userReducer;