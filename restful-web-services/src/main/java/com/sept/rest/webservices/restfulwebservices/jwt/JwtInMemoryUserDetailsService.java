package com.sept.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import com.sept.rest.webservices.restfulwebservices.login.Login;
import com.sept.rest.webservices.restfulwebservices.login.LoginJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
  static long id = 1L;

  @Autowired
  LoginJpaRepository loginJpaRepository;

  static {
    inMemoryUserList.add(new JwtUserDetails("sept",
        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    Optional<Login> login = loginJpaRepository.findById(username);

    if (!login.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    String encryptedPassword = encoder.encode(login.get().getPassword());

    return new JwtUserDetails(login.get().getSid(), encryptedPassword, "ROLE_USER_2");
  }

  // Deprecated:
  // public void createUser(String username, String password) {
  //   BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
  //   String encryptedPassword = encoder.encode(password);

  //   id++;
  //   inMemoryUserList.add(new JwtUserDetails(username, encryptedPassword, "ROLE_USER_2"));
  // }

  // @PostConstruct
  // public void loadAllUsers() {
  //   List<Login> users = loginJpaRepository.findAll();
  //   for (Login user : users) {
  //     createUser(user.getSid(), user.getPassword());
  //   }
  // }

}