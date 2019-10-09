package com.sept.rest.webservices.restfulwebservices.profile;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProfileHardcodedService {

	private static List<Profile> profiles = new ArrayList<>();
	
	static {
		profiles.add(new Profile(3686150, "eyup keskin", "SoftEng", "Back End test"));
		profiles.add(new Profile(3686151, "eyup keskin", "SoftEng", "Back End test"));
		profiles.add(new Profile(36378141, "manan lodhia", "SoftEng", "Team Member"));
		profiles.add(new Profile(3670123, "vinesh gobin", "SoftEng", "Almighty scrum master"));
		profiles.add(new Profile(3688882, "shanuk rubera", "SoftEng", "Team Member"));
		profiles.add(new Profile(3676150, "eyup lobira", "SoftEng", "Eyup's clone"));
	}
	
	/**
	 * @param sid Student ID being queried
	 * 
	 * @return Profile with the input student ID
	 */
	public Profile getProfile(long sid) {
		for (Profile profile : profiles) {
			if (profile.getSid() == sid) {
				return profile;
			}
		}
		
		return null;
	}

	/**
	 * @param search the username or student ID being queried
	 * 
	 * @return the list of profiles that containt input username
	 */
	public List<Profile> getProfiles(String search) {
		List<Profile> results = new ArrayList<Profile>();
		// Following variables only used if student ID is entered
		Profile resultProfile;
		long sid;

		// Check if search input is in student ID format
		if (search.length() >= 2 && Character.isDigit(search.charAt(1))) {
			sid = (long) Integer.parseInt(search.substring(1));
			if ((resultProfile = getProfile(sid)) != null) {
				results.add(resultProfile);
			}
		// Else search through usernames
		} else {
			for (Profile profile : profiles) {
				if (profile.getName().contains(search)) {
					results.add(profile);
				}
			}
		}

		return results;
	}

	public void updateProfile(long sid, String name, String course, String bio) {
		Profile profile = getProfile(sid);
		profile.setName(name);
		profile.setCourse(course);
		profile.setBio(bio);
	}

	/**
	 * @return All profiles stored
	 */
	public List<Profile> getAll() {
		return profiles;
	}
}
