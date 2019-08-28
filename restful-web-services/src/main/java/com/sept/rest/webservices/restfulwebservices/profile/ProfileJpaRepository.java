package main.java.com.sept.rest.webservices.restfulwebservices.profile;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ProfileJpaRepository extends JpaRepository<Profile, Long>{
	List<Profile> findBySid(int sid);
}
