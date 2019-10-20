package com.sept.rest.webservices.restfulwebservices.login;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login {
    @Id
    String sid;
    String password;

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
     * @return the password
     */
    public String getPassword() {
        return password;
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