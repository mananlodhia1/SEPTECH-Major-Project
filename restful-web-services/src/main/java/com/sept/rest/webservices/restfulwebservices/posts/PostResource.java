package com.sept.rest.webservices.restfulwebservices.posts;
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PostResource {

	@Autowired
	private PostHardcodedService postService;

	@GetMapping("/users/{username}/posts")
	public List<Post> getAllPosts(@PathVariable String username) {
		return postService.findAll();
	}
	
	@GetMapping("/users/{username}/posts/{id}")
	public Post getPost(@PathVariable String username, @PathVariable long id) {
		return postService.findById(id);
	}


	// DELETE /users/{username}/posts/{id}
	@DeleteMapping("/users/{username}/posts/{id}")
	public ResponseEntity<Void> deletePost(@PathVariable String username, @PathVariable long id) {

		Post post = postService.deleteById(id);

		if (post != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}
	
	//Edit/Update a post
	//PUT /users/{user_name}/posts/{todo_id}
	@PutMapping("/users/{username}/posts/{id}")
	public ResponseEntity<Post> updatePost(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Post post){
		
		Post postUpdated = postService.save(post);
		
		return new ResponseEntity<Post>(post, HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/posts")
	public ResponseEntity<Void> updatePost(
			@PathVariable String username, @RequestBody Post post){
		
		Post createdPost = postService.save(post);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdPost.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}