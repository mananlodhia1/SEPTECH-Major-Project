package com.sept.rest.webservices.restfulwebservices.profile;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProfileHardcodedService {

	private static List<Profile> profiles = new ArrayList<>();
	
	public Profile getProfile(int sid) {
		Profile profile = new Profile(3686150, "Eyup Keskin", "SoftEng", "Back End test");
		return profile;
	}
}
