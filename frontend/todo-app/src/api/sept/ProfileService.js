import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class ProfileService {

    retrieveProfile(sid) {
        return axios.get(`${JPA_API_URL}/users/${sid}/profile`);
    }
    
}

export default new ProfileService();
