package com.dredev.cardapio.controller;

import com.dredev.cardapio.food.Food;
import com.dredev.cardapio.food.FoodRepository;
import com.dredev.cardapio.food.FoodRequestDTO;
import com.dredev.cardapio.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/food")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data) {
        Food newFood = new Food(data);
        foodRepository.save(newFood);
        return;

    }
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll(){
        List<FoodResponseDTO> foods = foodRepository.findAll().stream().map(FoodResponseDTO::new).collect(Collectors.toList());
        return foods;


    }

}
