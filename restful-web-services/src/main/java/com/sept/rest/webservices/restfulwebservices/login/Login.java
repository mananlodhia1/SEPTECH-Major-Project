package com.sept.rest.webservices.restfulwebservices.login;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login {
    @Id
    long sid;
    String password;

    public Login(String username, String password) {
        sid = (long) Integer.valueOf(username.substring(1));
        this.password = password;
    }

    /**
     * @return the sid
     */
    public long getSid() {
        return sid;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param sid the sid to set
     */
    public void setSid(long sid) {
        this.sid = sid;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }
}