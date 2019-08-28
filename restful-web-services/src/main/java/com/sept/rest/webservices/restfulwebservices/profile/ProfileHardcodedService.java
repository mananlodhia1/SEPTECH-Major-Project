package main.java.com.sept.rest.webservices.restfulwebservices.profile;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProfileHardcodedService {

	private static List<Profile> profiles = new ArrayList<>();
	
	static {
		profiles.add(new Profile(3686150, "Eyup Keskin", "SoftEng", "Back End test"));
	}
	
	public Profile getProfile(int sid) {
		for (Profile profile : profiles) {
			if (profile.getSid() == sid) {
				return profile;
			}
		}
		
		return null;
	}
}
