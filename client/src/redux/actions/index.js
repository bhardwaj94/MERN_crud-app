import axios from 'axios';
const baseUrl = 'http://localhost:3001'


//login actonCreator from async API call
export function loginUser({ email, password }) {
    //console.log(email,password);
    return dispatch => {
        dispatch(loginRequest({ email }))
        axios.post(`${baseUrl}/api/login`, { email, password })
            .then(response => {
                //console.log("respose:::::::::::", response);

                const { isAuth} = response.data;
                if (isAuth) {
                    dispatch(loginSuccess(response.data))
                    //history.push('/dashboard')
                } else {
                    dispatch(loginFailure(response.data))
                    //history.push('/login')
                }
            })
    }
}
function loginRequest(user) {
    return {
        type: 'LOGIN_REQUEST', user
    }
}

function loginSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS', payload: data
    }
}

function loginFailure(error) {
    return {
        type: 'LOGIN_FAILURE', payload:error
    }
}

//Authorization actonCreator from async API call

export function authUser() {
        return dispatch =>{
        dispatch(authRequest());
        const token = localStorage.getItem('token')
        //console.log("token in headers>>>>>>",token);
        if (token===null) {
            dispatch(authFailure({error:true,
            message:'token not found'}))
        } else {
            axios.get(`${baseUrl}/api/auth`,{headers: {"authToken" : token}})
        .then(res=>{
            console.log("authRequest>>>>>>",res.data)
            const { isAuth } = res.data;
            if (isAuth) {
                dispatch(authSuccess(res.data))
            } else {

                dispatch(authFailure(res.data))
            }
        })
        }
    }
}

function authRequest() {
    return {
        type: 'AUTH_REQUEST'
    }
}

function authSuccess(data) {
    return {
        type: 'AUTH_SUCCESS', payload: data
    }
}

function authFailure(error) {
    return {
        type: 'AUTH_FAILURE', payload: error
    }
}


//logout actonCreator

export function logoutSuccess() {
    return{
        type:'LOGOUT_SUCCESS',
        payload:true
    }
    
}