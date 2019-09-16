package main.java.com.sept.rest.webservices.restfulwebservices.profile;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProfileHardcodedService {

	private static List<Profile> profiles = new ArrayList<>();
	
	static {
		profiles.add(new Profile(3686150, "Eyup Keskin", "SoftEng", "Back End test"));
		profiles.add(new Profile(36378141, "Mana Lodhia", "SoftEng", "Team Member"));
		profiles.add(new Profile(3670123, "Vinesh Gobin", "SoftEng", "Almighty scrum master"));
		profiles.add(new Profile(3688882, "Shanuk Rubera", "SoftEng", "Team Member"));
	}
	
	public Profile getProfile(int sid) {
		for (Profile profile : profiles) {
			if (profile.getSid() == sid) {
				return profile;
			}
		}
		
		return null;
	}

	public List<Profile> getProfiles(String username) {
		List<Profile> results = new ArrayList<Profile>();

		for (Profile profile : profiles) {
			if (profile.getName().equals(username)) {
				results.add(profile);
			}
		}

		return results;
	}
}
