import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class ProfileService {

    retrieveProfile(sid) {
        return axios.get(`${API_URL}/users/profile/${sid}`);
    }
    
    retrieveSearchByName(search) {
        return axios.get(`${API_URL}/users/search/${search}`);
    }

    updateProfile(sid, name, course, bio) {
        return axios.put(`${API_URL}/users/profile/${sid}`, {
            "name": name,
            "course": course,
            "bio": bio
        })
    }

    register(username, password, name, course, bio) {
        return axios.post(`${JPA_API_URL}/users/register`, {
            "sid": username,
            "password": password,
            "name": name,
            "course": course,
            "bio": bio
        });
    }
}

export default new ProfileService();
