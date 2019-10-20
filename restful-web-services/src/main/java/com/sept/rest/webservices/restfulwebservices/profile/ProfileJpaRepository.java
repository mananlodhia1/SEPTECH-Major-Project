package com.sept.rest.webservices.restfulwebservices.profile;

import java.util.List;

import com.sept.rest.webservices.restfulwebservices.login.Login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileJpaRepository extends JpaRepository<Profile, Long>{
	List<Long> findById(long id);

	@Query ("SELECT p FROM Profile p WHERE p.name LIKE '%:#{[0]}%'")
	List<Profile> search(String search);
}
