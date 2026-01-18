package com.dredev.cardapio.controller;

import com.dredev.cardapio.food.Food;
import com.dredev.cardapio.food.FoodRepository;
import com.dredev.cardapio.food.FoodRequestDTO;
import com.dredev.cardapio.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;
@CrossOrigin(
    origins = "http://localhost:5173",
    allowedHeaders = "*",
    methods = {
        RequestMethod.GET,
        RequestMethod.POST,
        RequestMethod.PUT,
        RequestMethod.PATCH,
        RequestMethod.DELETE,
        RequestMethod.OPTIONS
    }
)
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
        List<FoodResponseDTO> foods = foodRepository
        .findAll()
        .stream()
        .map(FoodResponseDTO::new)
        .collect(Collectors.toList());
        return foods;


    }
    @GetMapping("/{id}")
    public FoodResponseDTO getById(@PathVariable Long id){
        Food food = foodRepository.findById(id).orElseThrow(()->
                                        new ResponseStatusException(HttpStatus.NOT_FOUND,"Food not found!"));

        return new FoodResponseDTO(food);
    }

    @DeleteMapping("/{id}")
    public void deleteFood(@PathVariable Long id) {
        if (!foodRepository.existsById(id)) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Food not found with id: " + id
            );
        }

        foodRepository.deleteById(id);
    }
    @PatchMapping("/{id}")
    public void patchFood(@PathVariable Long id, @RequestBody FoodRequestDTO data) {

        Food food = foodRepository.findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Food not found with id: " + id
                        )
                );

        if (data.title() != null) {
            food.setTitle(data.title());
        }

        if (data.imageUrl() != null) {
            food.setImageUrl(data.imageUrl());
        }

        if (data.price() != null) {
            food.setPrice(data.price());
        }

        if (data.rating() != null) {
            food.setRating(data.rating());
        }

        if (data.type() != null) {
            food.setType(data.type());
        }

        if (data.restaurant() != null) {
            food.setRestaurant(data.restaurant());
        }

        foodRepository.save(food);
        }   

}
