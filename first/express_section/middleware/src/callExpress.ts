import axios from 'axios'
const domain = "http://localhost:5000"



axios.get(domain+"/get_data").then(response =>{
    console.log(response.data)
})