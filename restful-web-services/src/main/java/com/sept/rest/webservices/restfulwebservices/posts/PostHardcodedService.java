package com.sept.rest.webservices.restfulwebservices.posts;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PostHardcodedService {

	private static List<Post> posts = new ArrayList<>();
	private static long idCounter = 0;

	static {
		posts.add(new Post(++idCounter, "sept", "My first post! :D", new Date()));
		posts.add(new Post(++idCounter, "sept", "Another post!", new Date()));
		posts.add(new Post(++idCounter, "sept", "Third post?", new Date()));
	}

	public List<Post> findAll() {
		return posts;
	}
	
	public Post save(Post post) {
		if(post.getId()==-1 || post.getId()==0) {
			post.setId(++idCounter);
			posts.add(post);
		} else {
			deleteById(post.getId());
			posts.add(post);
		}
		return post;
	}

	public Post deleteById(long id) {
		Post post = findById(id);

		if (post == null)
			return null;

		if (posts.remove(post)) {
			return post;
		}

		return null;
	}

	public Post findById(long id) {
		for (Post post : posts) {
			if (post.getId() == id) {
				return post;
			}
		}

		return null;
	}
}

