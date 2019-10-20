package com.sept.rest.webservices.restfulwebservices.profile;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Profile {
	@Id
	@GeneratedValue
	private long id;

	private String name;
	private String course;
	private String bio;
	
	public Profile(String name, String course, String bio) {
		this.name = name;
		this.course = course;
		this.bio = bio;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setCourse(String course) {
		this.course = course;
	}
	
	public void setBio(String bio) {
		this.bio = bio;
	}
	
	public String getName() {
		return name;
	}
	
	public String getCourse() {
		return course;
	}
	
	public String getBio() {
		return bio;
	}
	
}
