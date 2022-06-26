import axios from 'axios'
import { useQuery } from 'react-query'



const getUserSkills = async (userId) => {
    const { data } = await axios.get(`http://localhost:3000/user/${userId}/performance`)
    return data
}

export default function useUserActivity(idUser) {
    return useQuery(['userSKills'], () => getUserSkills(idUser))
}
