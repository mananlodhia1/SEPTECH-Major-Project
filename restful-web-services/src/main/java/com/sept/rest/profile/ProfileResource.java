package com.sept.rest.profile;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProfileResource {

	@Autowired
	private static ArrayList<Profile> profiles = new ArrayList<Profile>();
	
	@GetMapping("/users/{sid}/profile")
	public Profile getProfile(@PathVariable int sid) {
		System.out.println("working");
		Profile profile = new Profile("Eyup Keskin", 3686150, "softEng", "I am depressed");
		return profile;
		// profiles.add(profile);
		// for (Profile prof : profiles) {
		// 	if (prof.getSid() == sid) {
		// 		System.out.println("Retrieved");
		// 		return prof;
		// 	}
		// }
		// return null;
	}
	
	@PutMapping("/users/{sid}/profile")
	public ResponseEntity<Void> createProfile(@PathVariable int sid, @RequestBody Profile profile) {
		profiles.add(profile);
		System.out.println("User Created");
		
		return ResponseEntity.ok().build();
	}
	
	
}
