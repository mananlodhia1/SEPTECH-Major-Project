package com.sept.rest.webservices.restfulwebservices.login;

import javax.annotation.Generated;
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

    public Login() {}

    public Login(String sid, String password) {
        this.sid = sid;
        this.password = password;
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
     * @param profile the profile to set
     */
    public void setProfile(Profile profile) {
        this.profile = profile;
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