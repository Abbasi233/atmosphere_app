package com.backend.spring.security.postgresql.payload.request;


import javax.validation.constraints.*;
 
public class PositionRequest {

    @NotBlank
	@Size(max = 30)
	private String name;

    @NotBlank
	@Size(max = 30)
	private String brand;

	@NotBlank
	@Size(max = 4)
	private String size;

	@NotBlank
	@Size(max = 20)
	private String color;

    @NotBlank
	private int price;

    @NotBlank
	private int rating;

	private String image;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

    public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

    public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

    public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
}
