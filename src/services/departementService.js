import axios from "axios"

const userApi = axios.create({
    baseURL: 'http://localhost:8000/departement',
})

export const departementData = async () => {
    try {
        const res = await userApi.get('', {
            headers: { 
            'Content-Type': 'application/json'   
        }})
        return res.data
    } catch (error) {
        throw error
    }
}
