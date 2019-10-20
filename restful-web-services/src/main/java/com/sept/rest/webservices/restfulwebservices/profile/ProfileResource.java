package com.sept.rest.webservices.restfulwebservices.profile;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ProfileResource {

	@Autowired
	private ProfileHardcodedService profileService;
	
	@GetMapping("/users/profile/{sid}")
	public Profile getProfile(@PathVariable long sid) {
		return profileService.getProfile(sid);
	}

	@PutMapping("/users/profile/{sid}")
	public ResponseEntity<Void> updateProfile(@PathVariable long sid, @RequestBody Map<String, String> param) {
		profileService.updateProfile(sid, param.get("name"), param.get("course"), param.get("bio"));

		return ResponseEntity.noContent().build();
	}

	@GetMapping("/users/search/{search}")
	public List<Profile> getSearch(@PathVariable String search) {
		return profileService.getProfiles(search);
	}
}
