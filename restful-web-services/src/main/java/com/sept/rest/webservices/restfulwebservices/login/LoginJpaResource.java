package com.sept.rest.webservices.restfulwebservices.login;

import java.util.Map;

import com.sept.rest.webservices.restfulwebservices.profile.Profile;
import com.sept.rest.webservices.restfulwebservices.profile.ProfileJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginJpaResource {

    @Autowired 
    private ProfileJpaRepository profileJpaRepository;

    @Autowired
    private LoginJpaRepository loginJpaRepository;

    @PostMapping("/jpa/users/register")
    public ResponseEntity<Void> register(@RequestBody Map<String, String> param) {
        System.out.printf("%s %s %s %s %s", param.get("sid"), param.get("password"), param.get("name"), param.get("course"), param.get("bio"));
        Login login = new Login(param.get("sid"), param.get("password"));
        loginJpaRepository.save(login);

        Profile profile = new Profile(param.get("name"), param.get("course"), param.get("bio"));
        login.setProfile(profile);
        profileJpaRepository.save(login.getProfile());
        loginJpaRepository.save(login);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/jpa/users/profile/{sid}")
	public Profile getProfile(@PathVariable String sid) {
        Login login = loginJpaRepository.findById(sid).get();
        return login.getProfile();
    }
    
    @GetMapping("/jpa/users/profile/name/{sid}")
	public String getProfileName(@PathVariable String sid) {
        Login login = loginJpaRepository.findById(sid).get();
        return login.getProfile().getName();
    }

	@PutMapping("/jpa/users/profile/{sid}")
	public ResponseEntity<Void> updateProfile(@PathVariable String sid, @RequestBody Map<String, String> param) {
        Login login = loginJpaRepository.findById(sid).get();
        Profile profile = login.getProfile();
        profile.setName(param.get("name"));
        profile.setCourse(param.get("course"));
        profile.setBio(param.get("bio"));

		return ResponseEntity.noContent().build();
	}
}