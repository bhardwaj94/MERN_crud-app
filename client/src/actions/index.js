import axios from 'axios';

export default function getUsers(){

    const req = axios.get('/users').then(res=>res.data);
    console.log(req);
    return{
        type:'GET_USER',
        payload:req
    }
}