import {useState} from 'react'
import axios from 'axios'

export function useAuth(login, password, register = false) {
    const [isValud, setIsValid] = useState(false)

    return async function() {
        await axios.get('/sanctum/csrf-cookie')
        const res = await axios.post('/login', {login, password}, { withCredentials: true,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }, })
        console.log(res, login, password)
    }
}
