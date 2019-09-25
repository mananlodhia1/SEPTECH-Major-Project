package com.sept.rest.webservices.restfulwebservices.profile;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ProfileResource {

	@Autowired
	private ProfileHardcodedService profileService;
	
	@GetMapping("/users/profile/{sid}")
	public Profile getProfile(@PathVariable long sid) {
		return profileService.getProfile(sid);
	}

	@GetMapping("/users/search/{username}")
	public List<Profile> getSearch(@PathVariable String username) {
		return profileService.getProfiles(username);
		// return profileService.getProfiles(username);
	}
}
