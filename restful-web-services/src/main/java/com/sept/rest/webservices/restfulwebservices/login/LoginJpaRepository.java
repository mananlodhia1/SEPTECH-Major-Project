package com.sept.rest.webservices.restfulwebservices.login;

import java.util.List;

import com.sept.rest.webservices.restfulwebservices.todo.Todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginJpaRepository extends JpaRepository<Login, Long>{
    List<Login> findBySid(long sid);
}