
import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vue-demos-31b4b-default-rtdb.firebaseio.com'
})


export default journalApi


