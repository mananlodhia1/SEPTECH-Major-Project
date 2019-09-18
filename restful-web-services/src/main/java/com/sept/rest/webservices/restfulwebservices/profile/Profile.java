package com.sept.rest.webservices.restfulwebservices.profile;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Profile {
	@Id
	private long sid;
	private String name;
	private String course;
	private String bio;
	
	public Profile(long sid, String name, String course, String bio) {
		this.sid = sid;
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
	
	public long getSid() {
		return sid;
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
