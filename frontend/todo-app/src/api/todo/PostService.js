import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class PostService {

    retrieveAllPosts(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/posts`);
    }

    retrievePost(name, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/posts/${id}`);
    }

    deletePost(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/posts/${id}`);
    }

    updatePost(name, id, post) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/posts/${id}`, post);
    }

    createPost(name, post) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/posts/`, post);
    }

}

export default new PostService()