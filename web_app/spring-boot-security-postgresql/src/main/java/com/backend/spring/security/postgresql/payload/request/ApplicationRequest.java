package com.backend.spring.security.postgresql.payload.request;


import javax.validation.constraints.*;
 
public class ApplicationRequest {

    @NotBlank
	private String Positions;

    @NotNull
    private long userid;
   
    public String getPositions() { return Positions;}

    public void setPositions(String Positions) {
        this.Positions = Positions;
    }

    public long getUser() { return userid;}

    public void setuser(long user) {
        this.userid = user;
    }
    
}
