import {useState} from 'react'
import axios from 'axios'

export function useAuth(login, password) {
    const [isValud, setIsValid] = useState(false)

    return async function() {
        const res = await axios.post('/login')
        console.log(res, login, password)
    }
}
