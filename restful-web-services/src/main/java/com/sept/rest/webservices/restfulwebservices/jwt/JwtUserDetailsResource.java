package com.sept.rest.webservices.restfulwebservices.jwt;

import org.springframework.web.bind.annotation.RestController;

import com.sept.rest.webservices.restfulwebservices.login.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JwtUserDetailsResource {

    @Autowired
    JwtInMemoryUserDetailsService jwtInMemoryUserDetailsService;

    // Deprecated:
    // @PostMapping("/users/register")
    // public ResponseEntity<Void> createLogin(@RequestBody Login login) {
    //     jwtInMemoryUserDetailsService.createUser(("s" + String.valueOf(login.getSid())), login.getPassword());

    //     return ResponseEntity.noContent().build();
    // }
}