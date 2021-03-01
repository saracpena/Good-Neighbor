package com.goodneighbor.controller;

import java.util.List;

import com.goodneighbor.model.Neighbor;
import com.goodneighbor.service.INeighborService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NeighborController {

    @Autowired
    private INeighborService neighborService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/neighbors")
    public List<Neighbor> findNeighbors() {

        return neighborService.findAll();
    }

}
