package com.sept.rest.webservices.restfulwebservices.profile;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ProfileJpaResource {

	@Autowired
    private ProfileJpaRepository profileJpaRepository;

	@GetMapping("/jpa/users/search/{search}")
	public List<Profile> getSearch(@PathVariable String search) {
        return profileJpaRepository.search(search);
	}
}