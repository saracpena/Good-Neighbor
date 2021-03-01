package com.goodneighbor.controller;

import com.goodneighbor.model.City;
import com.goodneighbor.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CityController {

    @Autowired
    private ICityService cityService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/cities")
    public List<City> findCities() {

        return cityService.findAll();
    }
}