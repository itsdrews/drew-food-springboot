package com.dredev.cardapio.food;

public record FoodResponseDTO(Long id, String title, String imageUrl, Integer price) {

    public FoodResponseDTO(Food food){
        this(food.getId(), food.getTitle(), food.getImageUrl(), food.getPrice());

    }
}
