package com.sept.rest.webservices.restfulwebservices.login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginJpaRepository extends JpaRepository<Login, Long>{
    
}