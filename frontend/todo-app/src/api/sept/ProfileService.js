import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class ProfileService {

    retrieveProfile(sid) {
        return axios.get(`${API_URL}/users/profile/${sid}`);
    }
    
    retrieveSearchByName(search) {
        return axios.get(`${API_URL}/users/search/${search}`);
    }

    register(username, password) {
        return axios.post(`${API_URL}/users/registration`, {
            username,
            password
        });
    }
}

export default new ProfileService();
