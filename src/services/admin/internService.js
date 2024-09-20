import axios from "axios"

const userApi = axios.create({
    baseURL: 'http://localhost:8000/admin/intern',
})

export const fetchDataStagiaire = async (token) => {
    try {
        const res = await userApi.get('', {
            headers: {
            'Authorization': `Bearer ${token}`,  
            'Content-Type': 'application/json'   
        }})
        return res.data
    } catch (error) {
        throw error
    }
}

export const deleteIntern = async (id) => {
    try {
        const res = await userApi.delete(`/${id}`)
        return res      
    } catch (error) {
        throw error
    }
} 

