import axios from 'axios'
import { useQuery } from 'react-query'



const getUserSession = async (userId) => {
    const { data } = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
    return data
}

export default function useUserSession(userId) {
    return useQuery([`userSession-${userId}`], () => getUserSession(userId))
}
