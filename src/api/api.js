import axios from 'axios'

export const mealsAPI = {
    getList() {
        return axios.get('db.json').then(response => response.data)
    }
}