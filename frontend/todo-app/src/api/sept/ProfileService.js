import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class ProfileService {

    retrieveProfile(sid) {
        return axios.get(`${API_URL}/users/profile/${sid}`);
    }
    
    retrieveSearch(search) {
        return axios.get(`${API_URL}/users/search/${search}`);
    }
}

export default new ProfileService();
