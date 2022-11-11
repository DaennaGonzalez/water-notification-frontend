import axios from 'axios'
const apiInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})
apiInstance.defaults.headers.common["Content-Type"] = 'application/json';
export default apiInstance