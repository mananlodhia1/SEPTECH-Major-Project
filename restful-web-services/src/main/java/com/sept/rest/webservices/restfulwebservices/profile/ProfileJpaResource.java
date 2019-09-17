package com.sept.rest.webservices.restfulwebservices.profile;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ProfileJpaResource {

	@Autowired
	private ProfileHardcodedService profileService;
	
	@Autowired
	private ProfileJpaRepository profileJpaRepository;
	
	@GetMapping("/jpa/users/{sid}/profile")
	public Profile getProfile(@PathVariable int sid) {
		return profileService.getProfile(sid);
	}

	@GetMapping("/jpa/users/{sid}/search/{username}")
	public List<Profile> getSearch(@PathVariable String username) {
		return profileService.getProfiles(username);
	}
}
