import axios from 'axios'
import { useQuery } from 'react-query'



const getUserActivity = async (userId) => {
    const { data } = await axios.get(`http://localhost:3000/user/${userId}/activity`)
    return data
}

export default function useUserActivity(userId) {
    return useQuery([`userActivity-${userId}`], () => getUserActivity(userId))
}
