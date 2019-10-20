package com.sept.rest.webservices.restfulwebservices.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginJpaResource {

    @Autowired
    LoginJpaRepository loginJpaRepository;

    @PostMapping("/jpa/users/register")
    public ResponseEntity<Void> register(@RequestBody Login login) {
        System.out.println("Username: " + login.getSid() + ", password: " + login.getPassword());
        loginJpaRepository.save(login);

        return ResponseEntity.noContent().build();
    }
}