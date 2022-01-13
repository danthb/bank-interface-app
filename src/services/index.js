import axios from 'axios';
import env from "react-dotenv";

const baseURL = env.API_URL
const token = localStorage.getItem('token')
const service = axios.create({
    baseURL: baseURL,
    headers: { authorization: `Bearer ${token}` },
  })

const accountAPI = {
    all: () => service.get('/account/all'),
    getUser: (firebaseId) => service.get('/account', { params: { firebaseId: firebaseId} } ),
    createUser: (data) => service.post('/account/create', data),
    updated: (_id, amount) => service.put('/account/update', {_id: _id, amount: amount}),
};
export { accountAPI };
