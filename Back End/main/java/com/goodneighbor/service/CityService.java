package com.goodneighbor.service;

import com.goodneighbor.model.City;
import com.goodneighbor.repository.CityRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityService implements ICityService {

    @Autowired
    private CityRepository repository;

    @Override
    public List<City> findAll() {

        return (List<City>) repository.findAll();
    }
}