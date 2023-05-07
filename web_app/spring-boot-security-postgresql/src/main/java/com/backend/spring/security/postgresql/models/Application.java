package com.backend.spring.security.postgresql.models;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Entity
@Table(	name = "Applications")
public class Application {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    @NotNull
    private long userid;


    @NotBlank
    @Column(columnDefinition="TEXT")
	private String Positions;

	public Application() {
	}

	public Application(long u, String Position ) {
		this.userid = u;
        this.Positions = Position;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public long getUser() { return userid;}

    public void setUser(long user) { this.userid = user;}

    public String getPositions() { return Positions;}

    public void setPositions(String Positions) {
        this.Positions = Positions;
    }
    
}

