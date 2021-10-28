import axios from 'axios'

export default async function getCategories(){
    return (await axios.get('http://localhost:3001/categories')).data
}
