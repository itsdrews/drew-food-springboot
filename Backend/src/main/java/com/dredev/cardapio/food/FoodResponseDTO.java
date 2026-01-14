package com.dredev.cardapio.food;

public record FoodResponseDTO(Long id, String title,String restaurant, String imageUrl,String type, Float price,Integer rating) {

    public FoodResponseDTO(Food food){
        this(food.getId(), food.getTitle(), food.getRestaurant(),food.getImageUrl(),food.getType(),food.getPrice(),food.getRating());

    }
}
