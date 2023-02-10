import axios from 'axios'

const instance = axios.create({
    //API (cloud function) URL
    baseURL: 'https://us-central1-clone-1f7fc.cloudfunctions.net/api'
})
// TESTING URL(local)
// http://127.0.0.1:5001/clone-1f7fc/us-central1/ap

export default instance;