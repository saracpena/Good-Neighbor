package com.goodneighbor.controller;

import java.util.List;

import com.goodneighbor.model.Disclaimer;
import com.goodneighbor.service.IDisclaimerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DisclaimerController {

    @Autowired
    private IDisclaimerService disclaimerService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/disclaimers")
    public List<Disclaimer> findDisclaimers() {

        return disclaimerService.findAll();
    }

}
