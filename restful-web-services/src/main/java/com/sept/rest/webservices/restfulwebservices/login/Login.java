package com.sept.rest.webservices.restfulwebservices.login;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.sept.rest.webservices.restfulwebservices.profile.Profile;

@Entity
public class Login {
    @Id
    String sid;
    String password;

    @OneToOne
    Profile profile;

    public Login(String sid, String password, String name, String course, String bio) {
        this.sid = sid;
        this.password = password;
        profile.setName(name);
        profile.setCourse(course);
        profile.setBio(bio);
    }

    /**
     * @return the sid
     */
    public String getSid() {
        return sid;
    }

    /**
     * @return the username of the profile associated with the login
     */
    public String getUsername() {
        return profile.getName();
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @return the profile
     */
    public Profile getProfile() {
        return profile;
    }

    /**
     * @param sid the sid to set
     */
    public void setSid(String sid) {
        this.sid = sid;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }
}