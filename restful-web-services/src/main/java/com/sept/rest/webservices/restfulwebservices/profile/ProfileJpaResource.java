package com.sept.rest.webservices.restfulwebservices.profile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.sept.rest.webservices.restfulwebservices.login.Login;
import com.sept.rest.webservices.restfulwebservices.login.LoginJpaRepository;

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

    @Autowired
    private LoginJpaRepository loginJpaRepository;

	@GetMapping("/jpa/users/search/{search}")
	public List<Profile> getSearch(@PathVariable String search) {
        // If searching by student ID
        if (search.toLowerCase().charAt(0) == 's' && Character.isDigit(1)) {
            Optional<Login> login = loginJpaRepository.findById(search);
            if (!login.isPresent()) {
                return null;
            } else {
                List<Profile> list = new ArrayList<Profile>();
                list.add(login.get().getProfile());
                return list;
            }
        // If searching by name
        } else {
            return profileJpaRepository.search(search);
        }
    }
    
    @GetMapping("/jpa/users/search/getd/{search}")
    public String getSearchId(@PathVariable String search) {
        return profileJpaRepository.findByName(search);
    }
}