import axios from  'axios'

const APIRequest= axios.create({
    baseURL: 'https://servidor-store-tech.herokuapp.com'
})

export default APIRequest