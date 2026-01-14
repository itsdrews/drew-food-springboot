package com.dredev.cardapio.food;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.beans.factory.annotation.Autowired;

@Table(name="foods") 
@Entity(name="foods")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String restaurant;

    private String title;

    private String imageUrl;

    private String type;

    private Float price;

    private Integer rating;

    public Food(FoodRequestDTO data) {
        this.title = data.title();
        this.imageUrl = data.imageUrl();
        this.price = data.price();
        this.rating = data.rating();
        this.type = data.type();
        this.restaurant= data.restaurant();
    }

}
