import axios from 'axios'
import { useQuery } from 'react-query'

const getUser = async () => {
    const { data } = await axios.get(`http://localhost:3000/user/18`)
    return data
}

export default function useUser() {
    return useQuery(['user'], getUser)
}
