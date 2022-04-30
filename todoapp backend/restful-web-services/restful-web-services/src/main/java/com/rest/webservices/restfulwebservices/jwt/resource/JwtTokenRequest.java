package com.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
//    {
//    	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXJ5YSIsImV4cCI6MTYxOTMyNzcwNCwiaWF0IjoxNjE4NzIyOTA0fQ.t7R8ODKHIV4iXx66GfxPBDuEiN6nA2cWlg0QeEQE1ho0fb_25uUg-g73p76Ka8Xo2fO6Oem6n2wi2jcARpeCTQ"
//    }
    
//   Refereshed token
//   {
//	   "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXJ5YSIsImV4cCI6MTYxOTMyODA4MCwiaWF0IjoxNjE4NzIzMjgwfQ.UWQFT5b_JCxRQejJg9lhXREVS8iin21wfQu6zz_50WvlRPCnC8dW5UpqYvJ41tz1hacz8qTK2kx--1F-60yuFg"
//   }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

