import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class ProfileService {

    retrieveProfile(sid) {
        return axios.get(`${API_URL}/users/${sid}/profile`);
    }

    createProfile(sid, profile) {
        return axios.put(`${API_URL}/users/${sid}/profile`, profile);
    }
    
    
}

export default new ProfileService();
