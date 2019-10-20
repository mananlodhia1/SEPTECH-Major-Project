import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'
import AuthenticationService from '../../components/sept/AuthenticationService';

class ProfileService {

    retrieveProfile() {
        var sid = AuthenticationService.getLoggedInUserName();
        return axios.get(`${JPA_API_URL}/users/profile/${sid}`);
    }

    retrieveUsername() {
        var sid = AuthenticationService.getLoggedInUserName();
        return axios.get(`${JPA_API_URL}/users/profile/name/${sid}`);
    }
    
    retrieveSearch(search) {
        return axios.get(`${JPA_API_URL}/users/search/${search}`);
    }

    retrieveSearchId(search) {
        return axios.get(`${JPA_API_URL}/users/search/getid/${search}`);
    }

    updateProfile(sid, name, course, bio) {
        return axios.put(`${JPA_API_URL}/users/profile/${sid}`, {
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
