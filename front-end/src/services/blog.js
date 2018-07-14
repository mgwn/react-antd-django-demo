import { BASE_URL } from './config'

export const blogList = () => 
    fetch(BASE_URL + '/list').then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(json => json.data)
