package com.sept.rest.profile;

public class Profile {

	private String name;
	private int sid;
	private String course;
	private String bio;
	
	public Profile(String name, int sid, String course, String bio) {
		this.name = name;
		this.sid = sid;
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
	
	public int getSid() {
		return sid;
	}
	
	public String getCourse() {
		return course;
	}
	
	public String bio() {
		return bio;
	}
	
}
