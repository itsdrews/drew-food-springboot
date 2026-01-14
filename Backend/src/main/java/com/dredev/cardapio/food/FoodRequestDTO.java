package com.dredev.cardapio.food;

public record FoodRequestDTO(String title, String restaurant,String imageUrl, String type, Float price, Integer rating){}
